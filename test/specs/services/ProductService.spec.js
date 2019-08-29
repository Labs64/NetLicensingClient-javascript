import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import query from 'query-string';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import productFactory from 'test@/factories/product';
import { fix as discountFixFactory, percent as discountPercentFactory } from 'test@/factories/productDiscount';
import Context from '@/vo/Context';
import Product from '@/entities/Product';
import ProductDiscount from '@/entities/ProductDiscount';
import ProductService from '@/services/ProductService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';


describe('services/ProductService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const fakeProduct = productFactory();
        const fakeFixDiscount = discountFixFactory();
        const fakePercentDiscount = discountPercentFactory();

        const product = new Product(fakeProduct);

        product.addDiscount(new ProductDiscount(fakeFixDiscount));
        product.addDiscount(new ProductDiscount(fakePercentDiscount));

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
            .reply((config) => {
                const params = query.parse(config.data);

                if (!params[Constants.NAME]) {
                    return [400, error('MalformedRequestException', 'Product name is required')];
                }

                const discount = params.discount.map((v) => {
                    const [totalPrice, currency, amount] = v.split(';');
                    if (amount.indexOf('%') > -1) {
                        return { totalPrice, currency, amountPercent: amount };
                    }

                    return { totalPrice, currency, amountFix: amount };
                });

                return [200, response({ ...params, discount })];
            });

        const entity = await ProductService.create(context, product);

        expect(entity instanceof Product).toBe(true);
        expect(entity.getProperty('number', null)).toBe(fakeProduct.number);
        expect(entity.getProperty('name', null)).toBe(fakeProduct.name);
        expect(entity.getProperty('active', null)).toBe(fakeProduct.active);
        expect(entity.getProperty('version', null)).toBe(fakeProduct.version);
        expect(entity.getProperty('description', null)).toBe(fakeProduct.description);
        expect(entity.getProperty('licensingInfo', null)).toBe(fakeProduct.licensingInfo);
        expect(entity.getProperty('licenseeAutoCreate', null)).toBe(fakeProduct.licenseeAutoCreate);
        expect(entity.getProperty('custom_property', null)).toBe(fakeProduct.custom_property);
        expect(entity.getProductDiscounts().length).toBe(2);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const fakeProduct = productFactory();
            const fakeFixDiscount = discountFixFactory();
            const fakePercentDiscount = discountPercentFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${fakeProduct.number}`)
                .reply(200, response({ ...fakeProduct, discount: [fakeFixDiscount, fakePercentDiscount] }));

            const entity = await ProductService.get(context, fakeProduct.number);

            expect(entity instanceof Product).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakeProduct.number);
            expect(entity.getProperty('name', null)).toBe(fakeProduct.name);
            expect(entity.getProperty('active', null)).toBe(fakeProduct.active);
            expect(entity.getProperty('version', null)).toBe(fakeProduct.version);
            expect(entity.getProperty('description', null)).toBe(fakeProduct.description);
            expect(entity.getProperty('licensingInfo', null)).toBe(fakeProduct.licensingInfo);
            expect(entity.getProperty('licenseeAutoCreate', null)).toBe(fakeProduct.licenseeAutoCreate);
            expect(entity.getProperty('custom_property', null)).toBe(fakeProduct.custom_property);
            expect(entity.getProductDiscounts().length).toBe(2);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested product does not exist']));

            try {
                await ProductService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', () => {
        it('should return entities array', async () => {
            const fakeProducts = productFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
                .reply(200, response(fakeProducts));

            const list = await ProductService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const fakeProduct = fakeProducts[k];
                expect(entity.getProperty('number', null)).toBe(fakeProduct.number);
                expect(entity.getProperty('name', null)).toBe(fakeProduct.name);
                expect(entity.getProperty('active', null)).toBe(fakeProduct.active);
                expect(entity.getProperty('version', null)).toBe(fakeProduct.version);
                expect(entity.getProperty('description', null)).toBe(fakeProduct.description);
                expect(entity.getProperty('licensingInfo', null)).toBe(fakeProduct.licensingInfo);
                expect(entity.getProperty('licenseeAutoCreate', null)).toBe(fakeProduct.licenseeAutoCreate);
                expect(entity.getProperty('custom_property', null)).toBe(fakeProduct.custom_property);
            });
        });

        it('should has pagination', async () => {
            const fakeProducts = productFactory(1000);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
                .reply(200, response(fakeProducts, 2, 10));

            const list = await ProductService.list(context, { page: 2, items: 10 });

            expect(list.getPageNumber()).toBe(2);
            expect(list.getItemsNumber()).toBe(10);
            expect(list.getTotalPages()).toBe(100);
            expect(list.getTotalItems()).toBe(1000);
            expect(list.hasNext()).toBe(true);
        });

        it('check filter', async () => {
            const fakeProducts = productFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
                .reply(200, response(fakeProducts));

            // if filter parameter is object
            await ProductService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await ProductService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        const fakeProduct = productFactory();
        const fakeFixDiscount = discountFixFactory();
        const fakePercentDiscount = discountPercentFactory();
        const fakeDiscountForUpdate = discountFixFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${fakeProduct.number}`)
            .reply(200, response({ ...fakeProduct, discount: [fakeFixDiscount, fakePercentDiscount] }));

        const product = await ProductService.get(context, fakeProduct.number);

        product.setProperty('name', 'MY-NAME-UPDATED');
        fakeProduct.name = 'MY-NAME-UPDATED';

        product.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');
        fakeProduct.custom_property = 'MY-CUSTOM-PROPERTY-UPDATED';

        product.addDiscount(new ProductDiscount(fakeDiscountForUpdate));

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${fakeProduct.number}`)
            .reply((config) => {
                const params = query.parse(config.data);
                const discount = params.discount.map((v) => {
                    const [totalPrice, currency, amount] = v.split(';');
                    if (amount.indexOf('%') > -1) {
                        return { totalPrice, currency, amountPercent: amount };
                    }
                    return { totalPrice, currency, amountFix: amount };
                });

                return [200, response({ ...params, discount })];
            });

        const updated = await ProductService.update(context, product.getProperty('number'), product);

        expect(updated instanceof Product).toBe(true);
        expect(updated.getProperty('name', null)).toBe(fakeProduct.name);
        expect(updated.getProperty('custom_property', null)).toBe(fakeProduct.custom_property);
        expect(updated.getProductDiscounts().length).toBe(3);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${number}`)
            .reply(204);

        await ProductService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

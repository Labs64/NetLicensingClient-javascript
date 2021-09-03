import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import productFactory from 'test@/factories/product';
import { fix as discountFixFactory, percent as discountPercentFactory } from 'test@/factories/productDiscount';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';
import Context from '@/vo/Context';
import Product from '@/entities/Product';
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
        const product = productFactory();
        const fixDiscount = discountFixFactory();
        const percentDiscount = discountPercentFactory();

        product.addDiscount(fixDiscount);
        product.addDiscount(percentDiscount);

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
            .reply(200, new Response(
                new Item({ ...product, discount: [fixDiscount, percentDiscount] }, 'Product'),
            ));

        const entity = await ProductService.create(context, product);

        expect(entity instanceof Product).toBe(true);
        expect(entity.getProperty('number', null)).toBe(product.number);
        expect(entity.getProperty('name', null)).toBe(product.name);
        expect(entity.getProperty('active', null)).toBe(product.active);
        expect(entity.getProperty('version', null)).toBe(product.version);
        expect(entity.getProperty('description', null)).toBe(product.description);
        expect(entity.getProperty('licensingInfo', null)).toBe(product.licensingInfo);
        expect(entity.getProperty('licenseeAutoCreate', null)).toBe(product.licenseeAutoCreate);
        expect(entity.getProperty('custom_property', null)).toBe(product.custom_property);
        expect(entity.getProductDiscounts().length).toBe(2);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const product = productFactory();
            const fixDiscount = discountFixFactory();
            const percentDiscount = discountPercentFactory();

            product.addDiscount(fixDiscount);
            product.addDiscount(percentDiscount);

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.number}`)
                .reply(200, new Response(
                    new Item({ ...product, discount: [fixDiscount, percentDiscount] }, 'Product'),
                ));

            const entity = await ProductService.get(context, product.number);

            expect(entity instanceof Product).toBe(true);
            expect(entity.getProperty('number', null)).toBe(product.number);
            expect(entity.getProperty('name', null)).toBe(product.name);
            expect(entity.getProperty('active', null)).toBe(product.active);
            expect(entity.getProperty('version', null)).toBe(product.version);
            expect(entity.getProperty('description', null)).toBe(product.description);
            expect(entity.getProperty('licensingInfo', null)).toBe(product.licensingInfo);
            expect(entity.getProperty('licenseeAutoCreate', null)).toBe(product.licenseeAutoCreate);
            expect(entity.getProperty('custom_property', null)).toBe(product.custom_property);
            expect(entity.getProductDiscounts().length).toBe(2);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(
                    new Info('Requested product does not exist', 'NotFoundException'),
                ));
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
            const products = productFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
                .reply(200, new Response(products.map((v) => new Item(v))));

            const list = await ProductService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const product = products[k];
                expect(entity.getProperty('number', null)).toBe(product.number);
                expect(entity.getProperty('name', null)).toBe(product.name);
                expect(entity.getProperty('active', null)).toBe(product.active);
                expect(entity.getProperty('version', null)).toBe(product.version);
                expect(entity.getProperty('description', null)).toBe(product.description);
                expect(entity.getProperty('licensingInfo', null)).toBe(product.licensingInfo);
                expect(entity.getProperty('licenseeAutoCreate', null)).toBe(product.licenseeAutoCreate);
                expect(entity.getProperty('custom_property', null)).toBe(product.custom_property);
            });
        });

        it('should has pagination', async () => {
            const products = productFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
                .reply(() => {
                    const response = new Response(products.map((v) => new Item(v)));
                    response.setPage(2, 10, 1000);

                    return [200, response];
                });

            const list = await ProductService.list(context, { page: 2, items: 10 });

            expect(list.getPageNumber()).toBe(2);
            expect(list.getItemsNumber()).toBe(10);
            expect(list.getTotalPages()).toBe(100);
            expect(list.getTotalItems()).toBe(1000);
            expect(list.hasNext()).toBe(true);
        });

        it('check filter', async () => {
            const products = productFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}`)
                .reply(200, new Response(products.map((v) => new Item(v))));

            // if filter parameter is object
            await ProductService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await ProductService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        let product = productFactory();
        const fixDiscount = discountFixFactory();
        const percentDiscount = discountPercentFactory();
        const discountForUpdate = discountFixFactory();

        product.addDiscount(fixDiscount);
        product.addDiscount(percentDiscount);

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.number}`)
            .reply(200, new Response(
                new Item({ ...product, discount: [fixDiscount, percentDiscount] }, 'Product'),
            ));

        product = await ProductService.get(context, product.number);

        product.setProperty('name', 'MY-NAME-UPDATED');
        product.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

        product.addDiscount(discountForUpdate);

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Product.ENDPOINT_PATH}/${product.number}`)
            .reply(200, new Response(
                new Item({ ...product, discount: [fixDiscount, percentDiscount, discountForUpdate] }, 'Product'),
            ));

        const updated = await ProductService.update(context, product.getProperty('number'), product);

        expect(updated instanceof Product).toBe(true);
        expect(updated.getProperty('name', null)).toBe(product.name);
        expect(updated.getProperty('custom_property', null)).toBe(product.custom_property);
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

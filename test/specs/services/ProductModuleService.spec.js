import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import query from 'query-string';
import Context from '@/vo/Context';
import ProductModule from '@/entities/ProductModule';
import ProductModuleService from '@/services/ProductModuleService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import productModuleFactory from 'test@/factories/productModule';
import NlicError from '../../../src/errors/NlicError';

describe('services/ProductModuleService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const fakeProductModule = productModuleFactory();

        const productModule = new ProductModule(fakeProductModule);

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
            .reply((config) => {
                const params = query.parse(config.data);
                if (!params[Constants.Product.PRODUCT_NUMBER]) {
                    return [400, error('MalformedRequestException', 'Product number is not provided')];
                }
                if (!params[Constants.NAME]) {
                    return [400, error('MalformedRequestException', 'Product module name is required')];
                }
                return [200, response(params)];
            });

        const entity = await ProductModuleService.create(context, 'some number', productModule);

        expect(entity instanceof ProductModule).toBe(true);
        expect(entity.getProperty('number', null)).toBe(fakeProductModule.number);
        expect(entity.getProperty('name', null)).toBe(fakeProductModule.name);
        expect(entity.getProperty('active', null)).toBe(fakeProductModule.active);
        expect(entity.getProperty('licensingModel', null)).toBe(fakeProductModule.licensingModel);
        expect(entity.getProperty('custom_property', null)).toBe(fakeProductModule.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const fakeProductModule = productModuleFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${fakeProductModule.number}`)
                .reply(200, response(fakeProductModule));

            const entity = await ProductModuleService.get(context, fakeProductModule.number);

            expect(entity instanceof ProductModule).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakeProductModule.number);
            expect(entity.getProperty('name', null)).toBe(fakeProductModule.name);
            expect(entity.getProperty('active', null)).toBe(fakeProductModule.active);
            expect(entity.getProperty('licensingModel', null)).toBe(fakeProductModule.licensingModel);
            expect(entity.getProperty('custom_property', null)).toBe(fakeProductModule.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested productModule does not exist']));

            try {
                await ProductModuleService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', () => {
        it('should return entities array', async () => {
            const fakeProductModules = productModuleFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
                .reply(200, response(fakeProductModules));

            const list = await ProductModuleService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const fakeProductModule = fakeProductModules[k];
                expect(entity.getProperty('number', null)).toBe(fakeProductModule.number);
                expect(entity.getProperty('name', null)).toBe(fakeProductModule.name);
                expect(entity.getProperty('active', null)).toBe(fakeProductModule.active);
                expect(entity.getProperty('licensingModel', null)).toBe(fakeProductModule.licensingModel);
                expect(entity.getProperty('custom_property', null)).toBe(fakeProductModule.custom_property);
            });
        });

        it('should has pagination', async () => {
            const fakeProductModules = productModuleFactory(1050);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
                .reply(200, response(fakeProductModules, 3, 50));

            const list = await ProductModuleService.list(context, { page: 3, items: 50 });

            expect(list.getPageNumber()).toBe(3);
            expect(list.getItemsNumber()).toBe(50);
            expect(list.getTotalPages()).toBe(21);
            expect(list.getTotalItems()).toBe(1050);
            expect(list.hasNext()).toBe(true);
        });

        it('check "filter parameter"', async () => {
            const fakeProductModules = productModuleFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
                .reply(200, response(fakeProductModules));

            // if filter parameter is object
            await ProductModuleService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await ProductModuleService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });


    it('check "update" method', async () => {
        const fakeProductModule = productModuleFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${fakeProductModule.number}`)
            .reply(200, response(fakeProductModule));

        const productModule = await ProductModuleService.get(context, fakeProductModule.number);

        productModule.setProperty('name', 'MY-NAME-UPDATED');
        fakeProductModule.name = 'MY-NAME-UPDATED';

        productModule.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');
        fakeProductModule.custom_property = 'MY-CUSTOM-PROPERTY-UPDATED';

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${fakeProductModule.number}`)
            .reply(config => [200, response(query.parse(config.data))]);

        const updated = await ProductModuleService.update(context, productModule.getProperty('number'), productModule);

        expect(updated instanceof ProductModule).toBe(true);
        expect(updated.getProperty('name', null)).toBe(fakeProductModule.name);
        expect(updated.getProperty('custom_property', null)).toBe(fakeProductModule.custom_property);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${number}`)
            .reply(204);

        await ProductModuleService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

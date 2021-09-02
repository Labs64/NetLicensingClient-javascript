import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import productModuleFactory from 'test@/factories/productModule';
import Context from '@/vo/Context';
import ProductModule from '@/entities/ProductModule';
import ProductModuleService from '@/services/ProductModuleService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';

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
        const productModule = productModuleFactory();

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
            .reply(200, new Response(new Item(productModule)));

        const entity = await ProductModuleService.create(context, 'some number', productModule);

        expect(entity instanceof ProductModule).toBe(true);
        expect(entity.getProperty('number', null)).toBe(productModule.number);
        expect(entity.getProperty('name', null)).toBe(productModule.name);
        expect(entity.getProperty('active', null)).toBe(productModule.active);
        expect(entity.getProperty('licensingModel', null)).toBe(productModule.licensingModel);
        expect(entity.getProperty('custom_property', null)).toBe(productModule.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const productModule = productModuleFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${productModule.number}`)
                .reply(200, new Response(new Item(productModule)));

            const entity = await ProductModuleService.get(context, productModule.number);

            expect(entity instanceof ProductModule).toBe(true);
            expect(entity.getProperty('number', null)).toBe(productModule.number);
            expect(entity.getProperty('name', null)).toBe(productModule.name);
            expect(entity.getProperty('active', null)).toBe(productModule.active);
            expect(entity.getProperty('licensingModel', null)).toBe(productModule.licensingModel);
            expect(entity.getProperty('custom_property', null)).toBe(productModule.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(
                    new Info('Requested productModule does not exist', 'NotFoundException'),
                ));
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
            const productModules = productModuleFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
                .reply(200, new Response(productModules.map((v) => new Item(v))));

            const list = await ProductModuleService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const productModule = productModules[k];
                expect(entity.getProperty('number', null)).toBe(productModule.number);
                expect(entity.getProperty('name', null)).toBe(productModule.name);
                expect(entity.getProperty('active', null)).toBe(productModule.active);
                expect(entity.getProperty('licensingModel', null)).toBe(productModule.licensingModel);
                expect(entity.getProperty('custom_property', null)).toBe(productModule.custom_property);
            });
        });

        it('should has pagination', async () => {
            const productModules = productModuleFactory(50);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
                .reply(() => {
                    const response = new Response(productModules.map((v) => new Item(v)));
                    response.setPage(3, 50, 1050);

                    return [200, response];
                });

            const list = await ProductModuleService.list(context, { page: 3, items: 50 });

            expect(list.getPageNumber()).toBe(3);
            expect(list.getItemsNumber()).toBe(50);
            expect(list.getTotalPages()).toBe(21);
            expect(list.getTotalItems()).toBe(1050);
            expect(list.hasNext()).toBe(true);
        });

        it('check "filter parameter"', async () => {
            const productModules = productModuleFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}`)
                .reply(200, new Response(productModules.map((v) => new Item(v))));

            // if filter parameter is object
            await ProductModuleService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await ProductModuleService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });


    it('check "update" method', async () => {
        let productModule = productModuleFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${productModule.number}`)
            .reply(200, new Response(new Item(productModule)));

        productModule = await ProductModuleService.get(context, productModule.number);

        productModule.setProperty('name', 'MY-NAME-UPDATED');
        productModule.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.ProductModule.ENDPOINT_PATH}/${productModule.number}`)
            .reply(200, new Response(new Item(productModule)));

        const updated = await ProductModuleService.update(context, productModule.getProperty('number'), productModule);

        expect(updated instanceof ProductModule).toBe(true);
        expect(updated.getProperty('name', null)).toBe(productModule.name);
        expect(updated.getProperty('custom_property', null)).toBe(productModule.custom_property);
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

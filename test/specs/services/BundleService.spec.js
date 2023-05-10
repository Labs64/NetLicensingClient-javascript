import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import bundleFactory from 'test@/factories/bundle';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';
import Context from '@/vo/Context';
import Bundle from '@/entities/Bundle';
import BundleService from '@/services/BundleService';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';

describe('services/BundleService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const bundle = bundleFactory();

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/bundle`)
            .reply(200, new Response(new Item(bundle)));

        const entity = await BundleService.create(
            context,
            bundle,
        );

        expect(entity instanceof Bundle).toBe(true);
        expect(entity.getProperty('number', null)).toBe(bundle.number);
        expect(entity.getProperty('name', null)).toBe(bundle.name);
        expect(entity.getProperty('active', null)).toBe(bundle.active);
        expect(entity.getProperty('custom_property', null)).toBe(bundle.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const bundle = bundleFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/bundle/${bundle.number}`)
                .reply(200, new Response(new Item(bundle)));

            const entity = await BundleService.get(context, bundle.number);

            expect(entity instanceof Bundle).toBe(true);
            expect(entity.getProperty('number', null)).toBe(bundle.number);
            expect(entity.getProperty('name', null)).toBe(bundle.name);
            expect(entity.getProperty('active', null)).toBe(bundle.active);
            expect(entity.getProperty('custom_property', null)).toBe(bundle.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/bundle/${number}`)
                .reply(400, new Response(
                    new Info('Requested bundle does not exist', 'NotFoundException'),
                ));

            try {
                await BundleService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', async () => {
        it('should return entities array', async () => {
            const bundles = bundleFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/bundle`)
                .reply(200, new Response(bundles.map((v) => new Item(v))));

            const list = await BundleService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const bundle = bundles[k];
                expect(entity instanceof Bundle).toBe(true);
                expect(entity.getProperty('number', null)).toBe(bundle.number);
                expect(entity.getProperty('name', null)).toBe(bundle.name);
                expect(entity.getProperty('active', null)).toBe(bundle.active);
                expect(entity.getProperty('custom_property', null)).toBe(bundle.custom_property);
            });
        });

        it('should has pagination', async () => {
            const bundles = bundleFactory(100);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/bundle`)
                .reply(200, new Response(bundles.map((v) => new Item(v))));

            const list = await BundleService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(100);
            expect(list.hasNext()).toBe(false);
        });

        it('check "filter parameter"', async () => {
            const bundles = bundleFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/bundle`)
                .reply(200, new Response(bundles.map((v) => new Item(v))));

            // if filter parameter is object
            await BundleService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await BundleService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        let bundle = bundleFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/bundle/${bundle.number}`)
            .reply(200, new Response(new Item(bundle)));

        bundle = await BundleService.get(context, bundle.number);

        bundle.setProperty('name', 'MY-NAME-UPDATED');
        bundle.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/bundle/${bundle.number}`)
            .reply(200, new Response(new Item(bundle)));

        const updated = await BundleService.update(context, bundle.getProperty('number'), bundle);

        expect(updated instanceof Bundle).toBe(true);
        expect(updated.getProperty('name', null)).toBe(bundle.name);
        expect(updated.getProperty('custom_property', null)).toBe(bundle.custom_property);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/bundle/${number}`)
            .reply(204);

        await BundleService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

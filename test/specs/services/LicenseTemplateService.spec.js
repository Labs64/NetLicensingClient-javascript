import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import licenseTemplateFactory from 'test@/factories/licenseTemplate';
import Context from '@/vo/Context';
import LicenseTemplate from '@/entities/LicenseTemplate';
import LicenseTemplateService from '@/services/LicenseTemplateService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';

describe('services/LicenseTemplateService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const licenseTemplate = licenseTemplateFactory();

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}`)
            .reply(200, new Response(new Item(licenseTemplate)));

        const entity = await LicenseTemplateService.create(context, 'some number', licenseTemplate);

        expect(entity instanceof LicenseTemplate).toBe(true);
        expect(entity.getProperty('number', null)).toBe(licenseTemplate.number);
        expect(entity.getProperty('name', null)).toBe(licenseTemplate.name);
        expect(entity.getProperty('active', null)).toBe(licenseTemplate.active);
        expect(entity.getProperty('licenseType', null)).toBe(licenseTemplate.licenseType);
        expect(entity.getProperty('timeVolume', null)).toBe(licenseTemplate.timeVolume);
        expect(entity.getProperty('price', null)).toBe(licenseTemplate.price);
        expect(entity.getProperty('currency', null)).toBe(licenseTemplate.currency);
        expect(entity.getProperty('custom_property', null)).toBe(licenseTemplate.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const licenseTemplate = licenseTemplateFactory();

            // configure mock for get request
            mock.onGet(
                `${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${licenseTemplate.number}`,
            ).reply(200, new Response(new Item(licenseTemplate)));

            const entity = await LicenseTemplateService.get(context, licenseTemplate.number);

            expect(entity instanceof LicenseTemplate).toBe(true);
            expect(entity.getProperty('number', null)).toBe(licenseTemplate.number);
            expect(entity.getProperty('name', null)).toBe(licenseTemplate.name);
            expect(entity.getProperty('active', null)).toBe(licenseTemplate.active);
            expect(entity.getProperty('licenseType', null)).toBe(licenseTemplate.licenseType);
            expect(entity.getProperty('timeVolume', null)).toBe(licenseTemplate.timeVolume);
            expect(entity.getProperty('price', null)).toBe(licenseTemplate.price);
            expect(entity.getProperty('currency', null)).toBe(licenseTemplate.currency);
            expect(entity.getProperty('custom_property', null)).toBe(licenseTemplate.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(
                    new Info('Requested licenseTemplate does not exist', 'NotFoundException'),
                ));
            try {
                await LicenseTemplateService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', async () => {
        it('should return entities array', async () => {
            const licenseTemplates = licenseTemplateFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}`)
                .reply(200, new Response(licenseTemplates.map((v) => new Item(v))));

            const list = await LicenseTemplateService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const licenseTemplate = licenseTemplates[k];
                expect(entity instanceof LicenseTemplate).toBe(true);
                expect(entity.getProperty('number', null)).toBe(licenseTemplate.number);
                expect(entity.getProperty('name', null)).toBe(licenseTemplate.name);
                expect(entity.getProperty('active', null)).toBe(licenseTemplate.active);
                expect(entity.getProperty('licenseType', null)).toBe(licenseTemplate.licenseType);
                expect(entity.getProperty('timeVolume', null)).toBe(licenseTemplate.timeVolume);
                expect(entity.getProperty('price', null)).toBe(licenseTemplate.price);
                expect(entity.getProperty('currency', null)).toBe(licenseTemplate.currency);
                expect(entity.getProperty('custom_property', null)).toBe(licenseTemplate.custom_property);
            });
        });

        it('should has pagination', async () => {
            const licenseTemplates = licenseTemplateFactory(100);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}`)
                .reply(() => {
                    const response = new Response(licenseTemplates.map((v) => new Item(v)));
                    response.setPage(0, 100, 1050);

                    return [200, response];
                });

            const list = await LicenseTemplateService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(11);
            expect(list.getTotalItems()).toBe(1050);
            expect(list.hasNext()).toBe(true);
        });

        it('check "filter parameter"', async () => {
            const licenseTemplates = licenseTemplateFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}`)
                .reply(200, new Response(licenseTemplates.map((v) => new Item(v))));

            // if filter parameter is object
            await LicenseTemplateService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await LicenseTemplateService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        let licenseTemplate = licenseTemplateFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${licenseTemplate.number}`)
            .reply(200, new Response(new Item(licenseTemplate)));

        licenseTemplate = await LicenseTemplateService.get(context, licenseTemplate.number);

        licenseTemplate.setProperty('name', 'MY-NAME-UPDATED');
        licenseTemplate.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${licenseTemplate.number}`)
            .reply(200, new Response(new Item(licenseTemplate)));

        const updated = await LicenseTemplateService
            .update(context, licenseTemplate.getProperty('number'), licenseTemplate);

        expect(updated instanceof LicenseTemplate).toBe(true);
        expect(updated.getProperty('name', null)).toBe(licenseTemplate.name);
        expect(updated.getProperty('price', null)).toBe(licenseTemplate.price);
        expect(updated.getProperty('custom_property', null)).toBe(licenseTemplate.custom_property);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`)
            .reply(204);

        await LicenseTemplateService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

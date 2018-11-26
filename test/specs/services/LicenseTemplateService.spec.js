import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import query from 'query-string';
import Context from '@/vo/Context';
import LicenseTemplate from '@/entities/LicenseTemplate';
import LicenseTemplateService from '@/services/LicenseTemplateService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import licenseTemplateFactory from 'test@/factories/licenseTemplate';


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
        const fakeLicenseTemplate = licenseTemplateFactory();

        const licenseTemplate = new LicenseTemplate(fakeLicenseTemplate);

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}`)
            .reply((config) => {
                const params = query.parse(config.data);
                if (!params[Constants.ProductModule.PRODUCT_MODULE_NUMBER]) {
                    return [400, error('MalformedRequestException', 'Product module number is not provided')];
                }
                if (!params[Constants.NAME]) {
                    return [400, error('MalformedRequestException', 'License template name is required')];
                }
                if (params[Constants.PRICE] && !params[Constants.CURRENCY]) {
                    return [400, error('MalformedRequestException',
                        '"price" field must be accompanied with the "currency" field')];
                }
                if (params[Constants.CURRENCY] && !params[Constants.PRICE]) {
                    return [400, error('MalformedRequestException',
                        '"currency" field can not be used without the "price" field')];
                }
                return [200, response(params)];
            });

        const entity = await LicenseTemplateService.create(context, 'some number', licenseTemplate);

        expect(entity instanceof LicenseTemplate).toBe(true);
        expect(entity.getProperty('number', null)).toBe(fakeLicenseTemplate.number);
        expect(entity.getProperty('name', null)).toBe(fakeLicenseTemplate.name);
        expect(entity.getProperty('active', null)).toBe(fakeLicenseTemplate.active);
        expect(entity.getProperty('licenseType', null)).toBe(fakeLicenseTemplate.licenseType);
        expect(entity.getProperty('timeVolume', null)).toBe(fakeLicenseTemplate.timeVolume);
        expect(entity.getProperty('price', null)).toBe(fakeLicenseTemplate.price);
        expect(entity.getProperty('currency', null)).toBe(fakeLicenseTemplate.currency);
        expect(entity.getProperty('custom_property', null)).toBe(fakeLicenseTemplate.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const fakeLicenseTemplate = licenseTemplateFactory();

            // configure mock for get request
            mock.onGet(
                `${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${fakeLicenseTemplate.number}`,
            ).reply(200, response(fakeLicenseTemplate));

            const entity = await LicenseTemplateService.get(context, fakeLicenseTemplate.number);

            expect(entity instanceof LicenseTemplate).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakeLicenseTemplate.number);
            expect(entity.getProperty('name', null)).toBe(fakeLicenseTemplate.name);
            expect(entity.getProperty('active', null)).toBe(fakeLicenseTemplate.active);
            expect(entity.getProperty('licenseType', null)).toBe(fakeLicenseTemplate.licenseType);
            expect(entity.getProperty('timeVolume', null)).toBe(fakeLicenseTemplate.timeVolume);
            expect(entity.getProperty('price', null)).toBe(fakeLicenseTemplate.price);
            expect(entity.getProperty('currency', null)).toBe(fakeLicenseTemplate.currency);
            expect(entity.getProperty('custom_property', null)).toBe(fakeLicenseTemplate.custom_property);
        });

        it('should return null', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested licenseTemplate does not exist']));

            const result = await LicenseTemplateService.get(context, number);

            expect(result).toBeNull();
        });
    });

    it('check "list" method', async () => {
        const fakeLicenseTemplates = licenseTemplateFactory(10);

        // configure mock for list request
        mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}`)
            .reply(200, response(fakeLicenseTemplates));

        const list = await LicenseTemplateService.list(context);

        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBe(10);

        list.forEach((entity, k) => {
            const fakeLicenseTemplate = fakeLicenseTemplates[k];
            expect(entity instanceof LicenseTemplate).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakeLicenseTemplate.number);
            expect(entity.getProperty('name', null)).toBe(fakeLicenseTemplate.name);
            expect(entity.getProperty('active', null)).toBe(fakeLicenseTemplate.active);
            expect(entity.getProperty('licenseType', null)).toBe(fakeLicenseTemplate.licenseType);
            expect(entity.getProperty('timeVolume', null)).toBe(fakeLicenseTemplate.timeVolume);
            expect(entity.getProperty('price', null)).toBe(fakeLicenseTemplate.price);
            expect(entity.getProperty('currency', null)).toBe(fakeLicenseTemplate.currency);
            expect(entity.getProperty('custom_property', null)).toBe(fakeLicenseTemplate.custom_property);
        });
    });


    it('check "filter parameter in list" method', async () => {
        const fakeLicenseTemplates = licenseTemplateFactory(10);

        // configure mock for list request
        mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}`)
            .reply(200, response(fakeLicenseTemplates));

        // if filter parameter is object
        await LicenseTemplateService.list(context, { page: 2, items: 10 });

        expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

        // if filter parameter is string
        await LicenseTemplateService.list(context, 'page=3;items=20');

        expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
    });

    it('check "update" method', async () => {
        const fakeLicenseTemplate = licenseTemplateFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${fakeLicenseTemplate.number}`)
            .reply(200, response(fakeLicenseTemplate));

        const licenseTemplate = await LicenseTemplateService.get(context, fakeLicenseTemplate.number);

        licenseTemplate.setProperty('name', 'MY-NAME-UPDATED');
        fakeLicenseTemplate.name = 'MY-NAME-UPDATED';

        licenseTemplate.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');
        fakeLicenseTemplate.custom_property = 'MY-CUSTOM-PROPERTY-UPDATED';

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${fakeLicenseTemplate.number}`)
            .reply(config => [200, response(query.parse(config.data))]);

        const updated = await LicenseTemplateService
            .update(context, licenseTemplate.getProperty('number'), licenseTemplate);

        expect(updated instanceof LicenseTemplate).toBe(true);
        expect(updated.getProperty('name', null)).toBe(fakeLicenseTemplate.name);
        expect(updated.getProperty('price', null)).toBe(fakeLicenseTemplate.price);
        expect(updated.getProperty('custom_property', null)).toBe(fakeLicenseTemplate.custom_property);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.LicenseTemplate.ENDPOINT_PATH}/${number}`)
            .reply(204);

        const state = await LicenseTemplateService.delete(context, number);

        expect(state).toBe(true);
    });
});

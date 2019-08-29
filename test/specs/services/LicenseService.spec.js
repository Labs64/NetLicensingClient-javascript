import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import query from 'query-string';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import licenseFactory from 'test@/factories/license';
import Context from '@/vo/Context';
import License from '@/entities/License';
import LicenseService from '@/services/LicenseService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';

describe('services/LicenseService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const fakeLicense = licenseFactory({
            licenseeNumber: 'some number',
            licenseTemplateNumber: 'some number',
        });

        const license = new License(fakeLicense);

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
            .reply((config) => {
                const params = query.parse(config.data);
                if (!params[Constants.Licensee.LICENSEE_NUMBER]) {
                    return [400, error(['MalformedRequestException', 'Licensee number is not provided'])];
                }
                if (!params[Constants.LicenseTemplate.LICENSE_TEMPLATE_NUMBER]) {
                    return [400, error(['MalformedRequestException', 'License template number is not provided'])];
                }
                return [200, response(params)];
            });

        const entity = await LicenseService.create(
            context,
            'some licensee number',
            'some license template number',
            'some transaction number',
            license,
        );

        expect(entity instanceof License).toBe(true);
        expect(entity.getProperty('number', null)).toBe(fakeLicense.number);
        expect(entity.getProperty('name', null)).toBe(fakeLicense.name);
        expect(entity.getProperty('active', null)).toBe(fakeLicense.active);
        expect(entity.getProperty('custom_property', null)).toBe(fakeLicense.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const fakeLicense = licenseFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${fakeLicense.number}`)
                .reply(200, response(fakeLicense));

            const entity = await LicenseService.get(context, fakeLicense.number);

            expect(entity instanceof License).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakeLicense.number);
            expect(entity.getProperty('name', null)).toBe(fakeLicense.name);
            expect(entity.getProperty('active', null)).toBe(fakeLicense.active);
            expect(entity.getProperty('custom_property', null)).toBe(fakeLicense.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested license does not exist']));

            try {
                await LicenseService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', async () => {
        it('should return entities array', async () => {
            const fakeLicenses = licenseFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
                .reply(200, response(fakeLicenses));

            const list = await LicenseService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const fakeLicense = fakeLicenses[k];
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('number', null)).toBe(fakeLicense.number);
                expect(entity.getProperty('name', null)).toBe(fakeLicense.name);
                expect(entity.getProperty('active', null)).toBe(fakeLicense.active);
                expect(entity.getProperty('custom_property', null)).toBe(fakeLicense.custom_property);
            });
        });

        it('should has pagination', async () => {
            const fakeLicenses = licenseFactory(100);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
                .reply(200, response(fakeLicenses));

            const list = await LicenseService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(100);
            expect(list.hasNext()).toBe(false);
        });

        it('check "filter parameter"', async () => {
            const fakeLicenses = licenseFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
                .reply(200, response(fakeLicenses));

            // if filter parameter is object
            await LicenseService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await LicenseService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        const fakeLicense = licenseFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${fakeLicense.number}`)
            .reply(200, response(fakeLicense));

        const license = await LicenseService.get(context, fakeLicense.number);

        license.setProperty('name', 'MY-NAME-UPDATED');
        fakeLicense.name = 'MY-NAME-UPDATED';

        license.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');
        fakeLicense.custom_property = 'MY-CUSTOM-PROPERTY-UPDATED';

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${fakeLicense.number}`)
            .reply((config) => {
                // remove properties that can not be changed by user
                const params = query.parse(config.data);
                delete params.price;
                delete params.currency;

                return [200, response(params)];
            });

        const updated = await LicenseService.update(
            context,
            license.getProperty('number'),
            'some transaction number',
            license,
        );

        expect(updated instanceof License).toBe(true);
        expect(updated.getProperty('name', null)).toBe(fakeLicense.name);
        expect(updated.getProperty('custom_property', null)).toBe(fakeLicense.custom_property);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${number}`)
            .reply(204);

        await LicenseService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

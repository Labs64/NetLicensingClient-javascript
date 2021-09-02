import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import licenseFactory from 'test@/factories/license';
import Context from '@/vo/Context';
import License from '@/entities/License';
import LicenseService from '@/services/LicenseService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';

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
        const license = licenseFactory({
            licenseeNumber: 'some number',
            licenseTemplateNumber: 'some number',
        });

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
            .reply(200, new Response(new Item(license)));

        const entity = await LicenseService.create(
            context,
            'some licensee number',
            'some license template number',
            'some transaction number',
            license,
        );

        expect(entity instanceof License).toBe(true);
        expect(entity.getProperty('number', null)).toBe(license.number);
        expect(entity.getProperty('name', null)).toBe(license.name);
        expect(entity.getProperty('active', null)).toBe(license.active);
        expect(entity.getProperty('custom_property', null)).toBe(license.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const license = licenseFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${license.number}`)
                .reply(200, new Response(new Item(license)));

            const entity = await LicenseService.get(context, license.number);

            expect(entity instanceof License).toBe(true);
            expect(entity.getProperty('number', null)).toBe(license.number);
            expect(entity.getProperty('name', null)).toBe(license.name);
            expect(entity.getProperty('active', null)).toBe(license.active);
            expect(entity.getProperty('custom_property', null)).toBe(license.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(
                    new Info('Requested license does not exist', 'NotFoundException'),
                ));

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
            const licenses = licenseFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
                .reply(200, new Response(licenses.map((v) => new Item(v))));

            const list = await LicenseService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const license = licenses[k];
                expect(entity instanceof License).toBe(true);
                expect(entity.getProperty('number', null)).toBe(license.number);
                expect(entity.getProperty('name', null)).toBe(license.name);
                expect(entity.getProperty('active', null)).toBe(license.active);
                expect(entity.getProperty('custom_property', null)).toBe(license.custom_property);
            });
        });

        it('should has pagination', async () => {
            const licenses = licenseFactory(100);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
                .reply(200, new Response(licenses.map((v) => new Item(v))));

            const list = await LicenseService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(100);
            expect(list.hasNext()).toBe(false);
        });

        it('check "filter parameter"', async () => {
            const licenses = licenseFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}`)
                .reply(200, new Response(licenses.map((v) => new Item(v))));

            // if filter parameter is object
            await LicenseService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await LicenseService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        let license = licenseFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${license.number}`)
            .reply(200, new Response(new Item(license)));

        license = await LicenseService.get(context, license.number);

        license.setProperty('name', 'MY-NAME-UPDATED');
        license.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.License.ENDPOINT_PATH}/${license.number}`)
            .reply(200, new Response(new Item(license)));

        const updated = await LicenseService.update(
            context,
            license.getProperty('number'),
            'some transaction number',
            license,
        );

        expect(updated instanceof License).toBe(true);
        expect(updated.getProperty('name', null)).toBe(license.name);
        expect(updated.getProperty('custom_property', null)).toBe(license.custom_property);
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

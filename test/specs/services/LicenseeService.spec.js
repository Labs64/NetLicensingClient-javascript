import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import query from 'query-string';
import licenseeFactory from 'test@/factories/licensee';
import validateFactory from 'test@/factories/validate';
import Context from '@/vo/Context';
import ValidationParameters from '@/vo/ValidationParameters';
import Licensee from '@/entities/Licensee';
import LicenseeService from '@/services/LicenseeService';
import ValidationResults from '@/vo/ValidationResults';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';

describe('services/LicenseeService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const licensee = licenseeFactory();

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
            .reply(200, new Response(new Item(licensee)));

        const entity = await LicenseeService.create(context, 'some number', licensee);

        expect(entity instanceof Licensee).toBe(true);
        expect(entity.getProperty('number', null)).toBe(licensee.number);
        expect(entity.getProperty('name', null)).toBe(licensee.name);
        expect(entity.getProperty('active', null)).toBe(licensee.active);
        expect(entity.getProperty('custom_property', null)).toBe(licensee.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const licensee = licenseeFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${licensee.number}`)
                .reply(200, new Response(new Item(licensee)));

            const entity = await LicenseeService.get(context, licensee.number);

            expect(entity instanceof Licensee).toBe(true);
            expect(entity.getProperty('number', null)).toBe(licensee.number);
            expect(entity.getProperty('name', null)).toBe(licensee.name);
            expect(entity.getProperty('active', null)).toBe(licensee.active);
            expect(entity.getProperty('custom_property', null)).toBe(licensee.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(new Info('Requested licenseTemplate does not exist', 'NotFoundException')));

            try {
                await LicenseeService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', () => {
        it('should return entities array', async () => {
            const licensees = licenseeFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
                .reply(200, new Response(licensees.map((v) => new Item(v))));

            const list = await LicenseeService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const licensee = licensees[k];
                expect(entity instanceof Licensee).toBe(true);
                expect(entity.getProperty('number', null)).toBe(licensee.number);
                expect(entity.getProperty('name', null)).toBe(licensee.name);
                expect(entity.getProperty('active', null)).toBe(licensee.active);
                expect(entity.getProperty('custom_property', null)).toBe(licensee.custom_property);
            });
        });

        it('should has pagination', async () => {
            const licensees = licenseeFactory(100);

            // configure mock for list request
            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
                .reply(() => {
                    const response = new Response(licensees.map((v) => new Item(v)));
                    response.setPage(0, 100, 1000);

                    return [200, response];
                });

            const list = await LicenseeService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(10);
            expect(list.getTotalItems()).toBe(1000);
            expect(list.hasNext()).toBe(true);
        });

        it('check "filter parameter"', async () => {
            const licensees = licenseeFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
                .reply(200, new Response(licensees.map((v) => new Item(v))));

            // if filter parameter is object
            await LicenseeService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await LicenseeService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        let licensee = licenseeFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${licensee.number}`)
            .reply(200, new Response(new Item(licensee)));

        licensee = await LicenseeService.get(context, licensee.number);

        licensee.setProperty('name', 'MY-NAME-UPDATED');
        licensee.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${licensee.number}`)
            .reply((config) => [200, new Response(new Item(query.parse(config.data), 'Licensee'))]);

        const updated = await LicenseeService.update(context, licensee.getProperty('number'), licensee);

        expect(updated instanceof Licensee).toBe(true);
        expect(updated.getProperty('name', null)).toBe(licensee.name);
        expect(updated.getProperty('custom_property', null)).toBe(licensee.custom_property);
    });

    it('check "validate" method', async () => {
        const licensee = licenseeFactory({ productNumber: 'some number', licenseeName: 'some name' });
        const validate = validateFactory({ productModuleNumber: 'some product module number' });

        const validationParameters = new ValidationParameters()
            .setLicenseeName(licensee.getProperty('name'))
            .setProductNumber('some number');

        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`
            + `/${licensee.number}/${Constants.Licensee.ENDPOINT_PATH_VALIDATE}`)
            .reply((config) => {
                const params = query.parse(config.data);

                if (licensee.productNumber !== params.productNumber) {
                    return [400, new Response(
                        new Info('Unexpected value of parameter productNumber', 'UnexpectedValueException'),
                    )];
                }
                if (licensee.name !== params.licenseeName) {
                    return [400, new Response(
                        new Info('Unexpected value of parameter licenseeName', 'UnexpectedValueException'),
                    )];
                }

                const res = new Response(new Item(validate, 'ProductModuleValidation'));
                res.ttl = new Date();

                return [200, res];
            });

        const result = await LicenseeService.validate(context, licensee.getProperty('number'), validationParameters);

        expect(result instanceof ValidationResults).toBe(true);
        expect(result.getTtl() instanceof Date).toBe(true);
        expect(Object.keys(result.getValidators()).length).toBe(1);
    });

    it('check "transfer" method', async () => {
        const licensee = licenseeFactory();
        const transferLicensee = licenseeFactory();

        transferLicensee.setProperty('markedForTransfer', true);

        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`
            + `/${licensee.number}/${Constants.Licensee.ENDPOINT_PATH_TRANSFER}`)
            .reply(204);
        await LicenseeService
            .transfer(context, licensee.getProperty('number'), transferLicensee.getProperty('number'));

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${number}`)
            .reply(204);

        await LicenseeService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

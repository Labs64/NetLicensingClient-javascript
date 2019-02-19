import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import query from 'query-string';
import Context from '@/vo/Context';
import ValidationParameters from '@/vo/ValidationParameters';
import Licensee from '@/entities/Licensee';
import LicenseeService from '@/services/LicenseeService';
import ValidationResults from '@/vo/ValidationResults';
import Constants from '@/Constants';
import Service from '@/services/Service';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import licenseeFactory from 'test@/factories/licensee';
import validateFactory from 'test@/factories/validate';
import NlicError from '../../../src/errors/NlicError';

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
        const fakeLicensee = licenseeFactory();

        const licensee = new Licensee(fakeLicensee);

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
            .reply((config) => {
                const params = query.parse(config.data);
                if (!params[Constants.Product.PRODUCT_NUMBER]) {
                    return [400, error('MalformedRequestException', 'Product number is not provided')];
                }
                return [200, response(query.parse(config.data))];
            });

        const entity = await LicenseeService.create(context, 'some number', licensee);

        expect(entity instanceof Licensee).toBe(true);
        expect(entity.getProperty('number', null)).toBe(fakeLicensee.number);
        expect(entity.getProperty('name', null)).toBe(fakeLicensee.name);
        expect(entity.getProperty('active', null)).toBe(fakeLicensee.active);
        expect(entity.getProperty('custom_property', null)).toBe(fakeLicensee.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const fakeLicensee = licenseeFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${fakeLicensee.number}`)
                .reply(200, response(fakeLicensee));

            const entity = await LicenseeService.get(context, fakeLicensee.number);

            expect(entity instanceof Licensee).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakeLicensee.number);
            expect(entity.getProperty('name', null)).toBe(fakeLicensee.name);
            expect(entity.getProperty('active', null)).toBe(fakeLicensee.active);
            expect(entity.getProperty('custom_property', null)).toBe(fakeLicensee.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested licenseTemplate does not exist']));

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
            const fakeLicensees = licenseeFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
                .reply(200, response(fakeLicensees));

            const list = await LicenseeService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const fakeLicensee = fakeLicensees[k];
                expect(entity instanceof Licensee).toBe(true);
                expect(entity.getProperty('number', null)).toBe(fakeLicensee.number);
                expect(entity.getProperty('name', null)).toBe(fakeLicensee.name);
                expect(entity.getProperty('active', null)).toBe(fakeLicensee.active);
                expect(entity.getProperty('custom_property', null)).toBe(fakeLicensee.custom_property);
            });
        });

        it('should has pagination', async () => {
            const fakeLicensees = licenseeFactory(1000);

            // configure mock for list request
            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
                .reply(200, response(fakeLicensees));

            const list = await LicenseeService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(10);
            expect(list.getTotalItems()).toBe(1000);
            expect(list.hasNext()).toBe(true);
        });

        it('check "filter parameter"', async () => {
            const fakeLicensees = licenseeFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`)
                .reply(200, response(fakeLicensees));

            // if filter parameter is object
            await LicenseeService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await LicenseeService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        const fakeLicensee = licenseeFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${fakeLicensee.number}`)
            .reply(200, response(fakeLicensee));

        const licensee = await LicenseeService.get(context, fakeLicensee.number);

        licensee.setProperty('name', 'MY-NAME-UPDATED');
        fakeLicensee.name = 'MY-NAME-UPDATED';

        licensee.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');
        fakeLicensee.custom_property = 'MY-CUSTOM-PROPERTY-UPDATED';

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}/${fakeLicensee.number}`)
            .reply(config => [200, response(query.parse(config.data))]);

        const updated = await LicenseeService.update(context, licensee.getProperty('number'), licensee);

        expect(updated instanceof Licensee).toBe(true);
        expect(updated.getProperty('name', null)).toBe(fakeLicensee.name);
        expect(updated.getProperty('custom_property', null)).toBe(fakeLicensee.custom_property);
    });

    it('check "validate" method', async () => {
        const fakeLicensee = licenseeFactory({ productNumber: 'some number', licenseeName: 'some name' });
        const fakeValidate = validateFactory({ productModuleNumber: 'some product module number' });

        const licensee = new Licensee(fakeLicensee);

        const validationParameters = new ValidationParameters()
            .setLicenseeName(licensee.getProperty('name'))
            .setProductNumber('some number');

        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`
            + `/${fakeLicensee.number}/${Constants.Licensee.ENDPOINT_PATH_VALIDATE}`)
            .reply((config) => {
                const params = query.parse(config.data);

                if (fakeLicensee.productNumber !== params.productNumber) {
                    return [400, error(['UnexpectedValueException', 'Unexpected value of parameter productNumber'])];
                }
                if (fakeLicensee.name !== params.licenseeName) {
                    return [400, error(['UnexpectedValueException', 'Unexpected value of parameter licenseeName'])];
                }

                const res = response(fakeValidate);
                res.ttl = new Date();

                return [200, res];
            });

        const result = await LicenseeService.validate(context, licensee.getProperty('number'), validationParameters);

        expect(result instanceof ValidationResults).toBe(true);
        expect(result.getTtl() instanceof Date).toBe(true);
        expect(result.getProductModuleValidation(fakeValidate.productModuleNumber).valid).toBe(fakeValidate.valid);
    });

    it('check "transfer" method', async () => {
        const fakeLicensee = licenseeFactory();
        const fakeTransferToLicensee = licenseeFactory();

        const licensee = new Licensee(fakeLicensee);
        licensee.setProperty('markedForTransfer', true);

        const transferToLicensee = new Licensee(fakeTransferToLicensee);

        mock.onPost(`${context.getBaseUrl()}/${Constants.Licensee.ENDPOINT_PATH}`
            + `/${fakeTransferToLicensee.number}/${Constants.Licensee.ENDPOINT_PATH_TRANSFER}`)
            .reply(204);
        await LicenseeService
            .transfer(context, transferToLicensee.getProperty('number'), licensee.getProperty('number'));

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

import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import Context from '@/vo/Context';
import UtilityService from '@/services/UtilityService';
import Service from '@/services/Service';
import Constants from '@/Constants';
import response from 'test@/mocks/response';
import { licenseType as licenseTypeFactory, licensingModel as licensingModelFactory } from 'test@/factories/utility';

describe('services/UtilityService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    describe('check "listLicenseTypes" method', async () => {
        it('should return entities array', async () => {
            const fakeLicenseTypes = licenseTypeFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSE_TYPES}`)
                .reply(200, response(fakeLicenseTypes));

            const list = await UtilityService.listLicenseTypes(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);
        });

        it('should has pagination', async () => {
            const fakeLicenseTypes = licenseTypeFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSE_TYPES}`)
                .reply(200, response(fakeLicenseTypes));

            const list = await UtilityService.listLicenseTypes(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(10);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(10);
            expect(list.hasNext()).toBe(false);
        });
    });

    describe('check "listLicensingModels" method', async () => {
        it('should return entities array', async () => {
            const fakeLicenseModels = licensingModelFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSING_MODELS}`)
                .reply(200, response(fakeLicenseModels));

            const list = await UtilityService.listLicensingModels(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);
        });

        it('should has pagination', async () => {
            const fakeLicenseModels = licensingModelFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSING_MODELS}`)
                .reply(200, response(fakeLicenseModels));

            const list = await UtilityService.listLicensingModels(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(10);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(10);
            expect(list.hasNext()).toBe(false);
        });
    });

    describe('check "listCountries" method', () => {
        it('should return entities array', async () => {
            const fakeCountries = [
                {
                    code: 'AF',
                    name: 'AFGHANISTAN',
                    vatPercent: 0,
                    isEu: false,
                },
                {
                    code: 'DE',
                    name: 'GERMANY',
                    vatPercent: 19,
                    isEu: true,
                },
                {
                    code: 'AT',
                    name: 'AUSTRIA',
                    vatPercent: 20,
                    isEu: true,
                },
            ];

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/countries`)
                .reply(200, response(fakeCountries));

            const list = await UtilityService.listCountries(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(3);
        });

        it('should has pagination', async () => {
            const fakeCountries = [
                {
                    code: 'AF',
                    name: 'AFGHANISTAN',
                    vatPercent: 0,
                    isEu: false,
                },
                {
                    code: 'DE',
                    name: 'GERMANY',
                    vatPercent: 19,
                    isEu: true,
                },
                {
                    code: 'AT',
                    name: 'AUSTRIA',
                    vatPercent: 20,
                    isEu: true,
                },
            ];

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/countries`)
                .reply(200, response(fakeCountries));

            const list = await UtilityService.listCountries(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(3);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(3);
            expect(list.hasNext()).toBe(false);
        });

        it('check "filter parameter in list" method', async () => {
            const fakeCountries = [
                {
                    code: 'AF',
                    name: 'AFGHANISTAN',
                    vatPercent: 0,
                    isEu: false,
                },
                {
                    code: 'DE',
                    name: 'GERMANY',
                    vatPercent: 19,
                    isEu: true,
                },
                {
                    code: 'AT',
                    name: 'AUSTRIA',
                    vatPercent: 20,
                    isEu: true,
                },
            ];

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/countries`)
                .reply(200, response(fakeCountries));

            // if filter parameter is object
            await UtilityService.listCountries(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await UtilityService.listCountries(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });
});

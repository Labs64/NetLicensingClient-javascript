import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { licenseType as licenseTypeFactory, licensingModel as licensingModelFactory } from 'test@/factories/utility';
import Context from '@/vo/Context';
import UtilityService from '@/services/UtilityService';
import Service from '@/services/Service';
import Country from '@/entities/Country';
import Constants from '@/Constants';
import Item from 'test@/response/Item';
import Response from 'test@/response';

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
            const licenseTypes = licenseTypeFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSE_TYPES}`)
                .reply(200, new Response(licenseTypes.map((v) => new Item(v, 'LicenseType'))));

            const list = await UtilityService.listLicenseTypes(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);
        });

        it('should has pagination', async () => {
            const licenseTypes = licenseTypeFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSE_TYPES}`)
                .reply(200, new Response(licenseTypes.map((v) => new Item(v, 'LicenseType'))));

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
            const licenseModels = licensingModelFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSING_MODELS}`)
                .reply(200, new Response(licenseModels.map((v) => new Item(v, 'LicensingModelProperties'))));

            const list = await UtilityService.listLicensingModels(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);
        });

        it('should has pagination', async () => {
            const licenseModels = licensingModelFactory(10);

            // configure mock for list request
            // eslint-disable-next-line max-len
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/${Constants.Utility.ENDPOINT_PATH_LICENSING_MODELS}`)
                .reply(200, new Response(licenseModels.map((v) => new Item(v, 'LicensingModelProperties'))));

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
            const countries = [
                new Country({
                    code: 'AF',
                    name: 'AFGHANISTAN',
                    vatPercent: 0,
                    isEu: false,
                }),
                new Country({
                    code: 'DE',
                    name: 'GERMANY',
                    vatPercent: 19,
                    isEu: true,
                }),
                new Country({
                    code: 'AT',
                    name: 'AUSTRIA',
                    vatPercent: 20,
                    isEu: true,
                }),
            ];

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/countries`)
                .reply(200, new Response(countries.map((v) => new Item(v))));

            const list = await UtilityService.listCountries(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(3);
        });

        it('should has pagination', async () => {
            const countries = [
                new Country({
                    code: 'AF',
                    name: 'AFGHANISTAN',
                    vatPercent: 0,
                    isEu: false,
                }),
                new Country({
                    code: 'DE',
                    name: 'GERMANY',
                    vatPercent: 19,
                    isEu: true,
                }),
                new Country({
                    code: 'AT',
                    name: 'AUSTRIA',
                    vatPercent: 20,
                    isEu: true,
                }),
            ];

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/countries`)
                .reply(200, new Response(countries.map((v) => new Item(v))));

            const list = await UtilityService.listCountries(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(3);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(3);
            expect(list.hasNext()).toBe(false);
        });

        it('check "filter parameter in list" method', async () => {
            const countries = [
                new Country({
                    code: 'AF',
                    name: 'AFGHANISTAN',
                    vatPercent: 0,
                    isEu: false,
                }),
                new Country({
                    code: 'DE',
                    name: 'GERMANY',
                    vatPercent: 19,
                    isEu: true,
                }),
                new Country({
                    code: 'AT',
                    name: 'AUSTRIA',
                    vatPercent: 20,
                    isEu: true,
                }),
            ];

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Utility.ENDPOINT_PATH}/countries`)
                .reply(200, new Response(countries.map((v) => new Item(v))));

            // if filter parameter is object
            await UtilityService.listCountries(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await UtilityService.listCountries(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });
});

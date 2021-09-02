import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import tokenFactory from 'test@/factories/token';
import Context from '@/vo/Context';
import Token from '@/entities/Token';
import TokenService from '@/services/TokenService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';

describe('services/TokenService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const token = tokenFactory({
            tokenType: Constants.Token.Type.SHOP,
            licenseeNumber: 'some number',
        });

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
            .reply(200, new Response(new Item(token)));

        const entity = await TokenService.create(context, token);

        expect(entity instanceof Token).toBe(true);
        expect(entity.getProperty('number', null)).toBeTruthy();
        expect(entity.getProperty('tokenType', null)).toBe(token.getProperty('tokenType'));
        expect(entity.getProperty('licenseeNumber', null)).toBe(token.getProperty('licenseeNumber'));
        expect(entity.getProperty('expirationTime', null) instanceof Date).toBe(true);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const token = tokenFactory({
                tokenType: Constants.Token.Type.SHOP,
                licenseeNumber: 'some number',
            });

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}/${token.number}`)
                .reply(200, new Response(new Item(token)));

            const entity = await TokenService.get(context, token.number);

            expect(entity instanceof Token).toBe(true);
            expect(entity.getProperty('number', null)).toBeTruthy();
            expect(entity.getProperty('tokenType', null)).toBe(token.tokenType);
            expect(entity.getProperty('licenseeNumber', null)).toBe(token.licenseeNumber);
            expect(entity.getProperty('expirationTime', null) instanceof Date).toBe(true);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(
                    new Info('Requested token does not exist', 'NotFoundException'),
                ));

            try {
                await TokenService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', async () => {
        it('should return entities array', async () => {
            const tokens = tokenFactory(10, {
                tokenType: Constants.Token.Type.SHOP,
            });

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
                .reply(200, new Response(tokens.map((v) => new Item(v))));

            const list = await TokenService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const token = tokens[k];
                expect(entity instanceof Token).toBe(true);
                expect(entity.getProperty('number', null)).toBeTruthy();
                expect(entity.getProperty('tokenType', null)).toBe(token.tokenType);
                expect(entity.getProperty('licenseeNumber', null)).toBe(token.licenseeNumber);
                expect(entity.getProperty('expirationTime', null) instanceof Date).toBe(true);
            });
        });

        it('should has pagination', async () => {
            const tokens = tokenFactory(100);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
                .reply(() => {
                    const response = new Response(tokens.map((v) => new Item(v)));
                    response.setPage(1, 100, 200);

                    return [200, response];
                });

            const list = await TokenService.list(context, { page: 1 });

            expect(list.getPageNumber()).toBe(1);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(2);
            expect(list.getTotalItems()).toBe(200);
            expect(list.hasNext()).toBe(false);
        });

        it('check "filter parameter in list" method', async () => {
            const token = tokenFactory({
                tokenType: Constants.Token.Type.SHOP,
                licenseeNumber: 'some number',
            });

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
                .reply(200, new Response(new Item(token)));

            // if filter parameter is object
            await TokenService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await TokenService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}/${number}`)
            .reply(204);

        await TokenService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

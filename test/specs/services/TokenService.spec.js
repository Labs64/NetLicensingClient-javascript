import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import query from 'query-string';
import Context from '@/vo/Context';
import Token from '@/entities/Token';
import TokenService from '@/services/TokenService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import tokenFactory from 'test@/factories/token';
import NlicError from '@/errors/NlicError';

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
        const fakeToken = tokenFactory({
            tokenType: Constants.Token.Type.SHOP,
            licenseeNumber: 'some number',
        });

        const token = new Token(fakeToken);

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
            .reply((config) => {
                const params = query.parse(config.data);

                if (params.tokenType === Constants.Token.Type.SHOP && !params[Constants.Licensee.LICENSEE_NUMBER]) {
                    return [400, error(
                        ['MalformedRequestException', 'Malformed token request'],
                        ['TokenValidation', 'Property "licenseeNumber" not found'],
                    )];
                }
                return [200, response(params)];
            });

        const entity = await TokenService.create(context, token);

        expect(entity instanceof Token).toBe(true);
        expect(entity.getProperty('number', null)).toBeTruthy();
        expect(entity.getProperty('tokenType', null)).toBe(token.getProperty('tokenType'));
        expect(entity.getProperty('licenseeNumber', null)).toBe(token.getProperty('licenseeNumber'));
        expect(entity.getProperty('expirationTime', null) instanceof Date).toBe(true);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const fakeToken = tokenFactory({
                tokenType: Constants.Token.Type.SHOP,
                licenseeNumber: 'some number',
            });

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}/${fakeToken.number}`)
                .reply(200, response(fakeToken));

            const entity = await TokenService.get(context, fakeToken.number);

            expect(entity instanceof Token).toBe(true);
            expect(entity.getProperty('number', null)).toBeTruthy();
            expect(entity.getProperty('tokenType', null)).toBe(fakeToken.tokenType);
            expect(entity.getProperty('licenseeNumber', null)).toBe(fakeToken.licenseeNumber);
            expect(entity.getProperty('expirationTime', null) instanceof Date).toBe(true);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested token does not exist']));

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
            const fakeTokens = tokenFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
                .reply(200, response(fakeTokens));

            const list = await TokenService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const fakeToken = fakeTokens[k];
                expect(entity instanceof Token).toBe(true);
                expect(entity.getProperty('number', null)).toBeTruthy();
                expect(entity.getProperty('tokenType', null)).toBe(fakeToken.tokenType);
                expect(entity.getProperty('licenseeNumber', null)).toBe(fakeToken.licenseeNumber);
                expect(entity.getProperty('expirationTime', null) instanceof Date).toBe(true);
            });
        });

        it('should has pagination', async () => {
            const fakeTokens = tokenFactory(200);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
                .reply(200, response(fakeTokens, 1));

            const list = await TokenService.list(context, { page: 1 });

            expect(list.getPageNumber()).toBe(1);
            expect(list.getItemsNumber()).toBe(100);
            expect(list.getTotalPages()).toBe(2);
            expect(list.getTotalItems()).toBe(200);
            expect(list.hasNext()).toBe(false);
        });

        it('check "filter parameter in list" method', async () => {
            const fakeToken = tokenFactory({
                tokenType: Constants.Token.Type.SHOP,
                licenseeNumber: 'some number',
            });

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Token.ENDPOINT_PATH}`)
                .reply(200, response(fakeToken));

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

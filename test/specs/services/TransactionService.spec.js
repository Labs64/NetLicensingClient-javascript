import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import transactionFactory from 'test@/factories/transaction';
import Context from '@/vo/Context';
import Transaction from '@/entities/Transaction';
import TransactionService from '@/services/TransactionService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';

describe('services/TransactionService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const fakeTransaction = transactionFactory();

        const transaction = new Transaction(fakeTransaction);

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
            .reply(200, response(fakeTransaction));

        const entity = await TransactionService.create(context, transaction);

        expect(entity instanceof Transaction).toBe(true);
        expect(entity.getProperty('number', null)).toBe(fakeTransaction.number);
        expect(entity.getProperty('status', null)).toBe(fakeTransaction.status);
        expect(entity.getProperty('source', null)).toBe(fakeTransaction.source);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const fakeTransaction = transactionFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${fakeTransaction.number}`)
                .reply(200, response(fakeTransaction));

            const entity = await TransactionService.get(context, fakeTransaction.number);

            expect(entity instanceof Transaction).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakeTransaction.number);
            expect(entity.getProperty('status', null)).toBe(fakeTransaction.status);
            expect(entity.getProperty('source', null)).toBe(fakeTransaction.source);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested transaction does not exist']));

            try {
                await TransactionService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', async () => {
        it('should return entities array', async () => {
            const fakeTransactions = transactionFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
                .reply(200, response(fakeTransactions));

            const list = await TransactionService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const fakeTransaction = fakeTransactions[k];
                expect(entity instanceof Transaction).toBe(true);
                expect(entity.getProperty('number', null)).toBe(fakeTransaction.number);
                expect(entity.getProperty('status', null)).toBe(fakeTransaction.status);
                expect(entity.getProperty('source', null)).toBe(fakeTransaction.source);
            });
        });

        it('should has pagination', async () => {
            const fakeTransactions = transactionFactory(1200);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
                .reply(200, response(fakeTransactions, 3, 40));

            const list = await TransactionService.list(context, { page: 3, items: 40 });

            expect(list.getPageNumber()).toBe(3);
            expect(list.getItemsNumber()).toBe(40);
            expect(list.getTotalPages()).toBe(30);
            expect(list.getTotalItems()).toBe(1200);
            expect(list.hasNext()).toBe(true);
        });

        it('check "filter parameter in list" method', async () => {
            const fakeTransaction = transactionFactory();

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
                .reply(200, response(fakeTransaction));

            // if filter parameter is object
            await TransactionService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await TransactionService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        const fakeTransaction = transactionFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${fakeTransaction.number}`)
            .reply(200, response(fakeTransaction));

        const transaction = await TransactionService.get(context, fakeTransaction.number);

        transaction.setProperty('status', 'CLOSED');
        fakeTransaction.status = 'CLOSED';

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${transaction.number}`)
            .reply(200, response(fakeTransaction));

        const updated = await TransactionService.update(context, transaction.getProperty('number'), transaction);

        expect(updated instanceof Transaction).toBe(true);
        expect(updated.getProperty('status', null)).toBe(transaction.getProperty('status'));
    });
});

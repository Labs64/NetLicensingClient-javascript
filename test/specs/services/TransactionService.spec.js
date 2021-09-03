import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import transactionFactory from 'test@/factories/transaction';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';
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
        const transaction = transactionFactory();

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
            .reply(200, new Response(new Item(transaction)));

        const entity = await TransactionService.create(context, transaction);

        expect(entity instanceof Transaction).toBe(true);
        expect(entity.getProperty('number', null)).toBe(transaction.number);
        expect(entity.getProperty('status', null)).toBe(transaction.status);
        expect(entity.getProperty('source', null)).toBe(transaction.source);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const transaction = transactionFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${transaction.number}`)
                .reply(200, new Response(new Item(transaction)));

            const entity = await TransactionService.get(context, transaction.number);

            expect(entity instanceof Transaction).toBe(true);
            expect(entity.getProperty('number', null)).toBe(transaction.number);
            expect(entity.getProperty('status', null)).toBe(transaction.status);
            expect(entity.getProperty('source', null)).toBe(transaction.source);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for product get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(
                    new Info('Requested transaction does not exist', 'NotFoundException'),
                ));
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
            const transactions = transactionFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
                .reply(200, new Response(transactions.map((v) => new Item(v))));

            const list = await TransactionService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const transaction = transactions[k];
                expect(entity instanceof Transaction).toBe(true);
                expect(entity.getProperty('number', null)).toBe(transaction.number);
                expect(entity.getProperty('status', null)).toBe(transaction.status);
                expect(entity.getProperty('source', null)).toBe(transaction.source);
            });
        });

        it('should has pagination', async () => {
            const transactions = transactionFactory(40);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
                .reply(() => {
                    const response = new Response(transactions.map((v) => new Item(v)));
                    response.setPage(3, 40, 1200);

                    return [200, response];
                });

            const list = await TransactionService.list(context, { page: 3, items: 40 });

            expect(list.getPageNumber()).toBe(3);
            expect(list.getItemsNumber()).toBe(40);
            expect(list.getTotalPages()).toBe(30);
            expect(list.getTotalItems()).toBe(1200);
            expect(list.hasNext()).toBe(true);
        });

        it('check "filter parameter in list" method', async () => {
            const transaction = transactionFactory();

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}`)
                .reply(200, new Response(new Item(transaction)));

            // if filter parameter is object
            await TransactionService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await TransactionService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        let transaction = transactionFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${transaction.number}`)
            .reply(200, new Response(new Item(transaction)));

        transaction = await TransactionService.get(context, transaction.number);

        transaction.setProperty('status', 'CLOSED');

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Transaction.ENDPOINT_PATH}/${transaction.number}`)
            .reply(200, new Response(new Item(transaction)));

        const updated = await TransactionService.update(context, transaction.getProperty('number'), transaction);

        expect(updated instanceof Transaction).toBe(true);
        expect(updated.getProperty('status', null)).toBe(transaction.getProperty('status'));
    });
});

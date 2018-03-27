import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Transaction from '../../src/entities/Transaction';
import TransactionService from '../../src/services/TransactionService';
import Service from '../../src/services/Service';


describe('services.TransactionServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    it('check "create" method', () => {
        const transaction = new Transaction()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('status', 'PENDING')
            .setProperty('source', 'SHOP');

        return TransactionService.create(context, transaction)
            .then((entity) => {
                expect(entity instanceof Transaction).toBe(true);
                expect(entity.getProperty('number')).toBe(transaction.getProperty('number'));
                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
                expect(entity.getProperty('source')).toBe(transaction.getProperty('source'));
            });
    });

    it('check "get" method', () => {
        const transaction = new Transaction()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('status', 'PENDING')
            .setProperty('source', 'SHOP');

        return TransactionService.create(context, transaction)
            .then(() => TransactionService.get(context, transaction.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof Transaction).toBe(true);
                expect(entity.getProperty('number')).toBe(transaction.getProperty('number'));
                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
                expect(entity.getProperty('source')).toBe(transaction.getProperty('source'));
            });
    });

    it('check "list" method', () => {
        const transaction = new Transaction()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('status', 'PENDING')
            .setProperty('source', 'SHOP');

        return TransactionService.create(context, transaction)
            .then(() => TransactionService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Transaction).toBe(true);
                expect(entities[0] instanceof Transaction).toBe(true);
            });
    });

    it('check "filter" in list method', () =>
        // test
        // if filter parameter is object
        TransactionService.list(context, { page: 2, items: 10 })
            .then(() => {
                expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');
            })
            // if filter parameter is string
            .then(() => TransactionService.list(context, 'page=3;items=20'))
            .then(() => {
                expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
            }));

    it('check "update" method', () => {
        const transaction = new Transaction()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('status', 'PENDING')
            .setProperty('source', 'SHOP');

        return TransactionService.create(context, transaction)
            .then((entity) => {
                entity.setProperty('status', 'CLOSED');
                return TransactionService.update(context, entity.getProperty('number'), transaction);
            })
            .then((entity) => {
                expect(entity instanceof Transaction).toBe(true);
                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
            });
    });
});

import Faker from '../../test/Faker';
import Context from '../../src/vo/Context';
import Transaction from '../../src/entities/Transaction';
import TransactionService from '../../src/services/TransactionService';


describe('TransactionServiceTest', () => {
    let context;
    let transaction;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        transaction = new Transaction()
            .setProperty('number', Faker.string('JS-TEST-').toUpperCase())
            .setProperty('status', 'PENDING')
            .setProperty('source', 'SHOP');
    });

    it('check "create" method', () => {
        TransactionService.create(context, transaction)
            .then((entity) => {
                expect(entity instanceof Transaction).toBe(true);

                expect(entity.getProperty('number')).toBe(transaction.getProperty('number'));
                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
                expect(entity.getProperty('source')).toBe(transaction.getProperty('source'));
            });
    });

    it('check "get" method', () => {
        TransactionService.create(context, transaction)
            .then(() => TransactionService.get(context, transaction.getProperty('number')))
            .then((entity) => {
                expect(entity instanceof Transaction).toBe(true);
                expect(entity.getProperty('number')).toBe(transaction.getProperty('number'));
                expect(entity.getProperty('status')).toBe(transaction.getProperty('status'));
                expect(entity.getProperty('source')).toBe(transaction.getProperty('source'));
            });
    });

    it('check "list" method', () => {
        TransactionService.create(context, transaction)
            .then(() => TransactionService.list(context))
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof Transaction).toBe(true);
            });
    });

    it('check "list" method', () => {
        TransactionService.create(context, transaction)
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

import Context from '../../src/vo/Context';
import PaymentMethod from '../../src/entities/PaymentMethod';
import PaymentMethodService from '../../src/services/PaymentMethodService';
import Faker from '../Faker';

describe('services.PaymentMethodServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    describe('check "get" method', () => {
        it('should return entity', () => PaymentMethodService.get(context, 'PAYPAL')
            .then((entity) => {
                expect(entity instanceof PaymentMethod).toBe(true);
                expect(entity.getProperty('number')).toBe('PAYPAL');
            }));

        it('should throw error when payment method is not supported', done => PaymentMethodService
                .get(context, Faker.string('Payment-that-is-not-supported-'))
                .catch((e) => {
                    expect(e instanceof Error).toBe(true);
                    done();
                }));
    });

    it('check "list" method', () => PaymentMethodService.list(context)
        .then((entities) => {
            expect(Array.isArray(entities)).toBe(true);
            expect(entities.length).toBeGreaterThanOrEqual(1);
            expect(entities[0] instanceof PaymentMethod).toBe(true);
        }));
});

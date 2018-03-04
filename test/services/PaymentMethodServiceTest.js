import Context from '../../src/vo/Context';
import PaymentMethod from '../../src/entities/PaymentMethod';
import PaymentMethodService from '../../src/services/PaymentMethodService';

describe('services.PaymentMethodServiceTest', () => {
    let context;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    it('check "get" method', () => {
        PaymentMethodService.get(context, 'PAYPAL')
            .then((entity) => {
                expect(entity instanceof PaymentMethod.class).toBe(true);
                expect(entity.getProperty('number')).toBe('PAYPAL');
            });
    });

    it('check "list" method', () => {
        PaymentMethodService.list(context)
            .then((entities) => {
                expect(Array.isArray(entities)).toBe(true);
                expect(entities.length).toBeGreaterThanOrEqual(1);
                expect(entities[0] instanceof PaymentMethod.class).toBe(true);
            });
    });
});

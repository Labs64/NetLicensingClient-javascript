import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import paymentMethodFactory from 'test@/factories/paymentMethod';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';
import Context from '@/vo/Context';
import PaymentMethod from '@/entities/PaymentMethod';
import PaymentMethodService from '@/services/PaymentMethodService';
import NlicError from '@/errors/NlicError';

describe('services/PaymentMethodService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const paymentMethod = paymentMethodFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/paymentmethod/${paymentMethod.number}`)
                .reply(200, new Response(new Item(paymentMethod)));

            const entity = await PaymentMethodService.get(context, paymentMethod.number);

            expect(entity instanceof PaymentMethod).toBe(true);
            expect(entity.getProperty('number', null)).toBe(paymentMethod.number);
        });

        it('should throw error when payment method is not supported', async () => {
            const number = 'Payment-that-is-not-supported';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/paymentmethod/${number}`)
                .reply(() => {
                    if (['PAYPAL', 'PAYPAL_SANDBOX', 'STRIPE'].indexOf(number) === -1) {
                        return [400, new Response(
                            new Info('Requested payment method is not supported', 'MalformedRequestException'),
                        )];
                    }

                    return [200, new Response(new Item(paymentMethodFactory({ number })))];
                });

            try {
                await PaymentMethodService.get(context, number);

                fail('should throw error');
            } catch (e) {
                expect(e instanceof Error).toBe(true);
            }
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/paymentmethod/${number}`)
                .reply(400, new Response(
                    new Info('Requested paymentMethod does not exist', 'NotFoundException'),
                ));

            try {
                await PaymentMethodService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', async () => {
        it('should return entities array', async () => {
            const paymentMethods = paymentMethodFactory(3);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/paymentmethod`)
                .reply(200, new Response(paymentMethods.map((v) => new Item(v))));

            const list = await PaymentMethodService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(3);

            list.forEach((entity, k) => {
                const paymentMethod = paymentMethods[k];
                expect(entity instanceof PaymentMethod).toBe(true);
                expect(entity.getProperty('number', null)).toBe(paymentMethod.number);
                expect(entity.getProperty('active', null)).toBe(paymentMethod.active);
            });
        });

        it('should has pagination', async () => {
            const paymentMethods = paymentMethodFactory(3);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/paymentmethod`)
                .reply(200, new Response(paymentMethods.map((v) => new Item(v))));

            const list = await PaymentMethodService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(3);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(3);
            expect(list.hasNext()).toBe(false);
        });
    });
});

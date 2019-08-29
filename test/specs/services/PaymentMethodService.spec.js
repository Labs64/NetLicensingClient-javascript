import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import response from 'test@/mocks/response';
import error from 'test@/mocks/error';
import paymentMethodFactory from 'test@/factories/paymentMethod';
import Context from '@/vo/Context';
import PaymentMethod from '@/entities/PaymentMethod';
import PaymentMethodService from '@/services/PaymentMethodService';
import Constants from '@/Constants';
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
            const fakePaymentMethod = paymentMethodFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.PaymentMethod.ENDPOINT_PATH}/${fakePaymentMethod.number}`)
                .reply(200, response(fakePaymentMethod));

            const entity = await PaymentMethodService.get(context, fakePaymentMethod.number);

            expect(entity instanceof PaymentMethod).toBe(true);
            expect(entity.getProperty('number', null)).toBe(fakePaymentMethod.number);
        });

        it('should throw error when payment method is not supported', async () => {
            const number = 'Payment-that-is-not-supported';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.PaymentMethod.ENDPOINT_PATH}/${number}`)
                .reply(() => {
                    if (['PAYPAL', 'PAYPAL_SANDBOX', 'STRIPE'].indexOf(number) === -1) {
                        return [400, error('MalformedRequestException', 'Requested payment method is not supported')];
                    }

                    return [200, response(paymentMethodFactory({ number }))];
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
            mock.onGet(`${context.getBaseUrl()}/${Constants.PaymentMethod.ENDPOINT_PATH}/${number}`)
                .reply(400, error(['NotFoundException', 'Requested paymentMethod does not exist']));

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
            const fakePaymentMethods = paymentMethodFactory(3);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.PaymentMethod.ENDPOINT_PATH}`)
                .reply(200, response(fakePaymentMethods));

            const list = await PaymentMethodService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(3);

            list.forEach((entity, k) => {
                const fakePaymentMethod = fakePaymentMethods[k];
                expect(entity instanceof PaymentMethod).toBe(true);
                expect(entity.getProperty('number', null)).toBe(fakePaymentMethod.number);
                expect(entity.getProperty('active', null)).toBe(fakePaymentMethod.active);
            });
        });

        it('should has pagination', async () => {
            const fakePaymentMethods = paymentMethodFactory(3);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.PaymentMethod.ENDPOINT_PATH}`)
                .reply(200, response(fakePaymentMethods));

            const list = await PaymentMethodService.list(context);

            expect(list.getPageNumber()).toBe(0);
            expect(list.getItemsNumber()).toBe(3);
            expect(list.getTotalPages()).toBe(1);
            expect(list.getTotalItems()).toBe(3);
            expect(list.hasNext()).toBe(false);
        });
    });
});

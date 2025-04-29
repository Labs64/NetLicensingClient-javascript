import { describe, it, expect } from 'vitest';

// constants
import PaymentMethodEnum from '@/constants/PaymentMethodEnum';
import TransactionSource from '@/constants/TransactionSource';
import TransactionStatus from '@/constants/TransactionStatus';

// entities
import License from '@/entities/License';
import LicenseTransactionJoin from '@/entities/LicenseTransactionJoin';
import Transaction from '@/entities/Transaction';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('Transaction entity', () => {
  it('should create a Transaction with default properties', () => {
    const transaction = Transaction();

    expectEntity(transaction, {
      active: undefined,
      number: undefined,
      status: undefined,
      source: undefined,
      grandTotal: undefined,
      discount: undefined,
      currency: undefined,
      dateCreated: undefined,
      dateClosed: undefined,
      paymentMethod: undefined,
      licenseTransactionJoins: undefined,
    });
  });

  it('should create a Transaction with provided properties', () => {
    const props = {
      active: true,
      number: 'T1',
      status: TransactionStatus.PENDING,
      source: TransactionSource.SHOP,
      grandTotal: 12.5,
      discount: 2.2,
      currency: 'EUR',
      dateCreated: new Date(),
      dateClosed: new Date(),
      paymentMethod: PaymentMethodEnum.PAYPAL,
      licenseTransactionJoins: [new LicenseTransactionJoin(Transaction({ number: 'T1' }), License({ number: 'L1' }))],
    };

    const transaction = Transaction(props);

    expectEntity(transaction, props);
    expect(transaction).toStrictEqual(props);
  });

  it('should set and get number correctly', () => {
    const transaction = Transaction();

    transaction.setNumber('T1');
    expectEntityProp(transaction, 'number', 'T1');

    transaction.number = 'T2';
    expectEntityProp(transaction, 'number', 'T2');

    transaction.set('number', 'T3');
    expectEntityProp(transaction, 'number', 'T3');

    transaction.setProperty('number', 'T4');
    expectEntityProp(transaction, 'number', 'T4');
  });

  it('should set and get status correctly', () => {
    const transaction = Transaction();

    transaction.setStatus(TransactionStatus.PENDING);
    expectEntityProp(transaction, 'status', TransactionStatus.PENDING);

    transaction.status = TransactionStatus.CLOSED;
    expectEntityProp(transaction, 'status', TransactionStatus.CLOSED);

    transaction.set('status', TransactionStatus.CANCELLED);
    expectEntityProp(transaction, 'status', TransactionStatus.CANCELLED);

    transaction.setProperty('status', TransactionStatus.PENDING);
    expectEntityProp(transaction, 'status', TransactionStatus.PENDING);
  });

  it('should set and get source correctly', () => {
    const transaction = Transaction();

    transaction.setSource(TransactionSource.SHOP);
    expectEntityProp(transaction, 'source', TransactionSource.SHOP);

    transaction.source = TransactionSource.RECURRING_PAYMENT;
    expectEntityProp(transaction, 'source', TransactionSource.RECURRING_PAYMENT);

    transaction.set('source', TransactionSource.OBTAIN_BUNDLE);
    expectEntityProp(transaction, 'source', TransactionSource.OBTAIN_BUNDLE);

    transaction.setProperty('source', TransactionSource.AUTO_LICENSETEMPLATE_DELETE);
    expectEntityProp(transaction, 'source', TransactionSource.AUTO_LICENSETEMPLATE_DELETE);
  });

  it('should set and get grandTotal correctly', () => {
    const transaction = Transaction();

    transaction.setGrandTotal(1.99);
    expectEntityProp(transaction, 'grandTotal', 1.99);

    transaction.grandTotal = 2.99;
    expectEntityProp(transaction, 'grandTotal', 2.99);

    transaction.set('grandTotal', 3.0);
    expectEntityProp(transaction, 'grandTotal', 3.0);

    transaction.setProperty('grandTotal', 5.75);
    expectEntityProp(transaction, 'grandTotal', 5.75);
  });

  it('should set and get discount correctly', () => {
    const transaction = Transaction();

    transaction.setDiscount(20);
    expectEntityProp(transaction, 'discount', 20);

    transaction.discount = 10;
    expectEntityProp(transaction, 'discount', 10);

    transaction.set('discount', 5);
    expectEntityProp(transaction, 'discount', 5);

    transaction.setProperty('discount', 7);
    expectEntityProp(transaction, 'discount', 7);
  });

  it('should set and get currency correctly', () => {
    const transaction = Transaction();

    transaction.setCurrency('USD');
    expectEntityProp(transaction, 'currency', 'USD');

    transaction.currency = 'EUR';
    expectEntityProp(transaction, 'currency', 'EUR');

    transaction.set('currency', 'UAH');
    expectEntityProp(transaction, 'currency', 'UAH');

    transaction.setProperty('currency', 'GEL');
    expectEntityProp(transaction, 'currency', 'GEL');
  });

  it('should set and get dateCreated correctly', () => {
    const transaction = Transaction();

    const date1 = new Date('2024-01-01T12:00:00Z');
    transaction.setDateCreated(date1);
    expectEntityProp(transaction, 'dateCreated', date1);

    const date2 = new Date('2024-01-02T12:00:00Z');
    transaction.dateCreated = date2;
    expectEntityProp(transaction, 'dateCreated', date2);

    const date3 = new Date('2024-01-03T12:00:00Z');
    transaction.set('dateCreated', date3);
    expectEntityProp(transaction, 'dateCreated', date3);

    const date4 = new Date('2024-01-04T12:00:00Z');
    transaction.setProperty('dateCreated', date4);
    expectEntityProp(transaction, 'dateCreated', date4);
  });

  it('should set and get dateClosed correctly', () => {
    const transaction = Transaction();

    const date1 = new Date('2024-01-01T12:00:00Z');
    transaction.setDateClosed(date1);
    expectEntityProp(transaction, 'dateClosed', date1);

    const date2 = new Date('2024-01-02T12:00:00Z');
    transaction.dateClosed = date2;
    expectEntityProp(transaction, 'dateClosed', date2);

    const date3 = new Date('2024-01-03T12:00:00Z');
    transaction.set('dateClosed', date3);
    expectEntityProp(transaction, 'dateClosed', date3);

    const date4 = new Date('2024-01-04T12:00:00Z');
    transaction.setProperty('dateClosed', date4);
    expectEntityProp(transaction, 'dateClosed', date4);
  });

  it('should set and get paymentMethod correctly', () => {
    const transaction = Transaction();

    transaction.setPaymentMethod(PaymentMethodEnum.PAYPAL);
    expectEntityProp(transaction, 'paymentMethod', PaymentMethodEnum.PAYPAL);

    transaction.paymentMethod = PaymentMethodEnum.PAYPAL_SANDBOX;
    expectEntityProp(transaction, 'paymentMethod', PaymentMethodEnum.PAYPAL_SANDBOX);

    transaction.set('paymentMethod', PaymentMethodEnum.STRIPE);
    expectEntityProp(transaction, 'paymentMethod', PaymentMethodEnum.STRIPE);

    transaction.setProperty('paymentMethod', PaymentMethodEnum.STRIPE_TESTING);
    expectEntityProp(transaction, 'paymentMethod', PaymentMethodEnum.STRIPE_TESTING);
  });

  it('should set and get licenseTransactionJoins correctly', () => {
    const join1 = new LicenseTransactionJoin(Transaction({ number: 'T1' }), License({ number: 'L1' }));
    const join2 = new LicenseTransactionJoin(Transaction({ number: 'T2' }), License({ number: 'L2' }));
    const join3 = new LicenseTransactionJoin(Transaction({ number: 'T3' }), License({ number: 'L3' }));
    const join4 = new LicenseTransactionJoin(Transaction({ number: 'T4' }), License({ number: 'L4' }));

    const transaction = Transaction();

    transaction.setLicenseTransactionJoins([join1, join3]);
    expectEntityProp(transaction, 'licenseTransactionJoins', [join1, join3]);

    transaction.licenseTransactionJoins = [join2];
    expectEntityProp(transaction, 'licenseTransactionJoins', [join2]);

    transaction.set('licenseTransactionJoins', [join4, join3]);
    expectEntityProp(transaction, 'licenseTransactionJoins', [join4, join3]);

    transaction.setProperty('licenseTransactionJoins', [join4, join2, join3]);
    expectEntityProp(transaction, 'licenseTransactionJoins', [join4, join2, join3]);
  });

  it('should set and get active status correctly', () => {
    const transaction = Transaction();

    transaction.setActive(true);
    expectEntityProp(transaction, 'active', true);

    transaction.active = false;
    expectEntityProp(transaction, 'active', false);

    transaction.set('active', true);
    expectEntityProp(transaction, 'active', true);

    transaction.setProperty('active', false);
    expectEntityProp(transaction, 'active', false);
  });

  it('should create an instance of Transaction', () => {
    const transaction = Transaction();
    expect(transaction instanceof Transaction).toBe(true);
  });

  it('should be correct map', () => {
    const transaction = Transaction({
      active: true,
      number: 'T1',
      status: TransactionStatus.PENDING,
      source: TransactionSource.SHOP,
      grandTotal: 12.5,
      discount: 2.2,
      currency: 'EUR',
      dateCreated: new Date('2024-01-03T12:00:00.000Z'),
      dateClosed: new Date('2024-01-04T12:00:00.000Z'),
      paymentMethod: PaymentMethodEnum.PAYPAL,
      licenseTransactionJoins: [new LicenseTransactionJoin(Transaction({ number: 'T1' }), License({ number: 'L1' }))],
    });

    expect(transaction.serialize()).toStrictEqual({
      active: 'true',
      number: 'T1',
      status: TransactionStatus.PENDING,
      source: TransactionSource.SHOP,
      grandTotal: '12.5',
      discount: '2.2',
      currency: 'EUR',
      dateCreated: '2024-01-03T12:00:00.000Z',
      dateClosed: '2024-01-04T12:00:00.000Z',
      paymentMethod: PaymentMethodEnum.PAYPAL,
    });
  });
});

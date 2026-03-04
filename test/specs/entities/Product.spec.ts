import { describe, it, expect } from 'vitest';

// entities
import Product from '@/entities/Product';
import ProductDiscount from '@/entities/ProductDiscount';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('Product entity', () => {
  it('should create a Product with default properties', () => {
    const product = Product();

    expectEntity(product, {
      active: undefined,
      number: undefined,
      name: undefined,
      version: undefined,
      description: undefined,
      licensingInfo: undefined,
      licenseeAutoCreate: undefined,
      discounts: undefined,
      inUse: undefined,
    });
  });

  it('should create a Product with provided properties', () => {
    const props = {
      active: true,
      number: 'P1',
      name: 'Sample Name',
      version: '1.0',
      description: 'Sample Description',
      licensingInfo: 'Sample License Info',
      licenseeAutoCreate: false,
      discounts: [ProductDiscount({ totalPrice: 0, currency: 'EUR', amountFix: 5 })],
      inUse: true,
    };

    const product = Product(props);

    expectEntity(product, props);
    expect(product).toStrictEqual(props);
  });

  it('should set and get active correctly', () => {
    const product = Product();

    product.setActive(true);
    expectEntityProp(product, 'active', true);

    product.active = false;
    expectEntityProp(product, 'active', false);

    product.set('active', true);
    expectEntityProp(product, 'active', true);

    product.setProperty('active', false);
    expectEntityProp(product, 'active', false);
  });

  it('should set and get number correctly', () => {
    const product = Product();

    product.setNumber('P1');
    expectEntityProp(product, 'number', 'P1');

    product.number = 'P2';
    expectEntityProp(product, 'number', 'P2');

    product.set('number', 'P3');
    expectEntityProp(product, 'number', 'P3');

    product.setProperty('number', 'P4');
    expectEntityProp(product, 'number', 'P4');
  });

  it('should set and get name correctly', () => {
    const product = Product();

    product.setName('Name 1');
    expectEntityProp(product, 'name', 'Name 1');

    product.name = 'Name 2';
    expectEntityProp(product, 'name', 'Name 2');

    product.set('name', 'Name 3');
    expectEntityProp(product, 'name', 'Name 3');

    product.setProperty('name', 'Name 4');
    expectEntityProp(product, 'name', 'Name 4');
  });

  it('should set and get version correctly', () => {
    const product = Product();

    product.setVersion('1.0');
    expectEntityProp(product, 'version', '1.0');

    product.version = '1.1';
    expectEntityProp(product, 'version', '1.1');

    product.set('version', '1.2');
    expectEntityProp(product, 'version', '1.2');

    product.setProperty('version', '1.3');
    expectEntityProp(product, 'version', '1.3');
  });

  it('should set and get description correctly', () => {
    const product = Product();

    product.setDescription('Description 1');
    expectEntityProp(product, 'description', 'Description 1');

    product.description = 'Description 2';
    expectEntityProp(product, 'description', 'Description 2');

    product.set('description', 'Description 3');
    expectEntityProp(product, 'description', 'Description 3');

    product.setProperty('description', 'Description 4');
    expectEntityProp(product, 'description', 'Description 4');
  });

  it('should set and get licensingInfo correctly', () => {
    const product = Product();

    product.setLicensingInfo('Licensing Info 1');
    expectEntityProp(product, 'licensingInfo', 'Licensing Info 1');

    product.licensingInfo = 'Licensing Info 2';
    expectEntityProp(product, 'licensingInfo', 'Licensing Info 2');

    product.set('licensingInfo', 'Licensing Info 3');
    expectEntityProp(product, 'licensingInfo', 'Licensing Info 3');

    product.setProperty('licensingInfo', 'Licensing Info 4');
    expectEntityProp(product, 'licensingInfo', 'Licensing Info 4');
  });

  it('should set and get licenseeAutoCreate correctly', () => {
    const product = Product();

    product.setLicenseeAutoCreate(true);
    expectEntityProp(product, 'licenseeAutoCreate', true);

    product.licenseeAutoCreate = false;
    expectEntityProp(product, 'licenseeAutoCreate', false);

    product.set('licenseeAutoCreate', true);
    expectEntityProp(product, 'licenseeAutoCreate', true);

    product.setProperty('licenseeAutoCreate', false);
    expectEntityProp(product, 'licenseeAutoCreate', false);
  });

  it('should set and get discounts correctly', () => {
    const product = Product();

    const discount1 = ProductDiscount({ totalPrice: 10, currency: 'EUR', amountFix: 1 });
    const discount2 = ProductDiscount({ totalPrice: 20, currency: 'USD', amountPercent: 3 });
    const discount3 = ProductDiscount({ totalPrice: 30, currency: 'UAH', amountPercent: 5 });
    const discount4 = ProductDiscount({ totalPrice: 40, currency: 'GEL', amountFix: 10 });

    product.setDiscounts([discount1, discount3]);
    expectEntityProp(product, 'discounts', [discount1, discount3]);

    product.discounts = [discount2];
    expectEntityProp(product, 'discounts', [discount2]);

    product.set('discounts', [discount3, discount4]);
    expectEntityProp(product, 'discounts', [discount3, discount4]);

    product.setProperty('discounts', [discount1, discount2, discount4]);
    expectEntityProp(product, 'discounts', [discount1, discount2, discount4]);

    product.discounts.push(discount3);
    expectEntityProp(product, 'discounts', [discount1, discount2, discount4, discount3]);

    product.removeDiscount(discount1);
    product.removeDiscount(discount2);
    product.removeDiscount(discount3);
    expectEntityProp(product, 'discounts', [discount4]);

    product.getDiscounts()?.push(discount1);
    expectEntityProp(product, 'discounts', [discount4, discount1]);
  });

  it('should create an instance of Product', () => {
    const product = Product();
    expect(product instanceof Product).toBe(true);
  });

  it('should return correct map', () => {
    const props = {
      active: true,
      number: 'P1',
      name: 'Sample Name',
      version: '1.0',
      description: 'Sample Description',
      licensingInfo: 'Sample License Info',
      licenseeAutoCreate: false,
      discounts: [
        ProductDiscount({ totalPrice: 200, currency: 'EUR', amountFix: 5 }),
        ProductDiscount({ totalPrice: 50, currency: 'USD', amountPercent: 25 }),
      ],
      inUse: true,
    };

    const product = Product(props);

    expect(product.serialize()).toStrictEqual({
      active: 'true',
      number: 'P1',
      name: 'Sample Name',
      version: '1.0',
      description: 'Sample Description',
      licensingInfo: 'Sample License Info',
      licenseeAutoCreate: 'false',
      discount: ['200;EUR;5', '50;USD;25%'],
    });
  });
});

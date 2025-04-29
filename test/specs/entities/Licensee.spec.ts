import { describe, it, expect } from 'vitest';

// entities
import Licensee from '@/entities/Licensee';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('Licensee Entity', () => {
  it('should create a Licensee with default properties', () => {
    const licensee = Licensee();

    expectEntity(licensee, {
      active: undefined,
      number: undefined,
      name: undefined,
      productNumber: undefined,
      markedForTransfer: undefined,
      inUse: undefined,
    });
  });

  it('should create a Licensee with provided properties', () => {
    const props = {
      number: '12345',
      name: 'Sample Licensee',
      active: true,
      licenseeSecret: 'secret123',
      markedForTransfer: false,
      productNumber: 'PN123',
      inUse: true,
    };

    const licensee = Licensee(props);

    expectEntity(licensee, props);
    expect(licensee).toStrictEqual(props);
  });

  it('should set and get active status correctly', () => {
    const licensee = Licensee();

    licensee.setActive(true);
    expectEntityProp(licensee, 'active', true);

    licensee.active = false;
    expectEntityProp(licensee, 'active', false);

    licensee.set('active', true);
    expectEntityProp(licensee, 'active', true);

    licensee.setProperty('active', false);
    expectEntityProp(licensee, 'active', false);
  });

  it('should set and get number correctly', () => {
    const licensee = Licensee();

    licensee.setNumber('L1');
    expectEntityProp(licensee, 'number', 'L1');

    licensee.number = 'L2';
    expectEntityProp(licensee, 'number', 'L2');

    licensee.set('number', 'L3');
    expectEntityProp(licensee, 'number', 'L3');

    licensee.setProperty('number', 'L4');
    expectEntityProp(licensee, 'number', 'L4');
  });

  it('should set and get name correctly', () => {
    const licensee = Licensee();

    licensee.setName('Name 1');
    expectEntityProp(licensee, 'name', 'Name 1');

    licensee.name = 'Name 2';
    expectEntityProp(licensee, 'name', 'Name 2');

    licensee.set('name', 'Name 3');
    expectEntityProp(licensee, 'name', 'Name 3');

    licensee.setProperty('name', 'Name 4');
    expectEntityProp(licensee, 'name', 'Name 4');
  });

  it('should set and get product number correctly', () => {
    const licensee = Licensee();

    licensee.setProductNumber('P1');
    expectEntityProp(licensee, 'productNumber', 'P1');

    licensee.productNumber = 'P2';
    expectEntityProp(licensee, 'productNumber', 'P2');

    licensee.set('productNumber', 'P3');
    expectEntityProp(licensee, 'productNumber', 'P3');

    licensee.setProperty('productNumber', 'P4');
    expectEntityProp(licensee, 'productNumber', 'P4');
  });

  it('should set and get marked for transfer status correctly', () => {
    const licensee = Licensee();

    licensee.setMarkedForTransfer(true);
    expectEntityProp(licensee, 'markedForTransfer', true);

    licensee.markedForTransfer = false;
    expectEntityProp(licensee, 'markedForTransfer', false);

    licensee.set('markedForTransfer', true);
    expectEntityProp(licensee, 'markedForTransfer', true);

    licensee.setProperty('markedForTransfer', true);
    expectEntityProp(licensee, 'markedForTransfer', true);
  });

  it('should return correct inUse status', () => {
    const licensee = Licensee({ inUse: true });
    expectEntityProp(licensee, 'inUse', true);
  });

  it('should allow custom properties', () => {
    const licensee = Licensee({ number: 'L999', foo: 'bar', isFooBar: true });
    expect(licensee.foo).toBe('bar');
    expect(licensee.isFooBar).toBe(true);
  });

  it('should create an instance of Licensee', () => {
    const licensee = Licensee();
    expect(licensee instanceof Licensee).toBe(true);
  });

  it('should be correct map', () => {
    const licensee = Licensee({
      number: '12345',
      name: 'Sample Licensee',
      active: true,
      licenseeSecret: 'secret123',
      markedForTransfer: false,
      productNumber: 'PN123',
      inUse: true,
    });

    expect(licensee.serialize()).toStrictEqual({
      number: '12345',
      name: 'Sample Licensee',
      active: 'true',
      licenseeSecret: 'secret123',
      markedForTransfer: 'false',
      productNumber: 'PN123',
    });
  });
});

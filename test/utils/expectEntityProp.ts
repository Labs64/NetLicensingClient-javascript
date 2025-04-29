import { expect } from 'vitest';

import { Entity } from '@/types/entities/defineEntity';

/**
 * Asserts that the given entity's property matches the expected value.
 *
 * Performs the check in three ways:
 * - Direct property access (e.g. `entity[property]`)
 * - Named getter method (e.g. `entity.getXyz()`)
 * - Generic `get` method (e.g. `entity.get('xyz')`)
 * - Generic `getProperty` method (e.g. `entity.getProperty('xyz')`)
 *
 * @template T - The entity type.
 * @template E - The expected value type.
 * @param {T} entity - The entity instance to check.
 * @param {keyof T} property - The property name to validate.
 * @param {E} expected - The expected value of the property.
 *
 * @example
 * expectEntityProp(product, 'number', 'P1');
 */
const expectEntityProp = <T extends object, E>(entity: Entity<T, T>, property: keyof T, expected: E) => {
  const key = property as string;
  const getter = `get${key[0].toUpperCase()}${key.slice(1)}` as keyof T;

  // check direct property access
  expect(entity[property]).toEqual(expected);

  // is getter ex. entity.getXyz exists, check it, skip for custom fields
  if (typeof entity[getter] === 'function') {
    expect((entity[getter] as () => unknown)()).toEqual(expected);
  }

  // check generic methods
  expect(entity.get(property)).toEqual(expected);
  expect(entity.getProperty(property)).toEqual(expected);
};

export default expectEntityProp;

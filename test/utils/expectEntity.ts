// types
import { Entity } from '@/types/entities/defineEntity';

// test utils
import expectEntityProp from './expectEntityProp';

/**
 * Asserts that multiple properties of the given entity match expected values.
 *
 * Delegates each property check to `expectEntityProp`, comparing:
 * - Direct property value
 * - Named getter method value
 * - Generic `get` method value
 * - Generic `getProperty` method value
 *
 * Useful for verifying entity state in a concise and readable way.
 *
 * @template T - The shape of the entity.
 * @template E - A partial object containing expected values for the entity.
 * @param {Entity<T, T>} entity - The entity instance to check.
 * @param {Partial<T>} expected - An object of expected values to compare against the entity.
 *
 * @example
 * expectEntity(product, {
 *   name: 'P1',
 *   active: true,
 * });
 */
const expectEntity = <T extends object, E extends object>(entity: Entity<T, T>, expected: E) => {
  Object.entries(expected).forEach(([key, value]) => {
    expectEntityProp(entity, key as keyof T, value);
  });
};

export default expectEntity;

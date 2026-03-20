import { describe, expect, it } from 'vitest';
import itemToObject from '@/converters/itemToObject';
import type { Item } from '@/types/api/response';

describe('itemToObject', () => {
  it('returns empty object when item is not provided', () => {
    expect(itemToObject()).toEqual({});
  });

  it('casts properties in auto mode', () => {
    const item = {
      property: [
        { name: 'id', value: '1' },
        { name: 'active', value: 'true' },
        { name: 'price', value: '19.99' },
        { name: 'version', value: '1.0' },
        { name: 'meta', value: '{"featured":true}' },
      ],
    } as Item;

    expect(itemToObject(item)).toEqual({
      id: 1,
      active: true,
      price: 19.99,
      version: 1,
      meta: {
        featured: true,
      },
    });
  });

  it('extracts lists and groups them by list name', () => {
    const item = {
      property: [{ name: 'id', value: '10' }],
      list: [
        {
          name: 'features',
          property: [
            { name: 'code', value: 'A1' },
            { name: 'enabled', value: 'true' },
          ],
        },
        {
          name: 'features',
          property: [
            { name: 'code', value: 'A2' },
            { name: 'enabled', value: 'false' },
          ],
        },
      ],
    } as Item;

    expect(itemToObject(item)).toEqual({
      id: 10,
      features: [
        {
          code: 'A1',
          enabled: true,
        },
        {
          code: 'A2',
          enabled: false,
        },
      ],
    });
  });

  it('applies cast map to top-level properties', () => {
    const item = {
      property: [
        { name: 'number', value: '11' },
        { name: 'version', value: '1.0' },
        { name: 'active', value: 'true' },
      ],
    } as Item;

    expect(
      itemToObject(item, {
        number: 'string',
        version: 'string',
        active: 'string',
      }),
    ).toEqual({
      number: '11',
      version: '1.0',
      active: 'true',
    });
  });

  it('applies cast map to nested list items', () => {
    const item = {
      list: [
        {
          name: 'products',
          property: [
            { name: 'number', value: '11' },
            { name: 'version', value: '2.0' },
            { name: 'active', value: 'true' },
          ],
        },
      ],
    } as Item;

    expect(
      itemToObject(item, {
        number: 'string',
        version: 'string',
        active: 'boolean',
      }),
    ).toEqual({
      products: [
        {
          number: '11',
          version: '2.0',
          active: true,
        },
      ],
    });
  });

  it('keeps original string when forced cast cannot be applied', () => {
    const item = {
      property: [
        { name: 'count', value: 'hello' },
        { name: 'active', value: 'yes' },
        { name: 'payload', value: 'plain text' },
      ],
    } as Item;

    expect(
      itemToObject(item, {
        count: 'number',
        active: 'boolean',
        payload: 'json',
      }),
    ).toEqual({
      count: 'hello',
      active: 'yes',
      payload: 'plain text',
    });
  });

  it('supports typed result', () => {
    type Product = {
      id: number;
      active: boolean;
      version: number;
    };

    const item = {
      property: [
        { name: 'id', value: '5' },
        { name: 'active', value: 'true' },
        { name: 'version', value: '1.0' },
      ],
    } as Item;

    const result = itemToObject<Product>(item);

    expect(result).toEqual({
      id: 5,
      active: true,
      version: 1,
    });
  });

  it('supports nested lists recursively', () => {
    const item = {
      property: [{ name: 'id', value: '1' }],
      list: [
        {
          name: 'groups',
          property: [{ name: 'title', value: 'Main' }],
          list: [
            {
              name: 'items',
              property: [
                { name: 'code', value: '101' },
                { name: 'active', value: 'true' },
              ],
            },
          ],
        },
      ],
    } as Item;

    expect(itemToObject(item)).toEqual({
      id: 1,
      groups: [
        {
          title: 'Main',
          items: [
            {
              code: 101,
              active: true,
            },
          ],
        },
      ],
    });
  });

  it('casts non-canonical numeric strings in auto mode', () => {
    const item = {
      property: [
        { name: 'version', value: '1.0' },
        { name: 'padded', value: '001' },
        { name: 'scientific', value: '1e3' },
      ],
    } as Item;

    expect(itemToObject(item)).toEqual({
      version: 1,
      padded: 1,
      scientific: 1000,
    });
  });

  it('keeps string values when cast map explicitly uses string', () => {
    const item = {
      property: [
        { name: 'version', value: '1.0' },
        { name: 'padded', value: '001' },
        { name: 'scientific', value: '1e3' },
      ],
    } as Item;

    expect(
      itemToObject(item, {
        version: 'string',
        padded: 'string',
        scientific: 'string',
      }),
    ).toEqual({
      version: '1.0',
      padded: '001',
      scientific: '1e3',
    });
  });
});

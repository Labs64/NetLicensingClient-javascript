import { describe, it, expect } from 'vitest';
import serialize from '@/utils/serialize';

describe('serialize', () => {
  it('should convert string properties correctly', () => {
    const obj = { name: 'Test', value: 'Hello' };
    const result = serialize(obj);
    expect(result).toEqual({
      name: 'Test',
      value: 'Hello',
    });
  });

  it('should convert Date properties correctly', () => {
    const obj = { date: new Date('2024-01-03T12:00:00.0Z') };
    const result = serialize(obj);
    expect(result).toEqual({ date: '2024-01-03T12:00:00.000Z' });
  });

  it('should convert number properties to string', () => {
    const obj = { number: 123, float: 45.67 };
    const result = serialize(obj);
    expect(result).toEqual({
      number: '123',
      float: '45.67',
    });
  });

  it('should handle undefined properties', () => {
    const obj = { name: 'Test', value: undefined };
    const result = serialize(obj);
    expect(result).toEqual({
      name: 'Test',
      value: '', // undefined should become an empty string
    });
  });

  it('should convert boolean properties to string', () => {
    const obj = { active: true, isChecked: false };
    const result = serialize(obj);
    expect(result).toEqual({
      active: 'true',
      isChecked: 'false',
    });
  });

  it('should serialize object properties correctly', () => {
    const obj = { nested: { key: 'value' } };
    const result = serialize(obj);
    expect(result).toEqual({
      nested: '{"key":"value"}', // object should be serialized to JSON string
    });
  });

  it('should handle null properties', () => {
    const obj = { nullValue: null };
    const result = serialize(obj);
    expect(result).toEqual({
      nullValue: 'null', // null should be converted to the string 'null'
    });
  });

  it('should handle array properties correctly', () => {
    const obj = { numbers: [1, 2, 3], strings: ['a', 'b'] };
    const result = serialize(obj);
    expect(result).toEqual({
      numbers: '[1,2,3]', // array should be serialized to JSON string
      strings: '["a","b"]', // array should be serialized to JSON string
    });
  });

  it('should handle mixed types correctly', () => {
    const obj = {
      name: 'Test',
      age: 30,
      isActive: true,
      details: { nested: 'value' },
      numbers: [1, 2],
    };
    const result = serialize(obj);
    expect(result).toEqual({
      name: 'Test',
      age: '30',
      isActive: 'true',
      details: '{"nested":"value"}',
      numbers: '[1,2]',
    });
  });

  it('should handle an empty object', () => {
    const obj = {};
    const result = serialize(obj);
    expect(result).toEqual({});
  });

  it('should ignore function properties', () => {
    const obj = {
      name: 'Test',
      log: () => 'Hello, world!',
    };

    const result = serialize(obj);

    // Ensure the function is ignored and doesn't appear in the map
    expect(result).toEqual({
      name: 'Test',
    });
  });
});

import { describe, expect, it } from 'vitest';
import cast from '@/utils/cast';

describe('cast', () => {
  describe('auto mode', () => {
    it('casts boolean strings', () => {
      expect(cast('true')).toBe(true);
      expect(cast('false')).toBe(false);
    });

    it('casts null string', () => {
      expect(cast('null')).toBeNull();
    });

    it('casts null value', () => {
      expect(cast(null as unknown as string)).toBeNull();
    });

    it('casts integer strings', () => {
      expect(cast('0')).toBe(0);
      expect(cast('1')).toBe(1);
      expect(cast('-15')).toBe(-15);
    });

    it('casts decimal strings', () => {
      expect(cast('1.5')).toBe(1.5);
      expect(cast('-2.25')).toBe(-2.25);
      expect(cast('1.0')).toBe(1);
      expect(cast('1.00')).toBe(1);
    });

    it('casts numeric strings in non-canonical formats', () => {
      expect(cast('01')).toBe(1);
      expect(cast('001')).toBe(1);
      expect(cast('1e3')).toBe(1000);
      expect(cast('-0')).toBe(-0);
    });

    it('parses json object', () => {
      expect(cast('{"active":true,"count":2}')).toEqual({
        active: true,
        count: 2,
      });
    });

    it('parses json array', () => {
      expect(cast('[1,2,3]')).toEqual([1, 2, 3]);
    });

    it('returns plain strings as is', () => {
      expect(cast('hello')).toBe('hello');
      expect(cast('some-value')).toBe('some-value');
    });

    it('keeps empty and whitespace strings as strings', () => {
      expect(cast('')).toBe('');
      expect(cast('   ')).toBe('   ');
    });
  });

  describe('forced rules', () => {
    it('keeps value as string for string rule', () => {
      expect(cast('11', 'string')).toBe('11');
      expect(cast('true', 'string')).toBe('true');
      expect(cast('1.0', 'string')).toBe('1.0');
      expect(cast('01', 'string')).toBe('01');
    });

    it('keeps null value as null for any rule', () => {
      expect(cast(null, 'string')).toBeNull();
      expect(cast(null, 'number')).toBeNull();
      expect(cast(null, 'boolean')).toBeNull();
      expect(cast(null, 'null')).toBeNull();
      expect(cast(null, 'json')).toBeNull();
    });

    it('casts value to number for number rule when possible', () => {
      expect(cast('11', 'number')).toBe(11);
      expect(cast('1.5', 'number')).toBe(1.5);
      expect(cast('1.0', 'number')).toBe(1);
      expect(cast('01', 'number')).toBe(1);
      expect(cast('1e3', 'number')).toBe(1000);
      expect(cast('-0', 'number')).toBe(-0);
    });

    it('keeps value as string for number rule when value is not numeric', () => {
      expect(cast('hello', 'number')).toBe('hello');
      expect(cast('true', 'number')).toBe('true');
    });

    it('casts value to boolean for boolean rule when possible', () => {
      expect(cast('true', 'boolean')).toBe(true);
      expect(cast('false', 'boolean')).toBe(false);
    });

    it('keeps value as string for boolean rule when value is not boolean', () => {
      expect(cast('1', 'boolean')).toBe('1');
      expect(cast('yes', 'boolean')).toBe('yes');
    });

    it('casts value to null for null rule when possible', () => {
      expect(cast('null', 'null')).toBeNull();
    });

    it('keeps value as string for null rule when value is not null', () => {
      expect(cast('undefined', 'null')).toBe('undefined');
      expect(cast('0', 'null')).toBe('0');
    });

    it('parses value as json for json rule when possible', () => {
      expect(cast('{"a":1}', 'json')).toEqual({ a: 1 });
      expect(cast('[1,2]', 'json')).toEqual([1, 2]);
    });

    it('keeps value as string for json rule when value is not json', () => {
      expect(cast('hello', 'json')).toBe('hello');
      expect(cast('1', 'json')).toBe('1');
    });
  });
});

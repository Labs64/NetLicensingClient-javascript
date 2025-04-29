import { describe, it, expect } from 'vitest';
import { encode, decode } from '@/utils/filter';

describe('filter encode/decode', () => {
  it('should encode object into filter string', () => {
    const filter = {
      page: 1,
      item: 10,
      status: 'active',
    };

    const result = encode(filter);
    expect(result).toBe('page=1;item=10;status=active');
  });

  it('should decode filter string into object', () => {
    const filterString = 'page=1;item=10;status=active';

    const result = decode(filterString);
    expect(result).toEqual({
      page: '1',
      item: '10',
      status: 'active',
    });
  });

  it('should handle empty object encode', () => {
    expect(encode({})).toBe('');
  });

  it('should handle empty string decode', () => {
    expect(decode('')).toEqual({});
  });

  it('should ignore malformed pairs in decode', () => {
    const result = decode('page=1;malformed;item=2');
    expect(result).toEqual({
      page: '1',
      item: '2',
    });
  });
});

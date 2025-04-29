import { describe, it, expect, beforeEach } from 'vitest';
import defineEntity from '@/entities/defineEntity';
import type { Entity } from '@/types/entities/defineEntity';

class TestEntity {
  isTest: boolean;

  constructor() {
    this.isTest = true;
  }
}

describe('Define entity', () => {
  interface Props {
    name: string;
    value: number;
    nested?: { key: string };
  }

  interface Methods {
    getName(): string;

    setName(name: string): void;
  }

  let entity: Entity<Props, Methods>;
  let props: Props;

  beforeEach(() => {
    props = { name: 'Test', value: 42 };

    const methods: Methods = {
      getName(): string {
        return props.name;
      },

      setName(name: string): void {
        props.name = name;
      },
    };

    entity = defineEntity(props, methods, TestEntity);
  });

  it('should get and set properties using base methods', () => {
    entity.set('name', 'Test');
    expect(entity.get('name')).toBe('Test');
    entity.set('name', 'Updated');
    expect(entity.get('name')).toBe('Updated');
  });

  it('should work with method aliases', () => {
    entity.setProperty('value', 100);
    expect(entity.getProperty('value')).toBe(100);

    expect(entity.hasProperty('value')).toBe(true);
    expect(entity.has('value')).toBe(true);
    // @ts-expect-error: for test reasons, we expect 'missing' to not exist
    expect(entity.has('missing')).toBe(false);
    // @ts-expect-error: for test reasons, we expect 'missing' to not be a valid property
    expect(entity.hasProperty('missing')).toBe(false);
  });

  it('should set multiple properties via setProperties', () => {
    entity.setProperties({ name: 'Batch', value: 999 });
    expect(entity.get('name')).toBe('Batch');
    expect(entity.get('value')).toBe(999);
  });

  it('should convert to map correctly', () => {
    entity.set('nested', { key: 'val' });

    const data = entity.serialize();
    expect(data.name).toBe('Test');
    expect(data.value).toBe('42');
    expect(data.nested).toBe(JSON.stringify({ key: 'val' }));
  });

  it('should call custom methods defined in methods object', () => {
    expect(entity.getName()).toBe('Test');
    entity.setName('Custom');
    expect(entity.getName()).toBe('Custom');
  });

  it('should preserve access to direct props', () => {
    expect(entity.name).toBe('Test');
    entity.name = 'DirectChange';
    expect(entity.name).toBe('DirectChange');
  });

  it('should allow adding unknown fields dynamically', () => {
    // @ts-expect-error: for test reasons, dynamic property added
    entity.set('customField', 'hello');
    // @ts-expect-error: for test reasons, dynamic property added
    expect(entity.get('customField')).toBe('hello');
    // @ts-expect-error: for test reasons, dynamic property added
    expect(entity.customField).toBe('hello');
  });

  it('should instanceof TestEntity', () => {
    expect(entity instanceof TestEntity).toBe(true);
  });
});

import { describe, it, expect } from 'vitest';

// converters
import itemToNotification from '@/converters/itemToNotification';

// entities
import Notification from '@/entities/Notification';

// types
import { Item } from '@/types/api/response';
import { NotificationProps } from '@/types/entities/Notification';

describe('itemToNotification converter', () => {
  it('should correctly convert item to Notification', () => {
    const item: Item = {
      property: [
        { name: 'number', value: 'L1' },
        { name: 'active', value: 'true' },
        { name: 'name', value: 'Sample name' },
        { name: 'protocol', value: 'WEBHOOK' },
        { name: 'events', value: 'LICENSEE_CREATED,LICENSE_CREATED' },
        { name: 'payload', value: '{$}' },
        { name: 'endpoint', value: 'http://some-endpoint.test' },
        { name: 'customProperty', value: 'X' },
      ],
      list: [],
      type: 'Notification',
    };

    const result = itemToNotification(item);

    const expected: NotificationProps<{ customProperty: string }> = {
      number: 'L1',
      active: true,
      name: 'Sample name',
      protocol: 'WEBHOOK',
      events: ['LICENSEE_CREATED', 'LICENSE_CREATED'],
      payload: '{$}',
      endpoint: 'http://some-endpoint.test',
      customProperty: 'X',
    };

    expect(result).toBeInstanceOf(Notification);
    expect(result).toStrictEqual(expected);
  });
});

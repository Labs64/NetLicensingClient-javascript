import { describe, it, expect } from 'vitest';
// constants
import Event from '@/constants/NotificationEvent';
import Protocol from '@/constants/NotificationProtocol';

// entities
import Notification from '@/entities/Notification';

// test utils
import expectEntity from '@test-utils/expectEntity';
import expectEntityProp from '@test-utils/expectEntityProp';

describe('Notification Entity', () => {
  it('should create a Notification with default properties', () => {
    const notification = Notification();

    expectEntity(notification, {
      active: undefined,
      number: undefined,
      name: undefined,
      protocol: undefined,
      events: undefined,
      payload: undefined,
      endpoint: undefined,
    });
  });

  it('should create a Notification with provided properties', () => {
    const props = {
      active: true,
      number: 'N123',
      name: 'Sample Name',
      protocol: Protocol.WEBHOOK,
      events: [Event.LICENSE_CREATED, Event.LICENSEE_CREATED],
      payload: '{$}',
      endpoint: 'http://some-endpoint.test',
    };

    const notification = Notification(props);

    expectEntity(notification, {
      active: true,
      number: 'N123',
      name: 'Sample Name',
      protocol: Protocol.WEBHOOK,
      events: [Event.LICENSE_CREATED, Event.LICENSEE_CREATED],
      payload: '{$}',
      endpoint: 'http://some-endpoint.test',
    });
  });

  it('should set and get active status correctly', () => {
    const notification = Notification();

    notification.setActive(true);
    expectEntityProp(notification, 'active', true);

    notification.active = false;
    expectEntityProp(notification, 'active', false);

    notification.set('active', true);
    expectEntityProp(notification, 'active', true);

    notification.setProperty('active', true);
    expectEntityProp(notification, 'active', true);
  });

  it('should set and get number correctly', () => {
    const notification = Notification();

    notification.setNumber('N123');
    expectEntityProp(notification, 'number', 'N123');

    notification.number = 'N456';
    expectEntityProp(notification, 'number', 'N456');

    notification.set('number', 'N789');
    expectEntityProp(notification, 'number', 'N789');

    notification.setProperty('number', 'N234');
    expectEntityProp(notification, 'number', 'N234');
  });

  it('should set and get name correctly', () => {
    const notification = Notification();
    notification.setName('N1');
    expectEntityProp(notification, 'name', 'N1');

    notification.name = 'N2';
    expectEntityProp(notification, 'name', 'N2');

    notification.set('name', 'N3');
    expectEntityProp(notification, 'name', 'N3');

    notification.setProperty('name', 'N4');
    expectEntityProp(notification, 'name', 'N4');
  });

  it('should set and get protocol correctly', () => {
    const n1 = Notification();
    n1.setProtocol(Protocol.WEBHOOK);
    expectEntityProp(n1, 'protocol', Protocol.WEBHOOK);

    const n2 = Notification();
    n2.protocol = Protocol.WEBHOOK;
    expectEntityProp(n2, 'protocol', Protocol.WEBHOOK);

    const n3 = Notification();
    n3.set('protocol', Protocol.WEBHOOK);
    expectEntityProp(n3, 'protocol', Protocol.WEBHOOK);

    const n4 = Notification();
    n4.setProperty('protocol', Protocol.WEBHOOK);
    expectEntityProp(n4, 'protocol', Protocol.WEBHOOK);
  });

  it('should set and get events correctly', () => {
    const notification = Notification();

    notification.setEvents([Event.LICENSE_CREATED]);
    expectEntityProp(notification, 'events', [Event.LICENSE_CREATED]);

    notification.events = [Event.LICENSEE_CREATED];
    expectEntityProp(notification, 'events', [Event.LICENSEE_CREATED]);

    notification.set('events', [Event.WARNING_LEVEL_CHANGED]);
    expectEntityProp(notification, 'events', [Event.WARNING_LEVEL_CHANGED]);

    notification.setProperty('events', [Event.WARNING_LEVEL_CHANGED]);
    expectEntityProp(notification, 'events', [Event.WARNING_LEVEL_CHANGED]);
  });

  it('should set and get payload correctly', () => {
    const notification = Notification();

    notification.setPayload('{$}');
    expectEntityProp(notification, 'payload', '{$}');

    notification.payload = '{$.timestamp}';
    expectEntityProp(notification, 'payload', '{$.timestamp}');

    notification.set('payload', '{$.origin}');
    expectEntityProp(notification, 'payload', '{$.origin}');

    notification.setProperty('payload', '{$.entities}');
    expectEntityProp(notification, 'payload', '{$.entities}');
  });

  it('should set and get endpoint correctly', () => {
    const notification = Notification();

    notification.setEndpoint('endpoint 1');
    expectEntityProp(notification, 'endpoint', 'endpoint 1');

    notification.endpoint = 'endpoint 2';
    expectEntityProp(notification, 'endpoint', 'endpoint 2');

    notification.set('endpoint', 'endpoint 3');
    expectEntityProp(notification, 'endpoint', 'endpoint 3');

    notification.setProperty('endpoint', 'endpoint 4');
    expectEntityProp(notification, 'endpoint', 'endpoint 4');
  });

  it('should allow custom properties', () => {
    const notification = Notification({ number: 'N999', foo: 'bar', isFooBar: true });
    expect(notification.foo).toBe('bar');
    expect(notification.isFooBar).toBe(true);
  });

  it('should create an instance of Notification', () => {
    const notification = Notification();
    expect(notification instanceof Notification).toBe(true);
  });

  it('should be correct map', () => {
    const notification = Notification({
      active: true,
      number: 'N123',
      name: 'Sample Name',
      protocol: Protocol.WEBHOOK,
      events: [Event.LICENSE_CREATED, Event.LICENSEE_CREATED],
      payload: '{$}',
      endpoint: 'http://some-endpoint.test',
    });

    expect(notification.serialize()).toStrictEqual({
      active: 'true',
      number: 'N123',
      name: 'Sample Name',
      protocol: 'WEBHOOK',
      events: 'LICENSE_CREATED,LICENSEE_CREATED',
      payload: '{$}',
      endpoint: 'http://some-endpoint.test',
    });
  });
});

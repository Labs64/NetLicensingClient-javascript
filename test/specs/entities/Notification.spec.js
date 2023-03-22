import Notification from '@/entities/Notification';

describe('entities/Notification', () => {
    let notification;

    beforeEach(() => {
        notification = new Notification();
    });

    it('check "number" property setters/getters', () => {
        notification.setProperty('number', 'number_0');
        expect(notification.getProperty('number')).toBe('number_0');
        expect(notification.getNumber()).toBe('number_0');
        expect(notification.number).toBe('number_0');

        notification.setNumber('number_1');
        expect(notification.getProperty('number')).toBe('number_1');
        expect(notification.getNumber()).toBe('number_1');
        expect(notification.number).toBe('number_1');

        notification.number = 'number_2';
        expect(notification.getProperty('number')).toBe('number_2');
        expect(notification.getNumber()).toBe('number_2');
        expect(notification.number).toBe('number_2');
    });

    it('check "name" property setters/getters', () => {
        notification.setProperty('name', 'name_0');
        expect(notification.getProperty('name')).toBe('name_0');
        expect(notification.getName()).toBe('name_0');
        expect(notification.name).toBe('name_0');

        notification.setName('name_1');
        expect(notification.getProperty('name')).toBe('name_1');
        expect(notification.getName()).toBe('name_1');
        expect(notification.name).toBe('name_1');

        notification.name = 'name_2';
        expect(notification.getProperty('name')).toBe('name_2');
        expect(notification.getName()).toBe('name_2');
        expect(notification.name).toBe('name_2');
    });

    it('check "active" property setters/getters', () => {
        notification.setProperty('active', true);
        expect(notification.getProperty('active')).toBe(true);
        expect(notification.getActive()).toBe(true);
        expect(notification.active).toBe(true);

        notification.setActive(false);
        expect(notification.getProperty('active')).toBe(false);
        expect(notification.getActive()).toBe(false);
        expect(notification.active).toBe(false);

        notification.active = true;
        expect(notification.getProperty('active')).toBe(true);
        expect(notification.getActive()).toBe(true);
        expect(notification.active).toBe(true);
    });

    it('check "type" property setters/getters', () => {
        notification.setProperty('type', 'WEBHOOK');
        expect(notification.getProperty('type')).toBe('WEBHOOK');
        expect(notification.getType()).toBe('WEBHOOK');
        expect(notification.type).toBe('WEBHOOK');

        notification.setType('EMAIL');
        expect(notification.getProperty('type')).toBe('EMAIL');
        expect(notification.getType()).toBe('EMAIL');
        expect(notification.type).toBe('EMAIL');

        notification.type = 'EMAIL';
        expect(notification.getProperty('type')).toBe('EMAIL');
        expect(notification.getType()).toBe('EMAIL');
        expect(notification.type).toBe('EMAIL');
    });

    it('check "events" property setters/getters', () => {
        notification.setProperty('events', 'CREATE_LICENSEE,CREATE_LICENSE');
        expect(notification.getProperty('events')).toBe('CREATE_LICENSEE,CREATE_LICENSE');
        expect(notification.getEvents()).toBe('CREATE_LICENSEE,CREATE_LICENSE');
        expect(notification.events).toBe('CREATE_LICENSEE,CREATE_LICENSE');

        notification.setEvents('CREATE_LICENSEE');
        expect(notification.getProperty('events')).toBe('CREATE_LICENSEE');
        expect(notification.getEvents()).toBe('CREATE_LICENSEE');
        expect(notification.events).toBe('CREATE_LICENSEE');

        notification.events = 'CREATE_LICENSE';
        expect(notification.getProperty('events')).toBe('CREATE_LICENSE');
        expect(notification.getEvents()).toBe('CREATE_LICENSE');
        expect(notification.events).toBe('CREATE_LICENSE');
    });

    it('check "payload" property setters/getters', () => {
        notification.setProperty('payload', 'some-payload');
        expect(notification.getProperty('payload')).toBe('some-payload');
        expect(notification.getPayload()).toBe('some-payload');
        expect(notification.payload).toBe('some-payload');

        notification.setPayload('some-payload-1');
        expect(notification.getProperty('payload')).toBe('some-payload-1');
        expect(notification.getPayload()).toBe('some-payload-1');
        expect(notification.payload).toBe('some-payload-1');

        notification.payload = 'some-payload-2';
        expect(notification.getProperty('payload')).toBe('some-payload-2');
        expect(notification.getPayload()).toBe('some-payload-2');
        expect(notification.payload).toBe('some-payload-2');
    });

    it('check "url" property setters/getters', () => {
        notification.setProperty('url', 'https://example.com');
        expect(notification.getProperty('url')).toBe('https://example.com');
        expect(notification.getURL()).toBe('https://example.com');
        expect(notification.url).toBe('https://example.com');

        notification.setURL('https://example2.com');
        expect(notification.getProperty('url')).toBe('https://example2.com');
        expect(notification.getURL()).toBe('https://example2.com');
        expect(notification.url).toBe('https://example2.com');

        notification.url = 'https://example3.com';
        expect(notification.getProperty('url')).toBe('https://example3.com');
        expect(notification.getURL()).toBe('https://example3.com');
        expect(notification.url).toBe('https://example3.com');
    });

    it('check "custom-property" property setters/getters', () => {
        notification.setProperty('custom_property', 'my_custom_property_0');
        expect(notification.getProperty('custom_property')).toBe('my_custom_property_0');
        expect(notification.custom_property).toBe('my_custom_property_0');

        notification.custom_property = 'my_custom_property_1';
        expect(notification.getProperty('custom_property')).toBe('my_custom_property_1');
        expect(notification.custom_property).toBe('my_custom_property_1');
    });

    it('check "removeProperty" method', () => {
        notification.setProperty('number', 'number');
        notification.removeProperty('number');

        expect(notification.getProperty('number')).toBe(undefined);
        expect(notification.number).toBe(undefined);
        expect(notification.getNumber()).toBe(undefined);
    });

    it('check "removeDefine" method', () => {
        notification.setProperty('number', 'number');
        notification.removeDefine('number');

        expect(notification.number).toBe(undefined);
        expect(notification.getProperty('number')).toBe('number');
        expect(notification.getNumber()).toBe('number');

        notification.number = 'number_1';

        expect(notification.number).toBe('number_1');
        expect(notification.getProperty('number')).toBe('number');
        expect(notification.getNumber()).toBe('number');
    });
});

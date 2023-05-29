import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import notificationFactory from 'test@/factories/notification';
import Item from 'test@/response/Item';
import Info from 'test@/response/Info';
import Response from 'test@/response';
import Context from '@/vo/Context';
import Notification from '@/entities/Notification';
import NotificationService from '@/services/NotificationService';
import Constants from '@/Constants';
import Service from '@/services/Service';
import NlicError from '@/errors/NlicError';

describe('services/NotificationService', () => {
    let context;
    let mock;

    beforeAll(() => {
        context = new Context().setUsername('Demo').setPassword('demo');
    });

    beforeEach(() => {
        mock = new AxiosMockAdapter(axios);
    });

    it('check "create" method', async () => {
        const notification = notificationFactory();

        // configure mock for create request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}`)
            .reply(200, new Response(
                new Item({ ...notification }, 'VendorNotification'),
            ));

        const entity = await NotificationService.create(context, notification);

        expect(entity instanceof Notification).toBe(true);
        expect(entity.getProperty('number', null)).toBe(notification.number);
        expect(entity.getProperty('name', null)).toBe(notification.name);
        expect(entity.getProperty('active', null)).toBe(notification.active);
        expect(entity.getProperty('type', null)).toBe(notification.type);
        expect(entity.getProperty('events', null)).toBe(notification.events);
        expect(entity.getProperty('payload', null)).toBe(notification.payload);
        expect(entity.getProperty('url', null)).toBe(notification.url);
        expect(entity.getProperty('custom_property', null)).toBe(notification.custom_property);
    });

    describe('check "get" method', () => {
        it('should return entity', async () => {
            const notification = notificationFactory();

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}/${notification.number}`)
                .reply(200, new Response(
                    new Item({ ...notification }, 'VendorNotification'),
                ));

            const entity = await NotificationService.get(context, notification.number);

            expect(entity instanceof Notification).toBe(true);
            expect(entity.getProperty('number', null)).toBe(notification.number);
            expect(entity.getProperty('name', null)).toBe(notification.name);
            expect(entity.getProperty('active', null)).toBe(notification.active);
            expect(entity.getProperty('type', null)).toBe(notification.type);
            expect(entity.getProperty('events', null)).toBe(notification.events);
            expect(entity.getProperty('payload', null)).toBe(notification.payload);
            expect(entity.getProperty('url', null)).toBe(notification.url);
            expect(entity.getProperty('custom_property', null)).toBe(notification.custom_property);
        });

        it('should throw error when entity not found', async () => {
            const number = 'Any-number-that-not-exist';

            // configure mock for get request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}/${number}`)
                .reply(400, new Response(
                    new Info('Requested notification does not exist', 'NotFoundException'),
                ));
            try {
                await NotificationService.get(context, number);
                fail('should throw error');
            } catch (e) {
                expect(e instanceof NlicError).toBe(true);
            }
        });
    });

    describe('check "list" method', () => {
        it('should return entities array', async () => {
            const notifications = notificationFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}`)
                .reply(200, new Response(notifications.map((v) => new Item(v, 'VendorNotification'))));

            const list = await NotificationService.list(context);

            expect(Array.isArray(list)).toBe(true);
            expect(list.length).toBe(10);

            list.forEach((entity, k) => {
                const notification = notifications[k];
                expect(entity.getProperty('number', null)).toBe(notification.number);
                expect(entity.getProperty('name', null)).toBe(notification.name);
                expect(entity.getProperty('active', null)).toBe(notification.active);
                expect(entity.getProperty('type', null)).toBe(notification.type);
                expect(entity.getProperty('events', null)).toBe(notification.events);
                expect(entity.getProperty('payload', null)).toBe(notification.payload);
                expect(entity.getProperty('url', null)).toBe(notification.url);
                expect(entity.getProperty('custom_property', null)).toBe(notification.custom_property);
            });
        });

        it('should has pagination', async () => {
            const notifications = notificationFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}`)
                .reply(() => {
                    const response = new Response(notifications.map((v) => new Item(v, 'VendorHook')));
                    response.setPage(2, 10, 1000);

                    return [200, response];
                });

            const list = await NotificationService.list(context, { page: 2, items: 10 });

            expect(list.getPageNumber()).toBe(2);
            expect(list.getItemsNumber()).toBe(10);
            expect(list.getTotalPages()).toBe(100);
            expect(list.getTotalItems()).toBe(1000);
            expect(list.hasNext()).toBe(true);
        });

        it('check filter', async () => {
            const notifications = notificationFactory(10);

            // configure mock for list request
            mock.onGet(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}`)
                .reply(200, new Response(notifications.map((v) => new Item(v))));

            // if filter parameter is object
            await NotificationService.list(context, { page: 2, items: 10 });

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=2;items=10');

            // if filter parameter is string
            await NotificationService.list(context, 'page=3;items=20');

            expect(Service.getLastHttpRequestInfo().config.params.filter).toBe('page=3;items=20');
        });
    });

    it('check "update" method', async () => {
        let notification = notificationFactory();

        // configure mock for get request
        mock.onGet(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}/${notification.number}`)
            .reply(200, new Response(
                new Item({ ...notification }, 'VendorNotification'),
            ));

        notification = await NotificationService.get(context, notification.number);

        notification.setProperty('name', 'MY-NAME-UPDATED');
        notification.setProperty('custom_property', 'MY-CUSTOM-PROPERTY-UPDATED');

        // configure mock for update request
        mock.onPost(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}/${notification.number}`)
            .reply(200, new Response(
                new Item({ ...notification }, 'VendorNotification'),
            ));

        const updated = await NotificationService.update(context, notification.getProperty('number'), notification);

        expect(updated instanceof Notification).toBe(true);
        expect(updated.getProperty('name', null)).toBe(notification.name);
        expect(updated.getProperty('custom_property', null)).toBe(notification.custom_property);
    });

    it('check "delete" method', async () => {
        const number = 'some-number';

        // configure mock for delete request
        mock.onDelete(`${context.getBaseUrl()}/${Constants.Notification.ENDPOINT_PATH}/${number}`)
            .reply(204);

        await NotificationService.delete(context, number);

        expect(Service.getLastHttpRequestInfo().status).toBe(204);
    });
});

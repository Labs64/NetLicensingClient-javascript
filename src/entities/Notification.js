/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

import BaseEntity from './BaseEntity';

/**
 * NetLicensing Notification entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the notification. Vendor can assign this number when creating a notification or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the notification is disabled. The notification will not be fired when the event triggered.
 * @property boolean active
 *
 * Notification name.
 * @property string name
 *
 * Notification type. Indicate the method of transmitting notification, ex: EMAIL, WEBHOOK.
 * @property float type
 *
 * Comma separated string of events that fire the notification when emitted.
 * @property string events
 *
 * Notification response payload.
 * @property string payload
 *
 * Notification response url. Optional. Uses only for WEBHOOK type notification.
 * @property string url
 *
 * Arbitrary additional user properties of string type may be associated with each notification. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 *
 * @constructor
 */
export default class Notification extends BaseEntity {
    constructor(properties) {
        super({
            properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
                protocol: 'string',
                events: 'string',
                payload: 'string',
                endpoint: 'string',
            },
        });
    }

    setNumber(number) {
        return this.setProperty('number', number);
    }

    getNumber(def) {
        return this.getProperty('number', def);
    }

    setActive(active) {
        return this.setProperty('active', active);
    }

    getActive(def) {
        return this.getProperty('active', def);
    }

    setName(name) {
        return this.setProperty('name', name);
    }

    getName(def) {
        return this.getProperty('name', def);
    }

    setProtocol(type) {
        return this.setProperty('protocol', type);
    }

    getProtocol(def) {
        return this.getProperty('protocol', def);
    }

    setEvents(events) {
        return this.setProperty('events', events);
    }

    getEvents(def) {
        return this.getProperty('events', def);
    }

    setPayload(payload) {
        return this.setProperty('payload', payload);
    }

    getPayload(def) {
        return this.getProperty('payload', def);
    }

    setEndpoint(endpoint) {
        return this.setProperty('endpoint', endpoint);
    }

    getEndpoint(def) {
        return this.getProperty('endpoint', def);
    }
}

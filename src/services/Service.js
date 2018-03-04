/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import axios from 'axios';
import Context from '../vo/Context';
import Constans from '../Constants';
import BaseEntity from '../entities/BaseEntity';

let httpXHR = {};

export default class Service {
    static getLastHttpRequestInfo() {
        return httpXHR;
    }

    /**
     * Helper method for performing GET request to N
     etLicensing API services. Finds and returns first suitable item with
     * type resultType from the response.
     *
     * Context for the NetLicensing API call
     * @param context
     *
     * the REST URL template
     * @param urlTemplate
     *
     * The REST query parameters values. May be null if there are no parameters.
     * @param queryParams
     *
     * the type of the result
     * @param resultType
     *
     * @returns {Promise}
     */
    static get(context, urlTemplate, queryParams, resultType) {
        return Service
            .request(context, 'get', urlTemplate, queryParams)
            .then(response => ((response) ? Service.getEntity(resultType, response.data.items.item[0]) : null));
    }

    /**
     * Helper method for performing GET request to NetLicensing API service that returns page of items with type
     * resultType.
     *
     * context for the NetLicensing API call
     * @param context
     *
     * the REST URL template
     * @param urlTemplate
     *
     * The REST query parameters values. May be null if there are no parameters.
     * @param queryParams
     *
     * the type of the result
     * @param resultType
     *
     *
     * @returns {Promise}
     */
    static list(context, urlTemplate, queryParams, resultType) {
        return Service
            .request(context, 'get', urlTemplate, queryParams)
            .then(response => ((response)
                ? response.data.items.item.map(item => Service.getEntity(resultType, item))
                : []));
    }

    /**
     * Helper method for performing POST request to NetLicensing API services. Finds and returns first suitable item
     * with type resultType from the response.
     *
     * context for the NetLicensing API call
     * @param context
     *
     * the REST URL template
     * @param urlTemplate
     *
     * The REST query parameters values. May be null if there are no parameters.
     * @param queryParams
     *
     * he type of the result
     * @param resultType
     *
     * @returns {Promise}
     */
    static post(context, urlTemplate, queryParams, resultType) {
        return Service
            .request(context, 'post', urlTemplate, queryParams)
            .then(response => ((response) ? Service.getEntity(resultType, response.data.items.item[0]) : null));
    }

    /**
     *
     * @param context
     * @param urlTemplate
     * @param queryParams
     * @returns {Promise}
     */
    static delete(context, urlTemplate, queryParams) {
        return Service
            .request(context, 'delete', urlTemplate, queryParams)
            .then(response => (response.status === 204));
    }

    /**
     * Send request to NetLicensing  RestApi
     * @param context
     * @param method
     * @param urlTemplate
     * @param queryParams
     * @returns {Promise}
     */
    static request(context, method, urlTemplate, queryParams) {
        if (!(context instanceof Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

        const template = String(urlTemplate);
        const params = queryParams || {};

        if (!template) throw new TypeError('Url template must be specified');

        // validate http method
        if (['get', 'post', 'delete'].indexOf(method.toLowerCase()) < 0) {
            throw new Error(`Invalid request type:${method}, allowed requests types: GET, POST, DELETE.`);
        }

        // validate context
        if (!context.getBaseUrl(null)) {
            throw new Error('Base url must be specified');
        }

        if (!Service.isValidUrl(String(context.getBaseUrl()))) {
            throw new Error(`Base url "${context.getBaseUrl()}" is not a valid URL`);
        }

        let restUrl = `${context.getBaseUrl()}/${urlTemplate}`;

        restUrl = restUrl.replace(/([^:]\/)\/+/g, '$1');

        // validate baseUrl +  urlTemplate
        if (!Service.isValidUrl(String(restUrl))) {
            throw new Error(`Rest url "${restUrl}" is not a valid URL`);
        }

        const request = {
            url: restUrl,
            method: method.toLowerCase(),
            responseType: 'json',
            headers: {},
            transformRequest: [(data, headers) => {
                if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
                    return Service.toQueryString(data);
                }
                return data;
            }],
        };

        if (['put', 'post', 'patch'].indexOf(request.method)) {
            if (request.method === 'post') {
                request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            request.data = params;
        } else {
            request.params = params;
        }

        switch (context.getSecurityMode()) {
            // Basic Auth
            case Constans.BASIC_AUTHENTICATION:
                if (!context.getUsername()) throw new Error('Missing parameter "username"');
                if (!context.getPassword()) throw new Error('Missing parameter "password"');

                request.auth = {
                    username: context.getUsername(),
                    password: context.getPassword(),
                };
                break;
            // ApiKey Auth
            case Constans.APIKEY_IDENTIFICATION:
                if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');

                request.headers.Authorization = `Basic ${btoa(`apiKey:${context.getApiKey()}`)}`;
                break;
            default:
                throw new Error('Unknown security mode');
        }

        return axios(request)
            .then((response) => {
                httpXHR = response;
                return response;
            })
            .catch((error) => {
                httpXHR = error;

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const info = error.response.data.infos.info[0] || null;

                    if (info && info.id === 'NotFoundException') {
                        return Promise.resolve(null);
                    }

                    const reasonPhrase = info.value || 'Unknown';
                    throw new Error(`Unsupported response status code ${error.response.status}: ${reasonPhrase}`);
                }

                return Promise.reject(error);
            });
    }

    /**
     * Create Entity from item
     * @param resultType
     * @param item
     * @returns {*}
     */
    static getEntity(resultType, item) {
        const properties = item.property || null;
        const lists = item.list || null;

        if (!resultType) return item;

        // eslint-disable-next-line new-cap
        const entity = new resultType();

        if (!(entity instanceof BaseEntity)) {
            throw new Error(`Invalid entity ${resultType}, entity must be instanceof BaseEntity`);
        }

        properties.forEach(({ name, value }) => {
            entity.setProperty(name, value);
        });

        if (lists) {
            lists.forEach(({ name, property }) => {
                const setListMethod = `setList${name.charAt(0).toUpperCase()}${name.substr(1, name.length - 1)}`;
                const setListsMethod = 'setLists';

                if (typeof entity[setListMethod] !== 'function' && typeof entity[setListsMethod] !== 'function') {
                    // eslint-disable-next-line no-console
                    console.warn(`Methods: ${setListMethod},${setListsMethod} not found in ${item.type} 
                    for list property ${name}`);
                    return;
                }

                if (typeof entity[setListMethod] === 'function') {
                    entity[setListMethod](property);
                    return;
                }

                if (typeof entity[setListsMethod] === 'function') {
                    entity[setListsMethod](name, property);
                }
            });
        }

        return entity;
    }

    static isValidUrl(url) {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

        return pattern.test(url);
    }

    static toQueryString(data, prefix) {
        const query = [];

        const has = Object.prototype.hasOwnProperty;

        Object.keys(data).forEach((key) => {
            if (has.call(data, key)) {
                const k = prefix ? `${prefix}[${key}]` : key;
                let v = data[key];
                v = (v instanceof Date) ? v.toISOString() : v;
                query.push((v !== null && typeof v === 'object') ?
                    Service.toQueryString(v, k) :
                    `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
            }
        });

        return query.join('&').replace(/%5B[0-9]+%5D=/g, '=');
    }
}

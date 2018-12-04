/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import axios from 'axios';
import Constants from '../Constants';
import NlicError from '../errors/NlicError';

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
            .then(response => ((response.data)
                ? Service.getEntity(resultType, Service.getItem(response, [])[0])
                : null))
            .catch((e) => {
                const { response } = e;

                if (response) {
                    const { data } = response;

                    if (data) {
                        if (Service.isNotFound(response)) {
                            return Promise.resolve(null);
                        }
                    }
                }

                throw e;
            });
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
            .then(response => ((response.data)
                ? Service.getItem(response, []).map(item => Service.getEntity(resultType, item))
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
            .then(response => ((response.data) ? Service.getEntity(resultType, Service.getItem(response)[0]) : null));
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

        if (['put', 'post', 'patch'].indexOf(request.method) >= 0) {
            if (request.method === 'post') {
                request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            request.data = params;
        } else {
            request.params = params;
        }

        switch (context.getSecurityMode()) {
            // Basic Auth
            case Constants.BASIC_AUTHENTICATION:
                if (!context.getUsername()) throw new Error('Missing parameter "username"');
                if (!context.getPassword()) throw new Error('Missing parameter "password"');

                request.auth = {
                    username: context.getUsername(),
                    password: context.getPassword(),
                };
                break;
            // ApiKey Auth
            case Constants.APIKEY_IDENTIFICATION:
                if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');

                request.headers.Authorization = `Basic ${btoa(`apiKey:${context.getApiKey()}`)}`;
                break;
            // without authorization
            case Constants.ANONYMOUS_IDENTIFICATION:
                break;
            default:
                throw new Error('Unknown security mode');
        }

        return axios(request)
            .then((response) => {
                httpXHR = response;
                return response;
            })
            .catch((e) => {
                httpXHR = e;

                const error = new NlicError(e);
                error.response = e.response;

                if (e.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const { data } = e.response;

                    if (data) {
                        const info = Service.getInfo(e.response, [])[0];
                        error.message = info.value || 'Unknown';
                    }
                }

                throw error;
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

    static getInfo(response, def) {
        try {
            return response.data.infos.info || def;
        } catch (e) {
            return def;
        }
    }

    static getItem(response, def) {
        try {
            return response.data.items.item || def;
        } catch (e) {
            return def;
        }
    }

    static isNotFound(response) {
        const info = Service.getInfo(response, [{}])[0];
        return (info && info.id === 'NotFoundException');
    }

    static isValidUrl(url) {
        const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
            + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' // domain name
            + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
            + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
            + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
            + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

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
                query.push((v !== null && typeof v === 'object')
                    ? Service.toQueryString(v, k)
                    : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
            }
        });

        return query.join('&').replace(/%5B[0-9]+%5D=/g, '=');
    }
}

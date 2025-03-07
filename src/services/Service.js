/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
import axios from 'axios';
import btoa from 'btoa';
import Constants from '../Constants';
import NlicError from '../errors/NlicError';
import pkg from '../../package.json';

let httpXHR = {};
let axiosInstance = null;

export default class Service {
    static getAxiosInstance() {
        return axiosInstance || axios;
    }

    static setAxiosInstance(instance) {
        axiosInstance = instance;
    }

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
     * @returns {Promise}
     */
    static get(context, urlTemplate, queryParams) {
        return Service.request(context, 'get', urlTemplate, queryParams);
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
     * @returns {Promise}
     */
    static post(context, urlTemplate, queryParams) {
        return Service.request(context, 'post', urlTemplate, queryParams);
    }

    /**
     *
     * @param context
     * @param urlTemplate
     * @param queryParams
     * @returns {Promise}
     */
    static delete(context, urlTemplate, queryParams) {
        return Service.request(context, 'delete', urlTemplate, queryParams);
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

        const request = {
            url: encodeURI(`${context.getBaseUrl()}/${template}`),
            method: method.toLowerCase(),
            responseType: 'json',
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            transformRequest: [(data, headers) => {
                if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
                    return Service.toQueryString(data);
                }

                if (!headers['NetLicensing-Origin']) {
                    // eslint-disable-next-line no-param-reassign
                    headers['NetLicensing-Origin'] = `NetLicensing/Javascript ${pkg.version}`;
                }
                return data;
            }],
        };

        // only node.js has a process variable that is of [[Class]] process
        if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
            request.headers['User-agent'] = `NetLicensing/Javascript ${pkg.version}/node&${process.version}`;
        }

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

        return Service.getAxiosInstance()(request)
            .then((response) => {
                response.infos = Service.getInfo(response, []);

                const errors = response.infos.filter(({ type }) => type === 'ERROR');

                if (errors.length) {
                    const error = new Error(errors[0].value);
                    error.config = response.config;
                    error.request = response.request;
                    error.response = response;
                    throw error;
                }

                httpXHR = response;
                return response;
            })
            .catch((e) => {
                if (e.response) {
                    httpXHR = e.response;

                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                    const error = new NlicError(e);

                    error.config = e.config;
                    error.code = e.code;
                    error.request = e.request;
                    error.response = e.response;

                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    const { data } = e.response;

                    if (data) {
                        error.infos = Service.getInfo(e.response, []);

                        const [info = {}] = error.infos.filter(({ type }) => type === 'ERROR');
                        error.message = info.value || 'Unknown';
                    }

                    throw error;
                }

                throw e;
            });
    }

    static getInfo(response, def) {
        try {
            return response.data.infos.info || def;
        } catch (e) {
            return def;
        }
    }

    static toQueryString(data, prefix) {
        const query = [];

        const has = Object.prototype.hasOwnProperty;

        Object.keys(data)
            .forEach((key) => {
                if (has.call(data, key)) {
                    const k = prefix ? `${prefix}[${key}]` : key;
                    let v = data[key];
                    v = (v instanceof Date) ? v.toISOString() : v;
                    query.push((v !== null && typeof v === 'object')
                        ? Service.toQueryString(v, k)
                        : `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
                }
            });

        return query.join('&')
            .replace(/%5B[0-9]+%5D=/g, '=');
    }
}

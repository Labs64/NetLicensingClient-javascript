/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.Service = (function () {
    var instance;

    function createInstance() {
        var instance = {};

        var __httpXHR = {};

        instance.getLastHttpRequestInfo = function () {
            return Object.assign({}, __httpXHR)
        };
        /**
         * Helper method for performing GET request to NetLicensing API services. Finds and returns first suitable item with
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
        instance.get = function (context, urlTemplate, queryParams, resultType) {
            return this.request(context, 'get', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    return (!instance.__has(httpXHR.response, 'items.item.0'))
                        ? null
                        : instance.__getEntity(resultType, instance.__get(httpXHR.response, 'items.item.0'));
                });
        };

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
        instance.list = function (context, urlTemplate, queryParams, resultType) {
            return this.request(context, 'get', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    var entities = [],
                        items = instance.__has(httpXHR.response, 'items.item')
                            ? instance.__get(httpXHR.response, 'items.item')
                            : [],
                        length = items.length;

                    for (var i = 0; i < length; i++) {
                        entities.push(instance.__getEntity(resultType, items[i]));
                    }

                    return entities;
                });
        };

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
        instance.post = function (context, urlTemplate, queryParams, resultType) {
            return this.request(context, 'post', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    return (!instance.__has(httpXHR.response, 'items.item.0'))
                        ? null
                        : instance.__getEntity(resultType, instance.__get(httpXHR.response, 'items.item.0'));
                });
        };

        /**
         *
         * @param context
         * @param urlTemplate
         * @param queryParams
         * @returns {Promise}
         */
        instance.delete = function (context, urlTemplate, queryParams) {
            return this.request(context, 'delete', urlTemplate, queryParams)
                .then(function (httpXHR) {
                    return (httpXHR.status == 204);
                });
        };

        /**
         * Send request to NetLicensing  RestApi
         * @param context
         * @param method
         * @param urlTemplate
         * @param queryParams
         */
        instance.request = function (context, method, urlTemplate, queryParams) {

            if (!(context instanceof NetLicensing.Context)) throw new TypeError('context must be an instance of NetLicensing.Context');

            urlTemplate = String(urlTemplate);
            queryParams = queryParams || {};

            if (!urlTemplate) throw new TypeError('Url template must be specified');

            //validate http method
            this.__validateMethod(method);

            //validate context
            this.__validateBaseUrl(context);

            var restUrl = context.getBaseUrl() + '/' + urlTemplate;

            restUrl = restUrl.replace(/([^:]\/)\/+/g, "$1");

            //validate baseUrl +  urlTemplate
            this.__validateRestUrl(restUrl);

            //configure
            var headers = {Accept: 'application/json'};

            switch (context.getSecurityMode()) {
                case NetLicensing.Context.BASIC_AUTHENTICATION:
                    if (!context.getUsername()) throw new Error('Missing parameter "username"');
                    if (!context.getPassword()) throw new Error('Missing parameter "password"');

                    headers['Authorization'] = 'Basic ' + btoa(context.getUsername() + ':' + context.getPassword());
                    break;
                case NetLicensing.Context.APIKEY_IDENTIFICATION:
                    if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');

                    headers['Authorization'] = 'Basic ' + btoa('apiKey:' + context.getApiKey());
                    break;
                default:
                    throw new Error('Unknown security mode');
                    break;
            }

            return new NetLicensing.HttpRequest().send({
                url: restUrl,
                method: method,
                headers: headers,
                data: queryParams,
            }).then(function (httpXHR) {
                return __httpXHR = httpXHR;
            }).catch(function (httpXHR) {
                __httpXHR = httpXHR;
                var reasonPhrase = httpXHR.response.infos.info[0].value || 'Unknown';
                throw new Error('Unsupported response status code ' + httpXHR.status + ': ' + reasonPhrase);
            });
        };

        /**
         * Validate http method
         * @param method
         * @private
         */
        instance.__validateMethod = function (method) {
            if (['get', 'post', 'delete'].indexOf(method.toLowerCase()) < 0) {
                throw new Error('Invalid request type:' + method + ', allowed requests types: GET, POST, DELETE.');
            }
        };

        instance.__isValidUrl = function (url) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

            return pattern.test(url);
        };

        instance.__validateBaseUrl = function (context) {
            if (!context.getBaseUrl(null)) {
                throw new Error('Base url must be specified');
            }

            if (!this.__isValidUrl(String(context.getBaseUrl()))) {
                throw new Error('Base url "' + context.getBaseUrl() + '" is not a valid URL');
            }
        };

        instance.__validateRestUrl = function (restUrl) {
            if (!this.__isValidUrl(String(restUrl))) {
                throw new Error('Rest url "' + restUrl + '" is not a valid URL');
            }
        };

        instance.__has = function (obj, key) {
            return key.split(".").every(function (x) {
                if (typeof obj != "object" || obj === null || !x in obj) return false;
                obj = obj[x];
                return true;
            });
        };

        instance.__get = function (obj, key) {
            return key.split(".").reduce(function (o, x) {
                return (typeof o == "undefined" || o === null) ? o : o[x];
            }, obj);
        };

        instance.__getEntity = function (resultType, item) {
            var properties = item.property || null;
            var lists = item.list || null;

            if (!resultType) return item;

            var entity = new resultType();

            if (!(entity instanceof NetLicensing.BaseEntity)) {
                throw new Error('Invalid entity ' + resultType + ', entity must be instanceof NetLicensing.BaseEntity');
            }

            var propertiesLength = properties.length;

            for (var p = 0; p < propertiesLength; p++) {
                entity.setProperty(properties[p].name, properties[p].value)
            }

            if (lists) {
                var listsLength = lists.length;
                for (var l = 0; l < listsLength; l++) {
                    var name = lists[l].name;
                    var setListMethod = '__setList' + name.charAt(0).toUpperCase() + name.substr(1, name.length - 1);
                    var setListsMethod = '__setLists';

                    if (typeof entity[setListMethod] !== 'function' && typeof entity[setListsMethod] !== 'function') {
                        console.warn('Methods: ' + setListMethod + ',' + setListsMethod + ' not found in ' + item.type + ' for list property ' + name);
                        continue;
                    }

                    var listProperty = lists[l].property || null;

                    if (typeof entity[setListMethod] === 'function') {
                        entity[setListMethod](listProperty);
                        continue;
                    }

                    if (typeof entity[setListsMethod] === 'function') {
                        entity[setListsMethod](name, listProperty);
                    }
                }
            }

            return entity;
        };

        Object.freeze(instance);

        return instance;
    }

    return {
        getInstance: function () {
            if (!instance) instance = createInstance();
            return instance;
        }
    };
})();
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

//namespace
var NetLicensing  = NetLicensing  || {};

NetLicensing.HttpRequest = function () {

};

NetLicensing.HttpRequest.prototype.__serialize = function (data, prefix) {
    var query = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var k = prefix ? prefix + '[' + key + ']' : key;
            var v = data[key];
            v = (v instanceof Date) ? v.toISOString() : v;
            query.push((v !== null && typeof v === 'object') ?
                this.__serialize(v, k) :
            encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return query.join("&").replace(/%5B[0-9]+%5D=/g, '=');
};

NetLicensing.HttpRequest.prototype.__parseQuery = function (url) {
    var query = {};
    var queryPos = url.indexOf('?');
    var parts = url.substr(queryPos + 1).split('&');
    if (queryPos !== -1 || url.indexOf("=") !== -1) {
        var length = parts.length;
        for (var i = 0; i < length; i++) {
            var part = parts[i].split('=');
            query[decodeURIComponent(part[0])] = part.hasOwnProperty(1) ? decodeURIComponent(part[1]) : null;
        }
    }
    return query;
};

NetLicensing.HttpRequest.prototype.__parseHeadersStr = function (headers) {
    if (typeof headers !== 'string') return headers;
    var responseHeaders = {};
    headers = headers.split("\n");
    var length = headers.length;
    for (var i = 0; i < length; i++) {
        var part = headers[i].split(':');
        if (part[0]) responseHeaders[part[0].toLowerCase()] = part[1].trim();
    }
    return responseHeaders;
};

NetLicensing.HttpRequest.prototype.send = function (config) {
    var self = this;

    if (typeof module !== 'undefined' && module.exports) {
        return this.__httpSend(config);
    }

    return new Promise(function (resolve, reject) {
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        var xhr = new XHR();

        var httpSetup = Object.assign({}, {
            method: 'GET',
            url: '/',
            headers: {},
            data: {},
            timeout: 0
        }, config);

        httpSetup.method = httpSetup.method.toUpperCase();
        httpSetup.data = self.__serialize(httpSetup.data);
        httpSetup.headers = Object.assign({}, {Accept: 'application/json, text/plain, */*'}, httpSetup.headers);

        switch (httpSetup.method) {
            case 'DELETE':
            case 'GET':
                if (httpSetup.data.length) httpSetup.url += (Object.keys(self.__parseQuery(httpSetup.url)).length) ? '&' + httpSetup.data : '?' + httpSetup.data;
                break;
            case 'POST':
                httpSetup.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                break;
        }

        xhr.open(httpSetup.method, httpSetup.url, true);

        //set headers
        for (var key in httpSetup.headers) {
            if (!httpSetup.headers.hasOwnProperty(key)) continue;
            xhr.setRequestHeader(key, httpSetup.headers[key]);
        }

        xhr.timeout = httpSetup.timeout;

        var httpXHR = function (xhr, requestHeaders) {

            var httpXHR = {
                status: xhr.status,
                statusText: xhr.statusText,
                responseText: xhr.responseText,
                responseType: xhr.responseType,
                responseURL: xhr.responseURL,
                responseXML: xhr.responseXML,
                requestHeaders: requestHeaders,
                responseHeaders: self.__parseHeadersStr(xhr.getAllResponseHeaders())
            };

            var index = httpXHR.responseHeaders['content-type'].indexOf(';');
            var contentType = index !== -1
                ? httpXHR.responseHeaders['content-type'].substr(0, index).trim()
                : httpXHR.responseHeaders['content-type'].trim();

            switch (contentType) {
                case 'application/xml':
                    httpXHR.response = xhr.responseXML;
                    break;
                case 'application/json':
                    httpXHR.response = JSON.parse(xhr.responseText);
                    break;
                default:
                    httpXHR.response = xhr.responseText;
                    break;
            }

            return httpXHR;
        };

        xhr.onload = function () {
            (xhr.status >= 400)
                ? reject(httpXHR(xhr, httpSetup.headers))
                : resolve(httpXHR(xhr, httpSetup.headers));
        };

        xhr.onerror = function () {
            reject(httpXHR(xhr, httpSetup.headers));
        };

        xhr.onabort = function () {
            reject(httpXHR(xhr, httpSetup.headers));
        };

        xhr.timeout = function () {
            reject(httpXHR(xhr, httpSetup.headers));
        };

        xhr.send(httpSetup.data);
    });
};

NetLicensing.HttpRequest.prototype.__httpSend = function (config) {
    var url = require('url');
    var urlParts = url.parse(config.url);
    var http = (url.protocol == 'http:') ? require('http') : require('https');
    var self = this;

    return new Promise(function (resolve, reject) {

        var httpSetup = Object.assign({}, {
            method: 'GET',
            url: '/',
            headers: {},
            data: {},
            timeout: 0
        }, config);

        httpSetup.method = httpSetup.method.toUpperCase();
        httpSetup.data = self.__serialize(httpSetup.data);
        httpSetup.headers['Content-Length'] = Buffer.byteLength(httpSetup.data);

        httpSetup.hostname = urlParts.hostname;
        httpSetup.path = httpSetup.url;

        switch (httpSetup.method) {
            case 'POST':
                httpSetup.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                break;
        }

        var req = http.request(httpSetup, function (response) {

            var httpXHR = {
                status: response.statusCode,
                statusText: response.statusMessage,
                responseURL: httpSetup.path,
                requestHeaders: httpSetup.headers,
                responseHeaders: response.headers
            };

            response.on('data', function (chunk) {
                var index = httpXHR.responseHeaders['content-type'].indexOf(';');
                var contentType = index !== -1
                    ? httpXHR.responseHeaders['content-type'].substr(0, index).trim()
                    : httpXHR.responseHeaders['content-type'].trim();

                switch (contentType) {
                    case 'application/json':
                        httpXHR.response = JSON.parse(chunk.toString('utf8'));
                        break;
                    default:
                        httpXHR.response = chunk.toString('utf8');
                        break;
                }

                (httpXHR.status >= 400)
                    ? reject(httpXHR)
                    : resolve(httpXHR);
            });
        });

        req.on('error', function (e) {
            reject(e);
        });

        req.write(httpSetup.data);

        req.end();
    });
};

NetLicensing.HttpRequest.prototype.get = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'GET'}));
};

NetLicensing.HttpRequest.prototype.post = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'POST', data: data}));
};

NetLicensing.HttpRequest.prototype.patch = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PATCH', data: data}));
};

NetLicensing.HttpRequest.prototype.head = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'HEAD'}));
};

NetLicensing.HttpRequest.prototype.jsonp = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'JSONP'}));
};

NetLicensing.HttpRequest.prototype.put = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PUT'}));
};

NetLicensing.HttpRequest.prototype.delete = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'DELETE'}));
};

NetLicensing.HttpRequest.get = function (url, config) {
    return new NetLicensing.HttpRequest().get(url, config);
};

NetLicensing.HttpRequest.post = function (url, data, config) {
    return new NetLicensing.HttpRequest().post(url, data, config);
};

NetLicensing.HttpRequest.patch = function (url, data, config) {
    return new NetLicensing.HttpRequest().patch(url, data, config);
};

NetLicensing.HttpRequest.head = function (url, data, config) {
    return new NetLicensing.HttpRequest().head(url, data, config);
};

NetLicensing.HttpRequest.jsonp = function (url, data, config) {
    return new NetLicensing.HttpRequest().jsonp(url, data, config);
};

NetLicensing.HttpRequest.put = function (url, data, config) {
    return new NetLicensing.HttpRequest().put(url, data, config);
};

NetLicensing.HttpRequest.delete = function (url, data, config) {
    return new NetLicensing.HttpRequest().delete(url, data, config);
};
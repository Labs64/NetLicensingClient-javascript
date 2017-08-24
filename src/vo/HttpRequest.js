/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */


function HttpRequest() {

}

HttpRequest.prototype.__serialize = function (data, prefix) {
    var query = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var k = prefix ? prefix + '[' + key + ']' : key;
            var v = data[key];
            str.push((v !== null && typeof v === 'object') ?
                this.__serialize(v, k) :
            encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return query.join("&");
};

HttpRequest.prototype.__parseQuery = function (url) {
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

HttpRequest.prototype.send = function (config) {
    var self = this;

    return new Promise(function (resolve, reject) {
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        var xhr = new XHR();

        var method = config.method || 'GET';
        var url = config.url || '/';
        var async = config.async || true;
        var headers = config.headers || {};
        var data = self.__serialize(config.data || {});

        method = method.toUpperCase();

        if (method == 'GET' && data.length) url = (self.__parseQuery(url).keys().length) ? '&' + data : '?' + data;

        xhr.open(method, url, Boolean(async));

        headers = Object.assign({}, {Accept: 'application/json, text/plain, */*'}, headers);

        for (var key in headers) {
            if (!headers.hasOwnProperty(key)) continue;
            xhr.setRequestHeader(key, headers[key]);
        }

        xhr.send(data);
    });
};

HttpRequest.prototype.get = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'GET'}));
};

HttpRequest.prototype.post = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'POST', data: data}));
};

HttpRequest.prototype.patch = function (url, data, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PATCH', data: data}));
};

HttpRequest.prototype.head = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'HEAD'}));
};

HttpRequest.prototype.jsonp = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'JSONP'}));
};

HttpRequest.prototype.put = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'PUT'}));
};

HttpRequest.prototype.delete = function (url, config) {
    return this.send(Object.assign({}, config, {url: url, method: 'DELETE'}));
};

HttpRequest.get = function (url, config) {
    return new HttpRequest().get(url, config);
};

HttpRequest.post = function (url, data, config) {
    return new HttpRequest().post(url, data, config);
};

HttpRequest.patch = function (url, data, config) {
    return new HttpRequest().patch(url, data, config);
};

HttpRequest.head = function (url, data, config) {
    return new HttpRequest().head(url, data, config);
};

HttpRequest.jsonp = function (url, data, config) {
    return new HttpRequest().jsonp(url, data, config);
};

HttpRequest.put = function (url, data, config) {
    return new HttpRequest().put(url, data, config);
};

HttpRequest.delete = function (url, data, config) {
    return new HttpRequest().delete(url, data, config);
};
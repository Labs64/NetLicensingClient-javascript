(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("NetLicensing", [], factory);
	else if(typeof exports === 'object')
		exports["NetLicensing"] = factory();
	else
		root["NetLicensing"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1609);

/***/ }),

/***/ 7970:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var settle = __webpack_require__(6026);
var buildFullPath = __webpack_require__(4097);
var buildURL = __webpack_require__(5327);
var http = __webpack_require__(3685);
var https = __webpack_require__(5687);
var httpFollow = (__webpack_require__(938).http);
var httpsFollow = (__webpack_require__(938).https);
var url = __webpack_require__(7310);
var zlib = __webpack_require__(9796);
var VERSION = (__webpack_require__(7288).version);
var createError = __webpack_require__(5061);
var enhanceError = __webpack_require__(481);
var transitionalDefaults = __webpack_require__(7874);
var Cancel = __webpack_require__(5263);

var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    var resolve = function resolve(value) {
      done();
      resolvePromise(value);
    };
    var rejected = false;
    var reject = function reject(value) {
      done();
      rejected = true;
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;
    var headerNames = {};

    Object.keys(headers).forEach(function storeLowerName(name) {
      headerNames[name.toLowerCase()] = name;
    });

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    if ('user-agent' in headerNames) {
      // User-Agent is specified; handle case where no UA header is desired
      if (!headers[headerNames['user-agent']]) {
        delete headers[headerNames['user-agent']];
      }
      // Otherwise, use specified value
    } else {
      // Only set header if it hasn't been set in config
      headers['User-Agent'] = 'axios/' + VERSION;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(createError('Request body larger than maxBodyLength limit', config));
      }

      // Add Content-Length header if data exists
      if (!headerNames['content-length']) {
        headers['Content-Length'] = data.length;
      }
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth && headerNames.authorization) {
      delete headers[headerNames.authorization];
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    try {
      buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
    } catch (err) {
      var customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      reject(customErr);
    }

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        var totalResponseBytes = 0;
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destoy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          stream.destroy();
          reject(createError('error request aborted', config, 'ERR_REQUEST_ABORTED', lastRequest));
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          try {
            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (config.responseType !== 'arraybuffer') {
              responseData = responseData.toString(config.responseEncoding);
              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                responseData = utils.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            reject(enhanceError(err, config, err.code, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      var timeout = parseInt(config.timeout, 10);

      if (isNaN(timeout)) {
        reject(createError(
          'error trying to parse `config.timeout` to int',
          config,
          'ERR_PARSE_TIMEOUT',
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        req.abort();
        var timeoutErrorMessage = '';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        } else {
          timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        }
        var transitional = config.transitional || transitionalDefaults;
        reject(createError(
          timeoutErrorMessage,
          config,
          transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
          req
        ));
      });
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }


    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),

/***/ 5448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var settle = __webpack_require__(6026);
var cookies = __webpack_require__(4372);
var buildURL = __webpack_require__(5327);
var buildFullPath = __webpack_require__(4097);
var parseHeaders = __webpack_require__(4109);
var isURLSameOrigin = __webpack_require__(7985);
var createError = __webpack_require__(5061);
var transitionalDefaults = __webpack_require__(7874);
var Cancel = __webpack_require__(5263);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 1609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var bind = __webpack_require__(1849);
var Axios = __webpack_require__(321);
var mergeConfig = __webpack_require__(7185);
var defaults = __webpack_require__(5546);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(5263);
axios.CancelToken = __webpack_require__(4972);
axios.isCancel = __webpack_require__(6502);
axios.VERSION = (__webpack_require__(7288).version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(8713);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(6268);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 5263:
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 4972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(5263);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 6502:
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var buildURL = __webpack_require__(5327);
var InterceptorManager = __webpack_require__(782);
var dispatchRequest = __webpack_require__(3572);
var mergeConfig = __webpack_require__(7185);
var validator = __webpack_require__(4875);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 4097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(1793);
var combineURLs = __webpack_require__(7303);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 5061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(481);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 3572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var transformData = __webpack_require__(8527);
var isCancel = __webpack_require__(6502);
var defaults = __webpack_require__(5546);
var Cancel = __webpack_require__(5263);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 481:
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ 7185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ 6026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(5061);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 8527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var defaults = __webpack_require__(5546);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ 5546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var normalizeHeaderName = __webpack_require__(6016);
var enhanceError = __webpack_require__(481);
var transitionalDefaults = __webpack_require__(7874);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5448);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(7970);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 7874:
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ 7288:
/***/ ((module) => {

module.exports = {
  "version": "0.26.1"
};

/***/ }),

/***/ 1849:
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 5327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 7303:
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 4372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 1793:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 6268:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ 7985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 6016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 4109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 8713:
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 4875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(7288).version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ 4867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(1849);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return toString.call(val) === '[object FormData]';
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return toString.call(val) === '[object URLSearchParams]';
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 1480:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var _default = {
  BASIC_AUTHENTICATION: 'BASIC_AUTH',
  APIKEY_IDENTIFICATION: 'APIKEY',
  ANONYMOUS_IDENTIFICATION: 'ANONYMOUS',
  ACTIVE: 'active',
  NUMBER: 'number',
  NAME: 'name',
  VERSION: 'version',
  DELETED: 'deleted',
  CASCADE: 'forceCascade',
  PRICE: 'price',
  DISCOUNT: 'discount',
  CURRENCY: 'currency',
  IN_USE: 'inUse',
  FILTER: 'filter',
  BASE_URL: 'baseUrl',
  USERNAME: 'username',
  PASSWORD: 'password',
  SECURITY_MODE: 'securityMode',
  LicensingModel: {
    VALID: 'valid',
    TryAndBuy: {
      NAME: 'TryAndBuy'
    },
    Rental: {
      NAME: 'Rental',
      RED_THRESHOLD: 'redThreshold',
      YELLOW_THRESHOLD: 'yellowThreshold'
    },
    Subscription: {
      NAME: 'Subscription'
    },
    Floating: {
      NAME: 'Floating'
    },
    MultiFeature: {
      NAME: 'MultiFeature'
    },
    PayPerUse: {
      NAME: 'PayPerUse'
    },
    PricingTable: {
      NAME: 'PricingTable'
    },
    Quota: {
      NAME: 'Quota'
    },
    NodeLocked: {
      NAME: 'NodeLocked'
    }
  },
  Vendor: {
    VENDOR_NUMBER: 'vendorNumber',
    VENDOR_TYPE: 'Vendor'
  },
  Product: {
    ENDPOINT_PATH: 'product',
    PRODUCT_NUMBER: 'productNumber',
    LICENSEE_AUTO_CREATE: 'licenseeAutoCreate',
    DESCRIPTION: 'description',
    LICENSING_INFO: 'licensingInfo',
    DISCOUNTS: 'discounts',
    /**
     * @deprecated use ProductModule.PROP_LICENSEE_SECRET_MODE instead
     */
    PROP_LICENSEE_SECRET_MODE: 'licenseeSecretMode',
    PROP_VAT_MODE: 'vatMode',
    Discount: {
      TOTAL_PRICE: 'totalPrice',
      AMOUNT_FIX: 'amountFix',
      AMOUNT_PERCENT: 'amountPercent'
    },
    LicenseeSecretMode: {
      /**
       * @deprecated DISABLED mode is deprecated
       */
      DISABLED: 'DISABLED',
      PREDEFINED: 'PREDEFINED',
      CLIENT: 'CLIENT'
    }
  },
  ProductModule: {
    ENDPOINT_PATH: 'productmodule',
    PRODUCT_MODULE_NUMBER: 'productModuleNumber',
    PRODUCT_MODULE_NAME: 'productModuleName',
    LICENSING_MODEL: 'licensingModel',
    PROP_LICENSEE_SECRET_MODE: 'licenseeSecretMode'
  },
  LicenseTemplate: {
    ENDPOINT_PATH: 'licensetemplate',
    LICENSE_TEMPLATE_NUMBER: 'licenseTemplateNumber',
    LICENSE_TYPE: 'licenseType',
    AUTOMATIC: 'automatic',
    HIDDEN: 'hidden',
    HIDE_LICENSES: 'hideLicenses',
    PROP_LICENSEE_SECRET: 'licenseeSecret',
    LicenseType: {
      FEATURE: 'FEATURE',
      TIMEVOLUME: 'TIMEVOLUME',
      FLOATING: 'FLOATING',
      QUANTITY: 'QUANTITY'
    }
  },
  Token: {
    ENDPOINT_PATH: 'token',
    EXPIRATION_TIME: 'expirationTime',
    TOKEN_TYPE: 'tokenType',
    API_KEY: 'apiKey',
    TOKEN_PROP_EMAIL: 'email',
    TOKEN_PROP_VENDORNUMBER: 'vendorNumber',
    TOKEN_PROP_SHOP_URL: 'shopURL',
    Type: {
      DEFAULT: 'DEFAULT',
      SHOP: 'SHOP',
      APIKEY: 'APIKEY'
    }
  },
  Transaction: {
    ENDPOINT_PATH: 'transaction',
    TRANSACTION_NUMBER: 'transactionNumber',
    GRAND_TOTAL: 'grandTotal',
    STATUS: 'status',
    SOURCE: 'source',
    DATE_CREATED: 'datecreated',
    DATE_CLOSED: 'dateclosed',
    VAT: 'vat',
    VAT_MODE: 'vatMode',
    LICENSE_TRANSACTION_JOIN: 'licenseTransactionJoin',
    SOURCE_SHOP_ONLY: 'shopOnly',
    /**
     * @deprecated
     */
    Status: {
      CANCELLED: 'CANCELLED',
      CLOSED: 'CLOSED',
      PENDING: 'PENDING'
    }
  },
  Licensee: {
    ENDPOINT_PATH: 'licensee',
    ENDPOINT_PATH_VALIDATE: 'validate',
    ENDPOINT_PATH_TRANSFER: 'transfer',
    LICENSEE_NUMBER: 'licenseeNumber',
    SOURCE_LICENSEE_NUMBER: 'sourceLicenseeNumber',
    PROP_LICENSEE_NAME: 'licenseeName',
    /**
     * @deprecated use License.PROP_LICENSEE_SECRET
     */
    PROP_LICENSEE_SECRET: 'licenseeSecret',
    PROP_MARKED_FOR_TRANSFER: 'markedForTransfer'
  },
  License: {
    ENDPOINT_PATH: 'license',
    LICENSE_NUMBER: 'licenseNumber',
    HIDDEN: 'hidden',
    PROP_LICENSEE_SECRET: 'licenseeSecret'
  },
  PaymentMethod: {
    ENDPOINT_PATH: 'paymentmethod'
  },
  Utility: {
    ENDPOINT_PATH: 'utility',
    ENDPOINT_PATH_LICENSE_TYPES: 'licenseTypes',
    ENDPOINT_PATH_LICENSING_MODELS: 'licensingModels',
    ENDPOINT_PATH_COUNTRIES: 'countries',
    LICENSING_MODEL_PROPERTIES: 'LicensingModelProperties',
    LICENSE_TYPE: 'LicenseType'
  },
  APIKEY: {
    ROLE_APIKEY_LICENSEE: 'ROLE_APIKEY_LICENSEE',
    ROLE_APIKEY_ANALYTICS: 'ROLE_APIKEY_ANALYTICS',
    ROLE_APIKEY_OPERATION: 'ROLE_APIKEY_OPERATION',
    ROLE_APIKEY_MAINTENANCE: 'ROLE_APIKEY_MAINTENANCE',
    ROLE_APIKEY_ADMIN: 'ROLE_APIKEY_ADMIN'
  },
  Validation: {
    FOR_OFFLINE_USE: 'forOfflineUse'
  },
  WarningLevel: {
    GREEN: 'GREEN',
    YELLOW: 'YELLOW',
    RED: 'RED'
  },
  Bundle: {
    ENDPOINT_PATH: 'bundle',
    ENDPOINT_OBTAIN_PATH: 'obtain'
  }
};
exports["default"] = _default;

/***/ }),

/***/ 9892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Bundle = _interopRequireDefault(__webpack_require__(2044));
var _default = function _default(item) {
  return new _Bundle.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 3213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Country = _interopRequireDefault(__webpack_require__(187));
var _default = function _default(item) {
  return new _Country.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 3887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _License = _interopRequireDefault(__webpack_require__(9763));
var _default = function _default(item) {
  return new _License.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 3255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _LicenseTemplate = _interopRequireDefault(__webpack_require__(767));
var _default = function _default(item) {
  return new _LicenseTemplate.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 6463:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Licensee = _interopRequireDefault(__webpack_require__(2948));
var _default = function _default(item) {
  return new _Licensee.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 7106:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var itemToObject = function itemToObject(item) {
  var object = {};
  var property = item.property,
    list = item.list;
  if (property && Array.isArray(property)) {
    property.forEach(function (p) {
      var name = p.name,
        value = p.value;
      if (name) object[name] = value;
    });
  }
  if (list && Array.isArray(list)) {
    list.forEach(function (l) {
      var name = l.name;
      if (name) {
        object[name] = object[name] || [];
        object[name].push(itemToObject(l));
      }
    });
  }
  return object;
};
var _default = itemToObject;
exports["default"] = _default;

/***/ }),

/***/ 797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _PaymentMethod = _interopRequireDefault(__webpack_require__(5088));
var _default = function _default(item) {
  return new _PaymentMethod.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 1255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Product = _interopRequireDefault(__webpack_require__(7143));
var _default = function _default(item) {
  var object = (0, _itemToObject.default)(item);
  var discounts = object.discount;
  delete object.discount;
  var product = new _Product.default(object);
  product.setProductDiscounts(discounts);
  return product;
};
exports["default"] = _default;

/***/ }),

/***/ 2514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _ProductModule = _interopRequireDefault(__webpack_require__(3886));
var _default = function _default(item) {
  return new _ProductModule.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 4073:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Token = _interopRequireDefault(__webpack_require__(8132));
var _default = function _default(item) {
  return new _Token.default((0, _itemToObject.default)(item));
};
exports["default"] = _default;

/***/ }),

/***/ 1198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Transaction = _interopRequireDefault(__webpack_require__(4880));
var _License = _interopRequireDefault(__webpack_require__(9763));
var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(3089));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _default = function _default(item) {
  var object = (0, _itemToObject.default)(item);
  var licenseTransactionJoin = object.licenseTransactionJoin;
  delete object.licenseTransactionJoin;
  var transaction = new _Transaction.default(object);
  if (licenseTransactionJoin) {
    var joins = [];
    licenseTransactionJoin.forEach(function (v) {
      var join = new _LicenseTransactionJoin.default();
      join.setLicense(new _License.default({
        number: v[_Constants.default.License.LICENSE_NUMBER]
      }));
      join.setTransaction(new _Transaction.default({
        number: v[_Constants.default.Transaction.TRANSACTION_NUMBER]
      }));
      joins.push(join);
    });
    transaction.setLicenseTransactionJoins(joins);
  }
  return transaction;
};
exports["default"] = _default;

/***/ }),

/***/ 389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _CastsUtils = _interopRequireDefault(__webpack_require__(553));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * The entity properties.
 * @type {{}}
 * @private
 */
var propertiesMap = new WeakMap();

/**
 * List of properties that was defined
 * @type {{}}
 * @private
 */

var definedMap = new WeakMap();

/**
 * List of properties that need be casts
 * @type {{}}
 * @private
 */
var castsMap = new WeakMap();
var BaseEntity = /*#__PURE__*/function () {
  function BaseEntity(_ref) {
    var properties = _ref.properties,
      casts = _ref.casts;
    (0, _classCallCheck2.default)(this, BaseEntity);
    propertiesMap.set(this, {});
    definedMap.set(this, {});
    castsMap.set(this, casts || []);
    if (properties) {
      this.setProperties(properties);
    }
  }

  /**
   * Set a given property on the entity.
   * @param property
   * @param value
   * @returns {BaseEntity}
   */
  (0, _createClass2.default)(BaseEntity, [{
    key: "setProperty",
    value: function setProperty(property, value) {
      // if property name has bad native type
      if (!_CheckUtils.default.isValid(property) || (0, _typeof2.default)(property) === 'object') {
        throw new TypeError("Bad property name:".concat(property));
      }
      var castedValue = this.cast(property, value);

      // define to property
      this.define(property);

      // save property to propertiesMap
      var properties = propertiesMap.get(this);
      properties[property] = castedValue;
      return this;
    }

    /**
     * Alias for setProperty
     * @param property
     * @param value
     * @returns {BaseEntity}
     */
  }, {
    key: "addProperty",
    value: function addProperty(property, value) {
      return this.setProperty(property, value);
    }

    /**
     * Set the entity properties.
     * @param properties
     * @returns {BaseEntity}
     */
  }, {
    key: "setProperties",
    value: function setProperties(properties) {
      var _this = this;
      this.removeProperties();
      var has = Object.prototype.hasOwnProperty;
      Object.keys(properties).forEach(function (key) {
        if (has.call(properties, key)) {
          _this.setProperty(key, properties[key]);
        }
      });
      return this;
    }

    /**
     * Check if we has property
     * @param property
     * @protected
     */
  }, {
    key: "hasProperty",
    value: function hasProperty(property) {
      return Object.prototype.hasOwnProperty.call(propertiesMap.get(this), property);
    }

    /**
     * Get an property from the entity.
     * @param property
     * @param def
     * @returns {*}
     */
  }, {
    key: "getProperty",
    value: function getProperty(property, def) {
      return Object.prototype.hasOwnProperty.call(propertiesMap.get(this), property) ? propertiesMap.get(this)[property] : def;
    }

    /**
     * Get all of the current properties on the entity.
     */
  }, {
    key: "getProperties",
    value: function getProperties() {
      return _objectSpread({}, propertiesMap.get(this));
    }

    /**
     * Remove property
     * @param property
     * @returns {BaseEntity}
     */
  }, {
    key: "removeProperty",
    value: function removeProperty(property) {
      var properties = propertiesMap.get(this);
      delete properties[property];
      this.removeDefine(property);
      return this;
    }

    /**
     * Remove properties
     * @param properties
     */
  }, {
    key: "removeProperties",
    value: function removeProperties(properties) {
      var _this2 = this;
      var propertiesForRemove = properties || Object.keys(propertiesMap.get(this));
      propertiesForRemove.forEach(function (property) {
        _this2.removeProperty(property);
      });
    }
  }, {
    key: "cast",
    value: function cast(property, value) {
      if (!castsMap.get(this)[property]) return value;
      return (0, _CastsUtils.default)(castsMap.get(this)[property], value);
    }

    /**
     * Check if property has defined
     * @param property
     * @protected
     */
  }, {
    key: "hasDefine",
    value: function hasDefine(property) {
      return Boolean(definedMap.get(this)[property]);
    }

    /**
     * Define property getter and setter
     * @param property
     * @protected
     */
  }, {
    key: "define",
    value: function define(property) {
      if (this.hasDefine(property)) return;
      if (!_CheckUtils.default.isValid(property) || (0, _typeof2.default)(property) === 'object') {
        throw new TypeError("Bad property name:".concat(property));
      }
      var self = this;

      // delete property
      delete this[property];
      var descriptors = {
        enumerable: true,
        configurable: true,
        get: function get() {
          return self.getProperty(property);
        },
        set: function set(value) {
          self.setProperty(property, value);
        }
      };
      var defined = definedMap.get(this);
      defined[property] = true;
      Object.defineProperty(this, property, descriptors);
    }

    /**
     * Remove property getter and setter
     * @param property
     * @protected
     */
  }, {
    key: "removeDefine",
    value: function removeDefine(property) {
      if (!this.hasDefine(property)) return;
      var defined = definedMap.get(this);
      delete defined[property];
      delete this[property];
    }

    /**
     * Get properties map
     */
  }, {
    key: "asPropertiesMap",
    value: function asPropertiesMap() {
      var _this3 = this;
      var properties = this.getProperties();
      var customProperties = {};
      var has = Object.prototype.hasOwnProperty;
      Object.keys(this).forEach(function (key) {
        if (!has.call(_this3, key)) return;
        customProperties[key] = _this3[key];
      });
      return _objectSpread(_objectSpread({}, customProperties), properties);
    }
  }]);
  return BaseEntity;
}();
exports["default"] = BaseEntity;

/***/ }),

/***/ 2044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * NetLicensing Bundle entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the bundle. Vendor can assign this number when creating a bundle or
 * let NetLicensing generate one.
 * @property string number
 *
 * If set to false, the bundle is disabled.
 * @property boolean active
 *
 * Bundle name.
 * @property string name
 *
 * Arbitrary additional user properties of string type may be associated with each bundle. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 *
 * @constructor
 */
var Bundle = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Bundle, _BaseEntity);
  var _super = _createSuper(Bundle);
  function Bundle(properties) {
    (0, _classCallCheck2.default)(this, Bundle);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string'
      }
    });
  }
  (0, _createClass2.default)(Bundle, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      return this.setProperty('description', description);
    }
  }, {
    key: "getDescription",
    value: function getDescription(def) {
      return this.getProperty('description', def);
    }
  }, {
    key: "setLicenseTemplatesNumbers",
    value: function setLicenseTemplatesNumbers(licenseTemplatesNumbers) {
      var numbers = Array.isArray(licenseTemplatesNumbers) ? licenseTemplatesNumbers.join(',') : licenseTemplatesNumbers;
      return this.setProperty('licenseTemplatesNumbers', numbers);
    }
  }, {
    key: "getLicenseTemplatesNumbers",
    value: function getLicenseTemplatesNumbers(def) {
      var numbers = this.getProperty('licenseTemplatesNumbers', def);
      return numbers ? numbers.split(',') : numbers;
    }
  }, {
    key: "addLicenseTemplateNumber",
    value: function addLicenseTemplateNumber(licenseTemplateNumber) {
      var numbers = this.getLicenseTemplatesNumbers([]);
      numbers.push(licenseTemplateNumber);
      return this.setLicenseTemplatesNumbers(numbers);
    }
  }, {
    key: "removeLicenseTemplateNumber",
    value: function removeLicenseTemplateNumber(licenseTemplateNumber) {
      var numbers = this.getLicenseTemplatesNumbers([]);
      numbers.splice(numbers.indexOf(licenseTemplateNumber), 1);
      return this.setLicenseTemplatesNumbers(numbers);
    }
  }]);
  return Bundle;
}(_BaseEntity2.default);
exports["default"] = Bundle;

/***/ }),

/***/ 187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Country entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * @property code - Unique code of country.
 *
 * @property name - Unique name of country
 *
 * @property vatPercent - Country vat.
 *
 * @property isEu - is country in EU.
 */
var Country = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Country, _BaseEntity);
  var _super = _createSuper(Country);
  function Country(properties) {
    (0, _classCallCheck2.default)(this, Country);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        code: 'string',
        name: 'string',
        vatPercent: 'int',
        isEu: 'boolean'
      }
    });
  }
  (0, _createClass2.default)(Country, [{
    key: "setCode",
    value: function setCode(code) {
      return this.setProperty('code', code);
    }
  }, {
    key: "getCode",
    value: function getCode(def) {
      return this.getProperty('code', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setVatPercent",
    value: function setVatPercent(vat) {
      return this.setProperty('vatPercent', vat);
    }
  }, {
    key: "getVatPercent",
    value: function getVatPercent(def) {
      return this.getProperty('vatPercent', def);
    }
  }, {
    key: "setIsEu",
    value: function setIsEu(isEu) {
      return this.setProperty('isEu', isEu);
    }
  }, {
    key: "getIsEu",
    value: function getIsEu(def) {
      return this.getProperty('isEu', def);
    }
  }]);
  return Country;
}(_BaseEntity2.default);
exports["default"] = Country;

/***/ }),

/***/ 9763:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * License entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can
 * assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation
 * transaction status is set to closed.
 * @property string number
 *
 * Name for the licensed item. Set from license template on creation, if not specified explicitly.
 * @property string name
 *
 * If set to false, the license is disabled. License can be re-enabled, but as long as it is disabled,
 * the license is excluded from the validation process.
 * @property boolean active
 *
 * price for the license. If >0, it must always be accompanied by the currency specification. Read-only,
 * set from license template on creation.
 * @property float price
 *
 * specifies currency for the license price. Check data types to discover which currencies are
 * supported. Read-only, set from license template on creation.
 * @property string currency
 *
 * If set to true, this license is not shown in NetLicensing Shop as purchased license. Set from license
 * template on creation, if not specified explicitly.
 * @property boolean $hidden
 *
 * @property string startDate
 *
 * Arbitrary additional user properties of string type may be associated with each license. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, licenseeNumber,
 * licenseTemplateNumber.
 */
var License = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(License, _BaseEntity);
  var _super = _createSuper(License);
  function License(properties) {
    (0, _classCallCheck2.default)(this, License);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        price: 'float',
        hidden: 'boolean',
        parentfeature: 'string',
        timeVolume: 'int',
        startDate: 'date',
        inUse: 'boolean'
      }
    });
  }
  (0, _createClass2.default)(License, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setHidden",
    value: function setHidden(hidden) {
      return this.setProperty('hidden', hidden);
    }
  }, {
    key: "getHidden",
    value: function getHidden(def) {
      return this.getProperty('hidden', def);
    }
  }, {
    key: "setParentfeature",
    value: function setParentfeature(parentfeature) {
      return this.setProperty('parentfeature', parentfeature);
    }
  }, {
    key: "getParentfeature",
    value: function getParentfeature(def) {
      return this.getProperty('parentfeature', def);
    }
  }, {
    key: "setTimeVolume",
    value: function setTimeVolume(timeVolume) {
      return this.setProperty('timeVolume', timeVolume);
    }
  }, {
    key: "getTimeVolume",
    value: function getTimeVolume(def) {
      return this.getProperty('timeVolume', def);
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      return this.setProperty('startDate', startDate);
    }
  }, {
    key: "getStartDate",
    value: function getStartDate(def) {
      return this.getProperty('startDate', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }, {
    key: "getPrice",
    value: function getPrice(def) {
      return this.getProperty('price', def);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }]);
  return License;
}(_BaseEntity2.default);
exports["default"] = License;

/***/ }),

/***/ 767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * License template entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the license template. Vendor can
 * assign this number when creating a license template or let NetLicensing  generate one.
 * Read-only after creation of the first license from this license template.
 * @property string number
 *
 * If set to false, the license template is disabled. Licensee can not obtain any new licenses off this
 * license template.
 * @property boolean active
 *
 * Name for the licensed item.
 * @property string name
 *
 * Type of licenses created from this license template. Supported types: "FEATURE", "TIMEVOLUME",
 * "FLOATING", "QUANTITY"
 * @property string licenseType
 *
 * Price for the license. If >0, it must always be accompanied by the currency specification.
 * @property double price
 *
 * Specifies currency for the license price. Check data types to discover which currencies are
 * supported.
 * @property string currency
 *
 * If set to true, every new licensee automatically gets one license out of this license template on
 * creation. Automatic licenses must have their price set to 0.
 * @property boolean automatic
 *
 * If set to true, this license template is not shown in NetLicensing  Shop as offered for purchase.
 * @property boolean hidden
 *
 * If set to true, licenses from this license template are not visible to the end customer, but
 * participate in validation.
 * @property boolean hideLicenses
 *
 * If set to true, this license template defines grace period of validity granted after subscription expiration.
 * @property boolean gracePeriod
 *
 * Mandatory for 'TIMEVOLUME' license type.
 * @property integer timeVolume
 *
 * Time volume period for 'TIMEVOLUME' license type. Supported types: "DAY", "WEEK", "MONTH", "YEAR"
 * @property integer timeVolumePeriod
 *
 * Mandatory for 'FLOATING' license type.
 * @property integer maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property integer quantity
 *
 * @constructor
 */
var LicenseTemplate = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(LicenseTemplate, _BaseEntity);
  var _super = _createSuper(LicenseTemplate);
  function LicenseTemplate(properties) {
    (0, _classCallCheck2.default)(this, LicenseTemplate);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        licenseType: 'string',
        price: 'double',
        currency: 'string',
        automatic: 'boolean',
        hidden: 'boolean',
        hideLicenses: 'boolean',
        gracePeriod: 'boolean',
        timeVolume: 'int',
        timeVolumePeriod: 'string',
        maxSessions: 'int',
        quantity: 'int',
        inUse: 'boolean'
      }
    });
  }
  (0, _createClass2.default)(LicenseTemplate, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setLicenseType",
    value: function setLicenseType(licenseType) {
      return this.setProperty('licenseType', licenseType);
    }
  }, {
    key: "getLicenseType",
    value: function getLicenseType(def) {
      return this.getProperty('licenseType', def);
    }
  }, {
    key: "setPrice",
    value: function setPrice(price) {
      return this.setProperty('price', price);
    }
  }, {
    key: "getPrice",
    value: function getPrice(def) {
      return this.getProperty('price', def);
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      return this.setProperty('currency', currency);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }, {
    key: "setAutomatic",
    value: function setAutomatic(automatic) {
      return this.setProperty('automatic', automatic);
    }
  }, {
    key: "getAutomatic",
    value: function getAutomatic(def) {
      return this.getProperty('automatic', def);
    }
  }, {
    key: "setHidden",
    value: function setHidden(hidden) {
      return this.setProperty('hidden', hidden);
    }
  }, {
    key: "getHidden",
    value: function getHidden(def) {
      return this.getProperty('hidden', def);
    }
  }, {
    key: "setHideLicenses",
    value: function setHideLicenses(hideLicenses) {
      return this.setProperty('hideLicenses', hideLicenses);
    }
  }, {
    key: "getHideLicenses",
    value: function getHideLicenses(def) {
      return this.getProperty('hideLicenses', def);
    }
  }, {
    key: "setTimeVolume",
    value: function setTimeVolume(timeVolume) {
      return this.setProperty('timeVolume', timeVolume);
    }
  }, {
    key: "getTimeVolume",
    value: function getTimeVolume(def) {
      return this.getProperty('timeVolume', def);
    }
  }, {
    key: "setTimeVolumePeriod",
    value: function setTimeVolumePeriod(timeVolumePeriod) {
      return this.setProperty('timeVolumePeriod', timeVolumePeriod);
    }
  }, {
    key: "getTimeVolumePeriod",
    value: function getTimeVolumePeriod(def) {
      return this.getProperty('timeVolumePeriod', def);
    }
  }, {
    key: "setMaxSessions",
    value: function setMaxSessions(maxSessions) {
      return this.setProperty('maxSessions', maxSessions);
    }
  }, {
    key: "getMaxSessions",
    value: function getMaxSessions(def) {
      return this.getProperty('maxSessions', def);
    }
  }, {
    key: "setQuantity",
    value: function setQuantity(quantity) {
      return this.setProperty('quantity', quantity);
    }
  }, {
    key: "getQuantity",
    value: function getQuantity(def) {
      return this.getProperty('quantity', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }]);
  return LicenseTemplate;
}(_BaseEntity2.default);
exports["default"] = LicenseTemplate;

/***/ }),

/***/ 3089:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var LicenseTransactionJoin = /*#__PURE__*/function () {
  function LicenseTransactionJoin(transaction, license) {
    (0, _classCallCheck2.default)(this, LicenseTransactionJoin);
    this.transaction = transaction;
    this.license = license;
  }
  (0, _createClass2.default)(LicenseTransactionJoin, [{
    key: "setTransaction",
    value: function setTransaction(transaction) {
      this.transaction = transaction;
      return this;
    }
  }, {
    key: "getTransaction",
    value: function getTransaction(def) {
      return this.transaction || def;
    }
  }, {
    key: "setLicense",
    value: function setLicense(license) {
      this.license = license;
      return this;
    }
  }, {
    key: "getLicense",
    value: function getLicense(def) {
      return this.license || def;
    }
  }]);
  return LicenseTransactionJoin;
}();
exports["default"] = LicenseTransactionJoin;

/***/ }),

/***/ 2948:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Licensee entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this
 * number when creating a licensee or let NetLicensing  generate one. Read-only after creation of the first license for
 * the licensee.
 * @property string number
 *
 * Licensee name.
 * @property string name
 *
 * If set to false, the licensee is disabled. Licensee can not obtain new licenses, and validation is
 * disabled (tbd).
 * @property boolean active
 *
 * Licensee Secret for licensee
 * @property string licenseeSecret
 *
 * Mark licensee for transfer.
 * @property boolean markedForTransfer
 *
 * Arbitrary additional user properties of string type may be associated with each licensee. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted, productNumber
 *
 * @constructor
 */
var Licensee = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Licensee, _BaseEntity);
  var _super = _createSuper(Licensee);
  function Licensee(properties) {
    (0, _classCallCheck2.default)(this, Licensee);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        licenseeSecret: 'string',
        markedForTransfer: 'boolean',
        inUse: 'boolean'
      }
    });
  }
  (0, _createClass2.default)(Licensee, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setProductNumber",
    value: function setProductNumber(productNumber) {
      return this.setProperty('productNumber', productNumber);
    }
  }, {
    key: "getProductNumber",
    value: function getProductNumber(def) {
      return this.getProperty('productNumber', def);
    }

    /**
     * @deprecated
     */
  }, {
    key: "setLicenseeSecret",
    value: function setLicenseeSecret(licenseeSecret) {
      return this.setProperty('licenseeSecret', licenseeSecret);
    }

    /**
     * @deprecated
     */
  }, {
    key: "getLicenseeSecret",
    value: function getLicenseeSecret(def) {
      return this.getProperty('licenseeSecret', def);
    }
  }, {
    key: "setMarkedForTransfer",
    value: function setMarkedForTransfer(markedForTransfer) {
      return this.setProperty('markedForTransfer', markedForTransfer);
    }
  }, {
    key: "getMarkedForTransfer",
    value: function getMarkedForTransfer(def) {
      return this.getProperty('markedForTransfer', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }]);
  return Licensee;
}(_BaseEntity2.default);
exports["default"] = Licensee;

/***/ }),

/***/ 5088:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */
var PaymentMethod = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(PaymentMethod, _BaseEntity);
  var _super = _createSuper(PaymentMethod);
  function PaymentMethod(properties) {
    (0, _classCallCheck2.default)(this, PaymentMethod);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        'paypal.subject': 'string'
      }
    });
  }
  (0, _createClass2.default)(PaymentMethod, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setPaypalSubject",
    value: function setPaypalSubject(paypalSubject) {
      return this.setProperty('paypal.subject', paypalSubject);
    }
  }, {
    key: "getPaypalSubject",
    value: function getPaypalSubject(def) {
      return this.getProperty('paypal.subject', def);
    }
  }]);
  return PaymentMethod;
}(_BaseEntity2.default);
exports["default"] = PaymentMethod;

/***/ }),

/***/ 7143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(6115));
var _get2 = _interopRequireDefault(__webpack_require__(1588));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
var _ProductDiscount = _interopRequireDefault(__webpack_require__(3144));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * The discounts map
 * @type {{}}
 * @private
 */
var discountsMap = new WeakMap();

/**
 * An identifier that show if discounts was touched
 * @type {{}}
 * @private
 */
var discountsTouched = new WeakMap();

/**
 * NetLicensing  Product entity.
 *
 * Properties visible via NetLicensing  API:
 *
 * Unique number that identifies the product. Vendor can assign this number when creating a product or
 * let NetLicensing  generate one. Read-only after creation of the first licensee for the product.
 * @property string number
 *
 * If set to false, the product is disabled. No new licensees can be registered for the product,
 * existing licensees can not obtain new licenses.
 * @property boolean active
 *
 * Product name. Together with the version identifies the product for the end customer.
 * @property string name
 *
 * Product version. Convenience parameter, additional to the product name.
 * @property float version
 *
 * If set to 'true', non-existing licensees will be created at first validation attempt.
 * @property boolean licenseeAutoCreate
 *
 * Licensee secret mode for product.Supported types: "DISABLED", "PREDEFINED", "CLIENT"
 * @property boolean licenseeSecretMode
 *
 * Product description. Optional.
 * @property string description
 *
 * Licensing information. Optional.
 * @property string licensingInfo
 *
 * @property boolean inUse
 *
 * Arbitrary additional user properties of string type may be associated with each product. The name of user property
 * must not be equal to any of the fixed property names listed above and must be none of id, deleted.
 *
 * @constructor
 */
var Product = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Product, _BaseEntity);
  var _super = _createSuper(Product);
  function Product(properties) {
    var _this;
    (0, _classCallCheck2.default)(this, Product);
    _this = _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        version: 'string',
        description: 'string',
        licensingInfo: 'string',
        licenseeAutoCreate: 'boolean',
        licenseeSecretMode: 'string',
        inUse: 'boolean'
      }
    });
    discountsMap.set((0, _assertThisInitialized2.default)(_this), []);
    discountsTouched.set((0, _assertThisInitialized2.default)(_this), false);
    return _this;
  }
  (0, _createClass2.default)(Product, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setVersion",
    value: function setVersion(version) {
      return this.setProperty('version', version);
    }
  }, {
    key: "getVersion",
    value: function getVersion(def) {
      return this.getProperty('version', def);
    }
  }, {
    key: "setLicenseeAutoCreate",
    value: function setLicenseeAutoCreate(licenseeAutoCreate) {
      return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
    }
  }, {
    key: "getLicenseeAutoCreate",
    value: function getLicenseeAutoCreate(def) {
      return this.getProperty('licenseeAutoCreate', def);
    }

    /**
     * @deprecated use ProductModule.setLicenseeSecretMode instead
     */
  }, {
    key: "setLicenseeSecretMode",
    value: function setLicenseeSecretMode(licenseeSecretMode) {
      return this.setProperty('licenseeSecretMode', licenseeSecretMode);
    }

    /**
     * @deprecated use ProductModule.getLicenseeSecretMode instead
     */
  }, {
    key: "getLicenseeSecretMode",
    value: function getLicenseeSecretMode(def) {
      return this.getProperty('licenseeSecretMode', def);
    }
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      return this.setProperty('description', description);
    }
  }, {
    key: "getDescription",
    value: function getDescription(def) {
      return this.getProperty('description', def);
    }
  }, {
    key: "setLicensingInfo",
    value: function setLicensingInfo(licensingInfo) {
      return this.setProperty('licensingInfo', licensingInfo);
    }
  }, {
    key: "getLicensingInfo",
    value: function getLicensingInfo(def) {
      return this.getProperty('licensingInfo', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }

    /**
     * Add discount to product
     *
     * @param discount NetLicensing.ProductDiscount
     * @returns {NetLicensing.Product}
     */
  }, {
    key: "addDiscount",
    value: function addDiscount(discount) {
      var discounts = discountsMap.get(this);
      var productDiscount = discount;
      if (typeof productDiscount !== 'string' && !(productDiscount instanceof _ProductDiscount.default)) {
        productDiscount = new _ProductDiscount.default(productDiscount);
      }
      discounts.push(productDiscount);
      discountsMap.set(this, discounts);
      discountsTouched.set(this, true);
      return this;
    }

    /**
     * Set discounts to product
     * @param discounts
     */
  }, {
    key: "setProductDiscounts",
    value: function setProductDiscounts(discounts) {
      var _this2 = this;
      discountsMap.set(this, []);
      discountsTouched.set(this, true);
      if (!discounts) return this;
      if (Array.isArray(discounts)) {
        discounts.forEach(function (discount) {
          _this2.addDiscount(discount);
        });
        return this;
      }
      this.addDiscount(discounts);
      return this;
    }

    /**
     * Get array of objects discounts
     * @returns {Array}
     */
  }, {
    key: "getProductDiscounts",
    value: function getProductDiscounts() {
      return Object.assign([], discountsMap.get(this));
    }
  }, {
    key: "asPropertiesMap",
    value: function asPropertiesMap() {
      var propertiesMap = (0, _get2.default)((0, _getPrototypeOf2.default)(Product.prototype), "asPropertiesMap", this).call(this);
      if (discountsMap.get(this).length) {
        propertiesMap.discount = discountsMap.get(this).map(function (discount) {
          return discount.toString();
        });
      }
      if (!propertiesMap.discount && discountsTouched.get(this)) {
        propertiesMap.discount = '';
      }
      return propertiesMap;
    }
  }]);
  return Product;
}(_BaseEntity2.default);
exports["default"] = Product;

/***/ }),

/***/ 3144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ProductDiscount = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(ProductDiscount, _BaseEntity);
  var _super = _createSuper(ProductDiscount);
  function ProductDiscount(properties) {
    (0, _classCallCheck2.default)(this, ProductDiscount);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        totalPrice: 'float',
        currency: 'string',
        amountFix: 'float',
        amountPercent: 'int'
      }
    });
  }
  (0, _createClass2.default)(ProductDiscount, [{
    key: "setTotalPrice",
    value: function setTotalPrice(totalPrice) {
      return this.setProperty('totalPrice', totalPrice);
    }
  }, {
    key: "getTotalPrice",
    value: function getTotalPrice(def) {
      return this.getProperty('totalPrice', def);
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      return this.setProperty('currency', currency);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }, {
    key: "setAmountFix",
    value: function setAmountFix(amountFix) {
      return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
    }
  }, {
    key: "getAmountFix",
    value: function getAmountFix(def) {
      return this.getProperty('amountFix', def);
    }
  }, {
    key: "setAmountPercent",
    value: function setAmountPercent(amountPercent) {
      return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
    }
  }, {
    key: "getAmountPercent",
    value: function getAmountPercent(def) {
      return this.getProperty('amountPercent', def);
    }
  }, {
    key: "toString",
    value: function toString() {
      var totalPrice = this.getTotalPrice();
      var currency = this.getCurrency();
      var amount = 0;
      if (this.getAmountFix(null)) amount = this.getAmountFix();
      if (this.getAmountPercent(null)) amount = "".concat(this.getAmountPercent(), "%");
      return "".concat(totalPrice, ";").concat(currency, ";").concat(amount);
    }
  }]);
  return ProductDiscount;
}(_BaseEntity2.default);
exports["default"] = ProductDiscount;

/***/ }),

/***/ 3886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the product module. Vendor can assign
 * this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first
 * licensee for the product.
 * @property string number
 *
 * If set to false, the product module is disabled. Licensees can not obtain any new licenses for this
 * product module.
 * @property boolean active
 *
 * Product module name that is visible to the end customers in NetLicensing Shop.
 * @property string name
 *
 * Licensing model applied to this product module. Defines what license templates can be
 * configured for the product module and how licenses for this product module are processed during validation.
 * @property string licensingModel
 *
 * Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
 * @property integer maxCheckoutValidity
 *
 * Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
 * @property integer yellowThreshold
 *
 * Remaining time volume for red level. Mandatory for 'Rental' licensing model.
 * @property integer redThreshold
 *
 * License template. Mandatory for 'Try & Buy' licensing model. Supported types: "TIMEVOLUME", "FEATURE".
 * @property string licenseTemplate
 *
 * Licensee secret mode for product.Supported types: "PREDEFINED", "CLIENT"
 * @property boolean licenseeSecretMode
 *
 * @constructor
 */
var ProductModule = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(ProductModule, _BaseEntity);
  var _super = _createSuper(ProductModule);
  function ProductModule(properties) {
    (0, _classCallCheck2.default)(this, ProductModule);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        name: 'string',
        licensingModel: 'string',
        maxCheckoutValidity: 'int',
        yellowThreshold: 'int',
        redThreshold: 'int',
        licenseTemplate: 'string',
        inUse: 'boolean',
        licenseeSecretMode: 'string'
      }
    });
  }
  (0, _createClass2.default)(ProductModule, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setLicensingModel",
    value: function setLicensingModel(licensingModel) {
      return this.setProperty('licensingModel', licensingModel);
    }
  }, {
    key: "getLicensingModel",
    value: function getLicensingModel(def) {
      return this.getProperty('licensingModel', def);
    }
  }, {
    key: "setMaxCheckoutValidity",
    value: function setMaxCheckoutValidity(maxCheckoutValidity) {
      return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
    }
  }, {
    key: "getMaxCheckoutValidity",
    value: function getMaxCheckoutValidity(def) {
      return this.getProperty('maxCheckoutValidity', def);
    }
  }, {
    key: "setYellowThreshold",
    value: function setYellowThreshold(yellowThreshold) {
      return this.setProperty('yellowThreshold', yellowThreshold);
    }
  }, {
    key: "getYellowThreshold",
    value: function getYellowThreshold(def) {
      return this.getProperty('yellowThreshold', def);
    }
  }, {
    key: "setRedThreshold",
    value: function setRedThreshold(redThreshold) {
      return this.setProperty('redThreshold', redThreshold);
    }
  }, {
    key: "getRedThreshold",
    value: function getRedThreshold(def) {
      return this.getProperty('redThreshold', def);
    }
  }, {
    key: "setLicenseTemplate",
    value: function setLicenseTemplate(licenseTemplate) {
      return this.setProperty('licenseTemplate', licenseTemplate);
    }
  }, {
    key: "getLicenseTemplate",
    value: function getLicenseTemplate(def) {
      return this.getProperty('licenseTemplate', def);
    }
  }, {
    key: "getInUse",
    value: function getInUse(def) {
      return this.getProperty('inUse', def);
    }
  }, {
    key: "setLicenseeSecretMode",
    value: function setLicenseeSecretMode(licenseeSecretMode) {
      return this.setProperty('licenseeSecretMode', licenseeSecretMode);
    }
  }, {
    key: "getLicenseeSecretMode",
    value: function getLicenseeSecretMode(def) {
      return this.getProperty('licenseeSecretMode', def);
    }
  }]);
  return ProductModule;
}(_BaseEntity2.default);
exports["default"] = ProductModule;

/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Product module entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number
 * @property string number
 *
 * If set to false, the token is disabled.
 * @property boolean active
 *
 * Expiration Time
 * @property string expirationTime
 *
 * @property string vendorNumber
 *
 * Token type to be generated.
 * DEFAULT - default one-time token (will be expired after first request)
 * SHOP - shop token is used to redirect customer to the netlicensingShop(licenseeNumber is mandatory)
 * APIKEY - APIKey-token
 * @property string tokenType
 *
 * @property string licenseeNumber
 *
 * @constructor
 */
var Token = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Token, _BaseEntity);
  var _super = _createSuper(Token);
  function Token(properties) {
    (0, _classCallCheck2.default)(this, Token);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        active: 'boolean',
        expirationTime: 'date',
        vendorNumber: 'string',
        tokenType: 'string',
        licenseeNumber: 'string',
        successURL: 'string',
        successURLTitle: 'string',
        cancelURL: 'string',
        cancelURLTitle: 'string',
        shopURL: 'string'
      }
    });
  }
  (0, _createClass2.default)(Token, [{
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      return this.setProperty('active', active);
    }
  }, {
    key: "getActive",
    value: function getActive(def) {
      return this.getProperty('active', def);
    }
  }, {
    key: "setExpirationTime",
    value: function setExpirationTime(expirationTime) {
      return this.setProperty('expirationTime', expirationTime);
    }
  }, {
    key: "getExpirationTime",
    value: function getExpirationTime(def) {
      return this.getProperty('expirationTime', def);
    }
  }, {
    key: "setVendorNumber",
    value: function setVendorNumber(vendorNumber) {
      return this.setProperty('vendorNumber', vendorNumber);
    }
  }, {
    key: "getVendorNumber",
    value: function getVendorNumber(def) {
      return this.getProperty('vendorNumber', def);
    }
  }, {
    key: "setTokenType",
    value: function setTokenType(tokenType) {
      return this.setProperty('tokenType', tokenType);
    }
  }, {
    key: "getTokenType",
    value: function getTokenType(def) {
      return this.getProperty('tokenType', def);
    }
  }, {
    key: "setLicenseeNumber",
    value: function setLicenseeNumber(licenseeNumber) {
      return this.setProperty('licenseeNumber', licenseeNumber);
    }
  }, {
    key: "getLicenseeNumber",
    value: function getLicenseeNumber(def) {
      return this.getProperty('licenseeNumber', def);
    }
  }, {
    key: "setSuccessURL",
    value: function setSuccessURL(successURL) {
      return this.setProperty('successURL', successURL);
    }
  }, {
    key: "getSuccessURL",
    value: function getSuccessURL(def) {
      return this.getProperty('successURL', def);
    }
  }, {
    key: "setSuccessURLTitle",
    value: function setSuccessURLTitle(successURLTitle) {
      return this.setProperty('successURLTitle', successURLTitle);
    }
  }, {
    key: "getSuccessURLTitle",
    value: function getSuccessURLTitle(def) {
      return this.getProperty('successURLTitle', def);
    }
  }, {
    key: "setCancelURL",
    value: function setCancelURL(cancelURL) {
      return this.setProperty('cancelURL', cancelURL);
    }
  }, {
    key: "getCancelURL",
    value: function getCancelURL(def) {
      return this.getProperty('cancelURL', def);
    }
  }, {
    key: "setCancelURLTitle",
    value: function setCancelURLTitle(cancelURLTitle) {
      return this.setProperty('cancelURLTitle', cancelURLTitle);
    }
  }, {
    key: "getCancelURLTitle",
    value: function getCancelURLTitle(def) {
      return this.getProperty('cancelURLTitle', def);
    }
  }, {
    key: "getShopURL",
    value: function getShopURL(def) {
      return this.getProperty('shopURL', def);
    }

    /**
     * @deprecated
     * @alias setApiKeyRole
     * @param role
     * @returns {*}
     */
  }, {
    key: "setRole",
    value: function setRole(role) {
      return this.setApiKeyRole(role);
    }

    /**
     * @deprecated
     * @alias getApiKeyRole
     * @param def
     * @returns {*}
     */
  }, {
    key: "getRole",
    value: function getRole(def) {
      return this.getApiKeyRole(def);
    }
  }, {
    key: "setApiKeyRole",
    value: function setApiKeyRole(apiKeyRole) {
      return this.setProperty('apiKeyRole', apiKeyRole);
    }
  }, {
    key: "getApiKeyRole",
    value: function getApiKeyRole(def) {
      return this.getProperty('apiKeyRole', def);
    }
  }]);
  return Token;
}(_BaseEntity2.default);
exports["default"] = Token;

/***/ }),

/***/ 4880:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _BaseEntity2 = _interopRequireDefault(__webpack_require__(389));
var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(3089));
var _License = _interopRequireDefault(__webpack_require__(9763));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Transaction entity used internally by NetLicensing.
 *
 * Properties visible via NetLicensing API:
 *
 * Unique number (across all products of a vendor) that identifies the transaction. This number is
 * always generated by NetLicensing.
 * @property string number
 *
 * always true for transactions
 * @property boolean active
 *
 * Status of transaction. "CANCELLED", "CLOSED", "PENDING".
 * @property string status
 *
 * "SHOP". AUTO transaction for internal use only.
 * @property string source
 *
 * grand total for SHOP transaction (see source).
 * @property float grandTotal
 *
 * discount for SHOP transaction (see source).
 * @property float discount
 *
 * specifies currency for money fields (grandTotal and discount). Check data types to discover which
 * @property string currency
 *
 * Date created. Optional.
 * @property string dateCreated
 *
 * Date closed. Optional.
 * @property string dateClosed
 *
 * @constructor
 */
var Transaction = /*#__PURE__*/function (_BaseEntity) {
  (0, _inherits2.default)(Transaction, _BaseEntity);
  var _super = _createSuper(Transaction);
  function Transaction(properties) {
    (0, _classCallCheck2.default)(this, Transaction);
    return _super.call(this, {
      properties: properties,
      // The attributes that should be cast to native types.
      casts: {
        number: 'string',
        name: 'string',
        status: 'string',
        source: 'string',
        grandTotal: 'float',
        discount: 'float',
        currency: 'string',
        dateCreated: 'date',
        dateClosed: 'date',
        active: 'boolean',
        paymentMethod: 'string'
      }
    });
  }
  (0, _createClass2.default)(Transaction, [{
    key: "setNumber",
    value: function setNumber(number) {
      return this.setProperty('number', number);
    }
  }, {
    key: "getNumber",
    value: function getNumber(def) {
      return this.getProperty('number', def);
    }
  }, {
    key: "setName",
    value: function setName(name) {
      return this.setProperty('name', name);
    }
  }, {
    key: "getName",
    value: function getName(def) {
      return this.getProperty('name', def);
    }
  }, {
    key: "setStatus",
    value: function setStatus(status) {
      return this.setProperty('status', status);
    }
  }, {
    key: "getStatus",
    value: function getStatus(def) {
      return this.getProperty('status', def);
    }
  }, {
    key: "setSource",
    value: function setSource(source) {
      return this.setProperty('source', source);
    }
  }, {
    key: "getSource",
    value: function getSource(def) {
      return this.getProperty('source', def);
    }
  }, {
    key: "setGrandTotal",
    value: function setGrandTotal(grandTotal) {
      return this.setProperty('grandTotal', grandTotal);
    }
  }, {
    key: "getGrandTotal",
    value: function getGrandTotal(def) {
      return this.getProperty('grandTotal', def);
    }
  }, {
    key: "setDiscount",
    value: function setDiscount(discount) {
      return this.setProperty('discount', discount);
    }
  }, {
    key: "getDiscount",
    value: function getDiscount(def) {
      return this.getProperty('discount', def);
    }
  }, {
    key: "setCurrency",
    value: function setCurrency(currency) {
      return this.setProperty('currency', currency);
    }
  }, {
    key: "getCurrency",
    value: function getCurrency(def) {
      return this.getProperty('currency', def);
    }
  }, {
    key: "setDateCreated",
    value: function setDateCreated(dateCreated) {
      return this.setProperty('dateCreated', dateCreated);
    }
  }, {
    key: "getDateCreated",
    value: function getDateCreated(def) {
      return this.getProperty('dateCreated', def);
    }
  }, {
    key: "setDateClosed",
    value: function setDateClosed(dateClosed) {
      return this.setProperty('dateClosed', dateClosed);
    }
  }, {
    key: "getDateClosed",
    value: function getDateClosed(def) {
      return this.getProperty('dateClosed', def);
    }
  }, {
    key: "setPaymentMethod",
    value: function setPaymentMethod(paymentMethod) {
      return this.setProperty('paymentMethod', paymentMethod);
    }
  }, {
    key: "getPaymentMethod",
    value: function getPaymentMethod(def) {
      return this.getProperty('paymentMethod', def);
    }
  }, {
    key: "setActive",
    value: function setActive() {
      return this.setProperty('active', true);
    }
  }, {
    key: "getLicenseTransactionJoins",
    value: function getLicenseTransactionJoins(def) {
      return this.getProperty('licenseTransactionJoins', def);
    }
  }, {
    key: "setLicenseTransactionJoins",
    value: function setLicenseTransactionJoins(licenseTransactionJoins) {
      return this.setProperty('licenseTransactionJoins', licenseTransactionJoins);
    }
  }, {
    key: "setListLicenseTransactionJoin",
    value: function setListLicenseTransactionJoin(properties) {
      if (!properties) return;
      var licenseTransactionJoins = this.getProperty('licenseTransactionJoins', []);
      var licenseTransactionJoin = new _LicenseTransactionJoin.default();
      properties.forEach(function (property) {
        if (property.name === 'licenseNumber') {
          licenseTransactionJoin.setLicense(new _License.default({
            number: property.value
          }));
        }
        if (property.name === 'transactionNumber') {
          licenseTransactionJoin.setTransaction(new Transaction({
            number: property.value
          }));
        }
      });
      licenseTransactionJoins.push(licenseTransactionJoin);
      this.setProperty('licenseTransactionJoins', licenseTransactionJoins);
    }
  }]);
  return Transaction;
}(_BaseEntity2.default);
exports["default"] = Transaction;

/***/ }),

/***/ 2986:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _inherits2 = _interopRequireDefault(__webpack_require__(1655));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(4993));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3808));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(3496));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var NlicError = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(NlicError, _Error);
  var _super = _createSuper(NlicError);
  function NlicError() {
    var _this;
    (0, _classCallCheck2.default)(this, NlicError);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.config = {};
    _this.response = {};
    _this.request = {};
    _this.code = '';
    _this.isNlicError = true;
    _this.isAxiosError = true;
    return _this;
  }
  (0, _createClass2.default)(NlicError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    }
  }]);
  return NlicError;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
exports["default"] = NlicError;

/***/ }),

/***/ 1462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToBundle = _interopRequireDefault(__webpack_require__(9892));
var _itemToLicense = _interopRequireDefault(__webpack_require__(3887));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the Bundle Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/bundle-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new bundle with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#create-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param bundle NetLicensing.Bundle
   *
   * return the newly created bundle object in promise
   * @returns {Promise}
   */
  create: function create(context, bundle) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Bundle.ENDPOINT_PATH, bundle.asPropertiesMap());
            case 2:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Bundle';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToBundle.default)(item));
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets bundle by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#get-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the bundle number
   * @param number string
   *
   * return the bundle object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Bundle.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Bundle';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToBundle.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns bundle of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#bundles-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of bundle entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Bundle.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Bundle';
              }).map(function (v) {
                return (0, _itemToBundle.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates bundle properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#update-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param bundle NetLicensing.Bundle
   *
   * updated bundle in promise.
   * @returns {Promise}
   */
  update: function update(context, number, bundle) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Bundle.ENDPOINT_PATH, "/").concat(number), bundle.asPropertiesMap());
            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'Bundle';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToBundle.default)(item));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  /**
   * Deletes bundle.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#delete-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.Bundle.ENDPOINT_PATH, "/").concat(number), queryParams);
  },
  /**
   * Obtain bundle.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/bundle-services#obtain-bundle
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * bundle number
   * @param number string
   *
   * licensee number
   * @param bundleObtainParameters NetLicensing.BundleObtainParameters
   *
   * return array of licenses
   * @returns {Promise}
   */
  obtain: function obtain(context, number, bundleObtainParameters) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var _Constants$Bundle, ENDPOINT_PATH, ENDPOINT_OBTAIN_PATH, queryParams, _yield$Service$post3, items;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _CheckUtils.default.paramNotEmpty(bundleObtainParameters.getLicenseeNumber(), _Constants.default.Licensee.LICENSEE_NUMBER);
              _Constants$Bundle = _Constants.default.Bundle, ENDPOINT_PATH = _Constants$Bundle.ENDPOINT_PATH, ENDPOINT_OBTAIN_PATH = _Constants$Bundle.ENDPOINT_OBTAIN_PATH;
              queryParams = (0, _defineProperty2.default)({}, _Constants.default.Licensee.LICENSEE_NUMBER, bundleObtainParameters.getLicenseeNumber());
              _context5.next = 6;
              return _Service.default.post(context, "".concat(ENDPOINT_PATH, "/").concat(number, "/").concat(ENDPOINT_OBTAIN_PATH), queryParams);
            case 6:
              _yield$Service$post3 = _context5.sent;
              items = _yield$Service$post3.data.items.item;
              return _context5.abrupt("return", items.filter(function (_ref5) {
                var type = _ref5.type;
                return type === 'License';
              }).map(function (i) {
                return (0, _itemToLicense.default)(i);
              }));
            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 6486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToLicense = _interopRequireDefault(__webpack_require__(3887));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/license-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new license object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#create-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent licensee to which the new license is to be added
   * @param licenseeNumber string
   *
   *  license template that the license is created from
   * @param licenseTemplateNumber string
   *
   * For privileged logins specifies transaction for the license creation. For regular logins new
   * transaction always created implicitly, and the operation will be in a separate transaction.
   * Transaction is generated with the provided transactionNumber, or, if transactionNumber is null, with
   * auto-generated number.
   * @param transactionNumber null|string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param license NetLicensing.License
   *
   * return the newly created license object in promise
   * @returns {Promise}
   */
  create: function create(context, licenseeNumber, licenseTemplateNumber, transactionNumber, license) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(licenseeNumber, _Constants.default.Licensee.LICENSEE_NUMBER);
              _CheckUtils.default.paramNotEmpty(licenseTemplateNumber, _Constants.default.LicenseTemplate.LICENSE_TEMPLATE_NUMBER);
              license.setProperty(_Constants.default.Licensee.LICENSEE_NUMBER, licenseeNumber);
              license.setProperty(_Constants.default.LicenseTemplate.LICENSE_TEMPLATE_NUMBER, licenseTemplateNumber);
              if (transactionNumber) license.setProperty(_Constants.default.Transaction.TRANSACTION_NUMBER, transactionNumber);
              _context.next = 7;
              return _Service.default.post(context, _Constants.default.License.ENDPOINT_PATH, license.asPropertiesMap());
            case 7:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'License';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToLicense.default)(item));
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets license by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#get-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the license number
   * @param number string
   *
   * return the license in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'License';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToLicense.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns licenses of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#licenses-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * return array of licenses (of all products) or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.License.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'License';
              }).map(function (v) {
                return (0, _itemToLicense.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates license properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#update-license
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license number
   * @param number string
   *
   * transaction for the license update. Created implicitly if transactionNumber is null. In this case the
   * operation will be in a separate transaction.
   * @param transactionNumber string|null
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param license NetLicensing.License
   *
   * return updated license in promise.
   * @returns {Promise}
   */
  update: function update(context, number, transactionNumber, license) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              if (transactionNumber) license.setProperty(_Constants.default.Transaction.TRANSACTION_NUMBER, transactionNumber);
              _context4.next = 4;
              return _Service.default.post(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number), license.asPropertiesMap());
            case 4:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'License';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToLicense.default)(item));
            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  /**
   * Deletes license.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-services#delete-license
   *
   * When any license is deleted, corresponding transaction is created automatically.
   *
   *  determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.License.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ 1580:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(3255));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/license-template-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new license template object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#create-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product module to which the new license template is to be added
   * @param productModuleNumber
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param licenseTemplate NetLicensing.LicenseTemplate
   *
   * the newly created license template object in promise
   * @returns {Promise}
   */
  create: function create(context, productModuleNumber, licenseTemplate) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productModuleNumber, _Constants.default.ProductModule.PRODUCT_MODULE_NUMBER);
              licenseTemplate.setProperty(_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER, productModuleNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.LicenseTemplate.ENDPOINT_PATH, licenseTemplate.asPropertiesMap());
            case 4:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'LicenseTemplate';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToLicenseTemplate.default)(item));
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets license template by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#get-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the license template number
   * @param number string
   *
   * return the license template object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'LicenseTemplate';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToLicenseTemplate.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns all license templates of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#license-templates-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of license templates (of all products/modules) or null/empty list if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.LicenseTemplate.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'LicenseTemplate';
              }).map(function (v) {
                return (0, _itemToLicenseTemplate.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates license template properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/license-template-services#update-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license template number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param licenseTemplate NetLicensing.LicenseTemplate
   *
   * updated license template in promise.
   * @returns {Promise}
   */
  update: function update(context, number, licenseTemplate) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var path, _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              path = "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number);
              _context4.next = 4;
              return _Service.default.post(context, path, licenseTemplate.asPropertiesMap());
            case 4:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'LicenseTemplate';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToLicenseTemplate.default)(item));
            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  /**
   * Deletes license template.See NetLicensingAPI JavaDoc for details:
   * @see https://netlicensing.io/wiki/license-template-services#delete-license-template
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * license template number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.LicenseTemplate.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ 5498:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _ValidationResults = _interopRequireDefault(__webpack_require__(3735));
var _itemToLicensee = _interopRequireDefault(__webpack_require__(6463));
var _Page = _interopRequireDefault(__webpack_require__(9407));
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/licensee-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new licensee object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#create-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product to which the new licensee is to be added
   * @param productNumber string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param licensee NetLicensing.Licensee
   *
   * return the newly created licensee object in promise
   * @returns {Promise}
   */
  create: function create(context, productNumber, licensee) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productNumber, _Constants.default.Product.PRODUCT_NUMBER);
              licensee.setProperty(_Constants.default.Product.PRODUCT_NUMBER, productNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.Licensee.ENDPOINT_PATH, licensee.asPropertiesMap());
            case 4:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Licensee';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToLicensee.default)(item));
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets licensee by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#get-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the licensee number
   * @param number string
   *
   * return the licensee in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Licensee';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToLicensee.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns all licensees of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#licensees-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of licensees (of all products) or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Licensee.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Licensee';
              }).map(function (v) {
                return (0, _itemToLicensee.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates licensee properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#update-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param licensee NetLicensing.Licensee
   *
   * return updated licensee in promise.
   * @returns {Promise}
   */
  update: function update(context, number, licensee) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number), licensee.asPropertiesMap());
            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'Licensee';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToLicensee.default)(item));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  /**
   * Deletes licensee.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#delete-licensee
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number), queryParams);
  },
  /**
   * Validates active licenses of the licensee.
   * In the case of multiple product modules validation,
   * required parameters indexes will be added automatically.
   * See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/licensee-services#validate-licensee
   *
   * @param context NetLicensing.Context
   *
   * licensee number
   * @param number string
   *
   * optional validation parameters. See ValidationParameters and licensing model documentation for
   * details.
   * @param validationParameters NetLicensing.ValidationParameters.
   *
   * @returns {ValidationResults}
   */
  validate: function validate(context, number, validationParameters) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var queryParams, pmIndex, parameters, has, _yield$Service$post3, _yield$Service$post3$, items, ttl, validationResults;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              queryParams = {};
              if (validationParameters.getProductNumber()) {
                queryParams.productNumber = validationParameters.getProductNumber();
              }
              Object.keys(validationParameters.getLicenseeProperties()).forEach(function (key) {
                queryParams[key] = validationParameters.getLicenseeProperty(key);
              });
              if (validationParameters.isForOfflineUse()) {
                queryParams.forOfflineUse = true;
              }
              if (validationParameters.getDryRun()) {
                queryParams.dryRun = true;
              }
              pmIndex = 0;
              parameters = validationParameters.getParameters();
              has = Object.prototype.hasOwnProperty;
              Object.keys(parameters).forEach(function (productModuleName) {
                queryParams["".concat(_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER).concat(pmIndex)] = productModuleName;
                if (!has.call(parameters, productModuleName)) return;
                var parameter = parameters[productModuleName];
                Object.keys(parameter).forEach(function (key) {
                  if (has.call(parameter, key)) {
                    queryParams[key + pmIndex] = parameter[key];
                  }
                });
                pmIndex += 1;
              });
              _context5.next = 12;
              return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number, "/").concat(_Constants.default.Licensee.ENDPOINT_PATH_VALIDATE), queryParams);
            case 12:
              _yield$Service$post3 = _context5.sent;
              _yield$Service$post3$ = _yield$Service$post3.data;
              items = _yield$Service$post3$.items.item;
              ttl = _yield$Service$post3$.ttl;
              validationResults = new _ValidationResults.default();
              validationResults.setTtl(ttl);
              items.filter(function (_ref5) {
                var type = _ref5.type;
                return type === 'ProductModuleValidation';
              }).forEach(function (v) {
                var item = (0, _itemToObject.default)(v);
                validationResults.setProductModuleValidation(item[_Constants.default.ProductModule.PRODUCT_MODULE_NUMBER], item);
              });
              return _context5.abrupt("return", validationResults);
            case 20:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  /**
   * Transfer licenses between licensees.
   * @see https://netlicensing.io/wiki/licensee-services#transfer-licenses
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the number of the licensee receiving licenses
   * @param number string
   *
   * the number of the licensee delivering licenses
   * @param sourceLicenseeNumber string
   *
   * @returns {Promise}
   */
  transfer: function transfer(context, number, sourceLicenseeNumber) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    _CheckUtils.default.paramNotEmpty(sourceLicenseeNumber, _Constants.default.Licensee.SOURCE_LICENSEE_NUMBER);
    var queryParams = {
      sourceLicenseeNumber: sourceLicenseeNumber
    };
    return _Service.default.post(context, "".concat(_Constants.default.Licensee.ENDPOINT_PATH, "/").concat(number, "/").concat(_Constants.default.Licensee.ENDPOINT_PATH_TRANSFER), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ 5225:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(797));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var _default = {
  /**
   * Gets payment method by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#get-payment-method
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the payment method number
   * @param number string
   *
   * return the payment method in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$get, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.PaymentMethod.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'PaymentMethod';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToPaymentMethod.default)(item));
            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Returns payment methods of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#payment-methods-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of payment method entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context2.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context2.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context2.next = 7;
              return _Service.default.get(context, _Constants.default.PaymentMethod.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context2.sent;
              data = _yield$Service$get2.data;
              return _context2.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'PaymentMethod';
              }).map(function (v) {
                return (0, _itemToPaymentMethod.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Updates payment method properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/payment-method-services#update-payment-method
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the payment method number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param paymentMethod NetLicensing.PaymentMethod
   *
   * return updated payment method in promise.
   * @returns {Promise}
   */
  update: function update(context, number, paymentMethod) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var path, _yield$Service$post, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              path = "".concat(_Constants.default.PaymentMethod.ENDPOINT_PATH, "/").concat(number);
              _context3.next = 4;
              return _Service.default.post(context, path, paymentMethod.asPropertiesMap());
            case 4:
              _yield$Service$post = _context3.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter3 = items.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'PaymentMethod';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context3.abrupt("return", (0, _itemToPaymentMethod.default)(item));
            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 7443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToProductModule = _interopRequireDefault(__webpack_require__(2514));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/product-module-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new product module object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#create-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * parent product to which the new product module is to be added
   * @param productNumber string
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param productModule NetLicensing.ProductModule
   *
   * the newly created product module object in promise
   * @returns {Promise}
   */
  create: function create(context, productNumber, productModule) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(productNumber, _Constants.default.Product.PRODUCT_NUMBER);
              productModule.setProperty(_Constants.default.Product.PRODUCT_NUMBER, productNumber);
              _context.next = 4;
              return _Service.default.post(context, _Constants.default.ProductModule.ENDPOINT_PATH, productModule.asPropertiesMap());
            case 4:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'ProductModule';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToProductModule.default)(item));
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets product module by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#get-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the product module number
   * @param number string
   *
   * return the product module object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'ProductModule';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToProductModule.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#product-modules-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of product modules entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.ProductModule.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'ProductModule';
              }).map(function (v) {
                return (0, _itemToProductModule.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates product module properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#update-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product module number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param productModule NetLicensing.ProductModule
   *
   * updated product module in promise.
   * @returns {Promise}
   */
  update: function update(context, number, productModule) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number), productModule.asPropertiesMap());
            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'ProductModule';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToProductModule.default)(item));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  /**
   * Deletes product module.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-module-services#delete-product-module
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product module number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.ProductModule.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ 5042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToProduct = _interopRequireDefault(__webpack_require__(1255));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/product-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new product with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#create-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param product NetLicensing.Product
   *
   * return the newly created product object in promise
   * @returns {Promise}
   */
  create: function create(context, product) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Product.ENDPOINT_PATH, product.asPropertiesMap());
            case 2:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Product';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToProduct.default)(item));
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets product by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#get-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the product number
   * @param number string
   *
   * return the product object in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Product';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToProduct.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns products of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#products-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of product entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Product.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Product';
              }).map(function (v) {
                return (0, _itemToProduct.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates product properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#update-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param product NetLicensing.Product
   *
   * updated product in promise.
   * @returns {Promise}
   */
  update: function update(context, number, product) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number), product.asPropertiesMap());
            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'Product';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToProduct.default)(item));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  /**
   * Deletes product.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/product-services#delete-product
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * product number
   * @param number string
   *
   * if true, any entities that depend on the one being deleted will be deleted too
   * @param forceCascade boolean
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number, forceCascade) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    var queryParams = {
      forceCascade: Boolean(forceCascade)
    };
    return _Service.default.delete(context, "".concat(_Constants.default.Product.ENDPOINT_PATH, "/").concat(number), queryParams);
  }
};
exports["default"] = _default;

/***/ }),

/***/ 393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _axios = _interopRequireDefault(__webpack_require__(9669));
var _btoa = _interopRequireDefault(__webpack_require__(706));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _NlicError = _interopRequireDefault(__webpack_require__(2986));
var _package = _interopRequireDefault(__webpack_require__(4147));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

var httpXHR = {};
var axiosInstance = null;
var Service = /*#__PURE__*/function () {
  function Service() {
    (0, _classCallCheck2.default)(this, Service);
  }
  (0, _createClass2.default)(Service, null, [{
    key: "getAxiosInstance",
    value: function getAxiosInstance() {
      return axiosInstance || _axios.default;
    }
  }, {
    key: "setAxiosInstance",
    value: function setAxiosInstance(instanse) {
      axiosInstance = instanse;
    }
  }, {
    key: "getLastHttpRequestInfo",
    value: function getLastHttpRequestInfo() {
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
  }, {
    key: "get",
    value: function get(context, urlTemplate, queryParams) {
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
  }, {
    key: "post",
    value: function post(context, urlTemplate, queryParams) {
      return Service.request(context, 'post', urlTemplate, queryParams);
    }

    /**
     *
     * @param context
     * @param urlTemplate
     * @param queryParams
     * @returns {Promise}
     */
  }, {
    key: "delete",
    value: function _delete(context, urlTemplate, queryParams) {
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
  }, {
    key: "request",
    value: function request(context, method, urlTemplate, queryParams) {
      var template = String(urlTemplate);
      var params = queryParams || {};
      if (!template) throw new TypeError('Url template must be specified');

      // validate http method
      if (['get', 'post', 'delete'].indexOf(method.toLowerCase()) < 0) {
        throw new Error("Invalid request type:".concat(method, ", allowed requests types: GET, POST, DELETE."));
      }

      // validate context
      if (!context.getBaseUrl(null)) {
        throw new Error('Base url must be specified');
      }
      var request = {
        url: encodeURI("".concat(context.getBaseUrl(), "/").concat(template)),
        method: method.toLowerCase(),
        responseType: 'json',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        transformRequest: [function (data, headers) {
          if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            return Service.toQueryString(data);
          }
          if (!headers['NetLicensing-Origin']) {
            // eslint-disable-next-line no-param-reassign
            headers['NetLicensing-Origin'] = "NetLicensing/Javascript ".concat(_package.default.version);
          }
          return data;
        }]
      };

      // only node.js has a process variable that is of [[Class]] process
      if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        request.headers['User-agent'] = "NetLicensing/Javascript ".concat(_package.default.version, "/node&").concat(process.version);
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
        case _Constants.default.BASIC_AUTHENTICATION:
          if (!context.getUsername()) throw new Error('Missing parameter "username"');
          if (!context.getPassword()) throw new Error('Missing parameter "password"');
          request.auth = {
            username: context.getUsername(),
            password: context.getPassword()
          };
          break;
        // ApiKey Auth
        case _Constants.default.APIKEY_IDENTIFICATION:
          if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');
          request.headers.Authorization = "Basic ".concat((0, _btoa.default)("apiKey:".concat(context.getApiKey())));
          break;
        // without authorization
        case _Constants.default.ANONYMOUS_IDENTIFICATION:
          break;
        default:
          throw new Error('Unknown security mode');
      }
      return Service.getAxiosInstance()(request).then(function (response) {
        response.infos = Service.getInfo(response, []);
        var errors = response.infos.filter(function (_ref) {
          var type = _ref.type;
          return type === 'ERROR';
        });
        if (errors.length) {
          var error = new Error(errors[0].value);
          error.config = response.config;
          error.request = response.request;
          error.response = response;
          throw error;
        }
        httpXHR = response;
        return response;
      }).catch(function (e) {
        if (e.response) {
          httpXHR = e.response;

          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx

          var error = new _NlicError.default(e);
          error.config = e.config;
          error.code = e.code;
          error.request = e.request;
          error.response = e.response;

          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          var data = e.response.data;
          if (data) {
            error.infos = Service.getInfo(e.response, []);
            var _error$infos$filter = error.infos.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'ERROR';
              }),
              _error$infos$filter2 = (0, _slicedToArray2.default)(_error$infos$filter, 1),
              _error$infos$filter2$ = _error$infos$filter2[0],
              info = _error$infos$filter2$ === void 0 ? {} : _error$infos$filter2$;
            error.message = info.value || 'Unknown';
          }
          throw error;
        }
        throw e;
      });
    }
  }, {
    key: "getInfo",
    value: function getInfo(response, def) {
      try {
        return response.data.infos.info || def;
      } catch (e) {
        return def;
      }
    }
  }, {
    key: "toQueryString",
    value: function toQueryString(data, prefix) {
      var query = [];
      var has = Object.prototype.hasOwnProperty;
      Object.keys(data).forEach(function (key) {
        if (has.call(data, key)) {
          var k = prefix ? "".concat(prefix, "[").concat(key, "]") : key;
          var v = data[key];
          v = v instanceof Date ? v.toISOString() : v;
          query.push(v !== null && (0, _typeof2.default)(v) === 'object' ? Service.toQueryString(v, k) : "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(v)));
        }
      });
      return query.join('&').replace(/%5B[0-9]+%5D=/g, '=');
    }
  }]);
  return Service;
}();
exports["default"] = Service;

/***/ }),

/***/ 731:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToToken = _interopRequireDefault(__webpack_require__(4073));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/token-services
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new token.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#create-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param token NetLicensing.Token
   *
   * return created token in promise
   * @returns {Promise}
   */
  create: function create(context, token) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Token.ENDPOINT_PATH, token.asPropertiesMap());
            case 2:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Token';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToToken.default)(item));
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets token by its number..See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#get-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the token number
   * @param number
   *
   * return the token in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Token.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Token';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToToken.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns tokens of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#tokens-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string|null
   *
   * array of token entities or empty array if nothing found.
   * @return array
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Token.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Token';
              }).map(function (v) {
                return (0, _itemToToken.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Delete token by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/token-services#delete-token
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   *  the token number
   * @param number string
   *
   * return boolean state of delete in promise
   * @returns {Promise}
   */
  delete: function _delete(context, number) {
    _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
    return _Service.default.delete(context, "".concat(_Constants.default.Token.ENDPOINT_PATH, "/").concat(number));
  }
};
exports["default"] = _default;

/***/ }),

/***/ 5919:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToTransaction = _interopRequireDefault(__webpack_require__(1198));
var _Page = _interopRequireDefault(__webpack_require__(9407));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/transaction-services
 *
 * Transaction is created each time change to  LicenseService licenses happens. For instance licenses are
 * obtained by a licensee, licenses disabled by vendor, licenses deleted, etc. Transaction is created no matter what
 * source has initiated the change to licenses: it can be either a direct purchase of licenses by a licensee via
 * NetLicensing Shop, or licenses can be given to a licensee by a vendor. Licenses can also be assigned implicitly by
 * NetLicensing if it is defined so by a license model (e.g. evaluation license may be given automatically). All these
 * events are reflected in transactions. Of all the transaction handling routines only read-only routines are exposed to
 * the public API, as transactions are only allowed to be created and modified by NetLicensing internally.
 *
 * @constructor
 */
var _default = {
  /**
   * Creates new transaction object with given properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#create-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * non-null properties will be taken for the new object, null properties will either stay null, or will
   * be set to a default value, depending on property.
   * @param transaction NetLicensing.Transaction
   *
   * return the newly created transaction object in promise
   * @returns {Promise}
   */
  create: function create(context, transaction) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$post, items, _items$filter, _items$filter2, item;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.post(context, _Constants.default.Transaction.ENDPOINT_PATH, transaction.asPropertiesMap());
            case 2:
              _yield$Service$post = _context.sent;
              items = _yield$Service$post.data.items.item;
              _items$filter = items.filter(function (_ref) {
                var type = _ref.type;
                return type === 'Transaction';
              }), _items$filter2 = (0, _slicedToArray2.default)(_items$filter, 1), item = _items$filter2[0];
              return _context.abrupt("return", (0, _itemToTransaction.default)(item));
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Gets transaction by its number.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#get-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * the transaction number
   * @param number string
   *
   * return the transaction in promise
   * @returns {Promise}
   */
  get: function get(context, number) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get, items, _items$filter3, _items$filter4, item;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context2.next = 3;
              return _Service.default.get(context, "".concat(_Constants.default.Transaction.ENDPOINT_PATH, "/").concat(number));
            case 3:
              _yield$Service$get = _context2.sent;
              items = _yield$Service$get.data.items.item;
              _items$filter3 = items.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'Transaction';
              }), _items$filter4 = (0, _slicedToArray2.default)(_items$filter3, 1), item = _items$filter4[0];
              return _context2.abrupt("return", (0, _itemToTransaction.default)(item));
            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns all transactions of a vendor.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#transactions-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter string
   *
   * array of transaction entities or empty array if nothing found in promise.
   * @returns {Promise}
   */
  list: function list(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, _Constants.default.Transaction.ENDPOINT_PATH, queryParams);
            case 7:
              _yield$Service$get2 = _context3.sent;
              data = _yield$Service$get2.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Transaction';
              }).map(function (v) {
                return (0, _itemToTransaction.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  /**
   * Updates transaction properties.See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/transaction-services#update-transaction
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * transaction number
   * @param number string
   *
   * non-null properties will be updated to the provided values, null properties will stay unchanged.
   * @param transaction NetLicensing.Transaction
   *
   * return updated transaction in promise.
   * @returns {Promise}
   */
  update: function update(context, number, transaction) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$Service$post2, items, _items$filter5, _items$filter6, item;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _CheckUtils.default.paramNotEmpty(number, _Constants.default.NUMBER);
              _context4.next = 3;
              return _Service.default.post(context, "".concat(_Constants.default.Transaction.ENDPOINT_PATH, "/").concat(number), transaction.asPropertiesMap());
            case 3:
              _yield$Service$post2 = _context4.sent;
              items = _yield$Service$post2.data.items.item;
              _items$filter5 = items.filter(function (_ref4) {
                var type = _ref4.type;
                return type === 'Transaction';
              }), _items$filter6 = (0, _slicedToArray2.default)(_items$filter5, 1), item = _items$filter6[0];
              return _context4.abrupt("return", (0, _itemToTransaction.default)(item));
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 7635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(4687));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(7156));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _Page = _interopRequireDefault(__webpack_require__(9407));
var _itemToCountry = _interopRequireDefault(__webpack_require__(3213));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://netlicensing.io/wiki/utility-services
 * @constructor
 */
var _default = {
  /**
   * Returns all license types. See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/utility-services#license-types-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * array of available license types or empty array if nothing found in promise.
   * @returns {Promise}
   */
  listLicenseTypes: function listLicenseTypes(context) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$Service$get, data;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_LICENSE_TYPES));
            case 2:
              _yield$Service$get = _context.sent;
              data = _yield$Service$get.data;
              return _context.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref) {
                var type = _ref.type;
                return type === 'LicenseType';
              }).map(function (v) {
                return (0, _itemToObject.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * Returns all license models. See NetLicensingAPI for details:
   * @see https://netlicensing.io/wiki/utility-services#licensing-models-list
   *
   * determines the vendor on whose behalf the call is performed
   * @param context NetLicensing.Context
   *
   * array of available license models or empty array if nothing found in promise.
   * @returns {Promise}
   */
  listLicensingModels: function listLicensingModels(context) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$Service$get2, data;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_LICENSING_MODELS));
            case 2:
              _yield$Service$get2 = _context2.sent;
              data = _yield$Service$get2.data;
              return _context2.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref2) {
                var type = _ref2.type;
                return type === 'LicensingModelProperties';
              }).map(function (v) {
                return (0, _itemToObject.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  /**
   * Returns all countries.
   *
   * determines the vendor on whose behalf the call is performed
   * @param context
   *
   * reserved for the future use, must be omitted / set to NULL
   * @param filter
   *
   * collection of available countries or null/empty list if nothing found in promise.
   * @returns {Promise}
   */
  listCountries: function listCountries(context, filter) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var queryParams, _yield$Service$get3, data;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              queryParams = {};
              if (!filter) {
                _context3.next = 5;
                break;
              }
              if (_CheckUtils.default.isValid(filter)) {
                _context3.next = 4;
                break;
              }
              throw new TypeError("filter has bad value ".concat(filter));
            case 4:
              queryParams[_Constants.default.FILTER] = typeof filter === 'string' ? filter : _FilterUtils.default.encode(filter);
            case 5:
              _context3.next = 7;
              return _Service.default.get(context, "".concat(_Constants.default.Utility.ENDPOINT_PATH, "/").concat(_Constants.default.Utility.ENDPOINT_PATH_COUNTRIES), queryParams);
            case 7:
              _yield$Service$get3 = _context3.sent;
              data = _yield$Service$get3.data;
              return _context3.abrupt("return", (0, _Page.default)(data.items.item.filter(function (_ref3) {
                var type = _ref3.type;
                return type === 'Country';
              }).map(function (v) {
                return (0, _itemToCountry.default)(v);
              }), data.items.pagenumber, data.items.itemsnumber, data.items.totalpages, data.items.totalitems));
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
// Cast an attribute to a native JS type.
var _default = function _default(key, value) {
  switch (key.trim().toLowerCase()) {
    case 'str':
    case 'string':
      return String(value);
    case 'int':
    case 'integer':
      {
        var n = parseInt(value, 10);
        return Number.isNaN(n) ? value : n;
      }
    case 'float':
    case 'double':
      {
        var _n = parseFloat(value);
        return Number.isNaN(_n) ? value : _n;
      }
    case 'bool':
    case 'boolean':
      switch (value) {
        case 'true':
        case 'TRUE':
          return true;
        case 'false':
        case 'FALSE':
          return false;
        default:
          return Boolean(value);
      }
    case 'date':
      return value === 'now' ? 'now' : new Date(String(value));
    default:
      return value;
  }
};
exports["default"] = _default;

/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var _default = {
  isValid: function isValid(value) {
    var valid = value !== undefined && typeof value !== 'function';
    if (typeof value === 'number') valid = Number.isFinite(value) && !Number.isNaN(value);
    return valid;
  },
  paramNotNull: function paramNotNull(parameter, parameterName) {
    if (!this.isValid(parameter)) throw new TypeError("Parameter ".concat(parameterName, " has bad value ").concat(parameter));
    if (parameter === null) throw new TypeError("Parameter ".concat(parameterName, " cannot be null"));
  },
  paramNotEmpty: function paramNotEmpty(parameter, parameterName) {
    if (!this.isValid(parameter)) throw new TypeError("Parameter ".concat(parameterName, " has bad value ").concat(parameter));
    if (!parameter) throw new TypeError("Parameter ".concat(parameterName, " cannot be null or empty string"));
  }
};
exports["default"] = _default;

/***/ }),

/***/ 3093:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(7424));
var _default = {
  FILTER_DELIMITER: ';',
  FILTER_PAIR_DELIMITER: '=',
  encode: function encode() {
    var _this = this;
    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var query = [];
    var has = Object.prototype.hasOwnProperty;
    Object.keys(filter).forEach(function (key) {
      if (has.call(filter, key)) {
        query.push("".concat(key).concat(_this.FILTER_PAIR_DELIMITER).concat(filter[key]));
      }
    });
    return query.join(this.FILTER_DELIMITER);
  },
  decode: function decode() {
    var _this2 = this;
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var filter = {};
    query.split(this.FILTER_DELIMITER).forEach(function (v) {
      var _v$split = v.split(_this2.FILTER_PAIR_DELIMITER),
        _v$split2 = (0, _slicedToArray2.default)(_v$split, 2),
        name = _v$split2[0],
        value = _v$split2[1];
      filter[name] = value;
    });
    return filter;
  }
};
exports["default"] = _default;

/***/ }),

/***/ 4658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var BundleObtainParameters = /*#__PURE__*/function () {
  function BundleObtainParameters() {
    (0, _classCallCheck2.default)(this, BundleObtainParameters);
    this.licenseeNumber = '';
  }
  (0, _createClass2.default)(BundleObtainParameters, [{
    key: "setLicenseeNumber",
    value: function setLicenseeNumber(licenseeNumber) {
      this.licenseeNumber = licenseeNumber;
      return this;
    }
  }, {
    key: "getLicenseeNumber",
    value: function getLicenseeNumber() {
      return this.licenseeNumber;
    }
  }]);
  return BundleObtainParameters;
}();
exports["default"] = BundleObtainParameters;

/***/ }),

/***/ 4693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * The context values.
 * @type {{}}
 * @private
 */
var valuesMap = new WeakMap();

/**
 * List of values that was defined
 * @type {{}}
 * @private
 */
var definedMap = new WeakMap();

/**
 * Context defaults
 * @type {{baseUrl: string, securityMode}}
 * @private
 */
var defaultsMap = new WeakMap();
var Context = /*#__PURE__*/function () {
  function Context(values) {
    (0, _classCallCheck2.default)(this, Context);
    defaultsMap.set(this, {
      baseUrl: 'https://go.netlicensing.io/core/v2/rest',
      securityMode: _Constants.default.BASIC_AUTHENTICATION
    });
    valuesMap.set(this, {});
    definedMap.set(this, {});
    this.setValues(_objectSpread(_objectSpread({}, defaultsMap.get(this)), values));
  }
  (0, _createClass2.default)(Context, [{
    key: "setBaseUrl",
    value: function setBaseUrl(baseUrl) {
      return this.setValue('baseUrl', baseUrl);
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl(def) {
      return this.getValue('baseUrl', def);
    }
  }, {
    key: "setUsername",
    value: function setUsername(username) {
      return this.setValue('username', username);
    }
  }, {
    key: "getUsername",
    value: function getUsername(def) {
      return this.getValue('username', def);
    }
  }, {
    key: "setPassword",
    value: function setPassword(password) {
      return this.setValue('password', password);
    }
  }, {
    key: "getPassword",
    value: function getPassword(def) {
      return this.getValue('password', def);
    }
  }, {
    key: "setApiKey",
    value: function setApiKey(apiKey) {
      return this.setValue('apiKey', apiKey);
    }
  }, {
    key: "getApiKey",
    value: function getApiKey(def) {
      return this.getValue('apiKey', def);
    }
  }, {
    key: "setSecurityMode",
    value: function setSecurityMode(securityMode) {
      return this.setValue('securityMode', securityMode);
    }
  }, {
    key: "getSecurityMode",
    value: function getSecurityMode(def) {
      return this.getValue('securityMode', def);
    }
  }, {
    key: "setVendorNumber",
    value: function setVendorNumber(vendorNumber) {
      return this.setValue('vendorNumber', vendorNumber);
    }
  }, {
    key: "getVendorNumber",
    value: function getVendorNumber(def) {
      return this.getValue('vendorNumber', def);
    }

    /**
     * Set a given values on the context.
     * @param key
     * @param value
     * @returns {Context}
     */
  }, {
    key: "setValue",
    value: function setValue(key, value) {
      // check values
      if (!_CheckUtils.default.isValid(key) || (0, _typeof2.default)(key) === 'object') throw new Error("Bad value key:".concat(key));
      if (!_CheckUtils.default.isValid(value)) throw new Error("Value ".concat(key, " has wrong value").concat(value));

      // define keys
      this.define(key);
      var copedValue = value;
      if ((0, _typeof2.default)(value) === 'object' && value !== null) {
        copedValue = Array.isArray(value) ? Object.assign([], value) : _objectSpread({}, value);
      }
      var values = valuesMap.get(this);
      values[key] = copedValue;
      return this;
    }

    /**
     * Set the array of context values.
     * @param values
     * @returns {Context}
     */
  }, {
    key: "setValues",
    value: function setValues(values) {
      var _this = this;
      this.removeValues();
      var has = Object.prototype.hasOwnProperty;
      Object.keys(values).forEach(function (key) {
        if (has.call(values, key)) {
          _this.setValue(key, values[key]);
        }
      });
      return this;
    }

    /**
     * Get an value from the context.
     * @param key
     * @param def
     * @returns {*}
     */
  }, {
    key: "getValue",
    value: function getValue(key, def) {
      return key in valuesMap.get(this) ? valuesMap.get(this)[key] : def;
    }

    /**
     * Get all of the current value on the context.
     */
  }, {
    key: "getValues",
    value: function getValues() {
      return _objectSpread({}, valuesMap.get(this));
    }

    /**
     * Remove value
     * @param key
     * @returns {Context}
     */
  }, {
    key: "removeValue",
    value: function removeValue(key) {
      var values = valuesMap.get(this);
      delete values[key];
      this.removeDefine(key);
      return this;
    }

    /**
     * Remove values
     * @param keys
     */
  }, {
    key: "removeValues",
    value: function removeValues(keys) {
      var _this2 = this;
      var keysAr = keys || Object.keys(valuesMap.get(this));
      keysAr.forEach(function (key) {
        return _this2.removeValue(key);
      });
    }

    /**
     * Define value getter and setter
     * @param key
     * @param onlyGetter
     * @private
     */
  }, {
    key: "define",
    value: function define(key, onlyGetter) {
      if (this.hasDefine(key)) return;
      if (!_CheckUtils.default.isValid(key) || (typeof property === "undefined" ? "undefined" : (0, _typeof2.default)(property)) === 'object') {
        throw new TypeError("Bad value name:".concat(key));
      }
      var self = this;

      // delete property
      delete this[key];
      var descriptors = {
        enumerable: true,
        configurable: true,
        get: function get() {
          return self.getValue(key);
        }
      };
      if (!onlyGetter) {
        descriptors.set = function (value) {
          return self.setValue(key, value);
        };
      }
      var defined = definedMap.get(this);
      defined[key] = true;
      Object.defineProperty(this, key, descriptors);
    }

    /**
     * Check if value has defined
     * @param key
     * @private
     */
  }, {
    key: "hasDefine",
    value: function hasDefine(key) {
      return Boolean(definedMap.get(this)[key]);
    }

    /**
     * Remove value getter and setter
     * @param key
     * @private
     */
  }, {
    key: "removeDefine",
    value: function removeDefine(key) {
      if (!this.hasDefine(key)) return;
      var defined = definedMap.get(this);
      delete defined[key];
      delete this[key];
    }
  }]);
  return Context;
}();
exports["default"] = Context;

/***/ }),

/***/ 9407:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = function _default() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var pageNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var itemsNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var totalPages = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var totalItems = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var paginator = {
    getContent: function getContent() {
      return content;
    },
    getPageNumber: function getPageNumber() {
      return pageNumber;
    },
    getItemsNumber: function getItemsNumber() {
      return itemsNumber;
    },
    getTotalPages: function getTotalPages() {
      return totalPages;
    },
    getTotalItems: function getTotalItems() {
      return totalItems;
    },
    hasNext: function hasNext() {
      return totalPages > pageNumber + 1;
    }
  };
  var paginatorKeys = Object.keys(paginator);
  return new Proxy(content, {
    get: function get(target, key) {
      if (paginatorKeys.indexOf(key) !== -1) {
        return paginator[key];
      }
      return target[key];
    }
  });
};
exports["default"] = _default;

/***/ }),

/***/ 4856:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      https://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */
var ValidationParameters = /*#__PURE__*/function () {
  function ValidationParameters() {
    (0, _classCallCheck2.default)(this, ValidationParameters);
    this.parameters = {};
    this.licenseeProperties = {};
  }

  /**
   * Sets the target product
   *
   * optional productNumber, must be provided in case licensee auto-create is enabled
   * @param productNumber
   * @returns {ValidationParameters}
   */
  (0, _createClass2.default)(ValidationParameters, [{
    key: "setProductNumber",
    value: function setProductNumber(productNumber) {
      this.productNumber = productNumber;
      return this;
    }

    /**
     * Get the target product
     * @returns {*}
     */
  }, {
    key: "getProductNumber",
    value: function getProductNumber() {
      return this.productNumber;
    }

    /**
     * Sets the name for the new licensee
     *
     * optional human-readable licensee name in case licensee will be auto-created. This parameter must not
     * be the name, but can be used to store any other useful string information with new licensees, up to
     * 1000 characters.
     * @param licenseeName
     * @returns {ValidationParameters}
     */
  }, {
    key: "setLicenseeName",
    value: function setLicenseeName(licenseeName) {
      this.licenseeProperties.licenseeName = licenseeName;
      return this;
    }

    /**
     * Get the licensee name
     * @returns {*}
     */
  }, {
    key: "getLicenseeName",
    value: function getLicenseeName() {
      return this.licenseeProperties.licenseeName;
    }

    /**
     * Sets the licensee secret
     *
     * licensee secret stored on the client side. Refer to Licensee Secret documentation for details.
     * @param licenseeSecret
     * @returns {ValidationParameters}
     * @deprecated use 'NodeLocked' licensingModel instead
     */
  }, {
    key: "setLicenseeSecret",
    value: function setLicenseeSecret(licenseeSecret) {
      this.licenseeProperties.licenseeSecret = licenseeSecret;
      return this;
    }

    /**
     * Get the licensee secret
     * @returns {*}
     * @deprecated use 'NodeLocked' licensingModel instead
     */
  }, {
    key: "getLicenseeSecret",
    value: function getLicenseeSecret() {
      return this.licenseeProperties.licenseeSecret;
    }

    /**
     * Get all licensee properties
     */
  }, {
    key: "getLicenseeProperties",
    value: function getLicenseeProperties() {
      return this.licenseeProperties;
    }

    /**
     * Set licensee property
     * @param key
     * @param value
     */
  }, {
    key: "setLicenseeProperty",
    value: function setLicenseeProperty(key, value) {
      this.licenseeProperties[key] = value;
      return this;
    }

    /**
     * Get licensee property
     * @param key
     */
  }, {
    key: "getLicenseeProperty",
    value: function getLicenseeProperty(key, def) {
      return this.licenseeProperties[key] || def;
    }

    /**
     * Indicates, that the validation response is intended the offline use
     *
     * @param forOfflineUse
     *            if "true", validation response will be extended with data required for the offline use
     */
  }, {
    key: "setForOfflineUse",
    value: function setForOfflineUse(forOfflineUse) {
      this.forOfflineUse = !!forOfflineUse;
      return this;
    }
  }, {
    key: "isForOfflineUse",
    value: function isForOfflineUse() {
      return !!this.forOfflineUse;
    }
  }, {
    key: "setDryRun",
    value: function setDryRun(dryRun) {
      this.dryRun = !!dryRun;
      return this;
    }
  }, {
    key: "getDryRun",
    value: function getDryRun(def) {
      return this.dryRun || def;
    }

    /**
     * Get validation parameters
     * @returns {*}
     */
  }, {
    key: "getParameters",
    value: function getParameters() {
      return _objectSpread({}, this.parameters);
    }
  }, {
    key: "getProductModuleValidationParameters",
    value: function getProductModuleValidationParameters(productModuleNumber) {
      return _objectSpread({}, this.parameters[productModuleNumber]);
    }
  }, {
    key: "setProductModuleValidationParameters",
    value: function setProductModuleValidationParameters(productModuleNumber, productModuleParameters) {
      if (this.parameters[productModuleNumber] === undefined || !Object.keys(this.parameters[productModuleNumber]).length) {
        this.parameters[productModuleNumber] = {};
      }
      this.parameters[productModuleNumber] = _objectSpread(_objectSpread({}, this.parameters[productModuleNumber]), productModuleParameters);
      return this;
    }
  }]);
  return ValidationParameters;
}();
exports["default"] = ValidationParameters;

/***/ }),

/***/ 3735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(8698));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(8416));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(6690));
var _createClass2 = _interopRequireDefault(__webpack_require__(9728));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ValidationResults = /*#__PURE__*/function () {
  function ValidationResults() {
    (0, _classCallCheck2.default)(this, ValidationResults);
    this.validators = {};
  }
  (0, _createClass2.default)(ValidationResults, [{
    key: "getValidators",
    value: function getValidators() {
      return _objectSpread({}, this.validators);
    }
  }, {
    key: "setProductModuleValidation",
    value: function setProductModuleValidation(productModuleNumber, productModuleValidation) {
      if (!_CheckUtils.default.isValid(productModuleNumber) || (0, _typeof2.default)(productModuleNumber) === 'object') {
        throw new TypeError("Bad productModuleNumber:".concat(productModuleNumber));
      }
      this.validators[productModuleNumber] = productModuleValidation;
      return this;
    }
  }, {
    key: "getProductModuleValidation",
    value: function getProductModuleValidation(productModuleNumber) {
      if (!_CheckUtils.default.isValid(productModuleNumber) || (0, _typeof2.default)(productModuleNumber) === 'object') {
        throw new TypeError("Bad productModuleNumber:".concat(productModuleNumber));
      }
      return this.validators[productModuleNumber];
    }
  }, {
    key: "setTtl",
    value: function setTtl(ttl) {
      if (!_CheckUtils.default.isValid(ttl) || (0, _typeof2.default)(ttl) === 'object') {
        throw new TypeError("Bad ttl:".concat(ttl));
      }
      this.ttl = new Date(String(ttl));
      return this;
    }
  }, {
    key: "getTtl",
    value: function getTtl() {
      return this.ttl ? new Date(this.ttl) : undefined;
    }
  }, {
    key: "toString",
    value: function toString() {
      var data = 'ValidationResult [';
      var validators = this.getValidators();
      var has = Object.prototype.hasOwnProperty;
      Object.keys(validators).forEach(function (productModuleNumber) {
        data += "ProductModule<".concat(productModuleNumber, ">");
        if (has.call(validators, productModuleNumber)) {
          data += JSON.stringify(validators[productModuleNumber]);
        }
      });
      data += ']';
      return data;
    }
  }]);
  return ValidationResults;
}();
exports["default"] = ValidationResults;

/***/ }),

/***/ 706:
/***/ ((module) => {

(function () {
  "use strict";

  function btoa(str) {
    var buffer;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = Buffer.from(str.toString(), 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());


/***/ }),

/***/ 1227:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(2447)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 2447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(7824);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 5158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(1227);
} else {
	module.exports = __webpack_require__(39);
}


/***/ }),

/***/ 39:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(6224);
const util = __webpack_require__(3837);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(2130);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(2447)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 2261:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debug;

module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = __webpack_require__(5158)("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug !== "function") {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};


/***/ }),

/***/ 938:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var url = __webpack_require__(7310);
var URL = url.URL;
var http = __webpack_require__(3685);
var https = __webpack_require__(5687);
var Writable = (__webpack_require__(2781).Writable);
var assert = __webpack_require__(9491);
var debug = __webpack_require__(2261);

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  abortRequest(this._currentRequest);
  this.emit("abort");
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  }
  else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ?
    url.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  abortRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host"),
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
    return;
  }

  // Create the redirected request
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode,
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders,
    };
    try {
      beforeRedirect(this._options, responseDetails, requestDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (isString(input)) {
        var parsed;
        try {
          parsed = urlToOptions(new URL(input));
        }
        catch (err) {
          /* istanbul ignore next */
          parsed = url.parse(input);
        }
        if (!isString(parsed.protocol)) {
          throw new InvalidUrlError({ input });
        }
        input = parsed;
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    Error.captureStackTrace(this, this.constructor);
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  return CustomError;
}

function abortRequest(request) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.abort();
}

function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
  return typeof value === "function";
}

function isBuffer(value) {
  return typeof value === "object" && ("length" in value);
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ 6560:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 7824:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 2130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(2037);
const tty = __webpack_require__(6224);
const hasFlag = __webpack_require__(6560);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 6224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 3897:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5372:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6115:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7156:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6690:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);
var isNativeReflectConstruct = __webpack_require__(9617);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4062);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8416:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(4062);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var superPropBase = __webpack_require__(1753);
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _get.apply(this, arguments);
}
module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3808:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(6015);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4836:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6035:
/***/ ((module) => {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9617:
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8872:
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2218:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
var assertThisInitialized = __webpack_require__(6115);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6015:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(5372);
var iterableToArrayLimit = __webpack_require__(8872);
var unsupportedIterableToArray = __webpack_require__(6116);
var nonIterableRest = __webpack_require__(2218);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(3808);
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4062:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8698)["default"]);
var toPrimitive = __webpack_require__(5036);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8698:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(3897);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(3808);
var setPrototypeOf = __webpack_require__(6015);
var isNativeFunction = __webpack_require__(6035);
var construct = __webpack_require__(3515);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(7061)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 4147:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"netlicensing-client","version":"1.2.31","description":"JavaScript Wrapper for Labs64 NetLicensing RESTful API","keywords":["labs64","netlicensing","licensing","licensing-as-a-service","license","license-management","software-license","client","restful","restful-api","javascript","wrapper","api","client"],"license":"Apache-2.0","author":"Labs64 GmbH","homepage":"https://netlicensing.io","repository":{"type":"git","url":"https://github.com/Labs64/NetLicensingClient-javascript"},"bugs":{"url":"https://github.com/Labs64/NetLicensingClient-javascript/issues"},"contributors":[{"name":"Ready Brown","email":"ready.brown@hotmail.de","url":"https://github.com/r-brown"},{"name":"Viacheslav Rudkovskiy","email":"viachaslau.rudkovski@labs64.de","url":"https://github.com/v-rudkovskiy"},{"name":"Andrei Yushkevich","email":"yushkevich@me.com","url":"https://github.com/yushkevich"}],"main":"dist/netlicensing-client.js","files":["dist"],"scripts":{"build":"node build/build.cjs","release":"npm run build && npm run test","dev":"webpack --progress --watch --config build/webpack.dev.conf.cjs","test":"karma start test/karma.conf.js --single-run","test-mocha":"webpack --config build/webpack.test.conf.cjs","test-for-travis":"karma start test/karma.conf.js --single-run --browsers Firefox","lint":"eslint --ext .js,.vue src test"},"dependencies":{"axios":"^0.26.1","btoa":"^1.2.1","es6-promise":"^4.2.8"},"devDependencies":{"@babel/core":"^7.17.8","@babel/plugin-proposal-class-properties":"^7.16.7","@babel/plugin-proposal-decorators":"^7.17.8","@babel/plugin-proposal-export-namespace-from":"^7.16.7","@babel/plugin-proposal-function-sent":"^7.16.7","@babel/plugin-proposal-json-strings":"^7.16.7","@babel/plugin-proposal-numeric-separator":"^7.16.7","@babel/plugin-proposal-throw-expressions":"^7.16.7","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-syntax-import-meta":"^7.10.4","@babel/plugin-transform-modules-commonjs":"^7.17.7","@babel/plugin-transform-runtime":"^7.17.0","@babel/preset-env":"^7.16.11","@babel/runtime":"^7.17.8","axios-mock-adapter":"^1.20.0","babel-eslint":"^10.1.0","babel-loader":"^8.2.2","chalk":"^4.1.2","eslint":"^8.12.0","eslint-config-airbnb-base":"^15.0.0","eslint-friendly-formatter":"^4.0.1","eslint-import-resolver-webpack":"^0.13.1","eslint-plugin-import":"^2.25.4","eslint-plugin-jasmine":"^4.1.3","eslint-webpack-plugin":"^3.1.1","faker":"^5.5.3","is-docker":"^2.2.1","jasmine":"^4.0.2","jasmine-core":"^4.0.1","karma":"^6.3.17","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.2","karma-jasmine":"^4.0.2","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.33","karma-webpack":"^5.0.0","lodash":"^4.17.21","ora":"^5.4.1","rimraf":"^3.0.2","terser-webpack-plugin":"^5.3.1","webpack":"^5.70.0","webpack-cli":"^4.9.2","webpack-merge":"^5.8.0"},"engines":{"node":">= 12.0.0","npm":">= 6.0.0"},"browserslist":["> 1%","last 2 versions","not ie <= 10"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;


var _interopRequireDefault = __webpack_require__(4836);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "BaseEntity", ({
  enumerable: true,
  get: function get() {
    return _BaseEntity.default;
  }
}));
Object.defineProperty(exports, "Bundle", ({
  enumerable: true,
  get: function get() {
    return _Bundle.default;
  }
}));
Object.defineProperty(exports, "BundleObtainParameters", ({
  enumerable: true,
  get: function get() {
    return _BundleObtainParameters.default;
  }
}));
Object.defineProperty(exports, "BundleService", ({
  enumerable: true,
  get: function get() {
    return _BundleService.default;
  }
}));
Object.defineProperty(exports, "CastsUtils", ({
  enumerable: true,
  get: function get() {
    return _CastsUtils.default;
  }
}));
Object.defineProperty(exports, "CheckUtils", ({
  enumerable: true,
  get: function get() {
    return _CheckUtils.default;
  }
}));
Object.defineProperty(exports, "Constants", ({
  enumerable: true,
  get: function get() {
    return _Constants.default;
  }
}));
Object.defineProperty(exports, "Context", ({
  enumerable: true,
  get: function get() {
    return _Context.default;
  }
}));
Object.defineProperty(exports, "Country", ({
  enumerable: true,
  get: function get() {
    return _Country.default;
  }
}));
Object.defineProperty(exports, "FilterUtils", ({
  enumerable: true,
  get: function get() {
    return _FilterUtils.default;
  }
}));
Object.defineProperty(exports, "License", ({
  enumerable: true,
  get: function get() {
    return _License.default;
  }
}));
Object.defineProperty(exports, "LicenseService", ({
  enumerable: true,
  get: function get() {
    return _LicenseService.default;
  }
}));
Object.defineProperty(exports, "LicenseTemplate", ({
  enumerable: true,
  get: function get() {
    return _LicenseTemplate.default;
  }
}));
Object.defineProperty(exports, "LicenseTemplateService", ({
  enumerable: true,
  get: function get() {
    return _LicenseTemplateService.default;
  }
}));
Object.defineProperty(exports, "LicenseTransactionJoin", ({
  enumerable: true,
  get: function get() {
    return _LicenseTransactionJoin.default;
  }
}));
Object.defineProperty(exports, "Licensee", ({
  enumerable: true,
  get: function get() {
    return _Licensee.default;
  }
}));
Object.defineProperty(exports, "LicenseeService", ({
  enumerable: true,
  get: function get() {
    return _LicenseeService.default;
  }
}));
Object.defineProperty(exports, "NlicError", ({
  enumerable: true,
  get: function get() {
    return _NlicError.default;
  }
}));
Object.defineProperty(exports, "Page", ({
  enumerable: true,
  get: function get() {
    return _Page.default;
  }
}));
Object.defineProperty(exports, "PaymentMethod", ({
  enumerable: true,
  get: function get() {
    return _PaymentMethod.default;
  }
}));
Object.defineProperty(exports, "PaymentMethodService", ({
  enumerable: true,
  get: function get() {
    return _PaymentMethodService.default;
  }
}));
Object.defineProperty(exports, "Product", ({
  enumerable: true,
  get: function get() {
    return _Product.default;
  }
}));
Object.defineProperty(exports, "ProductDiscount", ({
  enumerable: true,
  get: function get() {
    return _ProductDiscount.default;
  }
}));
Object.defineProperty(exports, "ProductModule", ({
  enumerable: true,
  get: function get() {
    return _ProductModule.default;
  }
}));
Object.defineProperty(exports, "ProductModuleService", ({
  enumerable: true,
  get: function get() {
    return _ProductModuleService.default;
  }
}));
Object.defineProperty(exports, "ProductService", ({
  enumerable: true,
  get: function get() {
    return _ProductService.default;
  }
}));
Object.defineProperty(exports, "Service", ({
  enumerable: true,
  get: function get() {
    return _Service.default;
  }
}));
Object.defineProperty(exports, "Token", ({
  enumerable: true,
  get: function get() {
    return _Token.default;
  }
}));
Object.defineProperty(exports, "TokenService", ({
  enumerable: true,
  get: function get() {
    return _TokenService.default;
  }
}));
Object.defineProperty(exports, "Transaction", ({
  enumerable: true,
  get: function get() {
    return _Transaction.default;
  }
}));
Object.defineProperty(exports, "TransactionService", ({
  enumerable: true,
  get: function get() {
    return _TransactionService.default;
  }
}));
Object.defineProperty(exports, "UtilityService", ({
  enumerable: true,
  get: function get() {
    return _UtilityService.default;
  }
}));
Object.defineProperty(exports, "ValidationParameters", ({
  enumerable: true,
  get: function get() {
    return _ValidationParameters.default;
  }
}));
Object.defineProperty(exports, "ValidationResults", ({
  enumerable: true,
  get: function get() {
    return _ValidationResults.default;
  }
}));
Object.defineProperty(exports, "itemToBundle", ({
  enumerable: true,
  get: function get() {
    return _itemToBundle.default;
  }
}));
Object.defineProperty(exports, "itemToCountry", ({
  enumerable: true,
  get: function get() {
    return _itemToCountry.default;
  }
}));
Object.defineProperty(exports, "itemToLicense", ({
  enumerable: true,
  get: function get() {
    return _itemToLicense.default;
  }
}));
Object.defineProperty(exports, "itemToLicenseTemplate", ({
  enumerable: true,
  get: function get() {
    return _itemToLicenseTemplate.default;
  }
}));
Object.defineProperty(exports, "itemToLicensee", ({
  enumerable: true,
  get: function get() {
    return _itemToLicensee.default;
  }
}));
Object.defineProperty(exports, "itemToObject", ({
  enumerable: true,
  get: function get() {
    return _itemToObject.default;
  }
}));
Object.defineProperty(exports, "itemToPaymentMethod", ({
  enumerable: true,
  get: function get() {
    return _itemToPaymentMethod.default;
  }
}));
Object.defineProperty(exports, "itemToProduct", ({
  enumerable: true,
  get: function get() {
    return _itemToProduct.default;
  }
}));
Object.defineProperty(exports, "itemToProductModule", ({
  enumerable: true,
  get: function get() {
    return _itemToProductModule.default;
  }
}));
Object.defineProperty(exports, "itemToToken", ({
  enumerable: true,
  get: function get() {
    return _itemToToken.default;
  }
}));
Object.defineProperty(exports, "itemToTransaction", ({
  enumerable: true,
  get: function get() {
    return _itemToTransaction.default;
  }
}));
var _Constants = _interopRequireDefault(__webpack_require__(1480));
var _Context = _interopRequireDefault(__webpack_require__(4693));
var _Page = _interopRequireDefault(__webpack_require__(9407));
var _ValidationParameters = _interopRequireDefault(__webpack_require__(4856));
var _ValidationResults = _interopRequireDefault(__webpack_require__(3735));
var _BundleObtainParameters = _interopRequireDefault(__webpack_require__(4658));
var _Service = _interopRequireDefault(__webpack_require__(393));
var _LicenseeService = _interopRequireDefault(__webpack_require__(5498));
var _LicenseService = _interopRequireDefault(__webpack_require__(6486));
var _LicenseTemplateService = _interopRequireDefault(__webpack_require__(1580));
var _PaymentMethodService = _interopRequireDefault(__webpack_require__(5225));
var _ProductModuleService = _interopRequireDefault(__webpack_require__(7443));
var _ProductService = _interopRequireDefault(__webpack_require__(5042));
var _TokenService = _interopRequireDefault(__webpack_require__(731));
var _TransactionService = _interopRequireDefault(__webpack_require__(5919));
var _UtilityService = _interopRequireDefault(__webpack_require__(7635));
var _BundleService = _interopRequireDefault(__webpack_require__(1462));
var _BaseEntity = _interopRequireDefault(__webpack_require__(389));
var _Country = _interopRequireDefault(__webpack_require__(187));
var _License = _interopRequireDefault(__webpack_require__(9763));
var _Licensee = _interopRequireDefault(__webpack_require__(2948));
var _LicenseTemplate = _interopRequireDefault(__webpack_require__(767));
var _PaymentMethod = _interopRequireDefault(__webpack_require__(5088));
var _Product = _interopRequireDefault(__webpack_require__(7143));
var _ProductDiscount = _interopRequireDefault(__webpack_require__(3144));
var _ProductModule = _interopRequireDefault(__webpack_require__(3886));
var _Token = _interopRequireDefault(__webpack_require__(8132));
var _Transaction = _interopRequireDefault(__webpack_require__(4880));
var _LicenseTransactionJoin = _interopRequireDefault(__webpack_require__(3089));
var _Bundle = _interopRequireDefault(__webpack_require__(2044));
var _itemToCountry = _interopRequireDefault(__webpack_require__(3213));
var _itemToLicense = _interopRequireDefault(__webpack_require__(3887));
var _itemToLicensee = _interopRequireDefault(__webpack_require__(6463));
var _itemToLicenseTemplate = _interopRequireDefault(__webpack_require__(3255));
var _itemToObject = _interopRequireDefault(__webpack_require__(7106));
var _itemToPaymentMethod = _interopRequireDefault(__webpack_require__(797));
var _itemToProduct = _interopRequireDefault(__webpack_require__(1255));
var _itemToProductModule = _interopRequireDefault(__webpack_require__(2514));
var _itemToToken = _interopRequireDefault(__webpack_require__(4073));
var _itemToTransaction = _interopRequireDefault(__webpack_require__(1198));
var _itemToBundle = _interopRequireDefault(__webpack_require__(9892));
var _CastsUtils = _interopRequireDefault(__webpack_require__(553));
var _CheckUtils = _interopRequireDefault(__webpack_require__(5661));
var _FilterUtils = _interopRequireDefault(__webpack_require__(3093));
var _NlicError = _interopRequireDefault(__webpack_require__(2986));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
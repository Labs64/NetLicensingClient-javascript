(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("NetLicensing", [], factory);
	else if(typeof exports === 'object')
		exports["NetLicensing"] = factory();
	else
		root["NetLicensing"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/netlicensing-client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

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
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
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
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

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

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

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

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

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
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

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
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
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

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

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

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
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

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
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
    response.data = transformData(
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
        reason.response.data = transformData(
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

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
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

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

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
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
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
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
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

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
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
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

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

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

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

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

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

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
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
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
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
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
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
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
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
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
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
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
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

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
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
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    BASIC_AUTHENTICATION: 'BASIC_AUTH',
    APIKEY_IDENTIFICATION: 'APIKEY',

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
        }
    },

    LicenseTemplate: {
        ENDPOINT_PATH: 'licensetemplate',
        LicenseType: {
            FEATURE: 'FEATURE',
            TIMEVOLUME: 'TIMEVOLUME',
            FLOATING: 'FLOATING',
            QUANTITY: 'QUANTITY'
        }
    },

    Product: {
        ENDPOINT_PATH: 'product',
        LicenseeSecretMode: {
            DISABLED: 'DISABLED',
            PREDEFINED: 'PREDEFINED',
            CLIENT: 'CLIENT'
        }
    },

    Token: {
        ENDPOINT_PATH: 'token',
        Type: {
            DEFAULT: 'DEFAULT',
            SHOP: 'SHOP',
            APIKEY: 'APIKEY'
        }
    },

    Transaction: {
        ENDPOINT_PATH: 'transaction',
        Status: {
            CANCELLED: 'CANCELLED',
            CLOSED: 'CLOSED',
            PENDING: 'PENDING'
        }
    },

    Licensee: {
        ENDPOINT_PATH: 'licensee',
        ENDPOINT_PATH_VALIDATE: 'validate',
        ENDPOINT_PATH_TRANSFER: 'transfer'
    },

    License: {
        ENDPOINT_PATH: 'license'
    },

    PaymentMethod: {
        ENDPOINT_PATH: 'paymentmethod'
    },

    ProductModule: {
        ENDPOINT_PATH: 'productmodule'
    },

    Utility: {
        ENDPOINT_PATH: 'utility'
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/BaseEntity.js":
/*!************************************!*\
  !*** ./src/entities/BaseEntity.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _CastsUtils = __webpack_require__(/*! ../util/CastsUtils */ "./src/util/CastsUtils.js");

var _CastsUtils2 = _interopRequireDefault(_CastsUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/**
 * List of properties that has read-only access
 * @type {{}}
 * @private
 */
var readOnlyMap = new WeakMap();

var BaseEntity = function () {
    function BaseEntity(_ref) {
        var properties = _ref.properties,
            casts = _ref.casts,
            readOnly = _ref.readOnly;

        _classCallCheck(this, BaseEntity);

        propertiesMap.set(this, {});
        definedMap.set(this, {});
        castsMap.set(this, casts || []);
        readOnlyMap.set(this, readOnly || []);

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


    _createClass(BaseEntity, [{
        key: 'setProperty',
        value: function setProperty(property, value) {
            // if property has read-only access and was initialized at least once
            if (this.hasProperty(property) && this.isPropertyReadOnly(property)) {
                throw new TypeError('Property ' + property + ' has read-only access');
            }

            // if property name has bad native type
            if (!_CheckUtils2.default.isValid(property) || (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object') {
                throw new TypeError('Bad property name:' + property);
            }

            // if property value has bad native type
            if (!_CheckUtils2.default.isValid(value)) {
                throw new TypeError('Property ' + property + ' has bad value ' + value);
            }

            var castedValue = this.cast(property, value);

            // check if property value after cast has bad native type
            if (!_CheckUtils2.default.isValid(value)) {
                throw new TypeError('Property ' + property + ' has bad cast value ' + castedValue);
            }

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
        key: 'addProperty',
        value: function addProperty(property, value) {
            return this.setProperty(property, value);
        }

        /**
         * Set the entity properties.
         * @param properties
         * @returns {BaseEntity}
         */

    }, {
        key: 'setProperties',
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
        key: 'hasProperty',
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
        key: 'getProperty',
        value: function getProperty(property, def) {
            return Object.prototype.hasOwnProperty.call(propertiesMap.get(this), property) ? propertiesMap.get(this)[property] : def;
        }

        /**
         * Get all of the current properties on the entity.
         */

    }, {
        key: 'getProperties',
        value: function getProperties() {
            return Object.assign({}, propertiesMap.get(this));
        }

        /**
         * Remove property
         * @param property
         * @returns {BaseEntity}
         */

    }, {
        key: 'removeProperty',
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
        key: 'removeProperties',
        value: function removeProperties(properties) {
            var _this2 = this;

            var propertiesForRemove = properties || Object.keys(propertiesMap.get(this));

            propertiesForRemove.forEach(function (property) {
                _this2.removeProperty(property);
            });
        }
    }, {
        key: 'isPropertyReadOnly',
        value: function isPropertyReadOnly(property) {
            return readOnlyMap.get(this).indexOf(property) >= 0;
        }
    }, {
        key: 'cast',
        value: function cast(property, value) {
            if (!castsMap.get(this)[property]) return value;

            return (0, _CastsUtils2.default)(castsMap.get(this)[property], value);
        }

        /**
         * Check if property has defined
         * @param property
         * @protected
         */

    }, {
        key: 'hasDefine',
        value: function hasDefine(property) {
            return Boolean(definedMap.get(this)[property]);
        }

        /**
         * Define property getter and setter
         * @param property
         * @protected
         */

    }, {
        key: 'define',
        value: function define(property) {
            if (this.hasDefine(property)) return;

            if (!_CheckUtils2.default.isValid(property) || (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object') {
                throw new TypeError('Bad property name:' + property);
            }

            var self = this;

            // delete property
            delete this[property];

            var descriptors = {
                enumerable: true,
                configurable: true,
                get: function get() {
                    return self.getProperty(property);
                }
            };

            if (!this.isPropertyReadOnly(property)) {
                descriptors.set = function (value) {
                    return self.setProperty(property, value);
                };
            }

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
        key: 'removeDefine',
        value: function removeDefine(property) {
            if (!this.hasDefine(property)) return;

            var defined = definedMap.get(this);
            delete defined[property];

            delete this[property];
        }

        /**
         * Define properties getter and setter
         * @param properties
         * @param onlyGetter
         * @protected
         */

    }, {
        key: 'defines',
        value: function defines(properties, onlyGetter) {
            var _this3 = this;

            properties.forEach(function (property) {
                _this3.define(property, onlyGetter);
            });
        }

        /**
         * Get properties map
         */

    }, {
        key: 'asPropertiesMap',
        value: function asPropertiesMap() {
            var _this4 = this;

            var properties = this.getProperties();
            var customProperties = {};

            var has = Object.prototype.hasOwnProperty;

            Object.keys(this).forEach(function (key) {
                if (!has.call(_this4, key)) return;
                if (!_CheckUtils2.default.isValid(_this4[key])) return;

                customProperties[key] = _this4[key];
            });

            return Object.assign({}, customProperties, properties);
        }
    }]);

    return BaseEntity;
}();

exports.default = BaseEntity;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/Country.js":
/*!*********************************!*\
  !*** ./src/entities/Country.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
var Country = function (_BaseEntity) {
    _inherits(Country, _BaseEntity);

    function Country(properties) {
        _classCallCheck(this, Country);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (Country.__proto__ || Object.getPrototypeOf(Country)).call(this, {
            properties: properties,
            // The attributes that should be cast to native types.
            casts: {
                code: 'string',
                name: 'string',
                vatPercent: 'int',
                isEu: 'boolean'
            }
        }));

        _this.defines(['code', 'name', 'vatPercent', 'isEu']);
        return _this;
    }

    _createClass(Country, [{
        key: 'setCode',
        value: function setCode(code) {
            return this.setProperty('code', code);
        }
    }, {
        key: 'getCode',
        value: function getCode(def) {
            return this.getProperty('code', def);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            return this.setProperty('name', name);
        }
    }, {
        key: 'getName',
        value: function getName(def) {
            return this.getProperty('name', def);
        }
    }, {
        key: 'setVatPercent',
        value: function setVatPercent(vat) {
            return this.setProperty('vatPercent', vat);
        }
    }, {
        key: 'getVatPercent',
        value: function getVatPercent(def) {
            return this.getProperty('vatPercent', def);
        }
    }, {
        key: 'setIsEu',
        value: function setIsEu(isEu) {
            return this.setProperty('isEu', isEu);
        }
    }, {
        key: 'getIsEu',
        value: function getIsEu(def) {
            return this.getProperty('isEu', def);
        }
    }]);

    return Country;
}(_BaseEntity3.default);

exports.default = Country;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/License.js":
/*!*********************************!*\
  !*** ./src/entities/License.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
var License = function (_BaseEntity) {
    _inherits(License, _BaseEntity);

    function License(properties) {
        _classCallCheck(this, License);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (License.__proto__ || Object.getPrototypeOf(License)).call(this, {
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
            },
            // The attributes that should have read-only access.
            readOnly: ['inUse', 'currency', 'price']
        }));

        _this.defines(['number', 'active', 'name', 'hidden', 'parentfeature', 'timeVolume', 'startDate', 'inUse', 'currency', 'price']);
        return _this;
    }

    _createClass(License, [{
        key: 'setNumber',
        value: function setNumber(number) {
            return this.setProperty('number', number);
        }
    }, {
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            return this.setProperty('active', active);
        }
    }, {
        key: 'getActive',
        value: function getActive(def) {
            return this.getProperty('active', def);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            return this.setProperty('name', name);
        }
    }, {
        key: 'getName',
        value: function getName(def) {
            return this.getProperty('name', def);
        }
    }, {
        key: 'setHidden',
        value: function setHidden(hidden) {
            return this.setProperty('hidden', hidden);
        }
    }, {
        key: 'getHidden',
        value: function getHidden(def) {
            return this.getProperty('hidden', def);
        }
    }, {
        key: 'setParentfeature',
        value: function setParentfeature(parentfeature) {
            return this.setProperty('parentfeature', parentfeature);
        }
    }, {
        key: 'getParentfeature',
        value: function getParentfeature(def) {
            return this.getProperty('parentfeature', def);
        }
    }, {
        key: 'setTimeVolume',
        value: function setTimeVolume(timeVolume) {
            return this.setProperty('timeVolume', timeVolume);
        }
    }, {
        key: 'getTimeVolume',
        value: function getTimeVolume(def) {
            return this.getProperty('timeVolume', def);
        }
    }, {
        key: 'setStartDate',
        value: function setStartDate(startDate) {
            return this.setProperty('startDate', startDate);
        }
    }, {
        key: 'getStartDate',
        value: function getStartDate(def) {
            return this.getProperty('startDate', def);
        }
    }, {
        key: 'getInUse',
        value: function getInUse(def) {
            return this.getProperty('inUse', def);
        }
    }, {
        key: 'getPrice',
        value: function getPrice(def) {
            return this.getProperty('price', def);
        }
    }, {
        key: 'getCurrency',
        value: function getCurrency(def) {
            return this.getProperty('currency', def);
        }
    }]);

    return License;
}(_BaseEntity3.default);

exports.default = License;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/LicenseTemplate.js":
/*!*****************************************!*\
  !*** ./src/entities/LicenseTemplate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
 * Mandatory for 'TIMEVOLUME' license type.
 * @property integer timeVolume
 *
 * Mandatory for 'FLOATING' license type.
 * @property integer maxSessions
 *
 * Mandatory for 'QUANTITY' license type.
 * @property integer quantity
 *
 * @constructor
 */
var LicenseTemplate = function (_BaseEntity) {
    _inherits(LicenseTemplate, _BaseEntity);

    function LicenseTemplate(properties) {
        _classCallCheck(this, LicenseTemplate);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (LicenseTemplate.__proto__ || Object.getPrototypeOf(LicenseTemplate)).call(this, {
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
                timeVolume: 'int',
                maxSessions: 'int',
                quantity: 'int',
                inUse: 'boolean'
            },
            // The attributes that should have read-only access.
            readOnly: ['inUse']
        }));

        _this.defines(['number', 'active', 'name', 'licenseType', 'price', 'currency', 'automatic', 'hidden', 'hideLicenses', 'timeVolume', 'maxSessions', 'quantity', 'inUse']);
        return _this;
    }

    _createClass(LicenseTemplate, [{
        key: 'setNumber',
        value: function setNumber(number) {
            return this.setProperty('number', number);
        }
    }, {
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            return this.setProperty('active', active);
        }
    }, {
        key: 'getActive',
        value: function getActive(def) {
            return this.getProperty('active', def);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            return this.setProperty('name', name);
        }
    }, {
        key: 'getName',
        value: function getName(def) {
            return this.getProperty('name', def);
        }
    }, {
        key: 'setLicenseType',
        value: function setLicenseType(licenseType) {
            return this.setProperty('licenseType', licenseType);
        }
    }, {
        key: 'getLicenseType',
        value: function getLicenseType(def) {
            return this.getProperty('licenseType', def);
        }
    }, {
        key: 'setPrice',
        value: function setPrice(price) {
            return this.setProperty('price', price);
        }
    }, {
        key: 'getPrice',
        value: function getPrice(def) {
            return this.getProperty('price', def);
        }
    }, {
        key: 'setCurrency',
        value: function setCurrency(currency) {
            return this.setProperty('currency', currency);
        }
    }, {
        key: 'getCurrency',
        value: function getCurrency(def) {
            return this.getProperty('currency', def);
        }
    }, {
        key: 'setAutomatic',
        value: function setAutomatic(automatic) {
            return this.setProperty('automatic', automatic);
        }
    }, {
        key: 'getAutomatic',
        value: function getAutomatic(def) {
            return this.getProperty('automatic', def);
        }
    }, {
        key: 'setHidden',
        value: function setHidden(hidden) {
            return this.setProperty('hidden', hidden);
        }
    }, {
        key: 'getHidden',
        value: function getHidden(def) {
            return this.getProperty('hidden', def);
        }
    }, {
        key: 'setHideLicenses',
        value: function setHideLicenses(hideLicenses) {
            return this.setProperty('hideLicenses', hideLicenses);
        }
    }, {
        key: 'getHideLicenses',
        value: function getHideLicenses(def) {
            return this.getProperty('hideLicenses', def);
        }
    }, {
        key: 'setTimeVolume',
        value: function setTimeVolume(timeVolume) {
            return this.setProperty('timeVolume', timeVolume);
        }
    }, {
        key: 'getTimeVolume',
        value: function getTimeVolume(def) {
            return this.getProperty('timeVolume', def);
        }
    }, {
        key: 'setMaxSessions',
        value: function setMaxSessions(maxSessions) {
            return this.setProperty('maxSessions', maxSessions);
        }
    }, {
        key: 'getMaxSessions',
        value: function getMaxSessions(def) {
            return this.getProperty('maxSessions', def);
        }
    }, {
        key: 'setQuantity',
        value: function setQuantity(quantity) {
            return this.setProperty('quantity', quantity);
        }
    }, {
        key: 'getQuantity',
        value: function getQuantity(def) {
            return this.getProperty('quantity', def);
        }
    }, {
        key: 'getInUse',
        value: function getInUse(def) {
            return this.getProperty('inUse', def);
        }
    }]);

    return LicenseTemplate;
}(_BaseEntity3.default);

exports.default = LicenseTemplate;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/LicenseTransactionJoin.js":
/*!************************************************!*\
  !*** ./src/entities/LicenseTransactionJoin.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Transaction = __webpack_require__(/*! ./Transaction */ "./src/entities/Transaction.js");

var _Transaction2 = _interopRequireDefault(_Transaction);

var _License = __webpack_require__(/*! ./License */ "./src/entities/License.js");

var _License2 = _interopRequireDefault(_License);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const

var LicenseTransactionJoin = function () {
    function LicenseTransactionJoin(transaction, license) {
        _classCallCheck(this, LicenseTransactionJoin);

        this.transaction = transaction;
        this.license = license;
    }

    _createClass(LicenseTransactionJoin, [{
        key: 'setTransaction',
        value: function setTransaction(transaction) {
            if (!(transaction instanceof _Transaction2.default)) {
                throw new TypeError('context must be an instance of Transaction');
            }

            this.transaction = transaction;
            return this;
        }
    }, {
        key: 'getTransaction',
        value: function getTransaction(def) {
            return this.transaction || def;
        }
    }, {
        key: 'setLicense',
        value: function setLicense(license) {
            if (!(license instanceof _License2.default)) {
                throw new TypeError('context must be an instance of License');
            }
            this.license = license;
            return this;
        }
    }, {
        key: 'getLicense',
        value: function getLicense(def) {
            return this.license || def;
        }
    }]);

    return LicenseTransactionJoin;
}();

exports.default = LicenseTransactionJoin;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/Licensee.js":
/*!**********************************!*\
  !*** ./src/entities/Licensee.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
var Licensee = function (_BaseEntity) {
    _inherits(Licensee, _BaseEntity);

    function Licensee(properties) {
        _classCallCheck(this, Licensee);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (Licensee.__proto__ || Object.getPrototypeOf(Licensee)).call(this, {
            properties: properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                name: 'string',
                licenseeSecret: 'string',
                markedForTransfer: 'boolean',
                inUse: 'boolean'
            },
            // The attributes that should have read-only access.
            readOnly: ['inUse']
        }));

        _this.defines(['number', 'active', 'name', 'licenseeSecret', 'markedForTransfer', 'inUse']);
        return _this;
    }

    _createClass(Licensee, [{
        key: 'setNumber',
        value: function setNumber(number) {
            return this.setProperty('number', number);
        }
    }, {
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            return this.setProperty('active', active);
        }
    }, {
        key: 'getActive',
        value: function getActive(def) {
            return this.getProperty('active', def);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            return this.setProperty('name', name);
        }
    }, {
        key: 'getName',
        value: function getName(def) {
            return this.getProperty('name', def);
        }
    }, {
        key: 'setLicenseeSecret',
        value: function setLicenseeSecret(licenseeSecret) {
            return this.setProperty('licenseeSecret', licenseeSecret);
        }
    }, {
        key: 'getLicenseeSecret',
        value: function getLicenseeSecret(def) {
            return this.getProperty('licenseeSecret', def);
        }
    }, {
        key: 'setMarkedForTransfer',
        value: function setMarkedForTransfer(markedForTransfer) {
            return this.setProperty('markedForTransfer', markedForTransfer);
        }
    }, {
        key: 'getMarkedForTransfer',
        value: function getMarkedForTransfer(def) {
            return this.getProperty('markedForTransfer', def);
        }
    }, {
        key: 'getInUse',
        value: function getInUse(def) {
            return this.getProperty('inUse', def);
        }
    }]);

    return Licensee;
}(_BaseEntity3.default);

exports.default = Licensee;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/PaymentMethod.js":
/*!***************************************!*\
  !*** ./src/entities/PaymentMethod.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * PaymentMethod entity used internally by NetLicensing.
 *
 * @property string number
 * @property boolean active
 *
 * @constructor
 */
var PaymentMethod = function (_BaseEntity) {
    _inherits(PaymentMethod, _BaseEntity);

    function PaymentMethod(properties) {
        _classCallCheck(this, PaymentMethod);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (PaymentMethod.__proto__ || Object.getPrototypeOf(PaymentMethod)).call(this, {
            properties: properties,
            // The attributes that should be cast to native types.
            casts: {
                number: 'string',
                active: 'boolean',
                'paypal.subject': 'string'
            },
            // The attributes that should have read-only access.
            readOnly: ['inUse']
        }));

        _this.defines(['number', 'active', 'paypal.subject']);
        return _this;
    }

    _createClass(PaymentMethod, [{
        key: 'setNumber',
        value: function setNumber(number) {
            return this.setProperty('number', number);
        }
    }, {
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            return this.setProperty('active', active);
        }
    }, {
        key: 'getActive',
        value: function getActive(def) {
            return this.getProperty('active', def);
        }
    }, {
        key: 'setPaypalSubject',
        value: function setPaypalSubject(paypalSubject) {
            return this.setProperty('paypal.subject', paypalSubject);
        }
    }, {
        key: 'getPaypalSubject',
        value: function getPaypalSubject(def) {
            return this.getProperty('paypal.subject', def);
        }
    }]);

    return PaymentMethod;
}(_BaseEntity3.default);

exports.default = PaymentMethod;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/Product.js":
/*!*********************************!*\
  !*** ./src/entities/Product.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

var _ProductDiscount = __webpack_require__(/*! ./ProductDiscount */ "./src/entities/ProductDiscount.js");

var _ProductDiscount2 = _interopRequireDefault(_ProductDiscount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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

var Product = function (_BaseEntity) {
    _inherits(Product, _BaseEntity);

    function Product(properties) {
        _classCallCheck(this, Product);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, {
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
            },
            // The attributes that should have read-only access.
            readOnly: ['inUse']
        }));

        _this.defines(['number', 'active', 'name', 'version', 'description', 'licensingInfo', 'licenseeAutoCreate', 'licenseeSecretMode', 'inUse']);

        discountsMap.set(_this, []);
        discountsTouched.set(_this, false);
        return _this;
    }

    _createClass(Product, [{
        key: 'setNumber',
        value: function setNumber(number) {
            return this.setProperty('number', number);
        }
    }, {
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            return this.setProperty('active', active);
        }
    }, {
        key: 'getActive',
        value: function getActive(def) {
            return this.getProperty('active', def);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            return this.setProperty('name', name);
        }
    }, {
        key: 'getName',
        value: function getName(def) {
            return this.getProperty('name', def);
        }
    }, {
        key: 'setVersion',
        value: function setVersion(version) {
            return this.setProperty('version', version);
        }
    }, {
        key: 'getVersion',
        value: function getVersion(def) {
            return this.getProperty('version', def);
        }
    }, {
        key: 'setLicenseeAutoCreate',
        value: function setLicenseeAutoCreate(licenseeAutoCreate) {
            return this.setProperty('licenseeAutoCreate', licenseeAutoCreate);
        }
    }, {
        key: 'getLicenseeAutoCreate',
        value: function getLicenseeAutoCreate(def) {
            return this.getProperty('licenseeAutoCreate', def);
        }
    }, {
        key: 'setLicenseeSecretMode',
        value: function setLicenseeSecretMode(licenseeSecretMode) {
            return this.setProperty('licenseeSecretMode', licenseeSecretMode);
        }
    }, {
        key: 'getLicenseeSecretMode',
        value: function getLicenseeSecretMode(def) {
            return this.getProperty('licenseeSecretMode', def);
        }
    }, {
        key: 'setDescription',
        value: function setDescription(description) {
            return this.setProperty('description', description);
        }
    }, {
        key: 'getDescription',
        value: function getDescription(def) {
            return this.getProperty('description', def);
        }
    }, {
        key: 'setLicensingInfo',
        value: function setLicensingInfo(licensingInfo) {
            return this.setProperty('licensingInfo', licensingInfo);
        }
    }, {
        key: 'getLicensingInfo',
        value: function getLicensingInfo(def) {
            return this.getProperty('licensingInfo', def);
        }
    }, {
        key: 'getInUse',
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
        key: 'addDiscount',
        value: function addDiscount(discount) {
            if (!(discount instanceof _ProductDiscount2.default)) {
                throw new TypeError('discount must be an instance of ProductDiscount');
            }

            var discounts = discountsMap.get(this);
            discounts.push(discount);
            discountsMap.set(this, discounts);
            discountsTouched.set(this, true);

            return this;
        }

        /**
         * Set discounts to product
         * @param discounts
         */

    }, {
        key: 'setProductDiscounts',
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
        key: 'getProductDiscounts',
        value: function getProductDiscounts() {
            return Object.assign([], discountsMap.get(this));
        }
    }, {
        key: 'setListDiscount',
        value: function setListDiscount(properties) {
            if (!properties) return;

            var discount = new _ProductDiscount2.default();
            properties.forEach(function (property) {
                discount.setProperty(property.name, property.value);
            });
            this.addDiscount(discount);
        }
    }, {
        key: 'asPropertiesMap',
        value: function asPropertiesMap() {
            var propertiesMap = _get(Product.prototype.__proto__ || Object.getPrototypeOf(Product.prototype), 'asPropertiesMap', this).call(this);

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
}(_BaseEntity3.default);

exports.default = Product;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/ProductDiscount.js":
/*!*****************************************!*\
  !*** ./src/entities/ProductDiscount.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ProductDiscount = function (_BaseEntity) {
    _inherits(ProductDiscount, _BaseEntity);

    function ProductDiscount(properties) {
        _classCallCheck(this, ProductDiscount);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (ProductDiscount.__proto__ || Object.getPrototypeOf(ProductDiscount)).call(this, {
            properties: properties,
            // The attributes that should be cast to native types.
            casts: {
                totalPrice: 'float',
                currency: 'string',
                amountFix: 'float',
                amountPercent: 'int'
            }
        }));

        _this.defines(['totalPrice', 'currency', 'amountFix', 'amountPercent']);
        return _this;
    }

    _createClass(ProductDiscount, [{
        key: 'setTotalPrice',
        value: function setTotalPrice(totalPrice) {
            return this.setProperty('totalPrice', totalPrice);
        }
    }, {
        key: 'getTotalPrice',
        value: function getTotalPrice(def) {
            return this.getProperty('totalPrice', def);
        }
    }, {
        key: 'setCurrency',
        value: function setCurrency(currency) {
            return this.setProperty('currency', currency);
        }
    }, {
        key: 'getCurrency',
        value: function getCurrency(def) {
            return this.getProperty('currency', def);
        }
    }, {
        key: 'setAmountFix',
        value: function setAmountFix(amountFix) {
            return this.setProperty('amountFix', amountFix).removeProperty('amountPercent');
        }
    }, {
        key: 'getAmountFix',
        value: function getAmountFix(def) {
            return this.getProperty('amountFix', def);
        }
    }, {
        key: 'setAmountPercent',
        value: function setAmountPercent(amountPercent) {
            return this.setProperty('amountPercent', amountPercent).removeProperty('amountFix');
        }
    }, {
        key: 'getAmountPercent',
        value: function getAmountPercent(def) {
            return this.getProperty('amountPercent', def);
        }
    }, {
        key: 'toString',
        value: function toString() {
            var totalPrice = this.getTotalPrice();
            var currency = this.getCurrency();
            var amount = 0;

            if (this.getAmountFix(null)) amount = this.getAmountFix();
            if (this.getAmountPercent(null)) amount = this.getAmountPercent() + '%';

            return totalPrice + ';' + currency + ';' + amount;
        }
    }]);

    return ProductDiscount;
}(_BaseEntity3.default);

exports.default = ProductDiscount;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/ProductModule.js":
/*!***************************************!*\
  !*** ./src/entities/ProductModule.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
 * @constructor
 */
var ProductModule = function (_BaseEntity) {
    _inherits(ProductModule, _BaseEntity);

    function ProductModule(properties) {
        _classCallCheck(this, ProductModule);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (ProductModule.__proto__ || Object.getPrototypeOf(ProductModule)).call(this, {
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
                inUse: 'boolean'
            },
            // The attributes that should have read-only access.
            readOnly: ['inUse']
        }));

        _this.defines(['number', 'active', 'name', 'licensingModel', 'maxCheckoutValidity', 'yellowThreshold', 'redThreshold', 'licenseTemplate', 'inUse']);
        return _this;
    }

    _createClass(ProductModule, [{
        key: 'setNumber',
        value: function setNumber(number) {
            return this.setProperty('number', number);
        }
    }, {
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            return this.setProperty('active', active);
        }
    }, {
        key: 'getActive',
        value: function getActive(def) {
            return this.getProperty('active', def);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            return this.setProperty('name', name);
        }
    }, {
        key: 'getName',
        value: function getName(def) {
            return this.getProperty('name', def);
        }
    }, {
        key: 'setLicensingModel',
        value: function setLicensingModel(licensingModel) {
            return this.setProperty('licensingModel', licensingModel);
        }
    }, {
        key: 'getLicensingModel',
        value: function getLicensingModel(def) {
            return this.getProperty('licensingModel', def);
        }
    }, {
        key: 'setMaxCheckoutValidity',
        value: function setMaxCheckoutValidity(maxCheckoutValidity) {
            return this.setProperty('maxCheckoutValidity', maxCheckoutValidity);
        }
    }, {
        key: 'getMaxCheckoutValidity',
        value: function getMaxCheckoutValidity(def) {
            return this.getProperty('maxCheckoutValidity', def);
        }
    }, {
        key: 'setYellowThreshold',
        value: function setYellowThreshold(yellowThreshold) {
            return this.setProperty('yellowThreshold', yellowThreshold);
        }
    }, {
        key: 'getYellowThreshold',
        value: function getYellowThreshold(def) {
            return this.getProperty('yellowThreshold', def);
        }
    }, {
        key: 'setRedThreshold',
        value: function setRedThreshold(redThreshold) {
            return this.setProperty('redThreshold', redThreshold);
        }
    }, {
        key: 'getRedThreshold',
        value: function getRedThreshold(def) {
            return this.getProperty('redThreshold', def);
        }
    }, {
        key: 'setLicenseTemplate',
        value: function setLicenseTemplate(licenseTemplate) {
            return this.setProperty('licenseTemplate', licenseTemplate);
        }
    }, {
        key: 'getLicenseTemplate',
        value: function getLicenseTemplate(def) {
            return this.getProperty('licenseTemplate', def);
        }
    }, {
        key: 'getInUse',
        value: function getInUse(def) {
            return this.getProperty('inUse', def);
        }
    }]);

    return ProductModule;
}(_BaseEntity3.default);

exports.default = ProductModule;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/Token.js":
/*!*******************************!*\
  !*** ./src/entities/Token.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
var Token = function (_BaseEntity) {
    _inherits(Token, _BaseEntity);

    function Token(properties) {
        _classCallCheck(this, Token);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (Token.__proto__ || Object.getPrototypeOf(Token)).call(this, {
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
            },
            // The attributes that should have read-only access.
            readOnly: ['number', 'shopURL']
        }));

        _this.defines(['number', 'active', 'expirationTime', 'vendorNumber', 'tokenType', 'licenseeNumber', 'successURL', 'successURLTitle', 'cancelURL', 'cancelURLTitle', 'shopURL']);
        return _this;
    }

    _createClass(Token, [{
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setActive',
        value: function setActive(active) {
            return this.setProperty('active', active);
        }
    }, {
        key: 'getActive',
        value: function getActive(def) {
            return this.getProperty('active', def);
        }
    }, {
        key: 'setExpirationTime',
        value: function setExpirationTime(expirationTime) {
            return this.setProperty('expirationTime', expirationTime);
        }
    }, {
        key: 'getExpirationTime',
        value: function getExpirationTime(def) {
            return this.getProperty('expirationTime', def);
        }
    }, {
        key: 'setVendorNumber',
        value: function setVendorNumber(vendorNumber) {
            return this.setProperty('vendorNumber', vendorNumber);
        }
    }, {
        key: 'getVendorNumber',
        value: function getVendorNumber(def) {
            return this.getProperty('vendorNumber', def);
        }
    }, {
        key: 'setTokenType',
        value: function setTokenType(tokenType) {
            return this.setProperty('tokenType', tokenType);
        }
    }, {
        key: 'getTokenType',
        value: function getTokenType(def) {
            return this.getProperty('tokenType', def);
        }
    }, {
        key: 'setLicenseeNumber',
        value: function setLicenseeNumber(licenseeNumber) {
            return this.setProperty('licenseeNumber', licenseeNumber);
        }
    }, {
        key: 'getLicenseeNumber',
        value: function getLicenseeNumber(def) {
            return this.getProperty('licenseeNumber', def);
        }
    }, {
        key: 'setSuccessURL',
        value: function setSuccessURL(successURL) {
            return this.setProperty('successURL', successURL);
        }
    }, {
        key: 'getSuccessURL',
        value: function getSuccessURL(def) {
            return this.getProperty('successURL', def);
        }
    }, {
        key: 'setSuccessURLTitle',
        value: function setSuccessURLTitle(successURLTitle) {
            return this.setProperty('successURLTitle', successURLTitle);
        }
    }, {
        key: 'getSuccessURLTitle',
        value: function getSuccessURLTitle(def) {
            return this.getProperty('successURLTitle', def);
        }
    }, {
        key: 'setCancelURL',
        value: function setCancelURL(cancelURL) {
            return this.setProperty('cancelURL', cancelURL);
        }
    }, {
        key: 'getCancelURL',
        value: function getCancelURL(def) {
            return this.getProperty('cancelURL', def);
        }
    }, {
        key: 'setCancelURLTitle',
        value: function setCancelURLTitle(cancelURLTitle) {
            return this.setProperty('cancelURLTitle', cancelURLTitle);
        }
    }, {
        key: 'getCancelURLTitle',
        value: function getCancelURLTitle(def) {
            return this.getProperty('cancelURLTitle', def);
        }
    }, {
        key: 'getShopURL',
        value: function getShopURL(def) {
            return this.getProperty('shopURL', def);
        }
    }]);

    return Token;
}(_BaseEntity3.default);

exports.default = Token;
module.exports = exports['default'];

/***/ }),

/***/ "./src/entities/Transaction.js":
/*!*************************************!*\
  !*** ./src/entities/Transaction.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseEntity2 = __webpack_require__(/*! ./BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity3 = _interopRequireDefault(_BaseEntity2);

var _LicenseTransactionJoin = __webpack_require__(/*! ./LicenseTransactionJoin */ "./src/entities/LicenseTransactionJoin.js");

var _LicenseTransactionJoin2 = _interopRequireDefault(_LicenseTransactionJoin);

var _License = __webpack_require__(/*! ./License */ "./src/entities/License.js");

var _License2 = _interopRequireDefault(_License);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

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
var Transaction = function (_BaseEntity) {
    _inherits(Transaction, _BaseEntity);

    function Transaction(properties) {
        _classCallCheck(this, Transaction);

        // define default entity properties
        var _this = _possibleConstructorReturn(this, (Transaction.__proto__ || Object.getPrototypeOf(Transaction)).call(this, {
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
            },
            // The attributes that should have read-only access.
            readOnly: ['active']
        }));

        _this.defines(['number', 'name', 'status', 'source', 'grandTotal', 'discount', 'currency', 'dateCreated', 'dateClosed', 'paymentMethod', 'licenseTransactionJoins']);
        return _this;
    }

    _createClass(Transaction, [{
        key: 'setNumber',
        value: function setNumber(number) {
            return this.setProperty('number', number);
        }
    }, {
        key: 'getNumber',
        value: function getNumber(def) {
            return this.getProperty('number', def);
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            return this.setProperty('name', name);
        }
    }, {
        key: 'getName',
        value: function getName(def) {
            return this.getProperty('name', def);
        }
    }, {
        key: 'setStatus',
        value: function setStatus(status) {
            return this.setProperty('status', status);
        }
    }, {
        key: 'getStatus',
        value: function getStatus(def) {
            return this.getProperty('status', def);
        }
    }, {
        key: 'setSource',
        value: function setSource(source) {
            return this.setProperty('source', source);
        }
    }, {
        key: 'getSource',
        value: function getSource(def) {
            return this.getProperty('source', def);
        }
    }, {
        key: 'setGrandTotal',
        value: function setGrandTotal(grandTotal) {
            return this.setProperty('grandTotal', grandTotal);
        }
    }, {
        key: 'getGrandTotal',
        value: function getGrandTotal(def) {
            return this.getProperty('grandTotal', def);
        }
    }, {
        key: 'setDiscount',
        value: function setDiscount(discount) {
            return this.setProperty('discount', discount);
        }
    }, {
        key: 'getDiscount',
        value: function getDiscount(def) {
            return this.getProperty('discount', def);
        }
    }, {
        key: 'setCurrency',
        value: function setCurrency(currency) {
            return this.setProperty('currency', currency);
        }
    }, {
        key: 'getCurrency',
        value: function getCurrency(def) {
            return this.getProperty('currency', def);
        }
    }, {
        key: 'setDateCreated',
        value: function setDateCreated(dateCreated) {
            return this.setProperty('dateCreated', dateCreated);
        }
    }, {
        key: 'getDateCreated',
        value: function getDateCreated(def) {
            return this.getProperty('dateCreated', def);
        }
    }, {
        key: 'setDateClosed',
        value: function setDateClosed(dateClosed) {
            return this.setProperty('dateClosed', dateClosed);
        }
    }, {
        key: 'getDateClosed',
        value: function getDateClosed(def) {
            return this.getProperty('dateClosed', def);
        }
    }, {
        key: 'setPaymentMethod',
        value: function setPaymentMethod(paymentMethod) {
            return this.setProperty('paymentMethod', paymentMethod);
        }
    }, {
        key: 'getPaymentMethod',
        value: function getPaymentMethod(def) {
            return this.getProperty('paymentMethod', def);
        }
    }, {
        key: 'setActive',
        value: function setActive() {
            return this.setProperty('active', true);
        }
    }, {
        key: 'getLicenseTransactionJoins',
        value: function getLicenseTransactionJoins(def) {
            return this.getProperty('licenseTransactionJoins', def);
        }
    }, {
        key: 'setLicenseTransactionJoins',
        value: function setLicenseTransactionJoins(licenseTransactionJoins) {
            return this.setProperty('licenseTransactionJoins', licenseTransactionJoins);
        }
    }, {
        key: 'setListLicenseTransactionJoin',
        value: function setListLicenseTransactionJoin(properties) {
            if (!properties) return;

            var licenseTransactionJoins = this.getProperty('licenseTransactionJoins', []);
            var licenseTransactionJoin = new _LicenseTransactionJoin2.default();

            properties.forEach(function (property) {
                if (property.name === 'licenseNumber') {
                    licenseTransactionJoin.setLicense(new _License2.default({ number: property.value }));
                }

                if (property.name === 'transactionNumber') {
                    licenseTransactionJoin.setTransaction(new Transaction({ number: property.value }));
                }
            });

            licenseTransactionJoins.push(licenseTransactionJoin);
            this.setProperty('licenseTransactionJoins', licenseTransactionJoins);
        }
    }]);

    return Transaction;
}(_BaseEntity3.default);

exports.default = Transaction;
module.exports = exports['default'];

/***/ }),

/***/ "./src/netlicensing-client.js":
/*!************************************!*\
  !*** ./src/netlicensing-client.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Constants = __webpack_require__(/*! ./Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Context = __webpack_require__(/*! ./vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _Service = __webpack_require__(/*! ./services/Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _LicenseeService = __webpack_require__(/*! ./services/LicenseeService */ "./src/services/LicenseeService.js");

var _LicenseeService2 = _interopRequireDefault(_LicenseeService);

var _LicenseService = __webpack_require__(/*! ./services/LicenseService */ "./src/services/LicenseService.js");

var _LicenseService2 = _interopRequireDefault(_LicenseService);

var _LicenseTemplateService = __webpack_require__(/*! ./services/LicenseTemplateService */ "./src/services/LicenseTemplateService.js");

var _LicenseTemplateService2 = _interopRequireDefault(_LicenseTemplateService);

var _PaymentMethodService = __webpack_require__(/*! ./services/PaymentMethodService */ "./src/services/PaymentMethodService.js");

var _PaymentMethodService2 = _interopRequireDefault(_PaymentMethodService);

var _ProductModuleService = __webpack_require__(/*! ./services/ProductModuleService */ "./src/services/ProductModuleService.js");

var _ProductModuleService2 = _interopRequireDefault(_ProductModuleService);

var _ProductService = __webpack_require__(/*! ./services/ProductService */ "./src/services/ProductService.js");

var _ProductService2 = _interopRequireDefault(_ProductService);

var _TokenService = __webpack_require__(/*! ./services/TokenService */ "./src/services/TokenService.js");

var _TokenService2 = _interopRequireDefault(_TokenService);

var _TransactionService = __webpack_require__(/*! ./services/TransactionService */ "./src/services/TransactionService.js");

var _TransactionService2 = _interopRequireDefault(_TransactionService);

var _UtilityService = __webpack_require__(/*! ./services/UtilityService */ "./src/services/UtilityService.js");

var _UtilityService2 = _interopRequireDefault(_UtilityService);

var _Country = __webpack_require__(/*! ./entities/Country */ "./src/entities/Country.js");

var _Country2 = _interopRequireDefault(_Country);

var _License = __webpack_require__(/*! ./entities/License */ "./src/entities/License.js");

var _License2 = _interopRequireDefault(_License);

var _Licensee = __webpack_require__(/*! ./entities/Licensee */ "./src/entities/Licensee.js");

var _Licensee2 = _interopRequireDefault(_Licensee);

var _LicenseTemplate = __webpack_require__(/*! ./entities/LicenseTemplate */ "./src/entities/LicenseTemplate.js");

var _LicenseTemplate2 = _interopRequireDefault(_LicenseTemplate);

var _PaymentMethod = __webpack_require__(/*! ./entities/PaymentMethod */ "./src/entities/PaymentMethod.js");

var _PaymentMethod2 = _interopRequireDefault(_PaymentMethod);

var _Product = __webpack_require__(/*! ./entities/Product */ "./src/entities/Product.js");

var _Product2 = _interopRequireDefault(_Product);

var _ProductDiscount = __webpack_require__(/*! ./entities/ProductDiscount */ "./src/entities/ProductDiscount.js");

var _ProductDiscount2 = _interopRequireDefault(_ProductDiscount);

var _ProductModule = __webpack_require__(/*! ./entities/ProductModule */ "./src/entities/ProductModule.js");

var _ProductModule2 = _interopRequireDefault(_ProductModule);

var _Token = __webpack_require__(/*! ./entities/Token */ "./src/entities/Token.js");

var _Token2 = _interopRequireDefault(_Token);

var _Transaction = __webpack_require__(/*! ./entities/Transaction */ "./src/entities/Transaction.js");

var _Transaction2 = _interopRequireDefault(_Transaction);

var _LicenseTransactionJoin = __webpack_require__(/*! ./entities/LicenseTransactionJoin */ "./src/entities/LicenseTransactionJoin.js");

var _LicenseTransactionJoin2 = _interopRequireDefault(_LicenseTransactionJoin);

var _ValidationParameters = __webpack_require__(/*! ./vo/ValidationParameters */ "./src/vo/ValidationParameters.js");

var _ValidationParameters2 = _interopRequireDefault(_ValidationParameters);

var _ValidationResults = __webpack_require__(/*! ./vo/ValidationResults */ "./src/vo/ValidationResults.js");

var _ValidationResults2 = _interopRequireDefault(_ValidationResults);

var _CastsUtils = __webpack_require__(/*! ./util/CastsUtils */ "./src/util/CastsUtils.js");

var _CastsUtils2 = _interopRequireDefault(_CastsUtils);

var _CheckUtils = __webpack_require__(/*! ./util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _FilterUtils = __webpack_require__(/*! ./util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create the default instance to be exported


// Entities


// Services
// Constants
var NetLicensing = {
    // Constants
    Constants: _Constants2.default,

    // Expose VO
    Context: _Context2.default,
    ValidationParameters: _ValidationParameters2.default,
    ValidationResults: _ValidationResults2.default,

    // Expose Services
    Service: _Service2.default,
    LicenseeService: _LicenseeService2.default,
    LicenseService: _LicenseService2.default,
    LicenseTemplateService: _LicenseTemplateService2.default,
    PaymentMethodService: _PaymentMethodService2.default,
    ProductModuleService: _ProductModuleService2.default,
    ProductService: _ProductService2.default,
    TokenService: _TokenService2.default,
    TransactionService: _TransactionService2.default,
    UtilityService: _UtilityService2.default,

    // Expose Entities
    Country: _Country2.default,
    License: _License2.default,
    Licensee: _Licensee2.default,
    LicenseTemplate: _LicenseTemplate2.default,
    PaymentMethod: _PaymentMethod2.default,
    Product: _Product2.default,
    ProductDiscount: _ProductDiscount2.default,
    ProductModule: _ProductModule2.default,
    Token: _Token2.default,
    Transaction: _Transaction2.default,
    LicenseTransactionJoin: _LicenseTransactionJoin2.default,

    // Expose Utils
    CastsUtils: _CastsUtils2.default,
    CheckUtils: _CheckUtils2.default,
    FilterUtils: _FilterUtils2.default
};

// Utils

// VO


module.exports = NetLicensing;

// Allow use of default import syntax in TypeScript
module.exports.default = NetLicensing;

/***/ }),

/***/ "./src/services/LicenseService.js":
/*!****************************************!*\
  !*** ./src/services/LicenseService.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _License = __webpack_require__(/*! ../entities/License */ "./src/entities/License.js");

var _License2 = _interopRequireDefault(_License);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the License Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Services
 *
 * @constructor
 */

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Creates new license object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Createlicense
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(license instanceof _License2.default)) {
            throw new TypeError('license must be an instance of License');
        }

        _CheckUtils2.default.paramNotEmpty(licenseeNumber, 'licenseeNumber');
        _CheckUtils2.default.paramNotEmpty(licenseTemplateNumber, 'licenseTemplateNumber');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        license.setProperty('licenseeNumber', licenseeNumber);
        license.setProperty('licenseTemplateNumber', licenseTemplateNumber);

        if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

        return _Service2.default.post(context, _Constants2.default.License.ENDPOINT_PATH, license.asPropertiesMap(), _License2.default);
    },


    /**
     * Gets license by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Getlicense
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.get(context, _Constants2.default.License.ENDPOINT_PATH + '/' + number, {}, _License2.default);
    },


    /**
     * Returns licenses of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Licenseslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.License.ENDPOINT_PATH, queryParams, _License2.default);
    },


    /**
     * Updates license properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Updatelicense
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(license instanceof _License2.default)) {
            throw new TypeError('license must be an instance of License');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        if (transactionNumber) license.setProperty('transactionNumber', transactionNumber);

        return _Service2.default.post(context, _Constants2.default.License.ENDPOINT_PATH + '/' + number, license.asPropertiesMap(), _License2.default);
    },


    /**
     * Deletes license.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Services#LicenseServices-Deletelicense
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        var queryParams = { forceCascade: Boolean(forceCascade) };

        return _Service2.default.delete(context, _Constants2.default.License.ENDPOINT_PATH + '/' + number, queryParams);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/LicenseTemplateService.js":
/*!************************************************!*\
  !*** ./src/services/LicenseTemplateService.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _LicenseTemplate = __webpack_require__(/*! ../entities/LicenseTemplate */ "./src/entities/LicenseTemplate.js");

var _LicenseTemplate2 = _interopRequireDefault(_LicenseTemplate);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services
 *
 * @constructor
 */

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Creates new license template object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Createlicensetemplate
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licenseTemplate instanceof _LicenseTemplate2.default)) {
            throw new TypeError('licenseTemplate must be an instance of LicenseTemplate');
        }

        _CheckUtils2.default.paramNotEmpty(productModuleNumber, 'productModuleNumber');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        licenseTemplate.setProperty('productModuleNumber', productModuleNumber);

        return _Service2.default.post(context, _Constants2.default.LicenseTemplate.ENDPOINT_PATH, licenseTemplate.asPropertiesMap(), _LicenseTemplate2.default);
    },


    /**
     * Gets license template by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Getlicensetemplate
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.get(context, _Constants2.default.LicenseTemplate.ENDPOINT_PATH + '/' + number, {}, _LicenseTemplate2.default);
    },


    /**
     * Returns all license templates of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Licensetemplateslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.LicenseTemplate.ENDPOINT_PATH, queryParams, _LicenseTemplate2.default);
    },


    /**
     * Updates license template properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Updatelicensetemplate
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licenseTemplate instanceof _LicenseTemplate2.default)) {
            throw new TypeError('licenseTemplate must be an instance of LicenseTemplate');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var path = _Constants2.default.LicenseTemplate.ENDPOINT_PATH + '/' + number;

        return _Service2.default.post(context, path, licenseTemplate.asPropertiesMap(), _LicenseTemplate2.default);
    },


    /**
     * Deletes license template.See NetLicensingAPI JavaDoc for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/License+Template+Services#LicenseTemplateServices-Deletelicensetemplate
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        var queryParams = { forceCascade: Boolean(forceCascade) };

        return _Service2.default.delete(context, _Constants2.default.LicenseTemplate.ENDPOINT_PATH + '/' + number, queryParams);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/LicenseeService.js":
/*!*****************************************!*\
  !*** ./src/services/LicenseeService.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _Licensee = __webpack_require__(/*! ../entities/Licensee */ "./src/entities/Licensee.js");

var _Licensee2 = _interopRequireDefault(_Licensee);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _ValidationParameters = __webpack_require__(/*! ../vo/ValidationParameters */ "./src/vo/ValidationParameters.js");

var _ValidationParameters2 = _interopRequireDefault(_ValidationParameters);

var _ValidationResults = __webpack_require__(/*! ../vo/ValidationResults */ "./src/vo/ValidationResults.js");

var _ValidationResults2 = _interopRequireDefault(_ValidationResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the Licensee Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services
 *
 * @constructor
 */

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Creates new licensee object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Createlicensee
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licensee instanceof _Licensee2.default)) {
            throw new TypeError('licensee must be an instance of Licensee');
        }

        _CheckUtils2.default.paramNotEmpty(productNumber, 'productNumber');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        licensee.setProperty('productNumber', productNumber);

        return _Service2.default.post(context, _Constants2.default.Licensee.ENDPOINT_PATH, licensee.asPropertiesMap(), _Licensee2.default);
    },


    /**
     * Gets licensee by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Getlicensee
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        return _Service2.default.get(context, _Constants2.default.Licensee.ENDPOINT_PATH + '/' + number, {}, _Licensee2.default);
    },


    /**
     * Returns all licensees of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Licenseeslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.Licensee.ENDPOINT_PATH, queryParams, _Licensee2.default);
    },


    /**
     * Updates licensee properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Updatelicensee
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(licensee instanceof _Licensee2.default)) {
            throw new TypeError('licensee must be an instance of Licensee');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        return _Service2.default.post(context, _Constants2.default.Licensee.ENDPOINT_PATH + '/' + number, licensee.asPropertiesMap(), _Licensee2.default);
    },


    /**
     * Deletes licensee.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Deletelicensee
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        var queryParams = { forceCascade: Boolean(forceCascade) };

        return _Service2.default.delete(context, _Constants2.default.Licensee.ENDPOINT_PATH + '/' + number, queryParams);
    },


    /**
     * Validates active licenses of the licensee. See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Validatelicensee
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
     * @returns {Promise}
     */
    validate: function validate(context, number, validationParameters) {
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(validationParameters instanceof _ValidationParameters2.default)) {
            throw new TypeError('validationParameters must be an instance of ValidationParameters');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        var queryParams = {};

        if (validationParameters.getProductNumber()) {
            queryParams.productNumber = validationParameters.getProductNumber();
        }

        if (validationParameters.getLicenseeName()) {
            queryParams.licenseeName = validationParameters.getLicenseeName();
        }

        if (validationParameters.getLicenseeSecret()) {
            queryParams.licenseeSecret = validationParameters.getLicenseeSecret();
        }

        var pmIndex = 0;
        var parameters = validationParameters.getParameters();

        var has = Object.prototype.hasOwnProperty;

        Object.keys(parameters).forEach(function (productModuleName) {
            queryParams['productModuleNumber' + pmIndex] = productModuleName;
            if (!has.call(parameters, productModuleName)) return;

            var parameter = parameters[productModuleName];

            Object.keys(parameter).forEach(function (key) {
                if (has.call(parameter, key)) {
                    queryParams[key + pmIndex] = parameter[key];
                }
            });
            pmIndex += 1;
        });

        var path = _Constants2.default.Licensee.ENDPOINT_PATH + '/' + number + '/' + _Constants2.default.Licensee.ENDPOINT_PATH_VALIDATE;

        return _Service2.default.post(context, path, queryParams).then(function (item) {
            var data = {};
            var validationResults = new _ValidationResults2.default();

            item.property.forEach(function (property) {
                try {
                    data[property.name] = JSON.parse(property.value);
                } catch (e) {
                    data[property.name] = property.value;
                }
            });

            validationResults.setProductModuleValidation(data.productModuleNumber, data).setTtl(_Service2.default.getLastHttpRequestInfo().data.ttl);

            return validationResults;
        });
    },


    /**
     * Transfer licenses between licensees.
     * @see https://www.labs64.de/confluence/display/NLICPUB/Licensee+Services#LicenseeServices-Transferlicensee
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');
        _CheckUtils2.default.paramNotEmpty(sourceLicenseeNumber, 'sourceLicenseeNumber');

        var queryParams = { sourceLicenseeNumber: sourceLicenseeNumber };

        var path = _Constants2.default.Licensee.ENDPOINT_PATH + '/' + number + '/' + _Constants2.default.Licensee.ENDPOINT_PATH_TRANSFER;

        return _Service2.default.post(context, path, queryParams);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/PaymentMethodService.js":
/*!**********************************************!*\
  !*** ./src/services/PaymentMethodService.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _PaymentMethod = __webpack_require__(/*! ../entities/PaymentMethod */ "./src/entities/PaymentMethod.js");

var _PaymentMethod2 = _interopRequireDefault(_PaymentMethod);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Gets payment method by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Getpaymentmethod
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.get(context, _Constants2.default.PaymentMethod.ENDPOINT_PATH + '/' + number, {}, _PaymentMethod2.default);
    },


    /**
     * Returns payment methods of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Paymentmethodslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.PaymentMethod.ENDPOINT_PATH, queryParams, _PaymentMethod2.default);
    },


    /**
     * Updates payment method properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Payment+Method+Services#PaymentMethodServices-Updatepaymentmethod
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(paymentMethod instanceof _PaymentMethod2.default)) {
            throw new TypeError('paymentMethod must be an instance of PaymentMethod');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var path = _Constants2.default.PaymentMethod.ENDPOINT_PATH + '/' + number;

        return _Service2.default.post(context, path, paymentMethod.asPropertiesMap(), _PaymentMethod2.default);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/ProductModuleService.js":
/*!**********************************************!*\
  !*** ./src/services/ProductModuleService.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _ProductModule = __webpack_require__(/*! ../entities/ProductModule */ "./src/entities/ProductModule.js");

var _ProductModule2 = _interopRequireDefault(_ProductModule);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the ProductModule Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services
 *
 * @constructor
 */

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Creates new product module object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Createproductmodule
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(productModule instanceof _ProductModule2.default)) {
            throw new TypeError('product must be an instance of ProductModule');
        }

        _CheckUtils2.default.paramNotEmpty(productNumber, 'productNumber');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        productModule.setProperty('productNumber', productNumber);

        return _Service2.default.post(context, _Constants2.default.ProductModule.ENDPOINT_PATH, productModule.asPropertiesMap(), _ProductModule2.default);
    },


    /**
     * Gets product module by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Getproductmodule
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.get(context, _Constants2.default.ProductModule.ENDPOINT_PATH + '/' + number, {}, _ProductModule2.default);
    },


    /**
     * Returns products of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.ProductModule.ENDPOINT_PATH, queryParams, _ProductModule2.default);
    },


    /**
     * Updates product module properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Updateproductmodule
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(productModule instanceof _ProductModule2.default)) {
            throw new TypeError('product must be an instance of ProductModule');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var path = _Constants2.default.ProductModule.ENDPOINT_PATH + '/' + number;

        return _Service2.default.post(context, path, productModule.asPropertiesMap(), _ProductModule2.default);
    },


    /**
     * Deletes product module.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Module+Services#ProductModuleServices-Deleteproductmodule
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        var queryParams = { forceCascade: Boolean(forceCascade) };

        return _Service2.default.delete(context, _Constants2.default.ProductModule.ENDPOINT_PATH + '/' + number, queryParams);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/ProductService.js":
/*!****************************************!*\
  !*** ./src/services/ProductService.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _Product = __webpack_require__(/*! ../entities/Product */ "./src/entities/Product.js");

var _Product2 = _interopRequireDefault(_Product);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the Product Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services
 *
 * @constructor
 */

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Creates new product with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Createproduct
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(product instanceof _Product2.default)) {
            throw new TypeError('product must be an instance of Product');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.post(context, _Constants2.default.Product.ENDPOINT_PATH, product.asPropertiesMap(), _Product2.default);
    },


    /**
     * Gets product by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Getproduct
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.get(context, _Constants2.default.Product.ENDPOINT_PATH + '/' + number, {}, _Product2.default);
    },


    /**
     * Returns products of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Productslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.Product.ENDPOINT_PATH, queryParams, _Product2.default);
    },


    /**
     * Updates product properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Updateproduct
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(product instanceof _Product2.default)) {
            throw new TypeError('product must be an instance of Product');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.post(context, _Constants2.default.Product.ENDPOINT_PATH + '/' + number, product.asPropertiesMap(), _Product2.default);
    },


    /**
     * Deletes product.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Product+Services#ProductServices-Deleteproduct
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        var queryParams = { forceCascade: Boolean(forceCascade) };

        return _Service2.default.delete(context, _Constants2.default.Product.ENDPOINT_PATH + '/' + number, queryParams);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/Service.js":
/*!*********************************!*\
  !*** ./src/services/Service.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _BaseEntity = __webpack_require__(/*! ../entities/BaseEntity */ "./src/entities/BaseEntity.js");

var _BaseEntity2 = _interopRequireDefault(_BaseEntity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var httpXHR = {};

var Service = function () {
    function Service() {
        _classCallCheck(this, Service);
    }

    _createClass(Service, null, [{
        key: 'getLastHttpRequestInfo',
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
         * the type of the result
         * @param resultType
         *
         * @returns {Promise}
         */

    }, {
        key: 'get',
        value: function get(context, urlTemplate, queryParams, resultType) {
            return Service.request(context, 'get', urlTemplate, queryParams).then(function (response) {
                return response.data ? Service.getEntity(resultType, response.data.items.item[0]) : null;
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

    }, {
        key: 'list',
        value: function list(context, urlTemplate, queryParams, resultType) {
            return Service.request(context, 'get', urlTemplate, queryParams).then(function (response) {
                return response.data ? response.data.items.item.map(function (item) {
                    return Service.getEntity(resultType, item);
                }) : [];
            });
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

    }, {
        key: 'post',
        value: function post(context, urlTemplate, queryParams, resultType) {
            return Service.request(context, 'post', urlTemplate, queryParams).then(function (response) {
                return response.data ? Service.getEntity(resultType, response.data.items.item[0]) : null;
            });
        }

        /**
         *
         * @param context
         * @param urlTemplate
         * @param queryParams
         * @returns {Promise}
         */

    }, {
        key: 'delete',
        value: function _delete(context, urlTemplate, queryParams) {
            return Service.request(context, 'delete', urlTemplate, queryParams).then(function (response) {
                return response.status === 204;
            });
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
        key: 'request',
        value: function request(context, method, urlTemplate, queryParams) {
            if (!(context instanceof _Context2.default)) throw new TypeError('context must be an instance of NetLicensing.Context');

            var template = String(urlTemplate);
            var params = queryParams || {};

            if (!template) throw new TypeError('Url template must be specified');

            // validate http method
            if (['get', 'post', 'delete'].indexOf(method.toLowerCase()) < 0) {
                throw new Error('Invalid request type:' + method + ', allowed requests types: GET, POST, DELETE.');
            }

            // validate context
            if (!context.getBaseUrl(null)) {
                throw new Error('Base url must be specified');
            }

            if (!Service.isValidUrl(String(context.getBaseUrl()))) {
                throw new Error('Base url "' + context.getBaseUrl() + '" is not a valid URL');
            }

            var restUrl = context.getBaseUrl() + '/' + urlTemplate;

            restUrl = restUrl.replace(/([^:]\/)\/+/g, '$1');

            // validate baseUrl +  urlTemplate
            if (!Service.isValidUrl(String(restUrl))) {
                throw new Error('Rest url "' + restUrl + '" is not a valid URL');
            }

            var request = {
                url: restUrl,
                method: method.toLowerCase(),
                responseType: 'json',
                headers: {},
                transformRequest: [function (data, headers) {
                    if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
                        return Service.toQueryString(data);
                    }
                    return data;
                }]
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
                case _Constants2.default.BASIC_AUTHENTICATION:
                    if (!context.getUsername()) throw new Error('Missing parameter "username"');
                    if (!context.getPassword()) throw new Error('Missing parameter "password"');

                    request.auth = {
                        username: context.getUsername(),
                        password: context.getPassword()
                    };
                    break;
                // ApiKey Auth
                case _Constants2.default.APIKEY_IDENTIFICATION:
                    if (!context.getApiKey()) throw new Error('Missing parameter "apiKey"');

                    request.headers.Authorization = 'Basic ' + btoa('apiKey:' + context.getApiKey());
                    break;
                default:
                    throw new Error('Unknown security mode');
            }

            return (0, _axios2.default)(request).then(function (response) {
                httpXHR = response;
                return response;
            }).catch(function (error) {
                httpXHR = error;

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    var info = error.response.data.infos.info[0] || null;

                    if (info && info.id === 'NotFoundException') {
                        return Promise.resolve(null);
                    }

                    var reasonPhrase = info.value || 'Unknown';
                    throw new Error('Unsupported response status code ' + error.response.status + ': ' + reasonPhrase);
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

    }, {
        key: 'getEntity',
        value: function getEntity(resultType, item) {
            var properties = item.property || null;
            var lists = item.list || null;

            if (!resultType) return item;

            // eslint-disable-next-line new-cap
            var entity = new resultType();

            if (!(entity instanceof _BaseEntity2.default)) {
                throw new Error('Invalid entity ' + resultType + ', entity must be instanceof BaseEntity');
            }

            properties.forEach(function (_ref) {
                var name = _ref.name,
                    value = _ref.value;

                entity.setProperty(name, value);
            });

            if (lists) {
                lists.forEach(function (_ref2) {
                    var name = _ref2.name,
                        property = _ref2.property;

                    var setListMethod = 'setList' + name.charAt(0).toUpperCase() + name.substr(1, name.length - 1);
                    var setListsMethod = 'setLists';

                    if (typeof entity[setListMethod] !== 'function' && typeof entity[setListsMethod] !== 'function') {
                        // eslint-disable-next-line no-console
                        console.warn('Methods: ' + setListMethod + ',' + setListsMethod + ' not found in ' + item.type + ' \n                    for list property ' + name);
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
    }, {
        key: 'isValidUrl',
        value: function isValidUrl(url) {
            var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

            return pattern.test(url);
        }
    }, {
        key: 'toQueryString',
        value: function toQueryString(data, prefix) {
            var query = [];

            var has = Object.prototype.hasOwnProperty;

            Object.keys(data).forEach(function (key) {
                if (has.call(data, key)) {
                    var k = prefix ? prefix + '[' + key + ']' : key;
                    var v = data[key];
                    v = v instanceof Date ? v.toISOString() : v;
                    query.push(v !== null && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? Service.toQueryString(v, k) : encodeURIComponent(k) + '=' + encodeURIComponent(v));
                }
            });

            return query.join('&').replace(/%5B[0-9]+%5D=/g, '=');
        }
    }]);

    return Service;
}();

exports.default = Service;
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/TokenService.js":
/*!**************************************!*\
  !*** ./src/services/TokenService.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _Token = __webpack_require__(/*! ../entities/Token */ "./src/entities/Token.js");

var _Token2 = _interopRequireDefault(_Token);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the Token Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services
 *
 * @constructor
 */

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Creates new token.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Createtoken
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(token instanceof _Token2.default)) {
            throw new TypeError('token must be an instance of Token');
        }

        return _Service2.default.post(context, _Constants2.default.Token.ENDPOINT_PATH, token.asPropertiesMap(), _Token2.default);
    },


    /**
     * Gets token by its number..See NetLicensingAPI for details:
     * @see https://www.labs64.de/conluence/display/NetLicensing PUB/Token+Services#TokenServices-Gettoken
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of NetLicensing.Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        return _Service2.default.get(context, _Constants2.default.Token.ENDPOINT_PATH + '/' + number, {}, _Token2.default);
    },


    /**
     * Returns tokens of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Tokenslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.Token.ENDPOINT_PATH, queryParams, _Token2.default);
    },


    /**
     * Delete token by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Token+Services#TokenServices-Deletetoken
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of NetLicensing.Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        return _Service2.default.delete(context, _Constants2.default.Token.ENDPOINT_PATH + '/' + number);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/TransactionService.js":
/*!********************************************!*\
  !*** ./src/services/TransactionService.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _Transaction = __webpack_require__(/*! ../entities/Transaction */ "./src/entities/Transaction.js");

var _Transaction2 = _interopRequireDefault(_Transaction);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the Transaction Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services
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

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Creates new transaction object with given properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Createtransaction
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        if (!(transaction instanceof _Transaction2.default)) {
            throw new TypeError('transaction must be an instance of Transaction');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.post(context, _Constants2.default.Transaction.ENDPOINT_PATH, transaction.asPropertiesMap(), _Transaction2.default);
    },


    /**
     * Gets transaction by its number.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Gettransaction
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.get(context, _Constants2.default.Transaction.ENDPOINT_PATH + '/' + number, {}, _Transaction2.default);
    },


    /**
     * Returns all transactions of a vendor.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Transactionslist
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.Transaction.ENDPOINT_PATH, queryParams, _Transaction2.default);
    },


    /**
     * Updates transaction properties.See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Transaction+Services#TransactionServices-Updatetransaction
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of NetLicensing.Context');
        }

        if (!(transaction instanceof _Transaction2.default)) {
            throw new TypeError('transaction must be an instance of NetLicensing.Transaction');
        }

        _CheckUtils2.default.paramNotEmpty(number, 'number');

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var path = _Constants2.default.Transaction.ENDPOINT_PATH + '/' + number;

        return _Service2.default.post(context, path, transaction.asPropertiesMap(), _Transaction2.default);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/services/UtilityService.js":
/*!****************************************!*\
  !*** ./src/services/UtilityService.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Context = __webpack_require__(/*! ../vo/Context */ "./src/vo/Context.js");

var _Context2 = _interopRequireDefault(_Context);

var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _Service = __webpack_require__(/*! ./Service */ "./src/services/Service.js");

var _Service2 = _interopRequireDefault(_Service);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

var _Country = __webpack_require__(/*! ../entities/Country */ "./src/entities/Country.js");

var _Country2 = _interopRequireDefault(_Country);

var _FilterUtils = __webpack_require__(/*! ../util/FilterUtils */ "./src/util/FilterUtils.js");

var _FilterUtils2 = _interopRequireDefault(_FilterUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * JS representation of the Utility Service. See NetLicensingAPI for details:
 * https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services
 * @constructor
 */

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    /**
     * Returns all license types. See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicenseTypeslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * array of available license types or empty array if nothing found in promise.
     * @returns {Promise}
     */
    listLicenseTypes: function listLicenseTypes(context) {
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.list(context, _Constants2.default.Utility.ENDPOINT_PATH + '/licenseTypes').then(function (items) {
            return items.map(function (item) {
                return item.property[0].value;
            });
        });
    },


    /**
     * Returns all license models. See NetLicensingAPI for details:
     * @see https://www.labs64.de/confluence/display/NetLicensing PUB/Utility+Services#UtilityServices-LicensingModelslist
     *
     * determines the vendor on whose behalf the call is performed
     * @param context NetLicensing.Context
     *
     * array of available license models or empty array if nothing found in promise.
     * @returns {Promise}
     */
    listLicensingModels: function listLicensingModels(context) {
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        return _Service2.default.list(context, _Constants2.default.Utility.ENDPOINT_PATH + '/licensingModels').then(function (items) {
            return items.map(function (item) {
                return item.property[0].value;
            });
        });
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
        if (!(context instanceof _Context2.default)) {
            throw new TypeError('context must be an instance of Context');
        }

        context.setSecurityMode(_Constants2.default.BASIC_AUTHENTICATION);

        var queryParams = {};

        if (filter) {
            if (!_CheckUtils2.default.isValid(filter)) {
                throw new TypeError('filter has bad value ' + filter);
            }
            queryParams.filter = typeof filter === 'string' ? filter : _FilterUtils2.default.encode(filter);
        }

        return _Service2.default.list(context, _Constants2.default.Utility.ENDPOINT_PATH + '/countries', queryParams, _Country2.default);
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/util/CastsUtils.js":
/*!********************************!*\
  !*** ./src/util/CastsUtils.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

// Cast an attribute to a native JS type.
exports.default = function (key, value) {
    switch (key.trim().toLowerCase()) {
        case 'str':
        case 'string':
            return String(value);
        case 'int':
        case 'integer':
            return parseInt(value, 10);
        case 'float':
        case 'double':
            return parseFloat(value);
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

module.exports = exports['default'];

/***/ }),

/***/ "./src/util/CheckUtils.js":
/*!********************************!*\
  !*** ./src/util/CheckUtils.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

exports.default = {
    isValid: function isValid(value) {
        var valid = value !== undefined && typeof value !== 'function';
        if (typeof value === 'number') valid = Number.isFinite(value) && !Number.isNaN(value);
        return valid;
    },
    paramNotNull: function paramNotNull(parameter, parameterName) {
        if (!this.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
        if (parameter === null) throw new TypeError('Parameter ' + parameterName + ' cannot be null');
    },
    paramNotEmpty: function paramNotEmpty(parameter, parameterName) {
        if (!this.isValid(parameter)) throw new TypeError('Parameter ' + parameterName + ' has bad value ' + parameter);
        if (!parameter) throw new TypeError('Parameter ' + parameterName + ' cannot be null or empty string');
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/util/FilterUtils.js":
/*!*********************************!*\
  !*** ./src/util/FilterUtils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = {
    FILTER_DELIMITER: ';',
    FILTER_PAIR_DELIMITER: '=',
    encode: function encode() {
        var _this = this;

        var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var query = [];
        var has = Object.prototype.hasOwnProperty;
        Object.keys(filter).forEach(function (key) {
            if (has.call(filter, key)) {
                query.push('' + encodeURIComponent(key) + _this.FILTER_PAIR_DELIMITER + encodeURIComponent(filter[key]));
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
                _v$split2 = _slicedToArray(_v$split, 2),
                name = _v$split2[0],
                value = _v$split2[1];

            filter[name] = value;
        });
        return filter;
    }
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/vo/Context.js":
/*!***************************!*\
  !*** ./src/vo/Context.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Constants = __webpack_require__(/*! ../Constants */ "./src/Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Context = function () {
    function Context(values) {
        _classCallCheck(this, Context);

        defaultsMap.set(this, {
            baseUrl: 'https://go.netlicensing.io/core/v2/rest',
            securityMode: _Constants2.default.BASIC_AUTHENTICATION
        });

        valuesMap.set(this, {});

        definedMap.set(this, {});

        this.setValues(Object.assign({}, defaultsMap.get(this), values));
    }

    _createClass(Context, [{
        key: 'setBaseUrl',
        value: function setBaseUrl(baseUrl) {
            return this.setValue('baseUrl', baseUrl);
        }
    }, {
        key: 'getBaseUrl',
        value: function getBaseUrl(def) {
            return this.getValue('baseUrl', def);
        }
    }, {
        key: 'setUsername',
        value: function setUsername(username) {
            return this.setValue('username', username);
        }
    }, {
        key: 'getUsername',
        value: function getUsername(def) {
            return this.getValue('username', def);
        }
    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            return this.setValue('password', password);
        }
    }, {
        key: 'getPassword',
        value: function getPassword(def) {
            return this.getValue('password', def);
        }
    }, {
        key: 'setApiKey',
        value: function setApiKey(apiKey) {
            return this.setValue('apiKey', apiKey);
        }
    }, {
        key: 'getApiKey',
        value: function getApiKey(def) {
            return this.getValue('apiKey', def);
        }
    }, {
        key: 'setSecurityMode',
        value: function setSecurityMode(securityMode) {
            return this.setValue('securityMode', securityMode);
        }
    }, {
        key: 'getSecurityMode',
        value: function getSecurityMode(def) {
            return this.getValue('securityMode', def);
        }
    }, {
        key: 'setVendorNumber',
        value: function setVendorNumber(vendorNumber) {
            return this.setValue('vendorNumber', vendorNumber);
        }
    }, {
        key: 'getVendorNumber',
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
        key: 'setValue',
        value: function setValue(key, value) {
            // check values
            if (!_CheckUtils2.default.isValid(key) || (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') throw new Error('Bad value key:' + key);
            if (!_CheckUtils2.default.isValid(value)) throw new Error('Value ' + key + ' has wrong value' + value);

            // define keys
            this.define(key);

            var copedValue = value;

            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                copedValue = Array.isArray(value) ? Object.assign([], value) : Object.assign({}, value);
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
        key: 'setValues',
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
        key: 'getValue',
        value: function getValue(key, def) {
            return valuesMap.get(this)[key] || def;
        }

        /**
         * Get all of the current value on the context.
         */

    }, {
        key: 'getValues',
        value: function getValues() {
            return Object.assign({}, valuesMap.get(this));
        }

        /**
         * Remove value
         * @param key
         * @returns {Context}
         */

    }, {
        key: 'removeValue',
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
        key: 'removeValues',
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
        key: 'define',
        value: function define(key, onlyGetter) {
            if (this.hasDefine(key)) return;

            if (!_CheckUtils2.default.isValid(key) || (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object') {
                throw new TypeError('Bad value name:' + key);
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
        key: 'hasDefine',
        value: function hasDefine(key) {
            return Boolean(definedMap.get(this)[key]);
        }

        /**
         * Remove value getter and setter
         * @param key
         * @private
         */

    }, {
        key: 'removeDefine',
        value: function removeDefine(key) {
            if (!this.hasDefine(key)) return;

            var defined = definedMap.get(this);
            delete defined[key];

            delete this[key];
        }
    }]);

    return Context;
}();

exports.default = Context;
module.exports = exports['default'];

/***/ }),

/***/ "./src/vo/ValidationParameters.js":
/*!****************************************!*\
  !*** ./src/vo/ValidationParameters.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author    Labs64 <netlicensing@labs64.com>
 * @license   Apache-2.0
 * @link      http://netlicensing.io
 * @copyright 2017 Labs64 NetLicensing
 */

/**
 * Validation parameters map
 *
 * @type {WeakMap<Object, any>}
 */
var vpMap = new WeakMap();

var ValidationParameters = function () {
    function ValidationParameters() {
        _classCallCheck(this, ValidationParameters);

        vpMap.set(this, { parameters: {} });
    }

    /**
     * Sets the target product
     *
     * optional productNumber, must be provided in case licensee auto-create is enabled
     * @param productNumber
     * @returns {ValidationParameters}
     */


    _createClass(ValidationParameters, [{
        key: "setProductNumber",
        value: function setProductNumber(productNumber) {
            vpMap.get(this).productNumber = productNumber;
            return this;
        }

        /**
         * Get the target product
         * @returns {*}
         */

    }, {
        key: "getProductNumber",
        value: function getProductNumber() {
            return vpMap.get(this).productNumber;
        }

        /**
         * Sets the name for the new licensee
         *
         * optional human-readable licensee name in case licensee will be auto-created. This parameter must not
         * be the name, but can be used to store any other useful string information with new licensees, up to
         * 1000 characters.
         * @param licenseeName
         * @returns {NetLicensing.ValidationParameters}
         */

    }, {
        key: "setLicenseeName",
        value: function setLicenseeName(licenseeName) {
            vpMap.get(this).licenseeName = licenseeName;
            return this;
        }

        /**
         * Get the licensee name
         * @returns {*}
         */

    }, {
        key: "getLicenseeName",
        value: function getLicenseeName() {
            return vpMap.get(this).licenseeName;
        }

        /**
         * Sets the licensee secret
         *
         * licensee secret stored on the client side. Refer to Licensee Secret documentation for details.
         * @param licenseeSecret
         * @returns {ValidationParameters}
         */

    }, {
        key: "setLicenseeSecret",
        value: function setLicenseeSecret(licenseeSecret) {
            vpMap.get(this).licenseeSecret = licenseeSecret;
            return this;
        }

        /**
         * Get the licensee secret
         * @returns {*}
         */

    }, {
        key: "getLicenseeSecret",
        value: function getLicenseeSecret() {
            return vpMap.get(this).licenseeSecret;
        }

        /**
         * Get validation parameters
         * @returns {*}
         */

    }, {
        key: "getParameters",
        value: function getParameters() {
            return Object.assign({}, vpMap.get(this).parameters);
        }
    }, {
        key: "getProductModuleValidationParameters",
        value: function getProductModuleValidationParameters(productModuleNumber) {
            return Object.assign({}, vpMap.get(this).parameters[productModuleNumber]);
        }
    }, {
        key: "setProductModuleValidationParameters",
        value: function setProductModuleValidationParameters(productModuleNumber, productModuleParameters) {
            var _vpMap$get = vpMap.get(this),
                parameters = _vpMap$get.parameters;

            if (parameters[productModuleNumber] === undefined || !Object.keys(parameters[productModuleNumber]).length) {
                parameters[productModuleNumber] = {};
            }

            parameters[productModuleNumber] = Object.assign(parameters[productModuleNumber], productModuleParameters);

            return this;
        }
    }]);

    return ValidationParameters;
}();

exports.default = ValidationParameters;
module.exports = exports["default"];

/***/ }),

/***/ "./src/vo/ValidationResults.js":
/*!*************************************!*\
  !*** ./src/vo/ValidationResults.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author    Labs64 <netlicensing@labs64.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license   Apache-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @link      http://netlicensing.io
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright 2017 Labs64 NetLicensing
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CheckUtils = __webpack_require__(/*! ../util/CheckUtils */ "./src/util/CheckUtils.js");

var _CheckUtils2 = _interopRequireDefault(_CheckUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Validation result map
 * @type {WeakMap<Object, any>}
 */
var vr = new WeakMap();

var ValidationResults = function () {
    function ValidationResults() {
        _classCallCheck(this, ValidationResults);

        vr.set(this, { validators: {} });
    }

    _createClass(ValidationResults, [{
        key: 'getValidators',
        value: function getValidators() {
            return Object.assign({}, vr.get(this).validators);
        }
    }, {
        key: 'setProductModuleValidation',
        value: function setProductModuleValidation(productModuleNumber, productModuleValidation) {
            if (!_CheckUtils2.default.isValid(productModuleNumber) || (typeof productModuleNumber === 'undefined' ? 'undefined' : _typeof(productModuleNumber)) === 'object') {
                throw new TypeError('Bad productModuleNumber:' + productModuleNumber);
            }

            vr.get(this).validators[productModuleNumber] = productModuleValidation;

            return this;
        }
    }, {
        key: 'getProductModuleValidation',
        value: function getProductModuleValidation(productModuleNumber) {
            if (!_CheckUtils2.default.isValid(productModuleNumber) || (typeof productModuleNumber === 'undefined' ? 'undefined' : _typeof(productModuleNumber)) === 'object') {
                throw new TypeError('Bad productModuleNumber:' + productModuleNumber);
            }

            return vr.get(this).validators[productModuleNumber];
        }
    }, {
        key: 'setTtl',
        value: function setTtl(ttl) {
            if (!_CheckUtils2.default.isValid(ttl) || (typeof ttl === 'undefined' ? 'undefined' : _typeof(ttl)) === 'object') {
                throw new TypeError('Bad ttl:' + ttl);
            }
            vr.get(this).ttl = new Date(String(ttl));

            return this;
        }
    }, {
        key: 'getTtl',
        value: function getTtl() {
            return vr.get(this).ttl ? new Date(vr.get(this).ttl) : undefined;
        }
    }, {
        key: 'toString',
        value: function toString() {
            var data = 'ValidationResult [';

            var validators = this.getValidators();
            var has = Object.prototype.hasOwnProperty;

            Object.keys(validators).forEach(function (productModuleNumber) {
                data += 'ProductModule<' + productModuleNumber + '>';
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

exports.default = ValidationResults;
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=netlicensing-client.js.map
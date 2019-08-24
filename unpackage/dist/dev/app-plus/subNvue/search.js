"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  const s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function formatLog (...args) {
  const msgs = args.map((v) => {
    const type = Object.prototype.toString.call(v)
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        const vType = typof(v).toUpperCase()
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }
    return v
  })
  let msg = ''
  if (msgs.length > 1) {
    const lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }
  return msg
}


/***/ }),
/* 7 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!*************************************************************!*\
  !*** E:/知行科技/bishanApp/main.js?{"page":"subNvue%2Fsearch"} ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subNvue/search.nvue?mpType=page */ 12);


_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'subNvue/search'
_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'

new Vue(_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 12 */
/*!*********************************************************!*\
  !*** E:/知行科技/bishanApp/subNvue/search.nvue?mpType=page ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_nvue_vue_type_template_id_4e7cea2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.nvue?vue&type=template&id=4e7cea2a&scoped=true&mpType=page */ 13);
/* harmony import */ var _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.nvue?vue&type=script&lang=js&mpType=page */ 15);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 10);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&id=4e7cea2a&scoped=true&lang=css&mpType=page */ 19).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&id=4e7cea2a&scoped=true&lang=css&mpType=page */ 19).default)
          }

}

/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_nvue_vue_type_template_id_4e7cea2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_nvue_vue_type_template_id_4e7cea2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "4e7cea2a",
  "a1b92e6c"
  
)

component.options.__file = "E:/知行科技/bishanApp/subNvue/search.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/*!***************************************************************************************************!*\
  !*** E:/知行科技/bishanApp/subNvue/search.nvue?vue&type=template&id=4e7cea2a&scoped=true&mpType=page ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_template_id_4e7cea2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./search.nvue?vue&type=template&id=4e7cea2a&scoped=true&mpType=page */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_template_id_4e7cea2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_template_id_4e7cea2a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 14 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!E:/知行科技/bishanApp/subNvue/search.nvue?vue&type=template&id=4e7cea2a&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["search"] },
    [
      _c("div", { staticClass: ["header"] }, [
        _c("div", { staticClass: ["header_left"] }, [
          _c("input", {
            staticClass: ["inp_content"],
            attrs: {
              type: "text",
              value: "",
              returnKeyType: "search",
              autofocus: _vm.isFocus
            },
            on: { return: _vm.search }
          }),
          _c("image", {
            staticClass: ["icon_search"],
            staticStyle: { width: "27px", height: "28px" },
            attrs: { src: "../static/images/icon_search.png", mode: "" }
          })
        ]),
        _c(
          "text",
          {
            staticStyle: { color: "#fff" },
            on: {
              click: function($event) {
                return _vm.close()
              }
            }
          },
          [_vm._v("取消")]
        )
      ]),
      _c(
        "scroll-view",
        { staticClass: ["search_content"], attrs: { scrollY: "true" } },
        _vm._l(_vm.searchs, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: ["search_list"],
              on: {
                click: function($event) {
                  return _vm.onPollution(item)
                }
              }
            },
            [
              _c("view", { staticClass: ["search_list_left"] }, [
                _c("view", {}, [
                  _c("text", { staticClass: ["search_list_left_text"] }, [
                    _vm._v("名称:" + _vm._s(item.wryName))
                  ])
                ]),
                _c("view", {}, [
                  _c("text", { staticClass: ["search_list_left_text"] }, [
                    _vm._v("地址:" + _vm._s(item.wryAddress))
                  ])
                ])
              ]),
              _c("view", { staticClass: ["search_list_right"] }, [
                _c("text", [_vm._v(_vm._s(item.distance) + "Km")])
              ])
            ]
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!*********************************************************************************!*\
  !*** E:/知行科技/bishanApp/subNvue/search.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./search.nvue?vue&type=script&lang=js&mpType=page */ 16);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!E:/知行科技/bishanApp/subNvue/search.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















var _interface = _interopRequireDefault(__webpack_require__(/*! ../static/js/interface.js */ 17));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../static/js/utils.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { isFocus: false, searchs: [], requestTask: {}, distance: [] };}, mounted: function mounted() {var _this = this;uni.$on("checkFocus", function (bool) {_this.isFocus = bool;});}, methods: { close: function close() {uni.$emit("closeSearch");uni.$emit("checkFocus", false);}, onPollution: function onPollution(pollution) {
      this.close();
      uni.$emit("onPollution", pollution);
    },
    getDistance: function getDistance(pollution, index) {var _this2 = this;
      var userLocation = uni.getStorageSync("userLocation");
      var point1 = new plus.maps.Point(userLocation.longitude, userLocation.latitude);
      var point2 = new plus.maps.Point(pollution.wryLongitude, pollution.wryLatitude);
      plus.maps.Map.calculateDistance(point1, point2, function (results) {
        var searchs = _this2.searchs;
        searchs[index].distance = (results.distance / 1000).toFixed(2);
        _this2.searchs = searchs;
        _this2.$set(_this2.searchs);
      });

    },
    search: function search(e) {var _this3 = this;
      if (this.requestTask.abort) {
        this.requestTask.abort();
      }
      var token = uni.getStorageSync("token") || "";
      this.requestTask = uni.request({
        url: _interface.default.POLLUTION_SEARCH,
        data: { name: e.value },
        method: "GET",
        header: { token: token },
        complete: function complete(res) {
          if (!!res.data && res.data.code == 1) {
            _this3.searchs = res.data.data;
            var i = 0;
            while (i < _this3.searchs.length) {
              _this3.getDistance(_this3.searchs[i], i);
              i++;
            }
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 7)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 7)["weexPlus"]))

/***/ }),
/* 17 */
/*!************************************************!*\
  !*** E:/知行科技/bishanApp/static/js/interface.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) { // const url0="http://192.168.1.7:8082"
// const url0="http://192.168.1.4"
// const url0="http://192.168.1.5"
// const url0="http://192.168.0.188"
// const url0="http://192.168.1.15"
var url0 = uni.getStorageSync("url") ? uni.getStorageSync("url") : "http://122.114.177.198";
var url = url0 + ":8082";
var url_PC = url0 + ":8081/app";

//常链接 
var WEBSOCKET = "ws://192.168.1.4:8082/websocket/";

// 登录
var LOGIN_LOGIN = url + "/login/login";
var TASK_INDEX = url + "/task/index"; //获取首页任务情况
var TASK_INDEX2 = url + "/task/index2"; //获取首页任务情况

var TASK_PROCESS = url + "/task/process"; //正在进行中的任务，不传uid 则显示所有人
var TASK_FINISH = url + "/task/finish"; //已完成的任务，不传uid 则显示所有人
var TASK_NO_START = url + "/task/noStart"; //还未开始的任务，不传uid 则显示所有人
var PROBLEM_LIST = url + "/problem/list"; //问题列表 page 为必需 第一页为0 当uid为空的时候将会查询所有问题 反之则查询当前用户提交的问题
var UPLOAD_UPLOAD = url + "/upload/upload"; //上传图片
var DEPARTMENT_GET_DEPT = url + "/department/getDept"; //获取乡镇列表
var TASK_PATROL_POINT_CONTACTLIST = url + "/task/patrol/point/contactList"; //获取联系人信息
var TASK_PATROL_POINT_FINISH_LIST = url + "/task/patrol/point/finishList"; //获取点位进行中的信息
var TASK_PATROL_POINT_GET_ALL_PROBLEM = url + "/task/patrol/point/getAllProblem"; //获取所有污染源问题类型
var TASK_PATROL_POINT_GET_PROBLEM = url + "/task/patrol/point/getProblem"; //获取污染源问题类型
var TASK_PATROL_POINT_PROBLEM_ADD_BATCH = url + "/task/patrol/point/problem/addBatch"; //批量新增问题
var TASK_PATROL_POINT_PROBLEM_LIST = url + "/task/patrol/point/problem/list"; //通过点位信息 获取问题信息
var TASK_PATROL_POINT_PROBLEM_LIST2 = url + "/task/patrol/point/problem/list2"; //通过任务信息 获取问题信息
var TASK_PATROL_POINT_UPDATE = url + "/task/patrol/point/update"; //更新巡查点位状信息
var TASK_PATROL_POINT_NORMAL = url + "/task/patrol/point/normal"; //更改巡查点位状态状态
var TASK_PATROL_POINT_PROCESS_LIST = url + "/task/patrol/point/processList"; //更改巡查点位状态状态
var TASK_PATROL_POINT_UPDATE_WRY_ADDRESS_DETAILED = url + "/task/patrol/point/updateWryAddressDetailed"; //污染源重新定位 id=污染源ID ，wryType等于污染源类型，地址信息 和经纬度
var TASK_PATROL_PATH_ADD = url + "/task/patrol/path/add"; //添加路径点信息
var TASK_PATROL_PATH_ADD_BATCH = url + "/task/patrol/path/addBatch"; //添加路径点信息


// const TASK_PATROL_UPDATE_STATUS=url+"/task/patrol/updateStatus"//更改巡查任务状态
var TASK_RECTIFICATION_UPDATE_STATUS = url + "/task/rectification/updateStatus"; //更改整个任务状态
var TASK_RECTIFICATION_UPDATE = url + "/task/rectification/update"; //修改整改任务内容，图片等

var TASK_PATROL_UPDATE_STATUS = url + "/task/patrol/updateStatus"; //更改巡查任务状态
var USER_UPDATE = url + "/user/update"; //通过点位信息 获取问题信息



var POLLUTION_SEARCH = url + "/pollution/search"; //搜索污染源


//PC接口

var DAPINGSHUIZHI_SHUIZHITONGJI_KHLX = url_PC + "/dapingshuizhi/shuizhitongji_khlx"; //详情
var QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI = url_PC + "/quKongShuiZhiTongJi/heLiuShuiZhiTongJi"; //详情

//PC排行榜接口
var ASSESS_TOWN_LIST = url_PC + "/assess/townList"; //镇街排行
var ASSESS_DEPARTMENT_LIST = url_PC + "/assess/departmentList"; //部门排行
//污染源接口

var WRY_BZ_LIST = url_PC + "/wry/bz/list"; //泵站
var WRY_COMPANY_LIST = url_PC + "/wry/company/list"; //工业企业
var WRY_RHKPWK_LIST = url_PC + "/wry/rhkpwk/list"; //入河排污口
var WRY_RHKPWD_LIST = url_PC + "/wry/rhkpwd/list"; //入河排污点
var WRY_JZGD_LIST = url_PC + "/wry/jzgd/list"; //建筑工地
var WRY_QTHY_LIST = url_PC + "/wry/qthy/list"; //其它行业
var WRY_JCDW_LIST = url_PC + "/wry/jcdw/list"; //检测点位
var WRY_YLJG_LIST = url_PC + "/wry/yljg/list"; //医疗机构
var WRY_XQYZ_LIST = url_PC + "/wry/xqyz/list"; //畜禽养殖
var WRY_TZC_LIST = url_PC + "/wry/tzc/list"; //屠宰场
var WRY_SHUIKU_LIST = url_PC + "/wry/shuiku/list"; //水库
var WRY_SPT_LIST = url_PC + "/wry/spt/list"; //山坪塘
var WRY_YYC_LIST = url_PC + "/wry/yyc/list"; //养鱼池
var WRY_JMJZJZD_LIST = url_PC + "/wry/jmjzjzd/list"; //居民集中居住点
var WRY_XSLW_LIST = url_PC + "/wry/xslw/list"; //小散乱污企业
var WRY_XCC_LIST = url_PC + "/wry/xcc/list"; //洗车场
var WRY_CYHY_LIST = url_PC + "/wry/cyhy/list"; //餐饮行业
var WRY_NMSC_LIST = url_PC + "/wry/nmsc/list"; //农贸市场
var WRY_WSCLC_LIST = url_PC + "/wry/wsclc/list"; //污水处理厂
var WRY_ZZYFLDJD_LIST = url_PC + "/wry/zzyfldjd/list"; //种植业肥料堆积点
var WRY_SMYSYZDH_LIST = url_PC + "/wry/smysyzdh/list"; //10亩以上种植大户

module.exports = {
  url: url,
  WEBSOCKET: WEBSOCKET,
  LOGIN_LOGIN: LOGIN_LOGIN,
  TASK_INDEX: TASK_INDEX,
  TASK_INDEX2: TASK_INDEX2,
  TASK_PROCESS: TASK_PROCESS,
  TASK_FINISH: TASK_FINISH,
  TASK_NO_START: TASK_NO_START,
  PROBLEM_LIST: PROBLEM_LIST,
  UPLOAD_UPLOAD: UPLOAD_UPLOAD,
  DEPARTMENT_GET_DEPT: DEPARTMENT_GET_DEPT,
  TASK_PATROL_POINT_CONTACTLIST: TASK_PATROL_POINT_CONTACTLIST,
  TASK_PATROL_POINT_FINISH_LIST: TASK_PATROL_POINT_FINISH_LIST,
  TASK_PATROL_POINT_GET_ALL_PROBLEM: TASK_PATROL_POINT_GET_ALL_PROBLEM,
  TASK_PATROL_POINT_GET_PROBLEM: TASK_PATROL_POINT_GET_PROBLEM,
  TASK_PATROL_POINT_PROBLEM_ADD_BATCH: TASK_PATROL_POINT_PROBLEM_ADD_BATCH,
  TASK_PATROL_POINT_PROBLEM_LIST: TASK_PATROL_POINT_PROBLEM_LIST,
  TASK_PATROL_POINT_PROBLEM_LIST2: TASK_PATROL_POINT_PROBLEM_LIST2,
  USER_UPDATE: USER_UPDATE,
  TASK_RECTIFICATION_UPDATE_STATUS: TASK_RECTIFICATION_UPDATE_STATUS,
  TASK_RECTIFICATION_UPDATE: TASK_RECTIFICATION_UPDATE,
  TASK_PATROL_UPDATE_STATUS: TASK_PATROL_UPDATE_STATUS,
  TASK_PATROL_POINT_UPDATE: TASK_PATROL_POINT_UPDATE,
  TASK_PATROL_POINT_NORMAL: TASK_PATROL_POINT_NORMAL,
  TASK_PATROL_POINT_PROCESS_LIST: TASK_PATROL_POINT_PROCESS_LIST,
  TASK_PATROL_POINT_UPDATE_WRY_ADDRESS_DETAILED: TASK_PATROL_POINT_UPDATE_WRY_ADDRESS_DETAILED,
  TASK_PATROL_PATH_ADD: TASK_PATROL_PATH_ADD,
  TASK_PATROL_PATH_ADD_BATCH: TASK_PATROL_PATH_ADD_BATCH,
  DAPINGSHUIZHI_SHUIZHITONGJI_KHLX: DAPINGSHUIZHI_SHUIZHITONGJI_KHLX,
  QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI: QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI,
  WRY_BZ_LIST: WRY_BZ_LIST,
  WRY_COMPANY_LIST: WRY_COMPANY_LIST,
  WRY_RHKPWK_LIST: WRY_RHKPWK_LIST,
  WRY_RHKPWD_LIST: WRY_RHKPWD_LIST,
  WRY_JZGD_LIST: WRY_JZGD_LIST,
  WRY_QTHY_LIST: WRY_QTHY_LIST,
  WRY_JCDW_LIST: WRY_JCDW_LIST,
  WRY_YLJG_LIST: WRY_YLJG_LIST,
  WRY_XQYZ_LIST: WRY_XQYZ_LIST,
  WRY_TZC_LIST: WRY_TZC_LIST,
  WRY_SHUIKU_LIST: WRY_SHUIKU_LIST,
  WRY_SPT_LIST: WRY_SPT_LIST,
  WRY_YYC_LIST: WRY_YYC_LIST,
  WRY_JMJZJZD_LIST: WRY_JMJZJZD_LIST,
  WRY_XSLW_LIST: WRY_XSLW_LIST,
  WRY_XCC_LIST: WRY_XCC_LIST,
  WRY_CYHY_LIST: WRY_CYHY_LIST,
  WRY_NMSC_LIST: WRY_NMSC_LIST,
  WRY_WSCLC_LIST: WRY_WSCLC_LIST,
  WRY_ZZYFLDJD_LIST: WRY_ZZYFLDJD_LIST,
  WRY_SMYSYZDH_LIST: WRY_SMYSYZDH_LIST,
  ASSESS_TOWN_LIST: ASSESS_TOWN_LIST,
  ASSESS_DEPARTMENT_LIST: ASSESS_DEPARTMENT_LIST,
  POLLUTION_SEARCH: POLLUTION_SEARCH };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 7)["default"]))

/***/ }),
/* 18 */
/*!********************************************!*\
  !*** E:/知行科技/bishanApp/static/js/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__) {var _interface = _interopRequireDefault(__webpack_require__(/*! ./interface.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var timer_getLoction = null;
var timer_upLoction = {};
var upLoctionData = {};
var subNvue = {};
var arrWry = [
"WRY_BZ_LIST",
"WRY_COMPANY_LIST",
"WRY_RHKPWK_LIST",
"WRY_RHKPWD_LIST",
"WRY_JZGD_LIST",
"WRY_QTHY_LIST",
"WRY_JCDW_LIST",
"WRY_YLJG_LIST",
"WRY_XQYZ_LIST",
"WRY_TZC_LIST",
"WRY_SHUIKU_LIST",
"WRY_SPT_LIST",
"WRY_YYC_LIST",
"WRY_JMJZJZD_LIST",
"WRY_XSLW_LIST",
"WRY_XCC_LIST",
"WRY_CYHY_LIST",
"WRY_NMSC_LIST",
"WRY_WSCLC_LIST",
"WRY_ZZYFLDJD_LIST",
"WRY_SMYSYZDH_LIST"];

function getRequest(url, data, call, error) {
  uni.showLoading({ mask: true });
  var token = uni.getStorageSync("token") || "";
  uni.request({
    url: url, //仅为示例，并非真实接口地址。
    data: data,
    method: "GET",
    header: {
      token: token },

    complete: function complete(res) {
      uni.hideLoading();
      if (!res.data) {
        typeof error == "function" ? error() : "";
      } else if (res.data.code == 1) {
        typeof call == "function" ? call(res.data) : "";
      } else {
        console.log(__f__(res.data, " at static\\js\\utils.js:46"));
        uni.showToast({
          icon: "none",
          title: res.data.msg || "数据异常" });

      }
    } });

}

function getRequestPc(url, data, call, error) {
  var token = uni.getStorageSync("token") || "";
  uni.request({
    url: url,
    data: data,
    method: "GET",
    header: {
      token: token },

    complete: function complete(res) {
      if (!res.data) {
        typeof error == "function" ? error() : "";
      } else {
        typeof call == "function" ? call(res.data) : "";
      }
    } });

}

function getRequestNo(url, data, call, error) {
  var token = uni.getStorageSync("token") || "";
  uni.request({
    url: url,
    data: data,
    method: "GET",
    header: {
      token: token },

    complete: function complete(res) {
      if (!res.data) {
        typeof error == "function" ? error() : "";
      } else if (res.data.code == 1) {
        typeof call == "function" ? call(res.data) : "";
      } else {
        typeof error == "function" ? error(res.data) : "";
      }
    } });

}

function postRequestNo(url, data, call, error) {
  var token = uni.getStorageSync("token") || "";
  uni.request({
    url: url, //仅为示例，并非真实接口地址。
    data: data,
    method: "POST",
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      token: token },

    success: function success(res) {
      // if(res.data.code==1){
      typeof call == "function" ? call(res.data) : "";
      // }else{
      // typeof error=="function"?error(res.data):""
      // }
    } });

}


function postRequest(url, data, call, error) {
  uni.showLoading({ mask: true });
  var token = uni.getStorageSync("token") || "";
  uni.request({
    url: url, //仅为示例，并非真实接口地址。
    data: data,
    method: "POST",
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      token: token },

    complete: function complete(res) {
      uni.hideLoading();
      if (!res.data) {
        typeof error == "function" ? error() : "";
      } else if (res.data.code == 1) {
        typeof call == "function" ? call(res.data) : "";
      } else {
        uni.showToast({
          icon: "none",
          title: res.data.msg || "数据异常" });

      }
    } });

}


function completeTask(data) {//完成巡查污染源任务
  upImgTeams(data.pointPhoto, function (results, index) {
    data.pointPhoto = results;
    console.log(__f__(data, " at static\\js\\utils.js:148"));
    toCompleteTask(_interface.default.TASK_PATROL_POINT_UPDATE, data);
  }, 1, function (results) {
    completeTask(data);
  });
}
function rectificationTaskDetail(data) {//完成整改任务
  upImgTeams(data.rectificationPhoto, function (results, index) {
    data.rectificationPhoto = results;
    toCompleteTask(_interface.default.TASK_RECTIFICATION_UPDATE, data);
  });
}
function upProblemTeams(data) {//上传多个问题
  var problemTeams = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i].problemPhoto) {
      problemTeams++;
      upImgTeams(data[i].problemPhoto, function (results, index) {
        problemTeams--;
        data[index].problemPhoto = results;
        if (problemTeams == 0) {
          data = JSON.stringify(data);
          toUpProblem(_interface.default.TASK_PATROL_POINT_PROBLEM_ADD_BATCH, data);
        }
      }, i, function (results) {
        upProblemTeams(data);
      });
    }
  }
}
function toCompleteTask(url, data) {//上传问题或者完成点位巡查
  getRequestNo(url, data, function (results) {
    console.log(__f__("上传成功", " at static\\js\\utils.js:180"));
  }, function (results) {
    toCompleteTask(data);
  });
}
function toUpProblem(url, data) {//上传问题或者完成点位巡查
  getRequestNo(url, { data: data }, function (results) {
    console.log(__f__("上传成功", " at static\\js\\utils.js:187"));
  }, function (results) {
    toUpProblem(data);
  });
}



function upImgTeams(imgs, call, index, error) {//上传多张图片
  var imgs = imgs.split(";");
  var picture = [];
  var imgTeams = 0;
  for (var i = 0; i < imgs.length; i++) {
    imgTeams++;
    uploadFile(_interface.default.UPLOAD_UPLOAD, imgs[i], function (results) {
      // console.log(results)
      results = JSON.parse(results);
      picture.push(results.data);
      imgTeams--;
      if (imgTeams == 0) {
        picture = picture.join(";");
        call(picture, index);
      }
    }, function (results) {
      error(results);
    });
  }
}

function uploadFile(url, data, call, error) {//上传图片
  var token = uni.getStorageSync("token") || "";
  uni.uploadFile({
    url: url, //仅为示例，并非真实接口地址。
    fileType: "image",
    filePath: data,
    name: "file",
    header: {
      token: token },

    success: function success(res) {
      if (res.data != "000000") {
        typeof call == "function" ? call(res.data) : "";
      } else {
        typeof error == "function" ? error(data) : "";
      }
    },
    fail: function fail() {
      typeof error == "function" ? error(data) : "";
    } });

}
function showSuccess(msg, call) {
  uni.showToast({
    icon: "success",
    title: msg });

  typeof call == "function" ? setTimeout(call, 1500) : "";
}
var isRefreshTasksPage = true;

var isRefreshPollutionPage = true;

var webSocket = function webSocket(id) {
  uni.connectSocket({
    url: _interface.default.WEBSOCKET + id,
    header: {
      'content-type': 'application/json' },

    method: 'GET' });

};
uni.onSocketOpen(function (res) {
  console.log(__f__('WebSocket连接已打开！', " at static\\js\\utils.js:259"));
});

var getLocation = function getLocation() {
  timer_getLoction = setInterval(function () {
    uni.getLocation({
      type: "wgs84",
      success: function success(res) {
        uni.setStorageSync("userLocation", { longitude: res.longitude, latitude: res.latitude });
      },
      fail: function fail(res) {
        console.log(__f__(res, " at static\\js\\utils.js:270"));
        clearInterval(timer_getLoction);
        uni.showModal({
          title: "获取定位权限失败",
          content: "请打开手机定位权限",
          showCancel: false,
          success: function success(res) {
            console.log(__f__(res.confirm, " at static\\js\\utils.js:277"));
            uni.setStorageSync("userLocation", { longitude: 0, latitude: 0 });
            getLocation();
          },
          fail: function fail(res) {
            console.log(__f__(res, " at static\\js\\utils.js:282"));
          } });

      } });

  }, 1000);
};

var unUpLoction = function unUpLoction(id) {
  if (!!timer_upLoction[id]) {
    clearInterval(timer_upLoction[id]);
  }
};
var unGetLocation = function unGetLocation() {
  clearInterval(timer_getLoction);
};
var upLoction = function upLoction(id) {
  timer_upLoction[id] = setInterval(function () {var _this = this;
    var userLocation = uni.getStorageSync("userLocation");
    var data = {
      patrolTaskId: id,
      longitude: userLocation.longitude,
      latitude: userLocation.latitude };

    var upData = upLoctionData[id] ? upLoctionData[id] : [];
    var date = new Date();
    upData.push({
      patrolTaskId: id,
      longitude: userLocation.longitude,
      latitude: userLocation.latitude,
      locationTime: date.getTime() });

    upLoctionData[id] = upData;
    postRequestNo(_interface.default.TASK_PATROL_PATH_ADD_BATCH, { data: JSON.stringify(upData), id: id }, function (results) {
      if (results.code == 2) {
        unUpLoction(id);
        var onTask = uni.getStorageSync("onTask") ? uni.getStorageSync("onTask") : [];
        onTask.splice(onTask.indexOf(_this.taskId));
        uni.setStorageSync("onTask", onTask);
      }
      upLoctionData[id] = [];
    });
  }, 6000);
};

function getWryMap() {
  for (var i = 0; i < arrWry.length; i++) {
    (function (url) {
      getRequestPc(_interface.default[url], "", function (results) {
        uni.setStorageSync(url, results);
      });
    })(arrWry[i]);
  }
}



module.exports = {
  getRequest: getRequest,
  getRequestNo: getRequestNo,
  getRequestPc: getRequestPc,
  postRequest: postRequest,
  postRequestNo: postRequestNo,
  uploadFile: uploadFile,
  showSuccess: showSuccess,
  isRefreshTasksPage: isRefreshTasksPage,
  isRefreshPollutionPage: isRefreshPollutionPage,
  webSocket: webSocket,
  upLoction: upLoction,
  unGetLocation: unGetLocation,
  unUpLoction: unUpLoction,
  getLocation: getLocation,
  upProblemTeams: upProblemTeams,
  completeTask: completeTask,
  rectificationTaskDetail: rectificationTaskDetail,
  subNvue: subNvue,
  getWryMap: getWryMap };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 7)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 6)["default"]))

/***/ }),
/* 19 */
/*!*****************************************************************************************************************!*\
  !*** E:/知行科技/bishanApp/subNvue/search.nvue?vue&type=style&index=0&id=4e7cea2a&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_4e7cea2a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!./search.nvue?vue&type=style&index=0&id=4e7cea2a&scoped=true&lang=css&mpType=page */ 20);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_4e7cea2a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_4e7cea2a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_4e7cea2a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_4e7cea2a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_4e7cea2a_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!E:/知行科技/bishanApp/subNvue/search.nvue?vue&type=style&index=0&id=4e7cea2a&scoped=true&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "position": "relative",
    "paddingTop": "50",
    "backgroundColor": "#007AFF",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "header_left": {
    "position": "relative",
    "width": "600",
    "alignItems": "center",
    "marginRight": "10"
  },
  "inp_content": {
    "borderRadius": "5",
    "height": "60",
    "marginTop": "10",
    "marginRight": "0",
    "marginBottom": "10",
    "marginLeft": "0",
    "backgroundColor": "#ffffff",
    "width": "600",
    "paddingLeft": "20"
  },
  "icon_search": {
    "position": "absolute",
    "top": "26",
    "right": "10"
  },
  "search_list": {
    "paddingTop": 20,
    "paddingRight": 20,
    "paddingBottom": 20,
    "paddingLeft": 20,
    "lineHeight": 40,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginBottom": 1,
    "backgroundColor": "#f1f1f1"
  },
  "search_list_left_text": {
    "width": 500
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUtdjgvZGlzdC9pbmRleC5qcz85OTJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vRTov55+l6KGM56eR5oqAL2Jpc2hhbkFwcC9tYWluLmpzPzgwOGQiLCJ3ZWJwYWNrOi8vL0U6L+efpeihjOenkeaKgC9iaXNoYW5BcHAvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT8yYWE2Iiwid2VicGFjazovLy9FOi/nn6XooYznp5HmioAvYmlzaGFuQXBwL3N1Yk52dWUvc2VhcmNoLm52dWU/NGQzNiIsIndlYnBhY2s6Ly8vRTov55+l6KGM56eR5oqAL2Jpc2hhbkFwcC9zdWJOdnVlL3NlYXJjaC5udnVlPzk0MzYiLCJ3ZWJwYWNrOi8vL0U6L+efpeihjOenkeaKgC9iaXNoYW5BcHAvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT9mN2FhIiwidW5pLWFwcDovLy9zdWJOdnVlL3NlYXJjaC5udnVlIiwidW5pLWFwcDovLy9zdGF0aWMvanMvaW50ZXJmYWNlLmpzIiwidW5pLWFwcDovLy9zdGF0aWMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL0U6L+efpeihjOenkeaKgC9iaXNoYW5BcHAvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT80ZTE5Iiwid2VicGFjazovLy9FOi/nn6XooYznp5HmioAvYmlzaGFuQXBwL3N1Yk52dWUvc2VhcmNoLm52dWU/M2UwNSJdLCJuYW1lcyI6WyJ1cmwwIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJ1cmwiLCJ1cmxfUEMiLCJXRUJTT0NLRVQiLCJMT0dJTl9MT0dJTiIsIlRBU0tfSU5ERVgiLCJUQVNLX0lOREVYMiIsIlRBU0tfUFJPQ0VTUyIsIlRBU0tfRklOSVNIIiwiVEFTS19OT19TVEFSVCIsIlBST0JMRU1fTElTVCIsIlVQTE9BRF9VUExPQUQiLCJERVBBUlRNRU5UX0dFVF9ERVBUIiwiVEFTS19QQVRST0xfUE9JTlRfQ09OVEFDVExJU1QiLCJUQVNLX1BBVFJPTF9QT0lOVF9GSU5JU0hfTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX0dFVF9BTExfUFJPQkxFTSIsIlRBU0tfUEFUUk9MX1BPSU5UX0dFVF9QUk9CTEVNIiwiVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9BRERfQkFUQ0giLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1QiLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1QyIiwiVEFTS19QQVRST0xfUE9JTlRfVVBEQVRFIiwiVEFTS19QQVRST0xfUE9JTlRfTk9STUFMIiwiVEFTS19QQVRST0xfUE9JTlRfUFJPQ0VTU19MSVNUIiwiVEFTS19QQVRST0xfUE9JTlRfVVBEQVRFX1dSWV9BRERSRVNTX0RFVEFJTEVEIiwiVEFTS19QQVRST0xfUEFUSF9BREQiLCJUQVNLX1BBVFJPTF9QQVRIX0FERF9CQVRDSCIsIlRBU0tfUkVDVElGSUNBVElPTl9VUERBVEVfU1RBVFVTIiwiVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURSIsIlRBU0tfUEFUUk9MX1VQREFURV9TVEFUVVMiLCJVU0VSX1VQREFURSIsIlBPTExVVElPTl9TRUFSQ0giLCJEQVBJTkdTSFVJWkhJX1NIVUlaSElUT05HSklfS0hMWCIsIlFVS09OR1NIVUlaSElUT05HSklfSEVMSVVTSFVJWkhJVE9OR0pJIiwiQVNTRVNTX1RPV05fTElTVCIsIkFTU0VTU19ERVBBUlRNRU5UX0xJU1QiLCJXUllfQlpfTElTVCIsIldSWV9DT01QQU5ZX0xJU1QiLCJXUllfUkhLUFdLX0xJU1QiLCJXUllfUkhLUFdEX0xJU1QiLCJXUllfSlpHRF9MSVNUIiwiV1JZX1FUSFlfTElTVCIsIldSWV9KQ0RXX0xJU1QiLCJXUllfWUxKR19MSVNUIiwiV1JZX1hRWVpfTElTVCIsIldSWV9UWkNfTElTVCIsIldSWV9TSFVJS1VfTElTVCIsIldSWV9TUFRfTElTVCIsIldSWV9ZWUNfTElTVCIsIldSWV9KTUpaSlpEX0xJU1QiLCJXUllfWFNMV19MSVNUIiwiV1JZX1hDQ19MSVNUIiwiV1JZX0NZSFlfTElTVCIsIldSWV9OTVNDX0xJU1QiLCJXUllfV1NDTENfTElTVCIsIldSWV9aWllGTERKRF9MSVNUIiwiV1JZX1NNWVNZWkRIX0xJU1QiLCJtb2R1bGUiLCJleHBvcnRzIiwidGltZXJfZ2V0TG9jdGlvbiIsInRpbWVyX3VwTG9jdGlvbiIsInVwTG9jdGlvbkRhdGEiLCJzdWJOdnVlIiwiYXJyV3J5IiwiZ2V0UmVxdWVzdCIsImRhdGEiLCJjYWxsIiwiZXJyb3IiLCJzaG93TG9hZGluZyIsIm1hc2siLCJ0b2tlbiIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJjb21wbGV0ZSIsInJlcyIsImhpZGVMb2FkaW5nIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJtc2ciLCJnZXRSZXF1ZXN0UGMiLCJnZXRSZXF1ZXN0Tm8iLCJwb3N0UmVxdWVzdE5vIiwic3VjY2VzcyIsInBvc3RSZXF1ZXN0IiwiY29tcGxldGVUYXNrIiwidXBJbWdUZWFtcyIsInBvaW50UGhvdG8iLCJyZXN1bHRzIiwiaW5kZXgiLCJ0b0NvbXBsZXRlVGFzayIsIlVSTCIsInJlY3RpZmljYXRpb25UYXNrRGV0YWlsIiwicmVjdGlmaWNhdGlvblBob3RvIiwidXBQcm9ibGVtVGVhbXMiLCJwcm9ibGVtVGVhbXMiLCJpIiwibGVuZ3RoIiwicHJvYmxlbVBob3RvIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvVXBQcm9ibGVtIiwiaW1ncyIsInNwbGl0IiwicGljdHVyZSIsImltZ1RlYW1zIiwidXBsb2FkRmlsZSIsInBhcnNlIiwicHVzaCIsImpvaW4iLCJmaWxlVHlwZSIsImZpbGVQYXRoIiwibmFtZSIsImZhaWwiLCJzaG93U3VjY2VzcyIsInNldFRpbWVvdXQiLCJpc1JlZnJlc2hUYXNrc1BhZ2UiLCJpc1JlZnJlc2hQb2xsdXRpb25QYWdlIiwid2ViU29ja2V0IiwiaWQiLCJjb25uZWN0U29ja2V0Iiwib25Tb2NrZXRPcGVuIiwiZ2V0TG9jYXRpb24iLCJzZXRJbnRlcnZhbCIsInR5cGUiLCJzZXRTdG9yYWdlU3luYyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiY2xlYXJJbnRlcnZhbCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsInVuVXBMb2N0aW9uIiwidW5HZXRMb2NhdGlvbiIsInVwTG9jdGlvbiIsInVzZXJMb2NhdGlvbiIsInBhdHJvbFRhc2tJZCIsInVwRGF0YSIsImRhdGUiLCJEYXRlIiwibG9jYXRpb25UaW1lIiwiZ2V0VGltZSIsIm9uVGFzayIsInNwbGljZSIsImluZGV4T2YiLCJ0YXNrSWQiLCJnZXRXcnlNYXAiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhFQUE4RSxlQUFlO0FBQzdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDZSwwR0FBMkMsRUFBQztBQUd6RDs7Ozs7Ozs7Ozs7Ozs7QUM1d0JGO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFaQSxZQUZjO0FBR2RELGNBQVksRUFBWkEsWUFIYztBQUlkSSxhQUFXLEVBQVhBLFdBSmM7QUFLZEYsZUFBYSxFQUFiQSxhQUxjO0FBTWR3QixZQUFVLEVBQVZBLFVBTmM7QUFPZFEsYUFBVyxFQUFYQSxXQVBjO0FBUWRFLG9CQUFrQixFQUFsQkEsa0JBUmM7QUFTZEMsd0JBQXNCLEVBQXRCQSxzQkFUYztBQVVkQyxXQUFTLEVBQVRBLFNBVmM7QUFXZGlCLFdBQVMsRUFBVEEsU0FYYztBQVlkRCxlQUFhLEVBQWJBLGFBWmM7QUFhZEQsYUFBVyxFQUFYQSxXQWJjO0FBY2RYLGFBQVcsRUFBWEEsV0FkYztBQWVkNUIsZ0JBQWMsRUFBZEEsY0FmYztBQWdCZFQsY0FBWSxFQUFaQSxZQWhCYztBQWlCZE8seUJBQXVCLEVBQXZCQSx1QkFqQmM7QUFrQmRsQyxTQUFPLEVBQVBBLE9BbEJjO0FBbUJkeUYsV0FBUyxFQUFUQSxTQW5CYyxFQUFmLEM7Ozs7Ozs7Ozs7OztBQ2xWQTtBQUFBO0FBQUE7QUFBQTtBQUF3c0IsQ0FBZ0IsOHRCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E1dEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdWJOdnVlL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKC4uLmFyZ3MpIHtcclxuICBjb25zdCBtc2dzID0gYXJncy5tYXAoKHYpID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xyXG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHYgPSBTdHJpbmcodilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICBsZXQgbXNnID0gJydcclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBsYXN0TXNnID0gbXNncy5wb3AoKVxyXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG4gIHJldHVybiBtc2dcclxufVxuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIlxuaW1wb3J0IEFwcCBmcm9tICcuL3N1Yk52dWUvc2VhcmNoLm52dWU/bXBUeXBlPXBhZ2UnXG5BcHAubXBUeXBlID0gJ3BhZ2UnXG5BcHAucm91dGUgPSAnc3ViTnZ1ZS9zZWFyY2gnXG5BcHAuZWwgPSAnI3Jvb3QnXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTdjZWEyYSZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGU3Y2VhMmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGU3Y2VhMmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiNGU3Y2VhMmFcIixcbiAgXCJhMWI5MmU2Y1wiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6L+efpeihjOenkeaKgC9iaXNoYW5BcHAvc3ViTnZ1ZS9zZWFyY2gubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlN2NlYTJhJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoXCJdIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyXCJdIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyX2xlZnRcIl0gfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImlucF9jb250ZW50XCJdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICBhdXRvZm9jdXM6IF92bS5pc0ZvY3VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgcmV0dXJuOiBfdm0uc2VhcmNoIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uX3NlYXJjaFwiXSxcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjI3cHhcIiwgaGVpZ2h0OiBcIjI4cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi4uL3N0YXRpYy9pbWFnZXMvaWNvbl9zZWFyY2gucG5nXCIsIG1vZGU6IFwiXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJzY3JvbGwtdmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hfY29udGVudFwiXSwgYXR0cnM6IHsgc2Nyb2xsWTogXCJ0cnVlXCIgfSB9LFxuICAgICAgICBfdm0uX2woX3ZtLnNlYXJjaHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hfbGlzdFwiXSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uUG9sbHV0aW9uKGl0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoX2xpc3RfbGVmdFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHt9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoX2xpc3RfbGVmdF90ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5ZCN56ewOlwiICsgX3ZtLl9zKGl0ZW0ud3J5TmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaF9saXN0X2xlZnRfdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWcsOWdgDpcIiArIF92bS5fcyhpdGVtLndyeUFkZHJlc3MpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaF9saXN0X3JpZ2h0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5kaXN0YW5jZSkgKyBcIkttXCIpXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cInNlYXJjaFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGVyX2xlZnRcIj5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIEByZXR1cm49XCJzZWFyY2hcIiByZXR1cm4ta2V5LXR5cGU9XCJzZWFyY2hcIiA6YXV0b2ZvY3VzPVwiaXNGb2N1c1wiIGNsYXNzPVwiaW5wX2NvbnRlbnRcIi8+XHJcblx0XHRcdFx0PGltYWdlIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvaWNvbl9zZWFyY2gucG5nXCJjbGFzcz1cImljb25fc2VhcmNoXCIgc3R5bGU9XCJ3aWR0aDogMjdweDtoZWlnaHQ6IDI4cHg7XCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiIEBjbGljaz1cImNsb3NlKClcIj7lj5bmtog8L3RleHQ+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cInNlYXJjaF9jb250ZW50XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX2xpc3RcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBzZWFyY2hzXCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwib25Qb2xsdXRpb24oaXRlbSlcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9saXN0X2xlZnRcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+PHRleHQgY2xhc3M9XCJzZWFyY2hfbGlzdF9sZWZ0X3RleHRcIj7lkI3np7A6e3tpdGVtLndyeU5hbWV9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiPjx0ZXh0IGNsYXNzPVwic2VhcmNoX2xpc3RfbGVmdF90ZXh0XCI+5Zyw5Z2AOnt7aXRlbS53cnlBZGRyZXNzfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNlYXJjaF9saXN0X3JpZ2h0XCI+PHRleHQ+e3tpdGVtLmRpc3RhbmNlfX1LbTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBVUkwgZnJvbSBcIi4uL3N0YXRpYy9qcy9pbnRlcmZhY2UuanNcIlxyXG5cdGltcG9ydCB1dGlsIGZyb20gXCIuLi9zdGF0aWMvanMvdXRpbHMuanNcIlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNGb2N1czpmYWxzZSxcclxuXHRcdFx0XHRzZWFyY2hzOltdLFxyXG5cdFx0XHRcdHJlcXVlc3RUYXNrOnt9LFxyXG5cdFx0XHRcdGRpc3RhbmNlOltdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dW5pLiRvbihcImNoZWNrRm9jdXNcIiwoYm9vbCk9PntcclxuXHRcdFx0XHR0aGlzLmlzRm9jdXM9Ym9vbFxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRjbG9zZSgpe1xyXG5cdFx0XHRcdHVuaS4kZW1pdChcImNsb3NlU2VhcmNoXCIpXHJcblx0XHRcdFx0dW5pLiRlbWl0KFwiY2hlY2tGb2N1c1wiLGZhbHNlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblBvbGx1dGlvbihwb2xsdXRpb24pe1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxyXG5cdFx0XHRcdHVuaS4kZW1pdChcIm9uUG9sbHV0aW9uXCIscG9sbHV0aW9uKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXREaXN0YW5jZShwb2xsdXRpb24saW5kZXgpe1xyXG5cdFx0XHRcdHZhciB1c2VyTG9jYXRpb249dW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckxvY2F0aW9uXCIpXHJcblx0XHRcdFx0dmFyIHBvaW50MSA9IG5ldyBwbHVzLm1hcHMuUG9pbnQodXNlckxvY2F0aW9uLmxvbmdpdHVkZSx1c2VyTG9jYXRpb24ubGF0aXR1ZGUpO1xyXG5cdFx0XHRcdHZhciBwb2ludDIgPSBuZXcgcGx1cy5tYXBzLlBvaW50KHBvbGx1dGlvbi53cnlMb25naXR1ZGUscG9sbHV0aW9uLndyeUxhdGl0dWRlKVxyXG5cdFx0XHRcdHBsdXMubWFwcy5NYXAuY2FsY3VsYXRlRGlzdGFuY2UocG9pbnQxLHBvaW50MiwocmVzdWx0cyk9PntcclxuXHRcdFx0XHRcdHZhciBzZWFyY2hzPXRoaXMuc2VhcmNoc1xyXG5cdFx0XHRcdFx0c2VhcmNoc1tpbmRleF0uZGlzdGFuY2U9IChyZXN1bHRzLmRpc3RhbmNlLzEwMDApLnRvRml4ZWQoMilcclxuXHRcdFx0XHRcdHRoaXMuc2VhcmNocz1zZWFyY2hzXHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zZWFyY2hzKVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWFyY2goZSl7XHJcblx0XHRcdFx0aWYodGhpcy5yZXF1ZXN0VGFzay5hYm9ydCl7XHJcblx0XHRcdFx0XHR0aGlzLnJlcXVlc3RUYXNrLmFib3J0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0VGFzaz11bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IFVSTC5QT0xMVVRJT05fU0VBUkNILCBcclxuXHRcdFx0XHRcdGRhdGE6IHtuYW1lOmUudmFsdWV9LFxyXG5cdFx0XHRcdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRcdFx0XHRoZWFkZXI6IHt0b2tlbn0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZToocmVzKSA9PntcclxuXHRcdFx0XHRcdFx0aWYoISFyZXMuZGF0YSYmcmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZWFyY2hzPXJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR2YXIgaT0wXHJcblx0XHRcdFx0XHRcdFx0d2hpbGUgKGkgPCB0aGlzLnNlYXJjaHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldERpc3RhbmNlKHRoaXMuc2VhcmNoc1tpXSxpKVxyXG5cdFx0XHRcdFx0XHRcdCAgICBpKys7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uc2VhcmNoe1xyXG5cdFxyXG59XHJcbi5oZWFkZXJ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC8qIGhlaWdodDogMTAwcHg7ICovXHJcblx0cGFkZGluZy10b3A6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlcl9sZWZ0e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNjAwcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmlucF9jb250ZW50e1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0bWFyZ2luOiAxMHB4IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHdpZHRoOiA2MDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmljb25fc2VhcmNoe1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDI2cHg7XHJcblx0cmlnaHQ6IDEwcHg7XHJcbn1cclxuLnNlYXJjaF9saXN0e1xyXG5cdHBhZGRpbmc6IDIwdXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHVweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDF1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnNlYXJjaF9saXN0X2xlZnRfdGV4dHtcclxuXHR3aWR0aDogNTAwdXB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjc6ODA4MlwiXHJcbi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjRcIlxyXG4vLyBjb25zdCB1cmwwPVwiaHR0cDovLzE5Mi4xNjguMS41XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjAuMTg4XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjEuMTVcIlxyXG5jb25zdCB1cmwwPXVuaS5nZXRTdG9yYWdlU3luYyhcInVybFwiKT91bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1cmxcIik6XCJodHRwOi8vMTIyLjExNC4xNzcuMTk4XCJcclxuY29uc3QgdXJsPXVybDArXCI6ODA4MlwiXHJcbmNvbnN0IHVybF9QQz11cmwwK1wiOjgwODEvYXBwXCJcclxuXHJcbi8v5bi46ZO+5o6lIFxyXG5jb25zdCBXRUJTT0NLRVQ9XCJ3czovLzE5Mi4xNjguMS40OjgwODIvd2Vic29ja2V0L1wiXHJcblxyXG4vLyDnmbvlvZVcclxuY29uc3QgTE9HSU5fTE9HSU49dXJsK1wiL2xvZ2luL2xvZ2luXCJcclxuY29uc3QgVEFTS19JTkRFWD11cmwrXCIvdGFzay9pbmRleFwiLy/ojrflj5bpppbpobXku7vliqHmg4XlhrVcclxuY29uc3QgVEFTS19JTkRFWDI9dXJsK1wiL3Rhc2svaW5kZXgyXCIvL+iOt+WPlummlumhteS7u+WKoeaDheWGtVxyXG5cclxuY29uc3QgVEFTS19QUk9DRVNTPXVybCtcIi90YXNrL3Byb2Nlc3NcIi8v5q2j5Zyo6L+b6KGM5Lit55qE5Lu75Yqh77yM5LiN5LygdWlkIOWImeaYvuekuuaJgOacieS6ulxyXG5jb25zdCBUQVNLX0ZJTklTSD11cmwrXCIvdGFzay9maW5pc2hcIi8v5bey5a6M5oiQ55qE5Lu75Yqh77yM5LiN5LygdWlkIOWImeaYvuekuuaJgOacieS6ulxyXG5jb25zdCBUQVNLX05PX1NUQVJUPXVybCtcIi90YXNrL25vU3RhcnRcIi8v6L+Y5pyq5byA5aeL55qE5Lu75Yqh77yM5LiN5LygdWlkIOWImeaYvuekuuaJgOacieS6ulxyXG5jb25zdCBQUk9CTEVNX0xJU1Q9dXJsK1wiL3Byb2JsZW0vbGlzdFwiLy/pl67popjliJfooaggcGFnZSDkuLrlv4XpnIAg56ys5LiA6aG15Li6MCDlvZN1aWTkuLrnqbrnmoTml7blgJnlsIbkvJrmn6Xor6LmiYDmnInpl67popgg5Y+N5LmL5YiZ5p+l6K+i5b2T5YmN55So5oi35o+Q5Lqk55qE6Zeu6aKYXHJcbmNvbnN0IFVQTE9BRF9VUExPQUQ9dXJsK1wiL3VwbG9hZC91cGxvYWRcIi8v5LiK5Lyg5Zu+54mHXHJcbmNvbnN0IERFUEFSVE1FTlRfR0VUX0RFUFQ9dXJsK1wiL2RlcGFydG1lbnQvZ2V0RGVwdFwiLy/ojrflj5bkuaHplYfliJfooahcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfQ09OVEFDVExJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2NvbnRhY3RMaXN0XCIvL+iOt+WPluiBlOezu+S6uuS/oeaBr1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9GSU5JU0hfTElTVD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvZmluaXNoTGlzdFwiLy/ojrflj5bngrnkvY3ov5vooYzkuK3nmoTkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9nZXRBbGxQcm9ibGVtXCIvL+iOt+WPluaJgOacieaxoeafk+a6kOmXrumimOexu+Wei1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9HRVRfUFJPQkxFTT11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvZ2V0UHJvYmxlbVwiLy/ojrflj5bmsaHmn5PmupDpl67popjnsbvlnotcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9BRERfQkFUQ0g9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vYWRkQmF0Y2hcIi8v5om56YeP5paw5aKe6Zeu6aKYXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvcHJvYmxlbS9saXN0XCIvL+mAmui/h+eCueS9jeS/oeaBryDojrflj5bpl67popjkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9MSVNUMj11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvcHJvYmxlbS9saXN0MlwiLy/pgJrov4fku7vliqHkv6Hmga8g6I635Y+W6Zeu6aKY5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1VQREFURT11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvdXBkYXRlXCIvL+abtOaWsOW3oeafpeeCueS9jeeKtuS/oeaBr1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9OT1JNQUw9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L25vcm1hbFwiLy/mm7TmlLnlt6Hmn6XngrnkvY3nirbmgIHnirbmgIFcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfUFJPQ0VTU19MSVNUPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9wcm9jZXNzTGlzdFwiLy/mm7TmlLnlt6Hmn6XngrnkvY3nirbmgIHnirbmgIFcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfVVBEQVRFX1dSWV9BRERSRVNTX0RFVEFJTEVEPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC91cGRhdGVXcnlBZGRyZXNzRGV0YWlsZWRcIi8v5rGh5p+T5rqQ6YeN5paw5a6a5L2NIGlkPeaxoeafk+a6kElEIO+8jHdyeVR5cGXnrYnkuo7msaHmn5PmupDnsbvlnovvvIzlnLDlnYDkv6Hmga8g5ZKM57uP57qs5bqmXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BBVEhfQUREPXVybCtcIi90YXNrL3BhdHJvbC9wYXRoL2FkZFwiLy/mt7vliqDot6/lvoTngrnkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUEFUSF9BRERfQkFUQ0g9dXJsK1wiL3Rhc2svcGF0cm9sL3BhdGgvYWRkQmF0Y2hcIi8v5re75Yqg6Lev5b6E54K55L+h5oGvXHJcblxyXG5cclxuLy8gY29uc3QgVEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUz11cmwrXCIvdGFzay9wYXRyb2wvdXBkYXRlU3RhdHVzXCIvL+abtOaUueW3oeafpeS7u+WKoeeKtuaAgVxyXG5jb25zdCBUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFX1NUQVRVUz11cmwrXCIvdGFzay9yZWN0aWZpY2F0aW9uL3VwZGF0ZVN0YXR1c1wiLy/mm7TmlLnmlbTkuKrku7vliqHnirbmgIFcclxuY29uc3QgVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURT11cmwrXCIvdGFzay9yZWN0aWZpY2F0aW9uL3VwZGF0ZVwiLy/kv67mlLnmlbTmlLnku7vliqHlhoXlrrnvvIzlm77niYfnrYlcclxuXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1VQREFURV9TVEFUVVM9dXJsK1wiL3Rhc2svcGF0cm9sL3VwZGF0ZVN0YXR1c1wiLy/mm7TmlLnlt6Hmn6Xku7vliqHnirbmgIFcclxuY29uc3QgVVNFUl9VUERBVEU9dXJsK1wiL3VzZXIvdXBkYXRlXCIvL+mAmui/h+eCueS9jeS/oeaBryDojrflj5bpl67popjkv6Hmga9cclxuXHJcblxyXG5cclxuY29uc3QgUE9MTFVUSU9OX1NFQVJDSD11cmwrXCIvcG9sbHV0aW9uL3NlYXJjaFwiLy/mkJzntKLmsaHmn5PmupBcclxuXHJcblxyXG4vL1BD5o6l5Y+jXHJcblxyXG5jb25zdCBEQVBJTkdTSFVJWkhJX1NIVUlaSElUT05HSklfS0hMWD11cmxfUEMrXCIvZGFwaW5nc2h1aXpoaS9zaHVpemhpdG9uZ2ppX2tobHhcIi8v6K+m5oOFXHJcbmNvbnN0IFFVS09OR1NIVUlaSElUT05HSklfSEVMSVVTSFVJWkhJVE9OR0pJPXVybF9QQytcIi9xdUtvbmdTaHVpWmhpVG9uZ0ppL2hlTGl1U2h1aVpoaVRvbmdKaVwiLy/or6bmg4VcclxuXHJcbi8vUEPmjpLooYzmppzmjqXlj6NcclxuY29uc3QgQVNTRVNTX1RPV05fTElTVD11cmxfUEMrXCIvYXNzZXNzL3Rvd25MaXN0XCIvL+mVh+ihl+aOkuihjFxyXG5jb25zdCBBU1NFU1NfREVQQVJUTUVOVF9MSVNUPXVybF9QQytcIi9hc3Nlc3MvZGVwYXJ0bWVudExpc3RcIi8v6YOo6Zeo5o6S6KGMXHJcbi8v5rGh5p+T5rqQ5o6l5Y+jXHJcblxyXG5jb25zdCBXUllfQlpfTElTVD11cmxfUEMrXCIvd3J5L2J6L2xpc3RcIi8v5rO156uZXHJcbmNvbnN0IFdSWV9DT01QQU5ZX0xJU1Q9dXJsX1BDK1wiL3dyeS9jb21wYW55L2xpc3RcIi8v5bel5Lia5LyB5LiaXHJcbmNvbnN0IFdSWV9SSEtQV0tfTElTVD11cmxfUEMrXCIvd3J5L3Joa3B3ay9saXN0XCIvL+WFpeays+aOkuaxoeWPo1xyXG5jb25zdCBXUllfUkhLUFdEX0xJU1Q9dXJsX1BDK1wiL3dyeS9yaGtwd2QvbGlzdFwiLy/lhaXmsrPmjpLmsaHngrlcclxuY29uc3QgV1JZX0paR0RfTElTVD11cmxfUEMrXCIvd3J5L2p6Z2QvbGlzdFwiLy/lu7rnrZHlt6XlnLBcclxuY29uc3QgV1JZX1FUSFlfTElTVD11cmxfUEMrXCIvd3J5L3F0aHkvbGlzdFwiLy/lhbblroPooYzkuJpcclxuY29uc3QgV1JZX0pDRFdfTElTVD11cmxfUEMrXCIvd3J5L2pjZHcvbGlzdFwiLy/mo4DmtYvngrnkvY1cclxuY29uc3QgV1JZX1lMSkdfTElTVD11cmxfUEMrXCIvd3J5L3lsamcvbGlzdFwiLy/ljLvnlpfmnLrmnoRcclxuY29uc3QgV1JZX1hRWVpfTElTVD11cmxfUEMrXCIvd3J5L3hxeXovbGlzdFwiLy/nlZznpr3lhbvmrpZcclxuY29uc3QgV1JZX1RaQ19MSVNUPXVybF9QQytcIi93cnkvdHpjL2xpc3RcIi8v5bGg5a6w5Zy6XHJcbmNvbnN0IFdSWV9TSFVJS1VfTElTVD11cmxfUEMrXCIvd3J5L3NodWlrdS9saXN0XCIvL+awtOW6k1xyXG5jb25zdCBXUllfU1BUX0xJU1Q9dXJsX1BDK1wiL3dyeS9zcHQvbGlzdFwiLy/lsbHlnarloZhcclxuY29uc3QgV1JZX1lZQ19MSVNUPXVybF9QQytcIi93cnkveXljL2xpc3RcIi8v5YW76bG85rGgXHJcbmNvbnN0IFdSWV9KTUpaSlpEX0xJU1Q9dXJsX1BDK1wiL3dyeS9qbWp6anpkL2xpc3RcIi8v5bGF5rCR6ZuG5Lit5bGF5L2P54K5XHJcbmNvbnN0IFdSWV9YU0xXX0xJU1Q9dXJsX1BDK1wiL3dyeS94c2x3L2xpc3RcIi8v5bCP5pWj5Lmx5rGh5LyB5LiaXHJcbmNvbnN0IFdSWV9YQ0NfTElTVD11cmxfUEMrXCIvd3J5L3hjYy9saXN0XCIvL+a0l+i9puWculxyXG5jb25zdCBXUllfQ1lIWV9MSVNUPXVybF9QQytcIi93cnkvY3loeS9saXN0XCIvL+mkkOmlruihjOS4mlxyXG5jb25zdCBXUllfTk1TQ19MSVNUPXVybF9QQytcIi93cnkvbm1zYy9saXN0XCIvL+WGnOi0uOW4guWculxyXG5jb25zdCBXUllfV1NDTENfTElTVD11cmxfUEMrXCIvd3J5L3dzY2xjL2xpc3RcIi8v5rGh5rC05aSE55CG5Y6CXHJcbmNvbnN0IFdSWV9aWllGTERKRF9MSVNUPXVybF9QQytcIi93cnkvenp5ZmxkamQvbGlzdFwiLy/np43mpI3kuJrogqXmlpnloIbnp6/ngrlcclxuY29uc3QgV1JZX1NNWVNZWkRIX0xJU1Q9dXJsX1BDK1wiL3dyeS9zbXlzeXpkaC9saXN0XCIvLzEw5Lqp5Lul5LiK56eN5qSN5aSn5oi3XHJcblxyXG5tb2R1bGUuZXhwb3J0cz17XHJcblx0dXJsLFxyXG5cdFdFQlNPQ0tFVCxcclxuXHRMT0dJTl9MT0dJTixcclxuXHRUQVNLX0lOREVYLFxyXG5cdFRBU0tfSU5ERVgyLFxyXG5cdFRBU0tfUFJPQ0VTUyxcclxuXHRUQVNLX0ZJTklTSCxcclxuXHRUQVNLX05PX1NUQVJULFxyXG5cdFBST0JMRU1fTElTVCxcclxuXHRVUExPQURfVVBMT0FELFxyXG5cdERFUEFSVE1FTlRfR0VUX0RFUFQsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfQ09OVEFDVExJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfRklOSVNIX0xJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9QUk9CTEVNLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENILFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1QyLFxyXG5cdFVTRVJfVVBEQVRFLFxyXG5cdFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEVfU1RBVFVTLFxyXG5cdFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEUsXHJcblx0VEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUyxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEUsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfTk9STUFMLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0NFU1NfTElTVCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEVfV1JZX0FERFJFU1NfREVUQUlMRUQsXHJcblx0VEFTS19QQVRST0xfUEFUSF9BREQsXHJcblx0VEFTS19QQVRST0xfUEFUSF9BRERfQkFUQ0gsXHJcblx0REFQSU5HU0hVSVpISV9TSFVJWkhJVE9OR0pJX0tITFgsXHJcblx0UVVLT05HU0hVSVpISVRPTkdKSV9IRUxJVVNIVUlaSElUT05HSkksXHJcblx0V1JZX0JaX0xJU1QsXHJcblx0V1JZX0NPTVBBTllfTElTVCxcclxuXHRXUllfUkhLUFdLX0xJU1QsXHJcblx0V1JZX1JIS1BXRF9MSVNULFxyXG5cdFdSWV9KWkdEX0xJU1QsXHJcblx0V1JZX1FUSFlfTElTVCxcclxuXHRXUllfSkNEV19MSVNULFxyXG5cdFdSWV9ZTEpHX0xJU1QsXHJcblx0V1JZX1hRWVpfTElTVCxcclxuXHRXUllfVFpDX0xJU1QsXHJcblx0V1JZX1NIVUlLVV9MSVNULFxyXG5cdFdSWV9TUFRfTElTVCxcclxuXHRXUllfWVlDX0xJU1QsXHJcblx0V1JZX0pNSlpKWkRfTElTVCxcclxuXHRXUllfWFNMV19MSVNULFxyXG5cdFdSWV9YQ0NfTElTVCxcclxuXHRXUllfQ1lIWV9MSVNULFxyXG5cdFdSWV9OTVNDX0xJU1QsXHJcblx0V1JZX1dTQ0xDX0xJU1QsXHJcblx0V1JZX1paWUZMREpEX0xJU1QsXHJcblx0V1JZX1NNWVNZWkRIX0xJU1QsXHJcblx0QVNTRVNTX1RPV05fTElTVCxcclxuXHRBU1NFU1NfREVQQVJUTUVOVF9MSVNULFxyXG5cdFBPTExVVElPTl9TRUFSQ0hcclxufVxyXG4iLCJpbXBvcnQgVVJMIGZyb20gXCIuL2ludGVyZmFjZS5qc1wiXHJcbnZhciB0aW1lcl9nZXRMb2N0aW9uPW51bGxcclxudmFyIHRpbWVyX3VwTG9jdGlvbj17fVxyXG52YXIgdXBMb2N0aW9uRGF0YT17fVxyXG52YXIgc3ViTnZ1ZT17fVxyXG52YXIgYXJyV3J5PVtcclxuXHRcIldSWV9CWl9MSVNUXCIsXHJcblx0XCJXUllfQ09NUEFOWV9MSVNUXCIsXHJcblx0XCJXUllfUkhLUFdLX0xJU1RcIixcclxuXHRcIldSWV9SSEtQV0RfTElTVFwiLFxyXG5cdFwiV1JZX0paR0RfTElTVFwiLFxyXG5cdFwiV1JZX1FUSFlfTElTVFwiLFxyXG5cdFwiV1JZX0pDRFdfTElTVFwiLFxyXG5cdFwiV1JZX1lMSkdfTElTVFwiLFxyXG5cdFwiV1JZX1hRWVpfTElTVFwiLFxyXG5cdFwiV1JZX1RaQ19MSVNUXCIsXHJcblx0XCJXUllfU0hVSUtVX0xJU1RcIixcclxuXHRcIldSWV9TUFRfTElTVFwiLFxyXG5cdFwiV1JZX1lZQ19MSVNUXCIsXHJcblx0XCJXUllfSk1KWkpaRF9MSVNUXCIsXHJcblx0XCJXUllfWFNMV19MSVNUXCIsXHJcblx0XCJXUllfWENDX0xJU1RcIixcclxuXHRcIldSWV9DWUhZX0xJU1RcIixcclxuXHRcIldSWV9OTVNDX0xJU1RcIixcclxuXHRcIldSWV9XU0NMQ19MSVNUXCIsXHJcblx0XCJXUllfWlpZRkxESkRfTElTVFwiLFxyXG5cdFwiV1JZX1NNWVNZWkRIX0xJU1RcIlxyXG5dXHJcbmZ1bmN0aW9uIGdldFJlcXVlc3QodXJsLGRhdGEsY2FsbCxlcnJvcil7XHJcblx0dW5pLnNob3dMb2FkaW5nKHttYXNrOnRydWV9KVxyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHR0aXRsZTpyZXMuZGF0YS5tc2d8fFwi5pWw5o2u5byC5bi4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdFBjKHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdE5vKHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdFJlcXVlc3RObyh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdGRhdGE6IGRhdGEsXHJcblx0XHRtZXRob2Q6XCJQT1NUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHQvLyBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0Ly8gfWVsc2V7XHJcblx0XHRcdFx0Ly8gdHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0Ly8gfVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwb3N0UmVxdWVzdCh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR1bmkuc2hvd0xvYWRpbmcoe21hc2s6dHJ1ZX0pXHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0bWV0aG9kOlwiUE9TVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdGNvbXBsZXRlOihyZXMpID0+e1xyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRpZighcmVzLmRhdGEpe1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKCk6XCJcIlxyXG5cdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0dGl0bGU6cmVzLmRhdGEubXNnfHxcIuaVsOaNruW8guW4uFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZGF0YSl7Ly/lrozmiJDlt6Hmn6XmsaHmn5PmupDku7vliqFcclxuXHR1cEltZ1RlYW1zKGRhdGEucG9pbnRQaG90byxmdW5jdGlvbihyZXN1bHRzLGluZGV4KXtcclxuXHRcdGRhdGEucG9pbnRQaG90bz1yZXN1bHRzXHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0dG9Db21wbGV0ZVRhc2soVVJMLlRBU0tfUEFUUk9MX1BPSU5UX1VQREFURSxkYXRhKVxyXG5cdH0sMSwocmVzdWx0cyk9PntcclxuXHRcdGNvbXBsZXRlVGFzayhkYXRhKVxyXG5cdH0pXHJcbn1cclxuZnVuY3Rpb24gcmVjdGlmaWNhdGlvblRhc2tEZXRhaWwoZGF0YSl7Ly/lrozmiJDmlbTmlLnku7vliqFcclxuXHR1cEltZ1RlYW1zKGRhdGEucmVjdGlmaWNhdGlvblBob3RvLGZ1bmN0aW9uKHJlc3VsdHMsaW5kZXgpe1xyXG5cdFx0ZGF0YS5yZWN0aWZpY2F0aW9uUGhvdG89cmVzdWx0c1xyXG5cdFx0dG9Db21wbGV0ZVRhc2soVVJMLlRBU0tfUkVDVElGSUNBVElPTl9VUERBVEUsZGF0YSlcclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHVwUHJvYmxlbVRlYW1zKGRhdGEpey8v5LiK5Lyg5aSa5Liq6Zeu6aKYXHJcblx0dmFyIHByb2JsZW1UZWFtcz0wXHJcblx0Zm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0aWYoZGF0YVtpXS5wcm9ibGVtUGhvdG8pe1xyXG5cdFx0XHRwcm9ibGVtVGVhbXMrK1xyXG5cdFx0XHR1cEltZ1RlYW1zKGRhdGFbaV0ucHJvYmxlbVBob3RvLGZ1bmN0aW9uKHJlc3VsdHMsaW5kZXgpe1xyXG5cdFx0XHRcdHByb2JsZW1UZWFtcy0tXHJcblx0XHRcdFx0ZGF0YVtpbmRleF0ucHJvYmxlbVBob3RvPXJlc3VsdHNcclxuXHRcdFx0XHRpZihwcm9ibGVtVGVhbXM9PTApe1xyXG5cdFx0XHRcdFx0ZGF0YT1KU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdFx0XHRcdFx0dG9VcFByb2JsZW0oVVJMLlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENILGRhdGEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LGksKHJlc3VsdHMpPT57XHJcblx0XHRcdFx0dXBQcm9ibGVtVGVhbXMoZGF0YSlcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gdG9Db21wbGV0ZVRhc2sodXJsLGRhdGEpey8v5LiK5Lyg6Zeu6aKY5oiW6ICF5a6M5oiQ54K55L2N5beh5p+lXHJcblx0Z2V0UmVxdWVzdE5vKHVybCxkYXRhLChyZXN1bHRzKT0+e1xyXG5cdFx0Y29uc29sZS5sb2coXCLkuIrkvKDmiJDlip9cIilcclxuXHR9LChyZXN1bHRzKT0+e1xyXG5cdFx0dG9Db21wbGV0ZVRhc2soZGF0YSlcclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHRvVXBQcm9ibGVtKHVybCxkYXRhKXsvL+S4iuS8oOmXrumimOaIluiAheWujOaIkOeCueS9jeW3oeafpVxyXG5cdGdldFJlcXVlc3RObyh1cmwse2RhdGF9LChyZXN1bHRzKT0+e1xyXG5cdFx0Y29uc29sZS5sb2coXCLkuIrkvKDmiJDlip9cIilcclxuXHR9LChyZXN1bHRzKT0+e1xyXG5cdFx0dG9VcFByb2JsZW0oZGF0YSlcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwSW1nVGVhbXMoaW1ncyxjYWxsLGluZGV4LGVycm9yKXsvL+S4iuS8oOWkmuW8oOWbvueJh1xyXG5cdHZhciBpbWdzPWltZ3Muc3BsaXQoXCI7XCIpXHJcblx0dmFyIHBpY3R1cmU9W11cclxuXHR2YXIgaW1nVGVhbXM9MFxyXG5cdGZvcih2YXIgaT0wO2k8aW1ncy5sZW5ndGg7aSsrKXtcclxuXHRcdGltZ1RlYW1zKytcclxuXHRcdHVwbG9hZEZpbGUoVVJMLlVQTE9BRF9VUExPQUQsaW1nc1tpXSwocmVzdWx0cyk9PntcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzdWx0cylcclxuXHRcdFx0cmVzdWx0cz1KU09OLnBhcnNlKHJlc3VsdHMpXHJcblx0XHRcdHBpY3R1cmUucHVzaChyZXN1bHRzLmRhdGEpO1xyXG5cdFx0XHRpbWdUZWFtcy0tXHJcblx0XHRcdGlmKGltZ1RlYW1zPT0wKXtcclxuXHRcdFx0XHRwaWN0dXJlPXBpY3R1cmUuam9pbihcIjtcIilcclxuXHRcdFx0XHRjYWxsKHBpY3R1cmUsaW5kZXgpXHJcblx0XHRcdH1cclxuXHRcdH0sKHJlc3VsdHMpPT57XHJcblx0XHRcdGVycm9yKHJlc3VsdHMpXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkRmlsZSh1cmwsZGF0YSxjYWxsLGVycm9yKXsvL+S4iuS8oOWbvueJh1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS51cGxvYWRGaWxlKHtcclxuXHRcdHVybDogdXJsLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0ZmlsZVR5cGU6XCJpbWFnZVwiLFxyXG5cdFx0ZmlsZVBhdGg6ZGF0YSxcclxuXHRcdG5hbWU6XCJmaWxlXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0dG9rZW5cclxuXHRcdH0sXHJcblx0XHRzdWNjZXNzOiAocmVzKSA9PiB7IFxyXG5cdFx0XHRpZihyZXMuZGF0YSE9XCIwMDAwMDBcIil7XHJcblx0XHRcdFx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9jYWxsKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKGRhdGEpOlwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGZhaWwoKXtcclxuXHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoZGF0YSk6XCJcIlxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3MobXNnLGNhbGwpe1xyXG5cdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0aWNvbjpcInN1Y2Nlc3NcIixcclxuXHRcdHRpdGxlOm1zZ1xyXG5cdH0pXHJcblx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9zZXRUaW1lb3V0KGNhbGwsMTUwMCk6XCJcIlxyXG59XHJcbmNvbnN0IGlzUmVmcmVzaFRhc2tzUGFnZT10cnVlXHJcblxyXG5jb25zdCBpc1JlZnJlc2hQb2xsdXRpb25QYWdlPXRydWVcclxuXHJcbmNvbnN0IHdlYlNvY2tldD1mdW5jdGlvbihpZCl7XHJcblx0dW5pLmNvbm5lY3RTb2NrZXQoe1xyXG5cdFx0dXJsOiBVUkwuV0VCU09DS0VUK2lkLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdH0sXHJcblx0XHRtZXRob2Q6ICdHRVQnXHJcblx0fSlcclxufVxyXG51bmkub25Tb2NrZXRPcGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5bey5omT5byA77yBJyk7XHJcbn0pO1xyXG5cclxudmFyIGdldExvY2F0aW9uPWZ1bmN0aW9uKCl7XHJcblx0dGltZXJfZ2V0TG9jdGlvbj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0dW5pLmdldExvY2F0aW9uKHtcclxuXHRcdFx0dHlwZTpcIndnczg0XCIsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKXtcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ1c2VyTG9jYXRpb25cIix7bG9uZ2l0dWRlOnJlcy5sb25naXR1ZGUsbGF0aXR1ZGU6cmVzLmxhdGl0dWRlfSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChyZXMpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcykgXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcl9nZXRMb2N0aW9uKVxyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6XCLojrflj5blrprkvY3mnYPpmZDlpLHotKVcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6XCLor7fmiZPlvIDmiYvmnLrlrprkvY3mnYPpmZBcIixcclxuXHRcdFx0XHRcdHNob3dDYW5jZWw6ZmFsc2UsXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5jb25maXJtKVxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ1c2VyTG9jYXRpb25cIix7bG9uZ2l0dWRlOjAsbGF0aXR1ZGU6MH0pXHJcblx0XHRcdFx0XHRcdGdldExvY2F0aW9uKClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sMTAwMClcclxufVxyXG5cclxudmFyIHVuVXBMb2N0aW9uPWZ1bmN0aW9uKGlkKXtcclxuXHRpZighIXRpbWVyX3VwTG9jdGlvbltpZF0pe1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcl91cExvY3Rpb25baWRdKVxyXG5cdH1cclxufVxyXG52YXIgdW5HZXRMb2NhdGlvbj1mdW5jdGlvbigpe1xyXG5cdGNsZWFySW50ZXJ2YWwodGltZXJfZ2V0TG9jdGlvbilcclxufVxyXG52YXIgdXBMb2N0aW9uPWZ1bmN0aW9uKGlkKXtcclxuXHR0aW1lcl91cExvY3Rpb25baWRdPXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgdXNlckxvY2F0aW9uPXVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJMb2NhdGlvblwiKVxyXG5cdFx0dmFyIGRhdGE9e1xyXG5cdFx0XHRwYXRyb2xUYXNrSWQ6aWQsXHJcblx0XHRcdGxvbmdpdHVkZTp1c2VyTG9jYXRpb24ubG9uZ2l0dWRlLFxyXG5cdFx0XHRsYXRpdHVkZTp1c2VyTG9jYXRpb24ubGF0aXR1ZGUsXHJcblx0XHR9XHJcblx0XHR2YXIgdXBEYXRhPXVwTG9jdGlvbkRhdGFbaWRdP3VwTG9jdGlvbkRhdGFbaWRdOltdXHJcblx0XHR2YXIgZGF0ZT1uZXcgRGF0ZSgpXHJcblx0XHR1cERhdGEucHVzaCh7XHJcblx0XHRcdHBhdHJvbFRhc2tJZDppZCxcclxuXHRcdFx0bG9uZ2l0dWRlOnVzZXJMb2NhdGlvbi5sb25naXR1ZGUsXHJcblx0XHRcdGxhdGl0dWRlOnVzZXJMb2NhdGlvbi5sYXRpdHVkZSxcclxuXHRcdFx0bG9jYXRpb25UaW1lOmRhdGUuZ2V0VGltZSgpXHJcblx0XHR9KVxyXG5cdFx0dXBMb2N0aW9uRGF0YVtpZF09dXBEYXRhXHJcblx0XHRwb3N0UmVxdWVzdE5vKFVSTC5UQVNLX1BBVFJPTF9QQVRIX0FERF9CQVRDSCx7ZGF0YTpKU09OLnN0cmluZ2lmeSh1cERhdGEpLGlkOmlkfSwocmVzdWx0cyk9PntcclxuXHRcdFx0aWYocmVzdWx0cy5jb2RlPT0yKXtcclxuXHRcdFx0XHR1blVwTG9jdGlvbihpZClcclxuXHRcdFx0XHR2YXIgb25UYXNrPXVuaS5nZXRTdG9yYWdlU3luYyhcIm9uVGFza1wiKT91bmkuZ2V0U3RvcmFnZVN5bmMoXCJvblRhc2tcIik6W107XHJcblx0XHRcdFx0b25UYXNrLnNwbGljZShvblRhc2suaW5kZXhPZih0aGlzLnRhc2tJZCkpXHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwib25UYXNrXCIsb25UYXNrKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1cExvY3Rpb25EYXRhW2lkXT1bXSBcclxuXHRcdH0pIFxyXG5cdH0sNjAwMClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V3J5TWFwKCl7XHJcblx0Zm9yICh2YXIgaT0wO2k8YXJyV3J5Lmxlbmd0aDtpKyspIHtcclxuXHRcdChmdW5jdGlvbih1cmwpe1xyXG5cdFx0XHRnZXRSZXF1ZXN0UGMoVVJMW3VybF0sXCJcIiwocmVzdWx0cyk9PntcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmModXJsLHJlc3VsdHMpXHJcblx0XHRcdH0pXHRcclxuXHRcdH0pKGFycldyeVtpXSlcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHM9eyAgXHJcblx0Z2V0UmVxdWVzdCxcclxuXHRnZXRSZXF1ZXN0Tm8sXHJcblx0Z2V0UmVxdWVzdFBjLFxyXG5cdHBvc3RSZXF1ZXN0LCAgXHJcblx0cG9zdFJlcXVlc3RObyxcclxuXHR1cGxvYWRGaWxlLFxyXG5cdHNob3dTdWNjZXNzLFxyXG5cdGlzUmVmcmVzaFRhc2tzUGFnZSxcclxuXHRpc1JlZnJlc2hQb2xsdXRpb25QYWdlLFxyXG5cdHdlYlNvY2tldCxcclxuXHR1cExvY3Rpb24sXHJcblx0dW5HZXRMb2NhdGlvbixcclxuXHR1blVwTG9jdGlvbixcclxuXHRnZXRMb2NhdGlvbixcclxuXHR1cFByb2JsZW1UZWFtcyxcclxuXHRjb21wbGV0ZVRhc2ssXHJcblx0cmVjdGlmaWNhdGlvblRhc2tEZXRhaWwsXHJcblx0c3ViTnZ1ZSxcclxuXHRnZXRXcnlNYXBcclxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZTdjZWEyYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGU3Y2VhMmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImhlYWRlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdBRkZcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJoZWFkZXJfbGVmdFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYwMFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwiaW5wX2NvbnRlbnRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjBcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwid2lkdGhcIjogXCI2MDBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcImljb25fc2VhcmNoXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiBcIjI2XCIsXG4gICAgXCJyaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJzZWFyY2hfbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDIwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDIwLFxuICAgIFwibGluZUhlaWdodFwiOiA0MCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjFmMWYxXCJcbiAgfSxcbiAgXCJzZWFyY2hfbGlzdF9sZWZ0X3RleHRcIjoge1xuICAgIFwid2lkdGhcIjogNTAwXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
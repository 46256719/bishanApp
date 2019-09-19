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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 7 */,
/* 8 */,
/* 9 */
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
/* 10 */
/*!************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/main.js?{"page":"subNvue%2Fsearch"} ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subNvue/search.nvue?mpType=page */ 11);


_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'subNvue/search'
_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'

new Vue(_subNvue_search_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 11 */
/*!********************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/search.nvue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_nvue_vue_type_template_id_0e4a57c2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.nvue?vue&type=template&id=0e4a57c2&scoped=true&mpType=page */ 12);
/* harmony import */ var _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.nvue?vue&type=script&lang=js&mpType=page */ 14);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page */ 20).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page */ 20).default)
          }

}

/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_nvue_vue_type_template_id_0e4a57c2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_nvue_vue_type_template_id_0e4a57c2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "0e4a57c2",
  "6e977818"
  
)

component.options.__file = "G:/知行APP/pollutionMonitoring/subNvue/search.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!**************************************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=template&id=0e4a57c2&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_template_id_0e4a57c2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./search.nvue?vue&type=template&id=0e4a57c2&scoped=true&mpType=page */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_template_id_0e4a57c2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_template_id_0e4a57c2_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 13 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=template&id=0e4a57c2&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        [
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
                _c("image", {
                  staticClass: ["search_list_left"],
                  staticStyle: { width: "26px", height: "36px" },
                  attrs: {
                    src: "../static/images/search/position.png",
                    mode: ""
                  }
                }),
                _c("view", { staticClass: ["search_list_right"] }, [
                  _c("view", {}, [
                    _c("text", { staticClass: ["search_list_right_text1"] }, [
                      _vm._v("名称:" + _vm._s(item.wryName))
                    ])
                  ]),
                  _c("view", {}, [
                    _c(
                      "text",
                      {
                        staticClass: ["search_list_right_text2"],
                        staticStyle: { color: "#999999" }
                      },
                      [_vm._v(_vm._s(item.wryAddress))]
                    )
                  ]),
                  _c("view", { staticClass: ["search_list_right_address"] }, [
                    _c("image", {
                      staticClass: ["distance_icon"],
                      staticStyle: {
                        width: "24px",
                        height: "21px",
                        marginRight: "9px"
                      },
                      attrs: {
                        src: "../static/images/search/dictance_icon.png",
                        mode: ""
                      }
                    }),
                    _c("text", [_vm._v(_vm._s(item.distance) + "Km")])
                  ])
                ])
              ]
            )
          }),
          _vm.onSearch
            ? _c("view", { staticClass: ["onSearch"] }, [
                _c(
                  "text",
                  { staticStyle: { color: "#666", fontSize: "20px" } },
                  [_vm._v("————正在查询————")]
                )
              ])
            : _vm._e(),
          !_vm.onSearch && _vm.searchs.length == 0
            ? _c("view", { staticClass: ["noData"] }, [
                _c(
                  "text",
                  { staticStyle: { color: "#666", fontSize: "20px" } },
                  [_vm._v("————未查询到数据————")]
                )
              ])
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!********************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./search.nvue?vue&type=script&lang=js&mpType=page */ 15);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, plus) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























var _interface = _interopRequireDefault(__webpack_require__(/*! ../static/js/interface.js */ 16));
var _utils = _interopRequireDefault(__webpack_require__(/*! ../static/js/utils.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
//
//
//
//
//
//
var _default = { data: function data() {return { isFocus: false, searchs: [], requestTask: {}, distance: [], onSearch: false };}, mounted: function mounted() {var _this = this;uni.$on("checkFocus", function (bool) {_this.isFocus = bool;});}, methods: { close: function close() {uni.$emit("closeSearch");uni.$emit("checkFocus", false);}, onPollution: function onPollution(pollution) {this.close();uni.$emit("onPollution", pollution);}, getDistance: function getDistance(pollution, index) {var _this2 = this;var userLocation = uni.getStorageSync("userLocation");
      var point1 = new plus.maps.Point(userLocation.longitude, userLocation.latitude);
      var point2 = new plus.maps.Point(pollution.wryLongitude, pollution.wryLatitude);
      plus.maps.Map.calculateDistance(point1, point2, function (results) {
        var searchs = _this2.searchs;
        searchs[index].distance = (results.distance / 1000).toFixed(2);
        searchs[index].wryAddress = "地址:" + searchs[index].wryAddress;
        _this2.searchs = searchs;
        _this2.$set(_this2.searchs);
      });

    },
    search: function search(e) {var _this3 = this;
      if (this.requestTask.abort) {
        this.requestTask.abort();
      }
      var token = uni.getStorageSync("token") || "";
      this.onSearch = true;
      this.searchs = [];
      this.requestTask = uni.request({
        url: _interface.default.POLLUTION_SEARCH,
        data: { name: e.value },
        method: "GET",
        header: { token: token },
        complete: function complete(res) {
          _this3.onSearch = false;
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["weexPlus"]))

/***/ }),
/* 16 */
/*!***********************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/static/js/interface.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // const url0="http://192.168.1.7:8082"
// const url0="http://192.168.1.4"
// const url0="http://192.168.1.5"
// const url0="http://192.168.0.188"
// const url0="http://192.168.1.15"
var url0 = "http://122.114.177.198";
// const url0="http://183.230.23.21"
// const url0=uni.getStorageSync("url")?uni.getStorageSync("url"):"http://183.230.23.21"ZZZZZZZ
// const url=url0+":18082"
var url = url0 + ":8082";
var url_PC = url + "/proxy/pc";
// const daili="http://10.117.80.201:8081/app"
var daili = "http://122.114.177.198:8081/app";
// const url_PC=url0+":8081/app"



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

var DAPINGSHUIZHI_SHUIZHITONGJI_KHLX = daili + "/dapingshuizhi/shuizhitongji_khlx"; //断面情况
var QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI = daili + "/quKongShuiZhiTongJi/heLiuShuiZhiTongJi"; //河流统计
var WATER_BASE_GETBASEYEARMONTH = daili + "/water/base/getBaseYearMonth"; //获取有数据的时间

//PC排行榜接口
var ASSESS_TOWN_LIST = daili + "/assess/townList"; //镇街排行
var ASSESS_DEPARTMENT_LIST = daili + "/assess/departmentList"; //部门排行
//污染源接口

var WRY_BZ_LIST = daili + "/wry/bz/list"; //泵站
var WRY_COMPANY_LIST = daili + "/wry/company/list"; //工业企业
var WRY_RHKPWK_LIST = daili + "/wry/rhkpwk/list"; //入河排污口
var WRY_RHKPWD_LIST = daili + "/wry/rhkpwd/list"; //入河排污点
var WRY_JZGD_LIST = daili + "/wry/jzgd/list"; //建筑工地
var WRY_QTHY_LIST = daili + "/wry/qthy/list"; //其它行业
var WRY_JCDW_LIST = daili + "/wry/jcdw/list"; //检测点位
var WRY_YLJG_LIST = daili + "/wry/yljg/list"; //医疗机构
var WRY_XQYZ_LIST = daili + "/wry/xqyz/list"; //畜禽养殖
var WRY_TZC_LIST = daili + "/wry/tzc/list"; //屠宰场
var WRY_SHUIKU_LIST = daili + "/wry/shuiku/list"; //水库
var WRY_SPT_LIST = daili + "/wry/spt/list"; //山坪塘
var WRY_YYC_LIST = daili + "/wry/yyc/list"; //养鱼池
var WRY_JMJZJZD_LIST = daili + "/wry/jmjzjzd/list"; //居民集中居住点
var WRY_XSLW_LIST = daili + "/wry/xslw/list"; //小散乱污企业
var WRY_XCC_LIST = daili + "/wry/xcc/list"; //洗车场
var WRY_CYHY_LIST = daili + "/wry/cyhy/list"; //餐饮行业
var WRY_NMSC_LIST = daili + "/wry/nmsc/list"; //农贸市场
var WRY_WSCLC_LIST = daili + "/wry/wsclc/list"; //污水处理厂
var WRY_ZZYFLDJD_LIST = daili + "/wry/zzyfldjd/list"; //种植业肥料堆积点
var WRY_SMYSYZDH_LIST = daili + "/wry/smysyzdh/list"; //10亩以上种植大户

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
  POLLUTION_SEARCH: POLLUTION_SEARCH,
  url_PC: url_PC,
  WATER_BASE_GETBASEYEARMONTH: WATER_BASE_GETBASEYEARMONTH };

/***/ }),
/* 17 */
/*!*******************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/static/js/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__, plus) {var _interface = _interopRequireDefault(__webpack_require__(/*! ./interface.js */ 16));
var _mapTool = __webpack_require__(/*! ./mapTool.js */ 19);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var timer_getLoction = null;
var timer_upLoction = {};
var upLoctionData = {};
var subNvue = {};
var taskInfo = {};
var pollutionInfo = {};
var upTimeNum = 300000;
var situationDate = {};
// var arrWry=[
// 	"WRY_BZ_LIST",
// 	"WRY_COMPANY_LIST",
// 	"WRY_RHKPWK_LIST",
// 	"WRY_RHKPWD_LIST",
// 	"WRY_JZGD_LIST",
// 	"WRY_QTHY_LIST",
// 	"WRY_JCDW_LIST",
// 	"WRY_YLJG_LIST",
// 	"WRY_XQYZ_LIST",
// 	"WRY_TZC_LIST",
// 	"WRY_SHUIKU_LIST",
// 	"WRY_SPT_LIST",
// 	"WRY_YYC_LIST",
// 	"WRY_JMJZJZD_LIST",
// 	"WRY_XSLW_LIST",
// 	"WRY_XCC_LIST",
// 	"WRY_CYHY_LIST",
// 	"WRY_NMSC_LIST",
// 	"WRY_WSCLC_LIST",
// 	"WRY_ZZYFLDJD_LIST",
// 	"WRY_SMYSYZDH_LIST"
// ]
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
        console.log(__f__(res.data, " at static\\js\\utils.js:51"));
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
    console.log(__f__(data, " at static\\js\\utils.js:153"));
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
  // console.log(data)
  getRequestNo(url, data, function (results) {
    console.log(__f__(results, " at static\\js\\utils.js:186"));
  }, function (results) {
    toCompleteTask(url, data);
  });
}
function toUpProblem(url, data) {//上传问题或者完成点位巡查
  getRequestNo(url, { data: data }, function (results) {
    console.log(__f__("上传成功", " at static\\js\\utils.js:193"));
  }, function (results) {
    toUpProblem(url, data);
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
    fail: function fail(res) {
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
  console.log(__f__('WebSocket连接已打开！', " at static\\js\\utils.js:265"));
});

var getLocation = function getLocation() {
  timer_getLoction = setInterval(function () {
    uni.getLocation({
      type: "wgs84",
      success: function success(res) {
        uni.setStorageSync("userLocation", { longitude: res.longitude, latitude: res.latitude });
      },
      fail: function fail(res) {
        console.log(__f__(res, " at static\\js\\utils.js:276"));
        clearInterval(timer_getLoction);
        uni.showModal({
          title: "获取定位权限失败",
          content: "请打开手机定位权限",
          showCancel: false,
          success: function success(res) {
            console.log(__f__(res.confirm, " at static\\js\\utils.js:283"));
            uni.setStorageSync("userLocation", { longitude: 0, latitude: 0 });
            getLocation();
          },
          fail: function fail(res) {
            console.log(__f__(res, " at static\\js\\utils.js:288"));
          } });

      } });

  }, 5000);
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
  }, upTimeNum);
};


function toNavigation(longitude, latitude) {//导航
  // 判断平台  
  var wgs84togcj02 = _mapTool.mapTool.wgs84togcj02(longitude, latitude);
  longitude = wgs84togcj02[0];
  latitude = wgs84togcj02[1];
  if (plus.os.name == 'Android') {
    plus.runtime.openURL("amapuri://route/plan/?sid=BGVIS1&did=BGVIS2&dlat=" + latitude + "&dlon=" + longitude + "&dev=0&t=0",
    function (e) {
      uni.showToast({
        icon: "none",
        title: "请下确认手机安装了高德地图" });

      console.log(__f__('Open system default browser failed: ' + e.message, " at static\\js\\utils.js:346"));
    }, "com.autonavi.minimap");

  } else if (plus.os.name == 'iOS') {
    plus.runtime.launchApplication({ action: "iosamap://path?sourceApplication=applicationName&sid=BGVIS1&did=BGVIS2&dlat=" + latitude + "&dlon=" + longitude + "&dev=0&t=0" }, function (e) {
      uni.showToast({
        icon: "none",
        title: "请下确认手机安装了高德地图" });

      console.log(__f__('Open system default browser failed: ' + e.message, " at static\\js\\utils.js:355"));
    });
  }
}

function getWryTypeName(type) {
  var name = "-";
  switch (type) {
    case "bengzhan":
      name = "泵站";
      break;
    case "canyinhangye":
      name = "餐饮行业";
      break;
    case "gyqy":
      name = "工业企业";
      break;
    case "xqyz":
      name = "禽畜养殖";
      break;
    case "jcdw":
      name = "监测点位";
      break;
    case "jianzhugongdi":
      name = "建筑工地";
      break;
    case "jmjzjzd":
      name = "居民集中居住点";
      break;
    case "nongmaoshichang":
      name = "农贸市场";
      break;
    case "qthy":
      name = "其他行业";
      break;
    case "rhkpwd":
      name = "入河(库)排污点";
      break;
    case "wsclc":
      name = "污水集中处理设施";
      break;
    case "shanpingtang":
      name = "山坪塘";
      break;
    case "shuiku":
      name = "水库";
      break;
    case "smysyzdh":
      name = "十亩以上种植大户";
      break;
    case "tzc":
      name = "屠宰场";
      break;
    case "xiaosanluanwu":
      name = "小散乱污";
      break;
    case "xichechang":
      name = "洗车场";
      break;
    case "yangyuchi":
      name = "养鱼池";
      break;
    case "yiliaojigou":
      name = "医疗机构";
      break;
    case "zzyfldjd":
      name = "种植业肥料堆积点";
      break;}

  return name;
}


// function getWryMap(){
// 	for (var i=0;i<arrWry.length;i++) {
// 		(function(url){
// 			getRequestPc(URL[url],"",(results)=>{
// 				uni.setStorageSync(url,results)
// 			})	
// 		})(arrWry[i])
// 	}
// }
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
  // getWryMap,
  taskInfo: taskInfo,
  pollutionInfo: pollutionInfo,
  upTimeNum: upTimeNum,
  onTaskNum: 0,
  unTaskNum: 0,
  situationDate: situationDate,
  toNavigation: toNavigation,
  getWryTypeName: getWryTypeName };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["weexPlus"]))

/***/ }),
/* 18 */
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
/* 19 */
/*!*********************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/static/js/mapTool.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function mapTool() {
  this.x_PI = 3.14159265358979324 * 3000.0 / 180.0,
  this.PI = 3.1415926535897932384626,
  this.ee = 0.00669342162296594323,
  this.a = 6378245.0;
}
/**  
   * GCJ02 转换为 WGS84  
   * @param lng  
   * @param lat  
   * @returns {*[]}  
   */
mapTool.prototype.gcj02towgs84 = function (lng, lat) {
  if (this.out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    var dlat = this.transformlat(lng - 105.0, lat - 35.0);
    var dlng = this.transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * this.PI;
    var magic = Math.sin(radlat);
    magic = 1 - this.ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180.0 / (this.a * (1 - this.ee) / (magic * sqrtmagic) * this.PI);
    dlng = dlng * 180.0 / (this.a / sqrtmagic * Math.cos(radlat) * this.PI);
    var mglat = lat + dlat;
    var mglng = lng + dlng;
    return [lng * 2 - mglng, lat * 2 - mglat];
  }
};
/**  
    * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换  
    * 即谷歌、高德 转 百度  
    * @param lng  
    * @param lat  
    * @returns {*[]}  
    */
mapTool.prototype.gcj02tobd09 = function (lng, lat) {
  var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * this.x_PI);
  var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * this.x_PI);
  var bd_lng = z * Math.cos(theta) + 0.0065;
  var bd_lat = z * Math.sin(theta) + 0.006;
  return [bd_lng, bd_lat];
};
/**  
    * WGS84转GCj02  
    * @param lng  
    * @param lat  
    * @returns {*[]}  
    */
mapTool.prototype.wgs84togcj02 = function (lng, lat) {
  lng = lng * 1;
  lat = lat * 1;
  if (this.out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    var dlat = this.transformlat(lng - 105.0, lat - 35.0);
    var dlng = this.transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * this.PI;
    var magic = Math.sin(radlat);
    magic = 1 - this.ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180.0 / (this.a * (1 - this.ee) / (magic * sqrtmagic) * this.PI);
    dlng = dlng * 180.0 / (this.a / sqrtmagic * Math.cos(radlat) * this.PI);
    var mglat = lat + dlat;
    var mglng = lng + dlng;
    return [mglng, mglat];
  }
};
/**  
    * GCJ02 转换为 WGS84  
    * @param lng  
    * @param lat  
    * @returns {*[]}  
    */
mapTool.prototype.gcj02towgs84 = function (lng, lat) {
  if (this.out_of_china(lng, lat)) {
    return [lng, lat];
  } else {
    var dlat = this.transformlat(lng - 105.0, lat - 35.0);
    var dlng = this.transformlng(lng - 105.0, lat - 35.0);
    var radlat = lat / 180.0 * this.PI;
    var magic = Math.sin(radlat);
    magic = 1 - this.ee * magic * magic;
    var sqrtmagic = Math.sqrt(magic);
    dlat = dlat * 180.0 / (this.a * (1 - this.ee) / (magic * sqrtmagic) * this.PI);
    dlng = dlng * 180.0 / (this.a / sqrtmagic * Math.cos(radlat) * this.PI);
    var mglat = lat + dlat;
    var mglng = lng + dlng;
    return [lng * 2 - mglng, lat * 2 - mglat];
  }
};
mapTool.prototype.transformlat = function (lng, lat) {
  var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += (20.0 * Math.sin(6.0 * lng * this.PI) + 20.0 * Math.sin(2.0 * lng * this.PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(lat * this.PI) + 40.0 * Math.sin(lat / 3.0 * this.PI)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(lat / 12.0 * this.PI) + 320 * Math.sin(lat * this.PI / 30.0)) * 2.0 / 3.0;
  return ret;
};
mapTool.prototype.transformlng = function (lng, lat) {
  var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += (20.0 * Math.sin(6.0 * lng * this.PI) + 20.0 * Math.sin(2.0 * lng * this.PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(lng * this.PI) + 40.0 * Math.sin(lng / 3.0 * this.PI)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(lng / 12.0 * this.PI) + 300.0 * Math.sin(lng / 30.0 * this.PI)) * 2.0 / 3.0;
  return ret;
};
/**  
    * 判断是否在国内，不在国内则不做偏移  
    * @param lng  
    * @param lat  
    * @returns {boolean}  
    */
mapTool.prototype.out_of_china = function (lng, lat) {
  return lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271 || false;
};
module.exports.mapTool = new mapTool();

/***/ }),
/* 20 */
/*!****************************************************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!./search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page */ 21);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "search": {
    "position": "relative"
  },
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
    "paddingLeft": "30",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "search_list_right": {
    "marginLeft": "32",
    "paddingTop": "30",
    "width": "630",
    "justifyContent": "center",
    "borderColor": "#e5e5e5",
    "borderBottomWidth": "1",
    "borderStyle": "solid"
  },
  "search_list_right_text1": {
    "fontSize": "28"
  },
  "search_list_right_text2": {
    "fontSize": "24"
  },
  "search_list_right_address": {
    "paddingBottom": "29",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "onSearch": {
    "height": "60",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "noData": {
    "height": "60",
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzPzI4NzciLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL21haW4uanM/YTY4MyIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT83M2IyIiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL3NlYXJjaC5udnVlP2ZmZTYiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvc2VhcmNoLm52dWU/MmU5MCIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT80NDM5IiwidW5pLWFwcDovLy9zdWJOdnVlL3NlYXJjaC5udnVlIiwidW5pLWFwcDovLy9zdGF0aWMvanMvaW50ZXJmYWNlLmpzIiwidW5pLWFwcDovLy9zdGF0aWMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsInVuaS1hcHA6Ly8vc3RhdGljL2pzL21hcFRvb2wuanMiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvc2VhcmNoLm52dWU/Nzc1YiIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT9kZDNkIl0sIm5hbWVzIjpbInVybDAiLCJ1cmwiLCJ1cmxfUEMiLCJkYWlsaSIsIldFQlNPQ0tFVCIsIkxPR0lOX0xPR0lOIiwiVEFTS19JTkRFWCIsIlRBU0tfSU5ERVgyIiwiVEFTS19QUk9DRVNTIiwiVEFTS19GSU5JU0giLCJUQVNLX05PX1NUQVJUIiwiUFJPQkxFTV9MSVNUIiwiVVBMT0FEX1VQTE9BRCIsIkRFUEFSVE1FTlRfR0VUX0RFUFQiLCJUQVNLX1BBVFJPTF9QT0lOVF9DT05UQUNUTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX0ZJTklTSF9MSVNUIiwiVEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNIiwiVEFTS19QQVRST0xfUE9JTlRfR0VUX1BST0JMRU0iLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0FERF9CQVRDSCIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVDIiLCJUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEUiLCJUQVNLX1BBVFJPTF9QT0lOVF9OT1JNQUwiLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9DRVNTX0xJU1QiLCJUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEVfV1JZX0FERFJFU1NfREVUQUlMRUQiLCJUQVNLX1BBVFJPTF9QQVRIX0FERCIsIlRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENIIiwiVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURV9TVEFUVVMiLCJUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFIiwiVEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUyIsIlVTRVJfVVBEQVRFIiwiUE9MTFVUSU9OX1NFQVJDSCIsIkRBUElOR1NIVUlaSElfU0hVSVpISVRPTkdKSV9LSExYIiwiUVVLT05HU0hVSVpISVRPTkdKSV9IRUxJVVNIVUlaSElUT05HSkkiLCJXQVRFUl9CQVNFX0dFVEJBU0VZRUFSTU9OVEgiLCJBU1NFU1NfVE9XTl9MSVNUIiwiQVNTRVNTX0RFUEFSVE1FTlRfTElTVCIsIldSWV9CWl9MSVNUIiwiV1JZX0NPTVBBTllfTElTVCIsIldSWV9SSEtQV0tfTElTVCIsIldSWV9SSEtQV0RfTElTVCIsIldSWV9KWkdEX0xJU1QiLCJXUllfUVRIWV9MSVNUIiwiV1JZX0pDRFdfTElTVCIsIldSWV9ZTEpHX0xJU1QiLCJXUllfWFFZWl9MSVNUIiwiV1JZX1RaQ19MSVNUIiwiV1JZX1NIVUlLVV9MSVNUIiwiV1JZX1NQVF9MSVNUIiwiV1JZX1lZQ19MSVNUIiwiV1JZX0pNSlpKWkRfTElTVCIsIldSWV9YU0xXX0xJU1QiLCJXUllfWENDX0xJU1QiLCJXUllfQ1lIWV9MSVNUIiwiV1JZX05NU0NfTElTVCIsIldSWV9XU0NMQ19MSVNUIiwiV1JZX1paWUZMREpEX0xJU1QiLCJXUllfU01ZU1laREhfTElTVCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0aW1lcl9nZXRMb2N0aW9uIiwidGltZXJfdXBMb2N0aW9uIiwidXBMb2N0aW9uRGF0YSIsInN1Yk52dWUiLCJ0YXNrSW5mbyIsInBvbGx1dGlvbkluZm8iLCJ1cFRpbWVOdW0iLCJzaXR1YXRpb25EYXRlIiwiZ2V0UmVxdWVzdCIsImRhdGEiLCJjYWxsIiwiZXJyb3IiLCJ1bmkiLCJzaG93TG9hZGluZyIsIm1hc2siLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsImNvbXBsZXRlIiwicmVzIiwiaGlkZUxvYWRpbmciLCJjb2RlIiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsIm1zZyIsImdldFJlcXVlc3RQYyIsImdldFJlcXVlc3RObyIsInBvc3RSZXF1ZXN0Tm8iLCJzdWNjZXNzIiwicG9zdFJlcXVlc3QiLCJjb21wbGV0ZVRhc2siLCJ1cEltZ1RlYW1zIiwicG9pbnRQaG90byIsInJlc3VsdHMiLCJpbmRleCIsInRvQ29tcGxldGVUYXNrIiwiVVJMIiwicmVjdGlmaWNhdGlvblRhc2tEZXRhaWwiLCJyZWN0aWZpY2F0aW9uUGhvdG8iLCJ1cFByb2JsZW1UZWFtcyIsInByb2JsZW1UZWFtcyIsImkiLCJsZW5ndGgiLCJwcm9ibGVtUGhvdG8iLCJKU09OIiwic3RyaW5naWZ5IiwidG9VcFByb2JsZW0iLCJpbWdzIiwic3BsaXQiLCJwaWN0dXJlIiwiaW1nVGVhbXMiLCJ1cGxvYWRGaWxlIiwicGFyc2UiLCJwdXNoIiwiam9pbiIsImZpbGVUeXBlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZmFpbCIsInNob3dTdWNjZXNzIiwic2V0VGltZW91dCIsImlzUmVmcmVzaFRhc2tzUGFnZSIsImlzUmVmcmVzaFBvbGx1dGlvblBhZ2UiLCJ3ZWJTb2NrZXQiLCJpZCIsImNvbm5lY3RTb2NrZXQiLCJvblNvY2tldE9wZW4iLCJnZXRMb2NhdGlvbiIsInNldEludGVydmFsIiwidHlwZSIsInNldFN0b3JhZ2VTeW5jIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJjbGVhckludGVydmFsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwidW5VcExvY3Rpb24iLCJ1bkdldExvY2F0aW9uIiwidXBMb2N0aW9uIiwidXNlckxvY2F0aW9uIiwicGF0cm9sVGFza0lkIiwidXBEYXRhIiwiZGF0ZSIsIkRhdGUiLCJsb2NhdGlvblRpbWUiLCJnZXRUaW1lIiwib25UYXNrIiwic3BsaWNlIiwiaW5kZXhPZiIsInRhc2tJZCIsInRvTmF2aWdhdGlvbiIsIndnczg0dG9nY2owMiIsIm1hcFRvb2wiLCJwbHVzIiwib3MiLCJydW50aW1lIiwib3BlblVSTCIsImUiLCJtZXNzYWdlIiwibGF1bmNoQXBwbGljYXRpb24iLCJhY3Rpb24iLCJnZXRXcnlUeXBlTmFtZSIsIm9uVGFza051bSIsInVuVGFza051bSIsInhfUEkiLCJQSSIsImVlIiwiYSIsInByb3RvdHlwZSIsImdjajAydG93Z3M4NCIsImxuZyIsImxhdCIsIm91dF9vZl9jaGluYSIsImRsYXQiLCJ0cmFuc2Zvcm1sYXQiLCJkbG5nIiwidHJhbnNmb3JtbG5nIiwicmFkbGF0IiwibWFnaWMiLCJNYXRoIiwic2luIiwic3FydG1hZ2ljIiwic3FydCIsImNvcyIsIm1nbGF0IiwibWdsbmciLCJnY2owMnRvYmQwOSIsInoiLCJ0aGV0YSIsImF0YW4yIiwiYmRfbG5nIiwiYmRfbGF0IiwicmV0IiwiYWJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdHQUFnRyxhQUFhO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEUsZUFBZTtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InN1Yk52dWUvc2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xuICAgICAgICBtYXNrV2VidmlldyA9IG1hc2tXZWJ2aWV3LnBhcmVudCgpIHx8IG1hc2tXZWJ2aWV3Oy8v5YaN5qyh5qOA5rWL54i2XHJcbiAgICAgICAgdmFyIG9sZFNob3cgPSB3ZWJ2aWV3LnNob3c7XHJcbiAgICAgICAgdmFyIG9sZEhpZGUgPSB3ZWJ2aWV3LmhpZGU7XHJcbiAgICAgICAgdmFyIG9sZENsb3NlID0gd2Vidmlldy5jbG9zZTtcclxuXHJcbiAgICAgICAgdmFyIHNob3dNYXNrID0gZnVuY3Rpb24gc2hvd01hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IG1hc2tDb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjbG9zZU1hc2sgPSBmdW5jdGlvbiBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93TWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRTaG93LmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5oaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZEhpZGUuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZENsb3NlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3ViTlZ1ZUJ5SWQoaWQpIHtcclxuICAgICAgICB2YXIgd2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3ZWJ2aWV3ICYmICF3ZWJ2aWV3LiRwcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgd3JhcHBlcih3ZWJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN1Yk5WdWVCeUlkKHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBsdXMgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXMnKTtcclxuICAgIHZhciBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgaWQgPSAwO1xyXG4gICAgdmFyIGNhbGxiYWNrcyA9IHt9O1xyXG5cclxuICAgIHZhciBVTklBUFBfU0VSVklDRV9OVlVFX0lEID0gJ19fdW5pYXBwX19zZXJ2aWNlJztcclxuXHJcbiAgICBnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBKc0FwaScpIHtcclxuICAgICAgICAgICAgaW52b2tlKGUuZGF0YS5pZCwgZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBTdWJOVnVlJykge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGUuZGF0YS5kYXRhLCBlLmRhdGEub3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soYXJncywgdHlwZSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoaXNGbihhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncyhyZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6b2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5zdWNjZXNzKSAmJiBhcmdzLnN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOmZhaWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5mYWlsKSAmJiBhcmdzLmZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRm4oYXJncy5jb21wbGV0ZSkgJiYgYXJncy5jb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNGbihhcmdzKSB8fCBhcmdzICYmIGlzRm4oYXJncy5jYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sua2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrSWQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbGxiYWNrWycgKyBjYWxsYmFja0lkICsgJ10gaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHVibGlzaCA9IGZ1bmN0aW9uIHB1Ymxpc2goX3JlZikge1xyXG4gICAgICAgIHZhciBpZCA9IF9yZWYuaWQsXHJcbiAgICAgICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYucGFyYW1zO1xyXG5cclxuICAgICAgICBjYWxsYmFja3NbaWRdID0gY3JlYXRlQ2FsbGJhY2socGFyYW1zLCB0eXBlKTtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH0sIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZShkYXRhLCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3JlYXRlUHVibGlzaCA9IGZ1bmN0aW9uIGNyZWF0ZVB1Ymxpc2gobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkKyssXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBhcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4ocGx1Z2luTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUocGx1Z2luTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRGYWNlKF9yZWYpIHtcclxuICAgICAgICB2YXIgZmFtaWx5ID0gX3JlZi5mYW1pbHksXHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYuc291cmNlLFxyXG4gICAgICAgICAgICBkZXNjID0gX3JlZi5kZXNjLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGRvbS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogZmFtaWx5LFxyXG4gICAgICAgICAgICBzcmM6IHNvdXJjZS5yZXBsYWNlKC9cIi9nLCAnXFwnJylcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdsb2FkRm9udEZhY2U6b2snLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxFdmVudCQxID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBjYWxsYmFja3MkMSA9IFtdO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50JDEuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwUmVhZHknKSB7XHJcbiAgICAgICAgICAgIHJlYWR5LmlzVW5pQXBwUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzJDEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmlBcHBSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH0gOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgP1xyXG4gICAgICAgICAgICBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cmVhbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnc3RyZWFtJyk7XHJcblxyXG4gICAgLy8gbGV0IHJlcXVlc3RUYXNrSWQgPSAwXHJcblxyXG4gICAgdmFyIE1FVEhPRF9HRVQgPSAnR0VUJztcclxuICAgIHZhciBNRVRIT0RfUE9TVCA9ICdQT1NUJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfSlNPTiA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfRk9STSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG5cclxuICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSkge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE1FVEhPRF9HRVQ7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBDT05URU5UX1RZUEVfRk9STTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IE1FVEhPRF9QT1NUICYmIGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCkgPT09IENPTlRFTlRfVFlQRV9KU09OKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0KF9yZWYpIHtcclxuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmwsXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyLFxyXG4gICAgICAgICAgICBfcmVmJG1ldGhvZCA9IF9yZWYubWV0aG9kLFxyXG4gICAgICAgICAgICBtZXRob2QgPSBfcmVmJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiBfcmVmJG1ldGhvZCxcclxuICAgICAgICAgICAgX3JlZiRkYXRhVHlwZSA9IF9yZWYuZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gX3JlZiRkYXRhVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2pzb24nIDogX3JlZiRkYXRhVHlwZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlID0gX3JlZi5yZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWVzdFRhc2tJZCsrXHJcbiAgICAgICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGhhc0NvbnRlbnRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NvbnRlbnRUeXBlICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb250ZW50VHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gTUVUSE9EX0dFVCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICh+dXJsLmluZGV4T2YoJz8nKSA/IHVybC5zdWJzdHIoLTEpID09PSAnJicgfHwgdXJsLnN1YnN0cigtMSkgPT09ICc/JyA/ICcnIDogJyYnIDogJz8nKSArXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdHlwZTogZGF0YVR5cGUgPT09ICdqc29uJyA/ICdqc29uJyA6ICd0ZXh0JyxcclxuICAgICAgICAgICAgYm9keTogbWV0aG9kICE9PSBNRVRIT0RfR0VUID8gc2VyaWFsaXplKGRhdGEsIG1ldGhvZCwgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIDogJydcclxuICAgICAgICB9LCBmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gX3JlZjIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgb2sgPSBfcmVmMi5vayxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBfcmVmMi5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcclxuXHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAtMSB8fCBhYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3JlcXVlc3Q6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldC5zdGF0dXNDb2RlID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0LmhlYWRlciA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcclxuICAgICAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3RvcmFnZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1c3N0b3JhZ2UnKTtcclxuICAgIHZhciBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUgPSAnX19UWVBFJztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdG9yYWdlKF9yZWYpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHJldC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAmJiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ1N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldFN0b3JhZ2U6b2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoX3JlZjIpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgZGF0YVR5cGUgPSAnU3RyaW5nJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gJ09iamVjdCc7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGRhdGFUeXBlLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdzZXRTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTdG9yYWdlKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYzLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAncmVtb3ZlU3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdyZW1vdmVTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoX3JlZjQpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjQua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjQuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWY0LnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmNC5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWY0LmNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbGlwYm9hcmQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2NsaXBib2FyZCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENsaXBib2FyZERhdGEoX3JlZikge1xyXG4gICAgICAgIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGNsaXBib2FyZC5nZXRTdHJpbmcoZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldENsaXBib2FyZERhdGE6b2snLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDbGlwYm9hcmREYXRhKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ3NldENsaXBib2FyZERhdGE6b2snXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbGlwYm9hcmQuc2V0U3RyaW5nKGRhdGEpO1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldEVtaXR0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdldFVuaUVtaXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVuaUVtaXR0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBFbWl0dGVyID0ge1xyXG4gICAgICAgICAgICAkb246IGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9mZjogZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvZmYgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvbmNlOiBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbmNlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkZW1pdDogZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kZW1pdCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbWl0dGVyO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHkoY3R4LCBtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9mZicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGFwaSA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgbG9hZEZvbnRGYWNlOiBsb2FkRm9udEZhY2UsXHJcbiAgICAgICAgcmVhZHk6IHJlYWR5LFxyXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogZ2V0U3RvcmFnZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiBzZXRTdG9yYWdlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHJlbW92ZVN0b3JhZ2UsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiBjbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgZ2V0Q2xpcGJvYXJkRGF0YTogZ2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBzZXRDbGlwYm9hcmREYXRhOiBzZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2U6IG9uU3ViTlZ1ZU1lc3NhZ2UsXHJcbiAgICAgICAgZ2V0U3ViTlZ1ZUJ5SWQ6IGdldFN1Yk5WdWVCeUlkLFxyXG4gICAgICAgIGdldEN1cnJlbnRTdWJOVnVlOiBnZXRDdXJyZW50U3ViTlZ1ZSxcclxuICAgICAgICAkb246ICRvbixcclxuICAgICAgICAkb2ZmOiAkb2ZmLFxyXG4gICAgICAgICRvbmNlOiAkb25jZSxcclxuICAgICAgICAkZW1pdDogJGVtaXRcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgd3ggPSB7XHJcbiAgICAgICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBkb3dubG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgY2hvb3NlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgcHJldmlld0ltYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldEltYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICBzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIGNob29zZVZpZGVvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVWaWRlb1RvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgc2F2ZUZpbGU6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlTGlzdDogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVNhdmVkRmlsZTogdHJ1ZSxcclxuICAgICAgICBvcGVuRG9jdW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldExvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Mb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBnZXRTeXN0ZW1JbmZvOiB0cnVlLFxyXG4gICAgICAgIGdldE5ldHdvcmtUeXBlOiB0cnVlLFxyXG4gICAgICAgIG1ha2VQaG9uZUNhbGw6IHRydWUsXHJcbiAgICAgICAgc2NhbkNvZGU6IHRydWUsXHJcbiAgICAgICAgc2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBnZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIHNldEtlZXBTY3JlZW5PbjogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlTG9uZzogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlU2hvcnQ6IHRydWUsXHJcbiAgICAgICAgYWRkUGhvbmVDb250YWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2FzdDogdHJ1ZSxcclxuICAgICAgICBzaG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBoaWRlVG9hc3Q6IHRydWUsXHJcbiAgICAgICAgaGlkZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgIHNob3dBY3Rpb25TaGVldDogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhckNvbG9yOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlVG86IHRydWUsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogdHJ1ZSxcclxuICAgICAgICByZUxhdW5jaDogdHJ1ZSxcclxuICAgICAgICBzd2l0Y2hUYWI6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVCYWNrOiB0cnVlLFxyXG4gICAgICAgIGdldFByb3ZpZGVyOiB0cnVlLFxyXG4gICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgIGdldFVzZXJJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgIHJlcXVlc3RQYXltZW50OiB0cnVlLFxyXG4gICAgICAgIHN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgdW5zdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIG9uUHVzaDogdHJ1ZSxcclxuICAgICAgICBvZmZQdXNoOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlVW5pID0ge1xyXG4gICAgICAgIG9zOiB7XHJcbiAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB1bmkgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHVuaSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Bvc3RNZXNzYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncmVxdWlyZU5hdGl2ZVBsdWdpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhiYXNlVW5pKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB1bmlba2V5XSA9IGJhc2VVbmlba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5pLnBvc3RNZXNzYWdlID0gcG9zdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luID0gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCA9IG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pO1xyXG59XHJcblxyXG52YXIgY3JlYXRlVW5pO1xyXG5cclxuaWYgKHR5cGVvZiBnZXRVbmkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGNyZWF0ZVVuaSA9IGdldFVuaTtcclxufSBlbHNlIHtcclxuICAgIGNyZWF0ZVVuaSA9IGluaXRVbmk7XHJcbn1cclxudmFyIHdlZXhQbHVzID0gbmV3IFdlZXhQbHVzKHdlZXgpO1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbmkod2VleCwgd2VleFBsdXMsIEJyb2FkY2FzdENoYW5uZWwpO1xyXG5leHBvcnQge1xyXG4gICAgd2VleFBsdXNcclxufTtcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJcbmltcG9ydCBBcHAgZnJvbSAnLi9zdWJOdnVlL3NlYXJjaC5udnVlP21wVHlwZT1wYWdlJ1xuQXBwLm1wVHlwZSA9ICdwYWdlJ1xuQXBwLnJvdXRlID0gJ3N1Yk52dWUvc2VhcmNoJ1xuQXBwLmVsID0gJyNyb290J1xuXG5uZXcgVnVlKEFwcClcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VhcmNoLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU0YTU3YzImc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlNGE1N2MyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kb3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlNGE1N2MyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBcIjBlNGE1N2MyXCIsXG4gIFwiNmU5Nzc4MThcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJHOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL3NlYXJjaC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTAhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU0YTU3YzImc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hcIl0gfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXJcIl0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJoZWFkZXJfbGVmdFwiXSB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiaW5wX2NvbnRlbnRcIl0sXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgIGF1dG9mb2N1czogX3ZtLmlzRm9jdXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyByZXR1cm46IF92bS5zZWFyY2ggfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImljb25fc2VhcmNoXCJdLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjdweFwiLCBoZWlnaHQ6IFwiMjhweFwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiLi4vc3RhdGljL2ltYWdlcy9pY29uX3NlYXJjaC5wbmdcIiwgbW9kZTogXCJcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2UoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNjcm9sbC12aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaF9jb250ZW50XCJdLCBhdHRyczogeyBzY3JvbGxZOiBcInRydWVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLnNlYXJjaHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wic2VhcmNoX2xpc3RcIl0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblBvbGx1dGlvbihpdGVtKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNlYXJjaF9saXN0X2xlZnRcIl0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIyNnB4XCIsIGhlaWdodDogXCIzNnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCIuLi9zdGF0aWMvaW1hZ2VzL3NlYXJjaC9wb3NpdGlvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hfbGlzdF9yaWdodFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwge30sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaF9saXN0X3JpZ2h0X3RleHQxXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlkI3np7A6XCIgKyBfdm0uX3MoaXRlbS53cnlOYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHt9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hfbGlzdF9yaWdodF90ZXh0MlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiM5OTk5OTlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLndyeUFkZHJlc3MpKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoX2xpc3RfcmlnaHRfYWRkcmVzc1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJkaXN0YW5jZV9pY29uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjFweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiOXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiLi4vc3RhdGljL2ltYWdlcy9zZWFyY2gvZGljdGFuY2VfaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5kaXN0YW5jZSkgKyBcIkttXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5vblNlYXJjaFxuICAgICAgICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wib25TZWFyY2hcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiM2NjZcIiwgZm9udFNpemU6IFwiMjBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLigJTigJTigJTigJTmraPlnKjmn6Xor6LigJTigJTigJTigJRcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAhX3ZtLm9uU2VhcmNoICYmIF92bS5zZWFyY2hzLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICA/IF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJub0RhdGFcIl0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiM2NjZcIiwgZm9udFNpemU6IFwiMjBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLigJTigJTigJTigJTmnKrmn6Xor6LliLDmlbDmja7igJTigJTigJTigJRcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRlcl9sZWZ0XCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBAcmV0dXJuPVwic2VhcmNoXCIgcmV0dXJuLWtleS10eXBlPVwic2VhcmNoXCIgOmF1dG9mb2N1cz1cImlzRm9jdXNcIiBjbGFzcz1cImlucF9jb250ZW50XCIvPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2ljb25fc2VhcmNoLnBuZ1wiIGNsYXNzPVwiaWNvbl9zZWFyY2hcIiBzdHlsZT1cIndpZHRoOiAyN3B4O2hlaWdodDogMjhweDtcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNmZmY7XCIgQGNsaWNrPVwiY2xvc2UoKVwiPuWPlua2iDwvdGV4dD5cclxuXHRcdDwvZGl2PlxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cInNlYXJjaF9jb250ZW50XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX2xpc3RcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBzZWFyY2hzXCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwib25Qb2xsdXRpb24oaXRlbSlcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9zZWFyY2gvcG9zaXRpb24ucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjZweDtoZWlnaHQ6IDM2cHg7XCIgY2xhc3M9XCJzZWFyY2hfbGlzdF9sZWZ0XCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfbGlzdF9yaWdodFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj48dGV4dCBjbGFzcz1cInNlYXJjaF9saXN0X3JpZ2h0X3RleHQxXCI+5ZCN56ewOnt7aXRlbS53cnlOYW1lfX08L3RleHQ+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj48dGV4dCBjbGFzcz1cInNlYXJjaF9saXN0X3JpZ2h0X3RleHQyXCIgc3R5bGU9XCJjb2xvcjogIzk5OTk5OTtcIj57e2l0ZW0ud3J5QWRkcmVzc319PC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX2xpc3RfcmlnaHRfYWRkcmVzc1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJkaXN0YW5jZV9pY29uXCIgc3R5bGU9XCJ3aWR0aDogMjRweDtoZWlnaHQ6IDIxcHg7bWFyZ2luLXJpZ2h0OiA5cHg7XCIgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9zZWFyY2gvZGljdGFuY2VfaWNvbi5wbmdcIiBtb2RlPVwiXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQ+e3tpdGVtLmRpc3RhbmNlfX1LbTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJvblNlYXJjaFwiIHYtaWY9XCJvblNlYXJjaFwiPjx0ZXh0IHN0eWxlPVwiY29sb3I6ICM2NjY7Zm9udC1zaXplOiAyMHB4O1wiPuKAlOKAlOKAlOKAlOato+WcqOafpeivouKAlOKAlOKAlOKAlDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibm9EYXRhXCIgdi1pZj1cIiFvblNlYXJjaCYmc2VhcmNocy5sZW5ndGg9PTBcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjNjY2O2ZvbnQtc2l6ZTogMjBweDtcIj7igJTigJTigJTigJTmnKrmn6Xor6LliLDmlbDmja7igJTigJTigJTigJQ8L3RleHQ+PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCBVUkwgZnJvbSBcIi4uL3N0YXRpYy9qcy9pbnRlcmZhY2UuanNcIlxuXHRpbXBvcnQgdXRpbCBmcm9tIFwiLi4vc3RhdGljL2pzL3V0aWxzLmpzXCJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc0ZvY3VzOmZhbHNlLFxyXG5cdFx0XHRcdHNlYXJjaHM6W10sXHJcblx0XHRcdFx0cmVxdWVzdFRhc2s6e30sXHJcblx0XHRcdFx0ZGlzdGFuY2U6W10sXHJcblx0XHRcdFx0b25TZWFyY2g6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR1bmkuJG9uKFwiY2hlY2tGb2N1c1wiLChib29sKT0+e1xyXG5cdFx0XHRcdHRoaXMuaXNGb2N1cz1ib29sXHJcblx0XHRcdH0pXHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRjbG9zZSgpe1xyXG5cdFx0XHRcdHVuaS4kZW1pdChcImNsb3NlU2VhcmNoXCIpXHJcblx0XHRcdFx0dW5pLiRlbWl0KFwiY2hlY2tGb2N1c1wiLGZhbHNlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblBvbGx1dGlvbihwb2xsdXRpb24pe1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxyXG5cdFx0XHRcdHVuaS4kZW1pdChcIm9uUG9sbHV0aW9uXCIscG9sbHV0aW9uKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXREaXN0YW5jZShwb2xsdXRpb24saW5kZXgpe1xyXG5cdFx0XHRcdHZhciB1c2VyTG9jYXRpb249dW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckxvY2F0aW9uXCIpXHJcblx0XHRcdFx0dmFyIHBvaW50MSA9IG5ldyBwbHVzLm1hcHMuUG9pbnQodXNlckxvY2F0aW9uLmxvbmdpdHVkZSx1c2VyTG9jYXRpb24ubGF0aXR1ZGUpO1xyXG5cdFx0XHRcdHZhciBwb2ludDIgPSBuZXcgcGx1cy5tYXBzLlBvaW50KHBvbGx1dGlvbi53cnlMb25naXR1ZGUscG9sbHV0aW9uLndyeUxhdGl0dWRlKVxyXG5cdFx0XHRcdHBsdXMubWFwcy5NYXAuY2FsY3VsYXRlRGlzdGFuY2UocG9pbnQxLHBvaW50MiwocmVzdWx0cyk9PntcclxuXHRcdFx0XHRcdHZhciBzZWFyY2hzPXRoaXMuc2VhcmNoc1xyXG5cdFx0XHRcdFx0c2VhcmNoc1tpbmRleF0uZGlzdGFuY2U9IChyZXN1bHRzLmRpc3RhbmNlLzEwMDApLnRvRml4ZWQoMilcclxuXHRcdFx0XHRcdHNlYXJjaHNbaW5kZXhdLndyeUFkZHJlc3M9IFwi5Zyw5Z2AOlwiK3NlYXJjaHNbaW5kZXhdLndyeUFkZHJlc3NcclxuXHRcdFx0XHRcdHRoaXMuc2VhcmNocz1zZWFyY2hzXHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zZWFyY2hzKVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWFyY2goZSl7XHJcblx0XHRcdFx0aWYodGhpcy5yZXF1ZXN0VGFzay5hYm9ydCl7XHJcblx0XHRcdFx0XHR0aGlzLnJlcXVlc3RUYXNrLmFib3J0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0XHRcdFx0dGhpcy5vblNlYXJjaD10cnVlXHJcblx0XHRcdFx0dGhpcy5zZWFyY2hzPVtdXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0VGFzaz11bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IFVSTC5QT0xMVVRJT05fU0VBUkNILCBcclxuXHRcdFx0XHRcdGRhdGE6IHtuYW1lOmUudmFsdWV9LFxyXG5cdFx0XHRcdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRcdFx0XHRoZWFkZXI6IHt0b2tlbn0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZToocmVzKSA9PntcclxuXHRcdFx0XHRcdFx0dGhpcy5vblNlYXJjaD1mYWxzZVxyXG5cdFx0XHRcdFx0XHRpZighIXJlcy5kYXRhJiZyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlYXJjaHM9cmVzLmRhdGEuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdHZhciBpPTBcclxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoaSA8IHRoaXMuc2VhcmNocy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0RGlzdGFuY2UodGhpcy5zZWFyY2hzW2ldLGkpXHJcblx0XHRcdFx0XHRcdFx0ICAgIGkrKztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxyXG4uc2VhcmNoe1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbi5oZWFkZXJ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC8qIGhlaWdodDogMTAwcHg7ICovXHJcblx0cGFkZGluZy10b3A6IDUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlcl9sZWZ0e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogNjAwcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmlucF9jb250ZW50e1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0bWFyZ2luOiAxMHB4IDBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHdpZHRoOiA2MDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cbi5pY29uX3NlYXJjaHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAyNnB4O1xyXG5cdHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zZWFyY2hfbGlzdHtcclxuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoX2xpc3RfbGVmdHtcclxuXHQvKiB3aWR0aDogMjZ1cHg7XHJcblx0aGVpZ2h0OiAzNnVweDsgKi9cclxufVxyXG4uc2VhcmNoX2xpc3RfcmlnaHR7XHJcblx0bWFyZ2luLWxlZnQ6IDMycHg7XHJcblx0cGFkZGluZy10b3A6IDMwcHg7XHJcblx0d2lkdGg6IDYzMHB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlci1jb2xvcjogI2U1ZTVlNTtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG4uc2VhcmNoX2xpc3RfcmlnaHRfdGV4dDF7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi5zZWFyY2hfbGlzdF9yaWdodF90ZXh0MntcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfbGlzdF9yaWdodF9hZGRyZXNze1xyXG5cdHBhZGRpbmctYm90dG9tOiAyOXB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ub25TZWFyY2gsLm5vRGF0YXtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxuPC9zdHlsZT5cbiIsIi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjc6ODA4MlwiXHJcbi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjRcIlxyXG4vLyBjb25zdCB1cmwwPVwiaHR0cDovLzE5Mi4xNjguMS41XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjAuMTg4XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjEuMTVcIlxyXG5jb25zdCB1cmwwPVwiaHR0cDovLzEyMi4xMTQuMTc3LjE5OFwiXHJcbi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTgzLjIzMC4yMy4yMVwiXHJcbi8vIGNvbnN0IHVybDA9dW5pLmdldFN0b3JhZ2VTeW5jKFwidXJsXCIpP3VuaS5nZXRTdG9yYWdlU3luYyhcInVybFwiKTpcImh0dHA6Ly8xODMuMjMwLjIzLjIxXCJaWlpaWlpaXHJcbi8vIGNvbnN0IHVybD11cmwwK1wiOjE4MDgyXCJcclxuY29uc3QgdXJsPXVybDArXCI6ODA4MlwiXHJcbmNvbnN0IHVybF9QQz11cmwrXCIvcHJveHkvcGNcIlxyXG4vLyBjb25zdCBkYWlsaT1cImh0dHA6Ly8xMC4xMTcuODAuMjAxOjgwODEvYXBwXCJcclxuY29uc3QgZGFpbGk9XCJodHRwOi8vMTIyLjExNC4xNzcuMTk4OjgwODEvYXBwXCJcclxuLy8gY29uc3QgdXJsX1BDPXVybDArXCI6ODA4MS9hcHBcIlxyXG5cclxuXHJcblxyXG4vL+W4uOmTvuaOpSBcclxuY29uc3QgV0VCU09DS0VUPVwid3M6Ly8xOTIuMTY4LjEuNDo4MDgyL3dlYnNvY2tldC9cIlxyXG5cclxuLy8g55m75b2VXHJcbmNvbnN0IExPR0lOX0xPR0lOPXVybCtcIi9sb2dpbi9sb2dpblwiXHJcbmNvbnN0IFRBU0tfSU5ERVg9dXJsK1wiL3Rhc2svaW5kZXhcIi8v6I635Y+W6aaW6aG15Lu75Yqh5oOF5Ya1XHJcbmNvbnN0IFRBU0tfSU5ERVgyPXVybCtcIi90YXNrL2luZGV4MlwiLy/ojrflj5bpppbpobXku7vliqHmg4XlhrVcclxuXHJcbmNvbnN0IFRBU0tfUFJPQ0VTUz11cmwrXCIvdGFzay9wcm9jZXNzXCIvL+ato+WcqOi/m+ihjOS4reeahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgVEFTS19GSU5JU0g9dXJsK1wiL3Rhc2svZmluaXNoXCIvL+W3suWujOaIkOeahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgVEFTS19OT19TVEFSVD11cmwrXCIvdGFzay9ub1N0YXJ0XCIvL+i/mOacquW8gOWni+eahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgUFJPQkxFTV9MSVNUPXVybCtcIi9wcm9ibGVtL2xpc3RcIi8v6Zeu6aKY5YiX6KGoIHBhZ2Ug5Li65b+F6ZyAIOesrOS4gOmhteS4ujAg5b2TdWlk5Li656m655qE5pe25YCZ5bCG5Lya5p+l6K+i5omA5pyJ6Zeu6aKYIOWPjeS5i+WImeafpeivouW9k+WJjeeUqOaIt+aPkOS6pOeahOmXrumimFxyXG5jb25zdCBVUExPQURfVVBMT0FEPXVybCtcIi91cGxvYWQvdXBsb2FkXCIvL+S4iuS8oOWbvueJh1xyXG5jb25zdCBERVBBUlRNRU5UX0dFVF9ERVBUPXVybCtcIi9kZXBhcnRtZW50L2dldERlcHRcIi8v6I635Y+W5Lmh6ZWH5YiX6KGoXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX0NPTlRBQ1RMSVNUPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9jb250YWN0TGlzdFwiLy/ojrflj5bogZTns7vkurrkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfRklOSVNIX0xJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2ZpbmlzaExpc3RcIi8v6I635Y+W54K55L2N6L+b6KGM5Lit55qE5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9BTExfUFJPQkxFTT11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvZ2V0QWxsUHJvYmxlbVwiLy/ojrflj5bmiYDmnInmsaHmn5PmupDpl67popjnsbvlnotcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfR0VUX1BST0JMRU09dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2dldFByb2JsZW1cIi8v6I635Y+W5rGh5p+T5rqQ6Zeu6aKY57G75Z6LXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENIPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9wcm9ibGVtL2FkZEJhdGNoXCIvL+aJuemHj+aWsOWinumXrumimFxyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vbGlzdFwiLy/pgJrov4fngrnkvY3kv6Hmga8g6I635Y+W6Zeu6aKY5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVDI9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vbGlzdDJcIi8v6YCa6L+H5Lu75Yqh5L+h5oGvIOiOt+WPlumXrumimOS/oeaBr1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEU9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3VwZGF0ZVwiLy/mm7TmlrDlt6Hmn6XngrnkvY3nirbkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfTk9STUFMPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9ub3JtYWxcIi8v5pu05pS55beh5p+l54K55L2N54q25oCB54q25oCBXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0NFU1NfTElTVD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvcHJvY2Vzc0xpc3RcIi8v5pu05pS55beh5p+l54K55L2N54q25oCB54q25oCBXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1VQREFURV9XUllfQUREUkVTU19ERVRBSUxFRD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvdXBkYXRlV3J5QWRkcmVzc0RldGFpbGVkXCIvL+axoeafk+a6kOmHjeaWsOWumuS9jSBpZD3msaHmn5PmupBJRCDvvIx3cnlUeXBl562J5LqO5rGh5p+T5rqQ57G75Z6L77yM5Zyw5Z2A5L+h5oGvIOWSjOe7j+e6rOW6plxyXG5jb25zdCBUQVNLX1BBVFJPTF9QQVRIX0FERD11cmwrXCIvdGFzay9wYXRyb2wvcGF0aC9hZGRcIi8v5re75Yqg6Lev5b6E54K55L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENIPXVybCtcIi90YXNrL3BhdHJvbC9wYXRoL2FkZEJhdGNoXCIvL+a3u+WKoOi3r+W+hOeCueS/oeaBr1xyXG5cclxuXHJcbi8vIGNvbnN0IFRBU0tfUEFUUk9MX1VQREFURV9TVEFUVVM9dXJsK1wiL3Rhc2svcGF0cm9sL3VwZGF0ZVN0YXR1c1wiLy/mm7TmlLnlt6Hmn6Xku7vliqHnirbmgIFcclxuY29uc3QgVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURV9TVEFUVVM9dXJsK1wiL3Rhc2svcmVjdGlmaWNhdGlvbi91cGRhdGVTdGF0dXNcIi8v5pu05pS55pW05Liq5Lu75Yqh54q25oCBXHJcblxyXG5jb25zdCBUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFPXVybCtcIi90YXNrL3JlY3RpZmljYXRpb24vdXBkYXRlXCIvL+S/ruaUueaVtOaUueS7u+WKoeWGheWuue+8jOWbvueJh+etiVxyXG5cclxuY29uc3QgVEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUz11cmwrXCIvdGFzay9wYXRyb2wvdXBkYXRlU3RhdHVzXCIvL+abtOaUueW3oeafpeS7u+WKoeeKtuaAgVxyXG5jb25zdCBVU0VSX1VQREFURT11cmwrXCIvdXNlci91cGRhdGVcIi8v6YCa6L+H54K55L2N5L+h5oGvIOiOt+WPlumXrumimOS/oeaBr1xyXG5cclxuXHJcblxyXG5jb25zdCBQT0xMVVRJT05fU0VBUkNIPXVybCtcIi9wb2xsdXRpb24vc2VhcmNoXCIvL+aQnOe0ouaxoeafk+a6kFxyXG5cclxuXHJcbi8vUEPmjqXlj6NcclxuXHJcbmNvbnN0IERBUElOR1NIVUlaSElfU0hVSVpISVRPTkdKSV9LSExYPWRhaWxpK1wiL2RhcGluZ3NodWl6aGkvc2h1aXpoaXRvbmdqaV9raGx4XCIvL+aWremdouaDheWGtVxyXG5jb25zdCBRVUtPTkdTSFVJWkhJVE9OR0pJX0hFTElVU0hVSVpISVRPTkdKST1kYWlsaStcIi9xdUtvbmdTaHVpWmhpVG9uZ0ppL2hlTGl1U2h1aVpoaVRvbmdKaVwiLy/msrPmtYHnu5/orqFcclxuY29uc3QgV0FURVJfQkFTRV9HRVRCQVNFWUVBUk1PTlRIPWRhaWxpK1wiL3dhdGVyL2Jhc2UvZ2V0QmFzZVllYXJNb250aFwiLy/ojrflj5bmnInmlbDmja7nmoTml7bpl7RcclxuXHJcbi8vUEPmjpLooYzmppzmjqXlj6NcclxuY29uc3QgQVNTRVNTX1RPV05fTElTVD1kYWlsaStcIi9hc3Nlc3MvdG93bkxpc3RcIi8v6ZWH6KGX5o6S6KGMXHJcbmNvbnN0IEFTU0VTU19ERVBBUlRNRU5UX0xJU1Q9ZGFpbGkrXCIvYXNzZXNzL2RlcGFydG1lbnRMaXN0XCIvL+mDqOmXqOaOkuihjFxyXG4vL+axoeafk+a6kOaOpeWPo1xyXG5cclxuY29uc3QgV1JZX0JaX0xJU1Q9ZGFpbGkrXCIvd3J5L2J6L2xpc3RcIi8v5rO156uZXHJcbmNvbnN0IFdSWV9DT01QQU5ZX0xJU1Q9ZGFpbGkrXCIvd3J5L2NvbXBhbnkvbGlzdFwiLy/lt6XkuJrkvIHkuJpcclxuY29uc3QgV1JZX1JIS1BXS19MSVNUPWRhaWxpK1wiL3dyeS9yaGtwd2svbGlzdFwiLy/lhaXmsrPmjpLmsaHlj6NcclxuY29uc3QgV1JZX1JIS1BXRF9MSVNUPWRhaWxpK1wiL3dyeS9yaGtwd2QvbGlzdFwiLy/lhaXmsrPmjpLmsaHngrlcclxuY29uc3QgV1JZX0paR0RfTElTVD1kYWlsaStcIi93cnkvanpnZC9saXN0XCIvL+W7uuetkeW3peWcsFxyXG5jb25zdCBXUllfUVRIWV9MSVNUPWRhaWxpK1wiL3dyeS9xdGh5L2xpc3RcIi8v5YW25a6D6KGM5LiaXHJcbmNvbnN0IFdSWV9KQ0RXX0xJU1Q9ZGFpbGkrXCIvd3J5L2pjZHcvbGlzdFwiLy/mo4DmtYvngrnkvY1cclxuY29uc3QgV1JZX1lMSkdfTElTVD1kYWlsaStcIi93cnkveWxqZy9saXN0XCIvL+WMu+eWl+acuuaehFxyXG5jb25zdCBXUllfWFFZWl9MSVNUPWRhaWxpK1wiL3dyeS94cXl6L2xpc3RcIi8v55Wc56a95YW75q6WXHJcbmNvbnN0IFdSWV9UWkNfTElTVD1kYWlsaStcIi93cnkvdHpjL2xpc3RcIi8v5bGg5a6w5Zy6XHJcbmNvbnN0IFdSWV9TSFVJS1VfTElTVD1kYWlsaStcIi93cnkvc2h1aWt1L2xpc3RcIi8v5rC05bqTXHJcbmNvbnN0IFdSWV9TUFRfTElTVD1kYWlsaStcIi93cnkvc3B0L2xpc3RcIi8v5bGx5Z2q5aGYXHJcbmNvbnN0IFdSWV9ZWUNfTElTVD1kYWlsaStcIi93cnkveXljL2xpc3RcIi8v5YW76bG85rGgXHJcbmNvbnN0IFdSWV9KTUpaSlpEX0xJU1Q9ZGFpbGkrXCIvd3J5L2ptanpqemQvbGlzdFwiLy/lsYXmsJHpm4bkuK3lsYXkvY/ngrlcclxuY29uc3QgV1JZX1hTTFdfTElTVD1kYWlsaStcIi93cnkveHNsdy9saXN0XCIvL+Wwj+aVo+S5seaxoeS8geS4mlxyXG5jb25zdCBXUllfWENDX0xJU1Q9ZGFpbGkrXCIvd3J5L3hjYy9saXN0XCIvL+a0l+i9puWculxyXG5jb25zdCBXUllfQ1lIWV9MSVNUPWRhaWxpK1wiL3dyeS9jeWh5L2xpc3RcIi8v6aSQ6aWu6KGM5LiaXHJcbmNvbnN0IFdSWV9OTVNDX0xJU1Q9ZGFpbGkrXCIvd3J5L25tc2MvbGlzdFwiLy/lhpzotLjluILlnLpcclxuY29uc3QgV1JZX1dTQ0xDX0xJU1Q9ZGFpbGkrXCIvd3J5L3dzY2xjL2xpc3RcIi8v5rGh5rC05aSE55CG5Y6CXHJcbmNvbnN0IFdSWV9aWllGTERKRF9MSVNUPWRhaWxpK1wiL3dyeS96enlmbGRqZC9saXN0XCIvL+enjeakjeS4muiCpeaWmeWghuenr+eCuVxyXG5jb25zdCBXUllfU01ZU1laREhfTElTVD1kYWlsaStcIi93cnkvc215c3l6ZGgvbGlzdFwiLy8xMOS6qeS7peS4iuenjeakjeWkp+aIt1xyXG5cclxubW9kdWxlLmV4cG9ydHM9e1xyXG5cdHVybCxcclxuXHRXRUJTT0NLRVQsXHJcblx0TE9HSU5fTE9HSU4sXHJcblx0VEFTS19JTkRFWCxcclxuXHRUQVNLX0lOREVYMixcclxuXHRUQVNLX1BST0NFU1MsXHJcblx0VEFTS19GSU5JU0gsXHJcblx0VEFTS19OT19TVEFSVCxcclxuXHRQUk9CTEVNX0xJU1QsXHJcblx0VVBMT0FEX1VQTE9BRCxcclxuXHRERVBBUlRNRU5UX0dFVF9ERVBULFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0NPTlRBQ1RMSVNULFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0ZJTklTSF9MSVNULFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9BTExfUFJPQkxFTSxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9HRVRfUFJPQkxFTSxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0FERF9CQVRDSCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9MSVNUMixcclxuXHRVU0VSX1VQREFURSxcclxuXHRUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFX1NUQVRVUyxcclxuXHRUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFLFxyXG5cdFRBU0tfUEFUUk9MX1VQREFURV9TVEFUVVMsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfVVBEQVRFLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX05PUk1BTCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9DRVNTX0xJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfVVBEQVRFX1dSWV9BRERSRVNTX0RFVEFJTEVELFxyXG5cdFRBU0tfUEFUUk9MX1BBVEhfQURELFxyXG5cdFRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENILFxyXG5cdERBUElOR1NIVUlaSElfU0hVSVpISVRPTkdKSV9LSExYLFxyXG5cdFFVS09OR1NIVUlaSElUT05HSklfSEVMSVVTSFVJWkhJVE9OR0pJLFxyXG5cdFdSWV9CWl9MSVNULFxyXG5cdFdSWV9DT01QQU5ZX0xJU1QsXHJcblx0V1JZX1JIS1BXS19MSVNULFxyXG5cdFdSWV9SSEtQV0RfTElTVCxcclxuXHRXUllfSlpHRF9MSVNULFxyXG5cdFdSWV9RVEhZX0xJU1QsXHJcblx0V1JZX0pDRFdfTElTVCxcclxuXHRXUllfWUxKR19MSVNULFxyXG5cdFdSWV9YUVlaX0xJU1QsXHJcblx0V1JZX1RaQ19MSVNULFxyXG5cdFdSWV9TSFVJS1VfTElTVCxcclxuXHRXUllfU1BUX0xJU1QsXHJcblx0V1JZX1lZQ19MSVNULFxyXG5cdFdSWV9KTUpaSlpEX0xJU1QsXHJcblx0V1JZX1hTTFdfTElTVCxcclxuXHRXUllfWENDX0xJU1QsXHJcblx0V1JZX0NZSFlfTElTVCxcclxuXHRXUllfTk1TQ19MSVNULFxyXG5cdFdSWV9XU0NMQ19MSVNULFxyXG5cdFdSWV9aWllGTERKRF9MSVNULFxyXG5cdFdSWV9TTVlTWVpESF9MSVNULFxyXG5cdEFTU0VTU19UT1dOX0xJU1QsXHJcblx0QVNTRVNTX0RFUEFSVE1FTlRfTElTVCxcclxuXHRQT0xMVVRJT05fU0VBUkNILFxyXG5cdHVybF9QQyxcclxuXHRXQVRFUl9CQVNFX0dFVEJBU0VZRUFSTU9OVEhcclxufVxyXG4iLCJpbXBvcnQgVVJMIGZyb20gXCIuL2ludGVyZmFjZS5qc1wiXHJcbmltcG9ydCB7bWFwVG9vbH0gZnJvbSBcIi4vbWFwVG9vbC5qc1wiXHJcbnZhciB0aW1lcl9nZXRMb2N0aW9uPW51bGxcclxudmFyIHRpbWVyX3VwTG9jdGlvbj17fVxyXG52YXIgdXBMb2N0aW9uRGF0YT17fVxyXG52YXIgc3ViTnZ1ZT17fVxyXG52YXIgdGFza0luZm89e31cclxudmFyIHBvbGx1dGlvbkluZm89e31cclxudmFyIHVwVGltZU51bT0zMDAwMDBcclxudmFyIHNpdHVhdGlvbkRhdGU9e31cclxuLy8gdmFyIGFycldyeT1bXHJcbi8vIFx0XCJXUllfQlpfTElTVFwiLFxyXG4vLyBcdFwiV1JZX0NPTVBBTllfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1JIS1BXS19MSVNUXCIsXHJcbi8vIFx0XCJXUllfUkhLUFdEX0xJU1RcIixcclxuLy8gXHRcIldSWV9KWkdEX0xJU1RcIixcclxuLy8gXHRcIldSWV9RVEhZX0xJU1RcIixcclxuLy8gXHRcIldSWV9KQ0RXX0xJU1RcIixcclxuLy8gXHRcIldSWV9ZTEpHX0xJU1RcIixcclxuLy8gXHRcIldSWV9YUVlaX0xJU1RcIixcclxuLy8gXHRcIldSWV9UWkNfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1NIVUlLVV9MSVNUXCIsXHJcbi8vIFx0XCJXUllfU1BUX0xJU1RcIixcclxuLy8gXHRcIldSWV9ZWUNfTElTVFwiLFxyXG4vLyBcdFwiV1JZX0pNSlpKWkRfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1hTTFdfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1hDQ19MSVNUXCIsXHJcbi8vIFx0XCJXUllfQ1lIWV9MSVNUXCIsXHJcbi8vIFx0XCJXUllfTk1TQ19MSVNUXCIsXHJcbi8vIFx0XCJXUllfV1NDTENfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1paWUZMREpEX0xJU1RcIixcclxuLy8gXHRcIldSWV9TTVlTWVpESF9MSVNUXCJcclxuLy8gXVxyXG5mdW5jdGlvbiBnZXRSZXF1ZXN0KHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHVuaS5zaG93TG9hZGluZyh7bWFzazp0cnVlfSlcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdGRhdGE6IGRhdGEsXHJcblx0XHRtZXRob2Q6XCJHRVRcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdGNvbXBsZXRlOihyZXMpID0+e1xyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRpZighcmVzLmRhdGEpe1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKCk6XCJcIlxyXG5cdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0dGl0bGU6cmVzLmRhdGEubXNnfHxcIuaVsOaNruW8guW4uFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlcXVlc3RQYyh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVybCxcclxuXHRcdGRhdGE6IGRhdGEsXHJcblx0XHRtZXRob2Q6XCJHRVRcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdGNvbXBsZXRlOihyZXMpID0+e1xyXG5cdFx0XHRpZighcmVzLmRhdGEpe1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKCk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlcXVlc3RObyh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVybCxcclxuXHRcdGRhdGE6IGRhdGEsXHJcblx0XHRtZXRob2Q6XCJHRVRcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdGNvbXBsZXRlOihyZXMpID0+e1xyXG5cdFx0XHRpZighcmVzLmRhdGEpe1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKCk6XCJcIlxyXG5cdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RSZXF1ZXN0Tm8odXJsLGRhdGEsY2FsbCxlcnJvcil7XHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0bWV0aG9kOlwiUE9TVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0Ly8gaWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9jYWxsKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdC8vIH1lbHNle1xyXG5cdFx0XHRcdC8vIHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdC8vIH1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcG9zdFJlcXVlc3QodXJsLGRhdGEsY2FsbCxlcnJvcil7XHJcblx0dW5pLnNob3dMb2FkaW5nKHttYXNrOnRydWV9KVxyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIlBPU1RcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuXHRcdFx0dG9rZW5cclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZToocmVzKSA9PntcclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0aWYoIXJlcy5kYXRhKXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcigpOlwiXCJcclxuXHRcdFx0fWVsc2UgaWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9jYWxsKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdHRpdGxlOnJlcy5kYXRhLm1zZ3x8XCLmlbDmja7lvILluLhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGxldGVUYXNrKGRhdGEpey8v5a6M5oiQ5beh5p+l5rGh5p+T5rqQ5Lu75YqhXHJcblx0dXBJbWdUZWFtcyhkYXRhLnBvaW50UGhvdG8sZnVuY3Rpb24ocmVzdWx0cyxpbmRleCl7XHJcblx0XHRkYXRhLnBvaW50UGhvdG89cmVzdWx0c1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSlcclxuXHRcdHRvQ29tcGxldGVUYXNrKFVSTC5UQVNLX1BBVFJPTF9QT0lOVF9VUERBVEUsZGF0YSlcclxuXHR9LDEsKHJlc3VsdHMpPT57XHJcblx0XHRjb21wbGV0ZVRhc2soZGF0YSlcclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHJlY3RpZmljYXRpb25UYXNrRGV0YWlsKGRhdGEpey8v5a6M5oiQ5pW05pS55Lu75YqhXHJcblx0dXBJbWdUZWFtcyhkYXRhLnJlY3RpZmljYXRpb25QaG90byxmdW5jdGlvbihyZXN1bHRzLGluZGV4KXtcclxuXHRcdGRhdGEucmVjdGlmaWNhdGlvblBob3RvPXJlc3VsdHNcclxuXHRcdHRvQ29tcGxldGVUYXNrKFVSTC5UQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFLGRhdGEpXHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiB1cFByb2JsZW1UZWFtcyhkYXRhKXsvL+S4iuS8oOWkmuS4qumXrumimFxyXG5cdHZhciBwcm9ibGVtVGVhbXM9MFxyXG5cdGZvcih2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKXtcclxuXHRcdGlmKGRhdGFbaV0ucHJvYmxlbVBob3RvKXtcclxuXHRcdFx0cHJvYmxlbVRlYW1zKytcclxuXHRcdFx0dXBJbWdUZWFtcyhkYXRhW2ldLnByb2JsZW1QaG90byxmdW5jdGlvbihyZXN1bHRzLGluZGV4KXtcclxuXHRcdFx0XHRwcm9ibGVtVGVhbXMtLVxyXG5cdFx0XHRcdGRhdGFbaW5kZXhdLnByb2JsZW1QaG90bz1yZXN1bHRzXHJcblx0XHRcdFx0aWYocHJvYmxlbVRlYW1zPT0wKXtcclxuXHRcdFx0XHRcdGRhdGE9SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuXHRcdFx0XHRcdHRvVXBQcm9ibGVtKFVSTC5UQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0FERF9CQVRDSCxkYXRhKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxpLChyZXN1bHRzKT0+e1xyXG5cdFx0XHRcdHVwUHJvYmxlbVRlYW1zKGRhdGEpXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIHRvQ29tcGxldGVUYXNrKHVybCxkYXRhKXsvL+S4iuS8oOmXrumimOaIluiAheWujOaIkOeCueS9jeW3oeafpVxyXG5cdC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcblx0Z2V0UmVxdWVzdE5vKHVybCxkYXRhLChyZXN1bHRzKT0+e1xyXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0cylcclxuXHR9LChyZXN1bHRzKT0+e1xyXG5cdFx0dG9Db21wbGV0ZVRhc2sodXJsLGRhdGEpXHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiB0b1VwUHJvYmxlbSh1cmwsZGF0YSl7Ly/kuIrkvKDpl67popjmiJbogIXlrozmiJDngrnkvY3lt6Hmn6VcclxuXHRnZXRSZXF1ZXN0Tm8odXJsLHtkYXRhfSwocmVzdWx0cyk9PntcclxuXHRcdGNvbnNvbGUubG9nKFwi5LiK5Lyg5oiQ5YqfXCIpXHJcblx0fSwocmVzdWx0cyk9PntcclxuXHRcdHRvVXBQcm9ibGVtKHVybCxkYXRhKVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBJbWdUZWFtcyhpbWdzLGNhbGwsaW5kZXgsZXJyb3Ipey8v5LiK5Lyg5aSa5byg5Zu+54mHXHJcblx0dmFyIGltZ3M9aW1ncy5zcGxpdChcIjtcIilcclxuXHR2YXIgcGljdHVyZT1bXVxyXG5cdHZhciBpbWdUZWFtcz0wXHJcblx0Zm9yKHZhciBpPTA7aTxpbWdzLmxlbmd0aDtpKyspe1xyXG5cdFx0aW1nVGVhbXMrK1xyXG5cdFx0dXBsb2FkRmlsZShVUkwuVVBMT0FEX1VQTE9BRCxpbWdzW2ldLChyZXN1bHRzKT0+e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG5cdFx0XHRyZXN1bHRzPUpTT04ucGFyc2UocmVzdWx0cylcclxuXHRcdFx0cGljdHVyZS5wdXNoKHJlc3VsdHMuZGF0YSk7XHJcblx0XHRcdGltZ1RlYW1zLS1cclxuXHRcdFx0aWYoaW1nVGVhbXM9PTApe1xyXG5cdFx0XHRcdHBpY3R1cmU9cGljdHVyZS5qb2luKFwiO1wiKVxyXG5cdFx0XHRcdGNhbGwocGljdHVyZSxpbmRleClcclxuXHRcdFx0fVxyXG5cdFx0fSwocmVzdWx0cyk9PntcclxuXHRcdFx0ZXJyb3IocmVzdWx0cylcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRGaWxlKHVybCxkYXRhLGNhbGwsZXJyb3Ipey8v5LiK5Lyg5Zu+54mHXHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0dXJsOiB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0XHRmaWxlVHlwZTpcImltYWdlXCIsXHJcblx0XHRmaWxlUGF0aDpkYXRhLFxyXG5cdFx0bmFtZTpcImZpbGVcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdHN1Y2Nlc3M6IChyZXMpID0+IHsgXHJcblx0XHRcdGlmKHJlcy5kYXRhIT1cIjAwMDAwMFwiKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZmFpbChyZXMpe1xyXG5cdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihkYXRhKTpcIlwiXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiBzaG93U3VjY2Vzcyhtc2csY2FsbCl7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOlwic3VjY2Vzc1wiLFxyXG5cdFx0dGl0bGU6bXNnXHJcblx0fSlcclxuXHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP3NldFRpbWVvdXQoY2FsbCwxNTAwKTpcIlwiXHJcbn1cclxuY29uc3QgaXNSZWZyZXNoVGFza3NQYWdlPXRydWVcclxuXHJcbmNvbnN0IGlzUmVmcmVzaFBvbGx1dGlvblBhZ2U9dHJ1ZVxyXG5cclxuY29uc3Qgd2ViU29ja2V0PWZ1bmN0aW9uKGlkKXtcclxuXHR1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHR1cmw6IFVSTC5XRUJTT0NLRVQraWQsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZDogJ0dFVCdcclxuXHR9KVxyXG59XHJcbnVuaS5vblNvY2tldE9wZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXlt7LmiZPlvIDvvIEnKTtcclxufSk7XHJcblxyXG52YXIgZ2V0TG9jYXRpb249ZnVuY3Rpb24oKXtcclxuXHR0aW1lcl9nZXRMb2N0aW9uPXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHR1bmkuZ2V0TG9jYXRpb24oe1xyXG5cdFx0XHR0eXBlOlwid2dzODRcIixcclxuXHRcdFx0c3VjY2VzcyhyZXMpe1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJMb2NhdGlvblwiLHtsb25naXR1ZGU6cmVzLmxvbmdpdHVkZSxsYXRpdHVkZTpyZXMubGF0aXR1ZGV9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsKHJlcyl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKSBcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyX2dldExvY3Rpb24pXHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTpcIuiOt+WPluWumuS9jeadg+mZkOWksei0pVwiLFxyXG5cdFx0XHRcdFx0Y29udGVudDpcIuivt+aJk+W8gOaJi+acuuWumuS9jeadg+mZkFwiLFxyXG5cdFx0XHRcdFx0c2hvd0NhbmNlbDpmYWxzZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmNvbmZpcm0pXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJMb2NhdGlvblwiLHtsb25naXR1ZGU6MCxsYXRpdHVkZTowfSlcclxuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24oKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWwocmVzKXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSw1MDAwKVxyXG59XHJcblxyXG52YXIgdW5VcExvY3Rpb249ZnVuY3Rpb24oaWQpe1xyXG5cdGlmKCEhdGltZXJfdXBMb2N0aW9uW2lkXSl7XHJcblx0XHRjbGVhckludGVydmFsKHRpbWVyX3VwTG9jdGlvbltpZF0pXHJcblx0fVxyXG59XHJcbnZhciB1bkdldExvY2F0aW9uPWZ1bmN0aW9uKCl7XHJcblx0Y2xlYXJJbnRlcnZhbCh0aW1lcl9nZXRMb2N0aW9uKVxyXG59XHJcbnZhciB1cExvY3Rpb249ZnVuY3Rpb24oaWQpe1xyXG5cdHRpbWVyX3VwTG9jdGlvbltpZF09c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdHZhciB1c2VyTG9jYXRpb249dW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckxvY2F0aW9uXCIpXHJcblx0XHR2YXIgZGF0YT17XHJcblx0XHRcdHBhdHJvbFRhc2tJZDppZCxcclxuXHRcdFx0bG9uZ2l0dWRlOnVzZXJMb2NhdGlvbi5sb25naXR1ZGUsXHJcblx0XHRcdGxhdGl0dWRlOnVzZXJMb2NhdGlvbi5sYXRpdHVkZSxcclxuXHRcdH1cclxuXHRcdHZhciB1cERhdGE9dXBMb2N0aW9uRGF0YVtpZF0/dXBMb2N0aW9uRGF0YVtpZF06W11cclxuXHRcdHZhciBkYXRlPW5ldyBEYXRlKClcclxuXHRcdHVwRGF0YS5wdXNoKHtcclxuXHRcdFx0cGF0cm9sVGFza0lkOmlkLFxyXG5cdFx0XHRsb25naXR1ZGU6dXNlckxvY2F0aW9uLmxvbmdpdHVkZSxcclxuXHRcdFx0bGF0aXR1ZGU6dXNlckxvY2F0aW9uLmxhdGl0dWRlLFxyXG5cdFx0XHRsb2NhdGlvblRpbWU6ZGF0ZS5nZXRUaW1lKClcclxuXHRcdH0pXHJcblx0XHR1cExvY3Rpb25EYXRhW2lkXT11cERhdGFcclxuXHRcdHBvc3RSZXF1ZXN0Tm8oVVJMLlRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENILHtkYXRhOkpTT04uc3RyaW5naWZ5KHVwRGF0YSksaWQ6aWR9LChyZXN1bHRzKT0+e1xyXG5cdFx0XHRpZihyZXN1bHRzLmNvZGU9PTIpe1xyXG5cdFx0XHRcdHVuVXBMb2N0aW9uKGlkKVxyXG5cdFx0XHRcdHZhciBvblRhc2s9dW5pLmdldFN0b3JhZ2VTeW5jKFwib25UYXNrXCIpP3VuaS5nZXRTdG9yYWdlU3luYyhcIm9uVGFza1wiKTpbXTtcclxuXHRcdFx0XHRvblRhc2suc3BsaWNlKG9uVGFzay5pbmRleE9mKHRoaXMudGFza0lkKSlcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJvblRhc2tcIixvblRhc2spO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVwTG9jdGlvbkRhdGFbaWRdPVtdIFxyXG5cdFx0fSkgXHJcblx0fSx1cFRpbWVOdW0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b05hdmlnYXRpb24obG9uZ2l0dWRlLGxhdGl0dWRlKXsvL+WvvOiIqlxyXG5cdC8vIOWIpOaWreW5s+WPsCAgXHJcblx0dmFyIHdnczg0dG9nY2owMj1tYXBUb29sLndnczg0dG9nY2owMihsb25naXR1ZGUsbGF0aXR1ZGUpXHJcblx0bG9uZ2l0dWRlPXdnczg0dG9nY2owMlswXVxyXG5cdGxhdGl0dWRlPXdnczg0dG9nY2owMlsxXVxyXG5cdGlmIChwbHVzLm9zLm5hbWUgPT0gJ0FuZHJvaWQnKSB7ICBcclxuXHRcdHBsdXMucnVudGltZS5vcGVuVVJMKFwiYW1hcHVyaTovL3JvdXRlL3BsYW4vP3NpZD1CR1ZJUzEmZGlkPUJHVklTMiZkbGF0PVwiK2xhdGl0dWRlK1wiJmRsb249XCIrbG9uZ2l0dWRlK1wiJmRldj0wJnQ9MFwiLCAgXHJcblx0XHRcdGZ1bmN0aW9uKGUpIHsgIFxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdHRpdGxlOlwi6K+35LiL56Gu6K6k5omL5py65a6J6KOF5LqG6auY5b635Zyw5Zu+XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdPcGVuIHN5c3RlbSBkZWZhdWx0IGJyb3dzZXIgZmFpbGVkOiAnICsgZS5tZXNzYWdlKTsgIFxyXG5cdFx0XHR9LFwiY29tLmF1dG9uYXZpLm1pbmltYXBcIlxyXG5cdFx0KTtcclxuXHR9IGVsc2UgaWYgKHBsdXMub3MubmFtZSA9PSAnaU9TJykgeyAgXHJcblx0XHRwbHVzLnJ1bnRpbWUubGF1bmNoQXBwbGljYXRpb24oeyBhY3Rpb246XCJpb3NhbWFwOi8vcGF0aD9zb3VyY2VBcHBsaWNhdGlvbj1hcHBsaWNhdGlvbk5hbWUmc2lkPUJHVklTMSZkaWQ9QkdWSVMyJmRsYXQ9XCIrbGF0aXR1ZGUrXCImZGxvbj1cIitsb25naXR1ZGUrXCImZGV2PTAmdD0wXCIgfSwgZnVuY3Rpb24oZSkgeyAgXHJcblx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0dGl0bGU6XCLor7fkuIvnoa7orqTmiYvmnLrlronoo4Xkuobpq5jlvrflnLDlm75cIlxyXG5cdFx0XHR9KVxyXG5cdFx0XHRjb25zb2xlLmxvZygnT3BlbiBzeXN0ZW0gZGVmYXVsdCBicm93c2VyIGZhaWxlZDogJyArIGUubWVzc2FnZSk7ICBcclxuXHRcdH0pOyAgXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXcnlUeXBlTmFtZSh0eXBlKXtcclxuXHR2YXIgbmFtZT1cIi1cIlxyXG5cdHN3aXRjaCh0eXBlKXtcclxuXHRcdGNhc2UgXCJiZW5nemhhblwiOlxyXG5cdFx0XHRuYW1lPVwi5rO156uZXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImNhbnlpbmhhbmd5ZVwiOlxyXG5cdFx0XHRuYW1lPVwi6aSQ6aWu6KGM5LiaXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImd5cXlcIjpcclxuXHRcdFx0bmFtZT1cIuW3peS4muS8geS4mlwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ4cXl6XCI6XHJcblx0XHRcdG5hbWU9XCLnpr3nlZzlhbvmrpZcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiamNkd1wiOlxyXG5cdFx0XHRuYW1lPVwi55uR5rWL54K55L2NXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImppYW56aHVnb25nZGlcIjpcclxuXHRcdFx0bmFtZT1cIuW7uuetkeW3peWcsFwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJqbWp6anpkXCI6XHJcblx0XHRcdG5hbWU9XCLlsYXmsJHpm4bkuK3lsYXkvY/ngrlcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwibm9uZ21hb3NoaWNoYW5nXCI6XHJcblx0XHRcdG5hbWU9XCLlhpzotLjluILlnLpcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicXRoeVwiOlxyXG5cdFx0XHRuYW1lPVwi5YW25LuW6KGM5LiaXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInJoa3B3ZFwiOlxyXG5cdFx0XHRuYW1lPVwi5YWl5rKzKOW6kynmjpLmsaHngrlcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwid3NjbGNcIjpcclxuXHRcdFx0bmFtZT1cIuaxoeawtOmbhuS4reWkhOeQhuiuvuaWvVwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzaGFucGluZ3RhbmdcIjpcclxuXHRcdFx0bmFtZT1cIuWxseWdquWhmFwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzaHVpa3VcIjpcclxuXHRcdFx0bmFtZT1cIuawtOW6k1wiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzbXlzeXpkaFwiOlxyXG5cdFx0XHRuYW1lPVwi5Y2B5Lqp5Lul5LiK56eN5qSN5aSn5oi3XCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInR6Y1wiOlxyXG5cdFx0XHRuYW1lPVwi5bGg5a6w5Zy6XCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInhpYW9zYW5sdWFud3VcIjpcclxuXHRcdFx0bmFtZT1cIuWwj+aVo+S5seaxoVwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ4aWNoZWNoYW5nXCI6XHJcblx0XHRcdG5hbWU9XCLmtJfovablnLpcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwieWFuZ3l1Y2hpXCI6XHJcblx0XHRcdG5hbWU9XCLlhbvpsbzmsaBcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwieWlsaWFvamlnb3VcIjpcclxuXHRcdFx0bmFtZT1cIuWMu+eWl+acuuaehFwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ6enlmbGRqZFwiOlxyXG5cdFx0XHRuYW1lPVwi56eN5qSN5Lia6IKl5paZ5aCG56ev54K5XCJcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxuXHRyZXR1cm4gbmFtZVxyXG59XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0V3J5TWFwKCl7XHJcbi8vIFx0Zm9yICh2YXIgaT0wO2k8YXJyV3J5Lmxlbmd0aDtpKyspIHtcclxuLy8gXHRcdChmdW5jdGlvbih1cmwpe1xyXG4vLyBcdFx0XHRnZXRSZXF1ZXN0UGMoVVJMW3VybF0sXCJcIiwocmVzdWx0cyk9PntcclxuLy8gXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmModXJsLHJlc3VsdHMpXHJcbi8vIFx0XHRcdH0pXHRcclxuLy8gXHRcdH0pKGFycldyeVtpXSlcclxuLy8gXHR9XHJcbi8vIH1cclxubW9kdWxlLmV4cG9ydHM9eyAgXHJcblx0Z2V0UmVxdWVzdCxcclxuXHRnZXRSZXF1ZXN0Tm8sXHJcblx0Z2V0UmVxdWVzdFBjLFxyXG5cdHBvc3RSZXF1ZXN0LCAgXHJcblx0cG9zdFJlcXVlc3RObyxcclxuXHR1cGxvYWRGaWxlLFxyXG5cdHNob3dTdWNjZXNzLFxyXG5cdGlzUmVmcmVzaFRhc2tzUGFnZSxcclxuXHRpc1JlZnJlc2hQb2xsdXRpb25QYWdlLFxyXG5cdHdlYlNvY2tldCxcclxuXHR1cExvY3Rpb24sXHJcblx0dW5HZXRMb2NhdGlvbixcclxuXHR1blVwTG9jdGlvbixcclxuXHRnZXRMb2NhdGlvbixcclxuXHR1cFByb2JsZW1UZWFtcyxcclxuXHRjb21wbGV0ZVRhc2ssXHJcblx0cmVjdGlmaWNhdGlvblRhc2tEZXRhaWwsXHJcblx0c3ViTnZ1ZSxcclxuXHQvLyBnZXRXcnlNYXAsXHJcblx0dGFza0luZm8sXHJcblx0cG9sbHV0aW9uSW5mbyxcclxuXHR1cFRpbWVOdW0sXHJcblx0b25UYXNrTnVtOjAsXHJcblx0dW5UYXNrTnVtOjAsXHJcblx0c2l0dWF0aW9uRGF0ZSxcclxuXHR0b05hdmlnYXRpb24sXHJcblx0Z2V0V3J5VHlwZU5hbWVcclxufSIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XHJcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoLi4uYXJncykge1xyXG4gIGNvbnN0IG1zZ3MgPSBhcmdzLm1hcCgodikgPT4ge1xyXG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHYgPT09IG51bGwpIHtcclxuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXHJcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XHJcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZcclxuICB9KVxyXG4gIGxldCBtc2cgPSAnJ1xyXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcclxuICAgIGNvbnN0IGxhc3RNc2cgPSBtc2dzLnBvcCgpXHJcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcclxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xyXG4gICAgICBtc2cgKz0gbGFzdE1zZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1zZyA9IG1zZ3NbMF1cclxuICB9XHJcbiAgcmV0dXJuIG1zZ1xyXG59XG4iLCJmdW5jdGlvbiBtYXBUb29sKCkgeyAgXHJcbiAgICB0aGlzLnhfUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzI0ICogMzAwMC4wIC8gMTgwLjAsICBcclxuICAgIHRoaXMuUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjYsICBcclxuICAgIHRoaXMuZWUgPSAwLjAwNjY5MzQyMTYyMjk2NTk0MzIzLCAgXHJcbiAgICB0aGlzLmEgPSA2Mzc4MjQ1LjA7ICBcclxufSAgXHJcbi8qKiAgXHJcbiAqIEdDSjAyIOi9rOaNouS4uiBXR1M4NCAgXHJcbiAqIEBwYXJhbSBsbmcgIFxyXG4gKiBAcGFyYW0gbGF0ICBcclxuICogQHJldHVybnMgeypbXX0gIFxyXG4gKi8gIFxyXG5tYXBUb29sLnByb3RvdHlwZS5nY2owMnRvd2dzODQgPSBmdW5jdGlvbihsbmcsIGxhdCkgeyAgXHJcbiAgICAgICAgaWYgKHRoaXMub3V0X29mX2NoaW5hKGxuZywgbGF0KSkgeyAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbG5nLCBsYXRdICBcclxuICAgICAgICB9IGVsc2UgeyAgXHJcbiAgICAgICAgICAgIGxldCBkbGF0ID0gdGhpcy50cmFuc2Zvcm1sYXQobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApOyAgXHJcbiAgICAgICAgICAgIGxldCBkbG5nID0gdGhpcy50cmFuc2Zvcm1sbmcobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApOyAgXHJcbiAgICAgICAgICAgIGxldCByYWRsYXQgPSBsYXQgLyAxODAuMCAqIHRoaXMuUEk7ICBcclxuICAgICAgICAgICAgbGV0IG1hZ2ljID0gTWF0aC5zaW4ocmFkbGF0KTsgIFxyXG4gICAgICAgICAgICBtYWdpYyA9IDEgLSB0aGlzLmVlICogbWFnaWMgKiBtYWdpYzsgIFxyXG4gICAgICAgICAgICBsZXQgc3FydG1hZ2ljID0gTWF0aC5zcXJ0KG1hZ2ljKTsgIFxyXG4gICAgICAgICAgICBkbGF0ID0gKGRsYXQgKiAxODAuMCkgLyAoKHRoaXMuYSAqICgxIC0gdGhpcy5lZSkpIC8gKG1hZ2ljICogc3FydG1hZ2ljKSAqIHRoaXMuUEkpOyAgXHJcbiAgICAgICAgICAgIGRsbmcgPSAoZGxuZyAqIDE4MC4wKSAvICh0aGlzLmEgLyBzcXJ0bWFnaWMgKiBNYXRoLmNvcyhyYWRsYXQpICogdGhpcy5QSSk7ICBcclxuICAgICAgICAgICAgbGV0IG1nbGF0ID0gbGF0ICsgZGxhdDsgIFxyXG4gICAgICAgICAgICBsZXQgbWdsbmcgPSBsbmcgKyBkbG5nOyAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbG5nICogMiAtIG1nbG5nLCBsYXQgKiAyIC0gbWdsYXRdICBcclxuICAgICAgICB9ICBcclxuICAgIH0gIFxyXG4gICAgLyoqICBcclxuICAgICAqIOeBq+aYn+WdkOagh+ezuyAoR0NKLTAyKSDkuI7nmb7luqblnZDmoIfns7sgKEJELTA5KSDnmoTovazmjaIgIFxyXG4gICAgICog5Y2z6LC35q2M44CB6auY5b63IOi9rCDnmb7luqYgIFxyXG4gICAgICogQHBhcmFtIGxuZyAgXHJcbiAgICAgKiBAcGFyYW0gbGF0ICBcclxuICAgICAqIEByZXR1cm5zIHsqW119ICBcclxuICAgICAqLyAgXHJcbiAgICBtYXBUb29sLnByb3RvdHlwZS5nY2owMnRvYmQwOSA9IGZ1bmN0aW9uKGxuZywgbGF0KSB7ICBcclxuICAgICAgICBsZXQgeiA9IE1hdGguc3FydChsbmcgKiBsbmcgKyBsYXQgKiBsYXQpICsgMC4wMDAwMiAqIE1hdGguc2luKGxhdCAqIHRoaXMueF9QSSk7ICBcclxuICAgICAgICBsZXQgdGhldGEgPSBNYXRoLmF0YW4yKGxhdCwgbG5nKSArIDAuMDAwMDAzICogTWF0aC5jb3MobG5nICogdGhpcy54X1BJKTsgIFxyXG4gICAgICAgIGxldCBiZF9sbmcgPSB6ICogTWF0aC5jb3ModGhldGEpICsgMC4wMDY1OyAgXHJcbiAgICAgICAgbGV0IGJkX2xhdCA9IHogKiBNYXRoLnNpbih0aGV0YSkgKyAwLjAwNjsgIFxyXG4gICAgICAgIHJldHVybiBbYmRfbG5nLCBiZF9sYXRdICBcclxuICAgIH0gIFxyXG4gICAgLyoqICBcclxuICAgICAqIFdHUzg06L2sR0NqMDIgIFxyXG4gICAgICogQHBhcmFtIGxuZyAgXHJcbiAgICAgKiBAcGFyYW0gbGF0ICBcclxuICAgICAqIEByZXR1cm5zIHsqW119ICBcclxuICAgICAqLyAgXHJcbiAgICBtYXBUb29sLnByb3RvdHlwZS53Z3M4NHRvZ2NqMDIgPSBmdW5jdGlvbihsbmcsIGxhdCkgeyAgXHJcblx0XHRsbmc9bG5nKjFcclxuXHRcdGxhdD1sYXQqMVxyXG4gICAgICAgIGlmICh0aGlzLm91dF9vZl9jaGluYShsbmcsIGxhdCkpIHsgIFxyXG4gICAgICAgICAgICByZXR1cm4gW2xuZywgbGF0XSAgXHJcbiAgICAgICAgfSBlbHNlIHsgIFxyXG4gICAgICAgICAgICBsZXQgZGxhdCA9IHRoaXMudHJhbnNmb3JtbGF0KGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTsgIFxyXG4gICAgICAgICAgICBsZXQgZGxuZyA9IHRoaXMudHJhbnNmb3JtbG5nKGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTsgIFxyXG4gICAgICAgICAgICBsZXQgcmFkbGF0ID0gbGF0IC8gMTgwLjAgKiB0aGlzLlBJOyAgXHJcbiAgICAgICAgICAgIGxldCBtYWdpYyA9IE1hdGguc2luKHJhZGxhdCk7ICBcclxuICAgICAgICAgICAgbWFnaWMgPSAxIC0gdGhpcy5lZSAqIG1hZ2ljICogbWFnaWM7ICBcclxuICAgICAgICAgICAgbGV0IHNxcnRtYWdpYyA9IE1hdGguc3FydChtYWdpYyk7ICBcclxuICAgICAgICAgICAgZGxhdCA9IChkbGF0ICogMTgwLjApIC8gKCh0aGlzLmEgKiAoMSAtIHRoaXMuZWUpKSAvIChtYWdpYyAqIHNxcnRtYWdpYykgKiB0aGlzLlBJKTsgIFxyXG4gICAgICAgICAgICBkbG5nID0gKGRsbmcgKiAxODAuMCkgLyAodGhpcy5hIC8gc3FydG1hZ2ljICogTWF0aC5jb3MocmFkbGF0KSAqIHRoaXMuUEkpOyAgXHJcbiAgICAgICAgICAgIGxldCBtZ2xhdCA9IGxhdCArIGRsYXQ7ICBcclxuICAgICAgICAgICAgbGV0IG1nbG5nID0gbG5nICsgZGxuZzsgIFxyXG4gICAgICAgICAgICByZXR1cm4gW21nbG5nLCBtZ2xhdF0gIFxyXG4gICAgICAgIH0gIFxyXG4gICAgfSAgXHJcbiAgICAvKiogIFxyXG4gICAgICogR0NKMDIg6L2s5o2i5Li6IFdHUzg0ICBcclxuICAgICAqIEBwYXJhbSBsbmcgIFxyXG4gICAgICogQHBhcmFtIGxhdCAgXHJcbiAgICAgKiBAcmV0dXJucyB7KltdfSAgXHJcbiAgICAgKi8gIFxyXG4gICAgbWFwVG9vbC5wcm90b3R5cGUuZ2NqMDJ0b3dnczg0ID0gZnVuY3Rpb24obG5nLCBsYXQpIHsgIFxyXG4gICAgICAgIGlmICh0aGlzLm91dF9vZl9jaGluYShsbmcsIGxhdCkpIHsgIFxyXG4gICAgICAgICAgICByZXR1cm4gW2xuZywgbGF0XSAgXHJcbiAgICAgICAgfSBlbHNlIHsgIFxyXG4gICAgICAgICAgICBsZXQgZGxhdCA9IHRoaXMudHJhbnNmb3JtbGF0KGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTsgIFxyXG4gICAgICAgICAgICBsZXQgZGxuZyA9IHRoaXMudHJhbnNmb3JtbG5nKGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTsgIFxyXG4gICAgICAgICAgICBsZXQgcmFkbGF0ID0gbGF0IC8gMTgwLjAgKiB0aGlzLlBJOyAgXHJcbiAgICAgICAgICAgIGxldCBtYWdpYyA9IE1hdGguc2luKHJhZGxhdCk7ICBcclxuICAgICAgICAgICAgbWFnaWMgPSAxIC0gdGhpcy5lZSAqIG1hZ2ljICogbWFnaWM7ICBcclxuICAgICAgICAgICAgbGV0IHNxcnRtYWdpYyA9IE1hdGguc3FydChtYWdpYyk7ICBcclxuICAgICAgICAgICAgZGxhdCA9IChkbGF0ICogMTgwLjApIC8gKCh0aGlzLmEgKiAoMSAtIHRoaXMuZWUpKSAvIChtYWdpYyAqIHNxcnRtYWdpYykgKiB0aGlzLlBJKTsgIFxyXG4gICAgICAgICAgICBkbG5nID0gKGRsbmcgKiAxODAuMCkgLyAodGhpcy5hIC8gc3FydG1hZ2ljICogTWF0aC5jb3MocmFkbGF0KSAqIHRoaXMuUEkpOyAgXHJcbiAgICAgICAgICAgIGxldCBtZ2xhdCA9IGxhdCArIGRsYXQ7ICBcclxuICAgICAgICAgICAgbGV0IG1nbG5nID0gbG5nICsgZGxuZzsgIFxyXG4gICAgICAgICAgICByZXR1cm4gW2xuZyAqIDIgLSBtZ2xuZywgbGF0ICogMiAtIG1nbGF0XSAgXHJcbiAgICAgICAgfSAgXHJcbiAgICB9IFxyXG4gICAgbWFwVG9vbC5wcm90b3R5cGUudHJhbnNmb3JtbGF0ID0gZnVuY3Rpb24obG5nLCBsYXQpIHsgIFxyXG4gICAgICAgIGxldCByZXQgPSAtMTAwLjAgKyAyLjAgKiBsbmcgKyAzLjAgKiBsYXQgKyAwLjIgKiBsYXQgKiBsYXQgKyAwLjEgKiBsbmcgKiBsYXQgKyAwLjIgKiBNYXRoLnNxcnQoTWF0aC5hYnMobG5nKSk7ICBcclxuICAgICAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiBsbmcgKiB0aGlzLlBJKSArIDIwLjAgKiBNYXRoLnNpbigyLjAgKiBsbmcgKiB0aGlzLlBJKSkgKiAyLjAgLyAzLjA7ICBcclxuICAgICAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbihsYXQgKiB0aGlzLlBJKSArIDQwLjAgKiBNYXRoLnNpbihsYXQgLyAzLjAgKiB0aGlzLlBJKSkgKiAyLjAgLyAzLjA7ICBcclxuICAgICAgICByZXQgKz0gKDE2MC4wICogTWF0aC5zaW4obGF0IC8gMTIuMCAqIHRoaXMuUEkpICsgMzIwICogTWF0aC5zaW4obGF0ICogdGhpcy5QSSAvIDMwLjApKSAqIDIuMCAvIDMuMDsgIFxyXG4gICAgICAgIHJldHVybiByZXQgIFxyXG4gICAgfSAgXHJcbiAgICBtYXBUb29sLnByb3RvdHlwZS50cmFuc2Zvcm1sbmcgPSBmdW5jdGlvbihsbmcsIGxhdCkgeyAgXHJcbiAgICAgICAgbGV0IHJldCA9IDMwMC4wICsgbG5nICsgMi4wICogbGF0ICsgMC4xICogbG5nICogbG5nICsgMC4xICogbG5nICogbGF0ICsgMC4xICogTWF0aC5zcXJ0KE1hdGguYWJzKGxuZykpOyAgXHJcbiAgICAgICAgcmV0ICs9ICgyMC4wICogTWF0aC5zaW4oNi4wICogbG5nICogdGhpcy5QSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogbG5nICogdGhpcy5QSSkpICogMi4wIC8gMy4wOyAgXHJcbiAgICAgICAgcmV0ICs9ICgyMC4wICogTWF0aC5zaW4obG5nICogdGhpcy5QSSkgKyA0MC4wICogTWF0aC5zaW4obG5nIC8gMy4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wOyAgXHJcbiAgICAgICAgcmV0ICs9ICgxNTAuMCAqIE1hdGguc2luKGxuZyAvIDEyLjAgKiB0aGlzLlBJKSArIDMwMC4wICogTWF0aC5zaW4obG5nIC8gMzAuMCAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDsgIFxyXG4gICAgICAgIHJldHVybiByZXQgIFxyXG4gICAgfSAgXHJcbiAgICAvKiogIFxyXG4gICAgICog5Yik5pat5piv5ZCm5Zyo5Zu95YaF77yM5LiN5Zyo5Zu95YaF5YiZ5LiN5YGa5YGP56e7ICBcclxuICAgICAqIEBwYXJhbSBsbmcgIFxyXG4gICAgICogQHBhcmFtIGxhdCAgXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gIFxyXG4gICAgICovICBcclxuICAgIG1hcFRvb2wucHJvdG90eXBlLm91dF9vZl9jaGluYSA9IGZ1bmN0aW9uKGxuZywgbGF0KSB7ICBcclxuICAgICAgICByZXR1cm4gKGxuZyA8IDcyLjAwNCB8fCBsbmcgPiAxMzcuODM0NykgfHwgKChsYXQgPCAwLjgyOTMgfHwgbGF0ID4gNTUuODI3MSkgfHwgZmFsc2UpOyAgXHJcbiAgICB9ICBcclxuICAgIG1vZHVsZS5leHBvcnRzLm1hcFRvb2wgPW5ldyBtYXBUb29sKCk7ICAiLCJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTIhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0zIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGU0YTU3YzImc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0yIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMyFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlNGE1N2MyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJzZWFyY2hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiaGVhZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN0FGRlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImhlYWRlcl9sZWZ0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIndpZHRoXCI6IFwiNjAwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJpbnBfY29udGVudFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYwMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwiaWNvbl9zZWFyY2hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiMjZcIixcbiAgICBcInJpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcInNlYXJjaF9saXN0XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInNlYXJjaF9saXN0X3JpZ2h0XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYzMFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2U1ZTVlNVwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCJcbiAgfSxcbiAgXCJzZWFyY2hfbGlzdF9yaWdodF90ZXh0MVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4XCJcbiAgfSxcbiAgXCJzZWFyY2hfbGlzdF9yaWdodF90ZXh0MlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0XCJcbiAgfSxcbiAgXCJzZWFyY2hfbGlzdF9yaWdodF9hZGRyZXNzXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyOVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwib25TZWFyY2hcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJub0RhdGFcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
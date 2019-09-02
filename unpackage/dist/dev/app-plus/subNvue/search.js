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
              this.__merge_style(__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page */ 19).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page */ 19).default)
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
// const url0="http://122.114.177.198"
var url0 = "http://183.230.23.21";
// const url0=uni.getStorageSync("url")?uni.getStorageSync("url"):"http://183.230.23.21"
var url = url0 + ":18082";
// const url=url0+":8082"
var url_PC = url + "/proxy/pc";
var daili = "http://10.117.80.201:8081/app";
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

var DAPINGSHUIZHI_SHUIZHITONGJI_KHLX = daili + "/dapingshuizhi/shuizhitongji_khlx"; //详情
var QUKONGSHUIZHITONGJI_HELIUSHUIZHITONGJI = daili + "/quKongShuiZhiTongJi/heLiuShuiZhiTongJi"; //详情

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
  url_PC: url_PC };

/***/ }),
/* 17 */
/*!*******************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/static/js/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__) {var _interface = _interopRequireDefault(__webpack_require__(/*! ./interface.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var timer_getLoction = null;
var timer_upLoction = {};
var upLoctionData = {};
var subNvue = {};
var taskInfo = {};
var pollutionInfo = {};
var upTimeNum = 300000;
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
        console.log(__f__(res.data, " at static\\js\\utils.js:49"));
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
    console.log(__f__(data, " at static\\js\\utils.js:151"));
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
  console.log(__f__(data, " at static\\js\\utils.js:182"));
  getRequestNo(url, data, function (results) {
    console.log(__f__("上传成功", " at static\\js\\utils.js:184"));
  }, function (results) {
    toCompleteTask(url, data);
  });
}
function toUpProblem(url, data) {//上传问题或者完成点位巡查
  getRequestNo(url, { data: data }, function (results) {
    console.log(__f__("上传成功", " at static\\js\\utils.js:191"));
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
  console.log(__f__('WebSocket连接已打开！', " at static\\js\\utils.js:263"));
});

var getLocation = function getLocation() {
  timer_getLoction = setInterval(function () {
    uni.getLocation({
      type: "wgs84",
      success: function success(res) {
        uni.setStorageSync("userLocation", { longitude: res.longitude, latitude: res.latitude });
      },
      fail: function fail(res) {
        console.log(__f__(res, " at static\\js\\utils.js:274"));
        clearInterval(timer_getLoction);
        uni.showModal({
          title: "获取定位权限失败",
          content: "请打开手机定位权限",
          showCancel: false,
          success: function success(res) {
            console.log(__f__(res.confirm, " at static\\js\\utils.js:281"));
            uni.setStorageSync("userLocation", { longitude: 0, latitude: 0 });
            getLocation();
          },
          fail: function fail(res) {
            console.log(__f__(res, " at static\\js\\utils.js:286"));
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
  getWryMap: getWryMap,
  taskInfo: taskInfo,
  pollutionInfo: pollutionInfo,
  upTimeNum: upTimeNum };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 18)["default"]))

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
/*!****************************************************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!./search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page */ 20);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_search_nvue_vue_type_style_index_0_id_0e4a57c2_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!G:/知行APP/pollutionMonitoring/subNvue/search.nvue?vue&type=style&index=0&id=0e4a57c2&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzPzI4NzciLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL21haW4uanM/YTY4MyIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT83M2IyIiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL3NlYXJjaC5udnVlP2ZmZTYiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvc2VhcmNoLm52dWU/MmU5MCIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT80NDM5IiwidW5pLWFwcDovLy9zdWJOdnVlL3NlYXJjaC5udnVlIiwidW5pLWFwcDovLy9zdGF0aWMvanMvaW50ZXJmYWNlLmpzIiwidW5pLWFwcDovLy9zdGF0aWMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9zZWFyY2gubnZ1ZT83NzViIiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL3NlYXJjaC5udnVlP2RkM2QiXSwibmFtZXMiOlsidXJsMCIsInVybCIsInVybF9QQyIsImRhaWxpIiwiV0VCU09DS0VUIiwiTE9HSU5fTE9HSU4iLCJUQVNLX0lOREVYIiwiVEFTS19JTkRFWDIiLCJUQVNLX1BST0NFU1MiLCJUQVNLX0ZJTklTSCIsIlRBU0tfTk9fU1RBUlQiLCJQUk9CTEVNX0xJU1QiLCJVUExPQURfVVBMT0FEIiwiREVQQVJUTUVOVF9HRVRfREVQVCIsIlRBU0tfUEFUUk9MX1BPSU5UX0NPTlRBQ1RMSVNUIiwiVEFTS19QQVRST0xfUE9JTlRfRklOSVNIX0xJU1QiLCJUQVNLX1BBVFJPTF9QT0lOVF9HRVRfQUxMX1BST0JMRU0iLCJUQVNLX1BBVFJPTF9QT0lOVF9HRVRfUFJPQkxFTSIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENIIiwiVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9MSVNUIiwiVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9MSVNUMiIsIlRBU0tfUEFUUk9MX1BPSU5UX1VQREFURSIsIlRBU0tfUEFUUk9MX1BPSU5UX05PUk1BTCIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0NFU1NfTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX1VQREFURV9XUllfQUREUkVTU19ERVRBSUxFRCIsIlRBU0tfUEFUUk9MX1BBVEhfQUREIiwiVEFTS19QQVRST0xfUEFUSF9BRERfQkFUQ0giLCJUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFX1NUQVRVUyIsIlRBU0tfUkVDVElGSUNBVElPTl9VUERBVEUiLCJUQVNLX1BBVFJPTF9VUERBVEVfU1RBVFVTIiwiVVNFUl9VUERBVEUiLCJQT0xMVVRJT05fU0VBUkNIIiwiREFQSU5HU0hVSVpISV9TSFVJWkhJVE9OR0pJX0tITFgiLCJRVUtPTkdTSFVJWkhJVE9OR0pJX0hFTElVU0hVSVpISVRPTkdKSSIsIkFTU0VTU19UT1dOX0xJU1QiLCJBU1NFU1NfREVQQVJUTUVOVF9MSVNUIiwiV1JZX0JaX0xJU1QiLCJXUllfQ09NUEFOWV9MSVNUIiwiV1JZX1JIS1BXS19MSVNUIiwiV1JZX1JIS1BXRF9MSVNUIiwiV1JZX0paR0RfTElTVCIsIldSWV9RVEhZX0xJU1QiLCJXUllfSkNEV19MSVNUIiwiV1JZX1lMSkdfTElTVCIsIldSWV9YUVlaX0xJU1QiLCJXUllfVFpDX0xJU1QiLCJXUllfU0hVSUtVX0xJU1QiLCJXUllfU1BUX0xJU1QiLCJXUllfWVlDX0xJU1QiLCJXUllfSk1KWkpaRF9MSVNUIiwiV1JZX1hTTFdfTElTVCIsIldSWV9YQ0NfTElTVCIsIldSWV9DWUhZX0xJU1QiLCJXUllfTk1TQ19MSVNUIiwiV1JZX1dTQ0xDX0xJU1QiLCJXUllfWlpZRkxESkRfTElTVCIsIldSWV9TTVlTWVpESF9MSVNUIiwibW9kdWxlIiwiZXhwb3J0cyIsInRpbWVyX2dldExvY3Rpb24iLCJ0aW1lcl91cExvY3Rpb24iLCJ1cExvY3Rpb25EYXRhIiwic3ViTnZ1ZSIsInRhc2tJbmZvIiwicG9sbHV0aW9uSW5mbyIsInVwVGltZU51bSIsImFycldyeSIsImdldFJlcXVlc3QiLCJkYXRhIiwiY2FsbCIsImVycm9yIiwidW5pIiwic2hvd0xvYWRpbmciLCJtYXNrIiwidG9rZW4iLCJnZXRTdG9yYWdlU3luYyIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJjb21wbGV0ZSIsInJlcyIsImhpZGVMb2FkaW5nIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJtc2ciLCJnZXRSZXF1ZXN0UGMiLCJnZXRSZXF1ZXN0Tm8iLCJwb3N0UmVxdWVzdE5vIiwic3VjY2VzcyIsInBvc3RSZXF1ZXN0IiwiY29tcGxldGVUYXNrIiwidXBJbWdUZWFtcyIsInBvaW50UGhvdG8iLCJyZXN1bHRzIiwiaW5kZXgiLCJ0b0NvbXBsZXRlVGFzayIsIlVSTCIsInJlY3RpZmljYXRpb25UYXNrRGV0YWlsIiwicmVjdGlmaWNhdGlvblBob3RvIiwidXBQcm9ibGVtVGVhbXMiLCJwcm9ibGVtVGVhbXMiLCJpIiwibGVuZ3RoIiwicHJvYmxlbVBob3RvIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvVXBQcm9ibGVtIiwiaW1ncyIsInNwbGl0IiwicGljdHVyZSIsImltZ1RlYW1zIiwidXBsb2FkRmlsZSIsInBhcnNlIiwicHVzaCIsImpvaW4iLCJmaWxlVHlwZSIsImZpbGVQYXRoIiwibmFtZSIsImZhaWwiLCJzaG93U3VjY2VzcyIsInNldFRpbWVvdXQiLCJpc1JlZnJlc2hUYXNrc1BhZ2UiLCJpc1JlZnJlc2hQb2xsdXRpb25QYWdlIiwid2ViU29ja2V0IiwiaWQiLCJjb25uZWN0U29ja2V0Iiwib25Tb2NrZXRPcGVuIiwiZ2V0TG9jYXRpb24iLCJzZXRJbnRlcnZhbCIsInR5cGUiLCJzZXRTdG9yYWdlU3luYyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiY2xlYXJJbnRlcnZhbCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsInVuVXBMb2N0aW9uIiwidW5HZXRMb2NhdGlvbiIsInVwTG9jdGlvbiIsInVzZXJMb2NhdGlvbiIsInBhdHJvbFRhc2tJZCIsInVwRGF0YSIsImRhdGUiLCJEYXRlIiwibG9jYXRpb25UaW1lIiwiZ2V0VGltZSIsIm9uVGFzayIsInNwbGljZSIsImluZGV4T2YiLCJ0YXNrSWQiLCJnZXRXcnlNYXAiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxt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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ2UsMEdBQTJDLEVBQUM7QUFHekQ7Ozs7Ozs7Ozs7Ozs7O0FDNXdCRjtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdWJOdnVlL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vc3ViTnZ1ZS9zZWFyY2gubnZ1ZT9tcFR5cGU9cGFnZSdcbkFwcC5tcFR5cGUgPSAncGFnZSdcbkFwcC5yb3V0ZSA9ICdzdWJOdnVlL3NlYXJjaCdcbkFwcC5lbCA9ICcjcm9vdCdcblxubmV3IFZ1ZShBcHApXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlNGE1N2MyJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy4kb3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy4kb3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUgJiYgdGhpcy4kcm9vdCAmJiB0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKXtcbiAgdGhpcy5fX21lcmdlX3N0eWxlKHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpXG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICB0aGlzLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZTRhNTdjMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZTRhNTdjMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgXCIwZTRhNTdjMlwiLFxuICBcIjZlOTc3ODE4XCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9zZWFyY2gubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0wIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlNGE1N2MyJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoXCJdIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyXCJdIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiaGVhZGVyX2xlZnRcIl0gfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImlucF9jb250ZW50XCJdLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICBhdXRvZm9jdXM6IF92bS5pc0ZvY3VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgcmV0dXJuOiBfdm0uc2VhcmNoIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJpY29uX3NlYXJjaFwiXSxcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjI3cHhcIiwgaGVpZ2h0OiBcIjI4cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi4uL3N0YXRpYy9pbWFnZXMvaWNvbl9zZWFyY2gucG5nXCIsIG1vZGU6IFwiXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJzY3JvbGwtdmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hfY29udGVudFwiXSwgYXR0cnM6IHsgc2Nyb2xsWTogXCJ0cnVlXCIgfSB9LFxuICAgICAgICBfdm0uX2woX3ZtLnNlYXJjaHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzZWFyY2hfbGlzdFwiXSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uUG9sbHV0aW9uKGl0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoX2xpc3RfbGVmdFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHt9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wic2VhcmNoX2xpc3RfbGVmdF90ZXh0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5ZCN56ewOlwiICsgX3ZtLl9zKGl0ZW0ud3J5TmFtZSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwidmlld1wiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaF9saXN0X2xlZnRfdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWcsOWdgDpcIiArIF92bS5fcyhpdGVtLndyeUFkZHJlc3MpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInNlYXJjaF9saXN0X3JpZ2h0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5kaXN0YW5jZSkgKyBcIkttXCIpXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMi0wIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0yLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL3NlYXJjaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRlcl9sZWZ0XCI+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBAcmV0dXJuPVwic2VhcmNoXCIgcmV0dXJuLWtleS10eXBlPVwic2VhcmNoXCIgOmF1dG9mb2N1cz1cImlzRm9jdXNcIiBjbGFzcz1cImlucF9jb250ZW50XCIvPlxyXG5cdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2ljb25fc2VhcmNoLnBuZ1wiY2xhc3M9XCJpY29uX3NlYXJjaFwiIHN0eWxlPVwid2lkdGg6IDI3cHg7aGVpZ2h0OiAyOHB4O1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZjtcIiBAY2xpY2s9XCJjbG9zZSgpXCI+5Y+W5raIPC90ZXh0PlxyXG5cdFx0PC9kaXY+XG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwic2VhcmNoX2NvbnRlbnRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzZWFyY2hfbGlzdFwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHNlYXJjaHNcIiA6a2V5PVwiaW5kZXhcIiBAY2xpY2s9XCJvblBvbGx1dGlvbihpdGVtKVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX2xpc3RfbGVmdFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj48dGV4dCBjbGFzcz1cInNlYXJjaF9saXN0X2xlZnRfdGV4dFwiPuWQjeensDp7e2l0ZW0ud3J5TmFtZX19PC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCI+PHRleHQgY2xhc3M9XCJzZWFyY2hfbGlzdF9sZWZ0X3RleHRcIj7lnLDlnYA6e3tpdGVtLndyeUFkZHJlc3N9fTwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwic2VhcmNoX2xpc3RfcmlnaHRcIj48dGV4dD57e2l0ZW0uZGlzdGFuY2V9fUttPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9zY3JvbGwtdmlldz5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCBVUkwgZnJvbSBcIi4uL3N0YXRpYy9qcy9pbnRlcmZhY2UuanNcIlxuXHRpbXBvcnQgdXRpbCBmcm9tIFwiLi4vc3RhdGljL2pzL3V0aWxzLmpzXCJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc0ZvY3VzOmZhbHNlLFxyXG5cdFx0XHRcdHNlYXJjaHM6W10sXHJcblx0XHRcdFx0cmVxdWVzdFRhc2s6e30sXHJcblx0XHRcdFx0ZGlzdGFuY2U6W11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR1bmkuJG9uKFwiY2hlY2tGb2N1c1wiLChib29sKT0+e1xyXG5cdFx0XHRcdHRoaXMuaXNGb2N1cz1ib29sXHJcblx0XHRcdH0pXHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRjbG9zZSgpe1xyXG5cdFx0XHRcdHVuaS4kZW1pdChcImNsb3NlU2VhcmNoXCIpXHJcblx0XHRcdFx0dW5pLiRlbWl0KFwiY2hlY2tGb2N1c1wiLGZhbHNlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblBvbGx1dGlvbihwb2xsdXRpb24pe1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxyXG5cdFx0XHRcdHVuaS4kZW1pdChcIm9uUG9sbHV0aW9uXCIscG9sbHV0aW9uKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXREaXN0YW5jZShwb2xsdXRpb24saW5kZXgpe1xyXG5cdFx0XHRcdHZhciB1c2VyTG9jYXRpb249dW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckxvY2F0aW9uXCIpXHJcblx0XHRcdFx0dmFyIHBvaW50MSA9IG5ldyBwbHVzLm1hcHMuUG9pbnQodXNlckxvY2F0aW9uLmxvbmdpdHVkZSx1c2VyTG9jYXRpb24ubGF0aXR1ZGUpO1xyXG5cdFx0XHRcdHZhciBwb2ludDIgPSBuZXcgcGx1cy5tYXBzLlBvaW50KHBvbGx1dGlvbi53cnlMb25naXR1ZGUscG9sbHV0aW9uLndyeUxhdGl0dWRlKVxyXG5cdFx0XHRcdHBsdXMubWFwcy5NYXAuY2FsY3VsYXRlRGlzdGFuY2UocG9pbnQxLHBvaW50MiwocmVzdWx0cyk9PntcclxuXHRcdFx0XHRcdHZhciBzZWFyY2hzPXRoaXMuc2VhcmNoc1xyXG5cdFx0XHRcdFx0c2VhcmNoc1tpbmRleF0uZGlzdGFuY2U9IChyZXN1bHRzLmRpc3RhbmNlLzEwMDApLnRvRml4ZWQoMilcclxuXHRcdFx0XHRcdHRoaXMuc2VhcmNocz1zZWFyY2hzXHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zZWFyY2hzKVxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWFyY2goZSl7XHJcblx0XHRcdFx0aWYodGhpcy5yZXF1ZXN0VGFzay5hYm9ydCl7XHJcblx0XHRcdFx0XHR0aGlzLnJlcXVlc3RUYXNrLmFib3J0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0XHRcdFx0dGhpcy5yZXF1ZXN0VGFzaz11bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IFVSTC5QT0xMVVRJT05fU0VBUkNILCBcclxuXHRcdFx0XHRcdGRhdGE6IHtuYW1lOmUudmFsdWV9LFxyXG5cdFx0XHRcdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRcdFx0XHRoZWFkZXI6IHt0b2tlbn0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZToocmVzKSA9PntcclxuXHRcdFx0XHRcdFx0aWYoISFyZXMuZGF0YSYmcmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zZWFyY2hzPXJlcy5kYXRhLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR2YXIgaT0wXHJcblx0XHRcdFx0XHRcdFx0d2hpbGUgKGkgPCB0aGlzLnNlYXJjaHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmdldERpc3RhbmNlKHRoaXMuc2VhcmNoc1tpXSxpKVxyXG5cdFx0XHRcdFx0XHRcdCAgICBpKys7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cclxuLnNlYXJjaHtcclxuXHRcclxufVxyXG4uaGVhZGVye1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQvKiBoZWlnaHQ6IDEwMHB4OyAqL1xyXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5oZWFkZXJfbGVmdHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDYwMHB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5pbnBfY29udGVudHtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdG1hcmdpbjogMTBweCAwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR3aWR0aDogNjAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XG4uaWNvbl9zZWFyY2h7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMjZweDtcclxuXHRyaWdodDogMTBweDtcclxufVxyXG4uc2VhcmNoX2xpc3R7XHJcblx0cGFkZGluZzogMjB1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDQwdXB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMXVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uc2VhcmNoX2xpc3RfbGVmdF90ZXh0e1xyXG5cdHdpZHRoOiA1MDB1cHg7XHJcbn1cbjwvc3R5bGU+XG4iLCIvLyBjb25zdCB1cmwwPVwiaHR0cDovLzE5Mi4xNjguMS43OjgwODJcIlxyXG4vLyBjb25zdCB1cmwwPVwiaHR0cDovLzE5Mi4xNjguMS40XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjEuNVwiXHJcbi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4wLjE4OFwiXHJcbi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjE1XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xMjIuMTE0LjE3Ny4xOThcIlxyXG5jb25zdCB1cmwwPVwiaHR0cDovLzE4My4yMzAuMjMuMjFcIlxyXG4vLyBjb25zdCB1cmwwPXVuaS5nZXRTdG9yYWdlU3luYyhcInVybFwiKT91bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1cmxcIik6XCJodHRwOi8vMTgzLjIzMC4yMy4yMVwiXHJcbmNvbnN0IHVybD11cmwwK1wiOjE4MDgyXCJcclxuLy8gY29uc3QgdXJsPXVybDArXCI6ODA4MlwiXHJcbmNvbnN0IHVybF9QQz11cmwrXCIvcHJveHkvcGNcIlxyXG5jb25zdCBkYWlsaT1cImh0dHA6Ly8xMC4xMTcuODAuMjAxOjgwODEvYXBwXCJcclxuLy8gY29uc3QgdXJsX1BDPXVybDArXCI6ODA4MS9hcHBcIlxyXG5cclxuXHJcblxyXG4vL+W4uOmTvuaOpSBcclxuY29uc3QgV0VCU09DS0VUPVwid3M6Ly8xOTIuMTY4LjEuNDo4MDgyL3dlYnNvY2tldC9cIlxyXG5cclxuLy8g55m75b2VXHJcbmNvbnN0IExPR0lOX0xPR0lOPXVybCtcIi9sb2dpbi9sb2dpblwiXHJcbmNvbnN0IFRBU0tfSU5ERVg9dXJsK1wiL3Rhc2svaW5kZXhcIi8v6I635Y+W6aaW6aG15Lu75Yqh5oOF5Ya1XHJcbmNvbnN0IFRBU0tfSU5ERVgyPXVybCtcIi90YXNrL2luZGV4MlwiLy/ojrflj5bpppbpobXku7vliqHmg4XlhrVcclxuXHJcbmNvbnN0IFRBU0tfUFJPQ0VTUz11cmwrXCIvdGFzay9wcm9jZXNzXCIvL+ato+WcqOi/m+ihjOS4reeahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgVEFTS19GSU5JU0g9dXJsK1wiL3Rhc2svZmluaXNoXCIvL+W3suWujOaIkOeahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgVEFTS19OT19TVEFSVD11cmwrXCIvdGFzay9ub1N0YXJ0XCIvL+i/mOacquW8gOWni+eahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgUFJPQkxFTV9MSVNUPXVybCtcIi9wcm9ibGVtL2xpc3RcIi8v6Zeu6aKY5YiX6KGoIHBhZ2Ug5Li65b+F6ZyAIOesrOS4gOmhteS4ujAg5b2TdWlk5Li656m655qE5pe25YCZ5bCG5Lya5p+l6K+i5omA5pyJ6Zeu6aKYIOWPjeS5i+WImeafpeivouW9k+WJjeeUqOaIt+aPkOS6pOeahOmXrumimFxyXG5jb25zdCBVUExPQURfVVBMT0FEPXVybCtcIi91cGxvYWQvdXBsb2FkXCIvL+S4iuS8oOWbvueJh1xyXG5jb25zdCBERVBBUlRNRU5UX0dFVF9ERVBUPXVybCtcIi9kZXBhcnRtZW50L2dldERlcHRcIi8v6I635Y+W5Lmh6ZWH5YiX6KGoXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX0NPTlRBQ1RMSVNUPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9jb250YWN0TGlzdFwiLy/ojrflj5bogZTns7vkurrkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfRklOSVNIX0xJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2ZpbmlzaExpc3RcIi8v6I635Y+W54K55L2N6L+b6KGM5Lit55qE5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9BTExfUFJPQkxFTT11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvZ2V0QWxsUHJvYmxlbVwiLy/ojrflj5bmiYDmnInmsaHmn5PmupDpl67popjnsbvlnotcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfR0VUX1BST0JMRU09dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2dldFByb2JsZW1cIi8v6I635Y+W5rGh5p+T5rqQ6Zeu6aKY57G75Z6LXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENIPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9wcm9ibGVtL2FkZEJhdGNoXCIvL+aJuemHj+aWsOWinumXrumimFxyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vbGlzdFwiLy/pgJrov4fngrnkvY3kv6Hmga8g6I635Y+W6Zeu6aKY5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVDI9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vbGlzdDJcIi8v6YCa6L+H5Lu75Yqh5L+h5oGvIOiOt+WPlumXrumimOS/oeaBr1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEU9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3VwZGF0ZVwiLy/mm7TmlrDlt6Hmn6XngrnkvY3nirbkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfTk9STUFMPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9ub3JtYWxcIi8v5pu05pS55beh5p+l54K55L2N54q25oCB54q25oCBXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0NFU1NfTElTVD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvcHJvY2Vzc0xpc3RcIi8v5pu05pS55beh5p+l54K55L2N54q25oCB54q25oCBXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1VQREFURV9XUllfQUREUkVTU19ERVRBSUxFRD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvdXBkYXRlV3J5QWRkcmVzc0RldGFpbGVkXCIvL+axoeafk+a6kOmHjeaWsOWumuS9jSBpZD3msaHmn5PmupBJRCDvvIx3cnlUeXBl562J5LqO5rGh5p+T5rqQ57G75Z6L77yM5Zyw5Z2A5L+h5oGvIOWSjOe7j+e6rOW6plxyXG5jb25zdCBUQVNLX1BBVFJPTF9QQVRIX0FERD11cmwrXCIvdGFzay9wYXRyb2wvcGF0aC9hZGRcIi8v5re75Yqg6Lev5b6E54K55L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENIPXVybCtcIi90YXNrL3BhdHJvbC9wYXRoL2FkZEJhdGNoXCIvL+a3u+WKoOi3r+W+hOeCueS/oeaBr1xyXG5cclxuXHJcbi8vIGNvbnN0IFRBU0tfUEFUUk9MX1VQREFURV9TVEFUVVM9dXJsK1wiL3Rhc2svcGF0cm9sL3VwZGF0ZVN0YXR1c1wiLy/mm7TmlLnlt6Hmn6Xku7vliqHnirbmgIFcclxuY29uc3QgVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURV9TVEFUVVM9dXJsK1wiL3Rhc2svcmVjdGlmaWNhdGlvbi91cGRhdGVTdGF0dXNcIi8v5pu05pS55pW05Liq5Lu75Yqh54q25oCBXHJcbmNvbnN0IFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEU9dXJsK1wiL3Rhc2svcmVjdGlmaWNhdGlvbi91cGRhdGVcIi8v5L+u5pS55pW05pS55Lu75Yqh5YaF5a6577yM5Zu+54mH562JXHJcblxyXG5jb25zdCBUQVNLX1BBVFJPTF9VUERBVEVfU1RBVFVTPXVybCtcIi90YXNrL3BhdHJvbC91cGRhdGVTdGF0dXNcIi8v5pu05pS55beh5p+l5Lu75Yqh54q25oCBXHJcbmNvbnN0IFVTRVJfVVBEQVRFPXVybCtcIi91c2VyL3VwZGF0ZVwiLy/pgJrov4fngrnkvY3kv6Hmga8g6I635Y+W6Zeu6aKY5L+h5oGvXHJcblxyXG5cclxuXHJcbmNvbnN0IFBPTExVVElPTl9TRUFSQ0g9dXJsK1wiL3BvbGx1dGlvbi9zZWFyY2hcIi8v5pCc57Si5rGh5p+T5rqQXHJcblxyXG5cclxuLy9QQ+aOpeWPo1xyXG5cclxuY29uc3QgREFQSU5HU0hVSVpISV9TSFVJWkhJVE9OR0pJX0tITFg9ZGFpbGkrXCIvZGFwaW5nc2h1aXpoaS9zaHVpemhpdG9uZ2ppX2tobHhcIi8v6K+m5oOFXHJcbmNvbnN0IFFVS09OR1NIVUlaSElUT05HSklfSEVMSVVTSFVJWkhJVE9OR0pJPWRhaWxpK1wiL3F1S29uZ1NodWlaaGlUb25nSmkvaGVMaXVTaHVpWmhpVG9uZ0ppXCIvL+ivpuaDhVxyXG5cclxuLy9QQ+aOkuihjOamnOaOpeWPo1xyXG5jb25zdCBBU1NFU1NfVE9XTl9MSVNUPWRhaWxpK1wiL2Fzc2Vzcy90b3duTGlzdFwiLy/plYfooZfmjpLooYxcclxuY29uc3QgQVNTRVNTX0RFUEFSVE1FTlRfTElTVD1kYWlsaStcIi9hc3Nlc3MvZGVwYXJ0bWVudExpc3RcIi8v6YOo6Zeo5o6S6KGMXHJcbi8v5rGh5p+T5rqQ5o6l5Y+jXHJcblxyXG5jb25zdCBXUllfQlpfTElTVD1kYWlsaStcIi93cnkvYnovbGlzdFwiLy/ms7Xnq5lcclxuY29uc3QgV1JZX0NPTVBBTllfTElTVD1kYWlsaStcIi93cnkvY29tcGFueS9saXN0XCIvL+W3peS4muS8geS4mlxyXG5jb25zdCBXUllfUkhLUFdLX0xJU1Q9ZGFpbGkrXCIvd3J5L3Joa3B3ay9saXN0XCIvL+WFpeays+aOkuaxoeWPo1xyXG5jb25zdCBXUllfUkhLUFdEX0xJU1Q9ZGFpbGkrXCIvd3J5L3Joa3B3ZC9saXN0XCIvL+WFpeays+aOkuaxoeeCuVxyXG5jb25zdCBXUllfSlpHRF9MSVNUPWRhaWxpK1wiL3dyeS9qemdkL2xpc3RcIi8v5bu6562R5bel5ZywXHJcbmNvbnN0IFdSWV9RVEhZX0xJU1Q9ZGFpbGkrXCIvd3J5L3F0aHkvbGlzdFwiLy/lhbblroPooYzkuJpcclxuY29uc3QgV1JZX0pDRFdfTElTVD1kYWlsaStcIi93cnkvamNkdy9saXN0XCIvL+ajgOa1i+eCueS9jVxyXG5jb25zdCBXUllfWUxKR19MSVNUPWRhaWxpK1wiL3dyeS95bGpnL2xpc3RcIi8v5Yy755aX5py65p6EXHJcbmNvbnN0IFdSWV9YUVlaX0xJU1Q9ZGFpbGkrXCIvd3J5L3hxeXovbGlzdFwiLy/nlZznpr3lhbvmrpZcclxuY29uc3QgV1JZX1RaQ19MSVNUPWRhaWxpK1wiL3dyeS90emMvbGlzdFwiLy/lsaDlrrDlnLpcclxuY29uc3QgV1JZX1NIVUlLVV9MSVNUPWRhaWxpK1wiL3dyeS9zaHVpa3UvbGlzdFwiLy/msLTlupNcclxuY29uc3QgV1JZX1NQVF9MSVNUPWRhaWxpK1wiL3dyeS9zcHQvbGlzdFwiLy/lsbHlnarloZhcclxuY29uc3QgV1JZX1lZQ19MSVNUPWRhaWxpK1wiL3dyeS95eWMvbGlzdFwiLy/lhbvpsbzmsaBcclxuY29uc3QgV1JZX0pNSlpKWkRfTElTVD1kYWlsaStcIi93cnkvam1qemp6ZC9saXN0XCIvL+WxheawkembhuS4reWxheS9j+eCuVxyXG5jb25zdCBXUllfWFNMV19MSVNUPWRhaWxpK1wiL3dyeS94c2x3L2xpc3RcIi8v5bCP5pWj5Lmx5rGh5LyB5LiaXHJcbmNvbnN0IFdSWV9YQ0NfTElTVD1kYWlsaStcIi93cnkveGNjL2xpc3RcIi8v5rSX6L2m5Zy6XHJcbmNvbnN0IFdSWV9DWUhZX0xJU1Q9ZGFpbGkrXCIvd3J5L2N5aHkvbGlzdFwiLy/ppJDppa7ooYzkuJpcclxuY29uc3QgV1JZX05NU0NfTElTVD1kYWlsaStcIi93cnkvbm1zYy9saXN0XCIvL+WGnOi0uOW4guWculxyXG5jb25zdCBXUllfV1NDTENfTElTVD1kYWlsaStcIi93cnkvd3NjbGMvbGlzdFwiLy/msaHmsLTlpITnkIbljoJcclxuY29uc3QgV1JZX1paWUZMREpEX0xJU1Q9ZGFpbGkrXCIvd3J5L3p6eWZsZGpkL2xpc3RcIi8v56eN5qSN5Lia6IKl5paZ5aCG56ev54K5XHJcbmNvbnN0IFdSWV9TTVlTWVpESF9MSVNUPWRhaWxpK1wiL3dyeS9zbXlzeXpkaC9saXN0XCIvLzEw5Lqp5Lul5LiK56eN5qSN5aSn5oi3XHJcblxyXG5tb2R1bGUuZXhwb3J0cz17XHJcblx0dXJsLFxyXG5cdFdFQlNPQ0tFVCxcclxuXHRMT0dJTl9MT0dJTixcclxuXHRUQVNLX0lOREVYLFxyXG5cdFRBU0tfSU5ERVgyLFxyXG5cdFRBU0tfUFJPQ0VTUyxcclxuXHRUQVNLX0ZJTklTSCxcclxuXHRUQVNLX05PX1NUQVJULFxyXG5cdFBST0JMRU1fTElTVCxcclxuXHRVUExPQURfVVBMT0FELFxyXG5cdERFUEFSVE1FTlRfR0VUX0RFUFQsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfQ09OVEFDVExJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfRklOSVNIX0xJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9QUk9CTEVNLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENILFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1QyLFxyXG5cdFVTRVJfVVBEQVRFLFxyXG5cdFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEVfU1RBVFVTLFxyXG5cdFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEUsXHJcblx0VEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUyxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEUsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfTk9STUFMLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0NFU1NfTElTVCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEVfV1JZX0FERFJFU1NfREVUQUlMRUQsXHJcblx0VEFTS19QQVRST0xfUEFUSF9BREQsXHJcblx0VEFTS19QQVRST0xfUEFUSF9BRERfQkFUQ0gsXHJcblx0REFQSU5HU0hVSVpISV9TSFVJWkhJVE9OR0pJX0tITFgsXHJcblx0UVVLT05HU0hVSVpISVRPTkdKSV9IRUxJVVNIVUlaSElUT05HSkksXHJcblx0V1JZX0JaX0xJU1QsXHJcblx0V1JZX0NPTVBBTllfTElTVCxcclxuXHRXUllfUkhLUFdLX0xJU1QsXHJcblx0V1JZX1JIS1BXRF9MSVNULFxyXG5cdFdSWV9KWkdEX0xJU1QsXHJcblx0V1JZX1FUSFlfTElTVCxcclxuXHRXUllfSkNEV19MSVNULFxyXG5cdFdSWV9ZTEpHX0xJU1QsXHJcblx0V1JZX1hRWVpfTElTVCxcclxuXHRXUllfVFpDX0xJU1QsXHJcblx0V1JZX1NIVUlLVV9MSVNULFxyXG5cdFdSWV9TUFRfTElTVCxcclxuXHRXUllfWVlDX0xJU1QsXHJcblx0V1JZX0pNSlpKWkRfTElTVCxcclxuXHRXUllfWFNMV19MSVNULFxyXG5cdFdSWV9YQ0NfTElTVCxcclxuXHRXUllfQ1lIWV9MSVNULFxyXG5cdFdSWV9OTVNDX0xJU1QsXHJcblx0V1JZX1dTQ0xDX0xJU1QsXHJcblx0V1JZX1paWUZMREpEX0xJU1QsXHJcblx0V1JZX1NNWVNZWkRIX0xJU1QsXHJcblx0QVNTRVNTX1RPV05fTElTVCxcclxuXHRBU1NFU1NfREVQQVJUTUVOVF9MSVNULFxyXG5cdFBPTExVVElPTl9TRUFSQ0gsXHJcblx0dXJsX1BDXHJcbn1cclxuIiwiaW1wb3J0IFVSTCBmcm9tIFwiLi9pbnRlcmZhY2UuanNcIlxyXG52YXIgdGltZXJfZ2V0TG9jdGlvbj1udWxsXHJcbnZhciB0aW1lcl91cExvY3Rpb249e31cclxudmFyIHVwTG9jdGlvbkRhdGE9e31cclxudmFyIHN1Yk52dWU9e31cclxudmFyIHRhc2tJbmZvPXt9XHJcbnZhciBwb2xsdXRpb25JbmZvPXt9XHJcbnZhciB1cFRpbWVOdW09MzAwMDAwXHJcbnZhciBhcnJXcnk9W1xyXG5cdFwiV1JZX0JaX0xJU1RcIixcclxuXHRcIldSWV9DT01QQU5ZX0xJU1RcIixcclxuXHRcIldSWV9SSEtQV0tfTElTVFwiLFxyXG5cdFwiV1JZX1JIS1BXRF9MSVNUXCIsXHJcblx0XCJXUllfSlpHRF9MSVNUXCIsXHJcblx0XCJXUllfUVRIWV9MSVNUXCIsXHJcblx0XCJXUllfSkNEV19MSVNUXCIsXHJcblx0XCJXUllfWUxKR19MSVNUXCIsXHJcblx0XCJXUllfWFFZWl9MSVNUXCIsXHJcblx0XCJXUllfVFpDX0xJU1RcIixcclxuXHRcIldSWV9TSFVJS1VfTElTVFwiLFxyXG5cdFwiV1JZX1NQVF9MSVNUXCIsXHJcblx0XCJXUllfWVlDX0xJU1RcIixcclxuXHRcIldSWV9KTUpaSlpEX0xJU1RcIixcclxuXHRcIldSWV9YU0xXX0xJU1RcIixcclxuXHRcIldSWV9YQ0NfTElTVFwiLFxyXG5cdFwiV1JZX0NZSFlfTElTVFwiLFxyXG5cdFwiV1JZX05NU0NfTElTVFwiLFxyXG5cdFwiV1JZX1dTQ0xDX0xJU1RcIixcclxuXHRcIldSWV9aWllGTERKRF9MSVNUXCIsXHJcblx0XCJXUllfU01ZU1laREhfTElTVFwiXHJcbl1cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdCh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR1bmkuc2hvd0xvYWRpbmcoe21hc2s6dHJ1ZX0pXHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0dG9rZW5cclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZToocmVzKSA9PntcclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0aWYoIXJlcy5kYXRhKXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcigpOlwiXCJcclxuXHRcdFx0fWVsc2UgaWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9jYWxsKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdHRpdGxlOnJlcy5kYXRhLm1zZ3x8XCLmlbDmja7lvILluLhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXF1ZXN0UGModXJsLGRhdGEsY2FsbCxlcnJvcil7XHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsXHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0dG9rZW5cclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZToocmVzKSA9PntcclxuXHRcdFx0aWYoIXJlcy5kYXRhKXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcigpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9jYWxsKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXF1ZXN0Tm8odXJsLGRhdGEsY2FsbCxlcnJvcil7XHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsXHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0bWV0aG9kOlwiR0VUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0dG9rZW5cclxuXHRcdH0sXHJcblx0XHRjb21wbGV0ZToocmVzKSA9PntcclxuXHRcdFx0aWYoIXJlcy5kYXRhKXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcigpOlwiXCJcclxuXHRcdFx0fWVsc2UgaWYocmVzLmRhdGEuY29kZT09MSl7XHJcblx0XHRcdFx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9jYWxsKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0UmVxdWVzdE5vKHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIlBPU1RcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuXHRcdFx0dG9rZW5cclxuXHRcdH0sXHJcblx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdC8vIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHQvLyB9ZWxzZXtcclxuXHRcdFx0XHQvLyB0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHQvLyB9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBvc3RSZXF1ZXN0KHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHVuaS5zaG93TG9hZGluZyh7bWFzazp0cnVlfSlcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdGRhdGE6IGRhdGEsXHJcblx0XHRtZXRob2Q6XCJQT1NUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHR0aXRsZTpyZXMuZGF0YS5tc2d8fFwi5pWw5o2u5byC5bi4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayhkYXRhKXsvL+WujOaIkOW3oeafpeaxoeafk+a6kOS7u+WKoVxyXG5cdHVwSW1nVGVhbXMoZGF0YS5wb2ludFBob3RvLGZ1bmN0aW9uKHJlc3VsdHMsaW5kZXgpe1xyXG5cdFx0ZGF0YS5wb2ludFBob3RvPXJlc3VsdHNcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHR0b0NvbXBsZXRlVGFzayhVUkwuVEFTS19QQVRST0xfUE9JTlRfVVBEQVRFLGRhdGEpXHJcblx0fSwxLChyZXN1bHRzKT0+e1xyXG5cdFx0Y29tcGxldGVUYXNrKGRhdGEpXHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiByZWN0aWZpY2F0aW9uVGFza0RldGFpbChkYXRhKXsvL+WujOaIkOaVtOaUueS7u+WKoVxyXG5cdHVwSW1nVGVhbXMoZGF0YS5yZWN0aWZpY2F0aW9uUGhvdG8sZnVuY3Rpb24ocmVzdWx0cyxpbmRleCl7XHJcblx0XHRkYXRhLnJlY3RpZmljYXRpb25QaG90bz1yZXN1bHRzXHJcblx0XHR0b0NvbXBsZXRlVGFzayhVUkwuVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURSxkYXRhKVxyXG5cdH0pXHJcbn1cclxuZnVuY3Rpb24gdXBQcm9ibGVtVGVhbXMoZGF0YSl7Ly/kuIrkvKDlpJrkuKrpl67pophcclxuXHR2YXIgcHJvYmxlbVRlYW1zPTBcclxuXHRmb3IodmFyIGk9MDtpPGRhdGEubGVuZ3RoO2krKyl7XHJcblx0XHRpZihkYXRhW2ldLnByb2JsZW1QaG90byl7XHJcblx0XHRcdHByb2JsZW1UZWFtcysrXHJcblx0XHRcdHVwSW1nVGVhbXMoZGF0YVtpXS5wcm9ibGVtUGhvdG8sZnVuY3Rpb24ocmVzdWx0cyxpbmRleCl7XHJcblx0XHRcdFx0cHJvYmxlbVRlYW1zLS1cclxuXHRcdFx0XHRkYXRhW2luZGV4XS5wcm9ibGVtUGhvdG89cmVzdWx0c1xyXG5cdFx0XHRcdGlmKHByb2JsZW1UZWFtcz09MCl7XHJcblx0XHRcdFx0XHRkYXRhPUpTT04uc3RyaW5naWZ5KGRhdGEpXHJcblx0XHRcdFx0XHR0b1VwUHJvYmxlbShVUkwuVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9BRERfQkFUQ0gsZGF0YSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0saSwocmVzdWx0cyk9PntcclxuXHRcdFx0XHR1cFByb2JsZW1UZWFtcyhkYXRhKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiB0b0NvbXBsZXRlVGFzayh1cmwsZGF0YSl7Ly/kuIrkvKDpl67popjmiJbogIXlrozmiJDngrnkvY3lt6Hmn6VcclxuXHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdGdldFJlcXVlc3RObyh1cmwsZGF0YSwocmVzdWx0cyk9PntcclxuXHRcdGNvbnNvbGUubG9nKFwi5LiK5Lyg5oiQ5YqfXCIpXHJcblx0fSwocmVzdWx0cyk9PntcclxuXHRcdHRvQ29tcGxldGVUYXNrKHVybCxkYXRhKVxyXG5cdH0pXHJcbn1cclxuZnVuY3Rpb24gdG9VcFByb2JsZW0odXJsLGRhdGEpey8v5LiK5Lyg6Zeu6aKY5oiW6ICF5a6M5oiQ54K55L2N5beh5p+lXHJcblx0Z2V0UmVxdWVzdE5vKHVybCx7ZGF0YX0sKHJlc3VsdHMpPT57XHJcblx0XHRjb25zb2xlLmxvZyhcIuS4iuS8oOaIkOWKn1wiKVxyXG5cdH0sKHJlc3VsdHMpPT57XHJcblx0XHR0b1VwUHJvYmxlbShkYXRhKVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdXBJbWdUZWFtcyhpbWdzLGNhbGwsaW5kZXgsZXJyb3Ipey8v5LiK5Lyg5aSa5byg5Zu+54mHXHJcblx0dmFyIGltZ3M9aW1ncy5zcGxpdChcIjtcIilcclxuXHR2YXIgcGljdHVyZT1bXVxyXG5cdHZhciBpbWdUZWFtcz0wXHJcblx0Zm9yKHZhciBpPTA7aTxpbWdzLmxlbmd0aDtpKyspe1xyXG5cdFx0aW1nVGVhbXMrK1xyXG5cdFx0dXBsb2FkRmlsZShVUkwuVVBMT0FEX1VQTE9BRCxpbWdzW2ldLChyZXN1bHRzKT0+e1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG5cdFx0XHRyZXN1bHRzPUpTT04ucGFyc2UocmVzdWx0cylcclxuXHRcdFx0cGljdHVyZS5wdXNoKHJlc3VsdHMuZGF0YSk7XHJcblx0XHRcdGltZ1RlYW1zLS1cclxuXHRcdFx0aWYoaW1nVGVhbXM9PTApe1xyXG5cdFx0XHRcdHBpY3R1cmU9cGljdHVyZS5qb2luKFwiO1wiKVxyXG5cdFx0XHRcdGNhbGwocGljdHVyZSxpbmRleClcclxuXHRcdFx0fVxyXG5cdFx0fSwocmVzdWx0cyk9PntcclxuXHRcdFx0ZXJyb3IocmVzdWx0cylcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRGaWxlKHVybCxkYXRhLGNhbGwsZXJyb3Ipey8v5LiK5Lyg5Zu+54mHXHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0dXJsOiB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0XHRmaWxlVHlwZTpcImltYWdlXCIsXHJcblx0XHRmaWxlUGF0aDpkYXRhLFxyXG5cdFx0bmFtZTpcImZpbGVcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdHN1Y2Nlc3M6IChyZXMpID0+IHsgXHJcblx0XHRcdGlmKHJlcy5kYXRhIT1cIjAwMDAwMFwiKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZmFpbChyZXMpe1xyXG5cdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihkYXRhKTpcIlwiXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiBzaG93U3VjY2Vzcyhtc2csY2FsbCl7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOlwic3VjY2Vzc1wiLFxyXG5cdFx0dGl0bGU6bXNnXHJcblx0fSlcclxuXHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP3NldFRpbWVvdXQoY2FsbCwxNTAwKTpcIlwiXHJcbn1cclxuY29uc3QgaXNSZWZyZXNoVGFza3NQYWdlPXRydWVcclxuXHJcbmNvbnN0IGlzUmVmcmVzaFBvbGx1dGlvblBhZ2U9dHJ1ZVxyXG5cclxuY29uc3Qgd2ViU29ja2V0PWZ1bmN0aW9uKGlkKXtcclxuXHR1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHR1cmw6IFVSTC5XRUJTT0NLRVQraWQsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZDogJ0dFVCdcclxuXHR9KVxyXG59XHJcbnVuaS5vblNvY2tldE9wZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXlt7LmiZPlvIDvvIEnKTtcclxufSk7XHJcblxyXG52YXIgZ2V0TG9jYXRpb249ZnVuY3Rpb24oKXtcclxuXHR0aW1lcl9nZXRMb2N0aW9uPXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHR1bmkuZ2V0TG9jYXRpb24oe1xyXG5cdFx0XHR0eXBlOlwid2dzODRcIixcclxuXHRcdFx0c3VjY2VzcyhyZXMpe1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJMb2NhdGlvblwiLHtsb25naXR1ZGU6cmVzLmxvbmdpdHVkZSxsYXRpdHVkZTpyZXMubGF0aXR1ZGV9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsKHJlcyl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKSBcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyX2dldExvY3Rpb24pXHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTpcIuiOt+WPluWumuS9jeadg+mZkOWksei0pVwiLFxyXG5cdFx0XHRcdFx0Y29udGVudDpcIuivt+aJk+W8gOaJi+acuuWumuS9jeadg+mZkFwiLFxyXG5cdFx0XHRcdFx0c2hvd0NhbmNlbDpmYWxzZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLmNvbmZpcm0pXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJMb2NhdGlvblwiLHtsb25naXR1ZGU6MCxsYXRpdHVkZTowfSlcclxuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24oKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWwocmVzKXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSw1MDAwKVxyXG59XHJcblxyXG52YXIgdW5VcExvY3Rpb249ZnVuY3Rpb24oaWQpe1xyXG5cdGlmKCEhdGltZXJfdXBMb2N0aW9uW2lkXSl7XHJcblx0XHRjbGVhckludGVydmFsKHRpbWVyX3VwTG9jdGlvbltpZF0pXHJcblx0fVxyXG59XHJcbnZhciB1bkdldExvY2F0aW9uPWZ1bmN0aW9uKCl7XHJcblx0Y2xlYXJJbnRlcnZhbCh0aW1lcl9nZXRMb2N0aW9uKVxyXG59XHJcbnZhciB1cExvY3Rpb249ZnVuY3Rpb24oaWQpe1xyXG5cdHRpbWVyX3VwTG9jdGlvbltpZF09c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdHZhciB1c2VyTG9jYXRpb249dW5pLmdldFN0b3JhZ2VTeW5jKFwidXNlckxvY2F0aW9uXCIpXHJcblx0XHR2YXIgZGF0YT17XHJcblx0XHRcdHBhdHJvbFRhc2tJZDppZCxcclxuXHRcdFx0bG9uZ2l0dWRlOnVzZXJMb2NhdGlvbi5sb25naXR1ZGUsXHJcblx0XHRcdGxhdGl0dWRlOnVzZXJMb2NhdGlvbi5sYXRpdHVkZSxcclxuXHRcdH1cclxuXHRcdHZhciB1cERhdGE9dXBMb2N0aW9uRGF0YVtpZF0/dXBMb2N0aW9uRGF0YVtpZF06W11cclxuXHRcdHZhciBkYXRlPW5ldyBEYXRlKClcclxuXHRcdHVwRGF0YS5wdXNoKHtcclxuXHRcdFx0cGF0cm9sVGFza0lkOmlkLFxyXG5cdFx0XHRsb25naXR1ZGU6dXNlckxvY2F0aW9uLmxvbmdpdHVkZSxcclxuXHRcdFx0bGF0aXR1ZGU6dXNlckxvY2F0aW9uLmxhdGl0dWRlLFxyXG5cdFx0XHRsb2NhdGlvblRpbWU6ZGF0ZS5nZXRUaW1lKClcclxuXHRcdH0pXHJcblx0XHR1cExvY3Rpb25EYXRhW2lkXT11cERhdGFcclxuXHRcdHBvc3RSZXF1ZXN0Tm8oVVJMLlRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENILHtkYXRhOkpTT04uc3RyaW5naWZ5KHVwRGF0YSksaWQ6aWR9LChyZXN1bHRzKT0+e1xyXG5cdFx0XHRpZihyZXN1bHRzLmNvZGU9PTIpe1xyXG5cdFx0XHRcdHVuVXBMb2N0aW9uKGlkKVxyXG5cdFx0XHRcdHZhciBvblRhc2s9dW5pLmdldFN0b3JhZ2VTeW5jKFwib25UYXNrXCIpP3VuaS5nZXRTdG9yYWdlU3luYyhcIm9uVGFza1wiKTpbXTtcclxuXHRcdFx0XHRvblRhc2suc3BsaWNlKG9uVGFzay5pbmRleE9mKHRoaXMudGFza0lkKSlcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJvblRhc2tcIixvblRhc2spO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVwTG9jdGlvbkRhdGFbaWRdPVtdIFxyXG5cdFx0fSkgXHJcblx0fSx1cFRpbWVOdW0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdyeU1hcCgpe1xyXG5cdGZvciAodmFyIGk9MDtpPGFycldyeS5sZW5ndGg7aSsrKSB7XHJcblx0XHQoZnVuY3Rpb24odXJsKXtcclxuXHRcdFx0Z2V0UmVxdWVzdFBjKFVSTFt1cmxdLFwiXCIsKHJlc3VsdHMpPT57XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKHVybCxyZXN1bHRzKVxyXG5cdFx0XHR9KVx0XHJcblx0XHR9KShhcnJXcnlbaV0pXHJcblx0fVxyXG59XHJcbm1vZHVsZS5leHBvcnRzPXsgIFxyXG5cdGdldFJlcXVlc3QsXHJcblx0Z2V0UmVxdWVzdE5vLFxyXG5cdGdldFJlcXVlc3RQYyxcclxuXHRwb3N0UmVxdWVzdCwgIFxyXG5cdHBvc3RSZXF1ZXN0Tm8sXHJcblx0dXBsb2FkRmlsZSxcclxuXHRzaG93U3VjY2VzcyxcclxuXHRpc1JlZnJlc2hUYXNrc1BhZ2UsXHJcblx0aXNSZWZyZXNoUG9sbHV0aW9uUGFnZSxcclxuXHR3ZWJTb2NrZXQsXHJcblx0dXBMb2N0aW9uLFxyXG5cdHVuR2V0TG9jYXRpb24sXHJcblx0dW5VcExvY3Rpb24sXHJcblx0Z2V0TG9jYXRpb24sXHJcblx0dXBQcm9ibGVtVGVhbXMsXHJcblx0Y29tcGxldGVUYXNrLFxyXG5cdHJlY3RpZmljYXRpb25UYXNrRGV0YWlsLFxyXG5cdHN1Yk52dWUsXHJcblx0Z2V0V3J5TWFwLFxyXG5cdHRhc2tJbmZvLFxyXG5cdHBvbGx1dGlvbkluZm8sXHJcblx0dXBUaW1lTnVtXHJcbn0iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKC4uLmFyZ3MpIHtcclxuICBjb25zdCBtc2dzID0gYXJncy5tYXAoKHYpID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xyXG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHYgPSBTdHJpbmcodilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICBsZXQgbXNnID0gJydcclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICBjb25zdCBsYXN0TXNnID0gbXNncy5wb3AoKVxyXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG4gIHJldHVybiBtc2dcclxufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0yIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMyFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9zZWFyY2gubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlNGE1N2MyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0xIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMiFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vc2VhcmNoLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZTRhNTdjMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaGVhZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzAwN0FGRlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImhlYWRlcl9sZWZ0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIndpZHRoXCI6IFwiNjAwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwXCJcbiAgfSxcbiAgXCJpbnBfY29udGVudFwiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYwMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiXG4gIH0sXG4gIFwiaWNvbl9zZWFyY2hcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IFwiMjZcIixcbiAgICBcInJpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcInNlYXJjaF9saXN0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMjAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMjAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDIwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMjAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDQwLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMWYxZjFcIlxuICB9LFxuICBcInNlYXJjaF9saXN0X2xlZnRfdGV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiA1MDBcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
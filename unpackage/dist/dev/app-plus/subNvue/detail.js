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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
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
/* 20 */,
/* 21 */,
/* 22 */
/*!************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/main.js?{"page":"subNvue%2Fdetail"} ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subNvue/detail.nvue?mpType=page */ 23);


_subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'subNvue/detail'
_subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'

new Vue(_subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 23 */
/*!********************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page */ 24);
/* harmony import */ var _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.nvue?vue&type=script&lang=js&mpType=page */ 26);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page */ 28).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page */ 28).default)
          }

}

/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  "11d3a896",
  "3ca5cf2a"
  
)

component.options.__file = "G:/知行APP/pollutionMonitoring/subNvue/detail.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 24 */
/*!**************************************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!./detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_0_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 25 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-0!./node_modules/vue-loader/lib??ref--3-0!G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page ***!
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
  return _c("div", { staticClass: ["detail"] }, [
    _c("div", { staticClass: ["detail_title"] }, [
      _c("text", { staticStyle: { color: "#000", textAlign: "center" } }, [
        _vm._v(_vm._s(_vm.pollution.name))
      ])
    ]),
    _c("div", { staticClass: ["detail_content"] }, [
      _c(
        "div",
        {
          staticClass: ["detail_content_list"],
          on: {
            click: function($event) {
              return _vm.close()
            }
          }
        },
        [_vm._v("取消")]
      ),
      _c(
        "div",
        {
          staticClass: ["detail_content_list", "navigation"],
          on: {
            click: function($event) {
              return _vm.toNavigation()
            }
          }
        },
        [_c("text", { staticStyle: { color: "#fff" } }, [_vm._v("导航")])]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!********************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!./detail.nvue?vue&type=script&lang=js&mpType=page */ 27);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











var _mapTool = __webpack_require__(/*! ../static/js/mapTool.js */ 19);
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
var _default = { data: function data() {return { pollution: {} };}, mounted: function mounted() {var _this = this;uni.$on("showDetail", function (pollution) {_this.pollution = pollution;});},
  methods: {
    close: function close() {
      uni.$emit("closeDetail");
    },
    toNavigation: function toNavigation() {//导航
      _utils.default.toNavigation(this.pollution.longitude, this.pollution.latitude);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"]))

/***/ }),
/* 28 */
/*!****************************************************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!./detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page */ 29);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_7_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-1!./node_modules/postcss-loader/src??ref--7-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "detail": {
    "position": "relative",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "detail_title": {
    "paddingTop": "10",
    "paddingRight": "0",
    "paddingBottom": "10",
    "paddingLeft": "0",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "710",
    "marginLeft": "20",
    "flex": 1,
    "borderBottomStyle": "solid",
    "borderBottomColor": "#e1e1e1",
    "borderBottomWidth": "1"
  },
  "detail_content": {
    "width": "750",
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": 100,
    "alignItems": "center",
    "paddingTop": "0",
    "paddingRight": "20",
    "paddingBottom": "0",
    "paddingLeft": "20"
  },
  "detail_content_list": {
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#e1e1e1",
    "height": "70",
    "width": "340",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "navigation": {
    "backgroundColor": "#5087fb"
  },
  "close": {
    "position": "absolute",
    "right": "5",
    "paddingTop": "3",
    "paddingRight": "15",
    "paddingBottom": "3",
    "paddingLeft": "15",
    "textAlign": "center",
    "borderRadius": "5",
    "backgroundColor": "#5087FB",
    "top": "10"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzPzI4NzciLCJ1bmktYXBwOi8vL3N0YXRpYy9qcy9pbnRlcmZhY2UuanMiLCJ1bmktYXBwOi8vL3N0YXRpYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5IiwidW5pLWFwcDovLy9zdGF0aWMvanMvbWFwVG9vbC5qcyIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3JpbmcvbWFpbi5qcz8yZTgxIiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL2RldGFpbC5udnVlP2E4NTgiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvZGV0YWlsLm52dWU/ZmQ1YiIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9kZXRhaWwubnZ1ZT82ODc0Iiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL2RldGFpbC5udnVlPzNiYjgiLCJ1bmktYXBwOi8vL3N1Yk52dWUvZGV0YWlsLm52dWUiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvZGV0YWlsLm52dWU/MmE0NSIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9kZXRhaWwubnZ1ZT82YTZhIl0sIm5hbWVzIjpbInVybDAiLCJ1cmwiLCJ1cmxfUEMiLCJkYWlsaSIsIldFQlNPQ0tFVCIsIkxPR0lOX0xPR0lOIiwiVEFTS19JTkRFWCIsIlRBU0tfSU5ERVgyIiwiVEFTS19QUk9DRVNTIiwiVEFTS19GSU5JU0giLCJUQVNLX05PX1NUQVJUIiwiUFJPQkxFTV9MSVNUIiwiVVBMT0FEX1VQTE9BRCIsIkRFUEFSVE1FTlRfR0VUX0RFUFQiLCJUQVNLX1BBVFJPTF9QT0lOVF9DT05UQUNUTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX0ZJTklTSF9MSVNUIiwiVEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNIiwiVEFTS19QQVRST0xfUE9JTlRfR0VUX1BST0JMRU0iLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0FERF9CQVRDSCIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVDIiLCJUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEUiLCJUQVNLX1BBVFJPTF9QT0lOVF9OT1JNQUwiLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9DRVNTX0xJU1QiLCJUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEVfV1JZX0FERFJFU1NfREVUQUlMRUQiLCJUQVNLX1BBVFJPTF9QQVRIX0FERCIsIlRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENIIiwiVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURV9TVEFUVVMiLCJUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFIiwiVEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUyIsIlVTRVJfVVBEQVRFIiwiUE9MTFVUSU9OX1NFQVJDSCIsIkRBUElOR1NIVUlaSElfU0hVSVpISVRPTkdKSV9LSExYIiwiUVVLT05HU0hVSVpISVRPTkdKSV9IRUxJVVNIVUlaSElUT05HSkkiLCJXQVRFUl9CQVNFX0dFVEJBU0VZRUFSTU9OVEgiLCJBU1NFU1NfVE9XTl9MSVNUIiwiQVNTRVNTX0RFUEFSVE1FTlRfTElTVCIsIldSWV9CWl9MSVNUIiwiV1JZX0NPTVBBTllfTElTVCIsIldSWV9SSEtQV0tfTElTVCIsIldSWV9SSEtQV0RfTElTVCIsIldSWV9KWkdEX0xJU1QiLCJXUllfUVRIWV9MSVNUIiwiV1JZX0pDRFdfTElTVCIsIldSWV9ZTEpHX0xJU1QiLCJXUllfWFFZWl9MSVNUIiwiV1JZX1RaQ19MSVNUIiwiV1JZX1NIVUlLVV9MSVNUIiwiV1JZX1NQVF9MSVNUIiwiV1JZX1lZQ19MSVNUIiwiV1JZX0pNSlpKWkRfTElTVCIsIldSWV9YU0xXX0xJU1QiLCJXUllfWENDX0xJU1QiLCJXUllfQ1lIWV9MSVNUIiwiV1JZX05NU0NfTElTVCIsIldSWV9XU0NMQ19MSVNUIiwiV1JZX1paWUZMREpEX0xJU1QiLCJXUllfU01ZU1laREhfTElTVCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0aW1lcl9nZXRMb2N0aW9uIiwidGltZXJfdXBMb2N0aW9uIiwidXBMb2N0aW9uRGF0YSIsInN1Yk52dWUiLCJ0YXNrSW5mbyIsInBvbGx1dGlvbkluZm8iLCJ1cFRpbWVOdW0iLCJzaXR1YXRpb25EYXRlIiwiZ2V0UmVxdWVzdCIsImRhdGEiLCJjYWxsIiwiZXJyb3IiLCJ1bmkiLCJzaG93TG9hZGluZyIsIm1hc2siLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsIm1ldGhvZCIsImhlYWRlciIsImNvbXBsZXRlIiwicmVzIiwiaGlkZUxvYWRpbmciLCJjb2RlIiwiY29uc29sZSIsImxvZyIsInNob3dUb2FzdCIsImljb24iLCJ0aXRsZSIsIm1zZyIsImdldFJlcXVlc3RQYyIsImdldFJlcXVlc3RObyIsInBvc3RSZXF1ZXN0Tm8iLCJzdWNjZXNzIiwicG9zdFJlcXVlc3QiLCJjb21wbGV0ZVRhc2siLCJ1cEltZ1RlYW1zIiwicG9pbnRQaG90byIsInJlc3VsdHMiLCJpbmRleCIsInRvQ29tcGxldGVUYXNrIiwiVVJMIiwicmVjdGlmaWNhdGlvblRhc2tEZXRhaWwiLCJyZWN0aWZpY2F0aW9uUGhvdG8iLCJ1cFByb2JsZW1UZWFtcyIsInByb2JsZW1UZWFtcyIsImkiLCJsZW5ndGgiLCJwcm9ibGVtUGhvdG8iLCJKU09OIiwic3RyaW5naWZ5IiwidG9VcFByb2JsZW0iLCJpbWdzIiwic3BsaXQiLCJwaWN0dXJlIiwiaW1nVGVhbXMiLCJ1cGxvYWRGaWxlIiwicGFyc2UiLCJwdXNoIiwiam9pbiIsImZpbGVUeXBlIiwiZmlsZVBhdGgiLCJuYW1lIiwiZmFpbCIsInNob3dTdWNjZXNzIiwic2V0VGltZW91dCIsImlzUmVmcmVzaFRhc2tzUGFnZSIsImlzUmVmcmVzaFBvbGx1dGlvblBhZ2UiLCJ3ZWJTb2NrZXQiLCJpZCIsImNvbm5lY3RTb2NrZXQiLCJvblNvY2tldE9wZW4iLCJnZXRMb2NhdGlvbiIsInNldEludGVydmFsIiwidHlwZSIsInNldFN0b3JhZ2VTeW5jIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJjbGVhckludGVydmFsIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwidW5VcExvY3Rpb24iLCJ1bkdldExvY2F0aW9uIiwidXBMb2N0aW9uIiwidXNlckxvY2F0aW9uIiwicGF0cm9sVGFza0lkIiwidXBEYXRhIiwiZGF0ZSIsIkRhdGUiLCJsb2NhdGlvblRpbWUiLCJnZXRUaW1lIiwib25UYXNrIiwic3BsaWNlIiwiaW5kZXhPZiIsInRhc2tJZCIsInRvTmF2aWdhdGlvbiIsIndnczg0dG9nY2owMiIsIm1hcFRvb2wiLCJwbHVzIiwib3MiLCJydW50aW1lIiwib3BlblVSTCIsImUiLCJtZXNzYWdlIiwibGF1bmNoQXBwbGljYXRpb24iLCJhY3Rpb24iLCJnZXRXcnlUeXBlTmFtZSIsIm9uVGFza051bSIsInVuVGFza051bSIsInhfUEkiLCJQSSIsImVlIiwiYSIsInByb3RvdHlwZSIsImdjajAydG93Z3M4NCIsImxuZyIsImxhdCIsIm91dF9vZl9jaGluYSIsImRsYXQiLCJ0cmFuc2Zvcm1sYXQiLCJkbG5nIiwidHJhbnNmb3JtbG5nIiwicmFkbGF0IiwibWFnaWMiLCJNYXRoIiwic2luIiwic3FydG1hZ2ljIiwic3FydCIsImNvcyIsIm1nbGF0IiwibWdsbmciLCJnY2owMnRvYmQwOSIsInoiLCJ0aGV0YSIsImF0YW4yIiwiYmRfbG5nIiwiYmRfbGF0IiwicmV0IiwiYWJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdHQUFnRyxhQUFhO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLDJFQUEyRSxhQUFhO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4RUFBOEUsZUFBZTtBQUM3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNlLDBHQUEyQyxFQUFDO0FBR3pEOzs7Ozs7Ozs7Ozs7OztBQzV3QkY7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxJQUFJLEdBQUMsd0JBQVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxHQUFHLEdBQUNELElBQUksR0FBQyxPQUFmO0FBQ0EsSUFBTUUsTUFBTSxHQUFDRCxHQUFHLEdBQUMsV0FBakI7QUFDQTtBQUNBLElBQU1FLEtBQUssR0FBQyxpQ0FBWjtBQUNBOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTLEdBQUMsa0NBQWhCOztBQUVBO0FBQ0EsSUFBTUMsV0FBVyxHQUFDSixHQUFHLEdBQUMsY0FBdEI7QUFDQSxJQUFNSyxVQUFVLEdBQUNMLEdBQUcsR0FBQyxhQUFyQixDLENBQWtDO0FBQ2xDLElBQU1NLFdBQVcsR0FBQ04sR0FBRyxHQUFDLGNBQXRCLEMsQ0FBb0M7O0FBRXBDLElBQU1PLFlBQVksR0FBQ1AsR0FBRyxHQUFDLGVBQXZCLEMsQ0FBc0M7QUFDdEMsSUFBTVEsV0FBVyxHQUFDUixHQUFHLEdBQUMsY0FBdEIsQyxDQUFvQztBQUNwQyxJQUFNUyxhQUFhLEdBQUNULEdBQUcsR0FBQyxlQUF4QixDLENBQXVDO0FBQ3ZDLElBQU1VLFlBQVksR0FBQ1YsR0FBRyxHQUFDLGVBQXZCLEMsQ0FBc0M7QUFDdEMsSUFBTVcsYUFBYSxHQUFDWCxHQUFHLEdBQUMsZ0JBQXhCLEMsQ0FBd0M7QUFDeEMsSUFBTVksbUJBQW1CLEdBQUNaLEdBQUcsR0FBQyxxQkFBOUIsQyxDQUFtRDtBQUNuRCxJQUFNYSw2QkFBNkIsR0FBQ2IsR0FBRyxHQUFDLGdDQUF4QyxDLENBQXdFO0FBQ3hFLElBQU1jLDZCQUE2QixHQUFDZCxHQUFHLEdBQUMsK0JBQXhDLEMsQ0FBdUU7QUFDdkUsSUFBTWUsaUNBQWlDLEdBQUNmLEdBQUcsR0FBQyxrQ0FBNUMsQyxDQUE4RTtBQUM5RSxJQUFNZ0IsNkJBQTZCLEdBQUNoQixHQUFHLEdBQUMsK0JBQXhDLEMsQ0FBdUU7QUFDdkUsSUFBTWlCLG1DQUFtQyxHQUFDakIsR0FBRyxHQUFDLHFDQUE5QyxDLENBQW1GO0FBQ25GLElBQU1rQiw4QkFBOEIsR0FBQ2xCLEdBQUcsR0FBQyxpQ0FBekMsQyxDQUEwRTtBQUMxRSxJQUFNbUIsK0JBQStCLEdBQUNuQixHQUFHLEdBQUMsa0NBQTFDLEMsQ0FBNEU7QUFDNUUsSUFBTW9CLHdCQUF3QixHQUFDcEIsR0FBRyxHQUFDLDJCQUFuQyxDLENBQThEO0FBQzlELElBQU1xQix3QkFBd0IsR0FBQ3JCLEdBQUcsR0FBQywyQkFBbkMsQyxDQUE4RDtBQUM5RCxJQUFNc0IsOEJBQThCLEdBQUN0QixHQUFHLEdBQUMsZ0NBQXpDLEMsQ0FBeUU7QUFDekUsSUFBTXVCLDZDQUE2QyxHQUFDdkIsR0FBRyxHQUFDLDZDQUF4RCxDLENBQXFHO0FBQ3JHLElBQU13QixvQkFBb0IsR0FBQ3hCLEdBQUcsR0FBQyx1QkFBL0IsQyxDQUFzRDtBQUN0RCxJQUFNeUIsMEJBQTBCLEdBQUN6QixHQUFHLEdBQUMsNEJBQXJDLEMsQ0FBaUU7OztBQUdqRTtBQUNBLElBQU0wQixnQ0FBZ0MsR0FBQzFCLEdBQUcsR0FBQyxrQ0FBM0MsQyxDQUE2RTs7QUFFN0UsSUFBTTJCLHlCQUF5QixHQUFDM0IsR0FBRyxHQUFDLDRCQUFwQyxDLENBQWdFOztBQUVoRSxJQUFNNEIseUJBQXlCLEdBQUM1QixHQUFHLEdBQUMsMkJBQXBDLEMsQ0FBK0Q7QUFDL0QsSUFBTTZCLFdBQVcsR0FBQzdCLEdBQUcsR0FBQyxjQUF0QixDLENBQW9DOzs7O0FBSXBDLElBQU04QixnQkFBZ0IsR0FBQzlCLEdBQUcsR0FBQyxtQkFBM0IsQyxDQUE4Qzs7O0FBRzlDOztBQUVBLElBQU0rQixnQ0FBZ0MsR0FBQzdCLEtBQUssR0FBQyxtQ0FBN0MsQyxDQUFnRjtBQUNoRixJQUFNOEIsc0NBQXNDLEdBQUM5QixLQUFLLEdBQUMseUNBQW5ELEMsQ0FBNEY7QUFDNUYsSUFBTStCLDJCQUEyQixHQUFDL0IsS0FBSyxHQUFDLDhCQUF4QyxDLENBQXNFOztBQUV0RTtBQUNBLElBQU1nQyxnQkFBZ0IsR0FBQ2hDLEtBQUssR0FBQyxrQkFBN0IsQyxDQUErQztBQUMvQyxJQUFNaUMsc0JBQXNCLEdBQUNqQyxLQUFLLEdBQUMsd0JBQW5DLEMsQ0FBMkQ7QUFDM0Q7O0FBRUEsSUFBTWtDLFdBQVcsR0FBQ2xDLEtBQUssR0FBQyxjQUF4QixDLENBQXNDO0FBQ3RDLElBQU1tQyxnQkFBZ0IsR0FBQ25DLEtBQUssR0FBQyxtQkFBN0IsQyxDQUFnRDtBQUNoRCxJQUFNb0MsZUFBZSxHQUFDcEMsS0FBSyxHQUFDLGtCQUE1QixDLENBQThDO0FBQzlDLElBQU1xQyxlQUFlLEdBQUNyQyxLQUFLLEdBQUMsa0JBQTVCLEMsQ0FBOEM7QUFDOUMsSUFBTXNDLGFBQWEsR0FBQ3RDLEtBQUssR0FBQyxnQkFBMUIsQyxDQUEwQztBQUMxQyxJQUFNdUMsYUFBYSxHQUFDdkMsS0FBSyxHQUFDLGdCQUExQixDLENBQTBDO0FBQzFDLElBQU13QyxhQUFhLEdBQUN4QyxLQUFLLEdBQUMsZ0JBQTFCLEMsQ0FBMEM7QUFDMUMsSUFBTXlDLGFBQWEsR0FBQ3pDLEtBQUssR0FBQyxnQkFBMUIsQyxDQUEwQztBQUMxQyxJQUFNMEMsYUFBYSxHQUFDMUMsS0FBSyxHQUFDLGdCQUExQixDLENBQTBDO0FBQzFDLElBQU0yQyxZQUFZLEdBQUMzQyxLQUFLLEdBQUMsZUFBekIsQyxDQUF3QztBQUN4QyxJQUFNNEMsZUFBZSxHQUFDNUMsS0FBSyxHQUFDLGtCQUE1QixDLENBQThDO0FBQzlDLElBQU02QyxZQUFZLEdBQUM3QyxLQUFLLEdBQUMsZUFBekIsQyxDQUF3QztBQUN4QyxJQUFNOEMsWUFBWSxHQUFDOUMsS0FBSyxHQUFDLGVBQXpCLEMsQ0FBd0M7QUFDeEMsSUFBTStDLGdCQUFnQixHQUFDL0MsS0FBSyxHQUFDLG1CQUE3QixDLENBQWdEO0FBQ2hELElBQU1nRCxhQUFhLEdBQUNoRCxLQUFLLEdBQUMsZ0JBQTFCLEMsQ0FBMEM7QUFDMUMsSUFBTWlELFlBQVksR0FBQ2pELEtBQUssR0FBQyxlQUF6QixDLENBQXdDO0FBQ3hDLElBQU1rRCxhQUFhLEdBQUNsRCxLQUFLLEdBQUMsZ0JBQTFCLEMsQ0FBMEM7QUFDMUMsSUFBTW1ELGFBQWEsR0FBQ25ELEtBQUssR0FBQyxnQkFBMUIsQyxDQUEwQztBQUMxQyxJQUFNb0QsY0FBYyxHQUFDcEQsS0FBSyxHQUFDLGlCQUEzQixDLENBQTRDO0FBQzVDLElBQU1xRCxpQkFBaUIsR0FBQ3JELEtBQUssR0FBQyxvQkFBOUIsQyxDQUFrRDtBQUNsRCxJQUFNc0QsaUJBQWlCLEdBQUN0RCxLQUFLLEdBQUMsb0JBQTlCLEMsQ0FBa0Q7O0FBRWxEdUQsTUFBTSxDQUFDQyxPQUFQLEdBQWU7QUFDZDFELEtBQUcsRUFBSEEsR0FEYztBQUVkRyxXQUFTLEVBQVRBLFNBRmM7QUFHZEMsYUFBVyxFQUFYQSxXQUhjO0FBSWRDLFlBQVUsRUFBVkEsVUFKYztBQUtkQyxhQUFXLEVBQVhBLFdBTGM7QUFNZEMsY0FBWSxFQUFaQSxZQU5jO0FBT2RDLGFBQVcsRUFBWEEsV0FQYztBQVFkQyxlQUFhLEVBQWJBLGFBUmM7QUFTZEMsY0FBWSxFQUFaQSxZQVRjO0FBVWRDLGVBQWEsRUFBYkEsYUFWYztBQVdkQyxxQkFBbUIsRUFBbkJBLG1CQVhjO0FBWWRDLCtCQUE2QixFQUE3QkEsNkJBWmM7QUFhZEMsK0JBQTZCLEVBQTdCQSw2QkFiYztBQWNkQyxtQ0FBaUMsRUFBakNBLGlDQWRjO0FBZWRDLCtCQUE2QixFQUE3QkEsNkJBZmM7QUFnQmRDLHFDQUFtQyxFQUFuQ0EsbUNBaEJjO0FBaUJkQyxnQ0FBOEIsRUFBOUJBLDhCQWpCYztBQWtCZEMsaUNBQStCLEVBQS9CQSwrQkFsQmM7QUFtQmRVLGFBQVcsRUFBWEEsV0FuQmM7QUFvQmRILGtDQUFnQyxFQUFoQ0EsZ0NBcEJjO0FBcUJkQywyQkFBeUIsRUFBekJBLHlCQXJCYztBQXNCZEMsMkJBQXlCLEVBQXpCQSx5QkF0QmM7QUF1QmRSLDBCQUF3QixFQUF4QkEsd0JBdkJjO0FBd0JkQywwQkFBd0IsRUFBeEJBLHdCQXhCYztBQXlCZEMsZ0NBQThCLEVBQTlCQSw4QkF6QmM7QUEwQmRDLCtDQUE2QyxFQUE3Q0EsNkNBMUJjO0FBMkJkQyxzQkFBb0IsRUFBcEJBLG9CQTNCYztBQTRCZEMsNEJBQTBCLEVBQTFCQSwwQkE1QmM7QUE2QmRNLGtDQUFnQyxFQUFoQ0EsZ0NBN0JjO0FBOEJkQyx3Q0FBc0MsRUFBdENBLHNDQTlCYztBQStCZEksYUFBVyxFQUFYQSxXQS9CYztBQWdDZEMsa0JBQWdCLEVBQWhCQSxnQkFoQ2M7QUFpQ2RDLGlCQUFlLEVBQWZBLGVBakNjO0FBa0NkQyxpQkFBZSxFQUFmQSxlQWxDYztBQW1DZEMsZUFBYSxFQUFiQSxhQW5DYztBQW9DZEMsZUFBYSxFQUFiQSxhQXBDYztBQXFDZEMsZUFBYSxFQUFiQSxhQXJDYztBQXNDZEMsZUFBYSxFQUFiQSxhQXRDYztBQXVDZEMsZUFBYSxFQUFiQSxhQXZDYztBQXdDZEMsY0FBWSxFQUFaQSxZQXhDYztBQXlDZEMsaUJBQWUsRUFBZkEsZUF6Q2M7QUEwQ2RDLGNBQVksRUFBWkEsWUExQ2M7QUEyQ2RDLGNBQVksRUFBWkEsWUEzQ2M7QUE0Q2RDLGtCQUFnQixFQUFoQkEsZ0JBNUNjO0FBNkNkQyxlQUFhLEVBQWJBLGFBN0NjO0FBOENkQyxjQUFZLEVBQVpBLFlBOUNjO0FBK0NkQyxlQUFhLEVBQWJBLGFBL0NjO0FBZ0RkQyxlQUFhLEVBQWJBLGFBaERjO0FBaURkQyxnQkFBYyxFQUFkQSxjQWpEYztBQWtEZEMsbUJBQWlCLEVBQWpCQSxpQkFsRGM7QUFtRGRDLG1CQUFpQixFQUFqQkEsaUJBbkRjO0FBb0RkdEIsa0JBQWdCLEVBQWhCQSxnQkFwRGM7QUFxRGRDLHdCQUFzQixFQUF0QkEsc0JBckRjO0FBc0RkTCxrQkFBZ0IsRUFBaEJBLGdCQXREYztBQXVEZDdCLFFBQU0sRUFBTkEsTUF2RGM7QUF3RGRnQyw2QkFBMkIsRUFBM0JBLDJCQXhEYyxFQUFmLEM7Ozs7Ozs7Ozs7O3dEQzVGQTtBQUNBLDJEO0FBQ0EsSUFBSTBCLGdCQUFnQixHQUFDLElBQXJCO0FBQ0EsSUFBSUMsZUFBZSxHQUFDLEVBQXBCO0FBQ0EsSUFBSUMsYUFBYSxHQUFDLEVBQWxCO0FBQ0EsSUFBSUMsT0FBTyxHQUFDLEVBQVo7QUFDQSxJQUFJQyxRQUFRLEdBQUMsRUFBYjtBQUNBLElBQUlDLGFBQWEsR0FBQyxFQUFsQjtBQUNBLElBQUlDLFNBQVMsR0FBQyxNQUFkO0FBQ0EsSUFBSUMsYUFBYSxHQUFDLEVBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLFVBQVQsQ0FBb0JuRSxHQUFwQixFQUF3Qm9FLElBQXhCLEVBQTZCQyxJQUE3QixFQUFrQ0MsS0FBbEMsRUFBd0M7QUFDdkNDLEtBQUcsQ0FBQ0MsV0FBSixDQUFnQixFQUFDQyxJQUFJLEVBQUMsSUFBTixFQUFoQjtBQUNBLE1BQUlDLEtBQUssR0FBQ0gsR0FBRyxDQUFDSSxjQUFKLENBQW1CLE9BQW5CLEtBQTZCLEVBQXZDO0FBQ0FKLEtBQUcsQ0FBQ0ssT0FBSixDQUFZO0FBQ1g1RSxPQUFHLEVBQUVBLEdBRE0sRUFDRDtBQUNWb0UsUUFBSSxFQUFFQSxJQUZLO0FBR1hTLFVBQU0sRUFBQyxLQUhJO0FBSVhDLFVBQU0sRUFBRTtBQUNQSixXQUFLLEVBQUxBLEtBRE8sRUFKRzs7QUFPWEssWUFBUSxFQUFDLGtCQUFDQyxHQUFELEVBQVE7QUFDaEJULFNBQUcsQ0FBQ1UsV0FBSjtBQUNBLFVBQUcsQ0FBQ0QsR0FBRyxDQUFDWixJQUFSLEVBQWE7QUFDWixlQUFPRSxLQUFQLElBQWMsVUFBZCxHQUF5QkEsS0FBSyxFQUE5QixHQUFpQyxFQUFqQztBQUNBLE9BRkQsTUFFTSxJQUFHVSxHQUFHLENBQUNaLElBQUosQ0FBU2MsSUFBVCxJQUFlLENBQWxCLEVBQW9CO0FBQ3pCLGVBQU9iLElBQVAsSUFBYSxVQUFiLEdBQXdCQSxJQUFJLENBQUNXLEdBQUcsQ0FBQ1osSUFBTCxDQUE1QixHQUF1QyxFQUF2QztBQUNBLE9BRkssTUFFRDtBQUNKZSxlQUFPLENBQUNDLEdBQVIsT0FBWUosR0FBRyxDQUFDWixJQUFoQjtBQUNBRyxXQUFHLENBQUNjLFNBQUosQ0FBYztBQUNiQyxjQUFJLEVBQUMsTUFEUTtBQUViQyxlQUFLLEVBQUNQLEdBQUcsQ0FBQ1osSUFBSixDQUFTb0IsR0FBVCxJQUFjLE1BRlAsRUFBZDs7QUFJQTtBQUNELEtBcEJVLEVBQVo7O0FBc0JBOztBQUVELFNBQVNDLFlBQVQsQ0FBc0J6RixHQUF0QixFQUEwQm9FLElBQTFCLEVBQStCQyxJQUEvQixFQUFvQ0MsS0FBcEMsRUFBMEM7QUFDekMsTUFBSUksS0FBSyxHQUFDSCxHQUFHLENBQUNJLGNBQUosQ0FBbUIsT0FBbkIsS0FBNkIsRUFBdkM7QUFDQUosS0FBRyxDQUFDSyxPQUFKLENBQVk7QUFDWDVFLE9BQUcsRUFBRUEsR0FETTtBQUVYb0UsUUFBSSxFQUFFQSxJQUZLO0FBR1hTLFVBQU0sRUFBQyxLQUhJO0FBSVhDLFVBQU0sRUFBRTtBQUNQSixXQUFLLEVBQUxBLEtBRE8sRUFKRzs7QUFPWEssWUFBUSxFQUFDLGtCQUFDQyxHQUFELEVBQVE7QUFDaEIsVUFBRyxDQUFDQSxHQUFHLENBQUNaLElBQVIsRUFBYTtBQUNaLGVBQU9FLEtBQVAsSUFBYyxVQUFkLEdBQXlCQSxLQUFLLEVBQTlCLEdBQWlDLEVBQWpDO0FBQ0EsT0FGRCxNQUVLO0FBQ0osZUFBT0QsSUFBUCxJQUFhLFVBQWIsR0FBd0JBLElBQUksQ0FBQ1csR0FBRyxDQUFDWixJQUFMLENBQTVCLEdBQXVDLEVBQXZDO0FBQ0E7QUFDRCxLQWJVLEVBQVo7O0FBZUE7O0FBRUQsU0FBU3NCLFlBQVQsQ0FBc0IxRixHQUF0QixFQUEwQm9FLElBQTFCLEVBQStCQyxJQUEvQixFQUFvQ0MsS0FBcEMsRUFBMEM7QUFDekMsTUFBSUksS0FBSyxHQUFDSCxHQUFHLENBQUNJLGNBQUosQ0FBbUIsT0FBbkIsS0FBNkIsRUFBdkM7QUFDQUosS0FBRyxDQUFDSyxPQUFKLENBQVk7QUFDWDVFLE9BQUcsRUFBRUEsR0FETTtBQUVYb0UsUUFBSSxFQUFFQSxJQUZLO0FBR1hTLFVBQU0sRUFBQyxLQUhJO0FBSVhDLFVBQU0sRUFBRTtBQUNQSixXQUFLLEVBQUxBLEtBRE8sRUFKRzs7QUFPWEssWUFBUSxFQUFDLGtCQUFDQyxHQUFELEVBQVE7QUFDaEIsVUFBRyxDQUFDQSxHQUFHLENBQUNaLElBQVIsRUFBYTtBQUNaLGVBQU9FLEtBQVAsSUFBYyxVQUFkLEdBQXlCQSxLQUFLLEVBQTlCLEdBQWlDLEVBQWpDO0FBQ0EsT0FGRCxNQUVNLElBQUdVLEdBQUcsQ0FBQ1osSUFBSixDQUFTYyxJQUFULElBQWUsQ0FBbEIsRUFBb0I7QUFDekIsZUFBT2IsSUFBUCxJQUFhLFVBQWIsR0FBd0JBLElBQUksQ0FBQ1csR0FBRyxDQUFDWixJQUFMLENBQTVCLEdBQXVDLEVBQXZDO0FBQ0EsT0FGSyxNQUVEO0FBQ0osZUFBT0UsS0FBUCxJQUFjLFVBQWQsR0FBeUJBLEtBQUssQ0FBQ1UsR0FBRyxDQUFDWixJQUFMLENBQTlCLEdBQXlDLEVBQXpDO0FBQ0E7QUFDRCxLQWZVLEVBQVo7O0FBaUJBOztBQUVELFNBQVN1QixhQUFULENBQXVCM0YsR0FBdkIsRUFBMkJvRSxJQUEzQixFQUFnQ0MsSUFBaEMsRUFBcUNDLEtBQXJDLEVBQTJDO0FBQzFDLE1BQUlJLEtBQUssR0FBQ0gsR0FBRyxDQUFDSSxjQUFKLENBQW1CLE9BQW5CLEtBQTZCLEVBQXZDO0FBQ0FKLEtBQUcsQ0FBQ0ssT0FBSixDQUFZO0FBQ1g1RSxPQUFHLEVBQUVBLEdBRE0sRUFDRDtBQUNWb0UsUUFBSSxFQUFFQSxJQUZLO0FBR1hTLFVBQU0sRUFBQyxNQUhJO0FBSVhDLFVBQU0sRUFBRTtBQUNQLHNCQUFlLG1DQURSO0FBRVBKLFdBQUssRUFBTEEsS0FGTyxFQUpHOztBQVFYa0IsV0FBTyxFQUFFLGlCQUFDWixHQUFELEVBQVM7QUFDakI7QUFDQyxhQUFPWCxJQUFQLElBQWEsVUFBYixHQUF3QkEsSUFBSSxDQUFDVyxHQUFHLENBQUNaLElBQUwsQ0FBNUIsR0FBdUMsRUFBdkM7QUFDRDtBQUNDO0FBQ0Q7QUFDQSxLQWRVLEVBQVo7O0FBZ0JBOzs7QUFHRCxTQUFTeUIsV0FBVCxDQUFxQjdGLEdBQXJCLEVBQXlCb0UsSUFBekIsRUFBOEJDLElBQTlCLEVBQW1DQyxLQUFuQyxFQUF5QztBQUN4Q0MsS0FBRyxDQUFDQyxXQUFKLENBQWdCLEVBQUNDLElBQUksRUFBQyxJQUFOLEVBQWhCO0FBQ0EsTUFBSUMsS0FBSyxHQUFDSCxHQUFHLENBQUNJLGNBQUosQ0FBbUIsT0FBbkIsS0FBNkIsRUFBdkM7QUFDQUosS0FBRyxDQUFDSyxPQUFKLENBQVk7QUFDWDVFLE9BQUcsRUFBRUEsR0FETSxFQUNEO0FBQ1ZvRSxRQUFJLEVBQUVBLElBRks7QUFHWFMsVUFBTSxFQUFDLE1BSEk7QUFJWEMsVUFBTSxFQUFFO0FBQ1Asc0JBQWUsbUNBRFI7QUFFUEosV0FBSyxFQUFMQSxLQUZPLEVBSkc7O0FBUVhLLFlBQVEsRUFBQyxrQkFBQ0MsR0FBRCxFQUFRO0FBQ2hCVCxTQUFHLENBQUNVLFdBQUo7QUFDQSxVQUFHLENBQUNELEdBQUcsQ0FBQ1osSUFBUixFQUFhO0FBQ1osZUFBT0UsS0FBUCxJQUFjLFVBQWQsR0FBeUJBLEtBQUssRUFBOUIsR0FBaUMsRUFBakM7QUFDQSxPQUZELE1BRU0sSUFBR1UsR0FBRyxDQUFDWixJQUFKLENBQVNjLElBQVQsSUFBZSxDQUFsQixFQUFvQjtBQUN6QixlQUFPYixJQUFQLElBQWEsVUFBYixHQUF3QkEsSUFBSSxDQUFDVyxHQUFHLENBQUNaLElBQUwsQ0FBNUIsR0FBdUMsRUFBdkM7QUFDQSxPQUZLLE1BRUQ7QUFDSkcsV0FBRyxDQUFDYyxTQUFKLENBQWM7QUFDYkMsY0FBSSxFQUFDLE1BRFE7QUFFYkMsZUFBSyxFQUFDUCxHQUFHLENBQUNaLElBQUosQ0FBU29CLEdBQVQsSUFBYyxNQUZQLEVBQWQ7O0FBSUE7QUFDRCxLQXBCVSxFQUFaOztBQXNCQTs7O0FBR0QsU0FBU00sWUFBVCxDQUFzQjFCLElBQXRCLEVBQTJCLENBQUM7QUFDM0IyQixZQUFVLENBQUMzQixJQUFJLENBQUM0QixVQUFOLEVBQWlCLFVBQVNDLE9BQVQsRUFBaUJDLEtBQWpCLEVBQXVCO0FBQ2pEOUIsUUFBSSxDQUFDNEIsVUFBTCxHQUFnQkMsT0FBaEI7QUFDQWQsV0FBTyxDQUFDQyxHQUFSLE9BQVloQixJQUFaO0FBQ0ErQixrQkFBYyxDQUFDQyxtQkFBSWhGLHdCQUFMLEVBQThCZ0QsSUFBOUIsQ0FBZDtBQUNBLEdBSlMsRUFJUixDQUpRLEVBSU4sVUFBQzZCLE9BQUQsRUFBVztBQUNkSCxnQkFBWSxDQUFDMUIsSUFBRCxDQUFaO0FBQ0EsR0FOUyxDQUFWO0FBT0E7QUFDRCxTQUFTaUMsdUJBQVQsQ0FBaUNqQyxJQUFqQyxFQUFzQyxDQUFDO0FBQ3RDMkIsWUFBVSxDQUFDM0IsSUFBSSxDQUFDa0Msa0JBQU4sRUFBeUIsVUFBU0wsT0FBVCxFQUFpQkMsS0FBakIsRUFBdUI7QUFDekQ5QixRQUFJLENBQUNrQyxrQkFBTCxHQUF3QkwsT0FBeEI7QUFDQUUsa0JBQWMsQ0FBQ0MsbUJBQUl6RSx5QkFBTCxFQUErQnlDLElBQS9CLENBQWQ7QUFDQSxHQUhTLENBQVY7QUFJQTtBQUNELFNBQVNtQyxjQUFULENBQXdCbkMsSUFBeEIsRUFBNkIsQ0FBQztBQUM3QixNQUFJb0MsWUFBWSxHQUFDLENBQWpCO0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNyQyxJQUFJLENBQUNzQyxNQUFuQixFQUEwQkQsQ0FBQyxFQUEzQixFQUE4QjtBQUM3QixRQUFHckMsSUFBSSxDQUFDcUMsQ0FBRCxDQUFKLENBQVFFLFlBQVgsRUFBd0I7QUFDdkJILGtCQUFZO0FBQ1pULGdCQUFVLENBQUMzQixJQUFJLENBQUNxQyxDQUFELENBQUosQ0FBUUUsWUFBVCxFQUFzQixVQUFTVixPQUFULEVBQWlCQyxLQUFqQixFQUF1QjtBQUN0RE0sb0JBQVk7QUFDWnBDLFlBQUksQ0FBQzhCLEtBQUQsQ0FBSixDQUFZUyxZQUFaLEdBQXlCVixPQUF6QjtBQUNBLFlBQUdPLFlBQVksSUFBRSxDQUFqQixFQUFtQjtBQUNsQnBDLGNBQUksR0FBQ3dDLElBQUksQ0FBQ0MsU0FBTCxDQUFlekMsSUFBZixDQUFMO0FBQ0EwQyxxQkFBVyxDQUFDVixtQkFBSW5GLG1DQUFMLEVBQXlDbUQsSUFBekMsQ0FBWDtBQUNBO0FBQ0QsT0FQUyxFQU9ScUMsQ0FQUSxFQU9OLFVBQUNSLE9BQUQsRUFBVztBQUNkTSxzQkFBYyxDQUFDbkMsSUFBRCxDQUFkO0FBQ0EsT0FUUyxDQUFWO0FBVUE7QUFDRDtBQUNEO0FBQ0QsU0FBUytCLGNBQVQsQ0FBd0JuRyxHQUF4QixFQUE0Qm9FLElBQTVCLEVBQWlDLENBQUM7QUFDakM7QUFDQXNCLGNBQVksQ0FBQzFGLEdBQUQsRUFBS29FLElBQUwsRUFBVSxVQUFDNkIsT0FBRCxFQUFXO0FBQ2hDZCxXQUFPLENBQUNDLEdBQVIsT0FBWWEsT0FBWjtBQUNBLEdBRlcsRUFFVixVQUFDQSxPQUFELEVBQVc7QUFDWkUsa0JBQWMsQ0FBQ25HLEdBQUQsRUFBS29FLElBQUwsQ0FBZDtBQUNBLEdBSlcsQ0FBWjtBQUtBO0FBQ0QsU0FBUzBDLFdBQVQsQ0FBcUI5RyxHQUFyQixFQUF5Qm9FLElBQXpCLEVBQThCLENBQUM7QUFDOUJzQixjQUFZLENBQUMxRixHQUFELEVBQUssRUFBQ29FLElBQUksRUFBSkEsSUFBRCxFQUFMLEVBQVksVUFBQzZCLE9BQUQsRUFBVztBQUNsQ2QsV0FBTyxDQUFDQyxHQUFSLE9BQVksTUFBWjtBQUNBLEdBRlcsRUFFVixVQUFDYSxPQUFELEVBQVc7QUFDWmEsZUFBVyxDQUFDOUcsR0FBRCxFQUFLb0UsSUFBTCxDQUFYO0FBQ0EsR0FKVyxDQUFaO0FBS0E7Ozs7QUFJRCxTQUFTMkIsVUFBVCxDQUFvQmdCLElBQXBCLEVBQXlCMUMsSUFBekIsRUFBOEI2QixLQUE5QixFQUFvQzVCLEtBQXBDLEVBQTBDLENBQUM7QUFDMUMsTUFBSXlDLElBQUksR0FBQ0EsSUFBSSxDQUFDQyxLQUFMLENBQVcsR0FBWCxDQUFUO0FBQ0EsTUFBSUMsT0FBTyxHQUFDLEVBQVo7QUFDQSxNQUFJQyxRQUFRLEdBQUMsQ0FBYjtBQUNBLE9BQUksSUFBSVQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDTSxJQUFJLENBQUNMLE1BQW5CLEVBQTBCRCxDQUFDLEVBQTNCLEVBQThCO0FBQzdCUyxZQUFRO0FBQ1JDLGNBQVUsQ0FBQ2YsbUJBQUl6RixhQUFMLEVBQW1Cb0csSUFBSSxDQUFDTixDQUFELENBQXZCLEVBQTJCLFVBQUNSLE9BQUQsRUFBVztBQUMvQztBQUNBQSxhQUFPLEdBQUNXLElBQUksQ0FBQ1EsS0FBTCxDQUFXbkIsT0FBWCxDQUFSO0FBQ0FnQixhQUFPLENBQUNJLElBQVIsQ0FBYXBCLE9BQU8sQ0FBQzdCLElBQXJCO0FBQ0E4QyxjQUFRO0FBQ1IsVUFBR0EsUUFBUSxJQUFFLENBQWIsRUFBZTtBQUNkRCxlQUFPLEdBQUNBLE9BQU8sQ0FBQ0ssSUFBUixDQUFhLEdBQWIsQ0FBUjtBQUNBakQsWUFBSSxDQUFDNEMsT0FBRCxFQUFTZixLQUFULENBQUo7QUFDQTtBQUNELEtBVFMsRUFTUixVQUFDRCxPQUFELEVBQVc7QUFDWjNCLFdBQUssQ0FBQzJCLE9BQUQsQ0FBTDtBQUNBLEtBWFMsQ0FBVjtBQVlBO0FBQ0Q7O0FBRUQsU0FBU2tCLFVBQVQsQ0FBb0JuSCxHQUFwQixFQUF3Qm9FLElBQXhCLEVBQTZCQyxJQUE3QixFQUFrQ0MsS0FBbEMsRUFBd0MsQ0FBQztBQUN4QyxNQUFJSSxLQUFLLEdBQUNILEdBQUcsQ0FBQ0ksY0FBSixDQUFtQixPQUFuQixLQUE2QixFQUF2QztBQUNBSixLQUFHLENBQUM0QyxVQUFKLENBQWU7QUFDZG5ILE9BQUcsRUFBRUEsR0FEUyxFQUNKO0FBQ1Z1SCxZQUFRLEVBQUMsT0FGSztBQUdkQyxZQUFRLEVBQUNwRCxJQUhLO0FBSWRxRCxRQUFJLEVBQUMsTUFKUztBQUtkM0MsVUFBTSxFQUFFO0FBQ1BKLFdBQUssRUFBTEEsS0FETyxFQUxNOztBQVFka0IsV0FBTyxFQUFFLGlCQUFDWixHQUFELEVBQVM7QUFDakIsVUFBR0EsR0FBRyxDQUFDWixJQUFKLElBQVUsUUFBYixFQUFzQjtBQUNyQixlQUFPQyxJQUFQLElBQWEsVUFBYixHQUF3QkEsSUFBSSxDQUFDVyxHQUFHLENBQUNaLElBQUwsQ0FBNUIsR0FBdUMsRUFBdkM7QUFDQSxPQUZELE1BRUs7QUFDSixlQUFPRSxLQUFQLElBQWMsVUFBZCxHQUF5QkEsS0FBSyxDQUFDRixJQUFELENBQTlCLEdBQXFDLEVBQXJDO0FBQ0E7QUFDRCxLQWRhO0FBZWRzRCxRQWZjLGdCQWVUMUMsR0FmUyxFQWVMO0FBQ1IsYUFBT1YsS0FBUCxJQUFjLFVBQWQsR0FBeUJBLEtBQUssQ0FBQ0YsSUFBRCxDQUE5QixHQUFxQyxFQUFyQztBQUNBLEtBakJhLEVBQWY7O0FBbUJBO0FBQ0QsU0FBU3VELFdBQVQsQ0FBcUJuQyxHQUFyQixFQUF5Qm5CLElBQXpCLEVBQThCO0FBQzdCRSxLQUFHLENBQUNjLFNBQUosQ0FBYztBQUNiQyxRQUFJLEVBQUMsU0FEUTtBQUViQyxTQUFLLEVBQUNDLEdBRk8sRUFBZDs7QUFJQSxTQUFPbkIsSUFBUCxJQUFhLFVBQWIsR0FBd0J1RCxVQUFVLENBQUN2RCxJQUFELEVBQU0sSUFBTixDQUFsQyxHQUE4QyxFQUE5QztBQUNBO0FBQ0QsSUFBTXdELGtCQUFrQixHQUFDLElBQXpCOztBQUVBLElBQU1DLHNCQUFzQixHQUFDLElBQTdCOztBQUVBLElBQU1DLFNBQVMsR0FBQyxTQUFWQSxTQUFVLENBQVNDLEVBQVQsRUFBWTtBQUMzQnpELEtBQUcsQ0FBQzBELGFBQUosQ0FBa0I7QUFDakJqSSxPQUFHLEVBQUVvRyxtQkFBSWpHLFNBQUosR0FBYzZILEVBREY7QUFFakJsRCxVQUFNLEVBQUU7QUFDUCxzQkFBZ0Isa0JBRFQsRUFGUzs7QUFLakJELFVBQU0sRUFBRSxLQUxTLEVBQWxCOztBQU9BLENBUkQ7QUFTQU4sR0FBRyxDQUFDMkQsWUFBSixDQUFpQixVQUFVbEQsR0FBVixFQUFlO0FBQy9CRyxTQUFPLENBQUNDLEdBQVIsT0FBWSxpQkFBWjtBQUNBLENBRkQ7O0FBSUEsSUFBSStDLFdBQVcsR0FBQyxTQUFaQSxXQUFZLEdBQVU7QUFDekJ4RSxrQkFBZ0IsR0FBQ3lFLFdBQVcsQ0FBQyxZQUFVO0FBQ3RDN0QsT0FBRyxDQUFDNEQsV0FBSixDQUFnQjtBQUNmRSxVQUFJLEVBQUMsT0FEVTtBQUVmekMsYUFGZSxtQkFFUFosR0FGTyxFQUVIO0FBQ1hULFdBQUcsQ0FBQytELGNBQUosQ0FBbUIsY0FBbkIsRUFBa0MsRUFBQ0MsU0FBUyxFQUFDdkQsR0FBRyxDQUFDdUQsU0FBZixFQUF5QkMsUUFBUSxFQUFDeEQsR0FBRyxDQUFDd0QsUUFBdEMsRUFBbEM7QUFDQSxPQUpjO0FBS2ZkLFVBTGUsZ0JBS1YxQyxHQUxVLEVBS047QUFDUkcsZUFBTyxDQUFDQyxHQUFSLE9BQVlKLEdBQVo7QUFDQXlELHFCQUFhLENBQUM5RSxnQkFBRCxDQUFiO0FBQ0FZLFdBQUcsQ0FBQ21FLFNBQUosQ0FBYztBQUNibkQsZUFBSyxFQUFDLFVBRE87QUFFYm9ELGlCQUFPLEVBQUMsV0FGSztBQUdiQyxvQkFBVSxFQUFDLEtBSEU7QUFJYmhELGlCQUphLG1CQUlMWixHQUpLLEVBSUQ7QUFDWEcsbUJBQU8sQ0FBQ0MsR0FBUixPQUFZSixHQUFHLENBQUM2RCxPQUFoQjtBQUNBdEUsZUFBRyxDQUFDK0QsY0FBSixDQUFtQixjQUFuQixFQUFrQyxFQUFDQyxTQUFTLEVBQUMsQ0FBWCxFQUFhQyxRQUFRLEVBQUMsQ0FBdEIsRUFBbEM7QUFDQUwsdUJBQVc7QUFDWCxXQVJZO0FBU2JULGNBVGEsZ0JBU1IxQyxHQVRRLEVBU0o7QUFDUkcsbUJBQU8sQ0FBQ0MsR0FBUixPQUFZSixHQUFaO0FBQ0EsV0FYWSxFQUFkOztBQWFBLE9BckJjLEVBQWhCOztBQXVCQSxHQXhCMkIsRUF3QjFCLElBeEIwQixDQUE1QjtBQXlCQSxDQTFCRDs7QUE0QkEsSUFBSThELFdBQVcsR0FBQyxTQUFaQSxXQUFZLENBQVNkLEVBQVQsRUFBWTtBQUMzQixNQUFHLENBQUMsQ0FBQ3BFLGVBQWUsQ0FBQ29FLEVBQUQsQ0FBcEIsRUFBeUI7QUFDeEJTLGlCQUFhLENBQUM3RSxlQUFlLENBQUNvRSxFQUFELENBQWhCLENBQWI7QUFDQTtBQUNELENBSkQ7QUFLQSxJQUFJZSxhQUFhLEdBQUMsU0FBZEEsYUFBYyxHQUFVO0FBQzNCTixlQUFhLENBQUM5RSxnQkFBRCxDQUFiO0FBQ0EsQ0FGRDtBQUdBLElBQUlxRixTQUFTLEdBQUMsU0FBVkEsU0FBVSxDQUFTaEIsRUFBVCxFQUFZO0FBQ3pCcEUsaUJBQWUsQ0FBQ29FLEVBQUQsQ0FBZixHQUFvQkksV0FBVyxDQUFDLFlBQVU7QUFDekMsUUFBSWEsWUFBWSxHQUFDMUUsR0FBRyxDQUFDSSxjQUFKLENBQW1CLGNBQW5CLENBQWpCO0FBQ0EsUUFBSVAsSUFBSSxHQUFDO0FBQ1I4RSxrQkFBWSxFQUFDbEIsRUFETDtBQUVSTyxlQUFTLEVBQUNVLFlBQVksQ0FBQ1YsU0FGZjtBQUdSQyxjQUFRLEVBQUNTLFlBQVksQ0FBQ1QsUUFIZCxFQUFUOztBQUtBLFFBQUlXLE1BQU0sR0FBQ3RGLGFBQWEsQ0FBQ21FLEVBQUQsQ0FBYixHQUFrQm5FLGFBQWEsQ0FBQ21FLEVBQUQsQ0FBL0IsR0FBb0MsRUFBL0M7QUFDQSxRQUFJb0IsSUFBSSxHQUFDLElBQUlDLElBQUosRUFBVDtBQUNBRixVQUFNLENBQUM5QixJQUFQLENBQVk7QUFDWDZCLGtCQUFZLEVBQUNsQixFQURGO0FBRVhPLGVBQVMsRUFBQ1UsWUFBWSxDQUFDVixTQUZaO0FBR1hDLGNBQVEsRUFBQ1MsWUFBWSxDQUFDVCxRQUhYO0FBSVhjLGtCQUFZLEVBQUNGLElBQUksQ0FBQ0csT0FBTCxFQUpGLEVBQVo7O0FBTUExRixpQkFBYSxDQUFDbUUsRUFBRCxDQUFiLEdBQWtCbUIsTUFBbEI7QUFDQXhELGlCQUFhLENBQUNTLG1CQUFJM0UsMEJBQUwsRUFBZ0MsRUFBQzJDLElBQUksRUFBQ3dDLElBQUksQ0FBQ0MsU0FBTCxDQUFlc0MsTUFBZixDQUFOLEVBQTZCbkIsRUFBRSxFQUFDQSxFQUFoQyxFQUFoQyxFQUFvRSxVQUFDL0IsT0FBRCxFQUFXO0FBQzNGLFVBQUdBLE9BQU8sQ0FBQ2YsSUFBUixJQUFjLENBQWpCLEVBQW1CO0FBQ2xCNEQsbUJBQVcsQ0FBQ2QsRUFBRCxDQUFYO0FBQ0EsWUFBSXdCLE1BQU0sR0FBQ2pGLEdBQUcsQ0FBQ0ksY0FBSixDQUFtQixRQUFuQixJQUE2QkosR0FBRyxDQUFDSSxjQUFKLENBQW1CLFFBQW5CLENBQTdCLEdBQTBELEVBQXJFO0FBQ0E2RSxjQUFNLENBQUNDLE1BQVAsQ0FBY0QsTUFBTSxDQUFDRSxPQUFQLENBQWUsS0FBSSxDQUFDQyxNQUFwQixDQUFkO0FBQ0FwRixXQUFHLENBQUMrRCxjQUFKLENBQW1CLFFBQW5CLEVBQTRCa0IsTUFBNUI7QUFDQTtBQUNEM0YsbUJBQWEsQ0FBQ21FLEVBQUQsQ0FBYixHQUFrQixFQUFsQjtBQUNBLEtBUlksQ0FBYjtBQVNBLEdBekI4QixFQXlCN0IvRCxTQXpCNkIsQ0FBL0I7QUEwQkEsQ0EzQkQ7OztBQThCQSxTQUFTMkYsWUFBVCxDQUFzQnJCLFNBQXRCLEVBQWdDQyxRQUFoQyxFQUF5QyxDQUFDO0FBQ3pDO0FBQ0EsTUFBSXFCLFlBQVksR0FBQ0MsaUJBQVFELFlBQVIsQ0FBcUJ0QixTQUFyQixFQUErQkMsUUFBL0IsQ0FBakI7QUFDQUQsV0FBUyxHQUFDc0IsWUFBWSxDQUFDLENBQUQsQ0FBdEI7QUFDQXJCLFVBQVEsR0FBQ3FCLFlBQVksQ0FBQyxDQUFELENBQXJCO0FBQ0EsTUFBSUUsSUFBSSxDQUFDQyxFQUFMLENBQVF2QyxJQUFSLElBQWdCLFNBQXBCLEVBQStCO0FBQzlCc0MsUUFBSSxDQUFDRSxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsc0RBQW9EMUIsUUFBcEQsR0FBNkQsUUFBN0QsR0FBc0VELFNBQXRFLEdBQWdGLFlBQXJHO0FBQ0MsY0FBUzRCLENBQVQsRUFBWTtBQUNYNUYsU0FBRyxDQUFDYyxTQUFKLENBQWM7QUFDYkMsWUFBSSxFQUFDLE1BRFE7QUFFYkMsYUFBSyxFQUFDLGVBRk8sRUFBZDs7QUFJQUosYUFBTyxDQUFDQyxHQUFSLE9BQVkseUNBQXlDK0UsQ0FBQyxDQUFDQyxPQUF2RDtBQUNBLEtBUEYsRUFPRyxzQkFQSDs7QUFTQSxHQVZELE1BVU8sSUFBSUwsSUFBSSxDQUFDQyxFQUFMLENBQVF2QyxJQUFSLElBQWdCLEtBQXBCLEVBQTJCO0FBQ2pDc0MsUUFBSSxDQUFDRSxPQUFMLENBQWFJLGlCQUFiLENBQStCLEVBQUVDLE1BQU0sRUFBQyxpRkFBK0U5QixRQUEvRSxHQUF3RixRQUF4RixHQUFpR0QsU0FBakcsR0FBMkcsWUFBcEgsRUFBL0IsRUFBbUssVUFBUzRCLENBQVQsRUFBWTtBQUM5SzVGLFNBQUcsQ0FBQ2MsU0FBSixDQUFjO0FBQ2JDLFlBQUksRUFBQyxNQURRO0FBRWJDLGFBQUssRUFBQyxlQUZPLEVBQWQ7O0FBSUFKLGFBQU8sQ0FBQ0MsR0FBUixPQUFZLHlDQUF5QytFLENBQUMsQ0FBQ0MsT0FBdkQ7QUFDQSxLQU5EO0FBT0E7QUFDRDs7QUFFRCxTQUFTRyxjQUFULENBQXdCbEMsSUFBeEIsRUFBNkI7QUFDNUIsTUFBSVosSUFBSSxHQUFDLEdBQVQ7QUFDQSxVQUFPWSxJQUFQO0FBQ0MsU0FBSyxVQUFMO0FBQ0NaLFVBQUksR0FBQyxJQUFMO0FBQ0Q7QUFDQSxTQUFLLGNBQUw7QUFDQ0EsVUFBSSxHQUFDLE1BQUw7QUFDRDtBQUNBLFNBQUssTUFBTDtBQUNDQSxVQUFJLEdBQUMsTUFBTDtBQUNEO0FBQ0EsU0FBSyxNQUFMO0FBQ0NBLFVBQUksR0FBQyxNQUFMO0FBQ0Q7QUFDQSxTQUFLLE1BQUw7QUFDQ0EsVUFBSSxHQUFDLE1BQUw7QUFDRDtBQUNBLFNBQUssZUFBTDtBQUNDQSxVQUFJLEdBQUMsTUFBTDtBQUNEO0FBQ0EsU0FBSyxTQUFMO0FBQ0NBLFVBQUksR0FBQyxTQUFMO0FBQ0Q7QUFDQSxTQUFLLGlCQUFMO0FBQ0NBLFVBQUksR0FBQyxNQUFMO0FBQ0Q7QUFDQSxTQUFLLE1BQUw7QUFDQ0EsVUFBSSxHQUFDLE1BQUw7QUFDRDtBQUNBLFNBQUssUUFBTDtBQUNDQSxVQUFJLEdBQUMsVUFBTDtBQUNEO0FBQ0EsU0FBSyxPQUFMO0FBQ0NBLFVBQUksR0FBQyxVQUFMO0FBQ0Q7QUFDQSxTQUFLLGNBQUw7QUFDQ0EsVUFBSSxHQUFDLEtBQUw7QUFDRDtBQUNBLFNBQUssUUFBTDtBQUNDQSxVQUFJLEdBQUMsSUFBTDtBQUNEO0FBQ0EsU0FBSyxVQUFMO0FBQ0NBLFVBQUksR0FBQyxVQUFMO0FBQ0Q7QUFDQSxTQUFLLEtBQUw7QUFDQ0EsVUFBSSxHQUFDLEtBQUw7QUFDRDtBQUNBLFNBQUssZUFBTDtBQUNDQSxVQUFJLEdBQUMsTUFBTDtBQUNEO0FBQ0EsU0FBSyxZQUFMO0FBQ0NBLFVBQUksR0FBQyxLQUFMO0FBQ0Q7QUFDQSxTQUFLLFdBQUw7QUFDQ0EsVUFBSSxHQUFDLEtBQUw7QUFDRDtBQUNBLFNBQUssYUFBTDtBQUNDQSxVQUFJLEdBQUMsTUFBTDtBQUNEO0FBQ0EsU0FBSyxVQUFMO0FBQ0NBLFVBQUksR0FBQyxVQUFMO0FBQ0QsWUE1REQ7O0FBOERBLFNBQU9BLElBQVA7QUFDQTs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FoRSxNQUFNLENBQUNDLE9BQVAsR0FBZTtBQUNkUyxZQUFVLEVBQVZBLFVBRGM7QUFFZHVCLGNBQVksRUFBWkEsWUFGYztBQUdkRCxjQUFZLEVBQVpBLFlBSGM7QUFJZEksYUFBVyxFQUFYQSxXQUpjO0FBS2RGLGVBQWEsRUFBYkEsYUFMYztBQU1kd0IsWUFBVSxFQUFWQSxVQU5jO0FBT2RRLGFBQVcsRUFBWEEsV0FQYztBQVFkRSxvQkFBa0IsRUFBbEJBLGtCQVJjO0FBU2RDLHdCQUFzQixFQUF0QkEsc0JBVGM7QUFVZEMsV0FBUyxFQUFUQSxTQVZjO0FBV2RpQixXQUFTLEVBQVRBLFNBWGM7QUFZZEQsZUFBYSxFQUFiQSxhQVpjO0FBYWRELGFBQVcsRUFBWEEsV0FiYztBQWNkWCxhQUFXLEVBQVhBLFdBZGM7QUFlZDVCLGdCQUFjLEVBQWRBLGNBZmM7QUFnQmRULGNBQVksRUFBWkEsWUFoQmM7QUFpQmRPLHlCQUF1QixFQUF2QkEsdUJBakJjO0FBa0JkdkMsU0FBTyxFQUFQQSxPQWxCYztBQW1CZDtBQUNBQyxVQUFRLEVBQVJBLFFBcEJjO0FBcUJkQyxlQUFhLEVBQWJBLGFBckJjO0FBc0JkQyxXQUFTLEVBQVRBLFNBdEJjO0FBdUJkdUcsV0FBUyxFQUFDLENBdkJJO0FBd0JkQyxXQUFTLEVBQUMsQ0F4Qkk7QUF5QmR2RyxlQUFhLEVBQWJBLGFBekJjO0FBMEJkMEYsY0FBWSxFQUFaQSxZQTFCYztBQTJCZFcsZ0JBQWMsRUFBZEEsY0EzQmMsRUFBZixDOzs7Ozs7Ozs7Ozs7QUNwYkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNDQSxTQUFTVCxPQUFULEdBQW1CO0FBQ2YsT0FBS1ksSUFBTCxHQUFZLHNCQUFzQixNQUF0QixHQUErQixLQUEzQztBQUNBLE9BQUtDLEVBQUwsR0FBVSx3QkFEVjtBQUVBLE9BQUtDLEVBQUwsR0FBVSxzQkFGVjtBQUdBLE9BQUtDLENBQUwsR0FBUyxTQUhUO0FBSUg7QUFDRDs7Ozs7O0FBTUFmLE9BQU8sQ0FBQ2dCLFNBQVIsQ0FBa0JDLFlBQWxCLEdBQWlDLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUM1QyxNQUFJLEtBQUtDLFlBQUwsQ0FBa0JGLEdBQWxCLEVBQXVCQyxHQUF2QixDQUFKLEVBQWlDO0FBQzdCLFdBQU8sQ0FBQ0QsR0FBRCxFQUFNQyxHQUFOLENBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxRQUFJRSxJQUFJLEdBQUcsS0FBS0MsWUFBTCxDQUFrQkosR0FBRyxHQUFHLEtBQXhCLEVBQStCQyxHQUFHLEdBQUcsSUFBckMsQ0FBWDtBQUNBLFFBQUlJLElBQUksR0FBRyxLQUFLQyxZQUFMLENBQWtCTixHQUFHLEdBQUcsS0FBeEIsRUFBK0JDLEdBQUcsR0FBRyxJQUFyQyxDQUFYO0FBQ0EsUUFBSU0sTUFBTSxHQUFHTixHQUFHLEdBQUcsS0FBTixHQUFjLEtBQUtOLEVBQWhDO0FBQ0EsUUFBSWEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0gsTUFBVCxDQUFaO0FBQ0FDLFNBQUssR0FBRyxJQUFJLEtBQUtaLEVBQUwsR0FBVVksS0FBVixHQUFrQkEsS0FBOUI7QUFDQSxRQUFJRyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csSUFBTCxDQUFVSixLQUFWLENBQWhCO0FBQ0FMLFFBQUksR0FBSUEsSUFBSSxHQUFHLEtBQVIsSUFBbUIsS0FBS04sQ0FBTCxJQUFVLElBQUksS0FBS0QsRUFBbkIsQ0FBRCxJQUE0QlksS0FBSyxHQUFHRyxTQUFwQyxJQUFpRCxLQUFLaEIsRUFBeEUsQ0FBUDtBQUNBVSxRQUFJLEdBQUlBLElBQUksR0FBRyxLQUFSLElBQWtCLEtBQUtSLENBQUwsR0FBU2MsU0FBVCxHQUFxQkYsSUFBSSxDQUFDSSxHQUFMLENBQVNOLE1BQVQsQ0FBckIsR0FBd0MsS0FBS1osRUFBL0QsQ0FBUDtBQUNBLFFBQUltQixLQUFLLEdBQUdiLEdBQUcsR0FBR0UsSUFBbEI7QUFDQSxRQUFJWSxLQUFLLEdBQUdmLEdBQUcsR0FBR0ssSUFBbEI7QUFDQSxXQUFPLENBQUNMLEdBQUcsR0FBRyxDQUFOLEdBQVVlLEtBQVgsRUFBa0JkLEdBQUcsR0FBRyxDQUFOLEdBQVVhLEtBQTVCLENBQVA7QUFDSDtBQUNKLENBaEJMO0FBaUJJOzs7Ozs7O0FBT0FoQyxPQUFPLENBQUNnQixTQUFSLENBQWtCa0IsV0FBbEIsR0FBZ0MsVUFBU2hCLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUMvQyxNQUFJZ0IsQ0FBQyxHQUFHUixJQUFJLENBQUNHLElBQUwsQ0FBVVosR0FBRyxHQUFHQSxHQUFOLEdBQVlDLEdBQUcsR0FBR0EsR0FBNUIsSUFBbUMsVUFBVVEsSUFBSSxDQUFDQyxHQUFMLENBQVNULEdBQUcsR0FBRyxLQUFLUCxJQUFwQixDQUFyRDtBQUNBLE1BQUl3QixLQUFLLEdBQUdULElBQUksQ0FBQ1UsS0FBTCxDQUFXbEIsR0FBWCxFQUFnQkQsR0FBaEIsSUFBdUIsV0FBV1MsSUFBSSxDQUFDSSxHQUFMLENBQVNiLEdBQUcsR0FBRyxLQUFLTixJQUFwQixDQUE5QztBQUNBLE1BQUkwQixNQUFNLEdBQUdILENBQUMsR0FBR1IsSUFBSSxDQUFDSSxHQUFMLENBQVNLLEtBQVQsQ0FBSixHQUFzQixNQUFuQztBQUNBLE1BQUlHLE1BQU0sR0FBR0osQ0FBQyxHQUFHUixJQUFJLENBQUNDLEdBQUwsQ0FBU1EsS0FBVCxDQUFKLEdBQXNCLEtBQW5DO0FBQ0EsU0FBTyxDQUFDRSxNQUFELEVBQVNDLE1BQVQsQ0FBUDtBQUNILENBTkQ7QUFPQTs7Ozs7O0FBTUF2QyxPQUFPLENBQUNnQixTQUFSLENBQWtCakIsWUFBbEIsR0FBaUMsVUFBU21CLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUN0REQsS0FBRyxHQUFDQSxHQUFHLEdBQUMsQ0FBUjtBQUNBQyxLQUFHLEdBQUNBLEdBQUcsR0FBQyxDQUFSO0FBQ00sTUFBSSxLQUFLQyxZQUFMLENBQWtCRixHQUFsQixFQUF1QkMsR0FBdkIsQ0FBSixFQUFpQztBQUM3QixXQUFPLENBQUNELEdBQUQsRUFBTUMsR0FBTixDQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsUUFBSUUsSUFBSSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JKLEdBQUcsR0FBRyxLQUF4QixFQUErQkMsR0FBRyxHQUFHLElBQXJDLENBQVg7QUFDQSxRQUFJSSxJQUFJLEdBQUcsS0FBS0MsWUFBTCxDQUFrQk4sR0FBRyxHQUFHLEtBQXhCLEVBQStCQyxHQUFHLEdBQUcsSUFBckMsQ0FBWDtBQUNBLFFBQUlNLE1BQU0sR0FBR04sR0FBRyxHQUFHLEtBQU4sR0FBYyxLQUFLTixFQUFoQztBQUNBLFFBQUlhLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNILE1BQVQsQ0FBWjtBQUNBQyxTQUFLLEdBQUcsSUFBSSxLQUFLWixFQUFMLEdBQVVZLEtBQVYsR0FBa0JBLEtBQTlCO0FBQ0EsUUFBSUcsU0FBUyxHQUFHRixJQUFJLENBQUNHLElBQUwsQ0FBVUosS0FBVixDQUFoQjtBQUNBTCxRQUFJLEdBQUlBLElBQUksR0FBRyxLQUFSLElBQW1CLEtBQUtOLENBQUwsSUFBVSxJQUFJLEtBQUtELEVBQW5CLENBQUQsSUFBNEJZLEtBQUssR0FBR0csU0FBcEMsSUFBaUQsS0FBS2hCLEVBQXhFLENBQVA7QUFDQVUsUUFBSSxHQUFJQSxJQUFJLEdBQUcsS0FBUixJQUFrQixLQUFLUixDQUFMLEdBQVNjLFNBQVQsR0FBcUJGLElBQUksQ0FBQ0ksR0FBTCxDQUFTTixNQUFULENBQXJCLEdBQXdDLEtBQUtaLEVBQS9ELENBQVA7QUFDQSxRQUFJbUIsS0FBSyxHQUFHYixHQUFHLEdBQUdFLElBQWxCO0FBQ0EsUUFBSVksS0FBSyxHQUFHZixHQUFHLEdBQUdLLElBQWxCO0FBQ0EsV0FBTyxDQUFDVSxLQUFELEVBQVFELEtBQVIsQ0FBUDtBQUNIO0FBQ0osQ0FsQkQ7QUFtQkE7Ozs7OztBQU1BaEMsT0FBTyxDQUFDZ0IsU0FBUixDQUFrQkMsWUFBbEIsR0FBaUMsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ2hELE1BQUksS0FBS0MsWUFBTCxDQUFrQkYsR0FBbEIsRUFBdUJDLEdBQXZCLENBQUosRUFBaUM7QUFDN0IsV0FBTyxDQUFDRCxHQUFELEVBQU1DLEdBQU4sQ0FBUDtBQUNILEdBRkQsTUFFTztBQUNILFFBQUlFLElBQUksR0FBRyxLQUFLQyxZQUFMLENBQWtCSixHQUFHLEdBQUcsS0FBeEIsRUFBK0JDLEdBQUcsR0FBRyxJQUFyQyxDQUFYO0FBQ0EsUUFBSUksSUFBSSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JOLEdBQUcsR0FBRyxLQUF4QixFQUErQkMsR0FBRyxHQUFHLElBQXJDLENBQVg7QUFDQSxRQUFJTSxNQUFNLEdBQUdOLEdBQUcsR0FBRyxLQUFOLEdBQWMsS0FBS04sRUFBaEM7QUFDQSxRQUFJYSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxNQUFULENBQVo7QUFDQUMsU0FBSyxHQUFHLElBQUksS0FBS1osRUFBTCxHQUFVWSxLQUFWLEdBQWtCQSxLQUE5QjtBQUNBLFFBQUlHLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxJQUFMLENBQVVKLEtBQVYsQ0FBaEI7QUFDQUwsUUFBSSxHQUFJQSxJQUFJLEdBQUcsS0FBUixJQUFtQixLQUFLTixDQUFMLElBQVUsSUFBSSxLQUFLRCxFQUFuQixDQUFELElBQTRCWSxLQUFLLEdBQUdHLFNBQXBDLElBQWlELEtBQUtoQixFQUF4RSxDQUFQO0FBQ0FVLFFBQUksR0FBSUEsSUFBSSxHQUFHLEtBQVIsSUFBa0IsS0FBS1IsQ0FBTCxHQUFTYyxTQUFULEdBQXFCRixJQUFJLENBQUNJLEdBQUwsQ0FBU04sTUFBVCxDQUFyQixHQUF3QyxLQUFLWixFQUEvRCxDQUFQO0FBQ0EsUUFBSW1CLEtBQUssR0FBR2IsR0FBRyxHQUFHRSxJQUFsQjtBQUNBLFFBQUlZLEtBQUssR0FBR2YsR0FBRyxHQUFHSyxJQUFsQjtBQUNBLFdBQU8sQ0FBQ0wsR0FBRyxHQUFHLENBQU4sR0FBVWUsS0FBWCxFQUFrQmQsR0FBRyxHQUFHLENBQU4sR0FBVWEsS0FBNUIsQ0FBUDtBQUNIO0FBQ0osQ0FoQkQ7QUFpQkFoQyxPQUFPLENBQUNnQixTQUFSLENBQWtCTSxZQUFsQixHQUFpQyxVQUFTSixHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDaEQsTUFBSXFCLEdBQUcsR0FBRyxDQUFDLEtBQUQsR0FBUyxNQUFNdEIsR0FBZixHQUFxQixNQUFNQyxHQUEzQixHQUFpQyxNQUFNQSxHQUFOLEdBQVlBLEdBQTdDLEdBQW1ELE1BQU1ELEdBQU4sR0FBWUMsR0FBL0QsR0FBcUUsTUFBTVEsSUFBSSxDQUFDRyxJQUFMLENBQVVILElBQUksQ0FBQ2MsR0FBTCxDQUFTdkIsR0FBVCxDQUFWLENBQXJGO0FBQ0FzQixLQUFHLElBQUksQ0FBQyxPQUFPYixJQUFJLENBQUNDLEdBQUwsQ0FBUyxNQUFNVixHQUFOLEdBQVksS0FBS0wsRUFBMUIsQ0FBUCxHQUF1QyxPQUFPYyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxNQUFNVixHQUFOLEdBQVksS0FBS0wsRUFBMUIsQ0FBL0MsSUFBZ0YsR0FBaEYsR0FBc0YsR0FBN0Y7QUFDQTJCLEtBQUcsSUFBSSxDQUFDLE9BQU9iLElBQUksQ0FBQ0MsR0FBTCxDQUFTVCxHQUFHLEdBQUcsS0FBS04sRUFBcEIsQ0FBUCxHQUFpQyxPQUFPYyxJQUFJLENBQUNDLEdBQUwsQ0FBU1QsR0FBRyxHQUFHLEdBQU4sR0FBWSxLQUFLTixFQUExQixDQUF6QyxJQUEwRSxHQUExRSxHQUFnRixHQUF2RjtBQUNBMkIsS0FBRyxJQUFJLENBQUMsUUFBUWIsSUFBSSxDQUFDQyxHQUFMLENBQVNULEdBQUcsR0FBRyxJQUFOLEdBQWEsS0FBS04sRUFBM0IsQ0FBUixHQUF5QyxNQUFNYyxJQUFJLENBQUNDLEdBQUwsQ0FBU1QsR0FBRyxHQUFHLEtBQUtOLEVBQVgsR0FBZ0IsSUFBekIsQ0FBaEQsSUFBa0YsR0FBbEYsR0FBd0YsR0FBL0Y7QUFDQSxTQUFPMkIsR0FBUDtBQUNILENBTkQ7QUFPQXhDLE9BQU8sQ0FBQ2dCLFNBQVIsQ0FBa0JRLFlBQWxCLEdBQWlDLFVBQVNOLEdBQVQsRUFBY0MsR0FBZCxFQUFtQjtBQUNoRCxNQUFJcUIsR0FBRyxHQUFHLFFBQVF0QixHQUFSLEdBQWMsTUFBTUMsR0FBcEIsR0FBMEIsTUFBTUQsR0FBTixHQUFZQSxHQUF0QyxHQUE0QyxNQUFNQSxHQUFOLEdBQVlDLEdBQXhELEdBQThELE1BQU1RLElBQUksQ0FBQ0csSUFBTCxDQUFVSCxJQUFJLENBQUNjLEdBQUwsQ0FBU3ZCLEdBQVQsQ0FBVixDQUE5RTtBQUNBc0IsS0FBRyxJQUFJLENBQUMsT0FBT2IsSUFBSSxDQUFDQyxHQUFMLENBQVMsTUFBTVYsR0FBTixHQUFZLEtBQUtMLEVBQTFCLENBQVAsR0FBdUMsT0FBT2MsSUFBSSxDQUFDQyxHQUFMLENBQVMsTUFBTVYsR0FBTixHQUFZLEtBQUtMLEVBQTFCLENBQS9DLElBQWdGLEdBQWhGLEdBQXNGLEdBQTdGO0FBQ0EyQixLQUFHLElBQUksQ0FBQyxPQUFPYixJQUFJLENBQUNDLEdBQUwsQ0FBU1YsR0FBRyxHQUFHLEtBQUtMLEVBQXBCLENBQVAsR0FBaUMsT0FBT2MsSUFBSSxDQUFDQyxHQUFMLENBQVNWLEdBQUcsR0FBRyxHQUFOLEdBQVksS0FBS0wsRUFBMUIsQ0FBekMsSUFBMEUsR0FBMUUsR0FBZ0YsR0FBdkY7QUFDQTJCLEtBQUcsSUFBSSxDQUFDLFFBQVFiLElBQUksQ0FBQ0MsR0FBTCxDQUFTVixHQUFHLEdBQUcsSUFBTixHQUFhLEtBQUtMLEVBQTNCLENBQVIsR0FBeUMsUUFBUWMsSUFBSSxDQUFDQyxHQUFMLENBQVNWLEdBQUcsR0FBRyxJQUFOLEdBQWEsS0FBS0wsRUFBM0IsQ0FBbEQsSUFBb0YsR0FBcEYsR0FBMEYsR0FBakc7QUFDQSxTQUFPMkIsR0FBUDtBQUNILENBTkQ7QUFPQTs7Ozs7O0FBTUF4QyxPQUFPLENBQUNnQixTQUFSLENBQWtCSSxZQUFsQixHQUFpQyxVQUFTRixHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDaEQsU0FBUUQsR0FBRyxHQUFHLE1BQU4sSUFBZ0JBLEdBQUcsR0FBRyxRQUF2QixJQUFzQ0MsR0FBRyxHQUFHLE1BQU4sSUFBZ0JBLEdBQUcsR0FBRyxPQUF2QixJQUFtQyxLQUEvRTtBQUNILENBRkQ7QUFHQXhILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlb0csT0FBZixHQUF3QixJQUFJQSxPQUFKLEVBQXhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSCtDO0FBQ25ELHdFQUFHO0FBQ0gsd0VBQUc7QUFDSCx3RUFBRzs7QUFFSCxRQUFRLHdFQUFHOzs7Ozs7Ozs7Ozs7QUNOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZHO0FBQ3ZDO0FBQ0w7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQywyRkFBbUY7QUFDNUgsV0FBVztBQUNYLGdEQUFnRCxtQkFBTyxDQUFDLDJGQUFtRjtBQUMzSTs7QUFFQTs7QUFFQTtBQUM0SDtBQUM1SCxnQkFBZ0IsMElBQVU7QUFDMUIsRUFBRSx3RkFBTTtBQUNSLEVBQUUseUdBQU07QUFDUixFQUFFLGtIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLGVBQWUsZ0NBQWdDO0FBQy9DLGtCQUFrQixlQUFlLHFDQUFxQyxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0NBQWtDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFCQUFxQixlQUFlLGdCQUFnQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUE2WCxDQUFnQiw0YUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWWpaO0FBQ0EsMEY7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxhQURBLEdBR0EsQ0FMQSxFQU1BLE9BTkEscUJBTUEsa0JBQ0EsNENBQ0EsNEJBQ0EsQ0FGQSxFQUdBLENBVkE7QUFXQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxnQkFKQSwwQkFJQTtBQUNBO0FBQ0EsS0FOQSxFQVhBLEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQXdzQixDQUFnQiw4dEJBQUcsRUFBQyxDOzs7Ozs7Ozs7O0FDQTV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJzdWJOdnVlL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMik7XG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjEuNzo4MDgyXCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjEuNFwiXHJcbi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjVcIlxyXG4vLyBjb25zdCB1cmwwPVwiaHR0cDovLzE5Mi4xNjguMC4xODhcIlxyXG4vLyBjb25zdCB1cmwwPVwiaHR0cDovLzE5Mi4xNjguMS4xNVwiXHJcbmNvbnN0IHVybDA9XCJodHRwOi8vMTIyLjExNC4xNzcuMTk4XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xODMuMjMwLjIzLjIxXCJcclxuLy8gY29uc3QgdXJsMD11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1cmxcIik/dW5pLmdldFN0b3JhZ2VTeW5jKFwidXJsXCIpOlwiaHR0cDovLzE4My4yMzAuMjMuMjFcIlpaWlpaWlpcclxuLy8gY29uc3QgdXJsPXVybDArXCI6MTgwODJcIlxyXG5jb25zdCB1cmw9dXJsMCtcIjo4MDgyXCJcclxuY29uc3QgdXJsX1BDPXVybCtcIi9wcm94eS9wY1wiXHJcbi8vIGNvbnN0IGRhaWxpPVwiaHR0cDovLzEwLjExNy44MC4yMDE6ODA4MS9hcHBcIlxyXG5jb25zdCBkYWlsaT1cImh0dHA6Ly8xMjIuMTE0LjE3Ny4xOTg6ODA4MS9hcHBcIlxyXG4vLyBjb25zdCB1cmxfUEM9dXJsMCtcIjo4MDgxL2FwcFwiXHJcblxyXG5cclxuXHJcbi8v5bi46ZO+5o6lIFxyXG5jb25zdCBXRUJTT0NLRVQ9XCJ3czovLzE5Mi4xNjguMS40OjgwODIvd2Vic29ja2V0L1wiXHJcblxyXG4vLyDnmbvlvZVcclxuY29uc3QgTE9HSU5fTE9HSU49dXJsK1wiL2xvZ2luL2xvZ2luXCJcclxuY29uc3QgVEFTS19JTkRFWD11cmwrXCIvdGFzay9pbmRleFwiLy/ojrflj5bpppbpobXku7vliqHmg4XlhrVcclxuY29uc3QgVEFTS19JTkRFWDI9dXJsK1wiL3Rhc2svaW5kZXgyXCIvL+iOt+WPlummlumhteS7u+WKoeaDheWGtVxyXG5cclxuY29uc3QgVEFTS19QUk9DRVNTPXVybCtcIi90YXNrL3Byb2Nlc3NcIi8v5q2j5Zyo6L+b6KGM5Lit55qE5Lu75Yqh77yM5LiN5LygdWlkIOWImeaYvuekuuaJgOacieS6ulxyXG5jb25zdCBUQVNLX0ZJTklTSD11cmwrXCIvdGFzay9maW5pc2hcIi8v5bey5a6M5oiQ55qE5Lu75Yqh77yM5LiN5LygdWlkIOWImeaYvuekuuaJgOacieS6ulxyXG5jb25zdCBUQVNLX05PX1NUQVJUPXVybCtcIi90YXNrL25vU3RhcnRcIi8v6L+Y5pyq5byA5aeL55qE5Lu75Yqh77yM5LiN5LygdWlkIOWImeaYvuekuuaJgOacieS6ulxyXG5jb25zdCBQUk9CTEVNX0xJU1Q9dXJsK1wiL3Byb2JsZW0vbGlzdFwiLy/pl67popjliJfooaggcGFnZSDkuLrlv4XpnIAg56ys5LiA6aG15Li6MCDlvZN1aWTkuLrnqbrnmoTml7blgJnlsIbkvJrmn6Xor6LmiYDmnInpl67popgg5Y+N5LmL5YiZ5p+l6K+i5b2T5YmN55So5oi35o+Q5Lqk55qE6Zeu6aKYXHJcbmNvbnN0IFVQTE9BRF9VUExPQUQ9dXJsK1wiL3VwbG9hZC91cGxvYWRcIi8v5LiK5Lyg5Zu+54mHXHJcbmNvbnN0IERFUEFSVE1FTlRfR0VUX0RFUFQ9dXJsK1wiL2RlcGFydG1lbnQvZ2V0RGVwdFwiLy/ojrflj5bkuaHplYfliJfooahcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfQ09OVEFDVExJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2NvbnRhY3RMaXN0XCIvL+iOt+WPluiBlOezu+S6uuS/oeaBr1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9GSU5JU0hfTElTVD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvZmluaXNoTGlzdFwiLy/ojrflj5bngrnkvY3ov5vooYzkuK3nmoTkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9nZXRBbGxQcm9ibGVtXCIvL+iOt+WPluaJgOacieaxoeafk+a6kOmXrumimOexu+Wei1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9HRVRfUFJPQkxFTT11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvZ2V0UHJvYmxlbVwiLy/ojrflj5bmsaHmn5PmupDpl67popjnsbvlnotcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9BRERfQkFUQ0g9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vYWRkQmF0Y2hcIi8v5om56YeP5paw5aKe6Zeu6aKYXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvcHJvYmxlbS9saXN0XCIvL+mAmui/h+eCueS9jeS/oeaBryDojrflj5bpl67popjkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9MSVNUMj11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvcHJvYmxlbS9saXN0MlwiLy/pgJrov4fku7vliqHkv6Hmga8g6I635Y+W6Zeu6aKY5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1VQREFURT11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvdXBkYXRlXCIvL+abtOaWsOW3oeafpeeCueS9jeeKtuS/oeaBr1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9OT1JNQUw9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L25vcm1hbFwiLy/mm7TmlLnlt6Hmn6XngrnkvY3nirbmgIHnirbmgIFcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfUFJPQ0VTU19MSVNUPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9wcm9jZXNzTGlzdFwiLy/mm7TmlLnlt6Hmn6XngrnkvY3nirbmgIHnirbmgIFcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfVVBEQVRFX1dSWV9BRERSRVNTX0RFVEFJTEVEPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC91cGRhdGVXcnlBZGRyZXNzRGV0YWlsZWRcIi8v5rGh5p+T5rqQ6YeN5paw5a6a5L2NIGlkPeaxoeafk+a6kElEIO+8jHdyeVR5cGXnrYnkuo7msaHmn5PmupDnsbvlnovvvIzlnLDlnYDkv6Hmga8g5ZKM57uP57qs5bqmXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BBVEhfQUREPXVybCtcIi90YXNrL3BhdHJvbC9wYXRoL2FkZFwiLy/mt7vliqDot6/lvoTngrnkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUEFUSF9BRERfQkFUQ0g9dXJsK1wiL3Rhc2svcGF0cm9sL3BhdGgvYWRkQmF0Y2hcIi8v5re75Yqg6Lev5b6E54K55L+h5oGvXHJcblxyXG5cclxuLy8gY29uc3QgVEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUz11cmwrXCIvdGFzay9wYXRyb2wvdXBkYXRlU3RhdHVzXCIvL+abtOaUueW3oeafpeS7u+WKoeeKtuaAgVxyXG5jb25zdCBUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFX1NUQVRVUz11cmwrXCIvdGFzay9yZWN0aWZpY2F0aW9uL3VwZGF0ZVN0YXR1c1wiLy/mm7TmlLnmlbTkuKrku7vliqHnirbmgIFcclxuXHJcbmNvbnN0IFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEU9dXJsK1wiL3Rhc2svcmVjdGlmaWNhdGlvbi91cGRhdGVcIi8v5L+u5pS55pW05pS55Lu75Yqh5YaF5a6577yM5Zu+54mH562JXHJcblxyXG5jb25zdCBUQVNLX1BBVFJPTF9VUERBVEVfU1RBVFVTPXVybCtcIi90YXNrL3BhdHJvbC91cGRhdGVTdGF0dXNcIi8v5pu05pS55beh5p+l5Lu75Yqh54q25oCBXHJcbmNvbnN0IFVTRVJfVVBEQVRFPXVybCtcIi91c2VyL3VwZGF0ZVwiLy/pgJrov4fngrnkvY3kv6Hmga8g6I635Y+W6Zeu6aKY5L+h5oGvXHJcblxyXG5cclxuXHJcbmNvbnN0IFBPTExVVElPTl9TRUFSQ0g9dXJsK1wiL3BvbGx1dGlvbi9zZWFyY2hcIi8v5pCc57Si5rGh5p+T5rqQXHJcblxyXG5cclxuLy9QQ+aOpeWPo1xyXG5cclxuY29uc3QgREFQSU5HU0hVSVpISV9TSFVJWkhJVE9OR0pJX0tITFg9ZGFpbGkrXCIvZGFwaW5nc2h1aXpoaS9zaHVpemhpdG9uZ2ppX2tobHhcIi8v5pat6Z2i5oOF5Ya1XHJcbmNvbnN0IFFVS09OR1NIVUlaSElUT05HSklfSEVMSVVTSFVJWkhJVE9OR0pJPWRhaWxpK1wiL3F1S29uZ1NodWlaaGlUb25nSmkvaGVMaXVTaHVpWmhpVG9uZ0ppXCIvL+ays+a1gee7n+iuoVxyXG5jb25zdCBXQVRFUl9CQVNFX0dFVEJBU0VZRUFSTU9OVEg9ZGFpbGkrXCIvd2F0ZXIvYmFzZS9nZXRCYXNlWWVhck1vbnRoXCIvL+iOt+WPluacieaVsOaNrueahOaXtumXtFxyXG5cclxuLy9QQ+aOkuihjOamnOaOpeWPo1xyXG5jb25zdCBBU1NFU1NfVE9XTl9MSVNUPWRhaWxpK1wiL2Fzc2Vzcy90b3duTGlzdFwiLy/plYfooZfmjpLooYxcclxuY29uc3QgQVNTRVNTX0RFUEFSVE1FTlRfTElTVD1kYWlsaStcIi9hc3Nlc3MvZGVwYXJ0bWVudExpc3RcIi8v6YOo6Zeo5o6S6KGMXHJcbi8v5rGh5p+T5rqQ5o6l5Y+jXHJcblxyXG5jb25zdCBXUllfQlpfTElTVD1kYWlsaStcIi93cnkvYnovbGlzdFwiLy/ms7Xnq5lcclxuY29uc3QgV1JZX0NPTVBBTllfTElTVD1kYWlsaStcIi93cnkvY29tcGFueS9saXN0XCIvL+W3peS4muS8geS4mlxyXG5jb25zdCBXUllfUkhLUFdLX0xJU1Q9ZGFpbGkrXCIvd3J5L3Joa3B3ay9saXN0XCIvL+WFpeays+aOkuaxoeWPo1xyXG5jb25zdCBXUllfUkhLUFdEX0xJU1Q9ZGFpbGkrXCIvd3J5L3Joa3B3ZC9saXN0XCIvL+WFpeays+aOkuaxoeeCuVxyXG5jb25zdCBXUllfSlpHRF9MSVNUPWRhaWxpK1wiL3dyeS9qemdkL2xpc3RcIi8v5bu6562R5bel5ZywXHJcbmNvbnN0IFdSWV9RVEhZX0xJU1Q9ZGFpbGkrXCIvd3J5L3F0aHkvbGlzdFwiLy/lhbblroPooYzkuJpcclxuY29uc3QgV1JZX0pDRFdfTElTVD1kYWlsaStcIi93cnkvamNkdy9saXN0XCIvL+ajgOa1i+eCueS9jVxyXG5jb25zdCBXUllfWUxKR19MSVNUPWRhaWxpK1wiL3dyeS95bGpnL2xpc3RcIi8v5Yy755aX5py65p6EXHJcbmNvbnN0IFdSWV9YUVlaX0xJU1Q9ZGFpbGkrXCIvd3J5L3hxeXovbGlzdFwiLy/nlZznpr3lhbvmrpZcclxuY29uc3QgV1JZX1RaQ19MSVNUPWRhaWxpK1wiL3dyeS90emMvbGlzdFwiLy/lsaDlrrDlnLpcclxuY29uc3QgV1JZX1NIVUlLVV9MSVNUPWRhaWxpK1wiL3dyeS9zaHVpa3UvbGlzdFwiLy/msLTlupNcclxuY29uc3QgV1JZX1NQVF9MSVNUPWRhaWxpK1wiL3dyeS9zcHQvbGlzdFwiLy/lsbHlnarloZhcclxuY29uc3QgV1JZX1lZQ19MSVNUPWRhaWxpK1wiL3dyeS95eWMvbGlzdFwiLy/lhbvpsbzmsaBcclxuY29uc3QgV1JZX0pNSlpKWkRfTElTVD1kYWlsaStcIi93cnkvam1qemp6ZC9saXN0XCIvL+WxheawkembhuS4reWxheS9j+eCuVxyXG5jb25zdCBXUllfWFNMV19MSVNUPWRhaWxpK1wiL3dyeS94c2x3L2xpc3RcIi8v5bCP5pWj5Lmx5rGh5LyB5LiaXHJcbmNvbnN0IFdSWV9YQ0NfTElTVD1kYWlsaStcIi93cnkveGNjL2xpc3RcIi8v5rSX6L2m5Zy6XHJcbmNvbnN0IFdSWV9DWUhZX0xJU1Q9ZGFpbGkrXCIvd3J5L2N5aHkvbGlzdFwiLy/ppJDppa7ooYzkuJpcclxuY29uc3QgV1JZX05NU0NfTElTVD1kYWlsaStcIi93cnkvbm1zYy9saXN0XCIvL+WGnOi0uOW4guWculxyXG5jb25zdCBXUllfV1NDTENfTElTVD1kYWlsaStcIi93cnkvd3NjbGMvbGlzdFwiLy/msaHmsLTlpITnkIbljoJcclxuY29uc3QgV1JZX1paWUZMREpEX0xJU1Q9ZGFpbGkrXCIvd3J5L3p6eWZsZGpkL2xpc3RcIi8v56eN5qSN5Lia6IKl5paZ5aCG56ev54K5XHJcbmNvbnN0IFdSWV9TTVlTWVpESF9MSVNUPWRhaWxpK1wiL3dyeS9zbXlzeXpkaC9saXN0XCIvLzEw5Lqp5Lul5LiK56eN5qSN5aSn5oi3XHJcblxyXG5tb2R1bGUuZXhwb3J0cz17XHJcblx0dXJsLFxyXG5cdFdFQlNPQ0tFVCxcclxuXHRMT0dJTl9MT0dJTixcclxuXHRUQVNLX0lOREVYLFxyXG5cdFRBU0tfSU5ERVgyLFxyXG5cdFRBU0tfUFJPQ0VTUyxcclxuXHRUQVNLX0ZJTklTSCxcclxuXHRUQVNLX05PX1NUQVJULFxyXG5cdFBST0JMRU1fTElTVCxcclxuXHRVUExPQURfVVBMT0FELFxyXG5cdERFUEFSVE1FTlRfR0VUX0RFUFQsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfQ09OVEFDVExJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfRklOSVNIX0xJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9QUk9CTEVNLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENILFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1QyLFxyXG5cdFVTRVJfVVBEQVRFLFxyXG5cdFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEVfU1RBVFVTLFxyXG5cdFRBU0tfUkVDVElGSUNBVElPTl9VUERBVEUsXHJcblx0VEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUyxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEUsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfTk9STUFMLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX1BST0NFU1NfTElTVCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEVfV1JZX0FERFJFU1NfREVUQUlMRUQsXHJcblx0VEFTS19QQVRST0xfUEFUSF9BREQsXHJcblx0VEFTS19QQVRST0xfUEFUSF9BRERfQkFUQ0gsXHJcblx0REFQSU5HU0hVSVpISV9TSFVJWkhJVE9OR0pJX0tITFgsXHJcblx0UVVLT05HU0hVSVpISVRPTkdKSV9IRUxJVVNIVUlaSElUT05HSkksXHJcblx0V1JZX0JaX0xJU1QsXHJcblx0V1JZX0NPTVBBTllfTElTVCxcclxuXHRXUllfUkhLUFdLX0xJU1QsXHJcblx0V1JZX1JIS1BXRF9MSVNULFxyXG5cdFdSWV9KWkdEX0xJU1QsXHJcblx0V1JZX1FUSFlfTElTVCxcclxuXHRXUllfSkNEV19MSVNULFxyXG5cdFdSWV9ZTEpHX0xJU1QsXHJcblx0V1JZX1hRWVpfTElTVCxcclxuXHRXUllfVFpDX0xJU1QsXHJcblx0V1JZX1NIVUlLVV9MSVNULFxyXG5cdFdSWV9TUFRfTElTVCxcclxuXHRXUllfWVlDX0xJU1QsXHJcblx0V1JZX0pNSlpKWkRfTElTVCxcclxuXHRXUllfWFNMV19MSVNULFxyXG5cdFdSWV9YQ0NfTElTVCxcclxuXHRXUllfQ1lIWV9MSVNULFxyXG5cdFdSWV9OTVNDX0xJU1QsXHJcblx0V1JZX1dTQ0xDX0xJU1QsXHJcblx0V1JZX1paWUZMREpEX0xJU1QsXHJcblx0V1JZX1NNWVNZWkRIX0xJU1QsXHJcblx0QVNTRVNTX1RPV05fTElTVCxcclxuXHRBU1NFU1NfREVQQVJUTUVOVF9MSVNULFxyXG5cdFBPTExVVElPTl9TRUFSQ0gsXHJcblx0dXJsX1BDLFxyXG5cdFdBVEVSX0JBU0VfR0VUQkFTRVlFQVJNT05USFxyXG59XHJcbiIsImltcG9ydCBVUkwgZnJvbSBcIi4vaW50ZXJmYWNlLmpzXCJcclxuaW1wb3J0IHttYXBUb29sfSBmcm9tIFwiLi9tYXBUb29sLmpzXCJcclxudmFyIHRpbWVyX2dldExvY3Rpb249bnVsbFxyXG52YXIgdGltZXJfdXBMb2N0aW9uPXt9XHJcbnZhciB1cExvY3Rpb25EYXRhPXt9XHJcbnZhciBzdWJOdnVlPXt9XHJcbnZhciB0YXNrSW5mbz17fVxyXG52YXIgcG9sbHV0aW9uSW5mbz17fVxyXG52YXIgdXBUaW1lTnVtPTMwMDAwMFxyXG52YXIgc2l0dWF0aW9uRGF0ZT17fVxyXG4vLyB2YXIgYXJyV3J5PVtcclxuLy8gXHRcIldSWV9CWl9MSVNUXCIsXHJcbi8vIFx0XCJXUllfQ09NUEFOWV9MSVNUXCIsXHJcbi8vIFx0XCJXUllfUkhLUFdLX0xJU1RcIixcclxuLy8gXHRcIldSWV9SSEtQV0RfTElTVFwiLFxyXG4vLyBcdFwiV1JZX0paR0RfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1FUSFlfTElTVFwiLFxyXG4vLyBcdFwiV1JZX0pDRFdfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1lMSkdfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1hRWVpfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1RaQ19MSVNUXCIsXHJcbi8vIFx0XCJXUllfU0hVSUtVX0xJU1RcIixcclxuLy8gXHRcIldSWV9TUFRfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1lZQ19MSVNUXCIsXHJcbi8vIFx0XCJXUllfSk1KWkpaRF9MSVNUXCIsXHJcbi8vIFx0XCJXUllfWFNMV19MSVNUXCIsXHJcbi8vIFx0XCJXUllfWENDX0xJU1RcIixcclxuLy8gXHRcIldSWV9DWUhZX0xJU1RcIixcclxuLy8gXHRcIldSWV9OTVNDX0xJU1RcIixcclxuLy8gXHRcIldSWV9XU0NMQ19MSVNUXCIsXHJcbi8vIFx0XCJXUllfWlpZRkxESkRfTElTVFwiLFxyXG4vLyBcdFwiV1JZX1NNWVNZWkRIX0xJU1RcIlxyXG4vLyBdXHJcbmZ1bmN0aW9uIGdldFJlcXVlc3QodXJsLGRhdGEsY2FsbCxlcnJvcil7XHJcblx0dW5pLnNob3dMb2FkaW5nKHttYXNrOnRydWV9KVxyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHR0aXRsZTpyZXMuZGF0YS5tc2d8fFwi5pWw5o2u5byC5bi4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdFBjKHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdE5vKHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdFJlcXVlc3RObyh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdGRhdGE6IGRhdGEsXHJcblx0XHRtZXRob2Q6XCJQT1NUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHQvLyBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0Ly8gfWVsc2V7XHJcblx0XHRcdFx0Ly8gdHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0Ly8gfVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwb3N0UmVxdWVzdCh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR1bmkuc2hvd0xvYWRpbmcoe21hc2s6dHJ1ZX0pXHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0bWV0aG9kOlwiUE9TVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdGNvbXBsZXRlOihyZXMpID0+e1xyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRpZighcmVzLmRhdGEpe1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKCk6XCJcIlxyXG5cdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0dGl0bGU6cmVzLmRhdGEubXNnfHxcIuaVsOaNruW8guW4uFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZGF0YSl7Ly/lrozmiJDlt6Hmn6XmsaHmn5PmupDku7vliqFcclxuXHR1cEltZ1RlYW1zKGRhdGEucG9pbnRQaG90byxmdW5jdGlvbihyZXN1bHRzLGluZGV4KXtcclxuXHRcdGRhdGEucG9pbnRQaG90bz1yZXN1bHRzXHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0dG9Db21wbGV0ZVRhc2soVVJMLlRBU0tfUEFUUk9MX1BPSU5UX1VQREFURSxkYXRhKVxyXG5cdH0sMSwocmVzdWx0cyk9PntcclxuXHRcdGNvbXBsZXRlVGFzayhkYXRhKVxyXG5cdH0pXHJcbn1cclxuZnVuY3Rpb24gcmVjdGlmaWNhdGlvblRhc2tEZXRhaWwoZGF0YSl7Ly/lrozmiJDmlbTmlLnku7vliqFcclxuXHR1cEltZ1RlYW1zKGRhdGEucmVjdGlmaWNhdGlvblBob3RvLGZ1bmN0aW9uKHJlc3VsdHMsaW5kZXgpe1xyXG5cdFx0ZGF0YS5yZWN0aWZpY2F0aW9uUGhvdG89cmVzdWx0c1xyXG5cdFx0dG9Db21wbGV0ZVRhc2soVVJMLlRBU0tfUkVDVElGSUNBVElPTl9VUERBVEUsZGF0YSlcclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHVwUHJvYmxlbVRlYW1zKGRhdGEpey8v5LiK5Lyg5aSa5Liq6Zeu6aKYXHJcblx0dmFyIHByb2JsZW1UZWFtcz0wXHJcblx0Zm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0aWYoZGF0YVtpXS5wcm9ibGVtUGhvdG8pe1xyXG5cdFx0XHRwcm9ibGVtVGVhbXMrK1xyXG5cdFx0XHR1cEltZ1RlYW1zKGRhdGFbaV0ucHJvYmxlbVBob3RvLGZ1bmN0aW9uKHJlc3VsdHMsaW5kZXgpe1xyXG5cdFx0XHRcdHByb2JsZW1UZWFtcy0tXHJcblx0XHRcdFx0ZGF0YVtpbmRleF0ucHJvYmxlbVBob3RvPXJlc3VsdHNcclxuXHRcdFx0XHRpZihwcm9ibGVtVGVhbXM9PTApe1xyXG5cdFx0XHRcdFx0ZGF0YT1KU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdFx0XHRcdFx0dG9VcFByb2JsZW0oVVJMLlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENILGRhdGEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LGksKHJlc3VsdHMpPT57XHJcblx0XHRcdFx0dXBQcm9ibGVtVGVhbXMoZGF0YSlcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gdG9Db21wbGV0ZVRhc2sodXJsLGRhdGEpey8v5LiK5Lyg6Zeu6aKY5oiW6ICF5a6M5oiQ54K55L2N5beh5p+lXHJcblx0Ly8gY29uc29sZS5sb2coZGF0YSlcclxuXHRnZXRSZXF1ZXN0Tm8odXJsLGRhdGEsKHJlc3VsdHMpPT57XHJcblx0XHRjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG5cdH0sKHJlc3VsdHMpPT57XHJcblx0XHR0b0NvbXBsZXRlVGFzayh1cmwsZGF0YSlcclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHRvVXBQcm9ibGVtKHVybCxkYXRhKXsvL+S4iuS8oOmXrumimOaIluiAheWujOaIkOeCueS9jeW3oeafpVxyXG5cdGdldFJlcXVlc3RObyh1cmwse2RhdGF9LChyZXN1bHRzKT0+e1xyXG5cdFx0Y29uc29sZS5sb2coXCLkuIrkvKDmiJDlip9cIilcclxuXHR9LChyZXN1bHRzKT0+e1xyXG5cdFx0dG9VcFByb2JsZW0odXJsLGRhdGEpXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB1cEltZ1RlYW1zKGltZ3MsY2FsbCxpbmRleCxlcnJvcil7Ly/kuIrkvKDlpJrlvKDlm77niYdcclxuXHR2YXIgaW1ncz1pbWdzLnNwbGl0KFwiO1wiKVxyXG5cdHZhciBwaWN0dXJlPVtdXHJcblx0dmFyIGltZ1RlYW1zPTBcclxuXHRmb3IodmFyIGk9MDtpPGltZ3MubGVuZ3RoO2krKyl7XHJcblx0XHRpbWdUZWFtcysrXHJcblx0XHR1cGxvYWRGaWxlKFVSTC5VUExPQURfVVBMT0FELGltZ3NbaV0sKHJlc3VsdHMpPT57XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcblx0XHRcdHJlc3VsdHM9SlNPTi5wYXJzZShyZXN1bHRzKVxyXG5cdFx0XHRwaWN0dXJlLnB1c2gocmVzdWx0cy5kYXRhKTtcclxuXHRcdFx0aW1nVGVhbXMtLVxyXG5cdFx0XHRpZihpbWdUZWFtcz09MCl7XHJcblx0XHRcdFx0cGljdHVyZT1waWN0dXJlLmpvaW4oXCI7XCIpXHJcblx0XHRcdFx0Y2FsbChwaWN0dXJlLGluZGV4KVxyXG5cdFx0XHR9XHJcblx0XHR9LChyZXN1bHRzKT0+e1xyXG5cdFx0XHRlcnJvcihyZXN1bHRzKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEZpbGUodXJsLGRhdGEsY2FsbCxlcnJvcil7Ly/kuIrkvKDlm77niYdcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHR1cmw6IHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdGZpbGVUeXBlOlwiaW1hZ2VcIixcclxuXHRcdGZpbGVQYXRoOmRhdGEsXHJcblx0XHRuYW1lOlwiZmlsZVwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0c3VjY2VzczogKHJlcykgPT4geyBcclxuXHRcdFx0aWYocmVzLmRhdGEhPVwiMDAwMDAwXCIpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihkYXRhKTpcIlwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRmYWlsKHJlcyl7XHJcblx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKGRhdGEpOlwiXCJcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHNob3dTdWNjZXNzKG1zZyxjYWxsKXtcclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdGljb246XCJzdWNjZXNzXCIsXHJcblx0XHR0aXRsZTptc2dcclxuXHR9KVxyXG5cdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/c2V0VGltZW91dChjYWxsLDE1MDApOlwiXCJcclxufVxyXG5jb25zdCBpc1JlZnJlc2hUYXNrc1BhZ2U9dHJ1ZVxyXG5cclxuY29uc3QgaXNSZWZyZXNoUG9sbHV0aW9uUGFnZT10cnVlXHJcblxyXG5jb25zdCB3ZWJTb2NrZXQ9ZnVuY3Rpb24oaWQpe1xyXG5cdHVuaS5jb25uZWN0U29ja2V0KHtcclxuXHRcdHVybDogVVJMLldFQlNPQ0tFVCtpZCxcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHQnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kOiAnR0VUJ1xyXG5cdH0pXHJcbn1cclxudW5pLm9uU29ja2V0T3BlbihmdW5jdGlvbiAocmVzKSB7XHJcblx0Y29uc29sZS5sb2coJ1dlYlNvY2tldOi/nuaOpeW3suaJk+W8gO+8gScpO1xyXG59KTtcclxuXHJcbnZhciBnZXRMb2NhdGlvbj1mdW5jdGlvbigpe1xyXG5cdHRpbWVyX2dldExvY3Rpb249c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdHVuaS5nZXRMb2NhdGlvbih7XHJcblx0XHRcdHR5cGU6XCJ3Z3M4NFwiLFxyXG5cdFx0XHRzdWNjZXNzKHJlcyl7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlckxvY2F0aW9uXCIse2xvbmdpdHVkZTpyZXMubG9uZ2l0dWRlLGxhdGl0dWRlOnJlcy5sYXRpdHVkZX0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWwocmVzKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpIFxyXG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGltZXJfZ2V0TG9jdGlvbilcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOlwi6I635Y+W5a6a5L2N5p2D6ZmQ5aSx6LSlXCIsXHJcblx0XHRcdFx0XHRjb250ZW50Olwi6K+35omT5byA5omL5py65a6a5L2N5p2D6ZmQXCIsXHJcblx0XHRcdFx0XHRzaG93Q2FuY2VsOmZhbHNlLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuY29uZmlybSlcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlckxvY2F0aW9uXCIse2xvbmdpdHVkZTowLGxhdGl0dWRlOjB9KVxyXG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbigpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbChyZXMpe1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9LDUwMDApXHJcbn1cclxuXHJcbnZhciB1blVwTG9jdGlvbj1mdW5jdGlvbihpZCl7XHJcblx0aWYoISF0aW1lcl91cExvY3Rpb25baWRdKXtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGltZXJfdXBMb2N0aW9uW2lkXSlcclxuXHR9XHJcbn1cclxudmFyIHVuR2V0TG9jYXRpb249ZnVuY3Rpb24oKXtcclxuXHRjbGVhckludGVydmFsKHRpbWVyX2dldExvY3Rpb24pXHJcbn1cclxudmFyIHVwTG9jdGlvbj1mdW5jdGlvbihpZCl7XHJcblx0dGltZXJfdXBMb2N0aW9uW2lkXT1zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHVzZXJMb2NhdGlvbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyTG9jYXRpb25cIilcclxuXHRcdHZhciBkYXRhPXtcclxuXHRcdFx0cGF0cm9sVGFza0lkOmlkLFxyXG5cdFx0XHRsb25naXR1ZGU6dXNlckxvY2F0aW9uLmxvbmdpdHVkZSxcclxuXHRcdFx0bGF0aXR1ZGU6dXNlckxvY2F0aW9uLmxhdGl0dWRlLFxyXG5cdFx0fVxyXG5cdFx0dmFyIHVwRGF0YT11cExvY3Rpb25EYXRhW2lkXT91cExvY3Rpb25EYXRhW2lkXTpbXVxyXG5cdFx0dmFyIGRhdGU9bmV3IERhdGUoKVxyXG5cdFx0dXBEYXRhLnB1c2goe1xyXG5cdFx0XHRwYXRyb2xUYXNrSWQ6aWQsXHJcblx0XHRcdGxvbmdpdHVkZTp1c2VyTG9jYXRpb24ubG9uZ2l0dWRlLFxyXG5cdFx0XHRsYXRpdHVkZTp1c2VyTG9jYXRpb24ubGF0aXR1ZGUsXHJcblx0XHRcdGxvY2F0aW9uVGltZTpkYXRlLmdldFRpbWUoKVxyXG5cdFx0fSlcclxuXHRcdHVwTG9jdGlvbkRhdGFbaWRdPXVwRGF0YVxyXG5cdFx0cG9zdFJlcXVlc3RObyhVUkwuVEFTS19QQVRST0xfUEFUSF9BRERfQkFUQ0gse2RhdGE6SlNPTi5zdHJpbmdpZnkodXBEYXRhKSxpZDppZH0sKHJlc3VsdHMpPT57XHJcblx0XHRcdGlmKHJlc3VsdHMuY29kZT09Mil7XHJcblx0XHRcdFx0dW5VcExvY3Rpb24oaWQpXHJcblx0XHRcdFx0dmFyIG9uVGFzaz11bmkuZ2V0U3RvcmFnZVN5bmMoXCJvblRhc2tcIik/dW5pLmdldFN0b3JhZ2VTeW5jKFwib25UYXNrXCIpOltdO1xyXG5cdFx0XHRcdG9uVGFzay5zcGxpY2Uob25UYXNrLmluZGV4T2YodGhpcy50YXNrSWQpKVxyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcIm9uVGFza1wiLG9uVGFzayk7XHJcblx0XHRcdH1cclxuXHRcdFx0dXBMb2N0aW9uRGF0YVtpZF09W10gXHJcblx0XHR9KSBcclxuXHR9LHVwVGltZU51bSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvTmF2aWdhdGlvbihsb25naXR1ZGUsbGF0aXR1ZGUpey8v5a+86IiqXHJcblx0Ly8g5Yik5pat5bmz5Y+wICBcclxuXHR2YXIgd2dzODR0b2djajAyPW1hcFRvb2wud2dzODR0b2djajAyKGxvbmdpdHVkZSxsYXRpdHVkZSlcclxuXHRsb25naXR1ZGU9d2dzODR0b2djajAyWzBdXHJcblx0bGF0aXR1ZGU9d2dzODR0b2djajAyWzFdXHJcblx0aWYgKHBsdXMub3MubmFtZSA9PSAnQW5kcm9pZCcpIHsgIFxyXG5cdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwoXCJhbWFwdXJpOi8vcm91dGUvcGxhbi8/c2lkPUJHVklTMSZkaWQ9QkdWSVMyJmRsYXQ9XCIrbGF0aXR1ZGUrXCImZGxvbj1cIitsb25naXR1ZGUrXCImZGV2PTAmdD0wXCIsICBcclxuXHRcdFx0ZnVuY3Rpb24oZSkgeyAgXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0dGl0bGU6XCLor7fkuIvnoa7orqTmiYvmnLrlronoo4Xkuobpq5jlvrflnLDlm75cIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ09wZW4gc3lzdGVtIGRlZmF1bHQgYnJvd3NlciBmYWlsZWQ6ICcgKyBlLm1lc3NhZ2UpOyAgXHJcblx0XHRcdH0sXCJjb20uYXV0b25hdmkubWluaW1hcFwiXHJcblx0XHQpO1xyXG5cdH0gZWxzZSBpZiAocGx1cy5vcy5uYW1lID09ICdpT1MnKSB7ICBcclxuXHRcdHBsdXMucnVudGltZS5sYXVuY2hBcHBsaWNhdGlvbih7IGFjdGlvbjpcImlvc2FtYXA6Ly9wYXRoP3NvdXJjZUFwcGxpY2F0aW9uPWFwcGxpY2F0aW9uTmFtZSZzaWQ9QkdWSVMxJmRpZD1CR1ZJUzImZGxhdD1cIitsYXRpdHVkZStcIiZkbG9uPVwiK2xvbmdpdHVkZStcIiZkZXY9MCZ0PTBcIiB9LCBmdW5jdGlvbihlKSB7ICBcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHR0aXRsZTpcIuivt+S4i+ehruiupOaJi+acuuWuieijheS6humrmOW+t+WcsOWbvlwiXHJcblx0XHRcdH0pXHJcblx0XHRcdGNvbnNvbGUubG9nKCdPcGVuIHN5c3RlbSBkZWZhdWx0IGJyb3dzZXIgZmFpbGVkOiAnICsgZS5tZXNzYWdlKTsgIFxyXG5cdFx0fSk7ICBcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdyeVR5cGVOYW1lKHR5cGUpe1xyXG5cdHZhciBuYW1lPVwiLVwiXHJcblx0c3dpdGNoKHR5cGUpe1xyXG5cdFx0Y2FzZSBcImJlbmd6aGFuXCI6XHJcblx0XHRcdG5hbWU9XCLms7Xnq5lcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiY2FueWluaGFuZ3llXCI6XHJcblx0XHRcdG5hbWU9XCLppJDppa7ooYzkuJpcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZ3lxeVwiOlxyXG5cdFx0XHRuYW1lPVwi5bel5Lia5LyB5LiaXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInhxeXpcIjpcclxuXHRcdFx0bmFtZT1cIuemveeVnOWFu+aullwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJqY2R3XCI6XHJcblx0XHRcdG5hbWU9XCLnm5HmtYvngrnkvY1cIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiamlhbnpodWdvbmdkaVwiOlxyXG5cdFx0XHRuYW1lPVwi5bu6562R5bel5ZywXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImptanpqemRcIjpcclxuXHRcdFx0bmFtZT1cIuWxheawkembhuS4reWxheS9j+eCuVwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJub25nbWFvc2hpY2hhbmdcIjpcclxuXHRcdFx0bmFtZT1cIuWGnOi0uOW4guWculwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJxdGh5XCI6XHJcblx0XHRcdG5hbWU9XCLlhbbku5booYzkuJpcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicmhrcHdkXCI6XHJcblx0XHRcdG5hbWU9XCLlhaXmsrMo5bqTKeaOkuaxoeeCuVwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ3c2NsY1wiOlxyXG5cdFx0XHRuYW1lPVwi5rGh5rC06ZuG5Lit5aSE55CG6K6+5pa9XCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNoYW5waW5ndGFuZ1wiOlxyXG5cdFx0XHRuYW1lPVwi5bGx5Z2q5aGYXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNodWlrdVwiOlxyXG5cdFx0XHRuYW1lPVwi5rC05bqTXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNteXN5emRoXCI6XHJcblx0XHRcdG5hbWU9XCLljYHkuqnku6XkuIrnp43mpI3lpKfmiLdcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwidHpjXCI6XHJcblx0XHRcdG5hbWU9XCLlsaDlrrDlnLpcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwieGlhb3Nhbmx1YW53dVwiOlxyXG5cdFx0XHRuYW1lPVwi5bCP5pWj5Lmx5rGhXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInhpY2hlY2hhbmdcIjpcclxuXHRcdFx0bmFtZT1cIua0l+i9puWculwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ5YW5neXVjaGlcIjpcclxuXHRcdFx0bmFtZT1cIuWFu+mxvOaxoFwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ5aWxpYW9qaWdvdVwiOlxyXG5cdFx0XHRuYW1lPVwi5Yy755aX5py65p6EXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInp6eWZsZGpkXCI6XHJcblx0XHRcdG5hbWU9XCLnp43mpI3kuJrogqXmlpnloIbnp6/ngrlcIlxyXG5cdFx0YnJlYWs7XHJcblx0fVxyXG5cdHJldHVybiBuYW1lXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRXcnlNYXAoKXtcclxuLy8gXHRmb3IgKHZhciBpPTA7aTxhcnJXcnkubGVuZ3RoO2krKykge1xyXG4vLyBcdFx0KGZ1bmN0aW9uKHVybCl7XHJcbi8vIFx0XHRcdGdldFJlcXVlc3RQYyhVUkxbdXJsXSxcIlwiLChyZXN1bHRzKT0+e1xyXG4vLyBcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyh1cmwscmVzdWx0cylcclxuLy8gXHRcdFx0fSlcdFxyXG4vLyBcdFx0fSkoYXJyV3J5W2ldKVxyXG4vLyBcdH1cclxuLy8gfVxyXG5tb2R1bGUuZXhwb3J0cz17ICBcclxuXHRnZXRSZXF1ZXN0LFxyXG5cdGdldFJlcXVlc3RObyxcclxuXHRnZXRSZXF1ZXN0UGMsXHJcblx0cG9zdFJlcXVlc3QsICBcclxuXHRwb3N0UmVxdWVzdE5vLFxyXG5cdHVwbG9hZEZpbGUsXHJcblx0c2hvd1N1Y2Nlc3MsXHJcblx0aXNSZWZyZXNoVGFza3NQYWdlLFxyXG5cdGlzUmVmcmVzaFBvbGx1dGlvblBhZ2UsXHJcblx0d2ViU29ja2V0LFxyXG5cdHVwTG9jdGlvbixcclxuXHR1bkdldExvY2F0aW9uLFxyXG5cdHVuVXBMb2N0aW9uLFxyXG5cdGdldExvY2F0aW9uLFxyXG5cdHVwUHJvYmxlbVRlYW1zLFxyXG5cdGNvbXBsZXRlVGFzayxcclxuXHRyZWN0aWZpY2F0aW9uVGFza0RldGFpbCxcclxuXHRzdWJOdnVlLFxyXG5cdC8vIGdldFdyeU1hcCxcclxuXHR0YXNrSW5mbyxcclxuXHRwb2xsdXRpb25JbmZvLFxyXG5cdHVwVGltZU51bSxcclxuXHRvblRhc2tOdW06MCxcclxuXHR1blRhc2tOdW06MCxcclxuXHRzaXR1YXRpb25EYXRlLFxyXG5cdHRvTmF2aWdhdGlvbixcclxuXHRnZXRXcnlUeXBlTmFtZVxyXG59IiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICguLi5hcmdzKSB7XHJcbiAgY29uc3QgbXNncyA9IGFyZ3MubWFwKCh2KSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcclxuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbiAgbGV0IG1zZyA9ICcnXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgY29uc3QgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XHJcbiAgICAgIG1zZyArPSBsYXN0TXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbXNnID0gbXNnc1swXVxyXG4gIH1cclxuICByZXR1cm4gbXNnXHJcbn1cbiIsImZ1bmN0aW9uIG1hcFRvb2woKSB7ICBcclxuICAgIHRoaXMueF9QSSA9IDMuMTQxNTkyNjUzNTg5NzkzMjQgKiAzMDAwLjAgLyAxODAuMCwgIFxyXG4gICAgdGhpcy5QSSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNiwgIFxyXG4gICAgdGhpcy5lZSA9IDAuMDA2NjkzNDIxNjIyOTY1OTQzMjMsICBcclxuICAgIHRoaXMuYSA9IDYzNzgyNDUuMDsgIFxyXG59ICBcclxuLyoqICBcclxuICogR0NKMDIg6L2s5o2i5Li6IFdHUzg0ICBcclxuICogQHBhcmFtIGxuZyAgXHJcbiAqIEBwYXJhbSBsYXQgIFxyXG4gKiBAcmV0dXJucyB7KltdfSAgXHJcbiAqLyAgXHJcbm1hcFRvb2wucHJvdG90eXBlLmdjajAydG93Z3M4NCA9IGZ1bmN0aW9uKGxuZywgbGF0KSB7ICBcclxuICAgICAgICBpZiAodGhpcy5vdXRfb2ZfY2hpbmEobG5nLCBsYXQpKSB7ICBcclxuICAgICAgICAgICAgcmV0dXJuIFtsbmcsIGxhdF0gIFxyXG4gICAgICAgIH0gZWxzZSB7ICBcclxuICAgICAgICAgICAgbGV0IGRsYXQgPSB0aGlzLnRyYW5zZm9ybWxhdChsbmcgLSAxMDUuMCwgbGF0IC0gMzUuMCk7ICBcclxuICAgICAgICAgICAgbGV0IGRsbmcgPSB0aGlzLnRyYW5zZm9ybWxuZyhsbmcgLSAxMDUuMCwgbGF0IC0gMzUuMCk7ICBcclxuICAgICAgICAgICAgbGV0IHJhZGxhdCA9IGxhdCAvIDE4MC4wICogdGhpcy5QSTsgIFxyXG4gICAgICAgICAgICBsZXQgbWFnaWMgPSBNYXRoLnNpbihyYWRsYXQpOyAgXHJcbiAgICAgICAgICAgIG1hZ2ljID0gMSAtIHRoaXMuZWUgKiBtYWdpYyAqIG1hZ2ljOyAgXHJcbiAgICAgICAgICAgIGxldCBzcXJ0bWFnaWMgPSBNYXRoLnNxcnQobWFnaWMpOyAgXHJcbiAgICAgICAgICAgIGRsYXQgPSAoZGxhdCAqIDE4MC4wKSAvICgodGhpcy5hICogKDEgLSB0aGlzLmVlKSkgLyAobWFnaWMgKiBzcXJ0bWFnaWMpICogdGhpcy5QSSk7ICBcclxuICAgICAgICAgICAgZGxuZyA9IChkbG5nICogMTgwLjApIC8gKHRoaXMuYSAvIHNxcnRtYWdpYyAqIE1hdGguY29zKHJhZGxhdCkgKiB0aGlzLlBJKTsgIFxyXG4gICAgICAgICAgICBsZXQgbWdsYXQgPSBsYXQgKyBkbGF0OyAgXHJcbiAgICAgICAgICAgIGxldCBtZ2xuZyA9IGxuZyArIGRsbmc7ICBcclxuICAgICAgICAgICAgcmV0dXJuIFtsbmcgKiAyIC0gbWdsbmcsIGxhdCAqIDIgLSBtZ2xhdF0gIFxyXG4gICAgICAgIH0gIFxyXG4gICAgfSAgXHJcbiAgICAvKiogIFxyXG4gICAgICog54Gr5pif5Z2Q5qCH57O7IChHQ0otMDIpIOS4jueZvuW6puWdkOagh+ezuyAoQkQtMDkpIOeahOi9rOaNoiAgXHJcbiAgICAgKiDljbPosLfmrYzjgIHpq5jlvrcg6L2sIOeZvuW6piAgXHJcbiAgICAgKiBAcGFyYW0gbG5nICBcclxuICAgICAqIEBwYXJhbSBsYXQgIFxyXG4gICAgICogQHJldHVybnMgeypbXX0gIFxyXG4gICAgICovICBcclxuICAgIG1hcFRvb2wucHJvdG90eXBlLmdjajAydG9iZDA5ID0gZnVuY3Rpb24obG5nLCBsYXQpIHsgIFxyXG4gICAgICAgIGxldCB6ID0gTWF0aC5zcXJ0KGxuZyAqIGxuZyArIGxhdCAqIGxhdCkgKyAwLjAwMDAyICogTWF0aC5zaW4obGF0ICogdGhpcy54X1BJKTsgIFxyXG4gICAgICAgIGxldCB0aGV0YSA9IE1hdGguYXRhbjIobGF0LCBsbmcpICsgMC4wMDAwMDMgKiBNYXRoLmNvcyhsbmcgKiB0aGlzLnhfUEkpOyAgXHJcbiAgICAgICAgbGV0IGJkX2xuZyA9IHogKiBNYXRoLmNvcyh0aGV0YSkgKyAwLjAwNjU7ICBcclxuICAgICAgICBsZXQgYmRfbGF0ID0geiAqIE1hdGguc2luKHRoZXRhKSArIDAuMDA2OyAgXHJcbiAgICAgICAgcmV0dXJuIFtiZF9sbmcsIGJkX2xhdF0gIFxyXG4gICAgfSAgXHJcbiAgICAvKiogIFxyXG4gICAgICogV0dTODTovaxHQ2owMiAgXHJcbiAgICAgKiBAcGFyYW0gbG5nICBcclxuICAgICAqIEBwYXJhbSBsYXQgIFxyXG4gICAgICogQHJldHVybnMgeypbXX0gIFxyXG4gICAgICovICBcclxuICAgIG1hcFRvb2wucHJvdG90eXBlLndnczg0dG9nY2owMiA9IGZ1bmN0aW9uKGxuZywgbGF0KSB7ICBcclxuXHRcdGxuZz1sbmcqMVxyXG5cdFx0bGF0PWxhdCoxXHJcbiAgICAgICAgaWYgKHRoaXMub3V0X29mX2NoaW5hKGxuZywgbGF0KSkgeyAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbG5nLCBsYXRdICBcclxuICAgICAgICB9IGVsc2UgeyAgXHJcbiAgICAgICAgICAgIGxldCBkbGF0ID0gdGhpcy50cmFuc2Zvcm1sYXQobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApOyAgXHJcbiAgICAgICAgICAgIGxldCBkbG5nID0gdGhpcy50cmFuc2Zvcm1sbmcobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApOyAgXHJcbiAgICAgICAgICAgIGxldCByYWRsYXQgPSBsYXQgLyAxODAuMCAqIHRoaXMuUEk7ICBcclxuICAgICAgICAgICAgbGV0IG1hZ2ljID0gTWF0aC5zaW4ocmFkbGF0KTsgIFxyXG4gICAgICAgICAgICBtYWdpYyA9IDEgLSB0aGlzLmVlICogbWFnaWMgKiBtYWdpYzsgIFxyXG4gICAgICAgICAgICBsZXQgc3FydG1hZ2ljID0gTWF0aC5zcXJ0KG1hZ2ljKTsgIFxyXG4gICAgICAgICAgICBkbGF0ID0gKGRsYXQgKiAxODAuMCkgLyAoKHRoaXMuYSAqICgxIC0gdGhpcy5lZSkpIC8gKG1hZ2ljICogc3FydG1hZ2ljKSAqIHRoaXMuUEkpOyAgXHJcbiAgICAgICAgICAgIGRsbmcgPSAoZGxuZyAqIDE4MC4wKSAvICh0aGlzLmEgLyBzcXJ0bWFnaWMgKiBNYXRoLmNvcyhyYWRsYXQpICogdGhpcy5QSSk7ICBcclxuICAgICAgICAgICAgbGV0IG1nbGF0ID0gbGF0ICsgZGxhdDsgIFxyXG4gICAgICAgICAgICBsZXQgbWdsbmcgPSBsbmcgKyBkbG5nOyAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbWdsbmcsIG1nbGF0XSAgXHJcbiAgICAgICAgfSAgXHJcbiAgICB9ICBcclxuICAgIC8qKiAgXHJcbiAgICAgKiBHQ0owMiDovazmjaLkuLogV0dTODQgIFxyXG4gICAgICogQHBhcmFtIGxuZyAgXHJcbiAgICAgKiBAcGFyYW0gbGF0ICBcclxuICAgICAqIEByZXR1cm5zIHsqW119ICBcclxuICAgICAqLyAgXHJcbiAgICBtYXBUb29sLnByb3RvdHlwZS5nY2owMnRvd2dzODQgPSBmdW5jdGlvbihsbmcsIGxhdCkgeyAgXHJcbiAgICAgICAgaWYgKHRoaXMub3V0X29mX2NoaW5hKGxuZywgbGF0KSkgeyAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbG5nLCBsYXRdICBcclxuICAgICAgICB9IGVsc2UgeyAgXHJcbiAgICAgICAgICAgIGxldCBkbGF0ID0gdGhpcy50cmFuc2Zvcm1sYXQobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApOyAgXHJcbiAgICAgICAgICAgIGxldCBkbG5nID0gdGhpcy50cmFuc2Zvcm1sbmcobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApOyAgXHJcbiAgICAgICAgICAgIGxldCByYWRsYXQgPSBsYXQgLyAxODAuMCAqIHRoaXMuUEk7ICBcclxuICAgICAgICAgICAgbGV0IG1hZ2ljID0gTWF0aC5zaW4ocmFkbGF0KTsgIFxyXG4gICAgICAgICAgICBtYWdpYyA9IDEgLSB0aGlzLmVlICogbWFnaWMgKiBtYWdpYzsgIFxyXG4gICAgICAgICAgICBsZXQgc3FydG1hZ2ljID0gTWF0aC5zcXJ0KG1hZ2ljKTsgIFxyXG4gICAgICAgICAgICBkbGF0ID0gKGRsYXQgKiAxODAuMCkgLyAoKHRoaXMuYSAqICgxIC0gdGhpcy5lZSkpIC8gKG1hZ2ljICogc3FydG1hZ2ljKSAqIHRoaXMuUEkpOyAgXHJcbiAgICAgICAgICAgIGRsbmcgPSAoZGxuZyAqIDE4MC4wKSAvICh0aGlzLmEgLyBzcXJ0bWFnaWMgKiBNYXRoLmNvcyhyYWRsYXQpICogdGhpcy5QSSk7ICBcclxuICAgICAgICAgICAgbGV0IG1nbGF0ID0gbGF0ICsgZGxhdDsgIFxyXG4gICAgICAgICAgICBsZXQgbWdsbmcgPSBsbmcgKyBkbG5nOyAgXHJcbiAgICAgICAgICAgIHJldHVybiBbbG5nICogMiAtIG1nbG5nLCBsYXQgKiAyIC0gbWdsYXRdICBcclxuICAgICAgICB9ICBcclxuICAgIH0gXHJcbiAgICBtYXBUb29sLnByb3RvdHlwZS50cmFuc2Zvcm1sYXQgPSBmdW5jdGlvbihsbmcsIGxhdCkgeyAgXHJcbiAgICAgICAgbGV0IHJldCA9IC0xMDAuMCArIDIuMCAqIGxuZyArIDMuMCAqIGxhdCArIDAuMiAqIGxhdCAqIGxhdCArIDAuMSAqIGxuZyAqIGxhdCArIDAuMiAqIE1hdGguc3FydChNYXRoLmFicyhsbmcpKTsgIFxyXG4gICAgICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKDYuMCAqIGxuZyAqIHRoaXMuUEkpICsgMjAuMCAqIE1hdGguc2luKDIuMCAqIGxuZyAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDsgIFxyXG4gICAgICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKGxhdCAqIHRoaXMuUEkpICsgNDAuMCAqIE1hdGguc2luKGxhdCAvIDMuMCAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDsgIFxyXG4gICAgICAgIHJldCArPSAoMTYwLjAgKiBNYXRoLnNpbihsYXQgLyAxMi4wICogdGhpcy5QSSkgKyAzMjAgKiBNYXRoLnNpbihsYXQgKiB0aGlzLlBJIC8gMzAuMCkpICogMi4wIC8gMy4wOyAgXHJcbiAgICAgICAgcmV0dXJuIHJldCAgXHJcbiAgICB9ICBcclxuICAgIG1hcFRvb2wucHJvdG90eXBlLnRyYW5zZm9ybWxuZyA9IGZ1bmN0aW9uKGxuZywgbGF0KSB7ICBcclxuICAgICAgICBsZXQgcmV0ID0gMzAwLjAgKyBsbmcgKyAyLjAgKiBsYXQgKyAwLjEgKiBsbmcgKiBsbmcgKyAwLjEgKiBsbmcgKiBsYXQgKyAwLjEgKiBNYXRoLnNxcnQoTWF0aC5hYnMobG5nKSk7ICBcclxuICAgICAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiBsbmcgKiB0aGlzLlBJKSArIDIwLjAgKiBNYXRoLnNpbigyLjAgKiBsbmcgKiB0aGlzLlBJKSkgKiAyLjAgLyAzLjA7ICBcclxuICAgICAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbihsbmcgKiB0aGlzLlBJKSArIDQwLjAgKiBNYXRoLnNpbihsbmcgLyAzLjAgKiB0aGlzLlBJKSkgKiAyLjAgLyAzLjA7ICBcclxuICAgICAgICByZXQgKz0gKDE1MC4wICogTWF0aC5zaW4obG5nIC8gMTIuMCAqIHRoaXMuUEkpICsgMzAwLjAgKiBNYXRoLnNpbihsbmcgLyAzMC4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wOyAgXHJcbiAgICAgICAgcmV0dXJuIHJldCAgXHJcbiAgICB9ICBcclxuICAgIC8qKiAgXHJcbiAgICAgKiDliKTmlq3mmK/lkKblnKjlm73lhoXvvIzkuI3lnKjlm73lhoXliJnkuI3lgZrlgY/np7sgIFxyXG4gICAgICogQHBhcmFtIGxuZyAgXHJcbiAgICAgKiBAcGFyYW0gbGF0ICBcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSAgXHJcbiAgICAgKi8gIFxyXG4gICAgbWFwVG9vbC5wcm90b3R5cGUub3V0X29mX2NoaW5hID0gZnVuY3Rpb24obG5nLCBsYXQpIHsgIFxyXG4gICAgICAgIHJldHVybiAobG5nIDwgNzIuMDA0IHx8IGxuZyA+IDEzNy44MzQ3KSB8fCAoKGxhdCA8IDAuODI5MyB8fCBsYXQgPiA1NS44MjcxKSB8fCBmYWxzZSk7ICBcclxuICAgIH0gIFxyXG4gICAgbW9kdWxlLmV4cG9ydHMubWFwVG9vbCA9bmV3IG1hcFRvb2woKTsgICIsIlxuaW1wb3J0IEFwcCBmcm9tICcuL3N1Yk52dWUvZGV0YWlsLm52dWU/bXBUeXBlPXBhZ2UnXG5BcHAubXBUeXBlID0gJ3BhZ2UnXG5BcHAucm91dGUgPSAnc3ViTnZ1ZS9kZXRhaWwnXG5BcHAuZWwgPSAnI3Jvb3QnXG5cbm5ldyBWdWUoQXBwKVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMWQzYTg5NiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMuJG9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMuJG9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlICYmIHRoaXMuJHJvb3QgJiYgdGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSl7XG4gIHRoaXMuX19tZXJnZV9zdHlsZSh0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKVxufVxuaWYodGhpcy5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgdGhpcy5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTFkM2E4OTYmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTFkM2E4OTYmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIFwiMTFkM2E4OTZcIixcbiAgXCIzY2E1Y2YyYVwiXG4gIFxuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkc6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvZGV0YWlsLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMCFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMWQzYTg5NiZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJkZXRhaWxcIl0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbF90aXRsZVwiXSB9LCBbXG4gICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjMDAwXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucG9sbHV0aW9uLm5hbWUpKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJkZXRhaWxfY29udGVudFwiXSB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJkZXRhaWxfY29udGVudF9saXN0XCJdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJkZXRhaWxfY29udGVudF9saXN0XCIsIFwibmF2aWdhdGlvblwiXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvTmF2aWdhdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJ0ZXh0XCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiI2ZmZlwiIH0gfSwgW192bS5fdihcIuWvvOiIqlwiKV0pXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTItMCFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0yLTAhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTItMSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS0zLTAhLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsX3RpdGxlXCI+PHRleHQgc3R5bGU9XCJjb2xvcjogIzAwMDt0ZXh0LWFsaWduOiBjZW50ZXI7XCI+e3twb2xsdXRpb24ubmFtZX19PC90ZXh0PjwvZGl2PlxyXG5cdFx0PCEtLSA8ZGl2IGNsYXNzPVwiY2xvc2VcIiBAY2xpY2s9XCJjbG9zZSgpXCI+PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZjtcIj7lhbPpl608L3RleHQ+PC9kaXY+IC0tPlxyXG5cdFx0PGRpdiBjbGFzcz1cImRldGFpbF9jb250ZW50XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxfY29udGVudF9saXN0XCIgQGNsaWNrPVwiY2xvc2UoKVwiPuWPlua2iDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsX2NvbnRlbnRfbGlzdCBuYXZpZ2F0aW9uXCIgQGNsaWNrPVwidG9OYXZpZ2F0aW9uKClcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuWvvOiIqjwvdGV4dD48L2Rpdj5cclxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHttYXBUb29sfSBmcm9tICcuLi9zdGF0aWMvanMvbWFwVG9vbC5qcydcblx0aW1wb3J0IHV0aWwgZnJvbSAnLi4vc3RhdGljL2pzL3V0aWxzLmpzJ1xuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBvbGx1dGlvbjp7fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dW5pLiRvbihcInNob3dEZXRhaWxcIiwocG9sbHV0aW9uKT0+e1xyXG5cdFx0XHRcdHRoaXMucG9sbHV0aW9uPXBvbGx1dGlvblxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcblx0XHRtZXRob2RzOntcclxuXHRcdFx0Y2xvc2UoKXtcclxuXHRcdFx0XHR1bmkuJGVtaXQoXCJjbG9zZURldGFpbFwiKVxyXG5cdFx0XHR9LFxuXHRcdFx0dG9OYXZpZ2F0aW9uKCl7Ly/lr7zoiKpcclxuXHRcdFx0XHR1dGlsLnRvTmF2aWdhdGlvbih0aGlzLnBvbGx1dGlvbi5sb25naXR1ZGUsdGhpcy5wb2xsdXRpb24ubGF0aXR1ZGUpXHJcblx0XHRcdH1cclxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZGV0YWlse1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxfdGl0bGV7XHJcblx0cGFkZGluZzogMTBweCAwcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR3aWR0aDogNzEwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0ZmxleDogMTtcclxuXHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjZTFlMWUxO1xyXG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxufVxyXG4uZGV0YWlsX2NvbnRlbnR7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdGZsZXg6IDE7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbiA7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMHB4IDIwcHg7XHJcbn1cclxuLmRldGFpbF9jb250ZW50X2xpc3R7XHJcblx0Ym9yZGVyLXN0eWxlOnNvbGlkO1xyXG5cdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdGJvcmRlci1jb2xvcjogI2UxZTFlMTtcclxuXHRoZWlnaHQ6IDcwcHg7XHJcblx0d2lkdGg6IDM0MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubmF2aWdhdGlvbntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTA4N2ZiO1xyXG59XHJcbi5jbG9zZXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDVweDtcclxuXHRwYWRkaW5nOiAzcHggMTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IzUwODdGQjtcclxuXHR0b3A6MTBweDtcclxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1udnVlLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0xIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMiFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTMhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIS4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMWQzYTg5NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LW9uZU9mLTAtMSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNy1vbmVPZi0wLTIhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctb25lT2YtMC0zIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCEuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTFkM2E4OTYmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImRldGFpbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZGV0YWlsX3RpdGxlXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjBcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjcxMFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJib3JkZXJCb3R0b21TdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlMWUxZTFcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMVwiXG4gIH0sXG4gIFwiZGV0YWlsX2NvbnRlbnRcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcImRldGFpbF9jb250ZW50X2xpc3RcIjoge1xuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlMWUxZTFcIixcbiAgICBcImhlaWdodFwiOiBcIjcwXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjM0MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIm5hdmlnYXRpb25cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzUwODdmYlwiXG4gIH0sXG4gIFwiY2xvc2VcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHRcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiM1wiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM1MDg3RkJcIixcbiAgICBcInRvcFwiOiBcIjEwXCJcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
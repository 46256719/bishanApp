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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    packName = uni.getAccountInfoSync().miniProgram.appId || '';
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


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
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
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
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
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

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
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

  globalEvent.addEventListener('plusMessage', function (e) {
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
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

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
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
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

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
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
        return Object.keys(data).map(function (key) {
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
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
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
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

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
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

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

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

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

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

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
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
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
      } };

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



  var api = /*#__PURE__*/Object.freeze({
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
    $emit: $emit });



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
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

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
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
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
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-23320190923002","_inBundle":false,"_integrity":"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz","_shasum":"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a","_spec":"@dcloudio/uni-stat@next","_where":"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"fed4c73fb9142a1b277dd79313939cad90693d3e","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-23320190923002"};

/***/ }),
/* 4 */
/*!****************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/pages.json?{"type":"style"} ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!***************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/pages.json?{"type":"stat"} ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__97B111E"});

/***/ }),
/* 6 */
/*!****************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/main.js?{"type":"appStyle"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
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
// const url0=uni.getStorageSync("url")?uni.getStorageSync("url"):"http://183.230.23.21"ZZZZZZZ
var url = url0 + ":18082";
// const url=url0+":8082"
var url_PC = url + "/proxy/pc";
var daili = "http://10.117.80.201:8081/app";
// const daili="http://122.114.177.198:8081/app"
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
/* 22 */
/*!*******************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/static/js/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__, plus) {var _interface = _interopRequireDefault(__webpack_require__(/*! ./interface.js */ 21));
var _mapTool = __webpack_require__(/*! ./mapTool.js */ 24);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var timer_getLoction = null; //获取经纬度的线程
var timer_upLoction = {}; //进行任务上传点位的线程集群
var upLoctionData = {}; //进行任务上传的点位详细信息集群
var subNvue = {}; //原生子窗体的对象集群
var taskInfo = {}; //任务的详细信息
var pollutionInfo = {}; //污染源的详细信息
var upTimeNum = 300000; //上传经纬度的时间间隔
var situationDate = {}; //各类考核标准情况选择的日期
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
        console.log(__f__(res.data, " at static\\js\\utils.js:28"));
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
    // console.log(data)
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
    console.log(__f__(results, " at static\\js\\utils.js:163"));
  }, function (results) {
    toCompleteTask(url, data);
  });
}
function toUpProblem(url, data) {//上传问题或者完成点位巡查
  getRequestNo(url, { data: data }, function (results) {
    console.log(__f__("上传成功", " at static\\js\\utils.js:170"));
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
      // console.log(res)
      if (res.data != "000000") {
        typeof call == "function" ? call(res.data) : "";
      } else {
        typeof error == "function" ? error(data) : "";
      }
    },
    fail: function fail(res) {
      console.log(__f__(res, " at static\\js\\utils.js:218"));
      typeof error == "function" ? error(data) : "";
    } });

}
function showSuccess(msg, call) {
  uni.showToast({
    icon: "success",
    title: msg });

  typeof call == "function" ? setTimeout(call, 1500) : "";
}
var isRefreshTasksPage = true; //是否更新正在进行的任务页面

var isRefreshPollutionPage = true; //是否更新任务里面的需要巡查的污染源页面

var webSocket = function webSocket(id) {
  uni.connectSocket({
    url: _interface.default.WEBSOCKET + id,
    header: {
      'content-type': 'application/json' },

    method: 'GET' });

};
uni.onSocketOpen(function (res) {
  console.log(__f__('WebSocket连接已打开！', " at static\\js\\utils.js:244"));
});

var getLocation = function getLocation() {//获取当前的经纬度
  timer_getLoction = setInterval(function () {
    uni.getLocation({
      type: "wgs84",
      success: function success(res) {
        uni.setStorageSync("userLocation", { longitude: res.longitude ? res.longitude : uni.getStorageSync("userLocation").longitude, latitude: res.latitude ? res.latitude : uni.getStorageSync("userLocation").latitude });
      },
      fail: function fail(res) {
        console.log(__f__(res, " at static\\js\\utils.js:255"));
        clearInterval(timer_getLoction);
        uni.showModal({
          title: "获取定位权限失败",
          content: "请打开手机定位权限",
          showCancel: false,
          success: function success(res) {
            console.log(__f__(res.confirm, " at static\\js\\utils.js:262"));
            uni.setStorageSync("userLocation", { longitude: 0, latitude: 0 });
            getLocation();
          },
          fail: function fail(res) {
            console.log(__f__(res, " at static\\js\\utils.js:267"));
          } });

      } });

  }, 5000);
};

var unUpLoction = function unUpLoction(id) {//取消某个任务的经纬度的上传
  if (!!timer_upLoction[id]) {
    clearInterval(timer_upLoction[id]);
  }
};
var unGetLocation = function unGetLocation() {//停止经纬度的获取
  clearInterval(timer_getLoction);
};
var upLoction = function upLoction(id) {//在任务进行时上传当前的经纬度
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

      console.log(__f__('Open system default browser failed: ' + e.message, " at static\\js\\utils.js:325"));
    }, "com.autonavi.minimap");

  } else if (plus.os.name == 'iOS') {
    plus.runtime.launchApplication({ action: "iosamap://path?sourceApplication=applicationName&sid=BGVIS1&did=BGVIS2&dlat=" + latitude + "&dlon=" + longitude + "&dev=0&t=0" }, function (e) {
      uni.showToast({
        icon: "none",
        title: "请下确认手机安装了高德地图" });

      console.log(__f__('Open system default browser failed: ' + e.message, " at static\\js\\utils.js:334"));
    });
  }
}

function getWryTypeName(type) {//根据各类污染源的类型获取其中文名字
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
      name = "畜禽养殖";
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

function downLoadFile(url) {//下载APP
  var downloadTask = uni.downloadFile({
    url: _interface.default.url + "/downLoad/downLoadAppFile",
    complete: function complete(res) {
      console.log(__f__(res, " at static\\js\\utils.js:410"));
      if (res.statusCode == 200) {
        plus.runtime.install(res.tempFilePath, {
          force: false },
        function () {
          plus.runtime.restart();
        }, function (e) {
          console.log(__f__(e, " at static\\js\\utils.js:417"));
          // this.success = false
          uni.showToast({
            title: '安装升级包失败',
            icon: 'none' });

        });
      }
    } });

  var num = 0;
  downloadTask.onProgressUpdate(function (res) {
    if (num != res.progress) {
      num = res.progress;
      console.log(__f__('下载进度' + res.progress, " at static\\js\\utils.js:431"));
      console.log(__f__('已经下载的数据长度' + res.totalBytesWritten, " at static\\js\\utils.js:432"));
      console.log(__f__('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite, " at static\\js\\utils.js:433"));
    }
    // 测试条件，取消下载任务。
  });
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
  // getWryMap,
  taskInfo: taskInfo,
  pollutionInfo: pollutionInfo,
  upTimeNum: upTimeNum,
  onTaskNum: 0,
  unTaskNum: 0,
  situationDate: situationDate,
  toNavigation: toNavigation,
  getWryTypeName: getWryTypeName,
  downLoadFile: downLoadFile };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"]))

/***/ }),
/* 23 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);
    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  return msg;
}

/***/ }),
/* 24 */
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
/* 25 */,
/* 26 */,
/* 27 */
/*!************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/main.js?{"page":"subNvue%2Fdetail"} ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subNvue/detail.nvue?mpType=page */ 28);

        
        
        
        _subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'subNvue/detail'
        _subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_subNvue_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 28 */
/*!********************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?mpType=page ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page */ 29);
/* harmony import */ var _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.nvue?vue&type=script&lang=js&mpType=page */ 31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page */ 33).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page */ 33).default)
          }

}

/* normalize component */

var component = Object(_F_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11d3a896",
  "46b01858"
  
)

injectStyles.call(component)
component.options.__file = "G:/知行APP/pollutionMonitoring/subNvue/detail.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 29 */
/*!**************************************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!./detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_template_id_11d3a896_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 30 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=template&id=11d3a896&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
              _vm.close()
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
              _vm.toNavigation()
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
/* 31 */
/*!********************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!./detail.nvue?vue&type=script&lang=js&mpType=page */ 32);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_3_0_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_3_1_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--3-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











var _mapTool = __webpack_require__(/*! ../static/js/mapTool.js */ 24);
var _utils = _interopRequireDefault(__webpack_require__(/*! ../static/js/utils.js */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 33 */
/*!****************************************************************************************************************************!*\
  !*** G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!./detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page */ 34);
/* harmony import */ var _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_F_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_F_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_4_0_detail_nvue_vue_type_style_index_0_id_11d3a896_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--4-0!G:/知行APP/pollutionMonitoring/subNvue/detail.nvue?vue&type=style&index=0&id=11d3a896&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3JpbmcvcGFnZXMuanNvbj9mNDBhIiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9wYWdlcy5qc29uP2QzZjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz8yODc3IiwidW5pLWFwcDovLy9zdGF0aWMvanMvaW50ZXJmYWNlLmpzIiwidW5pLWFwcDovLy9zdGF0aWMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsInVuaS1hcHA6Ly8vc3RhdGljL2pzL21hcFRvb2wuanMiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL21haW4uanM/ZWUyYyIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9kZXRhaWwubnZ1ZT8yYTc5Iiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL2RldGFpbC5udnVlP2NjMDYiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvZGV0YWlsLm52dWU/ZDM1MyIsIndlYnBhY2s6Ly8vRzov55+l6KGMQVBQL3BvbGx1dGlvbk1vbml0b3Jpbmcvc3ViTnZ1ZS9kZXRhaWwubnZ1ZT9jY2MzIiwidW5pLWFwcDovLy9zdWJOdnVlL2RldGFpbC5udnVlIiwid2VicGFjazovLy9HOi/nn6XooYxBUFAvcG9sbHV0aW9uTW9uaXRvcmluZy9zdWJOdnVlL2RldGFpbC5udnVlPzk0OWQiLCJ3ZWJwYWNrOi8vL0c6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvZGV0YWlsLm52dWU/YTI3NCJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJpbml0VW5pIiwiaXNGbiIsImhhbmRsZVByb21pc2UiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiUkVHRVgiLCJBUElfTk9STUFMX0xJU1QiLCJzaG91bGRQcm9taXNlIiwibmFtZSIsInRlc3QiLCJpbmRleE9mIiwicHJvbWlzaWZ5IiwiYXBpIiwiX2xlbiIsImFyZ3VtZW50cyIsInBhcmFtcyIsIkFycmF5IiwiX2tleSIsInVuZGVmaW5lZCIsImFwcGx5IiwiY29uY2F0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsIm9uTWVzc2FnZUNhbGxiYWNrcyIsIm9yaWdpbiIsIm9uU3ViTlZ1ZU1lc3NhZ2UiLCJ3ZWJ2aWV3SWQiLCJ3ZWV4UGx1cyIsIndlYnZpZXciLCJjdXJyZW50V2VidmlldyIsImlkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsImV2ZW50IiwidG8iLCJ3cmFwcGVyIiwiJHByb2Nlc3NlZCIsImN1cnJlbnRXZWJ2aWV3SWQiLCJpc1BvcHVwTlZ1ZSIsImhvc3ROVnVlSWQiLCJfX3VuaWFwcF9vcmlnaW5fdHlwZSIsIl9fdW5pYXBwX29yaWdpbl9pZCIsInBvcHVwTlZ1ZUlkIiwicG9zdE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJfX3VuaWFwcF9tYXNrX2lkIiwiX191bmlhcHBfaG9zdCIsIm1hc2tDb2xvciIsIl9fdW5pYXBwX21hc2siLCJtYXNrV2VidmlldyIsImdldFdlYnZpZXdCeUlkIiwicGFyZW50Iiwib2xkU2hvdyIsIm9sZEhpZGUiLCJvbGRDbG9zZSIsImNsb3NlIiwic2hvd01hc2siLCJzZXRTdHlsZSIsIm1hc2siLCJjbG9zZU1hc2siLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsImdldFN1Yk5WdWVCeUlkIiwiZ2V0Q3VycmVudFN1Yk5WdWUiLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsImdsb2JhbEV2ZW50IiwiY2FsbGJhY2tzIiwiVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrIiwiY3JlYXRlQ2FsbGJhY2siLCJyZXMiLCJlcnJNc2ciLCJrZWVwQWxpdmUiLCJjYWxsYmFja0lkIiwicHVibGlzaCIsIl9yZWYiLCJjcmVhdGVQdWJsaXNoIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwicGx1Z2luTmFtZSIsImRvbSIsImxvYWRGb250RmFjZSIsImZhbWlseSIsInNvdXJjZSIsImRlc2MiLCJhZGRSdWxlIiwiZm9udEZhbWlseSIsInN0YXR1cyIsImdsb2JhbEV2ZW50JDEiLCJjYWxsYmFja3MkMSIsImlzVW5pQXBwUmVhZHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJzdHJlYW0iLCJNRVRIT0RfR0VUIiwiTUVUSE9EX1BPU1QiLCJDT05URU5UX1RZUEVfSlNPTiIsIkNPTlRFTlRfVFlQRV9GT1JNIiwic2VyaWFsaXplIiwiY29udGVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibWFwIiwiam9pbiIsImhlYWRlciIsIl9yZWYkbWV0aG9kIiwiX3JlZiRkYXRhVHlwZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwiYWJvcnRlZCIsImhhc0NvbnRlbnRUeXBlIiwiaGVhZGVycyIsImZldGNoIiwiYm9keSIsIl9yZWYyIiwib2siLCJzdGF0dXNUZXh0IiwicmV0Iiwic3RhdHVzQ29kZSIsImFib3J0Iiwic3RvcmFnZSIsIlVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSIsImdldFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZVN0b3JhZ2UiLCJfcmVmMyIsInJlbW92ZUl0ZW0iLCJjbGVhclN0b3JhZ2UiLCJfcmVmNCIsImNsaXBib2FyZCIsImdldENsaXBib2FyZERhdGEiLCJnZXRTdHJpbmciLCJzZXRDbGlwYm9hcmREYXRhIiwic2V0U3RyaW5nIiwiZ2V0RW1pdHRlciIsImdldFVuaUVtaXR0ZXIiLCJFbWl0dGVyIiwiJG9uIiwid2FybiIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiY3R4Iiwic2xpY2UiLCJmcmVlemUiLCJ3eCIsInVwbG9hZEZpbGUiLCJkb3dubG9hZEZpbGUiLCJjaG9vc2VJbWFnZSIsInByZXZpZXdJbWFnZSIsImdldEltYWdlSW5mbyIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJjaG9vc2VWaWRlbyIsInNhdmVWaWRlb1RvUGhvdG9zQWxidW0iLCJzYXZlRmlsZSIsImdldFNhdmVkRmlsZUxpc3QiLCJnZXRTYXZlZEZpbGVJbmZvIiwicmVtb3ZlU2F2ZWRGaWxlIiwib3BlbkRvY3VtZW50IiwiZ2V0U3RvcmFnZUluZm8iLCJjaG9vc2VMb2NhdGlvbiIsIm9wZW5Mb2NhdGlvbiIsImdldFN5c3RlbUluZm8iLCJtYWtlUGhvbmVDYWxsIiwic2NhbkNvZGUiLCJzZXRTY3JlZW5CcmlnaHRuZXNzIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsInNldEtlZXBTY3JlZW5PbiIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0IiwiYWRkUGhvbmVDb250YWN0Iiwic2hvd1RvYXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlVG9hc3QiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsInNob3dBY3Rpb25TaGVldCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInNldE5hdmlnYXRpb25CYXJDb2xvciIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJzd2l0Y2hUYWIiLCJuYXZpZ2F0ZUJhY2siLCJnZXRQcm92aWRlciIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJzaGFyZSIsInJlcXVlc3RQYXltZW50Iiwic3Vic2NyaWJlUHVzaCIsInVuc3Vic2NyaWJlUHVzaCIsIm9uUHVzaCIsIm9mZlB1c2giLCJiYXNlVW5pIiwib3MiLCJudnVlIiwiUHJveHkiLCJnZXQiLCJ0YXJnZXQiLCJjcmVhdGVVbmkiLCJnZXRVbmkiLCJXZWV4UGx1cyIsInVybDAiLCJ1cmxfUEMiLCJkYWlsaSIsIldFQlNPQ0tFVCIsIkxPR0lOX0xPR0lOIiwiVEFTS19JTkRFWCIsIlRBU0tfSU5ERVgyIiwiVEFTS19QUk9DRVNTIiwiVEFTS19GSU5JU0giLCJUQVNLX05PX1NUQVJUIiwiUFJPQkxFTV9MSVNUIiwiVVBMT0FEX1VQTE9BRCIsIkRFUEFSVE1FTlRfR0VUX0RFUFQiLCJUQVNLX1BBVFJPTF9QT0lOVF9DT05UQUNUTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX0ZJTklTSF9MSVNUIiwiVEFTS19QQVRST0xfUE9JTlRfR0VUX0FMTF9QUk9CTEVNIiwiVEFTS19QQVRST0xfUE9JTlRfR0VUX1BST0JMRU0iLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0FERF9CQVRDSCIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVCIsIlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVDIiLCJUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEUiLCJUQVNLX1BBVFJPTF9QT0lOVF9OT1JNQUwiLCJUQVNLX1BBVFJPTF9QT0lOVF9QUk9DRVNTX0xJU1QiLCJUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEVfV1JZX0FERFJFU1NfREVUQUlMRUQiLCJUQVNLX1BBVFJPTF9QQVRIX0FERCIsIlRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENIIiwiVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURV9TVEFUVVMiLCJUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFIiwiVEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUyIsIlVTRVJfVVBEQVRFIiwiUE9MTFVUSU9OX1NFQVJDSCIsIkRBUElOR1NIVUlaSElfU0hVSVpISVRPTkdKSV9LSExYIiwiUVVLT05HU0hVSVpISVRPTkdKSV9IRUxJVVNIVUlaSElUT05HSkkiLCJXQVRFUl9CQVNFX0dFVEJBU0VZRUFSTU9OVEgiLCJBU1NFU1NfVE9XTl9MSVNUIiwiQVNTRVNTX0RFUEFSVE1FTlRfTElTVCIsIldSWV9CWl9MSVNUIiwiV1JZX0NPTVBBTllfTElTVCIsIldSWV9SSEtQV0tfTElTVCIsIldSWV9SSEtQV0RfTElTVCIsIldSWV9KWkdEX0xJU1QiLCJXUllfUVRIWV9MSVNUIiwiV1JZX0pDRFdfTElTVCIsIldSWV9ZTEpHX0xJU1QiLCJXUllfWFFZWl9MSVNUIiwiV1JZX1RaQ19MSVNUIiwiV1JZX1NIVUlLVV9MSVNUIiwiV1JZX1NQVF9MSVNUIiwiV1JZX1lZQ19MSVNUIiwiV1JZX0pNSlpKWkRfTElTVCIsIldSWV9YU0xXX0xJU1QiLCJXUllfWENDX0xJU1QiLCJXUllfQ1lIWV9MSVNUIiwiV1JZX05NU0NfTElTVCIsIldSWV9XU0NMQ19MSVNUIiwiV1JZX1paWUZMREpEX0xJU1QiLCJXUllfU01ZU1laREhfTElTVCIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0aW1lcl9nZXRMb2N0aW9uIiwidGltZXJfdXBMb2N0aW9uIiwidXBMb2N0aW9uRGF0YSIsInN1Yk52dWUiLCJ0YXNrSW5mbyIsInBvbGx1dGlvbkluZm8iLCJ1cFRpbWVOdW0iLCJzaXR1YXRpb25EYXRlIiwiZ2V0UmVxdWVzdCIsInRva2VuIiwiY29kZSIsImxvZyIsImljb24iLCJtc2ciLCJnZXRSZXF1ZXN0UGMiLCJnZXRSZXF1ZXN0Tm8iLCJwb3N0UmVxdWVzdE5vIiwicG9zdFJlcXVlc3QiLCJjb21wbGV0ZVRhc2siLCJ1cEltZ1RlYW1zIiwicG9pbnRQaG90byIsInJlc3VsdHMiLCJpbmRleCIsInRvQ29tcGxldGVUYXNrIiwiVVJMIiwicmVjdGlmaWNhdGlvblRhc2tEZXRhaWwiLCJyZWN0aWZpY2F0aW9uUGhvdG8iLCJ1cFByb2JsZW1UZWFtcyIsInByb2JsZW1UZWFtcyIsInByb2JsZW1QaG90byIsInRvVXBQcm9ibGVtIiwiaW1ncyIsInNwbGl0IiwicGljdHVyZSIsImltZ1RlYW1zIiwiZmlsZVR5cGUiLCJmaWxlUGF0aCIsInNob3dTdWNjZXNzIiwiaXNSZWZyZXNoVGFza3NQYWdlIiwiaXNSZWZyZXNoUG9sbHV0aW9uUGFnZSIsIndlYlNvY2tldCIsImNvbm5lY3RTb2NrZXQiLCJvblNvY2tldE9wZW4iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCJ1blVwTG9jdGlvbiIsInVuR2V0TG9jYXRpb24iLCJ1cExvY3Rpb24iLCJ1c2VyTG9jYXRpb24iLCJwYXRyb2xUYXNrSWQiLCJ1cERhdGEiLCJkYXRlIiwibG9jYXRpb25UaW1lIiwib25UYXNrIiwic3BsaWNlIiwidGFza0lkIiwidG9OYXZpZ2F0aW9uIiwid2dzODR0b2djajAyIiwibWFwVG9vbCIsIm9wZW5VUkwiLCJsYXVuY2hBcHBsaWNhdGlvbiIsImFjdGlvbiIsImdldFdyeVR5cGVOYW1lIiwiZG93bkxvYWRGaWxlIiwiZG93bmxvYWRUYXNrIiwiaW5zdGFsbCIsInRlbXBGaWxlUGF0aCIsImZvcmNlIiwicmVzdGFydCIsIm51bSIsIm9uUHJvZ3Jlc3NVcGRhdGUiLCJwcm9ncmVzcyIsInRvdGFsQnl0ZXNXcml0dGVuIiwidG90YWxCeXRlc0V4cGVjdGVkVG9Xcml0ZSIsIm9uVGFza051bSIsInVuVGFza051bSIsInR5cG9mIiwicyIsInN1YnN0cmluZyIsImZvcm1hdExvZyIsIm1zZ3MiLCJ2VHlwZSIsIlN0cmluZyIsImxhc3RNc2ciLCJwb3AiLCJ4X1BJIiwiUEkiLCJlZSIsImEiLCJnY2owMnRvd2dzODQiLCJvdXRfb2ZfY2hpbmEiLCJkbGF0IiwidHJhbnNmb3JtbGF0IiwiZGxuZyIsInRyYW5zZm9ybWxuZyIsInJhZGxhdCIsIm1hZ2ljIiwic2luIiwic3FydG1hZ2ljIiwic3FydCIsImNvcyIsIm1nbGF0IiwibWdsbmciLCJnY2owMnRvYmQwOSIsInoiLCJ0aGV0YSIsImF0YW4yIiwiYmRfbG5nIiwiYmRfbGF0IiwiYWJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztB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cXdCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F0d0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoic3ViTnZ1ZS9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjcpO1xuIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcclxuICAgICAgICBtYXNrV2VidmlldyA9IG1hc2tXZWJ2aWV3LnBhcmVudCgpIHx8IG1hc2tXZWJ2aWV3Oy8v5YaN5qyh5qOA5rWL54i2XHJcbiAgICAgICAgdmFyIG9sZFNob3cgPSB3ZWJ2aWV3LnNob3c7XHJcbiAgICAgICAgdmFyIG9sZEhpZGUgPSB3ZWJ2aWV3LmhpZGU7XHJcbiAgICAgICAgdmFyIG9sZENsb3NlID0gd2Vidmlldy5jbG9zZTtcclxuXHJcbiAgICAgICAgdmFyIHNob3dNYXNrID0gZnVuY3Rpb24gc2hvd01hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IG1hc2tDb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjbG9zZU1hc2sgPSBmdW5jdGlvbiBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93TWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRTaG93LmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5oaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZEhpZGUuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZENsb3NlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3ViTlZ1ZUJ5SWQoaWQpIHtcclxuICAgICAgICB2YXIgd2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3ZWJ2aWV3ICYmICF3ZWJ2aWV3LiRwcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgd3JhcHBlcih3ZWJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN1Yk5WdWVCeUlkKHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBsdXMgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXMnKTtcclxuICAgIHZhciBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgaWQgPSAwO1xyXG4gICAgdmFyIGNhbGxiYWNrcyA9IHt9O1xyXG5cclxuICAgIHZhciBVTklBUFBfU0VSVklDRV9OVlVFX0lEID0gJ19fdW5pYXBwX19zZXJ2aWNlJztcclxuXHJcbiAgICBnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBKc0FwaScpIHtcclxuICAgICAgICAgICAgaW52b2tlKGUuZGF0YS5pZCwgZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBTdWJOVnVlJykge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGUuZGF0YS5kYXRhLCBlLmRhdGEub3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soYXJncywgdHlwZSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoaXNGbihhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncyhyZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6b2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5zdWNjZXNzKSAmJiBhcmdzLnN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOmZhaWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5mYWlsKSAmJiBhcmdzLmZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRm4oYXJncy5jb21wbGV0ZSkgJiYgYXJncy5jb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNGbihhcmdzKSB8fCBhcmdzICYmIGlzRm4oYXJncy5jYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sua2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrSWQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbGxiYWNrWycgKyBjYWxsYmFja0lkICsgJ10gaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHVibGlzaCA9IGZ1bmN0aW9uIHB1Ymxpc2goX3JlZikge1xyXG4gICAgICAgIHZhciBpZCA9IF9yZWYuaWQsXHJcbiAgICAgICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYucGFyYW1zO1xyXG5cclxuICAgICAgICBjYWxsYmFja3NbaWRdID0gY3JlYXRlQ2FsbGJhY2socGFyYW1zLCB0eXBlKTtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH0sIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZShkYXRhLCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3JlYXRlUHVibGlzaCA9IGZ1bmN0aW9uIGNyZWF0ZVB1Ymxpc2gobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkKyssXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBhcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4ocGx1Z2luTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUocGx1Z2luTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRGYWNlKF9yZWYpIHtcclxuICAgICAgICB2YXIgZmFtaWx5ID0gX3JlZi5mYW1pbHksXHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYuc291cmNlLFxyXG4gICAgICAgICAgICBkZXNjID0gX3JlZi5kZXNjLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGRvbS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogZmFtaWx5LFxyXG4gICAgICAgICAgICBzcmM6IHNvdXJjZS5yZXBsYWNlKC9cIi9nLCAnXFwnJylcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdsb2FkRm9udEZhY2U6b2snLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxFdmVudCQxID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBjYWxsYmFja3MkMSA9IFtdO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50JDEuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwUmVhZHknKSB7XHJcbiAgICAgICAgICAgIHJlYWR5LmlzVW5pQXBwUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzJDEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmlBcHBSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH0gOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgP1xyXG4gICAgICAgICAgICBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cmVhbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnc3RyZWFtJyk7XHJcblxyXG4gICAgLy8gbGV0IHJlcXVlc3RUYXNrSWQgPSAwXHJcblxyXG4gICAgdmFyIE1FVEhPRF9HRVQgPSAnR0VUJztcclxuICAgIHZhciBNRVRIT0RfUE9TVCA9ICdQT1NUJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfSlNPTiA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfRk9STSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG5cclxuICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSkge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE1FVEhPRF9HRVQ7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBDT05URU5UX1RZUEVfRk9STTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IE1FVEhPRF9QT1NUICYmIGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCkgPT09IENPTlRFTlRfVFlQRV9KU09OKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0KF9yZWYpIHtcclxuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmwsXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyLFxyXG4gICAgICAgICAgICBfcmVmJG1ldGhvZCA9IF9yZWYubWV0aG9kLFxyXG4gICAgICAgICAgICBtZXRob2QgPSBfcmVmJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiBfcmVmJG1ldGhvZCxcclxuICAgICAgICAgICAgX3JlZiRkYXRhVHlwZSA9IF9yZWYuZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gX3JlZiRkYXRhVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2pzb24nIDogX3JlZiRkYXRhVHlwZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlID0gX3JlZi5yZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWVzdFRhc2tJZCsrXHJcbiAgICAgICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGhhc0NvbnRlbnRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NvbnRlbnRUeXBlICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb250ZW50VHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gTUVUSE9EX0dFVCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICh+dXJsLmluZGV4T2YoJz8nKSA/IHVybC5zdWJzdHIoLTEpID09PSAnJicgfHwgdXJsLnN1YnN0cigtMSkgPT09ICc/JyA/ICcnIDogJyYnIDogJz8nKSArXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdHlwZTogZGF0YVR5cGUgPT09ICdqc29uJyA/ICdqc29uJyA6ICd0ZXh0JyxcclxuICAgICAgICAgICAgYm9keTogbWV0aG9kICE9PSBNRVRIT0RfR0VUID8gc2VyaWFsaXplKGRhdGEsIG1ldGhvZCwgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIDogJydcclxuICAgICAgICB9LCBmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gX3JlZjIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgb2sgPSBfcmVmMi5vayxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBfcmVmMi5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcclxuXHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAtMSB8fCBhYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3JlcXVlc3Q6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldC5zdGF0dXNDb2RlID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0LmhlYWRlciA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcclxuICAgICAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3RvcmFnZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1c3N0b3JhZ2UnKTtcclxuICAgIHZhciBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUgPSAnX19UWVBFJztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdG9yYWdlKF9yZWYpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHJldC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAmJiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ1N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldFN0b3JhZ2U6b2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoX3JlZjIpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgZGF0YVR5cGUgPSAnU3RyaW5nJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gJ09iamVjdCc7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGRhdGFUeXBlLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdzZXRTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTdG9yYWdlKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYzLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAncmVtb3ZlU3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdyZW1vdmVTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoX3JlZjQpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjQua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjQuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWY0LnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmNC5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWY0LmNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbGlwYm9hcmQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2NsaXBib2FyZCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENsaXBib2FyZERhdGEoX3JlZikge1xyXG4gICAgICAgIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGNsaXBib2FyZC5nZXRTdHJpbmcoZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldENsaXBib2FyZERhdGE6b2snLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDbGlwYm9hcmREYXRhKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ3NldENsaXBib2FyZERhdGE6b2snXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbGlwYm9hcmQuc2V0U3RyaW5nKGRhdGEpO1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldEVtaXR0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdldFVuaUVtaXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVuaUVtaXR0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBFbWl0dGVyID0ge1xyXG4gICAgICAgICAgICAkb246IGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9mZjogZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvZmYgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvbmNlOiBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbmNlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkZW1pdDogZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kZW1pdCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbWl0dGVyO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHkoY3R4LCBtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9mZicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGFwaSA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgbG9hZEZvbnRGYWNlOiBsb2FkRm9udEZhY2UsXHJcbiAgICAgICAgcmVhZHk6IHJlYWR5LFxyXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogZ2V0U3RvcmFnZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiBzZXRTdG9yYWdlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHJlbW92ZVN0b3JhZ2UsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiBjbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgZ2V0Q2xpcGJvYXJkRGF0YTogZ2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBzZXRDbGlwYm9hcmREYXRhOiBzZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2U6IG9uU3ViTlZ1ZU1lc3NhZ2UsXHJcbiAgICAgICAgZ2V0U3ViTlZ1ZUJ5SWQ6IGdldFN1Yk5WdWVCeUlkLFxyXG4gICAgICAgIGdldEN1cnJlbnRTdWJOVnVlOiBnZXRDdXJyZW50U3ViTlZ1ZSxcclxuICAgICAgICAkb246ICRvbixcclxuICAgICAgICAkb2ZmOiAkb2ZmLFxyXG4gICAgICAgICRvbmNlOiAkb25jZSxcclxuICAgICAgICAkZW1pdDogJGVtaXRcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgd3ggPSB7XHJcbiAgICAgICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBkb3dubG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgY2hvb3NlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgcHJldmlld0ltYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldEltYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICBzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIGNob29zZVZpZGVvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVWaWRlb1RvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgc2F2ZUZpbGU6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlTGlzdDogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVNhdmVkRmlsZTogdHJ1ZSxcclxuICAgICAgICBvcGVuRG9jdW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldExvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Mb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBnZXRTeXN0ZW1JbmZvOiB0cnVlLFxyXG4gICAgICAgIGdldE5ldHdvcmtUeXBlOiB0cnVlLFxyXG4gICAgICAgIG1ha2VQaG9uZUNhbGw6IHRydWUsXHJcbiAgICAgICAgc2NhbkNvZGU6IHRydWUsXHJcbiAgICAgICAgc2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBnZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIHNldEtlZXBTY3JlZW5PbjogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlTG9uZzogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlU2hvcnQ6IHRydWUsXHJcbiAgICAgICAgYWRkUGhvbmVDb250YWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2FzdDogdHJ1ZSxcclxuICAgICAgICBzaG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBoaWRlVG9hc3Q6IHRydWUsXHJcbiAgICAgICAgaGlkZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgIHNob3dBY3Rpb25TaGVldDogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhckNvbG9yOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlVG86IHRydWUsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogdHJ1ZSxcclxuICAgICAgICByZUxhdW5jaDogdHJ1ZSxcclxuICAgICAgICBzd2l0Y2hUYWI6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVCYWNrOiB0cnVlLFxyXG4gICAgICAgIGdldFByb3ZpZGVyOiB0cnVlLFxyXG4gICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgIGdldFVzZXJJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgIHJlcXVlc3RQYXltZW50OiB0cnVlLFxyXG4gICAgICAgIHN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgdW5zdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIG9uUHVzaDogdHJ1ZSxcclxuICAgICAgICBvZmZQdXNoOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlVW5pID0ge1xyXG4gICAgICAgIG9zOiB7XHJcbiAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB1bmkgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHVuaSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Bvc3RNZXNzYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncmVxdWlyZU5hdGl2ZVBsdWdpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhiYXNlVW5pKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB1bmlba2V5XSA9IGJhc2VVbmlba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5pLnBvc3RNZXNzYWdlID0gcG9zdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luID0gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCA9IG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pO1xyXG59XHJcblxyXG52YXIgY3JlYXRlVW5pO1xyXG5cclxuaWYgKHR5cGVvZiBnZXRVbmkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGNyZWF0ZVVuaSA9IGdldFVuaTtcclxufSBlbHNlIHtcclxuICAgIGNyZWF0ZVVuaSA9IGluaXRVbmk7XHJcbn1cclxudmFyIHdlZXhQbHVzID0gbmV3IFdlZXhQbHVzKHdlZXgpO1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbmkod2VleCwgd2VleFBsdXMsIEJyb2FkY2FzdENoYW5uZWwpO1xyXG5leHBvcnQge1xyXG4gICAgd2VleFBsdXNcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7fSxcImdsb2JhbFN0eWxlXCI6e319IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX185N0IxMTFFXCJ9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjc6ODA4MlwiXHJcbi8vIGNvbnN0IHVybDA9XCJodHRwOi8vMTkyLjE2OC4xLjRcIlxyXG4vLyBjb25zdCB1cmwwPVwiaHR0cDovLzE5Mi4xNjguMS41XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjAuMTg4XCJcclxuLy8gY29uc3QgdXJsMD1cImh0dHA6Ly8xOTIuMTY4LjEuMTVcIlxyXG4vLyBjb25zdCB1cmwwPVwiaHR0cDovLzEyMi4xMTQuMTc3LjE5OFwiXHJcbmNvbnN0IHVybDA9XCJodHRwOi8vMTgzLjIzMC4yMy4yMVwiXHJcbi8vIGNvbnN0IHVybDA9dW5pLmdldFN0b3JhZ2VTeW5jKFwidXJsXCIpP3VuaS5nZXRTdG9yYWdlU3luYyhcInVybFwiKTpcImh0dHA6Ly8xODMuMjMwLjIzLjIxXCJaWlpaWlpaXHJcbmNvbnN0IHVybD11cmwwK1wiOjE4MDgyXCJcclxuLy8gY29uc3QgdXJsPXVybDArXCI6ODA4MlwiXHJcbmNvbnN0IHVybF9QQz11cmwrXCIvcHJveHkvcGNcIlxyXG5jb25zdCBkYWlsaT1cImh0dHA6Ly8xMC4xMTcuODAuMjAxOjgwODEvYXBwXCJcclxuLy8gY29uc3QgZGFpbGk9XCJodHRwOi8vMTIyLjExNC4xNzcuMTk4OjgwODEvYXBwXCJcclxuLy8gY29uc3QgdXJsX1BDPXVybDArXCI6ODA4MS9hcHBcIlxyXG5cclxuXHJcblxyXG4vL+W4uOmTvuaOpSBcclxuY29uc3QgV0VCU09DS0VUPVwid3M6Ly8xOTIuMTY4LjEuNDo4MDgyL3dlYnNvY2tldC9cIlxyXG5cclxuLy8g55m75b2VXHJcbmNvbnN0IExPR0lOX0xPR0lOPXVybCtcIi9sb2dpbi9sb2dpblwiXHJcbmNvbnN0IFRBU0tfSU5ERVg9dXJsK1wiL3Rhc2svaW5kZXhcIi8v6I635Y+W6aaW6aG15Lu75Yqh5oOF5Ya1XHJcbmNvbnN0IFRBU0tfSU5ERVgyPXVybCtcIi90YXNrL2luZGV4MlwiLy/ojrflj5bpppbpobXku7vliqHmg4XlhrVcclxuXHJcbmNvbnN0IFRBU0tfUFJPQ0VTUz11cmwrXCIvdGFzay9wcm9jZXNzXCIvL+ato+WcqOi/m+ihjOS4reeahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgVEFTS19GSU5JU0g9dXJsK1wiL3Rhc2svZmluaXNoXCIvL+W3suWujOaIkOeahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgVEFTS19OT19TVEFSVD11cmwrXCIvdGFzay9ub1N0YXJ0XCIvL+i/mOacquW8gOWni+eahOS7u+WKoe+8jOS4jeS8oHVpZCDliJnmmL7npLrmiYDmnInkurpcclxuY29uc3QgUFJPQkxFTV9MSVNUPXVybCtcIi9wcm9ibGVtL2xpc3RcIi8v6Zeu6aKY5YiX6KGoIHBhZ2Ug5Li65b+F6ZyAIOesrOS4gOmhteS4ujAg5b2TdWlk5Li656m655qE5pe25YCZ5bCG5Lya5p+l6K+i5omA5pyJ6Zeu6aKYIOWPjeS5i+WImeafpeivouW9k+WJjeeUqOaIt+aPkOS6pOeahOmXrumimFxyXG5jb25zdCBVUExPQURfVVBMT0FEPXVybCtcIi91cGxvYWQvdXBsb2FkXCIvL+S4iuS8oOWbvueJh1xyXG5jb25zdCBERVBBUlRNRU5UX0dFVF9ERVBUPXVybCtcIi9kZXBhcnRtZW50L2dldERlcHRcIi8v6I635Y+W5Lmh6ZWH5YiX6KGoXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX0NPTlRBQ1RMSVNUPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9jb250YWN0TGlzdFwiLy/ojrflj5bogZTns7vkurrkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfRklOSVNIX0xJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2ZpbmlzaExpc3RcIi8v6I635Y+W54K55L2N6L+b6KGM5Lit55qE5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9BTExfUFJPQkxFTT11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvZ2V0QWxsUHJvYmxlbVwiLy/ojrflj5bmiYDmnInmsaHmn5PmupDpl67popjnsbvlnotcclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfR0VUX1BST0JMRU09dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L2dldFByb2JsZW1cIi8v6I635Y+W5rGh5p+T5rqQ6Zeu6aKY57G75Z6LXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENIPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9wcm9ibGVtL2FkZEJhdGNoXCIvL+aJuemHj+aWsOWinumXrumimFxyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1Q9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vbGlzdFwiLy/pgJrov4fngrnkvY3kv6Hmga8g6I635Y+W6Zeu6aKY5L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fTElTVDI9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3Byb2JsZW0vbGlzdDJcIi8v6YCa6L+H5Lu75Yqh5L+h5oGvIOiOt+WPlumXrumimOS/oeaBr1xyXG5jb25zdCBUQVNLX1BBVFJPTF9QT0lOVF9VUERBVEU9dXJsK1wiL3Rhc2svcGF0cm9sL3BvaW50L3VwZGF0ZVwiLy/mm7TmlrDlt6Hmn6XngrnkvY3nirbkv6Hmga9cclxuY29uc3QgVEFTS19QQVRST0xfUE9JTlRfTk9STUFMPXVybCtcIi90YXNrL3BhdHJvbC9wb2ludC9ub3JtYWxcIi8v5pu05pS55beh5p+l54K55L2N54q25oCB54q25oCBXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1BST0NFU1NfTElTVD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvcHJvY2Vzc0xpc3RcIi8v5pu05pS55beh5p+l54K55L2N54q25oCB54q25oCBXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BPSU5UX1VQREFURV9XUllfQUREUkVTU19ERVRBSUxFRD11cmwrXCIvdGFzay9wYXRyb2wvcG9pbnQvdXBkYXRlV3J5QWRkcmVzc0RldGFpbGVkXCIvL+axoeafk+a6kOmHjeaWsOWumuS9jSBpZD3msaHmn5PmupBJRCDvvIx3cnlUeXBl562J5LqO5rGh5p+T5rqQ57G75Z6L77yM5Zyw5Z2A5L+h5oGvIOWSjOe7j+e6rOW6plxyXG5jb25zdCBUQVNLX1BBVFJPTF9QQVRIX0FERD11cmwrXCIvdGFzay9wYXRyb2wvcGF0aC9hZGRcIi8v5re75Yqg6Lev5b6E54K55L+h5oGvXHJcbmNvbnN0IFRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENIPXVybCtcIi90YXNrL3BhdHJvbC9wYXRoL2FkZEJhdGNoXCIvL+a3u+WKoOi3r+W+hOeCueS/oeaBr1xyXG5cclxuXHJcbi8vIGNvbnN0IFRBU0tfUEFUUk9MX1VQREFURV9TVEFUVVM9dXJsK1wiL3Rhc2svcGF0cm9sL3VwZGF0ZVN0YXR1c1wiLy/mm7TmlLnlt6Hmn6Xku7vliqHnirbmgIFcclxuY29uc3QgVEFTS19SRUNUSUZJQ0FUSU9OX1VQREFURV9TVEFUVVM9dXJsK1wiL3Rhc2svcmVjdGlmaWNhdGlvbi91cGRhdGVTdGF0dXNcIi8v5pu05pS55pW05Liq5Lu75Yqh54q25oCBXHJcblxyXG5jb25zdCBUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFPXVybCtcIi90YXNrL3JlY3RpZmljYXRpb24vdXBkYXRlXCIvL+S/ruaUueaVtOaUueS7u+WKoeWGheWuue+8jOWbvueJh+etiVxyXG5cclxuY29uc3QgVEFTS19QQVRST0xfVVBEQVRFX1NUQVRVUz11cmwrXCIvdGFzay9wYXRyb2wvdXBkYXRlU3RhdHVzXCIvL+abtOaUueW3oeafpeS7u+WKoeeKtuaAgVxyXG5jb25zdCBVU0VSX1VQREFURT11cmwrXCIvdXNlci91cGRhdGVcIi8v6YCa6L+H54K55L2N5L+h5oGvIOiOt+WPlumXrumimOS/oeaBr1xyXG5cclxuXHJcblxyXG5jb25zdCBQT0xMVVRJT05fU0VBUkNIPXVybCtcIi9wb2xsdXRpb24vc2VhcmNoXCIvL+aQnOe0ouaxoeafk+a6kFxyXG5cclxuXHJcbi8vUEPmjqXlj6NcclxuXHJcbmNvbnN0IERBUElOR1NIVUlaSElfU0hVSVpISVRPTkdKSV9LSExYPWRhaWxpK1wiL2RhcGluZ3NodWl6aGkvc2h1aXpoaXRvbmdqaV9raGx4XCIvL+aWremdouaDheWGtVxyXG5jb25zdCBRVUtPTkdTSFVJWkhJVE9OR0pJX0hFTElVU0hVSVpISVRPTkdKST1kYWlsaStcIi9xdUtvbmdTaHVpWmhpVG9uZ0ppL2hlTGl1U2h1aVpoaVRvbmdKaVwiLy/msrPmtYHnu5/orqFcclxuY29uc3QgV0FURVJfQkFTRV9HRVRCQVNFWUVBUk1PTlRIPWRhaWxpK1wiL3dhdGVyL2Jhc2UvZ2V0QmFzZVllYXJNb250aFwiLy/ojrflj5bmnInmlbDmja7nmoTml7bpl7RcclxuXHJcbi8vUEPmjpLooYzmppzmjqXlj6NcclxuY29uc3QgQVNTRVNTX1RPV05fTElTVD1kYWlsaStcIi9hc3Nlc3MvdG93bkxpc3RcIi8v6ZWH6KGX5o6S6KGMXHJcbmNvbnN0IEFTU0VTU19ERVBBUlRNRU5UX0xJU1Q9ZGFpbGkrXCIvYXNzZXNzL2RlcGFydG1lbnRMaXN0XCIvL+mDqOmXqOaOkuihjFxyXG4vL+axoeafk+a6kOaOpeWPo1xyXG5cclxuY29uc3QgV1JZX0JaX0xJU1Q9ZGFpbGkrXCIvd3J5L2J6L2xpc3RcIi8v5rO156uZXHJcbmNvbnN0IFdSWV9DT01QQU5ZX0xJU1Q9ZGFpbGkrXCIvd3J5L2NvbXBhbnkvbGlzdFwiLy/lt6XkuJrkvIHkuJpcclxuY29uc3QgV1JZX1JIS1BXS19MSVNUPWRhaWxpK1wiL3dyeS9yaGtwd2svbGlzdFwiLy/lhaXmsrPmjpLmsaHlj6NcclxuY29uc3QgV1JZX1JIS1BXRF9MSVNUPWRhaWxpK1wiL3dyeS9yaGtwd2QvbGlzdFwiLy/lhaXmsrPmjpLmsaHngrlcclxuY29uc3QgV1JZX0paR0RfTElTVD1kYWlsaStcIi93cnkvanpnZC9saXN0XCIvL+W7uuetkeW3peWcsFxyXG5jb25zdCBXUllfUVRIWV9MSVNUPWRhaWxpK1wiL3dyeS9xdGh5L2xpc3RcIi8v5YW25a6D6KGM5LiaXHJcbmNvbnN0IFdSWV9KQ0RXX0xJU1Q9ZGFpbGkrXCIvd3J5L2pjZHcvbGlzdFwiLy/mo4DmtYvngrnkvY1cclxuY29uc3QgV1JZX1lMSkdfTElTVD1kYWlsaStcIi93cnkveWxqZy9saXN0XCIvL+WMu+eWl+acuuaehFxyXG5jb25zdCBXUllfWFFZWl9MSVNUPWRhaWxpK1wiL3dyeS94cXl6L2xpc3RcIi8v55Wc56a95YW75q6WXHJcbmNvbnN0IFdSWV9UWkNfTElTVD1kYWlsaStcIi93cnkvdHpjL2xpc3RcIi8v5bGg5a6w5Zy6XHJcbmNvbnN0IFdSWV9TSFVJS1VfTElTVD1kYWlsaStcIi93cnkvc2h1aWt1L2xpc3RcIi8v5rC05bqTXHJcbmNvbnN0IFdSWV9TUFRfTElTVD1kYWlsaStcIi93cnkvc3B0L2xpc3RcIi8v5bGx5Z2q5aGYXHJcbmNvbnN0IFdSWV9ZWUNfTElTVD1kYWlsaStcIi93cnkveXljL2xpc3RcIi8v5YW76bG85rGgXHJcbmNvbnN0IFdSWV9KTUpaSlpEX0xJU1Q9ZGFpbGkrXCIvd3J5L2ptanpqemQvbGlzdFwiLy/lsYXmsJHpm4bkuK3lsYXkvY/ngrlcclxuY29uc3QgV1JZX1hTTFdfTElTVD1kYWlsaStcIi93cnkveHNsdy9saXN0XCIvL+Wwj+aVo+S5seaxoeS8geS4mlxyXG5jb25zdCBXUllfWENDX0xJU1Q9ZGFpbGkrXCIvd3J5L3hjYy9saXN0XCIvL+a0l+i9puWculxyXG5jb25zdCBXUllfQ1lIWV9MSVNUPWRhaWxpK1wiL3dyeS9jeWh5L2xpc3RcIi8v6aSQ6aWu6KGM5LiaXHJcbmNvbnN0IFdSWV9OTVNDX0xJU1Q9ZGFpbGkrXCIvd3J5L25tc2MvbGlzdFwiLy/lhpzotLjluILlnLpcclxuY29uc3QgV1JZX1dTQ0xDX0xJU1Q9ZGFpbGkrXCIvd3J5L3dzY2xjL2xpc3RcIi8v5rGh5rC05aSE55CG5Y6CXHJcbmNvbnN0IFdSWV9aWllGTERKRF9MSVNUPWRhaWxpK1wiL3dyeS96enlmbGRqZC9saXN0XCIvL+enjeakjeS4muiCpeaWmeWghuenr+eCuVxyXG5jb25zdCBXUllfU01ZU1laREhfTElTVD1kYWlsaStcIi93cnkvc215c3l6ZGgvbGlzdFwiLy8xMOS6qeS7peS4iuenjeakjeWkp+aIt1xyXG5cclxubW9kdWxlLmV4cG9ydHM9e1xyXG5cdHVybCxcclxuXHRXRUJTT0NLRVQsXHJcblx0TE9HSU5fTE9HSU4sXHJcblx0VEFTS19JTkRFWCxcclxuXHRUQVNLX0lOREVYMixcclxuXHRUQVNLX1BST0NFU1MsXHJcblx0VEFTS19GSU5JU0gsXHJcblx0VEFTS19OT19TVEFSVCxcclxuXHRQUk9CTEVNX0xJU1QsXHJcblx0VVBMT0FEX1VQTE9BRCxcclxuXHRERVBBUlRNRU5UX0dFVF9ERVBULFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0NPTlRBQ1RMSVNULFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0ZJTklTSF9MSVNULFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX0dFVF9BTExfUFJPQkxFTSxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9HRVRfUFJPQkxFTSxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0FERF9CQVRDSCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9CTEVNX0xJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfUFJPQkxFTV9MSVNUMixcclxuXHRVU0VSX1VQREFURSxcclxuXHRUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFX1NUQVRVUyxcclxuXHRUQVNLX1JFQ1RJRklDQVRJT05fVVBEQVRFLFxyXG5cdFRBU0tfUEFUUk9MX1VQREFURV9TVEFUVVMsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfVVBEQVRFLFxyXG5cdFRBU0tfUEFUUk9MX1BPSU5UX05PUk1BTCxcclxuXHRUQVNLX1BBVFJPTF9QT0lOVF9QUk9DRVNTX0xJU1QsXHJcblx0VEFTS19QQVRST0xfUE9JTlRfVVBEQVRFX1dSWV9BRERSRVNTX0RFVEFJTEVELFxyXG5cdFRBU0tfUEFUUk9MX1BBVEhfQURELFxyXG5cdFRBU0tfUEFUUk9MX1BBVEhfQUREX0JBVENILFxyXG5cdERBUElOR1NIVUlaSElfU0hVSVpISVRPTkdKSV9LSExYLFxyXG5cdFFVS09OR1NIVUlaSElUT05HSklfSEVMSVVTSFVJWkhJVE9OR0pJLFxyXG5cdFdSWV9CWl9MSVNULFxyXG5cdFdSWV9DT01QQU5ZX0xJU1QsXHJcblx0V1JZX1JIS1BXS19MSVNULFxyXG5cdFdSWV9SSEtQV0RfTElTVCxcclxuXHRXUllfSlpHRF9MSVNULFxyXG5cdFdSWV9RVEhZX0xJU1QsXHJcblx0V1JZX0pDRFdfTElTVCxcclxuXHRXUllfWUxKR19MSVNULFxyXG5cdFdSWV9YUVlaX0xJU1QsXHJcblx0V1JZX1RaQ19MSVNULFxyXG5cdFdSWV9TSFVJS1VfTElTVCxcclxuXHRXUllfU1BUX0xJU1QsXHJcblx0V1JZX1lZQ19MSVNULFxyXG5cdFdSWV9KTUpaSlpEX0xJU1QsXHJcblx0V1JZX1hTTFdfTElTVCxcclxuXHRXUllfWENDX0xJU1QsXHJcblx0V1JZX0NZSFlfTElTVCxcclxuXHRXUllfTk1TQ19MSVNULFxyXG5cdFdSWV9XU0NMQ19MSVNULFxyXG5cdFdSWV9aWllGTERKRF9MSVNULFxyXG5cdFdSWV9TTVlTWVpESF9MSVNULFxyXG5cdEFTU0VTU19UT1dOX0xJU1QsXHJcblx0QVNTRVNTX0RFUEFSVE1FTlRfTElTVCxcclxuXHRQT0xMVVRJT05fU0VBUkNILFxyXG5cdHVybF9QQyxcclxuXHRXQVRFUl9CQVNFX0dFVEJBU0VZRUFSTU9OVEhcclxufVxyXG4iLCJpbXBvcnQgVVJMIGZyb20gXCIuL2ludGVyZmFjZS5qc1wiXHJcbmltcG9ydCB7bWFwVG9vbH0gZnJvbSBcIi4vbWFwVG9vbC5qc1wiXHJcbnZhciB0aW1lcl9nZXRMb2N0aW9uPW51bGwvL+iOt+WPlue7j+e6rOW6pueahOe6v+eoi1xyXG52YXIgdGltZXJfdXBMb2N0aW9uPXt9Ly/ov5vooYzku7vliqHkuIrkvKDngrnkvY3nmoTnur/nqIvpm4bnvqRcclxudmFyIHVwTG9jdGlvbkRhdGE9e30vL+i/m+ihjOS7u+WKoeS4iuS8oOeahOeCueS9jeivpue7huS/oeaBr+mbhue+pFxyXG52YXIgc3ViTnZ1ZT17fS8v5Y6f55Sf5a2Q56qX5L2T55qE5a+56LGh6ZuG576kXHJcbnZhciB0YXNrSW5mbz17fS8v5Lu75Yqh55qE6K+m57uG5L+h5oGvXHJcbnZhciBwb2xsdXRpb25JbmZvPXt9Ly/msaHmn5PmupDnmoTor6bnu4bkv6Hmga9cclxudmFyIHVwVGltZU51bT0zMDAwMDAvL+S4iuS8oOe7j+e6rOW6pueahOaXtumXtOmXtOmalFxyXG52YXIgc2l0dWF0aW9uRGF0ZT17fS8v5ZCE57G76ICD5qC45qCH5YeG5oOF5Ya16YCJ5oup55qE5pel5pyfXHJcbmZ1bmN0aW9uIGdldFJlcXVlc3QodXJsLGRhdGEsY2FsbCxlcnJvcil7XHJcblx0dW5pLnNob3dMb2FkaW5nKHttYXNrOnRydWV9KVxyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLCAvL+S7heS4uuekuuS+i++8jOW5tumdnuecn+WunuaOpeWPo+WcsOWdgOOAglxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHR0aXRsZTpyZXMuZGF0YS5tc2d8fFwi5pWw5o2u5byC5bi4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdFBjKHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVxdWVzdE5vKHVybCxkYXRhLGNhbGwsZXJyb3Ipe1xyXG5cdHZhciB0b2tlbj11bmkuZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKXx8XCJcIlxyXG5cdHVuaS5yZXF1ZXN0KHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0ZGF0YTogZGF0YSxcclxuXHRcdG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0Y29tcGxldGU6KHJlcykgPT57XHJcblx0XHRcdGlmKCFyZXMuZGF0YSl7XHJcblx0XHRcdFx0dHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IoKTpcIlwiXHJcblx0XHRcdH1lbHNlIGlmKHJlcy5kYXRhLmNvZGU9PTEpe1xyXG5cdFx0XHRcdHR5cGVvZiBjYWxsPT1cImZ1bmN0aW9uXCI/Y2FsbChyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihyZXMuZGF0YSk6XCJcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdFJlcXVlc3RObyh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdGRhdGE6IGRhdGEsXHJcblx0XHRtZXRob2Q6XCJQT1NUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHQvLyBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0Ly8gfWVsc2V7XHJcblx0XHRcdFx0Ly8gdHlwZW9mIGVycm9yPT1cImZ1bmN0aW9uXCI/ZXJyb3IocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0Ly8gfVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwb3N0UmVxdWVzdCh1cmwsZGF0YSxjYWxsLGVycm9yKXtcclxuXHR1bmkuc2hvd0xvYWRpbmcoe21hc2s6dHJ1ZX0pXHJcblx0dmFyIHRva2VuPXVuaS5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpfHxcIlwiXHJcblx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiB1cmwsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e5o6l5Y+j5Zyw5Z2A44CCXHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0bWV0aG9kOlwiUE9TVFwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG5cdFx0XHR0b2tlblxyXG5cdFx0fSxcclxuXHRcdGNvbXBsZXRlOihyZXMpID0+e1xyXG5cdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRpZighcmVzLmRhdGEpe1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKCk6XCJcIlxyXG5cdFx0XHR9ZWxzZSBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuXHRcdFx0XHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP2NhbGwocmVzLmRhdGEpOlwiXCJcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0dGl0bGU6cmVzLmRhdGEubXNnfHxcIuaVsOaNruW8guW4uFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZGF0YSl7Ly/lrozmiJDlt6Hmn6XmsaHmn5PmupDku7vliqFcclxuXHR1cEltZ1RlYW1zKGRhdGEucG9pbnRQaG90byxmdW5jdGlvbihyZXN1bHRzLGluZGV4KXtcclxuXHRcdGRhdGEucG9pbnRQaG90bz1yZXN1bHRzXHJcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0dG9Db21wbGV0ZVRhc2soVVJMLlRBU0tfUEFUUk9MX1BPSU5UX1VQREFURSxkYXRhKVxyXG5cdH0sMSwocmVzdWx0cyk9PntcclxuXHRcdGNvbXBsZXRlVGFzayhkYXRhKVxyXG5cdH0pXHJcbn1cclxuZnVuY3Rpb24gcmVjdGlmaWNhdGlvblRhc2tEZXRhaWwoZGF0YSl7Ly/lrozmiJDmlbTmlLnku7vliqFcclxuXHR1cEltZ1RlYW1zKGRhdGEucmVjdGlmaWNhdGlvblBob3RvLGZ1bmN0aW9uKHJlc3VsdHMsaW5kZXgpe1xyXG5cdFx0ZGF0YS5yZWN0aWZpY2F0aW9uUGhvdG89cmVzdWx0c1xyXG5cdFx0dG9Db21wbGV0ZVRhc2soVVJMLlRBU0tfUkVDVElGSUNBVElPTl9VUERBVEUsZGF0YSlcclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHVwUHJvYmxlbVRlYW1zKGRhdGEpey8v5LiK5Lyg5aSa5Liq6Zeu6aKYXHJcblx0dmFyIHByb2JsZW1UZWFtcz0wXHJcblx0Zm9yKHZhciBpPTA7aTxkYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0aWYoZGF0YVtpXS5wcm9ibGVtUGhvdG8pe1xyXG5cdFx0XHRwcm9ibGVtVGVhbXMrK1xyXG5cdFx0XHR1cEltZ1RlYW1zKGRhdGFbaV0ucHJvYmxlbVBob3RvLGZ1bmN0aW9uKHJlc3VsdHMsaW5kZXgpe1xyXG5cdFx0XHRcdHByb2JsZW1UZWFtcy0tXHJcblx0XHRcdFx0ZGF0YVtpbmRleF0ucHJvYmxlbVBob3RvPXJlc3VsdHNcclxuXHRcdFx0XHRpZihwcm9ibGVtVGVhbXM9PTApe1xyXG5cdFx0XHRcdFx0ZGF0YT1KU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdFx0XHRcdFx0dG9VcFByb2JsZW0oVVJMLlRBU0tfUEFUUk9MX1BPSU5UX1BST0JMRU1fQUREX0JBVENILGRhdGEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LGksKHJlc3VsdHMpPT57XHJcblx0XHRcdFx0dXBQcm9ibGVtVGVhbXMoZGF0YSlcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gdG9Db21wbGV0ZVRhc2sodXJsLGRhdGEpey8v5LiK5Lyg6Zeu6aKY5oiW6ICF5a6M5oiQ54K55L2N5beh5p+lXHJcblx0Ly8gY29uc29sZS5sb2coZGF0YSlcclxuXHRnZXRSZXF1ZXN0Tm8odXJsLGRhdGEsKHJlc3VsdHMpPT57XHJcblx0XHRjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG5cdH0sKHJlc3VsdHMpPT57XHJcblx0XHR0b0NvbXBsZXRlVGFzayh1cmwsZGF0YSlcclxuXHR9KVxyXG59XHJcbmZ1bmN0aW9uIHRvVXBQcm9ibGVtKHVybCxkYXRhKXsvL+S4iuS8oOmXrumimOaIluiAheWujOaIkOeCueS9jeW3oeafpVxyXG5cdGdldFJlcXVlc3RObyh1cmwse2RhdGF9LChyZXN1bHRzKT0+e1xyXG5cdFx0Y29uc29sZS5sb2coXCLkuIrkvKDmiJDlip9cIilcclxuXHR9LChyZXN1bHRzKT0+e1xyXG5cdFx0dG9VcFByb2JsZW0odXJsLGRhdGEpXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB1cEltZ1RlYW1zKGltZ3MsY2FsbCxpbmRleCxlcnJvcil7Ly/kuIrkvKDlpJrlvKDlm77niYdcclxuXHR2YXIgaW1ncz1pbWdzLnNwbGl0KFwiO1wiKVxyXG5cdHZhciBwaWN0dXJlPVtdXHJcblx0dmFyIGltZ1RlYW1zPTBcclxuXHRmb3IodmFyIGk9MDtpPGltZ3MubGVuZ3RoO2krKyl7XHJcblx0XHRpbWdUZWFtcysrXHJcblx0XHR1cGxvYWRGaWxlKFVSTC5VUExPQURfVVBMT0FELGltZ3NbaV0sKHJlc3VsdHMpPT57XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcblx0XHRcdHJlc3VsdHM9SlNPTi5wYXJzZShyZXN1bHRzKVxyXG5cdFx0XHRwaWN0dXJlLnB1c2gocmVzdWx0cy5kYXRhKTtcclxuXHRcdFx0aW1nVGVhbXMtLVxyXG5cdFx0XHRpZihpbWdUZWFtcz09MCl7XHJcblx0XHRcdFx0cGljdHVyZT1waWN0dXJlLmpvaW4oXCI7XCIpXHJcblx0XHRcdFx0Y2FsbChwaWN0dXJlLGluZGV4KVxyXG5cdFx0XHR9XHJcblx0XHR9LChyZXN1bHRzKT0+e1xyXG5cdFx0XHRlcnJvcihyZXN1bHRzKVxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEZpbGUodXJsLGRhdGEsY2FsbCxlcnJvcil7Ly/kuIrkvKDlm77niYdcclxuXHR2YXIgdG9rZW49dW5pLmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIil8fFwiXCJcclxuXHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHR1cmw6IHVybCwgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdGZpbGVUeXBlOlwiaW1hZ2VcIixcclxuXHRcdGZpbGVQYXRoOmRhdGEsXHJcblx0XHRuYW1lOlwiZmlsZVwiLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdHRva2VuXHJcblx0XHR9LFxyXG5cdFx0c3VjY2VzczogKHJlcykgPT4geyBcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRpZihyZXMuZGF0YSE9XCIwMDAwMDBcIil7XHJcblx0XHRcdFx0dHlwZW9mIGNhbGw9PVwiZnVuY3Rpb25cIj9jYWxsKHJlcy5kYXRhKTpcIlwiXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHR5cGVvZiBlcnJvcj09XCJmdW5jdGlvblwiP2Vycm9yKGRhdGEpOlwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGZhaWwocmVzKXtcclxuXHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHR0eXBlb2YgZXJyb3I9PVwiZnVuY3Rpb25cIj9lcnJvcihkYXRhKTpcIlwiXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiBzaG93U3VjY2Vzcyhtc2csY2FsbCl7XHJcblx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRpY29uOlwic3VjY2Vzc1wiLFxyXG5cdFx0dGl0bGU6bXNnXHJcblx0fSlcclxuXHR0eXBlb2YgY2FsbD09XCJmdW5jdGlvblwiP3NldFRpbWVvdXQoY2FsbCwxNTAwKTpcIlwiXHJcbn1cclxuY29uc3QgaXNSZWZyZXNoVGFza3NQYWdlPXRydWUvL+aYr+WQpuabtOaWsOato+WcqOi/m+ihjOeahOS7u+WKoemhtemdolxyXG5cclxuY29uc3QgaXNSZWZyZXNoUG9sbHV0aW9uUGFnZT10cnVlLy/mmK/lkKbmm7TmlrDku7vliqHph4zpnaLnmoTpnIDopoHlt6Hmn6XnmoTmsaHmn5PmupDpobXpnaJcclxuXHJcbmNvbnN0IHdlYlNvY2tldD1mdW5jdGlvbihpZCl7XHJcblx0dW5pLmNvbm5lY3RTb2NrZXQoe1xyXG5cdFx0dXJsOiBVUkwuV0VCU09DS0VUK2lkLFxyXG5cdFx0aGVhZGVyOiB7XHJcblx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdH0sXHJcblx0XHRtZXRob2Q6ICdHRVQnXHJcblx0fSlcclxufVxyXG51bmkub25Tb2NrZXRPcGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5bey5omT5byA77yBJyk7XHJcbn0pO1xyXG5cclxudmFyIGdldExvY2F0aW9uPWZ1bmN0aW9uKCl7Ly/ojrflj5blvZPliY3nmoTnu4/nuqzluqZcclxuXHR0aW1lcl9nZXRMb2N0aW9uPXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHR1bmkuZ2V0TG9jYXRpb24oe1xyXG5cdFx0XHR0eXBlOlwid2dzODRcIixcclxuXHRcdFx0c3VjY2VzcyhyZXMpe1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcInVzZXJMb2NhdGlvblwiLHtsb25naXR1ZGU6KHJlcy5sb25naXR1ZGU/cmVzLmxvbmdpdHVkZTp1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyTG9jYXRpb25cIikubG9uZ2l0dWRlKSxsYXRpdHVkZToocmVzLmxhdGl0dWRlP3Jlcy5sYXRpdHVkZTp1bmkuZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyTG9jYXRpb25cIikubGF0aXR1ZGUpfSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbChyZXMpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcykgXHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcl9nZXRMb2N0aW9uKVxyXG5cdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0dGl0bGU6XCLojrflj5blrprkvY3mnYPpmZDlpLHotKVcIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6XCLor7fmiZPlvIDmiYvmnLrlrprkvY3mnYPpmZBcIixcclxuXHRcdFx0XHRcdHNob3dDYW5jZWw6ZmFsc2UsXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5jb25maXJtKVxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ1c2VyTG9jYXRpb25cIix7bG9uZ2l0dWRlOjAsbGF0aXR1ZGU6MH0pXHJcblx0XHRcdFx0XHRcdGdldExvY2F0aW9uKClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0sNTAwMClcclxufVxyXG5cclxudmFyIHVuVXBMb2N0aW9uPWZ1bmN0aW9uKGlkKXsvL+WPlua2iOafkOS4quS7u+WKoeeahOe7j+e6rOW6pueahOS4iuS8oFxyXG5cdGlmKCEhdGltZXJfdXBMb2N0aW9uW2lkXSl7XHJcblx0XHRjbGVhckludGVydmFsKHRpbWVyX3VwTG9jdGlvbltpZF0pXHJcblx0fVxyXG59XHJcbnZhciB1bkdldExvY2F0aW9uPWZ1bmN0aW9uKCl7Ly/lgZzmraLnu4/nuqzluqbnmoTojrflj5ZcclxuXHRjbGVhckludGVydmFsKHRpbWVyX2dldExvY3Rpb24pXHJcbn1cclxudmFyIHVwTG9jdGlvbj1mdW5jdGlvbihpZCl7Ly/lnKjku7vliqHov5vooYzml7bkuIrkvKDlvZPliY3nmoTnu4/nuqzluqZcclxuXHR0aW1lcl91cExvY3Rpb25baWRdPXNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgdXNlckxvY2F0aW9uPXVuaS5nZXRTdG9yYWdlU3luYyhcInVzZXJMb2NhdGlvblwiKVxyXG5cdFx0dmFyIGRhdGE9e1xyXG5cdFx0XHRwYXRyb2xUYXNrSWQ6aWQsXHJcblx0XHRcdGxvbmdpdHVkZTp1c2VyTG9jYXRpb24ubG9uZ2l0dWRlLFxyXG5cdFx0XHRsYXRpdHVkZTp1c2VyTG9jYXRpb24ubGF0aXR1ZGUsXHJcblx0XHR9XHJcblx0XHR2YXIgdXBEYXRhPXVwTG9jdGlvbkRhdGFbaWRdP3VwTG9jdGlvbkRhdGFbaWRdOltdXHJcblx0XHR2YXIgZGF0ZT1uZXcgRGF0ZSgpXHJcblx0XHR1cERhdGEucHVzaCh7XHJcblx0XHRcdHBhdHJvbFRhc2tJZDppZCxcclxuXHRcdFx0bG9uZ2l0dWRlOnVzZXJMb2NhdGlvbi5sb25naXR1ZGUsXHJcblx0XHRcdGxhdGl0dWRlOnVzZXJMb2NhdGlvbi5sYXRpdHVkZSxcclxuXHRcdFx0bG9jYXRpb25UaW1lOmRhdGUuZ2V0VGltZSgpXHJcblx0XHR9KVxyXG5cdFx0dXBMb2N0aW9uRGF0YVtpZF09dXBEYXRhXHJcblx0XHRwb3N0UmVxdWVzdE5vKFVSTC5UQVNLX1BBVFJPTF9QQVRIX0FERF9CQVRDSCx7ZGF0YTpKU09OLnN0cmluZ2lmeSh1cERhdGEpLGlkOmlkfSwocmVzdWx0cyk9PntcclxuXHRcdFx0aWYocmVzdWx0cy5jb2RlPT0yKXtcclxuXHRcdFx0XHR1blVwTG9jdGlvbihpZClcclxuXHRcdFx0XHR2YXIgb25UYXNrPXVuaS5nZXRTdG9yYWdlU3luYyhcIm9uVGFza1wiKT91bmkuZ2V0U3RvcmFnZVN5bmMoXCJvblRhc2tcIik6W107XHJcblx0XHRcdFx0b25UYXNrLnNwbGljZShvblRhc2suaW5kZXhPZih0aGlzLnRhc2tJZCkpXHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwib25UYXNrXCIsb25UYXNrKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1cExvY3Rpb25EYXRhW2lkXT1bXSBcclxuXHRcdH0pIFxyXG5cdH0sdXBUaW1lTnVtKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9OYXZpZ2F0aW9uKGxvbmdpdHVkZSxsYXRpdHVkZSl7Ly/lr7zoiKpcclxuXHQvLyDliKTmlq3lubPlj7AgIFxyXG5cdHZhciB3Z3M4NHRvZ2NqMDI9bWFwVG9vbC53Z3M4NHRvZ2NqMDIobG9uZ2l0dWRlLGxhdGl0dWRlKVxyXG5cdGxvbmdpdHVkZT13Z3M4NHRvZ2NqMDJbMF1cclxuXHRsYXRpdHVkZT13Z3M4NHRvZ2NqMDJbMV1cclxuXHRpZiAocGx1cy5vcy5uYW1lID09ICdBbmRyb2lkJykgeyAgXHJcblx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTChcImFtYXB1cmk6Ly9yb3V0ZS9wbGFuLz9zaWQ9QkdWSVMxJmRpZD1CR1ZJUzImZGxhdD1cIitsYXRpdHVkZStcIiZkbG9uPVwiK2xvbmdpdHVkZStcIiZkZXY9MCZ0PTBcIiwgIFxyXG5cdFx0XHRmdW5jdGlvbihlKSB7ICBcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdGljb246XCJub25lXCIsXHJcblx0XHRcdFx0XHR0aXRsZTpcIuivt+S4i+ehruiupOaJi+acuuWuieijheS6humrmOW+t+WcsOWbvlwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnT3BlbiBzeXN0ZW0gZGVmYXVsdCBicm93c2VyIGZhaWxlZDogJyArIGUubWVzc2FnZSk7ICBcclxuXHRcdFx0fSxcImNvbS5hdXRvbmF2aS5taW5pbWFwXCJcclxuXHRcdCk7XHJcblx0fSBlbHNlIGlmIChwbHVzLm9zLm5hbWUgPT0gJ2lPUycpIHsgIFxyXG5cdFx0cGx1cy5ydW50aW1lLmxhdW5jaEFwcGxpY2F0aW9uKHsgYWN0aW9uOlwiaW9zYW1hcDovL3BhdGg/c291cmNlQXBwbGljYXRpb249YXBwbGljYXRpb25OYW1lJnNpZD1CR1ZJUzEmZGlkPUJHVklTMiZkbGF0PVwiK2xhdGl0dWRlK1wiJmRsb249XCIrbG9uZ2l0dWRlK1wiJmRldj0wJnQ9MFwiIH0sIGZ1bmN0aW9uKGUpIHsgIFxyXG5cdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdHRpdGxlOlwi6K+35LiL56Gu6K6k5omL5py65a6J6KOF5LqG6auY5b635Zyw5Zu+XCJcclxuXHRcdFx0fSlcclxuXHRcdFx0Y29uc29sZS5sb2coJ09wZW4gc3lzdGVtIGRlZmF1bHQgYnJvd3NlciBmYWlsZWQ6ICcgKyBlLm1lc3NhZ2UpOyAgXHJcblx0XHR9KTsgIFxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V3J5VHlwZU5hbWUodHlwZSl7Ly/moLnmja7lkITnsbvmsaHmn5PmupDnmoTnsbvlnovojrflj5blhbbkuK3mloflkI3lrZdcclxuXHR2YXIgbmFtZT1cIi1cIlxyXG5cdHN3aXRjaCh0eXBlKXtcclxuXHRcdGNhc2UgXCJiZW5nemhhblwiOlxyXG5cdFx0XHRuYW1lPVwi5rO156uZXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImNhbnlpbmhhbmd5ZVwiOlxyXG5cdFx0XHRuYW1lPVwi6aSQ6aWu6KGM5LiaXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImd5cXlcIjpcclxuXHRcdFx0bmFtZT1cIuW3peS4muS8geS4mlwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ4cXl6XCI6XHJcblx0XHRcdG5hbWU9XCLnlZznpr3lhbvmrpZcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiamNkd1wiOlxyXG5cdFx0XHRuYW1lPVwi55uR5rWL54K55L2NXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImppYW56aHVnb25nZGlcIjpcclxuXHRcdFx0bmFtZT1cIuW7uuetkeW3peWcsFwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJqbWp6anpkXCI6XHJcblx0XHRcdG5hbWU9XCLlsYXmsJHpm4bkuK3lsYXkvY/ngrlcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwibm9uZ21hb3NoaWNoYW5nXCI6XHJcblx0XHRcdG5hbWU9XCLlhpzotLjluILlnLpcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwicXRoeVwiOlxyXG5cdFx0XHRuYW1lPVwi5YW25LuW6KGM5LiaXCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInJoa3B3ZFwiOlxyXG5cdFx0XHRuYW1lPVwi5YWl5rKzKOW6kynmjpLmsaHngrlcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwid3NjbGNcIjpcclxuXHRcdFx0bmFtZT1cIuaxoeawtOmbhuS4reWkhOeQhuiuvuaWvVwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzaGFucGluZ3RhbmdcIjpcclxuXHRcdFx0bmFtZT1cIuWxseWdquWhmFwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzaHVpa3VcIjpcclxuXHRcdFx0bmFtZT1cIuawtOW6k1wiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzbXlzeXpkaFwiOlxyXG5cdFx0XHRuYW1lPVwi5Y2B5Lqp5Lul5LiK56eN5qSN5aSn5oi3XCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInR6Y1wiOlxyXG5cdFx0XHRuYW1lPVwi5bGg5a6w5Zy6XCJcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInhpYW9zYW5sdWFud3VcIjpcclxuXHRcdFx0bmFtZT1cIuWwj+aVo+S5seaxoVwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ4aWNoZWNoYW5nXCI6XHJcblx0XHRcdG5hbWU9XCLmtJfovablnLpcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwieWFuZ3l1Y2hpXCI6XHJcblx0XHRcdG5hbWU9XCLlhbvpsbzmsaBcIlxyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwieWlsaWFvamlnb3VcIjpcclxuXHRcdFx0bmFtZT1cIuWMu+eWl+acuuaehFwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJ6enlmbGRqZFwiOlxyXG5cdFx0XHRuYW1lPVwi56eN5qSN5Lia6IKl5paZ5aCG56ev54K5XCJcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxuXHRyZXR1cm4gbmFtZVxyXG59XHJcblxyXG5mdW5jdGlvbiBkb3duTG9hZEZpbGUodXJsKXsvL+S4i+i9vUFQUFxyXG5cdHZhciBkb3dubG9hZFRhc2s9dW5pLmRvd25sb2FkRmlsZSh7XHJcblx0XHR1cmw6VVJMLnVybCtcIi9kb3duTG9hZC9kb3duTG9hZEFwcEZpbGVcIixcclxuXHRcdGNvbXBsZXRlKHJlcyl7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0aWYocmVzLnN0YXR1c0NvZGU9PTIwMCl7XHJcblx0XHRcdFx0cGx1cy5ydW50aW1lLmluc3RhbGwocmVzLnRlbXBGaWxlUGF0aCwge1xyXG5cdFx0XHRcdFx0Zm9yY2U6IGZhbHNlXHJcblx0XHRcdFx0fSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRwbHVzLnJ1bnRpbWUucmVzdGFydCgpO1xyXG5cdFx0XHRcdH0sIChlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuc3VjY2VzcyA9IGZhbHNlXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICflronoo4XljYfnuqfljIXlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG5cdHZhciBudW09MFxyXG5cdGRvd25sb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKChyZXMpID0+IHtcclxuXHRcdGlmKG51bSE9cmVzLnByb2dyZXNzKXtcclxuXHRcdFx0bnVtPXJlcy5wcm9ncmVzc1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5LiL6L296L+b5bqmJyArIHJlcy5wcm9ncmVzcyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCflt7Lnu4/kuIvovb3nmoTmlbDmja7plb/luqYnICsgcmVzLnRvdGFsQnl0ZXNXcml0dGVuKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+mihOacn+mcgOimgeS4i+i9veeahOaVsOaNruaAu+mVv+W6picgKyByZXMudG90YWxCeXRlc0V4cGVjdGVkVG9Xcml0ZSk7XHJcblx0XHR9XHJcblx0ICAgIC8vIOa1i+ivleadoeS7tu+8jOWPlua2iOS4i+i9veS7u+WKoeOAglxyXG5cdH0pO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzPXsgIFxyXG5cdGdldFJlcXVlc3QsXHJcblx0Z2V0UmVxdWVzdE5vLFxyXG5cdGdldFJlcXVlc3RQYyxcclxuXHRwb3N0UmVxdWVzdCwgIFxyXG5cdHBvc3RSZXF1ZXN0Tm8sXHJcblx0dXBsb2FkRmlsZSxcclxuXHRzaG93U3VjY2VzcyxcclxuXHRpc1JlZnJlc2hUYXNrc1BhZ2UsXHJcblx0aXNSZWZyZXNoUG9sbHV0aW9uUGFnZSxcclxuXHR3ZWJTb2NrZXQsXHJcblx0dXBMb2N0aW9uLFxyXG5cdHVuR2V0TG9jYXRpb24sXHJcblx0dW5VcExvY3Rpb24sXHJcblx0Z2V0TG9jYXRpb24sXHJcblx0dXBQcm9ibGVtVGVhbXMsXHJcblx0Y29tcGxldGVUYXNrLFxyXG5cdHJlY3RpZmljYXRpb25UYXNrRGV0YWlsLFxyXG5cdHN1Yk52dWUsXHJcblx0Ly8gZ2V0V3J5TWFwLFxyXG5cdHRhc2tJbmZvLFxyXG5cdHBvbGx1dGlvbkluZm8sXHJcblx0dXBUaW1lTnVtLFxyXG5cdG9uVGFza051bTowLFxyXG5cdHVuVGFza051bTowLFxyXG5cdHNpdHVhdGlvbkRhdGUsXHJcblx0dG9OYXZpZ2F0aW9uLFxyXG5cdGdldFdyeVR5cGVOYW1lLFxyXG5cdGRvd25Mb2FkRmlsZVxyXG59IiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICBjb25zdCBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICguLi5hcmdzKSB7XHJcbiAgY29uc3QgbXNncyA9IGFyZ3MubWFwKCh2KSA9PiB7XHJcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcclxuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbiAgbGV0IG1zZyA9ICcnXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgY29uc3QgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XHJcbiAgICAgIG1zZyArPSBsYXN0TXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbXNnID0gbXNnc1swXVxyXG4gIH1cclxuICByZXR1cm4gbXNnXHJcbn1cclxuIiwiZnVuY3Rpb24gbWFwVG9vbCgpIHsgIFxyXG4gICAgdGhpcy54X1BJID0gMy4xNDE1OTI2NTM1ODk3OTMyNCAqIDMwMDAuMCAvIDE4MC4wLCAgXHJcbiAgICB0aGlzLlBJID0gMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2LCAgXHJcbiAgICB0aGlzLmVlID0gMC4wMDY2OTM0MjE2MjI5NjU5NDMyMywgIFxyXG4gICAgdGhpcy5hID0gNjM3ODI0NS4wOyAgXHJcbn0gIFxyXG4vKiogIFxyXG4gKiBHQ0owMiDovazmjaLkuLogV0dTODQgIFxyXG4gKiBAcGFyYW0gbG5nICBcclxuICogQHBhcmFtIGxhdCAgXHJcbiAqIEByZXR1cm5zIHsqW119ICBcclxuICovICBcclxubWFwVG9vbC5wcm90b3R5cGUuZ2NqMDJ0b3dnczg0ID0gZnVuY3Rpb24obG5nLCBsYXQpIHsgIFxyXG4gICAgICAgIGlmICh0aGlzLm91dF9vZl9jaGluYShsbmcsIGxhdCkpIHsgIFxyXG4gICAgICAgICAgICByZXR1cm4gW2xuZywgbGF0XSAgXHJcbiAgICAgICAgfSBlbHNlIHsgIFxyXG4gICAgICAgICAgICBsZXQgZGxhdCA9IHRoaXMudHJhbnNmb3JtbGF0KGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTsgIFxyXG4gICAgICAgICAgICBsZXQgZGxuZyA9IHRoaXMudHJhbnNmb3JtbG5nKGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTsgIFxyXG4gICAgICAgICAgICBsZXQgcmFkbGF0ID0gbGF0IC8gMTgwLjAgKiB0aGlzLlBJOyAgXHJcbiAgICAgICAgICAgIGxldCBtYWdpYyA9IE1hdGguc2luKHJhZGxhdCk7ICBcclxuICAgICAgICAgICAgbWFnaWMgPSAxIC0gdGhpcy5lZSAqIG1hZ2ljICogbWFnaWM7ICBcclxuICAgICAgICAgICAgbGV0IHNxcnRtYWdpYyA9IE1hdGguc3FydChtYWdpYyk7ICBcclxuICAgICAgICAgICAgZGxhdCA9IChkbGF0ICogMTgwLjApIC8gKCh0aGlzLmEgKiAoMSAtIHRoaXMuZWUpKSAvIChtYWdpYyAqIHNxcnRtYWdpYykgKiB0aGlzLlBJKTsgIFxyXG4gICAgICAgICAgICBkbG5nID0gKGRsbmcgKiAxODAuMCkgLyAodGhpcy5hIC8gc3FydG1hZ2ljICogTWF0aC5jb3MocmFkbGF0KSAqIHRoaXMuUEkpOyAgXHJcbiAgICAgICAgICAgIGxldCBtZ2xhdCA9IGxhdCArIGRsYXQ7ICBcclxuICAgICAgICAgICAgbGV0IG1nbG5nID0gbG5nICsgZGxuZzsgIFxyXG4gICAgICAgICAgICByZXR1cm4gW2xuZyAqIDIgLSBtZ2xuZywgbGF0ICogMiAtIG1nbGF0XSAgXHJcbiAgICAgICAgfSAgXHJcbiAgICB9ICBcclxuICAgIC8qKiAgXHJcbiAgICAgKiDngavmmJ/lnZDmoIfns7sgKEdDSi0wMikg5LiO55m+5bqm5Z2Q5qCH57O7IChCRC0wOSkg55qE6L2s5o2iICBcclxuICAgICAqIOWNs+iwt+atjOOAgemrmOW+tyDovawg55m+5bqmICBcclxuICAgICAqIEBwYXJhbSBsbmcgIFxyXG4gICAgICogQHBhcmFtIGxhdCAgXHJcbiAgICAgKiBAcmV0dXJucyB7KltdfSAgXHJcbiAgICAgKi8gIFxyXG4gICAgbWFwVG9vbC5wcm90b3R5cGUuZ2NqMDJ0b2JkMDkgPSBmdW5jdGlvbihsbmcsIGxhdCkgeyAgXHJcbiAgICAgICAgbGV0IHogPSBNYXRoLnNxcnQobG5nICogbG5nICsgbGF0ICogbGF0KSArIDAuMDAwMDIgKiBNYXRoLnNpbihsYXQgKiB0aGlzLnhfUEkpOyAgXHJcbiAgICAgICAgbGV0IHRoZXRhID0gTWF0aC5hdGFuMihsYXQsIGxuZykgKyAwLjAwMDAwMyAqIE1hdGguY29zKGxuZyAqIHRoaXMueF9QSSk7ICBcclxuICAgICAgICBsZXQgYmRfbG5nID0geiAqIE1hdGguY29zKHRoZXRhKSArIDAuMDA2NTsgIFxyXG4gICAgICAgIGxldCBiZF9sYXQgPSB6ICogTWF0aC5zaW4odGhldGEpICsgMC4wMDY7ICBcclxuICAgICAgICByZXR1cm4gW2JkX2xuZywgYmRfbGF0XSAgXHJcbiAgICB9ICBcclxuICAgIC8qKiAgXHJcbiAgICAgKiBXR1M4NOi9rEdDajAyICBcclxuICAgICAqIEBwYXJhbSBsbmcgIFxyXG4gICAgICogQHBhcmFtIGxhdCAgXHJcbiAgICAgKiBAcmV0dXJucyB7KltdfSAgXHJcbiAgICAgKi8gIFxyXG4gICAgbWFwVG9vbC5wcm90b3R5cGUud2dzODR0b2djajAyID0gZnVuY3Rpb24obG5nLCBsYXQpIHsgIFxyXG5cdFx0bG5nPWxuZyoxXHJcblx0XHRsYXQ9bGF0KjFcclxuICAgICAgICBpZiAodGhpcy5vdXRfb2ZfY2hpbmEobG5nLCBsYXQpKSB7ICBcclxuICAgICAgICAgICAgcmV0dXJuIFtsbmcsIGxhdF0gIFxyXG4gICAgICAgIH0gZWxzZSB7ICBcclxuICAgICAgICAgICAgbGV0IGRsYXQgPSB0aGlzLnRyYW5zZm9ybWxhdChsbmcgLSAxMDUuMCwgbGF0IC0gMzUuMCk7ICBcclxuICAgICAgICAgICAgbGV0IGRsbmcgPSB0aGlzLnRyYW5zZm9ybWxuZyhsbmcgLSAxMDUuMCwgbGF0IC0gMzUuMCk7ICBcclxuICAgICAgICAgICAgbGV0IHJhZGxhdCA9IGxhdCAvIDE4MC4wICogdGhpcy5QSTsgIFxyXG4gICAgICAgICAgICBsZXQgbWFnaWMgPSBNYXRoLnNpbihyYWRsYXQpOyAgXHJcbiAgICAgICAgICAgIG1hZ2ljID0gMSAtIHRoaXMuZWUgKiBtYWdpYyAqIG1hZ2ljOyAgXHJcbiAgICAgICAgICAgIGxldCBzcXJ0bWFnaWMgPSBNYXRoLnNxcnQobWFnaWMpOyAgXHJcbiAgICAgICAgICAgIGRsYXQgPSAoZGxhdCAqIDE4MC4wKSAvICgodGhpcy5hICogKDEgLSB0aGlzLmVlKSkgLyAobWFnaWMgKiBzcXJ0bWFnaWMpICogdGhpcy5QSSk7ICBcclxuICAgICAgICAgICAgZGxuZyA9IChkbG5nICogMTgwLjApIC8gKHRoaXMuYSAvIHNxcnRtYWdpYyAqIE1hdGguY29zKHJhZGxhdCkgKiB0aGlzLlBJKTsgIFxyXG4gICAgICAgICAgICBsZXQgbWdsYXQgPSBsYXQgKyBkbGF0OyAgXHJcbiAgICAgICAgICAgIGxldCBtZ2xuZyA9IGxuZyArIGRsbmc7ICBcclxuICAgICAgICAgICAgcmV0dXJuIFttZ2xuZywgbWdsYXRdICBcclxuICAgICAgICB9ICBcclxuICAgIH0gIFxyXG4gICAgLyoqICBcclxuICAgICAqIEdDSjAyIOi9rOaNouS4uiBXR1M4NCAgXHJcbiAgICAgKiBAcGFyYW0gbG5nICBcclxuICAgICAqIEBwYXJhbSBsYXQgIFxyXG4gICAgICogQHJldHVybnMgeypbXX0gIFxyXG4gICAgICovICBcclxuICAgIG1hcFRvb2wucHJvdG90eXBlLmdjajAydG93Z3M4NCA9IGZ1bmN0aW9uKGxuZywgbGF0KSB7ICBcclxuICAgICAgICBpZiAodGhpcy5vdXRfb2ZfY2hpbmEobG5nLCBsYXQpKSB7ICBcclxuICAgICAgICAgICAgcmV0dXJuIFtsbmcsIGxhdF0gIFxyXG4gICAgICAgIH0gZWxzZSB7ICBcclxuICAgICAgICAgICAgbGV0IGRsYXQgPSB0aGlzLnRyYW5zZm9ybWxhdChsbmcgLSAxMDUuMCwgbGF0IC0gMzUuMCk7ICBcclxuICAgICAgICAgICAgbGV0IGRsbmcgPSB0aGlzLnRyYW5zZm9ybWxuZyhsbmcgLSAxMDUuMCwgbGF0IC0gMzUuMCk7ICBcclxuICAgICAgICAgICAgbGV0IHJhZGxhdCA9IGxhdCAvIDE4MC4wICogdGhpcy5QSTsgIFxyXG4gICAgICAgICAgICBsZXQgbWFnaWMgPSBNYXRoLnNpbihyYWRsYXQpOyAgXHJcbiAgICAgICAgICAgIG1hZ2ljID0gMSAtIHRoaXMuZWUgKiBtYWdpYyAqIG1hZ2ljOyAgXHJcbiAgICAgICAgICAgIGxldCBzcXJ0bWFnaWMgPSBNYXRoLnNxcnQobWFnaWMpOyAgXHJcbiAgICAgICAgICAgIGRsYXQgPSAoZGxhdCAqIDE4MC4wKSAvICgodGhpcy5hICogKDEgLSB0aGlzLmVlKSkgLyAobWFnaWMgKiBzcXJ0bWFnaWMpICogdGhpcy5QSSk7ICBcclxuICAgICAgICAgICAgZGxuZyA9IChkbG5nICogMTgwLjApIC8gKHRoaXMuYSAvIHNxcnRtYWdpYyAqIE1hdGguY29zKHJhZGxhdCkgKiB0aGlzLlBJKTsgIFxyXG4gICAgICAgICAgICBsZXQgbWdsYXQgPSBsYXQgKyBkbGF0OyAgXHJcbiAgICAgICAgICAgIGxldCBtZ2xuZyA9IGxuZyArIGRsbmc7ICBcclxuICAgICAgICAgICAgcmV0dXJuIFtsbmcgKiAyIC0gbWdsbmcsIGxhdCAqIDIgLSBtZ2xhdF0gIFxyXG4gICAgICAgIH0gIFxyXG4gICAgfSBcclxuICAgIG1hcFRvb2wucHJvdG90eXBlLnRyYW5zZm9ybWxhdCA9IGZ1bmN0aW9uKGxuZywgbGF0KSB7ICBcclxuICAgICAgICBsZXQgcmV0ID0gLTEwMC4wICsgMi4wICogbG5nICsgMy4wICogbGF0ICsgMC4yICogbGF0ICogbGF0ICsgMC4xICogbG5nICogbGF0ICsgMC4yICogTWF0aC5zcXJ0KE1hdGguYWJzKGxuZykpOyAgXHJcbiAgICAgICAgcmV0ICs9ICgyMC4wICogTWF0aC5zaW4oNi4wICogbG5nICogdGhpcy5QSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogbG5nICogdGhpcy5QSSkpICogMi4wIC8gMy4wOyAgXHJcbiAgICAgICAgcmV0ICs9ICgyMC4wICogTWF0aC5zaW4obGF0ICogdGhpcy5QSSkgKyA0MC4wICogTWF0aC5zaW4obGF0IC8gMy4wICogdGhpcy5QSSkpICogMi4wIC8gMy4wOyAgXHJcbiAgICAgICAgcmV0ICs9ICgxNjAuMCAqIE1hdGguc2luKGxhdCAvIDEyLjAgKiB0aGlzLlBJKSArIDMyMCAqIE1hdGguc2luKGxhdCAqIHRoaXMuUEkgLyAzMC4wKSkgKiAyLjAgLyAzLjA7ICBcclxuICAgICAgICByZXR1cm4gcmV0ICBcclxuICAgIH0gIFxyXG4gICAgbWFwVG9vbC5wcm90b3R5cGUudHJhbnNmb3JtbG5nID0gZnVuY3Rpb24obG5nLCBsYXQpIHsgIFxyXG4gICAgICAgIGxldCByZXQgPSAzMDAuMCArIGxuZyArIDIuMCAqIGxhdCArIDAuMSAqIGxuZyAqIGxuZyArIDAuMSAqIGxuZyAqIGxhdCArIDAuMSAqIE1hdGguc3FydChNYXRoLmFicyhsbmcpKTsgIFxyXG4gICAgICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKDYuMCAqIGxuZyAqIHRoaXMuUEkpICsgMjAuMCAqIE1hdGguc2luKDIuMCAqIGxuZyAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDsgIFxyXG4gICAgICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKGxuZyAqIHRoaXMuUEkpICsgNDAuMCAqIE1hdGguc2luKGxuZyAvIDMuMCAqIHRoaXMuUEkpKSAqIDIuMCAvIDMuMDsgIFxyXG4gICAgICAgIHJldCArPSAoMTUwLjAgKiBNYXRoLnNpbihsbmcgLyAxMi4wICogdGhpcy5QSSkgKyAzMDAuMCAqIE1hdGguc2luKGxuZyAvIDMwLjAgKiB0aGlzLlBJKSkgKiAyLjAgLyAzLjA7ICBcclxuICAgICAgICByZXR1cm4gcmV0ICBcclxuICAgIH0gIFxyXG4gICAgLyoqICBcclxuICAgICAqIOWIpOaWreaYr+WQpuWcqOWbveWGhe+8jOS4jeWcqOWbveWGheWImeS4jeWBmuWBj+enuyAgXHJcbiAgICAgKiBAcGFyYW0gbG5nICBcclxuICAgICAqIEBwYXJhbSBsYXQgIFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59ICBcclxuICAgICAqLyAgXHJcbiAgICBtYXBUb29sLnByb3RvdHlwZS5vdXRfb2ZfY2hpbmEgPSBmdW5jdGlvbihsbmcsIGxhdCkgeyAgXHJcbiAgICAgICAgcmV0dXJuIChsbmcgPCA3Mi4wMDQgfHwgbG5nID4gMTM3LjgzNDcpIHx8ICgobGF0IDwgMC44MjkzIHx8IGxhdCA+IDU1LjgyNzEpIHx8IGZhbHNlKTsgIFxyXG4gICAgfSAgXHJcbiAgICBtb2R1bGUuZXhwb3J0cy5tYXBUb29sID1uZXcgbWFwVG9vbCgpOyAgIiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vc3ViTnZ1ZS9kZXRhaWwubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAnc3ViTnZ1ZS9kZXRhaWwnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGV0YWlsLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTFkM2E4OTYmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTExZDNhODk2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMWQzYTg5NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMTFkM2E4OTZcIixcbiAgXCI0NmIwMTg1OFwiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkc6L+efpeihjEFQUC9wb2xsdXRpb25Nb25pdG9yaW5nL3N1Yk52dWUvZGV0YWlsLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTAhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExZDNhODk2JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbFwiXSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsX3RpdGxlXCJdIH0sIFtcbiAgICAgIF9jKFwidGV4dFwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiMwMDBcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wb2xsdXRpb24ubmFtZSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbF9jb250ZW50XCJdIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImRldGFpbF9jb250ZW50X2xpc3RcIl0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZGV0YWlsX2NvbnRlbnRfbGlzdFwiLCBcIm5hdmlnYXRpb25cIl0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnRvTmF2aWdhdGlvbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJ0ZXh0XCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiI2ZmZlwiIH0gfSwgW192bS5fdihcIuWvvOiIqlwiKV0pXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTMtMCFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMy0xIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tMy0wIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0zLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLWhidWlsZGVyeFxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMCEuL2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxfdGl0bGVcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjMDAwO3RleHQtYWxpZ246IGNlbnRlcjtcIj57e3BvbGx1dGlvbi5uYW1lfX08L3RleHQ+PC9kaXY+XHJcblx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJjbG9zZVwiIEBjbGljaz1cImNsb3NlKClcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO1wiPuWFs+mXrTwvdGV4dD48L2Rpdj4gLS0+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGV0YWlsX2NvbnRlbnRcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbF9jb250ZW50X2xpc3RcIiBAY2xpY2s9XCJjbG9zZSgpXCI+5Y+W5raIPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkZXRhaWxfY29udGVudF9saXN0IG5hdmlnYXRpb25cIiBAY2xpY2s9XCJ0b05hdmlnYXRpb24oKVwiPjx0ZXh0IHN0eWxlPVwiY29sb3I6ICNmZmY7XCI+5a+86IiqPC90ZXh0PjwvZGl2PlxyXG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQge21hcFRvb2x9IGZyb20gJy4uL3N0YXRpYy9qcy9tYXBUb29sLmpzJ1xuXHRpbXBvcnQgdXRpbCBmcm9tICcuLi9zdGF0aWMvanMvdXRpbHMuanMnXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cG9sbHV0aW9uOnt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR1bmkuJG9uKFwic2hvd0RldGFpbFwiLChwb2xsdXRpb24pPT57XHJcblx0XHRcdFx0dGhpcy5wb2xsdXRpb249cG9sbHV0aW9uXHJcblx0XHRcdH0pXHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRjbG9zZSgpe1xyXG5cdFx0XHRcdHVuaS4kZW1pdChcImNsb3NlRGV0YWlsXCIpXHJcblx0XHRcdH0sXG5cdFx0XHR0b05hdmlnYXRpb24oKXsvL+WvvOiIqlxyXG5cdFx0XHRcdHV0aWwudG9OYXZpZ2F0aW9uKHRoaXMucG9sbHV0aW9uLmxvbmdpdHVkZSx0aGlzLnBvbGx1dGlvbi5sYXRpdHVkZSlcclxuXHRcdFx0fVxyXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5kZXRhaWx7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmRldGFpbF90aXRsZXtcclxuXHRwYWRkaW5nOiAxMHB4IDBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHdpZHRoOiA3MTBweDtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxuXHRmbGV4OiAxO1xyXG5cdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNlMWUxZTE7XHJcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG59XHJcbi5kZXRhaWxfY29udGVudHtcclxuXHR3aWR0aDogNzUwcHg7XHJcblx0ZmxleDogMTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuIDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwcHggMjBweDtcclxufVxyXG4uZGV0YWlsX2NvbnRlbnRfbGlzdHtcclxuXHRib3JkZXItc3R5bGU6c29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZTFlMWUxO1xyXG5cdGhlaWdodDogNzBweDtcclxuXHR3aWR0aDogMzQwcHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5uYXZpZ2F0aW9ue1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1MDg3ZmI7XHJcbn1cclxuLmNsb3Nle1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogNXB4O1xyXG5cdHBhZGRpbmc6IDNweCAxNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojNTA4N0ZCO1xyXG5cdHRvcDoxMHB4O1xyXG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLW52dWUtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4XFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0wIS4vZGV0YWlsLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMWQzYTg5NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktbnZ1ZS1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSFGOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhRjpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIUY6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi1oYnVpbGRlcnhcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTAhLi9kZXRhaWwubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTExZDNhODk2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJkZXRhaWxcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImRldGFpbF90aXRsZVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIwXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCI3MTBcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZTFlMWUxXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFcIlxuICB9LFxuICBcImRldGFpbF9jb250ZW50XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJkZXRhaWxfY29udGVudF9saXN0XCI6IHtcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZTFlMWUxXCIsXG4gICAgXCJoZWlnaHRcIjogXCI3MFwiLFxuICAgIFwid2lkdGhcIjogXCIzNDBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJuYXZpZ2F0aW9uXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM1MDg3ZmJcIlxuICB9LFxuICBcImNsb3NlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInJpZ2h0XCI6IFwiNVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjNcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiM1wiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNTA4N0ZCXCIsXG4gICAgXCJ0b3BcIjogXCIxMFwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/styled-base'), require('@emotion/core'), require('react'), require('classnames'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['@emotion/styled-base', '@emotion/core', 'react', 'classnames', 'lodash'], factory) :
  (global = global || self, global['@jarred/style-editor'] = factory(global['@emotion/styled-base'], global['@emotion/core'], global.react, global.classnames, global.lodash));
}(this, function (_styled, core, react, classNames, _) { 'use strict';

  _styled = _styled && _styled.hasOwnProperty('default') ? _styled['default'] : _styled;
  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var dist = createCommonjsModule(function (module) {
    module.exports =
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 3);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var UAParser = __webpack_require__(6);

      var UA = exports.UA = new UAParser();
      var browser = exports.browser = UA.getBrowser();
      var cpu = exports.cpu = UA.getCPU();
      var device = exports.device = UA.getDevice();
      var engine = exports.engine = UA.getEngine();
      var os = exports.os = UA.getOS();
      var ua = exports.ua = UA.getUA();

      var setUA = exports.setUA = function setUA(uaStr) {
        return UA.setUA(uaStr);
      };

      var mockUserAgent = exports.mockUserAgent = function mockUserAgent(userAgent) {
        window.navigator.__defineGetter__("userAgent", function () {
          return userAgent;
        });
      };
      /***/

    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isYandex = exports.isEdge = exports.getUA = exports.engineVersion = exports.engineName = exports.mobileModel = exports.mobileVendor = exports.browserName = exports.browserVersion = exports.fullBrowserVersion = exports.osName = exports.osVersion = exports.isIE = exports.isOpera = exports.isSafari = exports.isFirefox = exports.isChrome = exports.isIOS = exports.isWinPhone = exports.isAndroid = exports.isBrowser = exports.isTablet = exports.isMobileOnly = exports.isMobile = exports.isChromium = exports.isMobileSafari = exports.isWearable = exports.isConsole = exports.isSmartTV = undefined;

      var _getUaData = __webpack_require__(0);

      var _types = __webpack_require__(2);

      var CHROME = _types.BROWSER_TYPES.CHROME,
          CHROMIUM = _types.BROWSER_TYPES.CHROMIUM,
          IE = _types.BROWSER_TYPES.IE,
          INTERNET_EXPLORER = _types.BROWSER_TYPES.INTERNET_EXPLORER,
          OPERA = _types.BROWSER_TYPES.OPERA,
          FIREFOX = _types.BROWSER_TYPES.FIREFOX,
          SAFARI = _types.BROWSER_TYPES.SAFARI,
          MOBILE_SAFARI = _types.BROWSER_TYPES.MOBILE_SAFARI,
          EDGE = _types.BROWSER_TYPES.EDGE,
          YANDEX = _types.BROWSER_TYPES.YANDEX;
      var MOBILE = _types.DEVICE_TYPES.MOBILE,
          TABLET = _types.DEVICE_TYPES.TABLET,
          SMART_TV = _types.DEVICE_TYPES.SMART_TV,
          BROWSER = _types.DEVICE_TYPES.BROWSER,
          WEARABLE = _types.DEVICE_TYPES.WEARABLE,
          CONSOLE = _types.DEVICE_TYPES.CONSOLE;
      var ANDROID = _types.OS_TYPES.ANDROID,
          WINDOWS_PHONE = _types.OS_TYPES.WINDOWS_PHONE,
          IOS = _types.OS_TYPES.IOS;

      var isMobileType = function isMobileType() {
        return _getUaData.device.type === MOBILE;
      };

      var isTabletType = function isTabletType() {
        return _getUaData.device.type === TABLET;
      };

      var isMobileAndTabletType = function isMobileAndTabletType() {
        switch (_getUaData.device.type) {
          case MOBILE:
          case TABLET:
            return true;

          default:
            return false;
        }
      };

      var isSmartTVType = function isSmartTVType() {
        return _getUaData.device.type === SMART_TV;
      };

      var isBrowserType = function isBrowserType() {
        return _getUaData.device.type === BROWSER;
      };

      var isWearableType = function isWearableType() {
        return _getUaData.device.type === WEARABLE;
      };

      var isConsoleType = function isConsoleType() {
        return _getUaData.device.type === CONSOLE;
      };

      var isAndroidType = function isAndroidType() {
        return _getUaData.os.name === ANDROID;
      };

      var isWinPhoneType = function isWinPhoneType() {
        return _getUaData.os.name === WINDOWS_PHONE;
      };

      var isIOSType = function isIOSType() {
        return _getUaData.os.name === IOS;
      };

      var isChromeType = function isChromeType() {
        return _getUaData.browser.name === CHROME;
      };

      var isFirefoxType = function isFirefoxType() {
        return _getUaData.browser.name === FIREFOX;
      };

      var isChromiumType = function isChromiumType() {
        return _getUaData.browser.name === CHROMIUM;
      };

      var isEdgeType = function isEdgeType() {
        return _getUaData.browser.name === EDGE;
      };

      var isYandexType = function isYandexType() {
        return _getUaData.browser.name === YANDEX;
      };

      var isSafariType = function isSafariType() {
        return _getUaData.browser.name === SAFARI || _getUaData.browser.name === MOBILE_SAFARI;
      };

      var isMobileSafariType = function isMobileSafariType() {
        return _getUaData.browser.name === MOBILE_SAFARI;
      };

      var isOperaType = function isOperaType() {
        return _getUaData.browser.name === OPERA;
      };

      var isIEType = function isIEType() {
        return _getUaData.browser.name === INTERNET_EXPLORER || _getUaData.browser.name === IE;
      };

      var getBrowserFullVersion = function getBrowserFullVersion() {
        return _getUaData.browser.major;
      };

      var getBrowserVersion = function getBrowserVersion() {
        return _getUaData.browser.version;
      };

      var getOsVersion = function getOsVersion() {
        return _getUaData.os.version ? _getUaData.os.version : "none";
      };

      var getOsName = function getOsName() {
        return _getUaData.os.name ? _getUaData.os.name : "none";
      };

      var getBrowserName = function getBrowserName() {
        return _getUaData.browser.name;
      };

      var getMobileVendor = function getMobileVendor() {
        return _getUaData.device.vendor ? _getUaData.device.vendor : "none";
      };

      var getMobileModel = function getMobileModel() {
        return _getUaData.device.model ? _getUaData.device.model : "none";
      };

      var getEngineName = function getEngineName() {
        return _getUaData.engine.name;
      };

      var getEngineVersion = function getEngineVersion() {
        return _getUaData.engine.version;
      };

      var getUseragent = function getUseragent() {
        return _getUaData.ua;
      };

      var isSmartTV = exports.isSmartTV = isSmartTVType();
      var isConsole = exports.isConsole = isConsoleType();
      var isWearable = exports.isWearable = isWearableType();
      var isMobileSafari = exports.isMobileSafari = isMobileSafariType();
      var isChromium = exports.isChromium = isChromiumType();
      var isMobile = exports.isMobile = isMobileAndTabletType();
      var isMobileOnly = exports.isMobileOnly = isMobileType();
      var isTablet = exports.isTablet = isTabletType();
      var isBrowser = exports.isBrowser = isBrowserType();
      var isAndroid = exports.isAndroid = isAndroidType();
      var isWinPhone = exports.isWinPhone = isWinPhoneType();
      var isIOS = exports.isIOS = isIOSType();
      var isChrome = exports.isChrome = isChromeType();
      var isFirefox = exports.isFirefox = isFirefoxType();
      var isSafari = exports.isSafari = isSafariType();
      var isOpera = exports.isOpera = isOperaType();
      var isIE = exports.isIE = isIEType();
      var osVersion = exports.osVersion = getOsVersion();
      var osName = exports.osName = getOsName();
      var fullBrowserVersion = exports.fullBrowserVersion = getBrowserFullVersion();
      var browserVersion = exports.browserVersion = getBrowserVersion();
      var browserName = exports.browserName = getBrowserName();
      var mobileVendor = exports.mobileVendor = getMobileVendor();
      var mobileModel = exports.mobileModel = getMobileModel();
      var engineName = exports.engineName = getEngineName();
      var engineVersion = exports.engineVersion = getEngineVersion();
      var getUA = exports.getUA = getUseragent();
      var isEdge = exports.isEdge = isEdgeType();
      var isYandex = exports.isYandex = isYandexType();
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.wearPayload = exports.consolePayload = exports.stvPayload = exports.mobilePayload = exports.broPayload = exports.getCurrentBrowser = exports.checkType = exports.OS_TYPES = exports.BROWSER_TYPES = exports.DEVICE_TYPES = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _getUaData = __webpack_require__(0);

      var DEVICE_TYPES = exports.DEVICE_TYPES = {
        MOBILE: 'mobile',
        TABLET: 'tablet',
        SMART_TV: 'smarttv',
        CONSOLE: 'console',
        WEARABLE: 'wearable',
        BROWSER: undefined
      };
      var BROWSER_TYPES = exports.BROWSER_TYPES = {
        CHROME: 'Chrome',
        FIREFOX: "Firefox",
        OPERA: "Opera",
        YANDEX: "Yandex",
        SAFARI: "Safari",
        INTERNET_EXPLORER: "Internet Explorer",
        EDGE: "Edge",
        CHROMIUM: "Chromium",
        IE: 'IE',
        MOBILE_SAFARI: "Mobile Safari"
      };
      var OS_TYPES = exports.OS_TYPES = {
        IOS: 'iOS',
        ANDROID: "Android",
        WINDOWS_PHONE: "Windows Phone"
      };
      var initialData = {
        isMobile: false,
        isTablet: false,
        isBrowser: false,
        isSmartTV: false,
        isConsole: false,
        isWearable: false
      };

      var checkType = exports.checkType = function checkType(type) {
        switch (type) {
          case DEVICE_TYPES.MOBILE:
            return {
              isMobile: true
            };

          case DEVICE_TYPES.TABLET:
            return {
              isTablet: true
            };

          case DEVICE_TYPES.SMART_TV:
            return {
              isSmartTV: true
            };

          case DEVICE_TYPES.CONSOLE:
            return {
              isConsole: true
            };

          case DEVICE_TYPES.WEARABLE:
            return {
              isWearable: true
            };

          case DEVICE_TYPES.BROWSER:
            return {
              isBrowser: true
            };

          default:
            return initialData;
        }
      };

      var getCurrentBrowser = exports.getCurrentBrowser = function getCurrentBrowser(name) {
        switch (name) {
          case BROWSER_TYPES.CHROME:
          case BROWSER_TYPES.FIREFOX:
          case BROWSER_TYPES.OPERA:
          case BROWSER_TYPES.YANDEX:
          case BROWSER_TYPES.SAFARI:
          case BROWSER_TYPES.IE:
          case BROWSER_TYPES.EDGE:
          case BROWSER_TYPES.CHROMIUM:
            return true;

          default:
            return false;
        }
      };

      var broPayload = exports.broPayload = function broPayload(isBrowser, browser, engine, os, ua) {
        return {
          isBrowser: isBrowser,
          browserMajorVersion: browser.major,
          browserFullVersion: browser.version,
          browserName: browser.name,
          engineName: engine.name || false,
          engineVersion: engine.version,
          osName: os.name,
          osVersion: os.version,
          userAgent: ua
        };
      };

      var mobilePayload = exports.mobilePayload = function mobilePayload(type, device, os, ua) {
        return _extends({}, type, {
          vendor: device.vendor || "none",
          model: device.model || "none",
          os: os.name || "none",
          osVersion: os.version || "none",
          ua: ua || "none"
        });
      };

      var stvPayload = exports.stvPayload = function stvPayload(isSmartTV, engine, os, ua) {
        return {
          isSmartTV: isSmartTV,
          engineName: engine.name || false,
          engineVersion: engine.version,
          osName: os.name,
          osVersion: os.version,
          userAgent: ua
        };
      };

      var consolePayload = exports.consolePayload = function consolePayload(isConsole, engine, os, ua) {
        return {
          isConsole: isConsole,
          engineName: engine.name || false,
          engineVersion: engine.version,
          osName: os.name,
          osVersion: os.version,
          userAgent: ua
        };
      };

      var wearPayload = exports.wearPayload = function wearPayload(isWearable, engine, os, ua) {
        return {
          isWearable: isWearable,
          engineName: engine.name || false,
          engineVersion: engine.version,
          osName: os.name,
          osVersion: os.version,
          userAgent: ua
        };
      };
      /***/

    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.deviceDetect = undefined;

      var _views = __webpack_require__(4);

      Object.keys(_views).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _views[key];
          }
        });
      });

      var _selectors = __webpack_require__(1);

      Object.keys(_selectors).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _selectors[key];
          }
        });
      });

      var _detect = __webpack_require__(8);

      var _detect2 = _interopRequireDefault(_detect);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      exports.deviceDetect = _detect2.default;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CustomView = exports.WearableView = exports.ConsoleView = exports.SmartTVView = exports.MobileOnlyView = exports.WinPhoneView = exports.TabletView = exports.MobileView = exports.IOSView = exports.IEView = exports.BrowserView = exports.AndroidView = undefined;

      var _react = __webpack_require__(5);

      var _react2 = _interopRequireDefault(_react);

      var _selectors = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var AndroidView = exports.AndroidView = function AndroidView(_ref) {
        var renderWithFragment = _ref.renderWithFragment,
            children = _ref.children,
            viewClassName = _ref.viewClassName,
            style = _ref.style;
        return _selectors.isAndroid ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var BrowserView = exports.BrowserView = function BrowserView(_ref2) {
        var renderWithFragment = _ref2.renderWithFragment,
            children = _ref2.children,
            viewClassName = _ref2.viewClassName,
            style = _ref2.style;
        return _selectors.isBrowser ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var IEView = exports.IEView = function IEView(_ref3) {
        var renderWithFragment = _ref3.renderWithFragment,
            children = _ref3.children,
            viewClassName = _ref3.viewClassName,
            style = _ref3.style;
        return _selectors.isIE ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var IOSView = exports.IOSView = function IOSView(_ref4) {
        var renderWithFragment = _ref4.renderWithFragment,
            children = _ref4.children,
            viewClassName = _ref4.viewClassName,
            style = _ref4.style;
        return _selectors.isIOS ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var MobileView = exports.MobileView = function MobileView(_ref5) {
        var renderWithFragment = _ref5.renderWithFragment,
            children = _ref5.children,
            viewClassName = _ref5.viewClassName,
            style = _ref5.style;
        return _selectors.isMobile ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var TabletView = exports.TabletView = function TabletView(_ref6) {
        var renderWithFragment = _ref6.renderWithFragment,
            children = _ref6.children,
            viewClassName = _ref6.viewClassName,
            style = _ref6.style;
        return _selectors.isTablet ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var WinPhoneView = exports.WinPhoneView = function WinPhoneView(_ref7) {
        var renderWithFragment = _ref7.renderWithFragment,
            children = _ref7.children,
            viewClassName = _ref7.viewClassName,
            style = _ref7.style;
        return _selectors.isWinPhone ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var MobileOnlyView = exports.MobileOnlyView = function MobileOnlyView(_ref8) {
        var renderWithFragment = _ref8.renderWithFragment,
            children = _ref8.children,
            viewClassName = _ref8.viewClassName,
            style = _ref8.style;
        return _selectors.isMobileOnly ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var SmartTVView = exports.SmartTVView = function SmartTVView(_ref9) {
        var renderWithFragment = _ref9.renderWithFragment,
            children = _ref9.children,
            viewClassName = _ref9.viewClassName,
            style = _ref9.style;
        return _selectors.isSmartTV ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var ConsoleView = exports.ConsoleView = function ConsoleView(_ref10) {
        var renderWithFragment = _ref10.renderWithFragment,
            children = _ref10.children,
            viewClassName = _ref10.viewClassName,
            style = _ref10.style;
        return _selectors.isConsole ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var WearableView = exports.WearableView = function WearableView(_ref11) {
        var renderWithFragment = _ref11.renderWithFragment,
            children = _ref11.children,
            viewClassName = _ref11.viewClassName,
            style = _ref11.style;
        return _selectors.isWearable ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };

      var CustomView = exports.CustomView = function CustomView(_ref12) {
        var renderWithFragment = _ref12.renderWithFragment,
            children = _ref12.children,
            viewClassName = _ref12.viewClassName,
            style = _ref12.style,
            condition = _ref12.condition;
        return condition ? renderWithFragment ? _react2.default.createElement(_react.Fragment, null, children) : _react2.default.createElement('div', {
          className: viewClassName,
          style: style
        }, children) : null;
      };
      /***/

    },
    /* 5 */

    /***/
    function (module, exports) {
      module.exports = react;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      * UAParser.js v0.7.18
      * Lightweight JavaScript-based User-Agent string parser
      * https://github.com/faisalman/ua-parser-js
      *
      * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
      * Dual licensed under GPLv2 or MIT
      */


      (function (window, undefined$1) {

        var LIBVERSION = "0.7.18",
            EMPTY = "",
            UNKNOWN = "?",
            FUNC_TYPE = "function",
            UNDEF_TYPE = "undefined",
            OBJ_TYPE = "object",
            STR_TYPE = "string",
            MAJOR = "major",
            MODEL = "model",
            NAME = "name",
            TYPE = "type",
            VENDOR = "vendor",
            VERSION = "version",
            ARCHITECTURE = "architecture",
            CONSOLE = "console",
            MOBILE = "mobile",
            TABLET = "tablet",
            SMARTTV = "smarttv",
            WEARABLE = "wearable",
            EMBEDDED = "embedded";
        var util = {
          extend: function extend(regexes, extensions) {
            var margedRegexes = {};

            for (var i in regexes) {
              if (extensions[i] && extensions[i].length % 2 === 0) {
                margedRegexes[i] = extensions[i].concat(regexes[i]);
              } else {
                margedRegexes[i] = regexes[i];
              }
            }

            return margedRegexes;
          },
          has: function has(str1, str2) {
            if (typeof str1 === "string") {
              return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
            } else {
              return false;
            }
          },
          lowerize: function lowerize(str) {
            return str.toLowerCase();
          },
          major: function major(version) {
            return _typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, "").split(".")[0] : undefined$1;
          },
          trim: function trim(str) {
            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          }
        };
        var mapper = {
          rgx: function rgx(ua, arrays) {
            var i = 0,
                j,
                k,
                p,
                q,
                matches,
                match;

            while (i < arrays.length && !matches) {
              var regex = arrays[i],
                  props = arrays[i + 1];
              j = k = 0;

              while (j < regex.length && !matches) {
                matches = regex[j++].exec(ua);

                if (!!matches) {
                  for (p = 0; p < props.length; p++) {
                    match = matches[++k];
                    q = props[p];

                    if (_typeof(q) === OBJ_TYPE && q.length > 0) {
                      if (q.length == 2) {
                        if (_typeof(q[1]) == FUNC_TYPE) {
                          this[q[0]] = q[1].call(this, match);
                        } else {
                          this[q[0]] = q[1];
                        }
                      } else if (q.length == 3) {
                        if (_typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                          this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
                        } else {
                          this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
                        }
                      } else if (q.length == 4) {
                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
                      }
                    } else {
                      this[q] = match ? match : undefined$1;
                    }
                  }
                }
              }

              i += 2;
            }
          },
          str: function str(_str, map) {
            for (var i in map) {
              if (_typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
                for (var j = 0; j < map[i].length; j++) {
                  if (util.has(map[i][j], _str)) {
                    return i === UNKNOWN ? undefined$1 : i;
                  }
                }
              } else if (util.has(map[i], _str)) {
                return i === UNKNOWN ? undefined$1 : i;
              }
            }

            return _str;
          }
        };
        var maps = {
          browser: {
            oldsafari: {
              version: {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }
            }
          },
          device: {
            amazon: {
              model: {
                "Fire Phone": ["SD", "KF"]
              }
            },
            sprint: {
              model: {
                "Evo Shift 4G": "7373KT"
              },
              vendor: {
                HTC: "APA",
                Sprint: "Sprint"
              }
            }
          },
          os: {
            windows: {
              version: {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2000: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
              }
            }
          }
        };
        var regexes = {
          browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i], [[NAME, "Opera Mini"], VERSION], [/\s(opr)\/([\w\.]+)/i], [[NAME, "Opera"], VERSION], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[NAME, "IE"], VERSION], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[NAME, "Edge"], VERSION], [/(yabrowser)\/([\w\.]+)/i], [[NAME, "Yandex"], VERSION], [/(puffin)\/([\w\.]+)/i], [[NAME, "Puffin"], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[NAME, "UCBrowser"], VERSION], [/(comodo_dragon)\/([\w\.]+)/i], [[NAME, /_/g, " "], VERSION], [/(micromessenger)\/([\w\.]+)/i], [[NAME, "WeChat"], VERSION], [/(qqbrowserlite)\/([\w\.]+)/i], [NAME, VERSION], [/(QQ)\/([\d\.]+)/i], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [NAME, VERSION], [/(MetaSr)[\/\s]?([\w\.]+)/i], [NAME], [/(LBBROWSER)/i], [NAME], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [VERSION, [NAME, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [VERSION, [NAME, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [VERSION, [NAME, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[NAME, /(.+)/, "$1 WebView"], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [VERSION, [NAME, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i], [[NAME, "Dolphin"], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[NAME, "Chrome"], VERSION], [/(coast)\/([\w\.]+)/i], [[NAME, "Opera Coast"], VERSION], [/fxios\/([\w\.-]+)/i], [VERSION, [NAME, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [VERSION, [NAME, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[NAME, "GSA"], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [/(navigator|netscape)\/([\w\.-]+)/i], [[NAME, "Netscape"], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [NAME, VERSION]],
          cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[ARCHITECTURE, "amd64"]], [/(ia32(?=;))/i], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[ARCHITECTURE, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[ARCHITECTURE, /ower/, "", util.lowerize]], [/(sun4\w)[;\)]/i], [[ARCHITECTURE, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[ARCHITECTURE, util.lowerize]]],
          device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/], [MODEL, [VENDOR, "Apple"], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i], [[MODEL, "Apple TV"], [VENDOR, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, "Amazon"], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i], [MODEL, [VENDOR, "Apple"], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i], [MODEL, [VENDOR, "BlackBerry"], [TYPE, MOBILE]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, "Asus"], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, "Sony"], [MODEL, "Xperia Tablet"], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [MODEL, [VENDOR, "Sony"], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i], [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i], [MODEL, [VENDOR, "Sony"], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]], [/(nexus\s9)/i], [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [MODEL, [VENDOR, "Huawei"], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [MODEL, [VENDOR, "Microsoft"], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i], [[MODEL, /\./g, " "], [VENDOR, "Microsoft"], [TYPE, MOBILE]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, "Motorola"], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, "Motorola"], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, "SmartTV"], [VENDOR, "Samsung"], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i], [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, "Samsung"], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]], [/sie-(\w*)/i], [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i], [MODEL, [VENDOR, "LG"], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[VENDOR, "LG"], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, "LG"], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]], [/linux;.+((jolla));/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i], [[MODEL, "Chromecast"], [VENDOR, "Google"]], [/android.+;\s(glass)\s\d/i], [MODEL, [VENDOR, "Google"], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i], [MODEL, [VENDOR, "Google"], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i], [MODEL, [VENDOR, "Google"], [TYPE, MOBILE]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[MODEL, /_/g, " "], [VENDOR, "Xiaomi"], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [MODEL, [VENDOR, "Meizu"], [TYPE, TABLET]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]], [/android.+;\s(k88)\sbuild/i], [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i], [MODEL, [VENDOR, "Amazon"], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android[\w\.\s\-]{0,9});.+build/i], [MODEL, [VENDOR, "Generic"]]],
          engine: [[/windows.+\sedge\/([\w\.]+)/i], [VERSION, [NAME, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [NAME, VERSION], [/rv\:([\w\.]{1,9}).+(gecko)/i], [VERSION, NAME]],
          os: [[/microsoft\s(windows)\s(vista|xp)/i], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, "Windows"], [VERSION, mapper.str, maps.os.windows.version]], [/\((bb)(10);/i], [[NAME, "BlackBerry"], VERSION], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[NAME, "Symbian"], VERSION], [/\((series40);/i], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[NAME, "Firefox OS"], VERSION], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[NAME, "Chromium OS"], VERSION], [/(sunos)\s?([\w\.\d]*)/i], [[NAME, "Solaris"], VERSION], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [NAME, VERSION], [/(haiku)\s(\w+)/i], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[VERSION, /_/g, "."], [NAME, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[NAME, "Mac OS"], [VERSION, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [NAME, VERSION]]
        };

        var UAParser = function UAParser(uastring, extensions) {
          if (_typeof(uastring) === "object") {
            extensions = uastring;
            uastring = undefined$1;
          }

          if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
          }

          var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
          var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

          this.getBrowser = function () {
            var browser = {
              name: undefined$1,
              version: undefined$1
            };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version);
            return browser;
          };

          this.getCPU = function () {
            var cpu = {
              architecture: undefined$1
            };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
          };

          this.getDevice = function () {
            var device = {
              vendor: undefined$1,
              model: undefined$1,
              type: undefined$1
            };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
          };

          this.getEngine = function () {
            var engine = {
              name: undefined$1,
              version: undefined$1
            };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
          };

          this.getOS = function () {
            var os = {
              name: undefined$1,
              version: undefined$1
            };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
          };

          this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          };

          this.getUA = function () {
            return ua;
          };

          this.setUA = function (uastring) {
            ua = uastring;
            return this;
          };

          return this;
        };

        UAParser.VERSION = LIBVERSION;
        UAParser.BROWSER = {
          NAME: NAME,
          MAJOR: MAJOR,
          VERSION: VERSION
        };
        UAParser.CPU = {
          ARCHITECTURE: ARCHITECTURE
        };
        UAParser.DEVICE = {
          MODEL: MODEL,
          VENDOR: VENDOR,
          TYPE: TYPE,
          CONSOLE: CONSOLE,
          MOBILE: MOBILE,
          SMARTTV: SMARTTV,
          TABLET: TABLET,
          WEARABLE: WEARABLE,
          EMBEDDED: EMBEDDED
        };
        UAParser.ENGINE = {
          NAME: NAME,
          VERSION: VERSION
        };
        UAParser.OS = {
          NAME: NAME,
          VERSION: VERSION
        };

        if (_typeof(exports) !== UNDEF_TYPE) {
          if (_typeof(module) !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
          }

          exports.UAParser = UAParser;
        } else {
          if (__webpack_require__(7)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return UAParser;
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined$1 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else if (window) {
            window.UAParser = UAParser;
          }
        }

        var $ = window && (window.jQuery || window.Zepto);

        if (_typeof($) !== UNDEF_TYPE) {
          var parser = new UAParser();
          $.ua = parser.getResult();

          $.ua.get = function () {
            return parser.getUA();
          };

          $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();

            for (var prop in result) {
              $.ua[prop] = result[prop];
            }
          };
        }
      })((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" ? window : this);
      /***/

    },
    /* 7 */

    /***/
    function (module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (__webpack_amd_options__) {
        /* globals __webpack_amd_options__ */
        module.exports = __webpack_amd_options__;
        /* WEBPACK VAR INJECTION */
      }).call(exports, {});
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _getUaData = __webpack_require__(0);

      var _types = __webpack_require__(2);

      var create = _interopRequireWildcard(_types);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      var type = create.checkType(_getUaData.device.type);

      exports.default = function () {
        var isBrowser = type.isBrowser,
            isMobile = type.isMobile,
            isTablet = type.isTablet,
            isSmartTV = type.isSmartTV,
            isConsole = type.isConsole,
            isWearable = type.isWearable;

        if (isBrowser) {
          return create.broPayload(isBrowser, _getUaData.browser, _getUaData.engine, _getUaData.os, _getUaData.ua);
        }

        if (isSmartTV) {
          return create.stvPayload(isSmartTV, _getUaData.engine, _getUaData.os, _getUaData.ua);
        }

        if (isConsole) {
          return create.consolePayload(isConsole, _getUaData.engine, _getUaData.os, _getUaData.ua);
        }

        if (isMobile) {
          return create.mobilePayload(type, _getUaData.device, _getUaData.os, _getUaData.ua);
        }

        if (isTablet) {
          return create.mobilePayload(type, _getUaData.device, _getUaData.os, _getUaData.ua);
        }

        if (isWearable) {
          return create.wearPayload(isWearable, _getUaData.engine, _getUaData.os, _getUaData.ua);
        }
      };
      /***/

    }]);
  });
  unwrapExports(dist);
  var dist_1 = dist.deviceDetect;
  var dist_2 = dist.AndroidView;
  var dist_3 = dist.BrowserView;
  var dist_4 = dist.IEView;
  var dist_5 = dist.IOSView;
  var dist_6 = dist.MobileView;
  var dist_7 = dist.TabletView;
  var dist_8 = dist.WinPhoneView;
  var dist_9 = dist.MobileOnlyView;
  var dist_10 = dist.SmartTVView;
  var dist_11 = dist.ConsoleView;
  var dist_12 = dist.WearableView;
  var dist_13 = dist.CustomView;
  var dist_14 = dist.isSmartTV;
  var dist_15 = dist.isConsole;
  var dist_16 = dist.isWearable;
  var dist_17 = dist.isMobileSafari;
  var dist_18 = dist.isChromium;
  var dist_19 = dist.isMobile;
  var dist_20 = dist.isMobileOnly;
  var dist_21 = dist.isTablet;
  var dist_22 = dist.isBrowser;
  var dist_23 = dist.isAndroid;
  var dist_24 = dist.isWinPhone;
  var dist_25 = dist.isIOS;
  var dist_26 = dist.isChrome;
  var dist_27 = dist.isFirefox;
  var dist_28 = dist.isSafari;
  var dist_29 = dist.isOpera;
  var dist_30 = dist.isIE;
  var dist_31 = dist.osVersion;
  var dist_32 = dist.osName;
  var dist_33 = dist.fullBrowserVersion;
  var dist_34 = dist.browserVersion;
  var dist_35 = dist.browserName;
  var dist_36 = dist.mobileVendor;
  var dist_37 = dist.mobileModel;
  var dist_38 = dist.engineName;
  var dist_39 = dist.engineVersion;
  var dist_40 = dist.getUA;
  var dist_41 = dist.isEdge;
  var dist_42 = dist.isYandex;

  var _PRESETS;
  var VSCODE_THEME = {
    light: "vs-dark",
    dark: "vs-light"
  };

  var StyleEditorContainer = _styled("div", {
    target: "e5i1odf0",
    label: "StyleEditorContainer"
  })({
    name: "136thoy",
    styles: "border-radius:2px;font-family:var(--headings-font);display:flex;flex-direction:column;#FakeTextArea{display:block;width:100%;flex:1;height:100px;font-size:14px;font-family:var(--monospace-font);border-top:0;}@media (min-width:550px){&{min-height:233px;}&.StyleEditor--focused{border-color:rgb(var(--link-color));box-shadow:inset 0px 0px 5px rgba(var(--link-color),0.25);}&.StyleEditor--focused{outline:none !important;}}",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlRWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVd1QyIsImZpbGUiOiJTdHlsZUVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IFZTQ09ERV9USEVNRSA9IHtcbiAgbGlnaHQ6IFwidnMtZGFya1wiLFxuICBkYXJrOiBcInZzLWxpZ2h0XCJcbn07XG5cbmNvbnN0IFN0eWxlRWRpdG9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ3MtZm9udCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgI0Zha2VUZXh0QXJlYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlLWZvbnQpO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgICAmIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIzM3B4O1xuICAgIH1cblxuICAgICYuU3R5bGVFZGl0b3ItLWZvY3VzZWQge1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IodmFyKC0tbGluay1jb2xvcikpO1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggcmdiYSh2YXIoLS1saW5rLWNvbG9yKSwgMC4yNSk7XG4gICAgfVxuXG4gICAgJi5TdHlsZUVkaXRvci0tZm9jdXNlZCB7XG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBQcmVzZXREaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA4cHggOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEodmFyKC0tbGluay1jb2xvciksIDAuNzUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi5QcmVzZXQtLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDQwLCAzNCk7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2IoMzksIDQwLCAzNCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5gO1xuXG5jb25zdCBQcmVzZXRMaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEodmFyKC0tbGluay1jb2xvciksIDAuNzUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1saW5rLWNvbG9yKSwgMC43NSk7XG5cbiAgJi5QcmVzZXRzLS1saWdodCB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzFlMWUxZTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMWUxZTFlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgNDAsIDM0KTtcbiAgfVxuYDtcblxuY29uc3QgUFJFU0VUUyA9IHtcbiAgTm9ybWFsOiBgXG4gIGJvZHkge1xuICAgIGZpbHRlcjogaW52ZXJ0KDAlKTsgLyogVHJ5IDEwMCUgKi9cbiAgfVxuICBgLFxuICBbaXNCcm93c2VyID8gXCLwn5OrIGdtYWlsIGludml0ZSBjb2RlXCIgOiBcImRvIG5vdCBjbGlja1wiXTogYFxuICBib2R5OmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL1Z1dzltNXdYdmlGSVEvZ2lwaHkuZ2lmKTtcbiAgICBvcGFjaXR5OiAwLjk1O1xuICB9XG5cbiAgYm9keTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHRvcDtcbiAgICByaWdodDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAyO1xuICAgIGFuaW1hdGlvbjogbW92ZVggNXMgZWFzZS1vdXQgMHMgaW5maW5pdGUgYWx0ZXJuYXRlLCBtb3ZlWSA2LjNzIGxpbmVhciAwcyBpbmZpbml0ZSBhbHRlcm5hdGUsIHN0b3AtaXQgMC41cyBsaW5lYXIgMzBzIG5vbmU7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cblxuICBAa2V5ZnJhbWVzIG1vdmVYIHtcbiAgICBmcm9tIHsgbGVmdDogMDsgfSB0byB7IGxlZnQ6IGNhbGMoMTAwJSAtIDIwMHB4KTsgfVxuICB9XG4gIEBrZXlmcmFtZXMgbW92ZVkge1xuICAgIGZyb20geyB0b3A6IGNhbGMoMTAwJSAtIDE1MHB4KTsgfSB0byB7IHRvcDogMDsgfVxuICB9XG5cbiAgI19fY29kZWJsb2c6YWZ0ZXJ7cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjMwcHg7cmlnaHQ6NjBweDtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6YmxvY2s7d2lkdGg6YXV0bztoZWlnaHQ6NjBweDtjb2xvcjojMjIyO2ZvbnQtc2l6ZTozMnB4O2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LW92ZXJmbG93Om5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO3RleHQtc2hhZG93OjFweCAxcHggNXB4ICNjY2M7b3BhY2l0eTouNzU7Y29udGVudDpcIldlJ3JlIG5vIHN0cmFuZ2VycyB0byBsb3ZlLiBZb3Uga25vdyB0aGUgcnVsZXMgYW5kIHNvIGRvIEkuIEEgZnVsbCBjb21taXRtZW50J3Mgd2hhdCBJJ20gdGhpbmtpbmcgb2YuIFlvdSB3b3VsZG4ndCBnZXQgdGhpcyBmcm9tIGFueSBvdGhlciBndXkuIEkganVzdCB3YW5uYSB0ZWxsIHlvdSBob3cgSSdtIGZlZWxpbmcuIEdvdHRhIG1ha2UgeW91IHVuZGVyc3RhbmQuIE5ldmVyIGdvbm5hIGdpdmUgeW91IHVwLiBOZXZlciBnb25uYSBsZXQgeW91IGRvd24uIE5ldmVyIGdvbm5hIHJ1biBhcm91bmQgYW5kIGRlc2VydCB5b3UuIE5ldmVyIGdvbm5hIG1ha2UgeW91IGNyeS4gTmV2ZXIgZ29ubmEgc2F5IGdvb2RieWUuIE5ldmVyIGdvbm5hIHRlbGwgYSBsaWUgYW5kIGh1cnQgeW91LlwiO2FuaW1hdGlvbjpzY3JvbGwtdGV4dCAzMHMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSxzdG9wLWl0IC41cyBsaW5lYXIgMzBzIG5vbmU7YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH1cblxuICBAa2V5ZnJhbWVzIHNjcm9sbC10ZXh0IHtcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cblxuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc3RvcC1pdCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbmAsXG4gIFwi8J+miU8gUkxZP1wiOiBgXG4gIGJvZHk6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmt5bS1jZG4uY29tL2VudHJpZXMvaWNvbnMvb3JpZ2luYWwvMDAwLzAwMC8wMTUvb3JlYWxseS5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kIHNwYWNlO1xuICAgIG9wYWNpdHk6IDAuMTU7XG4gIH1cblxuICBib2R5OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbmAsXG4gIFtpc0Jyb3dzZXIgPyBcIuKdl++4j1NIT1VUSU5HISFcIiA6IFwiTE9VRFwiXTogYFxuICAqIHsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuYCxcbiAgW2lzQnJvd3NlciA/IFwi4oaSIFRpbHQgdGhpc1wiIDogXCJUaWx0XCJdOiBgXG5ib2R5IHtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXMgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDAuMTV0dXJuKSB9XG59YFxufTtcblxuY29uc3QgUHJlc2V0ID0gKHsgdmFsdWUsIHRoZW1lLCBpc1NlbGVjdGVkLCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJlc2V0RGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJQcmVzZXQgU3lzdGVtRm9udFwiLCB7XG4gICAgICAgIFwiUHJlc2V0LS1zZWxlY3RlZFwiOiBpc1NlbGVjdGVkLFxuICAgICAgICBcIlByZXNldC0tZGFya1wiOiB0aGVtZSA9PT0gXCJkYXJrXCIsXG4gICAgICAgIFwiUHJlc2V0LS1saWdodFwiOiB0aGVtZSA9PT0gXCJsaWdodFwiXG4gICAgICB9KX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAge3ZhbHVlfVxuICAgIDwvUHJlc2V0RGl2PlxuICApO1xufTtcblxuY29uc3QgUHJlc2V0UGlja2VyID0gKHsgdmFsdWUsIHByZXNldHMsIHRoZW1lLCBvbkNoYW5nZSB9KSA9PiAoXG4gIDxQcmVzZXRMaXN0XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiUHJlc2V0c1wiLCB7XG4gICAgICBcIlByZXNldHMtLWxpZ2h0XCI6IHRoZW1lID09PSBcImxpZ2h0XCIsXG4gICAgICBcIlByZXNldHMtLWRhcmtcIjogdGhlbWUgPT09IFwiZGFya1wiXG4gICAgfSl9XG4gID5cbiAgICB7cHJlc2V0cy5tYXAocHJlc2V0ID0+IChcbiAgICAgIDxQcmVzZXRcbiAgICAgICAga2V5PXtwcmVzZXR9XG4gICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgaXNTZWxlY3RlZD17dmFsdWUgPT09IHByZXNldH1cbiAgICAgICAgdmFsdWU9e3ByZXNldH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UocHJlc2V0KX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvUHJlc2V0TGlzdD5cbik7XG5cbmNvbnN0IFRleHRFZGl0b3IgPSBwcm9wcyA9PiA8dGV4dGFyZWEgaWQ9XCJGYWtlVGV4dEFyZWFcIiB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUVkaXRvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzdHlsZXNoZWV0OiBQUkVTRVRTW1wiTm9ybWFsXCJdLFxuICAgIHByZXNldDogXCJOb3JtYWxcIixcbiAgICBsb2FkZWRTdHlsZXNoZWV0OiBcIlwiLFxuICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWU6IHN0eWxlc2hlZXQgfSB9KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0eWxlc2hlZXQgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUxvYWRlZFN0eWxlc2hlZXQoc3R5bGVzaGVldCk7XG4gIH07XG5cbiAgdXBkYXRlTG9hZGVkU3R5bGVzaGVldCA9IF8uZGVib3VuY2UobG9hZGVkU3R5bGVzaGVldCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRlZFN0eWxlc2hlZXQgfSk7XG4gIH0sIDI1KTtcblxuICBvbkVkaXRvck1vdW50ID0gKCkgPT4ge307XG4gIGhhbmRsZUZvY3VzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcbiAgaGFuZGxlQmx1ciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pO1xuXG4gIGhhbmRsZUNoYW5nZVByZXNldCA9IHByZXNldCA9PiB7XG4gICAgdGhpcy51cGRhdGVMb2FkZWRTdHlsZXNoZWV0LmNhbmNlbCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHlsZXNoZWV0OiBfLnRyaW0oUFJFU0VUU1twcmVzZXRdKSxcbiAgICAgIGxvYWRlZFN0eWxlc2hlZXQ6IF8udHJpbShQUkVTRVRTW3ByZXNldF0pLFxuICAgICAgcHJlc2V0XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpbm5lclJlZiwgdGhlbWUgPSBcImxpZ2h0XCIsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdHlsZXNoZWV0LCBsb2FkZWRTdHlsZXNoZWV0LCBwcmVzZXQsIGlzRm9jdXNlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVFZGl0b3JDb250YWluZXJcbiAgICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc05hbWUsIFwiU3R5bGVFZGl0b3IgU3lzdGVtRm9udFwiLCB7XG4gICAgICAgICAgXCJUaGVtZS0tZGFya1wiOiB0aGVtZSA9PT0gXCJkYXJrXCIsXG4gICAgICAgICAgXCJUaGVtZS0tbGlnaHRcIjogdGhlbWUgPT09IFwibGlnaHRcIixcbiAgICAgICAgICBcIlN0eWxlRWRpdG9yLS1mb2N1c2VkXCI6IGlzRm9jdXNlZFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPFByZXNldFBpY2tlclxuICAgICAgICAgIHByZXNldHM9e18ua2V5cyhQUkVTRVRTKX1cbiAgICAgICAgICB2YWx1ZT17cHJlc2V0fVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQcmVzZXR9XG4gICAgICAgIC8+XG4gICAgICAgIHtpc0Jyb3dzZXIgJiYgKFxuICAgICAgICAgIDxUZXh0RWRpdG9yXG4gICAgICAgICAgICB0aGVtZT17VlNDT0RFX1RIRU1FW3RoZW1lXX1cbiAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgIGtleT17cHJlc2V0fVxuICAgICAgICAgICAgdmFsdWU9e3N0eWxlc2hlZXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8c3R5bGU+e2BcbiAgICAgICAgICAke2xvYWRlZFN0eWxlc2hlZXR9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L1N0eWxlRWRpdG9yQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
  });

  var PresetDiv = _styled("div", {
    target: "e5i1odf1",
    label: "PresetDiv"
  })({
    name: "uhqjkg",
    styles: "padding:8px 8px;text-transform:uppercase;font-weight:500;font-size:0.7em;height:36px;max-height:100%;justify-content:center;align-items:center;display:flex;border-right:1px solid rgba(var(--link-color),0.75);cursor:pointer;&.Preset--light{background-color:rgb(39,40,34);border-right-color:rgb(39,40,34);color:white;}",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlRWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDNEIiLCJmaWxlIjoiU3R5bGVFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBWU0NPREVfVEhFTUUgPSB7XG4gIGxpZ2h0OiBcInZzLWRhcmtcIixcbiAgZGFyazogXCJ2cy1saWdodFwiXG59O1xuXG5jb25zdCBTdHlsZUVkaXRvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdzLWZvbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICNGYWtlVGV4dEFyZWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZS1mb250KTtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gICAgJiB7XG4gICAgICBtaW4taGVpZ2h0OiAyMzNweDtcbiAgICB9XG5cbiAgICAmLlN0eWxlRWRpdG9yLS1mb2N1c2VkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLWxpbmstY29sb3IpKTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IHJnYmEodmFyKC0tbGluay1jb2xvciksIDAuMjUpO1xuICAgIH1cblxuICAgICYuU3R5bGVFZGl0b3ItLWZvY3VzZWQge1xuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUHJlc2V0RGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKHZhcigtLWxpbmstY29sb3IpLCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYuUHJlc2V0LS1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCA0MCwgMzQpO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDM5LCA0MCwgMzQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcblxuY29uc3QgUHJlc2V0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKHZhcigtLWxpbmstY29sb3IpLCAwLjc1KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tbGluay1jb2xvciksIDAuNzUpO1xuXG4gICYuUHJlc2V0cy0tbGlnaHQge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMxZTFlMWU7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFlMWUxZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDQwLCAzNCk7XG4gIH1cbmA7XG5cbmNvbnN0IFBSRVNFVFMgPSB7XG4gIE5vcm1hbDogYFxuICBib2R5IHtcbiAgICBmaWx0ZXI6IGludmVydCgwJSk7IC8qIFRyeSAxMDAlICovXG4gIH1cbiAgYCxcbiAgW2lzQnJvd3NlciA/IFwi8J+TqyBnbWFpbCBpbnZpdGUgY29kZVwiIDogXCJkbyBub3QgY2xpY2tcIl06IGBcbiAgYm9keTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IHVybChodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9WdXc5bTV3WHZpRklRL2dpcGh5LmdpZik7XG4gICAgb3BhY2l0eTogMC45NTtcbiAgfVxuXG4gIGJvZHk6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpbGwtY2hhbmdlOiBsZWZ0LCB0b3A7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogMjtcbiAgICBhbmltYXRpb246IG1vdmVYIDVzIGVhc2Utb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZSwgbW92ZVkgNi4zcyBsaW5lYXIgMHMgaW5maW5pdGUgYWx0ZXJuYXRlLCBzdG9wLWl0IDAuNXMgbGluZWFyIDMwcyBub25lO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG5cbiAgQGtleWZyYW1lcyBtb3ZlWCB7XG4gICAgZnJvbSB7IGxlZnQ6IDA7IH0gdG8geyBsZWZ0OiBjYWxjKDEwMCUgLSAyMDBweCk7IH1cbiAgfVxuICBAa2V5ZnJhbWVzIG1vdmVZIHtcbiAgICBmcm9tIHsgdG9wOiBjYWxjKDEwMCUgLSAxNTBweCk7IH0gdG8geyB0b3A6IDA7IH1cbiAgfVxuXG4gICNfX2NvZGVibG9nOmFmdGVye3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTozMHB4O3JpZ2h0OjYwcHg7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmJsb2NrO3dpZHRoOmF1dG87aGVpZ2h0OjYwcHg7Y29sb3I6IzIyMjtmb250LXNpemU6MzJweDtmb250LXdlaWdodDo2MDA7dGV4dC1vdmVyZmxvdzpub25lO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LXNoYWRvdzoxcHggMXB4IDVweCAjY2NjO29wYWNpdHk6Ljc1O2NvbnRlbnQ6XCJXZSdyZSBubyBzdHJhbmdlcnMgdG8gbG92ZS4gWW91IGtub3cgdGhlIHJ1bGVzIGFuZCBzbyBkbyBJLiBBIGZ1bGwgY29tbWl0bWVudCdzIHdoYXQgSSdtIHRoaW5raW5nIG9mLiBZb3Ugd291bGRuJ3QgZ2V0IHRoaXMgZnJvbSBhbnkgb3RoZXIgZ3V5LiBJIGp1c3Qgd2FubmEgdGVsbCB5b3UgaG93IEknbSBmZWVsaW5nLiBHb3R0YSBtYWtlIHlvdSB1bmRlcnN0YW5kLiBOZXZlciBnb25uYSBnaXZlIHlvdSB1cC4gTmV2ZXIgZ29ubmEgbGV0IHlvdSBkb3duLiBOZXZlciBnb25uYSBydW4gYXJvdW5kIGFuZCBkZXNlcnQgeW91LiBOZXZlciBnb25uYSBtYWtlIHlvdSBjcnkuIE5ldmVyIGdvbm5hIHNheSBnb29kYnllLiBOZXZlciBnb25uYSB0ZWxsIGEgbGllIGFuZCBodXJ0IHlvdS5cIjthbmltYXRpb246c2Nyb2xsLXRleHQgMzBzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUsc3RvcC1pdCAuNXMgbGluZWFyIDMwcyBub25lO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7dHJhbnNmb3JtLW9yaWdpbjpib3R0b20gcmlnaHR9XG5cbiAgQGtleWZyYW1lcyBzY3JvbGwtdGV4dCB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG5cbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHN0b3AtaXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG5gLFxuICBcIvCfpolPIFJMWT9cIjogYFxuICBib2R5OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5reW0tY2RuLmNvbS9lbnRyaWVzL2ljb25zL29yaWdpbmFsLzAwMC8wMDAvMDE1L29yZWFsbHkuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZCBzcGFjZTtcbiAgICBvcGFjaXR5OiAwLjE1O1xuICB9XG5cbiAgYm9keTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5gLFxuICBbaXNCcm93c2VyID8gXCLinZfvuI9TSE9VVElORyEhXCIgOiBcIkxPVURcIl06IGBcbiAgKiB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbmAsXG4gIFtpc0Jyb3dzZXIgPyBcIuKGkiBUaWx0IHRoaXNcIiA6IFwiVGlsdFwiXTogYFxuYm9keSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDFzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjE1dHVybikgfVxufWBcbn07XG5cbmNvbnN0IFByZXNldCA9ICh7IHZhbHVlLCB0aGVtZSwgaXNTZWxlY3RlZCwgb25DbGljayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByZXNldERpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiUHJlc2V0IFN5c3RlbUZvbnRcIiwge1xuICAgICAgICBcIlByZXNldC0tc2VsZWN0ZWRcIjogaXNTZWxlY3RlZCxcbiAgICAgICAgXCJQcmVzZXQtLWRhcmtcIjogdGhlbWUgPT09IFwiZGFya1wiLFxuICAgICAgICBcIlByZXNldC0tbGlnaHRcIjogdGhlbWUgPT09IFwibGlnaHRcIlxuICAgICAgfSl9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIHt2YWx1ZX1cbiAgICA8L1ByZXNldERpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFByZXNldFBpY2tlciA9ICh7IHZhbHVlLCBwcmVzZXRzLCB0aGVtZSwgb25DaGFuZ2UgfSkgPT4gKFxuICA8UHJlc2V0TGlzdFxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcIlByZXNldHNcIiwge1xuICAgICAgXCJQcmVzZXRzLS1saWdodFwiOiB0aGVtZSA9PT0gXCJsaWdodFwiLFxuICAgICAgXCJQcmVzZXRzLS1kYXJrXCI6IHRoZW1lID09PSBcImRhcmtcIlxuICAgIH0pfVxuICA+XG4gICAge3ByZXNldHMubWFwKHByZXNldCA9PiAoXG4gICAgICA8UHJlc2V0XG4gICAgICAgIGtleT17cHJlc2V0fVxuICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e3ZhbHVlID09PSBwcmVzZXR9XG4gICAgICAgIHZhbHVlPXtwcmVzZXR9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKHByZXNldCl9XG4gICAgICAvPlxuICAgICkpfVxuICA8L1ByZXNldExpc3Q+XG4pO1xuXG5jb25zdCBUZXh0RWRpdG9yID0gcHJvcHMgPT4gPHRleHRhcmVhIGlkPVwiRmFrZVRleHRBcmVhXCIgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVFZGl0b3IgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3R5bGVzaGVldDogUFJFU0VUU1tcIk5vcm1hbFwiXSxcbiAgICBwcmVzZXQ6IFwiTm9ybWFsXCIsXG4gICAgbG9hZGVkU3R5bGVzaGVldDogXCJcIixcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHlsZXNoZWV0IH0gfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHlsZXNoZWV0IH0pO1xuXG4gICAgdGhpcy51cGRhdGVMb2FkZWRTdHlsZXNoZWV0KHN0eWxlc2hlZXQpO1xuICB9O1xuXG4gIHVwZGF0ZUxvYWRlZFN0eWxlc2hlZXQgPSBfLmRlYm91bmNlKGxvYWRlZFN0eWxlc2hlZXQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkZWRTdHlsZXNoZWV0IH0pO1xuICB9LCAyNSk7XG5cbiAgb25FZGl0b3JNb3VudCA9ICgpID0+IHt9O1xuICBoYW5kbGVGb2N1cyA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IHRydWUgfSk7XG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVDaGFuZ2VQcmVzZXQgPSBwcmVzZXQgPT4ge1xuICAgIHRoaXMudXBkYXRlTG9hZGVkU3R5bGVzaGVldC5jYW5jZWwoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3R5bGVzaGVldDogXy50cmltKFBSRVNFVFNbcHJlc2V0XSksXG4gICAgICBsb2FkZWRTdHlsZXNoZWV0OiBfLnRyaW0oUFJFU0VUU1twcmVzZXRdKSxcbiAgICAgIHByZXNldFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaW5uZXJSZWYsIHRoZW1lID0gXCJsaWdodFwiLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3R5bGVzaGVldCwgbG9hZGVkU3R5bGVzaGVldCwgcHJlc2V0LCBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlRWRpdG9yQ29udGFpbmVyXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBcIlN0eWxlRWRpdG9yIFN5c3RlbUZvbnRcIiwge1xuICAgICAgICAgIFwiVGhlbWUtLWRhcmtcIjogdGhlbWUgPT09IFwiZGFya1wiLFxuICAgICAgICAgIFwiVGhlbWUtLWxpZ2h0XCI6IHRoZW1lID09PSBcImxpZ2h0XCIsXG4gICAgICAgICAgXCJTdHlsZUVkaXRvci0tZm9jdXNlZFwiOiBpc0ZvY3VzZWRcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxQcmVzZXRQaWNrZXJcbiAgICAgICAgICBwcmVzZXRzPXtfLmtleXMoUFJFU0VUUyl9XG4gICAgICAgICAgdmFsdWU9e3ByZXNldH1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUHJlc2V0fVxuICAgICAgICAvPlxuICAgICAgICB7aXNCcm93c2VyICYmIChcbiAgICAgICAgICA8VGV4dEVkaXRvclxuICAgICAgICAgICAgdGhlbWU9e1ZTQ09ERV9USEVNRVt0aGVtZV19XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICBrZXk9e3ByZXNldH1cbiAgICAgICAgICAgIHZhbHVlPXtzdHlsZXNoZWV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgJHtsb2FkZWRTdHlsZXNoZWV0fVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9TdHlsZUVkaXRvckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0= */"
  });

  var PresetList = _styled("div", {
    target: "e5i1odf2",
    label: "PresetList"
  })({
    name: "16vk2yc",
    styles: "display:flex;align-items:center;border-top:1px solid rgba(var(--link-color),0.75);border-bottom:1px solid rgba(var(--link-color),0.75);&.Presets--light{border-top-color:#1e1e1e;border-bottom-color:#1e1e1e;background-color:rgb(39,40,34);}",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlRWRpdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFNkIiLCJmaWxlIjoiU3R5bGVFZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBWU0NPREVfVEhFTUUgPSB7XG4gIGxpZ2h0OiBcInZzLWRhcmtcIixcbiAgZGFyazogXCJ2cy1saWdodFwiXG59O1xuXG5jb25zdCBTdHlsZUVkaXRvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdzLWZvbnQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICNGYWtlVGV4dEFyZWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZS1mb250KTtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XG4gICAgJiB7XG4gICAgICBtaW4taGVpZ2h0OiAyMzNweDtcbiAgICB9XG5cbiAgICAmLlN0eWxlRWRpdG9yLS1mb2N1c2VkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLWxpbmstY29sb3IpKTtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IHJnYmEodmFyKC0tbGluay1jb2xvciksIDAuMjUpO1xuICAgIH1cblxuICAgICYuU3R5bGVFZGl0b3ItLWZvY3VzZWQge1xuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUHJlc2V0RGl2ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKHZhcigtLWxpbmstY29sb3IpLCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYuUHJlc2V0LS1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCA0MCwgMzQpO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogcmdiKDM5LCA0MCwgMzQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuYDtcblxuY29uc3QgUHJlc2V0TGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKHZhcigtLWxpbmstY29sb3IpLCAwLjc1KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tbGluay1jb2xvciksIDAuNzUpO1xuXG4gICYuUHJlc2V0cy0tbGlnaHQge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMxZTFlMWU7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFlMWUxZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDQwLCAzNCk7XG4gIH1cbmA7XG5cbmNvbnN0IFBSRVNFVFMgPSB7XG4gIE5vcm1hbDogYFxuICBib2R5IHtcbiAgICBmaWx0ZXI6IGludmVydCgwJSk7IC8qIFRyeSAxMDAlICovXG4gIH1cbiAgYCxcbiAgW2lzQnJvd3NlciA/IFwi8J+TqyBnbWFpbCBpbnZpdGUgY29kZVwiIDogXCJkbyBub3QgY2xpY2tcIl06IGBcbiAgYm9keTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IHVybChodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9WdXc5bTV3WHZpRklRL2dpcGh5LmdpZik7XG4gICAgb3BhY2l0eTogMC45NTtcbiAgfVxuXG4gIGJvZHk6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpbGwtY2hhbmdlOiBsZWZ0LCB0b3A7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogMjtcbiAgICBhbmltYXRpb246IG1vdmVYIDVzIGVhc2Utb3V0IDBzIGluZmluaXRlIGFsdGVybmF0ZSwgbW92ZVkgNi4zcyBsaW5lYXIgMHMgaW5maW5pdGUgYWx0ZXJuYXRlLCBzdG9wLWl0IDAuNXMgbGluZWFyIDMwcyBub25lO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG5cbiAgQGtleWZyYW1lcyBtb3ZlWCB7XG4gICAgZnJvbSB7IGxlZnQ6IDA7IH0gdG8geyBsZWZ0OiBjYWxjKDEwMCUgLSAyMDBweCk7IH1cbiAgfVxuICBAa2V5ZnJhbWVzIG1vdmVZIHtcbiAgICBmcm9tIHsgdG9wOiBjYWxjKDEwMCUgLSAxNTBweCk7IH0gdG8geyB0b3A6IDA7IH1cbiAgfVxuXG4gICNfX2NvZGVibG9nOmFmdGVye3Bvc2l0aW9uOmZpeGVkO2JvdHRvbTozMHB4O3JpZ2h0OjYwcHg7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmJsb2NrO3dpZHRoOmF1dG87aGVpZ2h0OjYwcHg7Y29sb3I6IzIyMjtmb250LXNpemU6MzJweDtmb250LXdlaWdodDo2MDA7dGV4dC1vdmVyZmxvdzpub25lO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LXNoYWRvdzoxcHggMXB4IDVweCAjY2NjO29wYWNpdHk6Ljc1O2NvbnRlbnQ6XCJXZSdyZSBubyBzdHJhbmdlcnMgdG8gbG92ZS4gWW91IGtub3cgdGhlIHJ1bGVzIGFuZCBzbyBkbyBJLiBBIGZ1bGwgY29tbWl0bWVudCdzIHdoYXQgSSdtIHRoaW5raW5nIG9mLiBZb3Ugd291bGRuJ3QgZ2V0IHRoaXMgZnJvbSBhbnkgb3RoZXIgZ3V5LiBJIGp1c3Qgd2FubmEgdGVsbCB5b3UgaG93IEknbSBmZWVsaW5nLiBHb3R0YSBtYWtlIHlvdSB1bmRlcnN0YW5kLiBOZXZlciBnb25uYSBnaXZlIHlvdSB1cC4gTmV2ZXIgZ29ubmEgbGV0IHlvdSBkb3duLiBOZXZlciBnb25uYSBydW4gYXJvdW5kIGFuZCBkZXNlcnQgeW91LiBOZXZlciBnb25uYSBtYWtlIHlvdSBjcnkuIE5ldmVyIGdvbm5hIHNheSBnb29kYnllLiBOZXZlciBnb25uYSB0ZWxsIGEgbGllIGFuZCBodXJ0IHlvdS5cIjthbmltYXRpb246c2Nyb2xsLXRleHQgMzBzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUsc3RvcC1pdCAuNXMgbGluZWFyIDMwcyBub25lO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7dHJhbnNmb3JtLW9yaWdpbjpib3R0b20gcmlnaHR9XG5cbiAgQGtleWZyYW1lcyBzY3JvbGwtdGV4dCB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG5cbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHN0b3AtaXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG5gLFxuICBcIvCfpolPIFJMWT9cIjogYFxuICBib2R5OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaS5reW0tY2RuLmNvbS9lbnRyaWVzL2ljb25zL29yaWdpbmFsLzAwMC8wMDAvMDE1L29yZWFsbHkuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZCBzcGFjZTtcbiAgICBvcGFjaXR5OiAwLjE1O1xuICB9XG5cbiAgYm9keTpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5gLFxuICBbaXNCcm93c2VyID8gXCLinZfvuI9TSE9VVElORyEhXCIgOiBcIkxPVURcIl06IGBcbiAgKiB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbmAsXG4gIFtpc0Jyb3dzZXIgPyBcIuKGkiBUaWx0IHRoaXNcIiA6IFwiVGlsdFwiXTogYFxuYm9keSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDFzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgwLjE1dHVybikgfVxufWBcbn07XG5cbmNvbnN0IFByZXNldCA9ICh7IHZhbHVlLCB0aGVtZSwgaXNTZWxlY3RlZCwgb25DbGljayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByZXNldERpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiUHJlc2V0IFN5c3RlbUZvbnRcIiwge1xuICAgICAgICBcIlByZXNldC0tc2VsZWN0ZWRcIjogaXNTZWxlY3RlZCxcbiAgICAgICAgXCJQcmVzZXQtLWRhcmtcIjogdGhlbWUgPT09IFwiZGFya1wiLFxuICAgICAgICBcIlByZXNldC0tbGlnaHRcIjogdGhlbWUgPT09IFwibGlnaHRcIlxuICAgICAgfSl9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIHt2YWx1ZX1cbiAgICA8L1ByZXNldERpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFByZXNldFBpY2tlciA9ICh7IHZhbHVlLCBwcmVzZXRzLCB0aGVtZSwgb25DaGFuZ2UgfSkgPT4gKFxuICA8UHJlc2V0TGlzdFxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcIlByZXNldHNcIiwge1xuICAgICAgXCJQcmVzZXRzLS1saWdodFwiOiB0aGVtZSA9PT0gXCJsaWdodFwiLFxuICAgICAgXCJQcmVzZXRzLS1kYXJrXCI6IHRoZW1lID09PSBcImRhcmtcIlxuICAgIH0pfVxuICA+XG4gICAge3ByZXNldHMubWFwKHByZXNldCA9PiAoXG4gICAgICA8UHJlc2V0XG4gICAgICAgIGtleT17cHJlc2V0fVxuICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgIGlzU2VsZWN0ZWQ9e3ZhbHVlID09PSBwcmVzZXR9XG4gICAgICAgIHZhbHVlPXtwcmVzZXR9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKHByZXNldCl9XG4gICAgICAvPlxuICAgICkpfVxuICA8L1ByZXNldExpc3Q+XG4pO1xuXG5jb25zdCBUZXh0RWRpdG9yID0gcHJvcHMgPT4gPHRleHRhcmVhIGlkPVwiRmFrZVRleHRBcmVhXCIgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGVFZGl0b3IgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3R5bGVzaGVldDogUFJFU0VUU1tcIk5vcm1hbFwiXSxcbiAgICBwcmVzZXQ6IFwiTm9ybWFsXCIsXG4gICAgbG9hZGVkU3R5bGVzaGVldDogXCJcIixcbiAgICBpc0ZvY3VzZWQ6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlOiBzdHlsZXNoZWV0IH0gfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHlsZXNoZWV0IH0pO1xuXG4gICAgdGhpcy51cGRhdGVMb2FkZWRTdHlsZXNoZWV0KHN0eWxlc2hlZXQpO1xuICB9O1xuXG4gIHVwZGF0ZUxvYWRlZFN0eWxlc2hlZXQgPSBfLmRlYm91bmNlKGxvYWRlZFN0eWxlc2hlZXQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkZWRTdHlsZXNoZWV0IH0pO1xuICB9LCAyNSk7XG5cbiAgb25FZGl0b3JNb3VudCA9ICgpID0+IHt9O1xuICBoYW5kbGVGb2N1cyA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IHRydWUgfSk7XG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcblxuICBoYW5kbGVDaGFuZ2VQcmVzZXQgPSBwcmVzZXQgPT4ge1xuICAgIHRoaXMudXBkYXRlTG9hZGVkU3R5bGVzaGVldC5jYW5jZWwoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3R5bGVzaGVldDogXy50cmltKFBSRVNFVFNbcHJlc2V0XSksXG4gICAgICBsb2FkZWRTdHlsZXNoZWV0OiBfLnRyaW0oUFJFU0VUU1twcmVzZXRdKSxcbiAgICAgIHByZXNldFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaW5uZXJSZWYsIHRoZW1lID0gXCJsaWdodFwiLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3R5bGVzaGVldCwgbG9hZGVkU3R5bGVzaGVldCwgcHJlc2V0LCBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlRWRpdG9yQ29udGFpbmVyXG4gICAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NOYW1lLCBcIlN0eWxlRWRpdG9yIFN5c3RlbUZvbnRcIiwge1xuICAgICAgICAgIFwiVGhlbWUtLWRhcmtcIjogdGhlbWUgPT09IFwiZGFya1wiLFxuICAgICAgICAgIFwiVGhlbWUtLWxpZ2h0XCI6IHRoZW1lID09PSBcImxpZ2h0XCIsXG4gICAgICAgICAgXCJTdHlsZUVkaXRvci0tZm9jdXNlZFwiOiBpc0ZvY3VzZWRcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxQcmVzZXRQaWNrZXJcbiAgICAgICAgICBwcmVzZXRzPXtfLmtleXMoUFJFU0VUUyl9XG4gICAgICAgICAgdmFsdWU9e3ByZXNldH1cbiAgICAgICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlUHJlc2V0fVxuICAgICAgICAvPlxuICAgICAgICB7aXNCcm93c2VyICYmIChcbiAgICAgICAgICA8VGV4dEVkaXRvclxuICAgICAgICAgICAgdGhlbWU9e1ZTQ09ERV9USEVNRVt0aGVtZV19XG4gICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICBrZXk9e3ByZXNldH1cbiAgICAgICAgICAgIHZhbHVlPXtzdHlsZXNoZWV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgJHtsb2FkZWRTdHlsZXNoZWV0fVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9TdHlsZUVkaXRvckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0= */"
  });

  var PRESETS = (_PRESETS = {
    Normal: "\n  body {\n    filter: invert(0%); /* Try 100% */\n  }\n  "
  }, _defineProperty(_PRESETS, dist_22 ? "📫 gmail invite code" : "do not click", "\n  body:before {\n    content: url(https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif);\n    opacity: 0.95;\n  }\n\n  body:before {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    will-change: left, top;\n    right: 0;\n    pointer-events: none;\n    display: block;\n    z-index: 2;\n    animation: moveX 5s ease-out 0s infinite alternate, moveY 6.3s linear 0s infinite alternate, stop-it 0.5s linear 30s none;\n    animation-fill-mode: forwards;\n  }\n\n  @keyframes moveX {\n    from { left: 0; } to { left: calc(100% - 200px); }\n  }\n  @keyframes moveY {\n    from { top: calc(100% - 150px); } to { top: 0; }\n  }\n\n  #__codeblog:after{position:fixed;bottom:30px;right:60px;pointer-events:none;display:block;width:auto;height:60px;color:#222;font-size:32px;font-weight:600;text-overflow:none;white-space:nowrap;text-shadow:1px 1px 5px #ccc;opacity:.75;content:\"We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of. You wouldn't get this from any other guy. I just wanna tell you how I'm feeling. Gotta make you understand. Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you.\";animation:scroll-text 30s linear infinite alternate,stop-it .5s linear 30s none;animation-fill-mode:forwards;transform-origin:bottom right}\n\n  @keyframes scroll-text {\n    to {\n      transform: translateX(0%);\n    }\n\n    from {\n      transform: translateX(100%);\n    }\n  }\n\n  @keyframes stop-it {\n    0% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 0;\n    }\n  }\n\n"), _defineProperty(_PRESETS, "🦉O RLY?", "\n  body:before {\n    background-image: url(https://i.kym-cdn.com/entries/icons/original/000/000/015/oreally.jpg);\n    background-size: 120px;\n    background-repeat: round space;\n    opacity: 0.15;\n  }\n\n  body:before {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    display: block;\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n  }\n"), _defineProperty(_PRESETS, dist_22 ? "❗️SHOUTING!!" : "LOUD", "\n  * { text-transform: uppercase; }\n"), _defineProperty(_PRESETS, dist_22 ? "→ Tilt this" : "Tilt", "\nbody {\n  animation: rotate 1s ease-in-out;\n  animation-direction: alternate;\n  animation-iteration-count: 2;\n}\n\n@keyframes rotate {\n  to { transform: rotate(0.15turn) }\n}"), _PRESETS);

  var Preset = function Preset(_ref) {
    var value = _ref.value,
        theme = _ref.theme,
        isSelected = _ref.isSelected,
        onClick = _ref.onClick;
    return core.jsx(PresetDiv, {
      className: classNames("Preset SystemFont", {
        "Preset--selected": isSelected,
        "Preset--dark": theme === "dark",
        "Preset--light": theme === "light"
      }),
      onClick: onClick
    }, value);
  };

  var PresetPicker = function PresetPicker(_ref2) {
    var value = _ref2.value,
        presets = _ref2.presets,
        theme = _ref2.theme,
        onChange = _ref2.onChange;
    return core.jsx(PresetList, {
      className: classNames("Presets", {
        "Presets--light": theme === "light",
        "Presets--dark": theme === "dark"
      })
    }, presets.map(function (preset) {
      return core.jsx(Preset, {
        key: preset,
        theme: theme,
        isSelected: value === preset,
        value: preset,
        onClick: function onClick() {
          return onChange(preset);
        }
      });
    }));
  };

  var TextEditor = function TextEditor(props) {
    return core.jsx("textarea", _extends({
      id: "FakeTextArea"
    }, props));
  };

  var StyleEditor =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(StyleEditor, _React$PureComponent);

    function StyleEditor() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StyleEditor);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StyleEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        stylesheet: PRESETS["Normal"],
        preset: "Normal",
        loadedStylesheet: "",
        isFocused: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref3) {
        var stylesheet = _ref3.target.value;

        _this.setState({
          stylesheet: stylesheet
        });

        _this.updateLoadedStylesheet(stylesheet);
      });

      _defineProperty(_assertThisInitialized(_this), "updateLoadedStylesheet", _.debounce(function (loadedStylesheet) {
        _this.setState({
          loadedStylesheet: loadedStylesheet
        });
      }, 25));

      _defineProperty(_assertThisInitialized(_this), "onEditorMount", function () {});

      _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
        return _this.setState({
          isFocused: true
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
        return _this.setState({
          isFocused: false
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleChangePreset", function (preset) {
        _this.updateLoadedStylesheet.cancel();

        _this.setState({
          stylesheet: _.trim(PRESETS[preset]),
          loadedStylesheet: _.trim(PRESETS[preset]),
          preset: preset
        });
      });

      return _this;
    }

    _createClass(StyleEditor, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            innerRef = _this$props.innerRef,
            _this$props$theme = _this$props.theme,
            theme = _this$props$theme === void 0 ? "light" : _this$props$theme,
            otherProps = _objectWithoutProperties(_this$props, ["className", "innerRef", "theme"]);

        var _this$state = this.state,
            stylesheet = _this$state.stylesheet,
            loadedStylesheet = _this$state.loadedStylesheet,
            preset = _this$state.preset,
            isFocused = _this$state.isFocused;
        return core.jsx(StyleEditorContainer, _extends({
          ref: innerRef
        }, otherProps, {
          className: classNames(className, "StyleEditor SystemFont", {
            "Theme--dark": theme === "dark",
            "Theme--light": theme === "light",
            "StyleEditor--focused": isFocused
          })
        }), core.jsx(PresetPicker, {
          presets: _.keys(PRESETS),
          value: preset,
          theme: theme,
          onChange: this.handleChangePreset
        }), dist_22 && core.jsx(TextEditor, {
          theme: VSCODE_THEME[theme],
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          key: preset,
          value: stylesheet,
          onChange: this.handleChange
        }), core.jsx("style", null, "\n          ".concat(loadedStylesheet, "\n        ")), this.props.children);
      }
    }]);

    return StyleEditor;
  }(react.PureComponent);

  return StyleEditor;

}));

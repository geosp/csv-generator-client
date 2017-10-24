(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/fp"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/fp"], factory);
	else if(typeof exports === 'object')
		exports["csv-generator-client"] = factory(require("lodash/fp"));
	else
		root["csv-generator-client"] = factory(root["lodash/fp"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _csvGeneratorClient = __webpack_require__(1);

Object.keys(_csvGeneratorClient).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _csvGeneratorClient[key];
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSVGeneratorClient = exports.helloWorld = undefined;

var _fp = __webpack_require__(2);

var _fp2 = _interopRequireDefault(_fp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var helloWorld = exports.helloWorld = function helloWorld() {
  console.log('Hello');
};

var CSVGeneratorClient = exports.CSVGeneratorClient = function CSVGeneratorClient(_ref) {
  var data = _ref.data,
      fileName = _ref.fileName,
      _ref$separator = _ref.separator,
      separator = _ref$separator === undefined ? ',' : _ref$separator,
      _ref$addQuotes = _ref.addQuotes,
      addQuotes = _ref$addQuotes === undefined ? false : _ref$addQuotes;

  if (addQuotes) {
    separator = '"' + separator + '"';
  }

  var getData = _fp2.default.flow(_fp2.default.map(function (row) {
    return row.join(separator);
  }, function (data) {
    return data.join('\r\n');
  }, function (data) {
    if (window.navigator.msSaveOrOpenBlob) {
      return data;
    } else if (typeof btoa === 'function') {
      data = btoa(data);
    } else {
      data = encodeURIComponent(data);
    }
    return data;
  }));

  var getDownloadLink = function getDownloadLink() {
    var type = 'data:text/csv;charset=utf-8';
    if (typeof btoa === 'function') {
      type += ';base64';
    }
    return type + ',' + getData(dataArray);
  };

  var getLinkElement = function getLinkElement() {
    var linkElement = document.createElement('a');
    linkElement.href = getDownloadLink();
    linkElement.download = fileName;
    return linkElement;
  };

  undefined.download = function () {
    if (window.navigator.msSaveBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(getData(dataArray)))], {
        type: 'text/csv;charset=utf-8;'
      });
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      var linkElement = getLinkElement();
      linkElement.style.display = 'none';
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    }
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=csv-generator-client.js.map
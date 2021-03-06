define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../shared/types.ts":
/*!**************************!*\
  !*** ../shared/types.ts ***!
  \**************************/
/*! exports provided: DatasourceMode, SCRAP_QUERY_TYPES, SCRAP_QUERY_RESULT_FORMATS, SCRAP_QUERY_SOURCES, SCRAP_QUERY_RESULT_COLUMN_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasourceMode", function() { return DatasourceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRAP_QUERY_TYPES", function() { return SCRAP_QUERY_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRAP_QUERY_RESULT_FORMATS", function() { return SCRAP_QUERY_RESULT_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRAP_QUERY_SOURCES", function() { return SCRAP_QUERY_SOURCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRAP_QUERY_RESULT_COLUMN_FORMATS", function() { return SCRAP_QUERY_RESULT_COLUMN_FORMATS; });
var DatasourceMode;

(function (DatasourceMode) {
  DatasourceMode["Basic"] = "basic";
  DatasourceMode["Advanced"] = "advanced";
})(DatasourceMode || (DatasourceMode = {}));

var SCRAP_QUERY_TYPES = [{
  label: 'CSV',
  value: 'csv'
}, {
  label: 'JSON',
  value: 'json'
}, {
  label: 'HTML',
  value: 'html'
}, {
  label: 'GraphQL',
  value: 'graphql'
}, {
  label: 'Series',
  value: 'series'
}, {
  label: 'Global Query',
  value: 'global'
}];
var SCRAP_QUERY_RESULT_FORMATS = [{
  label: 'Table',
  value: 'table'
}, {
  label: 'Time Series',
  value: 'timeseries'
}];
var SCRAP_QUERY_SOURCES = [{
  label: 'URL',
  value: 'url',
  supported_types: ['csv', 'json', 'html', 'graphql']
}, {
  label: 'Inline',
  value: 'inline',
  supported_types: ['csv', 'json']
}, {
  label: 'Random Walk',
  value: 'random-walk',
  supported_types: ['series']
}, {
  label: 'Expression',
  value: 'expression',
  supported_types: ['series']
}];
var SCRAP_QUERY_RESULT_COLUMN_FORMATS = [{
  label: 'String',
  value: 'string'
}, {
  label: 'Number',
  value: 'number'
}, {
  label: 'Timestamp',
  value: 'timestamp'
}, {
  label: 'Timestamp ( UNIX ms )',
  value: 'timestamp_epoch'
}];

/***/ }),

/***/ "../shared/utils.ts":
/*!**************************!*\
  !*** ../shared/utils.ts ***!
  \**************************/
/*! exports provided: replaceVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceVariables", function() { return replaceVariables; });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);

var replaceVariables = function replaceVariables(query, scopedVars) {
  query.url = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getTemplateSrv"])().replace(query.url, scopedVars, 'glob');
  query.data = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getTemplateSrv"])().replace(query.data, scopedVars, 'glob');

  if (query.url_options && query.url_options.data) {
    query.url_options.data = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getTemplateSrv"])().replace(query.url_options.data, scopedVars, 'glob');
  }

  return query;
};

/***/ }),

/***/ "./annotations.editor.tsx":
/*!********************************!*\
  !*** ./annotations.editor.tsx ***!
  \********************************/
/*! exports provided: InfinityAnnotationCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfinityAnnotationCtrl", function() { return InfinityAnnotationCtrl; });
var InfinityAnnotationCtrl =
/** @class */
function () {
  function InfinityAnnotationCtrl() {}

  InfinityAnnotationCtrl.templateUrl = 'annotations.editor.html';
  return InfinityAnnotationCtrl;
}();



/***/ }),

/***/ "./config.editor.tsx":
/*!***************************!*\
  !*** ./config.editor.tsx ***!
  \***************************/
/*! exports provided: InfinityConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfinityConfigEditor", function() { return InfinityConfigEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _query_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query.editor */ "./query.editor.tsx");
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/types */ "../shared/types.ts");






var DATASOURCE_MODES = [{
  value: _shared_types__WEBPACK_IMPORTED_MODULE_5__["DatasourceMode"].Basic,
  label: 'Basic'
}, {
  value: _shared_types__WEBPACK_IMPORTED_MODULE_5__["DatasourceMode"].Advanced,
  label: 'Advanced'
}];
var DEFAULT_DATASOURCE_MODE = DATASOURCE_MODES.find(function (d) {
  return d.value === _shared_types__WEBPACK_IMPORTED_MODULE_5__["DatasourceMode"].Basic;
});
var InfinityConfigEditor = function InfinityConfigEditor(props) {
  var options = props.options,
      onOptionsChange = props.onOptionsChange;
  options.jsonData = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaultsDeep"])(options.jsonData, {
    datasource_mode: _shared_types__WEBPACK_IMPORTED_MODULE_5__["DatasourceMode"].Basic,
    global_queries: []
  });

  var addGlobalQuery = function addGlobalQuery() {
    options.jsonData.global_queries = options.jsonData.global_queries || [];
    options.jsonData.global_queries.push({
      name: 'My Query',
      id: "my-query-" + (options.jsonData.global_queries.length + 1),
      query: {
        type: 'csv',
        source: 'inline',
        data: '',
        url: '',
        url_options: {
          method: 'GET'
        },
        root_selector: '',
        columns: [],
        format: 'table',
        refId: "my-query-" + (options.jsonData.global_queries.length + 1)
      }
    });
  };

  var deleteGlobalQuery = function deleteGlobalQuery(index) {
    if (options.jsonData.global_queries && options.jsonData.global_queries.length > 0) {
      options.jsonData.global_queries.splice(index, 1);
      Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["updateDatasourcePluginJsonDataOption"])(props, 'global_queries', options.jsonData.global_queries);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label width-10"
  }, "Mode"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    className: "min-width-12 width-12",
    value: DATASOURCE_MODES.find(function (field) {
      return field.value === options.jsonData.datasource_mode;
    }) || DEFAULT_DATASOURCE_MODE,
    options: DATASOURCE_MODES,
    defaultValue: DEFAULT_DATASOURCE_MODE,
    onChange: function onChange(e) {
      return Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["updateDatasourcePluginJsonDataOption"])(props, 'datasource_mode', e.value);
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), options.jsonData.datasource_mode === _shared_types__WEBPACK_IMPORTED_MODULE_5__["DatasourceMode"].Advanced ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["DataSourceHttpSettings"], {
    defaultUrl: "",
    dataSourceConfig: options,
    onChange: onOptionsChange
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), options.jsonData.global_queries && options.jsonData.global_queries.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: addGlobalQuery
  }, "Add Global Query")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Registered / Global Queries"), options.jsonData.global_queries && options.jsonData.global_queries.map(function (q, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-8"
    }, "Query Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: q.name,
      className: "gf-form-label width-12",
      onChange: function onChange(e) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(options, "jsonData.global_queries[" + index + "].name", e.target.value);
        Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["updateDatasourcePluginJsonDataOption"])(props, 'global_queries', options.jsonData.global_queries);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-8"
    }, "Query ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: q.id,
      className: "gf-form-label width-12",
      onChange: function onChange(e) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(options, "jsonData.global_queries[" + index + "].id", e.target.value);
        Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["updateDatasourcePluginJsonDataOption"])(props, 'global_queries', options.jsonData.global_queries);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "btn btn-danger",
      onClick: function onClick() {
        return deleteGlobalQuery(index);
      }
    }, "Delete Query")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_query_editor__WEBPACK_IMPORTED_MODULE_4__["InfinityQueryEditor"], {
      query: q.query,
      mode: "global",
      onChange: function onChange() {
        return Object(_grafana_data__WEBPACK_IMPORTED_MODULE_2__["updateDatasourcePluginJsonDataOption"])(props, 'global_queries', options.jsonData.global_queries);
      },
      instanceSettings: options
    }))));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: addGlobalQuery
  }, "Add Global Query"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
};

/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils */ "../shared/utils.ts");





var DataSource =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSource, _super);

  function DataSource(iSettings) {
    var _this = _super.call(this, iSettings) || this;

    _this.instanceSettings = iSettings;
    return _this;
  }

  DataSource.prototype.testDatasource = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
          if (this.instanceSettings.jsonData && this.instanceSettings.jsonData.datasource_mode && this.instanceSettings.jsonData.datasource_mode === 'basic') {
            resolve({
              message: 'No checks required',
              status: 'success'
            });
          } else {
            if (this.instanceSettings.url) {
              resolve({
                message: 'No checks performed',
                status: 'success'
              });
            } else {
              reject({
                message: 'Missing URL',
                status: 'error'
              });
            }
          }

          return [2
          /*return*/
          ];
        });
      });
    });
  };

  DataSource.prototype.query = function (request) {
    return _super.prototype.query.call(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, request), {
      targets: request.targets.filter(function (t) {
        return t.hide !== true;
      }).map(function (t) {
        return Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["replaceVariables"])(t, request.scopedVars);
      })
    }));
  };

  DataSource.prototype.annotationQuery = function (options) {
    var promises = [];
    return Promise.all(promises).then(function (results) {
      return [];
    });
  };

  DataSource.prototype.metricFindQuery = function (query) {
    var promises = [];
    var replacedQuery = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["getTemplateSrv"])().replace(query);

    if (replacedQuery.startsWith('Collection(') && replacedQuery.endsWith(')')) {
      var actualQuery_1 = replacedQuery.replace('Collection(', '').slice(0, -1);
      promises.push(new Promise(function (resolve, reject) {
        var out = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["chunk"])(actualQuery_1.split(','), 2).map(function (value) {
          return {
            text: value[0],
            value: value[1]
          };
        });
        resolve(out);
      }));
    } else if (replacedQuery.startsWith('CollectionLookup(') && replacedQuery.endsWith(')')) {
      var actualQuery = replacedQuery.replace('CollectionLookup(', '').slice(0, -1);
      var querySplit_1 = actualQuery.split(',');
      promises.push(new Promise(function (resolve, reject) {
        var chunkCollection = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["chunk"])(querySplit_1, 2);
        var out = chunkCollection.slice(0, -1).map(function (value) {
          return {
            key: value[0],
            value: value[1]
          };
        }).find(function (v) {
          return v.key === Object(lodash__WEBPACK_IMPORTED_MODULE_1__["last"])(querySplit_1);
        });
        resolve(out ? [{
          text: out.key,
          value: out.value
        }] : []);
      }));
    } else if (replacedQuery.startsWith('Join(') && replacedQuery.endsWith(')')) {
      var actualQuery = replacedQuery.replace('Join(', '').slice(0, -1);
      var querySplit_2 = actualQuery.split(',');
      promises.push(new Promise(function (resolve, reject) {
        var out = querySplit_2.join('');
        resolve([{
          value: out,
          text: out
        }]);
      }));
    }

    return Promise.all(promises).then(function (results) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["flatten"])(results);
    });
  };

  return DataSource;
}(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__["DataSourceWithBackend"]);



/***/ }),

/***/ "./editors/AdvancedOptions.tsx":
/*!*************************************!*\
  !*** ./editors/AdvancedOptions.tsx ***!
  \*************************************/
/*! exports provided: AdvancedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedOptions", function() { return AdvancedOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/types */ "../shared/types.ts");




var AdvancedOptions = function AdvancedOptions(_a) {
  var query = _a.query,
      onChange = _a.onChange;
  var defaultFormat = {
    value: 'table',
    label: 'Table'
  };

  var onSelectChange = function onSelectChange(selectableItem, field) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(query, field, selectableItem.value);
    onChange(query);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form"
  }, query.type === 'series' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "Format"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    className: "min-width-12 width-12",
    value: _shared_types__WEBPACK_IMPORTED_MODULE_3__["SCRAP_QUERY_RESULT_FORMATS"].find(function (field) {
      return field.value === query.format;
    }) || defaultFormat,
    options: _shared_types__WEBPACK_IMPORTED_MODULE_3__["SCRAP_QUERY_RESULT_FORMATS"],
    defaultValue: defaultFormat,
    onChange: function onChange(e) {
      return onSelectChange(e, 'format');
    }
  }))));
};

/***/ }),

/***/ "./editors/Scrapper.tsx":
/*!******************************!*\
  !*** ./editors/Scrapper.tsx ***!
  \******************************/
/*! exports provided: Scrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrapper", function() { return Scrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ScrapperColumns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrapperColumns */ "./editors/ScrapperColumns.tsx");
/* harmony import */ var _URLOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./URLOptions */ "./editors/URLOptions.tsx");






var Scrapper =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Scrapper, _super);

  function Scrapper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onInputTextChange = function (event, field, props, splitIntoArray) {
      if (splitIntoArray === void 0) {
        splitIntoArray = false;
      }

      var query = props.query,
          onChange = props.onChange;
      var value = splitIntoArray ? event.target.value.split(',') : event.target.value;
      Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(query, field, value);
      onChange(query);
    };

    return _this;
  }

  Scrapper.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.props.query.source === 'url' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-8"
    }, "URL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "gf-form-input min-width-30",
      value: this.props.query.url,
      placeholder: "https://jsonplaceholder.typicode.com/todos",
      onChange: function onChange(e) {
        return _this.onInputTextChange(e, "url", _this.props);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_URLOptions__WEBPACK_IMPORTED_MODULE_4__["URLOptions"], {
      onChange: this.props.onChange,
      query: this.props.query
    }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-8"
    }, "Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      rows: 5,
      className: "gf-form-input min-width-30",
      value: this.props.query.data,
      placeholder: "",
      onChange: function onChange(e) {
        return _this.onInputTextChange(e, "data", _this.props);
      }
    }))), ['html', 'json', 'graphql'].indexOf(this.props.query.type) > -1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-8"
    }, "Rows / Root"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "gf-form-input min-width-30",
      value: this.props.query.root_selector,
      placeholder: "",
      onChange: function onChange(e) {
        return _this.onInputTextChange(e, "root_selector", _this.props);
      }
    }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScrapperColumns__WEBPACK_IMPORTED_MODULE_3__["ScrapperColumns"], {
      onChange: this.props.onChange,
      query: this.props.query
    }));
  };

  return Scrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);



/***/ }),

/***/ "./editors/ScrapperColumns.tsx":
/*!*************************************!*\
  !*** ./editors/ScrapperColumns.tsx ***!
  \*************************************/
/*! exports provided: ScrapperColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapperColumns", function() { return ScrapperColumns; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/types */ "../shared/types.ts");





var ScrapperColumns = function ScrapperColumns(_a) {
  var query = _a.query,
      onChange = _a.onChange;
  var defaultScrapResultFormat = {
    value: 'string',
    label: 'String'
  };

  var onColumnAdd = function onColumnAdd() {
    var columns = query.columns || [];
    columns.push({
      text: '',
      selector: '',
      type: 'string'
    });
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      columns: columns
    }));
  };

  var onColumnRemove = function onColumnRemove(index) {
    var columns = query.columns;
    columns.splice(index, 1);
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, query), {
      columns: columns
    }));
  };

  var onInputTextChange = function onInputTextChange(event, field) {
    var value = event.target.value;
    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(query, field, value);
    onChange(query);
  };

  var onSelectChange = function onSelectChange(selectableItem, field) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(query, field, selectableItem.value);
    onChange(query);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, query.columns.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form gf-form--grow"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8",
    title: "Columns"
  }, "Columns"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form gf-form--grow"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "btn btn-success btn-small",
    style: {
      marginTop: '5px'
    },
    onClick: function onClick() {
      return onColumnAdd();
    }
  }, "Add Columns")))) : null, query.columns.map(function (column, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label query-keyword width-8",
      title: "Column"
    }, "Column ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "gf-form-input min-width-8",
      value: column.text,
      placeholder: "Title",
      onChange: function onChange(e) {
        return onInputTextChange(e, "columns[" + index + "].text");
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "gf-form-input min-width-8",
      value: column.selector,
      placeholder: query.type === 'csv' ? 'Column Name' : 'Selector',
      onChange: function onChange(e) {
        return onInputTextChange(e, "columns[" + index + "].selector");
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "min-width-12 width-12",
      value: _shared_types__WEBPACK_IMPORTED_MODULE_4__["SCRAP_QUERY_RESULT_COLUMN_FORMATS"].find(function (field) {
        return field.value === column.type;
      }) || defaultScrapResultFormat,
      options: _shared_types__WEBPACK_IMPORTED_MODULE_4__["SCRAP_QUERY_RESULT_COLUMN_FORMATS"],
      defaultValue: defaultScrapResultFormat,
      onChange: function onChange(e) {
        return onSelectChange(e, "columns[" + index + "].type");
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn btn-success btn-small",
      style: {
        margin: '5px'
      },
      onClick: function onClick() {
        onColumnAdd();
      }
    }, "+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn btn-danger btn-small",
      style: {
        margin: '5px'
      },
      onClick: function onClick() {
        onColumnRemove(index);
      }
    }, "x")));
  }));
};

/***/ }),

/***/ "./editors/Series.tsx":
/*!****************************!*\
  !*** ./editors/Series.tsx ***!
  \****************************/
/*! exports provided: SeriesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesEditor", function() { return SeriesEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SeriesAdvancedOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesAdvancedOptions */ "./editors/SeriesAdvancedOptions.tsx");





var SeriesEditor = function SeriesEditor(_a) {
  var query = _a.query,
      onChange = _a.onChange;
  query = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["defaultsDeep"])(query, {
    alias: 'Random Walk'
  });

  var onInputTextChange = function onInputTextChange(value, field) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_3__["set"])(query, field, value);
    onChange(query);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "Alias"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["DataLinkInput"], {
    onChange: function onChange(e) {
      return onInputTextChange(e, "alias");
    },
    suggestions: [{
      label: 'Series Index',
      value: '__series.index',
      origin: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["VariableOrigin"].Series
    }],
    value: query.alias || '',
    placeholder: "Alias / Random Walk"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-6"
  }, "Series Count"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "gf-form-input min-width-12",
    value: query.seriesCount,
    placeholder: "1",
    onChange: function onChange(e) {
      return onInputTextChange(+e.target.value, "seriesCount");
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form"
  }, query.source === 'expression' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "Expression"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["DataLinkInput"], {
    onChange: function onChange(e) {
      return onInputTextChange(e, "expression");
    },
    suggestions: [{
      label: 'Series Index',
      value: '__series.index',
      origin: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["VariableOrigin"].Series
    }, {
      label: 'Value Index',
      value: '__value.index',
      origin: _grafana_data__WEBPACK_IMPORTED_MODULE_2__["VariableOrigin"].Value
    }],
    value: query.expression || '                                             ',
    placeholder: "Expression"
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SeriesAdvancedOptions__WEBPACK_IMPORTED_MODULE_4__["SeriesAdvancedOptions"], {
    onChange: onChange,
    query: query
  }))));
};

/***/ }),

/***/ "./editors/SeriesAdvancedOptions.tsx":
/*!*******************************************!*\
  !*** ./editors/SeriesAdvancedOptions.tsx ***!
  \*******************************************/
/*! exports provided: SeriesAdvancedOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesAdvancedOptions", function() { return SeriesAdvancedOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);




var SeriesAdvancedOptions = function SeriesAdvancedOptions(_a) {
  var query = _a.query,
      onChange = _a.onChange;
  query = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["defaultsDeep"])(query, {
    dataOverrides: []
  });

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      popupState = _b[0],
      setPopupState = _b[1];

  var DATA_OVERRIDE_OPERATORS = ['=', '<', '<=', '>', '>=', '!='].map(function (o) {
    return {
      label: o,
      value: o
    };
  });

  var addDataOverride = function addDataOverride() {
    query.dataOverrides = query.dataOverrides || [];
    var newOverride = {
      values: ['${__value.index}', '10'],
      operator: '>=',
      override: 'null'
    };
    query.dataOverrides.push(newOverride);
    onChange(query);
  };

  var removeDataOverride = function removeDataOverride(index) {
    query.dataOverrides = query.dataOverrides || [];
    query.dataOverrides.splice(index, 1);
    onChange(query);
  };

  var onTextChange = function onTextChange(value, field) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(query, field, value);
    onChange(query);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, query.type !== 'series' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "Advanced Options"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    role: "button",
    onClick: function onClick() {
      return setPopupState(!popupState);
    },
    title: "Advanced Options",
    className: "btn btn-secondary btn-small",
    style: {
      marginTop: '4px',
      padding: '10px'
    }
  }, "Advanced Options ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-expand fa-large btn btn-small"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "modal-header-title"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "p-l-1"
    }, "Advanced Options")),
    isOpen: popupState,
    onDismiss: function onDismiss() {
      return setPopupState(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label width-6"
  }, "Data Overrides"), query.dataOverrides && query.dataOverrides.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-20",
    onClick: function onClick() {
      return addDataOverride();
    }
  }, "Click to add Overrides")))), query.dataOverrides && query.dataOverrides.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, query.dataOverrides.map(function (override, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label width-6"
    }, "Override ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "gf-form-input min-width-10 width-10",
      value: override.values[0],
      onChange: function onChange(e) {
        return onTextChange(e.target.value, "dataOverrides[" + index + "].values[0]");
      },
      placeholder: "Value 1"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      className: "width-4",
      value: DATA_OVERRIDE_OPERATORS.find(function (options) {
        return options.value === override.operator;
      }),
      defaultValue: override.operator,
      options: DATA_OVERRIDE_OPERATORS,
      onChange: function onChange(e) {
        return onTextChange(e.value || '', "dataOverrides[" + index + "].operator");
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "gf-form-input min-width-10 width-10",
      value: override.values[1],
      onChange: function onChange(e) {
        return onTextChange(e.target.value, "dataOverrides[" + index + "].values[1]");
      },
      placeholder: "Value 2"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      className: "gf-form-input min-width-8 width-8",
      value: override.override,
      onChange: function onChange(e) {
        return onTextChange(e.target.value, "dataOverrides[" + index + "].override");
      },
      placeholder: "Override value"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn btn-success btn-small",
      style: {
        margin: '5px'
      },
      onClick: function onClick() {
        return addDataOverride();
      }
    }, "+"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "btn btn-danger btn-small",
      style: {
        margin: '5px'
      },
      onClick: function onClick() {
        return removeDataOverride(index);
      }
    }, "X")));
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)))));
};

/***/ }),

/***/ "./editors/TypeChooser.tsx":
/*!*********************************!*\
  !*** ./editors/TypeChooser.tsx ***!
  \*********************************/
/*! exports provided: TypeChooser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeChooser", function() { return TypeChooser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/types */ "../shared/types.ts");




var TypeChooser = function TypeChooser(_a) {
  var query = _a.query,
      onChange = _a.onChange,
      mode = _a.mode,
      instanceSettings = _a.instanceSettings;
  var defaultType = {
    value: 'json',
    label: 'JSON'
  };
  var defaultSource = {
    value: 'url',
    label: 'URL'
  };
  var defaultSourceSeries = {
    value: 'random-walk',
    label: 'Random Walk'
  };

  var onSelectChange = function onSelectChange(selectableItem, field) {
    if (field === 'type') {
      if (selectableItem.value === 'series') {
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(query, 'source', defaultSourceSeries.value);
      } else {
        Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(query, 'source', defaultSource.value);
      }
    }

    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["set"])(query, field, selectableItem.value);
    onChange(query);
  };

  var global_queries = instanceSettings && instanceSettings.jsonData && instanceSettings.jsonData.global_queries && instanceSettings.jsonData.global_queries.length > 0 ? instanceSettings.jsonData.global_queries : [];
  global_queries = global_queries.map(function (q) {
    return {
      label: q.name,
      value: q.id
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    className: "min-width-12 width-12",
    value: _shared_types__WEBPACK_IMPORTED_MODULE_3__["SCRAP_QUERY_TYPES"].find(function (field) {
      return field.value === query.type;
    }) || defaultType,
    options: mode === 'standard' ? _shared_types__WEBPACK_IMPORTED_MODULE_3__["SCRAP_QUERY_TYPES"] : _shared_types__WEBPACK_IMPORTED_MODULE_3__["SCRAP_QUERY_TYPES"].filter(function (a) {
      return a.value !== 'global';
    }),
    defaultValue: defaultType,
    onChange: function onChange(e) {
      return onSelectChange(e, 'type');
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-6"
  }, query.type === 'series' ? 'Scenario' : 'Source'), query.type === 'global' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, global_queries.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    options: global_queries,
    defaultValue: global_queries[0],
    value: global_queries.find(function (q) {
      return q.value === query.global_query_id;
    }) || global_queries[0],
    onChange: function onChange(e) {
      onSelectChange(e, 'global_query_id');
    }
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "gf-form-label width-8"
  }, "No Queries found")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    className: "min-width-12 width-12",
    value: _shared_types__WEBPACK_IMPORTED_MODULE_3__["SCRAP_QUERY_SOURCES"].find(function (field) {
      return field.value === query.source;
    }) || defaultSource,
    options: _shared_types__WEBPACK_IMPORTED_MODULE_3__["SCRAP_QUERY_SOURCES"].filter(function (field) {
      return field.supported_types.indexOf(query.type) > -1;
    }),
    defaultValue: defaultSource,
    onChange: function onChange(e) {
      return onSelectChange(e, 'source');
    }
  })));
};

/***/ }),

/***/ "./editors/URLOptions.tsx":
/*!********************************!*\
  !*** ./editors/URLOptions.tsx ***!
  \********************************/
/*! exports provided: URLOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLOptions", function() { return URLOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);




var URLOptions = function URLOptions(_a) {
  var query = _a.query,
      onChange = _a.onChange;

  var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false), 2),
      popupOpenStatus = _b[0],
      setPopupOpenStatus = _b[1];

  var URL_METHODS = [{
    label: 'GET',
    value: 'GET'
  }, {
    label: 'POST',
    value: 'POST'
  }];

  var onInputTextChange = function onInputTextChange(value, field) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(query, field, value);
    onChange(query);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, query.type === 'series' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    role: "button",
    title: "Expand for advanced query options like method, body, etc",
    className: "btn btn-secondary btn-medium width-2",
    onClick: function onClick(e) {
      return setPopupOpenStatus(true);
    },
    style: {
      padding: '10px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-expand fa-large btn btn-medium"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: 'Advanced Options',
    isOpen: popupOpenStatus,
    onDismiss: function onDismiss() {
      return setPopupOpenStatus(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form-inline"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "URL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "gf-form-input min-width-30",
    value: query.url,
    placeholder: "https://jsonplaceholder.typicode.com/todos",
    onChange: function onChange(e) {
      return onInputTextChange(e.target.value, "url");
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "Method"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    className: "width-8 min-width-8",
    value: URL_METHODS.find(function (e) {
      return e.value === (query.url_options.method || 'GET');
    }),
    defaultValue: URL_METHODS.find(function (e) {
      return e.value === 'GET';
    }),
    options: URL_METHODS,
    onChange: function onChange(e) {
      return onInputTextChange(e.value || 'GET', 'url_options.method');
    }
  })), query.url_options.method === 'POST' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gf-form"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "gf-form-label query-keyword width-8"
  }, "Body"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    rows: 8,
    className: "gf-form-input min-width-30",
    value: query.url_options.data,
    placeholder: "{\n                                                query : {\n                                                    # Write your query or mutation here\n                                                }\n                                            }",
    onChange: function onChange(e) {
      return onInputTextChange(e.target.value, "url_options.data");
    }
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null))))));
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony import */ var _config_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.editor */ "./config.editor.tsx");
/* harmony import */ var _query_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query.editor */ "./query.editor.tsx");
/* harmony import */ var _annotations_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotations.editor */ "./annotations.editor.tsx");





var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]).setConfigEditor(_config_editor__WEBPACK_IMPORTED_MODULE_2__["InfinityConfigEditor"]).setQueryEditor(_query_editor__WEBPACK_IMPORTED_MODULE_3__["QueryEditor"]).setAnnotationQueryCtrl(_annotations_editor__WEBPACK_IMPORTED_MODULE_4__["InfinityAnnotationCtrl"]);

/***/ }),

/***/ "./query.editor.tsx":
/*!**************************!*\
  !*** ./query.editor.tsx ***!
  \**************************/
/*! exports provided: InfinityQueryEditor, QueryEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfinityQueryEditor", function() { return InfinityQueryEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEditor", function() { return QueryEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editors_TypeChooser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editors/TypeChooser */ "./editors/TypeChooser.tsx");
/* harmony import */ var _editors_AdvancedOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editors/AdvancedOptions */ "./editors/AdvancedOptions.tsx");
/* harmony import */ var _editors_Scrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editors/Scrapper */ "./editors/Scrapper.tsx");
/* harmony import */ var _editors_Series__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editors/Series */ "./editors/Series.tsx");






var InfinityQueryEditor = function InfinityQueryEditor(_a) {
  var query = _a.query,
      onChange = _a.onChange,
      mode = _a.mode,
      instanceSettings = _a.instanceSettings;
  query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaultsDeep"])(query, {
    type: 'csv',
    source: 'inline',
    format: 'table',
    url: '',
    url_options: {
      method: 'GET',
      data: ''
    },
    data: '',
    root_selector: '',
    columns: []
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editors_TypeChooser__WEBPACK_IMPORTED_MODULE_2__["TypeChooser"], {
    onChange: onChange,
    query: query,
    mode: mode,
    instanceSettings: instanceSettings
  }), query.type === 'series' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editors_Series__WEBPACK_IMPORTED_MODULE_5__["SeriesEditor"], {
    onChange: onChange,
    query: query
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), ['csv', 'html', 'json', 'graphql'].indexOf(query.type) > -1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editors_Scrapper__WEBPACK_IMPORTED_MODULE_4__["Scrapper"], {
    onChange: onChange,
    query: query
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), query.type !== 'global' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editors_AdvancedOptions__WEBPACK_IMPORTED_MODULE_3__["AdvancedOptions"], {
    onChange: onChange,
    query: query
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null));
};
var QueryEditor = function QueryEditor(props) {
  var query = props.query,
      onChange = props.onChange;
  var default_global_query_id = '';

  if (props.datasource.instanceSettings.jsonData.global_queries && props.datasource.instanceSettings.jsonData.global_queries.length > 0) {
    default_global_query_id = props.datasource.instanceSettings.jsonData.global_queries[0].id;
  }

  query = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaultsDeep"])(query, {
    query_mode: 'standard',
    global_query_id: default_global_query_id
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfinityQueryEditor, {
    onChange: onChange,
    query: query,
    mode: "standard",
    instanceSettings: props.datasource.instanceSettings
  }));
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map
var pageComponent =
webpackJsonppageComponent([25],{

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _data_typeSoy = __webpack_require__(317);

var _data_typeSoy2 = _interopRequireDefault(_data_typeSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wQVRf = function (_Component) {
  _inherits(wQVRf, _Component);

  function wQVRf() {
    _classCallCheck(this, wQVRf);

    return _possibleConstructorReturn(this, (wQVRf.__proto__ || Object.getPrototypeOf(wQVRf)).apply(this, arguments));
  }

  return wQVRf;
}(_metalComponent2.default);

;

_metalSoy2.default.register(wQVRf, _data_typeSoy2.default);

exports.default = wQVRf;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.wQVRf = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from data_type.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace wQVRf.
   * @public
   */

  goog.module('wQVRf.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param503 = function param503() {
      ie_open('h6');
      var dyn35 = opt_data.page.description;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Data Types');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Usage');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Boolean');
      ie_close('td');
      ie_open('td');
      itext('G.BooleanType');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Integer');
      ie_close('td');
      ie_open('td');
      itext('G.IntegerType');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Long');
      ie_close('td');
      ie_open('td');
      itext('G.LongType');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('String');
      ie_close('td');
      ie_open('td');
      itext('G.StringType');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('List');
      ie_close('td');
      ie_open('td');
      itext('new G.ListType(G.DataType)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Object');
      ie_close('td');
      ie_open('td');
      itext('new G.ObjectType(String) / new G.ObjectType(String, String)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Reference');
      ie_close('td');
      ie_open('td');
      itext('new G.ReferenceType(String)');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Data Type Methods');
      ie_close('h2');
      ie_open('p');
      itext('All data types have the following methods:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('String getType()');
      ie_close('td');
      ie_open('td');
      itext('Get the type name');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('List Type Methods');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('G.DataType getElementType()');
      ie_close('td');
      ie_open('td');
      itext('Get element data type');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Object Type Methods');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('String getName()');
      ie_close('td');
      ie_open('td');
      itext('Get the name of the object type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('String getSObjectType()');
      ie_close('td');
      ie_open('td');
      itext('Get the bound SObject type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addField(String, DataType, Func, Boolean, String)');
      ie_close('td');
      ie_open('td');
      itext('Add field with name, type, resolver, resolver batch, and sobject type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addField(String, DataType, Func, Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Add field with name, type, resolver, resolver batch');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addField(String, DataType, Func)');
      ie_close('td');
      ie_open('td');
      itext('Add field with name, type, resolver');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addField(String, DataType, BatchResolver)');
      ie_close('td');
      ie_open('td');
      itext('Add field with name, type, resolver');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addField(String, DataType, Resolver)');
      ie_close('td');
      ie_open('td');
      itext('Add field with name, type, resolver');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addField(String, DataType, String)');
      ie_close('td');
      ie_open('td');
      itext('Add field with name, type, sobject type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addField(String, DataType)');
      ie_close('td');
      ie_open('td');
      itext('Add field with name, type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addParam(String, String, DataType, Func)');
      ie_close('td');
      ie_open('td');
      itext('Add a param with the field name, param name, type, validate func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType addParam(String, String, DataType)');
      ie_close('td');
      ie_open('td');
      itext('Add a param with the field name, param name, type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, String> getSObjectFieldMapping()');
      ie_close('td');
      ie_open('td');
      itext('Get the sobject field mapping');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Map<String, String> describe()');
      ie_close('td');
      ie_open('td');
      itext('Describe the object type');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Reference Type Methods');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('String getName()');
      ie_close('td');
      ie_open('td');
      itext('Get the name of the object type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ObjectType getReferencedType()');
      ie_close('td');
      ie_open('td');
      itext('Get the referenced object type');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param503 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'wQVRf.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var wQVRf = function (_Component) {
  _inherits(wQVRf, _Component);

  function wQVRf() {
    _classCallCheck(this, wQVRf);

    return _possibleConstructorReturn(this, (wQVRf.__proto__ || Object.getPrototypeOf(wQVRf)).apply(this, arguments));
  }

  return wQVRf;
}(_metalComponent2.default);

_metalSoy2.default.register(wQVRf, templates);
exports.wQVRf = wQVRf;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[316]);
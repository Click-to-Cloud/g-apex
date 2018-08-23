var pageComponent =
webpackJsonppageComponent([6],{

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

var _step_4Soy = __webpack_require__(317);

var _step_4Soy2 = _interopRequireDefault(_step_4Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tHHei = function (_Component) {
  _inherits(tHHei, _Component);

  function tHHei() {
    _classCallCheck(this, tHHei);

    return _possibleConstructorReturn(this, (tHHei.__proto__ || Object.getPrototypeOf(tHHei)).apply(this, arguments));
  }

  return tHHei;
}(_metalComponent2.default);

;

_metalSoy2.default.register(tHHei, _step_4Soy2.default);

exports.default = tHHei;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.tHHei = undefined;

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

  // This file was automatically generated from step_4.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace tHHei.
   * @public
   */

  goog.module('tHHei.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param758 = function param758() {
      ie_open('h2');
      var dyn50 = opt_data.page.title;
      if (typeof dyn50 == 'function') dyn50();else if (dyn50 != null) itext(dyn50);
      ie_close('h2');
      ie_open('p');
      itext('G.apex uses a different query syntax from GraphQL. It uses JSON format like this:');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "@id": "2",\n            "name": ""\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('This is somehow equivalent to the true GraphQL below:');
      ie_close('p');
      $templateAlias2({ code: '{\n    book(id: 2) {\n        name\n    }\n}', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('This query will yield results like this:');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "name": "Second Book"\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('For those who are not familiar with GraphQL, the code above means that we want to query the book with ');
      ie_open('code');
      itext('id');
      ie_close('code');
      itext(' equals to 2, retrieving the ');
      ie_open('code');
      itext('name');
      ie_close('code');
      itext(' of the book.');
      ie_close('p');
      ie_open('p');
      itext('We use JSON to define the query language primarily because we want to avoid unnecessary use of compute in Apex considering the governor limits.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param758 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'tHHei.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var tHHei = function (_Component) {
  _inherits(tHHei, _Component);

  function tHHei() {
    _classCallCheck(this, tHHei);

    return _possibleConstructorReturn(this, (tHHei.__proto__ || Object.getPrototypeOf(tHHei)).apply(this, arguments));
  }

  return tHHei;
}(_metalComponent2.default);

_metalSoy2.default.register(tHHei, templates);
exports.tHHei = tHHei;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[316]);
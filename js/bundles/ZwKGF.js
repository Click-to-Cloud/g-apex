var pageComponent =
webpackJsonppageComponent([9],{

/***/ 310:
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

var _step_15Soy = __webpack_require__(311);

var _step_15Soy2 = _interopRequireDefault(_step_15Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZwKGF = function (_Component) {
  _inherits(ZwKGF, _Component);

  function ZwKGF() {
    _classCallCheck(this, ZwKGF);

    return _possibleConstructorReturn(this, (ZwKGF.__proto__ || Object.getPrototypeOf(ZwKGF)).apply(this, arguments));
  }

  return ZwKGF;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ZwKGF, _step_15Soy2.default);

exports.default = ZwKGF;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ZwKGF = undefined;

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

  // This file was automatically generated from step_15.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ZwKGF.
   * @public
   */

  goog.module('ZwKGF.incrementaldom');

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
    var param710 = function param710() {
      ie_open('h2');
      var dyn47 = opt_data.page.title;
      if (typeof dyn47 == 'function') dyn47();else if (dyn47 != null) itext(dyn47);
      ie_close('h2');
      ie_open('p');
      itext('We can control the behavior of the G.apex query by applying directives.');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "#include": {\n                "if": "$showBook"\n            },\n            "@id": "2",\n            "name": ""\n        }\n    },\n    "$showBook": "false"\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('Here ');
      ie_open('code');
      itext('#include');
      ie_close('code');
      itext(' is a directive, which will include fields of ');
      ie_open('code');
      itext('book');
      ie_close('code');
      itext(' only when ');
      ie_open('code');
      itext('if');
      ie_close('code');
      itext(' is true. As we are in JSON, we have to quote variables with double quotes. But it does not matter as G.apex will still correctly parse its value according to the data type we have specified.');
      ie_close('p');
      ie_open('p');
      itext('Directives in G.apex start with ');
      ie_open('code');
      itext('#');
      ie_close('code');
      itext('. We can also define custom directives in G.apex.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param710 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ZwKGF.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ZwKGF = function (_Component) {
  _inherits(ZwKGF, _Component);

  function ZwKGF() {
    _classCallCheck(this, ZwKGF);

    return _possibleConstructorReturn(this, (ZwKGF.__proto__ || Object.getPrototypeOf(ZwKGF)).apply(this, arguments));
  }

  return ZwKGF;
}(_metalComponent2.default);

_metalSoy2.default.register(ZwKGF, templates);
exports.ZwKGF = ZwKGF;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[310]);
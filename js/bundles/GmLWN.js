var pageComponent =
webpackJsonppageComponent([12],{

/***/ 304:
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

var _step_12Soy = __webpack_require__(305);

var _step_12Soy2 = _interopRequireDefault(_step_12Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GmLWN = function (_Component) {
  _inherits(GmLWN, _Component);

  function GmLWN() {
    _classCallCheck(this, GmLWN);

    return _possibleConstructorReturn(this, (GmLWN.__proto__ || Object.getPrototypeOf(GmLWN)).apply(this, arguments));
  }

  return GmLWN;
}(_metalComponent2.default);

;

_metalSoy2.default.register(GmLWN, _step_12Soy2.default);

exports.default = GmLWN;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.GmLWN = undefined;

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

  // This file was automatically generated from step_12.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace GmLWN.
   * @public
   */

  goog.module('GmLWN.incrementaldom');

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
    var param652 = function param652() {
      ie_open('h2');
      var dyn44 = opt_data.page.title;
      if (typeof dyn44 == 'function') dyn44();else if (dyn44 != null) itext(dyn44);
      ie_close('h2');
      ie_open('p');
      itext('We can specify aliases in our G.apex query, so that the query result can be tailored to our needs.');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "my_book:book": {\n            "@id": "2",\n            "name": ""\n        },\n        "her_book:book": {\n            "@id": "3",\n            "name": ""\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('The result will look like:');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "her_book": {\n            "name": "Third Book"\n        },\n        "my_book": {\n            "name": "Second Book"\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('Here we use ');
      ie_open('code');
      itext(':');
      ie_close('code');
      itext(' to separate the alias and the field name.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param652 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'GmLWN.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var GmLWN = function (_Component) {
  _inherits(GmLWN, _Component);

  function GmLWN() {
    _classCallCheck(this, GmLWN);

    return _possibleConstructorReturn(this, (GmLWN.__proto__ || Object.getPrototypeOf(GmLWN)).apply(this, arguments));
  }

  return GmLWN;
}(_metalComponent2.default);

_metalSoy2.default.register(GmLWN, templates);
exports.GmLWN = GmLWN;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[304]);
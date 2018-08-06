var pageComponent =
webpackJsonppageComponent([31],{

/***/ 274:
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

var _directiveSoy = __webpack_require__(275);

var _directiveSoy2 = _interopRequireDefault(_directiveSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UXsZx = function (_Component) {
  _inherits(UXsZx, _Component);

  function UXsZx() {
    _classCallCheck(this, UXsZx);

    return _possibleConstructorReturn(this, (UXsZx.__proto__ || Object.getPrototypeOf(UXsZx)).apply(this, arguments));
  }

  return UXsZx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(UXsZx, _directiveSoy2.default);

exports.default = UXsZx;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.UXsZx = undefined;

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

  // This file was automatically generated from directive.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace UXsZx.
   * @public
   */

  goog.module('UXsZx.incrementaldom');

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
    var param352 = function param352() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Use Directives');
      ie_close('h2');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "#include": {\n                "if": "$showBook"\n            },\n            "@id": "2",\n            "name": ""\n        }\n    },\n    "$showBook": "false"\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('We use the directives by prepending ');
      ie_open('code');
      itext('#');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The available directives are:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('include');
      ie_close('td');
      ie_open('td');
      itext('used with param \'if\' to control if the object type is included');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('skip');
      ie_close('td');
      ie_open('td');
      itext('used with param \'if\' to control if the object type is skipped');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Custom Directives');
      ie_close('h2');
      ie_open('p');
      itext('We can define custom directives.');
      ie_close('p');
      $templateAlias2({ code: 'private class CustomDirective implements Directive {\n    public String getName() {\n        return \'custom\';\n    }\n\n    public Boolean beforeExecuting(Map<String, Object> args, DirectiveContext context) {\n        // ...\n        return true;\n    }\n}\n\nG.registerDirective(new CustomDirective());', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param352 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'UXsZx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var UXsZx = function (_Component) {
  _inherits(UXsZx, _Component);

  function UXsZx() {
    _classCallCheck(this, UXsZx);

    return _possibleConstructorReturn(this, (UXsZx.__proto__ || Object.getPrototypeOf(UXsZx)).apply(this, arguments));
  }

  return UXsZx;
}(_metalComponent2.default);

_metalSoy2.default.register(UXsZx, templates);
exports.UXsZx = UXsZx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);
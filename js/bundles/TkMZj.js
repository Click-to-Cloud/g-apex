var pageComponent =
webpackJsonppageComponent([7],{

/***/ 314:
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

var _step_3Soy = __webpack_require__(315);

var _step_3Soy2 = _interopRequireDefault(_step_3Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TkMZj = function (_Component) {
  _inherits(TkMZj, _Component);

  function TkMZj() {
    _classCallCheck(this, TkMZj);

    return _possibleConstructorReturn(this, (TkMZj.__proto__ || Object.getPrototypeOf(TkMZj)).apply(this, arguments));
  }

  return TkMZj;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TkMZj, _step_3Soy2.default);

exports.default = TkMZj;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TkMZj = undefined;

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

  // This file was automatically generated from step_3.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TkMZj.
   * @public
   */

  goog.module('TkMZj.incrementaldom');

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
    var param747 = function param747() {
      ie_open('h2');
      var dyn49 = opt_data.page.title;
      if (typeof dyn49 == 'function') dyn49();else if (dyn49 != null) itext(dyn49);
      ie_close('h2');
      ie_open('p');
      itext('G.apex provides a Lightning component for you to explore the features of G.apex.');
      ie_close('p');
      ie_open('p');
      itext('To use this component after installing G.apex, simply create a Lightning tab and select c:G_apex_demo in the dropdown list. Then visit the tab link in your org.');
      ie_close('p');
      ie_open('p');
      itext('The top part of the component is the Query Editor, where you can edit your G.apex query and execute them against a small set of data.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', 'https://raw.githubusercontent.com/Click-to-Cloud/G.apex/master/images/query_small.png', 'alt', 'Query Editor', 'title', 'Query Editor');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('The bottom part of the component is the Schema Explorer, which exposes all the object types defined in your root schema. Click on the link to jump to the details of the object type.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', 'https://raw.githubusercontent.com/Click-to-Cloud/G.apex/master/images/schema_small.png', 'alt', 'Schema Explorer', 'title', 'Schema Explorer');
      ie_close('img');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param747 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TkMZj.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TkMZj = function (_Component) {
  _inherits(TkMZj, _Component);

  function TkMZj() {
    _classCallCheck(this, TkMZj);

    return _possibleConstructorReturn(this, (TkMZj.__proto__ || Object.getPrototypeOf(TkMZj)).apply(this, arguments));
  }

  return TkMZj;
}(_metalComponent2.default);

_metalSoy2.default.register(TkMZj, templates);
exports.TkMZj = TkMZj;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[314]);
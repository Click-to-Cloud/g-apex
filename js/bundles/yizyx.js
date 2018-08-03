var pageComponent =
webpackJsonppageComponent([4],{

/***/ 292:
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

var _step_6Soy = __webpack_require__(293);

var _step_6Soy2 = _interopRequireDefault(_step_6Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yizyx = function (_Component) {
  _inherits(yizyx, _Component);

  function yizyx() {
    _classCallCheck(this, yizyx);

    return _possibleConstructorReturn(this, (yizyx.__proto__ || Object.getPrototypeOf(yizyx)).apply(this, arguments));
  }

  return yizyx;
}(_metalComponent2.default);

;

_metalSoy2.default.register(yizyx, _step_6Soy2.default);

exports.default = yizyx;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.yizyx = undefined;

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

  // This file was automatically generated from step_6.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace yizyx.
   * @public
   */

  goog.module('yizyx.incrementaldom');

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
    var param800 = function param800() {
      ie_open('h2');
      var dyn52 = opt_data.page.title;
      if (typeof dyn52 == 'function') dyn52();else if (dyn52 != null) itext(dyn52);
      ie_close('h2');
      ie_open('p');
      itext('We need to define access points on our schema so that our data is accessible.');
      ie_close('p');
      $templateAlias2({ code: 'G.Schema schema = new G.Schema()\n    .add(\n        new G.ObjectType(\'query\')\n            .addField(\'books\', new G.ListType(bookType), R.constant.apply(new List<Object>{ books }))\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we defined a new ObjectType ');
      ie_open('code');
      itext('query');
      ie_close('code');
      itext(', with the field ');
      ie_open('code');
      itext('books');
      ie_close('code');
      itext(' that can retrive a list of books. Then we add this object type to the schema. ');
      ie_open('code');
      itext('R.constant.apply(...)');
      ie_close('code');
      itext(' here is a resolver Func that always returns the list of list of books whenever called. A resolver can be implemented by either a Func or an instance of ');
      ie_open('code');
      itext('BatchResolver');
      ie_close('code');
      itext(' or ');
      ie_open('code');
      itext('Resolver');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('You might feel strange why we return a list of list of books. The reason is that by default our resolver function is invoked by batch to improve performance. We will see this later.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param800 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'yizyx.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var yizyx = function (_Component) {
  _inherits(yizyx, _Component);

  function yizyx() {
    _classCallCheck(this, yizyx);

    return _possibleConstructorReturn(this, (yizyx.__proto__ || Object.getPrototypeOf(yizyx)).apply(this, arguments));
  }

  return yizyx;
}(_metalComponent2.default);

_metalSoy2.default.register(yizyx, templates);
exports.yizyx = yizyx;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[292]);
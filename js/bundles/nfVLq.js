var pageComponent =
webpackJsonppageComponent([1],{

/***/ 326:
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

var _step_9Soy = __webpack_require__(327);

var _step_9Soy2 = _interopRequireDefault(_step_9Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var nfVLq = function (_Component) {
  _inherits(nfVLq, _Component);

  function nfVLq() {
    _classCallCheck(this, nfVLq);

    return _possibleConstructorReturn(this, (nfVLq.__proto__ || Object.getPrototypeOf(nfVLq)).apply(this, arguments));
  }

  return nfVLq;
}(_metalComponent2.default);

;

_metalSoy2.default.register(nfVLq, _step_9Soy2.default);

exports.default = nfVLq;

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.nfVLq = undefined;

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

  // This file was automatically generated from step_9.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace nfVLq.
   * @public
   */

  goog.module('nfVLq.incrementaldom');

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
    var param863 = function param863() {
      ie_open('h2');
      var dyn55 = opt_data.page.title;
      if (typeof dyn55 == 'function') dyn55();else if (dyn55 != null) itext(dyn55);
      ie_close('h2');
      ie_open('p');
      itext('G.apex treats query and mutation similarly. We can define our mutation operations in the schema, and process the requests in the resolving functions.');
      ie_close('p');
      $templateAlias2({ code: 'G.Schema schema = new G.Schema()\n    .add(\n        new G.ObjectType(\'mutation\')\n            .addField(\'addBook\', bookType, new AddBookResolver())\n                .addParam(\'addBook\', \'name\', G.StringType, R.isNotNull)\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We add a parameter definition ');
      ie_open('code');
      itext('name');
      ie_close('code');
      itext(' of String type to the field ');
      ie_open('code');
      itext('addBook');
      ie_close('code');
      itext('. Also this parameter has a validation of not-null specified by the ');
      ie_open('code');
      itext('R.isNotNull');
      ie_close('code');
      itext(' Func.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param863 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'nfVLq.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var nfVLq = function (_Component) {
  _inherits(nfVLq, _Component);

  function nfVLq() {
    _classCallCheck(this, nfVLq);

    return _possibleConstructorReturn(this, (nfVLq.__proto__ || Object.getPrototypeOf(nfVLq)).apply(this, arguments));
  }

  return nfVLq;
}(_metalComponent2.default);

_metalSoy2.default.register(nfVLq, templates);
exports.nfVLq = nfVLq;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[326]);
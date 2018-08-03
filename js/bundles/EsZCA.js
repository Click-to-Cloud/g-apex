var pageComponent =
webpackJsonppageComponent([26],{

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

var _indexSoy = __webpack_require__(315);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EsZCA = function (_Component) {
  _inherits(EsZCA, _Component);

  function EsZCA() {
    _classCallCheck(this, EsZCA);

    return _possibleConstructorReturn(this, (EsZCA.__proto__ || Object.getPrototypeOf(EsZCA)).apply(this, arguments));
  }

  return EsZCA;
}(_metalComponent2.default);

;

_metalSoy2.default.register(EsZCA, _indexSoy2.default);

exports.default = EsZCA;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.EsZCA = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace EsZCA.
   * @public
   */

  goog.module('EsZCA.incrementaldom');

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
    var param492 = function param492() {
      ie_open('h6');
      var dyn34 = opt_data.page.description;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Query Editor');
      ie_close('h2');
      ie_open('p');
      itext('We can use the Query Editor after we have installed the ');
      ie_open('code');
      itext('GDemo');
      ie_close('code');
      itext(' lightning component.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', 'https://raw.githubusercontent.com/Click-to-Cloud/G.apex/master/images/query_small.png', 'alt', 'Query Editor', 'title', 'Query Editor');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('Compose G.apex query in the textarea and click on the \'Execute\' button to execute the query.');
      ie_close('p');
      ie_open('p');
      itext('The result will be shown in the panel below.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Schema Explorer');
      ie_close('h2');
      ie_open('p');
      itext('We can use Schema Explorer to check out all the Data Types.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'src', 'https://raw.githubusercontent.com/Click-to-Cloud/G.apex/master/images/schema_small.png', 'alt', 'Schema Explorer', 'title', 'Schema Explorer');
      ie_close('img');
      ie_close('p');
      ie_open('p');
      itext('Click on the links to check the details of the Data Type.');
      ie_close('p');
      ie_open('p');
      itext('Click on the title to go back to the root of the schema.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param492 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'EsZCA.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var EsZCA = function (_Component) {
  _inherits(EsZCA, _Component);

  function EsZCA() {
    _classCallCheck(this, EsZCA);

    return _possibleConstructorReturn(this, (EsZCA.__proto__ || Object.getPrototypeOf(EsZCA)).apply(this, arguments));
  }

  return EsZCA;
}(_metalComponent2.default);

_metalSoy2.default.register(EsZCA, templates);
exports.EsZCA = EsZCA;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[314]);
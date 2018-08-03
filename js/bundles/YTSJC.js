var pageComponent =
webpackJsonppageComponent([3],{

/***/ 322:
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

var _step_7Soy = __webpack_require__(323);

var _step_7Soy2 = _interopRequireDefault(_step_7Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YTSJC = function (_Component) {
  _inherits(YTSJC, _Component);

  function YTSJC() {
    _classCallCheck(this, YTSJC);

    return _possibleConstructorReturn(this, (YTSJC.__proto__ || Object.getPrototypeOf(YTSJC)).apply(this, arguments));
  }

  return YTSJC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(YTSJC, _step_7Soy2.default);

exports.default = YTSJC;

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.YTSJC = undefined;

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

  // This file was automatically generated from step_7.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace YTSJC.
   * @public
   */

  goog.module('YTSJC.incrementaldom');

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
    var param816 = function param816() {
      ie_open('h2');
      var dyn53 = opt_data.page.title;
      if (typeof dyn53 == 'function') dyn53();else if (dyn53 != null) itext(dyn53);
      ie_close('h2');
      ie_open('p');
      itext('In G.apex, we fetch information based on each nodes. When it comes to the relationship between different nodes, we use resolver functions to handle.');
      ie_close('p');
      ie_open('p');
      itext('Consider the query below:');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "@id": "2",\n            "name": "",\n            "author": {\n                 "name": ""\n             }\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('We want to further get the author information related to the book. In this case, we define our book type as below.');
      ie_close('p');
      $templateAlias2({ code: 'G.ObjectType bookType = new G.ObjectType(\'Book\', \'Book__c\')\n    .addField(\'id\', G.StringType, \'Id\')\n    .addField(\'name\', G.StringType, \'Name\')\n    .addField(\'author\', new G.ReferenceType(\'Author\'), new BookAuthorResolver());', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('BookAuthorResolver');
      ie_close('code');
      itext(' is provided to ');
      ie_open('code');
      itext('author');
      ie_close('code');
      itext(' field, so that whenever the relationship is required, the resolver function will be invoked.');
      ie_close('p');
      ie_open('p');
      itext('Here is what ');
      ie_open('code');
      itext('BookAuthorResolver');
      ie_close('code');
      itext(' looks like:');
      ie_close('p');
      $templateAlias2({ code: 'private class BookAuthorResolver implements G.Resolver {\n    public Object resolve(Map<String, Object> parent, Map<String, Object> args, G.ResolvingContext context) {\n        return R.of(authors).find(R.propEq.apply(\'id\', parent.get(\'authorId\'))).toMap();\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the resolver, we find the author that matches the ');
      ie_open('code');
      itext('authorId');
      ie_close('code');
      itext(' of the book from the list of authors.');
      ie_close('p');
      ie_open('p');
      itext('Notice here that we are using a resolver that does not take a batch. If we want to use a batch resolver, we do it like this:');
      ie_close('p');
      $templateAlias2({ code: 'private class AuthorBooksResolver implements G.BatchResolver {\n    public List<Object> resolve(List<Object> parents, Map<String, Object> args, G.ResolvingContext context) {\n        List<Object> result = new List<Object>();\n\n        for(Object parentObj : parents) {\n            Map<String, Object> parent = (Map<String, Object>)parentObj;\n            List<Object> found = R.of(books).filter(R.propEq.apply(\'authorId\', parent.get(\'id\'))).toList();\n            result.add(found);\n        }\n\n        return result;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this resolver, we get the list of books related to the author based on the passed in list of parents.');
      ie_close('p');
      ie_open('p');
      itext('Basically batch resolvers should be used if there is such operation like doing DML operations or querying or making http requests.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param816 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'YTSJC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var YTSJC = function (_Component) {
  _inherits(YTSJC, _Component);

  function YTSJC() {
    _classCallCheck(this, YTSJC);

    return _possibleConstructorReturn(this, (YTSJC.__proto__ || Object.getPrototypeOf(YTSJC)).apply(this, arguments));
  }

  return YTSJC;
}(_metalComponent2.default);

_metalSoy2.default.register(YTSJC, templates);
exports.YTSJC = YTSJC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[322]);
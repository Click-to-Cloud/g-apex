var pageComponent =
webpackJsonppageComponent([29],{

/***/ 278:
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

var _indexSoy = __webpack_require__(279);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XwrMM = function (_Component) {
  _inherits(XwrMM, _Component);

  function XwrMM() {
    _classCallCheck(this, XwrMM);

    return _possibleConstructorReturn(this, (XwrMM.__proto__ || Object.getPrototypeOf(XwrMM)).apply(this, arguments));
  }

  return XwrMM;
}(_metalComponent2.default);

;

_metalSoy2.default.register(XwrMM, _indexSoy2.default);

exports.default = XwrMM;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.XwrMM = undefined;

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
   * @fileoverview Templates in namespace XwrMM.
   * @public
   */

  goog.module('XwrMM.incrementaldom');

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
    var param394 = function param394() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is G.apex?');
      ie_close('h2');
      ie_open('p');
      itext('G.apex is a library that helps you adopt GraphQL features in Apex.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('What is G.apex Query?');
      ie_close('h2');
      ie_open('p');
      itext('G.apex Query is a JSON query that very much resembles GraphQL queries.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Is G.apex compatible with GraphQL?');
      ie_close('h2');
      ie_open('p');
      itext('Sadly no. G.apex adopts similar concepts from GraphQL, but is tuned for Salesforce Apex and is therefore not compatible with GraphQL specification.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Why G.apex Query?');
      ie_close('h2');
      ie_open('p');
      itext('Influenced by GraphQL, G.apex query can help you build flexible service end points.');
      ie_close('p');
      ie_open('p');
      itext('For example, normal RESTful end point like below can get you a book:');
      ie_close('p');
      $templateAlias2({ code: 'https://<DOMAIN>/api/v2/book/{id}', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('However, you have to code every single end point like this, and they are just not as flexible and composable.');
      ie_close('p');
      ie_open('p');
      itext('Say what if I want to get some extra fields of the book? what if I also want to get the related author of the book?');
      ie_close('p');
      ie_open('p');
      itext('G.apex can help you build a more flexible and composable end point like this:');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "@id": "2",\n            "name": ""\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('You can control the fields of the result by adding or removing extra fields. Or you can get the related author easily like this:');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "@id": "2",\n            "name": "",\n            "author": {\n                "name": ""\n             }\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_open('p');
      itext('And you can nest as you like:');
      ie_close('p');
      $templateAlias2({ code: '{\n    "query": {\n        "book": {\n            "@id": "2",\n            "name": "",\n            "author": {\n                "name": "",\n                "books": {\n                    "name": ""\n                }\n             }\n        }\n    }\n}', mode: 'JSON' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Core G.apex Concepts');
      ie_close('h2');
      ie_open('p');
      itext('Below are the most important concepts in G.apex.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Schema');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('A schema is the whole collection of the DataTypes defined. There is usually only one instance of Schema, registered globally to G.apex. The schema defines the graph.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Data Type');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Various data types construct the query system. Simple data types can help build the basic data, while more complicated object types are used everywhere to define objects. Object types are more important in that they offer the main functionality to encapsulate the data and relate with each other. Object types are just like the vertexes in the graph.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Resolving');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Resolving is the process when an object type tries to find its related object types. Basically, object types are supposed to be self-independent and should not concern other object type data. Only when a relationship is required do the object types start resolving the related object types. The resolving function provides the ability to navigate between vertexes in the graph.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Example');
      ie_close('h2');
      ie_open('p');
      itext('Here is an example of the schema and object types:');
      ie_close('p');
      $templateAlias2({ code: 'private static G.ObjectType bookType = new G.ObjectType(\'Book\', \'Book__c\')\n    .addField(\'id\', G.StringType, \'Id\')\n    .addField(\'name\', G.StringType, \'Name\')\n    .addField(\'author\', new G.ReferenceType(\'Author\'), new BookAuthorResolver());\n\nprivate static G.ObjectType authorType = new G.ObjectType(\'Author\')\n    .addField(\'id\', G.StringType)\n    .addField(\'name\', G.StringType)\n    .addField(\'books\', new G.ListType(new G.ReferenceType(\'Book\')), new AuthorBooksResolver());\n\nprivate static G.Schema schema = new G.Schema()\n    .add(\n        new G.ObjectType(\'query\')\n            .addField(\'books\', new G.ListType(bookType), R.constant.apply(new List<Object>{ books }))\n            .addField(\'book\', bookType, new GetBookResolver())\n                .addParam(\'book\', \'id\', G.StringType, R.isNotNull)\n            .addField(\'authors\', new G.ListType(authorType), R.constant.apply(new List<Object>{ authors }))\n            .addField(\'author\', authorType, new GetAuthorResolver())\n                .addParam(\'author\', \'id\', G.StringType, R.isNotNull)\n    );\n\nprivate class BookAuthorResolver implements G.Resolver {\n    public Object resolve(Map<String, Object> parent, Map<String, Object> args, G.ResolvingContext context) {\n        return R.of(authors).find(R.propEq.apply(\'id\', parent.get(\'authorId\'))).toMap();\n    }\n}\n\nprivate class AuthorBooksResolver implements G.BatchResolver {\n    public List<Object> resolve(List<Object> parents, Map<String, Object> args, G.ResolvingContext context) {\n        List<Object> result = new List<Object>();\n\n        for(Object parentObj : parents) {\n            Map<String, Object> parent = (Map<String, Object>)parentObj;\n            List<Object> found = R.of(books).filter(R.propEq.apply(\'authorId\', parent.get(\'id\'))).toList();\n            result.add(found);\n        }\n\n        return result;\n    }\n}\n\nprivate class GetAuthorResolver implements G.Resolver {\n    public Object resolve(Map<String, Object> parent, Map<String, Object> args, G.ResolvingContext context) {\n        return R.of(authors).find(R.propEq.apply(\'id\', args.get(\'id\'))).toMap();\n    }\n}\n\nprivate class GetBookResolver implements G.Resolver {\n    public Object resolve(Map<String, Object> parent, Map<String, Object> args, G.ResolvingContext context) {\n        return R.of(books).find(R.propEq.apply(\'id\', args.get(\'id\'))).toMap();\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Resolvers');
      ie_close('h2');
      ie_open('p');
      itext('Resolvers are the complex part in G.apex. We have two types of resolvers.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Normal resolvers');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Normal resolvers take the resolving request one by one.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Batch resolvers');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Batch resolvers take all the resolving requests in a batch.');
      ie_close('p');
      ie_open('p');
      itext('For performance\'s sake, we should use batch resolvers whenever we can.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('Normal Resolvers');
      ie_close('h2');
      ie_open('p');
      itext('We can create a normal resolver by implementing ');
      ie_open('code');
      itext('G.Resolver');
      ie_close('code');
      itext(' like in the example.');
      ie_close('p');
      ie_open('p');
      itext('Or we can create a Func that takes the same arguments, and register it like this:');
      ie_close('p');
      $templateAlias2({ code: 'G.ObjectType bookType = new G.ObjectType(\'Book\', \'Book__c\')\n    .addField(\'id\', G.StringType, \'Id\')\n    .addField(\'name\', G.StringType, \'Name\')\n    .addField(\'author\', new G.ReferenceType(\'Author\'), new NormalResolverFunc(), false);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('Batch Resolvers');
      ie_close('h2');
      ie_open('p');
      itext('We can create a batch resolver by implementing ');
      ie_open('code');
      itext('G.BatchResolver');
      ie_close('code');
      itext(' like in the example.');
      ie_close('p');
      ie_open('p');
      itext('Or we can create a Func that takes the same arguments, and register it like this:');
      ie_close('p');
      $templateAlias2({ code: 'G.ObjectType bookType = new G.ObjectType(\'Book\', \'Book__c\')\n    .addField(\'id\', G.StringType, \'Id\')\n    .addField(\'name\', G.StringType, \'Name\')\n    .addField(\'author\', new G.ReferenceType(\'Author\'), new BatchResolverFunc(), true);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('Resolving SObjects');
      ie_close('h2');
      ie_open('p');
      itext('G.apex is especially tuned for handling SObjects.');
      ie_close('p');
      ie_open('p');
      itext('Here is an example of how to resolve SObjects.');
      ie_close('p');
      $templateAlias2({ code: 'private class OpportunityResolver implements G.BatchResolver {\n    public List<Object> resolve(List<Object> parents, Map<String, Object> args, G.ResolvingContext context) {\n        List<Object> result = new List<Object>();\n\n        List<Id> ids = new List<Id>();\n        for(Object parentObj : parents) {\n            Map<String, Object> parent = (Map<String, Object>)parentObj;\n            ids.add((Id)parent.get(\'id\'));\n        }\n\n        String sObjectType = context.getSObjectType();\n        List<String> fields = context.getSObjectFields();\n\n        String soql = \'SELECT \' + String.join(fields, \', \') + \' FROM \' + sObjectType + \' WHERE Id in :ids\';\n        List<SObject> soList = Database.query(soql);\n        for(SObject so : soList) {\n            result.add(context.convertSObject(so));\n        }\n\n        return result;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('Pull the Trigger');
      ie_close('h2');
      ie_open('p');
      itext('When everything is ready, we can start executing G.apex queries with ease.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> result = (Map<String, Object>)G.execute(query);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('You can further build this as a remote action or a lightning server controller action or a web service end point.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param394 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'XwrMM.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var XwrMM = function (_Component) {
  _inherits(XwrMM, _Component);

  function XwrMM() {
    _classCallCheck(this, XwrMM);

    return _possibleConstructorReturn(this, (XwrMM.__proto__ || Object.getPrototypeOf(XwrMM)).apply(this, arguments));
  }

  return XwrMM;
}(_metalComponent2.default);

_metalSoy2.default.register(XwrMM, templates);
exports.XwrMM = XwrMM;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);
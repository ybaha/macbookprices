_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cuser%5CDesktop%5Cmacbookprices%5Cclient%5Cpages%5Cindex.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cuser%5CDesktop%5Cmacbookprices%5Cclient%5Cpages%5Cindex.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Home.module.css":
/*!********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/Home.module.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Home_container__1EcsU {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.Home_card__2SdtB {\n  background: #484848;\n  color: #fff;\n}\n\n.Home_topCont__2FPMv {\n  min-height: 340px;\n  width: 1017px;\n  margin: 30px 0;\n  background: #484848;\n  color: #fff;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Home_midCont__24StK {\n  margin-top: 20px;\n  min-height: 60px;\n  width: 1017px;\n  margin-bottom: 10px;\n  background: #484848;\n  color: #fff;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://styles/Home.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[".container {\n  min-height: 100vh;\n  padding: 0 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card {\n  background: #484848;\n  color: #fff;\n}\n\n.topCont {\n  min-height: 340px;\n  width: 1017px;\n  margin: 30px 0;\n  background: #484848;\n  color: #fff;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.midCont {\n  margin-top: 20px;\n  min-height: 60px;\n  width: 1017px;\n  margin-bottom: 10px;\n  background: #484848;\n  color: #fff;\n  border-radius: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Home_container__1EcsU",
	"card": "Home_card__2SdtB",
	"topCont": "Home_topCont__2FPMv",
	"midCont": "Home_midCont__24StK"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/table.module.css":
/*!*********************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/table.module.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".table_rtable__2U6An {\r\n  border-collapse: collapse;\r\n  background: #484848;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.table_td__3j4qj {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.table_th__1AUlt {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.table_tr__1qjyr td {\r\n  border-bottom: 1px solid #646464;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/table.module.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,gCAAgC;AAClC","sourcesContent":[".rtable {\r\n  border-collapse: collapse;\r\n  background: #484848;\r\n  color: #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.td {\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.th {\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.tr td {\r\n  border-bottom: 1px solid #646464;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"rtable": "table_rtable__2U6An",
	"td": "table_td__3j4qj",
	"th": "table_th__1AUlt",
	"tr": "table_tr__1qjyr"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/webpack/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ (function(module) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(931);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  undefined;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultRenderer = function defaultRenderer(_ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
    return value;
  };
  var emptyRenderer = function emptyRenderer() {
    return React.createElement(React.Fragment, null, "\xA0");
  };
  var defaultColumn = {
    Cell: defaultRenderer,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: emptyRenderer,
      Footer: emptyRenderer
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    Object.assign(column, {
      originalWidth: column.width
    });
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
    if (additionalHeaderProperties === void 0) {
      additionalHeaderProperties = function additionalHeaderProperties() {
        return {};
      };
    }

    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            }, additionalHeaderProperties(column));
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn(_extends({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, additionalHeaderProperties(column)), defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row, addToExpandedRows) {
      if (addToExpandedRows === void 0) {
        addToExpandedRows = true;
      }

      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;

      if (addToExpandedRows) {
        expandedRows.push(row);
      }

      if (row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(function (row) {
          return handleRow(row, expandSubRows);
        });
      }
    };

    rows.forEach(function (row) {
      return handleRow(row);
    });
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var isAllRowsExpanded = instance.isAllRowsExpanded,
          rowsById = instance.rowsById;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = values[0] || 0;
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var mid = Math.floor(values.length / 2);
    var nums = [].concat(values).sort(function (a, b) {
      return a - b;
    });
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.setGroupBy = 'setGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.setGroupBy) {
      var value = action.value;
      return _extends({}, state, {
        groupBy: value
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setGroupBy = React.useCallback(function (value) {
      dispatch({
        type: actions.setGroupBy,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Aggregate the values


          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            // Get the columnValues to aggregate
            var groupedValues = groupedRows.map(function (row) {
              return row.values[column.id];
            }); // Get the columnValues to aggregate

            var leafValues = leafRows.map(function (row) {
              var columnValue = row.values[column.id];

              if (!depth && column.aggregateValue) {
                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

                if (!aggregateValueFn) {
                  console.info({
                    column: column
                  });
                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                }

                columnValue = aggregateValueFn(columnValue, row, column);
              }

              return columnValue;
            });
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows;
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy,
      setGroupBy: setGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      var _row$subRows;

      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId); // Force to strings (or "" for unsupported types)

    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValueByColumnID(row, columnId) {
    return row.values[columnId];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic
  });

  actions.resetSortBy = 'resetSortBy';
  actions.setSortBy = 'setSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.setSortBy) {
      var _sortBy = action.sortBy;
      return _extends({}, state, {
        sortBy: _sortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy2 = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy2.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy2.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy2, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy2.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy2.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
    var setSortBy = React.useCallback(function (sortBy) {
      dispatch({
        type: actions.setSortBy,
        sortBy: sortBy
      });
    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length === 0) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      setSortBy: setSortBy,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllPageRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllPageRowsSelected,
      title: 'Toggle All Current Page Rows Selected',
      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
        var id = _ref4.id;
        return instance.state.selectedRowIds[id];
      }))
    }];
  }; // eslint-disable-next-line max-params


  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
          getSubRows = instance.getSubRows;
      var isSelected = state.selectedRowIds[id];
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[id] = true;
          } else {
            delete newSelectedRowIds[id];
          }
        }

        if (selectSubRows && getSubRows(row)) {
          return getSubRows(row).forEach(function (row) {
            return handleRowById(row.id);
          });
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }

    if (action.type === actions.toggleAllPageRowsSelected) {
      var _setSelected2 = action.value;

      var page = instance.page,
          _rowsById2 = instance.rowsById,
          _instance$selectSubRo2 = instance.selectSubRows,
          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
          isAllPageRowsSelected = instance.isAllPageRowsSelected,
          _getSubRows = instance.getSubRows;

      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

      var _handleRowById = function _handleRowById(id) {
        var row = _rowsById2[id];

        if (!row.isGrouped) {
          if (_selectAll) {
            _newSelectedRowIds[id] = true;
          } else {
            delete _newSelectedRowIds[id];
          }
        }

        if (_selectSubRows && _getSubRows(row)) {
          return _getSubRows(row).forEach(function (row) {
            return _handleRowById(row.id);
          });
        }
      };

      page.forEach(function (row) {
        return _handleRowById(row.id);
      });
      return _extends({}, state, {
        selectedRowIds: _newSelectedRowIds
      });
    }

    return state;
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo3 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
        dispatch = instance.dispatch,
        page = instance.page,
        getSubRows = instance.getSubRows;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
    var isAllPageRowsSelected = isAllRowsSelected;

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    if (!isAllRowsSelected) {
      if (page && page.length && page.some(function (_ref5) {
        var id = _ref5.id;
        return !selectedRowIds[id];
      })) {
        isAllPageRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleAllPageRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllPageRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      isAllPageRowsSelected: isAllPageRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
      toggleAllPageRowsSelected: toggleAllPageRowsSelected
    });
  }

  function prepareRow$3(row, _ref6) {
    var instance = _ref6.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds, getSubRows) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    var subRows = getSubRows(row);

    if (subRows && subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
        return cell.column.id === columnId;
      }));
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

      var dispatchMove = function dispatchMove(clientXPos) {
        dispatch({
          type: actions.columnResizing,
          clientX: clientXPos
        });
      };

      var dispatchEnd = function dispatchEnd() {
        return dispatch({
          type: actions.columnDoneResizing
        });
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return dispatchMove(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            dispatchMove(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        columnResizing: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;

      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(instance) {
    var plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetRe = instance.autoResetResize,
        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
        columns = instance.columns;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
    var getAutoResetResize = useGetLatest(autoResetResize);
    useMountedLayoutEffect(function () {
      if (getAutoResetResize()) {
        dispatch({
          type: actions.resetResize
        });
      }
    }, [columns]);
    var resetResizing = React.useCallback(function () {
      return dispatch({
        type: actions.resetResize
      });
    }, [dispatch]);
    Object.assign(instance, {
      resetResizing: resetResizing
    });
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  function useGridLayout(hooks) {
    hooks.stateReducers.push(reducer$c);
    hooks.getTableProps.push(getTableProps$1);
    hooks.getHeaderProps.push(getHeaderProps$1);
  }
  useGridLayout.pluginName = 'useGridLayout';

  var getTableProps$1 = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: "grid",
        gridTemplateColumns: instance.state.gridLayout.columnWidths.map(function (w) {
          return w;
        }).join(" ")
      }
    }];
  };

  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      id: "header-cell-" + column.id,
      style: {
        position: "sticky" //enables a scroll wrapper to be placed around the table and have sticky headers

      }
    }];
  };

  function reducer$c(state, action, previousState, instance) {
    if (action.type === "init") {
      return _extends({
        gridLayout: {
          columnWidths: instance.columns.map(function () {
            return "auto";
          })
        }
      }, state);
    }

    if (action.type === "columnStartResizing") {
      var columnId = action.columnId;
      var columnIndex = instance.visibleColumns.findIndex(function (col) {
        return col.id === columnId;
      });
      var elWidth = getElementWidth(columnId);

      if (elWidth !== undefined) {
        return _extends({}, state, {
          gridLayout: _extends({}, state.gridLayout, {
            columnId: columnId,
            columnIndex: columnIndex,
            startingWidth: elWidth
          })
        });
      } else {
        return state;
      }
    }

    if (action.type === "columnResizing") {
      var _state$gridLayout = state.gridLayout,
          _columnIndex = _state$gridLayout.columnIndex,
          startingWidth = _state$gridLayout.startingWidth,
          columnWidths = _state$gridLayout.columnWidths;
      var change = state.columnResizing.startX - action.clientX;
      var newWidth = startingWidth - change;
      var columnWidthsCopy = [].concat(columnWidths);
      columnWidthsCopy[_columnIndex] = newWidth + "px";
      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          columnWidths: columnWidthsCopy
        })
      });
    }
  }

  function getElementWidth(columnId) {
    var _document$getElementB;

    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

    if (width !== undefined) {
      return width;
    }
  }

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.defaultRenderer = defaultRenderer;
  exports.emptyRenderer = emptyRenderer;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGridLayout = useGridLayout;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ "./pages/table.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\macbookprices\\client\\pages\\index.js";




var __N_SSG = true;
function Home(_ref) {
  var list = _ref.list;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    style: {
      background: "#323232"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "\uD83D\uDCB8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.midCont
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_table__WEBPACK_IMPORTED_MODULE_2__["default"], {
      list: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/table.js":
/*!************************!*\
  !*** ./pages/table.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_macbookprices_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_table_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/table.module.css */ "./styles/table.module.css");
/* harmony import */ var _styles_table_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_table_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\user\\Desktop\\macbookprices\\client\\pages\\table.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_macbookprices_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Table(props) {
  var _this = this,
      _s = $RefreshSig$();

  // const [list, setList] = useState(false)
  // if (props.list && list !== false){
  //   setList(props.list)
  // }
  console.log(props.list);
  var list = props.list;

  var displayTable = function displayTable() {
    _s();

    list.forEach(function (e) {
      var country = e.col1;
      e.col1 = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        height: "24px",
        width: "36px",
        src: "./icons/png/".concat(country, ".png")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }, _this);
    });
    var data = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
      return list;
    }, []);
    var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
      return [{
        Header: 'Country',
        accessor: 'col1' // accessor is the "key" in the data

      }, {
        Header: 'Macbook 13" 1',
        accessor: 'col2'
      }, {
        Header: 'Macbook 13" 2',
        accessor: 'col3'
      }, {
        Header: 'Macbook 13" 3',
        accessor: 'col4'
      }, {
        Header: 'Macbook 13" 4',
        accessor: 'col5'
      }, {
        Header: 'Macbook 16" 1',
        accessor: 'col6'
      }, {
        Header: 'Macbook 16" 2',
        accessor: 'col7'
      }];
    }, []);

    var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"])({
      columns: columns,
      data: data
    }),
        getTableProps = _useTable.getTableProps,
        getTableBodyProps = _useTable.getTableBodyProps,
        headerGroups = _useTable.headerGroups,
        rows = _useTable.rows,
        prepareRow = _useTable.prepareRow;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", _objectSpread(_objectSpread({}, getTableProps()), {}, {
      className: _styles_table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.rtable,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {
                className: _styles_table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.th,
                children: column.render('Header')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: rows.map(function (row) {
          prepareRow(row);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            className: _styles_table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.tr,
            children: row.cells.map(function (cell) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                className: _styles_table_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.td,
                children: cell.render('Cell')
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, _this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this);
  };

  _s(displayTable, "Rr3LCDfxM2kTtIiuI5tjeJ/Q4S0=", false, function () {
    return [react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"]];
  });

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: list ? displayTable() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
  }, void 0, false);
}
_c = Table;

var _c;

$RefreshReg$(_c, "Table");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Home.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Home.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Home.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Home.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Home.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/Home.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/table.module.css":
/*!*********************************!*\
  !*** ./styles/table.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/table.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/table.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./table.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/table.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cuser%5CDesktop%5Cmacbookprices%5Cclient%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3RhYmxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvd2VicGFjay9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS93ZWJwYWNrL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdGFibGUvZGlzdC9yZWFjdC10YWJsZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YmU5ZSIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3RhYmxlLm1vZHVsZS5jc3M/Mjc1ZSJdLCJuYW1lcyI6WyJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5Iiwia2V5IiwiaSIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsImhlYWRFbGVtZW50IiwiZGVmYXVsdEhlYWQiLCJwcm9wcyIsInVuaXF1ZSIsImMiLCJwcm9jZXNzIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsIkhlYWQiLCJpc1NlcnZlciIsImNvbnN0cnVjdG9yIiwiX2hhc0hlYWRNYW5hZ2VyIiwiZW1pdENoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJIb21lIiwic3R5bGVzIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZCIsIm1pZENvbnQiLCJUYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5VGFibGUiLCJmb3JFYWNoIiwiZSIsImNvdW50cnkiLCJjb2wxIiwiZGF0YSIsInVzZU1lbW8iLCJjb2x1bW5zIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJ1c2VUYWJsZSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwidCIsInJ0YWJsZSIsIm1hcCIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJjb2x1bW4iLCJnZXRIZWFkZXJQcm9wcyIsInRoIiwicm93IiwiZ2V0Um93UHJvcHMiLCJ0ciIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsInRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSx3Q0FBd0Ms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QUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FB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RUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNUOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1Rjs7QUFFQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHdCQUF3QjtBQUN4QjtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsNkJBQTZCLGlDQUFpQztBQUM5RCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCx3QkFBd0I7QUFDeEIsNkJBQTZCLGlDQUFpQyxpQ0FBaUM7QUFDL0YsZ0NBQWdDLDhCQUE4QixpQkFBaUI7QUFDL0UsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7O0FBRWpELHlDQUF5Qzs7QUFFekMsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHdCQUF3QjtBQUN4QixtQ0FBbUM7QUFDbkMsbUNBQW1DLHVDQUF1QztBQUMxRSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLCtCQUErQjtBQUMvQjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYzs7QUFFOUQsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7QUNqNklBLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLHFHQUFtQztBQUM5RDs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QXlCLFNBQVM7QUFDbEM7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTs7QUFFZix3QkFBd0IsaUJBQWlCOzs7QUFHekM7QUFDQSx3QkFBd0I7O0FBRXhCLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7O0FBRXZCOztBQUVBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHNJQUFzSSx5Q0FBeUM7QUFDL0s7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGFBQWE7QUFDekI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQ0FBMkM7O0FBRTNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLG9UQUF1SztBQUM3SztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLG9UQUF1Szs7QUFFak07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUMzREEsVUFBVSxtQkFBTyxDQUFDLG1OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyxzVEFBd0s7O0FBRTFNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHNUQUF3SztBQUM5SztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNUQUF3Szs7QUFFbE07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHVzZXJcXFxcRGVza3RvcFxcXFxtYWNib29rcHJpY2VzXFxcXGNsaWVudFxcXFxwYWdlc1xcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9YCR7aWR9ICR7Y291bnR9YDtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goa2V5PT57c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhP2BAbWVkaWEgJHtvYmoubWVkaWF9IHske29iai5jc3N9fWA6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz1gXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwke2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSl9ICovYDt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT0oKT0+e3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPShsaXN0LG9wdGlvbnMpPT57b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Ib21lX2NvbnRhaW5lcl9fMUVjc1Uge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uSG9tZV9jYXJkX18yU2R0QiB7XFxuICBiYWNrZ3JvdW5kOiAjNDg0ODQ4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5Ib21lX3RvcENvbnRfXzJGUE12IHtcXG4gIG1pbi1oZWlnaHQ6IDM0MHB4O1xcbiAgd2lkdGg6IDEwMTdweDtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgYmFja2dyb3VuZDogIzQ4NDg0ODtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkhvbWVfbWlkQ29udF9fMjRTdEsge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogMTAxN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJhY2tncm91bmQ6ICM0ODQ4NDg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQ6ICM0ODQ4NDg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRvcENvbnQge1xcbiAgbWluLWhlaWdodDogMzQwcHg7XFxuICB3aWR0aDogMTAxN3B4O1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiAjNDg0ODQ4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWlkQ29udCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHdpZHRoOiAxMDE3cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogIzQ4NDg0ODtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJ0b3BDb250XCI6IFwiSG9tZV90b3BDb250X18yRlBNdlwiLFxuXHRcIm1pZENvbnRcIjogXCJIb21lX21pZENvbnRfXzI0U3RLXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYmxlX3J0YWJsZV9fMlU2QW4ge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM0ODQ4NDg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlX3RkX18zajRxaiB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGVfdGhfXzFBVWx0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YWJsZV90cl9fMXFqeXIgdGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NDY0NjQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvdGFibGUubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ydGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM0ODQ4NDg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRkIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udHIgdGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NDY0NjQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJ0YWJsZVwiOiBcInRhYmxlX3J0YWJsZV9fMlU2QW5cIixcblx0XCJ0ZFwiOiBcInRhYmxlX3RkX18zajRxalwiLFxuXHRcInRoXCI6IFwidGFibGVfdGhfXzFBVWx0XCIsXG5cdFwidHJcIjogXCJ0YWJsZV90cl9fMXFqeXJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyA5MzE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDkzMSk7XG4vKioqKioqLyB9KSgpXG47IiwibW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gODgwOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuLyoqKioqKi8gXHRcdHRyeSB7XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX25jY3dwY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4vKioqKioqLyBcdFx0fSBmaW5hbGx5IHtcbi8qKioqKiovIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCAqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0X19uY2N3cGNrX3JlcXVpcmVfXy5hYiA9IF9fZGlybmFtZSArIFwiL1wiOy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDg4MCk7XG4vKioqKioqLyB9KSgpXG47IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKTogYm9vbGVhbiB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dDogUmVhY3QuQ29udGV4dDx7XG4gIHVwZGF0ZUhlYWQ/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBtb3VudGVkSW5zdGFuY2VzPzogYW55XG4gIHVwZGF0ZVNjcmlwdHM/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBzY3JpcHRzPzogYW55XG59PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWVcbiAgICBsZXQgaGFzS2V5ID0gZmFsc2VcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGhhc0tleSA9IHRydWVcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNVbmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgICAhcHJvcHMuaW5BbXBNb2RlXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgWydodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcyddLnNvbWUoKHVybCkgPT5cbiAgICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybClcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi4oYy5wcm9wcyB8fCB7fSkgfVxuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBhbXBTdGF0ZSA9IHVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KVxuICBjb25zdCBoZWFkTWFuYWdlciA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxFZmZlY3RcbiAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgaGVhZE1hbmFnZXI9e2hlYWRNYW5hZ2VyfVxuICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWZmZWN0PlxuICApXG59XG5cbi8vIFRPRE86IFJlbW92ZSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5IZWFkLnJld2luZCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuXG50eXBlIFN0YXRlID0gSlNYLkVsZW1lbnRbXSB8IHVuZGVmaW5lZFxuXG50eXBlIFNpZGVFZmZlY3RQcm9wcyA9IHtcbiAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IDxUPihcbiAgICBjb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgcHJvcHM6IFRcbiAgKSA9PiBTdGF0ZVxuICBoYW5kbGVTdGF0ZUNoYW5nZT86IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbiAgaGVhZE1hbmFnZXI6IGFueVxuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4ge1xuICBwcml2YXRlIF9oYXNIZWFkTWFuYWdlcjogYm9vbGVhblxuXG4gIGVtaXRDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQoXG4gICAgICAgIHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoXG4gICAgICAgICAgWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sXG4gICAgICAgICAgdGhpcy5wcm9wc1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuX2hhc0hlYWRNYW5hZ2VyID1cbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIgJiYgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXG5cbiAgICBpZiAoaXNTZXJ2ZXIgJiYgdGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKVxuICAgIH1cbiAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJywgJ3JlYWN0J10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5SZWFjdFRhYmxlID0ge30sIGdsb2JhbC5SZWFjdCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMsIFJlYWN0KSB7ICd1c2Ugc3RyaWN0JztcblxuICBSZWFjdCA9IFJlYWN0ICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChSZWFjdCwgJ2RlZmF1bHQnKSA/IFJlYWN0WydkZWZhdWx0J10gOiBSZWFjdDtcblxuICBmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gICAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuXG4gICAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgICBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICAgIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcblxuICAgIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG4gIH1cblxuICB2YXIgcmVuZGVyRXJyID0gJ1JlbmRlcmVyIEVycm9yIOKYne+4jyc7XG4gIHZhciBhY3Rpb25zID0ge1xuICAgIGluaXQ6ICdpbml0J1xuICB9O1xuICB2YXIgZGVmYXVsdFJlbmRlcmVyID0gZnVuY3Rpb24gZGVmYXVsdFJlbmRlcmVyKF9yZWYpIHtcbiAgICB2YXIgX3JlZiR2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgIHZhbHVlID0gX3JlZiR2YWx1ZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgdmFyIGVtcHR5UmVuZGVyZXIgPSBmdW5jdGlvbiBlbXB0eVJlbmRlcmVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBcIlxceEEwXCIpO1xuICB9O1xuICB2YXIgZGVmYXVsdENvbHVtbiA9IHtcbiAgICBDZWxsOiBkZWZhdWx0UmVuZGVyZXIsXG4gICAgd2lkdGg6IDE1MCxcbiAgICBtaW5XaWR0aDogMCxcbiAgICBtYXhXaWR0aDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbiAgfTtcblxuICBmdW5jdGlvbiBtZXJnZVByb3BzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wTGlzdCA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHByb3BMaXN0W19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKHByb3BzLCBuZXh0KSB7XG4gICAgICB2YXIgc3R5bGUgPSBuZXh0LnN0eWxlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IG5leHQuY2xhc3NOYW1lLFxuICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShuZXh0LCBbXCJzdHlsZVwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgICAgIHByb3BzID0gX2V4dGVuZHMoe30sIHByb3BzLCB7fSwgcmVzdCk7XG5cbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBwcm9wcy5zdHlsZSA9IHByb3BzLnN0eWxlID8gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlIHx8IHt9LCB7fSwgc3R5bGUgfHwge30pIDogc3R5bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lIDogY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuY2xhc3NOYW1lID09PSAnJykge1xuICAgICAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSwge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvcEdldHRlcihwcmV2UHJvcHMsIHVzZXJQcm9wcywgbWV0YSkge1xuICAgIC8vIEhhbmRsZSBhIGxhbWJkYSwgcGFzcyBpdCB0aGUgcHJldmlvdXMgcHJvcHNcbiAgICBpZiAodHlwZW9mIHVzZXJQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGhhbmRsZVByb3BHZXR0ZXIoe30sIHVzZXJQcm9wcyhwcmV2UHJvcHMsIG1ldGEpKTtcbiAgICB9IC8vIEhhbmRsZSBhbiBhcnJheSwgbWVyZ2UgZWFjaCBpdGVtIGFzIHNlcGFyYXRlIHByb3BzXG5cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHVzZXJQcm9wcykpIHtcbiAgICAgIHJldHVybiBtZXJnZVByb3BzLmFwcGx5KHZvaWQgMCwgW3ByZXZQcm9wc10uY29uY2F0KHVzZXJQcm9wcykpO1xuICAgIH0gLy8gSGFuZGxlIGFuIG9iamVjdCBieSBkZWZhdWx0LCBtZXJnZSB0aGUgdHdvIG9iamVjdHNcblxuXG4gICAgcmV0dXJuIG1lcmdlUHJvcHMocHJldlByb3BzLCB1c2VyUHJvcHMpO1xuICB9XG5cbiAgdmFyIG1ha2VQcm9wR2V0dGVyID0gZnVuY3Rpb24gbWFrZVByb3BHZXR0ZXIoaG9va3MsIG1ldGEpIHtcbiAgICBpZiAobWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgICBtZXRhID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh1c2VyUHJvcHMpIHtcbiAgICAgIGlmICh1c2VyUHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICB1c2VyUHJvcHMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtdLmNvbmNhdChob29rcywgW3VzZXJQcm9wc10pLnJlZHVjZShmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgICAgICByZXR1cm4gaGFuZGxlUHJvcEdldHRlcihwcmV2LCBuZXh0LCBfZXh0ZW5kcyh7fSwgbWV0YSwge1xuICAgICAgICAgIHVzZXJQcm9wczogdXNlclByb3BzXG4gICAgICAgIH0pKTtcbiAgICAgIH0sIHt9KTtcbiAgICB9O1xuICB9O1xuICB2YXIgcmVkdWNlSG9va3MgPSBmdW5jdGlvbiByZWR1Y2VIb29rcyhob29rcywgaW5pdGlhbCwgbWV0YSwgYWxsb3dVbmRlZmluZWQpIHtcbiAgICBpZiAobWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgICBtZXRhID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvb2tzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IG5leHQocHJldiwgbWV0YSk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFhbGxvd1VuZGVmaW5lZCAmJiB0eXBlb2YgbmV4dFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbyhuZXh0KTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0IFRhYmxlOiBBIHJlZHVjZXIgaG9vayDimJ3vuI8ganVzdCByZXR1cm5lZCB1bmRlZmluZWQhIFRoaXMgaXMgbm90IGFsbG93ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICB9LCBpbml0aWFsKTtcbiAgfTtcbiAgdmFyIGxvb3BIb29rcyA9IGZ1bmN0aW9uIGxvb3BIb29rcyhob29rcywgY29udGV4dCwgbWV0YSkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgdmFyIG5leHRWYWx1ZSA9IGhvb2soY29udGV4dCwgbWV0YSk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXh0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKGhvb2ssIG5leHRWYWx1ZSk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBUYWJsZTogQSBsb29wLXR5cGUgaG9vayDimJ3vuI8ganVzdCByZXR1cm5lZCBhIHZhbHVlISBUaGlzIGlzIG5vdCBhbGxvd2VkLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIGJlZm9yZXMsIHBsdWdpbk5hbWUsIGFmdGVycykge1xuICAgIGlmICggYWZ0ZXJzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZWZpbmluZyBwbHVnaW5zIGluIHRoZSBcXFwiYWZ0ZXJcXFwiIHNlY3Rpb24gb2YgZW5zdXJlUGx1Z2luT3JkZXIgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCAoc2VlIHBsdWdpbiBcIiArIHBsdWdpbk5hbWUgKyBcIilcIik7XG4gICAgfVxuXG4gICAgdmFyIHBsdWdpbkluZGV4ID0gcGx1Z2lucy5maW5kSW5kZXgoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgcmV0dXJuIHBsdWdpbi5wbHVnaW5OYW1lID09PSBwbHVnaW5OYW1lO1xuICAgIH0pO1xuXG4gICAgaWYgKHBsdWdpbkluZGV4ID09PSAtMSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGx1Z2luIFxcXCJcIiArIHBsdWdpbk5hbWUgKyBcIlxcXCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgcGx1Z2luIGxpc3QhXFxuVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBuZWVkIHRvIG5lZWQgdG8gbmFtZSB5b3VyIHBsdWdpbiBob29rIGJ5IHNldHRpbmcgdGhlICdwbHVnaW5OYW1lJyBwcm9wZXJ0eSBvZiB0aGUgaG9vayBmdW5jdGlvbiwgZWc6XFxuXFxuICBcIiArIHBsdWdpbk5hbWUgKyBcIi5wbHVnaW5OYW1lID0gJ1wiICsgcGx1Z2luTmFtZSArIFwiJ1xcblwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiZWZvcmVzLmZvckVhY2goZnVuY3Rpb24gKGJlZm9yZSkge1xuICAgICAgdmFyIGJlZm9yZUluZGV4ID0gcGx1Z2lucy5maW5kSW5kZXgoZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gcGx1Z2luLnBsdWdpbk5hbWUgPT09IGJlZm9yZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYmVmb3JlSW5kZXggPiAtMSAmJiBiZWZvcmVJbmRleCA+IHBsdWdpbkluZGV4KSB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdCBUYWJsZTogVGhlIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbiBob29rIG11c3QgYmUgcGxhY2VkIGFmdGVyIHRoZSBcIiArIGJlZm9yZSArIFwiIHBsdWdpbiBob29rIVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGZ1bmN0aW9uYWxVcGRhdGUodXBkYXRlciwgb2xkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1cGRhdGVyID09PSAnZnVuY3Rpb24nID8gdXBkYXRlcihvbGQpIDogdXBkYXRlcjtcbiAgfVxuICBmdW5jdGlvbiB1c2VHZXRMYXRlc3Qob2JqKSB7XG4gICAgdmFyIHJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICAgIHJlZi5jdXJyZW50ID0gb2JqO1xuICAgIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xuICB9IC8vIFNTUiBoYXMgaXNzdWVzIHdpdGggdXNlTGF5b3V0RWZmZWN0IHN0aWxsLCBzbyB1c2UgdXNlRWZmZWN0IGR1cmluZyBTU1JcblxuICB2YXIgc2FmZVVzZUxheW91dEVmZmVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG4gIGZ1bmN0aW9uIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZm4sIGRlcHMpIHtcbiAgICB2YXIgbW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gICAgc2FmZVVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG5cbiAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0sIGRlcHMpO1xuICB9XG4gIGZ1bmN0aW9uIHVzZUFzeW5jRGVib3VuY2UoZGVmYXVsdEZuLCBkZWZhdWx0V2FpdCkge1xuICAgIGlmIChkZWZhdWx0V2FpdCA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0V2FpdCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGRlYm91bmNlUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICB2YXIgZ2V0RGVmYXVsdEZuID0gdXNlR2V0TGF0ZXN0KGRlZmF1bHRGbik7XG4gICAgdmFyIGdldERlZmF1bHRXYWl0ID0gdXNlR2V0TGF0ZXN0KGRlZmF1bHRXYWl0KTtcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKFxuICAgICAgLyojX19QVVJFX18qL1xuICAgICAgcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICAgIHZhciBfbGVuMixcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICBfa2V5MixcbiAgICAgICAgICAgIF9hcmdzMiA9IGFyZ3VtZW50cztcblxuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGZvciAoX2xlbjIgPSBfYXJnczIubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IF9hcmdzMltfa2V5Ml07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkZWJvdW5jZVJlZi5jdXJyZW50LnByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVib3VuY2VSZWYuY3VycmVudC5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VSZWYuY3VycmVudC50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWJvdW5jZVJlZi5jdXJyZW50LnRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgICAgICAgICAgICBfYXN5bmNUb0dlbmVyYXRvcihcbiAgICAgICAgICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgICAgICAgICAgcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlYm91bmNlUmVmLmN1cnJlbnQudGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gZGVib3VuY2VSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXREZWZhdWx0Rm4oKS5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQxID0gX2NvbnRleHQuc2VudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MC5yZXNvbHZlLmNhbGwoX2NvbnRleHQudDAsIF9jb250ZXh0LnQxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MiA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYm91bmNlUmVmLmN1cnJlbnQucmVqZWN0KF9jb250ZXh0LnQyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDEyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMSwgOSwgMTIsIDE1XV0pO1xuICAgICAgICAgICAgICAgIH0pKSwgZ2V0RGVmYXVsdFdhaXQoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgZGVib3VuY2VSZWYuY3VycmVudC5wcm9taXNlKTtcblxuICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUyKTtcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwgW2dldERlZmF1bHRGbiwgZ2V0RGVmYXVsdFdhaXRdKTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlUmVuZGVyZXIoaW5zdGFuY2UsIGNvbHVtbiwgbWV0YSkge1xuICAgIGlmIChtZXRhID09PSB2b2lkIDApIHtcbiAgICAgIG1ldGEgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIHVzZXJQcm9wcykge1xuICAgICAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVzZXJQcm9wcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgQ29tcCA9IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IGNvbHVtblt0eXBlXSA6IHR5cGU7XG5cbiAgICAgIGlmICh0eXBlb2YgQ29tcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGNvbHVtbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZW5kZXJFcnIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxleFJlbmRlcihDb21wLCBfZXh0ZW5kcyh7fSwgaW5zdGFuY2UsIHtcbiAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgIH0sIG1ldGEsIHt9LCB1c2VyUHJvcHMpKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGZsZXhSZW5kZXIoQ29tcCwgcHJvcHMpIHtcbiAgICByZXR1cm4gaXNSZWFjdENvbXBvbmVudChDb21wKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcCwgcHJvcHMpIDogQ29tcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUmVhY3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB8fCB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nIHx8IGlzRXhvdGljQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb21wb25lbnQpO1xuICAgICAgcmV0dXJuIHByb3RvLnByb3RvdHlwZSAmJiBwcm90by5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbiAgICB9KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4b3RpY0NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNvbXBvbmVudC4kJHR5cGVvZiA9PT0gJ3N5bWJvbCcgJiYgWydyZWFjdC5tZW1vJywgJ3JlYWN0LmZvcndhcmRfcmVmJ10uaW5jbHVkZXMoY29tcG9uZW50LiQkdHlwZW9mLmRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmtDb2x1bW5TdHJ1Y3R1cmUoY29sdW1ucywgcGFyZW50LCBkZXB0aCkge1xuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgICBkZXB0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbiA9IF9leHRlbmRzKHt9LCBjb2x1bW4sIHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGRlcHRoOiBkZXB0aFxuICAgICAgfSk7XG4gICAgICBhc3NpZ25Db2x1bW5BY2Nlc3Nvcihjb2x1bW4pO1xuXG4gICAgICBpZiAoY29sdW1uLmNvbHVtbnMpIHtcbiAgICAgICAgY29sdW1uLmNvbHVtbnMgPSBsaW5rQ29sdW1uU3RydWN0dXJlKGNvbHVtbi5jb2x1bW5zLCBjb2x1bW4sIGRlcHRoICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZmxhdHRlbkNvbHVtbnMoY29sdW1ucykge1xuICAgIHJldHVybiBmbGF0dGVuQnkoY29sdW1ucywgJ2NvbHVtbnMnKTtcbiAgfVxuICBmdW5jdGlvbiBhc3NpZ25Db2x1bW5BY2Nlc3Nvcihjb2x1bW4pIHtcbiAgICAvLyBGaXJzdCBjaGVjayBmb3Igc3RyaW5nIGFjY2Vzc29yXG4gICAgdmFyIGlkID0gY29sdW1uLmlkLFxuICAgICAgICBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgSGVhZGVyID0gY29sdW1uLkhlYWRlcjtcblxuICAgIGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZCA9IGlkIHx8IGFjY2Vzc29yO1xuICAgICAgdmFyIGFjY2Vzc29yUGF0aCA9IGFjY2Vzc29yLnNwbGl0KCcuJyk7XG5cbiAgICAgIGFjY2Vzc29yID0gZnVuY3Rpb24gYWNjZXNzb3Iocm93KSB7XG4gICAgICAgIHJldHVybiBnZXRCeShyb3csIGFjY2Vzc29yUGF0aCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghaWQgJiYgdHlwZW9mIEhlYWRlciA9PT0gJ3N0cmluZycgJiYgSGVhZGVyKSB7XG4gICAgICBpZCA9IEhlYWRlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlkICYmIGNvbHVtbi5jb2x1bW5zKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGNvbHVtbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgY29sdW1uIElEIChvciB1bmlxdWUgXCJIZWFkZXJcIiB2YWx1ZSkgaXMgcmVxdWlyZWQhJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpZCkge1xuICAgICAgY29uc29sZS5lcnJvcihjb2x1bW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGNvbHVtbiBJRCAob3Igc3RyaW5nIGFjY2Vzc29yKSBpcyByZXF1aXJlZCEnKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKGNvbHVtbiwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgYWNjZXNzb3I6IGFjY2Vzc29yXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuICBmdW5jdGlvbiBkZWNvcmF0ZUNvbHVtbihjb2x1bW4sIHVzZXJEZWZhdWx0Q29sdW1uKSB7XG4gICAgaWYgKCF1c2VyRGVmYXVsdENvbHVtbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihjb2x1bW4sIF9leHRlbmRzKHtcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBpcyBhIGZhbGxiYWNrIGhlYWRlciwganVzdCBpbiBjYXNlXG4gICAgICBIZWFkZXI6IGVtcHR5UmVuZGVyZXIsXG4gICAgICBGb290ZXI6IGVtcHR5UmVuZGVyZXJcbiAgICB9LCBkZWZhdWx0Q29sdW1uLCB7fSwgdXNlckRlZmF1bHRDb2x1bW4sIHt9LCBjb2x1bW4pKTtcbiAgICBPYmplY3QuYXNzaWduKGNvbHVtbiwge1xuICAgICAgb3JpZ2luYWxXaWR0aDogY29sdW1uLndpZHRoXG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfSAvLyBCdWlsZCB0aGUgaGVhZGVyIGdyb3VwcyBmcm9tIHRoZSBib3R0b20gdXBcblxuICBmdW5jdGlvbiBtYWtlSGVhZGVyR3JvdXBzKGFsbENvbHVtbnMsIGRlZmF1bHRDb2x1bW4sIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzID09PSB2b2lkIDApIHtcbiAgICAgIGFkZGl0aW9uYWxIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24gYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGhlYWRlckdyb3VwcyA9IFtdO1xuICAgIHZhciBzY2FuQ29sdW1ucyA9IGFsbENvbHVtbnM7XG4gICAgdmFyIHVpZCA9IDA7XG5cbiAgICB2YXIgZ2V0VUlEID0gZnVuY3Rpb24gZ2V0VUlEKCkge1xuICAgICAgcmV0dXJuIHVpZCsrO1xuICAgIH07XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIC8vIFRoZSBoZWFkZXIgZ3JvdXAgd2UgYXJlIGNyZWF0aW5nXG4gICAgICB2YXIgaGVhZGVyR3JvdXAgPSB7XG4gICAgICAgIGhlYWRlcnM6IFtdXG4gICAgICB9OyAvLyBUaGUgcGFyZW50IGNvbHVtbnMgd2UncmUgZ29pbmcgdG8gc2NhbiBuZXh0XG5cbiAgICAgIHZhciBwYXJlbnRDb2x1bW5zID0gW107XG4gICAgICB2YXIgaGFzUGFyZW50cyA9IHNjYW5Db2x1bW5zLnNvbWUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucGFyZW50O1xuICAgICAgfSk7IC8vIFNjYW4gZWFjaCBjb2x1bW4gZm9yIHBhcmVudHNcblxuICAgICAgc2NhbkNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIC8vIFdoYXQgaXMgdGhlIGxhdGVzdCAobGFzdCkgcGFyZW50IGNvbHVtbj9cbiAgICAgICAgdmFyIGxhdGVzdFBhcmVudENvbHVtbiA9IFtdLmNvbmNhdChwYXJlbnRDb2x1bW5zKS5yZXZlcnNlKClbMF07XG4gICAgICAgIHZhciBuZXdQYXJlbnQ7XG5cbiAgICAgICAgaWYgKGhhc1BhcmVudHMpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgY29sdW1uIGhhcyBhIHBhcmVudCwgYWRkIGl0IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgIGlmIChjb2x1bW4ucGFyZW50KSB7XG4gICAgICAgICAgICBuZXdQYXJlbnQgPSBfZXh0ZW5kcyh7fSwgY29sdW1uLnBhcmVudCwge1xuICAgICAgICAgICAgICBvcmlnaW5hbElkOiBjb2x1bW4ucGFyZW50LmlkLFxuICAgICAgICAgICAgICBpZDogY29sdW1uLnBhcmVudC5pZCArIFwiX1wiICsgZ2V0VUlEKCksXG4gICAgICAgICAgICAgIGhlYWRlcnM6IFtjb2x1bW5dXG4gICAgICAgICAgICB9LCBhZGRpdGlvbmFsSGVhZGVyUHJvcGVydGllcyhjb2x1bW4pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgb3RoZXIgY29sdW1ucyBoYXZlIHBhcmVudHMsIHdlJ2xsIG5lZWQgdG8gYWRkIGEgcGxhY2UgaG9sZGVyIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsSWQgPSBjb2x1bW4uaWQgKyBcIl9wbGFjZWhvbGRlclwiO1xuICAgICAgICAgICAgbmV3UGFyZW50ID0gZGVjb3JhdGVDb2x1bW4oX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBvcmlnaW5hbElkOiBvcmlnaW5hbElkLFxuICAgICAgICAgICAgICBpZDogY29sdW1uLmlkICsgXCJfcGxhY2Vob2xkZXJfXCIgKyBnZXRVSUQoKSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJPZjogY29sdW1uLFxuICAgICAgICAgICAgICBoZWFkZXJzOiBbY29sdW1uXVxuICAgICAgICAgICAgfSwgYWRkaXRpb25hbEhlYWRlclByb3BlcnRpZXMoY29sdW1uKSksIGRlZmF1bHRDb2x1bW4pO1xuICAgICAgICAgIH0gLy8gSWYgdGhlIHJlc3VsdGluZyBwYXJlbnQgY29sdW1ucyBhcmUgdGhlIHNhbWUsIGp1c3QgYWRkXG4gICAgICAgICAgLy8gdGhlIGNvbHVtbiBhbmQgaW5jcmVtZW50IHRoZSBoZWFkZXIgc3BhblxuXG5cbiAgICAgICAgICBpZiAobGF0ZXN0UGFyZW50Q29sdW1uICYmIGxhdGVzdFBhcmVudENvbHVtbi5vcmlnaW5hbElkID09PSBuZXdQYXJlbnQub3JpZ2luYWxJZCkge1xuICAgICAgICAgICAgbGF0ZXN0UGFyZW50Q29sdW1uLmhlYWRlcnMucHVzaChjb2x1bW4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRDb2x1bW5zLnB1c2gobmV3UGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXJHcm91cC5oZWFkZXJzLnB1c2goY29sdW1uKTtcbiAgICAgIH0pO1xuICAgICAgaGVhZGVyR3JvdXBzLnB1c2goaGVhZGVyR3JvdXApOyAvLyBTdGFydCBzY2FubmluZyB0aGUgcGFyZW50IGNvbHVtbnNcblxuICAgICAgc2NhbkNvbHVtbnMgPSBwYXJlbnRDb2x1bW5zO1xuICAgIH07XG5cbiAgICB3aGlsZSAoc2NhbkNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICBfbG9vcCgpO1xuICAgIH1cblxuICAgIHJldHVybiBoZWFkZXJHcm91cHMucmV2ZXJzZSgpO1xuICB9XG4gIHZhciBwYXRoT2JqQ2FjaGUgPSBuZXcgTWFwKCk7XG4gIGZ1bmN0aW9uIGdldEJ5KG9iaiwgcGF0aCwgZGVmKSB7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciBjYWNoZUtleSA9IHR5cGVvZiBwYXRoID09PSAnZnVuY3Rpb24nID8gcGF0aCA6IEpTT04uc3RyaW5naWZ5KHBhdGgpO1xuXG4gICAgdmFyIHBhdGhPYmogPSBwYXRoT2JqQ2FjaGUuZ2V0KGNhY2hlS2V5KSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGF0aE9iaiA9IG1ha2VQYXRoQXJyYXkocGF0aCk7XG4gICAgICBwYXRoT2JqQ2FjaGUuc2V0KGNhY2hlS2V5LCBwYXRoT2JqKTtcbiAgICAgIHJldHVybiBwYXRoT2JqO1xuICAgIH0oKTtcblxuICAgIHZhciB2YWw7XG5cbiAgICB0cnkge1xuICAgICAgdmFsID0gcGF0aE9iai5yZWR1Y2UoZnVuY3Rpb24gKGN1cnNvciwgcGF0aFBhcnQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnNvcltwYXRoUGFydF07XG4gICAgICB9LCBvYmopO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBjb250aW51ZSByZWdhcmRsZXNzIG9mIGVycm9yXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnID8gdmFsIDogZGVmO1xuICB9XG4gIGZ1bmN0aW9uIGdldEZpcnN0RGVmaW5lZCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGEpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBmbGF0dGVuQnkoYXJyLCBrZXkpIHtcbiAgICB2YXIgZmxhdCA9IFtdO1xuXG4gICAgdmFyIHJlY3Vyc2UgPSBmdW5jdGlvbiByZWN1cnNlKGFycikge1xuICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKCFkW2tleV0pIHtcbiAgICAgICAgICBmbGF0LnB1c2goZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVjdXJzZShkW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVjdXJzZShhcnIpO1xuICAgIHJldHVybiBmbGF0O1xuICB9XG4gIGZ1bmN0aW9uIGV4cGFuZFJvd3Mocm93cywgX3JlZikge1xuICAgIHZhciBtYW51YWxFeHBhbmRlZEtleSA9IF9yZWYubWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIGV4cGFuZGVkID0gX3JlZi5leHBhbmRlZCxcbiAgICAgICAgX3JlZiRleHBhbmRTdWJSb3dzID0gX3JlZi5leHBhbmRTdWJSb3dzLFxuICAgICAgICBleHBhbmRTdWJSb3dzID0gX3JlZiRleHBhbmRTdWJSb3dzID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRleHBhbmRTdWJSb3dzO1xuICAgIHZhciBleHBhbmRlZFJvd3MgPSBbXTtcblxuICAgIHZhciBoYW5kbGVSb3cgPSBmdW5jdGlvbiBoYW5kbGVSb3cocm93LCBhZGRUb0V4cGFuZGVkUm93cykge1xuICAgICAgaWYgKGFkZFRvRXhwYW5kZWRSb3dzID09PSB2b2lkIDApIHtcbiAgICAgICAgYWRkVG9FeHBhbmRlZFJvd3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByb3cuaXNFeHBhbmRlZCA9IHJvdy5vcmlnaW5hbCAmJiByb3cub3JpZ2luYWxbbWFudWFsRXhwYW5kZWRLZXldIHx8IGV4cGFuZGVkW3Jvdy5pZF07XG4gICAgICByb3cuY2FuRXhwYW5kID0gcm93LnN1YlJvd3MgJiYgISFyb3cuc3ViUm93cy5sZW5ndGg7XG5cbiAgICAgIGlmIChhZGRUb0V4cGFuZGVkUm93cykge1xuICAgICAgICBleHBhbmRlZFJvd3MucHVzaChyb3cpO1xuICAgICAgfVxuXG4gICAgICBpZiAocm93LnN1YlJvd3MgJiYgcm93LnN1YlJvd3MubGVuZ3RoICYmIHJvdy5pc0V4cGFuZGVkKSB7XG4gICAgICAgIHJvdy5zdWJSb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVSb3cocm93LCBleHBhbmRTdWJSb3dzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaGFuZGxlUm93KHJvdyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV4cGFuZGVkUm93cztcbiAgfVxuICBmdW5jdGlvbiBnZXRGaWx0ZXJNZXRob2QoZmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMsIGZpbHRlclR5cGVzKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oZmlsdGVyKSB8fCB1c2VyRmlsdGVyVHlwZXNbZmlsdGVyXSB8fCBmaWx0ZXJUeXBlc1tmaWx0ZXJdIHx8IGZpbHRlclR5cGVzLnRleHQ7XG4gIH1cbiAgZnVuY3Rpb24gc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihhdXRvUmVtb3ZlLCB2YWx1ZSwgY29sdW1uKSB7XG4gICAgcmV0dXJuIGF1dG9SZW1vdmUgPyBhdXRvUmVtb3ZlKHZhbHVlLCBjb2x1bW4pIDogdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuICBmdW5jdGlvbiB1bnByZXBhcmVkQWNjZXNzV2FybmluZygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LVRhYmxlOiBZb3UgaGF2ZSBub3QgY2FsbGVkIHByZXBhcmVSb3cocm93KSBvbmUgb3IgbW9yZSByb3dzIHlvdSBhcmUgYXR0ZW1wdGluZyB0byByZW5kZXIuJyk7XG4gIH1cbiAgdmFyIHBhc3NpdmVTdXBwb3J0ZWQgPSBudWxsO1xuICBmdW5jdGlvbiBwYXNzaXZlRXZlbnRTdXBwb3J0ZWQoKSB7XG4gICAgLy8gbWVtb2l6ZSBzdXBwb3J0IHRvIGF2b2lkIGFkZGluZyBtdWx0aXBsZSB0ZXN0IGV2ZW50c1xuICAgIGlmICh0eXBlb2YgcGFzc2l2ZVN1cHBvcnRlZCA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcbiAgICB2YXIgc3VwcG9ydGVkID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgIHN1cHBvcnRlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdGlvbnMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG4gIH0gLy9cblxuICB2YXIgcmVPcGVuQnJhY2tldCA9IC9cXFsvZztcbiAgdmFyIHJlQ2xvc2VCcmFja2V0ID0gL1xcXS9nO1xuXG4gIGZ1bmN0aW9uIG1ha2VQYXRoQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW5EZWVwKG9iaikgLy8gcmVtb3ZlIGFsbCBwZXJpb2RzIGluIHBhcnRzXG4gICAgLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhkKS5yZXBsYWNlKCcuJywgJ18nKTtcbiAgICB9KSAvLyBqb2luIHBhcnRzIHVzaW5nIHBlcmlvZFxuICAgIC5qb2luKCcuJykgLy8gcmVwbGFjZSBicmFja2V0cyB3aXRoIHBlcmlvZHNcbiAgICAucmVwbGFjZShyZU9wZW5CcmFja2V0LCAnLicpLnJlcGxhY2UocmVDbG9zZUJyYWNrZXQsICcnKSAvLyBzcGxpdCBpdCBiYWNrIG91dCBvbiBwZXJpb2RzXG4gICAgLnNwbGl0KCcuJyk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGF0dGVuRGVlcChhcnIsIG5ld0Fycikge1xuICAgIGlmIChuZXdBcnIgPT09IHZvaWQgMCkge1xuICAgICAgbmV3QXJyID0gW107XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIG5ld0Fyci5wdXNoKGFycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGZsYXR0ZW5EZWVwKGFycltpXSwgbmV3QXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3QXJyO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRHZXRUYWJsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRhYmxlUHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgcm9sZTogJ3RhYmxlJ1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRhYmxlQm9keVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRhYmxlQm9keVByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIHJvbGU6ICdyb3dncm91cCdcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRIZWFkZXJQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRIZWFkZXJQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmLmNvbHVtbjtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImhlYWRlcl9cIiArIGNvbHVtbi5pZCxcbiAgICAgIGNvbFNwYW46IGNvbHVtbi50b3RhbFZpc2libGVIZWFkZXJDb3VudCxcbiAgICAgIHJvbGU6ICdjb2x1bW5oZWFkZXInXG4gICAgfSwgcHJvcHMpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0Rm9vdGVyUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Rm9vdGVyUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYyLmNvbHVtbjtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImZvb3Rlcl9cIiArIGNvbHVtbi5pZCxcbiAgICAgIGNvbFNwYW46IGNvbHVtbi50b3RhbFZpc2libGVIZWFkZXJDb3VudFxuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEhlYWRlckdyb3VwUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0SGVhZGVyR3JvdXBQcm9wcyhwcm9wcywgX3JlZjMpIHtcbiAgICB2YXIgaW5kZXggPSBfcmVmMy5pbmRleDtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImhlYWRlckdyb3VwX1wiICsgaW5kZXgsXG4gICAgICByb2xlOiAncm93J1xuICAgIH0sIHByb3BzKTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldEZvb3Rlckdyb3VwUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Rm9vdGVyR3JvdXBQcm9wcyhwcm9wcywgX3JlZjQpIHtcbiAgICB2YXIgaW5kZXggPSBfcmVmNC5pbmRleDtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImZvb3Rlckdyb3VwX1wiICsgaW5kZXhcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRSb3dQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRSb3dQcm9wcyhwcm9wcywgX3JlZjUpIHtcbiAgICB2YXIgcm93ID0gX3JlZjUucm93O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IFwicm93X1wiICsgcm93LmlkLFxuICAgICAgcm9sZTogJ3JvdydcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRDZWxsUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0Q2VsbFByb3BzKHByb3BzLCBfcmVmNikge1xuICAgIHZhciBjZWxsID0gX3JlZjYuY2VsbDtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAga2V5OiBcImNlbGxfXCIgKyBjZWxsLnJvdy5pZCArIFwiX1wiICsgY2VsbC5jb2x1bW4uaWQsXG4gICAgICByb2xlOiAnY2VsbCdcbiAgICB9LCBwcm9wcyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZURlZmF1bHRQbHVnaW5Ib29rcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlT3B0aW9uczogW10sXG4gICAgICBzdGF0ZVJlZHVjZXJzOiBbXSxcbiAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZTogW10sXG4gICAgICBjb2x1bW5zOiBbXSxcbiAgICAgIGNvbHVtbnNEZXBzOiBbXSxcbiAgICAgIGFsbENvbHVtbnM6IFtdLFxuICAgICAgYWxsQ29sdW1uc0RlcHM6IFtdLFxuICAgICAgYWNjZXNzVmFsdWU6IFtdLFxuICAgICAgbWF0ZXJpYWxpemVkQ29sdW1uczogW10sXG4gICAgICBtYXRlcmlhbGl6ZWRDb2x1bW5zRGVwczogW10sXG4gICAgICB1c2VJbnN0YW5jZUFmdGVyRGF0YTogW10sXG4gICAgICB2aXNpYmxlQ29sdW1uczogW10sXG4gICAgICB2aXNpYmxlQ29sdW1uc0RlcHM6IFtdLFxuICAgICAgaGVhZGVyR3JvdXBzOiBbXSxcbiAgICAgIGhlYWRlckdyb3Vwc0RlcHM6IFtdLFxuICAgICAgdXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zOiBbXSxcbiAgICAgIHVzZUluc3RhbmNlOiBbXSxcbiAgICAgIHByZXBhcmVSb3c6IFtdLFxuICAgICAgZ2V0VGFibGVQcm9wczogW2RlZmF1bHRHZXRUYWJsZVByb3BzXSxcbiAgICAgIGdldFRhYmxlQm9keVByb3BzOiBbZGVmYXVsdEdldFRhYmxlQm9keVByb3BzXSxcbiAgICAgIGdldEhlYWRlckdyb3VwUHJvcHM6IFtkZWZhdWx0R2V0SGVhZGVyR3JvdXBQcm9wc10sXG4gICAgICBnZXRGb290ZXJHcm91cFByb3BzOiBbZGVmYXVsdEdldEZvb3Rlckdyb3VwUHJvcHNdLFxuICAgICAgZ2V0SGVhZGVyUHJvcHM6IFtkZWZhdWx0R2V0SGVhZGVyUHJvcHNdLFxuICAgICAgZ2V0Rm9vdGVyUHJvcHM6IFtkZWZhdWx0R2V0Rm9vdGVyUHJvcHNdLFxuICAgICAgZ2V0Um93UHJvcHM6IFtkZWZhdWx0R2V0Um93UHJvcHNdLFxuICAgICAgZ2V0Q2VsbFByb3BzOiBbZGVmYXVsdEdldENlbGxQcm9wc10sXG4gICAgICB1c2VGaW5hbEluc3RhbmNlOiBbXVxuICAgIH07XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0SGlkZGVuQ29sdW1ucyA9ICdyZXNldEhpZGRlbkNvbHVtbnMnO1xuICBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4gPSAndG9nZ2xlSGlkZUNvbHVtbic7XG4gIGFjdGlvbnMuc2V0SGlkZGVuQ29sdW1ucyA9ICdzZXRIaWRkZW5Db2x1bW5zJztcbiAgYWN0aW9ucy50b2dnbGVIaWRlQWxsQ29sdW1ucyA9ICd0b2dnbGVIaWRlQWxsQ29sdW1ucyc7XG4gIHZhciB1c2VDb2x1bW5WaXNpYmlsaXR5ID0gZnVuY3Rpb24gdXNlQ29sdW1uVmlzaWJpbGl0eShob29rcykge1xuICAgIGhvb2tzLmdldFRvZ2dsZUhpZGRlblByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVIaWRkZW5Qcm9wc107XG4gICAgaG9va3MuZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucy5wdXNoKHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyk7XG4gICAgaG9va3MuaGVhZGVyR3JvdXBzRGVwcy5wdXNoKGZ1bmN0aW9uIChkZXBzLCBfcmVmKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1uc10pO1xuICAgIH0pO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UpO1xuICB9O1xuICB1c2VDb2x1bW5WaXNpYmlsaXR5LnBsdWdpbk5hbWUgPSAndXNlQ29sdW1uVmlzaWJpbGl0eSc7XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVIaWRkZW5Qcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVIaWRkZW5Qcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjIuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVIaWRkZW4oIWUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgY2hlY2tlZDogY29sdW1uLmlzVmlzaWJsZSxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIENvbHVtbiBWaXNpYmxlJ1xuICAgIH1dO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0R2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVIaWRlQWxsQ29sdW1uc1Byb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGluc3RhbmNlLnRvZ2dsZUhpZGVBbGxDb2x1bW5zKCFlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6ICFpbnN0YW5jZS5hbGxDb2x1bW5zSGlkZGVuICYmICFpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zLmxlbmd0aCxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBDb2x1bW5zIEhpZGRlbicsXG4gICAgICBpbmRldGVybWluYXRlOiAhaW5zdGFuY2UuYWxsQ29sdW1uc0hpZGRlbiAmJiBpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zLmxlbmd0aFxuICAgIH1dO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRIaWRkZW5Db2x1bW5zKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnM6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5oaWRkZW5Db2x1bW5zIHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbikge1xuICAgICAgdmFyIHNob3VsZCA9IHR5cGVvZiBhY3Rpb24udmFsdWUgIT09ICd1bmRlZmluZWQnID8gYWN0aW9uLnZhbHVlIDogIXN0YXRlLmhpZGRlbkNvbHVtbnMuaW5jbHVkZXMoYWN0aW9uLmNvbHVtbklkKTtcbiAgICAgIHZhciBoaWRkZW5Db2x1bW5zID0gc2hvdWxkID8gW10uY29uY2F0KHN0YXRlLmhpZGRlbkNvbHVtbnMsIFthY3Rpb24uY29sdW1uSWRdKSA6IHN0YXRlLmhpZGRlbkNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkICE9PSBhY3Rpb24uY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogaGlkZGVuQ29sdW1uc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEhpZGRlbkNvbHVtbnMpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogZnVuY3Rpb25hbFVwZGF0ZShhY3Rpb24udmFsdWUsIHN0YXRlLmhpZGRlbkNvbHVtbnMpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlSGlkZUFsbENvbHVtbnMpIHtcbiAgICAgIHZhciBzaG91bGRBbGwgPSB0eXBlb2YgYWN0aW9uLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IGFjdGlvbi52YWx1ZSA6ICFzdGF0ZS5oaWRkZW5Db2x1bW5zLmxlbmd0aDtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaGlkZGVuQ29sdW1uczogc2hvdWxkQWxsID8gaW5zdGFuY2UuYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZDtcbiAgICAgICAgfSkgOiBbXVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2VCZWZvcmVEaW1lbnNpb25zKGluc3RhbmNlKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBpbnN0YW5jZS5oZWFkZXJzLFxuICAgICAgICBoaWRkZW5Db2x1bW5zID0gaW5zdGFuY2Uuc3RhdGUuaGlkZGVuQ29sdW1ucztcbiAgICB2YXIgaXNNb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICAgIGlmICghaXNNb3VudGVkUmVmLmN1cnJlbnQpIDtcblxuICAgIHZhciBoYW5kbGVDb2x1bW4gPSBmdW5jdGlvbiBoYW5kbGVDb2x1bW4oY29sdW1uLCBwYXJlbnRWaXNpYmxlKSB7XG4gICAgICBjb2x1bW4uaXNWaXNpYmxlID0gcGFyZW50VmlzaWJsZSAmJiAhaGlkZGVuQ29sdW1ucy5pbmNsdWRlcyhjb2x1bW4uaWQpO1xuICAgICAgdmFyIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50ID0gMDtcblxuICAgICAgaWYgKGNvbHVtbi5oZWFkZXJzICYmIGNvbHVtbi5oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICBjb2x1bW4uaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJDb2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgKz0gaGFuZGxlQ29sdW1uKHN1YkNvbHVtbiwgY29sdW1uLmlzVmlzaWJsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSBjb2x1bW4uaXNWaXNpYmxlID8gMSA6IDA7XG4gICAgICB9XG5cbiAgICAgIGNvbHVtbi50b3RhbFZpc2libGVIZWFkZXJDb3VudCA9IHRvdGFsVmlzaWJsZUhlYWRlckNvdW50O1xuICAgICAgcmV0dXJuIHRvdGFsVmlzaWJsZUhlYWRlckNvdW50O1xuICAgIH07XG5cbiAgICB2YXIgdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgPSAwO1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViSGVhZGVyKSB7XG4gICAgICByZXR1cm4gdG90YWxWaXNpYmxlSGVhZGVyQ291bnQgKz0gaGFuZGxlQ29sdW1uKHN1YkhlYWRlciwgdHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZShpbnN0YW5jZSkge1xuICAgIHZhciBjb2x1bW5zID0gaW5zdGFuY2UuY29sdW1ucyxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIGhpZGRlbkNvbHVtbnMgPSBpbnN0YW5jZS5zdGF0ZS5oaWRkZW5Db2x1bW5zLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0SGkgPSBpbnN0YW5jZS5hdXRvUmVzZXRIaWRkZW5Db2x1bW5zLFxuICAgICAgICBhdXRvUmVzZXRIaWRkZW5Db2x1bW5zID0gX2luc3RhbmNlJGF1dG9SZXNldEhpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldEhpO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgdmFyIGFsbENvbHVtbnNIaWRkZW4gPSBhbGxDb2x1bW5zLmxlbmd0aCA9PT0gaGlkZGVuQ29sdW1ucy5sZW5ndGg7XG4gICAgdmFyIHRvZ2dsZUhpZGVDb2x1bW4gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoY29sdW1uSWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZUhpZGVDb2x1bW4sXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgc2V0SGlkZGVuQ29sdW1ucyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRIaWRkZW5Db2x1bW5zLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciB0b2dnbGVIaWRlQWxsQ29sdW1ucyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVIaWRlQWxsQ29sdW1ucyxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlSGlkZUFsbENvbHVtbnNQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi50b2dnbGVIaWRkZW4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlSGlkZUNvbHVtbixcbiAgICAgICAgICBjb2x1bW5JZDogY29sdW1uLmlkLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbHVtbi5nZXRUb2dnbGVIaWRkZW5Qcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VG9nZ2xlSGlkZGVuUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0SGlkZGVuQ29sdW1ucyA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRIaWRkZW5Db2x1bW5zKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRIaWRkZW5Db2x1bW5zKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRIaWRkZW5Db2x1bW5zXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgY29sdW1uc10pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIGFsbENvbHVtbnNIaWRkZW46IGFsbENvbHVtbnNIaWRkZW4sXG4gICAgICB0b2dnbGVIaWRlQ29sdW1uOiB0b2dnbGVIaWRlQ29sdW1uLFxuICAgICAgc2V0SGlkZGVuQ29sdW1uczogc2V0SGlkZGVuQ29sdW1ucyxcbiAgICAgIHRvZ2dsZUhpZGVBbGxDb2x1bW5zOiB0b2dnbGVIaWRlQWxsQ29sdW1ucyxcbiAgICAgIGdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHM6IGdldFRvZ2dsZUhpZGVBbGxDb2x1bW5zUHJvcHNcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0SW5pdGlhbFN0YXRlID0ge307XG4gIHZhciBkZWZhdWx0Q29sdW1uSW5zdGFuY2UgPSB7fTtcblxuICB2YXIgZGVmYXVsdFJlZHVjZXIgPSBmdW5jdGlvbiBkZWZhdWx0UmVkdWNlcihzdGF0ZSwgYWN0aW9uLCBwcmV2U3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRTdWJSb3dzID0gZnVuY3Rpb24gZGVmYXVsdEdldFN1YlJvd3Mocm93LCBpbmRleCkge1xuICAgIHJldHVybiByb3cuc3ViUm93cyB8fCBbXTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFJvd0lkID0gZnVuY3Rpb24gZGVmYXVsdEdldFJvd0lkKHJvdywgaW5kZXgsIHBhcmVudCkge1xuICAgIHJldHVybiBcIlwiICsgKHBhcmVudCA/IFtwYXJlbnQuaWQsIGluZGV4XS5qb2luKCcuJykgOiBpbmRleCk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRVc2VDb250cm9sbGVkU3RhdGUgPSBmdW5jdGlvbiBkZWZhdWx0VXNlQ29udHJvbGxlZFN0YXRlKGQpIHtcbiAgICByZXR1cm4gZDtcbiAgfTtcblxuICBmdW5jdGlvbiBhcHBseURlZmF1bHRzKHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRpbml0aWFsU3RhdGUgPSBwcm9wcy5pbml0aWFsU3RhdGUsXG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IF9wcm9wcyRpbml0aWFsU3RhdGUgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsU3RhdGUgOiBfcHJvcHMkaW5pdGlhbFN0YXRlLFxuICAgICAgICBfcHJvcHMkZGVmYXVsdENvbHVtbiA9IHByb3BzLmRlZmF1bHRDb2x1bW4sXG4gICAgICAgIGRlZmF1bHRDb2x1bW4gPSBfcHJvcHMkZGVmYXVsdENvbHVtbiA9PT0gdm9pZCAwID8gZGVmYXVsdENvbHVtbkluc3RhbmNlIDogX3Byb3BzJGRlZmF1bHRDb2x1bW4sXG4gICAgICAgIF9wcm9wcyRnZXRTdWJSb3dzID0gcHJvcHMuZ2V0U3ViUm93cyxcbiAgICAgICAgZ2V0U3ViUm93cyA9IF9wcm9wcyRnZXRTdWJSb3dzID09PSB2b2lkIDAgPyBkZWZhdWx0R2V0U3ViUm93cyA6IF9wcm9wcyRnZXRTdWJSb3dzLFxuICAgICAgICBfcHJvcHMkZ2V0Um93SWQgPSBwcm9wcy5nZXRSb3dJZCxcbiAgICAgICAgZ2V0Um93SWQgPSBfcHJvcHMkZ2V0Um93SWQgPT09IHZvaWQgMCA/IGRlZmF1bHRHZXRSb3dJZCA6IF9wcm9wcyRnZXRSb3dJZCxcbiAgICAgICAgX3Byb3BzJHN0YXRlUmVkdWNlciA9IHByb3BzLnN0YXRlUmVkdWNlcixcbiAgICAgICAgc3RhdGVSZWR1Y2VyID0gX3Byb3BzJHN0YXRlUmVkdWNlciA9PT0gdm9pZCAwID8gZGVmYXVsdFJlZHVjZXIgOiBfcHJvcHMkc3RhdGVSZWR1Y2VyLFxuICAgICAgICBfcHJvcHMkdXNlQ29udHJvbGxlZFMgPSBwcm9wcy51c2VDb250cm9sbGVkU3RhdGUsXG4gICAgICAgIHVzZUNvbnRyb2xsZWRTdGF0ZSA9IF9wcm9wcyR1c2VDb250cm9sbGVkUyA9PT0gdm9pZCAwID8gZGVmYXVsdFVzZUNvbnRyb2xsZWRTdGF0ZSA6IF9wcm9wcyR1c2VDb250cm9sbGVkUyxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpbml0aWFsU3RhdGVcIiwgXCJkZWZhdWx0Q29sdW1uXCIsIFwiZ2V0U3ViUm93c1wiLCBcImdldFJvd0lkXCIsIFwic3RhdGVSZWR1Y2VyXCIsIFwidXNlQ29udHJvbGxlZFN0YXRlXCJdKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsU3RhdGUsXG4gICAgICBkZWZhdWx0Q29sdW1uOiBkZWZhdWx0Q29sdW1uLFxuICAgICAgZ2V0U3ViUm93czogZ2V0U3ViUm93cyxcbiAgICAgIGdldFJvd0lkOiBnZXRSb3dJZCxcbiAgICAgIHN0YXRlUmVkdWNlcjogc3RhdGVSZWR1Y2VyLFxuICAgICAgdXNlQ29udHJvbGxlZFN0YXRlOiB1c2VDb250cm9sbGVkU3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB1c2VUYWJsZSA9IGZ1bmN0aW9uIHVzZVRhYmxlKHByb3BzKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcGx1Z2luc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZGVmYXVsdCBwcm9wc1xuICAgIHByb3BzID0gYXBwbHlEZWZhdWx0cyhwcm9wcyk7IC8vIEFkZCBjb3JlIHBsdWdpbnNcblxuICAgIHBsdWdpbnMgPSBbdXNlQ29sdW1uVmlzaWJpbGl0eV0uY29uY2F0KHBsdWdpbnMpOyAvLyBDcmVhdGUgdGhlIHRhYmxlIGluc3RhbmNlXG5cbiAgICB2YXIgaW5zdGFuY2VSZWYgPSBSZWFjdC51c2VSZWYoe30pOyAvLyBDcmVhdGUgYSBnZXR0ZXIgZm9yIHRoZSBpbnN0YW5jZSAoaGVscHMgYXZvaWQgYSBsb3Qgb2YgcG90ZW50aWFsIG1lbW9yeSBsZWFrcylcblxuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZVJlZi5jdXJyZW50KTsgLy8gQXNzaWduIHRoZSBwcm9wcywgcGx1Z2lucyBhbmQgaG9va3MgdG8gdGhlIGluc3RhbmNlXG5cbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgIGhvb2tzOiBtYWtlRGVmYXVsdFBsdWdpbkhvb2tzKClcbiAgICB9KSk7IC8vIEFsbG93IHBsdWdpbnMgdG8gcmVnaXN0ZXIgaG9va3MgYXMgZWFybHkgYXMgcG9zc2libGVcblxuICAgIHBsdWdpbnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgcGx1Z2luKGdldEluc3RhbmNlKCkuaG9va3MpO1xuICAgIH0pOyAvLyBDb25zdW1lIGFsbCBob29rcyBhbmQgbWFrZSBhIGdldHRlciBmb3IgdGhlbVxuXG4gICAgdmFyIGdldEhvb2tzID0gdXNlR2V0TGF0ZXN0KGdldEluc3RhbmNlKCkuaG9va3MpO1xuICAgIGdldEluc3RhbmNlKCkuZ2V0SG9va3MgPSBnZXRIb29rcztcbiAgICBkZWxldGUgZ2V0SW5zdGFuY2UoKS5ob29rczsgLy8gQWxsb3cgdXNlT3B0aW9ucyBob29rcyB0byBtb2RpZnkgdGhlIG9wdGlvbnMgY29taW5nIGludG8gdGhlIHRhYmxlXG5cbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkudXNlT3B0aW9ucywgYXBwbHlEZWZhdWx0cyhwcm9wcykpKTtcblxuICAgIHZhciBfZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBkYXRhID0gX2dldEluc3RhbmNlLmRhdGEsXG4gICAgICAgIHVzZXJDb2x1bW5zID0gX2dldEluc3RhbmNlLmNvbHVtbnMsXG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IF9nZXRJbnN0YW5jZS5pbml0aWFsU3RhdGUsXG4gICAgICAgIGRlZmF1bHRDb2x1bW4gPSBfZ2V0SW5zdGFuY2UuZGVmYXVsdENvbHVtbixcbiAgICAgICAgZ2V0U3ViUm93cyA9IF9nZXRJbnN0YW5jZS5nZXRTdWJSb3dzLFxuICAgICAgICBnZXRSb3dJZCA9IF9nZXRJbnN0YW5jZS5nZXRSb3dJZCxcbiAgICAgICAgc3RhdGVSZWR1Y2VyID0gX2dldEluc3RhbmNlLnN0YXRlUmVkdWNlcixcbiAgICAgICAgdXNlQ29udHJvbGxlZFN0YXRlID0gX2dldEluc3RhbmNlLnVzZUNvbnRyb2xsZWRTdGF0ZTsgLy8gU2V0dXAgdXNlciByZWR1Y2VyIHJlZlxuXG5cbiAgICB2YXIgZ2V0U3RhdGVSZWR1Y2VyID0gdXNlR2V0TGF0ZXN0KHN0YXRlUmVkdWNlcik7IC8vIEJ1aWxkIHRoZSByZWR1Y2VyXG5cbiAgICB2YXIgcmVkdWNlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAvLyBEZXRlY3QgaW52YWxpZCBhY3Rpb25zXG4gICAgICBpZiAoIWFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyh7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBBY3Rpb24g8J+RhicpO1xuICAgICAgfSAvLyBSZWR1Y2UgdGhlIHN0YXRlIGZyb20gYWxsIHBsdWdpbiByZWR1Y2Vyc1xuXG5cbiAgICAgIHJldHVybiBbXS5jb25jYXQoZ2V0SG9va3MoKS5zdGF0ZVJlZHVjZXJzLCBBcnJheS5pc0FycmF5KGdldFN0YXRlUmVkdWNlcigpKSA/IGdldFN0YXRlUmVkdWNlcigpIDogW2dldFN0YXRlUmVkdWNlcigpXSkucmVkdWNlKGZ1bmN0aW9uIChzLCBoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHMsIGFjdGlvbiwgc3RhdGUsIGdldEluc3RhbmNlKCkpIHx8IHM7XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfSwgW2dldEhvb2tzLCBnZXRTdGF0ZVJlZHVjZXIsIGdldEluc3RhbmNlXSk7IC8vIFN0YXJ0IHRoZSByZWR1Y2VyXG5cbiAgICB2YXIgX1JlYWN0JHVzZVJlZHVjZXIgPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuaW5pdFxuICAgICAgfSk7XG4gICAgfSksXG4gICAgICAgIHJlZHVjZXJTdGF0ZSA9IF9SZWFjdCR1c2VSZWR1Y2VyWzBdLFxuICAgICAgICBkaXNwYXRjaCA9IF9SZWFjdCR1c2VSZWR1Y2VyWzFdOyAvLyBBbGxvdyB0aGUgdXNlciB0byBjb250cm9sIHRoZSBmaW5hbCBzdGF0ZSB3aXRoIGhvb2tzXG5cblxuICAgIHZhciBzdGF0ZSA9IHJlZHVjZUhvb2tzKFtdLmNvbmNhdChnZXRIb29rcygpLnVzZUNvbnRyb2xsZWRTdGF0ZSwgW3VzZUNvbnRyb2xsZWRTdGF0ZV0pLCByZWR1Y2VyU3RhdGUsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihnZXRJbnN0YW5jZSgpLCB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICB9KTsgLy8gRGVjb3JhdGUgQWxsIHRoZSBjb2x1bW5zXG5cbiAgICB2YXIgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGxpbmtDb2x1bW5TdHJ1Y3R1cmUocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5jb2x1bW5zLCB1c2VyQ29sdW1ucywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSkpO1xuICAgIH0sIFtnZXRIb29rcywgZ2V0SW5zdGFuY2UsIHVzZXJDb2x1bW5zXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5jb2x1bW5zRGVwcywgW10sIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSkpKTtcbiAgICBnZXRJbnN0YW5jZSgpLmNvbHVtbnMgPSBjb2x1bW5zOyAvLyBHZXQgdGhlIGZsYXQgbGlzdCBvZiBhbGwgY29sdW1ucyBhbmQgYWxsb3cgaG9va3MgdG8gZGVjb3JhdGVcbiAgICAvLyB0aG9zZSBjb2x1bW5zIChhbmQgdHJpZ2dlciB0aGlzIG1lbW9pemF0aW9uIHZpYSBkZXBzKVxuXG4gICAgdmFyIGFsbENvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VIb29rcyhnZXRIb29rcygpLmFsbENvbHVtbnMsIGZsYXR0ZW5Db2x1bW5zKGNvbHVtbnMpLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9KS5tYXAoYXNzaWduQ29sdW1uQWNjZXNzb3IpO1xuICAgIH0sIFtjb2x1bW5zLCBnZXRIb29rcywgZ2V0SW5zdGFuY2VdLmNvbmNhdChyZWR1Y2VIb29rcyhnZXRIb29rcygpLmFsbENvbHVtbnNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpO1xuICAgIGdldEluc3RhbmNlKCkuYWxsQ29sdW1ucyA9IGFsbENvbHVtbnM7IC8vIEFjY2VzcyB0aGUgcm93IG1vZGVsIHVzaW5nIGluaXRpYWwgY29sdW1uc1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcm93cyA9IFtdO1xuICAgICAgdmFyIGZsYXRSb3dzID0gW107XG4gICAgICB2YXIgcm93c0J5SWQgPSB7fTtcbiAgICAgIHZhciBhbGxDb2x1bW5zUXVldWUgPSBbXS5jb25jYXQoYWxsQ29sdW1ucyk7XG5cbiAgICAgIHdoaWxlIChhbGxDb2x1bW5zUXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zUXVldWUuc2hpZnQoKTtcbiAgICAgICAgYWNjZXNzUm93c0ZvckNvbHVtbih7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgIGZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgICAgICByb3dzQnlJZDogcm93c0J5SWQsXG4gICAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgICAgZ2V0Um93SWQ6IGdldFJvd0lkLFxuICAgICAgICAgIGdldFN1YlJvd3M6IGdldFN1YlJvd3MsXG4gICAgICAgICAgYWNjZXNzVmFsdWVIb29rczogZ2V0SG9va3MoKS5hY2Nlc3NWYWx1ZSxcbiAgICAgICAgICBnZXRJbnN0YW5jZTogZ2V0SW5zdGFuY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICB9LCBbYWxsQ29sdW1ucywgZGF0YSwgZ2V0Um93SWQsIGdldFN1YlJvd3MsIGdldEhvb2tzLCBnZXRJbnN0YW5jZV0pLFxuICAgICAgICByb3dzID0gX1JlYWN0JHVzZU1lbW9bMF0sXG4gICAgICAgIGZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV0sXG4gICAgICAgIHJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bMl07XG5cbiAgICBPYmplY3QuYXNzaWduKGdldEluc3RhbmNlKCksIHtcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgICBpbml0aWFsUm93czogW10uY29uY2F0KHJvd3MpLFxuICAgICAgZmxhdFJvd3M6IGZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IHJvd3NCeUlkIC8vIG1hdGVyaWFsaXplZENvbHVtbnMsXG5cbiAgICB9KTtcbiAgICBsb29wSG9va3MoZ2V0SG9va3MoKS51c2VJbnN0YW5jZUFmdGVyRGF0YSwgZ2V0SW5zdGFuY2UoKSk7IC8vIEdldCB0aGUgZmxhdCBsaXN0IG9mIGFsbCBjb2x1bW5zIEFGVEVSIHRoZSByb3dzXG4gICAgLy8gaGF2ZSBiZWVuIGFjY2VzcywgYW5kIGFsbG93IGhvb2tzIHRvIGRlY29yYXRlXG4gICAgLy8gdGhvc2UgY29sdW1ucyAoYW5kIHRyaWdnZXIgdGhpcyBtZW1vaXphdGlvbiB2aWEgZGVwcylcblxuICAgIHZhciB2aXNpYmxlQ29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlZHVjZUhvb2tzKGdldEhvb2tzKCkudmlzaWJsZUNvbHVtbnMsIGFsbENvbHVtbnMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZGVjb3JhdGVDb2x1bW4oZCwgZGVmYXVsdENvbHVtbik7XG4gICAgICB9KTtcbiAgICB9LCBbZ2V0SG9va3MsIGFsbENvbHVtbnMsIGdldEluc3RhbmNlLCBkZWZhdWx0Q29sdW1uXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS52aXNpYmxlQ29sdW1uc0RlcHMsIFtdLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pKSk7IC8vIENvbWJpbmUgbmV3IHZpc2libGUgY29sdW1ucyB3aXRoIGFsbCBjb2x1bW5zXG5cbiAgICBhbGxDb2x1bW5zID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29sdW1ucyA9IFtdLmNvbmNhdCh2aXNpYmxlQ29sdW1ucyk7XG4gICAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICBpZiAoIWNvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkID09PSBjb2x1bW4uaWQ7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfSwgW2FsbENvbHVtbnMsIHZpc2libGVDb2x1bW5zXSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5hbGxDb2x1bW5zID0gYWxsQ29sdW1ucztcblxuICAgIHtcbiAgICAgIHZhciBkdXBsaWNhdGVDb2x1bW5zID0gYWxsQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbiwgaSkge1xuICAgICAgICByZXR1cm4gYWxsQ29sdW1ucy5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KSAhPT0gaTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZHVwbGljYXRlQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGFsbENvbHVtbnMpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEdXBsaWNhdGUgY29sdW1ucyB3ZXJlIGZvdW5kIHdpdGggaWRzOiBcXFwiXCIgKyBkdXBsaWNhdGVDb2x1bW5zLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICB9KS5qb2luKCcsICcpICsgXCJcXFwiIGluIHRoZSBjb2x1bW5zIGFycmF5IGFib3ZlXCIpO1xuICAgICAgfVxuICAgIH0gLy8gTWFrZSB0aGUgaGVhZGVyR3JvdXBzXG5cblxuICAgIHZhciBoZWFkZXJHcm91cHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWR1Y2VIb29rcyhnZXRIb29rcygpLmhlYWRlckdyb3VwcywgbWFrZUhlYWRlckdyb3Vwcyh2aXNpYmxlQ29sdW1ucywgZGVmYXVsdENvbHVtbiksIGdldEluc3RhbmNlKCkpO1xuICAgIH0sIFtnZXRIb29rcywgdmlzaWJsZUNvbHVtbnMsIGRlZmF1bHRDb2x1bW4sIGdldEluc3RhbmNlXS5jb25jYXQocmVkdWNlSG9va3MoZ2V0SG9va3MoKS5oZWFkZXJHcm91cHNEZXBzLCBbXSwge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KSkpO1xuICAgIGdldEluc3RhbmNlKCkuaGVhZGVyR3JvdXBzID0gaGVhZGVyR3JvdXBzOyAvLyBHZXQgdGhlIGZpcnN0IGxldmVsIG9mIGhlYWRlcnNcblxuICAgIHZhciBoZWFkZXJzID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaGVhZGVyR3JvdXBzLmxlbmd0aCA/IGhlYWRlckdyb3Vwc1swXS5oZWFkZXJzIDogW107XG4gICAgfSwgW2hlYWRlckdyb3Vwc10pO1xuICAgIGdldEluc3RhbmNlKCkuaGVhZGVycyA9IGhlYWRlcnM7IC8vIFByb3ZpZGUgYSBmbGF0IGhlYWRlciBsaXN0IGZvciB1dGlsaXRpZXNcblxuICAgIGdldEluc3RhbmNlKCkuZmxhdEhlYWRlcnMgPSBoZWFkZXJHcm91cHMucmVkdWNlKGZ1bmN0aW9uIChhbGwsIGhlYWRlckdyb3VwKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KGFsbCwgaGVhZGVyR3JvdXAuaGVhZGVycyk7XG4gICAgfSwgW10pO1xuICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucywgZ2V0SW5zdGFuY2UoKSk7IC8vIEZpbHRlciBjb2x1bW5zIGRvd24gdG8gdmlzaWJsZSBvbmVzXG5cbiAgICB2YXIgdmlzaWJsZUNvbHVtbnNEZXAgPSB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmlzVmlzaWJsZTtcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmlkO1xuICAgIH0pLnNvcnQoKS5qb2luKCdfJyk7XG4gICAgdmlzaWJsZUNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2aXNpYmxlQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaXNWaXNpYmxlO1xuICAgICAgfSk7XG4gICAgfSwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIFt2aXNpYmxlQ29sdW1ucywgdmlzaWJsZUNvbHVtbnNEZXBdKTtcbiAgICBnZXRJbnN0YW5jZSgpLnZpc2libGVDb2x1bW5zID0gdmlzaWJsZUNvbHVtbnM7IC8vIEhlYWRlciBWaXNpYmlsaXR5IGlzIG5lZWRlZCBieSB0aGlzIHBvaW50XG5cbiAgICB2YXIgX2NhbGN1bGF0ZUhlYWRlcldpZHRoID0gY2FsY3VsYXRlSGVhZGVyV2lkdGhzKGhlYWRlcnMpLFxuICAgICAgICB0b3RhbENvbHVtbnNNaW5XaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aFswXSxcbiAgICAgICAgdG90YWxDb2x1bW5zV2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGhbMV0sXG4gICAgICAgIHRvdGFsQ29sdW1uc01heFdpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoWzJdO1xuXG4gICAgZ2V0SW5zdGFuY2UoKS50b3RhbENvbHVtbnNNaW5XaWR0aCA9IHRvdGFsQ29sdW1uc01pbldpZHRoO1xuICAgIGdldEluc3RhbmNlKCkudG90YWxDb2x1bW5zV2lkdGggPSB0b3RhbENvbHVtbnNXaWR0aDtcbiAgICBnZXRJbnN0YW5jZSgpLnRvdGFsQ29sdW1uc01heFdpZHRoID0gdG90YWxDb2x1bW5zTWF4V2lkdGg7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlSW5zdGFuY2UsIGdldEluc3RhbmNlKCkpIC8vIEVhY2ggbWF0ZXJpYWxpemVkIGhlYWRlciBuZWVkcyB0byBiZSBhc3NpZ25lZCBhIHJlbmRlciBmdW5jdGlvbiBhbmQgb3RoZXJcbiAgICAvLyBwcm9wIGdldHRlciBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgO1xuICAgIFtdLmNvbmNhdChnZXRJbnN0YW5jZSgpLmZsYXRIZWFkZXJzLCBnZXRJbnN0YW5jZSgpLmFsbENvbHVtbnMpLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgLy8gR2l2ZSBjb2x1bW5zL2hlYWRlcnMgcmVuZGVyaW5nIHBvd2VyXG4gICAgICBjb2x1bW4ucmVuZGVyID0gbWFrZVJlbmRlcmVyKGdldEluc3RhbmNlKCksIGNvbHVtbik7IC8vIEdpdmUgY29sdW1ucy9oZWFkZXJzIGEgZGVmYXVsdCBnZXRIZWFkZXJQcm9wc1xuXG4gICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEhlYWRlclByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7IC8vIEdpdmUgY29sdW1ucy9oZWFkZXJzIGEgZGVmYXVsdCBnZXRGb290ZXJQcm9wc1xuXG4gICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEZvb3RlclByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5oZWFkZXJHcm91cHMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoZWFkZXJHcm91cHMuZmlsdGVyKGZ1bmN0aW9uIChoZWFkZXJHcm91cCwgaSkge1xuICAgICAgICAvLyBGaWx0ZXIgb3V0IGFueSBoZWFkZXJzIGFuZCBoZWFkZXJHcm91cHMgdGhhdCBkb24ndCBoYXZlIHZpc2libGUgY29sdW1uc1xuICAgICAgICBoZWFkZXJHcm91cC5oZWFkZXJzID0gaGVhZGVyR3JvdXAuaGVhZGVycy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgIHZhciByZWN1cnNlID0gZnVuY3Rpb24gcmVjdXJzZShoZWFkZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICBpZiAoY29sdW1uLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzZShjb2x1bW4uaGVhZGVycyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLmlzVmlzaWJsZTtcbiAgICAgICAgICAgIH0pLmxlbmd0aDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNvbHVtbi5oZWFkZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdXJzZShjb2x1bW4uaGVhZGVycyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5pc1Zpc2libGU7XG4gICAgICAgIH0pOyAvLyBHaXZlIGhlYWRlckdyb3VwcyBnZXRSb3dQcm9wc1xuXG4gICAgICAgIGlmIChoZWFkZXJHcm91cC5oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICAgIGhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldEhlYWRlckdyb3VwUHJvcHMsIHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgICAgaGVhZGVyR3JvdXA6IGhlYWRlckdyb3VwLFxuICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBoZWFkZXJHcm91cC5nZXRGb290ZXJHcm91cFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRGb290ZXJHcm91cFByb3BzLCB7XG4gICAgICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICAgIGhlYWRlckdyb3VwOiBoZWFkZXJHcm91cCxcbiAgICAgICAgICAgIGluZGV4OiBpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9LCBbaGVhZGVyR3JvdXBzLCBnZXRJbnN0YW5jZSwgZ2V0SG9va3NdKTtcbiAgICBnZXRJbnN0YW5jZSgpLmZvb3Rlckdyb3VwcyA9IFtdLmNvbmNhdChnZXRJbnN0YW5jZSgpLmhlYWRlckdyb3VwcykucmV2ZXJzZSgpOyAvLyBUaGUgcHJlcGFyZVJvdyBmdW5jdGlvbiBpcyBhYnNvbHV0ZWx5IG5lY2Vzc2FyeSBhbmQgTVVTVCBiZSBjYWxsZWQgb25cbiAgICAvLyBhbnkgcm93cyB0aGUgdXNlciB3aXNoZXMgdG8gYmUgZGlzcGxheWVkLlxuXG4gICAgZ2V0SW5zdGFuY2UoKS5wcmVwYXJlUm93ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHJvdykge1xuICAgICAgcm93LmdldFJvd1Byb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRSb3dQcm9wcywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgcm93OiByb3dcbiAgICAgIH0pOyAvLyBCdWlsZCB0aGUgdmlzaWJsZSBjZWxscyBmb3IgZWFjaCByb3dcblxuICAgICAgcm93LmFsbENlbGxzID0gYWxsQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICB2YXIgdmFsdWUgPSByb3cudmFsdWVzW2NvbHVtbi5pZF07XG4gICAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgIHJvdzogcm93LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9OyAvLyBHaXZlIGVhY2ggY2VsbCBhIGdldENlbGxQcm9wcyBiYXNlXG5cbiAgICAgICAgY2VsbC5nZXRDZWxsUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldENlbGxQcm9wcywge1xuICAgICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICAgIGNlbGw6IGNlbGxcbiAgICAgICAgfSk7IC8vIEdpdmUgZWFjaCBjZWxsIGEgcmVuZGVyZXIgZnVuY3Rpb24gKHN1cHBvcnRzIG11bHRpcGxlIHJlbmRlcmVycylcblxuICAgICAgICBjZWxsLnJlbmRlciA9IG1ha2VSZW5kZXJlcihnZXRJbnN0YW5jZSgpLCBjb2x1bW4sIHtcbiAgICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgICBjZWxsOiBjZWxsLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICB9KTtcbiAgICAgIHJvdy5jZWxscyA9IHZpc2libGVDb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiByb3cuYWxsQ2VsbHMuZmluZChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICAgIHJldHVybiBjZWxsLmNvbHVtbi5pZCA9PT0gY29sdW1uLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH0pOyAvLyBuZWVkIHRvIGFwcGx5IGFueSByb3cgc3BlY2lmaWMgaG9va3MgKHVzZUV4cGFuZGVkIHJlcXVpcmVzIHRoaXMpXG5cbiAgICAgIGxvb3BIb29rcyhnZXRIb29rcygpLnByZXBhcmVSb3csIHJvdywge1xuICAgICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgICAgfSk7XG4gICAgfSwgW2dldEhvb2tzLCBnZXRJbnN0YW5jZSwgYWxsQ29sdW1ucywgdmlzaWJsZUNvbHVtbnNdKTtcbiAgICBnZXRJbnN0YW5jZSgpLmdldFRhYmxlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRhYmxlUHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgZ2V0SW5zdGFuY2UoKS5nZXRUYWJsZUJvZHlQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0VGFibGVCb2R5UHJvcHMsIHtcbiAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgfSk7XG4gICAgbG9vcEhvb2tzKGdldEhvb2tzKCkudXNlRmluYWxJbnN0YW5jZSwgZ2V0SW5zdGFuY2UoKSk7XG4gICAgcmV0dXJuIGdldEluc3RhbmNlKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXRlSGVhZGVyV2lkdGhzKGhlYWRlcnMsIGxlZnQpIHtcbiAgICBpZiAobGVmdCA9PT0gdm9pZCAwKSB7XG4gICAgICBsZWZ0ID0gMDtcbiAgICB9XG5cbiAgICB2YXIgc3VtVG90YWxNaW5XaWR0aCA9IDA7XG4gICAgdmFyIHN1bVRvdGFsV2lkdGggPSAwO1xuICAgIHZhciBzdW1Ub3RhbE1heFdpZHRoID0gMDtcbiAgICB2YXIgc3VtVG90YWxGbGV4V2lkdGggPSAwO1xuICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICB2YXIgc3ViSGVhZGVycyA9IGhlYWRlci5oZWFkZXJzO1xuICAgICAgaGVhZGVyLnRvdGFsTGVmdCA9IGxlZnQ7XG5cbiAgICAgIGlmIChzdWJIZWFkZXJzICYmIHN1YkhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyID0gY2FsY3VsYXRlSGVhZGVyV2lkdGhzKHN1YkhlYWRlcnMsIGxlZnQpLFxuICAgICAgICAgICAgdG90YWxNaW5XaWR0aCA9IF9jYWxjdWxhdGVIZWFkZXJXaWR0aDJbMF0sXG4gICAgICAgICAgICB0b3RhbFdpZHRoID0gX2NhbGN1bGF0ZUhlYWRlcldpZHRoMlsxXSxcbiAgICAgICAgICAgIHRvdGFsTWF4V2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzJdLFxuICAgICAgICAgICAgdG90YWxGbGV4V2lkdGggPSBfY2FsY3VsYXRlSGVhZGVyV2lkdGgyWzNdO1xuXG4gICAgICAgIGhlYWRlci50b3RhbE1pbldpZHRoID0gdG90YWxNaW5XaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsV2lkdGggPSB0b3RhbFdpZHRoO1xuICAgICAgICBoZWFkZXIudG90YWxNYXhXaWR0aCA9IHRvdGFsTWF4V2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbEZsZXhXaWR0aCA9IHRvdGFsRmxleFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLnRvdGFsTWluV2lkdGggPSBoZWFkZXIubWluV2lkdGg7XG4gICAgICAgIGhlYWRlci50b3RhbFdpZHRoID0gTWF0aC5taW4oTWF0aC5tYXgoaGVhZGVyLm1pbldpZHRoLCBoZWFkZXIud2lkdGgpLCBoZWFkZXIubWF4V2lkdGgpO1xuICAgICAgICBoZWFkZXIudG90YWxNYXhXaWR0aCA9IGhlYWRlci5tYXhXaWR0aDtcbiAgICAgICAgaGVhZGVyLnRvdGFsRmxleFdpZHRoID0gaGVhZGVyLmNhblJlc2l6ZSA/IGhlYWRlci50b3RhbFdpZHRoIDogMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGhlYWRlci5pc1Zpc2libGUpIHtcbiAgICAgICAgbGVmdCArPSBoZWFkZXIudG90YWxXaWR0aDtcbiAgICAgICAgc3VtVG90YWxNaW5XaWR0aCArPSBoZWFkZXIudG90YWxNaW5XaWR0aDtcbiAgICAgICAgc3VtVG90YWxXaWR0aCArPSBoZWFkZXIudG90YWxXaWR0aDtcbiAgICAgICAgc3VtVG90YWxNYXhXaWR0aCArPSBoZWFkZXIudG90YWxNYXhXaWR0aDtcbiAgICAgICAgc3VtVG90YWxGbGV4V2lkdGggKz0gaGVhZGVyLnRvdGFsRmxleFdpZHRoO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBbc3VtVG90YWxNaW5XaWR0aCwgc3VtVG90YWxXaWR0aCwgc3VtVG90YWxNYXhXaWR0aCwgc3VtVG90YWxGbGV4V2lkdGhdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWNjZXNzUm93c0ZvckNvbHVtbihfcmVmKSB7XG4gICAgdmFyIGRhdGEgPSBfcmVmLmRhdGEsXG4gICAgICAgIHJvd3MgPSBfcmVmLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gX3JlZi5mbGF0Um93cyxcbiAgICAgICAgcm93c0J5SWQgPSBfcmVmLnJvd3NCeUlkLFxuICAgICAgICBjb2x1bW4gPSBfcmVmLmNvbHVtbixcbiAgICAgICAgZ2V0Um93SWQgPSBfcmVmLmdldFJvd0lkLFxuICAgICAgICBnZXRTdWJSb3dzID0gX3JlZi5nZXRTdWJSb3dzLFxuICAgICAgICBhY2Nlc3NWYWx1ZUhvb2tzID0gX3JlZi5hY2Nlc3NWYWx1ZUhvb2tzLFxuICAgICAgICBnZXRJbnN0YW5jZSA9IF9yZWYuZ2V0SW5zdGFuY2U7XG5cbiAgICAvLyBBY2Nlc3MgdGhlIHJvdydzIGRhdGEgY29sdW1uLWJ5LWNvbHVtblxuICAgIC8vIFdlIGRvIGl0IHRoaXMgd2F5IHNvIHdlIGNhbiBpbmNyZW1lbnRhbGx5IGFkZCBtYXRlcmlhbGl6ZWRcbiAgICAvLyBjb2x1bW5zIGFmdGVyIHRoZSBmaXJzdCBwYXNzIGFuZCBhdm9pZCBleGNlc3NpdmUgbG9vcGluZ1xuICAgIHZhciBhY2Nlc3NSb3cgPSBmdW5jdGlvbiBhY2Nlc3NSb3cob3JpZ2luYWxSb3csIHJvd0luZGV4LCBkZXB0aCwgcGFyZW50LCBwYXJlbnRSb3dzKSB7XG4gICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICBkZXB0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEtlZXAgdGhlIG9yaWdpbmFsIHJlZmVyZW5jZSBhcm91bmRcbiAgICAgIHZhciBvcmlnaW5hbCA9IG9yaWdpbmFsUm93O1xuICAgICAgdmFyIGlkID0gZ2V0Um93SWQob3JpZ2luYWxSb3csIHJvd0luZGV4LCBwYXJlbnQpO1xuICAgICAgdmFyIHJvdyA9IHJvd3NCeUlkW2lkXTsgLy8gSWYgdGhlIHJvdyBoYXNuJ3QgYmVlbiBjcmVhdGVkLCBsZXQncyBtYWtlIGl0XG5cbiAgICAgIGlmICghcm93KSB7XG4gICAgICAgIHJvdyA9IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgb3JpZ2luYWw6IG9yaWdpbmFsLFxuICAgICAgICAgIGluZGV4OiByb3dJbmRleCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgY2VsbHM6IFt7fV0gLy8gVGhpcyBpcyBhIGR1bW15IGNlbGxcblxuICAgICAgICB9OyAvLyBPdmVycmlkZSBjb21tb24gYXJyYXkgZnVuY3Rpb25zIChhbmQgdGhlIGR1bW15IGNlbGwncyBnZXRDZWxsUHJvcHMgZnVuY3Rpb24pXG4gICAgICAgIC8vIHRvIHNob3cgYW4gZXJyb3IgaWYgaXQgaXMgYWNjZXNzZWQgd2l0aG91dCBjYWxsaW5nIHByZXBhcmVSb3dcblxuICAgICAgICByb3cuY2VsbHMubWFwID0gdW5wcmVwYXJlZEFjY2Vzc1dhcm5pbmc7XG4gICAgICAgIHJvdy5jZWxscy5maWx0ZXIgPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZztcbiAgICAgICAgcm93LmNlbGxzLmZvckVhY2ggPSB1bnByZXBhcmVkQWNjZXNzV2FybmluZztcbiAgICAgICAgcm93LmNlbGxzWzBdLmdldENlbGxQcm9wcyA9IHVucHJlcGFyZWRBY2Nlc3NXYXJuaW5nOyAvLyBDcmVhdGUgdGhlIGNlbGxzIGFuZCB2YWx1ZXNcblxuICAgICAgICByb3cudmFsdWVzID0ge307IC8vIFB1c2ggdGhpcyByb3cgaW50byB0aGUgcGFyZW50Um93cyBhcnJheVxuXG4gICAgICAgIHBhcmVudFJvd3MucHVzaChyb3cpOyAvLyBLZWVwIHRyYWNrIG9mIGV2ZXJ5IHJvdyBpbiBhIGZsYXQgYXJyYXlcblxuICAgICAgICBmbGF0Um93cy5wdXNoKHJvdyk7IC8vIEFsc28ga2VlcCB0cmFjayBvZiBldmVyeSByb3cgYnkgaXRzIElEXG5cbiAgICAgICAgcm93c0J5SWRbaWRdID0gcm93OyAvLyBHZXQgdGhlIG9yaWdpbmFsIHN1YnJvd3NcblxuICAgICAgICByb3cub3JpZ2luYWxTdWJSb3dzID0gZ2V0U3ViUm93cyhvcmlnaW5hbFJvdywgcm93SW5kZXgpOyAvLyBUaGVuIHJlY3Vyc2l2ZWx5IGFjY2VzcyB0aGVtXG5cbiAgICAgICAgaWYgKHJvdy5vcmlnaW5hbFN1YlJvd3MpIHtcbiAgICAgICAgICB2YXIgc3ViUm93cyA9IFtdO1xuICAgICAgICAgIHJvdy5vcmlnaW5hbFN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzc1JvdyhkLCBpLCBkZXB0aCArIDEsIHJvdywgc3ViUm93cyk7XG4gICAgICAgICAgfSk7IC8vIEtlZXAgdGhlIG5ldyBzdWJSb3dzIGFycmF5IG9uIHRoZSByb3dcblxuICAgICAgICAgIHJvdy5zdWJSb3dzID0gc3ViUm93cztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyb3cuc3ViUm93cykge1xuICAgICAgICAvLyBJZiB0aGUgcm93IGV4aXN0cywgdGhlbiBpdCdzIGFscmVhZHkgYmVlbiBhY2Nlc3NlZFxuICAgICAgICAvLyBLZWVwIHJlY3Vyc2luZywgYnV0IGRvbid0IHdvcnJ5IGFib3V0IHBhc3NpbmcgdGhlXG4gICAgICAgIC8vIGFjY3VtbGF0b3IgYXJyYXkgKHRob3NlIHJvd3MgYWxyZWFkeSBleGlzdClcbiAgICAgICAgcm93Lm9yaWdpbmFsU3ViUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY2Vzc1JvdyhkLCBpLCBkZXB0aCArIDEsIHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBJZiB0aGUgY29sdW1uIGhhcyBhbiBhY2Nlc3NvciwgdXNlIGl0IHRvIGdldCBhIHZhbHVlXG5cblxuICAgICAgaWYgKGNvbHVtbi5hY2Nlc3Nvcikge1xuICAgICAgICByb3cudmFsdWVzW2NvbHVtbi5pZF0gPSBjb2x1bW4uYWNjZXNzb3Iob3JpZ2luYWxSb3csIHJvd0luZGV4LCByb3csIHBhcmVudFJvd3MsIGRhdGEpO1xuICAgICAgfSAvLyBBbGxvdyBwbHVnaW5zIHRvIG1hbmlwdWxhdGUgdGhlIGNvbHVtbiB2YWx1ZVxuXG5cbiAgICAgIHJvdy52YWx1ZXNbY29sdW1uLmlkXSA9IHJlZHVjZUhvb2tzKGFjY2Vzc1ZhbHVlSG9va3MsIHJvdy52YWx1ZXNbY29sdW1uLmlkXSwge1xuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpXG4gICAgICB9LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChvcmlnaW5hbFJvdywgcm93SW5kZXgpIHtcbiAgICAgIHJldHVybiBhY2Nlc3NSb3cob3JpZ2luYWxSb3csIHJvd0luZGV4LCAwLCB1bmRlZmluZWQsIHJvd3MpO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aW9ucy5yZXNldEV4cGFuZGVkID0gJ3Jlc2V0RXhwYW5kZWQnO1xuICBhY3Rpb25zLnRvZ2dsZVJvd0V4cGFuZGVkID0gJ3RvZ2dsZVJvd0V4cGFuZGVkJztcbiAgYWN0aW9ucy50b2dnbGVBbGxSb3dzRXhwYW5kZWQgPSAndG9nZ2xlQWxsUm93c0V4cGFuZGVkJztcbiAgdmFyIHVzZUV4cGFuZGVkID0gZnVuY3Rpb24gdXNlRXhwYW5kZWQoaG9va3MpIHtcbiAgICBob29rcy5nZXRUb2dnbGVBbGxSb3dzRXhwYW5kZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHNdO1xuICAgIGhvb2tzLmdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgPSBbZGVmYXVsdEdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDEpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkMSk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3cpO1xuICB9O1xuICB1c2VFeHBhbmRlZC5wbHVnaW5OYW1lID0gJ3VzZUV4cGFuZGVkJztcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgaW5zdGFuY2UudG9nZ2xlQWxsUm93c0V4cGFuZGVkKCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgUm93cyBFeHBhbmRlZCdcbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZVJvd0V4cGFuZGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlUm93RXhwYW5kZWRQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgcm93ID0gX3JlZjIucm93O1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIHJvdy50b2dnbGVSb3dFeHBhbmRlZCgpO1xuICAgICAgfSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICB9LFxuICAgICAgdGl0bGU6ICdUb2dnbGUgUm93IEV4cGFuZGVkJ1xuICAgIH1dO1xuICB9OyAvLyBSZWR1Y2VyXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDEoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZXhwYW5kZWQ6IHt9XG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0RXhwYW5kZWQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXhwYW5kZWQ6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5leHBhbmRlZCB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NFeHBhbmRlZCkge1xuICAgICAgdmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIGlzQWxsUm93c0V4cGFuZGVkID0gaW5zdGFuY2UuaXNBbGxSb3dzRXhwYW5kZWQsXG4gICAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZDtcbiAgICAgIHZhciBleHBhbmRBbGwgPSB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiAhaXNBbGxSb3dzRXhwYW5kZWQ7XG5cbiAgICAgIGlmIChleHBhbmRBbGwpIHtcbiAgICAgICAgdmFyIGV4cGFuZGVkID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHJvd3NCeUlkKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3dJZCkge1xuICAgICAgICAgIGV4cGFuZGVkW3Jvd0lkXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGV4cGFuZGVkOiB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZVJvd0V4cGFuZGVkKSB7XG4gICAgICB2YXIgaWQgPSBhY3Rpb24uaWQsXG4gICAgICAgICAgc2V0RXhwYW5kZWQgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgZXhpc3RzID0gc3RhdGUuZXhwYW5kZWRbaWRdO1xuICAgICAgdmFyIHNob3VsZEV4aXN0ID0gdHlwZW9mIHNldEV4cGFuZGVkICE9PSAndW5kZWZpbmVkJyA/IHNldEV4cGFuZGVkIDogIWV4aXN0cztcblxuICAgICAgaWYgKCFleGlzdHMgJiYgc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZXhwYW5kZWQ6IF9leHRlbmRzKHt9LCBzdGF0ZS5leHBhbmRlZCwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbaWRdID0gdHJ1ZSwgX2V4dGVuZHMyKSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGV4aXN0cyAmJiAhc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgdmFyIF9zdGF0ZSRleHBhbmRlZCA9IHN0YXRlLmV4cGFuZGVkLFxuICAgICAgICAgICAgXyA9IF9zdGF0ZSRleHBhbmRlZFtpZF0sXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3N0YXRlJGV4cGFuZGVkLCBbaWRdLm1hcChfdG9Qcm9wZXJ0eUtleSkpO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBleHBhbmRlZDogcmVzdFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQxKGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgX2luc3RhbmNlJG1hbnVhbEV4cGFuID0gaW5zdGFuY2UubWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5ID0gX2luc3RhbmNlJG1hbnVhbEV4cGFuID09PSB2b2lkIDAgPyAnZXhwYW5kZWQnIDogX2luc3RhbmNlJG1hbnVhbEV4cGFuLFxuICAgICAgICBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPSBpbnN0YW5jZS5wYWdpbmF0ZUV4cGFuZGVkUm93cyxcbiAgICAgICAgcGFnaW5hdGVFeHBhbmRlZFJvd3MgPSBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkcGFnaW5hdGVFeHAsXG4gICAgICAgIF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9IGluc3RhbmNlLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkZXhwYW5kU3ViUm8sXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRFeCA9IGluc3RhbmNlLmF1dG9SZXNldEV4cGFuZGVkLFxuICAgICAgICBhdXRvUmVzZXRFeHBhbmRlZCA9IF9pbnN0YW5jZSRhdXRvUmVzZXRFeCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRFeCxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIGV4cGFuZGVkID0gaW5zdGFuY2Uuc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VTb3J0QnknLCAndXNlR3JvdXBCeScsICd1c2VQaXZvdENvbHVtbnMnLCAndXNlR2xvYmFsRmlsdGVyJ10sICd1c2VFeHBhbmRlZCcpO1xuICAgIHZhciBnZXRBdXRvUmVzZXRFeHBhbmRlZCA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRFeHBhbmRlZCk7XG4gICAgdmFyIGlzQWxsUm93c0V4cGFuZGVkID0gQm9vbGVhbihPYmplY3Qua2V5cyhyb3dzQnlJZCkubGVuZ3RoICYmIE9iamVjdC5rZXlzKGV4cGFuZGVkKS5sZW5ndGgpO1xuXG4gICAgaWYgKGlzQWxsUm93c0V4cGFuZGVkKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMocm93c0J5SWQpLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiAhZXhwYW5kZWRbaWRdO1xuICAgICAgfSkpIHtcbiAgICAgICAgaXNBbGxSb3dzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IC8vIEJ5cGFzcyBhbnkgZWZmZWN0cyBmcm9tIGZpcmluZyB3aGVuIHRoaXMgY2hhbmdlc1xuXG5cbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRFeHBhbmRlZCgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0RXhwYW5kZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBkYXRhXSk7XG4gICAgdmFyIHRvZ2dsZVJvd0V4cGFuZGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGlkLCB2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVJvd0V4cGFuZGVkLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZUFsbFJvd3NFeHBhbmRlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVBbGxSb3dzRXhwYW5kZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGV4cGFuZGVkUm93cyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHBhZ2luYXRlRXhwYW5kZWRSb3dzKSB7XG4gICAgICAgIHJldHVybiBleHBhbmRSb3dzKHJvd3MsIHtcbiAgICAgICAgICBtYW51YWxFeHBhbmRlZEtleTogbWFudWFsRXhwYW5kZWRLZXksXG4gICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgICAgIGV4cGFuZFN1YlJvd3M6IGV4cGFuZFN1YlJvd3NcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzO1xuICAgIH0sIFtwYWdpbmF0ZUV4cGFuZGVkUm93cywgcm93cywgbWFudWFsRXhwYW5kZWRLZXksIGV4cGFuZGVkLCBleHBhbmRTdWJSb3dzXSk7XG4gICAgdmFyIGV4cGFuZGVkRGVwdGggPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmaW5kRXhwYW5kZWREZXB0aChleHBhbmRlZCk7XG4gICAgfSwgW2V4cGFuZGVkXSk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICB2YXIgZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZUV4cGFuZGVkUm93czogcm93cyxcbiAgICAgIGV4cGFuZGVkUm93czogZXhwYW5kZWRSb3dzLFxuICAgICAgcm93czogZXhwYW5kZWRSb3dzLFxuICAgICAgZXhwYW5kZWREZXB0aDogZXhwYW5kZWREZXB0aCxcbiAgICAgIGlzQWxsUm93c0V4cGFuZGVkOiBpc0FsbFJvd3NFeHBhbmRlZCxcbiAgICAgIHRvZ2dsZVJvd0V4cGFuZGVkOiB0b2dnbGVSb3dFeHBhbmRlZCxcbiAgICAgIHRvZ2dsZUFsbFJvd3NFeHBhbmRlZDogdG9nZ2xlQWxsUm93c0V4cGFuZGVkLFxuICAgICAgZ2V0VG9nZ2xlQWxsUm93c0V4cGFuZGVkUHJvcHM6IGdldFRvZ2dsZUFsbFJvd3NFeHBhbmRlZFByb3BzXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93KHJvdywgX3JlZjMpIHtcbiAgICB2YXIgZ2V0SG9va3MgPSBfcmVmMy5pbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgaW5zdGFuY2UgPSBfcmVmMy5pbnN0YW5jZTtcblxuICAgIHJvdy50b2dnbGVSb3dFeHBhbmRlZCA9IGZ1bmN0aW9uIChzZXQpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS50b2dnbGVSb3dFeHBhbmRlZChyb3cuaWQsIHNldCk7XG4gICAgfTtcblxuICAgIHJvdy5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoZ2V0SG9va3MoKS5nZXRUb2dnbGVSb3dFeHBhbmRlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICByb3c6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZEV4cGFuZGVkRGVwdGgoZXhwYW5kZWQpIHtcbiAgICB2YXIgbWF4RGVwdGggPSAwO1xuICAgIE9iamVjdC5rZXlzKGV4cGFuZGVkKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgdmFyIHNwbGl0SWQgPSBpZC5zcGxpdCgnLicpO1xuICAgICAgbWF4RGVwdGggPSBNYXRoLm1heChtYXhEZXB0aCwgc3BsaXRJZC5sZW5ndGgpO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXhEZXB0aDtcbiAgfVxuXG4gIHZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcm93cyA9IHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiBTdHJpbmcocm93VmFsdWUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoU3RyaW5nKGZpbHRlclZhbHVlKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByb3dzO1xuICB9O1xuXG4gIHRleHQuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbDtcbiAgfTtcblxuICB2YXIgZXhhY3RUZXh0ID0gZnVuY3Rpb24gZXhhY3RUZXh0KHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWQgPyBTdHJpbmcocm93VmFsdWUpLnRvTG93ZXJDYXNlKCkgPT09IFN0cmluZyhmaWx0ZXJWYWx1ZSkudG9Mb3dlckNhc2UoKSA6IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBleGFjdFRleHQuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gIXZhbDtcbiAgfTtcblxuICB2YXIgZXhhY3RUZXh0Q2FzZSA9IGZ1bmN0aW9uIGV4YWN0VGV4dENhc2Uocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgIT09IHVuZGVmaW5lZCA/IFN0cmluZyhyb3dWYWx1ZSkgPT09IFN0cmluZyhmaWx0ZXJWYWx1ZSkgOiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZXhhY3RUZXh0Q2FzZS5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsO1xuICB9O1xuXG4gIHZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlLmluY2x1ZGVzKGZpbHRlclZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGluY2x1ZGVzQWxsID0gZnVuY3Rpb24gaW5jbHVkZXNBbGwocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgJiYgcm93VmFsdWUubGVuZ3RoICYmIGZpbHRlclZhbHVlLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICByZXR1cm4gcm93VmFsdWUuaW5jbHVkZXModmFsKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpbmNsdWRlc0FsbC5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsIHx8ICF2YWwubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBpbmNsdWRlc1NvbWUgPSBmdW5jdGlvbiBpbmNsdWRlc1NvbWUocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgJiYgcm93VmFsdWUubGVuZ3RoICYmIGZpbHRlclZhbHVlLnNvbWUoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiByb3dWYWx1ZS5pbmNsdWRlcyh2YWwpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGluY2x1ZGVzU29tZS5hdXRvUmVtb3ZlID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiAhdmFsIHx8ICF2YWwubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBpbmNsdWRlc1ZhbHVlID0gZnVuY3Rpb24gaW5jbHVkZXNWYWx1ZShyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG4gICAgICAgIHJldHVybiBmaWx0ZXJWYWx1ZS5pbmNsdWRlcyhyb3dWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBpbmNsdWRlc1ZhbHVlLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgIXZhbC5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGV4YWN0ID0gZnVuY3Rpb24gZXhhY3Qocm93cywgaWRzLCBmaWx0ZXJWYWx1ZSkge1xuICAgIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgICByZXR1cm4gaWRzLnNvbWUoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuICAgICAgICByZXR1cm4gcm93VmFsdWUgPT09IGZpbHRlclZhbHVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZXhhY3QuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG4gIH07XG5cbiAgdmFyIGVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhyb3dzLCBpZHMsIGZpbHRlclZhbHVlKSB7XG4gICAgcmV0dXJuIHJvd3MuZmlsdGVyKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgIHJldHVybiBpZHMuc29tZShmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblxuICAgICAgICByZXR1cm4gcm93VmFsdWUgPT0gZmlsdGVyVmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBlcXVhbHMuYXV0b1JlbW92ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsID09IG51bGw7XG4gIH07XG5cbiAgdmFyIGJldHdlZW4gPSBmdW5jdGlvbiBiZXR3ZWVuKHJvd3MsIGlkcywgZmlsdGVyVmFsdWUpIHtcbiAgICB2YXIgX3JlZiA9IGZpbHRlclZhbHVlIHx8IFtdLFxuICAgICAgICBtaW4gPSBfcmVmWzBdLFxuICAgICAgICBtYXggPSBfcmVmWzFdO1xuXG4gICAgbWluID0gdHlwZW9mIG1pbiA9PT0gJ251bWJlcicgPyBtaW4gOiAtSW5maW5pdHk7XG4gICAgbWF4ID0gdHlwZW9mIG1heCA9PT0gJ251bWJlcicgPyBtYXggOiBJbmZpbml0eTtcblxuICAgIGlmIChtaW4gPiBtYXgpIHtcbiAgICAgIHZhciB0ZW1wID0gbWluO1xuICAgICAgbWluID0gbWF4O1xuICAgICAgbWF4ID0gdGVtcDtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93cy5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgICAgcmV0dXJuIGlkcy5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIHJvd1ZhbHVlID49IG1pbiAmJiByb3dWYWx1ZSA8PSBtYXg7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBiZXR3ZWVuLmF1dG9SZW1vdmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuICF2YWwgfHwgdHlwZW9mIHZhbFswXSAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbFsxXSAhPT0gJ251bWJlcic7XG4gIH07XG5cbiAgdmFyIGZpbHRlclR5cGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICB0ZXh0OiB0ZXh0LFxuICAgIGV4YWN0VGV4dDogZXhhY3RUZXh0LFxuICAgIGV4YWN0VGV4dENhc2U6IGV4YWN0VGV4dENhc2UsXG4gICAgaW5jbHVkZXM6IGluY2x1ZGVzLFxuICAgIGluY2x1ZGVzQWxsOiBpbmNsdWRlc0FsbCxcbiAgICBpbmNsdWRlc1NvbWU6IGluY2x1ZGVzU29tZSxcbiAgICBpbmNsdWRlc1ZhbHVlOiBpbmNsdWRlc1ZhbHVlLFxuICAgIGV4YWN0OiBleGFjdCxcbiAgICBlcXVhbHM6IGVxdWFscyxcbiAgICBiZXR3ZWVuOiBiZXR3ZWVuXG4gIH0pO1xuXG4gIGFjdGlvbnMucmVzZXRGaWx0ZXJzID0gJ3Jlc2V0RmlsdGVycyc7XG4gIGFjdGlvbnMuc2V0RmlsdGVyID0gJ3NldEZpbHRlcic7XG4gIGFjdGlvbnMuc2V0QWxsRmlsdGVycyA9ICdzZXRBbGxGaWx0ZXJzJztcbiAgdmFyIHVzZUZpbHRlcnMgPSBmdW5jdGlvbiB1c2VGaWx0ZXJzKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkMik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQyKTtcbiAgfTtcbiAgdXNlRmlsdGVycy5wbHVnaW5OYW1lID0gJ3VzZUZpbHRlcnMnO1xuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkMihzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBmaWx0ZXJzOiBbXVxuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldEZpbHRlcnMpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZmlsdGVyczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLmZpbHRlcnMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5zZXRGaWx0ZXIpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBmaWx0ZXJWYWx1ZSA9IGFjdGlvbi5maWx0ZXJWYWx1ZTtcbiAgICAgIHZhciBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgICB1c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcztcbiAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghY29sdW1uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LVRhYmxlOiBDb3VsZCBub3QgZmluZCBhIGNvbHVtbiB3aXRoIGlkOiBcIiArIGNvbHVtbklkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChjb2x1bW4uZmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMgfHwge30sIGZpbHRlclR5cGVzKTtcbiAgICAgIHZhciBwcmV2aW91c2ZpbHRlciA9IHN0YXRlLmZpbHRlcnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdGaWx0ZXIgPSBmdW5jdGlvbmFsVXBkYXRlKGZpbHRlclZhbHVlLCBwcmV2aW91c2ZpbHRlciAmJiBwcmV2aW91c2ZpbHRlci52YWx1ZSk7IC8vXG5cbiAgICAgIGlmIChzaG91bGRBdXRvUmVtb3ZlRmlsdGVyKGZpbHRlck1ldGhvZC5hdXRvUmVtb3ZlLCBuZXdGaWx0ZXIsIGNvbHVtbikpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCAhPT0gY29sdW1uSWQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2aW91c2ZpbHRlcikge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGlmIChkLmlkID09PSBjb2x1bW5JZCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3RmlsdGVyXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGZpbHRlcnM6IFtdLmNvbmNhdChzdGF0ZS5maWx0ZXJzLCBbe1xuICAgICAgICAgIGlkOiBjb2x1bW5JZCxcbiAgICAgICAgICB2YWx1ZTogbmV3RmlsdGVyXG4gICAgICAgIH1dKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEFsbEZpbHRlcnMpIHtcbiAgICAgIHZhciBmaWx0ZXJzID0gYWN0aW9uLmZpbHRlcnM7XG4gICAgICB2YXIgX2FsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICAgIF91c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcztcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgLy8gRmlsdGVyIG91dCB1bmRlZmluZWQgdmFsdWVzXG4gICAgICAgIGZpbHRlcnM6IGZ1bmN0aW9uYWxVcGRhdGUoZmlsdGVycywgc3RhdGUuZmlsdGVycykuZmlsdGVyKGZ1bmN0aW9uIChmaWx0ZXIpIHtcbiAgICAgICAgICB2YXIgY29sdW1uID0gX2FsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGZpbHRlci5pZDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoY29sdW1uLmZpbHRlciwgX3VzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuXG4gICAgICAgICAgaWYgKHNob3VsZEF1dG9SZW1vdmVGaWx0ZXIoZmlsdGVyTWV0aG9kLmF1dG9SZW1vdmUsIGZpbHRlci52YWx1ZSwgY29sdW1uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkMihpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICB1c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcyxcbiAgICAgICAgbWFudWFsRmlsdGVycyA9IGluc3RhbmNlLm1hbnVhbEZpbHRlcnMsXG4gICAgICAgIF9pbnN0YW5jZSRkZWZhdWx0Q2FuRiA9IGluc3RhbmNlLmRlZmF1bHRDYW5GaWx0ZXIsXG4gICAgICAgIGRlZmF1bHRDYW5GaWx0ZXIgPSBfaW5zdGFuY2UkZGVmYXVsdENhbkYgPT09IHZvaWQgMCA/IGZhbHNlIDogX2luc3RhbmNlJGRlZmF1bHRDYW5GLFxuICAgICAgICBkaXNhYmxlRmlsdGVycyA9IGluc3RhbmNlLmRpc2FibGVGaWx0ZXJzLFxuICAgICAgICBmaWx0ZXJzID0gaW5zdGFuY2Uuc3RhdGUuZmlsdGVycyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldEZpID0gaW5zdGFuY2UuYXV0b1Jlc2V0RmlsdGVycyxcbiAgICAgICAgYXV0b1Jlc2V0RmlsdGVycyA9IF9pbnN0YW5jZSRhdXRvUmVzZXRGaSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRGaTtcbiAgICB2YXIgc2V0RmlsdGVyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbklkLCBmaWx0ZXJWYWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEZpbHRlcixcbiAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICBmaWx0ZXJWYWx1ZTogZmlsdGVyVmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIHZhciBzZXRBbGxGaWx0ZXJzID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGZpbHRlcnMpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRBbGxGaWx0ZXJzLFxuICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGlkID0gY29sdW1uLmlkLFxuICAgICAgICAgIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGNvbHVtbkRlZmF1bHRDYW5GaWx0ZXIgPSBjb2x1bW4uZGVmYXVsdENhbkZpbHRlcixcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlRmlsdGVycyA9IGNvbHVtbi5kaXNhYmxlRmlsdGVyczsgLy8gRGV0ZXJtaW5lIGlmIGEgY29sdW1uIGlzIGZpbHRlcmFibGVcblxuICAgICAgY29sdW1uLmNhbkZpbHRlciA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRpc2FibGVGaWx0ZXJzID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIGRpc2FibGVGaWx0ZXJzID09PSB0cnVlID8gZmFsc2UgOiB1bmRlZmluZWQsIHRydWUpIDogZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRlZmF1bHRDYW5GaWx0ZXIsIGRlZmF1bHRDYW5GaWx0ZXIsIGZhbHNlKTsgLy8gUHJvdmlkZSB0aGUgY29sdW1uIGEgd2F5IG9mIHVwZGF0aW5nIHRoZSBmaWx0ZXIgdmFsdWVcblxuICAgICAgY29sdW1uLnNldEZpbHRlciA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHNldEZpbHRlcihjb2x1bW4uaWQsIHZhbCk7XG4gICAgICB9OyAvLyBQcm92aWRlIHRoZSBjdXJyZW50IGZpbHRlciB2YWx1ZSB0byB0aGUgY29sdW1uIGZvclxuICAgICAgLy8gY29udmVuaWVuY2VcblxuXG4gICAgICB2YXIgZm91bmQgPSBmaWx0ZXJzLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGlkO1xuICAgICAgfSk7XG4gICAgICBjb2x1bW4uZmlsdGVyVmFsdWUgPSBmb3VuZCAmJiBmb3VuZC52YWx1ZTtcbiAgICB9KTtcblxuICAgIHZhciBfUmVhY3QkdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hbnVhbEZpbHRlcnMgfHwgIWZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBbcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbHRlcmVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBmaWx0ZXJlZFJvd3NCeUlkID0ge307IC8vIEZpbHRlcnMgdG9wIGxldmVsIGFuZCBuZXN0ZWQgcm93c1xuXG4gICAgICB2YXIgZmlsdGVyUm93cyA9IGZ1bmN0aW9uIGZpbHRlclJvd3Mocm93cywgZGVwdGgpIHtcbiAgICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgICBkZXB0aCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmlsdGVyZWRSb3dzID0gcm93cztcbiAgICAgICAgZmlsdGVyZWRSb3dzID0gZmlsdGVycy5yZWR1Y2UoZnVuY3Rpb24gKGZpbHRlcmVkU29GYXIsIF9yZWYpIHtcbiAgICAgICAgICB2YXIgY29sdW1uSWQgPSBfcmVmLmlkLFxuICAgICAgICAgICAgICBmaWx0ZXJWYWx1ZSA9IF9yZWYudmFsdWU7XG4gICAgICAgICAgLy8gRmluZCB0aGUgZmlsdGVycyBjb2x1bW5cbiAgICAgICAgICB2YXIgY29sdW1uID0gYWxsQ29sdW1ucy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIWNvbHVtbikge1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgICBjb2x1bW4ucHJlRmlsdGVyZWRSb3dzID0gZmlsdGVyZWRTb0ZhcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZmlsdGVyTWV0aG9kID0gZ2V0RmlsdGVyTWV0aG9kKGNvbHVtbi5maWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuXG4gICAgICAgICAgaWYgKCFmaWx0ZXJNZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBmaW5kIGEgdmFsaWQgJ2NvbHVtbi5maWx0ZXInIGZvciBjb2x1bW4gd2l0aCB0aGUgSUQ6IFwiICsgY29sdW1uLmlkICsgXCIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkU29GYXI7XG4gICAgICAgICAgfSAvLyBQYXNzIHRoZSByb3dzLCBpZCwgZmlsdGVyVmFsdWUgYW5kIGNvbHVtbiB0byB0aGUgZmlsdGVyTWV0aG9kXG4gICAgICAgICAgLy8gdG8gZ2V0IHRoZSBmaWx0ZXJlZCByb3dzIGJhY2tcblxuXG4gICAgICAgICAgY29sdW1uLmZpbHRlcmVkUm93cyA9IGZpbHRlck1ldGhvZChmaWx0ZXJlZFNvRmFyLCBbY29sdW1uSWRdLCBmaWx0ZXJWYWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5maWx0ZXJlZFJvd3M7XG4gICAgICAgIH0sIHJvd3MpOyAvLyBBcHBseSB0aGUgZmlsdGVyIHRvIGFueSBzdWJSb3dzXG4gICAgICAgIC8vIFdlIHRlY2huaWNhbGx5IGNvdWxkIGRvIHRoaXMgcmVjdXJzaXZlbHkgaW4gdGhlIGFib3ZlIGxvb3AsXG4gICAgICAgIC8vIGJ1dCB0aGF0IHdvdWxkIHNldmVyZWx5IGhpbmRlciB0aGUgQVBJIGZvciB0aGUgdXNlciwgc2luY2UgdGhleVxuICAgICAgICAvLyB3b3VsZCBiZSByZXF1aXJlZCB0byBkbyB0aGF0IHJlY3Vyc2lvbiBpbiBzb21lIHNjZW5hcmlvc1xuXG4gICAgICAgIGZpbHRlcmVkUm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICBmaWx0ZXJlZEZsYXRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgICBmaWx0ZXJlZFJvd3NCeUlkW3Jvdy5pZF0gPSByb3c7XG5cbiAgICAgICAgICBpZiAoIXJvdy5zdWJSb3dzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm93LnN1YlJvd3MgPSByb3cuc3ViUm93cyAmJiByb3cuc3ViUm93cy5sZW5ndGggPiAwID8gZmlsdGVyUm93cyhyb3cuc3ViUm93cywgZGVwdGggKyAxKSA6IHJvdy5zdWJSb3dzO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUm93cztcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBbZmlsdGVyUm93cyhyb3dzKSwgZmlsdGVyZWRGbGF0Um93cywgZmlsdGVyZWRSb3dzQnlJZF07XG4gICAgfSwgW21hbnVhbEZpbHRlcnMsIGZpbHRlcnMsIHJvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgYWxsQ29sdW1ucywgdXNlckZpbHRlclR5cGVzXSksXG4gICAgICAgIGZpbHRlcmVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBmaWx0ZXJlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV0sXG4gICAgICAgIGZpbHRlcmVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXTtcblxuICAgIFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTm93IHRoYXQgZWFjaCBmaWx0ZXJlZCBjb2x1bW4gaGFzIGl0J3MgcGFydGlhbGx5IGZpbHRlcmVkIHJvd3MsXG4gICAgICAvLyBsZXRzIGFzc2lnbiB0aGUgZmluYWwgZmlsdGVyZWQgcm93cyB0byBhbGwgb2YgdGhlIG90aGVyIGNvbHVtbnNcbiAgICAgIHZhciBub25GaWx0ZXJlZENvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiAhZmlsdGVycy5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbi5pZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gVGhpcyBlc3NlbnRpYWxseSBlbmFibGVzIGZhY2V0ZWQgZmlsdGVyIG9wdGlvbnMgdG8gYmUgYnVpbHQgZWFzaWx5XG4gICAgICAvLyB1c2luZyBldmVyeSBjb2x1bW4ncyBwcmVGaWx0ZXJlZFJvd3MgdmFsdWVcblxuICAgICAgbm9uRmlsdGVyZWRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICBjb2x1bW4ucHJlRmlsdGVyZWRSb3dzID0gZmlsdGVyZWRSb3dzO1xuICAgICAgICBjb2x1bW4uZmlsdGVyZWRSb3dzID0gZmlsdGVyZWRSb3dzO1xuICAgICAgfSk7XG4gICAgfSwgW2ZpbHRlcmVkUm93cywgZmlsdGVycywgYWxsQ29sdW1uc10pO1xuICAgIHZhciBnZXRBdXRvUmVzZXRGaWx0ZXJzID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldEZpbHRlcnMpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldEZpbHRlcnMoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEZpbHRlcnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxGaWx0ZXJzID8gbnVsbCA6IGRhdGFdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwcmVGaWx0ZXJlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVGaWx0ZXJlZEZsYXRSb3dzOiBmbGF0Um93cyxcbiAgICAgIHByZUZpbHRlcmVkUm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgZmlsdGVyZWRSb3dzOiBmaWx0ZXJlZFJvd3MsXG4gICAgICBmaWx0ZXJlZEZsYXRSb3dzOiBmaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgZmlsdGVyZWRSb3dzQnlJZDogZmlsdGVyZWRSb3dzQnlJZCxcbiAgICAgIHJvd3M6IGZpbHRlcmVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBmaWx0ZXJlZEZsYXRSb3dzLFxuICAgICAgcm93c0J5SWQ6IGZpbHRlcmVkUm93c0J5SWQsXG4gICAgICBzZXRGaWx0ZXI6IHNldEZpbHRlcixcbiAgICAgIHNldEFsbEZpbHRlcnM6IHNldEFsbEZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGlvbnMucmVzZXRHbG9iYWxGaWx0ZXIgPSAncmVzZXRHbG9iYWxGaWx0ZXInO1xuICBhY3Rpb25zLnNldEdsb2JhbEZpbHRlciA9ICdzZXRHbG9iYWxGaWx0ZXInO1xuICB2YXIgdXNlR2xvYmFsRmlsdGVyID0gZnVuY3Rpb24gdXNlR2xvYmFsRmlsdGVyKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkMyk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQzKTtcbiAgfTtcbiAgdXNlR2xvYmFsRmlsdGVyLnBsdWdpbk5hbWUgPSAndXNlR2xvYmFsRmlsdGVyJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJDMoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRHbG9iYWxGaWx0ZXIpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2xvYmFsRmlsdGVyOiBpbnN0YW5jZS5pbml0aWFsU3RhdGUuZ2xvYmFsRmlsdGVyIHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldEdsb2JhbEZpbHRlcikge1xuICAgICAgdmFyIGZpbHRlclZhbHVlID0gYWN0aW9uLmZpbHRlclZhbHVlO1xuICAgICAgdmFyIHVzZXJGaWx0ZXJUeXBlcyA9IGluc3RhbmNlLnVzZXJGaWx0ZXJUeXBlcztcbiAgICAgIHZhciBmaWx0ZXJNZXRob2QgPSBnZXRGaWx0ZXJNZXRob2QoaW5zdGFuY2UuZ2xvYmFsRmlsdGVyLCB1c2VyRmlsdGVyVHlwZXMgfHwge30sIGZpbHRlclR5cGVzKTtcbiAgICAgIHZhciBuZXdGaWx0ZXIgPSBmdW5jdGlvbmFsVXBkYXRlKGZpbHRlclZhbHVlLCBzdGF0ZS5nbG9iYWxGaWx0ZXIpOyAvL1xuXG4gICAgICBpZiAoc2hvdWxkQXV0b1JlbW92ZUZpbHRlcihmaWx0ZXJNZXRob2QuYXV0b1JlbW92ZSwgbmV3RmlsdGVyKSkge1xuICAgICAgICB2YXIgZ2xvYmFsRmlsdGVyID0gc3RhdGUuZ2xvYmFsRmlsdGVyLFxuICAgICAgICAgICAgc3RhdGVXaXRob3V0R2xvYmFsRmlsdGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc3RhdGUsIFtcImdsb2JhbEZpbHRlclwiXSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlV2l0aG91dEdsb2JhbEZpbHRlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBnbG9iYWxGaWx0ZXI6IG5ld0ZpbHRlclxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkMyhpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICB1c2VyRmlsdGVyVHlwZXMgPSBpbnN0YW5jZS5maWx0ZXJUeXBlcyxcbiAgICAgICAgZ2xvYmFsRmlsdGVyID0gaW5zdGFuY2UuZ2xvYmFsRmlsdGVyLFxuICAgICAgICBtYW51YWxHbG9iYWxGaWx0ZXIgPSBpbnN0YW5jZS5tYW51YWxHbG9iYWxGaWx0ZXIsXG4gICAgICAgIGdsb2JhbEZpbHRlclZhbHVlID0gaW5zdGFuY2Uuc3RhdGUuZ2xvYmFsRmlsdGVyLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0R2wgPSBpbnN0YW5jZS5hdXRvUmVzZXRHbG9iYWxGaWx0ZXIsXG4gICAgICAgIGF1dG9SZXNldEdsb2JhbEZpbHRlciA9IF9pbnN0YW5jZSRhdXRvUmVzZXRHbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRhdXRvUmVzZXRHbCxcbiAgICAgICAgZGlzYWJsZUdsb2JhbEZpbHRlciA9IGluc3RhbmNlLmRpc2FibGVHbG9iYWxGaWx0ZXI7XG4gICAgdmFyIHNldEdsb2JhbEZpbHRlciA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmaWx0ZXJWYWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldEdsb2JhbEZpbHRlcixcbiAgICAgICAgZmlsdGVyVmFsdWU6IGZpbHRlclZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTsgLy8gVE9ETzogQ3JlYXRlIGEgZmlsdGVyIGNhY2hlIGZvciBpbmNyZW1lbnRhbCBoaWdoIHNwZWVkIG11bHRpLWZpbHRlcmluZ1xuICAgIC8vIFRoaXMgZ2V0cyBwcmV0dHkgY29tcGxpY2F0ZWQgcHJldHR5IGZhc3QsIHNpbmNlIHlvdSBoYXZlIHRvIG1haW50YWluIGFcbiAgICAvLyBjYWNoZSBmb3IgZWFjaCByb3cgZ3JvdXAgKHRvcC1sZXZlbCByb3dzLCBhbmQgZWFjaCByb3cncyByZWN1cnNpdmUgc3Vicm93cylcbiAgICAvLyBUaGlzIHdvdWxkIG1ha2UgbXVsdGktZmlsdGVyaW5nIGEgbG90IGZhc3RlciB0aG91Z2guIFRvbyBmYXI/XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxHbG9iYWxGaWx0ZXIgfHwgdHlwZW9mIGdsb2JhbEZpbHRlclZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzLCByb3dzQnlJZF07XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWx0ZXJlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgZmlsdGVyZWRSb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIGZpbHRlck1ldGhvZCA9IGdldEZpbHRlck1ldGhvZChnbG9iYWxGaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcyB8fCB7fSwgZmlsdGVyVHlwZXMpO1xuXG4gICAgICBpZiAoIWZpbHRlck1ldGhvZCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJDb3VsZCBub3QgZmluZCBhIHZhbGlkICdnbG9iYWxGaWx0ZXInIG9wdGlvbi5cIik7XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgICAgfVxuXG4gICAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICB2YXIgY29sdW1uRGlzYWJsZUdsb2JhbEZpbHRlciA9IGNvbHVtbi5kaXNhYmxlR2xvYmFsRmlsdGVyO1xuICAgICAgICBjb2x1bW4uY2FuRmlsdGVyID0gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRpc2FibGVHbG9iYWxGaWx0ZXIgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUdsb2JhbEZpbHRlciA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpbHRlcmFibGVDb2x1bW5zID0gYWxsQ29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMuY2FuRmlsdGVyID09PSB0cnVlO1xuICAgICAgfSk7IC8vIEZpbHRlcnMgdG9wIGxldmVsIGFuZCBuZXN0ZWQgcm93c1xuXG4gICAgICB2YXIgZmlsdGVyUm93cyA9IGZ1bmN0aW9uIGZpbHRlclJvd3MoZmlsdGVyZWRSb3dzKSB7XG4gICAgICAgIGZpbHRlcmVkUm93cyA9IGZpbHRlck1ldGhvZChmaWx0ZXJlZFJvd3MsIGZpbHRlcmFibGVDb2x1bW5zLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkLmlkO1xuICAgICAgICB9KSwgZ2xvYmFsRmlsdGVyVmFsdWUpO1xuICAgICAgICBmaWx0ZXJlZFJvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgZmlsdGVyZWRGbGF0Um93cy5wdXNoKHJvdyk7XG4gICAgICAgICAgZmlsdGVyZWRSb3dzQnlJZFtyb3cuaWRdID0gcm93O1xuICAgICAgICAgIHJvdy5zdWJSb3dzID0gcm93LnN1YlJvd3MgJiYgcm93LnN1YlJvd3MubGVuZ3RoID8gZmlsdGVyUm93cyhyb3cuc3ViUm93cykgOiByb3cuc3ViUm93cztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJvd3M7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gW2ZpbHRlclJvd3Mocm93cyksIGZpbHRlcmVkRmxhdFJvd3MsIGZpbHRlcmVkUm93c0J5SWRdO1xuICAgIH0sIFttYW51YWxHbG9iYWxGaWx0ZXIsIGdsb2JhbEZpbHRlclZhbHVlLCBnbG9iYWxGaWx0ZXIsIHVzZXJGaWx0ZXJUeXBlcywgYWxsQ29sdW1ucywgcm93cywgZmxhdFJvd3MsIHJvd3NCeUlkLCBkaXNhYmxlR2xvYmFsRmlsdGVyXSksXG4gICAgICAgIGdsb2JhbEZpbHRlcmVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBnbG9iYWxGaWx0ZXJlZEZsYXRSb3dzID0gX1JlYWN0JHVzZU1lbW9bMV0sXG4gICAgICAgIGdsb2JhbEZpbHRlcmVkUm93c0J5SWQgPSBfUmVhY3QkdXNlTWVtb1syXTtcblxuICAgIHZhciBnZXRBdXRvUmVzZXRHbG9iYWxGaWx0ZXIgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0R2xvYmFsRmlsdGVyKTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRHbG9iYWxGaWx0ZXIoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldEdsb2JhbEZpbHRlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbnVhbEdsb2JhbEZpbHRlciA/IG51bGwgOiBkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlR2xvYmFsRmlsdGVyZWRSb3dzOiByb3dzLFxuICAgICAgcHJlR2xvYmFsRmlsdGVyZWRGbGF0Um93czogZmxhdFJvd3MsXG4gICAgICBwcmVHbG9iYWxGaWx0ZXJlZFJvd3NCeUlkOiByb3dzQnlJZCxcbiAgICAgIGdsb2JhbEZpbHRlcmVkUm93czogZ2xvYmFsRmlsdGVyZWRSb3dzLFxuICAgICAgZ2xvYmFsRmlsdGVyZWRGbGF0Um93czogZ2xvYmFsRmlsdGVyZWRGbGF0Um93cyxcbiAgICAgIGdsb2JhbEZpbHRlcmVkUm93c0J5SWQ6IGdsb2JhbEZpbHRlcmVkUm93c0J5SWQsXG4gICAgICByb3dzOiBnbG9iYWxGaWx0ZXJlZFJvd3MsXG4gICAgICBmbGF0Um93czogZ2xvYmFsRmlsdGVyZWRGbGF0Um93cyxcbiAgICAgIHJvd3NCeUlkOiBnbG9iYWxGaWx0ZXJlZFJvd3NCeUlkLFxuICAgICAgc2V0R2xvYmFsRmlsdGVyOiBzZXRHbG9iYWxGaWx0ZXIsXG4gICAgICBkaXNhYmxlR2xvYmFsRmlsdGVyOiBkaXNhYmxlR2xvYmFsRmlsdGVyXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdW0odmFsdWVzLCBhZ2dyZWdhdGVkVmFsdWVzKSB7XG4gICAgLy8gSXQncyBmYXN0ZXIgdG8ganVzdCBhZGQgdGhlIGFnZ3JlZ2F0aW9ucyB0b2dldGhlciBpbnN0ZWFkIG9mXG4gICAgLy8gcHJvY2VzcyBsZWFmIG5vZGVzIGluZGl2aWR1YWxseVxuICAgIHJldHVybiBhZ2dyZWdhdGVkVmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBuZXh0KSB7XG4gICAgICByZXR1cm4gc3VtICsgKHR5cGVvZiBuZXh0ID09PSAnbnVtYmVyJyA/IG5leHQgOiAwKTtcbiAgICB9LCAwKTtcbiAgfVxuICBmdW5jdGlvbiBtaW4odmFsdWVzKSB7XG4gICAgdmFyIG1pbiA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBmdW5jdGlvbiBtYXgodmFsdWVzKSB7XG4gICAgdmFyIG1heCA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICBmdW5jdGlvbiBtaW5NYXgodmFsdWVzKSB7XG4gICAgdmFyIG1pbiA9IHZhbHVlc1swXSB8fCAwO1xuICAgIHZhciBtYXggPSB2YWx1ZXNbMF0gfHwgMDtcbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUpO1xuICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWluICsgXCIuLlwiICsgbWF4O1xuICB9XG4gIGZ1bmN0aW9uIGF2ZXJhZ2UodmFsdWVzKSB7XG4gICAgcmV0dXJuIHN1bShudWxsLCB2YWx1ZXMpIC8gdmFsdWVzLmxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBtZWRpYW4odmFsdWVzKSB7XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWlkID0gTWF0aC5mbG9vcih2YWx1ZXMubGVuZ3RoIC8gMik7XG4gICAgdmFyIG51bXMgPSBbXS5jb25jYXQodmFsdWVzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcy5sZW5ndGggJSAyICE9PSAwID8gbnVtc1ttaWRdIDogKG51bXNbbWlkIC0gMV0gKyBudW1zW21pZF0pIC8gMjtcbiAgfVxuICBmdW5jdGlvbiB1bmlxdWUodmFsdWVzKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMpLnZhbHVlcygpKTtcbiAgfVxuICBmdW5jdGlvbiB1bmlxdWVDb3VudCh2YWx1ZXMpIHtcbiAgICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpLnNpemU7XG4gIH1cbiAgZnVuY3Rpb24gY291bnQodmFsdWVzKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5sZW5ndGg7XG4gIH1cblxuICB2YXIgYWdncmVnYXRpb25zID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBzdW06IHN1bSxcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heCxcbiAgICBtaW5NYXg6IG1pbk1heCxcbiAgICBhdmVyYWdlOiBhdmVyYWdlLFxuICAgIG1lZGlhbjogbWVkaWFuLFxuICAgIHVuaXF1ZTogdW5pcXVlLFxuICAgIHVuaXF1ZUNvdW50OiB1bmlxdWVDb3VudCxcbiAgICBjb3VudDogY291bnRcbiAgfSk7XG5cbiAgdmFyIGVtcHR5QXJyYXkgPSBbXTtcbiAgdmFyIGVtcHR5T2JqZWN0ID0ge307IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLnJlc2V0R3JvdXBCeSA9ICdyZXNldEdyb3VwQnknO1xuICBhY3Rpb25zLnNldEdyb3VwQnkgPSAnc2V0R3JvdXBCeSc7XG4gIGFjdGlvbnMudG9nZ2xlR3JvdXBCeSA9ICd0b2dnbGVHcm91cEJ5JztcbiAgdmFyIHVzZUdyb3VwQnkgPSBmdW5jdGlvbiB1c2VHcm91cEJ5KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0R3JvdXBCeVRvZ2dsZVByb3BzID0gW2RlZmF1bHRHZXRHcm91cEJ5VG9nZ2xlUHJvcHNdO1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDQpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zRGVwcy5wdXNoKGZ1bmN0aW9uIChkZXBzLCBfcmVmKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChkZXBzLCBbaW5zdGFuY2Uuc3RhdGUuZ3JvdXBCeV0pO1xuICAgIH0pO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNCk7XG4gICAgaG9va3MucHJlcGFyZVJvdy5wdXNoKHByZXBhcmVSb3ckMSk7XG4gIH07XG4gIHVzZUdyb3VwQnkucGx1Z2luTmFtZSA9ICd1c2VHcm91cEJ5JztcblxuICB2YXIgZGVmYXVsdEdldEdyb3VwQnlUb2dnbGVQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRHcm91cEJ5VG9nZ2xlUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgdmFyIGhlYWRlciA9IF9yZWYyLmhlYWRlcjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBoZWFkZXIuY2FuR3JvdXBCeSA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICBoZWFkZXIudG9nZ2xlR3JvdXBCeSgpO1xuICAgICAgfSA6IHVuZGVmaW5lZCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGN1cnNvcjogaGVhZGVyLmNhbkdyb3VwQnkgPyAncG9pbnRlcicgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBHcm91cEJ5J1xuICAgIH1dO1xuICB9OyAvLyBSZWR1Y2VyXG5cblxuICBmdW5jdGlvbiByZWR1Y2VyJDQoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZ3JvdXBCeTogW11cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRHcm91cEJ5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyb3VwQnk6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5ncm91cEJ5IHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0R3JvdXBCeSkge1xuICAgICAgdmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncm91cEJ5OiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUdyb3VwQnkpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBzZXRHcm91cEJ5ID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIHJlc29sdmVkR3JvdXBCeSA9IHR5cGVvZiBzZXRHcm91cEJ5ICE9PSAndW5kZWZpbmVkJyA/IHNldEdyb3VwQnkgOiAhc3RhdGUuZ3JvdXBCeS5pbmNsdWRlcyhjb2x1bW5JZCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZEdyb3VwQnkpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGdyb3VwQnk6IFtdLmNvbmNhdChzdGF0ZS5ncm91cEJ5LCBbY29sdW1uSWRdKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBncm91cEJ5OiBzdGF0ZS5ncm91cEJ5LmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGVDb2x1bW5zKGNvbHVtbnMsIF9yZWYzKSB7XG4gICAgdmFyIGdyb3VwQnkgPSBfcmVmMy5pbnN0YW5jZS5zdGF0ZS5ncm91cEJ5O1xuICAgIC8vIFNvcnQgZ3JvdXBlZCBjb2x1bW5zIHRvIHRoZSBzdGFydCBvZiB0aGUgY29sdW1uIGxpc3RcbiAgICAvLyBiZWZvcmUgdGhlIGhlYWRlcnMgYXJlIGJ1aWx0XG4gICAgdmFyIGdyb3VwQnlDb2x1bW5zID0gZ3JvdXBCeS5tYXAoZnVuY3Rpb24gKGcpIHtcbiAgICAgIHJldHVybiBjb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gY29sLmlkID09PSBnO1xuICAgICAgfSk7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIHZhciBub25Hcm91cEJ5Q29sdW1ucyA9IGNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgIHJldHVybiAhZ3JvdXBCeS5pbmNsdWRlcyhjb2wuaWQpO1xuICAgIH0pO1xuICAgIGNvbHVtbnMgPSBbXS5jb25jYXQoZ3JvdXBCeUNvbHVtbnMsIG5vbkdyb3VwQnlDb2x1bW5zKTtcbiAgICBjb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgY29sdW1uLmlzR3JvdXBlZCA9IGdyb3VwQnkuaW5jbHVkZXMoY29sdW1uLmlkKTtcbiAgICAgIGNvbHVtbi5ncm91cGVkSW5kZXggPSBncm91cEJ5LmluZGV4T2YoY29sdW1uLmlkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHZhciBkZWZhdWx0VXNlckFnZ3JlZ2F0aW9ucyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDQoaW5zdGFuY2UpIHtcbiAgICB2YXIgZGF0YSA9IGluc3RhbmNlLmRhdGEsXG4gICAgICAgIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBmbGF0Um93cyA9IGluc3RhbmNlLmZsYXRSb3dzLFxuICAgICAgICByb3dzQnlJZCA9IGluc3RhbmNlLnJvd3NCeUlkLFxuICAgICAgICBhbGxDb2x1bW5zID0gaW5zdGFuY2UuYWxsQ29sdW1ucyxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgX2luc3RhbmNlJGdyb3VwQnlGbiA9IGluc3RhbmNlLmdyb3VwQnlGbixcbiAgICAgICAgZ3JvdXBCeUZuID0gX2luc3RhbmNlJGdyb3VwQnlGbiA9PT0gdm9pZCAwID8gZGVmYXVsdEdyb3VwQnlGbiA6IF9pbnN0YW5jZSRncm91cEJ5Rm4sXG4gICAgICAgIG1hbnVhbEdyb3VwQnkgPSBpbnN0YW5jZS5tYW51YWxHcm91cEJ5LFxuICAgICAgICBfaW5zdGFuY2UkYWdncmVnYXRpb24gPSBpbnN0YW5jZS5hZ2dyZWdhdGlvbnMsXG4gICAgICAgIHVzZXJBZ2dyZWdhdGlvbnMgPSBfaW5zdGFuY2UkYWdncmVnYXRpb24gPT09IHZvaWQgMCA/IGRlZmF1bHRVc2VyQWdncmVnYXRpb25zIDogX2luc3RhbmNlJGFnZ3JlZ2F0aW9uLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZ3JvdXBCeSA9IGluc3RhbmNlLnN0YXRlLmdyb3VwQnksXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIF9pbnN0YW5jZSRhdXRvUmVzZXRHciA9IGluc3RhbmNlLmF1dG9SZXNldEdyb3VwQnksXG4gICAgICAgIGF1dG9SZXNldEdyb3VwQnkgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0R3IgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0R3IsXG4gICAgICAgIGRpc2FibGVHcm91cEJ5ID0gaW5zdGFuY2UuZGlzYWJsZUdyb3VwQnksXG4gICAgICAgIGRlZmF1bHRDYW5Hcm91cEJ5ID0gaW5zdGFuY2UuZGVmYXVsdENhbkdyb3VwQnksXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3M7XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VDb2x1bW5PcmRlcicsICd1c2VGaWx0ZXJzJ10sICd1c2VHcm91cEJ5Jyk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgdmFyIGFjY2Vzc29yID0gY29sdW1uLmFjY2Vzc29yLFxuICAgICAgICAgIGRlZmF1bHRDb2x1bW5Hcm91cEJ5ID0gY29sdW1uLmRlZmF1bHRHcm91cEJ5LFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVHcm91cEJ5ID0gY29sdW1uLmRpc2FibGVHcm91cEJ5O1xuICAgICAgY29sdW1uLmNhbkdyb3VwQnkgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuR3JvdXBCeSwgY29sdW1uRGlzYWJsZUdyb3VwQnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZUdyb3VwQnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhbkdyb3VwQnksIGRlZmF1bHRDb2x1bW5Hcm91cEJ5LCBkZWZhdWx0Q2FuR3JvdXBCeSwgZmFsc2UpO1xuXG4gICAgICBpZiAoY29sdW1uLmNhbkdyb3VwQnkpIHtcbiAgICAgICAgY29sdW1uLnRvZ2dsZUdyb3VwQnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnRvZ2dsZUdyb3VwQnkoY29sdW1uLmlkKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgPSBjb2x1bW4uQWdncmVnYXRlZCB8fCBjb2x1bW4uQ2VsbDtcbiAgICB9KTtcbiAgICB2YXIgdG9nZ2xlR3JvdXBCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVHcm91cEJ5LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHNldEdyb3VwQnkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRHcm91cEJ5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgaGVhZGVyLmdldEdyb3VwQnlUb2dnbGVQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0R3JvdXBCeVRvZ2dsZVByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBoZWFkZXI6IGhlYWRlclxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxHcm91cEJ5IHx8ICFncm91cEJ5Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gW3Jvd3MsIGZsYXRSb3dzLCByb3dzQnlJZCwgZW1wdHlBcnJheSwgZW1wdHlPYmplY3QsIGZsYXRSb3dzLCByb3dzQnlJZF07XG4gICAgICB9IC8vIEVuc3VyZSB0aGF0IHRoZSBsaXN0IG9mIGZpbHRlcmVkIGNvbHVtbnMgZXhpc3RcblxuXG4gICAgICB2YXIgZXhpc3RpbmdHcm91cEJ5ID0gZ3JvdXBCeS5maWx0ZXIoZnVuY3Rpb24gKGcpIHtcbiAgICAgICAgcmV0dXJuIGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbC5pZCA9PT0gZztcbiAgICAgICAgfSk7XG4gICAgICB9KTsgLy8gRmluZCB0aGUgY29sdW1ucyB0aGF0IGNhbiBvciBhcmUgYWdncmVnYXRpbmdcbiAgICAgIC8vIFVzZXMgZWFjaCBjb2x1bW4gdG8gYWdncmVnYXRlIHJvd3MgaW50byBhIHNpbmdsZSB2YWx1ZVxuXG4gICAgICB2YXIgYWdncmVnYXRlUm93c1RvVmFsdWVzID0gZnVuY3Rpb24gYWdncmVnYXRlUm93c1RvVmFsdWVzKGxlYWZSb3dzLCBncm91cGVkUm93cywgZGVwdGgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgICAgICBhbGxDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgIC8vIERvbid0IGFnZ3JlZ2F0ZSBjb2x1bW5zIHRoYXQgYXJlIGluIHRoZSBncm91cEJ5XG4gICAgICAgICAgaWYgKGV4aXN0aW5nR3JvdXBCeS5pbmNsdWRlcyhjb2x1bW4uaWQpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbY29sdW1uLmlkXSA9IGdyb3VwZWRSb3dzWzBdID8gZ3JvdXBlZFJvd3NbMF0udmFsdWVzW2NvbHVtbi5pZF0gOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gQWdncmVnYXRlIHRoZSB2YWx1ZXNcblxuXG4gICAgICAgICAgdmFyIGFnZ3JlZ2F0ZUZuID0gdHlwZW9mIGNvbHVtbi5hZ2dyZWdhdGUgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uYWdncmVnYXRlIDogdXNlckFnZ3JlZ2F0aW9uc1tjb2x1bW4uYWdncmVnYXRlXSB8fCBhZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZV07XG5cbiAgICAgICAgICBpZiAoYWdncmVnYXRlRm4pIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgY29sdW1uVmFsdWVzIHRvIGFnZ3JlZ2F0ZVxuICAgICAgICAgICAgdmFyIGdyb3VwZWRWYWx1ZXMgPSBncm91cGVkUm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICByZXR1cm4gcm93LnZhbHVlc1tjb2x1bW4uaWRdO1xuICAgICAgICAgICAgfSk7IC8vIEdldCB0aGUgY29sdW1uVmFsdWVzIHRvIGFnZ3JlZ2F0ZVxuXG4gICAgICAgICAgICB2YXIgbGVhZlZhbHVlcyA9IGxlYWZSb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgIHZhciBjb2x1bW5WYWx1ZSA9IHJvdy52YWx1ZXNbY29sdW1uLmlkXTtcblxuICAgICAgICAgICAgICBpZiAoIWRlcHRoICYmIGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhZ2dyZWdhdGVWYWx1ZUZuID0gdHlwZW9mIGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5hZ2dyZWdhdGVWYWx1ZSA6IHVzZXJBZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlXSB8fCBhZ2dyZWdhdGlvbnNbY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlXTtcblxuICAgICAgICAgICAgICAgIGlmICghYWdncmVnYXRlVmFsdWVGbikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBjb2x1bW5cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QgVGFibGU6IEludmFsaWQgY29sdW1uLmFnZ3JlZ2F0ZVZhbHVlIG9wdGlvbiBmb3IgY29sdW1uIGxpc3RlZCBhYm92ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IGFnZ3JlZ2F0ZVZhbHVlRm4oY29sdW1uVmFsdWUsIHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFsdWVzW2NvbHVtbi5pZF0gPSBhZ2dyZWdhdGVGbihsZWFmVmFsdWVzLCBncm91cGVkVmFsdWVzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi5hZ2dyZWdhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyh7XG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0IFRhYmxlOiBJbnZhbGlkIGNvbHVtbi5hZ2dyZWdhdGUgb3B0aW9uIGZvciBjb2x1bW4gbGlzdGVkIGFib3ZlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNbY29sdW1uLmlkXSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH07XG5cbiAgICAgIHZhciBncm91cGVkRmxhdFJvd3MgPSBbXTtcbiAgICAgIHZhciBncm91cGVkUm93c0J5SWQgPSB7fTtcbiAgICAgIHZhciBvbmx5R3JvdXBlZEZsYXRSb3dzID0gW107XG4gICAgICB2YXIgb25seUdyb3VwZWRSb3dzQnlJZCA9IHt9O1xuICAgICAgdmFyIG5vbkdyb3VwZWRGbGF0Um93cyA9IFtdO1xuICAgICAgdmFyIG5vbkdyb3VwZWRSb3dzQnlJZCA9IHt9OyAvLyBSZWN1cnNpdmVseSBncm91cCB0aGUgZGF0YVxuXG4gICAgICB2YXIgZ3JvdXBVcFJlY3Vyc2l2ZWx5ID0gZnVuY3Rpb24gZ3JvdXBVcFJlY3Vyc2l2ZWx5KHJvd3MsIGRlcHRoLCBwYXJlbnRJZCkge1xuICAgICAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkge1xuICAgICAgICAgIGRlcHRoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGxhc3QgbGV2ZWwsIGp1c3QgcmV0dXJuIHRoZSByb3dzXG4gICAgICAgIGlmIChkZXB0aCA9PT0gZXhpc3RpbmdHcm91cEJ5Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiByb3dzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbHVtbklkID0gZXhpc3RpbmdHcm91cEJ5W2RlcHRoXTsgLy8gR3JvdXAgdGhlIHJvd3MgdG9nZXRoZXIgZm9yIHRoaXMgbGV2ZWxcblxuICAgICAgICB2YXIgcm93R3JvdXBzTWFwID0gZ3JvdXBCeUZuKHJvd3MsIGNvbHVtbklkKTsgLy8gUGVmb3JtIGFnZ3JlZ2F0aW9ucyBmb3IgZWFjaCBncm91cFxuXG4gICAgICAgIHZhciBhZ2dyZWdhdGVkR3JvdXBlZFJvd3MgPSBPYmplY3QuZW50cmllcyhyb3dHcm91cHNNYXApLm1hcChmdW5jdGlvbiAoX3JlZjQsIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGdyb3VwQnlWYWwgPSBfcmVmNFswXSxcbiAgICAgICAgICAgICAgZ3JvdXBlZFJvd3MgPSBfcmVmNFsxXTtcbiAgICAgICAgICB2YXIgaWQgPSBjb2x1bW5JZCArIFwiOlwiICsgZ3JvdXBCeVZhbDtcbiAgICAgICAgICBpZCA9IHBhcmVudElkID8gcGFyZW50SWQgKyBcIj5cIiArIGlkIDogaWQ7IC8vIEZpcnN0LCBSZWN1cnNlIHRvIGdyb3VwIHN1YiByb3dzIGJlZm9yZSBhZ2dyZWdhdGlvblxuXG4gICAgICAgICAgdmFyIHN1YlJvd3MgPSBncm91cFVwUmVjdXJzaXZlbHkoZ3JvdXBlZFJvd3MsIGRlcHRoICsgMSwgaWQpOyAvLyBGbGF0dGVuIHRoZSBsZWFmIHJvd3Mgb2YgdGhlIHJvd3MgaW4gdGhpcyBncm91cFxuXG4gICAgICAgICAgdmFyIGxlYWZSb3dzID0gZGVwdGggPyBmbGF0dGVuQnkoZ3JvdXBlZFJvd3MsICdsZWFmUm93cycpIDogZ3JvdXBlZFJvd3M7XG4gICAgICAgICAgdmFyIHZhbHVlcyA9IGFnZ3JlZ2F0ZVJvd3NUb1ZhbHVlcyhsZWFmUm93cywgZ3JvdXBlZFJvd3MsIGRlcHRoKTtcbiAgICAgICAgICB2YXIgcm93ID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgaXNHcm91cGVkOiB0cnVlLFxuICAgICAgICAgICAgZ3JvdXBCeUlEOiBjb2x1bW5JZCxcbiAgICAgICAgICAgIGdyb3VwQnlWYWw6IGdyb3VwQnlWYWwsXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICAgIHN1YlJvd3M6IHN1YlJvd3MsXG4gICAgICAgICAgICBsZWFmUm93czogbGVhZlJvd3MsXG4gICAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICB9O1xuICAgICAgICAgIHN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAoc3ViUm93KSB7XG4gICAgICAgICAgICBncm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgICAgZ3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG5cbiAgICAgICAgICAgIGlmIChzdWJSb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkW3N1YlJvdy5pZF0gPSBzdWJSb3c7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub25Hcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgICAgICBub25Hcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRHcm91cGVkUm93cztcbiAgICAgIH07XG5cbiAgICAgIHZhciBncm91cGVkUm93cyA9IGdyb3VwVXBSZWN1cnNpdmVseShyb3dzKTtcbiAgICAgIGdyb3VwZWRSb3dzLmZvckVhY2goZnVuY3Rpb24gKHN1YlJvdykge1xuICAgICAgICBncm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICBncm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcblxuICAgICAgICBpZiAoc3ViUm93LmlzR3JvdXBlZCkge1xuICAgICAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgIG9ubHlHcm91cGVkUm93c0J5SWRbc3ViUm93LmlkXSA9IHN1YlJvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25Hcm91cGVkRmxhdFJvd3MucHVzaChzdWJSb3cpO1xuICAgICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZFtzdWJSb3cuaWRdID0gc3ViUm93O1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gQXNzaWduIHRoZSBuZXcgZGF0YVxuXG4gICAgICByZXR1cm4gW2dyb3VwZWRSb3dzLCBncm91cGVkRmxhdFJvd3MsIGdyb3VwZWRSb3dzQnlJZCwgb25seUdyb3VwZWRGbGF0Um93cywgb25seUdyb3VwZWRSb3dzQnlJZCwgbm9uR3JvdXBlZEZsYXRSb3dzLCBub25Hcm91cGVkUm93c0J5SWRdO1xuICAgIH0sIFttYW51YWxHcm91cEJ5LCBncm91cEJ5LCByb3dzLCBmbGF0Um93cywgcm93c0J5SWQsIGFsbENvbHVtbnMsIHVzZXJBZ2dyZWdhdGlvbnMsIGdyb3VwQnlGbl0pLFxuICAgICAgICBncm91cGVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBncm91cGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1sxXSxcbiAgICAgICAgZ3JvdXBlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bMl0sXG4gICAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1szXSxcbiAgICAgICAgb25seUdyb3VwZWRSb3dzQnlJZCA9IF9SZWFjdCR1c2VNZW1vWzRdLFxuICAgICAgICBub25Hcm91cGVkRmxhdFJvd3MgPSBfUmVhY3QkdXNlTWVtb1s1XSxcbiAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkID0gX1JlYWN0JHVzZU1lbW9bNl07XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0R3JvdXBCeSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRHcm91cEJ5KTtcbiAgICB1c2VNb3VudGVkTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChnZXRBdXRvUmVzZXRHcm91cEJ5KCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRHcm91cEJ5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFtkaXNwYXRjaCwgbWFudWFsR3JvdXBCeSA/IG51bGwgOiBkYXRhXSk7XG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwge1xuICAgICAgcHJlR3JvdXBlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVHcm91cGVkRmxhdFJvdzogZmxhdFJvd3MsXG4gICAgICBwcmVHcm91cGVkUm93c0J5SWQ6IHJvd3NCeUlkLFxuICAgICAgZ3JvdXBlZFJvd3M6IGdyb3VwZWRSb3dzLFxuICAgICAgZ3JvdXBlZEZsYXRSb3dzOiBncm91cGVkRmxhdFJvd3MsXG4gICAgICBncm91cGVkUm93c0J5SWQ6IGdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIG9ubHlHcm91cGVkRmxhdFJvd3M6IG9ubHlHcm91cGVkRmxhdFJvd3MsXG4gICAgICBvbmx5R3JvdXBlZFJvd3NCeUlkOiBvbmx5R3JvdXBlZFJvd3NCeUlkLFxuICAgICAgbm9uR3JvdXBlZEZsYXRSb3dzOiBub25Hcm91cGVkRmxhdFJvd3MsXG4gICAgICBub25Hcm91cGVkUm93c0J5SWQ6IG5vbkdyb3VwZWRSb3dzQnlJZCxcbiAgICAgIHJvd3M6IGdyb3VwZWRSb3dzLFxuICAgICAgZmxhdFJvd3M6IGdyb3VwZWRGbGF0Um93cyxcbiAgICAgIHJvd3NCeUlkOiBncm91cGVkUm93c0J5SWQsXG4gICAgICB0b2dnbGVHcm91cEJ5OiB0b2dnbGVHcm91cEJ5LFxuICAgICAgc2V0R3JvdXBCeTogc2V0R3JvdXBCeVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyQxKHJvdykge1xuICAgIHJvdy5hbGxDZWxscy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICB2YXIgX3JvdyRzdWJSb3dzO1xuXG4gICAgICAvLyBHcm91cGVkIGNlbGxzIGFyZSBpbiB0aGUgZ3JvdXBCeSBhbmQgdGhlIHBpdm90IGNlbGwgZm9yIHRoZSByb3dcbiAgICAgIGNlbGwuaXNHcm91cGVkID0gY2VsbC5jb2x1bW4uaXNHcm91cGVkICYmIGNlbGwuY29sdW1uLmlkID09PSByb3cuZ3JvdXBCeUlEOyAvLyBQbGFjZWhvbGRlciBjZWxscyBhcmUgYW55IGNvbHVtbnMgaW4gdGhlIGdyb3VwQnkgdGhhdCBhcmUgbm90IGdyb3VwZWRcblxuICAgICAgY2VsbC5pc1BsYWNlaG9sZGVyID0gIWNlbGwuaXNHcm91cGVkICYmIGNlbGwuY29sdW1uLmlzR3JvdXBlZDsgLy8gQWdncmVnYXRlZCBjZWxscyBhcmUgbm90IGdyb3VwZWQsIG5vdCByZXBlYXRlZCwgYnV0IHN0aWxsIGhhdmUgc3ViUm93c1xuXG4gICAgICBjZWxsLmlzQWdncmVnYXRlZCA9ICFjZWxsLmlzR3JvdXBlZCAmJiAhY2VsbC5pc1BsYWNlaG9sZGVyICYmICgoX3JvdyRzdWJSb3dzID0gcm93LnN1YlJvd3MpID09IG51bGwgPyB2b2lkIDAgOiBfcm93JHN1YlJvd3MubGVuZ3RoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRHcm91cEJ5Rm4ocm93cywgY29sdW1uSWQpIHtcbiAgICByZXR1cm4gcm93cy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIHJvdywgaSkge1xuICAgICAgLy8gVE9ETzogTWlnaHQgd2FudCB0byBpbXBsZW1lbnQgYSBrZXkgc2VyaWFsaXplciBoZXJlIHNvXG4gICAgICAvLyBpcnJlZ3VsYXIgY29sdW1uIHZhbHVlcyBjYW4gc3RpbGwgYmUgZ3JvdXBlZCBpZiBuZWVkZWQ/XG4gICAgICB2YXIgcmVzS2V5ID0gXCJcIiArIHJvdy52YWx1ZXNbY29sdW1uSWRdO1xuICAgICAgcHJldltyZXNLZXldID0gQXJyYXkuaXNBcnJheShwcmV2W3Jlc0tleV0pID8gcHJldltyZXNLZXldIDogW107XG4gICAgICBwcmV2W3Jlc0tleV0ucHVzaChyb3cpO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICB9XG5cbiAgdmFyIHJlU3BsaXRBbHBoYU51bWVyaWMgPSAvKFswLTldKykvZ207IC8vIE1peGVkIHNvcnRpbmcgaXMgc2xvdywgYnV0IHZlcnkgaW5jbHVzaXZlIG9mIG1hbnkgZWRnZSBjYXNlcy5cbiAgLy8gSXQgaGFuZGxlcyBudW1iZXJzLCBtaXhlZCBhbHBoYW51bWVyaWMgY29tYmluYXRpb25zLCBhbmQgZXZlblxuICAvLyBudWxsLCB1bmRlZmluZWQsIGFuZCBJbmZpbml0eVxuXG4gIHZhciBhbHBoYW51bWVyaWMgPSBmdW5jdGlvbiBhbHBoYW51bWVyaWMocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgYSA9IGdldFJvd1ZhbHVlQnlDb2x1bW5JRChyb3dBLCBjb2x1bW5JZCk7XG4gICAgdmFyIGIgPSBnZXRSb3dWYWx1ZUJ5Q29sdW1uSUQocm93QiwgY29sdW1uSWQpOyAvLyBGb3JjZSB0byBzdHJpbmdzIChvciBcIlwiIGZvciB1bnN1cHBvcnRlZCB0eXBlcylcblxuICAgIGEgPSB0b1N0cmluZyhhKTtcbiAgICBiID0gdG9TdHJpbmcoYik7IC8vIFNwbGl0IG9uIG51bWJlciBncm91cHMsIGJ1dCBrZWVwIHRoZSBkZWxpbWl0ZXJcbiAgICAvLyBUaGVuIHJlbW92ZSBmYWxzZXkgc3BsaXQgdmFsdWVzXG5cbiAgICBhID0gYS5zcGxpdChyZVNwbGl0QWxwaGFOdW1lcmljKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgYiA9IGIuc3BsaXQocmVTcGxpdEFscGhhTnVtZXJpYykuZmlsdGVyKEJvb2xlYW4pOyAvLyBXaGlsZVxuXG4gICAgd2hpbGUgKGEubGVuZ3RoICYmIGIubGVuZ3RoKSB7XG4gICAgICB2YXIgYWEgPSBhLnNoaWZ0KCk7XG4gICAgICB2YXIgYmIgPSBiLnNoaWZ0KCk7XG4gICAgICB2YXIgYW4gPSBwYXJzZUludChhYSwgMTApO1xuICAgICAgdmFyIGJuID0gcGFyc2VJbnQoYmIsIDEwKTtcbiAgICAgIHZhciBjb21ibyA9IFthbiwgYm5dLnNvcnQoKTsgLy8gQm90aCBhcmUgc3RyaW5nXG5cbiAgICAgIGlmIChpc05hTihjb21ib1swXSkpIHtcbiAgICAgICAgaWYgKGFhID4gYmIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiYiA+IGFhKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIE9uZSBpcyBhIHN0cmluZywgb25lIGlzIGEgbnVtYmVyXG5cblxuICAgICAgaWYgKGlzTmFOKGNvbWJvWzFdKSkge1xuICAgICAgICByZXR1cm4gaXNOYU4oYW4pID8gLTEgOiAxO1xuICAgICAgfSAvLyBCb3RoIGFyZSBudW1iZXJzXG5cblxuICAgICAgaWYgKGFuID4gYm4pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChibiA+IGFuKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAgfTtcbiAgZnVuY3Rpb24gZGF0ZXRpbWUocm93QSwgcm93QiwgY29sdW1uSWQpIHtcbiAgICB2YXIgYSA9IGdldFJvd1ZhbHVlQnlDb2x1bW5JRChyb3dBLCBjb2x1bW5JZCk7XG4gICAgdmFyIGIgPSBnZXRSb3dWYWx1ZUJ5Q29sdW1uSUQocm93QiwgY29sdW1uSWQpO1xuICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGNvbXBhcmVCYXNpYyhhLCBiKTtcbiAgfVxuICBmdW5jdGlvbiBiYXNpYyhyb3dBLCByb3dCLCBjb2x1bW5JZCkge1xuICAgIHZhciBhID0gZ2V0Um93VmFsdWVCeUNvbHVtbklEKHJvd0EsIGNvbHVtbklkKTtcbiAgICB2YXIgYiA9IGdldFJvd1ZhbHVlQnlDb2x1bW5JRChyb3dCLCBjb2x1bW5JZCk7XG4gICAgcmV0dXJuIGNvbXBhcmVCYXNpYyhhLCBiKTtcbiAgfSAvLyBVdGlsc1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVCYXNpYyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRSb3dWYWx1ZUJ5Q29sdW1uSUQocm93LCBjb2x1bW5JZCkge1xuICAgIHJldHVybiByb3cudmFsdWVzW2NvbHVtbklkXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvU3RyaW5nKGEpIHtcbiAgICBpZiAodHlwZW9mIGEgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoaXNOYU4oYSkgfHwgYSA9PT0gSW5maW5pdHkgfHwgYSA9PT0gLUluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFN0cmluZyhhKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgc29ydFR5cGVzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhbHBoYW51bWVyaWM6IGFscGhhbnVtZXJpYyxcbiAgICBkYXRldGltZTogZGF0ZXRpbWUsXG4gICAgYmFzaWM6IGJhc2ljXG4gIH0pO1xuXG4gIGFjdGlvbnMucmVzZXRTb3J0QnkgPSAncmVzZXRTb3J0QnknO1xuICBhY3Rpb25zLnNldFNvcnRCeSA9ICdzZXRTb3J0QnknO1xuICBhY3Rpb25zLnRvZ2dsZVNvcnRCeSA9ICd0b2dnbGVTb3J0QnknO1xuICBhY3Rpb25zLmNsZWFyU29ydEJ5ID0gJ2NsZWFyU29ydEJ5JztcbiAgZGVmYXVsdENvbHVtbi5zb3J0VHlwZSA9ICdhbHBoYW51bWVyaWMnO1xuICBkZWZhdWx0Q29sdW1uLnNvcnREZXNjRmlyc3QgPSBmYWxzZTtcbiAgdmFyIHVzZVNvcnRCeSA9IGZ1bmN0aW9uIHVzZVNvcnRCeShob29rcykge1xuICAgIGhvb2tzLmdldFNvcnRCeVRvZ2dsZVByb3BzID0gW2RlZmF1bHRHZXRTb3J0QnlUb2dnbGVQcm9wc107XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkNSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ1KTtcbiAgfTtcbiAgdXNlU29ydEJ5LnBsdWdpbk5hbWUgPSAndXNlU29ydEJ5JztcblxuICB2YXIgZGVmYXVsdEdldFNvcnRCeVRvZ2dsZVByb3BzID0gZnVuY3Rpb24gZGVmYXVsdEdldFNvcnRCeVRvZ2dsZVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgY29sdW1uID0gX3JlZi5jb2x1bW47XG4gICAgdmFyIF9pbnN0YW5jZSRpc011bHRpU29ydCA9IGluc3RhbmNlLmlzTXVsdGlTb3J0RXZlbnQsXG4gICAgICAgIGlzTXVsdGlTb3J0RXZlbnQgPSBfaW5zdGFuY2UkaXNNdWx0aVNvcnQgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5zaGlmdEtleTtcbiAgICB9IDogX2luc3RhbmNlJGlzTXVsdGlTb3J0O1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2xpY2s6IGNvbHVtbi5jYW5Tb3J0ID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgIGNvbHVtbi50b2dnbGVTb3J0QnkodW5kZWZpbmVkLCAhaW5zdGFuY2UuZGlzYWJsZU11bHRpU29ydCAmJiBpc011bHRpU29ydEV2ZW50KGUpKTtcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6IGNvbHVtbi5jYW5Tb3J0ID8gJ3BvaW50ZXInIDogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgdGl0bGU6IGNvbHVtbi5jYW5Tb3J0ID8gJ1RvZ2dsZSBTb3J0QnknIDogdW5kZWZpbmVkXG4gICAgfV07XG4gIH07IC8vIFJlZHVjZXJcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkNShzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBzb3J0Qnk6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0U29ydEJ5KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNvcnRCeTogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnNvcnRCeSB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmNsZWFyU29ydEJ5KSB7XG4gICAgICB2YXIgc29ydEJ5ID0gc3RhdGUuc29ydEJ5O1xuICAgICAgdmFyIG5ld1NvcnRCeSA9IHNvcnRCeS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgIT09IGFjdGlvbi5jb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IG5ld1NvcnRCeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldFNvcnRCeSkge1xuICAgICAgdmFyIF9zb3J0QnkgPSBhY3Rpb24uc29ydEJ5O1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzb3J0Qnk6IF9zb3J0QnlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy50b2dnbGVTb3J0QnkpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBkZXNjID0gYWN0aW9uLmRlc2MsXG4gICAgICAgICAgbXVsdGkgPSBhY3Rpb24ubXVsdGk7XG4gICAgICB2YXIgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgICAgZGlzYWJsZU11bHRpU29ydCA9IGluc3RhbmNlLmRpc2FibGVNdWx0aVNvcnQsXG4gICAgICAgICAgZGlzYWJsZVNvcnRSZW1vdmUgPSBpbnN0YW5jZS5kaXNhYmxlU29ydFJlbW92ZSxcbiAgICAgICAgICBkaXNhYmxlTXVsdGlSZW1vdmUgPSBpbnN0YW5jZS5kaXNhYmxlTXVsdGlSZW1vdmUsXG4gICAgICAgICAgX2luc3RhbmNlJG1heE11bHRpU29yID0gaW5zdGFuY2UubWF4TXVsdGlTb3J0Q29sQ291bnQsXG4gICAgICAgICAgbWF4TXVsdGlTb3J0Q29sQ291bnQgPSBfaW5zdGFuY2UkbWF4TXVsdGlTb3IgPT09IHZvaWQgMCA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogX2luc3RhbmNlJG1heE11bHRpU29yO1xuICAgICAgdmFyIF9zb3J0QnkyID0gc3RhdGUuc29ydEJ5OyAvLyBGaW5kIHRoZSBjb2x1bW4gZm9yIHRoaXMgY29sdW1uSWRcblxuICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBzb3J0RGVzY0ZpcnN0ID0gY29sdW1uLnNvcnREZXNjRmlyc3Q7IC8vIEZpbmQgYW55IGV4aXN0aW5nIHNvcnRCeSBmb3IgdGhpcyBjb2x1bW5cblxuICAgICAgdmFyIGV4aXN0aW5nU29ydEJ5ID0gX3NvcnRCeTIuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGV4aXN0aW5nSW5kZXggPSBfc29ydEJ5Mi5maW5kSW5kZXgoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuaWQgPT09IGNvbHVtbklkO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBoYXNEZXNjRGVmaW5lZCA9IHR5cGVvZiBkZXNjICE9PSAndW5kZWZpbmVkJyAmJiBkZXNjICE9PSBudWxsO1xuICAgICAgdmFyIF9uZXdTb3J0QnkgPSBbXTsgLy8gV2hhdCBzaG91bGQgd2UgZG8gd2l0aCB0aGlzIHNvcnQgYWN0aW9uP1xuXG4gICAgICB2YXIgc29ydEFjdGlvbjtcblxuICAgICAgaWYgKCFkaXNhYmxlTXVsdGlTb3J0ICYmIG11bHRpKSB7XG4gICAgICAgIGlmIChleGlzdGluZ1NvcnRCeSkge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAndG9nZ2xlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ2FkZCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vcm1hbCBtb2RlXG4gICAgICAgIGlmIChleGlzdGluZ0luZGV4ICE9PSBfc29ydEJ5Mi5sZW5ndGggLSAxIHx8IF9zb3J0QnkyLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHNvcnRBY3Rpb24gPSAncmVwbGFjZSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdTb3J0QnkpIHtcbiAgICAgICAgICBzb3J0QWN0aW9uID0gJ3RvZ2dsZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydEFjdGlvbiA9ICdyZXBsYWNlJztcbiAgICAgICAgfVxuICAgICAgfSAvLyBIYW5kbGUgdG9nZ2xlIHN0YXRlcyB0aGF0IHdpbGwgcmVtb3ZlIHRoZSBzb3J0QnlcblxuXG4gICAgICBpZiAoc29ydEFjdGlvbiA9PT0gJ3RvZ2dsZScgJiYgLy8gTXVzdCBiZSB0b2dnbGluZ1xuICAgICAgIWRpc2FibGVTb3J0UmVtb3ZlICYmIC8vIElmIGRpc2FibGVTb3J0UmVtb3ZlLCBkaXNhYmxlIGluIGdlbmVyYWxcbiAgICAgICFoYXNEZXNjRGVmaW5lZCAmJiAoIC8vIE11c3Qgbm90IGJlIHNldHRpbmcgZGVzY1xuICAgICAgbXVsdGkgPyAhZGlzYWJsZU11bHRpUmVtb3ZlIDogdHJ1ZSkgJiYgKCAvLyBJZiBtdWx0aSwgZG9uJ3QgYWxsb3cgaWYgZGlzYWJsZU11bHRpUmVtb3ZlXG4gICAgICBleGlzdGluZ1NvcnRCeSAmJiAvLyBGaW5hbGx5LCBkZXRlY3QgaWYgaXQgc2hvdWxkIGluZGVlZCBiZSByZW1vdmVkXG4gICAgICBleGlzdGluZ1NvcnRCeS5kZXNjICYmICFzb3J0RGVzY0ZpcnN0IHx8ICFleGlzdGluZ1NvcnRCeS5kZXNjICYmIHNvcnREZXNjRmlyc3QpKSB7XG4gICAgICAgIHNvcnRBY3Rpb24gPSAncmVtb3ZlJztcbiAgICAgIH1cblxuICAgICAgaWYgKHNvcnRBY3Rpb24gPT09ICdyZXBsYWNlJykge1xuICAgICAgICBfbmV3U29ydEJ5ID0gW3tcbiAgICAgICAgICBpZDogY29sdW1uSWQsXG4gICAgICAgICAgZGVzYzogaGFzRGVzY0RlZmluZWQgPyBkZXNjIDogc29ydERlc2NGaXJzdFxuICAgICAgICB9XTtcbiAgICAgIH0gZWxzZSBpZiAoc29ydEFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgX25ld1NvcnRCeSA9IFtdLmNvbmNhdChfc29ydEJ5MiwgW3tcbiAgICAgICAgICBpZDogY29sdW1uSWQsXG4gICAgICAgICAgZGVzYzogaGFzRGVzY0RlZmluZWQgPyBkZXNjIDogc29ydERlc2NGaXJzdFxuICAgICAgICB9XSk7IC8vIFRha2UgbGF0ZXN0IG4gY29sdW1uc1xuXG4gICAgICAgIF9uZXdTb3J0Qnkuc3BsaWNlKDAsIF9uZXdTb3J0QnkubGVuZ3RoIC0gbWF4TXVsdGlTb3J0Q29sQ291bnQpO1xuICAgICAgfSBlbHNlIGlmIChzb3J0QWN0aW9uID09PSAndG9nZ2xlJykge1xuICAgICAgICAvLyBUaGlzIGZsaXBzIChvciBzZXRzKSB0aGVcbiAgICAgICAgX25ld1NvcnRCeSA9IF9zb3J0QnkyLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGlmIChkLmlkID09PSBjb2x1bW5JZCkge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBkLCB7XG4gICAgICAgICAgICAgIGRlc2M6IGhhc0Rlc2NEZWZpbmVkID8gZGVzYyA6ICFleGlzdGluZ1NvcnRCeS5kZXNjXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHNvcnRBY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgIF9uZXdTb3J0QnkgPSBfc29ydEJ5Mi5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZC5pZCAhPT0gY29sdW1uSWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNvcnRCeTogX25ld1NvcnRCeVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkNShpbnN0YW5jZSkge1xuICAgIHZhciBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93cyA9IGluc3RhbmNlLnJvd3MsXG4gICAgICAgIGZsYXRSb3dzID0gaW5zdGFuY2UuZmxhdFJvd3MsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBfaW5zdGFuY2Ukb3JkZXJCeUZuID0gaW5zdGFuY2Uub3JkZXJCeUZuLFxuICAgICAgICBvcmRlckJ5Rm4gPSBfaW5zdGFuY2Ukb3JkZXJCeUZuID09PSB2b2lkIDAgPyBkZWZhdWx0T3JkZXJCeUZuIDogX2luc3RhbmNlJG9yZGVyQnlGbixcbiAgICAgICAgdXNlclNvcnRUeXBlcyA9IGluc3RhbmNlLnNvcnRUeXBlcyxcbiAgICAgICAgbWFudWFsU29ydEJ5ID0gaW5zdGFuY2UubWFudWFsU29ydEJ5LFxuICAgICAgICBkZWZhdWx0Q2FuU29ydCA9IGluc3RhbmNlLmRlZmF1bHRDYW5Tb3J0LFxuICAgICAgICBkaXNhYmxlU29ydEJ5ID0gaW5zdGFuY2UuZGlzYWJsZVNvcnRCeSxcbiAgICAgICAgZmxhdEhlYWRlcnMgPSBpbnN0YW5jZS5mbGF0SGVhZGVycyxcbiAgICAgICAgc29ydEJ5ID0gaW5zdGFuY2Uuc3RhdGUuc29ydEJ5LFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFNvID0gaW5zdGFuY2UuYXV0b1Jlc2V0U29ydEJ5LFxuICAgICAgICBhdXRvUmVzZXRTb3J0QnkgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0U28gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0U287XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VGaWx0ZXJzJywgJ3VzZUdsb2JhbEZpbHRlcicsICd1c2VHcm91cEJ5JywgJ3VzZVBpdm90Q29sdW1ucyddLCAndXNlU29ydEJ5Jyk7XG4gICAgdmFyIHNldFNvcnRCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzb3J0QnkpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRTb3J0QnksXG4gICAgICAgIHNvcnRCeTogc29ydEJ5XG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTsgLy8gVXBkYXRlcyBzb3J0aW5nIGJhc2VkIG9uIGEgY29sdW1uSWQsIGRlc2MgZmxhZyBhbmQgbXVsdGkgZmxhZ1xuXG4gICAgdmFyIHRvZ2dsZVNvcnRCeSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb2x1bW5JZCwgZGVzYywgbXVsdGkpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVTb3J0QnksXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgZGVzYzogZGVzYyxcbiAgICAgICAgbXVsdGk6IG11bHRpXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTsgLy8gdXNlIHJlZmVyZW5jZSB0byBhdm9pZCBtZW1vcnkgbGVhayBpbiAjMTYwOFxuXG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTsgLy8gQWRkIHRoZSBnZXRTb3J0QnlUb2dnbGVQcm9wcyBtZXRob2QgdG8gY29sdW1ucyBhbmQgaGVhZGVyc1xuXG4gICAgZmxhdEhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICB2YXIgYWNjZXNzb3IgPSBjb2x1bW4uYWNjZXNzb3IsXG4gICAgICAgICAgZGVmYXVsdENvbHVtbkNhblNvcnQgPSBjb2x1bW4uY2FuU29ydCxcbiAgICAgICAgICBjb2x1bW5EaXNhYmxlU29ydEJ5ID0gY29sdW1uLmRpc2FibGVTb3J0QnksXG4gICAgICAgICAgaWQgPSBjb2x1bW4uaWQ7XG4gICAgICB2YXIgY2FuU29ydCA9IGFjY2Vzc29yID8gZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbkRpc2FibGVTb3J0QnkgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgZGlzYWJsZVNvcnRCeSA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCB0cnVlKSA6IGdldEZpcnN0RGVmaW5lZChkZWZhdWx0Q2FuU29ydCwgZGVmYXVsdENvbHVtbkNhblNvcnQsIGZhbHNlKTtcbiAgICAgIGNvbHVtbi5jYW5Tb3J0ID0gY2FuU29ydDtcblxuICAgICAgaWYgKGNvbHVtbi5jYW5Tb3J0KSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVTb3J0QnkgPSBmdW5jdGlvbiAoZGVzYywgbXVsdGkpIHtcbiAgICAgICAgICByZXR1cm4gdG9nZ2xlU29ydEJ5KGNvbHVtbi5pZCwgZGVzYywgbXVsdGkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbHVtbi5jbGVhclNvcnRCeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBhY3Rpb25zLmNsZWFyU29ydEJ5LFxuICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbi5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2x1bW4uZ2V0U29ydEJ5VG9nZ2xlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFNvcnRCeVRvZ2dsZVByb3BzLCB7XG4gICAgICAgIGluc3RhbmNlOiBnZXRJbnN0YW5jZSgpLFxuICAgICAgICBjb2x1bW46IGNvbHVtblxuICAgICAgfSk7XG4gICAgICB2YXIgY29sdW1uU29ydCA9IHNvcnRCeS5maW5kKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSBpZDtcbiAgICAgIH0pO1xuICAgICAgY29sdW1uLmlzU29ydGVkID0gISFjb2x1bW5Tb3J0O1xuICAgICAgY29sdW1uLnNvcnRlZEluZGV4ID0gc29ydEJ5LmZpbmRJbmRleChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGNvbHVtbi5pc1NvcnRlZERlc2MgPSBjb2x1bW4uaXNTb3J0ZWQgPyBjb2x1bW5Tb3J0LmRlc2MgOiB1bmRlZmluZWQ7XG4gICAgfSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZU1lbW8gPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYW51YWxTb3J0QnkgfHwgIXNvcnRCeS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtyb3dzLCBmbGF0Um93c107XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3J0ZWRGbGF0Um93cyA9IFtdOyAvLyBGaWx0ZXIgb3V0IHNvcnRCeXMgdGhhdCBjb3JyZXNwb25kIHRvIG5vbiBleGlzdGluZyBjb2x1bW5zXG5cbiAgICAgIHZhciBhdmFpbGFibGVTb3J0QnkgPSBzb3J0QnkuZmlsdGVyKGZ1bmN0aW9uIChzb3J0KSB7XG4gICAgICAgIHJldHVybiBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgIHJldHVybiBjb2wuaWQgPT09IHNvcnQuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBzb3J0RGF0YSA9IGZ1bmN0aW9uIHNvcnREYXRhKHJvd3MpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBvcmRlckJ5Rm4gdG8gY29tcG9zZSBtdWx0aXBsZSBzb3J0QnkncyB0b2dldGhlci5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGFsc28gcGVyZm9ybSBhIHN0YWJsZSBzb3J0aW5nIHVzaW5nIHRoZSByb3cgaW5kZXhcbiAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICB2YXIgc29ydGVkRGF0YSA9IG9yZGVyQnlGbihyb3dzLCBhdmFpbGFibGVTb3J0QnkubWFwKGZ1bmN0aW9uIChzb3J0KSB7XG4gICAgICAgICAgLy8gU3VwcG9ydCBjdXN0b20gc29ydGluZyBtZXRob2RzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgIHZhciBjb2x1bW4gPSBhbGxDb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBkLmlkID09PSBzb3J0LmlkO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFjb2x1bW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LVRhYmxlOiBDb3VsZCBub3QgZmluZCBhIGNvbHVtbiB3aXRoIGlkOiBcIiArIHNvcnQuaWQgKyBcIiB3aGlsZSBzb3J0aW5nXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzb3J0VHlwZSA9IGNvbHVtbi5zb3J0VHlwZTsgLy8gTG9vayB1cCBzb3J0QnkgZnVuY3Rpb25zIGluIHRoaXMgb3JkZXI6XG4gICAgICAgICAgLy8gY29sdW1uIGZ1bmN0aW9uXG4gICAgICAgICAgLy8gY29sdW1uIHN0cmluZyBsb29rdXAgb24gdXNlciBzb3J0VHlwZVxuICAgICAgICAgIC8vIGNvbHVtbiBzdHJpbmcgbG9va3VwIG9uIGJ1aWx0LWluIHNvcnRUeXBlXG4gICAgICAgICAgLy8gZGVmYXVsdCBmdW5jdGlvblxuICAgICAgICAgIC8vIGRlZmF1bHQgc3RyaW5nIGxvb2t1cCBvbiB1c2VyIHNvcnRUeXBlXG4gICAgICAgICAgLy8gZGVmYXVsdCBzdHJpbmcgbG9va3VwIG9uIGJ1aWx0LWluIHNvcnRUeXBlXG5cbiAgICAgICAgICB2YXIgc29ydE1ldGhvZCA9IGlzRnVuY3Rpb24oc29ydFR5cGUpIHx8ICh1c2VyU29ydFR5cGVzIHx8IHt9KVtzb3J0VHlwZV0gfHwgc29ydFR5cGVzW3NvcnRUeXBlXTtcblxuICAgICAgICAgIGlmICghc29ydE1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QtVGFibGU6IENvdWxkIG5vdCBmaW5kIGEgdmFsaWQgc29ydFR5cGUgb2YgJ1wiICsgc29ydFR5cGUgKyBcIicgZm9yIGNvbHVtbiAnXCIgKyBzb3J0LmlkICsgXCInLlwiKTtcbiAgICAgICAgICB9IC8vIFJldHVybiB0aGUgY29ycmVjdCBzb3J0Rm4uXG4gICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBzaG91bGQgYWx3YXlzIHJldHVybiBpbiBhc2NlbmRpbmcgb3JkZXJcblxuXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE1ldGhvZChhLCBiLCBzb3J0LmlkLCBzb3J0LmRlc2MpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pLCAvLyBNYXAgdGhlIGRpcmVjdGlvbnNcbiAgICAgICAgYXZhaWxhYmxlU29ydEJ5Lm1hcChmdW5jdGlvbiAoc29ydCkge1xuICAgICAgICAgIC8vIERldGVjdCBhbmQgdXNlIHRoZSBzb3J0SW52ZXJ0ZWQgb3B0aW9uXG4gICAgICAgICAgdmFyIGNvbHVtbiA9IGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgcmV0dXJuIGQuaWQgPT09IHNvcnQuaWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoY29sdW1uICYmIGNvbHVtbi5zb3J0SW52ZXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0LmRlc2M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuICFzb3J0LmRlc2M7XG4gICAgICAgIH0pKTsgLy8gSWYgdGhlcmUgYXJlIHN1Yi1yb3dzLCBzb3J0IHRoZW1cblxuICAgICAgICBzb3J0ZWREYXRhLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHNvcnRlZEZsYXRSb3dzLnB1c2gocm93KTtcblxuICAgICAgICAgIGlmICghcm93LnN1YlJvd3MgfHwgcm93LnN1YlJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm93LnN1YlJvd3MgPSBzb3J0RGF0YShyb3cuc3ViUm93cyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGVkRGF0YTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBbc29ydERhdGEocm93cyksIHNvcnRlZEZsYXRSb3dzXTtcbiAgICB9LCBbbWFudWFsU29ydEJ5LCBzb3J0QnksIHJvd3MsIGZsYXRSb3dzLCBhbGxDb2x1bW5zLCBvcmRlckJ5Rm4sIHVzZXJTb3J0VHlwZXNdKSxcbiAgICAgICAgc29ydGVkUm93cyA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBzb3J0ZWRGbGF0Um93cyA9IF9SZWFjdCR1c2VNZW1vWzFdO1xuXG4gICAgdmFyIGdldEF1dG9SZXNldFNvcnRCeSA9IHVzZUdldExhdGVzdChhdXRvUmVzZXRTb3J0QnkpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFNvcnRCeSgpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb25zLnJlc2V0U29ydEJ5XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFttYW51YWxTb3J0QnkgPyBudWxsIDogZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHByZVNvcnRlZFJvd3M6IHJvd3MsXG4gICAgICBwcmVTb3J0ZWRGbGF0Um93czogZmxhdFJvd3MsXG4gICAgICBzb3J0ZWRSb3dzOiBzb3J0ZWRSb3dzLFxuICAgICAgc29ydGVkRmxhdFJvd3M6IHNvcnRlZEZsYXRSb3dzLFxuICAgICAgcm93czogc29ydGVkUm93cyxcbiAgICAgIGZsYXRSb3dzOiBzb3J0ZWRGbGF0Um93cyxcbiAgICAgIHNldFNvcnRCeTogc2V0U29ydEJ5LFxuICAgICAgdG9nZ2xlU29ydEJ5OiB0b2dnbGVTb3J0QnlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHRPcmRlckJ5Rm4oYXJyLCBmdW5jcywgZGlycykge1xuICAgIHJldHVybiBbXS5jb25jYXQoYXJyKS5zb3J0KGZ1bmN0aW9uIChyb3dBLCByb3dCKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZ1bmNzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzb3J0Rm4gPSBmdW5jc1tpXTtcbiAgICAgICAgdmFyIGRlc2MgPSBkaXJzW2ldID09PSBmYWxzZSB8fCBkaXJzW2ldID09PSAnZGVzYyc7XG4gICAgICAgIHZhciBzb3J0SW50ID0gc29ydEZuKHJvd0EsIHJvd0IpO1xuXG4gICAgICAgIGlmIChzb3J0SW50ICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2MgPyAtc29ydEludCA6IHNvcnRJbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcnNbMF0gPyByb3dBLmluZGV4IC0gcm93Qi5pbmRleCA6IHJvd0IuaW5kZXggLSByb3dBLmluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBsdWdpbk5hbWUgPSAndXNlUGFnaW5hdGlvbic7IC8vIEFjdGlvbnNcblxuICBhY3Rpb25zLnJlc2V0UGFnZSA9ICdyZXNldFBhZ2UnO1xuICBhY3Rpb25zLmdvdG9QYWdlID0gJ2dvdG9QYWdlJztcbiAgYWN0aW9ucy5zZXRQYWdlU2l6ZSA9ICdzZXRQYWdlU2l6ZSc7XG4gIHZhciB1c2VQYWdpbmF0aW9uID0gZnVuY3Rpb24gdXNlUGFnaW5hdGlvbihob29rcykge1xuICAgIGhvb2tzLnN0YXRlUmVkdWNlcnMucHVzaChyZWR1Y2VyJDYpO1xuICAgIGhvb2tzLnVzZUluc3RhbmNlLnB1c2godXNlSW5zdGFuY2UkNik7XG4gIH07XG4gIHVzZVBhZ2luYXRpb24ucGx1Z2luTmFtZSA9IHBsdWdpbk5hbWU7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ2KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgcGFnZUluZGV4OiAwXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0UGFnZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5wYWdlSW5kZXggfHwgMFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmdvdG9QYWdlKSB7XG4gICAgICB2YXIgcGFnZUNvdW50ID0gaW5zdGFuY2UucGFnZUNvdW50LFxuICAgICAgICAgIHBhZ2UgPSBpbnN0YW5jZS5wYWdlO1xuICAgICAgdmFyIG5ld1BhZ2VJbmRleCA9IGZ1bmN0aW9uYWxVcGRhdGUoYWN0aW9uLnBhZ2VJbmRleCwgc3RhdGUucGFnZUluZGV4KTtcbiAgICAgIHZhciBjYW5OYXZpZ2F0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAobmV3UGFnZUluZGV4ID4gc3RhdGUucGFnZUluZGV4KSB7XG4gICAgICAgIC8vIG5leHQgcGFnZVxuICAgICAgICBjYW5OYXZpZ2F0ZSA9IHBhZ2VDb3VudCA9PT0gLTEgPyBwYWdlLmxlbmd0aCA+PSBzdGF0ZS5wYWdlU2l6ZSA6IG5ld1BhZ2VJbmRleCA8IHBhZ2VDb3VudDtcbiAgICAgIH0gZWxzZSBpZiAobmV3UGFnZUluZGV4IDwgc3RhdGUucGFnZUluZGV4KSB7XG4gICAgICAgIC8vIHByZXYgcGFnZVxuICAgICAgICBjYW5OYXZpZ2F0ZSA9IG5ld1BhZ2VJbmRleCA+IC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNhbk5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IG5ld1BhZ2VJbmRleFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldFBhZ2VTaXplKSB7XG4gICAgICB2YXIgcGFnZVNpemUgPSBhY3Rpb24ucGFnZVNpemU7XG4gICAgICB2YXIgdG9wUm93SW5kZXggPSBzdGF0ZS5wYWdlU2l6ZSAqIHN0YXRlLnBhZ2VJbmRleDtcbiAgICAgIHZhciBwYWdlSW5kZXggPSBNYXRoLmZsb29yKHRvcFJvd0luZGV4IC8gcGFnZVNpemUpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlSW5kZXg6IHBhZ2VJbmRleCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ2KGluc3RhbmNlKSB7XG4gICAgdmFyIHJvd3MgPSBpbnN0YW5jZS5yb3dzLFxuICAgICAgICBfaW5zdGFuY2UkYXV0b1Jlc2V0UGEgPSBpbnN0YW5jZS5hdXRvUmVzZXRQYWdlLFxuICAgICAgICBhdXRvUmVzZXRQYWdlID0gX2luc3RhbmNlJGF1dG9SZXNldFBhID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFBhLFxuICAgICAgICBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPSBpbnN0YW5jZS5tYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgbWFudWFsRXhwYW5kZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsRXhwYW4gPT09IHZvaWQgMCA/ICdleHBhbmRlZCcgOiBfaW5zdGFuY2UkbWFudWFsRXhwYW4sXG4gICAgICAgIHBsdWdpbnMgPSBpbnN0YW5jZS5wbHVnaW5zLFxuICAgICAgICB1c2VyUGFnZUNvdW50ID0gaW5zdGFuY2UucGFnZUNvdW50LFxuICAgICAgICBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPSBpbnN0YW5jZS5wYWdpbmF0ZUV4cGFuZGVkUm93cyxcbiAgICAgICAgcGFnaW5hdGVFeHBhbmRlZFJvd3MgPSBfaW5zdGFuY2UkcGFnaW5hdGVFeHAgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkcGFnaW5hdGVFeHAsXG4gICAgICAgIF9pbnN0YW5jZSRleHBhbmRTdWJSbyA9IGluc3RhbmNlLmV4cGFuZFN1YlJvd3MsXG4gICAgICAgIGV4cGFuZFN1YlJvd3MgPSBfaW5zdGFuY2UkZXhwYW5kU3ViUm8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkZXhwYW5kU3ViUm8sXG4gICAgICAgIF9pbnN0YW5jZSRzdGF0ZSA9IGluc3RhbmNlLnN0YXRlLFxuICAgICAgICBwYWdlU2l6ZSA9IF9pbnN0YW5jZSRzdGF0ZS5wYWdlU2l6ZSxcbiAgICAgICAgcGFnZUluZGV4ID0gX2luc3RhbmNlJHN0YXRlLnBhZ2VJbmRleCxcbiAgICAgICAgZXhwYW5kZWQgPSBfaW5zdGFuY2Ukc3RhdGUuZXhwYW5kZWQsXG4gICAgICAgIGdsb2JhbEZpbHRlciA9IF9pbnN0YW5jZSRzdGF0ZS5nbG9iYWxGaWx0ZXIsXG4gICAgICAgIGZpbHRlcnMgPSBfaW5zdGFuY2Ukc3RhdGUuZmlsdGVycyxcbiAgICAgICAgZ3JvdXBCeSA9IF9pbnN0YW5jZSRzdGF0ZS5ncm91cEJ5LFxuICAgICAgICBzb3J0QnkgPSBfaW5zdGFuY2Ukc3RhdGUuc29ydEJ5LFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoLFxuICAgICAgICBkYXRhID0gaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgbWFudWFsUGFnaW5hdGlvbiA9IGluc3RhbmNlLm1hbnVhbFBhZ2luYXRpb247XG4gICAgZW5zdXJlUGx1Z2luT3JkZXIocGx1Z2lucywgWyd1c2VHbG9iYWxGaWx0ZXInLCAndXNlRmlsdGVycycsICd1c2VHcm91cEJ5JywgJ3VzZVNvcnRCeScsICd1c2VFeHBhbmRlZCddLCAndXNlUGFnaW5hdGlvbicpO1xuICAgIHZhciBnZXRBdXRvUmVzZXRQYWdlID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFBhZ2UpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFBhZ2UoKSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogYWN0aW9ucy5yZXNldFBhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBtYW51YWxQYWdpbmF0aW9uID8gbnVsbCA6IGRhdGEsIGdsb2JhbEZpbHRlciwgZmlsdGVycywgZ3JvdXBCeSwgc29ydEJ5XSk7XG4gICAgdmFyIHBhZ2VDb3VudCA9IG1hbnVhbFBhZ2luYXRpb24gPyB1c2VyUGFnZUNvdW50IDogTWF0aC5jZWlsKHJvd3MubGVuZ3RoIC8gcGFnZVNpemUpO1xuICAgIHZhciBwYWdlT3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhZ2VDb3VudCA+IDAgPyBbXS5jb25jYXQobmV3IEFycmF5KHBhZ2VDb3VudCkpLmZpbGwobnVsbCkubWFwKGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSkgOiBbXTtcbiAgICB9LCBbcGFnZUNvdW50XSk7XG4gICAgdmFyIHBhZ2UgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYWdlO1xuXG4gICAgICBpZiAobWFudWFsUGFnaW5hdGlvbikge1xuICAgICAgICBwYWdlID0gcm93cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwYWdlU3RhcnQgPSBwYWdlU2l6ZSAqIHBhZ2VJbmRleDtcbiAgICAgICAgdmFyIHBhZ2VFbmQgPSBwYWdlU3RhcnQgKyBwYWdlU2l6ZTtcbiAgICAgICAgcGFnZSA9IHJvd3Muc2xpY2UocGFnZVN0YXJ0LCBwYWdlRW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2luYXRlRXhwYW5kZWRSb3dzKSB7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXhwYW5kUm93cyhwYWdlLCB7XG4gICAgICAgIG1hbnVhbEV4cGFuZGVkS2V5OiBtYW51YWxFeHBhbmRlZEtleSxcbiAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgICBleHBhbmRTdWJSb3dzOiBleHBhbmRTdWJSb3dzXG4gICAgICB9KTtcbiAgICB9LCBbZXhwYW5kU3ViUm93cywgZXhwYW5kZWQsIG1hbnVhbEV4cGFuZGVkS2V5LCBtYW51YWxQYWdpbmF0aW9uLCBwYWdlSW5kZXgsIHBhZ2VTaXplLCBwYWdpbmF0ZUV4cGFuZGVkUm93cywgcm93c10pO1xuICAgIHZhciBjYW5QcmV2aW91c1BhZ2UgPSBwYWdlSW5kZXggPiAwO1xuICAgIHZhciBjYW5OZXh0UGFnZSA9IHBhZ2VDb3VudCA9PT0gLTEgPyBwYWdlLmxlbmd0aCA+PSBwYWdlU2l6ZSA6IHBhZ2VJbmRleCA8IHBhZ2VDb3VudCAtIDE7XG4gICAgdmFyIGdvdG9QYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBhZ2VJbmRleCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmdvdG9QYWdlLFxuICAgICAgICBwYWdlSW5kZXg6IHBhZ2VJbmRleFxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHByZXZpb3VzUGFnZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnb3RvUGFnZShmdW5jdGlvbiAob2xkKSB7XG4gICAgICAgIHJldHVybiBvbGQgLSAxO1xuICAgICAgfSk7XG4gICAgfSwgW2dvdG9QYWdlXSk7XG4gICAgdmFyIG5leHRQYWdlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdvdG9QYWdlKGZ1bmN0aW9uIChvbGQpIHtcbiAgICAgICAgcmV0dXJuIG9sZCArIDE7XG4gICAgICB9KTtcbiAgICB9LCBbZ290b1BhZ2VdKTtcbiAgICB2YXIgc2V0UGFnZVNpemUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAocGFnZVNpemUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy5zZXRQYWdlU2l6ZSxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBwYWdlT3B0aW9uczogcGFnZU9wdGlvbnMsXG4gICAgICBwYWdlQ291bnQ6IHBhZ2VDb3VudCxcbiAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICBjYW5QcmV2aW91c1BhZ2U6IGNhblByZXZpb3VzUGFnZSxcbiAgICAgIGNhbk5leHRQYWdlOiBjYW5OZXh0UGFnZSxcbiAgICAgIGdvdG9QYWdlOiBnb3RvUGFnZSxcbiAgICAgIHByZXZpb3VzUGFnZTogcHJldmlvdXNQYWdlLFxuICAgICAgbmV4dFBhZ2U6IG5leHRQYWdlLFxuICAgICAgc2V0UGFnZVNpemU6IHNldFBhZ2VTaXplXG4gICAgfSk7XG4gIH1cblxuICBhY3Rpb25zLnJlc2V0UGl2b3QgPSAncmVzZXRQaXZvdCc7XG4gIGFjdGlvbnMudG9nZ2xlUGl2b3QgPSAndG9nZ2xlUGl2b3QnO1xuICB2YXIgX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucyA9IGZ1bmN0aW9uIF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnMoaG9va3MpIHtcbiAgICBob29rcy5nZXRQaXZvdFRvZ2dsZVByb3BzID0gW2RlZmF1bHRHZXRQaXZvdFRvZ2dsZVByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ3KTtcbiAgICBob29rcy51c2VJbnN0YW5jZUFmdGVyRGF0YS5wdXNoKHVzZUluc3RhbmNlQWZ0ZXJEYXRhKTtcbiAgICBob29rcy5hbGxDb2x1bW5zLnB1c2goYWxsQ29sdW1ucyk7XG4gICAgaG9va3MuYWNjZXNzVmFsdWUucHVzaChhY2Nlc3NWYWx1ZSk7XG4gICAgaG9va3MubWF0ZXJpYWxpemVkQ29sdW1ucy5wdXNoKG1hdGVyaWFsaXplZENvbHVtbnMpO1xuICAgIGhvb2tzLm1hdGVyaWFsaXplZENvbHVtbnNEZXBzLnB1c2gobWF0ZXJpYWxpemVkQ29sdW1uc0RlcHMpO1xuICAgIGhvb2tzLnZpc2libGVDb2x1bW5zLnB1c2godmlzaWJsZUNvbHVtbnMkMSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnNEZXBzLnB1c2godmlzaWJsZUNvbHVtbnNEZXBzKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDcpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDIpO1xuICB9O1xuICBfVU5TVEFCTEVfdXNlUGl2b3RDb2x1bW5zLnBsdWdpbk5hbWUgPSAndXNlUGl2b3RDb2x1bW5zJztcbiAgdmFyIGRlZmF1bHRQaXZvdENvbHVtbnMgPSBbXTtcblxuICB2YXIgZGVmYXVsdEdldFBpdm90VG9nZ2xlUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0UGl2b3RUb2dnbGVQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBoZWFkZXIgPSBfcmVmLmhlYWRlcjtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNsaWNrOiBoZWFkZXIuY2FuUGl2b3QgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgaGVhZGVyLnRvZ2dsZVBpdm90KCk7XG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBoZWFkZXIuY2FuUGl2b3QgPyAncG9pbnRlcicgOiB1bmRlZmluZWRcbiAgICAgIH0sXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBQaXZvdCdcbiAgICB9XTtcbiAgfTsgLy8gUmVkdWNlclxuXG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ3KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmluaXQpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBpdm90Q29sdW1uczogZGVmYXVsdFBpdm90Q29sdW1uc1xuICAgICAgfSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5yZXNldFBpdm90KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBpdm90Q29sdW1uczogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnBpdm90Q29sdW1ucyB8fCBkZWZhdWx0UGl2b3RDb2x1bW5zXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUGl2b3QpIHtcbiAgICAgIHZhciBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBzZXRQaXZvdCA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciByZXNvbHZlZFBpdm90ID0gdHlwZW9mIHNldFBpdm90ICE9PSAndW5kZWZpbmVkJyA/IHNldFBpdm90IDogIXN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhjb2x1bW5JZCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZFBpdm90KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBwaXZvdENvbHVtbnM6IFtdLmNvbmNhdChzdGF0ZS5waXZvdENvbHVtbnMsIFtjb2x1bW5JZF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHBpdm90Q29sdW1uczogc3RhdGUucGl2b3RDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkICE9PSBjb2x1bW5JZDtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlQWZ0ZXJEYXRhKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi5pc1Bpdm90U291cmNlID0gaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxDb2x1bW5zKGNvbHVtbnMsIF9yZWYyKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZjIuaW5zdGFuY2U7XG4gICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIGNvbHVtbi5pc1Bpdm90U291cmNlID0gaW5zdGFuY2Uuc3RhdGUucGl2b3RDb2x1bW5zLmluY2x1ZGVzKGNvbHVtbi5pZCk7XG4gICAgICBjb2x1bW4udW5pcXVlVmFsdWVzID0gbmV3IFNldCgpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gYWNjZXNzVmFsdWUodmFsdWUsIF9yZWYzKSB7XG4gICAgdmFyIGNvbHVtbiA9IF9yZWYzLmNvbHVtbjtcblxuICAgIGlmIChjb2x1bW4udW5pcXVlVmFsdWVzICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbHVtbi51bmlxdWVWYWx1ZXMuYWRkKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRlcmlhbGl6ZWRDb2x1bW5zKG1hdGVyaWFsaXplZCwgX3JlZjQpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNC5pbnN0YW5jZTtcbiAgICB2YXIgYWxsQ29sdW1ucyA9IGluc3RhbmNlLmFsbENvbHVtbnMsXG4gICAgICAgIHN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG5cbiAgICBpZiAoIXN0YXRlLnBpdm90Q29sdW1ucy5sZW5ndGggfHwgIXN0YXRlLmdyb3VwQnkgfHwgIXN0YXRlLmdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbWF0ZXJpYWxpemVkO1xuICAgIH1cblxuICAgIHZhciBwaXZvdENvbHVtbnMgPSBzdGF0ZS5waXZvdENvbHVtbnMubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIGFsbENvbHVtbnMuZmluZChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZC5pZCA9PT0gaWQ7XG4gICAgICB9KTtcbiAgICB9KS5maWx0ZXIoQm9vbGVhbik7XG4gICAgdmFyIHNvdXJjZUNvbHVtbnMgPSBhbGxDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuICFkLmlzUGl2b3RTb3VyY2UgJiYgIXN0YXRlLmdyb3VwQnkuaW5jbHVkZXMoZC5pZCkgJiYgIXN0YXRlLnBpdm90Q29sdW1ucy5pbmNsdWRlcyhkLmlkKTtcbiAgICB9KTtcblxuICAgIHZhciBidWlsZFBpdm90Q29sdW1ucyA9IGZ1bmN0aW9uIGJ1aWxkUGl2b3RDb2x1bW5zKGRlcHRoLCBwYXJlbnQsIHBpdm90RmlsdGVycykge1xuICAgICAgaWYgKGRlcHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVwdGggPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAocGl2b3RGaWx0ZXJzID09PSB2b2lkIDApIHtcbiAgICAgICAgcGl2b3RGaWx0ZXJzID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBwaXZvdENvbHVtbiA9IHBpdm90Q29sdW1uc1tkZXB0aF07XG5cbiAgICAgIGlmICghcGl2b3RDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZUNvbHVtbnMubWFwKGZ1bmN0aW9uIChzb3VyY2VDb2x1bW4pIHtcbiAgICAgICAgICAvLyBUT0RPOiBXZSBjb3VsZCBvZmZlciBzdXBwb3J0IGhlcmUgZm9yIHJlbmVzdGluZyBwaXZvdGVkXG4gICAgICAgICAgLy8gY29sdW1ucyBpbnNpZGUgY29waWVzIG9mIHRoZWlyIGhlYWRlciBncm91cHMuIEZvciBub3csXG4gICAgICAgICAgLy8gdGhhdCBzZWVtcyBsaWtlIGl0IHdvdWxkIGJlICgxKSBvdmVya2lsbCBvbiBuZXN0aW5nLCBjb25zaWRlcmluZ1xuICAgICAgICAgIC8vIHlvdSBhbHJlYWR5IGdldCBuZXN0aW5nIGZvciBldmVyeSBwaXZvdCBsZXZlbCBhbmQgKDIpXG4gICAgICAgICAgLy8gcmVhbGx5IGhhcmQuIDopXG4gICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzb3VyY2VDb2x1bW4sIHtcbiAgICAgICAgICAgIGNhblBpdm90OiBmYWxzZSxcbiAgICAgICAgICAgIGlzUGl2b3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgZGVwdGg6IGRlcHRoLFxuICAgICAgICAgICAgaWQ6IFwiXCIgKyAocGFyZW50ID8gcGFyZW50LmlkICsgXCIuXCIgKyBzb3VyY2VDb2x1bW4uaWQgOiBzb3VyY2VDb2x1bW4uaWQpLFxuICAgICAgICAgICAgYWNjZXNzb3I6IGZ1bmN0aW9uIGFjY2Vzc29yKG9yaWdpbmFsUm93LCBpLCByb3cpIHtcbiAgICAgICAgICAgICAgaWYgKHBpdm90RmlsdGVycy5ldmVyeShmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihyb3cpO1xuICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW3NvdXJjZUNvbHVtbi5pZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB1bmlxdWVWYWx1ZXMgPSBBcnJheS5mcm9tKHBpdm90Q29sdW1uLnVuaXF1ZVZhbHVlcykuc29ydCgpO1xuICAgICAgcmV0dXJuIHVuaXF1ZVZhbHVlcy5tYXAoZnVuY3Rpb24gKHVuaXF1ZVZhbHVlKSB7XG4gICAgICAgIHZhciBjb2x1bW5Hcm91cCA9IF9leHRlbmRzKHt9LCBwaXZvdENvbHVtbiwge1xuICAgICAgICAgIEhlYWRlcjogcGl2b3RDb2x1bW4uUGl2b3RIZWFkZXIgfHwgdHlwZW9mIHBpdm90Q29sdW1uLmhlYWRlciA9PT0gJ3N0cmluZycgPyBwaXZvdENvbHVtbi5IZWFkZXIgKyBcIjogXCIgKyB1bmlxdWVWYWx1ZSA6IHVuaXF1ZVZhbHVlLFxuICAgICAgICAgIGlzUGl2b3RHcm91cDogdHJ1ZSxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICBkZXB0aDogZGVwdGgsXG4gICAgICAgICAgaWQ6IHBhcmVudCA/IHBhcmVudC5pZCArIFwiLlwiICsgcGl2b3RDb2x1bW4uaWQgKyBcIi5cIiArIHVuaXF1ZVZhbHVlIDogcGl2b3RDb2x1bW4uaWQgKyBcIi5cIiArIHVuaXF1ZVZhbHVlLFxuICAgICAgICAgIHBpdm90VmFsdWU6IHVuaXF1ZVZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbHVtbkdyb3VwLmNvbHVtbnMgPSBidWlsZFBpdm90Q29sdW1ucyhkZXB0aCArIDEsIGNvbHVtbkdyb3VwLCBbXS5jb25jYXQocGl2b3RGaWx0ZXJzLCBbZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgIHJldHVybiByb3cudmFsdWVzW3Bpdm90Q29sdW1uLmlkXSA9PT0gdW5pcXVlVmFsdWU7XG4gICAgICAgIH1dKSk7XG4gICAgICAgIHJldHVybiBjb2x1bW5Hcm91cDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgbmV3TWF0ZXJpYWxpemVkID0gZmxhdHRlbkNvbHVtbnMoYnVpbGRQaXZvdENvbHVtbnMoKSk7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChtYXRlcmlhbGl6ZWQsIG5ld01hdGVyaWFsaXplZCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRlcmlhbGl6ZWRDb2x1bW5zRGVwcyhkZXBzLCBfcmVmNSkge1xuICAgIHZhciBfcmVmNSRpbnN0YW5jZSRzdGF0ZSA9IF9yZWY1Lmluc3RhbmNlLnN0YXRlLFxuICAgICAgICBwaXZvdENvbHVtbnMgPSBfcmVmNSRpbnN0YW5jZSRzdGF0ZS5waXZvdENvbHVtbnMsXG4gICAgICAgIGdyb3VwQnkgPSBfcmVmNSRpbnN0YW5jZSRzdGF0ZS5ncm91cEJ5O1xuICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW3Bpdm90Q29sdW1ucywgZ3JvdXBCeV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzaWJsZUNvbHVtbnMkMSh2aXNpYmxlQ29sdW1ucywgX3JlZjYpIHtcbiAgICB2YXIgc3RhdGUgPSBfcmVmNi5pbnN0YW5jZS5zdGF0ZTtcbiAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuICFkLmlzUGl2b3RTb3VyY2U7XG4gICAgfSk7XG5cbiAgICBpZiAoc3RhdGUucGl2b3RDb2x1bW5zLmxlbmd0aCAmJiBzdGF0ZS5ncm91cEJ5ICYmIHN0YXRlLmdyb3VwQnkubGVuZ3RoKSB7XG4gICAgICB2aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW4uaXNHcm91cGVkIHx8IGNvbHVtbi5pc1Bpdm90ZWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaWJsZUNvbHVtbnM7XG4gIH1cblxuICBmdW5jdGlvbiB2aXNpYmxlQ29sdW1uc0RlcHMoZGVwcywgX3JlZjcpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNy5pbnN0YW5jZTtcbiAgICByZXR1cm4gW10uY29uY2F0KGRlcHMsIFtpbnN0YW5jZS5zdGF0ZS5waXZvdENvbHVtbnMsIGluc3RhbmNlLnN0YXRlLmdyb3VwQnldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZUluc3RhbmNlJDcoaW5zdGFuY2UpIHtcbiAgICB2YXIgY29sdW1ucyA9IGluc3RhbmNlLmNvbHVtbnMsXG4gICAgICAgIGFsbENvbHVtbnMgPSBpbnN0YW5jZS5hbGxDb2x1bW5zLFxuICAgICAgICBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBnZXRIb29rcyA9IGluc3RhbmNlLmdldEhvb2tzLFxuICAgICAgICBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFBpID0gaW5zdGFuY2UuYXV0b1Jlc2V0UGl2b3QsXG4gICAgICAgIGF1dG9SZXNldFBpdm90ID0gX2luc3RhbmNlJGF1dG9SZXNldFBpID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJGF1dG9SZXNldFBpLFxuICAgICAgICBtYW5hdWxQaXZvdCA9IGluc3RhbmNlLm1hbmF1bFBpdm90LFxuICAgICAgICBkaXNhYmxlUGl2b3QgPSBpbnN0YW5jZS5kaXNhYmxlUGl2b3QsXG4gICAgICAgIGRlZmF1bHRDYW5QaXZvdCA9IGluc3RhbmNlLmRlZmF1bHRDYW5QaXZvdDtcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUdyb3VwQnknXSwgJ3VzZVBpdm90Q29sdW1ucycpO1xuICAgIHZhciBnZXRJbnN0YW5jZSA9IHVzZUdldExhdGVzdChpbnN0YW5jZSk7XG4gICAgYWxsQ29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIHZhciBhY2Nlc3NvciA9IGNvbHVtbi5hY2Nlc3NvcixcbiAgICAgICAgICBkZWZhdWx0Q29sdW1uUGl2b3QgPSBjb2x1bW4uZGVmYXVsdFBpdm90LFxuICAgICAgICAgIGNvbHVtbkRpc2FibGVQaXZvdCA9IGNvbHVtbi5kaXNhYmxlUGl2b3Q7XG4gICAgICBjb2x1bW4uY2FuUGl2b3QgPSBhY2Nlc3NvciA/IGdldEZpcnN0RGVmaW5lZChjb2x1bW4uY2FuUGl2b3QsIGNvbHVtbkRpc2FibGVQaXZvdCA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlUGl2b3QgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSkgOiBnZXRGaXJzdERlZmluZWQoY29sdW1uLmNhblBpdm90LCBkZWZhdWx0Q29sdW1uUGl2b3QsIGRlZmF1bHRDYW5QaXZvdCwgZmFsc2UpO1xuXG4gICAgICBpZiAoY29sdW1uLmNhblBpdm90KSB7XG4gICAgICAgIGNvbHVtbi50b2dnbGVQaXZvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UudG9nZ2xlUGl2b3QoY29sdW1uLmlkKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgPSBjb2x1bW4uQWdncmVnYXRlZCB8fCBjb2x1bW4uQ2VsbDtcbiAgICB9KTtcblxuICAgIHZhciB0b2dnbGVQaXZvdCA9IGZ1bmN0aW9uIHRvZ2dsZVBpdm90KGNvbHVtbklkLCB2YWx1ZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVBpdm90LFxuICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZsYXRIZWFkZXJzLmZvckVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgaGVhZGVyLmdldFBpdm90VG9nZ2xlUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFBpdm90VG9nZ2xlUHJvcHMsIHtcbiAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgIGhlYWRlcjogaGVhZGVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0UGl2b3QgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0UGl2b3QpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFBpdm90KCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRQaXZvdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGlzcGF0Y2gsIG1hbmF1bFBpdm90ID8gbnVsbCA6IGNvbHVtbnNdKTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICB0b2dnbGVQaXZvdDogdG9nZ2xlUGl2b3RcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBhcmVSb3ckMihyb3cpIHtcbiAgICByb3cuYWxsQ2VsbHMuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgLy8gR3JvdXBlZCBjZWxscyBhcmUgaW4gdGhlIHBpdm90Q29sdW1ucyBhbmQgdGhlIHBpdm90IGNlbGwgZm9yIHRoZSByb3dcbiAgICAgIGNlbGwuaXNQaXZvdGVkID0gY2VsbC5jb2x1bW4uaXNQaXZvdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBsdWdpbk5hbWUkMSA9ICd1c2VSb3dTZWxlY3QnOyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5yZXNldFNlbGVjdGVkUm93cyA9ICdyZXNldFNlbGVjdGVkUm93cyc7XG4gIGFjdGlvbnMudG9nZ2xlQWxsUm93c1NlbGVjdGVkID0gJ3RvZ2dsZUFsbFJvd3NTZWxlY3RlZCc7XG4gIGFjdGlvbnMudG9nZ2xlUm93U2VsZWN0ZWQgPSAndG9nZ2xlUm93U2VsZWN0ZWQnO1xuICBhY3Rpb25zLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQgPSAndG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCc7XG4gIHZhciB1c2VSb3dTZWxlY3QgPSBmdW5jdGlvbiB1c2VSb3dTZWxlY3QoaG9va3MpIHtcbiAgICBob29rcy5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzID0gW2RlZmF1bHRHZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzXTtcbiAgICBob29rcy5nZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHNdO1xuICAgIGhvb2tzLmdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcyA9IFtkZWZhdWx0R2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzXTtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciQ4KTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJDgpO1xuICAgIGhvb2tzLnByZXBhcmVSb3cucHVzaChwcmVwYXJlUm93JDMpO1xuICB9O1xuICB1c2VSb3dTZWxlY3QucGx1Z2luTmFtZSA9IHBsdWdpbk5hbWUkMTtcblxuICB2YXIgZGVmYXVsdEdldFRvZ2dsZVJvd1NlbGVjdGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlUm93U2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICAgIHJvdyA9IF9yZWYucm93O1xuICAgIHZhciBfaW5zdGFuY2UkbWFudWFsUm93U2UgPSBpbnN0YW5jZS5tYW51YWxSb3dTZWxlY3RlZEtleSxcbiAgICAgICAgbWFudWFsUm93U2VsZWN0ZWRLZXkgPSBfaW5zdGFuY2UkbWFudWFsUm93U2UgPT09IHZvaWQgMCA/ICdpc1NlbGVjdGVkJyA6IF9pbnN0YW5jZSRtYW51YWxSb3dTZTtcbiAgICB2YXIgY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHJvdy5vcmlnaW5hbCAmJiByb3cub3JpZ2luYWxbbWFudWFsUm93U2VsZWN0ZWRLZXldKSB7XG4gICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tlZCA9IHJvdy5pc1NlbGVjdGVkO1xuICAgIH1cblxuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIHJvdy50b2dnbGVSb3dTZWxlY3RlZChlLnRhcmdldC5jaGVja2VkKTtcbiAgICAgIH0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgfSxcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBSb3cgU2VsZWN0ZWQnLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogcm93LmlzU29tZVNlbGVjdGVkXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyA9IGZ1bmN0aW9uIGRlZmF1bHRHZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICBpbnN0YW5jZS50b2dnbGVBbGxSb3dzU2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBpbnN0YW5jZS5pc0FsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHRpdGxlOiAnVG9nZ2xlIEFsbCBSb3dzIFNlbGVjdGVkJyxcbiAgICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4oIWluc3RhbmNlLmlzQWxsUm93c1NlbGVjdGVkICYmIE9iamVjdC5rZXlzKGluc3RhbmNlLnN0YXRlLnNlbGVjdGVkUm93SWRzKS5sZW5ndGgpXG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgICAgIGluc3RhbmNlLnRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQoZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgIH0sXG4gICAgICBjaGVja2VkOiBpbnN0YW5jZS5pc0FsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICB0aXRsZTogJ1RvZ2dsZSBBbGwgQ3VycmVudCBQYWdlIFJvd3MgU2VsZWN0ZWQnLFxuICAgICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbighaW5zdGFuY2UuaXNBbGxQYWdlUm93c1NlbGVjdGVkICYmIGluc3RhbmNlLnBhZ2Uuc29tZShmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgdmFyIGlkID0gX3JlZjQuaWQ7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5zdGF0ZS5zZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB9KSlcbiAgICB9XTtcbiAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcblxuXG4gIGZ1bmN0aW9uIHJlZHVjZXIkOChzdGF0ZSwgYWN0aW9uLCBwcmV2aW91c1N0YXRlLCBpbnN0YW5jZSkge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBzZWxlY3RlZFJvd0lkczoge31cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRTZWxlY3RlZFJvd3MpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5zZWxlY3RlZFJvd0lkcyB8fCB7fVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnRvZ2dsZUFsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgdmFyIHNldFNlbGVjdGVkID0gYWN0aW9uLnZhbHVlO1xuICAgICAgdmFyIGlzQWxsUm93c1NlbGVjdGVkID0gaW5zdGFuY2UuaXNBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZCxcbiAgICAgICAgICBfaW5zdGFuY2Ukbm9uR3JvdXBlZFIgPSBpbnN0YW5jZS5ub25Hcm91cGVkUm93c0J5SWQsXG4gICAgICAgICAgbm9uR3JvdXBlZFJvd3NCeUlkID0gX2luc3RhbmNlJG5vbkdyb3VwZWRSID09PSB2b2lkIDAgPyByb3dzQnlJZCA6IF9pbnN0YW5jZSRub25Hcm91cGVkUjtcbiAgICAgIHZhciBzZWxlY3RBbGwgPSB0eXBlb2Ygc2V0U2VsZWN0ZWQgIT09ICd1bmRlZmluZWQnID8gc2V0U2VsZWN0ZWQgOiAhaXNBbGxSb3dzU2VsZWN0ZWQ7IC8vIE9ubHkgcmVtb3ZlL2FkZCB0aGUgcm93cyB0aGF0IGFyZSB2aXNpYmxlIG9uIHRoZSBzY3JlZW5cbiAgICAgIC8vICBMZWF2ZSBhbGwgdGhlIG90aGVyIHJvd3MgdGhhdCBhcmUgc2VsZWN0ZWQgYWxvbmUuXG5cbiAgICAgIHZhciBzZWxlY3RlZFJvd0lkcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnNlbGVjdGVkUm93SWRzKTtcblxuICAgICAgaWYgKHNlbGVjdEFsbCkge1xuICAgICAgICBPYmplY3Qua2V5cyhub25Hcm91cGVkUm93c0J5SWQpLmZvckVhY2goZnVuY3Rpb24gKHJvd0lkKSB7XG4gICAgICAgICAgc2VsZWN0ZWRSb3dJZHNbcm93SWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhub25Hcm91cGVkUm93c0J5SWQpLmZvckVhY2goZnVuY3Rpb24gKHJvd0lkKSB7XG4gICAgICAgICAgZGVsZXRlIHNlbGVjdGVkUm93SWRzW3Jvd0lkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IHNlbGVjdGVkUm93SWRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlUm93U2VsZWN0ZWQpIHtcbiAgICAgIHZhciBpZCA9IGFjdGlvbi5pZCxcbiAgICAgICAgICBfc2V0U2VsZWN0ZWQgPSBhY3Rpb24udmFsdWU7XG4gICAgICB2YXIgX3Jvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgICAgX2luc3RhbmNlJHNlbGVjdFN1YlJvID0gaW5zdGFuY2Uuc2VsZWN0U3ViUm93cyxcbiAgICAgICAgICBzZWxlY3RTdWJSb3dzID0gX2luc3RhbmNlJHNlbGVjdFN1YlJvID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHNlbGVjdFN1YlJvLFxuICAgICAgICAgIGdldFN1YlJvd3MgPSBpbnN0YW5jZS5nZXRTdWJSb3dzO1xuICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBzdGF0ZS5zZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB2YXIgc2hvdWxkRXhpc3QgPSB0eXBlb2YgX3NldFNlbGVjdGVkICE9PSAndW5kZWZpbmVkJyA/IF9zZXRTZWxlY3RlZCA6ICFpc1NlbGVjdGVkO1xuXG4gICAgICBpZiAoaXNTZWxlY3RlZCA9PT0gc2hvdWxkRXhpc3QpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3U2VsZWN0ZWRSb3dJZHMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuc2VsZWN0ZWRSb3dJZHMpO1xuXG4gICAgICB2YXIgaGFuZGxlUm93QnlJZCA9IGZ1bmN0aW9uIGhhbmRsZVJvd0J5SWQoaWQpIHtcbiAgICAgICAgdmFyIHJvdyA9IF9yb3dzQnlJZFtpZF07XG5cbiAgICAgICAgaWYgKCFyb3cuaXNHcm91cGVkKSB7XG4gICAgICAgICAgaWYgKHNob3VsZEV4aXN0KSB7XG4gICAgICAgICAgICBuZXdTZWxlY3RlZFJvd0lkc1tpZF0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgbmV3U2VsZWN0ZWRSb3dJZHNbaWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWxlY3RTdWJSb3dzICYmIGdldFN1YlJvd3Mocm93KSkge1xuICAgICAgICAgIHJldHVybiBnZXRTdWJSb3dzKHJvdykuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUm93QnlJZChyb3cuaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVSb3dCeUlkKGlkKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc2VsZWN0ZWRSb3dJZHM6IG5ld1NlbGVjdGVkUm93SWRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMudG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCkge1xuICAgICAgdmFyIF9zZXRTZWxlY3RlZDIgPSBhY3Rpb24udmFsdWU7XG5cbiAgICAgIHZhciBwYWdlID0gaW5zdGFuY2UucGFnZSxcbiAgICAgICAgICBfcm93c0J5SWQyID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgICAgX2luc3RhbmNlJHNlbGVjdFN1YlJvMiA9IGluc3RhbmNlLnNlbGVjdFN1YlJvd3MsXG4gICAgICAgICAgX3NlbGVjdFN1YlJvd3MgPSBfaW5zdGFuY2Ukc2VsZWN0U3ViUm8yID09PSB2b2lkIDAgPyB0cnVlIDogX2luc3RhbmNlJHNlbGVjdFN1YlJvMixcbiAgICAgICAgICBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBpbnN0YW5jZS5pc0FsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICAgICAgX2dldFN1YlJvd3MgPSBpbnN0YW5jZS5nZXRTdWJSb3dzO1xuXG4gICAgICB2YXIgX3NlbGVjdEFsbCA9IHR5cGVvZiBfc2V0U2VsZWN0ZWQyICE9PSAndW5kZWZpbmVkJyA/IF9zZXRTZWxlY3RlZDIgOiAhaXNBbGxQYWdlUm93c1NlbGVjdGVkO1xuXG4gICAgICB2YXIgX25ld1NlbGVjdGVkUm93SWRzID0gX2V4dGVuZHMoe30sIHN0YXRlLnNlbGVjdGVkUm93SWRzKTtcblxuICAgICAgdmFyIF9oYW5kbGVSb3dCeUlkID0gZnVuY3Rpb24gX2hhbmRsZVJvd0J5SWQoaWQpIHtcbiAgICAgICAgdmFyIHJvdyA9IF9yb3dzQnlJZDJbaWRdO1xuXG4gICAgICAgIGlmICghcm93LmlzR3JvdXBlZCkge1xuICAgICAgICAgIGlmIChfc2VsZWN0QWxsKSB7XG4gICAgICAgICAgICBfbmV3U2VsZWN0ZWRSb3dJZHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIF9uZXdTZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9zZWxlY3RTdWJSb3dzICYmIF9nZXRTdWJSb3dzKHJvdykpIHtcbiAgICAgICAgICByZXR1cm4gX2dldFN1YlJvd3Mocm93KS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJldHVybiBfaGFuZGxlUm93QnlJZChyb3cuaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwYWdlLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICByZXR1cm4gX2hhbmRsZVJvd0J5SWQocm93LmlkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBzZWxlY3RlZFJvd0lkczogX25ld1NlbGVjdGVkUm93SWRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VJbnN0YW5jZSQ4KGluc3RhbmNlKSB7XG4gICAgdmFyIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICByb3dzID0gaW5zdGFuY2Uucm93cyxcbiAgICAgICAgZ2V0SG9va3MgPSBpbnN0YW5jZS5nZXRIb29rcyxcbiAgICAgICAgcGx1Z2lucyA9IGluc3RhbmNlLnBsdWdpbnMsXG4gICAgICAgIHJvd3NCeUlkID0gaW5zdGFuY2Uucm93c0J5SWQsXG4gICAgICAgIF9pbnN0YW5jZSRub25Hcm91cGVkUjIgPSBpbnN0YW5jZS5ub25Hcm91cGVkUm93c0J5SWQsXG4gICAgICAgIG5vbkdyb3VwZWRSb3dzQnlJZCA9IF9pbnN0YW5jZSRub25Hcm91cGVkUjIgPT09IHZvaWQgMCA/IHJvd3NCeUlkIDogX2luc3RhbmNlJG5vbkdyb3VwZWRSMixcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFNlID0gaW5zdGFuY2UuYXV0b1Jlc2V0U2VsZWN0ZWRSb3dzLFxuICAgICAgICBhdXRvUmVzZXRTZWxlY3RlZFJvd3MgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0U2UgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0U2UsXG4gICAgICAgIHNlbGVjdGVkUm93SWRzID0gaW5zdGFuY2Uuc3RhdGUuc2VsZWN0ZWRSb3dJZHMsXG4gICAgICAgIF9pbnN0YW5jZSRzZWxlY3RTdWJSbzMgPSBpbnN0YW5jZS5zZWxlY3RTdWJSb3dzLFxuICAgICAgICBzZWxlY3RTdWJSb3dzID0gX2luc3RhbmNlJHNlbGVjdFN1YlJvMyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9pbnN0YW5jZSRzZWxlY3RTdWJSbzMsXG4gICAgICAgIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2gsXG4gICAgICAgIHBhZ2UgPSBpbnN0YW5jZS5wYWdlLFxuICAgICAgICBnZXRTdWJSb3dzID0gaW5zdGFuY2UuZ2V0U3ViUm93cztcbiAgICBlbnN1cmVQbHVnaW5PcmRlcihwbHVnaW5zLCBbJ3VzZUZpbHRlcnMnLCAndXNlR3JvdXBCeScsICd1c2VTb3J0QnknLCAndXNlRXhwYW5kZWQnLCAndXNlUGFnaW5hdGlvbiddLCAndXNlUm93U2VsZWN0Jyk7XG4gICAgdmFyIHNlbGVjdGVkRmxhdFJvd3MgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxlY3RlZEZsYXRSb3dzID0gW107XG4gICAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHNlbGVjdFN1YlJvd3MgPyBnZXRSb3dJc1NlbGVjdGVkKHJvdywgc2VsZWN0ZWRSb3dJZHMsIGdldFN1YlJvd3MpIDogISFzZWxlY3RlZFJvd0lkc1tyb3cuaWRdO1xuICAgICAgICByb3cuaXNTZWxlY3RlZCA9ICEhaXNTZWxlY3RlZDtcbiAgICAgICAgcm93LmlzU29tZVNlbGVjdGVkID0gaXNTZWxlY3RlZCA9PT0gbnVsbDtcblxuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkRmxhdFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEZsYXRSb3dzO1xuICAgIH0sIFtyb3dzLCBzZWxlY3RTdWJSb3dzLCBzZWxlY3RlZFJvd0lkcywgZ2V0U3ViUm93c10pO1xuICAgIHZhciBpc0FsbFJvd3NTZWxlY3RlZCA9IEJvb2xlYW4oT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5sZW5ndGggJiYgT2JqZWN0LmtleXMoc2VsZWN0ZWRSb3dJZHMpLmxlbmd0aCk7XG4gICAgdmFyIGlzQWxsUGFnZVJvd3NTZWxlY3RlZCA9IGlzQWxsUm93c1NlbGVjdGVkO1xuXG4gICAgaWYgKGlzQWxsUm93c1NlbGVjdGVkKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobm9uR3JvdXBlZFJvd3NCeUlkKS5zb21lKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gIXNlbGVjdGVkUm93SWRzW2lkXTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGlzQWxsUm93c1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0FsbFJvd3NTZWxlY3RlZCkge1xuICAgICAgaWYgKHBhZ2UgJiYgcGFnZS5sZW5ndGggJiYgcGFnZS5zb21lKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgICB2YXIgaWQgPSBfcmVmNS5pZDtcbiAgICAgICAgcmV0dXJuICFzZWxlY3RlZFJvd0lkc1tpZF07XG4gICAgICB9KSkge1xuICAgICAgICBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2V0QXV0b1Jlc2V0U2VsZWN0ZWRSb3dzID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFNlbGVjdGVkUm93cyk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0U2VsZWN0ZWRSb3dzKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRTZWxlY3RlZFJvd3NcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2Rpc3BhdGNoLCBkYXRhXSk7XG4gICAgdmFyIHRvZ2dsZUFsbFJvd3NTZWxlY3RlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogYWN0aW9ucy50b2dnbGVBbGxSb3dzU2VsZWN0ZWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIHRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMudG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgdG9nZ2xlUm93U2VsZWN0ZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaWQsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnRvZ2dsZVJvd1NlbGVjdGVkLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICB2YXIgZ2V0VG9nZ2xlQWxsUm93c1NlbGVjdGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogZ2V0SW5zdGFuY2UoKVxuICAgIH0pO1xuICAgIHZhciBnZXRUb2dnbGVBbGxQYWdlUm93c1NlbGVjdGVkUHJvcHMgPSBtYWtlUHJvcEdldHRlcihnZXRIb29rcygpLmdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wcywge1xuICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKClcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCB7XG4gICAgICBzZWxlY3RlZEZsYXRSb3dzOiBzZWxlY3RlZEZsYXRSb3dzLFxuICAgICAgaXNBbGxSb3dzU2VsZWN0ZWQ6IGlzQWxsUm93c1NlbGVjdGVkLFxuICAgICAgaXNBbGxQYWdlUm93c1NlbGVjdGVkOiBpc0FsbFBhZ2VSb3dzU2VsZWN0ZWQsXG4gICAgICB0b2dnbGVSb3dTZWxlY3RlZDogdG9nZ2xlUm93U2VsZWN0ZWQsXG4gICAgICB0b2dnbGVBbGxSb3dzU2VsZWN0ZWQ6IHRvZ2dsZUFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIGdldFRvZ2dsZUFsbFJvd3NTZWxlY3RlZFByb3BzOiBnZXRUb2dnbGVBbGxSb3dzU2VsZWN0ZWRQcm9wcyxcbiAgICAgIGdldFRvZ2dsZUFsbFBhZ2VSb3dzU2VsZWN0ZWRQcm9wczogZ2V0VG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFByb3BzLFxuICAgICAgdG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZDogdG9nZ2xlQWxsUGFnZVJvd3NTZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZVJvdyQzKHJvdywgX3JlZjYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNi5pbnN0YW5jZTtcblxuICAgIHJvdy50b2dnbGVSb3dTZWxlY3RlZCA9IGZ1bmN0aW9uIChzZXQpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS50b2dnbGVSb3dTZWxlY3RlZChyb3cuaWQsIHNldCk7XG4gICAgfTtcblxuICAgIHJvdy5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzID0gbWFrZVByb3BHZXR0ZXIoaW5zdGFuY2UuZ2V0SG9va3MoKS5nZXRUb2dnbGVSb3dTZWxlY3RlZFByb3BzLCB7XG4gICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICByb3c6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Um93SXNTZWxlY3RlZChyb3csIHNlbGVjdGVkUm93SWRzLCBnZXRTdWJSb3dzKSB7XG4gICAgaWYgKHNlbGVjdGVkUm93SWRzW3Jvdy5pZF0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBzdWJSb3dzID0gZ2V0U3ViUm93cyhyb3cpO1xuXG4gICAgaWYgKHN1YlJvd3MgJiYgc3ViUm93cy5sZW5ndGgpIHtcbiAgICAgIHZhciBhbGxDaGlsZHJlblNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHZhciBzb21lU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHN1YlJvd3MuZm9yRWFjaChmdW5jdGlvbiAoc3ViUm93KSB7XG4gICAgICAgIC8vIEJhaWwgb3V0IGVhcmx5IGlmIHdlIGtub3cgYm90aCBvZiB0aGVzZVxuICAgICAgICBpZiAoc29tZVNlbGVjdGVkICYmICFhbGxDaGlsZHJlblNlbGVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdldFJvd0lzU2VsZWN0ZWQoc3ViUm93LCBzZWxlY3RlZFJvd0lkcywgZ2V0U3ViUm93cykpIHtcbiAgICAgICAgICBzb21lU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbENoaWxkcmVuU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWxsQ2hpbGRyZW5TZWxlY3RlZCA/IHRydWUgOiBzb21lU2VsZWN0ZWQgPyBudWxsIDogZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3NvciA9IGZ1bmN0aW9uIGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3Nvcihyb3cpIHtcbiAgICByZXR1cm4ge307XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRJbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgPSBmdW5jdGlvbiBkZWZhdWx0SW5pdGlhbENlbGxTdGF0ZUFjY2Vzc29yKGNlbGwpIHtcbiAgICByZXR1cm4ge307XG4gIH07IC8vIEFjdGlvbnNcblxuXG4gIGFjdGlvbnMuc2V0Um93U3RhdGUgPSAnc2V0Um93U3RhdGUnO1xuICBhY3Rpb25zLnNldENlbGxTdGF0ZSA9ICdzZXRDZWxsU3RhdGUnO1xuICBhY3Rpb25zLnJlc2V0Um93U3RhdGUgPSAncmVzZXRSb3dTdGF0ZSc7XG4gIHZhciB1c2VSb3dTdGF0ZSA9IGZ1bmN0aW9uIHVzZVJvd1N0YXRlKGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkOSk7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSQ5KTtcbiAgICBob29rcy5wcmVwYXJlUm93LnB1c2gocHJlcGFyZVJvdyQ0KTtcbiAgfTtcbiAgdXNlUm93U3RhdGUucGx1Z2luTmFtZSA9ICd1c2VSb3dTdGF0ZSc7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciQ5KHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9pbnN0YW5jZSRpbml0aWFsUm93UyA9IGluc3RhbmNlLmluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsUm93U3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsUm93UyA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yIDogX2luc3RhbmNlJGluaXRpYWxSb3dTLFxuICAgICAgICBfaW5zdGFuY2UkaW5pdGlhbENlbGwgPSBpbnN0YW5jZS5pbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsQ2VsbCA9PT0gdm9pZCAwID8gZGVmYXVsdEluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsQ2VsbCxcbiAgICAgICAgcm93c0J5SWQgPSBpbnN0YW5jZS5yb3dzQnlJZDtcblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5pbml0KSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICByb3dTdGF0ZToge31cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRSb3dTdGF0ZSkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICByb3dTdGF0ZTogaW5zdGFuY2UuaW5pdGlhbFN0YXRlLnJvd1N0YXRlIHx8IHt9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuc2V0Um93U3RhdGUpIHtcbiAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgIHZhciByb3dJZCA9IGFjdGlvbi5yb3dJZCxcbiAgICAgICAgICB2YWx1ZSA9IGFjdGlvbi52YWx1ZTtcbiAgICAgIHZhciBvbGRSb3dTdGF0ZSA9IHR5cGVvZiBzdGF0ZS5yb3dTdGF0ZVtyb3dJZF0gIT09ICd1bmRlZmluZWQnID8gc3RhdGUucm93U3RhdGVbcm93SWRdIDogaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93c0J5SWRbcm93SWRdKTtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgcm93U3RhdGU6IF9leHRlbmRzKHt9LCBzdGF0ZS5yb3dTdGF0ZSwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbcm93SWRdID0gZnVuY3Rpb25hbFVwZGF0ZSh2YWx1ZSwgb2xkUm93U3RhdGUpLCBfZXh0ZW5kczIpKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldENlbGxTdGF0ZSkge1xuICAgICAgdmFyIF9vbGRSb3dTdGF0ZSRjZWxsU3RhdCwgX3Jvd3NCeUlkJF9yb3dJZCwgX3Jvd3NCeUlkJF9yb3dJZCRjZWxsLCBfZXh0ZW5kczMsIF9leHRlbmRzNDtcblxuICAgICAgdmFyIF9yb3dJZCA9IGFjdGlvbi5yb3dJZCxcbiAgICAgICAgICBjb2x1bW5JZCA9IGFjdGlvbi5jb2x1bW5JZCxcbiAgICAgICAgICBfdmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cbiAgICAgIHZhciBfb2xkUm93U3RhdGUgPSB0eXBlb2Ygc3RhdGUucm93U3RhdGVbX3Jvd0lkXSAhPT0gJ3VuZGVmaW5lZCcgPyBzdGF0ZS5yb3dTdGF0ZVtfcm93SWRdIDogaW5pdGlhbFJvd1N0YXRlQWNjZXNzb3Iocm93c0J5SWRbX3Jvd0lkXSk7XG5cbiAgICAgIHZhciBvbGRDZWxsU3RhdGUgPSB0eXBlb2YgKF9vbGRSb3dTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogKF9vbGRSb3dTdGF0ZSRjZWxsU3RhdCA9IF9vbGRSb3dTdGF0ZS5jZWxsU3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfb2xkUm93U3RhdGUkY2VsbFN0YXRbY29sdW1uSWRdKSAhPT0gJ3VuZGVmaW5lZCcgPyBfb2xkUm93U3RhdGUuY2VsbFN0YXRlW2NvbHVtbklkXSA6IGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcigoX3Jvd3NCeUlkJF9yb3dJZCA9IHJvd3NCeUlkW19yb3dJZF0pID09IG51bGwgPyB2b2lkIDAgOiAoX3Jvd3NCeUlkJF9yb3dJZCRjZWxsID0gX3Jvd3NCeUlkJF9yb3dJZC5jZWxscykgPT0gbnVsbCA/IHZvaWQgMCA6IF9yb3dzQnlJZCRfcm93SWQkY2VsbC5maW5kKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgIHJldHVybiBjZWxsLmNvbHVtbi5pZCA9PT0gY29sdW1uSWQ7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHJvd1N0YXRlOiBfZXh0ZW5kcyh7fSwgc3RhdGUucm93U3RhdGUsIChfZXh0ZW5kczQgPSB7fSwgX2V4dGVuZHM0W19yb3dJZF0gPSBfZXh0ZW5kcyh7fSwgX29sZFJvd1N0YXRlLCB7XG4gICAgICAgICAgY2VsbFN0YXRlOiBfZXh0ZW5kcyh7fSwgX29sZFJvd1N0YXRlLmNlbGxTdGF0ZSB8fCB7fSwgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbY29sdW1uSWRdID0gZnVuY3Rpb25hbFVwZGF0ZShfdmFsdWUsIG9sZENlbGxTdGF0ZSksIF9leHRlbmRzMykpXG4gICAgICAgIH0pLCBfZXh0ZW5kczQpKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkOShpbnN0YW5jZSkge1xuICAgIHZhciBfaW5zdGFuY2UkYXV0b1Jlc2V0Um8gPSBpbnN0YW5jZS5hdXRvUmVzZXRSb3dTdGF0ZSxcbiAgICAgICAgYXV0b1Jlc2V0Um93U3RhdGUgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0Um8gPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0Um8sXG4gICAgICAgIGRhdGEgPSBpbnN0YW5jZS5kYXRhLFxuICAgICAgICBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuICAgIHZhciBzZXRSb3dTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChyb3dJZCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0Um93U3RhdGUsXG4gICAgICAgIHJvd0lkOiByb3dJZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgc2V0Q2VsbFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHJvd0lkLCBjb2x1bW5JZCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMuc2V0Q2VsbFN0YXRlLFxuICAgICAgICByb3dJZDogcm93SWQsXG4gICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9LCBbZGlzcGF0Y2hdKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0Um93U3RhdGUgPSB1c2VHZXRMYXRlc3QoYXV0b1Jlc2V0Um93U3RhdGUpO1xuICAgIHVzZU1vdW50ZWRMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGdldEF1dG9SZXNldFJvd1N0YXRlKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRSb3dTdGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbZGF0YV0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHNldFJvd1N0YXRlOiBzZXRSb3dTdGF0ZSxcbiAgICAgIHNldENlbGxTdGF0ZTogc2V0Q2VsbFN0YXRlXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmVwYXJlUm93JDQocm93LCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICB2YXIgX2luc3RhbmNlJGluaXRpYWxSb3dTMiA9IGluc3RhbmNlLmluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yLFxuICAgICAgICBpbml0aWFsUm93U3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsUm93UzIgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsUm93U3RhdGVBY2Nlc3NvciA6IF9pbnN0YW5jZSRpbml0aWFsUm93UzIsXG4gICAgICAgIF9pbnN0YW5jZSRpbml0aWFsQ2VsbDIgPSBpbnN0YW5jZS5pbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IsXG4gICAgICAgIGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvciA9IF9pbnN0YW5jZSRpbml0aWFsQ2VsbDIgPT09IHZvaWQgMCA/IGRlZmF1bHRJbml0aWFsQ2VsbFN0YXRlQWNjZXNzb3IgOiBfaW5zdGFuY2UkaW5pdGlhbENlbGwyLFxuICAgICAgICByb3dTdGF0ZSA9IGluc3RhbmNlLnN0YXRlLnJvd1N0YXRlO1xuXG4gICAgaWYgKHJvdykge1xuICAgICAgcm93LnN0YXRlID0gdHlwZW9mIHJvd1N0YXRlW3Jvdy5pZF0gIT09ICd1bmRlZmluZWQnID8gcm93U3RhdGVbcm93LmlkXSA6IGluaXRpYWxSb3dTdGF0ZUFjY2Vzc29yKHJvdyk7XG5cbiAgICAgIHJvdy5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVyKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5zZXRSb3dTdGF0ZShyb3cuaWQsIHVwZGF0ZXIpO1xuICAgICAgfTtcblxuICAgICAgcm93LmNlbGxzLmZvckVhY2goZnVuY3Rpb24gKGNlbGwpIHtcbiAgICAgICAgaWYgKCFyb3cuc3RhdGUuY2VsbFN0YXRlKSB7XG4gICAgICAgICAgcm93LnN0YXRlLmNlbGxTdGF0ZSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC5zdGF0ZSA9IHR5cGVvZiByb3cuc3RhdGUuY2VsbFN0YXRlW2NlbGwuY29sdW1uLmlkXSAhPT0gJ3VuZGVmaW5lZCcgPyByb3cuc3RhdGUuY2VsbFN0YXRlW2NlbGwuY29sdW1uLmlkXSA6IGluaXRpYWxDZWxsU3RhdGVBY2Nlc3NvcihjZWxsKTtcblxuICAgICAgICBjZWxsLnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2Uuc2V0Q2VsbFN0YXRlKHJvdy5pZCwgY2VsbC5jb2x1bW4uaWQsIHVwZGF0ZXIpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWN0aW9ucy5yZXNldENvbHVtbk9yZGVyID0gJ3Jlc2V0Q29sdW1uT3JkZXInO1xuICBhY3Rpb25zLnNldENvbHVtbk9yZGVyID0gJ3NldENvbHVtbk9yZGVyJztcbiAgdmFyIHVzZUNvbHVtbk9yZGVyID0gZnVuY3Rpb24gdXNlQ29sdW1uT3JkZXIoaG9va3MpIHtcbiAgICBob29rcy5zdGF0ZVJlZHVjZXJzLnB1c2gocmVkdWNlciRhKTtcbiAgICBob29rcy52aXNpYmxlQ29sdW1uc0RlcHMucHVzaChmdW5jdGlvbiAoZGVwcywgX3JlZikge1xuICAgICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoZGVwcywgW2luc3RhbmNlLnN0YXRlLmNvbHVtbk9yZGVyXSk7XG4gICAgfSk7XG4gICAgaG9va3MudmlzaWJsZUNvbHVtbnMucHVzaCh2aXNpYmxlQ29sdW1ucyQyKTtcbiAgICBob29rcy51c2VJbnN0YW5jZS5wdXNoKHVzZUluc3RhbmNlJGEpO1xuICB9O1xuICB1c2VDb2x1bW5PcmRlci5wbHVnaW5OYW1lID0gJ3VzZUNvbHVtbk9yZGVyJztcblxuICBmdW5jdGlvbiByZWR1Y2VyJGEoc3RhdGUsIGFjdGlvbiwgcHJldmlvdXNTdGF0ZSwgaW5zdGFuY2UpIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgY29sdW1uT3JkZXI6IFtdXG4gICAgICB9LCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnJlc2V0Q29sdW1uT3JkZXIpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uT3JkZXI6IGluc3RhbmNlLmluaXRpYWxTdGF0ZS5jb2x1bW5PcmRlciB8fCBbXVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLnNldENvbHVtbk9yZGVyKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGNvbHVtbk9yZGVyOiBmdW5jdGlvbmFsVXBkYXRlKGFjdGlvbi5jb2x1bW5PcmRlciwgc3RhdGUuY29sdW1uT3JkZXIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2aXNpYmxlQ29sdW1ucyQyKGNvbHVtbnMsIF9yZWYyKSB7XG4gICAgdmFyIGNvbHVtbk9yZGVyID0gX3JlZjIuaW5zdGFuY2Uuc3RhdGUuY29sdW1uT3JkZXI7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBvcmRlciwgcmV0dXJuIHRoZSBub3JtYWwgY29sdW1uc1xuICAgIGlmICghY29sdW1uT3JkZXIgfHwgIWNvbHVtbk9yZGVyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgdmFyIGNvbHVtbk9yZGVyQ29weSA9IFtdLmNvbmNhdChjb2x1bW5PcmRlcik7IC8vIElmIHRoZXJlIGlzIGFuIG9yZGVyLCBtYWtlIGEgY29weSBvZiB0aGUgY29sdW1uc1xuXG4gICAgdmFyIGNvbHVtbnNDb3B5ID0gW10uY29uY2F0KGNvbHVtbnMpOyAvLyBBbmQgbWFrZSBhIG5ldyBvcmRlcmVkIGFycmF5IG9mIHRoZSBjb2x1bW5zXG5cbiAgICB2YXIgY29sdW1uc0luT3JkZXIgPSBbXTsgLy8gTG9vcCBvdmVyIHRoZSBjb2x1bW5zIGFuZCBwbGFjZSB0aGVtIGluIG9yZGVyIGludG8gdGhlIG5ldyBhcnJheVxuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICB2YXIgdGFyZ2V0Q29sdW1uSWQgPSBjb2x1bW5PcmRlckNvcHkuc2hpZnQoKTtcbiAgICAgIHZhciBmb3VuZEluZGV4ID0gY29sdW1uc0NvcHkuZmluZEluZGV4KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLmlkID09PSB0YXJnZXRDb2x1bW5JZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZm91bmRJbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbHVtbnNJbk9yZGVyLnB1c2goY29sdW1uc0NvcHkuc3BsaWNlKGZvdW5kSW5kZXgsIDEpWzBdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2hpbGUgKGNvbHVtbnNDb3B5Lmxlbmd0aCAmJiBjb2x1bW5PcmRlckNvcHkubGVuZ3RoKSB7XG4gICAgICBfbG9vcCgpO1xuICAgIH0gLy8gSWYgdGhlcmUgYXJlIGFueSBjb2x1bW5zIGxlZnQsIGFkZCB0aGVtIHRvIHRoZSBlbmRcblxuXG4gICAgcmV0dXJuIFtdLmNvbmNhdChjb2x1bW5zSW5PcmRlciwgY29sdW1uc0NvcHkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkYShpbnN0YW5jZSkge1xuICAgIHZhciBkaXNwYXRjaCA9IGluc3RhbmNlLmRpc3BhdGNoO1xuICAgIGluc3RhbmNlLnNldENvbHVtbk9yZGVyID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbHVtbk9yZGVyKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLnNldENvbHVtbk9yZGVyLFxuICAgICAgICBjb2x1bW5PcmRlcjogY29sdW1uT3JkZXJcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICB9XG5cbiAgZGVmYXVsdENvbHVtbi5jYW5SZXNpemUgPSB0cnVlOyAvLyBBY3Rpb25zXG5cbiAgYWN0aW9ucy5jb2x1bW5TdGFydFJlc2l6aW5nID0gJ2NvbHVtblN0YXJ0UmVzaXppbmcnO1xuICBhY3Rpb25zLmNvbHVtblJlc2l6aW5nID0gJ2NvbHVtblJlc2l6aW5nJztcbiAgYWN0aW9ucy5jb2x1bW5Eb25lUmVzaXppbmcgPSAnY29sdW1uRG9uZVJlc2l6aW5nJztcbiAgYWN0aW9ucy5yZXNldFJlc2l6ZSA9ICdyZXNldFJlc2l6ZSc7XG4gIHZhciB1c2VSZXNpemVDb2x1bW5zID0gZnVuY3Rpb24gdXNlUmVzaXplQ29sdW1ucyhob29rcykge1xuICAgIGhvb2tzLmdldFJlc2l6ZXJQcm9wcyA9IFtkZWZhdWx0R2V0UmVzaXplclByb3BzXTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9XG4gICAgfSk7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYik7XG4gICAgaG9va3MudXNlSW5zdGFuY2UucHVzaCh1c2VJbnN0YW5jZSRiKTtcbiAgICBob29rcy51c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMucHVzaCh1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMkMSk7XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRHZXRSZXNpemVyUHJvcHMgPSBmdW5jdGlvbiBkZWZhdWx0R2V0UmVzaXplclByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgdmFyIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXI7XG4gICAgdmFyIGRpc3BhdGNoID0gaW5zdGFuY2UuZGlzcGF0Y2g7XG5cbiAgICB2YXIgb25SZXNpemVTdGFydCA9IGZ1bmN0aW9uIG9uUmVzaXplU3RhcnQoZSwgaGVhZGVyKSB7XG4gICAgICB2YXIgaXNUb3VjaEV2ZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAvLyBsZXRzIG5vdCByZXNwb25kIHRvIG11bHRpcGxlIHRvdWNoZXMgKGUuZy4gMiBvciAzIGZpbmdlcnMpXG4gICAgICAgIGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpc1RvdWNoRXZlbnQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGVhZGVyc1RvUmVzaXplID0gZ2V0TGVhZkhlYWRlcnMoaGVhZGVyKTtcbiAgICAgIHZhciBoZWFkZXJJZFdpZHRocyA9IGhlYWRlcnNUb1Jlc2l6ZS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIFtkLmlkLCBkLnRvdGFsV2lkdGhdO1xuICAgICAgfSk7XG4gICAgICB2YXIgY2xpZW50WCA9IGlzVG91Y2hFdmVudCA/IE1hdGgucm91bmQoZS50b3VjaGVzWzBdLmNsaWVudFgpIDogZS5jbGllbnRYO1xuXG4gICAgICB2YXIgZGlzcGF0Y2hNb3ZlID0gZnVuY3Rpb24gZGlzcGF0Y2hNb3ZlKGNsaWVudFhQb3MpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMuY29sdW1uUmVzaXppbmcsXG4gICAgICAgICAgY2xpZW50WDogY2xpZW50WFBvc1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBkaXNwYXRjaEVuZCA9IGZ1bmN0aW9uIGRpc3BhdGNoRW5kKCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMuY29sdW1uRG9uZVJlc2l6aW5nXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgdmFyIGhhbmRsZXJzQW5kRXZlbnRzID0ge1xuICAgICAgICBtb3VzZToge1xuICAgICAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICAgICAgbW92ZUhhbmRsZXI6IGZ1bmN0aW9uIG1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaE1vdmUoZS5jbGllbnRYKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwRXZlbnQ6ICdtb3VzZXVwJyxcbiAgICAgICAgICB1cEhhbmRsZXI6IGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVyc0FuZEV2ZW50cy5tb3VzZS5tb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlcnNBbmRFdmVudHMubW91c2UudXBIYW5kbGVyKTtcbiAgICAgICAgICAgIGRpc3BhdGNoRW5kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0b3VjaDoge1xuICAgICAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICAgICAgbW92ZUhhbmRsZXI6IGZ1bmN0aW9uIG1vdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwYXRjaE1vdmUoZS50b3VjaGVzWzBdLmNsaWVudFgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBFdmVudDogJ3RvdWNoZW5kJyxcbiAgICAgICAgICB1cEhhbmRsZXI6IGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGhhbmRsZXJzQW5kRXZlbnRzLnRvdWNoLm1vdmVFdmVudCwgaGFuZGxlcnNBbmRFdmVudHMudG91Y2gubW92ZUhhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC51cEV2ZW50LCBoYW5kbGVyc0FuZEV2ZW50cy50b3VjaC5tb3ZlSGFuZGxlcik7XG4gICAgICAgICAgICBkaXNwYXRjaEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBldmVudHMgPSBpc1RvdWNoRXZlbnQgPyBoYW5kbGVyc0FuZEV2ZW50cy50b3VjaCA6IGhhbmRsZXJzQW5kRXZlbnRzLm1vdXNlO1xuICAgICAgdmFyIHBhc3NpdmVJZlN1cHBvcnRlZCA9IHBhc3NpdmVFdmVudFN1cHBvcnRlZCgpID8ge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSA6IGZhbHNlO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW92ZUV2ZW50LCBldmVudHMubW92ZUhhbmRsZXIsIHBhc3NpdmVJZlN1cHBvcnRlZCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy51cEV2ZW50LCBldmVudHMudXBIYW5kbGVyLCBwYXNzaXZlSWZTdXBwb3J0ZWQpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBhY3Rpb25zLmNvbHVtblN0YXJ0UmVzaXppbmcsXG4gICAgICAgIGNvbHVtbklkOiBoZWFkZXIuaWQsXG4gICAgICAgIGNvbHVtbldpZHRoOiBoZWFkZXIudG90YWxXaWR0aCxcbiAgICAgICAgaGVhZGVySWRXaWR0aHM6IGhlYWRlcklkV2lkdGhzLFxuICAgICAgICBjbGllbnRYOiBjbGllbnRYXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgcmV0dXJuIGUucGVyc2lzdCgpIHx8IG9uUmVzaXplU3RhcnQoZSwgaGVhZGVyKTtcbiAgICAgIH0sXG4gICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHJldHVybiBlLnBlcnNpc3QoKSB8fCBvblJlc2l6ZVN0YXJ0KGUsIGhlYWRlcik7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiAnY29sLXJlc2l6ZSdcbiAgICAgIH0sXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgcm9sZTogJ3NlcGFyYXRvcidcbiAgICB9XTtcbiAgfTtcblxuICB1c2VSZXNpemVDb2x1bW5zLnBsdWdpbk5hbWUgPSAndXNlUmVzaXplQ29sdW1ucyc7XG5cbiAgZnVuY3Rpb24gcmVkdWNlciRiKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuaW5pdCkge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMucmVzZXRSZXNpemUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgY29sdW1uUmVzaXppbmc6IHtcbiAgICAgICAgICBjb2x1bW5XaWR0aHM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5TdGFydFJlc2l6aW5nKSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGFjdGlvbi5jbGllbnRYLFxuICAgICAgICAgIGNvbHVtbklkID0gYWN0aW9uLmNvbHVtbklkLFxuICAgICAgICAgIGNvbHVtbldpZHRoID0gYWN0aW9uLmNvbHVtbldpZHRoLFxuICAgICAgICAgIGhlYWRlcklkV2lkdGhzID0gYWN0aW9uLmhlYWRlcklkV2lkdGhzO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgc3RhcnRYOiBjbGllbnRYLFxuICAgICAgICAgIGhlYWRlcklkV2lkdGhzOiBoZWFkZXJJZFdpZHRocyxcbiAgICAgICAgICBjb2x1bW5XaWR0aDogY29sdW1uV2lkdGgsXG4gICAgICAgICAgaXNSZXNpemluZ0NvbHVtbjogY29sdW1uSWRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5jb2x1bW5SZXNpemluZykge1xuICAgICAgdmFyIF9jbGllbnRYID0gYWN0aW9uLmNsaWVudFg7XG5cbiAgICAgIHZhciBfc3RhdGUkY29sdW1uUmVzaXppbmcgPSBzdGF0ZS5jb2x1bW5SZXNpemluZyxcbiAgICAgICAgICBzdGFydFggPSBfc3RhdGUkY29sdW1uUmVzaXppbmcuc3RhcnRYLFxuICAgICAgICAgIF9jb2x1bW5XaWR0aCA9IF9zdGF0ZSRjb2x1bW5SZXNpemluZy5jb2x1bW5XaWR0aCxcbiAgICAgICAgICBfc3RhdGUkY29sdW1uUmVzaXppbmcyID0gX3N0YXRlJGNvbHVtblJlc2l6aW5nLmhlYWRlcklkV2lkdGhzLFxuICAgICAgICAgIF9oZWFkZXJJZFdpZHRocyA9IF9zdGF0ZSRjb2x1bW5SZXNpemluZzIgPT09IHZvaWQgMCA/IFtdIDogX3N0YXRlJGNvbHVtblJlc2l6aW5nMjtcblxuICAgICAgdmFyIGRlbHRhWCA9IF9jbGllbnRYIC0gc3RhcnRYO1xuICAgICAgdmFyIHBlcmNlbnRhZ2VEZWx0YVggPSBkZWx0YVggLyBfY29sdW1uV2lkdGg7XG4gICAgICB2YXIgbmV3Q29sdW1uV2lkdGhzID0ge307XG5cbiAgICAgIF9oZWFkZXJJZFdpZHRocy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgaGVhZGVySWQgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGhlYWRlcldpZHRoID0gX3JlZjJbMV07XG4gICAgICAgIG5ld0NvbHVtbldpZHRoc1toZWFkZXJJZF0gPSBNYXRoLm1heChoZWFkZXJXaWR0aCArIGhlYWRlcldpZHRoICogcGVyY2VudGFnZURlbHRhWCwgMCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiBfZXh0ZW5kcyh7fSwgc3RhdGUuY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGhzLCB7fSwgbmV3Q29sdW1uV2lkdGhzKVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLmNvbHVtbkRvbmVSZXNpemluZykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb2x1bW5SZXNpemluZzogX2V4dGVuZHMoe30sIHN0YXRlLmNvbHVtblJlc2l6aW5nLCB7XG4gICAgICAgICAgc3RhcnRYOiBudWxsLFxuICAgICAgICAgIGlzUmVzaXppbmdDb2x1bW46IG51bGxcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciB1c2VJbnN0YW5jZUJlZm9yZURpbWVuc2lvbnMkMSA9IGZ1bmN0aW9uIHVzZUluc3RhbmNlQmVmb3JlRGltZW5zaW9ucyhpbnN0YW5jZSkge1xuICAgIHZhciBmbGF0SGVhZGVycyA9IGluc3RhbmNlLmZsYXRIZWFkZXJzLFxuICAgICAgICBkaXNhYmxlUmVzaXppbmcgPSBpbnN0YW5jZS5kaXNhYmxlUmVzaXppbmcsXG4gICAgICAgIGdldEhvb2tzID0gaW5zdGFuY2UuZ2V0SG9va3MsXG4gICAgICAgIGNvbHVtblJlc2l6aW5nID0gaW5zdGFuY2Uuc3RhdGUuY29sdW1uUmVzaXppbmc7XG4gICAgdmFyIGdldEluc3RhbmNlID0gdXNlR2V0TGF0ZXN0KGluc3RhbmNlKTtcbiAgICBmbGF0SGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgIHZhciBjYW5SZXNpemUgPSBnZXRGaXJzdERlZmluZWQoaGVhZGVyLmRpc2FibGVSZXNpemluZyA9PT0gdHJ1ZSA/IGZhbHNlIDogdW5kZWZpbmVkLCBkaXNhYmxlUmVzaXppbmcgPT09IHRydWUgPyBmYWxzZSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICBoZWFkZXIuY2FuUmVzaXplID0gY2FuUmVzaXplO1xuICAgICAgaGVhZGVyLndpZHRoID0gY29sdW1uUmVzaXppbmcuY29sdW1uV2lkdGhzW2hlYWRlci5pZF0gfHwgaGVhZGVyLm9yaWdpbmFsV2lkdGggfHwgaGVhZGVyLndpZHRoO1xuICAgICAgaGVhZGVyLmlzUmVzaXppbmcgPSBjb2x1bW5SZXNpemluZy5pc1Jlc2l6aW5nQ29sdW1uID09PSBoZWFkZXIuaWQ7XG5cbiAgICAgIGlmIChjYW5SZXNpemUpIHtcbiAgICAgICAgaGVhZGVyLmdldFJlc2l6ZXJQcm9wcyA9IG1ha2VQcm9wR2V0dGVyKGdldEhvb2tzKCkuZ2V0UmVzaXplclByb3BzLCB7XG4gICAgICAgICAgaW5zdGFuY2U6IGdldEluc3RhbmNlKCksXG4gICAgICAgICAgaGVhZGVyOiBoZWFkZXJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXNlSW5zdGFuY2UkYihpbnN0YW5jZSkge1xuICAgIHZhciBwbHVnaW5zID0gaW5zdGFuY2UucGx1Z2lucyxcbiAgICAgICAgZGlzcGF0Y2ggPSBpbnN0YW5jZS5kaXNwYXRjaCxcbiAgICAgICAgX2luc3RhbmNlJGF1dG9SZXNldFJlID0gaW5zdGFuY2UuYXV0b1Jlc2V0UmVzaXplLFxuICAgICAgICBhdXRvUmVzZXRSZXNpemUgPSBfaW5zdGFuY2UkYXV0b1Jlc2V0UmUgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5zdGFuY2UkYXV0b1Jlc2V0UmUsXG4gICAgICAgIGNvbHVtbnMgPSBpbnN0YW5jZS5jb2x1bW5zO1xuICAgIGVuc3VyZVBsdWdpbk9yZGVyKHBsdWdpbnMsIFsndXNlQWJzb2x1dGVMYXlvdXQnXSwgJ3VzZVJlc2l6ZUNvbHVtbnMnKTtcbiAgICB2YXIgZ2V0QXV0b1Jlc2V0UmVzaXplID0gdXNlR2V0TGF0ZXN0KGF1dG9SZXNldFJlc2l6ZSk7XG4gICAgdXNlTW91bnRlZExheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZ2V0QXV0b1Jlc2V0UmVzaXplKCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRSZXNpemVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2NvbHVtbnNdKTtcbiAgICB2YXIgcmVzZXRSZXNpemluZyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGFjdGlvbnMucmVzZXRSZXNpemVcbiAgICAgIH0pO1xuICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIHtcbiAgICAgIHJlc2V0UmVzaXppbmc6IHJlc2V0UmVzaXppbmdcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlYWZIZWFkZXJzKGhlYWRlcikge1xuICAgIHZhciBsZWFmSGVhZGVycyA9IFtdO1xuXG4gICAgdmFyIHJlY3Vyc2VIZWFkZXIgPSBmdW5jdGlvbiByZWN1cnNlSGVhZGVyKGhlYWRlcikge1xuICAgICAgaWYgKGhlYWRlci5jb2x1bW5zICYmIGhlYWRlci5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICBoZWFkZXIuY29sdW1ucy5tYXAocmVjdXJzZUhlYWRlcik7XG4gICAgICB9XG5cbiAgICAgIGxlYWZIZWFkZXJzLnB1c2goaGVhZGVyKTtcbiAgICB9O1xuXG4gICAgcmVjdXJzZUhlYWRlcihoZWFkZXIpO1xuICAgIHJldHVybiBsZWFmSGVhZGVycztcbiAgfVxuXG4gIHZhciBjZWxsU3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMFxuICB9O1xuICB2YXIgdXNlQWJzb2x1dGVMYXlvdXQgPSBmdW5jdGlvbiB1c2VBYnNvbHV0ZUxheW91dChob29rcykge1xuICAgIGhvb2tzLmdldFRhYmxlQm9keVByb3BzLnB1c2goZ2V0Um93U3R5bGVzKTtcbiAgICBob29rcy5nZXRSb3dQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0SGVhZGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyk7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmLmNvbHVtbjtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzLCB7XG4gICAgICAgICAgbGVmdDogY29sdW1uLnRvdGFsTGVmdCArIFwicHhcIixcbiAgICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICAgIGhvb2tzLmdldENlbGxQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjIpIHtcbiAgICAgIHZhciBjZWxsID0gX3JlZjIuY2VsbDtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzLCB7XG4gICAgICAgICAgbGVmdDogY2VsbC5jb2x1bW4udG90YWxMZWZ0ICsgXCJweFwiLFxuICAgICAgICAgIHdpZHRoOiBjZWxsLmNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRGb290ZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjMpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmMy5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcywge1xuICAgICAgICAgIGxlZnQ6IGNvbHVtbi50b3RhbExlZnQgKyBcInB4XCIsXG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgfTtcbiAgdXNlQWJzb2x1dGVMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VBYnNvbHV0ZUxheW91dCc7XG5cbiAgdmFyIGdldFJvd1N0eWxlcyA9IGZ1bmN0aW9uIGdldFJvd1N0eWxlcyhwcm9wcywgX3JlZjQpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNC5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IGluc3RhbmNlLnRvdGFsQ29sdW1uc1dpZHRoICsgXCJweFwiXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgdmFyIGNlbGxTdHlsZXMkMSA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9O1xuXG4gIHZhciBnZXRSb3dTdHlsZXMkMSA9IGZ1bmN0aW9uIGdldFJvd1N0eWxlcyhwcm9wcywgX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB3aWR0aDogaW5zdGFuY2UudG90YWxDb2x1bW5zV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgdXNlQmxvY2tMYXlvdXQgPSBmdW5jdGlvbiB1c2VCbG9ja0xheW91dChob29rcykge1xuICAgIGhvb2tzLmdldFJvd1Byb3BzLnB1c2goZ2V0Um93U3R5bGVzJDEpO1xuICAgIGhvb2tzLmdldEhlYWRlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMSk7XG4gICAgaG9va3MuZ2V0Rm9vdGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQxKTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKGZ1bmN0aW9uIChwcm9wcywgX3JlZjIpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcyQxLCB7XG4gICAgICAgICAgd2lkdGg6IGNvbHVtbi50b3RhbFdpZHRoICsgXCJweFwiXG4gICAgICAgIH0pXG4gICAgICB9XTtcbiAgICB9KTtcbiAgICBob29rcy5nZXRDZWxsUHJvcHMucHVzaChmdW5jdGlvbiAocHJvcHMsIF9yZWYzKSB7XG4gICAgICB2YXIgY2VsbCA9IF9yZWYzLmNlbGw7XG4gICAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgY2VsbFN0eWxlcyQxLCB7XG4gICAgICAgICAgd2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICAgIGhvb2tzLmdldEZvb3RlclByb3BzLnB1c2goZnVuY3Rpb24gKHByb3BzLCBfcmVmNCkge1xuICAgICAgdmFyIGNvbHVtbiA9IF9yZWY0LmNvbHVtbjtcbiAgICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjZWxsU3R5bGVzJDEsIHtcbiAgICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgICAgfSlcbiAgICAgIH1dO1xuICAgIH0pO1xuICB9O1xuICB1c2VCbG9ja0xheW91dC5wbHVnaW5OYW1lID0gJ3VzZUJsb2NrTGF5b3V0JztcblxuICBmdW5jdGlvbiB1c2VGbGV4TGF5b3V0KGhvb2tzKSB7XG4gICAgaG9va3MuZ2V0VGFibGVQcm9wcy5wdXNoKGdldFRhYmxlUHJvcHMpO1xuICAgIGhvb2tzLmdldFJvd1Byb3BzLnB1c2goZ2V0Um93U3R5bGVzJDIpO1xuICAgIGhvb2tzLmdldEhlYWRlckdyb3VwUHJvcHMucHVzaChnZXRSb3dTdHlsZXMkMik7XG4gICAgaG9va3MuZ2V0Rm9vdGVyR3JvdXBQcm9wcy5wdXNoKGdldFJvd1N0eWxlcyQyKTtcbiAgICBob29rcy5nZXRIZWFkZXJQcm9wcy5wdXNoKGdldEhlYWRlclByb3BzKTtcbiAgICBob29rcy5nZXRDZWxsUHJvcHMucHVzaChnZXRDZWxsUHJvcHMpO1xuICAgIGhvb2tzLmdldEZvb3RlclByb3BzLnB1c2goZ2V0Rm9vdGVyUHJvcHMpO1xuICB9XG4gIHVzZUZsZXhMYXlvdXQucGx1Z2luTmFtZSA9ICd1c2VGbGV4TGF5b3V0JztcblxuICB2YXIgZ2V0VGFibGVQcm9wcyA9IGZ1bmN0aW9uIGdldFRhYmxlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIG1pbldpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNNaW5XaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRSb3dTdHlsZXMkMiA9IGZ1bmN0aW9uIGdldFJvd1N0eWxlcyhwcm9wcywgX3JlZjIpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmMi5pbnN0YW5jZTtcbiAgICByZXR1cm4gW3Byb3BzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXg6ICcxIDAgYXV0bycsXG4gICAgICAgIG1pbldpZHRoOiBpbnN0YW5jZS50b3RhbENvbHVtbnNNaW5XaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRIZWFkZXJQcm9wcyA9IGZ1bmN0aW9uIGdldEhlYWRlclByb3BzKHByb3BzLCBfcmVmMykge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMy5jb2x1bW47XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGZsZXg6IGNvbHVtbi50b3RhbEZsZXhXaWR0aCA/IGNvbHVtbi50b3RhbEZsZXhXaWR0aCArIFwiIDAgYXV0b1wiIDogdW5kZWZpbmVkLFxuICAgICAgICBtaW5XaWR0aDogY29sdW1uLnRvdGFsTWluV2lkdGggKyBcInB4XCIsXG4gICAgICAgIHdpZHRoOiBjb2x1bW4udG90YWxXaWR0aCArIFwicHhcIlxuICAgICAgfVxuICAgIH1dO1xuICB9O1xuXG4gIHZhciBnZXRDZWxsUHJvcHMgPSBmdW5jdGlvbiBnZXRDZWxsUHJvcHMocHJvcHMsIF9yZWY0KSB7XG4gICAgdmFyIGNlbGwgPSBfcmVmNC5jZWxsO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4OiBjZWxsLmNvbHVtbi50b3RhbEZsZXhXaWR0aCArIFwiIDAgYXV0b1wiLFxuICAgICAgICBtaW5XaWR0aDogY2VsbC5jb2x1bW4udG90YWxNaW5XaWR0aCArIFwicHhcIixcbiAgICAgICAgd2lkdGg6IGNlbGwuY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0Rm9vdGVyUHJvcHMgPSBmdW5jdGlvbiBnZXRGb290ZXJQcm9wcyhwcm9wcywgX3JlZjUpIHtcbiAgICB2YXIgY29sdW1uID0gX3JlZjUuY29sdW1uO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBmbGV4OiBjb2x1bW4udG90YWxGbGV4V2lkdGggPyBjb2x1bW4udG90YWxGbGV4V2lkdGggKyBcIiAwIGF1dG9cIiA6IHVuZGVmaW5lZCxcbiAgICAgICAgbWluV2lkdGg6IGNvbHVtbi50b3RhbE1pbldpZHRoICsgXCJweFwiLFxuICAgICAgICB3aWR0aDogY29sdW1uLnRvdGFsV2lkdGggKyBcInB4XCJcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICBmdW5jdGlvbiB1c2VHcmlkTGF5b3V0KGhvb2tzKSB7XG4gICAgaG9va3Muc3RhdGVSZWR1Y2Vycy5wdXNoKHJlZHVjZXIkYyk7XG4gICAgaG9va3MuZ2V0VGFibGVQcm9wcy5wdXNoKGdldFRhYmxlUHJvcHMkMSk7XG4gICAgaG9va3MuZ2V0SGVhZGVyUHJvcHMucHVzaChnZXRIZWFkZXJQcm9wcyQxKTtcbiAgfVxuICB1c2VHcmlkTGF5b3V0LnBsdWdpbk5hbWUgPSAndXNlR3JpZExheW91dCc7XG5cbiAgdmFyIGdldFRhYmxlUHJvcHMkMSA9IGZ1bmN0aW9uIGdldFRhYmxlUHJvcHMocHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlO1xuICAgIHJldHVybiBbcHJvcHMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBpbnN0YW5jZS5zdGF0ZS5ncmlkTGF5b3V0LmNvbHVtbldpZHRocy5tYXAoZnVuY3Rpb24gKHcpIHtcbiAgICAgICAgICByZXR1cm4gdztcbiAgICAgICAgfSkuam9pbihcIiBcIilcbiAgICAgIH1cbiAgICB9XTtcbiAgfTtcblxuICB2YXIgZ2V0SGVhZGVyUHJvcHMkMSA9IGZ1bmN0aW9uIGdldEhlYWRlclByb3BzKHByb3BzLCBfcmVmMikge1xuICAgIHZhciBjb2x1bW4gPSBfcmVmMi5jb2x1bW47XG4gICAgcmV0dXJuIFtwcm9wcywge1xuICAgICAgaWQ6IFwiaGVhZGVyLWNlbGwtXCIgKyBjb2x1bW4uaWQsXG4gICAgICBzdHlsZToge1xuICAgICAgICBwb3NpdGlvbjogXCJzdGlja3lcIiAvL2VuYWJsZXMgYSBzY3JvbGwgd3JhcHBlciB0byBiZSBwbGFjZWQgYXJvdW5kIHRoZSB0YWJsZSBhbmQgaGF2ZSBzdGlja3kgaGVhZGVyc1xuXG4gICAgICB9XG4gICAgfV07XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVkdWNlciRjKHN0YXRlLCBhY3Rpb24sIHByZXZpb3VzU3RhdGUsIGluc3RhbmNlKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBcImluaXRcIikge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZ3JpZExheW91dDoge1xuICAgICAgICAgIGNvbHVtbldpZHRoczogaW5zdGFuY2UuY29sdW1ucy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiYXV0b1wiO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiY29sdW1uU3RhcnRSZXNpemluZ1wiKSB7XG4gICAgICB2YXIgY29sdW1uSWQgPSBhY3Rpb24uY29sdW1uSWQ7XG4gICAgICB2YXIgY29sdW1uSW5kZXggPSBpbnN0YW5jZS52aXNpYmxlQ29sdW1ucy5maW5kSW5kZXgoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICByZXR1cm4gY29sLmlkID09PSBjb2x1bW5JZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIGVsV2lkdGggPSBnZXRFbGVtZW50V2lkdGgoY29sdW1uSWQpO1xuXG4gICAgICBpZiAoZWxXaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBncmlkTGF5b3V0OiBfZXh0ZW5kcyh7fSwgc3RhdGUuZ3JpZExheW91dCwge1xuICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbHVtbkluZGV4LFxuICAgICAgICAgICAgc3RhcnRpbmdXaWR0aDogZWxXaWR0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJjb2x1bW5SZXNpemluZ1wiKSB7XG4gICAgICB2YXIgX3N0YXRlJGdyaWRMYXlvdXQgPSBzdGF0ZS5ncmlkTGF5b3V0LFxuICAgICAgICAgIF9jb2x1bW5JbmRleCA9IF9zdGF0ZSRncmlkTGF5b3V0LmNvbHVtbkluZGV4LFxuICAgICAgICAgIHN0YXJ0aW5nV2lkdGggPSBfc3RhdGUkZ3JpZExheW91dC5zdGFydGluZ1dpZHRoLFxuICAgICAgICAgIGNvbHVtbldpZHRocyA9IF9zdGF0ZSRncmlkTGF5b3V0LmNvbHVtbldpZHRocztcbiAgICAgIHZhciBjaGFuZ2UgPSBzdGF0ZS5jb2x1bW5SZXNpemluZy5zdGFydFggLSBhY3Rpb24uY2xpZW50WDtcbiAgICAgIHZhciBuZXdXaWR0aCA9IHN0YXJ0aW5nV2lkdGggLSBjaGFuZ2U7XG4gICAgICB2YXIgY29sdW1uV2lkdGhzQ29weSA9IFtdLmNvbmNhdChjb2x1bW5XaWR0aHMpO1xuICAgICAgY29sdW1uV2lkdGhzQ29weVtfY29sdW1uSW5kZXhdID0gbmV3V2lkdGggKyBcInB4XCI7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGdyaWRMYXlvdXQ6IF9leHRlbmRzKHt9LCBzdGF0ZS5ncmlkTGF5b3V0LCB7XG4gICAgICAgICAgY29sdW1uV2lkdGhzOiBjb2x1bW5XaWR0aHNDb3B5XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbGVtZW50V2lkdGgoY29sdW1uSWQpIHtcbiAgICB2YXIgX2RvY3VtZW50JGdldEVsZW1lbnRCO1xuXG4gICAgdmFyIHdpZHRoID0gKF9kb2N1bWVudCRnZXRFbGVtZW50QiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWNlbGwtXCIgKyBjb2x1bW5JZCkpID09IG51bGwgPyB2b2lkIDAgOiBfZG9jdW1lbnQkZ2V0RWxlbWVudEIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydHMuX1VOU1RBQkxFX3VzZVBpdm90Q29sdW1ucyA9IF9VTlNUQUJMRV91c2VQaXZvdENvbHVtbnM7XG4gIGV4cG9ydHMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gIGV4cG9ydHMuZGVmYXVsdENvbHVtbiA9IGRlZmF1bHRDb2x1bW47XG4gIGV4cG9ydHMuZGVmYXVsdEdyb3VwQnlGbiA9IGRlZmF1bHRHcm91cEJ5Rm47XG4gIGV4cG9ydHMuZGVmYXVsdE9yZGVyQnlGbiA9IGRlZmF1bHRPcmRlckJ5Rm47XG4gIGV4cG9ydHMuZGVmYXVsdFJlbmRlcmVyID0gZGVmYXVsdFJlbmRlcmVyO1xuICBleHBvcnRzLmVtcHR5UmVuZGVyZXIgPSBlbXB0eVJlbmRlcmVyO1xuICBleHBvcnRzLmVuc3VyZVBsdWdpbk9yZGVyID0gZW5zdXJlUGx1Z2luT3JkZXI7XG4gIGV4cG9ydHMuZmxleFJlbmRlciA9IGZsZXhSZW5kZXI7XG4gIGV4cG9ydHMuZnVuY3Rpb25hbFVwZGF0ZSA9IGZ1bmN0aW9uYWxVcGRhdGU7XG4gIGV4cG9ydHMubG9vcEhvb2tzID0gbG9vcEhvb2tzO1xuICBleHBvcnRzLm1ha2VQcm9wR2V0dGVyID0gbWFrZVByb3BHZXR0ZXI7XG4gIGV4cG9ydHMubWFrZVJlbmRlcmVyID0gbWFrZVJlbmRlcmVyO1xuICBleHBvcnRzLnJlZHVjZUhvb2tzID0gcmVkdWNlSG9va3M7XG4gIGV4cG9ydHMuc2FmZVVzZUxheW91dEVmZmVjdCA9IHNhZmVVc2VMYXlvdXRFZmZlY3Q7XG4gIGV4cG9ydHMudXNlQWJzb2x1dGVMYXlvdXQgPSB1c2VBYnNvbHV0ZUxheW91dDtcbiAgZXhwb3J0cy51c2VBc3luY0RlYm91bmNlID0gdXNlQXN5bmNEZWJvdW5jZTtcbiAgZXhwb3J0cy51c2VCbG9ja0xheW91dCA9IHVzZUJsb2NrTGF5b3V0O1xuICBleHBvcnRzLnVzZUNvbHVtbk9yZGVyID0gdXNlQ29sdW1uT3JkZXI7XG4gIGV4cG9ydHMudXNlRXhwYW5kZWQgPSB1c2VFeHBhbmRlZDtcbiAgZXhwb3J0cy51c2VGaWx0ZXJzID0gdXNlRmlsdGVycztcbiAgZXhwb3J0cy51c2VGbGV4TGF5b3V0ID0gdXNlRmxleExheW91dDtcbiAgZXhwb3J0cy51c2VHZXRMYXRlc3QgPSB1c2VHZXRMYXRlc3Q7XG4gIGV4cG9ydHMudXNlR2xvYmFsRmlsdGVyID0gdXNlR2xvYmFsRmlsdGVyO1xuICBleHBvcnRzLnVzZUdyaWRMYXlvdXQgPSB1c2VHcmlkTGF5b3V0O1xuICBleHBvcnRzLnVzZUdyb3VwQnkgPSB1c2VHcm91cEJ5O1xuICBleHBvcnRzLnVzZU1vdW50ZWRMYXlvdXRFZmZlY3QgPSB1c2VNb3VudGVkTGF5b3V0RWZmZWN0O1xuICBleHBvcnRzLnVzZVBhZ2luYXRpb24gPSB1c2VQYWdpbmF0aW9uO1xuICBleHBvcnRzLnVzZVJlc2l6ZUNvbHVtbnMgPSB1c2VSZXNpemVDb2x1bW5zO1xuICBleHBvcnRzLnVzZVJvd1NlbGVjdCA9IHVzZVJvd1NlbGVjdDtcbiAgZXhwb3J0cy51c2VSb3dTdGF0ZSA9IHVzZVJvd1N0YXRlO1xuICBleHBvcnRzLnVzZVNvcnRCeSA9IHVzZVNvcnRCeTtcbiAgZXhwb3J0cy51c2VUYWJsZSA9IHVzZVRhYmxlO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC10YWJsZS5kZXZlbG9wbWVudC5qcy5tYXBcbiIsImlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3JlYWN0LXRhYmxlLnByb2R1Y3Rpb24ubWluLmpzJylcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3JlYWN0LXRhYmxlLmRldmVsb3BtZW50LmpzJylcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4yJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGlzdCB9KSB7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMzMjMyMzJcIiB9fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+JiN4MUY0Qjg7PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcENvbnR9PlxuXG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWlkQ29udH0+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8VGFibGUgbGlzdD17bGlzdH0vPlxuXG4gICAgPC9kaXY+XG4gIClcblxuXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2xpc3RgKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbGlzdDogZGF0YVxuICAgICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBsaXN0OiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAncmVhY3QtdGFibGUnXHJcbmltcG9ydCB0IGZyb20gJy4uL3N0eWxlcy90YWJsZS5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XHJcbiAgLy8gY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8gaWYgKHByb3BzLmxpc3QgJiYgbGlzdCAhPT0gZmFsc2Upe1xyXG4gIC8vICAgc2V0TGlzdChwcm9wcy5saXN0KVxyXG4gIC8vIH1cclxuICBjb25zb2xlLmxvZyhwcm9wcy5saXN0KTtcclxuICBsZXQgbGlzdCA9IHByb3BzLmxpc3RcclxuICBjb25zdCBkaXNwbGF5VGFibGUgPSAoKSA9PiB7XHJcbiAgICBsaXN0LmZvckVhY2goZSA9PiB7XHJcbiAgICAgIGxldCBjb3VudHJ5ID0gZS5jb2wxXHJcbiAgICAgIGUuY29sMSA9IDxpbWcgaGVpZ2h0PVwiMjRweFwiIHdpZHRoPVwiMzZweFwiIHNyYz17YC4vaWNvbnMvcG5nLyR7Y291bnRyeX0ucG5nYH0+PC9pbWc+XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgICAoKSA9PiBsaXN0LCBbXVxyXG4gICAgKVxyXG4gICAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAgICgpID0+IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBIZWFkZXI6ICdDb3VudHJ5JyxcclxuICAgICAgICAgIGFjY2Vzc29yOiAnY29sMScsIC8vIGFjY2Vzc29yIGlzIHRoZSBcImtleVwiIGluIHRoZSBkYXRhXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBIZWFkZXI6ICdNYWNib29rIDEzXCIgMScsXHJcbiAgICAgICAgICBhY2Nlc3NvcjogJ2NvbDInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgSGVhZGVyOiAnTWFjYm9vayAxM1wiIDInLFxyXG4gICAgICAgICAgYWNjZXNzb3I6ICdjb2wzJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEhlYWRlcjogJ01hY2Jvb2sgMTNcIiAzJyxcclxuICAgICAgICAgIGFjY2Vzc29yOiAnY29sNCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBIZWFkZXI6ICdNYWNib29rIDEzXCIgNCcsXHJcbiAgICAgICAgICBhY2Nlc3NvcjogJ2NvbDUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgSGVhZGVyOiAnTWFjYm9vayAxNlwiIDEnLFxyXG4gICAgICAgICAgYWNjZXNzb3I6ICdjb2w2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEhlYWRlcjogJ01hY2Jvb2sgMTZcIiAyJyxcclxuICAgICAgICAgIGFjY2Vzc29yOiAnY29sNycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgW11cclxuICAgIClcclxuICAgIGNvbnN0IHtcclxuICAgICAgZ2V0VGFibGVQcm9wcyxcclxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXHJcbiAgICAgIGhlYWRlckdyb3VwcyxcclxuICAgICAgcm93cyxcclxuICAgICAgcHJlcGFyZVJvdyxcclxuICAgIH0gPSB1c2VUYWJsZSh7IGNvbHVtbnMsIGRhdGEgfSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0YWJsZSB7Li4uZ2V0VGFibGVQcm9wcygpfSBjbGFzc05hbWU9e3QucnRhYmxlfT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXHJcbiAgICAgICAgICAgIDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cclxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dC50aH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cclxuICAgICAgICAgIHtyb3dzLm1hcChyb3cgPT4ge1xyXG4gICAgICAgICAgICBwcmVwYXJlUm93KHJvdylcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfSBjbGFzc05hbWU9e3QudHJ9PlxyXG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dC50ZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IGxpc3QgPyBkaXNwbGF5VGFibGUoKSA6IDw+PC8+fVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vSG9tZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Ib21lLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9Ib21lLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi90YWJsZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi90YWJsZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vdGFibGUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9
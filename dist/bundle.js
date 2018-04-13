/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar showLetter = document.querySelector('.keyCodMostrar__letter');\nvar title = document.querySelector('.keyAbece__title');\nvar hand = document.querySelector('.keyAbece__hand');\nvar handIcon = document.querySelector('.iconHand');\nvar error = document.querySelector('.keyAbece__error');\n\nvar keyCodes = {\n  65: \"a\",\n  66: \"b\",\n  67: \"c\",\n  68: \"d\",\n  69: \"e\",\n  70: \"f\",\n  71: \"g\",\n  72: \"h\",\n  73: \"i\",\n  74: \"j\",\n  75: \"k\",\n  76: \"l\",\n  77: \"m\",\n  78: \"n\",\n  79: \"o\",\n  80: \"p\",\n  81: \"q\",\n  82: \"r\",\n  83: \"s\",\n  84: \"t\",\n  85: \"u\",\n  86: \"v\",\n  87: \"w\",\n  88: \"x\",\n  89: \"y\",\n  90: \"z\"\n};\nvar keyHands = {\n  65: \"images/abecedario_Aa.svg\",\n  66: \"images/abecedario_Bb.svg\",\n  67: \"images/abecedario_Cc.svg\"\n  // 68 : \"images/abecedario_Dd.svg\",\n  // 69 : \"images/abecedario_Ee.svg\",\n  // 70 : \"images/abecedario_Ff.svg\",\n  // 71 : \"images/abecedario_Gg.svg\",\n  // 72 : \"images/abecedario_Hh.svg\",\n  // 73 : \"images/abecedario_Ii.svg\",\n  // 74 : \"images/abecedario_Jj.svg\",\n  // 75 : \"images/abecedario_Kk.svg\",\n  // 76 : \"images/abecedario_Ll.svg\",\n  // 77 : \"images/abecedario_Mm.svg\",\n  // 78 : \"images/abecedario_Nn.svg\",\n  // 79 : \"images/abecedario_Ññ.svg\",\n  // 80 : \"images/abecedario_Oo.svg\",\n  // 81 : \"images/abecedario_Pp.svg\",\n  // 82 : \"images/abecedario_Qq.svg\",\n  // 83 : \"images/abecedario_Rr.svg\",\n  // 84 : \"images/abecedario_Ss.svg\",\n  // 85 : \"images/abecedario_Tt.svg\",\n  // 86 : \"images/abecedario_Uu.svg\",\n  // 87 : \"images/abecedario_Vv.svg\",\n  // 88 : \"images/abecedario_Ww.svg\",\n  // 89 : \"images/abecedario_Xx.svg\",\n  // 90 : \"images/abecedario_Yy.svg\",\n};\n\nfunction handleKeyDown(ev) {\n  if (!ev.metaKey) {\n    ev.preventDefault();\n  }\n\n  title.style.display = 'none';\n  error.style.display = 'none';\n\n  var key = ev.keyCode ? ev.keyCode : ev.which;\n\n  var imgBloq = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP94z19hOeXX6UD_qr9cabEAnh9OEYRo1zSMBItiRu42i3od71';\n\n  if (keyCodes[ev.keyCode] && key) {\n\n    var letterKC = keyCodes[ev.keyCode];\n    var handKC = keyHands[ev.keyCode];\n\n    showLetter.innerHTML = letterKC;\n    handIcon.src = handKC ? handKC : imgBloq;\n    hand.style.display = 'block';\n\n    console.log(handKC);\n\n    showLetter.classList.add('active');\n  } else {\n    error.style.display = 'block';\n    handIcon.src = '';\n  }\n}\n\nfunction handleKeyUp(ev) {\n  showLetter.classList.remove('active');\n}\n\nwindow.addEventListener('keyup', handleKeyUp);\nwindow.addEventListener('keydown', handleKeyDown);\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/imports.js":
/*!********************************!*\
  !*** ./src/scripts/imports.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _imports = __webpack_require__(/*! ./../style/imports.scss */ \"./src/style/imports.scss\");\n\nvar _imports2 = _interopRequireDefault(_imports);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log('funciona sass');\n\n//# sourceURL=webpack:///./src/scripts/imports.js?");

/***/ }),

/***/ "./src/style/imports.scss":
/*!********************************!*\
  !*** ./src/style/imports.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/imports.scss?");

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/scripts/app.js ./src/scripts/imports.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/app.js */\"./src/scripts/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/scripts/imports.js */\"./src/scripts/imports.js\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/app.js_./src/scripts/imports.js?");

/***/ })

/******/ });
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
eval("\n\nvar letter = document.querySelector('.keyCodMostrar__letter');\nvar title = document.querySelector('.keyAbece__title');\nvar hand = document.querySelector('.keyAbece__hand');\nvar error = document.querySelector('.keyAbece__error');\n\nvar keyCodes = {\n  65: \"a\",\n  66: \"b\",\n  67: \"c\",\n  68: \"d\",\n  69: \"e\",\n  70: \"f\",\n  71: \"g\",\n  72: \"h\",\n  73: \"i\",\n  74: \"j\",\n  75: \"k\",\n  76: \"l\",\n  77: \"m\",\n  78: \"n\",\n  79: \"o\",\n  80: \"p\",\n  81: \"q\",\n  82: \"r\",\n  83: \"s\",\n  84: \"t\",\n  85: \"u\",\n  86: \"v\",\n  87: \"w\",\n  88: \"x\",\n  89: \"y\",\n  90: \"z\"\n};\n\nfunction handleKeyDown(ev) {\n  if (!ev.metaKey) {\n    ev.preventDefault();\n  }\n\n  title.style.display = 'none';\n  error.style.display = 'none';\n\n  var key = ev.keyCode ? ev.keyCode : ev.which;\n\n  if (keyCodes[ev.keyCode] && key) {\n    console.log(ev.keyCode);\n    letter.innerHTML = keyCodes[ev.keyCode];\n    letter.classList.add('active');\n  } else {\n    error.style.display = 'block';\n  }\n}\n\nfunction handleKeyUp(ev) {\n  letter.classList.remove('active');\n}\n\nwindow.addEventListener('keyup', handleKeyUp);\nwindow.addEventListener('keydown', handleKeyDown);\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

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
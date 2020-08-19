module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/awards.tsx":
/*!*******************************!*\
  !*** ./components/awards.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\awards.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Awards = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Awards"), __jsx("article", {
    className: "jsx-1000460867" + " " + "Award",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((award, index) => __jsx("div", {
    key: `award_${index}`,
    className: "jsx-1000460867" + " " + "Award-award",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-1000460867" + " " + "Award-award-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: award.logo,
    alt: award.issuer,
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, award.location)), __jsx("a", {
    href: award.link,
    target: "_blank",
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: "jsx-1000460867" + " " + "Award-award-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 66
    }
  }, award.title)), __jsx("p", {
    className: "jsx-1000460867",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, award.description), __jsx("span", {
    className: "jsx-1000460867" + " " + "Award-award-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, award.date)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1000460867",
    __self: undefined
  }, ".Award.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,.2);padding:0 1rem;padding-bottom:3rem;}.Award-award.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:2rem 0;}.Award-award-title.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Award-award-date.jsx-1000460867{font-size:1rem;margin:0 1rem;}.Award-award-place.jsx-1000460867{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin:.5rem 0;}.Award-award-place.jsx-1000460867 img.jsx-1000460867{max-height:80px;max-width:140px;justify-self:center;}.Award-award-place.jsx-1000460867 span.jsx-1000460867{margin-left:1rem;}.Award-award-date.jsx-1000460867{opacity:.8;font-size:.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGF3YXJkcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJpQixBQUdzQyxBQU9BLEFBS0EsQUFNRSxBQUtGLEFBTUcsQUFNQyxBQUdOLFdBQ0ssSUFuQnJCLENBVXFCLENBTXBCLFVBSXdCLEVBcEJ4QixHQVlELG9CQUFDLHNCQS9CMEIsQUFPQSxBQUtELEFBV0EseUJBaUJ6QixxREF2Q2tELEFBT2hDLGNBQ2xCLFNBSWtDLEFBV2YsZUFDbkIsT0F2Qm1CLGVBQ0ssb0JBQ3hCLDBEQVVBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGF3YXJkcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQXdhcmQgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQXdhcmRzUHJvcHMge1xyXG4gICAgZGF0YTogSUF3YXJkW107XHJcbn1cclxuXHJcbmNvbnN0IEF3YXJkcyA9ICh7IGRhdGEgfTogQXdhcmRzUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkF3YXJkczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkF3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGF3YXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGF3YXJkXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXdhcmQubG9nb30gYWx0PXthd2FyZC5pc3N1ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2F3YXJkLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXdhcmQubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+PGg1IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXRpdGxlXCI+e2F3YXJkLnRpdGxlfTwvaDU+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2F3YXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLWRhdGVcIj57YXdhcmQuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2Ugc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBd2FyZHM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\awards.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Awards);

/***/ }),

/***/ "./components/contact.tsx":
/*!********************************!*\
  !*** ./components/contact.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\contact.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Contact = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-396718400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Contact"), __jsx("article", {
    className: "jsx-396718400" + " " + "Contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((contact, index) => __jsx("div", {
    key: `skill_${index}`,
    className: "jsx-396718400" + " " + "Contact-type",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: contact.icon,
    className: "jsx-396718400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }), __jsx("a", {
    href: contact.link,
    target: "_blank",
    className: "jsx-396718400",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, contact.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "396718400",
    __self: undefined
  }, ".Contact.jsx-396718400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;padding-bottom:3rem;}.Contact-type.jsx-396718400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Contact-type.jsx-396718400 img.jsx-396718400{width:20px;margin-right:.5rem;}.Contact-type.jsx-396718400 a.jsx-396718400{-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGNvbnRhY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCaUIsQUFHc0MsQUFNQSxBQU1GLEFBS1UsV0FKRixtQkFDdkIsb0JBSWdCLFlBQ2hCLFlBbEIwQixBQU1ILDhFQUxKLGVBQ0ssQUFLTCxlQUNuQixLQUxBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGNvbnRhY3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbnRhY3QgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFjdHNQcm9wcyB7XHJcbiAgICBkYXRhOiBJQ29udGFjdFtdO1xyXG59XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgZGF0YSB9OiBDb250YWN0c1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5Db250YWN0PC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiQ29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChjb250YWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhY3QtdHlwZVwiIGtleT17YHNraWxsXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnRhY3QuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NvbnRhY3QubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+e2NvbnRhY3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\contact.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/education.tsx":
/*!**********************************!*\
  !*** ./components/education.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\education.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Education = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-3847072649",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Education & Courses"), __jsx("article", {
    className: "jsx-3847072649" + " " + "Education",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((entity, index) => __jsx("div", {
    key: `entity_${index}`,
    className: "jsx-3847072649" + " " + "Education-entity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3847072649" + " " + "Education-entity-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: entity.logo,
    alt: entity.name,
    className: "jsx-3847072649",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), __jsx("h6", {
    className: "jsx-3847072649" + " " + "Education-entity-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, entity.name)), __jsx("div", {
    className: "jsx-3847072649" + " " + "Education-entity-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, entity.title.map(singleTitle => __jsx("span", {
    className: "jsx-3847072649" + " " + "Education-entity-subject",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: entity.credentialLink,
    target: "_blank",
    className: "jsx-3847072649",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 80
    }
  }, singleTitle))), __jsx("span", {
    className: "jsx-3847072649" + " " + "Education-entity-duration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, entity.duration))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3847072649",
    __self: undefined
  }, ".Education.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:3rem;padding:0 1rem;}.Education-entity.jsx-3847072649{margin:1rem 0;}.Education-entity-place.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Education-entity.jsx-3847072649 img.jsx-3847072649{max-height:45px;max-width:80px;}.Education-entity-name.jsx-3847072649{margin-left:.5rem;}.Education-entity-details.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:.5rem;}.Education-entity-duration.jsx-3847072649{opacity:.8;font-size:.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGVkdWNhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJpQixBQUdzQyxBQU9DLEFBSUQsQUFLRyxBQUtFLEFBSUwsQUFNRixXQUNLLEdBeEJwQixFQVNtQixFQUtuQixTQVd3QixJQWZ4QiwyQ0FqQjBCLEFBV0gsQUFjRyx5QkFRMUIscURBaEN3QixBQXlCSCxlQWRyQixFQWVBLEdBekJtQixlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXEZTLTE2MTJcXERvY3VtZW50c1xccHJvamVjdHNcXG15LWN2XFxjb21wb25lbnRzXFxlZHVjYXRpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNjaG9vbEVudGl0eSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBFZHVjYXRpb25Qcm9wcyB7XHJcbiAgICBkYXRhOiBJU2Nob29sRW50aXR5W107XHJcbn1cclxuXHJcbmNvbnN0IEVkdWNhdGlvbiA9ICh7IGRhdGEgfTogRWR1Y2F0aW9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkVkdWNhdGlvbiAmIENvdXJzZXM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFZHVjYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoZW50aXR5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGVudGl0eV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbnRpdHkubG9nb30gYWx0PXtlbnRpdHkubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1uYW1lXCI+e2VudGl0eS5uYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudGl0eS50aXRsZS5tYXAoKHNpbmdsZVRpdGxlOmFueSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktc3ViamVjdFwiPjxhIGhyZWY9e2VudGl0eS5jcmVkZW50aWFsTGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+e3NpbmdsZVRpdGxlfTwvYT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktZHVyYXRpb25cIj57ZW50aXR5LmR1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHkgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWR1cmF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\education.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./components/experience.tsx":
/*!***********************************!*\
  !*** ./components/experience.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\experience.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Experience = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Experience"), __jsx("article", {
    className: "jsx-3347548585" + " " + "Experience",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((work, index) => __jsx("div", {
    key: `work_${index}`,
    className: "jsx-3347548585" + " " + "Experience-work",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "jsx-3347548585" + " " + "Experience-work-position",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }, work.title), __jsx("span", {
    className: "jsx-3347548585" + " " + "Experience-work-duration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, work.duration)), __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: work.logo,
    alt: work.company,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx("h6", {
    className: "jsx-3347548585" + " " + "Experience-work-company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, work.company), __jsx("span", {
    className: "jsx-3347548585" + " " + "Experience-work-location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, work.location))), __jsx("ul", {
    className: "jsx-3347548585" + " " + "Experience-work-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, work.description.map((point, index) => __jsx("li", {
    key: `point_${index}`,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 37
    }
  }, point))), __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-stack",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }, work.stack.map((tool, index) => __jsx("div", {
    key: `tool_${index}`,
    className: "jsx-3347548585" + " " + "Experience-work-tool",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: tool.icon,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 41
    }
  }), __jsx("span", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, tool.name))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3347548585",
    __self: undefined
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGV4cGVyaWVuY2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFHc0MsQUFLQSxBQU1DLEFBR0QsQUFLRSxBQU9GLEFBTUcsQUFNSCxBQU1BLEFBTUEsQUFNRixXQUNRLEdBN0N2QixDQVNlLENBWUssY0F5QnBCLEVBdkJELFFBYnNCLFlBYXJCLEtBWkEsaUJBdEIwQixBQUtBLEFBU0QsQUFZRixBQVlHLEFBTVAsQUFNSSx5REFMSCxnQkFDcEIsS0E3Q21CLEFBS0EsQUFpQ0UsZUFyQ3JCLEFBS2tELEFBb0IvQixBQXdCRyxFQVh0QixNQXpCQSxPQWFBLEdBd0JBLDJCQTVDQSIsImZpbGUiOiJDOlxcVXNlcnNcXEZTLTE2MTJcXERvY3VtZW50c1xccHJvamVjdHNcXG15LWN2XFxjb21wb25lbnRzXFxleHBlcmllbmNlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElXb3JrIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEV4cGVyaWVuY2VQcm9wcyB7XHJcbiAgICBkYXRhOiBJV29ya1tdO1xyXG59XHJcblxyXG5jb25zdCBFeHBlcmllbmNlID0gKHsgZGF0YSB9OiBFeHBlcmllbmNlUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkV4cGVyaWVuY2U8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHdvcmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgd29ya18ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29ya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBvc2l0aW9uXCI+e3dvcmsudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57d29yay5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dvcmsubG9nb30gYWx0PXt3b3JrLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3dvcmsuY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57d29yay5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuZGVzY3JpcHRpb24ubWFwKChwb2ludCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuc3RhY2subWFwKCh0b29sLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10b29sXCIga2V5PXtgdG9vbF8ke2luZGV4fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0b29sLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9vbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcms6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXN0YWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\experience.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./components/introduction.tsx":
/*!*************************************!*\
  !*** ./components/introduction.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\introduction.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Introduction = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("article", {
    className: "jsx-4109468502" + " " + "Introduction",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.avatar,
    className: "jsx-4109468502" + " " + "Introduction-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4109468502" + " " + "Introduction-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-4109468502" + " " + "Introduction-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, data.name), __jsx("h2", {
    className: "jsx-4109468502" + " " + "Introduction-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, data.position), __jsx("p", {
    className: "jsx-4109468502" + " " + "Introduction-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, data.description), __jsx("span", {
    className: "jsx-4109468502" + " " + "Introduction-location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, data.location))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4109468502",
    __self: undefined
  }, ".Introduction.jsx-4109468502{background-color:rgba(200,200,200,.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3rem 0;margin:0 1rem;}.Introduction-avatar.jsx-4109468502{width:200px;height:200px;padding:0 2rem;border-radius:50%;margin:auto;}.Introduction-wrapper.jsx-4109468502{padding:1rem 2rem;-webkit-flex:1 350px;-ms-flex:1 350px;flex:1 350px;}.Introduction-name.jsx-4109468502{font-size:3rem;}.Introduction-title.jsx-4109468502{font-size:1.2rem;margin-top:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGludHJvZHVjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUcrRCxBQVExQixBQU9NLEFBSUgsQUFHRSxZQWJKLEdBV2pCLEVBR3FCLENBUEosT0FORSxTQWNuQixJQXZCaUIsRUFVSyxrQkFDTixXQUtoQixDQUpBLDBDQVhrQyxtSEFDZix5REFDQSxlQUNELGNBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGludHJvZHVjdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJSW50cm9kdWN0aW9uIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEludHJvZHVjdGlvblByb3BzIHtcclxuICAgIGRhdGE6IElJbnRyb2R1Y3Rpb247XHJcbn1cclxuXHJcbmNvbnN0IEludHJvZHVjdGlvbiA9ICh7IGRhdGEgfTogSW50cm9kdWN0aW9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1hdmF0YXJcIiBzcmM9e2RhdGEuYXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tbmFtZVwiPntkYXRhLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLXRpdGxlXCI+e2RhdGEucG9zaXRpb259PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tZGVzY3JpcHRpb25cIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRyb2R1Y3Rpb247Il19 */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\introduction.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./components/languages.tsx":
/*!**********************************!*\
  !*** ./components/languages.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\languages.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Languages = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-115689261",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Languages"), __jsx("article", {
    className: "jsx-115689261" + " " + "Languages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((language, index) => __jsx("div", {
    key: `language_${index}`,
    className: "jsx-115689261" + " " + "Languages-language",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("h6", {
    className: "jsx-115689261" + " " + "Languages-language-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, language.name), __jsx("span", {
    className: "jsx-115689261" + " " + "Languages-language-level",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, language.level)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "115689261",
    __self: undefined
  }, ".Languages.jsx-115689261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,.2);padding:0 1rem;padding-bottom:3rem;}.Languages-language.jsx-115689261{margin:.5rem 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGxhbmd1YWdlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUdzQyxBQU9FLGVBQ25CLDJEQVAwQiw4RUFDd0IsNkNBQy9CLGVBQ0ssb0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGxhbmd1YWdlcy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTGFuZ3VhZ2UgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgTGFuZ3VhZ2VzUHJvcHMge1xyXG4gICAgZGF0YTogSUxhbmd1YWdlW107XHJcbn1cclxuXHJcbmNvbnN0IExhbmd1YWdlcyA9ICh7IGRhdGEgfTogTGFuZ3VhZ2VzUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkxhbmd1YWdlczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkxhbmd1YWdlc1wiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BsYW5ndWFnZV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZS1uYW1lXCI+e2xhbmd1YWdlLm5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZS1sZXZlbFwiPntsYW5ndWFnZS5sZXZlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkxhbmd1YWdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGFuZ3VhZ2VzLWxhbmd1YWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlczsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\languages.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Languages);

/***/ }),

/***/ "./components/publications.tsx":
/*!*************************************!*\
  !*** ./components/publications.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\publications.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Publications = ({
  data
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Publications"), __jsx("article", {
    className: "jsx-3347548585" + " " + "Experience",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((publication, index) => __jsx("div", {
    key: `publication_${index}`,
    className: "jsx-3347548585" + " " + "Experience-work",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: publication.link,
    target: "_blank",
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, __jsx("h4", {
    className: "jsx-3347548585" + " " + "Experience-work-position",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 72
    }
  }, publication.title)), __jsx("span", {
    className: "jsx-3347548585" + " " + "Experience-work-duration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, publication.duration)), __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: publication.logo,
    alt: publication.company,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx("h6", {
    className: "jsx-3347548585" + " " + "Experience-work-company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, publication.company), __jsx("span", {
    className: "jsx-3347548585" + " " + "Experience-work-location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 37
    }
  }, publication.location))), __jsx("ul", {
    className: "jsx-3347548585" + " " + "Experience-work-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, publication.description.map((point, index) => __jsx("li", {
    key: `point_${index}`,
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 37
    }
  }, point))), __jsx("div", {
    className: "jsx-3347548585" + " " + "Experience-work-stack",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3347548585",
    __self: undefined
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdzQyxBQUtBLEFBTUMsQUFHRCxBQUtFLEFBT0YsQUFNRyxBQU1ILEFBTUEsQUFNQSxBQU1GLFdBQ1EsR0E3Q3ZCLENBU2UsQ0FZSyxjQXlCcEIsRUF2QkQsUUFic0IsWUFhckIsS0FaQSxpQkF0QjBCLEFBS0EsQUFTRCxBQVlGLEFBWUcsQUFNUCxBQU1JLHlEQUxILGdCQUNwQixLQTdDbUIsQUFLQSxBQWlDRSxlQXJDckIsQUFLa0QsQUFvQi9CLEFBd0JHLEVBWHRCLE1BekJBLE9BYUEsR0F3QkEsMkJBNUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJV29yaywgSVB1YmxpY2F0aW9ucyB9IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgUHVibGljYXRpb25zUHJvcHMge1xyXG4gICAgZGF0YTogSVB1YmxpY2F0aW9uc1tdO1xyXG59XHJcblxyXG5jb25zdCBQdWJsaWNhdGlvbnMgPSAoeyBkYXRhIH06IFB1YmxpY2F0aW9uc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5QdWJsaWNhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHB1YmxpY2F0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHB1YmxpY2F0aW9uXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHVibGljYXRpb24ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+PGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPntwdWJsaWNhdGlvbi50aXRsZX08L2g0PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57cHVibGljYXRpb24uZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwdWJsaWNhdGlvbi5sb2dvfSBhbHQ9e3B1YmxpY2F0aW9uLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3B1YmxpY2F0aW9uLmNvbXBhbnl9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWxvY2F0aW9uXCI+e3B1YmxpY2F0aW9uLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHVibGljYXRpb24uZGVzY3JpcHRpb24ubWFwKChwb2ludCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yazpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstc3RhY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29sIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uczsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\publications.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Publications);

/***/ }),

/***/ "./components/skills.tsx":
/*!*******************************!*\
  !*** ./components/skills.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\components\\skills.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Skills = ({
  data,
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-182888206",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, title), __jsx("article", {
    className: "jsx-182888206" + " " + "Skills",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, data.map((skill, index) => __jsx("div", {
    key: `skill_${index}`,
    className: "jsx-182888206" + " " + "Skills-skill",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: skill.icon,
    className: "jsx-182888206",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "jsx-182888206",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, skill.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "182888206",
    __self: undefined
  }, ".Skills.jsx-182888206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,.2);padding:0 1rem;padding-bottom:3rem;}.Skills-skill.jsx-182888206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Skills-skill.jsx-182888206 img.jsx-182888206{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHNraWxscy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JpQixBQUdzQyxBQU9BLEFBTUYsV0FDUSxtQkFDdkIsNENBZDBCLEFBT0gsOEVBTjJCLGVBTy9CLGVBQ25CLGVBUG1CLGVBQ0ssb0JBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHNraWxscy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2tpbGwgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgU2tpbGxzUHJvcHMge1xyXG4gICAgZGF0YTogSVNraWxsW107XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoeyBkYXRhLCB0aXRsZSB9OiBTa2lsbHNQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlNraWxsc1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNraWxscy1za2lsbFwiIGtleT17YHNraWxsXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2tpbGwuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NraWxsLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLlNraWxscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMtc2tpbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMtc2tpbGwgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\skills.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ }),

/***/ "./data/data.ts":
/*!**********************!*\
  !*** ./data/data.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const Resume = {
  introduction: {
    name: "Alberto Campos",
    avatar: "./images/avatar.png",
    location: "México",
    description: "Full-Stack developer",
    position: "Full-Stack developer @Thincrs & Full-Stack developer @UTAGS "
  },
  experience: [{
    title: 'Full-Stack Developer',
    company: 'Thincrs',
    logo: './images/thincrs.png',
    duration: 'July 2017 - Present',
    location: 'Guadalajara, Mexico',
    description: ['Development of components for the landing page with Angular ', 'Development of web services with Laravel', 'Development of components for the talents and evaluators applications with React', "Development of ML models for predictions, then connect those to the Laravel's REST API", "Integration of the REST API with the React and Angular projects", "Configuration of Jenkins to CI with the GitLab Repositories"],
    stack: [{
      name: 'Angular',
      icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
    }, {
      name: 'React',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Nodejs',
      icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
    }, {
      name: 'Laravel',
      icon: 'https://cdn.svgporn.com/logos/laravel.svg'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.svgporn.com/logos/mysql.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }, {
      name: 'Python',
      icon: 'https://cdn.svgporn.com/logos/python.svg'
    }, {
      name: 'Flask',
      icon: 'https://cdn.svgporn.com/logos/flask.svg'
    }, {
      name: 'Jenkins',
      icon: 'https://cdn.svgporn.com/logos/jenkins.svg'
    }]
  }, {
    title: 'Full-Stack Developer',
    company: 'Universidad Tecnológica de Aguascalientes',
    logo: './images/utags.png',
    duration: 'January 2019 - Present',
    location: 'Aguascalientes, México',
    description: ['Full-stack development for different projects using the MEAN and MEIN stacks', 'Involved into the planning/designing phase for the applications.'],
    stack: [{
      name: 'MongoDB',
      icon: 'https://cdn.svgporn.com/logos/mongodb.svg'
    }, {
      name: 'Expressjs',
      icon: 'https://cdn.svgporn.com/logos/express.svg'
    }, {
      name: 'Angular',
      icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
    }, {
      name: 'Nodejs',
      icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
    }, {
      name: 'Typescript',
      icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
    }, {
      name: 'Ionic',
      icon: 'https://cdn.svgporn.com/logos/ionic.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }]
  }],
  education: [{
    name: 'Universidad Tecnológica de Aguascalientes',
    logo: './images/utags.png',
    title: ['Information Technologies Engineering, Software'],
    duration: '2019 - 2020'
  }, {
    name: 'Universidad Tecnológica el Retoño',
    logo: './images/utr.png',
    title: ['Information Technologies Associate, Software'],
    duration: '2016 - 2018'
  }, {
    name: 'Massachusetts Institute of Technology',
    logo: './images/mit.svg',
    title: ['Digital Transformation, Course'],
    duration: '2020'
  }, {
    name: 'Algonquin College of Applied Arts and Technology',
    logo: './images/ac.png',
    title: ['Computer Science, Courses'],
    duration: '2019'
  }, {
    name: 'Pima Community College',
    logo: './images/pima.png',
    title: ['Business Management, Courses'],
    duration: '2016'
  }, {
    name: 'Universidad Autónoma de Aguascalientes',
    logo: './images/uaa.jpg',
    title: ['Android Development, Courses'],
    duration: 'March 2018 - June 2018'
  }, {
    name: 'Linkedin Learning',
    logo: 'https://cdn.svgporn.com/logos/linkedin.svg',
    title: ['Visual Studio Code'],
    duration: '2019',
    credentialLink: 'https://drive.google.com/file/d/1d4fwyjpDkaku49nkpvrslnZzh3bUkrRU/view?usp=sharing'
  }, {
    name: '',
    logo: './images/platzi.png',
    title: ['Carrera Bases de Datos', 'Carrera Inglés para Profesionales', 'Carrera Desarrollo Backend con Go', 'Curso de Java SE', 'Curso de Node.js', 'Curso de Go', 'Curso de MongoDB', 'Curso de Buenas Prácticas', 'Curso de HTML Y CSS', 'Curso de Seguridad Informática', 'Curso de PHP con Laravel', 'Curso de POO', 'Curso de Redes de Internet', 'Curso de SCRUM', 'Curso de SQL y MySQL', 'Curso de Bases de Datos', 'Curso de Terminal y Línea de Comandos', 'Curso de Fundamentos de Google Cloud Platform'],
    duration: '2019-2020',
    credentialLink: 'https://drive.google.com/drive/folders/1wJ1mw0QJXFJt7gd4t79lq1_3s90u8PF6?usp=sharing'
  }, {
    name: '',
    logo: './images/mongou.png',
    title: ['MongoDB Basics'],
    duration: 'August 2019',
    credentialLink: 'https://drive.google.com/file/d/1l1Sz3XH7WRcCfPFAHeBceLEa99VJVdhg/view?usp=sharing'
  }],
  publications: [{
    title: 'Understanding the Crowd Markets that Workers and Requesters Imagine',
    company: 'Carnegie Mellon University, CI, ACM Collective Intelligence Conference Series',
    logo: './images/cm.png',
    duration: '2019',
    location: 'Pittsburgh, USA',
    description: ['Carlos Toxtli, Juan Pablo Castillo, Alberto Campos, Benjamin V. Hanraha, Kotaro Hara, Chris Callison-Burch, Jeffrey Bigham, Kristy Milland, Abigail Adams, Saiph Savage'],
    link: 'https://ci.acm.org/2019/assets/proceedings/CI_2019_paper_60.pdf'
  }],
  skills: [{
    name: 'JavaScript',
    icon: 'https://cdn.svgporn.com/logos/javascript.svg',
    current: true
  }, {
    name: 'React',
    icon: 'https://cdn.svgporn.com/logos/react.svg',
    current: true
  }, {
    name: 'Laravel',
    icon: 'https://cdn.svgporn.com/logos/laravel.svg',
    current: true
  }, {
    name: 'TypeScript',
    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
    current: true
  }, {
    name: 'Angular',
    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg',
    current: true
  }, {
    name: 'Node.js',
    icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
    current: true
  }, {
    name: 'MongoDB',
    icon: 'https://cdn.svgporn.com/logos/mongodb.svg',
    current: true
  }, {
    name: 'MySQL',
    icon: 'https://cdn.svgporn.com/logos/mysql.svg',
    current: true
  }, {
    name: 'Git',
    icon: 'https://cdn.svgporn.com/logos/git-icon.svg',
    current: true
  }, {
    name: 'Jira',
    icon: 'https://cdn.svgporn.com/logos/jira.svg',
    current: true
  }, {
    name: 'HTML5',
    icon: 'https://cdn.svgporn.com/logos/html-5.svg',
    current: true
  }, {
    name: 'CSS3',
    icon: 'https://cdn.svgporn.com/logos/css-3.svg',
    current: true
  }, {
    name: 'Jenkins',
    icon: 'https://cdn.svgporn.com/logos/jenkins.svg',
    current: true
  }, {
    name: 'Java',
    icon: 'https://cdn.svgporn.com/logos/java.svg'
  }, {
    name: 'PostgreSQL',
    icon: 'https://cdn.svgporn.com/logos/postgresql.svg'
  }, {
    name: 'C#',
    icon: 'https://cdn.svgporn.com/logos/c.svg'
  }, {
    name: 'Go',
    icon: 'https://cdn.svgporn.com/logos/go.svg'
  }, {
    name: 'PHP',
    icon: 'https://cdn.svgporn.com/logos/php.svg'
  }, {
    name: 'Sass',
    icon: 'https://cdn.svgporn.com/logos/sass.svg'
  }],
  awards: [{
    title: 'Honorable Mention in the IT Associate Degree',
    logo: './images/utr.png',
    location: 'Aguascalientes, Mexico',
    issuer: 'Universidad Tecnológica el Retoño',
    description: 'Recoginized as one of the best averages in the IT associate degree coursed from 2016 to 2018',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'September 2016 - December 2018'
  }, {
    title: 'Talent Hackaton Finalist',
    logo: './images/talent.png',
    location: 'Guadalajara, Mexico',
    issuer: 'Talent Network',
    description: 'Team finalist in the Talent Hackathon 2018, developing a web application that analize sentiments of news on Twitter in order to find and classify fake news',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'April 2018'
  }, {
    title: 'Rumbo a Japón',
    logo: './images/rei.png',
    location: 'Tokyo, Japan',
    issuer: 'Talent Network',
    description: 'Winner of the `Rumbo a Japón` award in which I was recognized as one of the 10 young promises of the state, then having meetings with authorities through different places at Japan ',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'April 2014'
  }],
  languages: [{
    name: 'English',
    level: 'Professional working proficiency'
  }, {
    name: 'Spanish',
    level: 'Native or bilingual proficiency'
  }],
  contact: [{
    name: 'Alberto Campos',
    icon: './images/linkedin.png',
    link: 'https://www.linkedin.com/in/albertocamposh/'
  }, {
    name: 'acamposhd',
    icon: 'https://cdn.svgporn.com/logos/github-icon.svg',
    link: 'https://github.com/acamposhd'
  }, {
    name: 'albertocamposhdez@hotmail.com',
    icon: 'https://cdn.svgporn.com/logos/google-gmail.svg',
    link: 'mailto:albertocamposhdez@hotmail.com'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-ga */ "next-ga");
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_ga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data */ "./data/data.ts");
/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/experience */ "./components/experience.tsx");
/* harmony import */ var _components_education__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/education */ "./components/education.tsx");
/* harmony import */ var _components_introduction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/introduction */ "./components/introduction.tsx");
/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/skills */ "./components/skills.tsx");
/* harmony import */ var _components_languages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/languages */ "./components/languages.tsx");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/contact */ "./components/contact.tsx");
/* harmony import */ var _components_awards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/awards */ "./components/awards.tsx");
/* harmony import */ var _components_publications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/publications */ "./components/publications.tsx");
var _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\my-cv\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const styles = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1337055790",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');body,h1,h2,h3,h4,h5,h6{border:0;padding:0;margin:0;}body,h2{font-family:'Roboto',sans-serif;font-weight:300;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}h1{font-weight:500;}h3{font-size:2rem;font-weight:400;margin:2rem 0;background-color:rgba(200,200,200,.1);padding:1rem;}h4{font-size:1.7rem;font-weight:500;}h5{font-weight:400;font-size:1.5rem;}h6{font-weight:400;font-size:1.2rem;}p{max-width:800px;}.Resume{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1rem;width:100vw;max-width:1500px;margin:auto;box-sizing:border-box;}.Resume-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Resume-main{-webkit-flex:2 520px;-ms-flex:2 520px;flex:2 520px;margin:0 1rem;}.Resume-sidebar{-webkit-flex:1 100px;-ms-flex:1 100px;flex:1 100px;margin:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J1QixBQUUrRixBQUV6RSxBQU13QixBQUlaLEFBSUwsQUFHRCxBQU9FLEFBSUQsQUFJQSxBQUlBLEFBSUgsQUFTQSxBQUtBLEFBSUEsU0F6REgsTUFpQk0sQ0FIcEIsQUFjcUIsQUFJQSxBQUlyQixDQVpvQixFQXZCUCxTQUNiLEdBZ0JrQixDQVpFLENBbUJwQixBQUlBLEFBSUEsWUFkMEMsR0FaMUMsRUFHZ0IsQ0E0Q0UsQUFJQSxXQS9DbEIsR0E0Q0EsQUFJQSxTQW5CMEIsQUFTUCxTQTdCRixhQUNqQixtQ0E4QkQscUJBVnVCLGtCQUNOLFlBQ0ssaUJBQ0wsWUFDVSxzQkFDMUIsYUFLQSIsImZpbGUiOiJDOlxcVXNlcnNcXEZTLTE2MTJcXERvY3VtZW50c1xccHJvamVjdHNcXG15LWN2XFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB3aXRoR0EgZnJvbSAnbmV4dC1nYSc7XHJcblxyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEnO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvZHVjdGlvbic7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9za2lsbHMnO1xyXG5pbXBvcnQgTGFuZ3VhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0IEF3YXJkcyBmcm9tICcuLi9jb21wb25lbnRzL2F3YXJkcyc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBQdWJsaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9wdWJsaWNhdGlvbnMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwOyBcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBib2R5LCBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC4xKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAuUmVzdW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5SZXN1bWUtY29udGVudHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1tYWlue1xyXG4gICAgICAgICAgICBmbGV4OiAyIDUyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1zaWRlYmFye1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcbik7XHJcblxyXG5jb25zdCBSZXN1bWUgPSAoKSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWVcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntkYXRhLmludHJvZHVjdGlvbi5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEuaW50cm9kdWN0aW9uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiLi9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi4vZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIuL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIuL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZGE1MzJjXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIj48L21ldGE+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxJbnRyb2R1Y3Rpb24gZGF0YT17ZGF0YS5pbnRyb2R1Y3Rpb259IC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLW1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxFeHBlcmllbmNlIGRhdGE9e2RhdGEuZXhwZXJpZW5jZX0gLz5cclxuICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gZGF0YT17ZGF0YS5lZHVjYXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICA8UHVibGljYXRpb25zIGRhdGE9e2RhdGEucHVibGljYXRpb25zfS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLXNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17ZGF0YS5za2lsbHMuZmlsdGVyKHNraWxsID0+IHNraWxsLmN1cnJlbnQpfSB0aXRsZT1cIkN1cnJlbnQgU3RhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFNraWxscyBkYXRhPXtkYXRhLnNraWxscy5maWx0ZXIoc2tpbGwgPT4gIXNraWxsLmN1cnJlbnQpfSB0aXRsZT1cIkkgSGF2ZSBVc2VkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYW5ndWFnZXMgZGF0YT17ZGF0YS5sYW5ndWFnZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8QXdhcmRzIGRhdGE9e2RhdGEuYXdhcmRzfSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3QgZGF0YT17ZGF0YS5jb250YWN0fSAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIHtzdHlsZXN9XHJcbiAgICA8L3NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoR0EocHJvY2Vzcy5lbnYuR0FfSUQsIFJvdXRlcikoUmVzdW1lKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\pages\\\\index.tsx */");

const Resume = () => __jsx("section", {
  className: "Resume",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 9
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 13
  }
}, _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction.name), __jsx("meta", {
  name: "description",
  content: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction.description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 13
  }
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "./favicon/apple-touch-icon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "./favicon/favicon-32x32.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "./favicon/favicon-16x16.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "manifest",
  href: "./favicon/site.webmanifest",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 13
  }
}), __jsx("meta", {
  name: "msapplication-TileColor",
  content: "#da532c",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 13
  }
}), __jsx("meta", {
  name: "theme-color",
  content: "#ffffff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 13
  }
})), __jsx(_components_introduction__WEBPACK_IMPORTED_MODULE_8__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }
}), __jsx("section", {
  className: "Resume-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 9
  }
}, __jsx("section", {
  className: "Resume-main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 13
  }
}, __jsx(_components_experience__WEBPACK_IMPORTED_MODULE_6__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].experience,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 17
  }
}), __jsx(_components_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].education,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 17
  }
}), __jsx(_components_publications__WEBPACK_IMPORTED_MODULE_13__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].publications,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 17
  }
})), __jsx("section", {
  className: "Resume-sidebar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 13
  }
}, __jsx(_components_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].skills.filter(skill => skill.current),
  title: "Current Stack",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 17
  }
}), __jsx(_components_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].skills.filter(skill => !skill.current),
  title: "I Have Used",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 17
  }
}), __jsx(_components_languages__WEBPACK_IMPORTED_MODULE_10__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].languages,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 17
  }
}), __jsx(_components_awards__WEBPACK_IMPORTED_MODULE_12__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].awards,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 17
  }
}), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
  data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].contact,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 17
  }
}))), styles);

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_4___default()(process.env.GA_ID, next_router__WEBPACK_IMPORTED_MODULE_3___default.a)(Resume));

/***/ }),

/***/ "next-ga":
/*!**************************!*\
  !*** external "next-ga" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-ga");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hd2FyZHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lZHVjYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1YmxpY2F0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9za2lsbHMudHN4Iiwid2VicGFjazovLy8uL2RhdGEvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1nYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXdhcmRzIiwiZGF0YSIsIm1hcCIsImF3YXJkIiwiaW5kZXgiLCJsb2dvIiwiaXNzdWVyIiwibG9jYXRpb24iLCJsaW5rIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJDb250YWN0IiwiY29udGFjdCIsImljb24iLCJuYW1lIiwiRWR1Y2F0aW9uIiwiZW50aXR5Iiwic2luZ2xlVGl0bGUiLCJjcmVkZW50aWFsTGluayIsImR1cmF0aW9uIiwiRXhwZXJpZW5jZSIsIndvcmsiLCJjb21wYW55IiwicG9pbnQiLCJzdGFjayIsInRvb2wiLCJJbnRyb2R1Y3Rpb24iLCJhdmF0YXIiLCJwb3NpdGlvbiIsIkxhbmd1YWdlcyIsImxhbmd1YWdlIiwibGV2ZWwiLCJQdWJsaWNhdGlvbnMiLCJwdWJsaWNhdGlvbiIsIlNraWxscyIsInNraWxsIiwiUmVzdW1lIiwiaW50cm9kdWN0aW9uIiwiZXhwZXJpZW5jZSIsImVkdWNhdGlvbiIsInB1YmxpY2F0aW9ucyIsInNraWxscyIsImN1cnJlbnQiLCJhd2FyZHMiLCJsYW5ndWFnZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJ3aXRoR0EiLCJwcm9jZXNzIiwiZW52IiwiR0FfSUQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUEyQjtBQUN0QyxTQUNJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDcEhBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBJQXdhcmQgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQXdhcmRzUHJvcHMge1xyXG4gICAgZGF0YTogSUF3YXJkW107XHJcbn1cclxuXHJcbmNvbnN0IEF3YXJkcyA9ICh7IGRhdGEgfTogQXdhcmRzUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkF3YXJkczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkF3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGF3YXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGF3YXJkXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXdhcmQubG9nb30gYWx0PXthd2FyZC5pc3N1ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2F3YXJkLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXdhcmQubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+PGg1IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXRpdGxlXCI+e2F3YXJkLnRpdGxlfTwvaDU+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2F3YXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLWRhdGVcIj57YXdhcmQuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2Ugc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBd2FyZHM7IiwiaW1wb3J0IHsgSUNvbnRhY3QgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFjdHNQcm9wcyB7XHJcbiAgICBkYXRhOiBJQ29udGFjdFtdO1xyXG59XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgZGF0YSB9OiBDb250YWN0c1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5Db250YWN0PC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiQ29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChjb250YWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhY3QtdHlwZVwiIGtleT17YHNraWxsXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnRhY3QuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NvbnRhY3QubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+e2NvbnRhY3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCJpbXBvcnQgeyBJU2Nob29sRW50aXR5IH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEVkdWNhdGlvblByb3BzIHtcclxuICAgIGRhdGE6IElTY2hvb2xFbnRpdHlbXTtcclxufVxyXG5cclxuY29uc3QgRWR1Y2F0aW9uID0gKHsgZGF0YSB9OiBFZHVjYXRpb25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+RWR1Y2F0aW9uICYgQ291cnNlczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkVkdWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChlbnRpdHksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgZW50aXR5XyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VudGl0eS5sb2dvfSBhbHQ9e2VudGl0eS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LW5hbWVcIj57ZW50aXR5Lm5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50aXR5LnRpdGxlLm1hcCgoc2luZ2xlVGl0bGU6YW55KSA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1zdWJqZWN0XCI+PGEgaHJlZj17ZW50aXR5LmNyZWRlbnRpYWxMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57c2luZ2xlVGl0bGV9PC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kdXJhdGlvblwiPntlbnRpdHkuZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktZHVyYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uOyIsImltcG9ydCB7IElXb3JrIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEV4cGVyaWVuY2VQcm9wcyB7XHJcbiAgICBkYXRhOiBJV29ya1tdO1xyXG59XHJcblxyXG5jb25zdCBFeHBlcmllbmNlID0gKHsgZGF0YSB9OiBFeHBlcmllbmNlUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkV4cGVyaWVuY2U8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHdvcmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgd29ya18ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29ya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBvc2l0aW9uXCI+e3dvcmsudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57d29yay5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dvcmsubG9nb30gYWx0PXt3b3JrLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3dvcmsuY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57d29yay5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuZGVzY3JpcHRpb24ubWFwKChwb2ludCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuc3RhY2subWFwKCh0b29sLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10b29sXCIga2V5PXtgdG9vbF8ke2luZGV4fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0b29sLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9vbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcms6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXN0YWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlOyIsImltcG9ydCB7IElJbnRyb2R1Y3Rpb24gfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgSW50cm9kdWN0aW9uUHJvcHMge1xyXG4gICAgZGF0YTogSUludHJvZHVjdGlvbjtcclxufVxyXG5cclxuY29uc3QgSW50cm9kdWN0aW9uID0gKHsgZGF0YSB9OiBJbnRyb2R1Y3Rpb25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWF2YXRhclwiIHNyYz17ZGF0YS5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1uYW1lXCI+e2RhdGEubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tdGl0bGVcIj57ZGF0YS5wb3NpdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1kZXNjcmlwdGlvblwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tbG9jYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvZHVjdGlvbjsiLCJpbXBvcnQgeyBJTGFuZ3VhZ2UgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgTGFuZ3VhZ2VzUHJvcHMge1xyXG4gICAgZGF0YTogSUxhbmd1YWdlW107XHJcbn1cclxuXHJcbmNvbnN0IExhbmd1YWdlcyA9ICh7IGRhdGEgfTogTGFuZ3VhZ2VzUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkxhbmd1YWdlczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkxhbmd1YWdlc1wiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BsYW5ndWFnZV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZS1uYW1lXCI+e2xhbmd1YWdlLm5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZS1sZXZlbFwiPntsYW5ndWFnZS5sZXZlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkxhbmd1YWdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGFuZ3VhZ2VzLWxhbmd1YWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlczsiLCJpbXBvcnQgeyBJV29yaywgSVB1YmxpY2F0aW9ucyB9IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgUHVibGljYXRpb25zUHJvcHMge1xyXG4gICAgZGF0YTogSVB1YmxpY2F0aW9uc1tdO1xyXG59XHJcblxyXG5jb25zdCBQdWJsaWNhdGlvbnMgPSAoeyBkYXRhIH06IFB1YmxpY2F0aW9uc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5QdWJsaWNhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHB1YmxpY2F0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHB1YmxpY2F0aW9uXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHVibGljYXRpb24ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+PGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPntwdWJsaWNhdGlvbi50aXRsZX08L2g0PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57cHVibGljYXRpb24uZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwdWJsaWNhdGlvbi5sb2dvfSBhbHQ9e3B1YmxpY2F0aW9uLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3B1YmxpY2F0aW9uLmNvbXBhbnl9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWxvY2F0aW9uXCI+e3B1YmxpY2F0aW9uLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHVibGljYXRpb24uZGVzY3JpcHRpb24ubWFwKChwb2ludCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yazpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstc3RhY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29sIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uczsiLCJpbXBvcnQgeyBJU2tpbGwgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgU2tpbGxzUHJvcHMge1xyXG4gICAgZGF0YTogSVNraWxsW107XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoeyBkYXRhLCB0aXRsZSB9OiBTa2lsbHNQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlNraWxsc1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNraWxscy1za2lsbFwiIGtleT17YHNraWxsXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2tpbGwuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NraWxsLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLlNraWxscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMtc2tpbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMtc2tpbGwgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzOyIsImltcG9ydCB7IHN0cmluZyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbnRyb2R1Y3Rpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXZhdGFyOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHBvc2l0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmsge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGxvZ286IHN0cmluZztcclxuICAgIGNvbXBhbnk6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBkdXJhdGlvbjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1tdO1xyXG4gICAgc3RhY2s6IHsgbmFtZTogc3RyaW5nOyBpY29uOiBzdHJpbmc7IH1bXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQdWJsaWNhdGlvbnMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbXBhbnk6IHN0cmluZztcclxuICAgIGxvZ286IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBkdXJhdGlvbjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1tdO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY2hvb2xFbnRpdHkge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG4gICAgdGl0bGU6IGFueVtdO1xyXG4gICAgZHVyYXRpb246IHN0cmluZztcclxuICAgIGNyZWRlbnRpYWxMaW5rPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTa2lsbCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXdhcmQge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGlzc3Vlcjogc3RyaW5nO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIGxvZ286IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbiAgICBkYXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxhbmd1YWdlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxldmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3Qge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXN1bWUge1xyXG4gICAgaW50cm9kdWN0aW9uOiBJSW50cm9kdWN0aW9uO1xyXG4gICAgZXhwZXJpZW5jZTogSVdvcmtbXTtcclxuICAgIGVkdWNhdGlvbjogSVNjaG9vbEVudGl0eVtdO1xyXG4gICAgcHVibGljYXRpb25zOiBJUHVibGljYXRpb25zW107XHJcbiAgICBza2lsbHM6IElTa2lsbFtdO1xyXG4gICAgYXdhcmRzOiBJQXdhcmRbXTtcclxuICAgIGxhbmd1YWdlczogSUxhbmd1YWdlW107XHJcbiAgICBjb250YWN0OiBJQ29udGFjdFtdO1xyXG59XHJcblxyXG5jb25zdCBSZXN1bWU6IElSZXN1bWUgPSB7XHJcbiAgICBpbnRyb2R1Y3Rpb246IHtcclxuICAgICAgICBuYW1lOiBcIkFsYmVydG8gQ2FtcG9zXCIsXHJcbiAgICAgICAgYXZhdGFyOiBcIi4vaW1hZ2VzL2F2YXRhci5wbmdcIixcclxuICAgICAgICBsb2NhdGlvbjogXCJNw6l4aWNvXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnVsbC1TdGFjayBkZXZlbG9wZXJcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJGdWxsLVN0YWNrIGRldmVsb3BlciBAVGhpbmNycyAmIEZ1bGwtU3RhY2sgZGV2ZWxvcGVyIEBVVEFHUyBcIlxyXG4gICAgfSxcclxuICAgIGV4cGVyaWVuY2U6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnRnVsbC1TdGFjayBEZXZlbG9wZXInLFxyXG4gICAgICAgICAgICBjb21wYW55OiAnVGhpbmNycycsXHJcbiAgICAgICAgICAgIGxvZ286ICcuL2ltYWdlcy90aGluY3JzLnBuZycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnSnVseSAyMDE3IC0gUHJlc2VudCcsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnR3VhZGFsYWphcmEsIE1leGljbycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAnRGV2ZWxvcG1lbnQgb2YgY29tcG9uZW50cyBmb3IgdGhlIGxhbmRpbmcgcGFnZSB3aXRoIEFuZ3VsYXIgJyxcclxuICAgICAgICAgICAgICAgICdEZXZlbG9wbWVudCBvZiB3ZWIgc2VydmljZXMgd2l0aCBMYXJhdmVsJyxcclxuICAgICAgICAgICAgICAgICdEZXZlbG9wbWVudCBvZiBjb21wb25lbnRzIGZvciB0aGUgdGFsZW50cyBhbmQgZXZhbHVhdG9ycyBhcHBsaWNhdGlvbnMgd2l0aCBSZWFjdCcsXHJcbiAgICAgICAgICAgICAgICBcIkRldmVsb3BtZW50IG9mIE1MIG1vZGVscyBmb3IgcHJlZGljdGlvbnMsIHRoZW4gY29ubmVjdCB0aG9zZSB0byB0aGUgTGFyYXZlbCdzIFJFU1QgQVBJXCIsXHJcbiAgICAgICAgICAgICAgICBcIkludGVncmF0aW9uIG9mIHRoZSBSRVNUIEFQSSB3aXRoIHRoZSBSZWFjdCBhbmQgQW5ndWxhciBwcm9qZWN0c1wiLFxyXG4gICAgICAgICAgICAgICAgXCJDb25maWd1cmF0aW9uIG9mIEplbmtpbnMgdG8gQ0kgd2l0aCB0aGUgR2l0TGFiIFJlcG9zaXRvcmllc1wiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzdGFjazogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQW5ndWxhcicsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9hbmd1bGFyLWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUmVhY3QnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcmVhY3Quc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTm9kZWpzJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL25vZGVqcy1pY29uLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xhcmF2ZWwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbGFyYXZlbC5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNeVNRTCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9teXNxbC5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdHaXQnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvZ2l0LWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnUHl0aG9uJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3B5dGhvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdGbGFzaycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9mbGFzay5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdKZW5raW5zJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2plbmtpbnMuc3ZnJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGdWxsLVN0YWNrIERldmVsb3BlcicsXHJcbiAgICAgICAgICAgIGNvbXBhbnk6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZGUgQWd1YXNjYWxpZW50ZXMnLFxyXG4gICAgICAgICAgICBsb2dvOiAnLi9pbWFnZXMvdXRhZ3MucG5nJyxcclxuICAgICAgICAgICAgZHVyYXRpb246ICdKYW51YXJ5IDIwMTkgLSBQcmVzZW50JyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdBZ3Vhc2NhbGllbnRlcywgTcOpeGljbycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAnRnVsbC1zdGFjayBkZXZlbG9wbWVudCBmb3IgZGlmZmVyZW50IHByb2plY3RzIHVzaW5nIHRoZSBNRUFOIGFuZCBNRUlOIHN0YWNrcycsXHJcbiAgICAgICAgICAgICAgICAnSW52b2x2ZWQgaW50byB0aGUgcGxhbm5pbmcvZGVzaWduaW5nIHBoYXNlIGZvciB0aGUgYXBwbGljYXRpb25zLidcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc3RhY2s6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01vbmdvREInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbW9uZ29kYi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFeHByZXNzanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvZXhwcmVzcy5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdBbmd1bGFyJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2FuZ3VsYXItaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb2RlanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVHlwZXNjcmlwdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy90eXBlc2NyaXB0LWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSW9uaWMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvaW9uaWMuc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2l0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dpdC1pY29uLnN2ZycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBlZHVjYXRpb246IFtcclxuICAgICAgICB7IG5hbWU6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZGUgQWd1YXNjYWxpZW50ZXMnLCBsb2dvOiAnLi9pbWFnZXMvdXRhZ3MucG5nJywgdGl0bGU6IFsnSW5mb3JtYXRpb24gVGVjaG5vbG9naWVzIEVuZ2luZWVyaW5nLCBTb2Z0d2FyZSddLCBkdXJhdGlvbjogJzIwMTkgLSAyMDIwJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1VuaXZlcnNpZGFkIFRlY25vbMOzZ2ljYSBlbCBSZXRvw7FvJywgbG9nbzogJy4vaW1hZ2VzL3V0ci5wbmcnLCB0aXRsZTogWydJbmZvcm1hdGlvbiBUZWNobm9sb2dpZXMgQXNzb2NpYXRlLCBTb2Z0d2FyZSddLCBkdXJhdGlvbjogJzIwMTYgLSAyMDE4JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ01hc3NhY2h1c2V0dHMgSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3knLCBsb2dvOiAnLi9pbWFnZXMvbWl0LnN2ZycsIHRpdGxlOiBbJ0RpZ2l0YWwgVHJhbnNmb3JtYXRpb24sIENvdXJzZSddLCBkdXJhdGlvbjogJzIwMjAnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnQWxnb25xdWluIENvbGxlZ2Ugb2YgQXBwbGllZCBBcnRzIGFuZCBUZWNobm9sb2d5JywgbG9nbzogJy4vaW1hZ2VzL2FjLnBuZycsIHRpdGxlOiBbJ0NvbXB1dGVyIFNjaWVuY2UsIENvdXJzZXMnXSwgZHVyYXRpb246ICcyMDE5JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1BpbWEgQ29tbXVuaXR5IENvbGxlZ2UnLCBsb2dvOiAnLi9pbWFnZXMvcGltYS5wbmcnLCB0aXRsZTogWydCdXNpbmVzcyBNYW5hZ2VtZW50LCBDb3Vyc2VzJ10sIGR1cmF0aW9uOiAnMjAxNicgfSxcclxuICAgICAgICB7IG5hbWU6ICdVbml2ZXJzaWRhZCBBdXTDs25vbWEgZGUgQWd1YXNjYWxpZW50ZXMnLCBsb2dvOiAnLi9pbWFnZXMvdWFhLmpwZycsIHRpdGxlOiBbJ0FuZHJvaWQgRGV2ZWxvcG1lbnQsIENvdXJzZXMnXSwgZHVyYXRpb246ICdNYXJjaCAyMDE4IC0gSnVuZSAyMDE4JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0xpbmtlZGluIExlYXJuaW5nJywgbG9nbzogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2xpbmtlZGluLnN2ZycsIHRpdGxlOiBbJ1Zpc3VhbCBTdHVkaW8gQ29kZSddLCBkdXJhdGlvbjogJzIwMTknLCBjcmVkZW50aWFsTGluazogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWQ0Znd5anBEa2FrdTQ5bmtwdnJzbG5aemgzYlVrclJVL3ZpZXc/dXNwPXNoYXJpbmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnJywgbG9nbzogJy4vaW1hZ2VzL3BsYXR6aS5wbmcnLCB0aXRsZTogW1xyXG4gICAgICAgICAgICAnQ2FycmVyYSBCYXNlcyBkZSBEYXRvcycsXHJcbiAgICAgICAgICAgICdDYXJyZXJhIEluZ2zDqXMgcGFyYSBQcm9mZXNpb25hbGVzJyxcclxuICAgICAgICAgICAgJ0NhcnJlcmEgRGVzYXJyb2xsbyBCYWNrZW5kIGNvbiBHbycsXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBKYXZhIFNFJywgXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBOb2RlLmpzJyxcclxuICAgICAgICAgICAgJ0N1cnNvIGRlIEdvJyxcclxuICAgICAgICAgICAgJ0N1cnNvIGRlIE1vbmdvREInLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgQnVlbmFzIFByw6FjdGljYXMnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgSFRNTCBZIENTUycsXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBTZWd1cmlkYWQgSW5mb3Jtw6F0aWNhJyxcclxuICAgICAgICAgICAgJ0N1cnNvIGRlIFBIUCBjb24gTGFyYXZlbCcsXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBQT08nLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgUmVkZXMgZGUgSW50ZXJuZXQnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgU0NSVU0nLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgU1FMIHkgTXlTUUwnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgQmFzZXMgZGUgRGF0b3MnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgVGVybWluYWwgeSBMw61uZWEgZGUgQ29tYW5kb3MnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgRnVuZGFtZW50b3MgZGUgR29vZ2xlIENsb3VkIFBsYXRmb3JtJ10sIGR1cmF0aW9uOiAnMjAxOS0yMDIwJywgY3JlZGVudGlhbExpbms6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xd0oxbXcwUUpYRkp0N2dkNHQ3OWxxMV8zczkwdThQRjY/dXNwPXNoYXJpbmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnJywgbG9nbzogJy4vaW1hZ2VzL21vbmdvdS5wbmcnLCB0aXRsZTogWydNb25nb0RCIEJhc2ljcyddLCBkdXJhdGlvbjogJ0F1Z3VzdCAyMDE5JywgY3JlZGVudGlhbExpbms6J2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxU3ozWEg3V1JjQ2ZQRkFIZUJjZUxFYTk5VkpWZGhnL3ZpZXc/dXNwPXNoYXJpbmcnfVxyXG4gICAgICAgIFxyXG4gICAgXSxcclxuICAgIHB1YmxpY2F0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbmRlcnN0YW5kaW5nIHRoZSBDcm93ZCBNYXJrZXRzIHRoYXQgV29ya2VycyBhbmQgUmVxdWVzdGVycyBJbWFnaW5lJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ0Nhcm5lZ2llIE1lbGxvbiBVbml2ZXJzaXR5LCBDSSwgQUNNIENvbGxlY3RpdmUgSW50ZWxsaWdlbmNlIENvbmZlcmVuY2UgU2VyaWVzJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL2NtLnBuZycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnMjAxOScsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnUGl0dHNidXJnaCwgVVNBJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdDYXJsb3MgVG94dGxpLCBKdWFuIFBhYmxvIENhc3RpbGxvLCBBbGJlcnRvIENhbXBvcywgQmVuamFtaW4gVi4gSGFucmFoYSwgS290YXJvIEhhcmEsIENocmlzIENhbGxpc29uLUJ1cmNoLCBKZWZmcmV5IEJpZ2hhbSwgS3Jpc3R5IE1pbGxhbmQsIEFiaWdhaWwgQWRhbXMsIFNhaXBoIFNhdmFnZSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9jaS5hY20ub3JnLzIwMTkvYXNzZXRzL3Byb2NlZWRpbmdzL0NJXzIwMTlfcGFwZXJfNjAucGRmJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBza2lsbHM6IFtcclxuICAgICAgICB7IG5hbWU6ICdKYXZhU2NyaXB0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2phdmFzY3JpcHQuc3ZnJywgY3VycmVudDp0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUmVhY3QnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcmVhY3Quc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0xhcmF2ZWwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbGFyYXZlbC5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnVHlwZVNjcmlwdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy90eXBlc2NyaXB0LWljb24uc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0FuZ3VsYXInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvYW5ndWxhci1pY29uLnN2ZycsIGN1cnJlbnQ6dHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ05vZGUuanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ01vbmdvREInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbW9uZ29kYi5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTXlTUUwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbXlzcWwuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dpdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9naXQtaWNvbi5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSmlyYScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qaXJhLnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdIVE1MNScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9odG1sLTUuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0NTUzMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvY3NzLTMuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0plbmtpbnMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvamVua2lucy5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSmF2YScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qYXZhLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdQb3N0Z3JlU1FMJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3Bvc3RncmVzcWwuc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0MjJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2Muc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dvJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dvLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdQSFAnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcGhwLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdTYXNzJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3Nhc3Muc3ZnJ30sXHJcbiAgICBdLFxyXG4gICAgYXdhcmRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvbm9yYWJsZSBNZW50aW9uIGluIHRoZSBJVCBBc3NvY2lhdGUgRGVncmVlJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3V0ci5wbmcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0FndWFzY2FsaWVudGVzLCBNZXhpY28nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZWwgUmV0b8OxbycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmVjb2dpbml6ZWQgYXMgb25lIG9mIHRoZSBiZXN0IGF2ZXJhZ2VzIGluIHRoZSBJVCBhc3NvY2lhdGUgZGVncmVlIGNvdXJzZWQgZnJvbSAyMDE2IHRvIDIwMTgnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD9mZWF0dXJlPXBsYXllcl9lbWJlZGRlZCZ2PVFRTDlQcHZOd1JvJyxcclxuICAgICAgICAgICAgZGF0ZTogJ1NlcHRlbWJlciAyMDE2IC0gRGVjZW1iZXIgMjAxOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUYWxlbnQgSGFja2F0b24gRmluYWxpc3QnLFxyXG4gICAgICAgICAgICBsb2dvOiAnLi9pbWFnZXMvdGFsZW50LnBuZycsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnR3VhZGFsYWphcmEsIE1leGljbycsXHJcbiAgICAgICAgICAgIGlzc3VlcjogJ1RhbGVudCBOZXR3b3JrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUZWFtIGZpbmFsaXN0IGluIHRoZSBUYWxlbnQgSGFja2F0aG9uIDIwMTgsIGRldmVsb3BpbmcgYSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbmFsaXplIHNlbnRpbWVudHMgb2YgbmV3cyBvbiBUd2l0dGVyIGluIG9yZGVyIHRvIGZpbmQgYW5kIGNsYXNzaWZ5IGZha2UgbmV3cycsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP2ZlYXR1cmU9cGxheWVyX2VtYmVkZGVkJnY9UVFMOVBwdk53Um8nLFxyXG4gICAgICAgICAgICBkYXRlOiAnQXByaWwgMjAxOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSdW1ibyBhIEphcMOzbicsXHJcbiAgICAgICAgICAgIGxvZ286ICcuL2ltYWdlcy9yZWkucG5nJyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUb2t5bywgSmFwYW4nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdUYWxlbnQgTmV0d29yaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2lubmVyIG9mIHRoZSBgUnVtYm8gYSBKYXDDs25gIGF3YXJkIGluIHdoaWNoIEkgd2FzIHJlY29nbml6ZWQgYXMgb25lIG9mIHRoZSAxMCB5b3VuZyBwcm9taXNlcyBvZiB0aGUgc3RhdGUsIHRoZW4gaGF2aW5nIG1lZXRpbmdzIHdpdGggYXV0aG9yaXRpZXMgdGhyb3VnaCBkaWZmZXJlbnQgcGxhY2VzIGF0IEphcGFuICcsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP2ZlYXR1cmU9cGxheWVyX2VtYmVkZGVkJnY9UVFMOVBwdk53Um8nLFxyXG4gICAgICAgICAgICBkYXRlOiAnQXByaWwgMjAxNCdcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxhbmd1YWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgICAgICBsZXZlbDogJ1Byb2Zlc3Npb25hbCB3b3JraW5nIHByb2ZpY2llbmN5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU3BhbmlzaCcsXHJcbiAgICAgICAgICAgIGxldmVsOiAnTmF0aXZlIG9yIGJpbGluZ3VhbCBwcm9maWNpZW5jeSdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgY29udGFjdDogW1xyXG4gICAgICAgIHsgbmFtZTogJ0FsYmVydG8gQ2FtcG9zJywgaWNvbjogJy4vaW1hZ2VzL2xpbmtlZGluLnBuZycsIGxpbms6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxiZXJ0b2NhbXBvc2gvJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2FjYW1wb3NoZCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9naXRodWItaWNvbi5zdmcnLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2FjYW1wb3NoZCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdhbGJlcnRvY2FtcG9zaGRlekBob3RtYWlsLmNvbScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9nb29nbGUtZ21haWwuc3ZnJywgbGluazogJ21haWx0bzphbGJlcnRvY2FtcG9zaGRlekBob3RtYWlsLmNvbScgfSxcclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHdpdGhHQSBmcm9tICduZXh0LWdhJztcclxuXHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpZW5jZSc7XHJcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9lZHVjYXRpb24nO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uJztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL3NraWxscyc7XHJcbmltcG9ydCBMYW5ndWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5ndWFnZXMnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QnO1xyXG5pbXBvcnQgQXdhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvYXdhcmRzJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFB1YmxpY2F0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3B1YmxpY2F0aW9ucyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHksIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsLjEpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5SZXN1bWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1jb250ZW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLW1haW57XHJcbiAgICAgICAgICAgIGZsZXg6IDIgNTIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLXNpZGViYXJ7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuKTtcclxuXHJcbmNvbnN0IFJlc3VtZSA9ICgpID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e2RhdGEuaW50cm9kdWN0aW9uLm5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5pbnRyb2R1Y3Rpb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIuL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiLi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi4vZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi4vZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNkYTUzMmNcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiPjwvbWV0YT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEludHJvZHVjdGlvbiBkYXRhPXtkYXRhLmludHJvZHVjdGlvbn0gLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPEV4cGVyaWVuY2UgZGF0YT17ZGF0YS5leHBlcmllbmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEVkdWNhdGlvbiBkYXRhPXtkYXRhLmVkdWNhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgIDxQdWJsaWNhdGlvbnMgZGF0YT17ZGF0YS5wdWJsaWNhdGlvbnN9Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPFNraWxscyBkYXRhPXtkYXRhLnNraWxscy5maWx0ZXIoc2tpbGwgPT4gc2tpbGwuY3VycmVudCl9IHRpdGxlPVwiQ3VycmVudCBTdGFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIGRhdGE9e2RhdGEuc2tpbGxzLmZpbHRlcihza2lsbCA9PiAhc2tpbGwuY3VycmVudCl9IHRpdGxlPVwiSSBIYXZlIFVzZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhbmd1YWdlcyBkYXRhPXtkYXRhLmxhbmd1YWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxBd2FyZHMgZGF0YT17ZGF0YS5hd2FyZHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdCBkYXRhPXtkYXRhLmNvbnRhY3R9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAge3N0eWxlc31cclxuICAgIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShwcm9jZXNzLmVudi5HQV9JRCwgUm91dGVyKShSZXN1bWUpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
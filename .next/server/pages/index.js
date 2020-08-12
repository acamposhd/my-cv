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
  }, singleTitle)), __jsx("span", {
    className: "jsx-3847072649" + " " + "Education-entity-duration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, entity.duration))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3847072649",
    __self: undefined
  }, ".Education.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:3rem;padding:0 1rem;}.Education-entity.jsx-3847072649{margin:1rem 0;}.Education-entity-place.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Education-entity.jsx-3847072649 img.jsx-3847072649{max-height:45px;max-width:80px;}.Education-entity-name.jsx-3847072649{margin-left:.5rem;}.Education-entity-details.jsx-3847072649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:.5rem;}.Education-entity-duration.jsx-3847072649{opacity:.8;font-size:.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGVkdWNhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJpQixBQUdzQyxBQU9DLEFBSUQsQUFLRyxBQUtFLEFBSUwsQUFNRixXQUNLLEdBeEJwQixFQVNtQixFQUtuQixTQVd3QixJQWZ4QiwyQ0FqQjBCLEFBV0gsQUFjRyx5QkFRMUIscURBaEN3QixBQXlCSCxlQWRyQixFQWVBLEdBekJtQixlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXEZTLTE2MTJcXERvY3VtZW50c1xccHJvamVjdHNcXG15LWN2XFxjb21wb25lbnRzXFxlZHVjYXRpb24udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNjaG9vbEVudGl0eSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBFZHVjYXRpb25Qcm9wcyB7XHJcbiAgICBkYXRhOiBJU2Nob29sRW50aXR5W107XHJcbn1cclxuXHJcbmNvbnN0IEVkdWNhdGlvbiA9ICh7IGRhdGEgfTogRWR1Y2F0aW9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkVkdWNhdGlvbiAmIENvdXJzZXM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFZHVjYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoZW50aXR5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGVudGl0eV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbnRpdHkubG9nb30gYWx0PXtlbnRpdHkubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1uYW1lXCI+e2VudGl0eS5uYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudGl0eS50aXRsZS5tYXAoKHNpbmdsZVRpdGxlOmFueSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktc3ViamVjdFwiPntzaW5nbGVUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kdXJhdGlvblwiPntlbnRpdHkuZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktZHVyYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\education.tsx */"));
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
  }, __jsx("h4", {
    className: "jsx-3347548585" + " " + "Experience-work-position",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }, publication.title), __jsx("span", {
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
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdzQyxBQUtBLEFBTUMsQUFHRCxBQUtFLEFBT0YsQUFNRyxBQU1ILEFBTUEsQUFNQSxBQU1GLFdBQ1EsR0E3Q3ZCLENBU2UsQ0FZSyxjQXlCcEIsRUF2QkQsUUFic0IsWUFhckIsS0FaQSxpQkF0QjBCLEFBS0EsQUFTRCxBQVlGLEFBWUcsQUFNUCxBQU1JLHlEQUxILGdCQUNwQixLQTdDbUIsQUFLQSxBQWlDRSxlQXJDckIsQUFLa0QsQUFvQi9CLEFBd0JHLEVBWHRCLE1BekJBLE9BYUEsR0F3QkEsMkJBNUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJV29yaywgSVB1YmxpY2F0aW9ucyB9IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgUHVibGljYXRpb25zUHJvcHMge1xyXG4gICAgZGF0YTogSVB1YmxpY2F0aW9uc1tdO1xyXG59XHJcblxyXG5jb25zdCBQdWJsaWNhdGlvbnMgPSAoeyBkYXRhIH06IFB1YmxpY2F0aW9uc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5QdWJsaWNhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHB1YmxpY2F0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHB1YmxpY2F0aW9uXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstcG9zaXRpb25cIj57cHVibGljYXRpb24udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57cHVibGljYXRpb24uZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwdWJsaWNhdGlvbi5sb2dvfSBhbHQ9e3B1YmxpY2F0aW9uLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3B1YmxpY2F0aW9uLmNvbXBhbnl9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWxvY2F0aW9uXCI+e3B1YmxpY2F0aW9uLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHVibGljYXRpb24uZGVzY3JpcHRpb24ubWFwKChwb2ludCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yazpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstc3RhY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29sIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uczsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\publications.tsx */"));
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
    duration: '2017 - 2018'
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
    credentialLink: 'http://www.lynda.com/React-js-tutorials/React-Testing-Debugging/592511-2.html'
  }, {
    name: '',
    logo: './images/platzi.png',
    title: ['Carrera Bases de Datos', 'Carrera Inglés para Profesionales', 'Carrera Desarrollo Backend con Go', 'Curso de Java SE', 'Curso de Node.js', 'Curso de Go', 'Curso de MongoDB', 'Curso de Buenas Prácticas', 'Curso de HTML Y CSS', 'Curso de Seguridad Informática', 'Curso de PHP con Laravel', 'Curso de POO', 'Curso de Redes de Internet', 'Curso de SCRUM', 'Curso de SQL y MySQL', 'Curso de Bases de Datos', 'Curso de Terminal y Línea de Comandos', 'Curso de Fundamentos de Google Cloud Platform'],
    duration: '2019-2020',
    credentialLink: 'https://platzi.com/@alfrejivi/curso/1099-fundamentos-javascript-2017/diploma/detalle/'
  }, {
    name: '',
    logo: './images/mongou.png',
    title: ['MongoDB Basics'],
    duration: 'August 2019'
  }],
  publications: [{
    title: 'Understanding the Crowd Markets that Workers and Requesters Imagine',
    company: 'Carnegie Mellon University, CI, ACM Collective Intelligence Conference Series',
    logo: './images/cm.png',
    duration: '2019',
    location: 'Pittsburgh, USA',
    description: ['Carlos Toxtli, Juan Pablo Castillo, Alberto Campos, Benjamin V. Hanraha, Kotaro Hara, Chris Callison-Burch, Jeffrey Bigham, Kristy Milland, Abigail Adams, Saiph Savage']
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
    description: 'Recoginized as one of the best averages in the IT associate degree coursed from 2017 to 2018',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'January 2017 - December 2018'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hd2FyZHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lZHVjYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1YmxpY2F0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9za2lsbHMudHN4Iiwid2VicGFjazovLy8uL2RhdGEvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1nYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXdhcmRzIiwiZGF0YSIsIm1hcCIsImF3YXJkIiwiaW5kZXgiLCJsb2dvIiwiaXNzdWVyIiwibG9jYXRpb24iLCJsaW5rIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJDb250YWN0IiwiY29udGFjdCIsImljb24iLCJuYW1lIiwiRWR1Y2F0aW9uIiwiZW50aXR5Iiwic2luZ2xlVGl0bGUiLCJkdXJhdGlvbiIsIkV4cGVyaWVuY2UiLCJ3b3JrIiwiY29tcGFueSIsInBvaW50Iiwic3RhY2siLCJ0b29sIiwiSW50cm9kdWN0aW9uIiwiYXZhdGFyIiwicG9zaXRpb24iLCJMYW5ndWFnZXMiLCJsYW5ndWFnZSIsImxldmVsIiwiUHVibGljYXRpb25zIiwicHVibGljYXRpb24iLCJTa2lsbHMiLCJza2lsbCIsIlJlc3VtZSIsImludHJvZHVjdGlvbiIsImV4cGVyaWVuY2UiLCJlZHVjYXRpb24iLCJjcmVkZW50aWFsTGluayIsInB1YmxpY2F0aW9ucyIsInNraWxscyIsImN1cnJlbnQiLCJhd2FyZHMiLCJsYW5ndWFnZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJ3aXRoR0EiLCJwcm9jZXNzIiwiZW52IiwiR0FfSUQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUEyQjtBQUN0QyxTQUNJLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LElBQUlBLEtBQUssQ0FBQ1EsT0FBbEMsQ0FBZDtBQUEwRCxPQUFLLEVBQUMsZUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURKLEVBRUksTUFBQywwREFBRDtBQUFRLE1BQUksRUFBRTFDLGtEQUFJLENBQUN5QyxNQUFMLENBQVlLLE1BQVosQ0FBbUJaLEtBQUssSUFBSSxDQUFDQSxLQUFLLENBQUNRLE9BQW5DLENBQWQ7QUFBMkQsT0FBSyxFQUFDLGFBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGSixFQUdJLE1BQUMsOERBQUQ7QUFBVyxNQUFJLEVBQUUxQyxrREFBSSxDQUFDNEMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhKLEVBSUksTUFBQywyREFBRDtBQUFRLE1BQUksRUFBRTVDLGtEQUFJLENBQUMyQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkosRUFLSSxNQUFDLDREQUFEO0FBQVMsTUFBSSxFQUFFM0Msa0RBQUksQ0FBQ1ksT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxKLENBTkosQ0FiSixFQTJCS2lDLE1BM0JMLENBREo7O0FBZ0NlRSw2R0FBTSxDQUFDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBYixFQUFvQkMsa0RBQXBCLENBQU4sQ0FBa0NoQixNQUFsQyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDcEhBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBJQXdhcmQgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQXdhcmRzUHJvcHMge1xyXG4gICAgZGF0YTogSUF3YXJkW107XHJcbn1cclxuXHJcbmNvbnN0IEF3YXJkcyA9ICh7IGRhdGEgfTogQXdhcmRzUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkF3YXJkczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkF3YXJkXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGF3YXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGF3YXJkXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXdhcmQubG9nb30gYWx0PXthd2FyZC5pc3N1ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2F3YXJkLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YXdhcmQubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+PGg1IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXRpdGxlXCI+e2F3YXJkLnRpdGxlfTwvaDU+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2F3YXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLWRhdGVcIj57YXdhcmQuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2Ugc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBd2FyZHM7IiwiaW1wb3J0IHsgSUNvbnRhY3QgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFjdHNQcm9wcyB7XHJcbiAgICBkYXRhOiBJQ29udGFjdFtdO1xyXG59XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgZGF0YSB9OiBDb250YWN0c1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5Db250YWN0PC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiQ29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChjb250YWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhY3QtdHlwZVwiIGtleT17YHNraWxsXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnRhY3QuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NvbnRhY3QubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+e2NvbnRhY3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiLCJpbXBvcnQgeyBJU2Nob29sRW50aXR5IH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEVkdWNhdGlvblByb3BzIHtcclxuICAgIGRhdGE6IElTY2hvb2xFbnRpdHlbXTtcclxufVxyXG5cclxuY29uc3QgRWR1Y2F0aW9uID0gKHsgZGF0YSB9OiBFZHVjYXRpb25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+RWR1Y2F0aW9uICYgQ291cnNlczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkVkdWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChlbnRpdHksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgZW50aXR5XyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VudGl0eS5sb2dvfSBhbHQ9e2VudGl0eS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LW5hbWVcIj57ZW50aXR5Lm5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50aXR5LnRpdGxlLm1hcCgoc2luZ2xlVGl0bGU6YW55KSA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1zdWJqZWN0XCI+e3NpbmdsZVRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LWR1cmF0aW9uXCI+e2VudGl0eS5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LXBsYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1kdXJhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZHVjYXRpb247IiwiaW1wb3J0IHsgSVdvcmsgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgRXhwZXJpZW5jZVByb3BzIHtcclxuICAgIGRhdGE6IElXb3JrW107XHJcbn1cclxuXHJcbmNvbnN0IEV4cGVyaWVuY2UgPSAoeyBkYXRhIH06IEV4cGVyaWVuY2VQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+RXhwZXJpZW5jZTwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgod29yaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2B3b3JrXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstcG9zaXRpb25cIj57d29yay50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kdXJhdGlvblwiPnt3b3JrLmR1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d29yay5sb2dvfSBhbHQ9e3dvcmsuY29tcGFueX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWNvbXBhbnlcIj57d29yay5jb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1sb2NhdGlvblwiPnt3b3JrLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgcG9pbnRfJHtpbmRleH1gfSA+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstc3RhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5zdGFjay5tYXAoKHRvb2wsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXRvb2xcIiBrZXk9e2B0b29sXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Rvb2wuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b29sLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yazpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstc3RhY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29sIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7IiwiaW1wb3J0IHsgSUludHJvZHVjdGlvbiB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBJbnRyb2R1Y3Rpb25Qcm9wcyB7XHJcbiAgICBkYXRhOiBJSW50cm9kdWN0aW9uO1xyXG59XHJcblxyXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoeyBkYXRhIH06IEludHJvZHVjdGlvblByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tYXZhdGFyXCIgc3JjPXtkYXRhLmF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLW5hbWVcIj57ZGF0YS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi10aXRsZVwiPntkYXRhLnBvc2l0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWRlc2NyaXB0aW9uXCI+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1sb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWN0aW9uOyIsImltcG9ydCB7IElMYW5ndWFnZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBMYW5ndWFnZXNQcm9wcyB7XHJcbiAgICBkYXRhOiBJTGFuZ3VhZ2VbXTtcclxufVxyXG5cclxuY29uc3QgTGFuZ3VhZ2VzID0gKHsgZGF0YSB9OiBMYW5ndWFnZXNQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+TGFuZ3VhZ2VzPC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGxhbmd1YWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGxhbmd1YWdlXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlLW5hbWVcIj57bGFuZ3VhZ2UubmFtZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlLWxldmVsXCI+e2xhbmd1YWdlLmxldmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuTGFuZ3VhZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5MYW5ndWFnZXMtbGFuZ3VhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VzOyIsImltcG9ydCB7IElXb3JrLCBJUHVibGljYXRpb25zIH0gZnJvbSAnLi4vZGF0YS9kYXRhJztcclxuXHJcbmludGVyZmFjZSBQdWJsaWNhdGlvbnNQcm9wcyB7XHJcbiAgICBkYXRhOiBJUHVibGljYXRpb25zW107XHJcbn1cclxuXHJcbmNvbnN0IFB1YmxpY2F0aW9ucyA9ICh7IGRhdGEgfTogUHVibGljYXRpb25zUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPlB1YmxpY2F0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgocHVibGljYXRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgcHVibGljYXRpb25fJHtpbmRleH1gfSBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPntwdWJsaWNhdGlvbi50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kdXJhdGlvblwiPntwdWJsaWNhdGlvbi5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3B1YmxpY2F0aW9uLmxvZ299IGFsdD17cHVibGljYXRpb24uY29tcGFueX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWNvbXBhbnlcIj57cHVibGljYXRpb24uY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57cHVibGljYXRpb24ubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdWJsaWNhdGlvbi5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgcG9pbnRfJHtpbmRleH1gfSA+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstc3RhY2tcIj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1zdGFja3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2wgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25zOyIsImltcG9ydCB7IElTa2lsbCB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBTa2lsbHNQcm9wcyB7XHJcbiAgICBkYXRhOiBJU2tpbGxbXTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNraWxscyA9ICh7IGRhdGEsIHRpdGxlIH06IFNraWxsc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiU2tpbGxzXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2tpbGxzLXNraWxsXCIga2V5PXtgc2tpbGxfJHtpbmRleH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtza2lsbC5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2tpbGwubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuU2tpbGxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlNraWxscy1za2lsbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLlNraWxscy1za2lsbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7IiwiaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUludHJvZHVjdGlvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhdmF0YXI6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcG9zaXRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV29yayB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG4gICAgY29tcGFueTogc3RyaW5nO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIGR1cmF0aW9uOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nW107XHJcbiAgICBzdGFjazogeyBuYW1lOiBzdHJpbmc7IGljb246IHN0cmluZzsgfVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVB1YmxpY2F0aW9ucyB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgY29tcGFueTogc3RyaW5nO1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIGR1cmF0aW9uOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjaG9vbEVudGl0eSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBsb2dvOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogYW55W107XHJcbiAgICBkdXJhdGlvbjogc3RyaW5nO1xyXG4gICAgY3JlZGVudGlhbExpbms/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNraWxsIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGN1cnJlbnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBd2FyZCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTGFuZ3VhZ2Uge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGV2ZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VtZSB7XHJcbiAgICBpbnRyb2R1Y3Rpb246IElJbnRyb2R1Y3Rpb247XHJcbiAgICBleHBlcmllbmNlOiBJV29ya1tdO1xyXG4gICAgZWR1Y2F0aW9uOiBJU2Nob29sRW50aXR5W107XHJcbiAgICBwdWJsaWNhdGlvbnM6IElQdWJsaWNhdGlvbnNbXTtcclxuICAgIHNraWxsczogSVNraWxsW107XHJcbiAgICBhd2FyZHM6IElBd2FyZFtdO1xyXG4gICAgbGFuZ3VhZ2VzOiBJTGFuZ3VhZ2VbXTtcclxuICAgIGNvbnRhY3Q6IElDb250YWN0W107XHJcbn1cclxuXHJcbmNvbnN0IFJlc3VtZTogSVJlc3VtZSA9IHtcclxuICAgIGludHJvZHVjdGlvbjoge1xyXG4gICAgICAgIG5hbWU6IFwiQWxiZXJ0byBDYW1wb3NcIixcclxuICAgICAgICBhdmF0YXI6IFwiLi9pbWFnZXMvYXZhdGFyLnBuZ1wiLFxyXG4gICAgICAgIGxvY2F0aW9uOiBcIk3DqXhpY29cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGdWxsLVN0YWNrIGRldmVsb3BlclwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcIkZ1bGwtU3RhY2sgZGV2ZWxvcGVyIEBUaGluY3JzICYgRnVsbC1TdGFjayBkZXZlbG9wZXIgQFVUQUdTIFwiXHJcbiAgICB9LFxyXG4gICAgZXhwZXJpZW5jZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGdWxsLVN0YWNrIERldmVsb3BlcicsXHJcbiAgICAgICAgICAgIGNvbXBhbnk6ICdUaGluY3JzJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3RoaW5jcnMucG5nJyxcclxuICAgICAgICAgICAgZHVyYXRpb246ICdKdWx5IDIwMTcgLSBQcmVzZW50JyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdHdWFkYWxhamFyYSwgTWV4aWNvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdEZXZlbG9wbWVudCBvZiBjb21wb25lbnRzIGZvciB0aGUgbGFuZGluZyBwYWdlIHdpdGggQW5ndWxhciAnLFxyXG4gICAgICAgICAgICAgICAgJ0RldmVsb3BtZW50IG9mIHdlYiBzZXJ2aWNlcyB3aXRoIExhcmF2ZWwnLFxyXG4gICAgICAgICAgICAgICAgJ0RldmVsb3BtZW50IG9mIGNvbXBvbmVudHMgZm9yIHRoZSB0YWxlbnRzIGFuZCBldmFsdWF0b3JzIGFwcGxpY2F0aW9ucyB3aXRoIFJlYWN0JyxcclxuICAgICAgICAgICAgICAgIFwiRGV2ZWxvcG1lbnQgb2YgTUwgbW9kZWxzIGZvciBwcmVkaWN0aW9ucywgdGhlbiBjb25uZWN0IHRob3NlIHRvIHRoZSBMYXJhdmVsJ3MgUkVTVCBBUElcIixcclxuICAgICAgICAgICAgICAgIFwiSW50ZWdyYXRpb24gb2YgdGhlIFJFU1QgQVBJIHdpdGggdGhlIFJlYWN0IGFuZCBBbmd1bGFyIHByb2plY3RzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbmZpZ3VyYXRpb24gb2YgSmVua2lucyB0byBDSSB3aXRoIHRoZSBHaXRMYWIgUmVwb3NpdG9yaWVzXCIsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHN0YWNrOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdBbmd1bGFyJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2FuZ3VsYXItaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWFjdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9yZWFjdC5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb2RlanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGFyYXZlbCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9sYXJhdmVsLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ015U1FMJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL215c3FsLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0dpdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9naXQtaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdQeXRob24nLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcHl0aG9uLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0ZsYXNrJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2ZsYXNrLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0plbmtpbnMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvamVua2lucy5zdmcnIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Z1bGwtU3RhY2sgRGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ1VuaXZlcnNpZGFkIFRlY25vbMOzZ2ljYSBkZSBBZ3Vhc2NhbGllbnRlcycsXHJcbiAgICAgICAgICAgIGxvZ286ICcuL2ltYWdlcy91dGFncy5wbmcnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogJ0phbnVhcnkgMjAxOSAtIFByZXNlbnQnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0FndWFzY2FsaWVudGVzLCBNw6l4aWNvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdGdWxsLXN0YWNrIGRldmVsb3BtZW50IGZvciBkaWZmZXJlbnQgcHJvamVjdHMgdXNpbmcgdGhlIE1FQU4gYW5kIE1FSU4gc3RhY2tzJyxcclxuICAgICAgICAgICAgICAgICdJbnZvbHZlZCBpbnRvIHRoZSBwbGFubmluZy9kZXNpZ25pbmcgcGhhc2UgZm9yIHRoZSBhcHBsaWNhdGlvbnMuJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBzdGFjazogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTW9uZ29EQicsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9tb25nb2RiLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0V4cHJlc3NqcycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9leHByZXNzLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0FuZ3VsYXInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvYW5ndWxhci1pY29uLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ05vZGVqcycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9ub2RlanMtaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdUeXBlc2NyaXB0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3R5cGVzY3JpcHQtaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJb25pYycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9pb25pYy5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdHaXQnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvZ2l0LWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGVkdWNhdGlvbjogW1xyXG4gICAgICAgIHsgbmFtZTogJ1VuaXZlcnNpZGFkIFRlY25vbMOzZ2ljYSBkZSBBZ3Vhc2NhbGllbnRlcycsIGxvZ286ICcuL2ltYWdlcy91dGFncy5wbmcnLCB0aXRsZTogWydJbmZvcm1hdGlvbiBUZWNobm9sb2dpZXMgRW5naW5lZXJpbmcsIFNvZnR3YXJlJ10sIGR1cmF0aW9uOiAnMjAxOSAtIDIwMjAnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnVW5pdmVyc2lkYWQgVGVjbm9sw7NnaWNhIGVsIFJldG/DsW8nLCBsb2dvOiAnLi9pbWFnZXMvdXRyLnBuZycsIHRpdGxlOiBbJ0luZm9ybWF0aW9uIFRlY2hub2xvZ2llcyBBc3NvY2lhdGUsIFNvZnR3YXJlJ10sIGR1cmF0aW9uOiAnMjAxNyAtIDIwMTgnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTWFzc2FjaHVzZXR0cyBJbnN0aXR1dGUgb2YgVGVjaG5vbG9neScsIGxvZ286ICcuL2ltYWdlcy9taXQuc3ZnJywgdGl0bGU6IFsnRGlnaXRhbCBUcmFuc2Zvcm1hdGlvbiwgQ291cnNlJ10sIGR1cmF0aW9uOiAnMjAyMCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdBbGdvbnF1aW4gQ29sbGVnZSBvZiBBcHBsaWVkIEFydHMgYW5kIFRlY2hub2xvZ3knLCBsb2dvOiAnLi9pbWFnZXMvYWMucG5nJywgdGl0bGU6IFsnQ29tcHV0ZXIgU2NpZW5jZSwgQ291cnNlcyddLCBkdXJhdGlvbjogJzIwMTknIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUGltYSBDb21tdW5pdHkgQ29sbGVnZScsIGxvZ286ICcuL2ltYWdlcy9waW1hLnBuZycsIHRpdGxlOiBbJ0J1c2luZXNzIE1hbmFnZW1lbnQsIENvdXJzZXMnXSwgZHVyYXRpb246ICcyMDE2JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1VuaXZlcnNpZGFkIEF1dMOzbm9tYSBkZSBBZ3Vhc2NhbGllbnRlcycsIGxvZ286ICcuL2ltYWdlcy91YWEuanBnJywgdGl0bGU6IFsnQW5kcm9pZCBEZXZlbG9wbWVudCwgQ291cnNlcyddLCBkdXJhdGlvbjogJ01hcmNoIDIwMTggLSBKdW5lIDIwMTgnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTGlua2VkaW4gTGVhcm5pbmcnLCBsb2dvOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbGlua2VkaW4uc3ZnJywgdGl0bGU6IFsnVmlzdWFsIFN0dWRpbyBDb2RlJ10sIGR1cmF0aW9uOiAnMjAxOScsIGNyZWRlbnRpYWxMaW5rOiAnaHR0cDovL3d3dy5seW5kYS5jb20vUmVhY3QtanMtdHV0b3JpYWxzL1JlYWN0LVRlc3RpbmctRGVidWdnaW5nLzU5MjUxMS0yLmh0bWwnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnJywgbG9nbzogJy4vaW1hZ2VzL3BsYXR6aS5wbmcnLCB0aXRsZTogW1xyXG4gICAgICAgICAgICAnQ2FycmVyYSBCYXNlcyBkZSBEYXRvcycsXHJcbiAgICAgICAgICAgICdDYXJyZXJhIEluZ2zDqXMgcGFyYSBQcm9mZXNpb25hbGVzJyxcclxuICAgICAgICAgICAgJ0NhcnJlcmEgRGVzYXJyb2xsbyBCYWNrZW5kIGNvbiBHbycsXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBKYXZhIFNFJywgXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBOb2RlLmpzJyxcclxuICAgICAgICAgICAgJ0N1cnNvIGRlIEdvJyxcclxuICAgICAgICAgICAgJ0N1cnNvIGRlIE1vbmdvREInLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgQnVlbmFzIFByw6FjdGljYXMnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgSFRNTCBZIENTUycsXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBTZWd1cmlkYWQgSW5mb3Jtw6F0aWNhJyxcclxuICAgICAgICAgICAgJ0N1cnNvIGRlIFBIUCBjb24gTGFyYXZlbCcsXHJcbiAgICAgICAgICAgICdDdXJzbyBkZSBQT08nLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgUmVkZXMgZGUgSW50ZXJuZXQnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgU0NSVU0nLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgU1FMIHkgTXlTUUwnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgQmFzZXMgZGUgRGF0b3MnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgVGVybWluYWwgeSBMw61uZWEgZGUgQ29tYW5kb3MnLFxyXG4gICAgICAgICAgICAnQ3Vyc28gZGUgRnVuZGFtZW50b3MgZGUgR29vZ2xlIENsb3VkIFBsYXRmb3JtJ10sIGR1cmF0aW9uOiAnMjAxOS0yMDIwJywgY3JlZGVudGlhbExpbms6ICdodHRwczovL3BsYXR6aS5jb20vQGFsZnJlaml2aS9jdXJzby8xMDk5LWZ1bmRhbWVudG9zLWphdmFzY3JpcHQtMjAxNy9kaXBsb21hL2RldGFsbGUvJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJycsIGxvZ286ICcuL2ltYWdlcy9tb25nb3UucG5nJywgdGl0bGU6IFsnTW9uZ29EQiBCYXNpY3MnXSwgZHVyYXRpb246ICdBdWd1c3QgMjAxOScgfVxyXG4gICAgICAgIFxyXG4gICAgXSxcclxuICAgIHB1YmxpY2F0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbmRlcnN0YW5kaW5nIHRoZSBDcm93ZCBNYXJrZXRzIHRoYXQgV29ya2VycyBhbmQgUmVxdWVzdGVycyBJbWFnaW5lJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ0Nhcm5lZ2llIE1lbGxvbiBVbml2ZXJzaXR5LCBDSSwgQUNNIENvbGxlY3RpdmUgSW50ZWxsaWdlbmNlIENvbmZlcmVuY2UgU2VyaWVzJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL2NtLnBuZycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnMjAxOScsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnUGl0dHNidXJnaCwgVVNBJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdDYXJsb3MgVG94dGxpLCBKdWFuIFBhYmxvIENhc3RpbGxvLCBBbGJlcnRvIENhbXBvcywgQmVuamFtaW4gVi4gSGFucmFoYSwgS290YXJvIEhhcmEsIENocmlzIENhbGxpc29uLUJ1cmNoLCBKZWZmcmV5IEJpZ2hhbSwgS3Jpc3R5IE1pbGxhbmQsIEFiaWdhaWwgQWRhbXMsIFNhaXBoIFNhdmFnZSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBdLFxyXG4gICAgc2tpbGxzOiBbXHJcbiAgICAgICAgeyBuYW1lOiAnSmF2YVNjcmlwdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qYXZhc2NyaXB0LnN2ZycsIGN1cnJlbnQ6dHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1JlYWN0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3JlYWN0LnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdMYXJhdmVsJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2xhcmF2ZWwuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1R5cGVTY3JpcHQnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvdHlwZXNjcmlwdC1pY29uLnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdBbmd1bGFyJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2FuZ3VsYXItaWNvbi5zdmcnLCBjdXJyZW50OnRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdOb2RlLmpzJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL25vZGVqcy1pY29uLnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdNb25nb0RCJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL21vbmdvZGIuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ015U1FMJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL215c3FsLnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdHaXQnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvZ2l0LWljb24uc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0ppcmEnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvamlyYS5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSFRNTDUnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvaHRtbC01LnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdDU1MzJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2Nzcy0zLnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdKZW5raW5zJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2plbmtpbnMuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0phdmEnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvamF2YS5zdmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUG9zdGdyZVNRTCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9wb3N0Z3Jlc3FsLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdDIycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9jLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdHbycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9nby5zdmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUEhQJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3BocC5zdmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnU2FzcycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9zYXNzLnN2Zyd9LFxyXG4gICAgXSxcclxuICAgIGF3YXJkczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdIb25vcmFibGUgTWVudGlvbiBpbiB0aGUgSVQgQXNzb2NpYXRlIERlZ3JlZScsXHJcbiAgICAgICAgICAgIGxvZ286ICcuL2ltYWdlcy91dHIucG5nJyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdBZ3Vhc2NhbGllbnRlcywgTWV4aWNvJyxcclxuICAgICAgICAgICAgaXNzdWVyOiAnVW5pdmVyc2lkYWQgVGVjbm9sw7NnaWNhIGVsIFJldG/DsW8nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JlY29naW5pemVkIGFzIG9uZSBvZiB0aGUgYmVzdCBhdmVyYWdlcyBpbiB0aGUgSVQgYXNzb2NpYXRlIGRlZ3JlZSBjb3Vyc2VkIGZyb20gMjAxNyB0byAyMDE4JyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/ZmVhdHVyZT1wbGF5ZXJfZW1iZWRkZWQmdj1RUUw5UHB2TndSbycsXHJcbiAgICAgICAgICAgIGRhdGU6ICdKYW51YXJ5IDIwMTcgLSBEZWNlbWJlciAyMDE4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RhbGVudCBIYWNrYXRvbiBGaW5hbGlzdCcsXHJcbiAgICAgICAgICAgIGxvZ286ICcuL2ltYWdlcy90YWxlbnQucG5nJyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdHdWFkYWxhamFyYSwgTWV4aWNvJyxcclxuICAgICAgICAgICAgaXNzdWVyOiAnVGFsZW50IE5ldHdvcmsnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1RlYW0gZmluYWxpc3QgaW4gdGhlIFRhbGVudCBIYWNrYXRob24gMjAxOCwgZGV2ZWxvcGluZyBhIHdlYiBhcHBsaWNhdGlvbiB0aGF0IGFuYWxpemUgc2VudGltZW50cyBvZiBuZXdzIG9uIFR3aXR0ZXIgaW4gb3JkZXIgdG8gZmluZCBhbmQgY2xhc3NpZnkgZmFrZSBuZXdzJyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/ZmVhdHVyZT1wbGF5ZXJfZW1iZWRkZWQmdj1RUUw5UHB2TndSbycsXHJcbiAgICAgICAgICAgIGRhdGU6ICdBcHJpbCAyMDE4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1J1bWJvIGEgSmFww7NuJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3JlaS5wbmcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ1Rva3lvLCBKYXBhbicsXHJcbiAgICAgICAgICAgIGlzc3VlcjogJ1RhbGVudCBOZXR3b3JrJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdXaW5uZXIgb2YgdGhlIGBSdW1ibyBhIEphcMOzbmAgYXdhcmQgaW4gd2hpY2ggSSB3YXMgcmVjb2duaXplZCBhcyBvbmUgb2YgdGhlIDEwIHlvdW5nIHByb21pc2VzIG9mIHRoZSBzdGF0ZSwgdGhlbiBoYXZpbmcgbWVldGluZ3Mgd2l0aCBhdXRob3JpdGllcyB0aHJvdWdoIGRpZmZlcmVudCBwbGFjZXMgYXQgSmFwYW4gJyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/ZmVhdHVyZT1wbGF5ZXJfZW1iZWRkZWQmdj1RUUw5UHB2TndSbycsXHJcbiAgICAgICAgICAgIGRhdGU6ICdBcHJpbCAyMDE0J1xyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbGFuZ3VhZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXHJcbiAgICAgICAgICAgIGxldmVsOiAnUHJvZmVzc2lvbmFsIHdvcmtpbmcgcHJvZmljaWVuY3knXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTcGFuaXNoJyxcclxuICAgICAgICAgICAgbGV2ZWw6ICdOYXRpdmUgb3IgYmlsaW5ndWFsIHByb2ZpY2llbmN5J1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBjb250YWN0OiBbXHJcbiAgICAgICAgeyBuYW1lOiAnQWxiZXJ0byBDYW1wb3MnLCBpY29uOiAnLi9pbWFnZXMvbGlua2VkaW4ucG5nJywgbGluazogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGJlcnRvY2FtcG9zaC8nIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYWNhbXBvc2hkJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dpdGh1Yi1pY29uLnN2ZycsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYWNhbXBvc2hkJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2FsYmVydG9jYW1wb3NoZGV6QGhvdG1haWwuY29tJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dvb2dsZS1nbWFpbC5zdmcnLCBsaW5rOiAnbWFpbHRvOmFsYmVydG9jYW1wb3NoZGV6QGhvdG1haWwuY29tJyB9LFxyXG4gICAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgd2l0aEdBIGZyb20gJ25leHQtZ2EnO1xyXG5cclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhJztcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmllbmNlJztcclxuaW1wb3J0IEVkdWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2VkdWNhdGlvbic7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24nO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvc2tpbGxzJztcclxuaW1wb3J0IExhbmd1YWdlcyBmcm9tICcuLi9jb21wb25lbnRzL2xhbmd1YWdlcyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCc7XHJcbmltcG9ydCBBd2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9hd2FyZHMnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUHVibGljYXRpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvcHVibGljYXRpb25zJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IChcclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9keSwgaDIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwuMSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLlJlc3VtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5SZXN1bWUtbWFpbntcclxuICAgICAgICAgICAgZmxleDogMiA1MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5SZXN1bWUtc2lkZWJhcntcclxuICAgICAgICAgICAgZmxleDogMSAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG4pO1xyXG5cclxuY29uc3QgUmVzdW1lID0gKCkgPT4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57ZGF0YS5pbnRyb2R1Y3Rpb24ubmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLmludHJvZHVjdGlvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi4vZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIuL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiLi9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiLi9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2RhNTMyY1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCI+PC9tZXRhPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SW50cm9kdWN0aW9uIGRhdGE9e2RhdGEuaW50cm9kdWN0aW9ufSAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZS1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8RXhwZXJpZW5jZSBkYXRhPXtkYXRhLmV4cGVyaWVuY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uIGRhdGE9e2RhdGEuZWR1Y2F0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPFB1YmxpY2F0aW9ucyBkYXRhPXtkYXRhLnB1YmxpY2F0aW9uc30vPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZS1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIGRhdGE9e2RhdGEuc2tpbGxzLmZpbHRlcihza2lsbCA9PiBza2lsbC5jdXJyZW50KX0gdGl0bGU9XCJDdXJyZW50IFN0YWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17ZGF0YS5za2lsbHMuZmlsdGVyKHNraWxsID0+ICFza2lsbC5jdXJyZW50KX0gdGl0bGU9XCJJIEhhdmUgVXNlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VzIGRhdGE9e2RhdGEubGFuZ3VhZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgPEF3YXJkcyBkYXRhPXtkYXRhLmF3YXJkc30gLz5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0IGRhdGE9e2RhdGEuY29udGFjdH0gLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7c3R5bGVzfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEdBKHByb2Nlc3MuZW52LkdBX0lELCBSb3V0ZXIpKFJlc3VtZSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1nYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
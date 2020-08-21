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
    className: "jsx-2217728907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Awards"), __jsx("article", {
    className: "jsx-2217728907" + " " + "Award",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, data.map((award, index) => __jsx("div", {
    key: `award_${index}`,
    className: "jsx-2217728907" + " " + "Award-award",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2217728907" + " " + "Award-award-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: award.logo,
    alt: award.issuer,
    className: "jsx-2217728907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }), __jsx("span", {
    className: "jsx-2217728907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, award.location)), __jsx("h5", {
    className: "jsx-2217728907" + " " + "Award-award-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, award.title, award.link && __jsx("a", {
    href: award.link,
    target: "_blank",
    className: "jsx-2217728907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, " ", __jsx("img", {
    src: "https://img.icons8.com/officexs/16/000000/external-link.png",
    className: "jsx-2217728907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 67
    }
  }))), __jsx("p", {
    className: "jsx-2217728907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, award.description), __jsx("span", {
    className: "jsx-2217728907" + " " + "Award-award-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, award.date)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2217728907",
    __self: undefined
  }, ".Award.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,0.2);padding:0 1rem;padding-bottom:3rem;}.Award-award.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:2rem 0;}.Award-award-title.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Award-award-date.jsx-2217728907{font-size:1rem;margin:0 1rem;}.Award-award-place.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin:0.5rem 0;}.Award-award-place.jsx-2217728907 img.jsx-2217728907{max-height:80px;max-width:140px;justify-self:center;}.Award-award-place.jsx-2217728907 span.jsx-2217728907{margin-left:1rem;}.Award-award-date.jsx-2217728907{opacity:0.8;font-size:0.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGF3YXJkcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJTLEFBRzBCLEFBT0EsQUFLQSxBQU1FLEFBS0YsQUFNRyxBQU1DLEFBR0wsWUFDSyxHQXBCSCxDQVdFLENBTWxCLFlBaEJBLEFBb0JzQixHQVRBLG9CQUN0QixzQkEvQndCLEFBT0EsQUFLRCxBQVdBLDJCQWlCdkIsbURBdkNtRCxBQU9uQyxjQUNoQixTQUlnQyxBQVdkLGdCQUNsQixPQXZCaUIsZUFDSyxvQkFDdEIseURBVUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxGUy0xNjEyXFxEb2N1bWVudHNcXHByb2plY3RzXFxteS1jdlxcY29tcG9uZW50c1xcYXdhcmRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBd2FyZCB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBBd2FyZHNQcm9wcyB7XHJcbiAgZGF0YTogSUF3YXJkW107XHJcbn1cclxuXHJcbmNvbnN0IEF3YXJkcyA9ICh7IGRhdGEgfTogQXdhcmRzUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgzPkF3YXJkczwvaDM+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkF3YXJkXCI+XHJcbiAgICAgICAge2RhdGEubWFwKChhd2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtgYXdhcmRfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2F3YXJkLmxvZ299IGFsdD17YXdhcmQuaXNzdWVyfSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnthd2FyZC5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7YXdhcmQudGl0bGV9XHJcbiAgICAgICAgICAgICAge2F3YXJkLmxpbmsmJiA8YSBocmVmPXthd2FyZC5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZXhzLzE2LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz48L2E+fVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8cD57YXdhcmQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZC1kYXRlXCI+e2F3YXJkLmRhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLkF3YXJkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLWRhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1kYXRlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBd2FyZHM7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\awards.tsx */"));
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
    className: "jsx-739814721",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Education & Courses"), __jsx("article", {
    className: "jsx-739814721" + " " + "Education",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map((entity, index) => __jsx("div", {
    key: `entity_${index}`,
    className: "jsx-739814721" + " " + "Education-entity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "jsx-739814721" + " " + "Education-entity-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: entity.logo,
    alt: entity.name,
    className: "jsx-739814721",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), __jsx("h6", {
    className: "jsx-739814721" + " " + "Education-entity-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  }, entity.name, " ", __jsx("span", {
    className: "jsx-739814721" + " " + "Education-entity-duration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 85
    }
  }, entity.duration))), __jsx("div", {
    className: "jsx-739814721" + " " + "Education-entity-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, entity.title.map(singleTitle => __jsx("span", {
    className: "jsx-739814721" + " " + "Education-entity-subject Education-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, singleTitle.name, singleTitle.link && __jsx("a", {
    href: singleTitle.link,
    target: "_blank",
    className: "jsx-739814721" + " " + "Languages-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 133
    }
  }, " ", __jsx("img", {
    src: "https://img.icons8.com/officexs/16/000000/external-link.png",
    className: "jsx-739814721",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 205
    }
  })))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "739814721",
    __self: undefined
  }, ".Education.jsx-739814721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:3rem;padding:0 1rem;}.Education-entity.jsx-739814721{margin:1rem 0;}.Education-title.jsx-739814721{margin-bottom:5px;}.Education-entity-place.jsx-739814721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Education-entity.jsx-739814721 img.jsx-739814721{max-height:45px;max-width:80px;}.Education-entity-name.jsx-739814721{margin-left:.5rem;}.Education-entity-details.jsx-739814721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:.5rem;}.Education-entity-duration.jsx-739814721{opacity:.8;font-size:.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGVkdWNhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJpQixBQUdzQyxBQU9DLEFBR0csQUFJSixBQUtHLEFBS0UsQUFJTCxBQU1GLFdBQ0ssR0EzQnBCLEVBWW1CLEVBVG5CLEFBY0EsU0FXd0IsSUFmeEIsMkNBcEIwQixBQWNILEFBY0cseUJBUTFCLHFEQW5Dd0IsQUE0QkgsZUFkckIsRUFlQSxHQTVCbUIsZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxGUy0xNjEyXFxEb2N1bWVudHNcXHByb2plY3RzXFxteS1jdlxcY29tcG9uZW50c1xcZWR1Y2F0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTY2hvb2xFbnRpdHkgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgRWR1Y2F0aW9uUHJvcHMge1xyXG4gICAgZGF0YTogSVNjaG9vbEVudGl0eVtdO1xyXG59XHJcblxyXG5jb25zdCBFZHVjYXRpb24gPSAoeyBkYXRhIH06IEVkdWNhdGlvblByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5FZHVjYXRpb24gJiBDb3Vyc2VzPC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGVudGl0eSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BlbnRpdHlfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZW50aXR5LmxvZ299IGFsdD17ZW50aXR5Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktbmFtZVwiPntlbnRpdHkubmFtZX0gPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kdXJhdGlvblwiPntlbnRpdHkuZHVyYXRpb259PC9zcGFuPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudGl0eS50aXRsZS5tYXAoKHNpbmdsZVRpdGxlOmFueSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktc3ViamVjdCBFZHVjYXRpb24tdGl0bGVcIj57c2luZ2xlVGl0bGUubmFtZX17c2luZ2xlVGl0bGUubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17c2luZ2xlVGl0bGUubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHkgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWR1cmF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\education.tsx */"));
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
      columnNumber: 21
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
  }, work.company, " ", work.link && __jsx("a", {
    href: work.link,
    target: "_blank",
    className: "jsx-3347548585" + " " + "Languages-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 104
    }
  }, " ", __jsx("img", {
    src: "https://img.icons8.com/officexs/16/000000/external-link.png",
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 169
    }
  }))), __jsx("span", {
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
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGV4cGVyaWVuY2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFHc0MsQUFLQSxBQU1DLEFBR0QsQUFLRSxBQU9GLEFBTUcsQUFNSCxBQU1BLEFBTUEsQUFNRixXQUNRLEdBN0N2QixDQVNlLENBWUssY0F5QnBCLEVBdkJELFFBYnNCLFlBYXJCLEtBWkEsaUJBdEIwQixBQUtBLEFBU0QsQUFZRixBQVlHLEFBTVAsQUFNSSx5REFMSCxnQkFDcEIsS0E3Q21CLEFBS0EsQUFpQ0UsZUFyQ3JCLEFBS2tELEFBb0IvQixBQXdCRyxFQVh0QixNQXpCQSxPQWFBLEdBd0JBLDJCQTVDQSIsImZpbGUiOiJDOlxcVXNlcnNcXEZTLTE2MTJcXERvY3VtZW50c1xccHJvamVjdHNcXG15LWN2XFxjb21wb25lbnRzXFxleHBlcmllbmNlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElXb3JrIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEV4cGVyaWVuY2VQcm9wcyB7XHJcbiAgICBkYXRhOiBJV29ya1tdO1xyXG59XHJcblxyXG5jb25zdCBFeHBlcmllbmNlID0gKHsgZGF0YSB9OiBFeHBlcmllbmNlUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkV4cGVyaWVuY2U8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHdvcmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgd29ya18ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29ya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBvc2l0aW9uXCI+e3dvcmsudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57d29yay5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dvcmsubG9nb30gYWx0PXt3b3JrLmNvbXBhbnl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWNvbXBhbnlcIj57d29yay5jb21wYW55fSB7d29yay5saW5rJiY8YSBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGlua3NcIiBocmVmPXt3b3JrLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPiA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vb2ZmaWNleHMvMTYvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPjwvYT59PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWxvY2F0aW9uXCI+e3dvcmsubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrLmRlc2NyaXB0aW9uLm1hcCgocG9pbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Bwb2ludF8ke2luZGV4fWB9ID57cG9pbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1zdGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3b3JrLnN0YWNrLm1hcCgodG9vbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstdG9vbFwiIGtleT17YHRvb2xfJHtpbmRleH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dG9vbC5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Rvb2wubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1zdGFja3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2wgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\experience.tsx */"));
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
    className: "jsx-1906103043" + " " + "Introduction",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.avatar,
    className: "jsx-1906103043" + " " + "Introduction-avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1906103043" + " " + "Introduction-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-1906103043" + " " + "Introduction-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, data.name), __jsx("h2", {
    className: "jsx-1906103043" + " " + "Introduction-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, data.position), __jsx("p", {
    className: "jsx-1906103043" + " " + "Introduction-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, data.description), __jsx("span", {
    className: "jsx-1906103043" + " " + "Introduction-location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, data.location))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1906103043",
    __self: undefined
  }, ".Introduction.jsx-1906103043{background-color:rgba(200,200,200,.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3rem 0;margin:0 1rem;}.Introduction-avatar.jsx-1906103043{width:200px;height:200px;padding:0 2rem;border-radius:50%;margin:auto;}.Introduction-wrapper.jsx-1906103043{padding:1rem 2rem;-webkit-flex:1 350px;-ms-flex:1 350px;flex:1 350px;}.Introduction-name.jsx-1906103043{font-size:3rem;}.Introduction-title.jsx-1906103043{font-size:1.2rem;margin-top:.5rem;}.Introduction-qr.jsx-1906103043{float:right;width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGludHJvZHVjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUcrRCxBQVExQixBQU9NLEFBSUgsQUFHRSxBQUlOLFlBakJFLEFBa0JGLEdBUGYsRUFHcUIsQ0FQSixNQWFsQixBQUFDLENBbkJtQixTQWNuQixJQXZCaUIsRUFVSyxrQkFDTixXQUtoQixDQUpBLDBDQVhrQyxtSEFDZix5REFDQSxlQUNELGNBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGludHJvZHVjdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJSW50cm9kdWN0aW9uIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEludHJvZHVjdGlvblByb3BzIHtcclxuICAgIGRhdGE6IElJbnRyb2R1Y3Rpb247XHJcbn1cclxuXHJcbmNvbnN0IEludHJvZHVjdGlvbiA9ICh7IGRhdGEgfTogSW50cm9kdWN0aW9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1hdmF0YXJcIiBzcmM9e2RhdGEuYXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tbmFtZVwiPntkYXRhLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLXRpdGxlXCI+e2RhdGEucG9zaXRpb259PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tZGVzY3JpcHRpb25cIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tcXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHB4OlxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWN0aW9uOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\introduction.tsx */"));
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
    className: "jsx-560535691",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Languages"), __jsx("article", {
    className: "jsx-560535691" + " " + "Languages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, data.map((language, index) => __jsx("div", {
    key: `language_${index}`,
    className: "jsx-560535691" + " " + "Languages-language",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("h6", {
    className: "jsx-560535691" + " " + "Languages-language-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, " ", language.name, " ", language.link && __jsx("a", {
    href: language.link,
    target: "_blank",
    className: "jsx-560535691" + " " + "Languages-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 86
    }
  }, " ", __jsx("img", {
    src: "https://img.icons8.com/officexs/16/000000/external-link.png",
    className: "jsx-560535691",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 155
    }
  }))), __jsx("span", {
    className: "jsx-560535691" + " " + "Languages-language-level",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, language.level)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "560535691",
    __self: undefined
  }, ".Languages.jsx-560535691{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,0.2);padding:0 1rem;padding-bottom:3rem;}.Languages-language.jsx-560535691{margin:0.5rem 0;}.Languages-links.jsx-560535691{color:blue;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXGxhbmd1YWdlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJTLEFBRzBCLEFBT0csQUFHTCxXQUNJLEtBSGpCLFVBSUEsZ0RBWHdCLDhFQUMyQiw4Q0FDbEMsZUFDSyxvQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxGUy0xNjEyXFxEb2N1bWVudHNcXHByb2plY3RzXFxteS1jdlxcY29tcG9uZW50c1xcbGFuZ3VhZ2VzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMYW5ndWFnZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBMYW5ndWFnZXNQcm9wcyB7XHJcbiAgZGF0YTogSUxhbmd1YWdlW107XHJcbn1cclxuXHJcbmNvbnN0IExhbmd1YWdlcyA9ICh7IGRhdGEgfTogTGFuZ3VhZ2VzUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgzPkxhbmd1YWdlczwvaDM+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkxhbmd1YWdlc1wiPlxyXG4gICAgICAgIHtkYXRhLm1hcCgobGFuZ3VhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YGxhbmd1YWdlXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGFuZ3VhZ2UtbmFtZVwiPiB7bGFuZ3VhZ2UubmFtZX0ge2xhbmd1YWdlLmxpbmsmJjxhIGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1saW5rc1wiIGhyZWY9e2xhbmd1YWdlLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPiA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vb2ZmaWNleHMvMTYvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPjwvYT59PC9oNj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlLWxldmVsXCI+e2xhbmd1YWdlLmxldmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5MYW5ndWFnZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkxhbmd1YWdlcy1sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuTGFuZ3VhZ2VzLWxpbmtzIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\languages.tsx */"));
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
      columnNumber: 29
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
  }, publication.company, publication.link && __jsx("a", {
    href: publication.link,
    target: "_blank",
    className: "jsx-3347548585" + " " + "Languages-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 117
    }
  }, " ", __jsx("img", {
    src: "https://img.icons8.com/officexs/16/000000/external-link.png",
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 189
    }
  }))), __jsx("span", {
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
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdzQyxBQUtBLEFBTUMsQUFHRCxBQUtFLEFBT0YsQUFNRyxBQU1ILEFBTUEsQUFNQSxBQU1GLFdBQ1EsR0E3Q3ZCLENBU2UsQ0FZSyxjQXlCcEIsRUF2QkQsUUFic0IsWUFhckIsS0FaQSxpQkF0QjBCLEFBS0EsQUFTRCxBQVlGLEFBWUcsQUFNUCxBQU1JLHlEQUxILGdCQUNwQixLQTdDbUIsQUFLQSxBQWlDRSxlQXJDckIsQUFLa0QsQUFvQi9CLEFBd0JHLEVBWHRCLE1BekJBLE9BYUEsR0F3QkEsMkJBNUNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJV29yaywgSVB1YmxpY2F0aW9ucyB9IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgUHVibGljYXRpb25zUHJvcHMge1xyXG4gICAgZGF0YTogSVB1YmxpY2F0aW9uc1tdO1xyXG59XHJcblxyXG5jb25zdCBQdWJsaWNhdGlvbnMgPSAoeyBkYXRhIH06IFB1YmxpY2F0aW9uc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5QdWJsaWNhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHB1YmxpY2F0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHB1YmxpY2F0aW9uXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPntwdWJsaWNhdGlvbi50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kdXJhdGlvblwiPntwdWJsaWNhdGlvbi5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3B1YmxpY2F0aW9uLmxvZ299IGFsdD17cHVibGljYXRpb24uY29tcGFueX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWNvbXBhbnlcIj57cHVibGljYXRpb24uY29tcGFueX17cHVibGljYXRpb24ubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17cHVibGljYXRpb24ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57cHVibGljYXRpb24ubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdWJsaWNhdGlvbi5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgcG9pbnRfJHtpbmRleH1gfSA+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstc3RhY2tcIj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1zdGFja3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2wgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25zOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\components\\\\publications.tsx */"));
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
    description: ['Full-stack development of the landing page, REST API and internship admin', "Development of ML models for predictions, then connect those to the Laravel's REST API", "Integration of the REST API with the React and Angular projects", "Configuration of Jenkins and pipelines to deploy the GitLab Repositories", 'Involved into the planning/designing phase for the applications.'],
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
    }],
    link: "https://thincrs.com/"
  }, {
    title: 'Full-Stack Developer',
    company: 'Universidad Tecnológica de Aguascalientes',
    logo: './images/utags.png',
    duration: 'January 2019 - Present',
    location: 'Aguascalientes, México',
    description: ['Full-stack development for different projects using the MEAN and MEIN stacks', 'Leader of different teams', 'Subject teacher of multi-platform application development', 'Involved into the planning/designing phase for the applications.'],
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
      name: 'Bootstrap',
      icon: 'https://cdn.svgporn.com/logos/bootstrap.svg'
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
    title: [{
      name: 'Information Technologies Engineering Degree'
    }],
    duration: '2019 - 2020'
  }, {
    name: 'Universidad Tecnológica el Retoño',
    logo: './images/utr.png',
    title: [{
      name: 'Information Technologies Associate Degree'
    }],
    duration: '2016 - 2018'
  }, {
    name: 'Massachusetts Institute of Technology',
    logo: './images/mit.svg',
    title: [{
      name: 'Digital Transformation Course',
      link: 'https://drive.google.com/file/d/1mLq9PracAVlS_jGonx4NOPMuSInTR3g0/view?usp=sharing'
    }],
    duration: '2020'
  }, {
    name: 'Algonquin College of Applied Arts and Technology',
    logo: './images/ac.png',
    title: [{
      name: 'Computer Science Course'
    }],
    duration: 'September 2019 - December 2019'
  }, {
    name: 'Pima Community College',
    logo: './images/pima.png',
    title: [{
      name: 'Business Management Course'
    }],
    duration: 'August 2016 - December 2016'
  }, {
    name: 'Universidad Autónoma de Aguascalientes',
    logo: './images/uaa.jpg',
    title: [{
      name: 'Android Development Course'
    }],
    duration: 'March 2018 - June 2018'
  }, {
    name: 'Linkedin Learning',
    logo: 'https://cdn.svgporn.com/logos/linkedin.svg',
    title: [{
      name: 'Visual Studio Code',
      link: 'https://drive.google.com/file/d/1d4fwyjpDkaku49nkpvrslnZzh3bUkrRU/view?usp=sharing'
    }],
    duration: '2019'
  }, {
    name: '',
    logo: './images/platzi.png',
    title: [{
      name: 'Carrera Bases de Datos',
      link: "https://drive.google.com/file/d/1ykl1lhA9PAFY4SswFHnOVP77bTQafl_s/view?usp=sharing"
    }, {
      name: 'Carrera Escuela de Inglés',
      link: "https://drive.google.com/file/d/1_QInJ20Q8-cQL3UP3Gv1AYK9GrMlue7U/view?usp=sharing"
    }, {
      name: 'Carrera Desarrollo Backend con Go',
      link: "https://drive.google.com/file/d/1k5JvGKuqDJs4y6AEjOa4KPOnGav9l_6x/view?usp=sharing"
    }, {
      name: 'Curso de Java SE',
      link: "https://drive.google.com/file/d/1du9GL1WuQUxHVV2g2qfKBh4_MMy0dM34/view?usp=sharing"
    }, {
      name: 'Curso de Go',
      link: "https://drive.google.com/file/d/16K82p7zcTB2q7Rg2ZVijWu00l23Y12F1/view?usp=sharing"
    }, {
      name: 'Curso de MongoDB',
      link: "https://drive.google.com/file/d/199HYQkywELbg6Vjcs0-Uu8FnEcqiQzIl/view?usp=sharing"
    }, {
      name: 'Curso de Buenas Prácticas',
      link: "https://drive.google.com/file/d/1h3tjSbAI5iR19MmeBKXUfw21IhQvGoTg/view?usp=sharing"
    }, {
      name: 'Curso de HTML Y CSS',
      link: "https://drive.google.com/file/d/1CDvBQhLxaLGKGril1Qh4OC042ftlQgfk/view?usp=sharing"
    }, {
      name: 'Curso de Seguridad Informática',
      link: "https://drive.google.com/file/d/13WR_pUUhF2HdAtiSDh98IPKUFfYcRT3F/view?usp=sharing"
    }, {
      name: 'Curso de PHP con Laravel',
      link: "https://drive.google.com/file/d/1xoYfitKYbzfGeXt2Km96GQqSFySntJe_/view?usp=sharing"
    }, {
      name: 'Curso de POO',
      link: "https://drive.google.com/file/d/17yGlcp-bfF-z0IQ3LupbESaRKbVixN18/view?usp=sharing"
    }, {
      name: 'Curso de Redes de Internet',
      link: "https://drive.google.com/file/d/17DvfvnblWyTMzXAkcdR3iu2yNPApU1Vb/view?usp=sharing"
    }, {
      name: 'Curso de SCRUM',
      link: "https://drive.google.com/file/d/1B0ZLkBKKt-3eTgcLfu8WeftTxh5o4Hqq/view?usp=sharing"
    }, {
      name: 'Curso de SQL y MySQL',
      link: "https://drive.google.com/file/d/1hI3P6lFFxy1jMpTYOjyClrX09FGgUYfz/view?usp=sharing"
    }, {
      name: 'Curso de Bases de Datos',
      link: "https://drive.google.com/file/d/1QP1fXI-DWCUb-wWKkA7jpi28h4MhLAFc/view?usp=sharing"
    }, {
      name: 'Curso de Línea de Comandos',
      link: "https://drive.google.com/file/d/1TwWhbGH5YM2gewWqri0VZ5-tyVgqkESx/view?usp=sharing"
    }, {
      name: 'Curso de Google Cloud Platform',
      link: "https://drive.google.com/file/d/1ILwXNzlSDcIODnShOxWcxs-ekE6k27Yy/view?usp=sharing"
    }],
    duration: '2019 - 2020',
    credentialLink: 'https://drive.google.com/drive/folders/1wJ1mw0QJXFJt7gd4t79lq1_3s90u8PF6?usp=sharing'
  }, {
    name: '',
    logo: './images/mongou.png',
    title: [{
      name: 'MongoDB Basics',
      link: 'https://drive.google.com/file/d/1l1Sz3XH7WRcCfPFAHeBceLEa99VJVdhg/view?usp=sharing'
    }],
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
    name: 'Ionic',
    icon: 'https://cdn.svgporn.com/logos/ionic.svg',
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
    name: 'Bootstrap',
    icon: 'https://cdn.svgporn.com/logos/bootstrap.svg',
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
  }, {
    name: 'Zeit',
    icon: 'https://cdn.svgporn.com/logos/zeit-icon.svg'
  }],
  awards: [{
    title: 'Honorable Mention in the IT Associate Degree',
    logo: './images/utr.png',
    location: 'Aguascalientes, Mexico',
    issuer: 'Universidad Tecnológica el Retoño',
    description: 'Recoginized as one of the best grades in the IT associate degree coursed from 2016 to 2018',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'September 2016 - December 2018'
  }, {
    title: 'Talent Hackaton Finalist',
    logo: './images/talent.png',
    location: 'Guadalajara, Mexico',
    issuer: 'Talent Network',
    description: 'Part of the team finalist in the Talent Hackathon 2018, developing a web application that analize sentiments of news on Twitter in order to find and classify fake news',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'April 2018'
  }, {
    title: 'Agua Hackaton CFOX',
    logo: './images/cfox.png',
    location: 'Guanajuato, Mexico',
    issuer: 'Centro Fox',
    description: 'Part of the TOP 10 projects with a mobile application that helps to control how much water you spend and give tips to improve its use.',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'April 2018'
  }, {
    title: 'Rumbo a Japón',
    logo: './images/rei.png',
    location: 'Tokyo, Japan',
    issuer: 'Talent Network',
    description: 'Winner of the `Rumbo a Japón` award in which I was recognized as one of the 10 young promises of the state, then having meetings with authorities through different cities at Japan ',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'April 2014'
  }],
  languages: [{
    name: 'English',
    level: 'Professional working proficiency',
    link: 'https://drive.google.com/file/d/1MstZQcQz7T6Kh6_vtqMAPDwn1jEKBOFa/view?usp=sharing'
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
  id: "2761518401",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');body,h1,h2,h3,h4,h5,h6{border:0;padding:0;margin:0;}body,h2{font-family:'Roboto',sans-serif;font-weight:300;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}h1{font-weight:500;}h3{font-size:2rem;font-weight:400;margin:2rem 0;background-color:rgba(200,200,200,.1);padding:1rem;}h4{font-size:1.7rem;font-weight:500;}h5{font-weight:400;font-size:1.5rem;}h6{font-weight:400;font-size:1.2rem;}p{max-width:800px;}.Resume{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1rem;width:100vw;max-width:1340px;margin:auto;box-sizing:border-box;}.Resume-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Resume-main{-webkit-flex:2 520px;-ms-flex:2 520px;flex:2 520px;margin:0 1rem;}.Resume-sidebar{-webkit-flex:1 100px;-ms-flex:1 100px;flex:1 100px;margin:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xcbXktY3ZcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J1QixBQUUrRixBQUV6RSxBQU13QixBQUlaLEFBSUwsQUFHRCxBQU9FLEFBSUQsQUFJQSxBQUlBLEFBSUgsQUFTQSxBQUtBLEFBSUEsU0F6REgsTUFpQk0sQ0FIcEIsQUFjcUIsQUFJQSxBQUlyQixDQVpvQixFQXZCUCxTQUNiLEdBZ0JrQixDQVpFLENBbUJwQixBQUlBLEFBSUEsWUFkMEMsR0FaMUMsRUFHZ0IsQ0E0Q0UsQUFJQSxXQS9DbEIsR0E0Q0EsQUFJQSxTQW5CMEIsQUFTUCxTQTdCRixhQUNqQixtQ0E4QkQscUJBVnVCLGtCQUNOLFlBQ0ssaUJBQ0wsWUFDVSxzQkFDMUIsYUFLQSIsImZpbGUiOiJDOlxcVXNlcnNcXEZTLTE2MTJcXERvY3VtZW50c1xccHJvamVjdHNcXG15LWN2XFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB3aXRoR0EgZnJvbSAnbmV4dC1nYSc7XHJcblxyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEnO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvZHVjdGlvbic7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9za2lsbHMnO1xyXG5pbXBvcnQgTGFuZ3VhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0IEF3YXJkcyBmcm9tICcuLi9jb21wb25lbnRzL2F3YXJkcyc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBQdWJsaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9wdWJsaWNhdGlvbnMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwOyBcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBib2R5LCBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC4xKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAuUmVzdW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTM0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5SZXN1bWUtY29udGVudHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1tYWlue1xyXG4gICAgICAgICAgICBmbGV4OiAyIDUyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1zaWRlYmFye1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcbik7XHJcblxyXG5jb25zdCBSZXN1bWUgPSAoKSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWVcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntkYXRhLmludHJvZHVjdGlvbi5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEuaW50cm9kdWN0aW9uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiLi9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi4vZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIuL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIuL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZGE1MzJjXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIj48L21ldGE+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxJbnRyb2R1Y3Rpb24gZGF0YT17ZGF0YS5pbnRyb2R1Y3Rpb259IC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLW1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxFeHBlcmllbmNlIGRhdGE9e2RhdGEuZXhwZXJpZW5jZX0gLz5cclxuICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gZGF0YT17ZGF0YS5lZHVjYXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICA8UHVibGljYXRpb25zIGRhdGE9e2RhdGEucHVibGljYXRpb25zfS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLXNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17ZGF0YS5za2lsbHMuZmlsdGVyKHNraWxsID0+IHNraWxsLmN1cnJlbnQpfSB0aXRsZT1cIkN1cnJlbnQgU3RhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFNraWxscyBkYXRhPXtkYXRhLnNraWxscy5maWx0ZXIoc2tpbGwgPT4gIXNraWxsLmN1cnJlbnQpfSB0aXRsZT1cIkkgSGF2ZSBVc2VkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYW5ndWFnZXMgZGF0YT17ZGF0YS5sYW5ndWFnZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8QXdhcmRzIGRhdGE9e2RhdGEuYXdhcmRzfSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3QgZGF0YT17ZGF0YS5jb250YWN0fSAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIHtzdHlsZXN9XHJcbiAgICA8L3NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoR0EocHJvY2Vzcy5lbnYuR0FfSUQsIFJvdXRlcikoUmVzdW1lKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\my-cv\\\\pages\\\\index.tsx */");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hd2FyZHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lZHVjYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1YmxpY2F0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9za2lsbHMudHN4Iiwid2VicGFjazovLy8uL2RhdGEvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1nYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXdhcmRzIiwiZGF0YSIsIm1hcCIsImF3YXJkIiwiaW5kZXgiLCJsb2dvIiwiaXNzdWVyIiwibG9jYXRpb24iLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJDb250YWN0IiwiY29udGFjdCIsImljb24iLCJuYW1lIiwiRWR1Y2F0aW9uIiwiZW50aXR5IiwiZHVyYXRpb24iLCJzaW5nbGVUaXRsZSIsIkV4cGVyaWVuY2UiLCJ3b3JrIiwiY29tcGFueSIsInBvaW50Iiwic3RhY2siLCJ0b29sIiwiSW50cm9kdWN0aW9uIiwiYXZhdGFyIiwicG9zaXRpb24iLCJMYW5ndWFnZXMiLCJsYW5ndWFnZSIsImxldmVsIiwiUHVibGljYXRpb25zIiwicHVibGljYXRpb24iLCJTa2lsbHMiLCJza2lsbCIsIlJlc3VtZSIsImludHJvZHVjdGlvbiIsImV4cGVyaWVuY2UiLCJlZHVjYXRpb24iLCJjcmVkZW50aWFsTGluayIsInB1YmxpY2F0aW9ucyIsInNraWxscyIsImN1cnJlbnQiLCJhd2FyZHMiLCJsYW5ndWFnZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJ3aXRoR0EiLCJwcm9jZXNzIiwiZW52IiwiR0FfSUQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUEyQjtBQUN4QyxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFBO0FBQUEsRUFGSixFQUdJLE1BQUMsOERBQUQ7QUFBVyxNQUFJLEVBQUUxQyxrREFBSSxDQUFDNEMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhKLEVBSUksTUFBQywyREFBRDtBQUFRLE1BQUksRUFBRTVDLGtEQUFJLENBQUMyQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSkosRUFLSSxNQUFDLDREQUFEO0FBQVMsTUFBSSxFQUFFM0Msa0RBQUksQ0FBQ1ksT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxKLENBTkosQ0FiSixFQTJCS2lDLE1BM0JMLENBREo7O0FBZ0NlRSw2R0FBTSxDQUFDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBYixFQUFvQkMsa0RBQXBCLENBQU4sQ0FBa0NoQixNQUFsQyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDcEhBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBJQXdhcmQgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQXdhcmRzUHJvcHMge1xyXG4gIGRhdGE6IElBd2FyZFtdO1xyXG59XHJcblxyXG5jb25zdCBBd2FyZHMgPSAoeyBkYXRhIH06IEF3YXJkc1Byb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMz5Bd2FyZHM8L2gzPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJBd2FyZFwiPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoYXdhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YGF3YXJkXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZC1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthd2FyZC5sb2dvfSBhbHQ9e2F3YXJkLmlzc3Vlcn0gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj57YXdhcmQubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge2F3YXJkLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHthd2FyZC5saW5rJiYgPGEgaHJlZj17YXdhcmQubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn1cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPHA+e2F3YXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtZGF0ZVwiPnthd2FyZC5kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5Bd2FyZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuQXdhcmQtYXdhcmQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1kYXRlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuQXdhcmQtYXdhcmQtZGF0ZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXdhcmRzO1xyXG4iLCJpbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBDb250YWN0c1Byb3BzIHtcclxuICAgIGRhdGE6IElDb250YWN0W107XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoeyBkYXRhIH06IENvbnRhY3RzUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkNvbnRhY3Q8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJDb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGNvbnRhY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFjdC10eXBlXCIga2V5PXtgc2tpbGxfJHtpbmRleH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y29udGFjdC5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y29udGFjdC5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57Y29udGFjdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuQ29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuQ29udGFjdC10eXBle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQ29udGFjdC10eXBlIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuQ29udGFjdC10eXBlIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImltcG9ydCB7IElTY2hvb2xFbnRpdHkgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgRWR1Y2F0aW9uUHJvcHMge1xyXG4gICAgZGF0YTogSVNjaG9vbEVudGl0eVtdO1xyXG59XHJcblxyXG5jb25zdCBFZHVjYXRpb24gPSAoeyBkYXRhIH06IEVkdWNhdGlvblByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5FZHVjYXRpb24gJiBDb3Vyc2VzPC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGVudGl0eSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BlbnRpdHlfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZW50aXR5LmxvZ299IGFsdD17ZW50aXR5Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktbmFtZVwiPntlbnRpdHkubmFtZX0gPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kdXJhdGlvblwiPntlbnRpdHkuZHVyYXRpb259PC9zcGFuPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudGl0eS50aXRsZS5tYXAoKHNpbmdsZVRpdGxlOmFueSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktc3ViamVjdCBFZHVjYXRpb24tdGl0bGVcIj57c2luZ2xlVGl0bGUubmFtZX17c2luZ2xlVGl0bGUubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17c2luZ2xlVGl0bGUubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHkgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWR1cmF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjsiLCJpbXBvcnQgeyBJV29yayB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBFeHBlcmllbmNlUHJvcHMge1xyXG4gICAgZGF0YTogSVdvcmtbXTtcclxufVxyXG5cclxuY29uc3QgRXhwZXJpZW5jZSA9ICh7IGRhdGEgfTogRXhwZXJpZW5jZVByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5FeHBlcmllbmNlPC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKCh3b3JrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHdvcmtfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPnt3b3JrLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uXCI+e3dvcmsuZHVyYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt3b3JrLmxvZ299IGFsdD17d29yay5jb21wYW55fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3dvcmsuY29tcGFueX0ge3dvcmsubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17d29yay5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZXhzLzE2LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz48L2E+fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1sb2NhdGlvblwiPnt3b3JrLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgcG9pbnRfJHtpbmRleH1gfSA+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstc3RhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5zdGFjay5tYXAoKHRvb2wsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXRvb2xcIiBrZXk9e2B0b29sXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Rvb2wuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b29sLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yazpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstc3RhY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29sIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7IiwiaW1wb3J0IHsgSUludHJvZHVjdGlvbiB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBJbnRyb2R1Y3Rpb25Qcm9wcyB7XHJcbiAgICBkYXRhOiBJSW50cm9kdWN0aW9uO1xyXG59XHJcblxyXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoeyBkYXRhIH06IEludHJvZHVjdGlvblByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tYXZhdGFyXCIgc3JjPXtkYXRhLmF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLW5hbWVcIj57ZGF0YS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi10aXRsZVwiPntkYXRhLnBvc2l0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWRlc2NyaXB0aW9uXCI+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1sb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5sb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMzUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLXFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDBweDpcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvZHVjdGlvbjsiLCJpbXBvcnQgeyBJTGFuZ3VhZ2UgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgTGFuZ3VhZ2VzUHJvcHMge1xyXG4gIGRhdGE6IElMYW5ndWFnZVtdO1xyXG59XHJcblxyXG5jb25zdCBMYW5ndWFnZXMgPSAoeyBkYXRhIH06IExhbmd1YWdlc1Byb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMz5MYW5ndWFnZXM8L2gzPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJMYW5ndWFnZXNcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKGxhbmd1YWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2BsYW5ndWFnZV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlLW5hbWVcIj4ge2xhbmd1YWdlLm5hbWV9IHtsYW5ndWFnZS5saW5rJiY8YSBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGlua3NcIiBocmVmPXtsYW5ndWFnZS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZXhzLzE2LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz48L2E+fTwvaDY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZS1sZXZlbFwiPntsYW5ndWFnZS5sZXZlbH08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuTGFuZ3VhZ2VzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5MYW5ndWFnZXMtbGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkxhbmd1YWdlcy1saW5rcyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZXM7XHJcbiIsImltcG9ydCB7IElXb3JrLCBJUHVibGljYXRpb25zIH0gZnJvbSAnLi4vZGF0YS9kYXRhJztcclxuXHJcbmludGVyZmFjZSBQdWJsaWNhdGlvbnNQcm9wcyB7XHJcbiAgICBkYXRhOiBJUHVibGljYXRpb25zW107XHJcbn1cclxuXHJcbmNvbnN0IFB1YmxpY2F0aW9ucyA9ICh7IGRhdGEgfTogUHVibGljYXRpb25zUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPlB1YmxpY2F0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgocHVibGljYXRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgcHVibGljYXRpb25fJHtpbmRleH1gfSBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBvc2l0aW9uXCI+e3B1YmxpY2F0aW9uLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uXCI+e3B1YmxpY2F0aW9uLmR1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHVibGljYXRpb24ubG9nb30gYWx0PXtwdWJsaWNhdGlvbi5jb21wYW55fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstY29tcGFueVwiPntwdWJsaWNhdGlvbi5jb21wYW55fXtwdWJsaWNhdGlvbi5saW5rJiY8YSBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGlua3NcIiBocmVmPXtwdWJsaWNhdGlvbi5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZXhzLzE2LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz48L2E+fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1sb2NhdGlvblwiPntwdWJsaWNhdGlvbi5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3B1YmxpY2F0aW9uLmRlc2NyaXB0aW9uLm1hcCgocG9pbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Bwb2ludF8ke2luZGV4fWB9ID57cG9pbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1zdGFja1wiPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcms6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXN0YWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNhdGlvbnM7IiwiaW1wb3J0IHsgSVNraWxsIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIFNraWxsc1Byb3BzIHtcclxuICAgIGRhdGE6IElTa2lsbFtdO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgU2tpbGxzID0gKHsgZGF0YSwgdGl0bGUgfTogU2tpbGxzUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJTa2lsbHNcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTa2lsbHMtc2tpbGxcIiBrZXk9e2Bza2lsbF8ke2luZGV4fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NraWxsLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntza2lsbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuU2tpbGxzLXNraWxse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuU2tpbGxzLXNraWxsIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxsczsiLCJpbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBsaW5rIH0gZnJvbSBcImZzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbnRyb2R1Y3Rpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXZhdGFyOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHBvc2l0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmsge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGxvZ286IHN0cmluZztcclxuICAgIGNvbXBhbnk6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBkdXJhdGlvbjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1tdO1xyXG4gICAgc3RhY2s6IHsgbmFtZTogc3RyaW5nOyBpY29uOiBzdHJpbmc7IH1bXTtcclxuICAgIGxpbms/OnN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElQdWJsaWNhdGlvbnMge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGNvbXBhbnk6IHN0cmluZztcclxuICAgIGxvZ286IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBkdXJhdGlvbjogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1tdO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY2hvb2xBdXh7XHJcbiAgICBuYW1lOnN0cmluZztcclxuICAgIGxpbms/OnN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY2hvb2xFbnRpdHkge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG4gICAgdGl0bGU6IElTY2hvb2xBdXhbXTtcclxuICAgIGR1cmF0aW9uOiBzdHJpbmc7XHJcbiAgICBjcmVkZW50aWFsTGluaz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2tpbGwge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWNvbjogc3RyaW5nO1xyXG4gICAgY3VycmVudD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF3YXJkIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpc3N1ZXI6IHN0cmluZztcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBsb2dvOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG4gICAgZGF0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMYW5ndWFnZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBsZXZlbDogc3RyaW5nO1xyXG4gICAgbGluaz86c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGxpbms6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVzdW1lIHtcclxuICAgIGludHJvZHVjdGlvbjogSUludHJvZHVjdGlvbjtcclxuICAgIGV4cGVyaWVuY2U6IElXb3JrW107XHJcbiAgICBlZHVjYXRpb246IElTY2hvb2xFbnRpdHlbXTtcclxuICAgIHB1YmxpY2F0aW9uczogSVB1YmxpY2F0aW9uc1tdO1xyXG4gICAgc2tpbGxzOiBJU2tpbGxbXTtcclxuICAgIGF3YXJkczogSUF3YXJkW107XHJcbiAgICBsYW5ndWFnZXM6IElMYW5ndWFnZVtdO1xyXG4gICAgY29udGFjdDogSUNvbnRhY3RbXTtcclxufVxyXG5cclxuY29uc3QgUmVzdW1lOiBJUmVzdW1lID0ge1xyXG4gICAgaW50cm9kdWN0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogXCJBbGJlcnRvIENhbXBvc1wiLFxyXG4gICAgICAgIGF2YXRhcjogXCIuL2ltYWdlcy9hdmF0YXIucG5nXCIsXHJcbiAgICAgICAgbG9jYXRpb246IFwiTcOpeGljb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZ1bGwtU3RhY2sgZGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiRnVsbC1TdGFjayBkZXZlbG9wZXIgQFRoaW5jcnMgJiBGdWxsLVN0YWNrIGRldmVsb3BlciBAVVRBR1MgXCJcclxuICAgIH0sXHJcbiAgICBleHBlcmllbmNlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Z1bGwtU3RhY2sgRGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ1RoaW5jcnMnLFxyXG4gICAgICAgICAgICBsb2dvOiAnLi9pbWFnZXMvdGhpbmNycy5wbmcnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogJ0p1bHkgMjAxNyAtIFByZXNlbnQnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0d1YWRhbGFqYXJhLCBNZXhpY28nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICAgICAgICAgICAgJ0Z1bGwtc3RhY2sgZGV2ZWxvcG1lbnQgb2YgdGhlIGxhbmRpbmcgcGFnZSwgUkVTVCBBUEkgYW5kIGludGVybnNoaXAgYWRtaW4nLFxyXG4gICAgICAgICAgICAgICAgXCJEZXZlbG9wbWVudCBvZiBNTCBtb2RlbHMgZm9yIHByZWRpY3Rpb25zLCB0aGVuIGNvbm5lY3QgdGhvc2UgdG8gdGhlIExhcmF2ZWwncyBSRVNUIEFQSVwiLFxyXG4gICAgICAgICAgICAgICAgXCJJbnRlZ3JhdGlvbiBvZiB0aGUgUkVTVCBBUEkgd2l0aCB0aGUgUmVhY3QgYW5kIEFuZ3VsYXIgcHJvamVjdHNcIixcclxuICAgICAgICAgICAgICAgIFwiQ29uZmlndXJhdGlvbiBvZiBKZW5raW5zIGFuZCBwaXBlbGluZXMgdG8gZGVwbG95IHRoZSBHaXRMYWIgUmVwb3NpdG9yaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAnSW52b2x2ZWQgaW50byB0aGUgcGxhbm5pbmcvZGVzaWduaW5nIHBoYXNlIGZvciB0aGUgYXBwbGljYXRpb25zLidcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc3RhY2s6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0FuZ3VsYXInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvYW5ndWxhci1pY29uLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1JlYWN0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3JlYWN0LnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ05vZGVqcycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9ub2RlanMtaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMYXJhdmVsJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2xhcmF2ZWwuc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTXlTUUwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbXlzcWwuc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2l0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dpdC1pY29uLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1B5dGhvbicsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9weXRob24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRmxhc2snLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvZmxhc2suc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSmVua2lucycsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qZW5raW5zLnN2ZycgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsaW5rOlwiaHR0cHM6Ly90aGluY3JzLmNvbS9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Z1bGwtU3RhY2sgRGV2ZWxvcGVyJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ1VuaXZlcnNpZGFkIFRlY25vbMOzZ2ljYSBkZSBBZ3Vhc2NhbGllbnRlcycsXHJcbiAgICAgICAgICAgIGxvZ286ICcuL2ltYWdlcy91dGFncy5wbmcnLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogJ0phbnVhcnkgMjAxOSAtIFByZXNlbnQnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0FndWFzY2FsaWVudGVzLCBNw6l4aWNvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdGdWxsLXN0YWNrIGRldmVsb3BtZW50IGZvciBkaWZmZXJlbnQgcHJvamVjdHMgdXNpbmcgdGhlIE1FQU4gYW5kIE1FSU4gc3RhY2tzJyxcclxuICAgICAgICAgICAgICAgICdMZWFkZXIgb2YgZGlmZmVyZW50IHRlYW1zJyxcclxuICAgICAgICAgICAgICAgICdTdWJqZWN0IHRlYWNoZXIgb2YgbXVsdGktcGxhdGZvcm0gYXBwbGljYXRpb24gZGV2ZWxvcG1lbnQnLFxyXG4gICAgICAgICAgICAgICAgJ0ludm9sdmVkIGludG8gdGhlIHBsYW5uaW5nL2Rlc2lnbmluZyBwaGFzZSBmb3IgdGhlIGFwcGxpY2F0aW9ucy4nXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHN0YWNrOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdNb25nb0RCJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL21vbmdvZGIuc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnRXhwcmVzc2pzJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2V4cHJlc3Muc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQW5ndWxhcicsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9hbmd1bGFyLWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQm9vdHN0cmFwJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2Jvb3RzdHJhcC5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb2RlanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVHlwZXNjcmlwdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy90eXBlc2NyaXB0LWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSW9uaWMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvaW9uaWMuc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2l0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dpdC1pY29uLnN2ZycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBlZHVjYXRpb246IFtcclxuICAgICAgICB7IG5hbWU6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZGUgQWd1YXNjYWxpZW50ZXMnLCBsb2dvOiAnLi9pbWFnZXMvdXRhZ3MucG5nJywgdGl0bGU6IFt7bmFtZTonSW5mb3JtYXRpb24gVGVjaG5vbG9naWVzIEVuZ2luZWVyaW5nIERlZ3JlZSd9XSwgZHVyYXRpb246ICcyMDE5IC0gMjAyMCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZWwgUmV0b8OxbycsIGxvZ286ICcuL2ltYWdlcy91dHIucG5nJywgdGl0bGU6IFt7bmFtZTonSW5mb3JtYXRpb24gVGVjaG5vbG9naWVzIEFzc29jaWF0ZSBEZWdyZWUnfV0sIGR1cmF0aW9uOiAnMjAxNiAtIDIwMTgnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTWFzc2FjaHVzZXR0cyBJbnN0aXR1dGUgb2YgVGVjaG5vbG9neScsIGxvZ286ICcuL2ltYWdlcy9taXQuc3ZnJywgdGl0bGU6IFt7bmFtZTonRGlnaXRhbCBUcmFuc2Zvcm1hdGlvbiBDb3Vyc2UnLCBsaW5rOidodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFtTHE5UHJhY0FWbFNfakdvbng0Tk9QTXVTSW5UUjNnMC92aWV3P3VzcD1zaGFyaW5nJ31dLCBkdXJhdGlvbjogJzIwMjAnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnQWxnb25xdWluIENvbGxlZ2Ugb2YgQXBwbGllZCBBcnRzIGFuZCBUZWNobm9sb2d5JywgbG9nbzogJy4vaW1hZ2VzL2FjLnBuZycsIHRpdGxlOiBbe25hbWU6J0NvbXB1dGVyIFNjaWVuY2UgQ291cnNlJ31dLCBkdXJhdGlvbjogJ1NlcHRlbWJlciAyMDE5IC0gRGVjZW1iZXIgMjAxOScgfSxcclxuICAgICAgICB7IG5hbWU6ICdQaW1hIENvbW11bml0eSBDb2xsZWdlJywgbG9nbzogJy4vaW1hZ2VzL3BpbWEucG5nJywgdGl0bGU6IFt7bmFtZTonQnVzaW5lc3MgTWFuYWdlbWVudCBDb3Vyc2UnfV0sIGR1cmF0aW9uOiAnQXVndXN0IDIwMTYgLSBEZWNlbWJlciAyMDE2JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ1VuaXZlcnNpZGFkIEF1dMOzbm9tYSBkZSBBZ3Vhc2NhbGllbnRlcycsIGxvZ286ICcuL2ltYWdlcy91YWEuanBnJywgdGl0bGU6IFt7bmFtZTonQW5kcm9pZCBEZXZlbG9wbWVudCBDb3Vyc2UnfV0sIGR1cmF0aW9uOiAnTWFyY2ggMjAxOCAtIEp1bmUgMjAxOCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdMaW5rZWRpbiBMZWFybmluZycsIGxvZ286ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9saW5rZWRpbi5zdmcnLCB0aXRsZTogW3tuYW1lOidWaXN1YWwgU3R1ZGlvIENvZGUnLCBsaW5rOidodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkNGZ3eWpwRGtha3U0OW5rcHZyc2xuWnpoM2JVa3JSVS92aWV3P3VzcD1zaGFyaW5nJ31dLCBkdXJhdGlvbjogJzIwMTknfSxcclxuICAgICAgICB7IG5hbWU6ICcnLCBsb2dvOiAnLi9pbWFnZXMvcGxhdHppLnBuZycsIHRpdGxlOiBbXHJcbiAgICAgICAgICAgIHtuYW1lOidDYXJyZXJhIEJhc2VzIGRlIERhdG9zJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXlrbDFsaEE5UEFGWTRTc3dGSG5PVlA3N2JUUWFmbF9zL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDYXJyZXJhIEVzY3VlbGEgZGUgSW5nbMOpcycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFfUUluSjIwUTgtY1FMM1VQM0d2MUFZSzlHck1sdWU3VS92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ2FycmVyYSBEZXNhcnJvbGxvIEJhY2tlbmQgY29uIEdvJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWs1SnZHS3VxREpzNHk2QUVqT2E0S1BPbkdhdjlsXzZ4L3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBKYXZhIFNFJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWR1OUdMMVd1UVV4SFZWMmcycWZLQmg0X01NeTBkTTM0L3ZpZXc/dXNwPXNoYXJpbmdcIn0sIFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgR28nLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xNks4MnA3emNUQjJxN1JnMlpWaWpXdTAwbDIzWTEyRjEvdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIE1vbmdvREInLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xOTlIWVFreXdFTGJnNlZqY3MwLVV1OEZuRWNxaVF6SWwvdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIEJ1ZW5hcyBQcsOhY3RpY2FzJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWgzdGpTYkFJNWlSMTlNbWVCS1hVZncyMUloUXZHb1RnL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBIVE1MIFkgQ1NTJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUNEdkJRaEx4YUxHS0dyaWwxUWg0T0MwNDJmdGxRZ2ZrL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBTZWd1cmlkYWQgSW5mb3Jtw6F0aWNhJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTNXUl9wVVVoRjJIZEF0aVNEaDk4SVBLVUZmWWNSVDNGL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBQSFAgY29uIExhcmF2ZWwnLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeG9ZZml0S1liemZHZVh0MkttOTZHUXFTRnlTbnRKZV8vdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIFBPTycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzE3eUdsY3AtYmZGLXowSVEzTHVwYkVTYVJLYlZpeE4xOC92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgUmVkZXMgZGUgSW50ZXJuZXQnLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN0R2ZnZuYmxXeVRNelhBa2NkUjNpdTJ5TlBBcFUxVmIvdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIFNDUlVNJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUIwWkxrQktLdC0zZVRnY0xmdThXZWZ0VHhoNW80SHFxL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBTUUwgeSBNeVNRTCcsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoSTNQNmxGRnh5MWpNcFRZT2p5Q2xyWDA5RkdnVVlmei92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgQmFzZXMgZGUgRGF0b3MnLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xUVAxZlhJLURXQ1ViLXdXS2tBN2pwaTI4aDRNaExBRmMvdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIEzDrW5lYSBkZSBDb21hbmRvcycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUd1doYkdINVlNMmdld1dxcmkwVlo1LXR5Vmdxa0VTeC92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgR29vZ2xlIENsb3VkIFBsYXRmb3JtJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlMd1hOemxTRGNJT0RuU2hPeFdjeHMtZWtFNmsyN1l5L3ZpZXc/dXNwPXNoYXJpbmdcIn1dLCBkdXJhdGlvbjogJzIwMTkgLSAyMDIwJywgY3JlZGVudGlhbExpbms6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xd0oxbXcwUUpYRkp0N2dkNHQ3OWxxMV8zczkwdThQRjY/dXNwPXNoYXJpbmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnJywgbG9nbzogJy4vaW1hZ2VzL21vbmdvdS5wbmcnLCB0aXRsZTogW3tuYW1lOidNb25nb0RCIEJhc2ljcycsIGxpbms6J2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxU3ozWEg3V1JjQ2ZQRkFIZUJjZUxFYTk5VkpWZGhnL3ZpZXc/dXNwPXNoYXJpbmcnIH1dLCBkdXJhdGlvbjogJ0F1Z3VzdCAyMDE5JywgY3JlZGVudGlhbExpbms6J2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxU3ozWEg3V1JjQ2ZQRkFIZUJjZUxFYTk5VkpWZGhnL3ZpZXc/dXNwPXNoYXJpbmcnfVxyXG4gICAgICAgIFxyXG4gICAgXSxcclxuICAgIHB1YmxpY2F0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbmRlcnN0YW5kaW5nIHRoZSBDcm93ZCBNYXJrZXRzIHRoYXQgV29ya2VycyBhbmQgUmVxdWVzdGVycyBJbWFnaW5lJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ0Nhcm5lZ2llIE1lbGxvbiBVbml2ZXJzaXR5LCBDSSwgQUNNIENvbGxlY3RpdmUgSW50ZWxsaWdlbmNlIENvbmZlcmVuY2UgU2VyaWVzJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL2NtLnBuZycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnMjAxOScsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnUGl0dHNidXJnaCwgVVNBJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdDYXJsb3MgVG94dGxpLCBKdWFuIFBhYmxvIENhc3RpbGxvLCBBbGJlcnRvIENhbXBvcywgQmVuamFtaW4gVi4gSGFucmFoYSwgS290YXJvIEhhcmEsIENocmlzIENhbGxpc29uLUJ1cmNoLCBKZWZmcmV5IEJpZ2hhbSwgS3Jpc3R5IE1pbGxhbmQsIEFiaWdhaWwgQWRhbXMsIFNhaXBoIFNhdmFnZSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9jaS5hY20ub3JnLzIwMTkvYXNzZXRzL3Byb2NlZWRpbmdzL0NJXzIwMTlfcGFwZXJfNjAucGRmJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBza2lsbHM6IFtcclxuICAgICAgICB7IG5hbWU6ICdKYXZhU2NyaXB0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2phdmFzY3JpcHQuc3ZnJywgY3VycmVudDp0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUmVhY3QnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcmVhY3Quc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0xhcmF2ZWwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbGFyYXZlbC5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnVHlwZVNjcmlwdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy90eXBlc2NyaXB0LWljb24uc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0FuZ3VsYXInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvYW5ndWxhci1pY29uLnN2ZycsIGN1cnJlbnQ6dHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0lvbmljJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2lvbmljLnN2ZycsIGN1cnJlbnQ6dHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ05vZGUuanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ01vbmdvREInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbW9uZ29kYi5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTXlTUUwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbXlzcWwuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dpdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9naXQtaWNvbi5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSmlyYScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qaXJhLnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdIVE1MNScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9odG1sLTUuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0NTUzMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvY3NzLTMuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0Jvb3RzdHJhcCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9ib290c3RyYXAuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0plbmtpbnMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvamVua2lucy5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSmF2YScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qYXZhLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdQb3N0Z3JlU1FMJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3Bvc3RncmVzcWwuc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0MjJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2Muc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dvJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dvLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdQSFAnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcGhwLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdTYXNzJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3Nhc3Muc3ZnJ30sXHJcbiAgICAgICAgeyBuYW1lOiAnWmVpdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy96ZWl0LWljb24uc3ZnJ30sXHJcbiAgICBdLFxyXG4gICAgYXdhcmRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvbm9yYWJsZSBNZW50aW9uIGluIHRoZSBJVCBBc3NvY2lhdGUgRGVncmVlJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3V0ci5wbmcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0FndWFzY2FsaWVudGVzLCBNZXhpY28nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZWwgUmV0b8OxbycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmVjb2dpbml6ZWQgYXMgb25lIG9mIHRoZSBiZXN0IGdyYWRlcyBpbiB0aGUgSVQgYXNzb2NpYXRlIGRlZ3JlZSBjb3Vyc2VkIGZyb20gMjAxNiB0byAyMDE4JyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/ZmVhdHVyZT1wbGF5ZXJfZW1iZWRkZWQmdj1RUUw5UHB2TndSbycsXHJcbiAgICAgICAgICAgIGRhdGU6ICdTZXB0ZW1iZXIgMjAxNiAtIERlY2VtYmVyIDIwMTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGFsZW50IEhhY2thdG9uIEZpbmFsaXN0JyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3RhbGVudC5wbmcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0d1YWRhbGFqYXJhLCBNZXhpY28nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdUYWxlbnQgTmV0d29yaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGFydCBvZiB0aGUgdGVhbSBmaW5hbGlzdCBpbiB0aGUgVGFsZW50IEhhY2thdGhvbiAyMDE4LCBkZXZlbG9waW5nIGEgd2ViIGFwcGxpY2F0aW9uIHRoYXQgYW5hbGl6ZSBzZW50aW1lbnRzIG9mIG5ld3Mgb24gVHdpdHRlciBpbiBvcmRlciB0byBmaW5kIGFuZCBjbGFzc2lmeSBmYWtlIG5ld3MnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD9mZWF0dXJlPXBsYXllcl9lbWJlZGRlZCZ2PVFRTDlQcHZOd1JvJyxcclxuICAgICAgICAgICAgZGF0ZTogJ0FwcmlsIDIwMTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWd1YSBIYWNrYXRvbiBDRk9YJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL2Nmb3gucG5nJyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdHdWFuYWp1YXRvLCBNZXhpY28nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdDZW50cm8gRm94JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQYXJ0IG9mIHRoZSBUT1AgMTAgcHJvamVjdHMgd2l0aCBhIG1vYmlsZSBhcHBsaWNhdGlvbiB0aGF0IGhlbHBzIHRvIGNvbnRyb2wgaG93IG11Y2ggd2F0ZXIgeW91IHNwZW5kIGFuZCBnaXZlIHRpcHMgdG8gaW1wcm92ZSBpdHMgdXNlLicsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP2ZlYXR1cmU9cGxheWVyX2VtYmVkZGVkJnY9UVFMOVBwdk53Um8nLFxyXG4gICAgICAgICAgICBkYXRlOiAnQXByaWwgMjAxOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdSdW1ibyBhIEphcMOzbicsXHJcbiAgICAgICAgICAgIGxvZ286ICcuL2ltYWdlcy9yZWkucG5nJyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdUb2t5bywgSmFwYW4nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdUYWxlbnQgTmV0d29yaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnV2lubmVyIG9mIHRoZSBgUnVtYm8gYSBKYXDDs25gIGF3YXJkIGluIHdoaWNoIEkgd2FzIHJlY29nbml6ZWQgYXMgb25lIG9mIHRoZSAxMCB5b3VuZyBwcm9taXNlcyBvZiB0aGUgc3RhdGUsIHRoZW4gaGF2aW5nIG1lZXRpbmdzIHdpdGggYXV0aG9yaXRpZXMgdGhyb3VnaCBkaWZmZXJlbnQgY2l0aWVzIGF0IEphcGFuICcsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP2ZlYXR1cmU9cGxheWVyX2VtYmVkZGVkJnY9UVFMOVBwdk53Um8nLFxyXG4gICAgICAgICAgICBkYXRlOiAnQXByaWwgMjAxNCdcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIGxhbmd1YWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2gnLFxyXG4gICAgICAgICAgICBsZXZlbDogJ1Byb2Zlc3Npb25hbCB3b3JraW5nIHByb2ZpY2llbmN5JyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMU1zdFpRY1F6N1Q2S2g2X3Z0cU1BUER3bjFqRUtCT0ZhL3ZpZXc/dXNwPXNoYXJpbmcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTcGFuaXNoJyxcclxuICAgICAgICAgICAgbGV2ZWw6ICdOYXRpdmUgb3IgYmlsaW5ndWFsIHByb2ZpY2llbmN5J1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBjb250YWN0OiBbXHJcbiAgICAgICAgeyBuYW1lOiAnQWxiZXJ0byBDYW1wb3MnLCBpY29uOiAnLi9pbWFnZXMvbGlua2VkaW4ucG5nJywgbGluazogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGJlcnRvY2FtcG9zaC8nIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYWNhbXBvc2hkJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dpdGh1Yi1pY29uLnN2ZycsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vYWNhbXBvc2hkJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2FsYmVydG9jYW1wb3NoZGV6QGhvdG1haWwuY29tJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dvb2dsZS1nbWFpbC5zdmcnLCBsaW5rOiAnbWFpbHRvOmFsYmVydG9jYW1wb3NoZGV6QGhvdG1haWwuY29tJyB9LFxyXG4gICAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgd2l0aEdBIGZyb20gJ25leHQtZ2EnO1xyXG5cclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhJztcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmllbmNlJztcclxuaW1wb3J0IEVkdWNhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2VkdWNhdGlvbic7XHJcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24nO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvc2tpbGxzJztcclxuaW1wb3J0IExhbmd1YWdlcyBmcm9tICcuLi9jb21wb25lbnRzL2xhbmd1YWdlcyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdCc7XHJcbmltcG9ydCBBd2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9hd2FyZHMnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUHVibGljYXRpb25zIGZyb20gJy4uL2NvbXBvbmVudHMvcHVibGljYXRpb25zJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IChcclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgICAgYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDsgXHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9keSwgaDIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsMjAwLDIwMCwuMSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLlJlc3VtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEzNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5SZXN1bWUtbWFpbntcclxuICAgICAgICAgICAgZmxleDogMiA1MjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5SZXN1bWUtc2lkZWJhcntcclxuICAgICAgICAgICAgZmxleDogMSAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG4pO1xyXG5cclxuY29uc3QgUmVzdW1lID0gKCkgPT4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57ZGF0YS5pbnRyb2R1Y3Rpb24ubmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkYXRhLmludHJvZHVjdGlvbi5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi4vZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIuL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiLi9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiLi9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI2RhNTMyY1wiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCI+PC9tZXRhPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SW50cm9kdWN0aW9uIGRhdGE9e2RhdGEuaW50cm9kdWN0aW9ufSAvPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZS1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8RXhwZXJpZW5jZSBkYXRhPXtkYXRhLmV4cGVyaWVuY2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8RWR1Y2F0aW9uIGRhdGE9e2RhdGEuZWR1Y2F0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPFB1YmxpY2F0aW9ucyBkYXRhPXtkYXRhLnB1YmxpY2F0aW9uc30vPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZS1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIGRhdGE9e2RhdGEuc2tpbGxzLmZpbHRlcihza2lsbCA9PiBza2lsbC5jdXJyZW50KX0gdGl0bGU9XCJDdXJyZW50IFN0YWNrXCIgLz5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17ZGF0YS5za2lsbHMuZmlsdGVyKHNraWxsID0+ICFza2lsbC5jdXJyZW50KX0gdGl0bGU9XCJJIEhhdmUgVXNlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VzIGRhdGE9e2RhdGEubGFuZ3VhZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgPEF3YXJkcyBkYXRhPXtkYXRhLmF3YXJkc30gLz5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0IGRhdGE9e2RhdGEuY29udGFjdH0gLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7c3R5bGVzfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEdBKHByb2Nlc3MuZW52LkdBX0lELCBSb3V0ZXIpKFJlc3VtZSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1nYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
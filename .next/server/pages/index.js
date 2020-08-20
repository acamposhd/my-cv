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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\awards.tsx";


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
  }, ".Award.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,0.2);padding:0 1rem;padding-bottom:3rem;}.Award-award.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:2rem 0;}.Award-award-title.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Award-award-date.jsx-2217728907{font-size:1rem;margin:0 1rem;}.Award-award-place.jsx-2217728907{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin:0.5rem 0;}.Award-award-place.jsx-2217728907 img.jsx-2217728907{max-height:80px;max-width:140px;justify-self:center;}.Award-award-place.jsx-2217728907 span.jsx-2217728907{margin-left:1rem;}.Award-award-date.jsx-2217728907{opacity:0.8;font-size:0.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGF3YXJkcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJTLEFBRzBCLEFBT0EsQUFLQSxBQU1FLEFBS0YsQUFNRyxBQU1DLEFBR0wsWUFDSyxHQXBCSCxDQVdFLENBTWxCLFlBaEJBLEFBb0JzQixHQVRBLG9CQUN0QixzQkEvQndCLEFBT0EsQUFLRCxBQVdBLDJCQWlCdkIsbURBdkNtRCxBQU9uQyxjQUNoQixTQUlnQyxBQVdkLGdCQUNsQixPQXZCaUIsZUFDSyxvQkFDdEIseURBVUEiLCJmaWxlIjoiRDpcXHByb2plY3RzXFxwZXJzb25hbGVzXFxteS1jdlxcY29tcG9uZW50c1xcYXdhcmRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBd2FyZCB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBBd2FyZHNQcm9wcyB7XHJcbiAgZGF0YTogSUF3YXJkW107XHJcbn1cclxuXHJcbmNvbnN0IEF3YXJkcyA9ICh7IGRhdGEgfTogQXdhcmRzUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgzPkF3YXJkczwvaDM+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkF3YXJkXCI+XHJcbiAgICAgICAge2RhdGEubWFwKChhd2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtgYXdhcmRfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2F3YXJkLmxvZ299IGFsdD17YXdhcmQuaXNzdWVyfSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnthd2FyZC5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7YXdhcmQudGl0bGV9XHJcbiAgICAgICAgICAgICAge2F3YXJkLmxpbmsmJiA8YSBocmVmPXthd2FyZC5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZXhzLzE2LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz48L2E+fVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8cD57YXdhcmQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZC1kYXRlXCI+e2F3YXJkLmRhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLkF3YXJkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLWRhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1kYXRlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBd2FyZHM7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\awards.tsx */"));
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\contact.tsx";


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
  }, ".Contact.jsx-396718400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;padding-bottom:3rem;}.Contact-type.jsx-396718400{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Contact-type.jsx-396718400 img.jsx-396718400{width:20px;margin-right:.5rem;}.Contact-type.jsx-396718400 a.jsx-396718400{-webkit-text-decoration:none;text-decoration:none;color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGNvbnRhY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCaUIsQUFHc0MsQUFNQSxBQU1GLEFBS1UsV0FKRixtQkFDdkIsb0JBSWdCLFlBQ2hCLFlBbEIwQixBQU1ILDhFQUxKLGVBQ0ssQUFLTCxlQUNuQixLQUxBIiwiZmlsZSI6IkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGNvbnRhY3QudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbnRhY3QgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29udGFjdHNQcm9wcyB7XHJcbiAgICBkYXRhOiBJQ29udGFjdFtdO1xyXG59XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgZGF0YSB9OiBDb250YWN0c1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5Db250YWN0PC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiQ29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChjb250YWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhY3QtdHlwZVwiIGtleT17YHNraWxsXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbnRhY3QuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NvbnRhY3QubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+e2NvbnRhY3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkNvbnRhY3QtdHlwZSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDsiXX0= */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\contact.tsx */"));
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\education.tsx";


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
  }, ".Education.jsx-739814721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-bottom:3rem;padding:0 1rem;}.Education-entity.jsx-739814721{margin:1rem 0;}.Education-title.jsx-739814721{margin-bottom:5px;}.Education-entity-place.jsx-739814721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Education-entity.jsx-739814721 img.jsx-739814721{max-height:45px;max-width:80px;}.Education-entity-name.jsx-739814721{margin-left:.5rem;}.Education-entity-details.jsx-739814721{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:.5rem;}.Education-entity-duration.jsx-739814721{opacity:.8;font-size:.8rem;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGVkdWNhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJpQixBQUdzQyxBQU9DLEFBR0csQUFJSixBQUtHLEFBS0UsQUFJTCxBQU1GLFdBQ0ssR0EzQnBCLEVBWW1CLEVBVG5CLEFBY0EsU0FXd0IsSUFmeEIsMkNBcEIwQixBQWNILEFBY0cseUJBUTFCLHFEQW5Dd0IsQUE0QkgsZUFkckIsRUFlQSxHQTVCbUIsZUFDbkIiLCJmaWxlIjoiRDpcXHByb2plY3RzXFxwZXJzb25hbGVzXFxteS1jdlxcY29tcG9uZW50c1xcZWR1Y2F0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElTY2hvb2xFbnRpdHkgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgRWR1Y2F0aW9uUHJvcHMge1xyXG4gICAgZGF0YTogSVNjaG9vbEVudGl0eVtdO1xyXG59XHJcblxyXG5jb25zdCBFZHVjYXRpb24gPSAoeyBkYXRhIH06IEVkdWNhdGlvblByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5FZHVjYXRpb24gJiBDb3Vyc2VzPC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKGVudGl0eSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BlbnRpdHlfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZW50aXR5LmxvZ299IGFsdD17ZW50aXR5Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktbmFtZVwiPntlbnRpdHkubmFtZX0gPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kdXJhdGlvblwiPntlbnRpdHkuZHVyYXRpb259PC9zcGFuPjwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudGl0eS50aXRsZS5tYXAoKHNpbmdsZVRpdGxlOmFueSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHktc3ViamVjdCBFZHVjYXRpb24tdGl0bGVcIj57c2luZ2xlVGl0bGUubmFtZX17c2luZ2xlVGl0bGUubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17c2luZ2xlVGl0bGUubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHkgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5LWR1cmF0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkdWNhdGlvbjsiXX0= */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\education.tsx */"));
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\experience.tsx";


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
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGV4cGVyaWVuY2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFHc0MsQUFLQSxBQU1DLEFBR0QsQUFLRSxBQU9GLEFBTUcsQUFNSCxBQU1BLEFBTUEsQUFNRixXQUNRLEdBN0N2QixDQVNlLENBWUssY0F5QnBCLEVBdkJELFFBYnNCLFlBYXJCLEtBWkEsaUJBdEIwQixBQUtBLEFBU0QsQUFZRixBQVlHLEFBTVAsQUFNSSx5REFMSCxnQkFDcEIsS0E3Q21CLEFBS0EsQUFpQ0UsZUFyQ3JCLEFBS2tELEFBb0IvQixBQXdCRyxFQVh0QixNQXpCQSxPQWFBLEdBd0JBLDJCQTVDQSIsImZpbGUiOiJEOlxccHJvamVjdHNcXHBlcnNvbmFsZXNcXG15LWN2XFxjb21wb25lbnRzXFxleHBlcmllbmNlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElXb3JrIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEV4cGVyaWVuY2VQcm9wcyB7XHJcbiAgICBkYXRhOiBJV29ya1tdO1xyXG59XHJcblxyXG5jb25zdCBFeHBlcmllbmNlID0gKHsgZGF0YSB9OiBFeHBlcmllbmNlUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkV4cGVyaWVuY2U8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHdvcmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgd29ya18ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29ya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBvc2l0aW9uXCI+e3dvcmsudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57d29yay5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dvcmsubG9nb30gYWx0PXt3b3JrLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3dvcmsuY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57d29yay5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuZGVzY3JpcHRpb24ubWFwKChwb2ludCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuc3RhY2subWFwKCh0b29sLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10b29sXCIga2V5PXtgdG9vbF8ke2luZGV4fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0b29sLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9vbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcms6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXN0YWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlOyJdfQ== */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\experience.tsx */"));
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\introduction.tsx";


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
  }, ".Introduction.jsx-1906103043{background-color:rgba(200,200,200,.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:3rem 0;margin:0 1rem;}.Introduction-avatar.jsx-1906103043{width:200px;height:200px;padding:0 2rem;border-radius:50%;margin:auto;}.Introduction-wrapper.jsx-1906103043{padding:1rem 2rem;-webkit-flex:1 350px;-ms-flex:1 350px;flex:1 350px;}.Introduction-name.jsx-1906103043{font-size:3rem;}.Introduction-title.jsx-1906103043{font-size:1.2rem;margin-top:.5rem;}.Introduction-qr.jsx-1906103043{float:right;width:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGludHJvZHVjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUcrRCxBQVExQixBQU9NLEFBSUgsQUFHRSxBQUlOLFlBakJFLEFBa0JGLEdBUGYsRUFHcUIsQ0FQSixNQWFsQixBQUFDLENBbkJtQixTQWNuQixJQXZCaUIsRUFVSyxrQkFDTixXQUtoQixDQUpBLDBDQVhrQyxtSEFDZix5REFDQSxlQUNELGNBQ2xCIiwiZmlsZSI6IkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGludHJvZHVjdGlvbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJSW50cm9kdWN0aW9uIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEludHJvZHVjdGlvblByb3BzIHtcclxuICAgIGRhdGE6IElJbnRyb2R1Y3Rpb247XHJcbn1cclxuXHJcbmNvbnN0IEludHJvZHVjdGlvbiA9ICh7IGRhdGEgfTogSW50cm9kdWN0aW9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1hdmF0YXJcIiBzcmM9e2RhdGEuYXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tbmFtZVwiPntkYXRhLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLXRpdGxlXCI+e2RhdGEucG9zaXRpb259PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tZGVzY3JpcHRpb25cIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWxvY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAzNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24tcXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMHB4OlxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWN0aW9uOyJdfQ== */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\introduction.tsx */"));
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\languages.tsx";


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
  }, ".Languages.jsx-560535691{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,0.2);padding:0 1rem;padding-bottom:3rem;}.Languages-language.jsx-560535691{margin:0.5rem 0;}.Languages-links.jsx-560535691{color:blue;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXGxhbmd1YWdlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJTLEFBRzBCLEFBT0csQUFHTCxXQUNJLEtBSGpCLFVBSUEsZ0RBWHdCLDhFQUMyQiw4Q0FDbEMsZUFDSyxvQkFDdEIiLCJmaWxlIjoiRDpcXHByb2plY3RzXFxwZXJzb25hbGVzXFxteS1jdlxcY29tcG9uZW50c1xcbGFuZ3VhZ2VzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMYW5ndWFnZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBMYW5ndWFnZXNQcm9wcyB7XHJcbiAgZGF0YTogSUxhbmd1YWdlW107XHJcbn1cclxuXHJcbmNvbnN0IExhbmd1YWdlcyA9ICh7IGRhdGEgfTogTGFuZ3VhZ2VzUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgzPkxhbmd1YWdlczwvaDM+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkxhbmd1YWdlc1wiPlxyXG4gICAgICAgIHtkYXRhLm1hcCgobGFuZ3VhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17YGxhbmd1YWdlXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGFuZ3VhZ2UtbmFtZVwiPiB7bGFuZ3VhZ2UubmFtZX0ge2xhbmd1YWdlLmxpbmsmJjxhIGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1saW5rc1wiIGhyZWY9e2xhbmd1YWdlLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPiA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vb2ZmaWNleHMvMTYvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPjwvYT59PC9oNj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxhbmd1YWdlLWxldmVsXCI+e2xhbmd1YWdlLmxldmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5MYW5ndWFnZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkxhbmd1YWdlcy1sYW5ndWFnZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuTGFuZ3VhZ2VzLWxpbmtzIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlcztcclxuIl19 */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\languages.tsx */"));
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\publications.tsx";


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
  }, publication.title, publication.link && __jsx("a", {
    href: publication.link,
    target: "_blank",
    className: "jsx-3347548585" + " " + "Languages-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 108
    }
  }, " ", __jsx("img", {
    src: "https://img.icons8.com/officexs/16/000000/external-link.png",
    className: "jsx-3347548585",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 180
    }
  }))), __jsx("span", {
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
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNpQixBQUdzQyxBQUtBLEFBTUMsQUFHRCxBQUtFLEFBT0YsQUFNRyxBQU1ILEFBTUEsQUFNQSxBQU1GLFdBQ1EsR0E3Q3ZCLENBU2UsQ0FZSyxjQXlCcEIsRUF2QkQsUUFic0IsWUFhckIsS0FaQSxpQkF0QjBCLEFBS0EsQUFTRCxBQVlGLEFBWUcsQUFNUCxBQU1JLHlEQUxILGdCQUNwQixLQTdDbUIsQUFLQSxBQWlDRSxlQXJDckIsQUFLa0QsQUFvQi9CLEFBd0JHLEVBWHRCLE1BekJBLE9BYUEsR0F3QkEsMkJBNUNBIiwiZmlsZSI6IkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXHB1YmxpY2F0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJV29yaywgSVB1YmxpY2F0aW9ucyB9IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgUHVibGljYXRpb25zUHJvcHMge1xyXG4gICAgZGF0YTogSVB1YmxpY2F0aW9uc1tdO1xyXG59XHJcblxyXG5jb25zdCBQdWJsaWNhdGlvbnMgPSAoeyBkYXRhIH06IFB1YmxpY2F0aW9uc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5QdWJsaWNhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHB1YmxpY2F0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHB1YmxpY2F0aW9uXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPntwdWJsaWNhdGlvbi50aXRsZX17cHVibGljYXRpb24ubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17cHVibGljYXRpb24ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kdXJhdGlvblwiPntwdWJsaWNhdGlvbi5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3B1YmxpY2F0aW9uLmxvZ299IGFsdD17cHVibGljYXRpb24uY29tcGFueX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWNvbXBhbnlcIj57cHVibGljYXRpb24uY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57cHVibGljYXRpb24ubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdWJsaWNhdGlvbi5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgcG9pbnRfJHtpbmRleH1gfSA+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstc3RhY2tcIj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1zdGFja3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2wgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25zOyJdfQ== */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\publications.tsx */"));
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\components\\skills.tsx";


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
  }, ".Skills.jsx-182888206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-bottom:1px solid rgba(200,200,200,.2);padding:0 1rem;padding-bottom:3rem;}.Skills-skill.jsx-182888206{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Skills-skill.jsx-182888206 img.jsx-182888206{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXHNraWxscy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JpQixBQUdzQyxBQU9BLEFBTUYsV0FDUSxtQkFDdkIsNENBZDBCLEFBT0gsOEVBTjJCLGVBTy9CLGVBQ25CLGVBUG1CLGVBQ0ssb0JBQ3hCIiwiZmlsZSI6IkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXGNvbXBvbmVudHNcXHNraWxscy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2tpbGwgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgU2tpbGxzUHJvcHMge1xyXG4gICAgZGF0YTogSVNraWxsW107XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoeyBkYXRhLCB0aXRsZSB9OiBTa2lsbHNQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlNraWxsc1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChza2lsbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNraWxscy1za2lsbFwiIGtleT17YHNraWxsXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2tpbGwuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NraWxsLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLlNraWxscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMtc2tpbGx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Ta2lsbHMtc2tpbGwgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzOyJdfQ== */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\components\\\\skills.tsx */"));
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
    }],
    link: "https://thincrs.com/"
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
    title: [{
      name: 'Information Technologies Engineering, Software'
    }],
    duration: '2019 - 2020'
  }, {
    name: 'Universidad Tecnológica el Retoño',
    logo: './images/utr.png',
    title: [{
      name: 'Information Technologies Associate, Software'
    }],
    duration: '2016 - 2018'
  }, {
    name: 'Massachusetts Institute of Technology',
    logo: './images/mit.svg',
    title: [{
      name: 'Digital Transformation, Course',
      link: 'https://drive.google.com/file/d/1mLq9PracAVlS_jGonx4NOPMuSInTR3g0/view?usp=sharing'
    }],
    duration: '2020'
  }, {
    name: 'Algonquin College of Applied Arts and Technology',
    logo: './images/ac.png',
    title: [{
      name: 'Computer Science, Courses'
    }],
    duration: 'September 2019 - December 2019'
  }, {
    name: 'Pima Community College',
    logo: './images/pima.png',
    title: [{
      name: 'Business Management, Courses'
    }],
    duration: 'August 2016 - December 2016'
  }, {
    name: 'Universidad Autónoma de Aguascalientes',
    logo: './images/uaa.jpg',
    title: [{
      name: 'Android Development, Courses'
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
      name: 'Curso de Terminal y Línea de Comandos',
      link: "https://drive.google.com/file/d/1TwWhbGH5YM2gewWqri0VZ5-tyVgqkESx/view?usp=sharing"
    }, {
      name: 'Curso de Fundamentos de Google Cloud Platform',
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
var _jsxFileName = "D:\\projects\\personales\\my-cv\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













const styles = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2761518401",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');body,h1,h2,h3,h4,h5,h6{border:0;padding:0;margin:0;}body,h2{font-family:'Roboto',sans-serif;font-weight:300;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}h1{font-weight:500;}h3{font-size:2rem;font-weight:400;margin:2rem 0;background-color:rgba(200,200,200,.1);padding:1rem;}h4{font-size:1.7rem;font-weight:500;}h5{font-weight:400;font-size:1.5rem;}h6{font-weight:400;font-size:1.2rem;}p{max-width:800px;}.Resume{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1rem;width:100vw;max-width:1340px;margin:auto;box-sizing:border-box;}.Resume-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Resume-main{-webkit-flex:2 520px;-ms-flex:2 520px;flex:2 520px;margin:0 1rem;}.Resume-sidebar{-webkit-flex:1 100px;-ms-flex:1 100px;flex:1 100px;margin:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxwcm9qZWN0c1xccGVyc29uYWxlc1xcbXktY3ZcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J1QixBQUUrRixBQUV6RSxBQU13QixBQUlaLEFBSUwsQUFHRCxBQU9FLEFBSUQsQUFJQSxBQUlBLEFBSUgsQUFTQSxBQUtBLEFBSUEsU0F6REgsTUFpQk0sQ0FIcEIsQUFjcUIsQUFJQSxBQUlyQixDQVpvQixFQXZCUCxTQUNiLEdBZ0JrQixDQVpFLENBbUJwQixBQUlBLEFBSUEsWUFkMEMsR0FaMUMsRUFHZ0IsQ0E0Q0UsQUFJQSxXQS9DbEIsR0E0Q0EsQUFJQSxTQW5CMEIsQUFTUCxTQTdCRixhQUNqQixtQ0E4QkQscUJBVnVCLGtCQUNOLFlBQ0ssaUJBQ0wsWUFDVSxzQkFDMUIsYUFLQSIsImZpbGUiOiJEOlxccHJvamVjdHNcXHBlcnNvbmFsZXNcXG15LWN2XFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB3aXRoR0EgZnJvbSAnbmV4dC1nYSc7XHJcblxyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2RhdGEnO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgRWR1Y2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uJztcclxuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2ludHJvZHVjdGlvbic7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSAnLi4vY29tcG9uZW50cy9za2lsbHMnO1xyXG5pbXBvcnQgTGFuZ3VhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzJztcclxuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcclxuaW1wb3J0IEF3YXJkcyBmcm9tICcuLi9jb21wb25lbnRzL2F3YXJkcyc7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBQdWJsaWNhdGlvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9wdWJsaWNhdGlvbnMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDAsNDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuICAgICAgICBib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwOyBcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBib2R5LCBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC4xKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAuUmVzdW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTM0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5SZXN1bWUtY29udGVudHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1tYWlue1xyXG4gICAgICAgICAgICBmbGV4OiAyIDUyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1zaWRlYmFye1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcbik7XHJcblxyXG5jb25zdCBSZXN1bWUgPSAoKSA9PiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWVcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntkYXRhLmludHJvZHVjdGlvbi5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEuaW50cm9kdWN0aW9uLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiLi9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi4vZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIuL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIuL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZGE1MzJjXCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIj48L21ldGE+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxJbnRyb2R1Y3Rpb24gZGF0YT17ZGF0YS5pbnRyb2R1Y3Rpb259IC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLW1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxFeHBlcmllbmNlIGRhdGE9e2RhdGEuZXhwZXJpZW5jZX0gLz5cclxuICAgICAgICAgICAgICAgIDxFZHVjYXRpb24gZGF0YT17ZGF0YS5lZHVjYXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICA8UHVibGljYXRpb25zIGRhdGE9e2RhdGEucHVibGljYXRpb25zfS8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzdW1lLXNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxTa2lsbHMgZGF0YT17ZGF0YS5za2lsbHMuZmlsdGVyKHNraWxsID0+IHNraWxsLmN1cnJlbnQpfSB0aXRsZT1cIkN1cnJlbnQgU3RhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFNraWxscyBkYXRhPXtkYXRhLnNraWxscy5maWx0ZXIoc2tpbGwgPT4gIXNraWxsLmN1cnJlbnQpfSB0aXRsZT1cIkkgSGF2ZSBVc2VkXCIgLz5cclxuICAgICAgICAgICAgICAgIDxMYW5ndWFnZXMgZGF0YT17ZGF0YS5sYW5ndWFnZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8QXdhcmRzIGRhdGE9e2RhdGEuYXdhcmRzfSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3QgZGF0YT17ZGF0YS5jb250YWN0fSAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIHtzdHlsZXN9XHJcbiAgICA8L3NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoR0EocHJvY2Vzcy5lbnYuR0FfSUQsIFJvdXRlcikoUmVzdW1lKTsiXX0= */\n/*@ sourceURL=D:\\\\projects\\\\personales\\\\my-cv\\\\pages\\\\index.tsx */");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hd2FyZHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9lZHVjYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXhwZXJpZW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGFuZ3VhZ2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3B1YmxpY2F0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9za2lsbHMudHN4Iiwid2VicGFjazovLy8uL2RhdGEvZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1nYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXdhcmRzIiwiZGF0YSIsIm1hcCIsImF3YXJkIiwiaW5kZXgiLCJsb2dvIiwiaXNzdWVyIiwibG9jYXRpb24iLCJ0aXRsZSIsImxpbmsiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJDb250YWN0IiwiY29udGFjdCIsImljb24iLCJuYW1lIiwiRWR1Y2F0aW9uIiwiZW50aXR5IiwiZHVyYXRpb24iLCJzaW5nbGVUaXRsZSIsIkV4cGVyaWVuY2UiLCJ3b3JrIiwiY29tcGFueSIsInBvaW50Iiwic3RhY2siLCJ0b29sIiwiSW50cm9kdWN0aW9uIiwiYXZhdGFyIiwicG9zaXRpb24iLCJMYW5ndWFnZXMiLCJsYW5ndWFnZSIsImxldmVsIiwiUHVibGljYXRpb25zIiwicHVibGljYXRpb24iLCJTa2lsbHMiLCJza2lsbCIsIlJlc3VtZSIsImludHJvZHVjdGlvbiIsImV4cGVyaWVuY2UiLCJlZHVjYXRpb24iLCJjcmVkZW50aWFsTGluayIsInB1YmxpY2F0aW9ucyIsInNraWxscyIsImN1cnJlbnQiLCJhd2FyZHMiLCJsYW5ndWFnZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJ3aXRoR0EiLCJwcm9jZXNzIiwiZW52IiwiR0FfSUQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUEyQjtBQUN4QyxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Q0ksTUFBQywwREFBRDtBQUFRLE1BQUksRUFBRXhDLGtEQUFJLENBQUN5QyxNQUFMLENBQVlLLE1BQVosQ0FBbUJaLEtBQUssSUFBSUEsS0FBSyxDQUFDUSxPQUFsQyxDQUFkO0FBQTBELE9BQUssRUFBQyxlQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREosRUFFSSxNQUFDLDBEQUFEO0FBQVEsTUFBSSxFQUFFMUMsa0RBQUksQ0FBQ3lDLE1BQUwsQ0FBWUssTUFBWixDQUFtQlosS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ1EsT0FBbkMsQ0FBZDtBQUEyRCxPQUFLLEVBQUMsYUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZKLEVBR0ksTUFBQyw4REFBRDtBQUFXLE1BQUksRUFBRTFDLGtEQUFJLENBQUM0QyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSEosRUFJSSxNQUFDLDJEQUFEO0FBQVEsTUFBSSxFQUFFNUMsa0RBQUksQ0FBQzJDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFKSixFQUtJLE1BQUMsNERBQUQ7QUFBUyxNQUFJLEVBQUUzQyxrREFBSSxDQUFDWSxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTEosQ0FOSixDQWJKLEVBMkJLaUMsTUEzQkwsQ0FESjs7QUFnQ2VFLDZHQUFNLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFiLEVBQW9CQyxrREFBcEIsQ0FBTixDQUFrQ2hCLE1BQWxDLENBQWYsRTs7Ozs7Ozs7Ozs7QUNwSEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7IElBd2FyZCB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBBd2FyZHNQcm9wcyB7XHJcbiAgZGF0YTogSUF3YXJkW107XHJcbn1cclxuXHJcbmNvbnN0IEF3YXJkcyA9ICh7IGRhdGEgfTogQXdhcmRzUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgzPkF3YXJkczwvaDM+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkF3YXJkXCI+XHJcbiAgICAgICAge2RhdGEubWFwKChhd2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtgYXdhcmRfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkF3YXJkLWF3YXJkLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2F3YXJkLmxvZ299IGFsdD17YXdhcmQuaXNzdWVyfSAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnthd2FyZC5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiQXdhcmQtYXdhcmQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7YXdhcmQudGl0bGV9XHJcbiAgICAgICAgICAgICAge2F3YXJkLmxpbmsmJiA8YSBocmVmPXthd2FyZC5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZXhzLzE2LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz48L2E+fVxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8cD57YXdhcmQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJBd2FyZC1hd2FyZC1kYXRlXCI+e2F3YXJkLmRhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLkF3YXJkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLWRhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1wbGFjZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuQXdhcmQtYXdhcmQtcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkF3YXJkLWF3YXJkLXBsYWNlIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5Bd2FyZC1hd2FyZC1kYXRlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBd2FyZHM7XHJcbiIsImltcG9ydCB7IElDb250YWN0IH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIENvbnRhY3RzUHJvcHMge1xyXG4gICAgZGF0YTogSUNvbnRhY3RbXTtcclxufVxyXG5cclxuY29uc3QgQ29udGFjdCA9ICh7IGRhdGEgfTogQ29udGFjdHNQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+Q29udGFjdDwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoY29udGFjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWN0LXR5cGVcIiBrZXk9e2Bza2lsbF8ke2luZGV4fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb250YWN0Lmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjb250YWN0Lmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPntjb250YWN0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5Db250YWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5Db250YWN0LXR5cGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Db250YWN0LXR5cGUgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5Db250YWN0LXR5cGUgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwiaW1wb3J0IHsgSVNjaG9vbEVudGl0eSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBFZHVjYXRpb25Qcm9wcyB7XHJcbiAgICBkYXRhOiBJU2Nob29sRW50aXR5W107XHJcbn1cclxuXHJcbmNvbnN0IEVkdWNhdGlvbiA9ICh7IGRhdGEgfTogRWR1Y2F0aW9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkVkdWNhdGlvbiAmIENvdXJzZXM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFZHVjYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoZW50aXR5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGVudGl0eV8ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkVkdWNhdGlvbi1lbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1wbGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbnRpdHkubG9nb30gYWx0PXtlbnRpdHkubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1uYW1lXCI+e2VudGl0eS5uYW1lfSA8c3BhbiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LWR1cmF0aW9uXCI+e2VudGl0eS5kdXJhdGlvbn08L3NwYW4+PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFZHVjYXRpb24tZW50aXR5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50aXR5LnRpdGxlLm1hcCgoc2luZ2xlVGl0bGU6YW55KSA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRWR1Y2F0aW9uLWVudGl0eS1zdWJqZWN0IEVkdWNhdGlvbi10aXRsZVwiPntzaW5nbGVUaXRsZS5uYW1lfXtzaW5nbGVUaXRsZS5saW5rJiY8YSBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGlua3NcIiBocmVmPXtzaW5nbGVUaXRsZS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL29mZmljZXhzLzE2LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz48L2E+fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FZHVjYXRpb24tZW50aXR5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRWR1Y2F0aW9uLWVudGl0eS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkVkdWNhdGlvbi1lbnRpdHktZHVyYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uOyIsImltcG9ydCB7IElXb3JrIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIEV4cGVyaWVuY2VQcm9wcyB7XHJcbiAgICBkYXRhOiBJV29ya1tdO1xyXG59XHJcblxyXG5jb25zdCBFeHBlcmllbmNlID0gKHsgZGF0YSB9OiBFeHBlcmllbmNlUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPkV4cGVyaWVuY2U8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHdvcmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgd29ya18ke2luZGV4fWB9IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29ya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBvc2l0aW9uXCI+e3dvcmsudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZHVyYXRpb25cIj57d29yay5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3dvcmsubG9nb30gYWx0PXt3b3JrLmNvbXBhbnl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1jb21wYW55XCI+e3dvcmsuY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57d29yay5sb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuZGVzY3JpcHRpb24ubWFwKChwb2ludCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHBvaW50XyR7aW5kZXh9YH0gPntwb2ludH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXN0YWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dvcmsuc3RhY2subWFwKCh0b29sLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10b29sXCIga2V5PXtgdG9vbF8ke2luZGV4fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0b29sLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dG9vbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLCAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcms6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2UgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXN0YWNre1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2x7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlOyIsImltcG9ydCB7IElJbnRyb2R1Y3Rpb24gfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcblxyXG5pbnRlcmZhY2UgSW50cm9kdWN0aW9uUHJvcHMge1xyXG4gICAgZGF0YTogSUludHJvZHVjdGlvbjtcclxufVxyXG5cclxuY29uc3QgSW50cm9kdWN0aW9uID0gKHsgZGF0YSB9OiBJbnRyb2R1Y3Rpb25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiSW50cm9kdWN0aW9uLWF2YXRhclwiIHNyYz17ZGF0YS5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1uYW1lXCI+e2RhdGEubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tdGl0bGVcIj57ZGF0YS5wb3NpdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIkludHJvZHVjdGlvbi1kZXNjcmlwdGlvblwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJJbnRyb2R1Y3Rpb24tbG9jYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRyb2R1Y3Rpb24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSW50cm9kdWN0aW9uLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvZHVjdGlvbi1xcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwcHg6XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRyb2R1Y3Rpb247IiwiaW1wb3J0IHsgSUxhbmd1YWdlIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIExhbmd1YWdlc1Byb3BzIHtcclxuICBkYXRhOiBJTGFuZ3VhZ2VbXTtcclxufVxyXG5cclxuY29uc3QgTGFuZ3VhZ2VzID0gKHsgZGF0YSB9OiBMYW5ndWFnZXNQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDM+TGFuZ3VhZ2VzPC9oMz5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzXCI+XHJcbiAgICAgICAge2RhdGEubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtgbGFuZ3VhZ2VfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGFuZ3VhZ2VcIj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIkxhbmd1YWdlcy1sYW5ndWFnZS1uYW1lXCI+IHtsYW5ndWFnZS5uYW1lfSB7bGFuZ3VhZ2UubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17bGFuZ3VhZ2UubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn08L2g2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJMYW5ndWFnZXMtbGFuZ3VhZ2UtbGV2ZWxcIj57bGFuZ3VhZ2UubGV2ZWx9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLkxhbmd1YWdlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuTGFuZ3VhZ2VzLWxhbmd1YWdlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5MYW5ndWFnZXMtbGlua3Mge1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VzO1xyXG4iLCJpbXBvcnQgeyBJV29yaywgSVB1YmxpY2F0aW9ucyB9IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgUHVibGljYXRpb25zUHJvcHMge1xyXG4gICAgZGF0YTogSVB1YmxpY2F0aW9uc1tdO1xyXG59XHJcblxyXG5jb25zdCBQdWJsaWNhdGlvbnMgPSAoeyBkYXRhIH06IFB1YmxpY2F0aW9uc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz5QdWJsaWNhdGlvbnM8L2gzPlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJFeHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHB1YmxpY2F0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHB1YmxpY2F0aW9uXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1wb3NpdGlvblwiPntwdWJsaWNhdGlvbi50aXRsZX17cHVibGljYXRpb24ubGluayYmPGEgY2xhc3NOYW1lPVwiTGFuZ3VhZ2VzLWxpbmtzXCIgaHJlZj17cHVibGljYXRpb24ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9vZmZpY2V4cy8xNi8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+PC9hPn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kdXJhdGlvblwiPntwdWJsaWNhdGlvbi5kdXJhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXBsYWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3B1YmxpY2F0aW9uLmxvZ299IGFsdD17cHVibGljYXRpb24uY29tcGFueX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWNvbXBhbnlcIj57cHVibGljYXRpb24uY29tcGFueX08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstbG9jYXRpb25cIj57cHVibGljYXRpb24ubG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwdWJsaWNhdGlvbi5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgcG9pbnRfJHtpbmRleH1gfSA+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstc3RhY2tcIj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDAsMjAwLDIwMCwgLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstcGxhY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1zdGFja3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXRvb2wgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVibGljYXRpb25zOyIsImltcG9ydCB7IElTa2lsbCB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmludGVyZmFjZSBTa2lsbHNQcm9wcyB7XHJcbiAgICBkYXRhOiBJU2tpbGxbXTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNraWxscyA9ICh7IGRhdGEsIHRpdGxlIH06IFNraWxsc1Byb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiU2tpbGxzXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2tpbGxzLXNraWxsXCIga2V5PXtgc2tpbGxfJHtpbmRleH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtza2lsbC5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2tpbGwubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuU2tpbGxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlNraWxscy1za2lsbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLlNraWxscy1za2lsbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7IiwiaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgbGluayB9IGZyb20gXCJmc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW50cm9kdWN0aW9uIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGF2YXRhcjogc3RyaW5nO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwb3NpdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElXb3JrIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBsb2dvOiBzdHJpbmc7XHJcbiAgICBjb21wYW55OiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgZHVyYXRpb246IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdbXTtcclxuICAgIHN0YWNrOiB7IG5hbWU6IHN0cmluZzsgaWNvbjogc3RyaW5nOyB9W107XHJcbiAgICBsaW5rPzpzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUHVibGljYXRpb25zIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjb21wYW55OiBzdHJpbmc7XHJcbiAgICBsb2dvOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgZHVyYXRpb246IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdbXTtcclxuICAgIGxpbms6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2Nob29sQXV4e1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBsaW5rPzpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2Nob29sRW50aXR5IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxvZ286IHN0cmluZztcclxuICAgIHRpdGxlOiBJU2Nob29sQXV4W107XHJcbiAgICBkdXJhdGlvbjogc3RyaW5nO1xyXG4gICAgY3JlZGVudGlhbExpbms/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNraWxsIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGN1cnJlbnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBd2FyZCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgbG9nbzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGxpbms6IHN0cmluZztcclxuICAgIGRhdGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTGFuZ3VhZ2Uge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGV2ZWw6IHN0cmluZztcclxuICAgIGxpbms/OnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlc3VtZSB7XHJcbiAgICBpbnRyb2R1Y3Rpb246IElJbnRyb2R1Y3Rpb247XHJcbiAgICBleHBlcmllbmNlOiBJV29ya1tdO1xyXG4gICAgZWR1Y2F0aW9uOiBJU2Nob29sRW50aXR5W107XHJcbiAgICBwdWJsaWNhdGlvbnM6IElQdWJsaWNhdGlvbnNbXTtcclxuICAgIHNraWxsczogSVNraWxsW107XHJcbiAgICBhd2FyZHM6IElBd2FyZFtdO1xyXG4gICAgbGFuZ3VhZ2VzOiBJTGFuZ3VhZ2VbXTtcclxuICAgIGNvbnRhY3Q6IElDb250YWN0W107XHJcbn1cclxuXHJcbmNvbnN0IFJlc3VtZTogSVJlc3VtZSA9IHtcclxuICAgIGludHJvZHVjdGlvbjoge1xyXG4gICAgICAgIG5hbWU6IFwiQWxiZXJ0byBDYW1wb3NcIixcclxuICAgICAgICBhdmF0YXI6IFwiLi9pbWFnZXMvYXZhdGFyLnBuZ1wiLFxyXG4gICAgICAgIGxvY2F0aW9uOiBcIk3DqXhpY29cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGdWxsLVN0YWNrIGRldmVsb3BlclwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcIkZ1bGwtU3RhY2sgZGV2ZWxvcGVyIEBUaGluY3JzICYgRnVsbC1TdGFjayBkZXZlbG9wZXIgQFVUQUdTIFwiXHJcbiAgICB9LFxyXG4gICAgZXhwZXJpZW5jZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGdWxsLVN0YWNrIERldmVsb3BlcicsXHJcbiAgICAgICAgICAgIGNvbXBhbnk6ICdUaGluY3JzJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3RoaW5jcnMucG5nJyxcclxuICAgICAgICAgICAgZHVyYXRpb246ICdKdWx5IDIwMTcgLSBQcmVzZW50JyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdHdWFkYWxhamFyYSwgTWV4aWNvJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdEZXZlbG9wbWVudCBvZiBjb21wb25lbnRzIGZvciB0aGUgbGFuZGluZyBwYWdlIHdpdGggQW5ndWxhciAnLFxyXG4gICAgICAgICAgICAgICAgJ0RldmVsb3BtZW50IG9mIHdlYiBzZXJ2aWNlcyB3aXRoIExhcmF2ZWwnLFxyXG4gICAgICAgICAgICAgICAgJ0RldmVsb3BtZW50IG9mIGNvbXBvbmVudHMgZm9yIHRoZSB0YWxlbnRzIGFuZCBldmFsdWF0b3JzIGFwcGxpY2F0aW9ucyB3aXRoIFJlYWN0JyxcclxuICAgICAgICAgICAgICAgIFwiRGV2ZWxvcG1lbnQgb2YgTUwgbW9kZWxzIGZvciBwcmVkaWN0aW9ucywgdGhlbiBjb25uZWN0IHRob3NlIHRvIHRoZSBMYXJhdmVsJ3MgUkVTVCBBUElcIixcclxuICAgICAgICAgICAgICAgIFwiSW50ZWdyYXRpb24gb2YgdGhlIFJFU1QgQVBJIHdpdGggdGhlIFJlYWN0IGFuZCBBbmd1bGFyIHByb2plY3RzXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbmZpZ3VyYXRpb24gb2YgSmVua2lucyB0byBDSSB3aXRoIHRoZSBHaXRMYWIgUmVwb3NpdG9yaWVzXCIsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHN0YWNrOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdBbmd1bGFyJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2FuZ3VsYXItaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdSZWFjdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9yZWFjdC5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb2RlanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnTGFyYXZlbCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9sYXJhdmVsLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ015U1FMJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL215c3FsLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0dpdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9naXQtaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdQeXRob24nLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcHl0aG9uLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0ZsYXNrJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2ZsYXNrLnN2ZycgfSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0plbmtpbnMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvamVua2lucy5zdmcnIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGluazpcImh0dHBzOi8vdGhpbmNycy5jb20vXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGdWxsLVN0YWNrIERldmVsb3BlcicsXHJcbiAgICAgICAgICAgIGNvbXBhbnk6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZGUgQWd1YXNjYWxpZW50ZXMnLFxyXG4gICAgICAgICAgICBsb2dvOiAnLi9pbWFnZXMvdXRhZ3MucG5nJyxcclxuICAgICAgICAgICAgZHVyYXRpb246ICdKYW51YXJ5IDIwMTkgLSBQcmVzZW50JyxcclxuICAgICAgICAgICAgbG9jYXRpb246ICdBZ3Vhc2NhbGllbnRlcywgTcOpeGljbycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAnRnVsbC1zdGFjayBkZXZlbG9wbWVudCBmb3IgZGlmZmVyZW50IHByb2plY3RzIHVzaW5nIHRoZSBNRUFOIGFuZCBNRUlOIHN0YWNrcycsXHJcbiAgICAgICAgICAgICAgICAnSW52b2x2ZWQgaW50byB0aGUgcGxhbm5pbmcvZGVzaWduaW5nIHBoYXNlIGZvciB0aGUgYXBwbGljYXRpb25zLidcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgc3RhY2s6IFtcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ01vbmdvREInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbW9uZ29kYi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdFeHByZXNzanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvZXhwcmVzcy5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdBbmd1bGFyJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2FuZ3VsYXItaWNvbi5zdmcnIH0sXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdOb2RlanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVHlwZXNjcmlwdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy90eXBlc2NyaXB0LWljb24uc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSW9uaWMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvaW9uaWMuc3ZnJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnR2l0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dpdC1pY29uLnN2ZycgfSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBlZHVjYXRpb246IFtcclxuICAgICAgICB7IG5hbWU6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZGUgQWd1YXNjYWxpZW50ZXMnLCBsb2dvOiAnLi9pbWFnZXMvdXRhZ3MucG5nJywgdGl0bGU6IFt7bmFtZTonSW5mb3JtYXRpb24gVGVjaG5vbG9naWVzIEVuZ2luZWVyaW5nLCBTb2Z0d2FyZSd9XSwgZHVyYXRpb246ICcyMDE5IC0gMjAyMCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZWwgUmV0b8OxbycsIGxvZ286ICcuL2ltYWdlcy91dHIucG5nJywgdGl0bGU6IFt7bmFtZTonSW5mb3JtYXRpb24gVGVjaG5vbG9naWVzIEFzc29jaWF0ZSwgU29mdHdhcmUnfV0sIGR1cmF0aW9uOiAnMjAxNiAtIDIwMTgnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTWFzc2FjaHVzZXR0cyBJbnN0aXR1dGUgb2YgVGVjaG5vbG9neScsIGxvZ286ICcuL2ltYWdlcy9taXQuc3ZnJywgdGl0bGU6IFt7bmFtZTonRGlnaXRhbCBUcmFuc2Zvcm1hdGlvbiwgQ291cnNlJywgbGluazonaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbUxxOVByYWNBVmxTX2pHb254NE5PUE11U0luVFIzZzAvdmlldz91c3A9c2hhcmluZyd9XSwgZHVyYXRpb246ICcyMDIwJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0FsZ29ucXVpbiBDb2xsZWdlIG9mIEFwcGxpZWQgQXJ0cyBhbmQgVGVjaG5vbG9neScsIGxvZ286ICcuL2ltYWdlcy9hYy5wbmcnLCB0aXRsZTogW3tuYW1lOidDb21wdXRlciBTY2llbmNlLCBDb3Vyc2VzJ31dLCBkdXJhdGlvbjogJ1NlcHRlbWJlciAyMDE5IC0gRGVjZW1iZXIgMjAxOScgfSxcclxuICAgICAgICB7IG5hbWU6ICdQaW1hIENvbW11bml0eSBDb2xsZWdlJywgbG9nbzogJy4vaW1hZ2VzL3BpbWEucG5nJywgdGl0bGU6IFt7bmFtZTonQnVzaW5lc3MgTWFuYWdlbWVudCwgQ291cnNlcyd9XSwgZHVyYXRpb246ICdBdWd1c3QgMjAxNiAtIERlY2VtYmVyIDIwMTYnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnVW5pdmVyc2lkYWQgQXV0w7Nub21hIGRlIEFndWFzY2FsaWVudGVzJywgbG9nbzogJy4vaW1hZ2VzL3VhYS5qcGcnLCB0aXRsZTogW3tuYW1lOidBbmRyb2lkIERldmVsb3BtZW50LCBDb3Vyc2VzJ31dLCBkdXJhdGlvbjogJ01hcmNoIDIwMTggLSBKdW5lIDIwMTgnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTGlua2VkaW4gTGVhcm5pbmcnLCBsb2dvOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbGlua2VkaW4uc3ZnJywgdGl0bGU6IFt7bmFtZTonVmlzdWFsIFN0dWRpbyBDb2RlJywgbGluazonaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xZDRmd3lqcERrYWt1NDlua3B2cnNsblp6aDNiVWtyUlUvdmlldz91c3A9c2hhcmluZyd9XSwgZHVyYXRpb246ICcyMDE5J30sXHJcbiAgICAgICAgeyBuYW1lOiAnJywgbG9nbzogJy4vaW1hZ2VzL3BsYXR6aS5wbmcnLCB0aXRsZTogW1xyXG4gICAgICAgICAgICB7bmFtZTonQ2FycmVyYSBCYXNlcyBkZSBEYXRvcycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF5a2wxbGhBOVBBRlk0U3N3RkhuT1ZQNzdiVFFhZmxfcy92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ2FycmVyYSBFc2N1ZWxhIGRlIEluZ2zDqXMnLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xX1FJbkoyMFE4LWNRTDNVUDNHdjFBWUs5R3JNbHVlN1Uvdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0NhcnJlcmEgRGVzYXJyb2xsbyBCYWNrZW5kIGNvbiBHbycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFrNUp2R0t1cURKczR5NkFFak9hNEtQT25HYXY5bF82eC92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgSmF2YSBTRScsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFkdTlHTDFXdVFVeEhWVjJnMnFmS0JoNF9NTXkwZE0zNC92aWV3P3VzcD1zaGFyaW5nXCJ9LCBcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIEdvJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTZLODJwN3pjVEIycTdSZzJaVmlqV3UwMGwyM1kxMkYxL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBNb25nb0RCJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTk5SFlRa3l3RUxiZzZWamNzMC1VdThGbkVjcWlReklsL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBCdWVuYXMgUHLDoWN0aWNhcycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFoM3RqU2JBSTVpUjE5TW1lQktYVWZ3MjFJaFF2R29UZy92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgSFRNTCBZIENTUycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFDRHZCUWhMeGFMR0tHcmlsMVFoNE9DMDQyZnRsUWdmay92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgU2VndXJpZGFkIEluZm9ybcOhdGljYScsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzEzV1JfcFVVaEYySGRBdGlTRGg5OElQS1VGZlljUlQzRi92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgUEhQIGNvbiBMYXJhdmVsJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhvWWZpdEtZYnpmR2VYdDJLbTk2R1FxU0Z5U250SmVfL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBQT08nLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xN3lHbGNwLWJmRi16MElRM0x1cGJFU2FSS2JWaXhOMTgvdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIFJlZGVzIGRlIEludGVybmV0JywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMTdEdmZ2bmJsV3lUTXpYQWtjZFIzaXUyeU5QQXBVMVZiL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBTQ1JVTScsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFCMFpMa0JLS3QtM2VUZ2NMZnU4V2VmdFR4aDVvNEhxcS92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgU1FMIHkgTXlTUUwnLCBsaW5rOlwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xaEkzUDZsRkZ4eTFqTXBUWU9qeUNsclgwOUZHZ1VZZnovdmlldz91c3A9c2hhcmluZ1wifSxcclxuICAgICAgICAgICAge25hbWU6J0N1cnNvIGRlIEJhc2VzIGRlIERhdG9zJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMVFQMWZYSS1EV0NVYi13V0trQTdqcGkyOGg0TWhMQUZjL3ZpZXc/dXNwPXNoYXJpbmdcIn0sXHJcbiAgICAgICAgICAgIHtuYW1lOidDdXJzbyBkZSBUZXJtaW5hbCB5IEzDrW5lYSBkZSBDb21hbmRvcycsIGxpbms6XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFUd1doYkdINVlNMmdld1dxcmkwVlo1LXR5Vmdxa0VTeC92aWV3P3VzcD1zaGFyaW5nXCJ9LFxyXG4gICAgICAgICAgICB7bmFtZTonQ3Vyc28gZGUgRnVuZGFtZW50b3MgZGUgR29vZ2xlIENsb3VkIFBsYXRmb3JtJywgbGluazpcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUlMd1hOemxTRGNJT0RuU2hPeFdjeHMtZWtFNmsyN1l5L3ZpZXc/dXNwPXNoYXJpbmdcIn1dLCBkdXJhdGlvbjogJzIwMTkgLSAyMDIwJywgY3JlZGVudGlhbExpbms6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xd0oxbXcwUUpYRkp0N2dkNHQ3OWxxMV8zczkwdThQRjY/dXNwPXNoYXJpbmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnJywgbG9nbzogJy4vaW1hZ2VzL21vbmdvdS5wbmcnLCB0aXRsZTogW3tuYW1lOidNb25nb0RCIEJhc2ljcycsIGxpbms6J2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxU3ozWEg3V1JjQ2ZQRkFIZUJjZUxFYTk5VkpWZGhnL3ZpZXc/dXNwPXNoYXJpbmcnIH1dLCBkdXJhdGlvbjogJ0F1Z3VzdCAyMDE5JywgY3JlZGVudGlhbExpbms6J2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWwxU3ozWEg3V1JjQ2ZQRkFIZUJjZUxFYTk5VkpWZGhnL3ZpZXc/dXNwPXNoYXJpbmcnfVxyXG4gICAgICAgIFxyXG4gICAgXSxcclxuICAgIHB1YmxpY2F0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdVbmRlcnN0YW5kaW5nIHRoZSBDcm93ZCBNYXJrZXRzIHRoYXQgV29ya2VycyBhbmQgUmVxdWVzdGVycyBJbWFnaW5lJyxcclxuICAgICAgICAgICAgY29tcGFueTogJ0Nhcm5lZ2llIE1lbGxvbiBVbml2ZXJzaXR5LCBDSSwgQUNNIENvbGxlY3RpdmUgSW50ZWxsaWdlbmNlIENvbmZlcmVuY2UgU2VyaWVzJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL2NtLnBuZycsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAnMjAxOScsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnUGl0dHNidXJnaCwgVVNBJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgICAgICAgICAgICdDYXJsb3MgVG94dGxpLCBKdWFuIFBhYmxvIENhc3RpbGxvLCBBbGJlcnRvIENhbXBvcywgQmVuamFtaW4gVi4gSGFucmFoYSwgS290YXJvIEhhcmEsIENocmlzIENhbGxpc29uLUJ1cmNoLCBKZWZmcmV5IEJpZ2hhbSwgS3Jpc3R5IE1pbGxhbmQsIEFiaWdhaWwgQWRhbXMsIFNhaXBoIFNhdmFnZSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGluazonaHR0cHM6Ly9jaS5hY20ub3JnLzIwMTkvYXNzZXRzL3Byb2NlZWRpbmdzL0NJXzIwMTlfcGFwZXJfNjAucGRmJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBza2lsbHM6IFtcclxuICAgICAgICB7IG5hbWU6ICdKYXZhU2NyaXB0JywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2phdmFzY3JpcHQuc3ZnJywgY3VycmVudDp0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnUmVhY3QnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcmVhY3Quc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0xhcmF2ZWwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbGFyYXZlbC5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnVHlwZVNjcmlwdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy90eXBlc2NyaXB0LWljb24uc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0FuZ3VsYXInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvYW5ndWxhci1pY29uLnN2ZycsIGN1cnJlbnQ6dHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0lvbmljJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2lvbmljLnN2ZycsIGN1cnJlbnQ6dHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ05vZGUuanMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3Mvbm9kZWpzLWljb24uc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ01vbmdvREInLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbW9uZ29kYi5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTXlTUUwnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvbXlzcWwuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dpdCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9naXQtaWNvbi5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSmlyYScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qaXJhLnN2ZycsIGN1cnJlbnQ6IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6ICdIVE1MNScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9odG1sLTUuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0NTUzMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvY3NzLTMuc3ZnJywgY3VycmVudDogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0plbmtpbnMnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvamVua2lucy5zdmcnLCBjdXJyZW50OiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnSmF2YScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9qYXZhLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdQb3N0Z3JlU1FMJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3Bvc3RncmVzcWwuc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0MjJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2Muc3ZnJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dvJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL2dvLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdQSFAnLCBpY29uOiAnaHR0cHM6Ly9jZG4uc3ZncG9ybi5jb20vbG9nb3MvcGhwLnN2ZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdTYXNzJywgaWNvbjogJ2h0dHBzOi8vY2RuLnN2Z3Bvcm4uY29tL2xvZ29zL3Nhc3Muc3ZnJ30sXHJcbiAgICBdLFxyXG4gICAgYXdhcmRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hvbm9yYWJsZSBNZW50aW9uIGluIHRoZSBJVCBBc3NvY2lhdGUgRGVncmVlJyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3V0ci5wbmcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0FndWFzY2FsaWVudGVzLCBNZXhpY28nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdVbml2ZXJzaWRhZCBUZWNub2zDs2dpY2EgZWwgUmV0b8OxbycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmVjb2dpbml6ZWQgYXMgb25lIG9mIHRoZSBiZXN0IGdyYWRlcyBpbiB0aGUgSVQgYXNzb2NpYXRlIGRlZ3JlZSBjb3Vyc2VkIGZyb20gMjAxNiB0byAyMDE4JyxcclxuICAgICAgICAgICAgbGluazogJ2h0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/ZmVhdHVyZT1wbGF5ZXJfZW1iZWRkZWQmdj1RUUw5UHB2TndSbycsXHJcbiAgICAgICAgICAgIGRhdGU6ICdTZXB0ZW1iZXIgMjAxNiAtIERlY2VtYmVyIDIwMTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnVGFsZW50IEhhY2thdG9uIEZpbmFsaXN0JyxcclxuICAgICAgICAgICAgbG9nbzogJy4vaW1hZ2VzL3RhbGVudC5wbmcnLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogJ0d1YWRhbGFqYXJhLCBNZXhpY28nLFxyXG4gICAgICAgICAgICBpc3N1ZXI6ICdUYWxlbnQgTmV0d29yaycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGFydCBvZiB0aGUgdGVhbSBmaW5hbGlzdCBpbiB0aGUgVGFsZW50IEhhY2thdGhvbiAyMDE4LCBkZXZlbG9waW5nIGEgd2ViIGFwcGxpY2F0aW9uIHRoYXQgYW5hbGl6ZSBzZW50aW1lbnRzIG9mIG5ld3Mgb24gVHdpdHRlciBpbiBvcmRlciB0byBmaW5kIGFuZCBjbGFzc2lmeSBmYWtlIG5ld3MnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD9mZWF0dXJlPXBsYXllcl9lbWJlZGRlZCZ2PVFRTDlQcHZOd1JvJyxcclxuICAgICAgICAgICAgZGF0ZTogJ0FwcmlsIDIwMTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUnVtYm8gYSBKYXDDs24nLFxyXG4gICAgICAgICAgICBsb2dvOiAnLi9pbWFnZXMvcmVpLnBuZycsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiAnVG9reW8sIEphcGFuJyxcclxuICAgICAgICAgICAgaXNzdWVyOiAnVGFsZW50IE5ldHdvcmsnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1dpbm5lciBvZiB0aGUgYFJ1bWJvIGEgSmFww7NuYCBhd2FyZCBpbiB3aGljaCBJIHdhcyByZWNvZ25pemVkIGFzIG9uZSBvZiB0aGUgMTAgeW91bmcgcHJvbWlzZXMgb2YgdGhlIHN0YXRlLCB0aGVuIGhhdmluZyBtZWV0aW5ncyB3aXRoIGF1dGhvcml0aWVzIHRocm91Z2ggZGlmZmVyZW50IGNpdGllcyBhdCBKYXBhbiAnLFxyXG4gICAgICAgICAgICBsaW5rOiAnaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD9mZWF0dXJlPXBsYXllcl9lbWJlZGRlZCZ2PVFRTDlQcHZOd1JvJyxcclxuICAgICAgICAgICAgZGF0ZTogJ0FwcmlsIDIwMTQnXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBsYW5ndWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoJyxcclxuICAgICAgICAgICAgbGV2ZWw6ICdQcm9mZXNzaW9uYWwgd29ya2luZyBwcm9maWNpZW5jeScsXHJcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFNc3RaUWNRejdUNktoNl92dHFNQVBEd24xakVLQk9GYS92aWV3P3VzcD1zaGFyaW5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU3BhbmlzaCcsXHJcbiAgICAgICAgICAgIGxldmVsOiAnTmF0aXZlIG9yIGJpbGluZ3VhbCBwcm9maWNpZW5jeSdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgY29udGFjdDogW1xyXG4gICAgICAgIHsgbmFtZTogJ0FsYmVydG8gQ2FtcG9zJywgaWNvbjogJy4vaW1hZ2VzL2xpbmtlZGluLnBuZycsIGxpbms6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWxiZXJ0b2NhbXBvc2gvJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2FjYW1wb3NoZCcsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9naXRodWItaWNvbi5zdmcnLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2FjYW1wb3NoZCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdhbGJlcnRvY2FtcG9zaGRlekBob3RtYWlsLmNvbScsIGljb246ICdodHRwczovL2Nkbi5zdmdwb3JuLmNvbS9sb2dvcy9nb29nbGUtZ21haWwuc3ZnJywgbGluazogJ21haWx0bzphbGJlcnRvY2FtcG9zaGRlekBob3RtYWlsLmNvbScgfSxcclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHdpdGhHQSBmcm9tICduZXh0LWdhJztcclxuXHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpZW5jZSc7XHJcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9lZHVjYXRpb24nO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uJztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL3NraWxscyc7XHJcbmltcG9ydCBMYW5ndWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5ndWFnZXMnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QnO1xyXG5pbXBvcnQgQXdhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvYXdhcmRzJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFB1YmxpY2F0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3B1YmxpY2F0aW9ucyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHksIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsLjEpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5SZXN1bWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1jb250ZW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLW1haW57XHJcbiAgICAgICAgICAgIGZsZXg6IDIgNTIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLXNpZGViYXJ7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuKTtcclxuXHJcbmNvbnN0IFJlc3VtZSA9ICgpID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e2RhdGEuaW50cm9kdWN0aW9uLm5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5pbnRyb2R1Y3Rpb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIuL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiLi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi4vZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi4vZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNkYTUzMmNcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiPjwvbWV0YT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEludHJvZHVjdGlvbiBkYXRhPXtkYXRhLmludHJvZHVjdGlvbn0gLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPEV4cGVyaWVuY2UgZGF0YT17ZGF0YS5leHBlcmllbmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEVkdWNhdGlvbiBkYXRhPXtkYXRhLmVkdWNhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgIDxQdWJsaWNhdGlvbnMgZGF0YT17ZGF0YS5wdWJsaWNhdGlvbnN9Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPFNraWxscyBkYXRhPXtkYXRhLnNraWxscy5maWx0ZXIoc2tpbGwgPT4gc2tpbGwuY3VycmVudCl9IHRpdGxlPVwiQ3VycmVudCBTdGFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIGRhdGE9e2RhdGEuc2tpbGxzLmZpbHRlcihza2lsbCA9PiAhc2tpbGwuY3VycmVudCl9IHRpdGxlPVwiSSBIYXZlIFVzZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhbmd1YWdlcyBkYXRhPXtkYXRhLmxhbmd1YWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxBd2FyZHMgZGF0YT17ZGF0YS5hd2FyZHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdCBkYXRhPXtkYXRhLmNvbnRhY3R9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAge3N0eWxlc31cclxuICAgIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShwcm9jZXNzLmVudi5HQV9JRCwgUm91dGVyKShSZXN1bWUpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
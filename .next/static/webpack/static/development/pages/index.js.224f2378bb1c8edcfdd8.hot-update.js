webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/publications.tsx":
/*!*************************************!*\
  !*** ./components/publications.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\react\\my-cv\\components\\publications.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Publications = function Publications(_ref) {
  var data = _ref.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-3347548585",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Publications"), __jsx("article", {
    className: "jsx-3347548585" + " " + "Experience",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, data.map(function (work, index) {
    return __jsx("div", {
      key: "work_".concat(index),
      className: "jsx-3347548585" + " " + "Experience-work",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "jsx-3347548585" + " " + "Experience-work-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 29
      }
    }, __jsx("h4", {
      className: "jsx-3347548585" + " " + "Experience-work-position",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 33
      }
    }, work.title), __jsx("span", {
      className: "jsx-3347548585" + " " + "Experience-work-duration",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 33
      }
    }, work.duration)), __jsx("div", {
      className: "jsx-3347548585" + " " + "Experience-work-place",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: work.logo,
      alt: work.company,
      className: "jsx-3347548585",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "jsx-3347548585",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 33
      }
    }, __jsx("h6", {
      className: "jsx-3347548585" + " " + "Experience-work-company",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 37
      }
    }, work.company), __jsx("span", {
      className: "jsx-3347548585" + " " + "Experience-work-location",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 37
      }
    }, work.location))), __jsx("ul", {
      className: "jsx-3347548585" + " " + "Experience-work-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, work.description.map(function (point, index) {
      return __jsx("li", {
        key: "point_".concat(index),
        className: "jsx-3347548585",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 37
        }
      }, point);
    })), __jsx("div", {
      className: "jsx-3347548585" + " " + "Experience-work-stack",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, work.stack.map(function (tool, index) {
      return __jsx("div", {
        key: "tool_".concat(index),
        className: "jsx-3347548585" + " " + "Experience-work-tool",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 37
        }
      }, __jsx("img", {
        src: tool.icon,
        className: "jsx-3347548585",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 41
        }
      }), __jsx("span", {
        className: "jsx-3347548585",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 41
        }
      }, tool.name));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3347548585",
    __self: _this
  }, ".Experience.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 1rem;}.Experience-work.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 0;border-bottom:1px solid rgba(200,200,200,.2);}.Experience-work.jsx-3347548585:first-child{padding-top:0;}.Experience-work-title.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.Experience-work-duration.jsx-3347548585{font-size:1rem;margin:0 1rem opacity:.5;margin-left:1rem;}.Experience-work-place.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;}.Experience-work-place.jsx-3347548585 img.jsx-3347548585{max-height:45px;max-width:100px;justify-self:center;}.Experience-work-place.jsx-3347548585 div.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:1rem;}.Experience-work-stack.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1rem;}.Experience-work-tool.jsx-3347548585{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 1rem;}.Experience-work-tool.jsx-3347548585 img.jsx-3347548585{width:20px;margin-right:.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xccmVhY3RcXG15LWN2XFxjb21wb25lbnRzXFxwdWJsaWNhdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFHc0MsQUFLQSxBQU1DLEFBR0QsQUFLRSxBQU9GLEFBTUcsQUFNSCxBQU1BLEFBTUEsQUFNRixXQUNRLEdBN0N2QixDQVNlLENBWUssY0F5QnBCLEVBdkJELFFBYnNCLFlBYXJCLEtBWkEsaUJBdEIwQixBQUtBLEFBU0QsQUFZRixBQVlHLEFBTVAsQUFNSSx5REFMSCxnQkFDcEIsS0E3Q21CLEFBS0EsQUFpQ0UsZUFyQ3JCLEFBS2tELEFBb0IvQixBQXdCRyxFQVh0QixNQXpCQSxPQWFBLEdBd0JBLDJCQTVDQSIsImZpbGUiOiJDOlxcVXNlcnNcXEZTLTE2MTJcXERvY3VtZW50c1xccHJvamVjdHNcXHJlYWN0XFxteS1jdlxcY29tcG9uZW50c1xccHVibGljYXRpb25zLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElXb3JrIH0gZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xyXG5cclxuaW50ZXJmYWNlIFB1YmxpY2F0aW9uc1Byb3BzIHtcclxuICAgIGRhdGE6IElXb3JrW107XHJcbn1cclxuXHJcbmNvbnN0IFB1YmxpY2F0aW9ucyA9ICh7IGRhdGEgfTogUHVibGljYXRpb25zUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPlB1YmxpY2F0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgod29yaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2B3b3JrXyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstcG9zaXRpb25cIj57d29yay50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1kdXJhdGlvblwiPnt3b3JrLmR1cmF0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstcGxhY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17d29yay5sb2dvfSBhbHQ9e3dvcmsuY29tcGFueX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLWNvbXBhbnlcIj57d29yay5jb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkV4cGVyaWVuY2Utd29yay1sb2NhdGlvblwiPnt3b3JrLmxvY2F0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5kZXNjcmlwdGlvbi5tYXAoKHBvaW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgcG9pbnRfJHtpbmRleH1gfSA+e3BvaW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJFeHBlcmllbmNlLXdvcmstc3RhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d29yay5zdGFjay5tYXAoKHRvb2wsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRXhwZXJpZW5jZS13b3JrLXRvb2xcIiBrZXk9e2B0b29sXyR7aW5kZXh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Rvb2wuaWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b29sLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjAwLDIwMCwyMDAsIC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yazpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXJlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuRXhwZXJpZW5jZS13b3JrLXBsYWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay1wbGFjZSBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstc3RhY2t7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5FeHBlcmllbmNlLXdvcmstdG9vbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLkV4cGVyaWVuY2Utd29yay10b29sIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1YmxpY2F0aW9uczsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\react\\\\my-cv\\\\components\\\\publications.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Publications);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-ga */ "./node_modules/next-ga/index.js");
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
var _this = undefined,
    _jsxFileName = "C:\\Users\\FS-1612\\Documents\\projects\\react\\my-cv\\pages\\index.tsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var styles = __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1337055790",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');body,h1,h2,h3,h4,h5,h6{border:0;padding:0;margin:0;}body,h2{font-family:'Roboto',sans-serif;font-weight:300;}a{-webkit-text-decoration:none;text-decoration:none;color:black;}h1{font-weight:500;}h3{font-size:2rem;font-weight:400;margin:2rem 0;background-color:rgba(200,200,200,.1);padding:1rem;}h4{font-size:1.7rem;font-weight:500;}h5{font-weight:400;font-size:1.5rem;}h6{font-weight:400;font-size:1.2rem;}p{max-width:800px;}.Resume{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1rem;width:100vw;max-width:1500px;margin:auto;box-sizing:border-box;}.Resume-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Resume-main{-webkit-flex:2 520px;-ms-flex:2 520px;flex:2 520px;margin:0 1rem;}.Resume-sidebar{-webkit-flex:1 100px;-ms-flex:1 100px;flex:1 100px;margin:0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRlMtMTYxMlxcRG9jdW1lbnRzXFxwcm9qZWN0c1xccmVhY3RcXG15LWN2XFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCdUIsQUFFK0YsQUFFekUsQUFNd0IsQUFJWixBQUlMLEFBR0QsQUFPRSxBQUlELEFBSUEsQUFJQSxBQUlILEFBU0EsQUFLQSxBQUlBLFNBekRILE1BaUJNLENBSHBCLEFBY3FCLEFBSUEsQUFJckIsQ0Fab0IsRUF2QlAsU0FDYixHQWdCa0IsQ0FaRSxDQW1CcEIsQUFJQSxBQUlBLFlBZDBDLEdBWjFDLEVBR2dCLENBNENFLEFBSUEsV0EvQ2xCLEdBNENBLEFBSUEsU0FuQjBCLEFBU1AsU0E3QkYsYUFDakIsbUNBOEJELHFCQVZ1QixrQkFDTixZQUNLLGlCQUNMLFlBQ1Usc0JBQzFCLGFBS0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxGUy0xNjEyXFxEb2N1bWVudHNcXHByb2plY3RzXFxyZWFjdFxcbXktY3ZcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHdpdGhHQSBmcm9tICduZXh0LWdhJztcclxuXHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpZW5jZSc7XHJcbmltcG9ydCBFZHVjYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9lZHVjYXRpb24nO1xyXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uJztcclxuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL3NraWxscyc7XHJcbmltcG9ydCBMYW5ndWFnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5ndWFnZXMnO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QnO1xyXG5pbXBvcnQgQXdhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvYXdhcmRzJztcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFB1YmxpY2F0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3B1YmxpY2F0aW9ucyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAoXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICAgIGJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvZHksIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLDIwMCwyMDAsLjEpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5SZXN1bWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc3VtZS1jb250ZW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLW1haW57XHJcbiAgICAgICAgICAgIGZsZXg6IDIgNTIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuUmVzdW1lLXNpZGViYXJ7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuKTtcclxuXHJcbmNvbnN0IFJlc3VtZSA9ICgpID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc3VtZVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e2RhdGEuaW50cm9kdWN0aW9uLm5hbWV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5pbnRyb2R1Y3Rpb24uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIuL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiLi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi4vZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi4vZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNkYTUzMmNcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiPjwvbWV0YT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEludHJvZHVjdGlvbiBkYXRhPXtkYXRhLmludHJvZHVjdGlvbn0gLz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPEV4cGVyaWVuY2UgZGF0YT17ZGF0YS5leHBlcmllbmNlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEVkdWNhdGlvbiBkYXRhPXtkYXRhLmVkdWNhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgIDxQdWJsaWNhdGlvbnMgZGF0YT17ZGF0YS5wdWJsaWNhdGlvbnN9Lz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXN1bWUtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPFNraWxscyBkYXRhPXtkYXRhLnNraWxscy5maWx0ZXIoc2tpbGwgPT4gc2tpbGwuY3VycmVudCl9IHRpdGxlPVwiQ3VycmVudCBTdGFja1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpbGxzIGRhdGE9e2RhdGEuc2tpbGxzLmZpbHRlcihza2lsbCA9PiAhc2tpbGwuY3VycmVudCl9IHRpdGxlPVwiSSBIYXZlIFVzZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExhbmd1YWdlcyBkYXRhPXtkYXRhLmxhbmd1YWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDxBd2FyZHMgZGF0YT17ZGF0YS5hd2FyZHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdCBkYXRhPXtkYXRhLmNvbnRhY3R9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAge3N0eWxlc31cclxuICAgIDwvc2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShwcm9jZXNzLmVudi5HQV9JRCwgUm91dGVyKShSZXN1bWUpOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\FS-1612\\\\Documents\\\\projects\\\\react\\\\my-cv\\\\pages\\\\index.tsx */");

var Resume = function Resume() {
  return __jsx("section", {
    className: "Resume",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction.name), __jsx("meta", {
    name: "description",
    content: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction.description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "./favicon/apple-touch-icon.png",
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "./favicon/site.webmanifest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#da532c",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })), __jsx(_components_introduction__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].introduction,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx("section", {
    className: "Resume-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "Resume-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_components_experience__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].experience,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }), __jsx(_components_education__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].education,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }), __jsx(_components_publications__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].publications,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  })), __jsx("section", {
    className: "Resume-sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx(_components_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].skills.filter(function (skill) {
      return skill.current;
    }),
    title: "Current Stack",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }), __jsx(_components_skills__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].skills.filter(function (skill) {
      return !skill.current;
    }),
    title: "I Have Used",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), __jsx(_components_languages__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].languages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }), __jsx(_components_awards__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].awards,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), __jsx(_components_contact__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: _data_data__WEBPACK_IMPORTED_MODULE_5__["default"].contact,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }))), styles);
};

/* harmony default export */ __webpack_exports__["default"] = (next_ga__WEBPACK_IMPORTED_MODULE_4___default()(undefined, next_router__WEBPACK_IMPORTED_MODULE_3___default.a)(Resume));

/***/ })

})
//# sourceMappingURL=index.js.224f2378bb1c8edcfdd8.hot-update.js.map
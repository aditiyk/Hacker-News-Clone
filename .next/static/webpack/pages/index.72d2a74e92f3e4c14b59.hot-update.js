self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CommentList.js":
/*!***********************************!*\
  !*** ./components/CommentList.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./components/StoryList.js":
/*!*********************************!*\
  !*** ./components/StoryList.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CommentList */ "./components/CommentList.js");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_CommentList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Aditi\\Documents\\GitHub\\Hacker-News\\components\\StoryList.js",
    _this = undefined;






var StoryList = function StoryList(_ref) {
  var stories = _ref.stories;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "jsx-3440204993" + " " + "story-list",
    children: [stories.hits.map(function (story) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "jsx-3440204993" + " " + "story",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          className: "jsx-3440204993" + " " + "story-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            href: story.url,
            className: "jsx-3440204993",
            children: story.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 7,
            columnNumber: 37
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "jsx-3440204993" + " " + "story-details",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
            className: "jsx-3440204993",
            children: [story.points || 0, " points"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/story?objectID=".concat(story.objectID),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              className: "jsx-3440204993",
              children: [story.num_comments || 0, " comments"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }, _this)]
      }, story.id, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3440204993",
      children: ".story-list.jsx-3440204993{padding:0px 100px 0px 100px;box-sizing:border-box;}.story-title.jsx-3440204993{font-size:26px;margin:40px;margin-bottom:5px;}.story-title.jsx-3440204993 a.jsx-3440204993{-webkit-text-decoration:none;text-decoration:none;color:#ffa500;font-family:'Inconsolata',sans-serif;text-transform:uppercase;}.story-details.jsx-3440204993{margin:10px;padding:20px;font-style:italic;}.story-details.jsx-3440204993 a.jsx-3440204993{-webkit-text-decoration:none;text-decoration:none;color:#ffe5b4;padding:9px;margin:9px;font-style:italic;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRpdGlcXERvY3VtZW50c1xcR2l0SHViXFxIYWNrZXItTmV3c1xcY29tcG9uZW50c1xcU3RvcnlMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHcUMsQUFLYixBQU9NLEFBUVYsQUFNVSxZQUxSLEdBZkYsVUFnQk8sRUFmQSxDQU5JLGVBdUIxQixFQWRBLEtBUEEsQUFVaUIsQUFjQyxjQWJ1QixBQWN6QixZQUNELFdBQ08sY0FmTSxJQWdCNUIscUJBZkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZGl0aVxcRG9jdW1lbnRzXFxHaXRIdWJcXEhhY2tlci1OZXdzXFxjb21wb25lbnRzXFxTdG9yeUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbWVudExpc3RcIjtcclxuY29uc3QgU3RvcnlMaXN0ID0gKHtzdG9yaWVzfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1saXN0XCI+XHJcbiAgICB7c3Rvcmllcy5oaXRzLm1hcCgoc3RvcnkpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnlcIiBrZXk9e3N0b3J5LmlkfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3RvcnktdGl0bGVcIj48YSBocmVmPXtzdG9yeS51cmx9PntzdG9yeS50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5LWRldGFpbHNcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3N0b3J5LnBvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/b2JqZWN0SUQ9JHtzdG9yeS5vYmplY3RJRH1gfT5cclxuICAgICAgICAgICAgPGE+e3N0b3J5Lm51bV9jb21tZW50cyB8fCAwfSBjb21tZW50czwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApKX1cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAuc3RvcnktbGlzdHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTAwcHggMHB4IDEwMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgfVxyXG4gICAgLnN0b3J5LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICBtYXJnaW46NDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5zdG9yeS10aXRsZSBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgIGNvbG9yOiAjZmZhNTAwO1xyXG4gICAgICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG4gICAgLnN0b3J5LWRldGFpbHN7XHJcbiAgICAgICAgbWFyZ2luOjEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLnN0b3J5LWRldGFpbHMgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmU1YjQ7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgIG1hcmdpbjogOXB4OyAgIFxyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG48L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcnlMaXN0OyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Aditi\\\\Documents\\\\GitHub\\\\Hacker-News\\\\components\\\\StoryList.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = StoryList;
/* harmony default export */ __webpack_exports__["default"] = (StoryList);

var _c;

$RefreshReg$(_c, "StoryList");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzJkMmE3NGU5MmYzZTRjMTRiNTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLHNCQUNkO0FBQUEsd0NBQWUsWUFBZjtBQUFBLGVBQ0NBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSwwQkFDbEI7QUFBQSw0Q0FBZSxPQUFmO0FBQUEsZ0NBQ0k7QUFBQSw4Q0FBYyxhQUFkO0FBQUEsaUNBQTRCO0FBQUcsZ0JBQUksRUFBRUEsS0FBSyxDQUFDQyxHQUFmO0FBQUE7QUFBQSxzQkFBcUJELEtBQUssQ0FBQ0U7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSw4Q0FBZSxlQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBLHVCQUFPRixLQUFLLENBQUNHLE1BQU4sSUFBZ0IsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSw0QkFBcUJILEtBQUssQ0FBQ0ksUUFBM0IsQ0FBVjtBQUFBLG1DQUNBO0FBQUE7QUFBQSx5QkFBSUosS0FBSyxDQUFDSyxZQUFOLElBQXNCLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsU0FBNEJMLEtBQUssQ0FBQ00sRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURrQjtBQUFBLEtBQWpCLENBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFsQjs7S0FBTVY7QUFzRE4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yeUxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0XCI7XHJcbmNvbnN0IFN0b3J5TGlzdCA9ICh7c3Rvcmllc30pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RvcnktbGlzdFwiPlxyXG4gICAge3N0b3JpZXMuaGl0cy5tYXAoKHN0b3J5KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3J5XCIga2V5PXtzdG9yeS5pZH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN0b3J5LXRpdGxlXCI+PGEgaHJlZj17c3RvcnkudXJsfT57c3RvcnkudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntzdG9yeS5wb2ludHMgfHwgMH0gcG9pbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3J5P29iamVjdElEPSR7c3Rvcnkub2JqZWN0SUR9YH0+XHJcbiAgICAgICAgICAgIDxhPntzdG9yeS5udW1fY29tbWVudHMgfHwgMH0gY29tbWVudHM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKSl9XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLnN0b3J5LWxpc3R7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAxMDBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIH1cclxuICAgIC5zdG9yeS10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgbWFyZ2luOjQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuc3RvcnktdGl0bGUgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICBjb2xvcjogI2ZmYTUwMDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuICAgIC5zdG9yeS1kZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5zdG9yeS1kZXRhaWxzIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZlNWI0O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICBtYXJnaW46IDlweDsgICBcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5TGlzdDsiXSwibmFtZXMiOlsiTGluayIsIkNvbW1lbnRMaXN0IiwiU3RvcnlMaXN0Iiwic3RvcmllcyIsImhpdHMiLCJtYXAiLCJzdG9yeSIsInVybCIsInRpdGxlIiwicG9pbnRzIiwib2JqZWN0SUQiLCJudW1fY29tbWVudHMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=
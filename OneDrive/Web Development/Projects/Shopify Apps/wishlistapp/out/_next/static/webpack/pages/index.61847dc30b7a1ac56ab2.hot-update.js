webpackHotUpdate_N_E("pages/index",{

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Matt\\OneDrive\\Web Development\\Projects\\Shopify Apps\\wishlistapp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"; // Sets the state for the resource picker

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSelection", function (resources) {
      _this.setState({
        open: false
      });

      console.log(resources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }
      }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
        primaryAction: {
          content: "Select products",
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"] // Resource picker component
      , {
        resourceType: "Product",
        showVariants: false,
        open: this.state.open,
        onSelection: function onSelection(resources) {
          return _this2.handleSelection(resources);
        },
        onCancel: function onCancel() {
          return _this2.setState({
            open: false
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
        heading: "Discount your products temporarily",
        action: {
          content: "Select products",
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        },
        image: img,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, "Select products to change their price temporarily."))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsIm9wZW4iLCJyZXNvdXJjZXMiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50Iiwib25BY3Rpb24iLCJzdGF0ZSIsImhhbmRsZVNlbGVjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLG1FQUFaLEMsQ0FFQTs7SUFDTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUFFQyxVQUFJLEVBQUU7QUFBUixLOzswTkFnQ1UsVUFBQ0MsU0FBRCxFQUFlO0FBQy9CLFlBQUtDLFFBQUwsQ0FBYztBQUFFRixZQUFJLEVBQUU7QUFBUixPQUFkOztBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUNELEs7Ozs7Ozs7NkJBbENRO0FBQUE7O0FBQ1AsYUFDRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtFQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUNiSSxpQkFBTyxFQUFFLGlCQURJO0FBRWJDLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNKLFFBQUwsQ0FBYztBQUFFRixrQkFBSSxFQUFFO0FBQVIsYUFBZCxDQUFOO0FBQUE7QUFGRyxTQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFPRSxNQUFDLHdFQUFELENBQWdCO0FBQWhCO0FBQ0Usb0JBQVksRUFBQyxTQURmO0FBRUUsb0JBQVksRUFBRSxLQUZoQjtBQUdFLFlBQUksRUFBRSxLQUFLTyxLQUFMLENBQVdQLElBSG5CO0FBSUUsbUJBQVcsRUFBRSxxQkFBQ0MsU0FBRDtBQUFBLGlCQUFlLE1BQUksQ0FBQ08sZUFBTCxDQUFxQlAsU0FBckIsQ0FBZjtBQUFBLFNBSmY7QUFLRSxnQkFBUSxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUYsZ0JBQUksRUFBRTtBQUFSLFdBQWQsQ0FBTjtBQUFBLFNBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBGLEVBY0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywyREFBRDtBQUNFLGVBQU8sRUFBQyxvQ0FEVjtBQUVFLGNBQU0sRUFBRTtBQUNOSyxpQkFBTyxFQUFFLGlCQURIO0FBRU5DLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNKLFFBQUwsQ0FBYztBQUFFRixrQkFBSSxFQUFFO0FBQVIsYUFBZCxDQUFOO0FBQUE7QUFGSixTQUZWO0FBTUUsYUFBSyxFQUFFRixHQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQVJGLENBREYsQ0FkRixDQURGO0FBNkJEOzs7O0VBaENpQlcsNENBQUssQ0FBQ0MsUzs7QUF1Q1hYLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxODQ3ZGMzMGI3YTFhYzU2YWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWFkaW5nLCBQYWdlLCBUZXh0U3R5bGUsIExheW91dCwgRW1wdHlTdGF0ZSB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuXG5jb25zdCBpbWcgPSBcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnXCI7XG5cbi8vIFNldHMgdGhlIHN0YXRlIGZvciB0aGUgcmVzb3VyY2UgcGlja2VyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICBjb250ZW50OiBcIlNlbGVjdCBwcm9kdWN0c1wiLFxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxSZXNvdXJjZVBpY2tlciAvLyBSZXNvdXJjZSBwaWNrZXIgY29tcG9uZW50XG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgaGVhZGluZz1cIkRpc2NvdW50IHlvdXIgcHJvZHVjdHMgdGVtcG9yYXJpbHlcIlxuICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IHByb2R1Y3RzXCIsXG4gICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbWFnZT17aW1nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyB0byBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHkuPC9wPlxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc291cmNlcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
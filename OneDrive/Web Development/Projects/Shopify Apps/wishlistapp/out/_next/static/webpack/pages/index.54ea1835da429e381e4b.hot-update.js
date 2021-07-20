webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ResourceList */ "./pages/components/ResourceList.js");







var _jsxFileName = "C:\\Users\\Matt\\OneDrive\\Web Development\\Projects\\Shopify Apps\\wishlistapp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

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
      var idsFromResources = resources.selection.map(function (product) {
        return product.id;
      });

      _this.setState({
        open: false
      });

      store_js__WEBPACK_IMPORTED_MODULE_12___default.a.set("ids", idsFromResources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // A constant that defines your app's empty state
      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_12___default.a.get("ids");
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Page"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }
      }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__["TitleBar"], {
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
          lineNumber: 18,
          columnNumber: 9
        }
      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__["ResourcePicker"], {
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
          lineNumber: 24,
          columnNumber: 9
        }
      }), emptyState ? // Controls the layout of your app's empty state
      __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["EmptyState"], {
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
          lineNumber: 33,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, "Select products to change their price temporarily."))) : // Uses the new resource list that retrieves products by IDs
      __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJlbXB0eVN0YXRlIiwiZ2V0IiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLG1FQUFaOztJQUVNQyxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQUVDLFVBQUksRUFBRTtBQUFSLEs7OzBOQXVDVSxVQUFDQyxTQUFELEVBQWU7QUFDL0IsVUFBTUMsZ0JBQWdCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLGVBQWFBLE9BQU8sQ0FBQ0MsRUFBckI7QUFBQSxPQUF4QixDQUF6Qjs7QUFDQSxZQUFLQyxRQUFMLENBQWM7QUFBRVAsWUFBSSxFQUFFO0FBQVIsT0FBZDs7QUFDQVEsc0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBaUJQLGdCQUFqQjtBQUNELEs7Ozs7Ozs7NkJBMUNRO0FBQUE7O0FBQ1A7QUFDQSxVQUFNUSxVQUFVLEdBQUcsQ0FBQ0YsZ0RBQUssQ0FBQ0csR0FBTixDQUFVLEtBQVYsQ0FBcEI7QUFDQSxhQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsbUVBQUQ7QUFDRSxxQkFBYSxFQUFFO0FBQ2JDLGlCQUFPLEVBQUUsaUJBREk7QUFFYkMsa0JBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ04sUUFBTCxDQUFjO0FBQUVQLGtCQUFJLEVBQUU7QUFBUixhQUFkLENBQU47QUFBQTtBQUZHLFNBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQU9FLE1BQUMseUVBQUQ7QUFDRSxvQkFBWSxFQUFDLFNBRGY7QUFFRSxvQkFBWSxFQUFFLEtBRmhCO0FBR0UsWUFBSSxFQUFFLEtBQUtjLEtBQUwsQ0FBV2QsSUFIbkI7QUFJRSxtQkFBVyxFQUFFLHFCQUFDQyxTQUFEO0FBQUEsaUJBQWUsTUFBSSxDQUFDYyxlQUFMLENBQXFCZCxTQUFyQixDQUFmO0FBQUEsU0FKZjtBQUtFLGdCQUFRLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNNLFFBQUwsQ0FBYztBQUFFUCxnQkFBSSxFQUFFO0FBQVIsV0FBZCxDQUFOO0FBQUEsU0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEYsRUFjR1UsVUFBVSxHQUFLO0FBQ2QsWUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0REFBRDtBQUNFLGVBQU8sRUFBQyxvQ0FEVjtBQUVFLGNBQU0sRUFBRTtBQUNORSxpQkFBTyxFQUFFLGlCQURIO0FBRU5DLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFFUCxrQkFBSSxFQUFFO0FBQVIsYUFBZCxDQUFOO0FBQUE7QUFGSixTQUZWO0FBTUUsYUFBSyxFQUFFRixHQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQVJGLENBREYsQ0FEUyxHQWNUO0FBQ0EsWUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBN0JKLENBREY7QUFrQ0Q7Ozs7RUF2Q2lCa0IsNENBQUssQ0FBQ0MsUzs7QUE4Q1hsQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NGVhMTgzNWRhNDI5ZTM4MWU0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHsgUGFnZSwgTGF5b3V0LCBFbXB0eVN0YXRlLCBCdXR0b24sIENhcmQgfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyIH0gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmUtanNcIjtcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3RcIjtcblxuY29uc3QgaW1nID0gXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICByZW5kZXIoKSB7XG4gICAgLy8gQSBjb25zdGFudCB0aGF0IGRlZmluZXMgeW91ciBhcHAncyBlbXB0eSBzdGF0ZVxuICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KFwiaWRzXCIpO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgcHJvZHVjdHNcIixcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICAvPlxuICAgICAgICB7ZW1wdHlTdGF0ZSA/ICggLy8gQ29udHJvbHMgdGhlIGxheW91dCBvZiB5b3VyIGFwcCdzIGVtcHR5IHN0YXRlXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICAgIGhlYWRpbmc9XCJEaXNjb3VudCB5b3VyIHByb2R1Y3RzIHRlbXBvcmFyaWx5XCJcbiAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgcHJvZHVjdHNcIixcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGltYWdlPXtpbWd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyB0byBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHkuPC9wPlxuICAgICAgICAgICAgPC9FbXB0eVN0YXRlPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8vIFVzZXMgdGhlIG5ldyByZXNvdXJjZSBsaXN0IHRoYXQgcmV0cmlldmVzIHByb2R1Y3RzIGJ5IElEc1xuICAgICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG4gIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICBzdG9yZS5zZXQoXCJpZHNcIiwgaWRzRnJvbVJlc291cmNlcyk7XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
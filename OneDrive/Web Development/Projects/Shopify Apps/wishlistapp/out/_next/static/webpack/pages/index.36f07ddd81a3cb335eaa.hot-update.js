webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/ResourceList.js":
/*!******************************************!*\
  !*** ./pages/components/ResourceList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ApplyRandomPrices__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ApplyRandomPrices */ "./pages/components/ApplyRandomPrices.js");







var _jsxFileName = "C:\\Users\\Matt\\OneDrive\\Web Development\\Projects\\Shopify Apps\\wishlistapp\\pages\\components\\ResourceList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








 // GraphQL query that retrieves products by ID

var GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

var ResourceListWithProducts = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceListWithProducts, _React$Component);

  var _super = _createSuper(ResourceListWithProducts);

  // A constructor that defines selected items and nodes
  function ResourceListWithProducts(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceListWithProducts);

    _this = _super.call(this, props);
    _this.state = {
      selectedItems: [],
      selectedNodes: {}
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceListWithProducts, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var app = this.context; // Returns products by ID

      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
        query: GET_PRODUCTS_BY_ID,
        variables: {
          ids: store_js__WEBPACK_IMPORTED_MODULE_11___default.a.get("ids")
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error,
            refetch = _ref.refetch;
        // Refetches products by ID
        if (loading) return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 31
          }
        }, "Loading");
        if (error) return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 29
          }
        }, error.message);
        var nodesById = {};
        data.nodes.forEach(function (node) {
          return nodesById[node.id] = node;
        });
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Card"], {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["ResourceList"], {
          showHeader: true,
          resourceName: {
            singular: "Product",
            plural: "Products"
          },
          items: data.nodes,
          selectable: true,
          selectedItems: _this2.state.selectedItems,
          onSelectionChange: function onSelectionChange(selectedItems) {
            var selectedNodes = {};
            selectedItems.forEach(function (item) {
              return selectedNodes[item] = nodesById[item];
            });
            return _this2.setState({
              selectedItems: selectedItems,
              selectedNodes: selectedNodes
            });
          },
          renderItem: function renderItem(item) {
            var media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Thumbnail"], {
              source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : "",
              alt: item.images.edges[0] ? item.images.edges[0].node.altText : "",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 23
              }
            });

            var price = item.variants.edges[0].node.price;
            return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["ResourceList"].Item, {
              id: item.id,
              media: media,
              accessibilityLabel: "View details for ".concat(item.title),
              verticalAlignment: "center",
              onClick: function onClick() {
                var index = _this2.state.selectedItems.indexOf(item.id);

                var node = nodesById[item.id];

                if (index === -1) {
                  _this2.state.selectedItems.push(item.id);

                  _this2.state.selectedNodes[item.id] = node;
                } else {
                  _this2.state.selectedItems.splice(index, 1);

                  delete _this2.state.selectedNodes[item.id];
                }

                _this2.setState({
                  selectedItems: _this2.state.selectedItems,
                  selectedNodes: _this2.state.selectedNodes
                });
              },
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 23
              }
            }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
              alignment: "center",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 25
              }
            }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"].Item, {
              fill: true,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 27
              }
            }, __jsx("h3", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 29
              }
            }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["TextStyle"], {
              variation: "strong",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 31
              }
            }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"].Item, {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 27
              }
            }, __jsx("p", {
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 29
              }
            }, "$", price))));
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }
        })), __jsx(_ApplyRandomPrices__WEBPACK_IMPORTED_MODULE_14__["default"], {
          selectedItems: _this2.state.selectedNodes,
          onUpdate: refetch,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 15
          }
        }));
      });
    }
  }]);

  return ResourceListWithProducts;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_13__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTX0JZX0lEIiwiZ3FsIiwiUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkSXRlbXMiLCJzZWxlY3RlZE5vZGVzIiwiYXBwIiwiY29udGV4dCIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJtZXNzYWdlIiwibm9kZXNCeUlkIiwibm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsImlkIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJpdGVtIiwic2V0U3RhdGUiLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwib3JpZ2luYWxTcmMiLCJhbHRUZXh0IiwicHJpY2UiLCJ2YXJpYW50cyIsInRpdGxlIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4Qjs7SUE2Qk1DLHdCOzs7OztBQUdKO0FBQ0Esb0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsRUFBRSxFQURKO0FBRVhDLG1CQUFhLEVBQUU7QUFGSixLQUFiO0FBRmlCO0FBTWxCOzs7OzZCQUVRO0FBQUE7O0FBQ1AsVUFBTUMsR0FBRyxHQUFHLEtBQUtDLE9BQWpCLENBRE8sQ0FHUDs7QUFDQSxhQUNFLE1BQUMsa0RBQUQ7QUFBTyxhQUFLLEVBQUVSLGtCQUFkO0FBQWtDLGlC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QUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBS0YsS0FBTCxDQURGLENBUkYsQ0F0QkYsQ0FERjtBQXFDRCxXQXRFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREYsQ0FERixFQTRFRSxNQUFDLDJEQUFEO0FBQ0UsdUJBQWEsRUFBRSxNQUFJLENBQUMzQixLQUFMLENBQVdFLGFBRDVCO0FBRUUsa0JBQVEsRUFBRVMsT0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBNUVGLENBREY7QUFtRkQsT0E1RkgsQ0FERjtBQWdHRDs7OztFQWhIb0N1Qiw0Q0FBSyxDQUFDQyxTOzswRkFBdkNyQyx3QixpQkFDaUJzQyxrRTs7QUFrSFJ0Qyx1RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNmYwN2RkZDgxYTNjYjMzNWVhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgUmVzb3VyY2VMaXN0LFxuICBTdGFjayxcbiAgVGV4dFN0eWxlLFxuICBUaHVtYm5haWwsXG59IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcInN0b3JlLWpzXCI7XG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuaW1wb3J0IEFwcGx5UmFuZG9tUHJpY2VzIGZyb20gXCIuL0FwcGx5UmFuZG9tUHJpY2VzXCI7XG5cbi8vIEdyYXBoUUwgcXVlcnkgdGhhdCByZXRyaWV2ZXMgcHJvZHVjdHMgYnkgSURcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XG4gICAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGhhbmRsZVxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcbiAgICAgICAgaWRcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNsYXNzIFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XG5cbiAgLy8gQSBjb25zdHJ1Y3RvciB0aGF0IGRlZmluZXMgc2VsZWN0ZWQgaXRlbXMgYW5kIG5vZGVzXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICAgIHNlbGVjdGVkTm9kZXM6IHt9LFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXBwID0gdGhpcy5jb250ZXh0O1xuXG4gICAgLy8gUmV0dXJucyBwcm9kdWN0cyBieSBJRFxuICAgIHJldHVybiAoXG4gICAgICA8UXVlcnkgcXVlcnk9e0dFVF9QUk9EVUNUU19CWV9JRH0gdmFyaWFibGVzPXt7IGlkczogc3RvcmUuZ2V0KFwiaWRzXCIpIH19PlxuICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2ggfSkgPT4ge1xuICAgICAgICAgIC8vIFJlZmV0Y2hlcyBwcm9kdWN0cyBieSBJRFxuICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuXG4gICAgICAgICAgY29uc3Qgbm9kZXNCeUlkID0ge307XG4gICAgICAgICAgZGF0YS5ub2Rlcy5mb3JFYWNoKChub2RlKSA9PiAobm9kZXNCeUlkW25vZGUuaWRdID0gbm9kZSkpO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17eyBzaW5ndWxhcjogXCJQcm9kdWN0XCIsIHBsdXJhbDogXCJQcm9kdWN0c1wiIH19XG4gICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGVcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtc31cbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXsoc2VsZWN0ZWRJdGVtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE5vZGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gKHNlbGVjdGVkTm9kZXNbaXRlbV0gPSBub2Rlc0J5SWRbaXRlbV0pXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHNlbGVjdGVkSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWROb2Rlczogc2VsZWN0ZWROb2RlcyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxhYmVsPXtgVmlldyBkZXRhaWxzIGZvciAke2l0ZW0udGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc0J5SWRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTm9kZXNbaXRlbS5pZF0gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLnNlbGVjdGVkTm9kZXNbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWROb2RlczogdGhpcy5zdGF0ZS5zZWxlY3RlZE5vZGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGFsaWdubWVudD1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbSBmaWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgICAgICAgPEFwcGx5UmFuZG9tUHJpY2VzXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZE5vZGVzfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtyZWZldGNofVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9
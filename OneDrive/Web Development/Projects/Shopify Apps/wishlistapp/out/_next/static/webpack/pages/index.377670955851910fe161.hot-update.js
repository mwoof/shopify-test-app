webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/ApplyRandomPrices.js":
/*!***********************************************!*\
  !*** ./pages/components/ApplyRandomPrices.js ***!
  \***********************************************/
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
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\Users\\Matt\\OneDrive\\Web Development\\Projects\\Shopify Apps\\wishlistapp\\pages\\components\\ApplyRandomPrices.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  mutation productVariantUpdate($input: ProductVariantInput!) {\n    productVariantUpdate(input: $input) {\n      product {\n        title\n      }\n      productVariant {\n        id\n        price\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // GraphQL mutation that updates the prices of products

var UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

var ApplyRandomPrices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ApplyRandomPrices, _React$Component);

  var _super = _createSuper(ApplyRandomPrices);

  function ApplyRandomPrices() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ApplyRandomPrices);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ApplyRandomPrices, [{
    key: "render",
    value: function render() {
      var _this = this,
          _s = $RefreshSig$();

      return (// Uses mutation's input to update product prices
        __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
          mutation: UPDATE_PRICE,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }
        }, _s(function (handleSubmit, _ref) {
          _s();

          var error = _ref.error,
              data = _ref.data;

          var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
              hasResults = _useState[0],
              setHasResults = _useState[1];

          var showError = error && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Banner"], {
            status: "critical",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 13
            }
          }, error.message);

          var showToast = hasResults && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Toast"], {
            content: "Successfully updated",
            onDismiss: function onDismiss() {
              return setHasResults(false);
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }
          });

          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Frame"], {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }
          }, showToast, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"].Section, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }
          }, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Layout"].Section, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }
          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
            distribution: "center",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }
          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            primary: true,
            textAlign: "center",
            onClick: function onClick() {
              var promise = new Promise(function (resolve) {
                return resolve();
              });

              var _loop = function _loop(variantId) {
                var price = Math.random().toPrecision(3) * 10;
                var productVariableInput = {
                  id: _this.props.selectedItems[variantId].variants.edges[0].node.id,
                  price: price
                };
                promise = promise.then(function () {
                  return handleSubmit({
                    variables: {
                      input: productVariableInput
                    }
                  });
                });
              };

              for (var variantId in _this.props.selectedItems) {
                _loop(variantId);
              }

              if (promise) {
                promise.then(function () {
                  return _this.props.onUpdate().then(function () {
                    return setHasResults(true);
                  });
                });
              }
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 19
            }
          }, "Randomize prices"))));
        }, "3WaEH/2IBD7PFth0zaAOMyPTvFU="))
      );
    }
  }]);

  return ApplyRandomPrices;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(ApplyRandomPrices, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ApplyRandomPrices);

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

/***/ }),

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
        }, "Loading\u2026");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9BcHBseVJhbmRvbVByaWNlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiXSwibmFtZXMiOlsiVVBEQVRFX1BSSUNFIiwiZ3FsIiwiQXBwbHlSYW5kb21QcmljZXMiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsImRhdGEiLCJ1c2VTdGF0ZSIsImhhc1Jlc3VsdHMiLCJzZXRIYXNSZXN1bHRzIiwic2hvd0Vycm9yIiwibWVzc2FnZSIsInNob3dUb2FzdCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInZhcmlhbnRJZCIsInByaWNlIiwiTWF0aCIsInJhbmRvbSIsInRvUHJlY2lzaW9uIiwicHJvZHVjdFZhcmlhYmxlSW5wdXQiLCJpZCIsInByb3BzIiwic2VsZWN0ZWRJdGVtcyIsInZhcmlhbnRzIiwiZWRnZXMiLCJub2RlIiwidGhlbiIsInZhcmlhYmxlcyIsImlucHV0Iiwib25VcGRhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRleHQiLCJHRVRfUFJPRFVDVFNfQllfSUQiLCJSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMiLCJzdGF0ZSIsInNlbGVjdGVkTm9kZXMiLCJhcHAiLCJjb250ZXh0IiwiaWRzIiwic3RvcmUiLCJnZXQiLCJsb2FkaW5nIiwicmVmZXRjaCIsIm5vZGVzQnlJZCIsIm5vZGVzIiwiZm9yRWFjaCIsInNpbmd1bGFyIiwicGx1cmFsIiwiaXRlbSIsInNldFN0YXRlIiwibWVkaWEiLCJpbWFnZXMiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJ0aXRsZSIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUdDLGtEQUFILG1CQUFsQjs7SUFjTUMsaUI7Ozs7Ozs7Ozs7Ozs7NkJBR0s7QUFBQTtBQUFBOztBQUNQLGFBQ0U7QUFDQSxjQUFDLHFEQUFEO0FBQVUsa0JBQVEsRUFBRUYsWUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNHLFVBQUNHLFlBQUQsUUFBbUM7QUFBQTs7QUFBQSxjQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsY0FBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLDBCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLGNBQzNCQyxVQUQyQjtBQUFBLGNBQ2ZDLGFBRGU7O0FBR2xDLGNBQU1DLFNBQVMsR0FBR0wsS0FBSyxJQUNyQixNQUFDLHdEQUFEO0FBQVEsa0JBQU0sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMkJBLEtBQUssQ0FBQ00sT0FBakMsQ0FERjs7QUFJQSxjQUFNQyxTQUFTLEdBQUdKLFVBQVUsSUFDMUIsTUFBQyx1REFBRDtBQUNFLG1CQUFPLEVBQUMsc0JBRFY7QUFFRSxxQkFBUyxFQUFFO0FBQUEscUJBQU1DLGFBQWEsQ0FBQyxLQUFELENBQW5CO0FBQUEsYUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7O0FBT0EsaUJBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0dHLFNBREgsRUFFRSxNQUFDLHdEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWlCRixTQUFqQixDQUZGLEVBSUUsTUFBQyx3REFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsdURBQUQ7QUFBTyx3QkFBWSxFQUFFLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLHdEQUFEO0FBQ0UsbUJBQU8sTUFEVDtBQUVFLHFCQUFTLEVBQUUsUUFGYjtBQUdFLG1CQUFPLEVBQUUsbUJBQU07QUFDYixrQkFBSUcsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsdUJBQWFBLE9BQU8sRUFBcEI7QUFBQSxlQUFaLENBQWQ7O0FBRGEseUNBRUZDLFNBRkU7QUFHWCxvQkFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsV0FBZCxDQUEwQixDQUExQixJQUErQixFQUE3QztBQUNBLG9CQUFNQyxvQkFBb0IsR0FBRztBQUMzQkMsb0JBQUUsRUFBRSxLQUFJLENBQUNDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QlIsU0FBekIsRUFBb0NTLFFBQXBDLENBQ0RDLEtBREMsQ0FDSyxDQURMLEVBQ1FDLElBRFIsQ0FDYUwsRUFGVTtBQUczQkwsdUJBQUssRUFBRUE7QUFIb0IsaUJBQTdCO0FBTUFKLHVCQUFPLEdBQUdBLE9BQU8sQ0FBQ2UsSUFBUixDQUFhO0FBQUEseUJBQ3JCeEIsWUFBWSxDQUFDO0FBQ1h5Qiw2QkFBUyxFQUFFO0FBQUVDLDJCQUFLLEVBQUVUO0FBQVQ7QUFEQSxtQkFBRCxDQURTO0FBQUEsaUJBQWIsQ0FBVjtBQVZXOztBQUViLG1CQUFLLElBQU1MLFNBQVgsSUFBd0IsS0FBSSxDQUFDTyxLQUFMLENBQVdDLGFBQW5DLEVBQWtEO0FBQUEsc0JBQXZDUixTQUF1QztBQWFqRDs7QUFFRCxrQkFBSUgsT0FBSixFQUFhO0FBQ1hBLHVCQUFPLENBQUNlLElBQVIsQ0FBYTtBQUFBLHlCQUNYLEtBQUksQ0FBQ0wsS0FBTCxDQUFXUSxRQUFYLEdBQXNCSCxJQUF0QixDQUEyQjtBQUFBLDJCQUFNbkIsYUFBYSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxtQkFBM0IsQ0FEVztBQUFBLGlCQUFiO0FBR0Q7QUFDRixhQXpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLENBREYsQ0FKRixDQURGO0FBd0NELFNBdkRIO0FBRkY7QUE0REQ7Ozs7RUFoRTZCdUIsNENBQUssQ0FBQ0MsUzs7MEZBQWhDOUIsaUIsaUJBQ2lCK0Isa0U7O0FBa0VSL0IsZ0ZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1nQyxrQkFBa0IsR0FBR2pDLGtEQUFILG1CQUF4Qjs7SUE2Qk1rQyx3Qjs7Ozs7QUFHSjtBQUNBLG9DQUFZYixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS2MsS0FBTCxHQUFhO0FBQ1hiLG1CQUFhLEVBQUUsRUFESjtBQUVYYyxtQkFBYSxFQUFFO0FBRkosS0FBYjtBQUZpQjtBQU1sQjs7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQU1DLEdBQUcsR0FBRyxLQUFLQyxPQUFqQixDQURPLENBR1A7O0FBQ0EsYUFDRSxNQUFDLGtEQUFEO0FBQU8sYUFBSyxFQUFFTCxrQkFBZDtBQUFrQyxpQkFBUyxFQUFFO0FBQUVNLGFBQUcsRUFBRUMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVY7QUFBUCxTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csZ0JBQXVDO0FBQUEsWUFBcENyQyxJQUFvQyxRQUFwQ0EsSUFBb0M7QUFBQSxZQUE5QnNDLE9BQThCLFFBQTlCQSxPQUE4QjtBQUFBLFlBQXJCdkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsWUFBZHdDLE9BQWMsUUFBZEEsT0FBYztBQUN0QztBQUNBLFlBQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFDYixZQUFJdkMsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFNQSxLQUFLLENBQUNNLE9BQVosQ0FBUDtBQUVYLFlBQU1tQyxTQUFTLEdBQUcsRUFBbEI7QUFDQXhDLFlBQUksQ0FBQ3lDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixVQUFDckIsSUFBRDtBQUFBLGlCQUFXbUIsU0FBUyxDQUFDbkIsSUFBSSxDQUFDTCxFQUFOLENBQVQsR0FBcUJLLElBQWhDO0FBQUEsU0FBbkI7QUFFQSxlQUNFLG1FQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFLE1BQUMsOERBQUQ7QUFDRSxvQkFBVSxNQURaO0FBRUUsc0JBQVksRUFBRTtBQUFFc0Isb0JBQVEsRUFBRSxTQUFaO0FBQXVCQyxrQkFBTSxFQUFFO0FBQS9CLFdBRmhCO0FBR0UsZUFBSyxFQUFFNUMsSUFBSSxDQUFDeUMsS0FIZDtBQUlFLG9CQUFVLE1BSlo7QUFLRSx1QkFBYSxFQUFFLE1BQUksQ0FBQ1YsS0FBTCxDQUFXYixhQUw1QjtBQU1FLDJCQUFpQixFQUFFLDJCQUFDQSxhQUFELEVBQW1CO0FBQ3BDLGdCQUFNYyxhQUFhLEdBQUcsRUFBdEI7QUFDQWQseUJBQWEsQ0FBQ3dCLE9BQWQsQ0FDRSxVQUFDRyxJQUFEO0FBQUEscUJBQVdiLGFBQWEsQ0FBQ2EsSUFBRCxDQUFiLEdBQXNCTCxTQUFTLENBQUNLLElBQUQsQ0FBMUM7QUFBQSxhQURGO0FBSUEsbUJBQU8sTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFDbkI1QiwyQkFBYSxFQUFFQSxhQURJO0FBRW5CYywyQkFBYSxFQUFFQTtBQUZJLGFBQWQsQ0FBUDtBQUlELFdBaEJIO0FBaUJFLG9CQUFVLEVBQUUsb0JBQUNhLElBQUQsRUFBVTtBQUNwQixnQkFBTUUsS0FBSyxHQUNULE1BQUMsMkRBQUQ7QUFDRSxvQkFBTSxFQUNKRixJQUFJLENBQUNHLE1BQUwsQ0FBWTVCLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSXlCLElBQUksQ0FBQ0csTUFBTCxDQUFZNUIsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEI0QixXQUQ5QixHQUVJLEVBSlI7QUFNRSxpQkFBRyxFQUNESixJQUFJLENBQUNHLE1BQUwsQ0FBWTVCLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSXlCLElBQUksQ0FBQ0csTUFBTCxDQUFZNUIsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEI2QixPQUQ5QixHQUVJLEVBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGOztBQWNBLGdCQUFNdkMsS0FBSyxHQUFHa0MsSUFBSSxDQUFDMUIsUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QlYsS0FBMUM7QUFDQSxtQkFDRSxNQUFDLDhEQUFELENBQWMsSUFBZDtBQUNFLGdCQUFFLEVBQUVrQyxJQUFJLENBQUM3QixFQURYO0FBRUUsbUJBQUssRUFBRStCLEtBRlQ7QUFHRSxnQ0FBa0IsNkJBQXNCRixJQUFJLENBQUNNLEtBQTNCLENBSHBCO0FBSUUsK0JBQWlCLEVBQUMsUUFKcEI7QUFLRSxxQkFBTyxFQUFFLG1CQUFNO0FBQ2Isb0JBQUlDLEtBQUssR0FBRyxNQUFJLENBQUNyQixLQUFMLENBQVdiLGFBQVgsQ0FBeUJtQyxPQUF6QixDQUFpQ1IsSUFBSSxDQUFDN0IsRUFBdEMsQ0FBWjs7QUFDQSxvQkFBTUssSUFBSSxHQUFHbUIsU0FBUyxDQUFDSyxJQUFJLENBQUM3QixFQUFOLENBQXRCOztBQUNBLG9CQUFJb0MsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQix3QkFBSSxDQUFDckIsS0FBTCxDQUFXYixhQUFYLENBQXlCb0MsSUFBekIsQ0FBOEJULElBQUksQ0FBQzdCLEVBQW5DOztBQUNBLHdCQUFJLENBQUNlLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QmEsSUFBSSxDQUFDN0IsRUFBOUIsSUFBb0NLLElBQXBDO0FBQ0QsaUJBSEQsTUFHTztBQUNMLHdCQUFJLENBQUNVLEtBQUwsQ0FBV2IsYUFBWCxDQUF5QnFDLE1BQXpCLENBQWdDSCxLQUFoQyxFQUF1QyxDQUF2Qzs7QUFDQSx5QkFBTyxNQUFJLENBQUNyQixLQUFMLENBQVdDLGFBQVgsQ0FBeUJhLElBQUksQ0FBQzdCLEVBQTlCLENBQVA7QUFDRDs7QUFFRCxzQkFBSSxDQUFDOEIsUUFBTCxDQUFjO0FBQ1o1QiwrQkFBYSxFQUFFLE1BQUksQ0FBQ2EsS0FBTCxDQUFXYixhQURkO0FBRVpjLCtCQUFhLEVBQUUsTUFBSSxDQUFDRCxLQUFMLENBQVdDO0FBRmQsaUJBQWQ7QUFJRCxlQXBCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBc0JFLE1BQUMsdURBQUQ7QUFBTyx1QkFBUyxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFZLGtCQUFJLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0UsTUFBQywyREFBRDtBQUFXLHVCQUFTLEVBQUMsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUNHYSxJQUFJLENBQUNNLEtBRFIsQ0FERixDQURGLENBREYsRUFRRSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBS3hDLEtBQUwsQ0FERixDQVJGLENBdEJGLENBREY7QUFxQ0QsV0F0RUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBREYsRUE0RUUsTUFBQywyREFBRDtBQUNFLHVCQUFhLEVBQUUsTUFBSSxDQUFDb0IsS0FBTCxDQUFXQyxhQUQ1QjtBQUVFLGtCQUFRLEVBQUVPLE9BRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQTVFRixDQURGO0FBbUZELE9BNUZILENBREY7QUFnR0Q7Ozs7RUFoSG9DYiw0Q0FBSyxDQUFDQyxTOzswRkFBdkNHLHdCLGlCQUNpQkYsa0U7O0FBa0hSRSx1RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNzc2NzA5NTU4NTE5MTBmZTE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgeyBMYXlvdXQsIEJ1dHRvbiwgQmFubmVyLCBUb2FzdCwgU3RhY2ssIEZyYW1lIH0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuXG4vLyBHcmFwaFFMIG11dGF0aW9uIHRoYXQgdXBkYXRlcyB0aGUgcHJpY2VzIG9mIHByb2R1Y3RzXG5jb25zdCBVUERBVEVfUFJJQ0UgPSBncWxgXG4gIG11dGF0aW9uIHByb2R1Y3RWYXJpYW50VXBkYXRlKCRpbnB1dDogUHJvZHVjdFZhcmlhbnRJbnB1dCEpIHtcbiAgICBwcm9kdWN0VmFyaWFudFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XG4gICAgICBwcm9kdWN0IHtcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICAgIHByb2R1Y3RWYXJpYW50IHtcbiAgICAgICAgaWRcbiAgICAgICAgcHJpY2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNsYXNzIEFwcGx5UmFuZG9tUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQ29udGV4dDtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIFVzZXMgbXV0YXRpb24ncyBpbnB1dCB0byB1cGRhdGUgcHJvZHVjdCBwcmljZXNcbiAgICAgIDxNdXRhdGlvbiBtdXRhdGlvbj17VVBEQVRFX1BSSUNFfT5cbiAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHsgZXJyb3IsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IFtoYXNSZXN1bHRzLCBzZXRIYXNSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgICAgICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIChcbiAgICAgICAgICAgIDxCYW5uZXIgc3RhdHVzPVwiY3JpdGljYWxcIj57ZXJyb3IubWVzc2FnZX08L0Jhbm5lcj5cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3Qgc2hvd1RvYXN0ID0gaGFzUmVzdWx0cyAmJiAoXG4gICAgICAgICAgICA8VG9hc3RcbiAgICAgICAgICAgICAgY29udGVudD1cIlN1Y2Nlc3NmdWxseSB1cGRhdGVkXCJcbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRIYXNSZXN1bHRzKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICAgIHtzaG93VG9hc3R9XG4gICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj57c2hvd0Vycm9yfTwvTGF5b3V0LlNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249e1wiY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj17XCJjZW50ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YXJpYW50SWQgaW4gdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IE1hdGgucmFuZG9tKCkudG9QcmVjaXNpb24oMykgKiAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYWJsZUlucHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zW3ZhcmlhbnRJZF0udmFyaWFudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZWRnZXNbMF0ubm9kZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbigoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBpbnB1dDogcHJvZHVjdFZhcmlhYmxlSW5wdXQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKCkudGhlbigoKSA9PiBzZXRIYXNSZXN1bHRzKHRydWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFJhbmRvbWl6ZSBwcmljZXNcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICA8L0ZyYW1lPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L011dGF0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwbHlSYW5kb21QcmljZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBSZXNvdXJjZUxpc3QsXG4gIFN0YWNrLFxuICBUZXh0U3R5bGUsXG4gIFRodW1ibmFpbCxcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmUtanNcIjtcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XG5pbXBvcnQgQXBwbHlSYW5kb21QcmljZXMgZnJvbSBcIi4vQXBwbHlSYW5kb21QcmljZXNcIjtcblxuLy8gR3JhcGhRTCBxdWVyeSB0aGF0IHJldHJpZXZlcyBwcm9kdWN0cyBieSBJRFxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcbiAgICBub2RlcyhpZHM6ICRpZHMpIHtcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcbiAgICAgICAgdGl0bGVcbiAgICAgICAgaGFuZGxlXG4gICAgICAgIGRlc2NyaXB0aW9uSHRtbFxuICAgICAgICBpZFxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY2xhc3MgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQ29udGV4dDtcblxuICAvLyBBIGNvbnN0cnVjdG9yIHRoYXQgZGVmaW5lcyBzZWxlY3RlZCBpdGVtcyBhbmQgbm9kZXNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgICAgc2VsZWN0ZWROb2Rlczoge30sXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAvLyBSZXR1cm5zIHByb2R1Y3RzIGJ5IElEXG4gICAgcmV0dXJuIChcbiAgICAgIDxRdWVyeSBxdWVyeT17R0VUX1BST0RVQ1RTX0JZX0lEfSB2YXJpYWJsZXM9e3sgaWRzOiBzdG9yZS5nZXQoXCJpZHNcIikgfX0+XG4gICAgICAgIHsoeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9KSA9PiB7XG4gICAgICAgICAgLy8gUmVmZXRjaGVzIHByb2R1Y3RzIGJ5IElEXG4gICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47XG4gICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgICAgICAgICBjb25zdCBub2Rlc0J5SWQgPSB7fTtcbiAgICAgICAgICBkYXRhLm5vZGVzLmZvckVhY2goKG5vZGUpID0+IChub2Rlc0J5SWRbbm9kZS5pZF0gPSBub2RlKSk7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxuICAgICAgICAgICAgICAgICAgc2hvd0hlYWRlclxuICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiBcIlByb2R1Y3RcIiwgcGx1cmFsOiBcIlByb2R1Y3RzXCIgfX1cbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtkYXRhLm5vZGVzfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0YWJsZVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zfVxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9eyhzZWxlY3RlZEl0ZW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICAgIChpdGVtKSA9PiAoc2VsZWN0ZWROb2Rlc1tpdGVtXSA9IG5vZGVzQnlJZFtpdGVtXSlcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE5vZGVzOiBzZWxlY3RlZE5vZGVzLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcbiAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUuYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzQnlJZFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWROb2Rlc1tpdGVtLmlkXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUuc2VsZWN0ZWROb2Rlc1tpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE5vZGVzOiB0aGlzLnN0YXRlLnNlbGVjdGVkTm9kZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgYWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICA8QXBwbHlSYW5kb21QcmljZXNcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0aGlzLnN0YXRlLnNlbGVjdGVkTm9kZXN9XG4gICAgICAgICAgICAgICAgb25VcGRhdGU9e3JlZmV0Y2h9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=
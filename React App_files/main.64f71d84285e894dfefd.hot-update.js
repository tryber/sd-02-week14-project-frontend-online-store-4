webpackHotUpdate("main",{

/***/ "./src/Pages/ProductDetails/components/Quantidade/Quantidade.jsx":
/*!***********************************************************************!*\
  !*** ./src/Pages/ProductDetails/components/Quantidade/Quantidade.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/Pages/ProductDetails/components/Quantidade/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/douglas/Js/Projetos/sd-02-week14-project-frontend-online-store-4/src/Pages/ProductDetails/components/Quantidade/Quantidade.jsx";



class Campo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      qt: 1
    };
  }

  render() {
    const {
      qt
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comp_prod_details_qt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Quantidade"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, qt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      opacity: "100%",
      type: "button",
      onClick: () => this.setState(state => ({
        qt: state.qt - 1
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "remove")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Adicionar no carrinho")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Campo);

/***/ })

})
//# sourceMappingURL=main.64f71d84285e894dfefd.hot-update.js.map
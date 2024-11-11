(self["webpackChunkapitrain"] = self["webpackChunkapitrain"] || []).push([["src_components_Post_ui_Post_tsx"],{

/***/ "./src/components/Comments/index.ts":
/*!******************************************!*\
  !*** ./src/components/Comments/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comments: () => (/* reexport safe */ _ui_Comments__WEBPACK_IMPORTED_MODULE_0__.Comments)
/* harmony export */ });
/* harmony import */ var _ui_Comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Comments */ "./src/components/Comments/ui/Comments.tsx");


/***/ }),

/***/ "./src/components/Comments/ui/Comments.tsx":
/*!*************************************************!*\
  !*** ./src/components/Comments/ui/Comments.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comments: () => (/* binding */ Comments)
/* harmony export */ });
/* harmony import */ var _Comments_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments.module.css */ "./src/components/Comments/ui/Comments.module.css");
/* harmony import */ var utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/classNames/classNames */ "./src/utils/classNames/classNames.tsx");
/* harmony import */ var assets_images_image_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/image.jpeg */ "./src/assets/images/image.jpeg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




;
var Comments = function Comments(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].comments, {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
      className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].heading, {}, []),
      children: "2 comments"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
      className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].list, {}, []),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].item, {}, []),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].avatar, {}, []),
          alt: "\u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0430",
          src: assets_images_image_jpeg__WEBPACK_IMPORTED_MODULE_2__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].info, {}, []),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
            className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].name, {}, []),
            children: "Stas"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].text, {}, []),
            children: "His mother had always taught him"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].buttons, {}, []),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].date, {}, []),
              children: "Today"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Comments_module_css__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"], {}, []),
              children: "Delete"
            })]
          })]
        })]
      })
    })]
  });
};

/***/ }),

/***/ "./src/components/Post/ui/Post.tsx":
/*!*****************************************!*\
  !*** ./src/components/Post/ui/Post.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post.module.css */ "./src/components/Post/ui/Post.module.css");
/* harmony import */ var utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/classNames/classNames */ "./src/utils/classNames/classNames.tsx");
/* harmony import */ var components_Cards_ui_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Cards/ui/Cards */ "./src/components/Cards/ui/Cards.tsx");
/* harmony import */ var components_Comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Comments */ "./src/components/Comments/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Post = function Post(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("main", {
    className: (0,utils_classNames_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)(_Post_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].post, {}, [className]),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Cards_ui_Cards__WEBPACK_IMPORTED_MODULE_2__.Cards, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(components_Comments__WEBPACK_IMPORTED_MODULE_3__.Comments, {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Comments/ui/Comments.module.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Comments/ui/Comments.module.css ***!
  \**************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-components-Comments-ui-Comments-module__comments--v38XQ {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: start;
}

.src-components-Comments-ui-Comments-module__heading--em7va {
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 33px;
}

.src-components-Comments-ui-Comments-module__list--xAS4e {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.src-components-Comments-ui-Comments-module__item--TwmR4 {
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.src-components-Comments-ui-Comments-module__avatar--b0AqN {
  object-fit: cover;
  object-position: center;
  width: 46px;
  height: 46px;
  margin: 0;
}

.src-components-Comments-ui-Comments-module__info--XiKKu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.src-components-Comments-ui-Comments-module__name--t5y8L {
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  padding: 0;
}

.src-components-Comments-ui-Comments-module__text--W0QJ4 {
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  font-family: var(--font-regular);
  padding: 0;
}

.src-components-Comments-ui-Comments-module__buttons--O3KaC {
  display: flex;
  gap: 20px;
  margin: 0;
  align-items: center;
}

.src-components-Comments-ui-Comments-module__date--DHV6A {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  margin: 0;
  color: rgba(4, 4, 5, 0.22);
  font-family: var(--font-regular);
  padding: 0;
}

.src-components-Comments-ui-Comments-module__delete--ST3D2 {
  background-color: transparent;
  border: none;
  color: var(--text-color-light);
  font-family: var(--font-regular);
  font-size: 13px;
  font-weight: 400;
  line-height: 12px;
}`, "",{"version":3,"sources":["webpack://./src/components/Comments/ui/Comments.module.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,cAAc;EACd,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,SAAS;EACT,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,0BAA0B;EAC1B,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,8BAA8B;EAC9B,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB","sourcesContent":[".comments {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  text-align: start;\n}\n\n.heading {\n  margin: 0;\n  padding: 0;\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 33px;\n}\n\n.list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.item {\n  display: flex;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n}\n\n.avatar {\n  object-fit: cover;\n  object-position: center;\n  width: 46px;\n  height: 46px;\n  margin: 0;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.name {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 20px;\n  margin: 0;\n  padding: 0;\n}\n\n.text {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 20px;\n  margin: 0;\n  font-family: var(--font-regular);\n  padding: 0;\n}\n\n.buttons {\n  display: flex;\n  gap: 20px;\n  margin: 0;\n  align-items: center;\n}\n\n.date {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  margin: 0;\n  color: rgba(4, 4, 5, 0.22);\n  font-family: var(--font-regular);\n  padding: 0;\n}\n\n.delete {\n  background-color: transparent;\n  border: none;\n  color: var(--text-color-light);\n  font-family: var(--font-regular);\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 12px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"comments": `src-components-Comments-ui-Comments-module__comments--v38XQ`,
	"heading": `src-components-Comments-ui-Comments-module__heading--em7va`,
	"list": `src-components-Comments-ui-Comments-module__list--xAS4e`,
	"item": `src-components-Comments-ui-Comments-module__item--TwmR4`,
	"avatar": `src-components-Comments-ui-Comments-module__avatar--b0AqN`,
	"info": `src-components-Comments-ui-Comments-module__info--XiKKu`,
	"name": `src-components-Comments-ui-Comments-module__name--t5y8L`,
	"text": `src-components-Comments-ui-Comments-module__text--W0QJ4`,
	"buttons": `src-components-Comments-ui-Comments-module__buttons--O3KaC`,
	"date": `src-components-Comments-ui-Comments-module__date--DHV6A`,
	"delete": `src-components-Comments-ui-Comments-module__delete--ST3D2`
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Post/ui/Post.module.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Post/ui/Post.module.css ***!
  \******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-components-Post-ui-Post-module__post--RmFrC {
  max-width: 676px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
  margin: 58px auto 0;
  padding: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/Post/ui/Post.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,UAAU;AACZ","sourcesContent":[".post {\n  max-width: 676px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 42px;\n  margin: 58px auto 0;\n  padding: 0;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"post": `src-components-Post-ui-Post-module__post--RmFrC`
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/Comments/ui/Comments.module.css":
/*!********************************************************!*\
  !*** ./src/components/Comments/ui/Comments.module.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./Comments.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Comments/ui/Comments.module.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default()), options);


if (true) {
  if (!(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals) || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals);
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__ : (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals);

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./Comments.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Comments/ui/Comments.module.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./Comments.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Comments/ui/Comments.module.css");
/* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__);
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__ : (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals), isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6__ : (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals);

              update((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default()));
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Comments_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./src/components/Post/ui/Post.module.css":
/*!************************************************!*\
  !*** ./src/components/Post/ui/Post.module.css ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./Post.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Post/ui/Post.module.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default()), options);


if (true) {
  if (!(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals) || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals);
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ : (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals);

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./Post.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Post/ui/Post.module.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./Post.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./src/components/Post/ui/Post.module.css");
/* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__);
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ : (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals), isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6__ : (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals);

              update((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default()));
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_Post_module_css__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./src/assets/images/image.jpeg":
/*!**************************************!*\
  !*** ./src/assets/images/image.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "db2ed49c20decaf49108.jpeg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfUG9zdF91aV9Qb3N0X3RzeC5lNmFiMTg5ZGNmMmI2NWM1ZDdiNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDaUI7QUFDWDtBQUFBO0FBSTdDO0FBRU0sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUFRLElBQUEsRUFBcUM7RUFBQSxJQUEvQkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFDbEMsb0JBQ0VGLHVEQUFBO0lBQVNFLFNBQVMsRUFBRVAsdUVBQVUsQ0FBQ0QscUVBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDUSxTQUFTLENBQUMsQ0FBRTtJQUFBRSxRQUFBLGdCQUM1RE4sc0RBQUE7TUFBSUksU0FBUyxFQUFFUCx1RUFBVSxDQUFDRCxvRUFBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRTtNQUFBVSxRQUFBLEVBQUM7SUFBVSxDQUFJLENBQUMsZUFDL0ROLHNEQUFBO01BQUlJLFNBQVMsRUFBRVAsdUVBQVUsQ0FBQ0QsaUVBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUU7TUFBQVUsUUFBQSxlQUMxQ0osdURBQUE7UUFBSUUsU0FBUyxFQUFFUCx1RUFBVSxDQUFDRCxpRUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRTtRQUFBVSxRQUFBLGdCQUMxQ04sc0RBQUE7VUFDRUksU0FBUyxFQUFFUCx1RUFBVSxDQUFDRCxtRUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRTtVQUMxQ2MsR0FBRyxFQUFDLGtEQUFVO1VBQ2RDLEdBQUcsRUFBRWIscURBQU1BO1FBQUMsQ0FDYixDQUFDLGVBQ0ZJLHVEQUFBO1VBQUtFLFNBQVMsRUFBRVAsdUVBQVUsQ0FBQ0QsaUVBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUU7VUFBQVUsUUFBQSxnQkFDM0NOLHNEQUFBO1lBQUlJLFNBQVMsRUFBRVAsdUVBQVUsQ0FBQ0QsaUVBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUU7WUFBQVUsUUFBQSxFQUFDO1VBQUksQ0FBSSxDQUFDLGVBQ3RETixzREFBQTtZQUFHSSxTQUFTLEVBQUVQLHVFQUFVLENBQUNELGlFQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFFO1lBQUFVLFFBQUEsRUFBQztVQUU1QyxDQUFHLENBQUMsZUFDSkosdURBQUE7WUFBS0UsU0FBUyxFQUFFUCx1RUFBVSxDQUFDRCxvRUFBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRTtZQUFBVSxRQUFBLGdCQUM5Q04sc0RBQUE7Y0FBR0ksU0FBUyxFQUFFUCx1RUFBVSxDQUFDRCxpRUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRTtjQUFBVSxRQUFBLEVBQUM7WUFBSyxDQUFHLENBQUMsZUFDckROLHNEQUFBO2NBQVFJLFNBQVMsRUFBRVAsdUVBQVUsQ0FBQ0Qsc0VBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUU7Y0FBQVUsUUFBQSxFQUFDO1lBQU0sQ0FBUSxDQUFDO1VBQUEsQ0FDL0QsQ0FBQztRQUFBLENBQ0gsQ0FBQztNQUFBLENBQ0o7SUFBQyxDQUNILENBQUM7RUFBQSxDQUNFLENBQUM7QUFFZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDbUM7QUFDcUI7QUFDUDtBQUNIO0FBQUE7QUFNL0MsSUFBTVksSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUFmLElBQUEsRUFBaUM7RUFBQSxJQUEzQkMsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7RUFDdkIsb0JBQ0VGLHVEQUFBO0lBQU1FLFNBQVMsRUFBRVAsdUVBQVUsQ0FBQ0QsNkRBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDUSxTQUFTLENBQUMsQ0FBRTtJQUFBRSxRQUFBLGdCQUNyRE4sc0RBQUEsQ0FBQ2lCLDREQUFLLElBQUUsQ0FBQyxlQUNUakIsc0RBQUEsQ0FBQ0wseURBQVEsSUFBRSxDQUFDO0VBQUEsQ0FDUixDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFldUIsSUFBSTs7Ozs7Ozs7OztBQ2xCbkI7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyw0SEFBZ0U7QUFDcEgsa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlIQUFpSCxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEscUNBQXFDLGdCQUFnQixtQkFBbUIsZUFBZSxrQkFBa0IsMkJBQTJCLGNBQWMsc0JBQXNCLEdBQUcsY0FBYyxjQUFjLGVBQWUsb0JBQW9CLHFCQUFxQixzQkFBc0IsR0FBRyxXQUFXLGdCQUFnQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQixhQUFhLGNBQWMsZUFBZSxHQUFHLGFBQWEsc0JBQXNCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLGNBQWMsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLFdBQVcsb0JBQW9CLHFCQUFxQixzQkFBc0IsY0FBYyxlQUFlLEdBQUcsV0FBVyxvQkFBb0IscUJBQXFCLHNCQUFzQixjQUFjLHFDQUFxQyxlQUFlLEdBQUcsY0FBYyxrQkFBa0IsY0FBYyxjQUFjLHdCQUF3QixHQUFHLFdBQVcsb0JBQW9CLHFCQUFxQixzQkFBc0IsY0FBYywrQkFBK0IscUNBQXFDLGVBQWUsR0FBRyxhQUFhLGtDQUFrQyxpQkFBaUIsbUNBQW1DLHFDQUFxQyxvQkFBb0IscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQjtBQUNyckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVHQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDRIQUFnRTtBQUNwSCxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUdBQXlHLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsZ0NBQWdDLHFCQUFxQixnQkFBZ0Isa0JBQWtCLDJCQUEyQixjQUFjLHdCQUF3QixlQUFlLEdBQUcsbUJBQW1CO0FBQzdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBd0c7QUFDeEcsTUFBOEY7QUFDOUYsTUFBcUc7QUFDckcsTUFBd0g7QUFDeEgsTUFBaUg7QUFDakgsTUFBaUg7QUFDakgsTUFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5SEFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sZ0lBQWMsSUFBSSxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdJQUFjO0FBQ3ZDLG9DQUFvQyw2R0FBVyxHQUFHLGdJQUFjOztBQUVoRSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLCtOQUFxRztBQUMzRyxNQUFNO0FBQUE7QUFBQTtBQUNOLHNEQUFzRCw2R0FBVyxHQUFHLGdJQUFjO0FBQ2xGLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyw2R0FBVyxHQUFHLGdJQUFjOztBQUV0RSxxQkFBcUIseUhBQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUdvSDtBQUNwSCxPQUFPLGlFQUFlLHlIQUFPLElBQUksZ0lBQWMsR0FBRyxnSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRTdFLE1BQXdHO0FBQ3hHLE1BQThGO0FBQzlGLE1BQXFHO0FBQ3JHLE1BQXdIO0FBQ3hILE1BQWlIO0FBQ2pILE1BQWlIO0FBQ2pILE1BQThJO0FBQzlJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUhBQU87OztBQUd4QixJQUFJLElBQVU7QUFDZCxPQUFPLDRIQUFjLElBQUksVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0SEFBYztBQUN2QyxvQ0FBb0MseUdBQVcsR0FBRyw0SEFBYzs7QUFFaEUsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSxtTkFBaUc7QUFDdkcsTUFBTTtBQUFBO0FBQUE7QUFDTixzREFBc0QseUdBQVcsR0FBRyw0SEFBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMseUdBQVcsR0FBRyw0SEFBYzs7QUFFdEUscUJBQXFCLHFIQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHZ0g7QUFDaEgsT0FBTyxpRUFBZSxxSEFBTyxJQUFJLDRIQUFjLEdBQUcsNEhBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpdHJhaW4vLi9zcmMvY29tcG9uZW50cy9Db21tZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9hcGl0cmFpbi8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL3VpL0NvbW1lbnRzLnRzeCIsIndlYnBhY2s6Ly9hcGl0cmFpbi8uL3NyYy9jb21wb25lbnRzL1Bvc3QvdWkvUG9zdC50c3giLCJ3ZWJwYWNrOi8vYXBpdHJhaW4vLi9zcmMvY29tcG9uZW50cy9Db21tZW50cy91aS9Db21tZW50cy5tb2R1bGUuY3NzIiwid2VicGFjazovL2FwaXRyYWluLy4vc3JjL2NvbXBvbmVudHMvUG9zdC91aS9Qb3N0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYXBpdHJhaW4vLi9zcmMvY29tcG9uZW50cy9Db21tZW50cy91aS9Db21tZW50cy5tb2R1bGUuY3NzP2ZjYzIiLCJ3ZWJwYWNrOi8vYXBpdHJhaW4vLi9zcmMvY29tcG9uZW50cy9Qb3N0L3VpL1Bvc3QubW9kdWxlLmNzcz9iZTc0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IENvbW1lbnRzIH0gZnJvbSAnLi91aS9Db21tZW50cyc7IiwiaW1wb3J0IGNscyBmcm9tICcuL0NvbW1lbnRzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3V0aWxzL2NsYXNzTmFtZXMvY2xhc3NOYW1lcyc7XG5pbXBvcnQgYXZhdGFyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaW1hZ2UuanBlZyc7XG5cbmludGVyZmFjZSBJQ29tbWVudHNEYXRhIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IENvbW1lbnRzID0gKHsgY2xhc3NOYW1lIH06IElDb21tZW50c0RhdGEpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmNvbW1lbnRzLCB7fSwgW2NsYXNzTmFtZV0pfT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmhlYWRpbmcsIHt9LCBbXSl9PjIgY29tbWVudHM8L2gyPlxuICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubGlzdCwge30sIFtdKX0+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLml0ZW0sIHt9LCBbXSl9PlxuICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmF2YXRhciwge30sIFtdKX1cbiAgICAgICAgICAgIGFsdD0n0LDQstCw0YLQsNGA0LrQsCdcbiAgICAgICAgICAgIHNyYz17YXZhdGFyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmluZm8sIHt9LCBbXSl9PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMubmFtZSwge30sIFtdKX0+U3RhczwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLnRleHQsIHt9LCBbXSl9PlxuICAgICAgICAgICAgICBIaXMgbW90aGVyIGhhZCBhbHdheXMgdGF1Z2h0IGhpbVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmJ1dHRvbnMsIHt9LCBbXSl9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xzLmRhdGUsIHt9LCBbXSl9PlRvZGF5PC9wPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbHMuZGVsZXRlLCB7fSwgW10pfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn0iLCJpbXBvcnQgY2xzIGZyb20gJy4vUG9zdC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tICd1dGlscy9jbGFzc05hbWVzL2NsYXNzTmFtZXMnO1xuaW1wb3J0IHsgQ2FyZHMgfSBmcm9tICdjb21wb25lbnRzL0NhcmRzL3VpL0NhcmRzJztcbmltcG9ydCB7IENvbW1lbnRzIH0gZnJvbSAnY29tcG9uZW50cy9Db21tZW50cyc7XG5cbmludGVyZmFjZSBJUG9zdERhdGEge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFBvc3QgPSAoeyBjbGFzc05hbWUgfTogSVBvc3REYXRhKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNscy5wb3N0LCB7fSwgW2NsYXNzTmFtZV0pfT5cbiAgICAgIDxDYXJkcyAvPlxuICAgICAgPENvbW1lbnRzIC8+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtY29tcG9uZW50cy1Db21tZW50cy11aS1Db21tZW50cy1tb2R1bGVfX2NvbW1lbnRzLS12MzhYUSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnNyYy1jb21wb25lbnRzLUNvbW1lbnRzLXVpLUNvbW1lbnRzLW1vZHVsZV9faGVhZGluZy0tZW03dmEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5zcmMtY29tcG9uZW50cy1Db21tZW50cy11aS1Db21tZW50cy1tb2R1bGVfX2xpc3QtLXhBUzRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cblxuLnNyYy1jb21wb25lbnRzLUNvbW1lbnRzLXVpLUNvbW1lbnRzLW1vZHVsZV9faXRlbS0tVHdtUjQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19hdmF0YXItLWIwQXFOIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5zcmMtY29tcG9uZW50cy1Db21tZW50cy11aS1Db21tZW50cy1tb2R1bGVfX2luZm8tLVhpS0t1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19uYW1lLS10NXk4TCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNyYy1jb21wb25lbnRzLUNvbW1lbnRzLXVpLUNvbW1lbnRzLW1vZHVsZV9fdGV4dC0tVzBRSjQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZ3VsYXIpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19idXR0b25zLS1PM0thQyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19kYXRlLS1ESFY2QSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHJnYmEoNCwgNCwgNSwgMC4yMik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXJlZ3VsYXIpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19kZWxldGUtLVNUM0QyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWd1bGFyKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL3VpL0NvbW1lbnRzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsU0FBUztFQUNULDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb21tZW50cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XFxufVxcblxcbi5saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hdmF0YXIge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG4gIHdpZHRoOiA0NnB4O1xcbiAgaGVpZ2h0OiA0NnB4O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuLm5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcmVndWxhcik7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHJnYmEoNCwgNCwgNSwgMC4yMik7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWd1bGFyKTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kZWxldGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1yZWd1bGFyKTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTJweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29tbWVudHNcIjogYHNyYy1jb21wb25lbnRzLUNvbW1lbnRzLXVpLUNvbW1lbnRzLW1vZHVsZV9fY29tbWVudHMtLXYzOFhRYCxcblx0XCJoZWFkaW5nXCI6IGBzcmMtY29tcG9uZW50cy1Db21tZW50cy11aS1Db21tZW50cy1tb2R1bGVfX2hlYWRpbmctLWVtN3ZhYCxcblx0XCJsaXN0XCI6IGBzcmMtY29tcG9uZW50cy1Db21tZW50cy11aS1Db21tZW50cy1tb2R1bGVfX2xpc3QtLXhBUzRlYCxcblx0XCJpdGVtXCI6IGBzcmMtY29tcG9uZW50cy1Db21tZW50cy11aS1Db21tZW50cy1tb2R1bGVfX2l0ZW0tLVR3bVI0YCxcblx0XCJhdmF0YXJcIjogYHNyYy1jb21wb25lbnRzLUNvbW1lbnRzLXVpLUNvbW1lbnRzLW1vZHVsZV9fYXZhdGFyLS1iMEFxTmAsXG5cdFwiaW5mb1wiOiBgc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19pbmZvLS1YaUtLdWAsXG5cdFwibmFtZVwiOiBgc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19uYW1lLS10NXk4TGAsXG5cdFwidGV4dFwiOiBgc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX190ZXh0LS1XMFFKNGAsXG5cdFwiYnV0dG9uc1wiOiBgc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19idXR0b25zLS1PM0thQ2AsXG5cdFwiZGF0ZVwiOiBgc3JjLWNvbXBvbmVudHMtQ29tbWVudHMtdWktQ29tbWVudHMtbW9kdWxlX19kYXRlLS1ESFY2QWAsXG5cdFwiZGVsZXRlXCI6IGBzcmMtY29tcG9uZW50cy1Db21tZW50cy11aS1Db21tZW50cy1tb2R1bGVfX2RlbGV0ZS0tU1QzRDJgXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLWNvbXBvbmVudHMtUG9zdC11aS1Qb3N0LW1vZHVsZV9fcG9zdC0tUm1GckMge1xuICBtYXgtd2lkdGg6IDY3NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0MnB4O1xuICBtYXJnaW46IDU4cHggYXV0byAwO1xuICBwYWRkaW5nOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvUG9zdC91aS9Qb3N0Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvc3Qge1xcbiAgbWF4LXdpZHRoOiA2NzZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDQycHg7XFxuICBtYXJnaW46IDU4cHggYXV0byAwO1xcbiAgcGFkZGluZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicG9zdFwiOiBgc3JjLWNvbXBvbmVudHMtUG9zdC11aS1Qb3N0LW1vZHVsZV9fcG9zdC0tUm1GckNgXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4vQ29tbWVudHMubW9kdWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuL0NvbW1lbnRzLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi9Db21tZW50cy5tb2R1bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi9Qb3N0Lm1vZHVsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi9Qb3N0Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi9Qb3N0Lm1vZHVsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOlsiQ29tbWVudHMiLCJjbHMiLCJjbGFzc05hbWVzIiwiYXZhdGFyIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIl9yZWYiLCJjbGFzc05hbWUiLCJjb21tZW50cyIsImNoaWxkcmVuIiwiaGVhZGluZyIsImxpc3QiLCJpdGVtIiwiYWx0Iiwic3JjIiwiaW5mbyIsIm5hbWUiLCJ0ZXh0IiwiYnV0dG9ucyIsImRhdGUiLCJDYXJkcyIsIlBvc3QiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==
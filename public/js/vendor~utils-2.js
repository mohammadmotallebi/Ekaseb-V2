"use strict";
(self["webpackChunkloyalty"] = self["webpackChunkloyalty"] || []).push([["js/vendor~utils-2"],{

/***/ "./node_modules/framework7-react/components/accordion-content.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framework7-react/components/accordion-content.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const AccordionContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'accordion-item-content', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
AccordionContent.displayName = 'f7-accordion-content';
/* harmony default export */ __webpack_exports__["default"] = (AccordionContent);

/***/ }),

/***/ "./node_modules/framework7-react/components/accordion-item.js":
/*!********************************************************************!*\
  !*** ./node_modules/framework7-react/components/accordion-item.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const AccordionItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    opened
  } = props;
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const onBeforeOpen = (el, prevent) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'accordionBeforeOpen', prevent);
  };

  const onOpen = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'accordionOpen');
  };

  const onOpened = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'accordionOpened');
  };

  const onBeforeClose = (el, prevent) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'accordionBeforeClose', prevent);
  };

  const onClose = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'accordionClose');
  };

  const onClosed = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'accordionClosed');
  };

  const attachEvents = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('accordionBeforeOpen', onBeforeOpen);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('accordionOpen', onOpen);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('accordionOpened', onOpened);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('accordionBeforeClose', onBeforeClose);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('accordionClose', onClose);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('accordionClosed', onClosed);
    });
  };

  const detachEvents = () => {
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('accordionBeforeOpen', onBeforeOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('accordionOpen', onOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('accordionOpened', onOpened);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('accordionBeforeClose', onBeforeClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('accordionClose', onClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('accordionClosed', onClosed);
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'accordion-item', {
    'accordion-item-opened': opened
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
AccordionItem.displayName = 'f7-accordion-item';
/* harmony default export */ __webpack_exports__["default"] = (AccordionItem);

/***/ }),

/***/ "./node_modules/framework7-react/components/accordion-toggle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framework7-react/components/accordion-toggle.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const AccordionToggle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'accordion-item-toggle', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes
  }, extraAttrs, {
    ref: elRef
  }), children);
});
AccordionToggle.displayName = 'f7-accordion-toggle';
/* harmony default export */ __webpack_exports__["default"] = (AccordionToggle);

/***/ }),

/***/ "./node_modules/framework7-react/components/accordion.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/accordion.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Accordion = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    accordionOpposite,
    children
  } = props;
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'accordion-list', accordionOpposite && 'accordion-opposite', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Accordion.displayName = 'f7-accordion';
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./node_modules/framework7-react/components/actions-button.js":
/*!********************************************************************!*\
  !*** ./node_modules/framework7-react/components/actions-button.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const ComponentName = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    bold,
    close = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, {
    'actions-button': true,
    'actions-button-bold': bold
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  let mediaEl;
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);

  if (slots.media && slots.media.length) {
    mediaEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "actions-button-media"
    }, slots.media);
  }

  const onClick = e => {
    if (elRef.current && close && _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.actions.close(_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.$(elRef.current).parents('.actions-modal'));
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), mediaEl, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "actions-button-text"
  }, slots.default));
});
ComponentName.displayName = 'f7-actions-button';
/* harmony default export */ __webpack_exports__["default"] = (ComponentName);

/***/ }),

/***/ "./node_modules/framework7-react/components/actions-group.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/components/actions-group.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ActionsGroup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'actions-group', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
ActionsGroup.displayName = 'f7-actions-group';
/* harmony default export */ __webpack_exports__["default"] = (ActionsGroup);

/***/ }),

/***/ "./node_modules/framework7-react/components/actions-label.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/components/actions-label.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ActionsLabel = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    bold
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'actions-label', {
    'actions-button-bold': bold
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), children);
});
ActionsLabel.displayName = 'f7-actions-label';
/* harmony default export */ __webpack_exports__["default"] = (ActionsLabel);

/***/ }),

/***/ "./node_modules/framework7-react/components/actions.js":
/*!*************************************************************!*\
  !*** ./node_modules/framework7-react/components/actions.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modal-state-classes.js */ "./node_modules/framework7-react/shared/modal-state-classes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Actions = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    grid,
    opened = false,
    animate
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(opened);
  const isClosing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const f7Actions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onOpen = instance => {
    isOpened.current = true;
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'actionsOpen', instance);
  };

  const onOpened = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'actionsOpened', instance);
  };

  const onClose = instance => {
    isOpened.current = false;
    isClosing.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'actionsClose', instance);
  };

  const onClosed = instance => {
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'actionsClosed', instance);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Actions: () => f7Actions.current
  })); // watch opened changes

  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(opened, value => {
    if (!f7Actions.current) return;

    if (value) {
      f7Actions.current.open();
    } else {
      f7Actions.current.close();
    }
  });

  const modalEvents = method => {
    if (!f7Actions.current) return;
    f7Actions.current[method]('open', onOpen);
    f7Actions.current[method]('opened', onOpened);
    f7Actions.current[method]('close', onClose);
    f7Actions.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;
    const {
      target,
      convertToPopover,
      forceToPopover,
      closeByBackdropClick,
      closeByOutsideClick,
      closeOnEscape,
      backdrop,
      backdropEl,
      containerEl
    } = props;
    const params = {
      el: elRef.current,
      grid
    };
    if (target) params.targetEl = target;
    if ('convertToPopover' in props) params.convertToPopover = convertToPopover;
    if ('forceToPopover' in props) params.forceToPopover = forceToPopover;
    if ('backdrop' in props) params.backdrop = backdrop;
    if ('backdropEl' in props) params.backdropEl = backdropEl;
    if ('closeByBackdropClick' in props) params.closeByBackdropClick = closeByBackdropClick;
    if ('closeByOutsideClick' in props) params.closeByOutsideClick = closeByOutsideClick;
    if ('closeOnEscape' in props) params.closeOnEscape = closeOnEscape;
    if ('animate' in props) params.animate = animate;
    if ('containerEl' in props) params.containerEl = containerEl;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      f7Actions.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.actions.create(params);
      modalEvents('on');

      if (opened) {
        f7Actions.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (f7Actions.current) f7Actions.current.destroy();
    f7Actions.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    modalEvents('on');
    return () => {
      modalEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'actions-modal', {
    'actions-grid': grid
  }, (0,_shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__.modalStateClasses)({
    isOpened,
    isClosing
  }), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Actions.displayName = 'f7-actions';
/* harmony default export */ __webpack_exports__["default"] = (Actions);

/***/ }),

/***/ "./node_modules/framework7-react/components/app.js":
/*!*********************************************************!*\
  !*** ./node_modules/framework7-react/components/app.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _routable_modals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routable-modals.js */ "./node_modules/framework7-react/components/routable-modals.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const App = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    style,
    children,
    ...rest
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const params = rest;
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'framework7-root', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props)); // eslint-disable-next-line

  if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 || typeof window === 'undefined') {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7init)(elRef.current, params, false);
  }

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    const parentEl = elRef.current && elRef.current.parentNode;
    /* eslint-disable no-restricted-globals */

    if (typeof document !== 'undefined' && parentEl && parentEl !== document.body && parentEl.parentNode === document.body) {
      parentEl.style.height = '100%';
    }
    /* eslint-enable no-restricted-globals */


    if (_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.init(elRef.current);
      return;
    }

    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7init)(elRef.current, params, true);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: "framework7-root",
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routable_modals_js__WEBPACK_IMPORTED_MODULE_5__["default"], null));
});
App.displayName = 'f7-app';
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./node_modules/framework7-react/components/appbar.js":
/*!************************************************************!*\
  !*** ./node_modules/framework7-react/components/appbar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Appbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    inner = true,
    innerClass,
    innerClassName,
    noShadow,
    noHairline
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  let innerEl;

  if (inner) {
    innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('appbar-inner', innerClass, innerClassName)
    }, children);
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'appbar', {
    'no-shadow': noShadow,
    'no-hairline': noHairline
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), slots['before-inner'], innerEl || slots.default, slots['after-inner']);
});
Appbar.displayName = 'f7-appbar';
/* harmony default export */ __webpack_exports__["default"] = (Appbar);

/***/ }),

/***/ "./node_modules/framework7-react/components/area-chart.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/components/area-chart.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const AreaChart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    lineChart = false,
    datasets = [],
    axis = false,
    axisLabels = [],
    tooltip = false,
    legend = false,
    toggleDatasets = false,
    width = 640,
    height = 320,
    maxAxisLabels = 8,
    formatAxisLabel: formatAxisLabelProp,
    formatLegendLabel: formatLegendLabelProp,
    formatTooltip: formatTooltipProp,
    formatTooltipAxisLabel,
    formatTooltipTotal,
    formatTooltipDataset,
    children
  } = props;
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [hiddenDatasets, setHiddenDatasets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const svgElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const f7Tooltip = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const linesOffsets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const getVisibleLegends = () => {
    if (!maxAxisLabels || axisLabels.length <= maxAxisLabels) return axisLabels;
    const skipStep = Math.ceil(axisLabels.length / maxAxisLabels);
    const filtered = axisLabels.filter((label, index) => index % skipStep === 0);
    return filtered;
  };

  const getSummValues = () => {
    const summValues = [];
    datasets.filter((dataset, index) => !hiddenDatasets.includes(index)).forEach(_ref => {
      let {
        values
      } = _ref;
      values.forEach((value, valueIndex) => {
        if (!summValues[valueIndex]) summValues[valueIndex] = 0;
        summValues[valueIndex] += value;
      });
    });
    return summValues;
  };

  const getChartData = () => {
    const data = [];

    if (!datasets.length) {
      return data;
    }

    const lastValues = datasets[0].values.map(() => 0);
    let maxValue = 0;

    if (lineChart) {
      datasets.forEach(_ref2 => {
        let {
          values
        } = _ref2;
        const datasetMaxValue = Math.max(...values);
        if (datasetMaxValue > maxValue) maxValue = datasetMaxValue;
      });
    } else {
      maxValue = Math.max(...getSummValues());
    }

    datasets.filter((dataset, index) => !hiddenDatasets.includes(index)).forEach(_ref3 => {
      let {
        label,
        values,
        color
      } = _ref3;
      const points = values.map((originalValue, valueIndex) => {
        lastValues[valueIndex] += originalValue;
        const value = lineChart ? originalValue : lastValues[valueIndex];
        const x = valueIndex / (values.length - 1) * width;
        const y = height - value / maxValue * height;

        if (lineChart) {
          return `${valueIndex === 0 ? 'M' : 'L'}${x},${y}`;
        }

        return `${x} ${y}`;
      });

      if (!lineChart) {
        points.push(`${width} ${height} 0 ${height}`);
      }

      data.push({
        label,
        points: points.join(' '),
        color
      });
    });
    return data.reverse();
  };

  const getVerticalLines = () => {
    const lines = [];

    if (!datasets.length) {
      return lines;
    }

    const values = datasets[0].values;
    values.forEach((value, valueIndex) => {
      const x = valueIndex / (values.length - 1) * width;
      lines.push(x);
    });
    return lines;
  };

  const toggleDataset = index => {
    if (!toggleDatasets) return;

    if (hiddenDatasets.includes(index)) {
      hiddenDatasets.splice(hiddenDatasets.indexOf(index), 1);
    } else {
      hiddenDatasets.push(index);
    }

    setHiddenDatasets([...hiddenDatasets]);
  };

  const formatAxisLabel = label => {
    if (formatAxisLabelProp) return formatAxisLabelProp(label);
    return label;
  };

  const formatLegendLabel = label => {
    if (formatLegendLabelProp) return formatLegendLabelProp(label);
    return label;
  };

  const calcLinesOffsets = () => {
    const lines = svgElRef.current.querySelectorAll('line');
    linesOffsets.current = [];

    for (let i = 0; i < lines.length; i += 1) {
      linesOffsets.current.push(lines[i].getBoundingClientRect().left);
    }
  };

  const formatTooltip = () => {
    if (currentIndex === null) return '';
    let total = 0;
    const currentValues = datasets.filter((dataset, index) => !hiddenDatasets.includes(index)).map(dataset => ({
      color: dataset.color,
      label: dataset.label,
      value: dataset.values[currentIndex]
    }));
    currentValues.forEach(dataset => {
      total += dataset.value;
    });

    if (formatTooltipProp) {
      return formatTooltipProp({
        index: currentIndex,
        total,
        datasets: currentValues
      });
    }

    let labelText = formatTooltipAxisLabel ? formatTooltipAxisLabel(axisLabels[currentIndex]) : formatAxisLabel(axisLabels[currentIndex]);
    if (!labelText) labelText = '';
    const totalText = formatTooltipTotal ? formatTooltipTotal(total) : total; // prettier-ignore

    const datasetsText = currentValues.length > 0 ? `
      <ul class="area-chart-tooltip-list">
        ${currentValues.map(_ref4 => {
      let {
        label,
        color,
        value
      } = _ref4;
      const valueText = formatTooltipDataset ? formatTooltipDataset(label, value, color) : `${label}: ${value}`;
      return `
              <li><span style="background-color: ${color};"></span>${valueText}</li>
            `;
    }).join('')}
      </ul>` : ''; // prettier-ignore

    return `
      <div class="area-chart-tooltip-label">${labelText}</div>
      <div class="area-chart-tooltip-total">${totalText}</div>
      ${datasetsText}
    `;
  };

  const setTooltip = () => {
    if (!tooltip) return;
    const hasVisibleDataSets = datasets.filter((dataset, index) => !hiddenDatasets.includes(index)).length > 0;

    if (!hasVisibleDataSets) {
      if (f7Tooltip.current && f7Tooltip.current.hide) f7Tooltip.current.hide();
      return;
    }

    if (currentIndex !== null && !f7Tooltip.current) {
      f7Tooltip.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.tooltip.create({
        trigger: 'manual',
        containerEl: elRef.current,
        targetEl: svgElRef.current.querySelector(`line[data-index="${currentIndex}"]`),
        text: formatTooltip(),
        cssClass: 'area-chart-tooltip'
      });

      if (f7Tooltip.current && f7Tooltip.current.show) {
        f7Tooltip.current.show();
      }

      return;
    }

    if (!f7Tooltip.current || !f7Tooltip.current.hide || !f7Tooltip.current.show) {
      return;
    }

    if (currentIndex !== null) {
      f7Tooltip.current.setText(formatTooltip());
      f7Tooltip.current.setTargetEl(svgElRef.current.querySelector(`line[data-index="${currentIndex}"]`));
      f7Tooltip.current.show();
    } else {
      f7Tooltip.current.hide();
    }
  };

  const onMouseEnter = () => {
    calcLinesOffsets();
  };

  const onMouseMove = e => {
    if (!linesOffsets.current) {
      calcLinesOffsets();
    }

    let currentLeft = e.pageX;
    if (typeof currentLeft === 'undefined') currentLeft = 0;
    const distances = linesOffsets.current.map(left => Math.abs(currentLeft - left));
    const minDistance = Math.min(...distances);
    const closestIndex = distances.indexOf(minDistance);
    setCurrentIndex(closestIndex);
  };

  const onMouseLeave = () => {
    setCurrentIndex(null);
  };

  const attachEvents = () => {
    if (!svgElRef.current) return;
    svgElRef.current.addEventListener('mouseenter', onMouseEnter);
    svgElRef.current.addEventListener('mousemove', onMouseMove);
    svgElRef.current.addEventListener('mouseleave', onMouseLeave);
  };

  const detachEvents = () => {
    if (!svgElRef.current) return;
    svgElRef.current.removeEventListener('mouseenter', onMouseEnter);
    svgElRef.current.removeEventListener('mousemove', onMouseMove);
    svgElRef.current.removeEventListener('mouseleave', onMouseLeave);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (previousIndex.current === currentIndex) return;
    previousIndex.current = currentIndex;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'select', currentIndex);
    setTooltip();
  }, [currentIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (f7Tooltip.current && f7Tooltip.current.destroy) {
        f7Tooltip.current.destroy();
      }

      f7Tooltip.current = null;
    };
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('area-chart', className);
  const chartData = getChartData();
  const verticalLines = getVerticalLines();
  const visibleLegends = getVisibleLegends();
  const LegendItemTag = toggleDatasets ? 'button' : 'span';
  const ChartTag = lineChart ? 'path' : 'polygon';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "none",
    ref: svgElRef
  }, chartData.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChartTag, {
    key: `${ChartTag}-${index}`,
    fill: lineChart ? undefined : data.color,
    stroke: lineChart ? data.color : undefined,
    fillRule: "evenodd",
    points: lineChart ? undefined : data.points,
    d: lineChart ? data.points : undefined
  })), verticalLines.map((line, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    key: `line-${index}`,
    "data-index": index,
    fill: "#000",
    x1: line,
    y1: 0,
    x2: line,
    y2: height,
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)({
      'area-chart-current-line': currentIndex === index
    })
  }))), axis && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "area-chart-axis"
  }, axisLabels.map((label, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    key: index
  }, visibleLegends.includes(label) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, formatAxisLabel(label))))), legend && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "area-chart-legend"
  }, datasets.map((dataset, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LegendItemTag, {
    key: index,
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('area-chart-legend-item', {
      'area-chart-legend-item-hidden': hiddenDatasets.includes(index),
      'area-chart-legend-button': toggleDatasets
    }),
    type: toggleDatasets ? 'button' : undefined,
    onClick: () => toggleDataset(index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      backgroundColor: dataset.color
    }
  }), formatLegendLabel(dataset.label)))), children);
});
AreaChart.displayName = 'f7-area-chart';
/* harmony default export */ __webpack_exports__["default"] = (AreaChart);

/***/ }),

/***/ "./node_modules/framework7-react/components/badge.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/badge.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/* dts-instance
f7Tooltip: Tooltip.Tooltip
*/


const Badge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(elRef, props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'badge', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Badge.displayName = 'f7-badge';
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./node_modules/framework7-react/components/block-footer.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/components/block-footer.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const BlockFooter = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'block-footer', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
BlockFooter.displayName = 'f7-block-footer';
/* harmony default export */ __webpack_exports__["default"] = (BlockFooter);

/***/ }),

/***/ "./node_modules/framework7-react/components/block-header.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/components/block-header.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const BlockHeader = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'block-header', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
BlockHeader.displayName = 'f7-block-header';
/* harmony default export */ __webpack_exports__["default"] = (BlockHeader);

/***/ }),

/***/ "./node_modules/framework7-react/components/block-title.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/block-title.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const BlockTitle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    large,
    medium
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'block-title', {
    'block-title-large': large,
    'block-title-medium': medium
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
BlockTitle.displayName = 'f7-block-title';
/* harmony default export */ __webpack_exports__["default"] = (BlockTitle);

/***/ }),

/***/ "./node_modules/framework7-react/components/block.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/block.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tab.js */ "./node_modules/framework7-react/shared/use-tab.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Block = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    inset,
    xsmallInset,
    smallInset,
    mediumInset,
    largeInset,
    xlargeInset,
    strong,
    accordionList,
    accordionOpposite,
    tabs,
    tab,
    tabActive,
    noHairlines,
    noHairlinesIos,
    noHairlinesMd,
    noHairlinesAurora,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tab_js__WEBPACK_IMPORTED_MODULE_2__.useTab)(elRef, props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'block', {
    inset,
    'xsmall-inset': xsmallInset,
    'small-inset': smallInset,
    'medium-inset': mediumInset,
    'large-inset': largeInset,
    'xlarge-inset': xlargeInset,
    'block-strong': strong,
    'accordion-list': accordionList,
    'accordion-opposite': accordionOpposite,
    tabs,
    tab,
    'tab-active': tabActive,
    'no-hairlines': noHairlines,
    'no-hairlines-md': noHairlinesMd,
    'no-hairlines-ios': noHairlinesIos,
    'no-hairlines-aurora': noHairlinesAurora
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Block.displayName = 'f7-block';
/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./node_modules/framework7-react/components/breadcrumbs-collapsed.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framework7-react/components/breadcrumbs-collapsed.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const BreadcrumbsCollapsed = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('breadcrumbs-collapsed', className),
    ref: elRef,
    id: id,
    style: style,
    onClick: onClick
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null), children);
});
BreadcrumbsCollapsed.displayName = 'f7-breadcrumbs-collapsed';
/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbsCollapsed);

/***/ }),

/***/ "./node_modules/framework7-react/components/breadcrumbs-item.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framework7-react/components/breadcrumbs-item.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const BreadcrumbsItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    active,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('breadcrumbs-item', className, active && 'breadcrumbs-item-active'),
    ref: elRef,
    id: id,
    style: style,
    onClick: onClick
  }, extraAttrs), children);
});
BreadcrumbsItem.displayName = 'f7-breadcrumbs-item';
/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbsItem);

/***/ }),

/***/ "./node_modules/framework7-react/components/breadcrumbs-separator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framework7-react/components/breadcrumbs-separator.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const BreadcrumbsSeparator = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('breadcrumbs-separator', className),
    ref: elRef,
    id: id,
    style: style
  }, extraAttrs));
});
BreadcrumbsSeparator.displayName = 'f7-breadcrumbs-separator';
/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbsSeparator);

/***/ }),

/***/ "./node_modules/framework7-react/components/breadcrumbs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/breadcrumbs.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Breadcrumbs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('breadcrumbs', className),
    ref: elRef,
    id: id,
    style: style
  }, extraAttrs), children);
});
Breadcrumbs.displayName = 'f7-breadcrumbs';
/* harmony default export */ __webpack_exports__["default"] = (Breadcrumbs);

/***/ }),

/***/ "./node_modules/framework7-react/components/button.js":
/*!************************************************************!*\
  !*** ./node_modules/framework7-react/components/button.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
/* harmony import */ var _shared_use_icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/use-icon.js */ "./node_modules/framework7-react/shared/use-icon.js");
/* harmony import */ var _shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-route-props.js */ "./node_modules/framework7-react/shared/use-route-props.js");
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preloader.js */ "./node_modules/framework7-react/components/preloader.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    text,
    type,
    href = '#',
    target,
    tabLink,
    tabLinkActive,
    round,
    roundIos,
    roundAurora,
    roundMd,
    fill,
    fillIos,
    fillAurora,
    fillMd,
    large,
    largeIos,
    largeAurora,
    largeMd,
    small,
    smallIos,
    smallAurora,
    smallMd,
    raised,
    raisedIos,
    raisedAurora,
    raisedMd,
    active,
    outline,
    outlineIos,
    outlineAurora,
    outlineMd,
    disabled,
    preloader,
    preloaderSize,
    preloaderColor,
    loading
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(elRef, props);
  (0,_shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_3__.useRouteProps)(elRef, props);

  const getClasses = () => {
    return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'button', {
      'tab-link': tabLink || tabLink === '',
      'tab-link-active': tabLinkActive,
      'button-round': round,
      'button-round-ios': roundIos,
      'button-round-aurora': roundAurora,
      'button-round-md': roundMd,
      'button-fill': fill,
      'button-fill-ios': fillIos,
      'button-fill-aurora': fillAurora,
      'button-fill-md': fillMd,
      'button-large': large,
      'button-large-ios': largeIos,
      'button-large-aurora': largeAurora,
      'button-large-md': largeMd,
      'button-small': small,
      'button-small-ios': smallIos,
      'button-small-aurora': smallAurora,
      'button-small-md': smallMd,
      'button-raised': raised,
      'button-raised-ios': raisedIos,
      'button-raised-aurora': raisedAurora,
      'button-raised-md': raisedMd,
      'button-active': active,
      'button-outline': outline,
      'button-outline-ios': outlineIos,
      'button-outline-aurora': outlineAurora,
      'button-outline-md': outlineMd,
      'button-preloader': preloader,
      'button-loading': loading,
      disabled
    }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.routerClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.actionsClasses)(props));
  };

  const ButtonTag = type === 'submit' || type === 'reset' || type === 'button' ? 'button' : 'a';

  const getAttrs = () => {
    let hrefComputed = href;
    if (href === true) hrefComputed = '#';
    if (href === false || ButtonTag === 'button') hrefComputed = undefined; // no href attribute

    return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({
      href: hrefComputed,
      target,
      type,
      'data-tab': (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStringProp)(tabLink) && tabLink || undefined
    }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.routerAttrs)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.actionsAttrs)(props));
  };

  const iconEl = (0,_shared_use_icon_js__WEBPACK_IMPORTED_MODULE_5__.useIcon)(props);
  let textEl;

  if (text) {
    textEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, text);
  }

  if (preloader) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonTag, _extends({
      ref: elRef,
      id: id,
      style: style,
      className: getClasses()
    }, getAttrs(), extraAttrs, {
      onClick: onClick
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_preloader_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: preloaderSize,
      color: preloaderColor
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, iconEl, textEl, children));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonTag, _extends({
    ref: elRef,
    id: id,
    style: style,
    className: getClasses()
  }, getAttrs(), extraAttrs, {
    onClick: onClick
  }), iconEl, textEl, children);
});
Button.displayName = 'f7-button';
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/framework7-react/components/card-content.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/components/card-content.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const CardContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    padding = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'card-content', {
    'card-content-padding': padding
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
CardContent.displayName = 'f7-card-content';
/* harmony default export */ __webpack_exports__["default"] = (CardContent);

/***/ }),

/***/ "./node_modules/framework7-react/components/card-footer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/card-footer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const CardFooter = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'card-footer', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
CardFooter.displayName = 'f7-card-footer';
/* harmony default export */ __webpack_exports__["default"] = (CardFooter);

/***/ }),

/***/ "./node_modules/framework7-react/components/card-header.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/card-header.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const CardHeader = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'card-header', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
CardHeader.displayName = 'f7-card-header';
/* harmony default export */ __webpack_exports__["default"] = (CardHeader);

/***/ }),

/***/ "./node_modules/framework7-react/components/card.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/card.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _card_header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-header.js */ "./node_modules/framework7-react/components/card-header.js");
/* harmony import */ var _card_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-content.js */ "./node_modules/framework7-react/components/card-content.js");
/* harmony import */ var _card_footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card-footer.js */ "./node_modules/framework7-react/components/card-footer.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Card = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    title,
    content,
    footer,
    padding,
    outline,
    expandable,
    expandableAnimateWidth,
    expandableOpened,
    animate,
    hideNavbarOnOpen,
    hideToolbarOnOpen,
    hideStatusbarOnOpen,
    scrollableEl,
    swipeToClose,
    closeByBackdropClick,
    backdrop,
    backdropEl,
    noShadow,
    noBorder
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const open = () => {
    if (!elRef.current) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.card.open(elRef.current);
  };

  const close = () => {
    if (!elRef.current) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.card.close(elRef.current);
  };

  const onBeforeOpen = (el, prevent) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'cardBeforeOpen', el, prevent);
  };

  const onOpen = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'cardOpen', el);
  };

  const onOpened = (el, pageEl) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'cardOpened', el, pageEl);
  };

  const onClose = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'cardClose', el);
  };

  const onClosed = (el, pageEl) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'cardClosed', el, pageEl);
  };

  const attachEvents = () => {
    if (!expandable || !elRef.current) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('cardBeforeOpen', onBeforeOpen);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('cardOpen', onOpen);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('cardOpened', onOpened);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('cardClose', onClose);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('cardClosed', onClosed);
    });
  };

  const detachEvents = () => {
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('cardBeforeOpen', onBeforeOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('cardOpen', onOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('cardOpened', onOpened);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('cardClose', onClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('cardClosed', onClosed);
  };

  const onMount = () => {
    if (!expandable || !elRef.current) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      if (expandable && expandableOpened) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.card.open(elRef.current, false);
      }
    });
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    onMount();
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__.watchProp)(expandableOpened, value => {
    if (value) {
      open();
    } else {
      close();
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    open,
    close
  }));
  let headerEl;
  let contentEl;
  let footerEl;
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'card', {
    'card-outline': outline,
    'card-expandable': expandable,
    'card-expandable-animate-width': expandableAnimateWidth,
    'no-shadow': noShadow,
    'no-border': noBorder
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);

  if (title || slots.header) {
    headerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card_header_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, title, slots.header);
  }

  if (content || slots.content) {
    contentEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card_content_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      padding: padding
    }, content, slots.content);
  }

  if (footer || slots.footer) {
    footerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card_footer_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, footer, slots.footer);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    "data-animate": typeof animate === 'undefined' ? animate : animate.toString(),
    "data-hide-navbar-on-open": typeof hideNavbarOnOpen === 'undefined' ? hideNavbarOnOpen : hideNavbarOnOpen.toString(),
    "data-hide-toolbar-on-open": typeof hideToolbarOnOpen === 'undefined' ? hideToolbarOnOpen : hideToolbarOnOpen.toString(),
    "data-hide-statusbar-on-open": typeof hideStatusbarOnOpen === 'undefined' ? hideStatusbarOnOpen : hideStatusbarOnOpen.toString(),
    "data-scrollable-el": scrollableEl,
    "data-swipe-to-close": typeof swipeToClose === 'undefined' ? swipeToClose : swipeToClose.toString(),
    "data-close-by-backdrop-click": typeof closeByBackdropClick === 'undefined' ? closeByBackdropClick : closeByBackdropClick.toString(),
    "data-backdrop": typeof backdrop === 'undefined' ? backdrop : backdrop.toString(),
    "data-backdrop-el": backdropEl,
    ref: elRef
  }, extraAttrs), headerEl, contentEl, footerEl, slots.default);
});
Card.displayName = 'f7-card';
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/framework7-react/components/checkbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/framework7-react/components/checkbox.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Checkbox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    name,
    value,
    disabled,
    readonly,
    checked,
    defaultChecked,
    indeterminate
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    inputEl: inputElRef.current
  }));

  const onChange = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  const inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    ref: inputElRef,
    type: "checkbox",
    name: name,
    value: value,
    disabled: disabled,
    readOnly: readonly,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  });
  const iconEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "icon-checkbox"
  });
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, {
    checkbox: true,
    disabled
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), inputEl, iconEl, children);
});
Checkbox.displayName = 'f7-checkbox';
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./node_modules/framework7-react/components/chip.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/chip.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
/* harmony import */ var _shared_use_icon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-icon.js */ "./node_modules/framework7-react/shared/use-icon.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const Chip = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    media,
    text,
    deleteable,
    mediaTextColor,
    mediaBgColor,
    outline
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);

  const onClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', event);
  };

  const onDeleteClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'delete', event);
  };

  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(elRef, props);
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const iconEl = (0,_shared_use_icon_js__WEBPACK_IMPORTED_MODULE_3__.useIcon)(props);
  let mediaEl;
  let labelEl;
  let deleteEl;

  if (media || iconEl || slots && slots.media) {
    const mediaClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('chip-media', mediaTextColor && `text-color-${mediaTextColor}`, mediaBgColor && `bg-color-${mediaBgColor}`);
    mediaEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: mediaClasses
    }, iconEl, media, slots.media);
  }

  if (text || slots && (slots.text || slots.default && slots.default.length)) {
    labelEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "chip-label"
    }, text, slots.text, slots.default);
  }

  if (deleteable) {
    deleteEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "chip-delete",
      onClick: onDeleteClick
    });
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'chip', {
    'chip-outline': outline
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), mediaEl, labelEl, deleteEl);
});
Chip.displayName = 'f7-chip';
/* harmony default export */ __webpack_exports__["default"] = (Chip);

/***/ }),

/***/ "./node_modules/framework7-react/components/col.js":
/*!*********************************************************!*\
  !*** ./node_modules/framework7-react/components/col.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Col = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    tag = 'div',
    width = 'auto',
    xsmall,
    small,
    medium,
    large,
    xlarge,
    resizable,
    resizableFixed,
    resizableAbsolute,
    resizableHandler = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', event);
  };

  const onResize = el => {
    if (el === elRef.current) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'gridResize');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const ColTag = tag;
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, {
    col: width === 'auto',
    [`col-${width}`]: width !== 'auto',
    [`xsmall-${xsmall}`]: xsmall,
    [`small-${small}`]: small,
    [`medium-${medium}`]: medium,
    [`large-${large}`]: large,
    [`xlarge-${xlarge}`]: xlarge,
    resizable,
    'resizable-fixed': resizableFixed,
    'resizable-absolute': resizableAbsolute
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('gridResize', onResize);
    });
    return () => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('gridResize', onResize);
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ColTag, _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), children, resizable && resizableHandler && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "resize-handler"
  }));
});
Col.displayName = 'f7-col';
/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./node_modules/framework7-react/components/fab-backdrop.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/components/fab-backdrop.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const FabBackdrop = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'fab-backdrop');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
FabBackdrop.displayName = 'f7-fab-backdrop';
/* harmony default export */ __webpack_exports__["default"] = (FabBackdrop);

/***/ }),

/***/ "./node_modules/framework7-react/components/fab-button.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/components/fab-button.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const FabButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    fabClose,
    label,
    target
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(elRef, props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, {
    'fab-close': fabClose,
    'fab-label-button': label
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  let labelEl;

  if (label) {
    labelEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "fab-label"
    }, label);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({
    id: id,
    style: style,
    target: target,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), children, labelEl);
});
FabButton.displayName = 'f7-fab-button';
/* harmony default export */ __webpack_exports__["default"] = (FabButton);

/***/ }),

/***/ "./node_modules/framework7-react/components/fab-buttons.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/fab-buttons.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const FabButtons = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    position
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'fab-buttons', `fab-buttons-${position}`, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
FabButtons.displayName = 'f7-fab-buttons';
/* harmony default export */ __webpack_exports__["default"] = (FabButtons);

/***/ }),

/***/ "./node_modules/framework7-react/components/fab.js":
/*!*********************************************************!*\
  !*** ./node_modules/framework7-react/components/fab.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Fab = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    morphTo,
    href,
    target,
    text,
    position = 'right-bottom'
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(elRef, props);
  let hrefComputed = href;
  if (hrefComputed === true) hrefComputed = '#';
  if (hrefComputed === false) hrefComputed = undefined; // no href attribute

  const linkChildren = [];
  const rootChildren = [];
  const {
    link: linkSlots,
    default: defaultSlots,
    root: rootSlots,
    text: textSlots
  } = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);

  if (defaultSlots) {
    for (let i = 0; i < defaultSlots.length; i += 1) {
      const child = defaultSlots[i];
      let isRoot;
      const tag = child.type && (child.type.displayName || child.type.name);
      if (tag === 'FabButtons' || tag === 'f7-fab-buttons') isRoot = true;
      if (isRoot) rootChildren.push(child);else linkChildren.push(child);
    }
  }

  let textEl;

  if (text || textSlots && textSlots.length) {
    textEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "fab-text"
    }, text, textSlots);
  }

  let linkEl;

  if (linkChildren.length || linkSlots && linkSlots.length || textEl) {
    linkEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      target: target,
      href: hrefComputed,
      onClick: onClick
    }, linkChildren, textEl, linkSlots);
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'fab', `fab-${position}`, {
    'fab-morph': morphTo,
    'fab-extended': typeof textEl !== 'undefined'
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    "data-morph-to": morphTo,
    ref: elRef
  }, extraAttrs), linkEl, rootChildren, rootSlots);
});
Fab.displayName = 'f7-fab';
/* harmony default export */ __webpack_exports__["default"] = (Fab);

/***/ }),

/***/ "./node_modules/framework7-react/components/gauge.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/gauge.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint no-nested-ternary: off */



const Gauge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    type = 'circle',
    value = 0,
    size = 200,
    bgColor = 'transparent',
    borderBgColor = '#eeeeee',
    borderColor = '#000000',
    borderWidth = 10,
    valueText,
    valueTextColor = '#000000',
    valueFontSize = 31,
    valueFontWeight = 500,
    labelText,
    labelTextColor = '#888888',
    labelFontSize = 14,
    labelFontWeight = 400
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'gauge');
  const semiCircle = type === 'semicircle';
  const radius = size / 2 - borderWidth / 2;
  const length = 2 * Math.PI * radius;
  const progress = Math.max(Math.min(value, 1), 0);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: "gauge-svg",
    width: `${size}px`,
    height: `${semiCircle ? size / 2 : size}px`,
    viewBox: `0 0 ${size} ${semiCircle ? size / 2 : size}`
  }, semiCircle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "gauge-back-semi",
    d: `M${size - borderWidth / 2},${size / 2} a1,1 0 0,0 -${size - borderWidth},0`,
    stroke: borderBgColor,
    strokeWidth: borderWidth,
    fill: bgColor || 'none'
  }), semiCircle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "gauge-front-semi",
    d: `M${size - borderWidth / 2},${size / 2} a1,1 0 0,0 -${size - borderWidth},0`,
    stroke: borderColor,
    strokeWidth: borderWidth,
    strokeDasharray: length / 2,
    strokeDashoffset: length / 2 * (1 + progress),
    fill: borderBgColor ? 'none' : bgColor || 'none'
  }), !semiCircle && borderBgColor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "gauge-back-circle",
    stroke: borderBgColor,
    strokeWidth: borderWidth,
    fill: bgColor || 'none',
    cx: size / 2,
    cy: size / 2,
    r: radius
  }), !semiCircle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    className: "gauge-front-circle",
    transform: `rotate(-90 ${size / 2} ${size / 2})`,
    stroke: borderColor,
    strokeWidth: borderWidth,
    strokeDasharray: length,
    strokeDashoffset: length * (1 - progress),
    fill: borderBgColor ? 'none' : bgColor || 'none',
    cx: size / 2,
    cy: size / 2,
    r: radius
  }), valueText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
    className: "gauge-value-text",
    x: "50%",
    y: semiCircle ? '100%' : '50%',
    fontWeight: valueFontWeight,
    fontSize: valueFontSize,
    fill: valueTextColor,
    dy: semiCircle ? labelText ? -labelFontSize - 15 : -5 : 0,
    textAnchor: "middle",
    dominantBaseline: !semiCircle ? 'middle' : null
  }, valueText), labelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", {
    className: "gauge-label-text",
    x: "50%",
    y: semiCircle ? '100%' : '50%',
    fontWeight: labelFontWeight,
    fontSize: labelFontSize,
    fill: labelTextColor,
    dy: semiCircle ? -5 : valueText ? valueFontSize / 2 + 10 : 0,
    textAnchor: "middle",
    dominantBaseline: !semiCircle ? 'middle' : null
  }, labelText)));
});
Gauge.displayName = 'f7-gauge';
/* harmony default export */ __webpack_exports__["default"] = (Gauge);

/***/ }),

/***/ "./node_modules/framework7-react/components/icon.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/icon.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
/* harmony import */ var _shared_use_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/use-theme.js */ "./node_modules/framework7-react/shared/use-theme.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const Icon = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const theme = (0,_shared_use_theme_js__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const {
    className,
    id,
    style,
    children,
    material,
    f7,
    icon,
    md,
    ios,
    aurora,
    size
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_3__.useTooltip)(elRef, props);

  const getClasses = () => {
    let classes = {
      icon: true
    };
    let themeIcon;
    if (theme && theme.ios) themeIcon = ios;else if (theme && theme.md) themeIcon = md;else if (theme && theme.aurora) themeIcon = aurora;

    if (themeIcon) {
      const parts = themeIcon.split(':');
      const prop = parts[0];
      const value = parts[1];

      if (prop === 'material' || prop === 'f7') {
        classes['material-icons'] = prop === 'material';
        classes['f7-icons'] = prop === 'f7';
      }

      if (prop === 'icon') {
        classes[value] = true;
      }
    } else {
      classes = {
        icon: true,
        'material-icons': material,
        'f7-icons': f7
      };
      if (icon) classes[icon] = true;
    }

    return (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(className, classes, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props));
  };

  const getIconText = () => {
    let text = material || f7;

    if (md && theme && theme.md && (md.indexOf('material:') >= 0 || md.indexOf('f7:') >= 0)) {
      text = md.split(':')[1];
    } else if (ios && theme && theme.ios && (ios.indexOf('material:') >= 0 || ios.indexOf('f7:') >= 0)) {
      text = ios.split(':')[1];
    } else if (aurora && theme && theme.aurora && (aurora.indexOf('material:') >= 0 || aurora.indexOf('f7:') >= 0)) {
      text = aurora.split(':')[1];
    }

    return text;
  };

  let sizeComputed = size;

  if (typeof size === 'number' || parseFloat(size) === size * 1) {
    sizeComputed = `${size}px`;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", _extends({
    id: id,
    style: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
      fontSize: sizeComputed,
      width: sizeComputed,
      height: sizeComputed
    }, style),
    className: getClasses(),
    ref: elRef
  }, extraAttrs), getIconText(), children);
});
Icon.displayName = 'f7-icon';
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./node_modules/framework7-react/components/input.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/input.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle.js */ "./node_modules/framework7-react/components/toggle.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./range.js */ "./node_modules/framework7-react/components/range.js");
/* harmony import */ var _text_editor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-editor.js */ "./node_modules/framework7-react/components/text-editor.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    type,
    name,
    value,
    defaultValue,
    inputmode,
    placeholder,
    inputId,
    size,
    accept,
    autocomplete,
    autocorrect,
    autocapitalize,
    spellcheck,
    autofocus,
    autosave,
    checked,
    disabled,
    max,
    min,
    step,
    maxlength,
    minlength,
    multiple,
    readonly,
    required,
    inputStyle,
    pattern,
    validate,
    validateOnBlur,
    onValidate,
    tabindex,
    resizable,
    clearButton,
    // Form
    noFormStoreData,
    noStoreData,
    ignoreStoreData,
    // Error, Info
    errorMessage,
    errorMessageForce,
    info,
    // Outline
    outline,
    // Components
    wrap = true,
    dropdown = 'auto',
    // Datepicker
    calendarParams,
    // Colorpicker
    colorPickerParams,
    // Text editor
    textEditorParams
  } = props;
  const [inputInvalid, setInputInvalid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [inputFocused, setInputFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const f7Calendar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const f7ColorPicker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const updateInputOnDidUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  const getDomValue = () => {
    if (!inputElRef.current) return undefined;
    return inputElRef.current.value;
  };

  const isInputHasValue = () => {
    if (type === 'datepicker' && Array.isArray(value) && value.length === 0) {
      return false;
    }

    const domValue = getDomValue();
    return typeof value === 'undefined' ? domValue || domValue === 0 : value || value === 0;
  };

  const validateInput = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7 || !inputElRef.current) return;
    const validity = inputElRef.current.validity;
    if (!validity) return;

    if (!validity.valid) {
      if (onValidate) onValidate(false);

      if (inputInvalid !== true) {
        setInputInvalid(true);
      }
    } else {
      if (onValidate) onValidate(true);

      if (inputInvalid !== false) {
        setInputInvalid(false);
      }
    }
  };

  const onTextareaResize = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textareaResize', event);
  };

  const onInputNotEmpty = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'inputNotEmpty', event);
  };

  const onInputEmpty = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'inputEmpty', event);
  };

  const onInputClear = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'inputClear', event);
  };

  const onInput = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'input', ...args);

    if (!(validateOnBlur || validateOnBlur === '') && (validate || validate === '') && inputElRef.current) {
      validateInput();
    }
  };

  const onFocus = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'focus', ...args);
    setInputFocused(true);
  };

  const onBlur = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'blur', ...args);

    if ((validate || validate === '' || validateOnBlur || validateOnBlur === '') && inputElRef.current) {
      validateInput();
    }

    setInputFocused(false);
  };

  const onChange = function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', ...args);

    if (type === 'texteditor') {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorChange', args[1]);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const onMount = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      if (type === 'range' || type === 'toggle') return;
      if (!inputElRef.current) return;
      inputElRef.current.addEventListener('input:notempty', onInputNotEmpty, false);

      if (type === 'textarea' && resizable) {
        inputElRef.current.addEventListener('textarea:resize', onTextareaResize, false);
      }

      if (clearButton) {
        inputElRef.current.addEventListener('input:empty', onInputEmpty, false);
        inputElRef.current.addEventListener('input:clear', onInputClear, false);
      }

      if (type === 'datepicker') {
        f7Calendar.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.calendar.create({
          inputEl: inputElRef.current,
          value,
          on: {
            change(calendar, calendarValue) {
              (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'calendarChange', calendarValue);
            }

          },
          ...(calendarParams || {})
        });
      }

      if (type === 'colorpicker') {
        f7ColorPicker.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.colorPicker.create({
          inputEl: inputElRef.current,
          value,
          on: {
            change(colorPicker, colorPickerValue) {
              (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'colorPickerChange', colorPickerValue);
            }

          },
          ...(colorPickerParams || {})
        });
      }

      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.input.checkEmptyState(inputElRef.current);

      if (!(validateOnBlur || validateOnBlur === '') && (validate || validate === '') && (typeof value !== 'undefined' && value !== null && value !== '' || typeof defaultValue !== 'undefined' && defaultValue !== null && defaultValue !== '')) {
        setTimeout(() => {
          validateInput();
        }, 0);
      }

      if (resizable) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.input.resizeTextarea(inputElRef.current);
      }
    });
  };

  const onDestroy = () => {
    if (type === 'range' || type === 'toggle') return;
    if (!inputElRef.current) return;
    inputElRef.current.removeEventListener('input:notempty', onInputNotEmpty, false);

    if (type === 'textarea' && resizable) {
      inputElRef.current.removeEventListener('textarea:resize', onTextareaResize, false);
    }

    if (clearButton) {
      inputElRef.current.removeEventListener('input:empty', onInputEmpty, false);
      inputElRef.current.removeEventListener('input:clear', onInputClear, false);
    }

    if (f7Calendar.current && f7Calendar.current.destroy) {
      f7Calendar.current.destroy();
      f7Calendar.current = null;
    }

    if (f7ColorPicker.current && f7ColorPicker.current.destroy) {
      f7ColorPicker.current.destroy();
      f7ColorPicker.current = null;
    }
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;

    if (updateInputOnDidUpdate.current) {
      if (!inputElRef.current) return;
      updateInputOnDidUpdate.current = false;
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.input.checkEmptyState(inputElRef.current);

      if (validate && !validateOnBlur) {
        validateInput();
      }

      if (resizable) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.input.resizeTextarea(inputElRef.current);
      }
    }
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__.watchProp)(colorPickerParams, newValue => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7 || !f7ColorPicker.current) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)(f7ColorPicker.current.params, newValue || {});
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__.watchProp)(calendarParams, newValue => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7 || !f7Calendar.current) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)(f7Calendar.current.params, newValue || {});
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__.watchProp)(value, newValue => {
    if (type === 'range' || type === 'toggle') return;
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;
    updateInputOnDidUpdate.current = true;

    if (f7Calendar.current) {
      f7Calendar.current.setValue(newValue);
    }

    if (f7ColorPicker.current) {
      f7ColorPicker.current.setValue(newValue);
    }
  });
  const domValue = getDomValue();
  const inputHasValue = isInputHasValue();
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  let inputEl;

  const createInput = (InputTag, children) => {
    const needsValue = type !== 'file' && type !== 'datepicker' && type !== 'colorpicker';
    const needsType = InputTag === 'input';
    let inputType = type;

    if (inputType === 'datepicker' || inputType === 'colorpicker') {
      inputType = 'text';
    }

    const inputClassName = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(!wrap && className, {
      resizable: inputType === 'textarea' && resizable,
      'no-store-data': noFormStoreData || noStoreData || ignoreStoreData,
      'input-invalid': errorMessage && errorMessageForce || inputInvalid,
      'input-with-value': inputHasValue,
      'input-focused': inputFocused
    });
    let inputValue;

    if (needsValue) {
      if (typeof value !== 'undefined') inputValue = value;else inputValue = domValue;
    }

    const valueProps = {};

    if (type !== 'datepicker' && type !== 'colorpicker') {
      if ('value' in props) valueProps.value = inputValue;
      if ('defaultValue' in props) valueProps.defaultValue = defaultValue;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputTag, _extends({
      ref: inputElRef,
      style: inputStyle,
      name: name,
      type: needsType ? inputType : undefined,
      placeholder: placeholder,
      inputMode: inputmode,
      id: inputId,
      size: size,
      accept: accept,
      autoComplete: autocomplete,
      autoCorrect: autocorrect,
      autoCapitalize: autocapitalize,
      spellCheck: spellcheck,
      autoFocus: autofocus,
      autoSave: autosave,
      checked: checked,
      disabled: disabled,
      max: max,
      maxLength: maxlength,
      min: min,
      minLength: minlength,
      step: step,
      multiple: multiple,
      readOnly: readonly,
      required: required,
      pattern: pattern,
      validate: typeof validate === 'string' && validate.length ? validate : undefined,
      "data-validate": validate === true || validate === '' || validateOnBlur === true || validateOnBlur === '' ? true : undefined,
      "data-validate-on-blur": validateOnBlur === true || validateOnBlur === '' ? true : undefined,
      tabIndex: tabindex,
      "data-error-message": errorMessageForce ? undefined : errorMessage,
      className: inputClassName,
      onFocus: onFocus,
      onBlur: onBlur,
      onInput: onInput,
      onChange: onChange
    }, valueProps), children);
  };

  if (type === 'select' || type === 'textarea' || type === 'file') {
    if (type === 'select') {
      inputEl = createInput('select', slots.default);
    } else if (type === 'file') {
      inputEl = createInput('input');
    } else {
      inputEl = createInput('textarea');
    }
  } else if (slots.default && slots.default.length > 0 || !type) {
    inputEl = slots.default;
  } else if (type === 'toggle') {
    inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_toggle_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      checked: checked,
      readonly: readonly,
      name: name,
      value: value,
      disabled: disabled,
      id: inputId,
      onChange: onChange
    });
  } else if (type === 'range') {
    inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: value,
      disabled: disabled,
      min: min,
      max: max,
      step: step,
      name: name,
      id: inputId,
      input: true,
      onRangeChange: onChange
    });
  } else if (type === 'texteditor') {
    inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_editor_js__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
      value: value,
      resizable: resizable,
      placeholder: placeholder,
      onTextEditorFocus: onFocus,
      onTextEditorBlur: onBlur,
      onTextEditorInput: onInput,
      onTextEditorChange: onChange
    }, textEditorParams));
  } else {
    inputEl = createInput('input');
  }

  if (wrap) {
    const wrapClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'input', {
      'input-outline': outline,
      'input-dropdown': dropdown === 'auto' ? type === 'select' : dropdown,
      'input-invalid': errorMessage && errorMessageForce || inputInvalid
    }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__.colorClasses)(props));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      id: id,
      className: wrapClasses,
      style: style,
      ref: elRef
    }, extraAttrs), inputEl, (errorMessage || slots['error-message'] && slots['error-message'].length) && errorMessageForce && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "input-error-message"
    }, errorMessage, slots['error-message']), clearButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "input-clear-button"
    }), (info || slots.info && slots.info.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "input-info"
    }, info, slots.info));
  }

  return inputEl;
});
Input.displayName = 'f7-input';
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/framework7-react/components/link.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/link.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/use-icon.js */ "./node_modules/framework7-react/shared/use-icon.js");
/* harmony import */ var _shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-route-props.js */ "./node_modules/framework7-react/shared/use-route-props.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
/* harmony import */ var _shared_tabbar_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/tabbar-context.js */ "./node_modules/framework7-react/shared/tabbar-context.js");
/* harmony import */ var _badge_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badge.js */ "./node_modules/framework7-react/components/badge.js");
/* harmony import */ var _shared_use_smart_select_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/use-smart-select.js */ "./node_modules/framework7-react/shared/use-smart-select.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7SmartSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    children,
    noLinkClass,
    text,
    tabLink,
    tabLinkActive,
    tabbarLabel,
    iconOnly,
    badge,
    badgeColor,
    href = '#',
    target,
    // Smart Select
    smartSelect,
    smartSelectParams
  } = props;
  const tabbarContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_tabbar_context_js__WEBPACK_IMPORTED_MODULE_1__.TabbarContext);
  const isTabbarLabel = tabbarLabel || tabbarContext.tabbarHasLabels;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'click', e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7SmartSelect: () => f7SmartSelect.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_3__.useTooltip)(elRef, props);
  (0,_shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_4__.useRouteProps)(elRef, props);
  (0,_shared_use_smart_select_js__WEBPACK_IMPORTED_MODULE_5__.useSmartSelect)(smartSelect, smartSelectParams, f7SmartSelect, () => {
    return elRef.current;
  });
  let textEl;
  let badgeEl;

  if (text) {
    if (badge) badgeEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_badge_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: badgeColor
    }, badge);
    textEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: isTabbarLabel ? 'tabbar-label' : ''
    }, text, badgeEl);
  }

  const iconEl = (0,_shared_use_icon_js__WEBPACK_IMPORTED_MODULE_7__.useIcon)(props);
  let iconOnlyComputed;

  if (iconOnly || !text && children && children.length === 0 || !text && !children) {
    iconOnlyComputed = true;
  } else {
    iconOnlyComputed = false;
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(className, {
    link: !(noLinkClass || isTabbarLabel),
    'icon-only': iconOnlyComputed,
    'tab-link': tabLink || tabLink === '',
    'tab-link-active': tabLinkActive,
    'smart-select': smartSelect
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__.colorClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__.routerClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__.actionsClasses)(props));
  let hrefComputed = href;
  if (href === true) hrefComputed = '#';
  if (href === false) hrefComputed = undefined; // no href attribute

  const attrs = {
    href: hrefComputed,
    target,
    'data-tab': (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.isStringProp)(tabLink) && tabLink || undefined,
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__.routerAttrs)(props),
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_8__.actionsAttrs)(props)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({
    ref: elRef,
    id: id,
    style: style,
    className: classes
  }, attrs, extraAttrs, {
    onClick: onClick
  }), iconEl, textEl, children);
});
Link.displayName = 'f7-link';
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-button.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-button.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
/* harmony import */ var _shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-route-props.js */ "./node_modules/framework7-react/shared/use-route-props.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const ListButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    title,
    text,
    tabLink,
    tabLinkActive,
    link,
    href,
    target
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const linkElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(linkElRef, props);
  (0,_shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_3__.useRouteProps)(linkElRef, props);
  const linkAttrs = {
    href: typeof link === 'boolean' && typeof href === 'boolean' ? '#' : link || href,
    target,
    'data-tab': (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.isStringProp)(tabLink) && tabLink,
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.routerAttrs)(props),
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.actionsAttrs)(props)
  };
  const linkClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)({
    'list-button': true,
    'tab-link': tabLink || tabLink === '',
    'tab-link-active': tabLinkActive,
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props),
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.routerClasses)(props),
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.actionsClasses)(props)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({
    id: id,
    style: style,
    className: className,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({
    className: linkClasses
  }, linkAttrs, {
    onClick: onClick,
    ref: linkElRef
  }), title, text, children));
});
ListButton.displayName = 'f7-list-button';
/* harmony default export */ __webpack_exports__["default"] = (ListButton);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-group.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-group.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_list_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/list-context.js */ "./node_modules/framework7-react/shared/list-context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const ListGroup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    simpleList,
    mediaList,
    sortable,
    sortableOpposite,
    sortableTapHold,
    sortableMoveElements
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const listContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_list_context_js__WEBPACK_IMPORTED_MODULE_2__.ListContext);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'list-group', {
    'media-list': mediaList,
    sortable,
    'sortable-tap-hold': sortableTapHold,
    'sortable-opposite': sortableOpposite
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    "data-sortable-move-elements": typeof sortableMoveElements !== 'undefined' ? sortableMoveElements.toString() : undefined,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_list_context_js__WEBPACK_IMPORTED_MODULE_2__.ListContext.Provider, {
    value: {
      listIsMedia: mediaList || listContext.listIsMedia,
      listIsSimple: simpleList || listContext.listIsSimple,
      listIsSortable: sortable || listContext.listIsSortable,
      listIsSortableOpposite: sortableOpposite || listContext.listIsSortableOpposite
    }
  }, children)));
});
ListGroup.displayName = 'f7-list-group';
/* harmony default export */ __webpack_exports__["default"] = (ListGroup);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const ListIndex = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7ListIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    children,
    init = true,
    listEl,
    indexes = 'auto',
    scrollList = true,
    label = false,
    iosItemHeight = 14,
    mdItemHeight = 14,
    auroraItemHeight = 14
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const update = () => {
    if (!f7ListIndex.current) return;
    f7ListIndex.current.update();
  };

  const scrollListToIndex = indexContent => {
    if (!f7ListIndex.current) return;
    f7ListIndex.current.scrollListToIndex(indexContent);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7ListIndex: () => f7ListIndex.current,
    update,
    scrollListToIndex
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(indexes, newValue => {
    if (!f7ListIndex.current) return;
    f7ListIndex.current.params.indexes = newValue;
    update();
  });

  const onMount = () => {
    if (!init) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      f7ListIndex.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.listIndex.create({
        el: elRef.current,
        listEl,
        indexes,
        iosItemHeight,
        mdItemHeight,
        auroraItemHeight,
        scrollList,
        label,
        on: {
          select(index, itemContent, itemIndex) {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'listIndexSelect', itemContent, itemIndex);
          }

        }
      });
    });
  };

  const onDestroy = () => {
    if (f7ListIndex.current && f7ListIndex.current.destroy) {
      f7ListIndex.current.destroy();
    }

    f7ListIndex.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'list-index', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
ListIndex.displayName = 'f7-list-index';
/* harmony default export */ __webpack_exports__["default"] = (ListIndex);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-input.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-input.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _text_editor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./text-editor.js */ "./node_modules/framework7-react/components/text-editor.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_list_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/list-context.js */ "./node_modules/framework7-react/shared/list-context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const ListInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    sortable,
    media,
    dropdown = 'auto',
    wrap = true,
    // Inputs
    input: renderInput = true,
    type = 'text',
    name,
    value,
    defaultValue,
    inputmode,
    readonly,
    required,
    disabled,
    placeholder,
    inputId,
    size,
    accept,
    autocomplete,
    autocorrect,
    autocapitalize,
    spellcheck,
    autofocus,
    autosave,
    max,
    min,
    step,
    maxlength,
    minlength,
    multiple,
    inputStyle,
    pattern,
    validate,
    validateOnBlur,
    onValidate,
    tabindex,
    resizable,
    clearButton,
    // Form
    noFormStoreData,
    noStoreData,
    ignoreStoreData,
    // Error, Info
    errorMessage,
    errorMessageForce,
    info,
    // Outline
    outline,
    // Label
    label,
    inlineLabel,
    floatingLabel,
    // Datepicker
    calendarParams,
    // Colorpicker
    colorPickerParams,
    // Text editor
    textEditorParams
  } = props;
  const [inputInvalid, setInputInvalid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [inputFocused, setInputFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const listContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_list_context_js__WEBPACK_IMPORTED_MODULE_1__.ListContext);
  const {
    listIsSortable = false
  } = listContext || {};
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getExtraAttrs)(props);
  const f7Calendar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const f7ColorPicker = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const itemContentElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const updateInputOnDidUpdate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  const getDomValue = () => {
    if (!inputElRef.current) return undefined;
    return inputElRef.current.value;
  };

  const isInputHasValue = () => {
    if (type === 'datepicker' && Array.isArray(value) && value.length === 0) {
      return false;
    }

    const domValue = getDomValue();
    return typeof value === 'undefined' ? domValue || domValue === 0 : value || value === 0;
  };

  const validateInput = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 || !inputElRef.current) return;
    const validity = inputElRef.current.validity;
    if (!validity) return;

    if (!validity.valid) {
      if (onValidate) onValidate(false);

      if (inputInvalid !== true) {
        setInputInvalid(true);
      }
    } else {
      if (onValidate) onValidate(true);

      if (inputInvalid !== false) {
        setInputInvalid(false);
      }
    }
  };

  const onTextareaResize = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'textareaResize', event);
  };

  const onInputNotEmpty = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'inputNotEmpty', event);
  };

  const onInputEmpty = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'inputEmpty', event);
  };

  const onInputClear = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'inputClear', event);
  };

  const onInput = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'input', ...args);

    if (!(validateOnBlur || validateOnBlur === '') && (validate || validate === '') && inputElRef.current) {
      validateInput(inputElRef.current);
    }
  };

  const onFocus = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'focus', ...args);
    setInputFocused(true);
  };

  const onBlur = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'blur', ...args);

    if ((validate || validate === '' || validateOnBlur || validateOnBlur === '') && inputElRef.current) {
      validateInput(inputElRef.current);
    }

    setInputFocused(false);
  };

  const onChange = function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'change', ...args);

    if (type === 'texteditor') {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'textEditorChange', args[0]);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const onMount = () => {
    if (!elRef.current && !itemContentElRef.current) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      if (!inputElRef.current) return;
      inputElRef.current.addEventListener('input:notempty', onInputNotEmpty, false);
      inputElRef.current.addEventListener('textarea:resize', onTextareaResize, false);
      inputElRef.current.addEventListener('input:empty', onInputEmpty, false);
      inputElRef.current.addEventListener('input:clear', onInputClear, false);

      if (type === 'datepicker') {
        f7Calendar.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.calendar.create({
          inputEl: inputElRef.current,
          value,
          on: {
            change(calendar, calendarValue) {
              (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'calendarChange', calendarValue);
            }

          },
          ...(calendarParams || {})
        });
      }

      if (type === 'colorpicker') {
        f7ColorPicker.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.colorPicker.create({
          inputEl: inputElRef.current,
          value,
          on: {
            change(colorPicker, colorPickerValue) {
              (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'colorpicker:change colorPickerChange', colorPickerValue);
            }

          },
          ...(colorPickerParams || {})
        });
      }

      if (!(validateOnBlur || validateOnBlur === '') && (validate || validate === '') && (typeof value !== 'undefined' && value !== null && value !== '' || typeof defaultValue !== 'undefined' && defaultValue !== null && defaultValue !== '')) {
        setTimeout(() => {
          validateInput();
        }, 0);
      }

      if (type === 'textarea' && resizable) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.input.resizeTextarea(inputElRef.current);
      }
    });
  };

  const onDestroy = () => {
    if (inputElRef.current) {
      inputElRef.current.removeEventListener('input:notempty', onInputNotEmpty, false);
      inputElRef.current.removeEventListener('textarea:resize', onTextareaResize, false);
      inputElRef.current.removeEventListener('input:empty', onInputEmpty, false);
      inputElRef.current.removeEventListener('input:clear', onInputClear, false);
    }

    if (f7Calendar.current && f7Calendar.current.destroy) {
      f7Calendar.current.destroy();
      f7Calendar.current = null;
    }

    if (f7ColorPicker.current && f7ColorPicker.current.destroy) {
      f7ColorPicker.current.destroy();
      f7ColorPicker.current = null;
    }
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;

    if (updateInputOnDidUpdate.current) {
      if (!inputElRef.current) return;
      updateInputOnDidUpdate.current = false;

      if (validate && !validateOnBlur) {
        validateInput();
      }

      if (type === 'textarea' && resizable) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.input.resizeTextarea(inputElRef.current);
      }
    }
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_5__.watchProp)(colorPickerParams, newValue => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 || !f7ColorPicker.current) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(f7ColorPicker.current.params, newValue || {});
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_5__.watchProp)(calendarParams, newValue => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 || !f7Calendar.current) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(f7Calendar.current.params, newValue || {});
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_5__.watchProp)(value, newValue => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    updateInputOnDidUpdate.current = true;

    if (f7Calendar.current) {
      f7Calendar.current.setValue(newValue);
    }

    if (f7ColorPicker.current) {
      f7ColorPicker.current.setValue(newValue);
    }
  });
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSlots)(props);
  const domValue = getDomValue();
  const inputHasValue = isInputHasValue();
  const isSortableComputed = sortable === true || sortable === false ? sortable : listIsSortable;
  let inputEl;

  const createInput = (InputTag, children) => {
    const needsValue = type !== 'file' && type !== 'datepicker' && type !== 'colorpicker';
    const needsType = InputTag === 'input';
    let inputType = type;

    if (inputType === 'datepicker' || inputType === 'colorpicker') {
      inputType = 'text';
    }

    const inputClassName = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)({
      resizable: inputType === 'textarea' && resizable,
      'no-store-data': noFormStoreData || noStoreData || ignoreStoreData,
      'input-invalid': errorMessage && errorMessageForce || inputInvalid,
      'input-with-value': inputHasValue,
      'input-focused': inputFocused
    });
    let inputValue;

    if (needsValue) {
      if (typeof value !== 'undefined') inputValue = value;else inputValue = domValue;
    }

    const valueProps = {};

    if (type !== 'datepicker' && type !== 'colorpicker') {
      if ('value' in props) valueProps.value = inputValue;
      if ('defaultValue' in props) valueProps.defaultValue = defaultValue;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputTag, _extends({
      ref: inputElRef,
      style: inputStyle,
      name: name,
      type: needsType ? inputType : undefined,
      placeholder: placeholder,
      inputMode: inputmode,
      id: inputId,
      size: size,
      accept: accept,
      autoComplete: autocomplete,
      autoCorrect: autocorrect,
      autoCapitalize: autocapitalize,
      spellCheck: spellcheck,
      autoFocus: autofocus,
      autoSave: autosave,
      disabled: disabled,
      max: max,
      maxLength: maxlength,
      min: min,
      minLength: minlength,
      step: step,
      multiple: multiple,
      readOnly: readonly,
      required: required,
      pattern: pattern,
      validate: typeof validate === 'string' && validate.length ? validate : undefined,
      "data-validate": validate === true || validate === '' || validateOnBlur === true || validateOnBlur === '' ? true : undefined,
      "data-validate-on-blur": validateOnBlur === true || validateOnBlur === '' ? true : undefined,
      tabIndex: tabindex,
      "data-error-message": errorMessageForce ? undefined : errorMessage,
      className: inputClassName,
      onFocus: onFocus,
      onBlur: onBlur,
      onInput: onInput,
      onChange: onChange
    }, valueProps), children);
  };

  if (renderInput) {
    if (type === 'select' || type === 'textarea' || type === 'file') {
      if (type === 'select') {
        inputEl = createInput('select', slots.default);
      } else if (type === 'file') {
        inputEl = createInput('input');
      } else {
        inputEl = createInput('textarea');
      }
    } else if (type === 'texteditor') {
      inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_editor_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        value: value,
        resizable: resizable,
        placeholder: placeholder,
        onTextEditorFocus: onFocus,
        onTextEditorBlur: onBlur,
        onTextEditorInput: onInput,
        onTextEditorChange: onChange
      }, textEditorParams || {}));
    } else {
      inputEl = createInput('input');
    }
  }

  const hasErrorMessage = !!errorMessage || slots['error-message'] && slots['error-message'].length;
  const ItemContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: itemContentElRef,
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)('item-content item-input', !wrap && className, !wrap && {
      disabled
    }, !wrap && (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__.colorClasses)(props), {
      'inline-label': inlineLabel,
      'item-input-outline': outline,
      'item-input-focused': inputFocused,
      'item-input-with-info': !!info || slots.info && slots.info.length,
      'item-input-with-value': inputHasValue,
      'item-input-with-error-message': hasErrorMessage && errorMessageForce || inputInvalid,
      'item-input-invalid': hasErrorMessage && errorMessageForce || inputInvalid
    })
  }, slots['content-start'], (media || slots.media) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "item-media"
  }, media && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: media
  }), slots.media), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "item-inner"
  }, slots['inner-start'], (label || slots.label) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)('item-title item-label', {
      'item-floating-label': floatingLabel
    })
  }, label, slots.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)('item-input-wrap', {
      'input-dropdown': dropdown === 'auto' ? type === 'select' : dropdown
    })
  }, inputEl, slots.input, hasErrorMessage && errorMessageForce && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "item-input-error-message"
  }, errorMessage, slots['error-message']), clearButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "input-clear-button"
  }), (info || slots.info) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "item-input-info"
  }, info, slots.info)), slots.inner, slots['inner-end']), slots.content, slots['content-end']);

  if (!wrap) {
    return ItemContent;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({
    ref: elRef,
    id: id,
    style: style,
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(className, {
      disabled
    }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__.colorClasses)(props))
  }, extraAttrs), slots['root-start'], ItemContent, isSortableComputed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sortable-handler"
  }), slots.root, slots['root-end']);
});
ListInput.displayName = 'f7-list-input';
/* harmony default export */ __webpack_exports__["default"] = (ListInput);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-item-cell.js":
/*!********************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-item-cell.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ListItemCell = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'item-cell', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
ListItemCell.displayName = 'f7-list-item-cell';
/* harmony default export */ __webpack_exports__["default"] = (ListItemCell);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-item-content.js":
/*!***********************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-item-content.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _badge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.js */ "./node_modules/framework7-react/components/badge.js");





const ListItemContent = props => {
  const {
    indeterminate,
    radio,
    checkbox,
    value,
    name,
    readonly,
    disabled,
    checked,
    defaultChecked,
    required,
    media,
    header,
    footer,
    title,
    subtitle,
    text,
    after,
    badge,
    badgeColor,
    radioIcon,
    swipeout,
    sortable,
    accordionItem,
    onChange,
    onClick,
    isMediaComputed,
    isSortableComputed,
    isSortableOppositeComputed,
    slots
  } = props;
  const inputElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inputElRef.current) {
      inputElRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);
  let titleEl;
  let afterWrapEl;
  let afterEl;
  let badgeEl;
  let innerEl;
  let titleRowEl;
  let subtitleEl;
  let textEl;
  let mediaEl;
  let inputEl;
  let inputIconEl;
  let headerEl;
  let footerEl; // Input

  if (radio || checkbox) {
    inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      ref: inputElRef,
      value: value,
      name: name,
      checked: checked,
      defaultChecked: defaultChecked,
      readOnly: readonly,
      disabled: disabled,
      required: required,
      type: radio ? 'radio' : 'checkbox',
      onChange: onChange
    });
    inputIconEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: `icon icon-${radio ? 'radio' : 'checkbox'}`
    });
  } // Media


  if (media || slots.media) {
    let mediaImgEl;

    if (media) {
      mediaImgEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: media
      });
    }

    mediaEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-media"
    }, mediaImgEl, slots.media);
  } // Inner Elements


  if (header || slots.header) {
    headerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-header"
    }, header, slots.header);
  }

  if (footer || slots.footer) {
    footerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-footer"
    }, footer, slots.footer);
  }

  if (title || slots.title || !isMediaComputed && headerEl || !isMediaComputed && footerEl) {
    titleEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-title"
    }, !isMediaComputed && headerEl, title, slots.title, !isMediaComputed && footerEl);
  }

  if (subtitle || slots.subtitle) {
    subtitleEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-subtitle"
    }, subtitle, slots.subtitle);
  }

  if (text || slots.text) {
    textEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-text"
    }, text, slots.text);
  }

  if (after || badge || slots.after) {
    if (after) {
      afterEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, after);
    }

    if (badge) {
      badgeEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_badge_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: badgeColor
      }, badge);
    }

    afterWrapEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-after"
    }, slots['after-start'], afterEl, badgeEl, slots.after, slots['after-end']);
  }

  if (isMediaComputed) {
    titleRowEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-title-row"
    }, slots['before-title'], titleEl, slots['after-title'], afterWrapEl);
    innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-inner"
    }, slots['inner-start'], headerEl, titleRowEl, subtitleEl, textEl, swipeout || accordionItem ? null : slots.default, slots.inner, footerEl, slots['inner-end']);
  } else {
    innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "item-inner"
    }, slots['inner-start'], slots['before-title'], titleEl, slots['after-title'], afterWrapEl, swipeout || accordionItem ? null : slots.default, slots.inner, slots['inner-end']);
  }

  const ItemContentTag = checkbox || radio ? 'label' : 'div';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)('item-content', {
    'item-checkbox': checkbox,
    'item-radio': radio,
    'item-radio-icon-start': radio && radioIcon === 'start',
    'item-radio-icon-end': radio && radioIcon === 'end'
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemContentTag, {
    className: classes,
    onClick: onClick
  }, isSortableComputed && sortable !== false && isSortableOppositeComputed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sortable-handler"
  }), slots['content-start'], inputEl, inputIconEl, mediaEl, innerEl, slots.content, slots['content-end']);
};

ListItemContent.displayName = 'f7-list-item-content';
/* harmony default export */ __webpack_exports__["default"] = (ListItemContent);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-item-row.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-item-row.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ListItemRow = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'item-row', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
ListItemRow.displayName = 'f7-list-item-row';
/* harmony default export */ __webpack_exports__["default"] = (ListItemRow);

/***/ }),

/***/ "./node_modules/framework7-react/components/list-item.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/list-item.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-route-props.js */ "./node_modules/framework7-react/shared/use-route-props.js");
/* harmony import */ var _shared_use_smart_select_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/use-smart-select.js */ "./node_modules/framework7-react/shared/use-smart-select.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _list_item_content_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-item-content.js */ "./node_modules/framework7-react/components/list-item-content.js");
/* harmony import */ var _shared_list_context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/list-context.js */ "./node_modules/framework7-react/shared/list-context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














/*
const ListItemContent = ({
  props,
  slots,
  inputElRef,
  onChange,
  onClick,
  isMediaComputed,
  isSortableComputed,
  isSortableOppositeComputed,
} = {}) => {
  const {
    radio,
    checkbox,
    value,
    name,
    readonly,
    disabled,
    checked,
    defaultChecked,
    required,
    media,
    header,
    footer,
    title,
    subtitle,
    text,
    after,
    badge,
    badgeColor,
    radioIcon,
    swipeout,
    sortable,
    accordionItem,
  } = props;

};
*/

const ListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    title,
    link,
    target,
    tabLink,
    tabLinkActive,
    selected,
    mediaItem,
    mediaList,
    divider,
    groupTitle,
    swipeout,
    swipeoutOpened,
    sortable,
    sortableOpposite,
    accordionItem,
    accordionItemOpened,
    smartSelect,
    smartSelectParams,
    noChevron,
    chevronCenter,
    checkbox,
    radio,
    disabled,
    virtualListIndex,
    href
  } = props;
  const listContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_list_context_js__WEBPACK_IMPORTED_MODULE_1__.ListContext);
  const {
    listIsMedia = false,
    listIsSortable = false,
    listIsSortableOpposite = false,
    listIsSimple = false
  } = listContext || {};
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const linkElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const f7SmartSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = event => {
    if (event.target.tagName.toLowerCase() !== 'input') {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'click', event);
    }
  };

  const onSwipeoutOverswipeEnter = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutOverswipeEnter');
  };

  const onSwipeoutOverswipeExit = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutOverswipeExit');
  };

  const onSwipeoutDeleted = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutDeleted');
  };

  const onSwipeoutDelete = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutDelete');
  };

  const onSwipeoutClose = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutClose');
  };

  const onSwipeoutClosed = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutClosed');
  };

  const onSwipeoutOpen = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutOpen');
  };

  const onSwipeoutOpened = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeoutOpened');
  };

  const onSwipeout = (el, progress) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'swipeout', progress);
  };

  const onAccBeforeClose = (el, prevent) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'accordionBeforeClose', prevent);
  };

  const onAccClose = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'accordionClose');
  };

  const onAccClosed = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'accordionClosed');
  };

  const onAccBeforeOpen = (el, prevent) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'accordionBeforeOpen', prevent);
  };

  const onAccOpen = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'accordionOpen');
  };

  const onAccOpened = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'accordionOpened');
  };

  const onChange = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.emit)(props, 'change', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7SmartSelect: () => f7SmartSelect.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_3__.useTooltip)(elRef, props);
  (0,_shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_4__.useRouteProps)(linkElRef, props);
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_5__.watchProp)(swipeoutOpened, newValue => {
    if (!swipeout || !elRef.current || !_shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7) return;

    if (newValue) {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.swipeout.open(elRef.current);
    } else {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.swipeout.close(elRef.current);
    }
  });

  const attachEvents = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7ready)(() => {
      if (swipeout) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutOpen', onSwipeoutOpen);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutOpened', onSwipeoutOpened);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutClose', onSwipeoutClose);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutClosed', onSwipeoutClosed);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutDelete', onSwipeoutDelete);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutDeleted', onSwipeoutDeleted);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutOverswipeEnter', onSwipeoutOverswipeEnter);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeoutOverswipeExit', onSwipeoutOverswipeExit);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('swipeout', onSwipeout);
      }

      if (accordionItem) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('accordionBeforeOpen', onAccBeforeOpen);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('accordionOpen', onAccOpen);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('accordionOpened', onAccOpened);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('accordionBeforeClose', onAccBeforeClose);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('accordionClose', onAccClose);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.on('accordionClosed', onAccClosed);
      }
    });
  };

  const detachEvents = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutOpen', onSwipeoutOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutOpened', onSwipeoutOpened);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutClose', onSwipeoutClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutClosed', onSwipeoutClosed);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutDelete', onSwipeoutDelete);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutDeleted', onSwipeoutDeleted);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutOverswipeEnter', onSwipeoutOverswipeEnter);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeoutOverswipeExit', onSwipeoutOverswipeExit);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('swipeout', onSwipeout);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('accordionBeforeOpen', onAccBeforeOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('accordionOpen', onAccOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('accordionOpened', onAccOpened);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('accordionBeforeClose', onAccBeforeClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('accordionClose', onAccClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.off('accordionClosed', onAccClosed);
  };

  (0,_shared_use_smart_select_js__WEBPACK_IMPORTED_MODULE_7__.useSmartSelect)(smartSelect, smartSelectParams, f7SmartSelect, () => elRef.current.querySelector('a.smart-select'));
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsomorphicLayoutEffect)(() => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7ready)(() => {
      if (swipeout && swipeoutOpened) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_6__.f7.swipeout.open(elRef.current);
      }
    });
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getSlots)(props);
  let linkEl;
  let itemContentEl;
  const isMediaComputed = mediaItem || mediaList || listIsMedia;
  const isSortableComputed = sortable === true || sortable === false ? sortable : listIsSortable;
  const isSortableOppositeComputed = isSortableComputed && (sortableOpposite || listIsSortableOpposite);

  if (!listIsSimple) {
    // Item Content
    itemContentEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_item_content_js__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      slots: slots,
      onChange: onChange,
      onClick: link || href || accordionItem || smartSelect ? undefined : onClick,
      isMediaComputed: isMediaComputed,
      isSortableComputed: isSortableComputed,
      isSortableOppositeComputed: isSortableOppositeComputed
    })); // Link

    if (link || href || accordionItem || smartSelect) {
      const linkAttrs = {
        href: link === true ? '' : link || href,
        target,
        'data-tab': (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.isStringProp)(tabLink) && tabLink || undefined,
        ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_10__.routerAttrs)(props),
        ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_10__.actionsAttrs)(props)
      };
      const linkClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)({
        'item-link': true,
        'smart-select': smartSelect,
        'tab-link': tabLink || tabLink === '',
        'tab-link-active': tabLinkActive,
        'item-selected': selected
      }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_10__.routerClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_10__.actionsClasses)(props));
      linkEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({
        ref: linkElRef,
        className: linkClasses
      }, linkAttrs, {
        onClick: onClick
      }), itemContentEl);
    }
  }

  const liClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(className, {
    'item-divider': divider,
    'list-group-title': groupTitle,
    'media-item': isMediaComputed,
    swipeout,
    'accordion-item': accordionItem,
    'accordion-item-opened': accordionItemOpened,
    disabled: disabled && !(radio || checkbox),
    'no-chevron': noChevron,
    'chevron-center': chevronCenter,
    'disallow-sorting': sortable === false
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_10__.colorClasses)(props));

  if (divider || groupTitle) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      ref: elRef,
      id: id,
      style: style,
      className: liClasses,
      "data-virtual-list-index": virtualListIndex,
      onClick: onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, title, children));
  }

  if (listIsSimple) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      ref: elRef,
      id: id,
      style: style,
      className: liClasses,
      "data-virtual-list-index": virtualListIndex,
      onClick: onClick
    }, title, children);
  }

  const linkItemEl = link || href || smartSelect || accordionItem ? linkEl : itemContentEl;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", _extends({
    ref: elRef,
    id: id,
    style: style,
    className: liClasses,
    "data-virtual-list-index": virtualListIndex
  }, extraAttrs), slots['root-start'], swipeout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "swipeout-content"
  }, linkItemEl) : linkItemEl, isSortableComputed && sortable !== false && !isSortableOppositeComputed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sortable-handler"
  }), (swipeout || accordionItem) && slots.default, slots.root, slots['root-end']);
});
ListItem.displayName = 'f7-list-item';
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./node_modules/framework7-react/components/list.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/list.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_list_context_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/list-context.js */ "./node_modules/framework7-react/shared/list-context.js");
/* harmony import */ var _shared_use_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tab.js */ "./node_modules/framework7-react/shared/use-tab.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const List = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7VirtualList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    inset,
    xsmallInset,
    smallInset,
    mediumInset,
    largeInset,
    xlargeInset,
    mediaList,
    sortable,
    sortableTapHold,
    sortableEnabled,
    sortableMoveElements,
    sortableOpposite,
    accordionList,
    accordionOpposite,
    contactsList,
    simpleList,
    linksList,
    menuList,
    noHairlines,
    noHairlinesBetween,
    noHairlinesMd,
    noHairlinesBetweenMd,
    noHairlinesIos,
    noHairlinesBetweenIos,
    noHairlinesAurora,
    noHairlinesBetweenAurora,
    noChevron,
    chevronCenter,
    tab,
    tabActive,
    form,
    formStoreData,
    inlineLabels,
    virtualList,
    virtualListParams
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onSubmit = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'submit', event);
  };

  const onSortableEnable = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sortableEnable');
  };

  const onSortableDisable = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sortableDisable');
  };

  const onSortableSort = (el, sortData, listEl) => {
    if (elRef.current !== listEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sortableSort', sortData);
  };

  const onSortableMove = (el, listEl) => {
    if (elRef.current !== listEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sortableMove', el, listEl);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7VirtualList: () => f7VirtualList.current
  }));
  (0,_shared_use_tab_js__WEBPACK_IMPORTED_MODULE_2__.useTab)(elRef, props);

  const attachEvents = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('sortableEnable', onSortableEnable);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('sortableDisable', onSortableDisable);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('sortableSort', onSortableSort);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('sortableMove', onSortableMove);
    });
  };

  const detachEvents = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('sortableEnable', onSortableEnable);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('sortableDisable', onSortableDisable);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('sortableSort', onSortableSort);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('sortableMove', onSortableMove);
  };

  const onMount = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      if (!virtualList) return;
      const vlParams = virtualListParams || {};
      if (!vlParams.renderItem && !vlParams.renderExternal) return;
      f7VirtualList.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.virtualList.create((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.extend)({
        el: elRef.current,
        on: {
          itemBeforeInsert(itemEl, item) {
            const vl = this;
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'virtualItemBeforeInsert', vl, itemEl, item);
          },

          beforeClear(fragment) {
            const vl = this;
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'virtualBeforeClear', vl, fragment);
          },

          itemsBeforeInsert(fragment) {
            const vl = this;
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'virtualItemsBeforeInsert', vl, fragment);
          },

          itemsAfterInsert(fragment) {
            const vl = this;
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'virtualItemsAfterInsert', vl, fragment);
          }

        }
      }, vlParams));
    });
  };

  const onDestroy = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    if (!(virtualList && f7VirtualList.current)) return;
    if (f7VirtualList.current.destroy) f7VirtualList.current.destroy();
    f7VirtualList.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const {
    list: slotsList,
    default: slotsDefault
  } = slots;
  const rootChildrenBeforeList = [];
  const rootChildrenAfterList = [];
  const ulChildren = slotsList || [];
  const flattenSlots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.flattenArray)(slotsDefault);
  let wasUlChild = false;
  flattenSlots.forEach(child => {
    if (typeof child === 'undefined') return;
    let tag = child.type && (child.type.displayName || child.type.name);

    if (!tag && typeof child.type === 'string') {
      tag = child.type;
    }

    if (!tag || tag && !(tag === 'li' || tag.indexOf('f7-list-item') >= 0 || tag.indexOf('f7-list-button') >= 0 || tag.indexOf('f7-list-input') >= 0)) {
      if (wasUlChild) rootChildrenAfterList.push(child);else rootChildrenBeforeList.push(child);
    } else if (tag) {
      wasUlChild = true;
      ulChildren.push(child);
    }
  });
  const ListTag = form ? 'form' : 'div';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'list', {
    inset,
    'xsmall-inset': xsmallInset,
    'small-inset': smallInset,
    'medium-inset': mediumInset,
    'large-inset': largeInset,
    'xlarge-inset': xlargeInset,
    'media-list': mediaList,
    'simple-list': simpleList,
    'links-list': linksList,
    'menu-list': menuList,
    sortable,
    'sortable-tap-hold': sortableTapHold,
    'sortable-enabled': sortableEnabled,
    'sortable-opposite': sortableOpposite,
    'accordion-list': accordionList,
    'accordion-opposite': accordionOpposite,
    'contacts-list': contactsList,
    'virtual-list': virtualList,
    tab,
    'tab-active': tabActive,
    'no-hairlines': noHairlines,
    'no-hairlines-md': noHairlinesMd,
    'no-hairlines-ios': noHairlinesIos,
    'no-hairlines-aurora': noHairlinesAurora,
    'no-hairlines-between': noHairlinesBetween,
    'no-hairlines-between-md': noHairlinesBetweenMd,
    'no-hairlines-between-ios': noHairlinesBetweenIos,
    'no-hairlines-between-aurora': noHairlinesBetweenAurora,
    'form-store-data': formStoreData,
    'inline-labels': inlineLabels,
    'no-chevron': noChevron,
    'chevron-center': chevronCenter
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListTag, _extends({
    id: id,
    ref: elRef,
    style: style,
    className: classes
  }, extraAttrs, {
    "data-sortable-move-elements": typeof sortableMoveElements !== 'undefined' ? sortableMoveElements.toString() : undefined,
    onSubmit: onSubmit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_list_context_js__WEBPACK_IMPORTED_MODULE_6__.ListContext.Provider, {
    value: {
      listIsMedia: mediaList,
      listIsSimple: simpleList,
      listIsSortable: sortable,
      listIsSortableOpposite: sortableOpposite
    }
  }, slots['before-list'], rootChildrenBeforeList, ulChildren.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, ulChildren), slots['after-list'], rootChildrenAfterList));
});
List.displayName = 'f7-list';
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./node_modules/framework7-react/components/login-screen-title.js":
/*!************************************************************************!*\
  !*** ./node_modules/framework7-react/components/login-screen-title.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const LoginScreenTitle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'login-screen-title', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
LoginScreenTitle.displayName = 'f7-login-screen-title';
/* harmony default export */ __webpack_exports__["default"] = (LoginScreenTitle);

/***/ }),

/***/ "./node_modules/framework7-react/components/login-screen.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/components/login-screen.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modal-state-classes.js */ "./node_modules/framework7-react/shared/modal-state-classes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const LoginScreen = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7LoginScreen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    children,
    opened,
    animate,
    containerEl
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const isOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(opened);
  const isClosing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onOpen = instance => {
    isOpened.current = true;
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'loginScreenOpen', instance);
  };

  const onOpened = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'loginScreenOpened', instance);
  };

  const onClose = instance => {
    isOpened.current = false;
    isClosing.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'loginScreenClose', instance);
  };

  const onClosed = instance => {
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'loginScreenClosed', instance);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7LoginScreen: () => f7LoginScreen.current
  })); // watch opened changes

  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(opened, value => {
    if (!f7LoginScreen.current) return;

    if (value) {
      f7LoginScreen.current.open();
    } else {
      f7LoginScreen.current.close();
    }
  });

  const modalEvents = method => {
    if (!f7LoginScreen.current) return;
    f7LoginScreen.current[method]('open', onOpen);
    f7LoginScreen.current[method]('opened', onOpened);
    f7LoginScreen.current[method]('close', onClose);
    f7LoginScreen.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      const loginScreenParams = {
        el: elRef.current
      };
      if ('animate' in props) loginScreenParams.animate = animate;
      if ('containerEl' in props) loginScreenParams.containerEl = containerEl;
      f7LoginScreen.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.loginScreen.create(loginScreenParams);
      modalEvents('on');

      if (opened) {
        f7LoginScreen.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (f7LoginScreen.current) {
      f7LoginScreen.current.destroy();
    }

    f7LoginScreen.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    modalEvents('on');
    return () => {
      modalEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'login-screen', (0,_shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__.modalStateClasses)({
    isOpened,
    isClosing
  }), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
LoginScreen.displayName = 'f7-login-screen';
/* harmony default export */ __webpack_exports__["default"] = (LoginScreen);

/***/ }),

/***/ "./node_modules/framework7-react/components/menu-dropdown-item.js":
/*!************************************************************************!*\
  !*** ./node_modules/framework7-react/components/menu-dropdown-item.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-route-props.js */ "./node_modules/framework7-react/shared/use-route-props.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const MenuDropdownItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    link,
    href,
    target,
    text,
    divider,
    menuClose
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_2__.useRouteProps)(elRef, props);
  const isLink = link || href || href === '';
  const Tag = isLink ? 'a' : 'div';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)({
    'menu-dropdown-link': isLink && !divider,
    'menu-dropdown-item': !isLink && !divider,
    'menu-dropdown-divider': divider
  }, className, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.routerClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.actionsClasses)(props), {
    'menu-close': typeof menuClose === 'undefined'
  });
  let hrefComputed = href;
  if (typeof hrefComputed === 'undefined' && link) hrefComputed = '#';
  const attrs = {
    href: hrefComputed,
    target,
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.routerAttrs)(props),
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.actionsAttrs)(props)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, _extends({
    className: classes,
    id: id,
    style: style,
    ref: elRef
  }, attrs, extraAttrs, {
    onClick: onClick
  }), text, children);
});
MenuDropdownItem.displayName = 'f7-menu-dropdown-item';
/* harmony default export */ __webpack_exports__["default"] = (MenuDropdownItem);

/***/ }),

/***/ "./node_modules/framework7-react/components/menu-dropdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/components/menu-dropdown.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MenuDropdown = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    contentHeight,
    position,
    left,
    center,
    right
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  let positionComputed = position || 'left';
  if (left) positionComputed = 'left';
  if (center) positionComputed = 'center';
  if (right) positionComputed = 'right';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('menu-dropdown', `menu-dropdown-${positionComputed}`, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu-dropdown-content",
    style: {
      height: contentHeight
    }
  }, children));
});
MenuDropdown.displayName = 'f7-menu-dropdown';
/* harmony default export */ __webpack_exports__["default"] = (MenuDropdown);

/***/ }),

/***/ "./node_modules/framework7-react/components/menu-item.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/menu-item.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-route-props.js */ "./node_modules/framework7-react/shared/use-route-props.js");
/* harmony import */ var _shared_use_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/use-icon.js */ "./node_modules/framework7-react/shared/use-icon.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const MenuItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    link,
    href,
    target,
    text,
    dropdown,
    iconOnly
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  const onOpened = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'menuOpened', el);
  };

  const onClosed = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'menuClosed', el);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(elRef, props);
  (0,_shared_use_route_props_js__WEBPACK_IMPORTED_MODULE_3__.useRouteProps)(elRef, props);

  const attachEvents = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7.on('menuOpened', onOpened);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7.on('menuClosed', onClosed);
    });
  };

  const detachEvents = () => {
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7.off('menuOpened', onOpened);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7.off('menuClosed', onOpened);
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  const iconEl = (0,_shared_use_icon_js__WEBPACK_IMPORTED_MODULE_6__.useIcon)(props);
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  let iconOnlyComputed;

  if (iconOnly || !text && slots.text && slots.text.length === 0 || !text && !slots.text) {
    iconOnlyComputed = true;
  } else {
    iconOnlyComputed = false;
  }

  const isLink = link || href || href === '';
  const Tag = isLink ? 'a' : 'div';
  const isDropdown = dropdown || dropdown === '';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)({
    'menu-item': true,
    'menu-item-dropdown': isDropdown,
    'icon-only': iconOnlyComputed
  }, className, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__.colorClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__.routerClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__.actionsClasses)(props));
  let hrefComputed = href;
  if (typeof hrefComputed === 'undefined' && link) hrefComputed = '#';
  const attrs = {
    href: hrefComputed,
    target,
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__.routerAttrs)(props),
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_7__.actionsAttrs)(props)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, _extends({
    ref: elRef,
    className: classes,
    id: id,
    style: style
  }, attrs, extraAttrs, {
    onClick: onClick
  }), (text || slots.text && slots.text.length || iconEl) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu-item-content"
  }, text, iconEl, slots.text), slots.default);
});
MenuItem.displayName = 'f7-menu-item';
/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./node_modules/framework7-react/components/menu.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/menu.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Menu = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('menu', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "menu-inner"
  }, children));
});
Menu.displayName = 'f7-menu';
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/framework7-react/components/message.js":
/*!*************************************************************!*\
  !*** ./node_modules/framework7-react/components/message.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Message = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    text,
    name,
    avatar,
    type = 'sent',
    image,
    header,
    footer,
    textHeader,
    textFooter,
    first,
    last,
    tail,
    sameName,
    sameHeader,
    sameFooter,
    sameAvatar,
    typing
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', event);
  };

  const onNameClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'clickName', event);
  };

  const onTextClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'clickText', event);
  };

  const onAvatarClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'clickAvatar', event);
  };

  const onHeaderClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'clickHeader', event);
  };

  const onFooterClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'clickFooter', event);
  };

  const onBubbleClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'clickBubble', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'message', {
    'message-sent': type === 'sent',
    'message-received': type === 'received',
    'message-typing': typing,
    'message-first': first,
    'message-last': last,
    'message-tail': tail,
    'message-same-name': sameName,
    'message-same-header': sameHeader,
    'message-same-footer': sameFooter,
    'message-same-avatar': sameAvatar
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), slots.start, (avatar || slots.avatar) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-avatar",
    style: {
      backgroundImage: avatar && `url(${avatar})`
    },
    onClick: onAvatarClick
  }, slots.avatar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-content"
  }, slots['content-start'], (slots.name || name) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-name",
    onClick: onNameClick
  }, name, slots.name), (slots.header || header) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-header",
    onClick: onHeaderClick
  }, header, slots.header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-bubble",
    onClick: onBubbleClick
  }, slots['bubble-start'], (slots.image || image) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-image"
  }, slots.image || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image
  })), (slots['text-header'] || textHeader) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-text-header"
  }, textHeader, slots['text-header']), (slots.text || text || typing) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-text",
    onClick: onTextClick
  }, text, slots.text, typing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-typing-indicator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))), (slots['text-footer'] || textFooter) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-text-footer"
  }, textFooter, slots['text-footer']), slots['bubble-end'], slots.default), (slots.footer || footer) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "message-footer",
    onClick: onFooterClick
  }, footer, slots.footer), slots['content-end']), slots.end);
});
Message.displayName = 'f7-message';
/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./node_modules/framework7-react/components/messagebar-attachment.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framework7-react/components/messagebar-attachment.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MessagebarAttachment = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    image,
    deletable = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'attachmentClick', event);
  };

  const onDeleteClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'attachmentDelete', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'messagebar-attachment', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image
  }), deletable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "messagebar-attachment-delete",
    onClick: onDeleteClick
  }), children);
});
MessagebarAttachment.displayName = 'f7-messagebar-attachment';
/* harmony default export */ __webpack_exports__["default"] = (MessagebarAttachment);

/***/ }),

/***/ "./node_modules/framework7-react/components/messagebar-attachments.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framework7-react/components/messagebar-attachments.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MessagebarAttachments = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'messagebar-attachments', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
MessagebarAttachments.displayName = 'f7-messagebar-attachments';
/* harmony default export */ __webpack_exports__["default"] = (MessagebarAttachments);

/***/ }),

/***/ "./node_modules/framework7-react/components/messagebar-sheet-image.js":
/*!****************************************************************************!*\
  !*** ./node_modules/framework7-react/components/messagebar-sheet-image.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MessagebarSheetImage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    image,
    checked
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onChange = event => {
    if (event.target.checked) (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'checked', event);else (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'unchecked', event);
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'messagebar-sheet-image', 'checkbox', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  const styles = {
    backgroundImage: image && `url(${image})`,
    ...(style || {})
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", _extends({
    id: id,
    className: classes,
    style: styles,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "icon icon-checkbox"
  }), children);
});
MessagebarSheetImage.displayName = 'f7-messagebar-sheet-image';
/* harmony default export */ __webpack_exports__["default"] = (MessagebarSheetImage);

/***/ }),

/***/ "./node_modules/framework7-react/components/messagebar-sheet-item.js":
/*!***************************************************************************!*\
  !*** ./node_modules/framework7-react/components/messagebar-sheet-item.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MessagebarSheetItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'messagebar-sheet-item', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
MessagebarSheetItem.displayName = 'f7-messagebar-sheet-item';
/* harmony default export */ __webpack_exports__["default"] = (MessagebarSheetItem);

/***/ }),

/***/ "./node_modules/framework7-react/components/messagebar-sheet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framework7-react/components/messagebar-sheet.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MessagebarSheet = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'messagebar-sheet', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
MessagebarSheet.displayName = 'f7-messagebar-sheet';
/* harmony default export */ __webpack_exports__["default"] = (MessagebarSheet);

/***/ }),

/***/ "./node_modules/framework7-react/components/messagebar.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/components/messagebar.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link.js */ "./node_modules/framework7-react/components/link.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.js */ "./node_modules/framework7-react/components/input.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Messagebar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Messagebar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const updateSheetVisible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const updateAttachmentsVisible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const {
    className,
    id,
    style,
    sheetVisible,
    attachmentsVisible,
    top,
    resizable = true,
    bottomOffset = 0,
    topOffset = 0,
    maxHeight,
    resizePage = true,
    sendLink,
    value,
    disabled,
    readonly,
    textareaId,
    name,
    placeholder = 'Message',
    init = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const areaElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onChange = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', event);
  };

  const onInput = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'input', event);
  };

  const onFocus = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'focus', event);
  };

  const onBlur = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'blur', event);
  };

  const onClick = event => {
    const inputValue = areaElRef.current.el.value;
    const clear = f7Messagebar.current ? () => {
      f7Messagebar.current.clear();
    } : () => {};
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'submit', inputValue, clear);
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'send', inputValue, clear);
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', event);
  };

  const onAttachmentDelete = (instance, attachmentEl, attachmentElIndex) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'messagebarAttachmentDelete', instance, attachmentEl, attachmentElIndex);
  };

  const onAttachmentClick = (instance, attachmentEl, attachmentElIndex) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'messagebarAttachmentClick', instance, attachmentEl, attachmentElIndex);
  };

  const onResizePage = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'messagebarResizePage', instance);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Messagebar: () => f7Messagebar.current
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(sheetVisible, () => {
    if (!resizable || !f7Messagebar.current) return;
    updateSheetVisible.current = true;
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(attachmentsVisible, () => {
    if (!resizable || !f7Messagebar.current) return;
    updateAttachmentsVisible.current = true;
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    if (!f7Messagebar.current) return;

    if (updateSheetVisible.current) {
      updateSheetVisible.current = false;
      f7Messagebar.current.sheetVisible = sheetVisible;
      f7Messagebar.current.resizePage();
    }

    if (updateAttachmentsVisible.current) {
      updateAttachmentsVisible.current = false;
      f7Messagebar.current.attachmentsVisible = attachmentsVisible;
      f7Messagebar.current.resizePage();
    }
  });

  const onMount = () => {
    if (!init) return;
    if (!elRef.current) return;
    const params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)({
      el: elRef.current,
      top,
      resizePage,
      bottomOffset,
      topOffset,
      maxHeight,
      on: {
        attachmentDelete: onAttachmentDelete,
        attachmentClick: onAttachmentClick,
        resizePage: onResizePage
      }
    });
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7ready)(() => {
      f7Messagebar.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7.messagebar.create(params);
    });
  };

  const onDestroy = () => {
    if (f7Messagebar.current && f7Messagebar.current.destroy) f7Messagebar.current.destroy();
    f7Messagebar.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const {
    default: slotsDefault,
    'before-inner': slotsBeforeInner,
    'after-inner': slotsAfterInner,
    'send-link': slotsSendLink,
    'inner-start': slotsInnerStart,
    'inner-end': slotsInnerEnd,
    'before-area': slotsBeforeArea,
    'after-area': slotsAfterArea
  } = slots;
  const innerEndEls = [];
  let messagebarAttachmentsEl;
  let messagebarSheetEl;

  if (slotsDefault) {
    slotsDefault.forEach(child => {
      if (typeof child === 'undefined') return;
      const tag = child.type && (child.type.displayName || child.type.name);

      if (tag && (tag.indexOf('messagebar-attachments') >= 0 || tag === 'F7MessagebarAttachments' || tag === 'f7-messagebar-attachments')) {
        messagebarAttachmentsEl = child;
      } else if (tag && (tag.indexOf('messagebar-sheet') >= 0 || tag === 'F7MessagebarSheet' || tag === 'f7-messagebar-sheet')) {
        messagebarSheetEl = child;
      } else {
        innerEndEls.push(child);
      }
    });
  }

  const valueProps = {};
  if ('value' in props) valueProps.value = value;
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'toolbar', 'messagebar', {
    'messagebar-attachments-visible': attachmentsVisible,
    'messagebar-sheet-visible': sheetVisible
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), slotsBeforeInner, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "toolbar-inner"
  }, slotsInnerStart, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "messagebar-area"
  }, slotsBeforeArea, messagebarAttachmentsEl, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    id: textareaId,
    ref: areaElRef,
    type: "textarea",
    wrap: false,
    placeholder: placeholder,
    disabled: disabled,
    name: name,
    readonly: readonly,
    resizable: resizable,
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }, valueProps)), slotsAfterArea), (sendLink && sendLink.length > 0 || slotsSendLink) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: onClick
  }, slotsSendLink || sendLink), slotsInnerEnd, innerEndEls), slotsAfterInner, messagebarSheetEl);
});
Messagebar.displayName = 'f7-messagebar';
/* harmony default export */ __webpack_exports__["default"] = (Messagebar);

/***/ }),

/***/ "./node_modules/framework7-react/components/messages-title.js":
/*!********************************************************************!*\
  !*** ./node_modules/framework7-react/components/messages-title.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MessagesTitle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'messages-title', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
MessagesTitle.displayName = 'f7-messages-title';
/* harmony default export */ __webpack_exports__["default"] = (MessagesTitle);

/***/ }),

/***/ "./node_modules/framework7-react/components/messages.js":
/*!**************************************************************!*\
  !*** ./node_modules/framework7-react/components/messages.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const Messages = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Messages = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const {
    className,
    id,
    style,
    children,
    autoLayout = false,
    messages = [],
    newMessagesFirst = false,
    scrollMessages = true,
    scrollMessagesOnEdge = true,
    firstMessageRule,
    lastMessageRule,
    tailMessageRule,
    sameNameMessageRule,
    sameHeaderMessageRule,
    sameFooterMessageRule,
    sameAvatarMessageRule,
    customClassMessageRule,
    renderMessage,
    typing = false,
    init = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const childrenBeforeUpdated = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const reactChildrenBefore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(children ? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) : 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Messages: () => f7Messages.current
  }));

  const onMount = () => {
    if (!init) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      f7Messages.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.messages.create((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)({
        el: elRef.current,
        autoLayout,
        messages,
        newMessagesFirst,
        scrollMessages,
        scrollMessagesOnEdge,
        firstMessageRule,
        lastMessageRule,
        tailMessageRule,
        sameNameMessageRule,
        sameHeaderMessageRule,
        sameFooterMessageRule,
        sameAvatarMessageRule,
        customClassMessageRule,
        renderMessage
      }));

      if (typing) {
        f7Messages.current.showTyping();
      }
    });
  };

  const onDestroy = () => {
    if (f7Messages.current && f7Messages.current.destroy) f7Messages.current.destroy();
    f7Messages.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const currentChildrenLength = children ? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) : 0;

  if (f7Messages.current && scrollMessages) {
    const beforeChildrenLength = reactChildrenBefore.current || 0;

    if (currentChildrenLength !== beforeChildrenLength) {
      f7Messages.current.setScrollData();
    }
  }

  reactChildrenBefore.current = currentChildrenLength;
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    const wasMounted = mounted.current;
    mounted.current = true;
    if (!init || !elRef.current) return;
    const childElements = elRef.current.children;
    if (!childElements) return;
    const childrenAfterUpdated = childElements.length;

    if (!wasMounted) {
      for (let i = 0; i < childElements.length; i += 1) {
        childElements[i].classList.add('message-appeared');
      }

      return;
    }

    for (let i = 0; i < childElements.length; i += 1) {
      if (!childElements[i].classList.contains('message-appeared')) {
        childElements[i].classList.add('message-appear-from-bottom');
      }
    }

    if (f7Messages.current) {
      if (f7Messages.current.layout && autoLayout) {
        f7Messages.current.layout();
      }

      if (childrenBeforeUpdated.current !== childrenAfterUpdated && f7Messages.current.scroll && f7Messages.current.scrollData && scrollMessages) {
        f7Messages.current.scrollWithEdgeCheck(true);
      }
    }

    childrenBeforeUpdated.current = childrenAfterUpdated;
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__.watchProp)(typing, newValue => {
    if (!f7Messages.current) return;
    if (newValue) f7Messages.current.showTyping();else f7Messages.current.hideTyping();
  });
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'messages', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Messages.displayName = 'f7-messages';
/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./node_modules/framework7-react/components/nav-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/framework7-react/components/nav-left.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-theme.js */ "./node_modules/framework7-react/shared/use-theme.js");
/* harmony import */ var _link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link.js */ "./node_modules/framework7-react/components/link.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const NavLeft = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    backLink,
    backLinkUrl,
    backLinkForce,
    backLinkShowText,
    sliding
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onBackClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'backClick clickBack', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const theme = (0,_shared_use_theme_js__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  let linkEl;
  let needBackLinkText = backLinkShowText;
  if (typeof needBackLinkText === 'undefined') needBackLinkText = !theme.md;

  if (backLink) {
    const text = backLink !== true && needBackLinkText ? backLink : undefined;
    linkEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_link_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: backLinkUrl || '#',
      back: true,
      icon: "icon-back",
      force: backLinkForce || undefined,
      className: !text ? 'icon-only' : undefined,
      text: text,
      onClick: onBackClick
    });
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'left', {
    sliding
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), linkEl, children);
});
NavLeft.displayName = 'f7-nav-left';
/* harmony default export */ __webpack_exports__["default"] = (NavLeft);

/***/ }),

/***/ "./node_modules/framework7-react/components/nav-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/nav-right.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const NavRight = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    sliding
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'right', {
    sliding
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
NavRight.displayName = 'f7-nav-right';
/* harmony default export */ __webpack_exports__["default"] = (NavRight);

/***/ }),

/***/ "./node_modules/framework7-react/components/nav-title-large.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-react/components/nav-title-large.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const NavTitleLarge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'title-large', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "title-large-text"
  }, children));
});
NavTitleLarge.displayName = 'f7-nav-title-large';
/* harmony default export */ __webpack_exports__["default"] = (NavTitleLarge);

/***/ }),

/***/ "./node_modules/framework7-react/components/nav-title.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/nav-title.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const NavTitle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    title,
    subtitle,
    sliding
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  let subtitleEl;

  if (subtitle) {
    subtitleEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "subtitle"
    }, subtitle);
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'title', {
    sliding
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children, title, subtitleEl);
});
NavTitle.displayName = 'f7-nav-title';
/* harmony default export */ __webpack_exports__["default"] = (NavTitle);

/***/ }),

/***/ "./node_modules/framework7-react/components/navbar.js":
/*!************************************************************!*\
  !*** ./node_modules/framework7-react/components/navbar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_use_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-theme.js */ "./node_modules/framework7-react/shared/use-theme.js");
/* harmony import */ var _nav_left_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-left.js */ "./node_modules/framework7-react/components/nav-left.js");
/* harmony import */ var _nav_title_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-title.js */ "./node_modules/framework7-react/components/nav-title.js");
/* harmony import */ var _nav_right_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-right.js */ "./node_modules/framework7-react/components/nav-right.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Navbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    sliding = true,
    large,
    largeTransparent,
    transparent,
    hidden,
    noShadow,
    noHairline,
    backLink,
    backLinkForce,
    backLinkUrl,
    backLinkShowText,
    title,
    subtitle,
    titleLarge,
    innerClass,
    innerClassName
  } = props;
  const routerPositionClass = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const largeCollapsed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const routerNavbarRole = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const routerNavbarRoleDetailRoot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const routerNavbarMasterStack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const transparentVisible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const theme = (0,_shared_use_theme_js__WEBPACK_IMPORTED_MODULE_2__.useTheme)();

  const onHide = navbarEl => {
    if (elRef.current !== navbarEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'navbarHide');
  };

  const onShow = navbarEl => {
    if (elRef.current !== navbarEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'navbarShow');
  };

  const onExpand = navbarEl => {
    if (elRef.current !== navbarEl) return;
    largeCollapsed.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'navbarExpand');
  };

  const onCollapse = navbarEl => {
    if (elRef.current !== navbarEl) return;
    largeCollapsed.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'navbarCollapse');
  };

  const onNavbarTransparentShow = navbarEl => {
    if (elRef.current !== navbarEl) return;
    transparentVisible.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'navbarTransparentShow');
  };

  const onNavbarTransparentHide = navbarEl => {
    if (elRef.current !== navbarEl) return;
    transparentVisible.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'navbarTransparentHide');
  };

  const onNavbarPosition = (navbarEl, position) => {
    if (elRef.current !== navbarEl) return;
    routerPositionClass.current = position ? `navbar-${position}` : '';
  };

  const onNavbarRole = (navbarEl, rolesData) => {
    if (elRef.current !== navbarEl) return;
    routerNavbarRole.current = rolesData.role;
    routerNavbarRoleDetailRoot.current = rolesData.detailRoot;
  };

  const onNavbarMasterStack = navbarEl => {
    if (elRef.current !== navbarEl) return;
    routerNavbarMasterStack.current = true;
  };

  const onNavbarMasterUnstack = navbarEl => {
    if (elRef.current !== navbarEl) return;
    routerNavbarMasterStack.current = false;
  };

  const hide = animate => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.navbar.hide(elRef.current, animate);
  };

  const show = animate => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.navbar.show(elRef.current, animate);
  };

  const size = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.navbar.size(elRef.current);
  };

  const onBackClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'backClick clickBack', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    hide,
    show,
    size
  }));

  const attachEvents = () => {
    if (!elRef.current) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.navbar.size(elRef.current);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarShow', onShow);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarHide', onHide);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarCollapse', onCollapse);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarExpand', onExpand);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarPosition', onNavbarPosition);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarRole', onNavbarRole);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarMasterStack', onNavbarMasterStack);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarMasterUnstack', onNavbarMasterUnstack);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarTransparentShow', onNavbarTransparentShow);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('navbarTransparentHide', onNavbarTransparentHide);
    });
  };

  const detachEvents = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarShow', onShow);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarHide', onHide);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarCollapse', onCollapse);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarExpand', onExpand);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarPosition', onNavbarPosition);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarRole', onNavbarRole);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarMasterStack', onNavbarMasterStack);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarMasterUnstack', onNavbarMasterUnstack);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarTransparentShow', onNavbarTransparentShow);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('navbarTransparentHide', onNavbarTransparentHide);
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  let leftEl;
  let titleEl;
  let rightEl;
  let titleLargeEl;
  const addLeftTitleClass = theme && theme.ios && _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 && !_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.params.navbar.iosCenterTitle;
  const addCenterTitleClass = theme && theme.md && _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 && _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.params.navbar.mdCenterTitle || theme && theme.aurora && _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 && _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.params.navbar.auroraCenterTitle;
  const isLarge = large || largeTransparent;
  const isTransparent = transparent || isLarge && largeTransparent;
  const isTransparentVisible = isTransparent && transparentVisible.current;
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'navbar', routerPositionClass.current, {
    'navbar-hidden': hidden,
    'navbar-large': isLarge,
    'navbar-large-collapsed': isLarge && largeCollapsed.current,
    'navbar-transparent': isTransparent,
    'navbar-transparent-visible': isTransparentVisible,
    'navbar-master': routerNavbarRole.current === 'master',
    'navbar-master-detail': routerNavbarRole.current === 'detail',
    'navbar-master-detail-root': routerNavbarRoleDetailRoot.current === true,
    'navbar-master-stacked': routerNavbarMasterStack.current === true,
    'no-shadow': noShadow,
    'no-hairline': noHairline
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));

  if (backLink || slots['nav-left'] || slots.left) {
    leftEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_nav_left_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      backLink: backLink,
      backLinkUrl: backLinkUrl,
      backLinkForce: backLinkForce,
      backLinkShowText: backLinkShowText,
      onBackClick: onBackClick
    }, slots['nav-left'], slots.left);
  }

  if (title || subtitle || slots.title) {
    titleEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_nav_title_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: title,
      subtitle: subtitle
    }, slots.title);
  }

  if (slots['nav-right'] || slots.right) {
    rightEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_nav_right_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, slots['nav-right'], slots.right);
  }

  let largeTitle = titleLarge;
  if (!largeTitle && large && title) largeTitle = title;

  if (largeTitle || slots['title-large']) {
    titleLargeEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "title-large"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "title-large-text"
    }, largeTitle || '', slots['title-large']));
  }

  const innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('navbar-inner', innerClass, innerClassName, {
      sliding,
      'navbar-inner-left-title': addLeftTitleClass,
      'navbar-inner-centered-title': addCenterTitleClass
    })
  }, leftEl, titleEl, rightEl, titleLargeEl, slots.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "navbar-bg"
  }), slots['before-inner'], innerEl, slots['after-inner']);
});
Navbar.displayName = 'f7-navbar';
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/framework7-react/components/page-content.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/components/page-content.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preloader.js */ "./node_modules/framework7-react/components/preloader.js");
/* harmony import */ var _shared_use_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tab.js */ "./node_modules/framework7-react/shared/use-tab.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const PageContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    tab,
    tabActive,
    ptr,
    ptrDistance,
    ptrPreloader = true,
    ptrBottom,
    ptrMousewheel,
    infinite,
    infiniteTop,
    infiniteDistance,
    infinitePreloader = true,
    hideBarsOnScroll,
    hideNavbarOnScroll,
    hideToolbarOnScroll,
    messagesContent,
    loginScreen
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onPtrPullStart = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'ptrPullStart');
  };

  const onPtrPullMove = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'ptrPullMove');
  };

  const onPtrPullEnd = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'ptrPullEnd');
  };

  const onPtrRefresh = (el, done) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'ptrRefresh', done);
  };

  const onPtrDone = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'ptrDone');
  };

  const onInfinite = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'infinite');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_tab_js__WEBPACK_IMPORTED_MODULE_2__.useTab)(elRef, props);

  const attachEvents = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      if (ptr) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('ptrPullStart', onPtrPullStart);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('ptrPullMove', onPtrPullMove);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('ptrPullEnd', onPtrPullEnd);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('ptrRefresh', onPtrRefresh);
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('ptrDone', onPtrDone);
      }

      if (infinite) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.on('infinite', onInfinite);
      }
    });
  };

  const detachEvents = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('ptrPullStart', onPtrPullStart);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('ptrPullMove', onPtrPullMove);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('ptrPullEnd', onPtrPullEnd);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('ptrRefresh', onPtrRefresh);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('ptrDone', onPtrDone);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.off('infinite', onInfinite);
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  let ptrEl;
  let infiniteEl;

  if (ptr && ptrPreloader) {
    ptrEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ptr-preloader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_preloader_js__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "ptr-arrow"
    }));
  }

  if (infinite && infinitePreloader) {
    infiniteEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_preloader_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "infinite-scroll-preloader"
    });
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'page-content', {
    tab,
    'tab-active': tabActive,
    'ptr-content': ptr,
    'ptr-bottom': ptrBottom,
    'infinite-scroll-content': infinite,
    'infinite-scroll-top': infiniteTop,
    'hide-bars-on-scroll': hideBarsOnScroll,
    'hide-navbar-on-scroll': hideNavbarOnScroll,
    'hide-toolbar-on-scroll': hideToolbarOnScroll,
    'messages-content': messagesContent,
    'login-screen-content': loginScreen
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    "data-ptr-distance": ptrDistance || undefined,
    "data-ptr-mousewheel": ptrMousewheel || undefined,
    "data-infinite-distance": infiniteDistance || undefined,
    ref: elRef
  }, extraAttrs), ptrBottom ? null : ptrEl, infiniteTop ? infiniteEl : null, children, infiniteTop ? null : infiniteEl, ptrBottom ? ptrEl : null);
});
PageContent.displayName = 'f7-page-content';
/* harmony default export */ __webpack_exports__["default"] = (PageContent);

/***/ }),

/***/ "./node_modules/framework7-react/components/page.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/page.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _page_content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-content.js */ "./node_modules/framework7-react/components/page-content.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const Page = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    name,
    stacked,
    withSubnavbar,
    subnavbar,
    withNavbarLarge,
    navbarLarge,
    noNavbar,
    noToolbar,
    tabs,
    pageContent = true,
    noSwipeback,
    ptr,
    ptrDistance,
    ptrPreloader = true,
    ptrBottom,
    ptrMousewheel,
    infinite,
    infiniteTop,
    infiniteDistance,
    infinitePreloader = true,
    hideBarsOnScroll,
    hideNavbarOnScroll,
    hideToolbarOnScroll,
    messagesContent,
    loginScreen,
    onPtrPullStart,
    onPtrPullMove,
    onPtrPullEnd,
    onPtrRefresh,
    onPtrDone,
    onInfinite
  } = props;
  const hasSubnavbar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const hasNavbarLarge = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const hasNavbarLargeCollapsed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const hasCardExpandableOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const routerPositionClass = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  const routerForceUnstack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const routerPageRole = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const routerPageRoleDetailRoot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const routerPageMasterStack = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Main Page Events

  const onPageMounted = page => {
    if (elRef.current !== page.el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageMounted', page);
  };

  const onPageInit = page => {
    if (elRef.current !== page.el) return;

    if (typeof withSubnavbar === 'undefined' && typeof subnavbar === 'undefined') {
      if (page.$navbarEl && page.$navbarEl.length && page.$navbarEl.find('.subnavbar').length || page.$el.children('.navbar').find('.subnavbar').length) {
        hasSubnavbar.current = true;
      }
    }

    if (typeof withNavbarLarge === 'undefined' && typeof navbarLarge === 'undefined') {
      if (page.$navbarEl && page.$navbarEl.hasClass('navbar-large')) {
        hasNavbarLarge.current = true;
      }
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageInit', page);
  };

  const onPageReinit = page => {
    if (elRef.current !== page.el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageReinit', page);
  };

  const onPageBeforeIn = page => {
    if (elRef.current !== page.el) return;

    if (!page.swipeBack) {
      if (page.from === 'next') {
        routerPositionClass.current = 'page-next';
      }

      if (page.from === 'previous') {
        routerPositionClass.current = 'page-previous';
      }
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageBeforeIn', page);
  };

  const onPageBeforeOut = page => {
    if (elRef.current !== page.el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageBeforeOut', page);
  };

  const onPageAfterOut = page => {
    if (elRef.current !== page.el) return;

    if (page.to === 'next') {
      routerPositionClass.current = 'page-next';
    }

    if (page.to === 'previous') {
      routerPositionClass.current = 'page-previous';
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageAfterOut', page);
  };

  const onPageAfterIn = page => {
    if (elRef.current !== page.el) return;
    routerPositionClass.current = 'page-current';
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageAfterIn', page);
  };

  const onPageBeforeRemove = page => {
    if (elRef.current !== page.el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageBeforeRemove', page);
  };

  const onPageBeforeUnmount = page => {
    if (elRef.current !== page.el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageBeforeUnmount', page);
  }; // Helper events


  const onPageStack = pageEl => {
    if (elRef.current !== pageEl) return;
    routerForceUnstack.current = false;
  };

  const onPageUnstack = pageEl => {
    if (elRef.current !== pageEl) return;
    routerForceUnstack.current = true;
  };

  const onPagePosition = (pageEl, position) => {
    if (elRef.current !== pageEl) return;
    routerPositionClass.current = `page-${position}`;
  };

  const onPageRole = (pageEl, rolesData) => {
    if (elRef.current !== pageEl) return;
    routerPageRole.current = rolesData.role;
    routerPageRoleDetailRoot.current = rolesData.detailRoot;
  };

  const onPageMasterStack = pageEl => {
    if (elRef.current !== pageEl) return;
    routerPageMasterStack.current = true;
  };

  const onPageMasterUnstack = pageEl => {
    if (elRef.current !== pageEl) return;
    routerPageMasterStack.current = false;
  };

  const onPageNavbarLargeCollapsed = pageEl => {
    if (elRef.current !== pageEl) return;
    hasNavbarLargeCollapsed.current = true;
  };

  const onPageNavbarLargeExpanded = pageEl => {
    if (elRef.current !== pageEl) return;
    hasNavbarLargeCollapsed.current = false;
  };

  const onCardOpened = (cardEl, pageEl) => {
    if (elRef.current !== pageEl) return;
    hasCardExpandableOpened.current = true;
  };

  const onCardClose = (cardEl, pageEl) => {
    if (elRef.current !== pageEl) return;
    hasCardExpandableOpened.current = false;
  };

  const onPageTabShow = pageEl => {
    if (elRef.current !== pageEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageTabShow');
  };

  const onPageTabHide = pageEl => {
    if (elRef.current !== pageEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'pageTabHide');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const attachEvents = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageMounted', onPageMounted);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageInit', onPageInit);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageReinit', onPageReinit);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageBeforeIn', onPageBeforeIn);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageBeforeOut', onPageBeforeOut);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageAfterOut', onPageAfterOut);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageAfterIn', onPageAfterIn);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageBeforeRemove', onPageBeforeRemove);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageBeforeUnmount', onPageBeforeUnmount);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageStack', onPageStack);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageUnstack', onPageUnstack);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pagePosition', onPagePosition);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageRole', onPageRole);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageMasterStack', onPageMasterStack);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageMasterUnstack', onPageMasterUnstack);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('cardOpened', onCardOpened);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('cardClose', onCardClose);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageTabShow', onPageTabShow);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('pageTabHide', onPageTabHide);
    });
  };

  const detachEvents = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageMounted', onPageMounted);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageInit', onPageInit);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageReinit', onPageReinit);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageBeforeIn', onPageBeforeIn);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageBeforeOut', onPageBeforeOut);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageAfterOut', onPageAfterOut);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageAfterIn', onPageAfterIn);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageBeforeRemove', onPageBeforeRemove);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageBeforeUnmount', onPageBeforeUnmount);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageStack', onPageStack);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageUnstack', onPageUnstack);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pagePosition', onPagePosition);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageRole', onPageRole);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageMasterStack', onPageMasterStack);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageMasterUnstack', onPageMasterUnstack);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageNavbarLargeCollapsed', onPageNavbarLargeCollapsed);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageNavbarLargeExpanded', onPageNavbarLargeExpanded);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('cardOpened', onCardOpened);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('cardClose', onCardClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageTabShow', onPageTabShow);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('pageTabHide', onPageTabHide);
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const fixedList = [];
  const staticList = [];
  const {
    static: slotsStatic,
    fixed: slotsFixed,
    default: slotsDefault
  } = slots;
  const fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index panel'.split(' ').map(tagName => `f7-${tagName}`);
  let hasSubnavbarComputed;
  let hasNavbarLargeComputed;
  let hasMessages = messagesContent;

  if (slotsDefault) {
    slotsDefault.forEach(child => {
      if (typeof child === 'undefined') return;
      let isFixedTag = false;
      const tag = child.type && (child.type.displayName || child.type.name);

      if (!tag) {
        if (pageContent) staticList.push(child);
        return;
      }

      if (tag === 'f7-subnavbar') hasSubnavbarComputed = true;

      if (tag === 'f7-navbar') {
        if (child.props && child.props.large) hasNavbarLargeComputed = true;
      }

      if (typeof hasMessages === 'undefined' && tag === 'f7-messages') hasMessages = true;

      if (fixedTags.indexOf(tag) >= 0) {
        isFixedTag = true;
      }

      if (pageContent) {
        if (isFixedTag) fixedList.push(child);else staticList.push(child);
      }
    });
  }

  const forceSubnavbar = typeof subnavbar === 'undefined' && typeof withSubnavbar === 'undefined' ? hasSubnavbarComputed || hasSubnavbar.current : false;
  const forceNavbarLarge = typeof navbarLarge === 'undefined' && typeof withNavbarLarge === 'undefined' ? hasNavbarLargeComputed || hasNavbarLarge.current : false;
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'page', routerPositionClass.current, {
    stacked: stacked && !routerForceUnstack.current,
    tabs,
    'page-with-subnavbar': subnavbar || withSubnavbar || forceSubnavbar,
    'page-with-navbar-large': navbarLarge || withNavbarLarge || forceNavbarLarge,
    'no-navbar': noNavbar,
    'no-toolbar': noToolbar,
    'no-swipeback': noSwipeback,
    'page-master': routerPageRole.current === 'master',
    'page-master-detail': routerPageRole.current === 'detail',
    'page-master-detail-root': routerPageRoleDetailRoot.current === true,
    'page-master-stacked': routerPageMasterStack.current === true,
    'page-with-navbar-large-collapsed': hasNavbarLargeCollapsed.current === true,
    'page-with-card-opened': hasCardExpandableOpened.current === true,
    'login-screen-page': loginScreen
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props));

  if (!pageContent) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      id: id,
      style: style,
      className: classes,
      "data-name": name,
      ref: elRef
    }, extraAttrs), slotsFixed, slotsStatic, slotsDefault);
  }

  const pageContentEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_content_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ptr: ptr,
    ptrDistance: ptrDistance,
    ptrPreloader: ptrPreloader,
    ptrBottom: ptrBottom,
    ptrMousewheel: ptrMousewheel,
    infinite: infinite,
    infiniteTop: infiniteTop,
    infiniteDistance: infiniteDistance,
    infinitePreloader: infinitePreloader,
    hideBarsOnScroll: hideBarsOnScroll,
    hideNavbarOnScroll: hideNavbarOnScroll,
    hideToolbarOnScroll: hideToolbarOnScroll,
    messagesContent: messagesContent || hasMessages,
    loginScreen: loginScreen,
    onPtrPullStart: onPtrPullStart,
    onPtrPullMove: onPtrPullMove,
    onPtrPullEnd: onPtrPullEnd,
    onPtrRefresh: onPtrRefresh,
    onPtrDone: onPtrDone,
    onInfinite: onInfinite
  }, slotsStatic, staticList);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    "data-name": name,
    ref: elRef
  }, extraAttrs), fixedList, slotsFixed, pageContentEl);
});
Page.displayName = 'f7-page';
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./node_modules/framework7-react/components/panel.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/panel.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const Panel = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Panel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    children,
    side,
    effect,
    // eslint-disable-next-line
    cover,
    reveal,
    push,
    left,
    // right,
    opened,
    resizable,
    backdrop = true,
    backdropEl,
    containerEl,
    closeByBackdropClick,
    visibleBreakpoint,
    collapsedBreakpoint,
    swipe,
    swipeNoFollow,
    swipeOnlyClose,
    swipeActiveArea = 0,
    swipeThreshold = 0
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const isClosing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const isCollapsed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const isBreakpoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  const onOpen = event => {
    isOpened.current = true;
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelOpen', event);
  };

  const onOpened = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelOpened', event);
  };

  const onClose = event => {
    isOpened.current = false;
    isClosing.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelClose', event);
  };

  const onClosed = event => {
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelClosed', event);
  };

  const onBackdropClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click panelBackdropClick', event);
  };

  const onSwipe = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelSwipe', event);
  };

  const onSwipeOpen = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelSwipeOpen', event);
  };

  const onBreakpoint = event => {
    isBreakpoint.current = true;
    isCollapsed.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelBreakpoint', event);
  };

  const onCollapsedBreakpoint = event => {
    isBreakpoint.current = false;
    isCollapsed.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelCollapsedBreakpoint', event);
  };

  const onResize = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'panelResize', ...args);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Panel: () => f7Panel.current
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(resizable, newValue => {
    if (!f7Panel.current) return;
    if (newValue) f7Panel.current.enableResizable();else f7Panel.current.disableResizable();
  });
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(opened, newValue => {
    if (!f7Panel.current) return;

    if (newValue) {
      f7Panel.current.open();
    } else {
      f7Panel.current.close();
    }
  });

  const modalEvents = method => {
    if (!f7Panel.current) return;
    f7Panel.current[method]('open', onOpen);
    f7Panel.current[method]('opened', onOpened);
    f7Panel.current[method]('close', onClose);
    f7Panel.current[method]('closed', onClosed);
    f7Panel.current[method]('backdropClick', onBackdropClick);
    f7Panel.current[method]('swipe', onSwipe);
    f7Panel.current[method]('swipeOpen', onSwipeOpen);
    f7Panel.current[method]('collapsedBreakpoint', onCollapsedBreakpoint);
    f7Panel.current[method]('breakpoint', onBreakpoint);
    f7Panel.current[method]('resize', onResize);
  };

  const onMount = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      const $ = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.$;
      if (!$) return;

      if ($('.panel-backdrop').length === 0) {
        $('<div class="panel-backdrop"></div>').insertBefore(elRef.current);
      }

      const params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)({
        el: elRef.current,
        resizable,
        backdrop,
        backdropEl,
        containerEl,
        visibleBreakpoint,
        collapsedBreakpoint,
        swipe,
        swipeNoFollow,
        swipeOnlyClose,
        swipeActiveArea,
        swipeThreshold,
        closeByBackdropClick
      });
      f7Panel.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.panel.create(params);
      modalEvents('on');

      if (opened) {
        f7Panel.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (f7Panel.current && f7Panel.current.destroy) {
      f7Panel.current.destroy();
    }

    f7Panel.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    modalEvents('on');
    return () => {
      modalEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const sideComputed = side || (left ? 'left' : 'right'); // eslint-disable-next-line

  const effectComputed = effect || (reveal ? 'reveal' : push ? 'push' : 'cover');
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'panel', {
    'panel-in': isOpened.current && !isClosing.current && !isBreakpoint.current,
    'panel-in-breakpoint': isBreakpoint.current,
    'panel-in-collapsed': isCollapsed.current,
    'panel-resizable': resizable,
    [`panel-${sideComputed}`]: sideComputed,
    [`panel-${effectComputed}`]: effectComputed
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children, resizable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "panel-resize-handler"
  }));
});
Panel.displayName = 'f7-panel';
/* harmony default export */ __webpack_exports__["default"] = (Panel);

/***/ }),

/***/ "./node_modules/framework7-react/components/photo-browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/components/photo-browser.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");







const PhotoBrowser = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7PhotoBrowser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    init = true,
    params,
    photos,
    exposition = true,
    expositionHideCaptions = false,
    type,
    navbar = true,
    toolbar = true,
    theme,
    captionsTheme,
    iconsColor,
    swipeToClose = true,
    pageBackLinkText,
    popupCloseLinkText,
    navbarOfText,
    navbarShowCount,
    swiper,
    url,
    routableModals = false,
    virtualSlides = true,
    view,
    renderNavbar,
    renderToolbar,
    renderCaption,
    renderObject,
    renderLazyPhoto,
    renderPhoto,
    renderPage,
    renderPopup,
    renderStandalone
  } = props;

  const open = index => {
    return f7PhotoBrowser.current.open(index);
  };

  const close = () => {
    return f7PhotoBrowser.current.close();
  };

  const expositionToggle = () => {
    return f7PhotoBrowser.current.expositionToggle();
  };

  const expositionEnable = () => {
    return f7PhotoBrowser.current.expositionEnable();
  };

  const expositionDisable = () => {
    return f7PhotoBrowser.current.expositionDisable();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    f7PhotoBrowser: () => f7PhotoBrowser.current,
    open,
    close,
    expositionToggle,
    expositionEnable,
    expositionDisable
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_1__.watchProp)(photos, newValue => {
    const pb = f7PhotoBrowser.current;
    if (!pb) return;
    pb.params.photos = newValue;

    if (pb.opened && pb.swiper) {
      pb.swiper.update();
    }
  });

  const onMount = () => {
    if (!init) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      let paramsComputed;

      if (typeof params !== 'undefined') {
        paramsComputed = params;
      } else {
        paramsComputed = {
          photos,
          exposition,
          expositionHideCaptions,
          type,
          navbar,
          toolbar,
          theme,
          captionsTheme,
          iconsColor,
          swipeToClose,
          pageBackLinkText,
          popupCloseLinkText,
          navbarOfText,
          navbarShowCount,
          swiper,
          url,
          routableModals,
          virtualSlides,
          view,
          renderNavbar,
          renderToolbar,
          renderCaption,
          renderObject,
          renderLazyPhoto,
          renderPhoto,
          renderPage,
          renderPopup,
          renderStandalone
        };
      }

      Object.keys(paramsComputed).forEach(param => {
        if (typeof paramsComputed[param] === 'undefined' || paramsComputed[param] === '') delete paramsComputed[param];
      });
      paramsComputed = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.extend)({}, paramsComputed, {
        on: {
          open() {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.emit)(props, 'photoBrowserOpen');
          },

          close() {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.emit)(props, 'photoBrowserClose');
          },

          opened() {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.emit)(props, 'photoBrowserOpened');
          },

          closed() {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.emit)(props, 'photoBrowserClosed');
          },

          swipeToClose() {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_3__.emit)(props, 'photoBrowserSwipeToClose');
          }

        }
      });
      f7PhotoBrowser.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.photoBrowser.create(paramsComputed);
    });
  };

  const onDestroy = () => {
    if (f7PhotoBrowser.current && f7PhotoBrowser.current.destroy) f7PhotoBrowser.current.destroy();
    f7PhotoBrowser.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  return null;
});
PhotoBrowser.displayName = 'f7-photo-browser';
/* harmony default export */ __webpack_exports__["default"] = (PhotoBrowser);

/***/ }),

/***/ "./node_modules/framework7-react/components/pie-chart.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/pie-chart.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const PieChart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    size = 320,
    tooltip = false,
    datasets = [],
    formatTooltip,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const f7Tooltip = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const getSummValue = () => {
    let summ = 0;
    datasets.map(d => d.value || 0).forEach(value => {
      summ += value;
    });
    return summ;
  };

  const getPaths = () => {
    const paths = [];
    let cumulativePercentage = 0;

    function getCoordinatesForPercentage(percentage) {
      const x = Math.cos(2 * Math.PI * percentage) * (size / 3);
      const y = Math.sin(2 * Math.PI * percentage) * (size / 3);
      return [x, y];
    }

    datasets.forEach(_ref => {
      let {
        value,
        label,
        color
      } = _ref;
      const percentage = value / getSummValue();
      const [startX, startY] = getCoordinatesForPercentage(cumulativePercentage);
      cumulativePercentage += percentage;
      const [endX, endY] = getCoordinatesForPercentage(cumulativePercentage);
      const largeArcFlag = percentage > 0.5 ? 1 : 0;
      const points = [`M ${startX} ${startY}`, // Move
      `A ${size / 3} ${size / 3} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      'L 0 0' // Line
      ].join(' ');
      paths.push({
        points,
        label,
        color
      });
    });
    return paths;
  };

  const formatTooltipText = () => {
    if (currentIndex === null) return '';
    const {
      value,
      label,
      color
    } = datasets[currentIndex];
    const percentage = value / getSummValue() * 100;

    const round = v => {
      if (parseInt(v, 10) === v) return v;
      return Math.round(v * 100) / 100;
    };

    if (formatTooltip) {
      return formatTooltip({
        index: currentIndex,
        value,
        label,
        color,
        percentage
      });
    }

    const tooltipText = `${label ? `${label}: ` : ''}${round(value)} (${round(percentage)}%)`;
    return `
      <div class="pie-chart-tooltip-label">
        <span class="pie-chart-tooltip-color" style="background-color: ${color};"></span> ${tooltipText}
      </div>
    `;
  };

  const setTooltip = () => {
    if (currentIndex === null && !f7Tooltip.current) return;
    if (!tooltip || !elRef.current || !_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;

    if (currentIndex !== null && !f7Tooltip.current) {
      f7Tooltip.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.tooltip.create({
        trigger: 'manual',
        containerEl: elRef.current,
        targetEl: elRef.current.querySelector(`path[data-index="${currentIndex}"]`),
        text: formatTooltipText(),
        cssClass: 'pie-chart-tooltip'
      });
      f7Tooltip.current.show();
      return;
    }

    if (!f7Tooltip.current) return;

    if (currentIndex !== null) {
      f7Tooltip.current.setText(formatTooltipText());
      f7Tooltip.current.setTargetEl(elRef.current.querySelector(`path[data-index="${currentIndex}"]`));
      f7Tooltip.current.show();
    } else {
      f7Tooltip.current.hide();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (previousIndex.current === currentIndex) return;
    previousIndex.current = currentIndex;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'select', currentIndex, datasets[currentIndex]);
    setTooltip();
  }, [currentIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      if (f7Tooltip.current && f7Tooltip.current.destroy) {
        f7Tooltip.current.destroy();
      }

      f7Tooltip.current = null;
    };
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('pie-chart', className);
  const paths = getPaths();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: `-${size / 3} -${size / 3} ${size * 2 / 3} ${size * 2 / 3}`,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, paths.map((path, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    key: path.label || index,
    d: path.points,
    fill: path.color,
    "data-index": index,
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)({
      'pie-chart-hidden': currentIndex !== null && currentIndex !== index
    }),
    onClick: () => setCurrentIndex(index),
    onMouseEnter: () => setCurrentIndex(index),
    onMouseLeave: () => setCurrentIndex(null)
  }))), children);
});
PieChart.displayName = 'f7-pie-chart';
/* harmony default export */ __webpack_exports__["default"] = (PieChart);

/***/ }),

/***/ "./node_modules/framework7-react/components/popover.js":
/*!*************************************************************!*\
  !*** ./node_modules/framework7-react/components/popover.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modal-state-classes.js */ "./node_modules/framework7-react/shared/modal-state-classes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Popover = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Popover = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    children,
    opened,
    animate,
    targetEl,
    backdrop,
    backdropEl,
    closeByBackdropClick,
    closeByOutsideClick,
    closeOnEscape,
    containerEl,
    verticalPosition
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(opened);
  const isClosing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  const onOpen = instance => {
    isOpened.current = true;
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popoverOpen', instance);
  };

  const onOpened = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popoverOpened', instance);
  };

  const onClose = instance => {
    isOpened.current = false;
    isClosing.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popoverClose', instance);
  };

  const onClosed = instance => {
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popoverClosed', instance);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Popover: () => f7Popover.current
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(opened, value => {
    if (!f7Popover.current) return;

    if (value) {
      f7Popover.current.open();
    } else {
      f7Popover.current.close();
    }
  });

  const modalEvents = method => {
    if (!f7Popover.current) return;
    f7Popover.current[method]('open', onOpen);
    f7Popover.current[method]('opened', onOpened);
    f7Popover.current[method]('close', onClose);
    f7Popover.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;
    const popoverParams = {
      el: elRef.current
    };
    if (targetEl) popoverParams.targetEl = targetEl;
    if ('closeByBackdropClick' in props) popoverParams.closeByBackdropClick = closeByBackdropClick;
    if ('closeByOutsideClick' in props) popoverParams.closeByOutsideClick = closeByOutsideClick;
    if ('closeOnEscape' in props) popoverParams.closeOnEscape = closeOnEscape;
    if ('backdrop' in props) popoverParams.backdrop = backdrop;
    if ('backdropEl' in props) popoverParams.backdropEl = backdropEl;
    if ('animate' in props) popoverParams.animate = animate;
    if ('containerEl' in props) popoverParams.containerEl = containerEl;
    if ('verticalPosition' in props) popoverParams.verticalPosition = verticalPosition;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      f7Popover.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.popover.create(popoverParams);
      modalEvents('on');

      if (opened && targetEl) {
        f7Popover.current.open(targetEl, false);
      }
    });
  };

  const onDestroy = () => {
    if (f7Popover.current) {
      f7Popover.current.destroy();
    }

    f7Popover.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    modalEvents('on');
    return () => {
      modalEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'popover', (0,_shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__.modalStateClasses)({
    isOpened,
    isClosing
  }), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "popover-angle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "popover-inner"
  }, children));
});
Popover.displayName = 'f7-popover';
/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./node_modules/framework7-react/components/popup.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/popup.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modal-state-classes.js */ "./node_modules/framework7-react/shared/modal-state-classes.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Popup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Popup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    children,
    tabletFullscreen,
    push,
    opened,
    closeByBackdropClick,
    backdrop,
    backdropEl,
    animate,
    closeOnEscape,
    swipeToClose = false,
    swipeHandler,
    containerEl
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(opened);
  const isClosing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  const onSwipeStart = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupSwipeStart', instance);
  };

  const onSwipeMove = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupSwipeMove', instance);
  };

  const onSwipeEnd = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupSwipeEnd', instance);
  };

  const onSwipeClose = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupSwipeClose', instance);
  };

  const onOpen = instance => {
    isOpened.current = true;
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupOpen', instance);
  };

  const onOpened = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupOpened', instance);
  };

  const onClose = instance => {
    isOpened.current = false;
    isClosing.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupClose', instance);
  };

  const onClosed = instance => {
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'popupClosed', instance);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Popup: () => f7Popup.current
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(opened, value => {
    if (!f7Popup.current) return;

    if (value) {
      f7Popup.current.open();
    } else {
      f7Popup.current.close();
    }
  });

  const modalEvents = method => {
    if (!f7Popup.current) return;
    f7Popup.current[method]('swipeStart', onSwipeStart);
    f7Popup.current[method]('swipeMove', onSwipeMove);
    f7Popup.current[method]('swipeEnd', onSwipeEnd);
    f7Popup.current[method]('swipeClose', onSwipeClose);
    f7Popup.current[method]('open', onOpen);
    f7Popup.current[method]('opened', onOpened);
    f7Popup.current[method]('close', onClose);
    f7Popup.current[method]('closed', onClosed);
  };

  const onMount = () => {
    if (!elRef.current) return;
    const popupParams = {
      el: elRef.current
    };
    if ('closeByBackdropClick' in props) popupParams.closeByBackdropClick = closeByBackdropClick;
    if ('closeOnEscape' in props) popupParams.closeOnEscape = closeOnEscape;
    if ('animate' in props) popupParams.animate = animate;
    if ('backdrop' in props) popupParams.backdrop = backdrop;
    if ('backdropEl' in props) popupParams.backdropEl = backdropEl;
    if ('swipeToClose' in props) popupParams.swipeToClose = swipeToClose;
    if ('swipeHandler' in props) popupParams.swipeHandler = swipeHandler;
    if ('containerEl' in props) popupParams.containerEl = containerEl;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      f7Popup.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.popup.create(popupParams);
      modalEvents('on');

      if (opened) {
        f7Popup.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (f7Popup.current) {
      f7Popup.current.destroy();
    }

    f7Popup.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    modalEvents('on');
    return () => {
      modalEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'popup', {
    'popup-tablet-fullscreen': tabletFullscreen,
    'popup-push': push
  }, (0,_shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__.modalStateClasses)({
    isOpened,
    isClosing
  }), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Popup.displayName = 'f7-popup';
/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/framework7-react/components/preloader.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/preloader.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/use-theme.js */ "./node_modules/framework7-react/shared/use-theme.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Preloader = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const theme = (0,_shared_use_theme_js__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const {
    className,
    id,
    style,
    size
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const preloaderStyle = {};
  let sizeComputed = size;

  if (sizeComputed && typeof sizeComputed === 'string' && sizeComputed.indexOf('px') >= 0) {
    sizeComputed = sizeComputed.replace('px', '');
  }

  if (sizeComputed) {
    preloaderStyle.width = `${sizeComputed}px`;
    preloaderStyle.height = `${sizeComputed}px`;
    preloaderStyle['--f7-preloader-size'] = `${sizeComputed}px`;
  }

  if (style) (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(preloaderStyle, style || {});
  let innerEl;

  if (theme && theme.md) {
    innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      viewBox: "0 0 36 36"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "16"
    })));
  } else if (theme && theme.ios) {
    innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-line"
    }));
  } else if (theme && theme.aurora) {
    innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner-circle"
    }));
  } else if (!theme) {
    innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "preloader-inner"
    });
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(className, 'preloader', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({
    id: id,
    style: preloaderStyle,
    className: classes,
    ref: elRef
  }, extraAttrs), innerEl);
});
Preloader.displayName = 'f7-preloader';
/* harmony default export */ __webpack_exports__["default"] = (Preloader);

/***/ }),

/***/ "./node_modules/framework7-react/components/progressbar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/progressbar.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Progressbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    progress,
    infinite
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const set = (newProgress, speed) => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.progressbar.set(elRef.current, newProgress, speed);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    set
  }));
  const transformStyle = {
    transform: progress ? `translate3d(${-100 + progress}%, 0, 0)` : '',
    WebkitTransform: progress ? `translate3d(${-100 + progress}%, 0, 0)` : ''
  };
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'progressbar', {
    'progressbar-infinite': infinite
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", _extends({
    ref: elRef,
    id: id,
    style: style,
    className: classes,
    "data-progress": progress
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: transformStyle
  }));
});
Progressbar.displayName = 'f7-progressbar';
/* harmony default export */ __webpack_exports__["default"] = (Progressbar);

/***/ }),

/***/ "./node_modules/framework7-react/components/radio.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/radio.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Radio = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    value,
    disabled,
    readonly,
    checked,
    defaultChecked
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onChange = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    disabled: disabled,
    readOnly: readonly,
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  });
  const iconEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "icon-radio"
  });
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'radio', {
    disabled
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), inputEl, iconEl, children);
});
Radio.displayName = 'f7-radio';
/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./node_modules/framework7-react/components/range.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/range.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const Range = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Range = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    children,
    init = true,
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    label = false,
    dual = false,
    vertical = false,
    verticalReversed = false,
    draggableBar = true,
    formatLabel,
    scale = false,
    scaleSteps = 5,
    scaleSubSteps = 0,
    formatScaleLabel,
    limitKnobPosition = undefined,
    name,
    input,
    inputId,
    disabled
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Range: () => f7Range.current
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(value, newValue => {
    if (!f7Range.current) return;
    const rangeValue = f7Range.current.value;

    if (Array.isArray(newValue) && Array.isArray(rangeValue)) {
      if (rangeValue[0] !== newValue[0] || rangeValue[1] !== newValue[1]) {
        f7Range.current.setValue(newValue);
      }
    } else {
      f7Range.current.setValue(newValue);
    }
  });

  const onChange = (range, val) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'rangeChange', val);
  };

  const onChanged = (range, val) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'rangeChanged', val);
  };

  const rangeEvents = method => {
    if (!f7Range.current) return;
    f7Range.current[method]('change', onChange);
    f7Range.current[method]('changed', onChanged);
  };

  const onMount = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      if (!init || !elRef.current) return;
      f7Range.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.range.create((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)({
        el: elRef.current,
        value,
        min,
        max,
        step,
        label,
        dual,
        draggableBar,
        vertical,
        verticalReversed,
        formatLabel,
        scale,
        scaleSteps,
        scaleSubSteps,
        formatScaleLabel,
        limitKnobPosition
      }));
      rangeEvents('on');
    });
  };

  const onDestroy = () => {
    if (f7Range.current && f7Range.current.destroy) f7Range.current.destroy();
    f7Range.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    rangeEvents('on');
    return () => {
      rangeEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'range-slider', {
    'range-slider-horizontal': !vertical,
    'range-slider-vertical': vertical,
    'range-slider-vertical-reversed': vertical && verticalReversed,
    disabled
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: elRef,
    id: id,
    style: style,
    className: classes
  }, extraAttrs), input && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "range",
    name: name,
    id: inputId
  }), children);
});
Range.displayName = 'f7-range';
/* harmony default export */ __webpack_exports__["default"] = (Range);

/***/ }),

/***/ "./node_modules/framework7-react/components/routable-modals.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-react/components/routable-modals.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const RoutableModals = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const [modals, setModals] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const routerData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const onMount = () => {
    routerData.current = {
      modals,
      el: elRef.current,

      setModals(newModals) {
        setModals([...newModals]);
      }

    };
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.modals = routerData.current;
  };

  const onDestroy = () => {
    if (!routerData.current) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.modals = null;
    routerData.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (!routerData.current || !_shared_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7events.emit('modalsRouterDidUpdate', routerData.current);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: elRef,
    className: "framework7-modals"
  }, modals.map(_ref => {
    let {
      component: ModalComponent,
      id: modalId,
      props: modalProps
    } = _ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ModalComponent, _extends({
      key: modalId
    }, modalProps));
  }));
});
RoutableModals.displayName = 'f7-routable-modals';
/* harmony default export */ __webpack_exports__["default"] = (RoutableModals);

/***/ }),

/***/ "./node_modules/framework7-react/components/row.js":
/*!*********************************************************!*\
  !*** ./node_modules/framework7-react/components/row.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Row = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    tag = 'div',
    noGap,
    resizable,
    resizableFixed,
    resizableAbsolute,
    resizableHandler = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', event);
  };

  const onResize = el => {
    if (el === elRef.current) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'gridResize');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('gridResize', onResize);
    });
    return () => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('gridResize', onResize);
    };
  });
  const RowTag = tag;
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'row', {
    'no-gap': noGap,
    resizable,
    'resizable-fixed': resizableFixed,
    'resizable-absolute': resizableAbsolute
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RowTag, _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs, {
    onClick: onClick
  }), children, resizable && resizableHandler && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "resize-handler"
  }));
});
Row.displayName = 'f7-row';
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./node_modules/framework7-react/components/searchbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/searchbar.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const Searchbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Searchbar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    noShadow,
    noHairline,
    form = true,
    placeholder = 'Search',
    spellcheck,
    disableButton = true,
    disableButtonText = 'Cancel',
    clearButton = true,
    // Input Value
    value,
    // SB Params
    inputEvents = 'change input compositionend',
    expandable,
    inline,
    searchContainer,
    searchIn = '.item-title',
    searchItem = 'li',
    searchGroup = '.list-group',
    searchGroupTitle = '.item-divider, .list-group-title',
    foundEl = '.searchbar-found',
    notFoundEl = '.searchbar-not-found',
    backdrop,
    backdropEl,
    hideOnEnableEl = '.searchbar-hide-on-enable',
    hideOnSearchEl = '.searchbar-hide-on-search',
    ignore = '.searchbar-ignore',
    customSearch = false,
    removeDiacritics = false,
    hideDividers = true,
    hideGroups = true,
    init = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const search = query => {
    if (!f7Searchbar.current) return undefined;
    return f7Searchbar.current.search(query);
  };

  const enable = () => {
    if (!f7Searchbar.current) return undefined;
    return f7Searchbar.current.enable();
  };

  const disable = () => {
    if (!f7Searchbar.current) return undefined;
    return f7Searchbar.current.disable();
  };

  const toggle = () => {
    if (!f7Searchbar.current) return undefined;
    return f7Searchbar.current.toggle();
  };

  const clear = () => {
    if (!f7Searchbar.current) return undefined;
    return f7Searchbar.current.clear();
  };

  const onChange = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', event);
  };

  const onInput = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'input', event);
  };

  const onFocus = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'focus', event);
  };

  const onBlur = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'blur', event);
  };

  const onSubmit = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'submit', event);
  };

  const onClearButtonClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click:clear clickClear', event);
  };

  const onDisableButtonClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click:disable clickDisable', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Searchbar: () => f7Searchbar.current,
    search,
    enable,
    disable,
    toggle,
    clear
  }));

  const onMount = () => {
    if (!init) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      const params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)({
        el: elRef.current,
        inputEvents,
        searchContainer,
        searchIn,
        searchItem,
        searchGroup,
        searchGroupTitle,
        hideOnEnableEl,
        hideOnSearchEl,
        foundEl,
        notFoundEl,
        backdrop,
        backdropEl,
        disableButton,
        ignore,
        customSearch,
        removeDiacritics,
        hideDividers,
        hideGroups,
        expandable,
        inline,
        on: {
          search(searchbar, query, previousQuery) {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'searchbarSearch', searchbar, query, previousQuery);
          },

          clear(searchbar, previousQuery) {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'searchbarClear', searchbar, previousQuery);
          },

          enable(searchbar) {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'searchbarEnable', searchbar);
          },

          disable(searchbar) {
            (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'searchbarDisable', searchbar);
          }

        }
      });
      Object.keys(params).forEach(key => {
        if (params[key] === '') {
          delete params[key];
        }
      });
      f7Searchbar.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.searchbar.create(params);
    });
  };

  const onDestroy = () => {
    if (f7Searchbar.current && f7Searchbar.current.destroy) f7Searchbar.current.destroy();
    f7Searchbar.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  let clearEl;
  let disableEl;

  if (clearButton) {
    clearEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "input-clear-button",
      onClick: onClearButtonClick
    });
  }

  if (disableButton) {
    disableEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "searchbar-disable-button",
      onClick: onDisableButtonClick
    }, disableButtonText);
  }

  const SearchbarTag = form ? 'form' : 'div';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'searchbar', {
    'searchbar-inline': inline,
    'no-shadow': noShadow,
    'no-hairline': noHairline,
    'searchbar-expandable': expandable
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_4__.colorClasses)(props));
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchbarTag, _extends({
    ref: elRef,
    id: id,
    style: style,
    className: classes
  }, extraAttrs, {
    onSubmit: onSubmit
  }), slots['before-inner'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "searchbar-inner"
  }, slots['inner-start'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "searchbar-input-wrap"
  }, slots['input-wrap-start'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: value,
    placeholder: placeholder,
    spellCheck: spellcheck,
    type: "search",
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "searchbar-icon"
  }), clearEl, slots['input-wrap-end']), disableEl, slots['inner-end'], slots.default), slots['after-inner']);
});
Searchbar.displayName = 'f7-searchbar';
/* harmony default export */ __webpack_exports__["default"] = (Searchbar);

/***/ }),

/***/ "./node_modules/framework7-react/components/segmented.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/segmented.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Segmented = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    raised,
    raisedIos,
    raisedMd,
    raisedAurora,
    round,
    roundIos,
    roundMd,
    roundAurora,
    strong,
    strongIos,
    strongMd,
    strongAurora,
    tag = 'div'
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, {
    segmented: true,
    'segmented-raised': raised,
    'segmented-raised-ios': raisedIos,
    'segmented-raised-aurora': raisedAurora,
    'segmented-raised-md': raisedMd,
    'segmented-round': round,
    'segmented-round-ios': roundIos,
    'segmented-round-aurora': roundAurora,
    'segmented-round-md': roundMd,
    'segmented-strong': strong,
    'segmented-strong-ios': strongIos,
    'segmented-strong-md': strongMd,
    'segmented-strong-aurora': strongAurora
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  const SegmentedTag = tag;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SegmentedTag, _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children, (strong || strongIos || strongMd || strongAurora) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "segmented-highlight"
  }));
});
Segmented.displayName = 'f7-segmented';
/* harmony default export */ __webpack_exports__["default"] = (Segmented);

/***/ }),

/***/ "./node_modules/framework7-react/components/sheet.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/sheet.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/modal-state-classes.js */ "./node_modules/framework7-react/shared/modal-state-classes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Sheet = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Sheet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    top,
    bottom,
    position,
    push,
    opened,
    animate,
    backdrop,
    backdropEl,
    closeByBackdropClick,
    closeByOutsideClick,
    closeOnEscape,
    swipeToClose,
    swipeToStep,
    swipeHandler,
    containerEl
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(opened);
  const isClosing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  const onStepProgress = (instance, progress) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sheetStepProgress', instance, progress);
  };

  const onStepOpen = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sheetStepOpen', instance);
  };

  const onStepClose = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sheetStepClose', instance);
  };

  const onOpen = instance => {
    isOpened.current = true;
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sheetOpen', instance);
  };

  const onOpened = instance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sheetOpened', instance);
  };

  const onClose = instance => {
    isOpened.current = false;
    isClosing.current = true;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sheetClose', instance);
  };

  const onClosed = instance => {
    isClosing.current = false;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'sheetClosed', instance);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Sheet: () => f7Sheet.current
  }));

  const modalEvents = method => {
    if (!f7Sheet.current) return;
    f7Sheet.current[method]('open', onOpen);
    f7Sheet.current[method]('opened', onOpened);
    f7Sheet.current[method]('close', onClose);
    f7Sheet.current[method]('closed', onClosed);
    f7Sheet.current[method]('stepOpen', onStepOpen);
    f7Sheet.current[method]('stepClose', onStepClose);
    f7Sheet.current[method]('stepProgress', onStepProgress);
  };

  const onMount = () => {
    if (!elRef.current) return;
    const sheetParams = {
      el: elRef.current
    };
    if ('animate' in props && typeof animate !== 'undefined') sheetParams.animate = animate;
    if ('backdrop' in props && typeof backdrop !== 'undefined') sheetParams.backdrop = backdrop;
    if ('backdropEl' in props) sheetParams.backdropEl = backdropEl;
    if ('closeByBackdropClick' in props) sheetParams.closeByBackdropClick = closeByBackdropClick;
    if ('closeByOutsideClick' in props) sheetParams.closeByOutsideClick = closeByOutsideClick;
    if ('closeOnEscape' in props) sheetParams.closeOnEscape = closeOnEscape;
    if ('swipeToClose' in props) sheetParams.swipeToClose = swipeToClose;
    if ('swipeToStep' in props) sheetParams.swipeToStep = swipeToStep;
    if ('swipeHandler' in props) sheetParams.swipeHandler = swipeHandler;
    if ('containerEl' in props) sheetParams.containerEl = containerEl;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      f7Sheet.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.sheet.create(sheetParams);
      modalEvents('on');

      if (opened) {
        f7Sheet.current.open(false);
      }
    });
  };

  const onDestroy = () => {
    if (f7Sheet.current) {
      f7Sheet.current.destroy();
    }

    f7Sheet.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    modalEvents('on');
    return () => {
      modalEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_4__.watchProp)(opened, value => {
    if (!f7Sheet.current) return;

    if (value) {
      f7Sheet.current.open();
    } else {
      f7Sheet.current.close();
    }
  });
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const fixedList = [];
  const staticList = [];
  const fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab list-index panel'.split(' ').map(tagName => `f7-${tagName}`);
  const slotsDefault = slots.default;

  if (slotsDefault && slotsDefault.length) {
    slotsDefault.forEach(child => {
      if (typeof child === 'undefined') return;
      let isFixedTag = false;
      const tag = child.type && (child.type.displayName || child.type.name);

      if (!tag) {
        staticList.push(child);
        return;
      }

      if (fixedTags.indexOf(tag) >= 0) {
        isFixedTag = true;
      }

      if (isFixedTag) fixedList.push(child);else staticList.push(child);
    });
  }

  const innerEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sheet-modal-inner"
  }, staticList, slots.static);
  let positionComputed = 'bottom';
  if (position) positionComputed = position;else if (top) positionComputed = 'top';else if (bottom) positionComputed = 'bottom';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'sheet-modal', `sheet-modal-${positionComputed}`, {
    'sheet-modal-push': push
  }, (0,_shared_modal_state_classes_js__WEBPACK_IMPORTED_MODULE_5__.modalStateClasses)({
    isOpened,
    isClosing
  }), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), fixedList, slots.fixed, innerEl);
});
Sheet.displayName = 'f7-sheet';
/* harmony default export */ __webpack_exports__["default"] = (Sheet);

/***/ }),

/***/ "./node_modules/framework7-react/components/skeleton-avatar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-react/components/skeleton-avatar.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skeleton-elements/react */ "./node_modules/skeleton-elements/react/index.js");
// eslint-disable-next-line

/* harmony default export */ __webpack_exports__["default"] = (skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__.SkeletonAvatar);

/***/ }),

/***/ "./node_modules/framework7-react/components/skeleton-block.js":
/*!********************************************************************!*\
  !*** ./node_modules/framework7-react/components/skeleton-block.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skeleton-elements/react */ "./node_modules/skeleton-elements/react/index.js");
// eslint-disable-next-line

/* harmony default export */ __webpack_exports__["default"] = (skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__.SkeletonBlock);

/***/ }),

/***/ "./node_modules/framework7-react/components/skeleton-image.js":
/*!********************************************************************!*\
  !*** ./node_modules/framework7-react/components/skeleton-image.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skeleton-elements/react */ "./node_modules/skeleton-elements/react/index.js");
// eslint-disable-next-line

/* harmony default export */ __webpack_exports__["default"] = (skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__.SkeletonImage);

/***/ }),

/***/ "./node_modules/framework7-react/components/skeleton-text.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/components/skeleton-text.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! skeleton-elements/react */ "./node_modules/skeleton-elements/react/index.js");
// eslint-disable-next-line

/* harmony default export */ __webpack_exports__["default"] = (skeleton_elements_react__WEBPACK_IMPORTED_MODULE_0__.SkeletonText);

/***/ }),

/***/ "./node_modules/framework7-react/components/stepper.js":
/*!*************************************************************!*\
  !*** ./node_modules/framework7-react/components/stepper.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const Stepper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Stepper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    init = true,
    value = 0,
    min = 0,
    max = 100,
    step = 1,
    formatValue,
    name,
    inputId,
    input = true,
    inputType = 'text',
    inputReadonly = false,
    autorepeat = false,
    autorepeatDynamic = false,
    wraps = false,
    manualInputMode = false,
    decimalPoint = 4,
    buttonsEndInputMode = true,
    disabled,
    buttonsOnly,
    round,
    roundMd,
    roundIos,
    roundAurora,
    fill,
    fillMd,
    fillIos,
    fillAurora,
    large,
    largeMd,
    largeIos,
    largeAurora,
    small,
    smallMd,
    smallIos,
    smallAurora,
    raised,
    raisedMd,
    raisedIos,
    raisedAurora
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const increment = () => {
    if (!f7Stepper.current) return;
    f7Stepper.current.increment();
  };

  const decrement = () => {
    if (!f7Stepper.current) return;
    f7Stepper.current.decrement();
  };

  const setValue = newValue => {
    if (f7Stepper.current && f7Stepper.current.setValue) f7Stepper.current.setValue(newValue);
  };

  const getValue = () => {
    if (f7Stepper.current && f7Stepper.current.getValue) {
      return f7Stepper.current.getValue();
    }

    return undefined;
  };

  const onInput = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'input', event, f7Stepper.current);
  };

  const onChange = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', event, f7Stepper.current);
  };

  const onMinusClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'stepperMinusClick', event, f7Stepper.current);
  };

  const onPlusClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'stepperPlusClick', event, f7Stepper.current);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Stepper: () => f7Stepper.current,
    increment,
    decrement,
    setValue,
    getValue
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(value, newValue => {
    if (!f7Stepper.current) return;
    f7Stepper.current.setValue(newValue);
  });

  const onStepperChange = (stepper, newValue) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'stepperChange', newValue);
  };

  const stepperEvents = method => {
    if (!f7Stepper.current) return;
    f7Stepper.current[method]('change', onStepperChange);
  };

  const onMount = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      if (!init || !elRef.current) return;
      f7Stepper.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.stepper.create((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)({
        el: elRef.current,
        min,
        max,
        value,
        step,
        formatValue,
        autorepeat,
        autorepeatDynamic,
        wraps,
        manualInputMode,
        decimalPoint,
        buttonsEndInputMode
      }));
      stepperEvents('on');
    });
  };

  const onDestroy = () => {
    if (f7Stepper.current && f7Stepper.current.destroy) {
      f7Stepper.current.destroy();
    }

    f7Stepper.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    stepperEvents('on');
    return () => {
      stepperEvents('off');
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  let inputWrapEl;
  let valueEl;

  if (input && !buttonsOnly) {
    const inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      name: name,
      id: inputId,
      type: inputType,
      min: inputType === 'number' ? min : undefined,
      max: inputType === 'number' ? max : undefined,
      step: inputType === 'number' ? step : undefined,
      onInput: onInput,
      onChange: onChange,
      value: value,
      readOnly: inputReadonly
    });
    inputWrapEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "stepper-input-wrap"
    }, inputEl);
  }

  if (!input && !buttonsOnly) {
    valueEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "stepper-value"
    }, value);
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'stepper', {
    disabled,
    'stepper-round': round,
    'stepper-round-ios': roundIos,
    'stepper-round-md': roundMd,
    'stepper-round-aurora': roundAurora,
    'stepper-fill': fill,
    'stepper-fill-ios': fillIos,
    'stepper-fill-md': fillMd,
    'stepper-fill-aurora': fillAurora,
    'stepper-large': large,
    'stepper-large-ios': largeIos,
    'stepper-large-md': largeMd,
    'stepper-large-aurora': largeAurora,
    'stepper-small': small,
    'stepper-small-ios': smallIos,
    'stepper-small-md': smallMd,
    'stepper-small-aurora': smallAurora,
    'stepper-raised': raised,
    'stepper-raised-ios': raisedIos,
    'stepper-raised-md': raisedMd,
    'stepper-raised-aurora': raisedAurora
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: elRef,
    id: id,
    style: style,
    className: classes
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "stepper-button-minus",
    onClick: onMinusClick
  }), inputWrapEl, valueEl, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "stepper-button-plus",
    onClick: onPlusClick
  }));
});
Stepper.displayName = 'f7-stepper';
/* harmony default export */ __webpack_exports__["default"] = (Stepper);

/***/ }),

/***/ "./node_modules/framework7-react/components/subnavbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/framework7-react/components/subnavbar.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Subnavbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    inner = true,
    title,
    sliding
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'subnavbar', {
    sliding
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    className: classes,
    id: id,
    style: style,
    ref: elRef
  }, extraAttrs), inner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "subnavbar-inner"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "subnavbar-title"
  }, title), children) : children);
});
Subnavbar.displayName = 'f7-subnavbar';
/* harmony default export */ __webpack_exports__["default"] = (Subnavbar);

/***/ }),

/***/ "./node_modules/framework7-react/components/swipeout-actions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/framework7-react/components/swipeout-actions.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const SwipeoutActions = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    left,
    right,
    side
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  let sideComputed = side;

  if (!sideComputed) {
    if (left) sideComputed = 'left';
    if (right) sideComputed = 'right';
  }

  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, `swipeout-actions-${sideComputed}`, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
SwipeoutActions.displayName = 'f7-swipeout-actions';
/* harmony default export */ __webpack_exports__["default"] = (SwipeoutActions);

/***/ }),

/***/ "./node_modules/framework7-react/components/swipeout-button.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-react/components/swipeout-button.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const SwipeoutButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    text,
    confirmTitle,
    confirmText,
    overswipe,
    close,
    delete: deleteProp,
    href
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = e => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, {
    'swipeout-overswipe': overswipe,
    'swipeout-delete': deleteProp,
    'swipeout-close': close
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({
    ref: elRef,
    href: href || '#',
    id: id,
    style: style,
    "data-confirm": confirmText || undefined,
    "data-confirm-title": confirmTitle || undefined,
    className: classes
  }, extraAttrs, {
    onClick: onClick
  }), children, text);
});
SwipeoutButton.displayName = 'f7-swipeout-button';
/* harmony default export */ __webpack_exports__["default"] = (SwipeoutButton);

/***/ }),

/***/ "./node_modules/framework7-react/components/swiper-slide.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/components/swiper-slide.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");

/* harmony default export */ __webpack_exports__["default"] = (swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide);

/***/ }),

/***/ "./node_modules/framework7-react/components/swiper.js":
/*!************************************************************!*\
  !*** ./node_modules/framework7-react/components/swiper.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");

/* harmony default export */ __webpack_exports__["default"] = (swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper);

/***/ }),

/***/ "./node_modules/framework7-react/components/tab.js":
/*!*********************************************************!*\
  !*** ./node_modules/framework7-react/components/tab.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_use_tab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/use-tab.js */ "./node_modules/framework7-react/shared/use-tab.js");
/* harmony import */ var _shared_router_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/router-context.js */ "./node_modules/framework7-react/shared/router-context.js");
/* harmony import */ var _shared_use_async_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/use-async-component.js */ "./node_modules/framework7-react/shared/use-async-component.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Tab = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    tabActive
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const routerData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const routerContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_shared_router_context_js__WEBPACK_IMPORTED_MODULE_2__.RouterContext);
  let initialTabContent = null;

  if (!routerData.current && routerContext && routerContext.route && routerContext.route.route && routerContext.route.route.tab && routerContext.route.route.tab.id === id) {
    const {
      component,
      asyncComponent,
      options: tabRouteOptions
    } = routerContext.route.route.tab;

    if (component || asyncComponent) {
      const parentProps = routerContext.route.route.options && routerContext.route.route.options.props;
      initialTabContent = {
        id: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getComponentId)(),
        component: component || asyncComponent,
        isAsync: !!asyncComponent,
        props: { ...(parentProps || {}),
          ...(tabRouteOptions && tabRouteOptions.props || {}),
          f7router: routerContext.router,
          f7route: routerContext.route,
          ...routerContext.route.params
        }
      };
    }
  }

  const [tabContent, setTabContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialTabContent || null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  if (_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7 && !routerData.current) {
    routerData.current = {
      setTabContent
    };
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7routers.tabs.push(routerData.current);
  }

  const onMount = () => {
    if (elRef.current && initialTabContent) {
      elRef.current.f7RouterTabLoaded = true;
    }

    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      if (!routerData.current) {
        routerData.current = {
          el: elRef.current,
          setTabContent
        };
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7routers.tabs.push(routerData.current);
      } else {
        routerData.current.el = elRef.current;
      }
    });
  };

  const onDestroy = () => {
    if (!routerData.current) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7routers.tabs.splice(_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7routers.tabs.indexOf(routerData.current), 1);
    routerData.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    if (!routerData.current || !_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7events.emit('tabRouterDidUpdate', routerData.current);
  });
  (0,_shared_use_tab_js__WEBPACK_IMPORTED_MODULE_5__.useTab)(elRef, props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'tab', {
    'tab-active': tabActive
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));

  const renderChildren = () => {
    if (!tabContent) return children;

    if (tabContent.isAsync) {
      return (0,_shared_use_async_component_js__WEBPACK_IMPORTED_MODULE_7__.useAsyncComponent)(tabContent.component, tabContent.props, tabContent.id);
    }

    const TabContent = tabContent.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabContent, _extends({
      key: tabContent.id
    }, tabContent.props));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), renderChildren());
});
Tab.displayName = 'f7-tab';
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./node_modules/framework7-react/components/tabs.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/tabs.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const Tabs = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    animated,
    swipeable,
    routable,
    swiperParams
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (!swipeable || !swiperParams) return;
    if (!elRef.current) return;
    elRef.current.f7SwiperParams = swiperParams;
  }, []);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_3__.colorClasses)(props));
  const wrapClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)({
    'tabs-animated-wrap': animated,
    'tabs-swipeable-wrap': swipeable
  });
  const tabsClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)({
    tabs: true,
    'tabs-routable': routable
  });

  if (animated || swipeable) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
      id: id,
      style: style,
      className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(wrapClasses, classes),
      ref: elRef
    }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: tabsClasses
    }, children));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(tabsClasses, classes),
    ref: elRef
  }, extraAttrs), children);
});
Tabs.displayName = 'f7-tabs';
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/framework7-react/components/text-editor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/components/text-editor.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const TextEditor = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7TextEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    mode,
    value,
    buttons,
    customButtons,
    dividers,
    imageUrlText,
    linkUrlText,
    placeholder,
    clearFormattingOnPaste,
    resizable = false
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onChange = (editor, editorValue) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorChange', editorValue);
  };

  const onInput = (editor, editorValue) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorInput', editorValue);
  };

  const onFocus = () => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorFocus');
  };

  const onBlur = () => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorBlur');
  };

  const onButtonClick = (editor, button) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorButtonClick', button);
  };

  const onKeyboardOpen = () => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorKeyboardOpen');
  };

  const onKeyboardClose = () => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorKeyboardClose');
  };

  const onPopoverOpen = () => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorPopoverOpen');
  };

  const onPopoverClose = () => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorPopoverClose');
  };

  const onInsertLink = (editor, url) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorInsertLink', url);
  };

  const onInsertImage = (editor, url) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'textEditorInsertImage', url);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7TextEditor: () => f7TextEditor.current
  }));
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(value, newValue => {
    if (f7TextEditor.current) {
      f7TextEditor.current.setValue(newValue);
    }
  });

  const onMount = () => {
    const params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)({
      el: elRef.current,
      mode,
      value,
      buttons,
      customButtons,
      dividers,
      imageUrlText,
      linkUrlText,
      placeholder,
      clearFormattingOnPaste,
      on: {
        change: onChange,
        input: onInput,
        focus: onFocus,
        blur: onBlur,
        buttonClick: onButtonClick,
        keyboardOpen: onKeyboardOpen,
        keyboardClose: onKeyboardClose,
        popoverOpen: onPopoverOpen,
        popoverClose: onPopoverClose,
        insertLink: onInsertLink,
        insertImage: onInsertImage
      }
    });
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7ready)(() => {
      f7TextEditor.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_3__.f7.textEditor.create(params);
    });
  };

  const onDestroy = () => {
    if (f7TextEditor.current && f7TextEditor.current.destroy) {
      f7TextEditor.current.destroy();
    }

    f7TextEditor.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'text-editor', resizable && 'text-editor-resizable', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: elRef,
    id: id,
    style: style,
    className: classes
  }, extraAttrs), slots['root-start'], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-editor-content",
    contentEditable: true
  }, slots.default), slots['root-end'], slots.root);
});
TextEditor.displayName = 'f7-text-editor';
/* harmony default export */ __webpack_exports__["default"] = (TextEditor);

/***/ }),

/***/ "./node_modules/framework7-react/components/toggle.js":
/*!************************************************************!*\
  !*** ./node_modules/framework7-react/components/toggle.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/use-tooltip.js */ "./node_modules/framework7-react/shared/use-tooltip.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Toggle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const f7Toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    className,
    id,
    style,
    init = true,
    checked,
    defaultChecked,
    disabled,
    readonly,
    name,
    value
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onChange = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'change', event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7Toggle: () => f7Toggle.current
  }));
  (0,_shared_use_tooltip_js__WEBPACK_IMPORTED_MODULE_2__.useTooltip)(elRef, props);
  (0,_shared_watch_prop_js__WEBPACK_IMPORTED_MODULE_3__.watchProp)(checked, newValue => {
    if (!f7Toggle.current) return;
    f7Toggle.current.checked = newValue;
  });

  const onToggleChange = toggleInstance => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'toggleChange', toggleInstance.checked);
  };

  const toggleEvents = method => {
    if (!f7Toggle.current) return;
    f7Toggle.current[method]('toggleChange', onToggleChange);
  };

  const onMount = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7ready)(() => {
      if (!init || !elRef.current) return;
      f7Toggle.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_4__.f7.toggle.create({
        el: elRef.current
      });
      toggleEvents('on');
    });
  };

  const onDestroy = () => {
    if (f7Toggle.current && f7Toggle.current.destroy && f7Toggle.current.$el) {
      f7Toggle.current.destroy();
    }

    f7Toggle.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(() => {
    toggleEvents('on');

    if (inputElRef.current) {
      inputElRef.current.addEventListener('change', onChange);
    }

    return () => {
      toggleEvents('off');

      if (inputElRef.current) {
        inputElRef.current.removeEventListener('change', onChange);
      }
    };
  });
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  const labelClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('toggle', className, {
    disabled
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  const inputEl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    ref: inputElRef,
    type: "checkbox",
    name: name,
    disabled: disabled,
    readOnly: readonly,
    checked: checked,
    defaultChecked: defaultChecked,
    value: value,
    onChange: () => {}
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", _extends({
    id: id,
    style: style,
    className: labelClasses,
    ref: elRef
  }, extraAttrs), inputEl, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "toggle-icon"
  }));
});
Toggle.displayName = 'f7-toggle';
/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "./node_modules/framework7-react/components/toolbar.js":
/*!*************************************************************!*\
  !*** ./node_modules/framework7-react/components/toolbar.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-theme.js */ "./node_modules/framework7-react/shared/use-theme.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_tabbar_context_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/tabbar-context.js */ "./node_modules/framework7-react/shared/tabbar-context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const Toolbar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    tabbar,
    labels,
    scrollable,
    hidden,
    noShadow,
    noHairline,
    noBorder,
    position,
    topMd,
    topIos,
    topAurora,
    top,
    bottomMd,
    bottomIos,
    bottomAurora,
    bottom,
    inner = true
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onHide = toolbarEl => {
    if (elRef.current !== toolbarEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'toolbarHide');
  };

  const onShow = toolbarEl => {
    if (elRef.current !== toolbarEl) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'toolbarShow');
  };

  const hide = animate => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.toolbar.hide(elRef.current, animate);
  };

  const show = animate => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.toolbar.show(elRef.current, animate);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    hide,
    show
  }));
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      if (tabbar && _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7 && elRef.current) {
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.toolbar.setHighlight(elRef.current);
      }

      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('toolbarShow', onShow);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('toolbarHide', onHide);
    });
    return () => {
      if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('toolbarShow', onShow);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('toolbarHide', onHide);
    };
  });
  const theme = (0,_shared_use_theme_js__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'toolbar', {
    tabbar,
    'toolbar-bottom': theme && theme.md && bottomMd || theme && theme.ios && bottomIos || theme && theme.aurora && bottomAurora || bottom || position === 'bottom',
    'toolbar-top': theme && theme.md && topMd || theme && theme.ios && topIos || theme && theme.aurora && topAurora || top || position === 'top',
    'tabbar-labels': labels,
    'tabbar-scrollable': scrollable,
    'toolbar-hidden': hidden,
    'no-shadow': noShadow,
    'no-hairline': noHairline || noBorder
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_tabbar_context_js__WEBPACK_IMPORTED_MODULE_6__.TabbarContext.Provider, {
    value: {
      tabbarHasLabels: labels
    }
  }, slots['before-inner'], inner ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "toolbar-inner"
  }, slots.default) : slots.default, slots['after-inner']));
});
Toolbar.displayName = 'f7-toolbar';
/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./node_modules/framework7-react/components/treeview-item.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/components/treeview-item.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_use_icon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-icon.js */ "./node_modules/framework7-react/shared/use-icon.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const TreeviewItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    toggle,
    itemToggle,
    selectable,
    selected,
    opened,
    label,
    loadChildren,
    link
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onClick = event => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'click', event);
  };

  const onOpen = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'treeviewOpen', el);
  };

  const onClose = el => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'treeviewClose', el);
  };

  const onLoadChildren = (el, done) => {
    if (elRef.current !== el) return;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'treeviewLoadChildren', el, done);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));

  const attachEvents = () => {
    if (!elRef.current) return;
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('treeviewOpen', onOpen);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('treeviewClose', onClose);
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.on('treeviewLoadChildren', onLoadChildren);
    });
  };

  const detachEvents = () => {
    if (!_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) return;
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('treeviewOpen', onOpen);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('treeviewClose', onClose);
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.off('treeviewLoadChildren', onLoadChildren);
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
  const slots = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSlots)(props);
  const hasChildren = slots.default && slots.default.length || slots.children && slots.children.length || slots['children-start'] && slots['children-start'].length;
  const needToggle = typeof toggle === 'undefined' ? hasChildren : toggle;
  const iconEl = (0,_shared_use_icon_js__WEBPACK_IMPORTED_MODULE_4__.useIcon)(props);
  const TreeviewRootTag = link || link === '' ? 'a' : 'div';
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'treeview-item', {
    'treeview-item-opened': opened,
    'treeview-load-children': loadChildren
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.colorClasses)(props));
  const itemRootClasses = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)('treeview-item-root', {
    'treeview-item-selectable': selectable,
    'treeview-item-selected': selected,
    'treeview-item-toggle': itemToggle
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.routerClasses)(props), (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.actionsClasses)(props));
  let href = link;
  if (link === true) href = '#';
  if (link === false) href = undefined; // no href attribute

  const itemRootAttrs = {
    href,
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.routerAttrs)(props),
    ...(0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_5__.actionsAttrs)(props)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TreeviewRootTag, _extends({
    onClick: onClick,
    className: itemRootClasses
  }, itemRootAttrs), slots['root-start'], needToggle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "treeview-toggle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "treeview-item-content"
  }, slots['content-start'], iconEl, slots.media, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "treeview-item-label"
  }, slots['label-start'], label, slots.label), slots.content, slots['content-end']), slots.root, slots['root-end']), hasChildren && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "treeview-item-children"
  }, slots['children-start'], slots.default, slots.children));
});
TreeviewItem.displayName = 'f7-treeview-item';
/* harmony default export */ __webpack_exports__["default"] = (TreeviewItem);

/***/ }),

/***/ "./node_modules/framework7-react/components/treeview.js":
/*!**************************************************************!*\
  !*** ./node_modules/framework7-react/components/treeview.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Treeview = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'treeview', (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Treeview.displayName = 'f7-treeview';
/* harmony default export */ __webpack_exports__["default"] = (Treeview);

/***/ }),

/***/ "./node_modules/framework7-react/components/view.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/components/view.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_use_tab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/use-tab.js */ "./node_modules/framework7-react/shared/use-tab.js");
/* harmony import */ var _shared_use_async_component_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/use-async-component.js */ "./node_modules/framework7-react/shared/use-async-component.js");
/* harmony import */ var _shared_get_router_initial_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-router-initial-component.js */ "./node_modules/framework7-react/shared/get-router-initial-component.js");
/* harmony import */ var _shared_router_context_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/router-context.js */ "./node_modules/framework7-react/shared/router-context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable no-nested-ternary */











const View = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    init = true,
    main,
    tab,
    tabActive,
    url,
    initRouterOnTabShow,
    browserHistoryInitialMatch = true
  } = props;
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
  const initialPageComponent = childrenArray.filter(c => c.props && c.props.initialPage)[0];
  const restChildren = childrenArray.filter(c => !c.props || !c.props.initialPage);
  const shouldInitRouter = !(initRouterOnTabShow && tab && !tabActive);
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const f7View = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const routerData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  let initialPage;
  let initialRoute;

  const onViewInit = view => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'viewInit', view);

    if (!init) {
      routerData.current.instance = view;
      f7View.current = routerData.current.instance;
    }
  };

  if (_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7 && !f7View.current && init) {
    const routerId = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRouterId)();
    f7View.current = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.views.create(elRef.current, {
      routerId,
      init: false,
      ...(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)(props),
      browserHistoryInitialMatch,
      on: {
        init: onViewInit
      }
    });
    routerData.current = {
      routerId,
      instance: f7View.current
    };
    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7routers.views.push(routerData.current);

    if (shouldInitRouter && f7View.current && f7View.current.router && (url || main)) {
      const initialData = (0,_shared_get_router_initial_component_js__WEBPACK_IMPORTED_MODULE_3__.getRouterInitialComponent)(f7View.current.router, initialPageComponent);
      initialPage = initialData.initialPage;
      initialRoute = initialData.initialRoute;

      if (initialRoute && initialRoute.route && initialRoute.route.masterRoute) {
        initialPage = undefined;
        initialRoute = undefined;
      }
    }
  }

  const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialPage ? [initialPage] : []);

  const onResize = (view, width) => {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'viewResize', width);
  };

  const onSwipeBackMove = data => {
    const swipeBackData = data;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'swipeBackMove', swipeBackData);
  };

  const onSwipeBackBeforeChange = data => {
    const swipeBackData = data;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'swipeBackBeforeChange', swipeBackData);
  };

  const onSwipeBackAfterChange = data => {
    const swipeBackData = data;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'swipeBackAfterChange', swipeBackData);
  };

  const onSwipeBackBeforeReset = data => {
    const swipeBackData = data;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'swipeBackBeforeReset', swipeBackData);
  };

  const onSwipeBackAfterReset = data => {
    const swipeBackData = data;
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.emit)(props, 'swipeBackAfterReset', swipeBackData);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    f7View: () => f7View.current
  }));

  const onMount = () => {
    (0,_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7ready)(() => {
      if (f7View.current) {
        routerData.current.el = elRef.current;
        routerData.current.pages = pages;

        routerData.current.setPages = newPages => {
          setPages([...newPages]);
        };

        if (initialPage && initialPage.isAsync && !initialPage.initialComponent) {
          initialPage.component().then(() => {
            setTimeout(() => {
              f7View.current.init(elRef.current);

              if (initialPage) {
                initialPage.el = f7View.current.router.currentPageEl;

                if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
                  initialRoute.route.keepAliveData = {
                    pageEl: initialPage.el
                  };
                }
              }
            }, 100);
          });
        } else {
          f7View.current.init(elRef.current);

          if (initialPage) {
            initialPage.el = f7View.current.router.currentPageEl;

            if (initialRoute && initialRoute.route && initialRoute.route.keepAlive) {
              initialRoute.route.keepAliveData = {
                pageEl: initialPage.el
              };
            }
          }
        }
      } else {
        const routerId = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRouterId)();
        routerData.current = {
          el: elRef.current,
          routerId,
          pages,
          instance: f7View.current,

          setPages(newPages) {
            setPages([...newPages]);
          }

        };
        _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7routers.views.push(routerData.current);
        routerData.current.instance = _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7.views.create(elRef.current, {
          routerId,
          ...(0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.noUndefinedProps)(props),
          browserHistoryInitialMatch,
          on: {
            init: onViewInit
          }
        });
        f7View.current = routerData.current.instance;
      }

      if (!init) return;
      f7View.current.on('resize', onResize);
      f7View.current.on('swipebackMove', onSwipeBackMove);
      f7View.current.on('swipebackBeforeChange', onSwipeBackBeforeChange);
      f7View.current.on('swipebackAfterChange', onSwipeBackAfterChange);
      f7View.current.on('swipebackBeforeReset', onSwipeBackBeforeReset);
      f7View.current.on('swipebackAfterReset', onSwipeBackAfterReset);
    });
  };

  const onDestroy = () => {
    if (f7View.current) {
      f7View.current.off('resize', onResize);
      f7View.current.off('swipebackMove', onSwipeBackMove);
      f7View.current.off('swipebackBeforeChange', onSwipeBackBeforeChange);
      f7View.current.off('swipebackAfterChange', onSwipeBackAfterChange);
      f7View.current.off('swipebackBeforeReset', onSwipeBackBeforeReset);
      f7View.current.off('swipebackAfterReset', onSwipeBackAfterReset);
      if (f7View.current.destroy) f7View.current.destroy();
      f7View.current = null;
    }

    _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7routers.views.splice(_shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7routers.views.indexOf(routerData.current), 1);
    routerData.current = null;
  };

  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_shared_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsomorphicLayoutEffect)(() => {
    if (routerData.current && _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7) {
      _shared_f7_js__WEBPACK_IMPORTED_MODULE_2__.f7events.emit('viewRouterDidUpdate', routerData.current);
    }
  });
  (0,_shared_use_tab_js__WEBPACK_IMPORTED_MODULE_5__.useTab)(elRef, props);
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'view', {
    'view-main': main,
    'tab-active': tabActive,
    tab
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_6__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), restChildren, pages.map(_ref => {
    let {
      component: PageComponent,
      id: pageId,
      props: pageProps,
      isAsync,
      initialComponent
    } = _ref;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_router_context_js__WEBPACK_IMPORTED_MODULE_7__.RouterContext.Provider, {
      key: pageId,
      value: {
        router: pageProps.f7router,
        route: pageProps.f7route
      }
    }, initialComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(initialComponent, { ...pageProps
    }) : isAsync ? (0,_shared_use_async_component_js__WEBPACK_IMPORTED_MODULE_8__.useAsyncComponent)(PageComponent, pageProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageComponent, pageProps));
  }));
});
View.displayName = 'f7-view';
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./node_modules/framework7-react/components/views.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/components/views.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/mixins.js */ "./node_modules/framework7-react/shared/mixins.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Views = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    className,
    id,
    style,
    children,
    tabs
  } = props;
  const extraAttrs = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.getExtraAttrs)(props);
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const classes = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.classNames)(className, 'views', {
    tabs
  }, (0,_shared_mixins_js__WEBPACK_IMPORTED_MODULE_2__.colorClasses)(props));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    id: id,
    style: style,
    className: classes,
    ref: elRef
  }, extraAttrs), children);
});
Views.displayName = 'f7-views';
/* harmony default export */ __webpack_exports__["default"] = (Views);

/***/ }),

/***/ "./node_modules/framework7-react/framework7-react.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/framework7-react.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": function() { return /* reexport safe */ _components_accordion_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "AccordionContent": function() { return /* reexport safe */ _components_accordion_content_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "AccordionItem": function() { return /* reexport safe */ _components_accordion_item_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "AccordionToggle": function() { return /* reexport safe */ _components_accordion_toggle_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Actions": function() { return /* reexport safe */ _components_actions_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "ActionsButton": function() { return /* reexport safe */ _components_actions_button_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "ActionsGroup": function() { return /* reexport safe */ _components_actions_group_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "ActionsLabel": function() { return /* reexport safe */ _components_actions_label_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "App": function() { return /* reexport safe */ _components_app_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "Appbar": function() { return /* reexport safe */ _components_appbar_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "AreaChart": function() { return /* reexport safe */ _components_area_chart_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "Badge": function() { return /* reexport safe */ _components_badge_js__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "Block": function() { return /* reexport safe */ _components_block_js__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "BlockFooter": function() { return /* reexport safe */ _components_block_footer_js__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "BlockHeader": function() { return /* reexport safe */ _components_block_header_js__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "BlockTitle": function() { return /* reexport safe */ _components_block_title_js__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "Breadcrumbs": function() { return /* reexport safe */ _components_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "BreadcrumbsCollapsed": function() { return /* reexport safe */ _components_breadcrumbs_collapsed_js__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "BreadcrumbsItem": function() { return /* reexport safe */ _components_breadcrumbs_item_js__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "BreadcrumbsSeparator": function() { return /* reexport safe */ _components_breadcrumbs_separator_js__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "Button": function() { return /* reexport safe */ _components_button_js__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "Card": function() { return /* reexport safe */ _components_card_js__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   "CardContent": function() { return /* reexport safe */ _components_card_content_js__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "CardFooter": function() { return /* reexport safe */ _components_card_footer_js__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   "CardHeader": function() { return /* reexport safe */ _components_card_header_js__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   "Checkbox": function() { return /* reexport safe */ _components_checkbox_js__WEBPACK_IMPORTED_MODULE_25__["default"]; },
/* harmony export */   "Chip": function() { return /* reexport safe */ _components_chip_js__WEBPACK_IMPORTED_MODULE_26__["default"]; },
/* harmony export */   "Col": function() { return /* reexport safe */ _components_col_js__WEBPACK_IMPORTED_MODULE_27__["default"]; },
/* harmony export */   "Fab": function() { return /* reexport safe */ _components_fab_js__WEBPACK_IMPORTED_MODULE_31__["default"]; },
/* harmony export */   "FabBackdrop": function() { return /* reexport safe */ _components_fab_backdrop_js__WEBPACK_IMPORTED_MODULE_28__["default"]; },
/* harmony export */   "FabButton": function() { return /* reexport safe */ _components_fab_button_js__WEBPACK_IMPORTED_MODULE_29__["default"]; },
/* harmony export */   "FabButtons": function() { return /* reexport safe */ _components_fab_buttons_js__WEBPACK_IMPORTED_MODULE_30__["default"]; },
/* harmony export */   "Gauge": function() { return /* reexport safe */ _components_gauge_js__WEBPACK_IMPORTED_MODULE_32__["default"]; },
/* harmony export */   "Icon": function() { return /* reexport safe */ _components_icon_js__WEBPACK_IMPORTED_MODULE_33__["default"]; },
/* harmony export */   "Input": function() { return /* reexport safe */ _components_input_js__WEBPACK_IMPORTED_MODULE_34__["default"]; },
/* harmony export */   "Link": function() { return /* reexport safe */ _components_link_js__WEBPACK_IMPORTED_MODULE_35__["default"]; },
/* harmony export */   "List": function() { return /* reexport safe */ _components_list_js__WEBPACK_IMPORTED_MODULE_44__["default"]; },
/* harmony export */   "ListButton": function() { return /* reexport safe */ _components_list_button_js__WEBPACK_IMPORTED_MODULE_36__["default"]; },
/* harmony export */   "ListGroup": function() { return /* reexport safe */ _components_list_group_js__WEBPACK_IMPORTED_MODULE_37__["default"]; },
/* harmony export */   "ListIndex": function() { return /* reexport safe */ _components_list_index_js__WEBPACK_IMPORTED_MODULE_38__["default"]; },
/* harmony export */   "ListInput": function() { return /* reexport safe */ _components_list_input_js__WEBPACK_IMPORTED_MODULE_39__["default"]; },
/* harmony export */   "ListItem": function() { return /* reexport safe */ _components_list_item_js__WEBPACK_IMPORTED_MODULE_43__["default"]; },
/* harmony export */   "ListItemCell": function() { return /* reexport safe */ _components_list_item_cell_js__WEBPACK_IMPORTED_MODULE_40__["default"]; },
/* harmony export */   "ListItemContent": function() { return /* reexport safe */ _components_list_item_content_js__WEBPACK_IMPORTED_MODULE_41__["default"]; },
/* harmony export */   "ListItemRow": function() { return /* reexport safe */ _components_list_item_row_js__WEBPACK_IMPORTED_MODULE_42__["default"]; },
/* harmony export */   "LoginScreen": function() { return /* reexport safe */ _components_login_screen_js__WEBPACK_IMPORTED_MODULE_46__["default"]; },
/* harmony export */   "LoginScreenTitle": function() { return /* reexport safe */ _components_login_screen_title_js__WEBPACK_IMPORTED_MODULE_45__["default"]; },
/* harmony export */   "Menu": function() { return /* reexport safe */ _components_menu_js__WEBPACK_IMPORTED_MODULE_50__["default"]; },
/* harmony export */   "MenuDropdown": function() { return /* reexport safe */ _components_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_48__["default"]; },
/* harmony export */   "MenuDropdownItem": function() { return /* reexport safe */ _components_menu_dropdown_item_js__WEBPACK_IMPORTED_MODULE_47__["default"]; },
/* harmony export */   "MenuItem": function() { return /* reexport safe */ _components_menu_item_js__WEBPACK_IMPORTED_MODULE_49__["default"]; },
/* harmony export */   "Message": function() { return /* reexport safe */ _components_message_js__WEBPACK_IMPORTED_MODULE_51__["default"]; },
/* harmony export */   "Messagebar": function() { return /* reexport safe */ _components_messagebar_js__WEBPACK_IMPORTED_MODULE_57__["default"]; },
/* harmony export */   "MessagebarAttachment": function() { return /* reexport safe */ _components_messagebar_attachment_js__WEBPACK_IMPORTED_MODULE_52__["default"]; },
/* harmony export */   "MessagebarAttachments": function() { return /* reexport safe */ _components_messagebar_attachments_js__WEBPACK_IMPORTED_MODULE_53__["default"]; },
/* harmony export */   "MessagebarSheet": function() { return /* reexport safe */ _components_messagebar_sheet_js__WEBPACK_IMPORTED_MODULE_56__["default"]; },
/* harmony export */   "MessagebarSheetImage": function() { return /* reexport safe */ _components_messagebar_sheet_image_js__WEBPACK_IMPORTED_MODULE_54__["default"]; },
/* harmony export */   "MessagebarSheetItem": function() { return /* reexport safe */ _components_messagebar_sheet_item_js__WEBPACK_IMPORTED_MODULE_55__["default"]; },
/* harmony export */   "Messages": function() { return /* reexport safe */ _components_messages_js__WEBPACK_IMPORTED_MODULE_59__["default"]; },
/* harmony export */   "MessagesTitle": function() { return /* reexport safe */ _components_messages_title_js__WEBPACK_IMPORTED_MODULE_58__["default"]; },
/* harmony export */   "NavLeft": function() { return /* reexport safe */ _components_nav_left_js__WEBPACK_IMPORTED_MODULE_60__["default"]; },
/* harmony export */   "NavRight": function() { return /* reexport safe */ _components_nav_right_js__WEBPACK_IMPORTED_MODULE_61__["default"]; },
/* harmony export */   "NavTitle": function() { return /* reexport safe */ _components_nav_title_js__WEBPACK_IMPORTED_MODULE_63__["default"]; },
/* harmony export */   "NavTitleLarge": function() { return /* reexport safe */ _components_nav_title_large_js__WEBPACK_IMPORTED_MODULE_62__["default"]; },
/* harmony export */   "Navbar": function() { return /* reexport safe */ _components_navbar_js__WEBPACK_IMPORTED_MODULE_64__["default"]; },
/* harmony export */   "Page": function() { return /* reexport safe */ _components_page_js__WEBPACK_IMPORTED_MODULE_66__["default"]; },
/* harmony export */   "PageContent": function() { return /* reexport safe */ _components_page_content_js__WEBPACK_IMPORTED_MODULE_65__["default"]; },
/* harmony export */   "Panel": function() { return /* reexport safe */ _components_panel_js__WEBPACK_IMPORTED_MODULE_67__["default"]; },
/* harmony export */   "PhotoBrowser": function() { return /* reexport safe */ _components_photo_browser_js__WEBPACK_IMPORTED_MODULE_68__["default"]; },
/* harmony export */   "PieChart": function() { return /* reexport safe */ _components_pie_chart_js__WEBPACK_IMPORTED_MODULE_69__["default"]; },
/* harmony export */   "Popover": function() { return /* reexport safe */ _components_popover_js__WEBPACK_IMPORTED_MODULE_70__["default"]; },
/* harmony export */   "Popup": function() { return /* reexport safe */ _components_popup_js__WEBPACK_IMPORTED_MODULE_71__["default"]; },
/* harmony export */   "Preloader": function() { return /* reexport safe */ _components_preloader_js__WEBPACK_IMPORTED_MODULE_72__["default"]; },
/* harmony export */   "Progressbar": function() { return /* reexport safe */ _components_progressbar_js__WEBPACK_IMPORTED_MODULE_73__["default"]; },
/* harmony export */   "Radio": function() { return /* reexport safe */ _components_radio_js__WEBPACK_IMPORTED_MODULE_74__["default"]; },
/* harmony export */   "Range": function() { return /* reexport safe */ _components_range_js__WEBPACK_IMPORTED_MODULE_75__["default"]; },
/* harmony export */   "RoutableModals": function() { return /* reexport safe */ _components_routable_modals_js__WEBPACK_IMPORTED_MODULE_76__["default"]; },
/* harmony export */   "Row": function() { return /* reexport safe */ _components_row_js__WEBPACK_IMPORTED_MODULE_77__["default"]; },
/* harmony export */   "Searchbar": function() { return /* reexport safe */ _components_searchbar_js__WEBPACK_IMPORTED_MODULE_78__["default"]; },
/* harmony export */   "Segmented": function() { return /* reexport safe */ _components_segmented_js__WEBPACK_IMPORTED_MODULE_79__["default"]; },
/* harmony export */   "Sheet": function() { return /* reexport safe */ _components_sheet_js__WEBPACK_IMPORTED_MODULE_80__["default"]; },
/* harmony export */   "SkeletonAvatar": function() { return /* reexport safe */ _components_skeleton_avatar_js__WEBPACK_IMPORTED_MODULE_81__["default"]; },
/* harmony export */   "SkeletonBlock": function() { return /* reexport safe */ _components_skeleton_block_js__WEBPACK_IMPORTED_MODULE_82__["default"]; },
/* harmony export */   "SkeletonImage": function() { return /* reexport safe */ _components_skeleton_image_js__WEBPACK_IMPORTED_MODULE_83__["default"]; },
/* harmony export */   "SkeletonText": function() { return /* reexport safe */ _components_skeleton_text_js__WEBPACK_IMPORTED_MODULE_84__["default"]; },
/* harmony export */   "Stepper": function() { return /* reexport safe */ _components_stepper_js__WEBPACK_IMPORTED_MODULE_85__["default"]; },
/* harmony export */   "Subnavbar": function() { return /* reexport safe */ _components_subnavbar_js__WEBPACK_IMPORTED_MODULE_86__["default"]; },
/* harmony export */   "SwipeoutActions": function() { return /* reexport safe */ _components_swipeout_actions_js__WEBPACK_IMPORTED_MODULE_87__["default"]; },
/* harmony export */   "SwipeoutButton": function() { return /* reexport safe */ _components_swipeout_button_js__WEBPACK_IMPORTED_MODULE_88__["default"]; },
/* harmony export */   "Swiper": function() { return /* reexport safe */ _components_swiper_js__WEBPACK_IMPORTED_MODULE_90__["default"]; },
/* harmony export */   "SwiperSlide": function() { return /* reexport safe */ _components_swiper_slide_js__WEBPACK_IMPORTED_MODULE_89__["default"]; },
/* harmony export */   "Tab": function() { return /* reexport safe */ _components_tab_js__WEBPACK_IMPORTED_MODULE_91__["default"]; },
/* harmony export */   "Tabs": function() { return /* reexport safe */ _components_tabs_js__WEBPACK_IMPORTED_MODULE_92__["default"]; },
/* harmony export */   "TextEditor": function() { return /* reexport safe */ _components_text_editor_js__WEBPACK_IMPORTED_MODULE_93__["default"]; },
/* harmony export */   "Toggle": function() { return /* reexport safe */ _components_toggle_js__WEBPACK_IMPORTED_MODULE_94__["default"]; },
/* harmony export */   "Toolbar": function() { return /* reexport safe */ _components_toolbar_js__WEBPACK_IMPORTED_MODULE_95__["default"]; },
/* harmony export */   "Treeview": function() { return /* reexport safe */ _components_treeview_js__WEBPACK_IMPORTED_MODULE_97__["default"]; },
/* harmony export */   "TreeviewItem": function() { return /* reexport safe */ _components_treeview_item_js__WEBPACK_IMPORTED_MODULE_96__["default"]; },
/* harmony export */   "View": function() { return /* reexport safe */ _components_view_js__WEBPACK_IMPORTED_MODULE_98__["default"]; },
/* harmony export */   "Views": function() { return /* reexport safe */ _components_views_js__WEBPACK_IMPORTED_MODULE_99__["default"]; },
/* harmony export */   "f7": function() { return /* reexport safe */ _shared_f7_js__WEBPACK_IMPORTED_MODULE_100__.f7; },
/* harmony export */   "f7ready": function() { return /* reexport safe */ _shared_f7_js__WEBPACK_IMPORTED_MODULE_100__.f7ready; },
/* harmony export */   "theme": function() { return /* reexport safe */ _shared_f7_js__WEBPACK_IMPORTED_MODULE_100__.theme; },
/* harmony export */   "useStore": function() { return /* reexport safe */ _shared_use_store_js__WEBPACK_IMPORTED_MODULE_101__.useStore; }
/* harmony export */ });
/* harmony import */ var _shared_plugin_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./shared/plugin.js */ "./node_modules/framework7-react/shared/plugin.js");
/* harmony import */ var _shared_f7_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./shared/f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _shared_use_store_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./shared/use-store.js */ "./node_modules/framework7-react/shared/use-store.js");
/* harmony import */ var _components_accordion_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion-content.js */ "./node_modules/framework7-react/components/accordion-content.js");
/* harmony import */ var _components_accordion_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion-item.js */ "./node_modules/framework7-react/components/accordion-item.js");
/* harmony import */ var _components_accordion_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion-toggle.js */ "./node_modules/framework7-react/components/accordion-toggle.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion.js */ "./node_modules/framework7-react/components/accordion.js");
/* harmony import */ var _components_actions_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/actions-button.js */ "./node_modules/framework7-react/components/actions-button.js");
/* harmony import */ var _components_actions_group_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/actions-group.js */ "./node_modules/framework7-react/components/actions-group.js");
/* harmony import */ var _components_actions_label_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/actions-label.js */ "./node_modules/framework7-react/components/actions-label.js");
/* harmony import */ var _components_actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/actions.js */ "./node_modules/framework7-react/components/actions.js");
/* harmony import */ var _components_app_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/app.js */ "./node_modules/framework7-react/components/app.js");
/* harmony import */ var _components_appbar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/appbar.js */ "./node_modules/framework7-react/components/appbar.js");
/* harmony import */ var _components_area_chart_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/area-chart.js */ "./node_modules/framework7-react/components/area-chart.js");
/* harmony import */ var _components_badge_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/badge.js */ "./node_modules/framework7-react/components/badge.js");
/* harmony import */ var _components_block_footer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/block-footer.js */ "./node_modules/framework7-react/components/block-footer.js");
/* harmony import */ var _components_block_header_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/block-header.js */ "./node_modules/framework7-react/components/block-header.js");
/* harmony import */ var _components_block_title_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/block-title.js */ "./node_modules/framework7-react/components/block-title.js");
/* harmony import */ var _components_block_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/block.js */ "./node_modules/framework7-react/components/block.js");
/* harmony import */ var _components_breadcrumbs_collapsed_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/breadcrumbs-collapsed.js */ "./node_modules/framework7-react/components/breadcrumbs-collapsed.js");
/* harmony import */ var _components_breadcrumbs_item_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/breadcrumbs-item.js */ "./node_modules/framework7-react/components/breadcrumbs-item.js");
/* harmony import */ var _components_breadcrumbs_separator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/breadcrumbs-separator.js */ "./node_modules/framework7-react/components/breadcrumbs-separator.js");
/* harmony import */ var _components_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/breadcrumbs.js */ "./node_modules/framework7-react/components/breadcrumbs.js");
/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/button.js */ "./node_modules/framework7-react/components/button.js");
/* harmony import */ var _components_card_content_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/card-content.js */ "./node_modules/framework7-react/components/card-content.js");
/* harmony import */ var _components_card_footer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/card-footer.js */ "./node_modules/framework7-react/components/card-footer.js");
/* harmony import */ var _components_card_header_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/card-header.js */ "./node_modules/framework7-react/components/card-header.js");
/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/card.js */ "./node_modules/framework7-react/components/card.js");
/* harmony import */ var _components_checkbox_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/checkbox.js */ "./node_modules/framework7-react/components/checkbox.js");
/* harmony import */ var _components_chip_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/chip.js */ "./node_modules/framework7-react/components/chip.js");
/* harmony import */ var _components_col_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/col.js */ "./node_modules/framework7-react/components/col.js");
/* harmony import */ var _components_fab_backdrop_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/fab-backdrop.js */ "./node_modules/framework7-react/components/fab-backdrop.js");
/* harmony import */ var _components_fab_button_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/fab-button.js */ "./node_modules/framework7-react/components/fab-button.js");
/* harmony import */ var _components_fab_buttons_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/fab-buttons.js */ "./node_modules/framework7-react/components/fab-buttons.js");
/* harmony import */ var _components_fab_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/fab.js */ "./node_modules/framework7-react/components/fab.js");
/* harmony import */ var _components_gauge_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/gauge.js */ "./node_modules/framework7-react/components/gauge.js");
/* harmony import */ var _components_icon_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/icon.js */ "./node_modules/framework7-react/components/icon.js");
/* harmony import */ var _components_input_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/input.js */ "./node_modules/framework7-react/components/input.js");
/* harmony import */ var _components_link_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/link.js */ "./node_modules/framework7-react/components/link.js");
/* harmony import */ var _components_list_button_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/list-button.js */ "./node_modules/framework7-react/components/list-button.js");
/* harmony import */ var _components_list_group_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/list-group.js */ "./node_modules/framework7-react/components/list-group.js");
/* harmony import */ var _components_list_index_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/list-index.js */ "./node_modules/framework7-react/components/list-index.js");
/* harmony import */ var _components_list_input_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/list-input.js */ "./node_modules/framework7-react/components/list-input.js");
/* harmony import */ var _components_list_item_cell_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/list-item-cell.js */ "./node_modules/framework7-react/components/list-item-cell.js");
/* harmony import */ var _components_list_item_content_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/list-item-content.js */ "./node_modules/framework7-react/components/list-item-content.js");
/* harmony import */ var _components_list_item_row_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/list-item-row.js */ "./node_modules/framework7-react/components/list-item-row.js");
/* harmony import */ var _components_list_item_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/list-item.js */ "./node_modules/framework7-react/components/list-item.js");
/* harmony import */ var _components_list_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/list.js */ "./node_modules/framework7-react/components/list.js");
/* harmony import */ var _components_login_screen_title_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/login-screen-title.js */ "./node_modules/framework7-react/components/login-screen-title.js");
/* harmony import */ var _components_login_screen_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/login-screen.js */ "./node_modules/framework7-react/components/login-screen.js");
/* harmony import */ var _components_menu_dropdown_item_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/menu-dropdown-item.js */ "./node_modules/framework7-react/components/menu-dropdown-item.js");
/* harmony import */ var _components_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/menu-dropdown.js */ "./node_modules/framework7-react/components/menu-dropdown.js");
/* harmony import */ var _components_menu_item_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/menu-item.js */ "./node_modules/framework7-react/components/menu-item.js");
/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/menu.js */ "./node_modules/framework7-react/components/menu.js");
/* harmony import */ var _components_message_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/message.js */ "./node_modules/framework7-react/components/message.js");
/* harmony import */ var _components_messagebar_attachment_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/messagebar-attachment.js */ "./node_modules/framework7-react/components/messagebar-attachment.js");
/* harmony import */ var _components_messagebar_attachments_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/messagebar-attachments.js */ "./node_modules/framework7-react/components/messagebar-attachments.js");
/* harmony import */ var _components_messagebar_sheet_image_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/messagebar-sheet-image.js */ "./node_modules/framework7-react/components/messagebar-sheet-image.js");
/* harmony import */ var _components_messagebar_sheet_item_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/messagebar-sheet-item.js */ "./node_modules/framework7-react/components/messagebar-sheet-item.js");
/* harmony import */ var _components_messagebar_sheet_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/messagebar-sheet.js */ "./node_modules/framework7-react/components/messagebar-sheet.js");
/* harmony import */ var _components_messagebar_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/messagebar.js */ "./node_modules/framework7-react/components/messagebar.js");
/* harmony import */ var _components_messages_title_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/messages-title.js */ "./node_modules/framework7-react/components/messages-title.js");
/* harmony import */ var _components_messages_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/messages.js */ "./node_modules/framework7-react/components/messages.js");
/* harmony import */ var _components_nav_left_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/nav-left.js */ "./node_modules/framework7-react/components/nav-left.js");
/* harmony import */ var _components_nav_right_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/nav-right.js */ "./node_modules/framework7-react/components/nav-right.js");
/* harmony import */ var _components_nav_title_large_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/nav-title-large.js */ "./node_modules/framework7-react/components/nav-title-large.js");
/* harmony import */ var _components_nav_title_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/nav-title.js */ "./node_modules/framework7-react/components/nav-title.js");
/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/navbar.js */ "./node_modules/framework7-react/components/navbar.js");
/* harmony import */ var _components_page_content_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/page-content.js */ "./node_modules/framework7-react/components/page-content.js");
/* harmony import */ var _components_page_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/page.js */ "./node_modules/framework7-react/components/page.js");
/* harmony import */ var _components_panel_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/panel.js */ "./node_modules/framework7-react/components/panel.js");
/* harmony import */ var _components_photo_browser_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/photo-browser.js */ "./node_modules/framework7-react/components/photo-browser.js");
/* harmony import */ var _components_pie_chart_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/pie-chart.js */ "./node_modules/framework7-react/components/pie-chart.js");
/* harmony import */ var _components_popover_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/popover.js */ "./node_modules/framework7-react/components/popover.js");
/* harmony import */ var _components_popup_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/popup.js */ "./node_modules/framework7-react/components/popup.js");
/* harmony import */ var _components_preloader_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/preloader.js */ "./node_modules/framework7-react/components/preloader.js");
/* harmony import */ var _components_progressbar_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/progressbar.js */ "./node_modules/framework7-react/components/progressbar.js");
/* harmony import */ var _components_radio_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/radio.js */ "./node_modules/framework7-react/components/radio.js");
/* harmony import */ var _components_range_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/range.js */ "./node_modules/framework7-react/components/range.js");
/* harmony import */ var _components_routable_modals_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/routable-modals.js */ "./node_modules/framework7-react/components/routable-modals.js");
/* harmony import */ var _components_row_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/row.js */ "./node_modules/framework7-react/components/row.js");
/* harmony import */ var _components_searchbar_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/searchbar.js */ "./node_modules/framework7-react/components/searchbar.js");
/* harmony import */ var _components_segmented_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/segmented.js */ "./node_modules/framework7-react/components/segmented.js");
/* harmony import */ var _components_sheet_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/sheet.js */ "./node_modules/framework7-react/components/sheet.js");
/* harmony import */ var _components_skeleton_avatar_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./components/skeleton-avatar.js */ "./node_modules/framework7-react/components/skeleton-avatar.js");
/* harmony import */ var _components_skeleton_block_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/skeleton-block.js */ "./node_modules/framework7-react/components/skeleton-block.js");
/* harmony import */ var _components_skeleton_image_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./components/skeleton-image.js */ "./node_modules/framework7-react/components/skeleton-image.js");
/* harmony import */ var _components_skeleton_text_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./components/skeleton-text.js */ "./node_modules/framework7-react/components/skeleton-text.js");
/* harmony import */ var _components_stepper_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./components/stepper.js */ "./node_modules/framework7-react/components/stepper.js");
/* harmony import */ var _components_subnavbar_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./components/subnavbar.js */ "./node_modules/framework7-react/components/subnavbar.js");
/* harmony import */ var _components_swipeout_actions_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./components/swipeout-actions.js */ "./node_modules/framework7-react/components/swipeout-actions.js");
/* harmony import */ var _components_swipeout_button_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./components/swipeout-button.js */ "./node_modules/framework7-react/components/swipeout-button.js");
/* harmony import */ var _components_swiper_slide_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./components/swiper-slide.js */ "./node_modules/framework7-react/components/swiper-slide.js");
/* harmony import */ var _components_swiper_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./components/swiper.js */ "./node_modules/framework7-react/components/swiper.js");
/* harmony import */ var _components_tab_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./components/tab.js */ "./node_modules/framework7-react/components/tab.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./components/tabs.js */ "./node_modules/framework7-react/components/tabs.js");
/* harmony import */ var _components_text_editor_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./components/text-editor.js */ "./node_modules/framework7-react/components/text-editor.js");
/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./components/toggle.js */ "./node_modules/framework7-react/components/toggle.js");
/* harmony import */ var _components_toolbar_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./components/toolbar.js */ "./node_modules/framework7-react/components/toolbar.js");
/* harmony import */ var _components_treeview_item_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./components/treeview-item.js */ "./node_modules/framework7-react/components/treeview-item.js");
/* harmony import */ var _components_treeview_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./components/treeview.js */ "./node_modules/framework7-react/components/treeview.js");
/* harmony import */ var _components_view_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./components/view.js */ "./node_modules/framework7-react/components/view.js");
/* harmony import */ var _components_views_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./components/views.js */ "./node_modules/framework7-react/components/views.js");
/**
 * Framework7 React 7.0.7
 * Build full featured iOS & Android apps using Framework7 & React
 * https://framework7.io/react/
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 15, 2022
 */











































































































/* harmony default export */ __webpack_exports__["default"] = (_shared_plugin_js__WEBPACK_IMPORTED_MODULE_102__["default"]);


/***/ }),

/***/ "./node_modules/framework7-react/shared/components-router.js":
/*!*******************************************************************!*\
  !*** ./node_modules/framework7-react/shared/components-router.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _f7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* harmony import */ var _router_open_in_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-open-in.js */ "./node_modules/framework7-react/shared/router-open-in.js");
/* eslint no-underscore-dangle: "off" */




const getChildrenArray = el => {
  const arr = [];

  for (let i = 0; i < el.children.length; i += 1) {
    arr.push(el.children[i]);
  }

  return arr;
};

const hasSameChildren = (childrenBefore, childrenAfter) => {
  if (childrenBefore.length !== childrenAfter.length) return false;
  const set = new Set([...childrenBefore, ...childrenAfter]);
  if (set.size === childrenBefore.length) return true;
  return false;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  proto: {
    openIn(router, navigateUrl, options) {
      return (0,_router_open_in_js__WEBPACK_IMPORTED_MODULE_0__.routerOpenIn)(router, navigateUrl, options);
    },

    pageComponentLoader(_ref) {
      let {
        routerEl,
        component,
        options,
        resolve,
        reject
      } = _ref;
      const router = this;
      const routerId = router.id;
      const el = routerEl;
      let viewRouter;
      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.views.forEach(data => {
        if (data.el && data.el === routerEl || data.routerId && data.routerId === routerId) {
          viewRouter = data;
        }
      });

      if (!viewRouter) {
        reject();
        return;
      }

      const pageData = {
        component,
        id: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getComponentId)(),
        props: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
          f7route: options.route,
          f7router: router
        }, options.route.params, options.props || {})
      };
      let resolved;
      const childrenBefore = getChildrenArray(el);

      function onDidUpdate(componentRouterData) {
        if (componentRouterData !== viewRouter || resolved) return;
        const childrenAfter = getChildrenArray(el);
        if (hasSameChildren(childrenBefore, childrenAfter)) return;
        _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7events.off('viewRouterDidUpdate', onDidUpdate);
        const pageEl = el.children[el.children.length - 1];
        pageData.el = pageEl;
        resolve(pageEl);
        resolved = true;
      }

      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7events.on('viewRouterDidUpdate', onDidUpdate);
      viewRouter.pages.push(pageData);
      viewRouter.setPages(viewRouter.pages);
    },

    removePage($pageEl) {
      if (!$pageEl) return;
      const router = this;
      let f7Page;
      if ('length' in $pageEl && $pageEl[0]) f7Page = $pageEl[0].f7Page;else f7Page = $pageEl.f7Page;

      if (f7Page && f7Page.route && f7Page.route.route && f7Page.route.route.keepAlive) {
        router.app.$($pageEl).remove();
        return;
      }

      let viewRouter;
      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.views.forEach(data => {
        if (data.el && data.el === router.el) {
          viewRouter = data;
        }
      });
      let pageEl;

      if ('length' in $pageEl) {
        // Dom7
        if ($pageEl.length === 0) return;
        pageEl = $pageEl[0];
      } else {
        pageEl = $pageEl;
      }

      if (!pageEl) return;
      let pageComponentFound;
      viewRouter.pages.forEach((page, index) => {
        if (page.el === pageEl) {
          pageComponentFound = true;
          viewRouter.pages.splice(index, 1);
          viewRouter.setPages(viewRouter.pages);
        }
      });

      if (!pageComponentFound) {
        pageEl.parentNode.removeChild(pageEl);
      }
    },

    tabComponentLoader(_temp) {
      let {
        tabEl,
        component,
        options,
        resolve,
        reject
      } = _temp === void 0 ? {} : _temp;
      const router = this;
      if (!tabEl) reject();
      let tabRouter;
      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.tabs.forEach(tabData => {
        if (tabData.el && tabData.el === tabEl) {
          tabRouter = tabData;
        }
      });

      if (!tabRouter) {
        reject();
        return;
      }

      const id = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getComponentId)();
      const tabContent = {
        id,
        component,
        props: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
          f7route: options.route,
          f7router: router
        }, options.route.route && options.route.route.tab && options.route.route.tab.options && options.route.route.tab.options.props || {}, options.route.params, options.props || {})
      };
      let resolved;

      function onDidUpdate(componentRouterData) {
        if (componentRouterData !== tabRouter || resolved) return;
        _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7events.off('tabRouterDidUpdate', onDidUpdate);
        const tabContentEl = tabEl.children[0];
        resolve(tabContentEl);
        resolved = true;
      }

      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7events.on('tabRouterDidUpdate', onDidUpdate);
      tabRouter.setTabContent(tabContent);
    },

    removeTabContent(tabEl) {
      if (!tabEl) return;
      let tabRouter;
      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.tabs.forEach(tabData => {
        if (tabData.el && tabData.el === tabEl) {
          tabRouter = tabData;
        }
      });

      if (!tabRouter) {
        tabEl.innerHTML = ''; // eslint-disable-line

        return;
      }

      tabRouter.setTabContent(null);
    },

    modalComponentLoader(_temp2) {
      let {
        component,
        options,
        resolve,
        reject
      } = _temp2 === void 0 ? {} : _temp2;
      const router = this;
      const modalsRouter = _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.modals;

      if (!modalsRouter) {
        reject();
        return;
      }

      const modalData = {
        component,
        id: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getComponentId)(),
        props: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
          f7route: options.route,
          f7router: router
        }, options.route.params, options.props || {})
      };
      let resolved;

      function onDidUpdate() {
        if (resolved) return;
        _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7events.off('modalsRouterDidUpdate', onDidUpdate);
        const modalEl = modalsRouter.el.children[modalsRouter.el.children.length - 1];
        modalData.el = modalEl;
        resolve(modalEl);
        resolved = true;
      }

      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7events.on('modalsRouterDidUpdate', onDidUpdate);
      modalsRouter.modals.push(modalData);
      modalsRouter.setModals(modalsRouter.modals);
    },

    removeModal(modalEl) {
      const modalsRouter = _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7routers.modals;
      if (!modalsRouter) return;
      let modalDataToRemove;
      modalsRouter.modals.forEach(modalData => {
        if (modalData.el === modalEl) modalDataToRemove = modalData;
      });
      modalsRouter.modals.splice(modalsRouter.modals.indexOf(modalDataToRemove), 1);
      modalsRouter.setModals(modalsRouter.modals);
    }

  }
});

/***/ }),

/***/ "./node_modules/framework7-react/shared/f7.js":
/*!****************************************************!*\
  !*** ./node_modules/framework7-react/shared/f7.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f7": function() { return /* binding */ f7; },
/* harmony export */   "f7events": function() { return /* binding */ f7events; },
/* harmony export */   "f7init": function() { return /* binding */ f7init; },
/* harmony export */   "f7initEvents": function() { return /* binding */ f7initEvents; },
/* harmony export */   "f7ready": function() { return /* binding */ f7ready; },
/* harmony export */   "f7routers": function() { return /* binding */ f7routers; },
/* harmony export */   "setTheme": function() { return /* binding */ setTheme; },
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
/* harmony import */ var framework7_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framework7/lite */ "./node_modules/framework7/framework7-lite.esm.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framework7-react/shared/utils.js");
/* eslint-disable import/no-mutable-exports */


let f7;
let f7events;
const theme = {};
const f7routers = {
  views: [],
  tabs: [],
  modals: null
};

const setTheme = () => {
  if (!f7) return;
  theme.ios = f7.theme === 'ios';
  theme.md = f7.theme === 'md';
  theme.aurora = f7.theme === 'aurora';
};

const cleanup = () => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.unsetRouterIds)();
  delete theme.ios;
  delete theme.md;
  delete theme.aurora;
  f7routers.views = [];
  f7routers.tabs = [];
  f7routers.modals = null;
};

const f7initEvents = () => {
  f7events = new framework7_lite__WEBPACK_IMPORTED_MODULE_1__["default"].Events();
};

const f7init = function (rootEl, params, init) {
  if (params === void 0) {
    params = {};
  }

  if (init === void 0) {
    init = true;
  }

  const f7Params = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)({}, params, {
    el: rootEl,
    init
  });
  if (typeof params.store !== 'undefined') f7Params.store = params.store;
  if (!f7Params.routes) f7Params.routes = [];

  if (f7Params.userAgent && (f7Params.theme === 'auto' || !f7Params.theme)) {
    const device = framework7_lite__WEBPACK_IMPORTED_MODULE_1__["default"].getDevice({
      userAgent: f7Params.userAgent
    }, true);
    theme.ios = !!device.ios;
    theme.aurora = device.desktop && device.electron;
    theme.md = !theme.ios && !theme.aurora;
  } // eslint-disable-next-line


  if (f7 && typeof window !== 'undefined') return; // eslint-disable-next-line

  if (typeof window === 'undefined') cleanup();
  const instance = new framework7_lite__WEBPACK_IMPORTED_MODULE_1__["default"](f7Params);
  f7 = instance;
  setTheme();

  if (instance.initialized) {
    f7 = instance;
    f7events.emit('ready', f7);
  } else {
    instance.on('init', () => {
      f7 = instance;
      f7events.emit('ready', f7);
    });
  }
};

const f7ready = callback => {
  if (!callback) return;
  if (f7 && f7.initialized) callback(f7);else {
    f7events.once('ready', callback);
  }
};



/***/ }),

/***/ "./node_modules/framework7-react/shared/get-router-initial-component.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framework7-react/shared/get-router-initial-component.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRouterInitialComponent": function() { return /* binding */ getRouterInitialComponent; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framework7-react/shared/utils.js");

const getRouterInitialComponent = (router, initialComponent) => {
  let initialComponentData;
  const {
    initialUrl
  } = router.getInitialUrl();
  const initialRoute = router.findMatchingRoute(initialUrl);
  let routeProps = {};

  if (initialRoute && initialRoute.route && initialRoute.route.options) {
    routeProps = initialRoute.route.options.props;
  }

  const isMasterRoute = route => {
    if (route.master === true) return true;
    if (typeof route.master === 'function') return route.master(router.app);
    return false;
  };

  if (initialRoute && initialRoute.route && (initialRoute.route.component || initialRoute.route.asyncComponent) && !isMasterRoute(initialRoute.route)) {
    initialComponentData = {
      component: initialRoute.route.component || initialRoute.route.asyncComponent,
      initialComponent,
      id: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getComponentId)(),
      isAsync: !!initialRoute.route.asyncComponent,
      props: {
        f7route: initialRoute,
        f7router: router,
        ...routeProps,
        ...initialRoute.params
      }
    };
  }

  return {
    initialPage: initialComponentData,
    initialRoute
  };
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/list-context.js":
/*!**************************************************************!*\
  !*** ./node_modules/framework7-react/shared/list-context.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListContext": function() { return /* binding */ ListContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const ListContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  listIsMedia: false,
  listIsSimple: false,
  listIsSortable: false,
  listIsSortableOpposite: false
});


/***/ }),

/***/ "./node_modules/framework7-react/shared/mixins.js":
/*!********************************************************!*\
  !*** ./node_modules/framework7-react/shared/mixins.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionsAttrs": function() { return /* binding */ actionsAttrs; },
/* harmony export */   "actionsClasses": function() { return /* binding */ actionsClasses; },
/* harmony export */   "colorClasses": function() { return /* binding */ colorClasses; },
/* harmony export */   "routerAttrs": function() { return /* binding */ routerAttrs; },
/* harmony export */   "routerClasses": function() { return /* binding */ routerClasses; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framework7-react/shared/utils.js");

function colorClasses(props) {
  const {
    color,
    colorTheme,
    textColor,
    bgColor,
    borderColor,
    rippleColor,
    dark
  } = props;
  return {
    dark,
    [`color-${color}`]: color,
    [`color-theme-${colorTheme}`]: colorTheme,
    [`text-color-${textColor}`]: textColor,
    [`bg-color-${bgColor}`]: bgColor,
    [`border-color-${borderColor}`]: borderColor,
    [`ripple-color-${rippleColor}`]: rippleColor
  };
}
function routerAttrs(props) {
  const {
    force,
    reloadCurrent,
    reloadPrevious,
    reloadAll,
    reloadDetail,
    animate,
    ignoreCache,
    routeTabId,
    view,
    transition,
    openIn
  } = props;
  let dataAnimate;

  if ('animate' in props && typeof animate !== 'undefined') {
    dataAnimate = animate.toString();
  }

  let dataReloadDetail;

  if ('reloadDetail' in props && typeof reloadDetail !== 'undefined') {
    dataReloadDetail = reloadDetail.toString();
  }

  return {
    'data-force': force || undefined,
    'data-reload-current': reloadCurrent || undefined,
    'data-reload-all': reloadAll || undefined,
    'data-reload-previous': reloadPrevious || undefined,
    'data-reload-detail': dataReloadDetail,
    'data-animate': dataAnimate,
    'data-ignore-cache': ignoreCache || undefined,
    'data-route-tab-id': routeTabId || undefined,
    'data-view': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(view) ? view : undefined,
    'data-transition': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(transition) ? transition : undefined,
    'data-open-in': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(openIn) ? openIn : undefined
  };
}
function routerClasses(props) {
  const {
    back,
    linkBack,
    external,
    preventRouter
  } = props;
  return {
    back: back || linkBack,
    external,
    'prevent-router': preventRouter
  };
}
function actionsAttrs(props) {
  const {
    searchbarEnable,
    searchbarDisable,
    searchbarClear,
    searchbarToggle,
    panelOpen,
    panelClose,
    panelToggle,
    popupOpen,
    popupClose,
    actionsOpen,
    actionsClose,
    popoverOpen,
    popoverClose,
    loginScreenOpen,
    loginScreenClose,
    sheetOpen,
    sheetClose,
    sortableEnable,
    sortableDisable,
    sortableToggle,
    cardOpen,
    cardClose
  } = props;
  return {
    'data-searchbar': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(searchbarEnable) && searchbarEnable || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(searchbarDisable) && searchbarDisable || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(searchbarClear) && searchbarClear || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(searchbarToggle) && searchbarToggle || undefined,
    'data-panel': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(panelOpen) && panelOpen || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(panelClose) && panelClose || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(panelToggle) && panelToggle || undefined,
    'data-popup': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(popupOpen) && popupOpen || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(popupClose) && popupClose || undefined,
    'data-actions': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(actionsOpen) && actionsOpen || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(actionsClose) && actionsClose || undefined,
    'data-popover': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(popoverOpen) && popoverOpen || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(popoverClose) && popoverClose || undefined,
    'data-sheet': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(sheetOpen) && sheetOpen || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(sheetClose) && sheetClose || undefined,
    'data-login-screen': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(loginScreenOpen) && loginScreenOpen || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(loginScreenClose) && loginScreenClose || undefined,
    'data-sortable': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(sortableEnable) && sortableEnable || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(sortableDisable) && sortableDisable || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(sortableToggle) && sortableToggle || undefined,
    'data-card': (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(cardOpen) && cardOpen || (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isStringProp)(cardClose) && cardClose || undefined
  };
}
function actionsClasses(props) {
  const {
    searchbarEnable,
    searchbarDisable,
    searchbarClear,
    searchbarToggle,
    panelOpen,
    panelClose,
    panelToggle,
    popupOpen,
    popupClose,
    actionsClose,
    actionsOpen,
    popoverOpen,
    popoverClose,
    loginScreenOpen,
    loginScreenClose,
    sheetOpen,
    sheetClose,
    sortableEnable,
    sortableDisable,
    sortableToggle,
    cardOpen,
    cardPreventOpen,
    cardClose,
    menuClose
  } = props;
  return {
    'searchbar-enable': searchbarEnable || searchbarEnable === '',
    'searchbar-disable': searchbarDisable || searchbarDisable === '',
    'searchbar-clear': searchbarClear || searchbarClear === '',
    'searchbar-toggle': searchbarToggle || searchbarToggle === '',
    'panel-close': panelClose || panelClose === '',
    'panel-open': panelOpen || panelOpen === '',
    'panel-toggle': panelToggle || panelToggle === '',
    'popup-close': popupClose || popupClose === '',
    'popup-open': popupOpen || popupOpen === '',
    'actions-close': actionsClose || actionsClose === '',
    'actions-open': actionsOpen || actionsOpen === '',
    'popover-close': popoverClose || popoverClose === '',
    'popover-open': popoverOpen || popoverOpen === '',
    'sheet-close': sheetClose || sheetClose === '',
    'sheet-open': sheetOpen || sheetOpen === '',
    'login-screen-close': loginScreenClose || loginScreenClose === '',
    'login-screen-open': loginScreenOpen || loginScreenOpen === '',
    'sortable-enable': sortableEnable || sortableEnable === '',
    'sortable-disable': sortableDisable || sortableDisable === '',
    'sortable-toggle': sortableToggle || sortableToggle === '',
    'card-close': cardClose || cardClose === '',
    'card-open': cardOpen || cardOpen === '',
    'card-prevent-open': cardPreventOpen || cardPreventOpen === '',
    'menu-close': menuClose || menuClose === ''
  };
}

/***/ }),

/***/ "./node_modules/framework7-react/shared/modal-state-classes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-react/shared/modal-state-classes.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalStateClasses": function() { return /* binding */ modalStateClasses; }
/* harmony export */ });
const modalStateClasses = function (_temp) {
  let {
    isOpened,
    isClosing
  } = _temp === void 0 ? {} : _temp;
  return {
    'modal-in': isOpened.current && !isClosing.current,
    'modal-out': isClosing.current
  };
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/plugin.js":
/*!********************************************************!*\
  !*** ./node_modules/framework7-react/shared/plugin.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f7": function() { return /* reexport safe */ _f7_js__WEBPACK_IMPORTED_MODULE_0__.f7; },
/* harmony export */   "f7ready": function() { return /* reexport safe */ _f7_js__WEBPACK_IMPORTED_MODULE_0__.f7ready; },
/* harmony export */   "theme": function() { return /* reexport safe */ _f7_js__WEBPACK_IMPORTED_MODULE_0__.theme; }
/* harmony export */ });
/* harmony import */ var framework7_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framework7/lite */ "./node_modules/framework7/framework7-lite.esm.js");
/* harmony import */ var _components_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components-router.js */ "./node_modules/framework7-react/shared/components-router.js");
/* harmony import */ var _f7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f7.js */ "./node_modules/framework7-react/shared/f7.js");



const Framework7React = {
  name: 'reactPlugin',
  installed: false,

  install(params) {
    if (params === void 0) {
      params = {};
    }

    if (Framework7React.installed) return;
    Framework7React.installed = true;
    (0,_f7_js__WEBPACK_IMPORTED_MODULE_0__.f7initEvents)();
    const {
      theme: paramsTheme,
      userAgent
    } = params;
    if (paramsTheme === 'md') _f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.md = true;
    if (paramsTheme === 'ios') _f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.ios = true;
    if (paramsTheme === 'aurora') _f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.aurora = true; // eslint-disable-next-line

    const needThemeCalc = typeof window === 'undefined' ? !!userAgent : true;

    if (needThemeCalc && (!paramsTheme || paramsTheme === 'auto')) {
      const device = framework7_lite__WEBPACK_IMPORTED_MODULE_1__["default"].getDevice({
        userAgent
      }, true);
      _f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.ios = !!device.ios;
      _f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.aurora = device.desktop && device.electron;
      _f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.md = !_f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.ios && !_f7_js__WEBPACK_IMPORTED_MODULE_0__.theme.aurora;
    }

    (0,_f7_js__WEBPACK_IMPORTED_MODULE_0__.f7ready)(() => {
      (0,_f7_js__WEBPACK_IMPORTED_MODULE_0__.setTheme)();
    });
    framework7_lite__WEBPACK_IMPORTED_MODULE_1__["default"].Router.use(_components_router_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (Framework7React);

/***/ }),

/***/ "./node_modules/framework7-react/shared/router-context.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/shared/router-context.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterContext": function() { return /* binding */ RouterContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const RouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  route: null,
  router: null
});


/***/ }),

/***/ "./node_modules/framework7-react/shared/router-open-in.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/shared/router-open-in.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routerOpenIn": function() { return /* binding */ routerOpenIn; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/popup.js */ "./node_modules/framework7-react/components/popup.js");
/* harmony import */ var _components_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/view.js */ "./node_modules/framework7-react/components/view.js");
/* harmony import */ var _components_login_screen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login-screen.js */ "./node_modules/framework7-react/components/login-screen.js");
/* harmony import */ var _components_sheet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sheet.js */ "./node_modules/framework7-react/components/sheet.js");
/* harmony import */ var _components_popover_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/popover.js */ "./node_modules/framework7-react/components/popover.js");
/* harmony import */ var _components_panel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/panel.js */ "./node_modules/framework7-react/components/panel.js");







const routerOpenIn = (router, url, options) => {
  const navigateOptions = {
    url,
    route: {
      path: url,
      options: { ...options,
        openIn: undefined
      }
    }
  };
  const params = { ...options
  };

  if (options.openIn === 'popup') {
    params.component = function DynamicPopup() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "popup-router-open-in",
        "data-url": url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_view_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        linksView: router.view.selector,
        url: url,
        ignoreOpenIn: true
      }));
    };

    navigateOptions.route.popup = params;
  }

  if (options.openIn === 'loginScreen') {
    params.component = function DynamicPopover() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_login_screen_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "login-screen-router-open-in",
        "data-url": url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_view_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        linksView: router.view.selector,
        url: url,
        ignoreOpenIn: true
      }));
    };

    navigateOptions.route.loginScreen = params;
  }

  if (options.openIn === 'sheet') {
    params.component = function DynamicSheet() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_sheet_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "sheet-modal-router-open-in",
        "data-url": url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_view_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        linksView: router.view.selector,
        url: url,
        ignoreOpenIn: true
      }));
    };

    navigateOptions.route.sheet = params;
  }

  if (options.openIn === 'popover') {
    params.targetEl = options.clickedEl || options.targetEl;

    params.component = function DynamicPopover() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_popover_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "popover-router-open-in",
        targetEl: options.clickedEl || options.targetEl,
        "data-url": url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_view_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        linksView: router.view.selector,
        url: url,
        ignoreOpenIn: true
      }));
    };

    navigateOptions.route.popover = params;
  }

  if (options.openIn.indexOf('panel') >= 0) {
    const parts = options.openIn.split(':');
    const side = parts[1] || 'left';
    const effect = parts[2] || 'cover';

    params.component = function DynamicPanel() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_panel_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        side: side,
        effect: effect,
        className: "panel-router-open-in",
        "data-url": url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_view_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        linksView: router.view.selector,
        url: url,
        ignoreOpenIn: true
      }));
    };

    navigateOptions.route.panel = params;
  }

  return router.navigate(navigateOptions);
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/tabbar-context.js":
/*!****************************************************************!*\
  !*** ./node_modules/framework7-react/shared/tabbar-context.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabbarContext": function() { return /* binding */ TabbarContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const TabbarContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  tabbarHasLabels: false
});


/***/ }),

/***/ "./node_modules/framework7-react/shared/use-async-component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-async-component.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAsyncComponent": function() { return /* binding */ useAsyncComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const useAsyncComponent = (component, props, key) => {
  const Component = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(component);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null,
    key: key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props));
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/use-icon.js":
/*!**********************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-icon.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIcon": function() { return /* binding */ useIcon; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/icon.js */ "./node_modules/framework7-react/components/icon.js");
/* harmony import */ var _components_badge_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/badge.js */ "./node_modules/framework7-react/components/badge.js");



const useIcon = function (props) {
  if (props === void 0) {
    props = {};
  }

  const {
    icon,
    iconMaterial,
    iconF7,
    iconMd,
    iconIos,
    iconAurora,
    iconColor,
    iconSize,
    iconBadge,
    badgeColor,
    iconBadgeColor
  } = props;

  if (icon || iconMaterial || iconF7 || iconMd || iconIos || iconAurora) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      material: iconMaterial,
      f7: iconF7,
      icon: icon,
      md: iconMd,
      ios: iconIos,
      aurora: iconAurora,
      color: iconColor,
      size: iconSize
    }, (iconBadge || iconBadge === 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_badge_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: badgeColor || iconBadgeColor
    }, iconBadge));
  }

  return null;
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js":
/*!******************************************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": function() { return /* binding */ useIsomorphicLayoutEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function useIsomorphicLayoutEffect(callback, deps) {
  // eslint-disable-next-line
  if (typeof window === 'undefined') return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(callback, deps);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(callback, deps);
}



/***/ }),

/***/ "./node_modules/framework7-react/shared/use-route-props.js":
/*!*****************************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-route-props.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRouteProps": function() { return /* binding */ useRouteProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const useRouteProps = function (elRef, _temp) {
  let {
    routeProps
  } = _temp === void 0 ? {} : _temp;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (elRef.current) {
      elRef.current.f7RouteProps = routeProps;
    }

    return () => {
      if (elRef.current && elRef.current.f7RouteProps) {
        delete elRef.current.f7RouteProps;
      }
    };
  }, [routeProps]);
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/use-smart-select.js":
/*!******************************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-smart-select.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSmartSelect": function() { return /* binding */ useSmartSelect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _f7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framework7-react/shared/utils.js");



const useSmartSelect = (smartSelect, smartSelectParams, f7SmartSelect, getEl) => {
  const onMount = () => {
    (0,_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7ready)(() => {
      if (smartSelect) {
        const ssParams = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
          el: getEl()
        }, smartSelectParams || {});
        f7SmartSelect.current = _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.smartSelect.create(ssParams);
      }
    });
  };

  const onDestroy = () => {
    if (f7SmartSelect.current && f7SmartSelect.current.destroy) {
      f7SmartSelect.current.destroy();
    }

    f7SmartSelect.current = null;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/use-store.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-store.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _f7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f7.js */ "./node_modules/framework7-react/shared/f7.js");


const useStore = function () {
  const assignedGetters = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}); // (store, getter)

  let store = arguments.length <= 0 ? undefined : arguments[0];
  let getter = arguments.length <= 1 ? undefined : arguments[1];

  if (arguments.length === 1) {
    // (getter)
    store = _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.store;
    getter = arguments.length <= 0 ? undefined : arguments[0];
  } // eslint-disable-next-line


  const obj = store._gettersPlain[getter];
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(obj.value);

  function onUpdated(newValue) {
    setValue(newValue);
  }

  if (!assignedGetters.current[getter]) {
    obj.onUpdated(onUpdated);
    assignedGetters.current[getter] = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      // eslint-disable-next-line
      store.__removeCallback(onUpdated);
    };
  }, []);
  return value;
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/use-tab.js":
/*!*********************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-tab.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTab": function() { return /* binding */ useTab; }
/* harmony export */ });
/* harmony import */ var _use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");
/* harmony import */ var _f7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f7.js */ "./node_modules/framework7-react/shared/f7.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/framework7-react/shared/utils.js");



const useTab = (elRef, props) => {
  const onTabShow = el => {
    if (elRef.current !== el) return;
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.emit)(props, 'tabShow', el);
  };

  const onTabHide = el => {
    if (elRef.current !== el) return;
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.emit)(props, 'tabHide', el);
  };

  const attachEvents = () => {
    if (!elRef.current) return;
    (0,_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7ready)(() => {
      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.on('tabShow', onTabShow);
      _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.on('tabHide', onTabHide);
    });
  };

  const detachEvents = () => {
    if (!_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7) return;
    _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.off('tabShow', onTabShow);
    _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.off('tabHide', onTabHide);
  };

  (0,_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    attachEvents();
    return detachEvents;
  });
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/use-theme.js":
/*!***********************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-theme.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTheme": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _f7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f7.js */ "./node_modules/framework7-react/shared/f7.js");


const useTheme = () => {
  const [t, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7 ? _f7_js__WEBPACK_IMPORTED_MODULE_1__.theme : null);

  if (!_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7) {
    (0,_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7ready)(() => {
      setTheme(_f7_js__WEBPACK_IMPORTED_MODULE_1__.theme);
    });
  }

  return t;
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/use-tooltip.js":
/*!*************************************************************!*\
  !*** ./node_modules/framework7-react/shared/use-tooltip.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTooltip": function() { return /* binding */ useTooltip; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _watch_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watch-prop.js */ "./node_modules/framework7-react/shared/watch-prop.js");
/* harmony import */ var _f7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f7.js */ "./node_modules/framework7-react/shared/f7.js");



const useTooltip = (elRef, props) => {
  const f7Tooltip = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    tooltip,
    tooltipTrigger
  } = props;

  const onMount = () => {
    if (!elRef.current) return;
    if (!tooltip) return;
    (0,_f7_js__WEBPACK_IMPORTED_MODULE_1__.f7ready)(() => {
      f7Tooltip.current = _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.tooltip.create({
        targetEl: elRef.current,
        text: tooltip,
        trigger: tooltipTrigger
      });
    });
  };

  const onDestroy = () => {
    if (f7Tooltip.current && f7Tooltip.current.destroy) {
      f7Tooltip.current.destroy();
      f7Tooltip.current = null;
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onMount();
    return onDestroy;
  }, []);
  (0,_watch_prop_js__WEBPACK_IMPORTED_MODULE_2__.watchProp)(tooltip, value => {
    if (!value && f7Tooltip.current) {
      f7Tooltip.current.destroy();
      f7Tooltip.current = null;
      return;
    }

    if (value && !f7Tooltip.current && _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7) {
      f7Tooltip.current = _f7_js__WEBPACK_IMPORTED_MODULE_1__.f7.tooltip.create({
        targetEl: elRef.current,
        text: value,
        trigger: tooltipTrigger
      });
      return;
    }

    if (!value || !f7Tooltip.current) return;
    f7Tooltip.current.setText(value);
  });
};

/***/ }),

/***/ "./node_modules/framework7-react/shared/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/framework7-react/shared/utils.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": function() { return /* binding */ classNames; },
/* harmony export */   "emit": function() { return /* binding */ emit; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "flattenArray": function() { return /* binding */ flattenArray; },
/* harmony export */   "getComponentId": function() { return /* binding */ getComponentId; },
/* harmony export */   "getExtraAttrs": function() { return /* binding */ getExtraAttrs; },
/* harmony export */   "getRouterId": function() { return /* binding */ getRouterId; },
/* harmony export */   "getSlots": function() { return /* binding */ getSlots; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "isStringProp": function() { return /* binding */ isStringProp; },
/* harmony export */   "noUndefinedProps": function() { return /* binding */ noUndefinedProps; },
/* harmony export */   "now": function() { return /* binding */ now; },
/* harmony export */   "unsetRouterIds": function() { return /* binding */ unsetRouterIds; }
/* harmony export */ });
function noUndefinedProps(obj) {
  const o = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] !== 'undefined') o[key] = obj[key];
  });
  return o;
}
function isStringProp(val) {
  return typeof val === 'string' && val !== '';
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}
function now() {
  return Date.now();
}
function extend() {
  let deep = true;
  let to;
  let from;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'boolean') {
    [deep, to] = args;
    args.splice(0, 2);
    from = args;
  } else {
    [to] = args;
    args.splice(0, 1);
    from = args;
  }

  for (let i = 0; i < from.length; i += 1) {
    const nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null) {
      const keysArray = Object.keys(Object(nextSource));

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (!deep) {
            to[nextKey] = nextSource[nextKey];
          } else if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            extend(to[nextKey], nextSource[nextKey]);
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            extend(to[nextKey], nextSource[nextKey]);
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}
function flattenArray() {
  const arr = [];

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  args.forEach(arg => {
    if (Array.isArray(arg)) arr.push(...flattenArray(...arg));else arr.push(arg);
  });
  return arr;
}
function classNames() {
  const classes = [];

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  args.forEach(arg => {
    if (typeof arg === 'object' && arg.constructor === Object) {
      Object.keys(arg).forEach(key => {
        if (arg[key]) classes.push(key);
      });
    } else if (arg) classes.push(arg);
  });
  const uniqueClasses = [];
  classes.forEach(c => {
    if (uniqueClasses.indexOf(c) < 0) uniqueClasses.push(c);
  });
  return uniqueClasses.join(' ');
}
function getSlots(props) {
  if (props === void 0) {
    props = {};
  }

  const slots = {};
  if (!props) return slots;
  const children = props.children;

  if (!children || children.length === 0) {
    return slots;
  }

  function addChildToSlot(name, child) {
    if (!slots[name]) slots[name] = [];
    slots[name].push(child);
  }

  if (Array.isArray(children)) {
    children.forEach(child => {
      if (!child) return;
      const slotName = child.props && child.props.slot || 'default';
      addChildToSlot(slotName, child);
    });
  } else {
    let slotName = 'default';
    if (children.props && children.props.slot) slotName = children.props.slot;
    addChildToSlot(slotName, children);
  }

  return slots;
}
function emit(props, events) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }

  if (!events || !events.trim().length || typeof events !== 'string') return;
  events.trim().split(' ').forEach(event => {
    let eventName = (event || '').trim();
    if (!eventName) return;
    eventName = eventName.charAt(0).toUpperCase() + eventName.slice(1);
    const propName = `on${eventName}`;
    if (props[propName]) props[propName](...args);
  });
}
function getExtraAttrs(props) {
  if (props === void 0) {
    props = {};
  }

  const extraAttrs = {};
  Object.keys(props).forEach(key => {
    if (key.indexOf('data-') === 0 || key.indexOf('aria-') === 0 || key === 'role') {
      extraAttrs[key] = props[key];
    }
  });
  return extraAttrs;
}
let routerIdCounter = 0;
let routerComponentIdCounter = 0;
function unsetRouterIds() {
  routerIdCounter = 0;
  routerComponentIdCounter = 0;
}
function getRouterId() {
  routerIdCounter += 1;
  return `${now()}_${routerIdCounter}`;
}
function getComponentId() {
  routerComponentIdCounter += 1;
  return `${now()}_${routerComponentIdCounter}`;
}

/***/ }),

/***/ "./node_modules/framework7-react/shared/watch-prop.js":
/*!************************************************************!*\
  !*** ./node_modules/framework7-react/shared/watch-prop.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "watchProp": function() { return /* binding */ watchProp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-isomorphic-layout-effect.js */ "./node_modules/framework7-react/shared/use-isomorphic-layout-effect.js");


const watchProp = (value, callback) => {
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,_use_isomorphic_layout_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(() => {
    if (value !== valueRef.current && callback) {
      callback(value, valueRef.current);
    }

    valueRef.current = value;
  }, [value]);
};

/***/ })

}]);
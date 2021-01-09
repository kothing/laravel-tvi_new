(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_admin_cms_page_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InputGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InputGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InputGroup",
  model: {
    prop: 'inputValue'
  },
  props: {
    errorClass: {
      "default": 'mt-1 text-red-500 text-sm',
      type: String
    },
    errorHideOnInput: {
      "default": true,
      type: Boolean
    },
    errorMessage: {
      "default": '',
      type: false | String
    },
    inputAutocomplete: {
      "default": '',
      type: String
    },
    inputAutofocus: {
      "default": false,
      type: Boolean
    },
    inputClass: {
      "default": 'border border-theme-base-subtle font-medium px-3 py-2 rounded w-full focus:border-theme-primary focus:outline-none focus:ring-0',
      type: String
    },
    inputDisabled: {
      "default": false,
      type: Boolean
    },
    inputId: {
      required: true,
      type: String
    },
    inputMax: {
      "default": '',
      type: String | Number
    },
    inputMaxLength: {
      "default": '',
      type: String | Number
    },
    inputMin: {
      "default": '',
      type: String | Number
    },
    inputMinLength: {
      "default": '',
      type: String | Number
    },
    inputName: {
      required: true,
      type: String
    },
    inputPlaceholder: {
      "default": '',
      type: String
    },
    inputRequired: {
      "default": false,
      type: Boolean
    },
    inputType: {
      "default": 'text',
      type: String
    },
    inputValue: {
      "default": '',
      type: String | Number
    },
    labelClass: {
      "default": 'font-medium mb-2 text-theme-base-contrast text-sm tracking-wider',
      type: String
    },
    labelHidden: {
      "default": false,
      type: Boolean
    },
    labelText: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      hideError: false
    };
  },
  computed: {
    formattedInputClass: function formattedInputClass() {
      if (this.isError) {
        return this.inputClass + ' error';
      }

      return this.inputClass;
    },
    formattedLabelClass: function formattedLabelClass() {
      var labelClass = this.labelClass;

      if (this.labelHidden) {
        labelClass += ' hidden';
      }

      return labelClass;
    },
    isError: function isError() {
      return !this.hideError && this.errorMessage && this.errorMessage !== '';
    }
  },
  mounted: function mounted() {
    this.autofocus();
  },
  methods: {
    autofocus: function autofocus() {
      var _this = this;

      if (this.inputAutofocus && this.$refs[this.inputId]) {
        this.$nextTick(function () {
          _this.$refs[_this.inputId].focus();
        });
      }
    },
    blurInput: function blurInput() {
      var _this2 = this;

      if (this.$refs[this.inputId]) {
        this.$nextTick(function () {
          _this2.$refs[_this2.inputId].blur();
        });
      }
    },
    onErrorMessageChange: function onErrorMessageChange() {
      this.hideError = false;
    },
    onInputBlur: function onInputBlur() {
      this.$emit('blur');
    },
    onInputKeyPress: function onInputKeyPress() {
      this.$emit('input', this.$refs[this.inputId].value);

      if (this.errorHideOnInput) {
        this.hideError = true;
      }
    }
  },
  watch: {
    errorMessage: {
      handler: "onErrorMessageChange"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/SelectGroup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/SelectGroup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SelectGroup',
  model: {
    prop: 'selectValue'
  },
  props: {
    errorClass: {
      "default": 'mt-1 text-red-500 text-sm',
      type: String
    },
    errorHideOnSelect: {
      "default": true,
      type: Boolean
    },
    errorMessage: {
      "default": '',
      type: String
    },
    selectAnyEnabled: {
      "default": false,
      type: Boolean
    },
    selectAnyLabel: {
      "default": "Any",
      type: String
    },
    selectAnyClass: {
      "default": "",
      type: String
    },
    selectAnyValue: {
      "default": ''
    },
    selectAutoFocus: {
      "default": false,
      type: Boolean
    },
    selectClass: {
      "default": 'border border-theme-base-subtle cursor-pointer font-medium form-select px-3 py-2 rounded w-full focus:border-theme-primary focus:outline-none focus:ring-0 focus:shadow-none',
      type: String
    },
    selectDisabled: {
      "default": false,
      type: Boolean
    },
    selectId: {
      required: true,
      type: String
    },
    selectName: {
      required: true,
      type: String
    },
    selectOptionLabelKey: {
      "default": false,
      type: Boolean | String | Number
    },
    selectOptionValueKey: {
      "default": false,
      type: Boolean | String | Number
    },
    selectOptions: {
      required: true,
      type: Object
    },
    selectRequired: {
      "default": false,
      type: Boolean
    },
    selectValue: {
      "default": '',
      type: String | Number
    },
    labelClass: {
      "default": 'font-medium mb-2 text-theme-base-contrast text-sm tracking-wider',
      type: String
    },
    labelHidden: {
      "default": false,
      type: Boolean
    },
    labelText: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      hideError: false
    };
  },
  computed: {
    formattedOptions: function formattedOptions() {
      var _this = this;

      var options = {};

      lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(this.selectOptions, function (option, key) {
        // Default the label and value for the select
        var label = option;
        var value = key; // Set a custom label if necessary

        if (_this.selectOptionLabelKey !== false && option.hasOwnProperty(_this.selectOptionLabelKey)) {
          label = option[_this.selectOptionLabelKey];
        } // Set a custom value if necessary


        if (_this.selectOptionValueKey !== false && option.hasOwnProperty(_this.selectOptionValueKey)) {
          value = option[_this.selectOptionValueKey];
        }

        options[key] = {
          label: label,
          value: value
        };
      });

      return options;
    },
    formattedSelectClass: function formattedSelectClass() {
      var selectClass = this.selectClass;

      if (this.isError) {
        selectClass += ' error';
      }

      if (this.isAnyOptionSelected) {
        selectClass += ' ' + this.selectAnyClass;
      }

      return selectClass;
    },
    formattedLabelClass: function formattedLabelClass() {
      var labelClass = this.labelClass;

      if (this.labelHidden) {
        labelClass += ' hidden';
      }

      return labelClass;
    },
    isError: function isError() {
      return !this.hideError && this.errorMessage && this.errorMessage !== '';
    },
    isAnyOptionSelected: function isAnyOptionSelected() {
      return this.selectValue === this.selectAnyValue || this.selectValue === null;
    }
  },
  mounted: function mounted() {
    this.autofocus();
  },
  methods: {
    autofocus: function autofocus() {
      var _this2 = this;

      if (this.selectAutoFocus && this.$refs[this.selectId]) {
        this.$nextTick(function () {
          _this2.$refs[_this2.selectId].focus();
        });
      }
    },
    blurSelect: function blurSelect() {
      var _this3 = this;

      if (this.$refs[this.selectId]) {
        this.$nextTick(function () {
          _this3.$refs[_this3.selectId].blur();
        });
      }
    },
    isOptionDisabled: function isOptionDisabled(option_value) {
      if (!this.selectRequired) {
        return false;
      }

      if (option_value === '') {
        return true;
      }

      return false;
    },
    isOptionSelected: function isOptionSelected(option_value) {
      return option_value === this.selectValue;
    },
    onErrorMessageChange: function onErrorMessageChange() {
      this.hideError = false;
    },
    onSelectChange: function onSelectChange() {
      this.$emit('input', this.$refs[this.selectId].value);

      if (this.errorHideOnSelect) {
        this.hideError = true;
      }
    }
  },
  watch: {
    errorMessage: {
      handler: "onErrorMessageChange"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var vue_clickaway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-clickaway */ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ConfirmationModal",
  mixins: [vue_clickaway__WEBPACK_IMPORTED_MODULE_0__.mixin],
  props: {
    componentName: {
      "default": "confirmation-modal",
      type: String
    },
    cancelText: {
      "default": "Cancel",
      type: String
    },
    confirmText: {
      "default": "Confirm",
      type: String
    },
    confirmType: {
      "default": 'primary',
      type: String
    },
    isActionLoading: {
      "default": false,
      type: Boolean
    },
    messageText: {
      "default": 'Do you really want to continue?',
      type: String
    },
    messageTitle: {
      "default": 'Are you sure?',
      type: String
    },
    showModal: {
      "default": true,
      type: Boolean
    }
  },
  computed: {
    confirmButtonClass: function confirmButtonClass() {
      var classList = [];
      classList.push('bg-theme-' + this.confirmType);
      classList.push('border-theme-' + this.confirmType);
      classList.push('text-theme-' + this.confirmType + '-contrast');
      classList.push('hover:bg-theme-' + this.confirmType + '-hover');
      classList.push('hover:border-theme-' + this.confirmType + '-hover');
      classList.push('hover:text-theme-' + this.confirmType + '-hover-contrast');
      return classList;
    },
    isMessage: function isMessage() {
      return this.isMessageText && this.isMessageTitle;
    },
    isMessageText: function isMessageText() {
      return !!this.messageText.length;
    },
    isMessageTitle: function isMessageTitle() {
      return !!this.messageTitle.length;
    }
  },
  methods: {
    cancelAction: function cancelAction() {
      this.$emit('cancelAction');
    },
    closeModal: function closeModal() {
      this.$emit('closeModal');
    },
    confirmAction: function confirmAction() {
      this.$emit('confirmAction');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/core/modals/ConfirmationModal */ "./resources/js/components/core/modals/ConfirmationModal.vue");
/* harmony import */ var _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/core/forms/InputGroup */ "./resources/js/components/core/forms/InputGroup.vue");
/* harmony import */ var _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/core/forms/SelectGroup */ "./resources/js/components/core/forms/SelectGroup.vue");
/* harmony import */ var _components_core_icons_IconCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/core/icons/IconCheck */ "./resources/js/components/core/icons/IconCheck.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AdminCmsPageIndex",
  components: {
    IconCheck: _components_core_icons_IconCheck__WEBPACK_IMPORTED_MODULE_5__.default,
    ConfirmationModal: _components_core_modals_ConfirmationModal__WEBPACK_IMPORTED_MODULE_2__.default,
    InputGroup: _components_core_forms_InputGroup__WEBPACK_IMPORTED_MODULE_3__.default,
    SelectGroup: _components_core_forms_SelectGroup__WEBPACK_IMPORTED_MODULE_4__.default
  },
  layout: 'admin-layout',
  props: {
    layouts: {
      required: true,
      type: Object
    },
    pages: {
      required: true,
      type: Object
    },
    searchOptions: {
      required: true,
      type: Object | Array
    },
    templates: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      editableSearchOptions: {
        layout_id: '',
        per_page: 15,
        page_name: '',
        page_slug: '',
        template_id: ''
      },
      isInitialised: false,
      isLoadingDelete: false,
      showDeleteModal: false,
      pageToDelete: null
    };
  },
  mounted: function mounted() {
    this.setSearchOptions(this.searchOptions);
  },
  computed: {
    deleteModalText: function deleteModalText() {
      try {
        return 'Do you really want to delete \'' + this.pageToDelete.name + '\'?';
      } catch (e) {
        return 'Do you really want to delete this page?';
      }
    },
    showPagination: function showPagination() {
      try {
        return this.pages.pagination.last_page > 1;
      } catch (e) {
        return false;
      }
    },
    showPageActions: function showPageActions() {
      return this.userCan('cms.edit') || this.userCan('cms.delete');
    },
    pagesData: function pagesData() {
      if (!this.pages || !this.pages.data || this.pages.data.length < 1) {
        return false;
      }

      return this.pages.data;
    }
  },
  methods: {
    cancelDelete: function cancelDelete() {
      if (!this.isLoadingDelete) {
        this.showDeleteModal = false;
        this.pageToDelete = null;
      }
    },
    checkDelete: function checkDelete(page) {
      this.showDeleteModal = true;
      this.pageToDelete = page;
    },
    confirmDelete: function confirmDelete() {
      if (this.isLoadingDelete) {
        return this.$errorToast('It\'s only possible to delete one page at a time.');
      }

      this.$inertia["delete"](this.$route('admin.cms.pages.destroy', this.pageToDelete.id), {
        only: ['flash', 'pages']
      });
      this.pageToDelete = null;
      this.showDeleteModal = false;
    },
    onSearchOptionsUpdate: lodash__WEBPACK_IMPORTED_MODULE_0___default().debounce(function () {
      if (!this.isInitialised) {
        this.isInitialised = true; // If there are already search results, don't attempt search

        if (this.pagesData) {
          return;
        }
      }

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get(this.$route('admin.cms.pages.index'), this.editableSearchOptions, {
        only: ['pages'],
        preserveState: true
      });
    }, 500),
    setSearchOptions: function setSearchOptions() {
      var new_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = {
        layout_id: '',
        per_page: 15,
        page_name: '',
        page_slug: '',
        template_type: ''
      };

      try {
        // Overwrite the defaults with any new options
        lodash__WEBPACK_IMPORTED_MODULE_0___default().forEach(new_options, function (option, key) {
          options[key] = option;
        });
      } catch (e) {
        console.log(e);
      }

      this.editableSearchOptions = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(options);
    }
  },
  watch: {
    editableSearchOptions: {
      deep: true,
      handler: 'onSearchOptionsUpdate'
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-clickaway/dist/vue-clickaway.common.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-clickaway/dist/vue-clickaway.common.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.2.2';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding, vnode) {
  unbind(el);

  var vm = vnode.context;

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: this test used to be just `el.containts`, but working with path is better,
    //        because it tests whether the element was there at the time of
    //        the click, not whether it is there now, that the event has arrived
    //        to the top.
    // @NOTE: `.path` is non-standard, the standard way is `.composedPath()`
    var path = ev.path || (ev.composedPath ? ev.composedPath() : undefined);
    if (initialMacrotaskEnded && (path ? path.indexOf(el) < 0 : !el.contains(ev.target))) {
      return callback.call(vm, ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ "./resources/js/components/core/forms/InputGroup.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/core/forms/InputGroup.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _InputGroup_vue_vue_type_template_id_4090938a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputGroup.vue?vue&type=template&id=4090938a& */ "./resources/js/components/core/forms/InputGroup.vue?vue&type=template&id=4090938a&");
/* harmony import */ var _InputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/core/forms/InputGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InputGroup_vue_vue_type_template_id_4090938a___WEBPACK_IMPORTED_MODULE_0__.render,
  _InputGroup_vue_vue_type_template_id_4090938a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/core/forms/InputGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/core/forms/SelectGroup.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/core/forms/SelectGroup.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SelectGroup_vue_vue_type_template_id_5aa394fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectGroup.vue?vue&type=template&id=5aa394fe& */ "./resources/js/components/core/forms/SelectGroup.vue?vue&type=template&id=5aa394fe&");
/* harmony import */ var _SelectGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/core/forms/SelectGroup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SelectGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SelectGroup_vue_vue_type_template_id_5aa394fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectGroup_vue_vue_type_template_id_5aa394fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/core/forms/SelectGroup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/core/modals/ConfirmationModal.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/core/modals/ConfirmationModal.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _ConfirmationModal_vue_vue_type_template_id_e76390b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfirmationModal.vue?vue&type=template&id=e76390b8& */ "./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=template&id=e76390b8&");
/* harmony import */ var _ConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfirmationModal.vue?vue&type=script&lang=js& */ "./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ConfirmationModal_vue_vue_type_template_id_e76390b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfirmationModal_vue_vue_type_template_id_e76390b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/core/modals/ConfirmationModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=acf41d3e& */ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/cms/page/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/core/forms/InputGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/core/forms/InputGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InputGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/core/forms/SelectGroup.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/core/forms/SelectGroup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/SelectGroup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmationModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmationModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/core/forms/InputGroup.vue?vue&type=template&id=4090938a&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/core/forms/InputGroup.vue?vue&type=template&id=4090938a& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_template_id_4090938a___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_template_id_4090938a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputGroup_vue_vue_type_template_id_4090938a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputGroup.vue?vue&type=template&id=4090938a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InputGroup.vue?vue&type=template&id=4090938a&");


/***/ }),

/***/ "./resources/js/components/core/forms/SelectGroup.vue?vue&type=template&id=5aa394fe&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/core/forms/SelectGroup.vue?vue&type=template&id=5aa394fe& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectGroup_vue_vue_type_template_id_5aa394fe___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectGroup_vue_vue_type_template_id_5aa394fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectGroup_vue_vue_type_template_id_5aa394fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectGroup.vue?vue&type=template&id=5aa394fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/SelectGroup.vue?vue&type=template&id=5aa394fe&");


/***/ }),

/***/ "./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=template&id=e76390b8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=template&id=e76390b8& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmationModal_vue_vue_type_template_id_e76390b8___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmationModal_vue_vue_type_template_id_e76390b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfirmationModal_vue_vue_type_template_id_e76390b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfirmationModal.vue?vue&type=template&id=e76390b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=template&id=e76390b8&");


/***/ }),

/***/ "./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_acf41d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=acf41d3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InputGroup.vue?vue&type=template&id=4090938a&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/InputGroup.vue?vue&type=template&id=4090938a& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex-col" }, [
    _c(
      "label",
      { class: _vm.formattedLabelClass, attrs: { for: _vm.inputId } },
      [
        _vm._t("default", [
          _c("span", { staticClass: "flex flex-row items-baseline" }, [
            _c("span", [_vm._v(_vm._s(_vm.labelText))]),
            _vm._v(" "),
            _vm.inputRequired
              ? _c("sup", { staticClass: "text-theme-danger-contrast" }, [
                  _vm._v("\n                    *\n                ")
                ])
              : _vm._e()
          ])
        ])
      ],
      2
    ),
    _vm._v(" "),
    _c("input", {
      ref: _vm.inputId,
      class: _vm.formattedInputClass,
      attrs: {
        id: _vm.inputId,
        autocomplete: _vm.inputAutocomplete,
        disabled: _vm.inputDisabled,
        max: _vm.inputMax,
        maxlength: _vm.inputMaxLength,
        min: _vm.inputMin,
        minlength: _vm.inputMinLength,
        name: _vm.inputName,
        placeholder: _vm.inputPlaceholder,
        required: _vm.inputRequired,
        type: _vm.inputType
      },
      domProps: { value: _vm.inputValue },
      on: {
        blur: _vm.onInputBlur,
        input: _vm.onInputKeyPress,
        keyup: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
          ) {
            return null
          }
          return _vm.blurInput($event)
        }
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("transition", { attrs: { name: "slide-down-fade" } }, [
          _vm.isError
            ? _c("p", { class: _vm.errorClass }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.errorMessage) +
                    "\n            "
                )
              ])
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/SelectGroup.vue?vue&type=template&id=5aa394fe&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/forms/SelectGroup.vue?vue&type=template&id=5aa394fe& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flex flex-col" }, [
    _c(
      "label",
      { class: _vm.formattedLabelClass, attrs: { for: _vm.selectId } },
      [
        _vm._t("default", [
          _c("span", { staticClass: "flex flex-row items-baseline" }, [
            _c("span", [_vm._v(_vm._s(_vm.labelText))]),
            _vm._v(" "),
            _vm.selectRequired
              ? _c("sup", { staticClass: "text-theme-danger-contrast" }, [
                  _vm._v("\n                    *\n                ")
                ])
              : _vm._e()
          ])
        ])
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "select",
      {
        ref: _vm.selectId,
        class: _vm.formattedSelectClass,
        attrs: {
          id: _vm.selectId,
          disabled: _vm.selectDisabled,
          name: _vm.selectName,
          required: _vm.selectRequired
        },
        on: {
          change: _vm.onSelectChange,
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])
            ) {
              return null
            }
            return _vm.blurSelect($event)
          }
        }
      },
      [
        _vm.selectAnyEnabled
          ? _c(
              "option",
              {
                attrs: { disabled: _vm.isOptionDisabled(_vm.selectAnyValue) },
                domProps: {
                  selected: _vm.isOptionSelected(_vm.selectAnyValue),
                  value: _vm.selectAnyValue
                }
              },
              [
                _vm._v(
                  "\n            " + _vm._s(_vm.selectAnyLabel) + "\n        "
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.formattedOptions, function(option, key) {
          return _c(
            "option",
            {
              key: _vm.selectId + "-option-" + option.value,
              attrs: { disabled: _vm.isOptionDisabled(option.value) },
              domProps: {
                selected: _vm.isOptionSelected(option.value),
                value: option.value
              }
            },
            [_vm._v("\n            " + _vm._s(option.label) + "\n        ")]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("transition", { attrs: { name: "slide-down-fade" } }, [
          _vm.isError
            ? _c("p", { class: _vm.errorClass }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.errorMessage) +
                    "\n            "
                )
              ])
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=template&id=e76390b8&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/core/modals/ConfirmationModal.vue?vue&type=template&id=e76390b8& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showModal
    ? _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            staticClass:
              "absolute bg-gray-800 bg-opacity-75 flex h-full inset-0 items-center justify-center w-full p-4 z-30",
            class: _vm.componentName
          },
          [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "on-clickaway",
                    rawName: "v-on-clickaway",
                    value: _vm.closeModal,
                    expression: "closeModal"
                  }
                ],
                staticClass:
                  "bg-theme-card max-h-full max-w-full overflow-y-auto relative rounded shadow-md text-theme-card-contrast w-96"
              },
              [
                _c("div", { staticClass: "flex flex-row justify-end p-2" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "\n                        flex h-5 items-center justify-center rounded text-theme-base-subtle-contrast w-5\n                        ease-in-out duration-300 transition-colors\n                        focus:outline-none focus:ring focus:ring-primary\n                        hover:bg-theme-base-subtle\n                    ",
                      attrs: { disabled: _vm.isActionLoading },
                      on: { click: _vm.closeModal }
                    },
                    [_c("icon-close")],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._t("default", [
                  _vm.isMessage
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "flex flex-col items-center mt-6 px-4 text-center"
                        },
                        [
                          _vm.messageTitle
                            ? _c(
                                "h2",
                                { staticClass: "font-semibold text-lg" },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.messageTitle) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.messageText
                            ? _c(
                                "p",
                                {
                                  staticClass: "mt-2 text-center text-gray-700"
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.messageText) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "\n                    flex flex-col items-center justify-center mb-4 mt-8 px-4 space-y-2\n                    sm:flex-row sm:space-x-3 sm:space-y-0\n                "
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "\n                        bg-theme-base-subtle min-w-24 px-4 py-2 rounded text-center text-theme-base-subtle-contrast w-full\n                        ease-in-out duration-300 transition-colors\n                        sm:w-auto\n                        focus:outline-none focus:ring focus:ring-primary\n                        hover:bg-theme-base-subtle-contrast hover:text-theme-base-subtle\n                    ",
                        attrs: {
                          disabled: _vm.isActionLoading,
                          type: "button"
                        },
                        on: { click: _vm.cancelAction }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.cancelText) +
                            "\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "\n                        border flex flex-row items-center justify-center px-4 py-2 min-w-24 px-4 py-2 rounded text-center w-full\n                        ease-in-out duration-300 transition-colors\n                        sm:w-auto\n                        focus:outline-none focus:ring focus:ring-primary\n                    ",
                        class: _vm.confirmButtonClass,
                        attrs: {
                          disabled: _vm.isActionLoading,
                          type: "button"
                        },
                        on: { click: _vm.confirmAction }
                      },
                      [
                        _vm.isActionLoading
                          ? _c("icon-loader-circle", {
                              staticClass: "animate-spin-slow mr-2 w-5"
                            })
                          : _c("span", [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.confirmText) +
                                  "\n                    "
                              )
                            ])
                      ],
                      1
                    )
                  ]
                )
              ],
              2
            )
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/admin/cms/page/Index.vue?vue&type=template&id=acf41d3e& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "div",
      { staticClass: "flex flex-row items-center mb-6" },
      [
        _c("h1", { staticClass: "mr-auto text-lg" }, [
          _vm._v("\n             Page\n        ")
        ]),
        _vm._v(" "),
        _vm.userCan("cms.create")
          ? _c(
              "inertia-link",
              {
                staticClass:
                  "\n                button button-default-responsive button-primary\n                flex flex-row items-center\n            ",
                attrs: { href: _vm.$route("admin.cms.pages.create") }
              },
              [
                _c("icon-plus", { staticClass: "w-5 md:mr-2" }),
                _vm._v(" "),
                _c("span", { staticClass: "hidden md:inline" }, [
                  _vm._v("\n                Create Page\n            ")
                ])
              ],
              1
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "bg-white py-6 shadow-subtle rounded-lg" },
      [
        _c("h1", { staticClass: "font-semibold px-6 text-gray-850" }, [
          _vm._v("\n            Search\n            "),
          _c(
            "button",
            {
              staticClass:
                "\n                    text-sm text-theme-base-subtle-contrast\n                    focus:outline-none focus:text-theme-primary\n                    hover:text-theme-primary\n                ",
              on: { click: _vm.setSearchOptions }
            },
            [_vm._v("\n                (Clear)\n            ")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "\n                flex flex-row flex-wrap items-center -mx-4 -my-2 pt-4 px-6\n            "
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "
              },
              [
                _c("input-group", {
                  staticClass: "mx-4",
                  attrs: {
                    inputAutocomplete: "page_name_search",
                    inputClass: "form-control form-control-short",
                    inputId: "page_name",
                    inputName: "page_name",
                    inputPlaceholder: "Page Name",
                    inputType: "text",
                    labelHidden: true,
                    labelText: "Page Name"
                  },
                  model: {
                    value: _vm.editableSearchOptions.page_name,
                    callback: function($$v) {
                      _vm.$set(_vm.editableSearchOptions, "page_name", $$v)
                    },
                    expression: "editableSearchOptions.page_name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "
              },
              [
                _c("input-group", {
                  staticClass: "mx-4",
                  attrs: {
                    inputAutocomplete: "page_slug_search",
                    inputClass: "form-control form-control-short",
                    inputId: "page_slug",
                    inputName: "page_slug",
                    inputPlaceholder: "Page Slug",
                    inputType: "text",
                    labelHidden: true,
                    labelText: "Page Slug"
                  },
                  model: {
                    value: _vm.editableSearchOptions.page_slug,
                    callback: function($$v) {
                      _vm.$set(_vm.editableSearchOptions, "page_slug", $$v)
                    },
                    expression: "editableSearchOptions.page_slug"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "
              },
              [
                _c("select-group", {
                  staticClass: "mx-4",
                  attrs: {
                    labelHidden: true,
                    labelText: "Layout",
                    selectAnyEnabled: true,
                    selectAnyLabel: "Layout",
                    selectClass: "form-control form-control-short",
                    selectId: "template_id",
                    selectName: "layout_id",
                    selectOptionLabelKey: "name",
                    selectOptionValueKey: "id",
                    selectOptions: _vm.layouts
                  },
                  model: {
                    value: _vm.editableSearchOptions.layout_id,
                    callback: function($$v) {
                      _vm.$set(_vm.editableSearchOptions, "layout_id", $$v)
                    },
                    expression: "editableSearchOptions.layout_id"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "\n                    my-2 w-full\n                    sm:w-1/2\n                    lg:w-1/4\n                "
              },
              [
                _c("select-group", {
                  staticClass: "mx-4",
                  attrs: {
                    labelHidden: true,
                    labelText: "Template",
                    selectAnyEnabled: true,
                    selectAnyLabel: "Template",
                    selectClass: "form-control form-control-short",
                    selectId: "template_id",
                    selectName: "template_id",
                    selectOptionLabelKey: "name",
                    selectOptionValueKey: "id",
                    selectOptions: _vm.templates
                  },
                  model: {
                    value: _vm.editableSearchOptions.template_id,
                    callback: function($$v) {
                      _vm.$set(_vm.editableSearchOptions, "template_id", $$v)
                    },
                    expression: "editableSearchOptions.template_id"
                  }
                })
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        !_vm.pagesData
          ? _c(
              "p",
              {
                staticClass:
                  "bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"
              },
              [_vm._v("\n            No pages\n        ")]
            )
          : [
              _c("div", { staticClass: "block mt-8 overflow-x-auto w-full" }, [
                _c(
                  "table",
                  { staticClass: "table table-hover table-striped w-full" },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "indicator-column" }),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("URL")]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("Enabled")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("Publish / Expiry Date")
                        ]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Layout / Template")]),
                        _vm._v(" "),
                        _vm.showPageActions ? _c("th") : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.pagesData, function(page, index) {
                        return _c("tr", { key: "page-" + page.id }, [
                          _c("td", { staticClass: "indicator-column" }, [
                            _c("div", {
                              staticClass: "h-3 rounded-full w-3",
                              class: {
                                "bg-theme-success-contrast": page.url.is_live,
                                "bg-theme-danger-contrast": !page.url.is_live
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(page.name) +
                                "\n                            "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "text-sm text-theme-base-subtle-contrast"
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(page.slug) +
                                    "\n                            "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-sm" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(page.url.url_full) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              { staticClass: "flex flex-row justify-center" },
                              [
                                page.url.is_enabled
                                  ? _c("icon-check", { staticClass: "h-4 w-4" })
                                  : _c("icon-x", { staticClass: "h-4 w-4" })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-sm" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex flex-col opacity-75 space-y-1"
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "px-2 py-0 rounded text-center",
                                    class: {
                                      "bg-theme-success text-theme-success-contrast":
                                        page.url.is_published,
                                      "bg-theme-danger text-theme-danger-contrast": !page
                                        .url.is_published
                                    }
                                  },
                                  [
                                    page.url.published_at
                                      ? [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm._f("humanFriendlyDateTime")(
                                                  page.url.published_at
                                                )
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      : [
                                          _vm._v(
                                            "\n                                        -\n                                    "
                                          )
                                        ]
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "px-2 py-0 rounded text-center",
                                    class: {
                                      "bg-theme-success text-theme-success-contrast": !page
                                        .url.is_expired,
                                      "bg-theme-danger text-theme-danger-contrast":
                                        page.url.is_expired
                                    }
                                  },
                                  [
                                    page.url.expired_at
                                      ? [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm._f("humanFriendlyDateTime")(
                                                  page.url.expired_at
                                                )
                                              ) +
                                              "\n                                    "
                                          )
                                        ]
                                      : [
                                          _vm._v(
                                            "\n                                        -\n                                    "
                                          )
                                        ]
                                  ],
                                  2
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "text-sm text-theme-base-subtle-contrast"
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(page.layout.name) +
                                  "\n                            "
                              ),
                              _c("br"),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(page.template.name) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.showPageActions
                            ? _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex flex-row items-center justify-end -mx-1"
                                  },
                                  [
                                    _vm.userCan("cms.edit")
                                      ? _c(
                                          "inertia-link",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-info hover:text-theme-info-contrast\n                                    ",
                                            attrs: {
                                              href: _vm.$route(
                                                "admin.cms.pages.edit",
                                                page.id
                                              ),
                                              title: "Edit Page"
                                            }
                                          },
                                          [
                                            _c("icon-edit", {
                                              staticClass: "w-4"
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.userCan("cms.delete")
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "\n                                        flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide\n                                        focus:outline-none focus:ring\n                                        hover:bg-theme-danger hover:text-theme-danger-contrast\n                                    ",
                                            attrs: { title: "Delete Page" },
                                            on: {
                                              click: function($event) {
                                                return _vm.checkDelete(page)
                                              }
                                            }
                                          },
                                          [
                                            _c("icon-trash", {
                                              staticClass: "w-4"
                                            })
                                          ],
                                          1
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ])
                            : _vm._e()
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.showPagination
                ? _c(
                    "div",
                    { staticClass: "flex flex-row justify-center mt-12 px-6" },
                    [
                      _c("pagination", {
                        attrs: { pagination: _vm.pages.pagination }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
        _vm._v(" "),
        _c("confirmation-modal", {
          attrs: {
            confirmText: "Delete",
            confirmType: "danger",
            showModal: _vm.showDeleteModal,
            messageText: _vm.deleteModalText
          },
          on: {
            cancelAction: _vm.cancelDelete,
            closeModal: _vm.cancelDelete,
            confirmAction: _vm.confirmDelete
          }
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
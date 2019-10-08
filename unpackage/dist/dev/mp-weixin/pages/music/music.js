(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/music/music"],{

/***/ 60:
/*!*****************************************************************************!*\
  !*** E:/HBuilderProjects/uniTest1/main.js?{"page":"pages%2Fmusic%2Fmusic"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _music = _interopRequireDefault(__webpack_require__(/*! ./pages/music/music.vue */ 61));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_music.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 61:
/*!**********************************************************!*\
  !*** E:/HBuilderProjects/uniTest1/pages/music/music.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_vue_vue_type_template_id_35507b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music.vue?vue&type=template&id=35507b14&scoped=true& */ 62);
/* harmony import */ var _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music.vue?vue&type=script&lang=js& */ 64);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _music_vue_vue_type_style_index_0_id_35507b14_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.vue?vue&type=style&index=0&id=35507b14&lang=less&scoped=true& */ 66);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _music_vue_vue_type_template_id_35507b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _music_vue_vue_type_template_id_35507b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "35507b14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "HBuilderProjects/uniTest1/pages/music/music.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/*!*****************************************************************************************************!*\
  !*** E:/HBuilderProjects/uniTest1/pages/music/music.vue?vue&type=template&id=35507b14&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_35507b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music.vue?vue&type=template&id=35507b14&scoped=true& */ 63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_35507b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_35507b14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 63:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilderProjects/uniTest1/pages/music/music.vue?vue&type=template&id=35507b14&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 64:
/*!***********************************************************************************!*\
  !*** E:/HBuilderProjects/uniTest1/pages/music/music.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music.vue?vue&type=script&lang=js& */ 65);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 65:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilderProjects/uniTest1/pages/music/music.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var wPicker = function wPicker() {return Promise.all(/*! import() | components/w-picker/w-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/w-picker/w-picker")]).then(__webpack_require__.bind(null, /*! @/components/w-picker/w-picker.vue */ 153));};var uniIcons = function uniIcons() {return __webpack_require__.e(/*! import() | components/uni-icons/uni-icons */ "components/uni-icons/uni-icons").then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 164));};var MescrollUni = function MescrollUni() {return Promise.all(/*! import() | components/mescroll-uni/mescroll-uni */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mescroll-uni/mescroll-uni")]).then(__webpack_require__.bind(null, /*! @/components/mescroll-uni/mescroll-uni.vue */ 144));};var _default =






























































































{
  components: {
    wPicker: wPicker,
    uniIcons: uniIcons,
    MescrollUni: MescrollUni
    // zySearch
  },
  data: function data() {
    return {
      searchText: '',
      isFocus: false,

      search_icon_search: this.$mAssetsPath.search_icon_search,
      search_icon_voice: this.$mAssetsPath.search_icon_voice,

      selectList: [
      { default: '类型', ref: 'typeselector' },
      { default: '难度', ref: 'levelselector' },
      { default: '排序', ref: 'sortselector' }],

      page: 1,

      type: '类型',
      typeList: [
      {
        label: "全部",
        value: 1 },

      {
        label: "单音",
        value: 2 },

      {
        label: "指弹",
        value: 3 },

      {
        label: "弹唱",
        value: 4 },

      {
        label: "合奏",
        value: 5 }],



      level: '难度',
      levelList: [
      {
        label: "全部",
        value: 1 },

      {
        label: "萌新",
        value: 2 },

      {
        label: "入门",
        value: 3 },

      {
        label: "进阶",
        value: 4 },

      {
        label: "困难",
        value: 5 },

      {
        label: "大神",
        value: 6 }],



      sort: '排序',
      sortList: [
      {
        label: "综合",
        value: 'mix' },

      {
        label: "时间",
        value: 'created_at' },

      {
        label: "热度",
        value: 'views' },

      {
        label: "曲名",
        value: 'name' }],



      mescroll: null, // mescroll组件的实例对象
      downOption: {
        use: true, // 是否启用下拉刷新; 默认true
        auto: true // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
      },
      upOption: {
        use: true, // 是否启用上拉加载; 默认true
        auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
        page: {
          num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
          size: 3 // 每页数据的数量,默认10
        },
        noMoreSize: 0, // 配置列表的总数量要大于等于多少条才显示'-- END --'的提示
        empty: {
          tip: '暂无相关数据' } },



      musicList: [] };

  },
  onLoad: function onLoad() {

  },
  methods: {
    showSelector: function showSelector(index) {
      var item = this.selectList[index];
      this.$refs[item.ref].show();
    },
    onTypeConfirm: function onTypeConfirm(val) {
      console.log(val);
      this.type = val.result;
      if (this.mescroll) {
        this.downCallback(this.mescroll);
      } else {
        this.page = 1;
        this.getData();
      }
    },
    onLevelConfirm: function onLevelConfirm(val) {
      console.log(val);
      this.level = val.result;
      if (this.mescroll) {
        this.downCallback(this.mescroll);
      } else {
        this.page = 1;
        this.getData();
      }
    },
    onSortConfirm: function onSortConfirm(val) {
      console.log(val);
      this.sort = val.result;
      if (this.mescroll) {
        this.downCallback(this.mescroll);
      } else {
        this.page = 1;
        this.getData();
      }
    },

    downCallback: function downCallback(mescroll) {
      console.log('下拉刷新');
      this.page = 1;
      mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
    },

    /*上拉加载的回调*/
    upCallback: function upCallback(mescroll) {
      console.log('上拉加载');
      this.mescroll = mescroll;
      this.getData();
    },

    getData: function () {var _getData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var type, level, sort, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, s, paras, data, curPageData, totalSize;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                type = this.type == '全部' || this.type == '类型' ? '' : this.type;
                level = this.level == '全部' || this.level == '难度' ? '' : this.level;
                sort = this.sort == '排序' ? 'mix' : this.sort;_iteratorNormalCompletion = true;_didIteratorError = false;_iteratorError = undefined;_context.prev = 6;_iterator =
                this.sortList[Symbol.iterator]();case 8:if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {_context.next = 16;break;}s = _step.value;if (!(
                sort == s.label)) {_context.next = 13;break;}
                sort = s.value;return _context.abrupt("break", 16);case 13:_iteratorNormalCompletion = true;_context.next = 8;break;case 16:_context.next = 22;break;case 18:_context.prev = 18;_context.t0 = _context["catch"](6);_didIteratorError = true;_iteratorError = _context.t0;case 22:_context.prev = 22;_context.prev = 23;if (!_iteratorNormalCompletion && _iterator.return != null) {_iterator.return();}case 25:_context.prev = 25;if (!_didIteratorError) {_context.next = 28;break;}throw _iteratorError;case 28:return _context.finish(25);case 29:return _context.finish(22);case 30:




                paras = {
                  page: this.page,
                  pagesize: this.upOption.page.size,
                  name: this.searchText,
                  type: type,
                  level: level,
                  order: sort };_context.next = 33;return (

                  this.$apis.getMusicList(paras));case 33:data = _context.sent;
                console.log(data);

                curPageData = data.data;
                totalSize = data.total;

                // 如果是第一页 则置空列表数据
                if (this.page == 1) {
                  this.musicList = [];
                }
                this.musicList = this.musicList.concat(curPageData); // 追加新数据

                if (this.mescroll) {
                  // 成功隐藏下拉加载状态
                  this.mescroll.endBySize(curPageData.length, totalSize);
                }
                // 判断是否还有下一页
                if (data.last_page > this.page) {
                  this.page = this.page + 1;
                }



                // 根据页面选择的条件 调用api从服务器端获取数据
                // this.$http.request({
                // 	url: '/music/getMusicList',
                // 	method: 'post',
                // 	header: {},
                // 	params: {
                // 		page: this.page,
                // 		pagesize: this.upOption.page.size,
                // 		name: this.searchText,
                // 		type: type,
                // 		level: level,
                // 		order: sort
                // 	}
                // }).then(res => {
                // 	console.log(res)
                // 	let data = res.data.data;
                // 	let curPageData = data.data; 
                // 	let totalSize   = data.total; 

                // 	// 如果是第一页 则置空列表数据
                // 	if(this.page == 1) {
                // 		this.musicList = [];
                // 	}   
                // 	this.musicList = this.musicList.concat(curPageData); // 追加新数据

                // 	if (this.mescroll) {
                // 		// 成功隐藏下拉加载状态
                // 		this.mescroll.endBySize(curPageData.length, totalSize); 
                // 	}

                // 	// 判断是否还有下一页
                // 	if (data.last_page > this.page) {
                // 		this.page = this.page + 1;
                // 	}
                // }).catch(err => {
                // 	if (this.mescroll) {
                // 		// 失败隐藏下拉加载状态
                // 		this.mescroll.endErr()
                // 	}
                // 	console.log(err)
                // })
              case 41:case "end":return _context.stop();}}}, _callee, this, [[6, 18, 22, 30], [23,, 25, 29]]);}));function getData() {return _getData.apply(this, arguments);}return getData;}(),

    searchStart: function searchStart() {// 触发搜索
      // if (this.searchText == '') {
      // 	uni.showToast({
      // 		title: '请输入关键字',
      // 		icon: 'none',
      // 		duration: 1000
      // 	});
      // 	return false;
      // } else {
      console.log(this.searchText);
      if (this.mescroll) {
        this.downCallback(this.mescroll);
      } else {
        this.page = 1;
        this.getData();
      }
      // }
    },
    startRecognize: function startRecognize() {//语音输入
      var _this = this;
      var options = {};
      options.engine = 'iFly';
      options.punctuation = false; // 是否需要标点符号 
      options.timeout = 10 * 1000;
      plus.speech.startRecognize(options, function (s) {
        _this.searchText = _this.searchText + s;
      });
    },

    gotoinfo: function gotoinfo(e) {
      var newsid = e.currentTarget.dataset.newsid;
      uni.navigateTo({
        url: '../info/info?newsid=' + newsid,
        success: function success(res) {
          console.log('gotoinfo success');
        },
        fail: function fail() {
          console.log('gotoinfo fail');
        },
        complete: function complete() {
          console.log('gotoinfo complete');
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 66:
/*!********************************************************************************************************************!*\
  !*** E:/HBuilderProjects/uniTest1/pages/music/music.vue?vue&type=style&index=0&id=35507b14&lang=less&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_35507b14_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../浏览器文件下载路径/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music.vue?vue&type=style&index=0&id=35507b14&lang=less&scoped=true& */ 67);
/* harmony import */ var _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_35507b14_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_35507b14_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_35507b14_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_35507b14_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_35507b14_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HBuilderProjects/uniTest1/pages/music/music.vue?vue&type=style&index=0&id=35507b14&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[60,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/music/music.js.map
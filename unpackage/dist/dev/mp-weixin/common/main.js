(global.webpackJsonp=global.webpackJsonp||[]).push([["common/main"],[
/*!***************************************************************!*\
  !*** /Users/iFan/Documents/HBuilderProjects/uniTest1/main.js ***!
  \***************************************************************/
/*! no static exports found */function(e,t,o){"use strict";(function(e,t){o(/*! uni-pages */4),o(/*! @dcloudio/uni-stat */5);var n=y(o(/*! vue */2)),r=y(o(/*! ./App */9)),u=y(o(/*! ./store */15)),a=y(o(/*! ./AppEntryController.js */20)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(o(/*! ./apis/index.js */24)),f=y(o(/*! ./common/router.js */19)),i=y(o(/*! ./common/utils.js */26)),d=y(o(/*! ./config/index.config.js */17)),p=y(o(/*! ./config/assets.config.js */27)),c=y(o(/*! ./config/routes.config.js */18)),s=y(o(/*! ./config/constData.config.js */28)),m=y(o(/*! ./common/modalHelper.js */29));function y(e){return e&&e.__esModule?e:{default:e}}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){b(e,t,o[t])})}return e}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}n.default.config.productionTip=!1,n.default.prototype.$AppEntryController=a.default,n.default.prototype.$store=u.default,n.default.prototype.$apis=l,n.default.prototype.$mRouter=f.default,n.default.prototype.$mUtils=i.default,n.default.prototype.$mConfig=d.default,n.default.prototype.$mAssetsPath=p.default,n.default.prototype.$mRoutesConfig=c.default,n.default.prototype.$mConstDataConfig=s.default,n.default.prototype.$modalHelper=m.default,n.default.component("uLink",function(){return o.e(/*! import() | components/uLink */"components/uLink").then(o.bind(null,/*! @/components/uLink.vue */104))}),n.default.component("joy-page",function(){return o.e(/*! import() | components/m-page-view/m-page-view */"components/m-page-view/m-page-view").then(o.bind(null,/*! ./components/m-page-view/m-page-view.vue */109))}),f.default.beforeEach(function(t,o){if(void 0===o.route)throw"路由钩子函数中没有找到to.route对象，路由信息:"+JSON.stringify(o);if(o.route.path===c.default.login.path&&u.default.getters.hasLogin)e.redirectTo({url:i.default.objParseUrlAndParam(c.default.main.path,o.query)});else if(console.log("route before"),o.route.requiresAuth)if(u.default.getters.hasLogin)e[t]({url:i.default.objParseUrlAndParam(o.route.path,o.query)});else{var n=g({redirectUrl:o.route.path},o.query);u.default.state.forcedLogin?e.redirectTo({url:i.default.objParseUrlAndParam(c.default.login.path,n)}):(e.showToast({title:"请先登录",icon:"none"}),setTimeout(function(){e.navigateTo({url:i.default.objParseUrlAndParam(c.default.login.path,n)})},600))}else e[t]({url:i.default.objParseUrlAndParam(o.route.path,o.query)})}),r.default.mpType="app",t(new n.default(g({store:u.default},r.default))).$mount()}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createApp)},,,,,,,,
/*!***************************************************************!*\
  !*** /Users/iFan/Documents/HBuilderProjects/uniTest1/App.vue ***!
  \***************************************************************/
/*! no static exports found */,
/*!***************************************************************!*\
  !*** /Users/iFan/Documents/HBuilderProjects/uniTest1/App.vue ***!
  \***************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var n=o(/*! ./App.vue?vue&type=script&lang=js& */10);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);o(/*! ./App.vue?vue&type=style&index=0&lang=css& */12);var u=o(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */14),a=Object(u.default)(n.default,void 0,void 0,!1,null,null,null);a.options.__file="Users/iFan/Documents/HBuilderProjects/uniTest1/App.vue",t.default=a.exports},
/*!****************************************************************************************!*\
  !*** /Users/iFan/Documents/HBuilderProjects/uniTest1/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var n=o(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */11),r=o.n(n);for(var u in n)"default"!==u&&function(e){o.d(t,e,function(){return n[e]})}(u);t.default=r.a},
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/iFan/Documents/HBuilderProjects/uniTest1/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App Launch"),this.$AppEntryController.getWeChatOpenId()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=n},
/*!************************************************************************************************!*\
  !*** /Users/iFan/Documents/HBuilderProjects/uniTest1/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var n=o(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */13),r=o.n(n);for(var u in n)"default"!==u&&function(e){o.d(t,e,function(){return n[e]})}(u);t.default=r.a},
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/iFan/Documents/HBuilderProjects/uniTest1/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){}],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map
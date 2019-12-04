/*
 * @Author: 张腾
 * @Date: 2019-11-25 20:48:36
 * @LastEditors: 张腾
 * @LastEditTime: 2019-12-04 10:56:57
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import axios from 'axios'
// import store from 'store'
import MintUI from 'mint-ui' 
import 'mint-ui/lib/style.css' 
Vue.use(MintUI)
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})

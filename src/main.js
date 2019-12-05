/*
 * @Author: 马川
 * @Date: 2019-12-04 19:39:11
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-05 14:31:38
 * @Description: 
 */

import Vue from 'vue'

import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueX from 'vueX'
import store from './store'

import axios from 'axios'
// import store from 'store' 


Vue.use(router);
axios.defaults.baseURL = '/api/'
Vue.use(MintUI);
Vue.use(ElementUI);

Vue.use(VueX);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  store,



  components: { App },
  template: '<App/>'
})

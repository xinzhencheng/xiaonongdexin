/*
 * @Author: 安菲
 * @Date: 2019-11-25 20:05:01
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 15:25:07
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 

Vue.use(ElementUI);
Vue.use(vuex);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

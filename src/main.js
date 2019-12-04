/*
<<<<<<< HEAD
 * @Author: 郭涛
 * @Date: 2019-11-26 19:39:02
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-29 16:38:38
=======
 * @Author: 马川
 * @Date: 2019-11-23 12:08:12
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-29 17:22:34
>>>>>>> mac
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';

Vue.use(ElementUI);
Vue.use(router);
axios.defaults.baseURL = '/api/'
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
Vue.use(ElementUI);
>>>>>>> mac
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  store,
=======
>>>>>>> mac
  components: { App },
  template: '<App/>'
})

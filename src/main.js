/*
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
 * @Author: 安菲
 * @Date: 2019-11-25 20:05:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-02 17:54:53
>>>>>>> anfei
=======
 * @Author: 张腾
 * @Date: 2019-11-25 20:48:36
 * @LastEditors: 张腾
 * @LastEditTime: 2019-12-04 10:56:57
>>>>>>> zhangteng
 * @Description: 
=======
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-04 15:08:15
 * @Description: file content
>>>>>>> sijuan
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import Vuex from 'vuex'
import store from './store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
import MintUI from 'mint-ui'; 
import 'mint-ui/lib/style.css'; 


Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(Vuex);

>>>>>>> anfei
=======
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
>>>>>>> zhangteng
=======
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
// import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(MintUI);
>>>>>>> sijuan
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  store,
=======
>>>>>>> mac
=======
  store,
>>>>>>> anfei
=======
  // store,
>>>>>>> zhangteng
=======
>>>>>>> sijuan
  components: { App },
  template: '<App/>'
})

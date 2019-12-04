/*
 * @Author: 马川
 * @Date: 2019-11-23 12:08:12
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-29 21:38:22
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Zhuce from '@/pages/Zhuce'
import Wangji from '@/pages/Wangji'
import order from '@/pages/order'
import xitongshezhi from '@/pages/xitongshezhi'
import grxx from '@/pages/grxx'
import xiuganmima from '@/pages/xiuganmima'
import xiugaishouji from '@/pages/xiugaishouji'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Zhuce',
      name: 'Zhuce',
      component: Zhuce,
    },
    {
      path: '/Wangji',
      name: 'Wangji',
      component: Wangji,
    },
    {
      path: '/order',
      name: 'order',
      component: order,
    },
    {
      path: '/',
      name: 'xitongshezhi',
      component: xitongshezhi,
    },
    {
      path: '/grxx',
      name: 'grxx',
      component: grxx,
    },
    {
      path: '/xiuganmima',
      name: 'xiuganmima',
      component: xiuganmima,
    },
    {
      path: '/xiugaishouji',
      name: 'xiugaishouji',
      component: xiugaishouji,
    }
  ]
})

/*
 * @Author: 马川
 * @Date: 2019-11-23 12:08:12
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-27 22:10:57
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Zhuce from '@/pages/Zhuce'
import Wangji from '@/pages/Wangji'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})

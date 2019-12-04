/*
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-03 11:01:36
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
import Squerendingdan from '@/pages/Squerendingdan'
import Ssousuo from '@/pages/Ssousuo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Squerendingdan',
      name: 'Squerendingdan',
      component: Squerendingdan
    },
    {
      path: '/Ssousuo',
      name: 'Ssousuo',
      component: Ssousuo
    }
  ]
})

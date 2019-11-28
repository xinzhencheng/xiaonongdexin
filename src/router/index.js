/*
 * @Author: 安菲
 * @Date: 2019-11-25 20:05:01
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-28 19:56:59
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import shoppingCar from '@/pages/shoppingCar'
import Vip from '@/pages/Vip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'shoppingCar',
      component: shoppingCar
    },
    {
      path: '/',
      name: 'Vip',
      component: Vip
    }
  ]
})

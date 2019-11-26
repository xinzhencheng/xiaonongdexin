/*
 * @Author: 安菲
 * @Date: 2019-11-25 20:05:01
 * @LastEditors: 安菲
 * @LastEditTime: 2019-11-26 10:12:03
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import shoppingCar from '@/pages/shoppingCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingCar',
      component: shoppingCar
    }
  ]
})

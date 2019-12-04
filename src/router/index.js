/*
 * @Author: 安菲
 * @Date: 2019-11-25 20:05:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 10:21:18
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCar from '@/pages/ShoppingCar'
import NewAddress from '@/pages/NewAddress'
import Open from '@/pages/Open'
import Open2 from '@/pages/Open2'
import Vip from '@/pages/Vip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/Vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/NewAddress',
      name: 'NewAddress',
      component: NewAddress
    },
    {
      path: '/Open',
      name: 'Open',
      component: Open
    },
    {
      path: '/Open2',
      name: 'Open2',
      component: Open2
    }
  ]
})

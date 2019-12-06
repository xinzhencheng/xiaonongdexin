
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import xiangqingye from '@/pages/xiangqingye'
import MinePage from '@/pages/MinePage'


import Login from '@/pages/Login'
import Zhuce from '@/pages/Zhuce'
import Wangji from '@/pages/Wangji'
import order from '@/pages/order'
import xitongshezhi from '@/pages/xitongshezhi'
import grxx from '@/pages/grxx'
import xiuganmima from '@/pages/xiuganmima'
import xiugaishouji from '@/pages/xiugaishouji'

import ShoppingCar from '@/pages/ShoppingCar'
import NewAddress from '@/pages/NewAddress'
import Open from '@/pages/Open'
import Open2 from '@/pages/Open2'
import Vip from '@/pages/Vip'


import shoppClassify from '@/pages/shoppClassify'
import shoucang from '@/pages/shoucang'
import shouhuodizhi from '@/pages/shouhuodizhi'
import myyinhangka from '@/pages/myyinhangka'
import xinzengyinhangka from '@/pages/xinzengyinhangka'


import Squerendingdan from '@/pages/Squerendingdan'
import Ssousuo from '@/pages/Ssousuo'

Vue.use(Router)

export default new Router({
  routes: [

    {

      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/xiangqingye/:id',
      name: 'xiangqingye',
      component: xiangqingye,
      props:true
    },
    {
      path: '/MinePage',
      name: 'MinePage',
      component: MinePage
    },
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
      path: '/xitongshezhi',
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

      path: '/ShoppingCar',
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
    },
//  
 {
   path: '/shoppClassify',
   name: 'shoppClassify',
   component: shoppClassify
 },
    {
      path: '/shoucang',
      name: 'shoucang',
      component: shoucang
    },
 {
   path: '/shouhuodizhi',
   name: 'shouhuodizhi',
   component: shouhuodizhi
 },
{
  path: '/myyinhangka',
  name: 'myyinhangka',
  component: myyinhangka
},
{
  path: '/xinzengyinhangka',
  name: 'xinzengyinhangka',
  component: xinzengyinhangka
},
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

/*
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-02 14:26:45
=======
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 司娟
 * @LastEditTime: 2019-12-03 11:01:36
>>>>>>> sijuan
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Index from '@/pages/Index'
import xiangqingye from '@/pages/xiangqingye'
import MinePage from '@/pages/MinePage'

=======
 * @Author: 马川
 * @Date: 2019-11-23 12:08:12
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-29 21:38:22
=======
 * @Author: 安菲
 * @Date: 2019-11-25 20:05:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 10:21:18
>>>>>>> anfei
=======
 * @Author: 邹中兴
 * @Date: 2019-11-25 20:48:36
 * @LastEditors: 张腾
 * @LastEditTime: 2019-12-04 15:52:02
>>>>>>> zhangteng
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
import Login from '@/pages/Login'
import Zhuce from '@/pages/Zhuce'
import Wangji from '@/pages/Wangji'
import order from '@/pages/order'
import xitongshezhi from '@/pages/xitongshezhi'
import grxx from '@/pages/grxx'
import xiuganmima from '@/pages/xiuganmima'
import xiugaishouji from '@/pages/xiugaishouji'
>>>>>>> mac
=======
import ShoppingCar from '@/pages/ShoppingCar'
import NewAddress from '@/pages/NewAddress'
import Open from '@/pages/Open'
import Open2 from '@/pages/Open2'
import Vip from '@/pages/Vip'

>>>>>>> anfei
=======
import shoppClassify from '@/pags/shoppClassify'
import shoucang from '@/pags/shoucang'
import shouhuodizhi from '@/pags/shouhuodizhi'
import myyinhangka from '@/pags/myyinhangka'
import xinzengdizhi from '@/pags/xinzengdizhi'
import xinzengyinhangka from '@/pags/xinzengyinhangka'

>>>>>>> zhangteng
=======
import Squerendingdan from '@/pages/Squerendingdan'
import Ssousuo from '@/pages/Ssousuo'

>>>>>>> sijuan
Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
<<<<<<< HEAD
    {
<<<<<<< HEAD
<<<<<<< HEAD
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
      path: '/xiangqingye',
      name: 'xiangqingye',
      component: xiangqingye
    },
    {
      path: '/MinePage',
      name: 'MinePage',
      component: MinePage
=======
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
>>>>>>> mac
=======
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
>>>>>>> anfei
    }
=======
//  
 {
   path: '/',
   name: 'shoppClassify',
   component: shoppClassify
 },
    // {
    //   path: '/',
    //   name: 'shoucang',
    //   component: shoucang
    // },
//  {
//    path: '/',
//    name: 'shouhuodizhi',
//    component: shouhuodizhi
//  }
// {
//   path: '/',
//   name: 'myyinhangka',
//   component: myyinhangka
// },
// {
//   path: '/xinzengyinhangka',
//   name: 'xinzengyinhangka',
//   component: xinzengyinhangka
// }
>>>>>>> zhangteng
=======
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
>>>>>>> sijuan
  ]
})

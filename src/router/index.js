/*
 * @Author: 邹中兴
 * @Date: 2019-11-25 20:48:36
 * @LastEditors: 张腾
 * @LastEditTime: 2019-12-04 15:52:02
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import shoppClassify from '@/pags/shoppClassify'
import shoucang from '@/pags/shoucang'
import shouhuodizhi from '@/pags/shouhuodizhi'
import myyinhangka from '@/pags/myyinhangka'
import xinzengdizhi from '@/pags/xinzengdizhi'
import xinzengyinhangka from '@/pags/xinzengyinhangka'

Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})

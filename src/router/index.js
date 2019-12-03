/*
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-12-02 14:26:45
 * @Description: file content
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import xiangqingye from '@/pages/xiangqingye'
import MinePage from '@/pages/MinePage'

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
      path: '/xiangqingye',
      name: 'xiangqingye',
      component: xiangqingye
    },
    {
      path: '/MinePage',
      name: 'MinePage',
      component: MinePage
    }
  ]
})

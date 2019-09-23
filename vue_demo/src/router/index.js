/* 路由器模块 */
import Vue from 'vue'
/* 引入组件 */
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'

/* 使用组件 */
Vue.use(VueRouter)
export default new VueRouter({
  // n个路由
  routers: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },{
      path: '/',
      redirect: '/about'
    }
  ]
})


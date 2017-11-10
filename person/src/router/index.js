import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Blog from '@/components/blog'
import Echarts from '@/components/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    }
  ]
})

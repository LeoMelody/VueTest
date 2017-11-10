import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '@/components/movie'
import Book from '@/components/book'
import Radio from '@/components/radio'
import Button from '@/components/button'
import Form from '@/components/form'
import CheckBox from '@/components/checkbox'
import Input from '@/components/input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '首页'
      },
      name: 'Hello',
      component: Hello
    },
    {
      path: '/movie',
      meta: {
        title: '电影'
      },
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      meta: {
        title: '书籍'
      },
      name: 'Book',
      component: Book
    },
    {
      path: '/button',
      meta: {
        title: '按钮'
      },
      name: 'Button',
      component: Button
    },
    {
      path: '/Form',
      meta: {
        title: '表单'
      },
      name: 'Form',
      component: Form
    },
    {
      path: '/Radio',
      meta: {
        title: '单选框'
      },
      name: 'Radio',
      component: Radio
    },
    {
      path: '/CheckBox',
      meta: {
        title: '复选框'
      },
      name: 'CheckBox',
      component: CheckBox
    },
    {
      path: '/Input',
      meta: {
        title: '输入框'
      },
      name: 'Input',
      component: Input
    }
  ]
})

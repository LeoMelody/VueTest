import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '@/components/movie'
import Book from '@/components/book'
import Radio from '@/components/radio'

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
      path: '/radio',
      meta: {
        title: '广播'
      },
      name: 'Radio',
      component: Radio
    }
  ]
})

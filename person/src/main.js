// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vue2-animate/dist/vue2-animate.min.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import VueLazyLoad from 'vue-lazyload'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.config.productionTip = false
Vue.config.silent = true
Vue.prototype.$echarts = echarts
Vue.use(Element, {size: 'small'})
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: './assets/load.png',
  loading: './assets/load.png',
  attempt: 1
})
Vue.use(VueResource)
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

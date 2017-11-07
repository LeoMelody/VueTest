// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import vueRecource from 'vue-resource'
import 'vue2-animate/dist/vue2-animate.min.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

Vue.config.productionTip = false
Vue.config.silent = true
Vue.use(vueRecource)
Vue.use(Element, {size: 'small'})

Vue.component('banner', {
  template: `<div></div>`
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    first: 'A',
    second: 'B'
  }
})

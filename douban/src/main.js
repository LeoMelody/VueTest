// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueRecource from 'vue-resource'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false
Vue.config.silent = true
Vue.use(vueRecource)

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

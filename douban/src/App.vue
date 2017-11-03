<template>
  <div id="app">
    <v-head v-on:menu='showMenu'></v-head>
    <router-view :defaultD="defaultData" v-on:change="changeValue"/>
    <!-- <button @click="changeValue">test</button> -->
    <transition name="fadeRightBig">
      <v-menu v-show="show" :show="show"></v-menu>    
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/head.vue'
import menu from './components/menu.vue'
const ERR_OK = 0

export default {
  name: 'apppp',
  data() {
    return {
      defaultData: {},
      show: false
    }
  },
  methods: {
    sayName() {
      console.log('speak')
    },
    changeValue(val) {
      console.log(val) 
    },
    showMenu() {
      this.show = true
    }
  },
  mounted() {
    this.$http
      .get('/api/defaultData', {
        params: {
          id: '10001'
        }
      })
      .then(response => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.defaultData = response.data
          console.log(response)
        }
      })
  },
  components: {
    'v-head': header,
    'v-menu': menu
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  margin-top: 80px;
}
.container {
  margin: 0;
  padding: 0;
  padding-top: 20px;
  font-size: 32px;
}
</style>

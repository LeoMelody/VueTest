<template>
  <div id="app">
    <v-head v-on:menu='showMenu'></v-head>
    <el-container>
      <el-col :span="4" class="menu">
        <el-menu style="background-color: rgb(238, 241, 246);"
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="false"
          background-color="#fff"
          @select="changeView">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>基础组件</span>
            </template>
            <el-menu-item-group title="按钮部分">
              <router-link to="/button"><el-menu-item index="1-1">按钮</el-menu-item></router-link>
              <el-submenu index="1-2" title="Form">
                <template slot="title">Form</template>
                <el-menu-item index="1-2-1">radio</el-menu-item>
                <el-menu-item index="1-2-2">checkbox</el-menu-item>
                <el-menu-item index="1-2-3">input</el-menu-item>
                <el-menu-item index="1-2-4">inputNumber</el-menu-item>                                                
                <el-menu-item index="1-2-5">select</el-menu-item>                                                
                <el-menu-item index="1-2-6">cascader</el-menu-item>                                                
                <el-menu-item index="1-2-7">switch</el-menu-item>                                                
                <el-menu-item index="1-2-8">slider</el-menu-item>                                                
                <el-menu-item index="1-2-9">Time-picker</el-menu-item>                                                
                <el-menu-item index="1-2-10">DateTime-picker</el-menu-item>                                                
                <el-menu-item index="1-2-11">upload</el-menu-item>                                                
                <el-menu-item index="1-2-12">rate</el-menu-item>                                                
                <el-menu-item index="1-2-13">color-picker</el-menu-item>                                                
                <el-menu-item index="1-2-14">slider</el-menu-item>                                                                                              
              </el-submenu>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <!-- <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
            <el-submenu index="1-4" title="第二组">
              <template slot="title">第二组</template>
              <el-menu-item index="1-4-1">选项4</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view :defaultD="defaultData" v-on:change="changeValue" class="container"/>
      </el-col>
    </el-container>
    <!-- <button @click="changeValue">test</button> -->
    <transition name="fadeRightBig">
      <v-menu v-show="show" :show="show"></v-menu>    
    </transition>
    <div v-for="(e,i) in recent" ref="wrap">

    </div>
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
      show: false,
      recent: ['']
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
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    },
    changeView(index, indexPath) {
      switch (index) {
        case '1-2-1' : 
            this.$router.push({path: '/Radio'})
            break
        case '1-2-2' :
            this.$router.push({path: '/CheckBox'})
            break
        case '1-2-3' :
            this.$router.push({path: '/Input'})
            break
        default :
            this.$router.push({path:'/Button'})
            break
      }
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
          this.recent = response.data.recent
        }
      })
    console.log(this.$refs, this.$refs.wrap.length)
    console.log(this.$refs.wrap.length)  
  },
  components: {
    'v-head': header,
    'v-menu': menu
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  margin-top: 80px;
}
.menu {
  width: 750px;
  margin: 0 auto;
  padding: 0;
  font-size: 32px;
  flex: 1;
  .menu-head {
    font-size: 18px;
    font-weight: 600;
  }
  .el-menu-vertical-demo {
    height: 880px;
    overflow: scroll;
  }
}

.row {
    min-height: 50px;
    line-height: 50px;
    margin-bottom: 30px;
    .el-label-right {
      margin-right: 10px;
      line-height: 50px;
      vertical-align: middle;
      text-align: right;
      font-size: 16px;
    }
    .el-label-left {
      margin-left: 10px;
      line-height: 50px;
      vertical-align: middle;
      text-align: left;
      font-size: 16px;
    }
  }

.container {
  padding-top: 20px;
}
</style>

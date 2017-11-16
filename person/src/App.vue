<template>
  <div id="app">
    <!-- head start-->
    <el-header>
      <h1>
        <a href="/">Leo</a>
      </h1>
      <!-- head menu -->
      <div class="menu-list">
        <el-menu mode="horizontal" @select="menuSelect" :default-active="activeIndex">
          <el-menu-item index="1">HOME</el-menu-item>
          <el-menu-item index="2">BLOG</el-menu-item>
          <el-menu-item index="3">WORK</el-menu-item>
          <el-menu-item index="4">ECHARTS</el-menu-item>
          <el-menu-item index="5">FUTURE</el-menu-item>
        </el-menu>
        <el-popover ref="popover1" placement="bottom-start" :title="cityName+`天气`" width="200" trigger="hover" :content="content">

        </el-popover>
        <h2 @mouseenter="showDia">
          <i class="el-icon-location-outline" v-popover:popover1>{{cityName}}</i>
        </h2>
      </div>
    </el-header>
    <!-- head end -->
    <!-- back -->
    <router-view style="padding-top: 60px;">
    </router-view>
    <!-- <el-footer></el-footer> -->
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        cityName: '深圳市',
        content: '深圳市深圳市深圳市深圳市深圳市深圳市深圳市'
      }
    },
    methods: {
      menuSelect(index) {
        // 处理页面上的跳转
        switch (index) {
          case '1':
            this.$router.push({
              path: '/'
            })
            this.changeIndex('1')
            break
          case '2':
            this.$router.push({
              path: '/blog'
            })
            this.changeIndex('2')            
            break
          case '4':
            this.$router.push({
              path: '/echarts'
            })  
            this.changeIndex('4')            
            break
          case '5':
            this.$router.push({
              path: '/future'
            })  
            this.changeIndex('5')
            break
          default:
            this.$router.push({
              path: '/'
            })
            this.changeIndex('1')
            break
        }
      },
      showDia() {
        
      },
      changeIndex(str) {
        this.$store.commit('changeIndex', str)
      }
    },
    computed: {
      ...mapGetters({
        activeIndex: 'getIndex'
      })
    }
  }
</script>

<style lang="scss" scoped>
  h1,
  h2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 60px;
  }
  .text {
      font-family: 'Microsoft YaHei', 'Arial Narrow', Arial, sans-serif;
      line-height: 24px;
      font-size: 16px;
      text-align: left;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50 ;
    .el-header {
      width: 100%;
      padding-top: 0;
      display: flex;
      justify-content: space-between;
      position: fixed;
      z-index: 999;
      background: rgba(255, 255, 255, 0.8);
      h1 {
        font-size: 32px;
        width: 100px;
        cursor: pointer;
        a {
          color: #333;
        }
      }
      .menu-list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        h2 {
          margin: 0 10px;
          font-size: 16px;
          cursor: pointer;
        }
        .el-menu {
          background: rgba(255, 255, 255, 0.8);
          .el-menu-item {
            background: rgba(255, 255, 255, 0.8);
          }
        }
      }
    }
  }

</style>

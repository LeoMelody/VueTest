<template>
    <el-row>
      <el-col :span="5">
        <h3>博客目录</h3>
        <el-menu :default-active="blogActiveIndex" @select="blogSelect" :router="true" default-openeds="['B-1']">
          <el-submenu index="B-1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>基础</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="B-1-1" route="/blog/js">JavaScript</el-menu-item>
              <el-menu-item index="B-1-2">HTML</el-menu-item>
              <el-menu-item index="B-1-3">CSS</el-menu-item>              
           </el-menu-item-group>
          </el-submenu>
          <el-submenu index="B-2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>基础</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="B-2-1">JavaScript</el-menu-item>
              <el-menu-item index="B-2-2">HTML</el-menu-item>
              <el-menu-item index="B-2-3">CSS</el-menu-item>       
            </el-menu-item-group>  
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18" push="1">
        <router-view>

        </router-view>
      </el-col>
    </el-row>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    blogSelect(index) {
      console.log(index)
    }
  },
  mounted() {
    this.$store.commit('changeIndex', '2') // 先要找到对应的index的状态
  },
  computed: {
    blogActiveIndex() {
      return this.$store.state.menu.blogActiveIndex
    }
  }
}
</script>

<style lang="scss">
  .el-row {
    .el-col {
      .el-menu {
        border: none;
        .el-menu-item-group__title {
          margin: 0;
          padding: 0;
          border: none;
          height: 0;
        }
      }
    }
    .el-col-5 {
        border-right: solid 1px #e6e6e6;
        padding: 50px 0;
    }
  }
</style>


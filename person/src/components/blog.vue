<template>
    <el-row>
      <el-col :span="5" class="side-menu">
        <h3>博客目录</h3>
        <el-menu :default-active="blogActiveIndex" @select="blogSelect" :router="true" :default-openeds="['B-1']">
          <el-submenu index="B-1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>基础</span>
            </template>
            <el-menu-item-group >
              <el-menu-item index="B-1-1" route="/blog/js">JavaScript</el-menu-item>
              <el-menu-item index="B-1-2" route="/blog/html">HTML</el-menu-item>
              <el-menu-item index="B-1-3" route="/blog/css">CSS</el-menu-item>              
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
      <el-col :span="18" push="6">
        <router-view class="blog-wrapper">

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
    .el-col-18 {
      padding: 50px 0 0 0;
      .blog-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
    .side-menu {
      position: fixed;
      overflow-y: scroll;
      top: 80px;
      left: 0;
      bottom: 0;
    }
    /*
      滚动条样式设定。分别为滚动条宽度
      track 滑轨
      thumb 滑块
      button 滑轨两端
      corner 滑轨两端箭头
    */
    ::-webkit-scrollbar {
        width: 5px;
    } 
    ::-webkit-scrollbar-track {
		  background-color: #fff;
	  } 
    ::-webkit-scrollbar-thumb {
		  background-color: rgba(0, 0, 0, 0.2);
      height: 30px; 
	  }
  }


</style>


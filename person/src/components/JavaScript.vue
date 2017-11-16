<template>
  <div>
      <el-card v-for="(e,i) in jsBlog" :key="e.id">
        <div slot="header">
          <span>{{e.title}}</span>
        </div>
        <div class="text">
          <span>关键字:</span> <span v-for="(item,index) in e.keywords" class="span-text" :style="{color: colorList[Math.floor(Math.random()*7)]}"> {{item}}&emsp; </span>
          <p>简介:{{e.profile}}</p>
          <p class="text-content">This is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototypeThis is my first blog,which is about JS prototype</p>          
          <p class="text-date">{{e.date}}</p>
        </div>
        <div class="foot">
          <el-button type="text" class="text">阅读全文</el-button>
          <i class="el-icon-arrow-down"></i>
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorList: ['#2384E8', '#9F7860', '#E4A813', '#2AB8CC', 'rgb(122, 106, 219)', 'rgb(159, 120, 96)', 'rgb(244, 143, 46)']
    }
  },
  mounted() {
    this.getBlog()
  },
  methods: {
    getBlog() {
      this.$store.dispatch('getJsBlog')
    }
  },
  computed: {
    jsBlog() {
      return this.$store.state.blog.jsBlog
    }
  }
}
</script>

<style lang="scss">
 @import '../assets/scss/base.scss';
  .el-card {
    margin: 50px 0;
    width: 700px;
    .text{
      text-align: left;
      font-size: 16px;
      p {
        margin: 10px 0;
        line-height: 26px;
      }
      .text-content {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .text-date {
        font-size: 14px;
        color: #666;
      }
    }
    .foot {
      margin-top: 20px;
    }
  }
  .el-card:first-child {
    margin-top: 0;
  }
</style>

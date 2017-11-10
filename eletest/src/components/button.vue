<template>
  <div class="btn-wrapper container">
    <el-button type="primary">我是primary</el-button>
    <el-button type="info" plain>我是PlainInfo</el-button> 
    <el-button type="success" round>我是RoundS</el-button>
    <br>
    <br>
    <el-button type="danger" disabled>我是不可用</el-button>
    <br>
    <br>
    <el-button type="text">文字按钮？</el-button>
    <br>
    <br>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <!-- 对于图标按钮而言，图标都是在左边的 -->
    <br>
    <br>
    <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>  
    <br>
    <br>
    <el-button :loading="true" type="warning">加载</el-button>
    <br>
    <br>  
    <el-button @click="btnDoc" type="text" style="font-size: 16px;margin-top: 30px;">看文档</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    btnDoc() {
      window.open('http://element-cn.eleme.io/#/zh-CN/component/button')
    }
  }
}
</script>

<style lang="scss">
    .btn-wrapper {

    }
</style>

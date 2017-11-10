<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-menu default-active="1-1">
          <el-submenu>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>员工管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">员工列表</el-menu-item>
              <el-menu-item index="1-2">员工工资</el-menu-item>
              <el-menu-item index="1-2">员工健康</el-menu-item>              
           </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    console.log('blog-start')
  }
}
</script>

<style lang="scss">
  .el-row {
    .el-col {
      .el-menu {
        .el-menu-item-group__title {
          margin: 0;
          padding: 0;
          border: none;
          height: 0;
        }
      }
    }
  }
</style>


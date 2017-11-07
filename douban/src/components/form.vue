<template>
  <div class="container">
      <div class="radio">
          <span class="label">单选框:</span>
          <el-radio v-model="radio" :label="1" @change="chooseRadio">选项1</el-radio>
          <el-radio v-model="radio" :label="2" @change="chooseRadio">选项2</el-radio>
          <el-button type="text" class="label label-left" @click="resetRadio('radio')">恢复</el-button>          
          <span class="label-left">当前值:{{radio}}</span>          
      </div>
      <div class="radio">
          <span class="label">禁用单选框:</span>
          <el-radio v-model="radio2" :label="1" disabled>选项1</el-radio>
          <el-radio v-model="radio2" :label="2">选项2</el-radio>
          <el-radio v-model="radio2" :label="3">选项3</el-radio>   
          <el-button type="text" class="label label-left" @click="resetRadio('radio2')">恢复</el-button>
          <span class="label-left">当前值:{{radio2}}</span>                                     
      </div>
      <div class="radio">
          <span class="label">单选框组:</span>          
          <el-radio-group v-model="radio3">
             <el-radio :label="1">选项1</el-radio>
             <el-radio :label="2">选项2</el-radio>
             <el-radio :label="3">选项3</el-radio>          
          </el-radio-group>
          <el-button type="text" class="label label-left" @click="resetRadio('radio3')">恢复</el-button>  
          <span class="label-left">当前值:{{radio3}}</span>                                                       
      </div>
      <el-button @click="formDoc" type="text" style="font-size: 16px;margin-top: 30px;">看文档</el-button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          radio: 0,
          radio2: 0,
          radio3: 0
      }
  },
  methods: {
      chooseRadio() {
          // console.log(this.$data.radio)
      },
      resetRadio(str) {
          this.$data[str] = 0;
      },
      formDoc() {
          window.open('http://element-cn.eleme.io/#/zh-CN/component/radio')
      }
  }
}
</script>

<style lang="scss">
    .radio {
        margin-bottom: 40px;
        span.label {
            font-size: 16px;
            margin-right: 40px;
        }
        .label-left {
            font-size: 16px;
            margin-left: 40px;            
        }
    }
</style>

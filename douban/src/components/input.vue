<template>
  <div>
    <el-row class="row">
      <el-col span="8" class="el-label-right">
        普通输入框：
      </el-col>
      <el-col span="12" class="el-label-left">
        <el-input v-model="input1" placeholder="请输入" size="small" class="default-input"></el-input>
        <span class="el-label-left">输入值:{{input1}}</span>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col span="8" class="el-label-right">
        禁用输入框：
      </el-col>
      <el-col span="12" class="el-label-left">
        <el-input v-model="input1" placeholder="请输入" size="small" class="default-input" disabled></el-input>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col span="8" class="el-label-right">
        icon输入框(前置，后置，slot方式)：
      </el-col>
      <el-col span="12" class="el-label-left">
        <el-input placeholder="请输入" size="small" class="default-input" suffix-icon="el-icon-search"></el-input>
        <el-input placeholder="请输入" size="small" class="default-input" prefix-icon="el-icon-date"></el-input>
        <el-input placeholder="请输入" size="small" class="default-input">
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col span="8" class="el-label-right">
        文本域：
      </el-col>
      <el-col span="12" class="el-label-left">
        <el-input type="textarea" :rows="2" placeholder="请输入" v-model="textarea" autosize>

        </el-input>
        <span class="el-label-left">输入内容:{{textarea}}</span>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col span="8" class="el-label-right">
        复合输入框：
      </el-col>
      <el-col span="12" class="el-label-left">
        <el-input placeholder="请输入内容" v-model="input3" class="fix-input">
          <template slot="prepend">Http://</template>
        </el-input>
        <br>
        <el-input placeholder="请输入内容" class="fix-input">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="请选择" value=""></el-option>                
                <el-option label="optionA" value="1"></el-option>
                <el-option label="optionB" value="2"></el-option>
                <el-option label="optionC" value="3"></el-option>                
            </el-select>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="row">
        <el-col style="font-size:18px;">
            还有一部分就是远程搜索的或者说是建议输入的。详情见文档：
        </el-col>            
        <el-button @click="inputDoc" type="text" style="font-size: 16px;margin-top: 30px;">看文档</el-button>

    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        textarea: '',
        select: ''
      }
    },
    methods: {
        inputDoc() {
            window.open('http://element-cn.eleme.io/#/zh-CN/component/input')
        }
    }
  }
</script>

<style lang="scss">
  .default-input {
    width: 200px;
  }

  .fix-input {
    width: 400px;
  }

  .el-select {
      width: 130px;
  }
</style>

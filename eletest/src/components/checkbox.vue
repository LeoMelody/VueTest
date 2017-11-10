<template>
  <div>
    <el-row class="row">
      <el-col :span="8" class="el-label-right">
        复选框1：
      </el-col>
      <el-col :span="12" class="el-label-left">
        <el-checkbox v-model="checkbox1">选择</el-checkbox>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="8" class="el-label-right">
        禁用复选框：
      </el-col>
      <el-col :span="12" class="el-label-left">
        <el-checkbox v-model="checkbox1" disabled>选择</el-checkbox>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="8" class="el-label-right">
        复选框组：
      </el-col>
      <el-col :span="12" class="el-label-left">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="A"></el-checkbox>
          <el-checkbox label="B"></el-checkbox>
          <el-checkbox label="C"></el-checkbox>
          <el-checkbox label="D"></el-checkbox>
          <el-checkbox label="E"></el-checkbox>          
        </el-checkbox-group>
        <el-button type="primary" round @click="getList">获取列表</el-button>
        <el-button type="text" @click="reset('checkList')">恢复</el-button>  
        <el-col v-show="showList">{{checkList}}</el-col>    
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="8" class="el-label-right">
        全选框组：
      </el-col>
      <el-col :span="12" class="el-label-left">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAll">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCity"  @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cityList" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="8" class="el-label-right">
        可选数目复选框：
      </el-col>
      <el-col :span="12" class="el-label-left">
        <el-checkbox-group v-model="checkedCity2" :min="1" :max="3">
          <el-checkbox v-for="city in cityList" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="8" class="el-label-right">
        按钮复选框：
      </el-col>
      <el-col :span="12" class="el-label-left">
        <el-checkbox-group v-model="checkedCity3">
          <el-checkbox-button v-for="city in cityList" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </el-col>
    </el-row>

    <el-button @click="checkDoc" type="text" style="font-size: 16px;margin-top: 30px;">看文档</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkbox1: true,
        checkList: ['A', 'E'],
        cityList: ['北京', '上海', '南京', '杭州'],
        checkedCity: ['北京', '上海'],
        checkedCity2: ['北京', '上海'], 
        checkedCity3: ['北京', '上海'],                       
        checkAll: false,
        showList: false,
        isIndeterminate: true      
      }
    },
    methods: {
      getList() {
        //console.log(this.$data.checkList)
        this.$data.showList = true
      },
      reset(str) {
        switch (str) {
          case 'checkList':
            this.$data.checkList = ['A', 'E']
            this.$data.showList = false
            break  
        }
      },
      handleCheckAll(val) { // 这里传入的这个val是绑定在这个元素上的checkAll
        this.checkedCity = val ? this.cityList : []
        this.isIndeterminate = false
      },
      handleCheckedCitiesChange(val) {
        var count = val.length
        this.checkAll = count === this.cityList.length
        this.isIndeterminate = count > 0 && count < this.cityList.length 
      },
      checkDoc() {
        window.open('http://element-cn.eleme.io/#/zh-CN/component/checkbox')
      }
    }
  }
</script>

<style lang="scss">
  
</style>

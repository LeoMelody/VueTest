<template>
  <div>
    <el-container class="back">
      <transition name="zoom">
        <el-aside class="float-box" v-show="isFloatBoxShow">
          测试测试
        </el-aside>      
      </transition>
    </el-container>
    <!-- skill wrapper -->
    <el-container class="wrapper">
      <h2>MY SKILL
        <i class="el-icon-service"></i>
      </h2>
      <!-- some items -->
      <el-row class="skill-item">
        <el-col :span="8">
          <img src="../assets/logo.png" alt="logo" class="vue-logo">
        </el-col>
        <el-col :span="16">
          <el-select v-model="styleValue" placeholder="请选择" @change="styleSelect" clearable>
            <el-option v-for="item in styleList" :key="item.name" :label="item.name" :value="item.name" :disabled="item.disabled"></el-option>
          </el-select>
          <transition name="">
            <el-row v-show="styleValue == 'CSS'">
              <el-col :span="8" push="6">
                <el-progress :percentage="cssValue" type="circle" stroke-width="8">
                </el-progress>
                <el-input-number v-model="cssValue" :min="30" :max="99" :step="2">
                </el-input-number>
              </el-col>
              <el-col :span="10" push="6" class="text">
                CSS基础知识CSS基础知识CSS基础知识CSS基础知识CSS基础知识CSS基础知识CSS基础知识
              </el-col>
            </el-row>
          </transition>
          <el-row v-show="styleValue == 'Sass'">
            <el-col :span="6"></el-col>
            <el-col :span="12" push="2">
              <el-steps :active="sassActive" direction="vertical">
                <el-step title="初级" description="some description"></el-step>
                <el-step title="中级" description="some description"></el-step>
                <el-step title="高级" description="some description"></el-step>
              </el-steps>
            </el-col>
            <el-col :span="6">
              <el-button type="text" @click="nextSassLevel">下一步</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="skill-item">
        <el-col :span="16">
          <el-row class="row">
            <el-col :span="8" push="2">
              <el-switch v-model="htmlSwitch" active-text="显示" inactive-text="隐藏">

              </el-switch>
            </el-col>
            <transition name="zoom">
              <el-col :span="12" push="4" v-show="htmlSwitch" class="text">
                HTML基础知识JS基础知识HTML基础知识HTML基础知识HTML基础知识HTML基础知识
              </el-col>
            </transition>
          </el-row>
        </el-col>
        <el-col :span="8">
          <img src="../assets/logo.png" alt="logo" class="vue-logo">
        </el-col>
      </el-row>
      <el-row class="skill-item">
        <el-col :span="8">
          <img src="../assets/logo.png" alt="logo" class="vue-logo">
        </el-col>
        <el-col :span="16">
          <el-card class="skill-card">
            <div slot="header">
              <span>JS卡片</span>
              <el-button type="text" class="text" @click="showJsAdd">添加</el-button>
              <el-button type="text" class="text" @click="hideJsAdd">隐藏</el-button>
            </div>
            <div v-for="(item,index) in jsCards" :key="item" class="text">
              {{index+1}}、{{item}}
            </div>
            <transition name="slideDown">
              <el-row v-show="hasJsAdd">
                <el-col :span="14">
                  <el-input placeholder="请输入新条目" v-model="newJSItem" prefix-icon="el-icon-edit" size="medium" class=""></el-input>
                </el-col>
                <el-popover ref="jspop" placement="top-start" width="200" trigger="click" :content="popText">
                </el-popover>
                <el-button type="primary" @click="addJsItem" v-popover:jspop>添加</el-button>
              </el-row>
            </transition>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
    <!-- other wrapper -->
    <el-container class="wrapper">
      <h2>STUDY
        <i class="el-icon-more-outline"></i>
      </h2>
      <div class="block">
        <el-carousel indicator-position="outside" height="512px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-container>
    <el-aside></el-aside>
    <v-son1 :son="son">

    </v-son1>
    <v-son2 :son="son">

    </v-son2>
  </div>
</template>

<script>
  import son1 from '@/components/son1'
  import son2 from '@/components/son2'

  export default {
    name: 'app',
    data() {
      return {
        styleList: [{
          'name': 'CSS'
        }, {
          'name': 'Sass'
        }, {
          'name': 'Less',
          'disabled': true
        }],
        styleValue: '',
        cssValue: 70,
        sassActive: 0,
        htmlSwitch: true,
        jsCards: ['ECMAScript', 'DOM', 'BOM', 'Others'],
        newJSItem: '',
        hasJsAdd: false,
        popText: '',
        son: 'father',
        isFloatBoxShow: false
      }
    },
    methods: {
      styleSelect(val) {
        console.log(val)
      },
      nextSassLevel() {
        if (this.sassActive++ > 2) this.sassActive = 0
      },
      addJsItem() {
        var item = this.newJSItem
        this.newJSItem = ''
        if (item === '' || item === null || item === undefined) {
          // 显示小tap
          this.popText = '请输入有效内容'
        } else {
          this.jsCards.push(item)
          // 显示小tap
          this.popText = '添加成功'
        }
      },
      showJsAdd() {
        this.hasJsAdd = true
      },
      hideJsAdd() {
        this.hasJsAdd = false
        this.newJSItem = ''
      },
      test() {
        console.log('test')
      }
    },
    components: {
      'v-son1': son1,
      'v-son2': son2
    },
    mounted() {
      var that = this
      setTimeout(function() {
        that.isFloatBoxShow = true
      }, 1000)
      that.$store.commit('changeIndex', '1')
    }
  }
</script>


<style lang="scss">
  @import '../assets/scss/base.scss';


  .back {
    width: 100%;
    min-height: 800px;
    background-image: url('../assets/back.jpg');
    background-repeat: no-repeat;
    background-size: 100% 800px;
    
    .float-box {
      margin: auto;
      opacity: 0.8;
      padding: 0;
      height: 400px;
      background: #fff;
      float: left;
      z-index: 999;
      box-shadow: 0px 0px 10px #555;
    }
  }

  .wrapper {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      margin: 20px;
    }
    h2:after {
      content: '';
      width: 80px;
      height: 3px;
      border: none;
      background-color: #1d7cdc;
      position: absolute;
      left: 50%;
      margin-left: -40px;
      margin-top: 40px;
    }
    .skill-item {
      width: 950px;
      margin: 0 auto;
      padding: 10px;
      .el-col {
        padding: 10px 0;
      }
      .el-col-8 {
        align-self: center;
      }
      .el-col-16 {
        padding: 10px 0;
        .el-col {
          padding: 10px 0;
          .el-input-number {
            margin-top: 10px;
          }
        }
        .el-button {
          margin-top: 10px;
        }
      }
      .vue-logo {
        filter: grayscale(30%);
        transition: transform .5s;
        cursor: pointer;
      }
      .vue-logo:hover {
        & {
          filter: grayscale(0);
          transform: scale(1.15)
        }
      }
    }
    .block {
      margin: 50px 0;
      width: 820px;
      height: 512px;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }
      .el-carousel__item:nth-child(4n) {
        background: carousel-back(4);
      }
      .el-carousel__item:nth-child(4n-1) {
        background: carousel-back(3);
      }
      .el-carousel__item:nth-child(4n-2) {
        background: carousel-back(2);
      }
      .el-carousel__item:nth-child(4n-3) {
        background: carousel-back(1);
      }
      .el-carousel__item {
        background-size: 820px 512px;
        background-repeat: no-repeat;
      }
    }
  }

  .el-footer {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>

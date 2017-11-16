<template>
  <div>
      <div id="myChart" :style="{width: '600px',height: '300px'}"></div>
      <el-button type="text" @click="getHeavy">获取体重表</el-button>
      <div id="heavyChart" style="width: 800px;height: 400px" v-show="showHeavy"></div>
  </div>
</template>

<script>
import api from '../fetch/api'

export default {
  data() {
    return {
      heavy : {},
      showHeavy: false
    }
  },
  mounted() {
    this.$store.commit('changeIndex', '4')
    this.drawLine()
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      })
    },
    getHeavy() {
      var that = this
      api.getMock()
        .then(res => {
          if (res) {
            that.heavy = res.echart.heavy
            that.showHeavy = true
            that.drawHeavy(that.heavy)         
          }
        })
    },
    drawHeavy(heavy) {
      let heavyChart = this.$echarts.init(document.getElementById('heavyChart'))
      // 绘制图表
      heavyChart.setOption({
        title: {text: '体重表'},
        tooltip: {},
        xAxis: {
          data: heavy.month
        },
        yAxis: {},
        series: [{
          name: '体重',
          type: 'line',
          data: heavy.value
        }]
      })
    }
  }
}
</script>


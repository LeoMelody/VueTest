<template>
  <div>
      <span>{{son}}</span>
      <span>{{count}}</span>
      <span>{{person}}</span>
      <el-button @click="increBynum(2)">按钮1</el-button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'

export default {
  data() {
      return {
         
      }
  },
  methods: {
      // changeson() {
      //   //$store.commit('increment')
      //   this.$store.commit('increment')
      // }
      ...mapMutations(['increment']),
      ...mapMutations({
        increBynum: 'increBynum'
      })
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    ...mapState(['name']),
    person() {
      return this.$store.getters.getSmall(18)[0].name
    }
  }
}
</script>


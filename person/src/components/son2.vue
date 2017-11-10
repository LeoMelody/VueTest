<template>
  <div>
     {{son}} {{count}}
     <button @click="changeson">按钮2</button>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  data() {
      return {

      }
  },
  props: ['son'],
  methods: {
      changeson() {
        //$store.commit('increment')
        this.$store.commit('decrement')
      }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    person() {
        return this.$store.getters.getSeven
    }
  }
}
</script>

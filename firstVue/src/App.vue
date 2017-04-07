<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import $ from 'jquery'
  window.$ = $;
  window.jQuery = $;

  export default {
  name: 'app',
  $
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*过渡的动画*/
/*定义进入和离开的变化规则*/


.slide-enter-active{
  transition: all 0.3s linear;
}
.slide-leave-active {
  transition: all 0.3s linear;
  transform: translate(-100%);
}
.slide-enter{
  transform: translateX(100%);
}

</style>

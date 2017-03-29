<template>
  <div id="app">
    <transition name="slide">
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
.slide-leave{
  transition: all 0.3s linear;
  transform: translate(-100%);
}
.slide-enter-active{
  transform: translate(100%);
}

/*.slide-enter-active,
.slide_back-enter-active {
  transition: all 0.3s linear;
}
.slide-leave-active {
  position: absolute;
  transition: all 0.3s linear;
  transform: translate(-100%);
}
.slide-enter{
  transform: translateX(100%);
}
.slide_back-leave-active {
  position: absolute;
  transition: all 0.3s linear;
  transform: translate(100%);
}
.slide_back-enter {
  transform: translateX(-100%);
}*/

</style>

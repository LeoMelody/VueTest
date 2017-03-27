<template>
  <div class="container">
    <home-head  v-bind:title="title">

    </home-head>
    <info>

    </info>
  </div>
</template>
<script>
  import HomeHead from '../components/Head'
  import Info from '../components/infor'

  export default{
    data(){
      return{
        title:'Detail'
      }
    },
    components:{
      HomeHead,
      Info
    }
  }
</script>
<style>

</style>

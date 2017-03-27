<template>
  <div class="container">
    <home-head  v-bind:title="title">

    </home-head>
    <list>

    </list>
  </div>
</template>
<script>

  import HomeHead from '../components/Head'
  import List from '../components/List'

  export default{
      data(){
          return{
              title:'Home'
          }
      },
    components:{
          HomeHead,
          List
      }
  }
</script>
<style>

</style>

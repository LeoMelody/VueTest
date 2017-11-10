<template>
    <div class="container">
        {{movieName}} || {{movieData}}
    </div>
</template>

<script>
   export default {
       data() {
           return {
               movieName: '战狼',
               movieData: '2017-08-01'
           }
       },
       methods: {
           getName() {
               return this.movieName
           }
       }
   }
</script>

<style>
    
</style>
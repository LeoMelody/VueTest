<template>
    <div>
      book
    </div>
</template>

<script>
    export default{
      data() {
          return {
            testMsg: ''   
          }
      },
      props: ['testNum'],
      methods: {
      },
      mounted() {
        this.testMsg = this.$parent.testMsg
      }
    }
</script>

<style>

</style>
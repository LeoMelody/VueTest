<template>
  <div>
    <el-row>
      <el-col :span="24"><div>1234</div></el-col>
    </el-row>
  </div>  
</template>

<script>
const ERR_OK = 0

export default {
  data() {
    return {
      defaultData:{},
      username: ''
    };
  },
  methods: {
    changeName() {
      this.$emit('change', this.username)
    }
  },
  props:{
    defaultD:{
      type: Object
    }
  }
};
</script>

<style lang="scss">
  .font-area input,button {
    font-size: 32px;
  }
  #input-name {
    width: 300px;
    height: 50px;
    font-size: 32px;
    line-height: 50px;
  }
  
</style>

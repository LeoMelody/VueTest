<template>
    <div class="container">
      <div>
        Hello {{defaultD.username}}
      </div>
      <div>
        您的爱好:
        <ul>
          <li v-for="item in defaultD.habit">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="form-area">
        <input type="text" name="" id="input-name" placeholder="新的名字" v-model="username">
        <button @click="changeName">修改</button>
      </div>
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

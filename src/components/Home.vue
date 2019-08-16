<template>
  <div>
    <h2>这是首页--{{msg}}</h2>
    <button @click="run()">执行</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是首页"
    };
  },
  methods: {
    run() {
      alert(this.msg);
    }
  }
};
</script>

<style lang="less" scoped>
h2 {
  color: red;
}
</style>
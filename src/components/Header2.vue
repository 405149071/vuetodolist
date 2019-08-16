<template>
  <div id="header">
    <h2>这是头部2</h2>
    <button @click="callParent()">调用父组件的数据和方法</button>
  </div>
</template>

<script>
// 子组件主动调用父组件的数据和方法
// this.$parent.msg
// this.$parent.run()
export default {
  data() {
    return {
      msg: "子组件msg"
    };
  },

  mounted() {
    console.log("这是头部组件mounted");
  },
  methods: {
    run() {
      alert("我是子组件的run方法");
    },
    callParent() {
      alert(this.$parent.msg);
      this.$parent.run();
    }
  }
};
</script>

<style scoped>
#header {
  background-color: black;
  color: #999;
}
</style>
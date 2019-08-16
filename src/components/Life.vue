<template>
  <div id="life">
    生命周期的演示
    ---{{msg}}
    <button @click="setmsg()">执行方法改变</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "我是生命周期的函数"
    };
  },
  methods: {
    setmsg() {
      this.msg = "我是改变后的数据";
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>
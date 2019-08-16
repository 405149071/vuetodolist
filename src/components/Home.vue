<template>
  <div>
    <h2>这是首页--{{msg}}</h2>
    <v-header />
    <br />
    <button @click="run()">执行</button>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  data() {
    return {
      msg: "这是首页"
    };
  },
  components: {
    "v-header": Header
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
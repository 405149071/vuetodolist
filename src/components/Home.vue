<template>
  <div>
    <h2>这是首页--{{msg}}</h2>
    <v-header />
    <br />
    <hr />
    <v-life v-if="lifeflg" />
    <hr />
    <button @click="run()">执行</button>
    <button @click="unlife()">卸载life</button>
    <button @click="getData()">resource请求数据</button>
    <ul>
      <li v-for="item in list">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import Header from "../components/Header";
// 引入生命周期演示vue
import Life from "../components/Life";

export default {
  data() {
    return {
      msg: "这是首页",
      lifeflg: true,
      list: []
    };
  },
  components: {
    "v-header": Header,
    "v-life": Life
  },
  methods: {
    run() {
      alert(this.msg);
    },
    unlife() {
      this.lifeflg = false;
    },
    getData() {
      var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=1";
      this.$http.get(api).then(
        res => {
          console.log(res);
          this.list = res.body.result;
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
h2 {
  color: red;
}
</style>
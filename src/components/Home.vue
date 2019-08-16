<template>
  <div>
    <h2>这是首页--{{msg}}</h2>
    <v-header :title="title" :msg="msg" :run="run" :home="this" />
    <br />
    <header class="header">
      <router-link to="/home2">首页</router-link>|
      <router-link to="/news">新闻</router-link>|
      <router-link to="/todo">日记</router-link>
    </header>
    <hr />
    <v-life v-if="lifeflg" />
    <hr />
    <button @click="emitNews()">给news组件广播数据</button>
    <hr />
    <button @click="run()">执行</button>
    <button @click="unlife()">卸载life</button>
    <button @click="getData()">resource请求数据</button>
    <button @click="goNews()">js跳转页面</button>
    <ul>
      <li v-for="item in list">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import Header from "../components/Header";
// 引入生命周期演示vue
import Life from "../components/Life";
// 引入axios , 哪里用哪里写，不能像vue-resource的全局使用，如果想全局使用必须单独配置，百度搜
import Axios from "axios";

// 引入广播实例
import VueEvent from "../model/VueEvent";

export default {
  data() {
    return {
      msg: "这是首页",
      lifeflg: true,
      list: [],
      // 传给子组件的内容
      title: "首页"
    };
  },
  components: {
    "v-header": Header,
    "v-life": Life
  },
  methods: {
    run(data) {
      alert("我是首页父组件的run" + data);
    },
    unlife() {
      this.lifeflg = false;
    },
    getData() {
      var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=1";
      // vue-resource
      // this.$http.get(api).then(
      //   res => {
      //     console.log(res);
      //     this.list = res.body.result;
      //   },
      //   err => {
      //     console.log(err);
      //   }
      // );
      // axios
      Axios.get(api)
        .then(res => {
          console.log(res);
          this.list = res.data.result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 非父子组件通信
    // 另组件监听广播，这个组件发送广播
    // ， 需要一个新的VUE实例，vueevent，引入
    emitNews() {
      VueEvent.$emit("to-news", this.msg);
    },
    goNews() {
      // 一种方式 使用路由
      // this.$router.push("/news");
      // 也支持动态路由和传参数
      // 另外一种方式,使用name，name需要在route.js里定义
      this.$router.push({ name: "news" });
    }
  }
};
</script>

<style lang="less" scoped>
h2 {
  color: red;
}
</style>
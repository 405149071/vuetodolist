<template>
  <div id="app">
    <!-- <v-home />
    <Home />
    <hr />
    <v-news />
    <hr />-->
    <!-- <Todo /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
    <h2>我是根组件</h2>
  </div>
</template>

<script>
import storage from "./model/storage.js";
// console.log(storage, "1111");
//挂在home
import Home from "./components/Home";
import Todo from "./components/Todo";
import News from "./components/News";

export default {
  name: "home",
  components: {
    "v-home": Home, // 1,给组件起名字
    Home, //组件
    // HelloWorld,
    Todo,
    "v-news": News
  }
};
</script>

<style lang="less">
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

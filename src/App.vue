<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
    <input type="text" v-model="todo" />
    <button @click="add">+增加</button>
    <br />
    <hr />
    <ul>
      <li v-for="(item,key) in list">
        {{key}}--{{item}} -------
        <button @click="remove(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      todo: "",
      list: []
    };
  },
  methods: {
    add() {
      this.list.push(this.todo);
      this.todo = "";
    },
    remove(index) {
      this.list.splice(index, 1);
    }
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

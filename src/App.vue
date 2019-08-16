<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
    <input type="text" v-model="todo.title" @keypress="add" />
    <!-- <button @click="add">+增加</button> -->
    <br />
    <hr />
    <ul>
      运行中
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" @click="done(key,true)" v-model="item.checked" />
        {{key}}--{{item.title}} -------
        <button @click="remove(key)">删除</button>
      </li>
    </ul>

    <hr />
    <ul>
      运行完
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" @click="done(key,false)" v-model="item.checked" />
        {{key}}--{{item.title}} -------
        <button @click="remove(key)">删除</button>
      </li>
    </ul>
    <button @click="getlist()">获取list的值</button>
  </div>
</template>

<script>
import storage from "./model/storage.js";
console.log(storage, "1111");
export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      todo: { title: "", checked: false },
      list: []
      //[{ title: "aaaa", checked: true }, { title: "bbbb", checked: false }]
    };
  },
  mounted() {
    var list = storage.get("list");
    if (list) {
      this.list = list;
    }
  },
  methods: {
    add(e) {
      // console.log(e.keyCode);
      if (e.keyCode == 13) {
        this.list.push({ title: this.todo.title, checked: false });
        this.todo.title = "";
        storage.set("list", this.list);
      }
    },
    remove(index) {
      this.list.splice(index, 1);
      storage.set("list", this.list);
    },
    done(index, isdone) {
      this.list[index].checked = isdone;
      storage.set("list", this.list);
    },
    getlist() {
      console.log(this.list);
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

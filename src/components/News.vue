<template>
  <div>
    <v-header2 ref="header2" />
    <h2>这是新闻页面</h2>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+ key +'?cc=888&index='+ key ">{{key}}---{{item.title}}</router-link>
      </li>
    </ul>
    <button @click="callsub()">调用子组件数据和方法</button>
  </div>
</template>

<script>
// 父组件主动调用子组件的数据和方法
// 1, <v-header ref="header" />
// 2 this.$refs.header.msg // 数据
// this.$refs.header.run() // 方法
import Header2 from "../components/Header2";
// 引入广播实例 (监听广播数据)
import VueEvent from "../model/VueEvent";

export default {
  data() {
    return {
      msg: "我是父组件msg",
      title: "新闻",
      list: [
        { id: 1, title: "地铁啊" },
        { id: 2, title: "天安门" },
        { id: 3, title: "老张" }
      ]
    };
  },
  mounted() {
    // 监听
    VueEvent.$on("to-news", data => {
      alert(data);
    });
  },
  components: {
    "v-header2": Header2
  },
  methods: {
    run() {
      alert("我是新闻父组件的run");
    },
    callsub() {
      alert(this.$refs.header2.msg); // 数据
      this.$refs.header2.run();
    }
  }
};
</script>
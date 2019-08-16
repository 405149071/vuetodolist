<template>
  <div>
    <v-header2 ref="header2" />
    <h2>这是新闻页面</h2>
    <!-- <ul class="list">
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+ item.aid +'?cc=888&index='+ key ">{{key}}---{{item.title}}</router-link>
      </li>
    </ul>-->
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
    >
      <li v-for="item in list">{{ item.title }}</li>
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
        // { id: 1, title: "地铁啊" },
        // { id: 2, title: "天安门" },
        // { id: 3, title: "老张" }
      ],
      page: 1,
      loading: false
    };
  },
  mounted() {
    // 监听
    VueEvent.$on("to-news", data => {
      alert(data);
    });
    // 请求数据
    this.getnews();
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
    },
    getnews() {
      this.loading = true; // 请求数据的开关
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" +
        this.page;
      // jsonp, 服务端要支持jsonp
      this.$http.jsonp(api).then(
        res => {
          // console.log(res);
          // this.list = res.body.result;
          this.list = this.list.concat(res.body.result);
          this.page = this.page + 1;
          if (res.body.result.length < 20) {
            this.loading = true; // 终止查询
          } else {
            this.loading = false;
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    loadMore() {
      this.getnews();
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  li {
    height: 3.4rem;
    line-height: 3.4rem;
    border-bottom: 1px solid #eee;
    font-size: 1.2rem;
    a {
      color: #666;
    }
  }
}
</style>
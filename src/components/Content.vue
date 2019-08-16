<template>
  <div id="content">
    <h2>新闻详情页</h2>
    <h6>{{newsone.title}}</h6>
    <div v-html="newsone.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "数据",
      newsone: {}
    };
  },
  mounted() {
    // 接收动态路由的参数
    console.log("动态路由参数", this.$route.params);
    // 接收get参数
    console.log("get参数", this.$route.query);
    // 请求详情数据内容
    var aid = this.$route.params.nid;
    this.getContent(aid);
  },
  methods: {
    getContent(aid) {
      // get 请求如果跨域，后台PHP，java要允许跨域请求
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
      this.$http.get(api).then(
        res => {
          console.log(res);
          this.newsone = res.body.result[0];
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

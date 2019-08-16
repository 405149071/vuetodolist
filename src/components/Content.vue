<template>
  <div id="content">
    <h2>新闻详情页</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "数据"
    };
  },
  mounted() {
    // 接收动态路由的参数
    console.log("动态路由参数", this.$route.params);
    // 接收get参数
    console.log("get参数", this.$route.query);
  }
};
</script>

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
    console.log(this.$route.params);
  }
};
</script>

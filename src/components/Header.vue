<template>
  <div id="header">
    <h2>这是头部</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("这是头部组件mounted");
  }
};
</script>

<style scoped>
#header {
  background-color: black;
  color: #999;
}
</style>
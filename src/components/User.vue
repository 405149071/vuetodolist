<template>
  <div id="user">
    <div class="user">
      <div class="left">
        <ul>
          <li>
            <router-link to="/user/useradd">增加用户</router-link>
          </li>
          <li>
            <router-link to="userlist">用户列表</router-link>
          </li>
        </ul>
      </div>

      <div class="right">
        内容区
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// 路由嵌套
// 1 父路由里配置子路由
// 2 防止route-view
export default {
  data() {
    return {
      msg: "我是一个user组件"
    };
  }
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  .left {
    width: 200px;
    min-height: 400px;
    border-right: 1px solid #eee;
  }
  .right {
    flex: 1;
  }
}
</style>
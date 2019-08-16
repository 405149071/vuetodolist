<template>
  <div id="header">
    <!--msg使用父组件的值，不建议这样使用-->
    <h2>这是头部--{{title}}=-{{msg}}</h2>
    <!--run使用子组件的方法，不建议这样使用，如果子组件不定义run则调用父组件的方法-->
    <button @click="run(123)">执行父组件的方法</button>
    <br />
    <button @click="getP()">得到父组件的实例</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "子组件msg"
    };
  },
  // 接收父组件的传值 ， 第一种直接接收
  // props: ["title", "msg", "run", "home"],
  // 第二种，既能接收也能验证
  props: {
    title: String,
    msg: String,
    run: Function,
    home: Object
  },
  mounted() {
    console.log("这是头部组件mounted");
  },
  methods: {
    // run() {
    //   alert("我是子组件的方法");
    // }
    getP() {
      // 父组件的数据
      alert(this.home.title);
      // 父组件的方法
      this.home.run("2222");
    }
  }
};
</script>

<style scoped>
#header {
  background-color: black;
  color: #999;
}
</style>
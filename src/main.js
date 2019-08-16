import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入vue-resource
import VueResource from 'vue-resource'


Vue.config.productionTip = false;

Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
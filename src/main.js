import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// mintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false;

// 引入公共css
import "./assets/basic.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
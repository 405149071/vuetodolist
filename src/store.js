import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    incc() {
      this.state.count++;
    },
    decc() {
      this.state.count--;
    }
  },
  actions: {}
});
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    computCount: (state) => {
      return state.count * 2;
    }
  }, // 改变state里的值的时候会触发这里面的方法，获取相关的值
  mutations: {
    incc() {
      this.state.count++;
    },
    decc() {
      this.state.count--;
    }
  },
  actions: {
    incMutation(context) {
      context.commit("incc")
    }
  }
});
import Vue from "vue";

var VueEvent = new Vue();

export default VueEvent;

// 非父子组件传值

// 1 。 实例化vue，报漏

// 2 。在要广播和接收的组件中引入 这个实例

// 3. 在广播地方， 通过VueEmit.$emit("名称"，"数据")

// 4. 在接收地方, 通过 VueEmit.$on("名称"，callback)来就收数据 
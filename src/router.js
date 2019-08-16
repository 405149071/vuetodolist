import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Home2 from "./components/Home.vue";
import News from "./components/News.vue";
import Content from "./components/Content.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Todo from "./components/Todo.vue";
import Life from "./components/Life.vue";
import Header from "./components/Header.vue";
import Header2 from "./components/Header2.vue";
import User from "./components/User.vue";
import UserAdd from "./components/User/UserAdd.vue";
import UserList from "./components/User/UserList.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "*",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/home2",
      name: "home2",
      component: Home2
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/content/:nid",
      name: "content",
      component: Content
    },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [{
        path: "useradd",
        name: "useradd",
        component: UserAdd
      }, {
        path: "userlist",
        name: "userlist",
        component: UserList
      }]
    },
    {
      path: "/helloworld",
      name: "helloworld",
      component: HelloWorld
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    },
    {
      path: "/life",
      name: "life",
      component: Life
    },
    {
      path: "/header",
      name: "header",
      component: Header
    },
    {
      path: "/header2",
      name: "header2",
      component: Header2
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
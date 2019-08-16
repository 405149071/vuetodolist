1.

2 . Vue.use(VueRouter)

3. 配置路由

1， 创建组件，引入组件

2.  定义路由 （建议复制）
    const routes = [
      {path : "/foo",component:Foo},
      {path : "/bar",component:Bar},
    ]

3. 实例化VueRouter
   const router = new VueRouter({
     routes // 缩写，相当于 routes:routes
   })

4. 挂载
   new Vue(
     {
       el:"#app",
       router,
       render : h =>h(App)
     }
   )

5. <router-view></router-view>

6. 路由
   默认跳转路由
    {path:"*",redirect:"/home"}
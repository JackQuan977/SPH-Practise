import Vue from 'vue'
import App from './App.vue'
//引入路由相关文件
import router from "@/router";
// 三级联动组件----注册为全局组件
import TypeNav from '@/pages/Home/TypeNav'
//第一个参数是全局组件的名字，第二个参数是：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

Vue.config.productionTip = false

//测试
import {reqCateGoryList} from '@/api';
reqCateGoryList()

new Vue({
  render: h => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router,
}).$mount('#app')

import Vue from 'vue'
import App from './App'

/* 引入路由器 */
import router from './router'

// 注意:配置对象的属性名都是一些确定的名称,不能随意修改 router
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router
})

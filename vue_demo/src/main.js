import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'


// 声明使用插件
// 内部会直接给vm对象和组件对象添加一个属性: $http   这个属性对象有两个方法:get post
Vue.use(VueResource)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})

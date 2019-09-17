/* 入口js : 创建VUE的实例 */
import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})

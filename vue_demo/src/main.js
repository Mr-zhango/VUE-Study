import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入标签
import {Button} from 'mint-ui'

Vue.use(MintUI)

// 注册成标签(全局注册)
Vue.component('Button.name', Button)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})

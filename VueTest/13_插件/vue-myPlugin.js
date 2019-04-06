(function (window) {
  //MyPlugin 就是我们想要向外暴露的插件对象
  const MyPlugin = {}
  //自定义的插件对象必须有一个install的方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的方法myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = 'my-directive----'+binding.value
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  // 向外暴露插件
  window.MyPlugin = MyPlugin
})(window)

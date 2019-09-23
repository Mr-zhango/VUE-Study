<template>
  <div>
    <h2>About</h2>
    <!-- 组件之间传递数据 -->
    <p>{{msg}}</p>
    <!-- 缓存路由组件的使用 -->
    <input type="text">
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<style>

</style>

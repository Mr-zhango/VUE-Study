<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li><router-link to="/home/news">News</router-link></li>
        <li><router-link to="/home/message">Message</router-link></li>
      </ul>
      <!-- 显示当前的组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>

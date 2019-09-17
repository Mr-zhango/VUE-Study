<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
/* 向外默认暴露一个配置对象 与vue一致 */
export default {
  /* data可以写对象,也可以写函数,但是在组件里面只能写函数 */
  data () {
    return {
      msg: 'Hello VUE Component'
    }
  }
}
</script>

<style>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>

<template>
    <div>
      <p class="msg">{{msg}}}</p>
    </div>
</template>

<script>
    export default { // 配置对象(与VUE保持一致)
        data () { // 函数名称必须写
          return {
            msg: "Hello World"
          }
        }
    }
</script>

<style scoped>
 .msg {
   color: red;
   font-size: 30px;

 }
</style>

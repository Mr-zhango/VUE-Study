<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="index" :comment="comment"/>
    </ul>
  </div>
</template>

<script>
  import Item from './Item'

  export default {
    //一个组件想要接受父组件传递来的数据,必须声明接受属性  设个属性就会成为组件对象的属性,在模板里面就能直接读取他  从vm --> 组件对象
    props: ['comments'],  //这种方式只是指定了属性名
    components: {
      Item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>

<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- 组件之间传递函数 -->
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add.vue'
  import List from './components/List.vue'

  export default {
    data () {
      return {
        comments:[
          {
            name: 'BOB',
            content: 'VUE,还不错哦'
          },{
            name: 'Cat',
            content: 'VUE,just so so'
          },{
            name: 'Jack',
            content: 'VUE,so easy'
          }
        ]
      }
    },

    methods: {
      // 添加评论
      addComment(comment){
        // unshift放在最前面
        this.comments.unshift(comment)
      },
      // 刪除指定下标的评论
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },


    components: {
      Add,
      List
    }
  }
</script>

<style>

</style>

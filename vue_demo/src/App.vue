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
      <Add/>
      <List :comments="comments"/>
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
    components: {
      Add,
      List
    }
  }
</script>

<style>

</style>

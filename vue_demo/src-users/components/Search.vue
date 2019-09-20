<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="searchName"/>
        <button @click="searchUser">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name: 'Search',
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      searchUser(){
        const searchName = this.searchName.trim()
        if(searchName){
          // 发布搜索的消息
          PubSub.publish('searchUser',searchName)
        }
      }
    }
  }
</script>

<style scoped>

</style>

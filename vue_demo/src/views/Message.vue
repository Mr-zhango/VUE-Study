<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- 通过路径参数的方式向路由组件传递数据 param参数的形式 -->
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <!-- 路由组件的方法 -->
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: [
          {id: 1, title: 'Message001'},
          {id: 3, title: 'Message003'},
          {id: 5, title: 'Message005'}
        ]
      }
    },

    mounted () {

      setTimeout(() => {
        // 模拟ajax从后台请求数据
        const messages = [
          {
            id: 1, title: 'Message001'
          },
          {
            id: 3, title: 'Message003'
          },
          {
            id: 5, title: 'Message005'
          }
        ]
        this.messages = messages
      }, 1000)
    },

    methods: {
      pushShow (id) {
        this.$router.push(`/home/message/detail/${id}`)
      },

      replaceShow (id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>

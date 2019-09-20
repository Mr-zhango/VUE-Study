<template>
  <div v-if="!repoUrl">loading</div>
  <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        repoName: '',
        repoUrl: ''

      }
    },
    /* mounted 初始化的时候就执行 */
    mounted () {
      // 发送ajax请求
      const url = `https://api.github.com/search/repositories?q=v&sort=stars`
      // 使用axios发送ajax请求
      axios.get(url).then(
        // 成功了的回调
        response => {
          const result = response.data
          // 得到最受欢迎的repo
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        }).catch(
        error => {
          // 失败了的回调
          alert('axios请求失败')
        })
    }
  }
</script>

<style>

</style>

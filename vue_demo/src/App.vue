<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<ToDoHeader @addTodo="addTodo"/>--><!-- 给ToDoHeader标签对象绑定 addTodo的事件监听 -->
      <ToDoHeader ref="header"/>
      <ToDoList :todos="todos" />

      <ToDoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}}</span> / 全部{{todos.length}}
        <button class="btn btn-danger" :style="{display: completeSize>0 ? 'block':'none'}" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </ToDoFooter>
    </div>
  </div>
</template>

<!--
  绑定事件监听:-- 订阅消息
  触发事件:-- 发布消息
-->
<script>

  import PubSub from 'pubsub-js'
  import ToDoHeader from './components/ToDoHeader'
  import ToDoList from './components/ToDoList'
  import ToDoFooter from './components/ToDoFooter'

  export default {

    data () {
      // 从localStorage中读取数据
      return {
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')

      }
    },
    computed: {
      completeSize(){
        // 最后一个0 表示初始的值是0
        return this.todos.reduce((preTotal,todo) => preTotal + ((todo.complete) ? 1 :0) , 0  )
      },


      isAllCheck: {
        get(){
          return this.completeSize === this.todos.length && this.todos.length>0
        },
        set(value){ // value是当前checkbox最新的值
          this.selectAllTodos(value)
        }
      }
    },
    mounted(){
      // 专门用来执行异步代码

      // 给<ToDoHeader/> 绑定事件监听  然后得到这个函数
      // this.$on('addTodo', this.addTodo) 这个事件监听绑定到app上了
      this.$refs.header.$on('addTodo', this.addTodo)

      // 订阅消息 PubSub 消息订阅的重点是能够跨组件通信,没有位置的限制
      /*
      //有问题的写法,这个this是当前的回调函数,不是当前的this(组件对象)
      PubSub.subscribe('deleteTodo',function (msg, index) {
        this.deleteTodo(index)
      })*/

      PubSub.subscribe('deleteTodo',(msg, index) => {
        // 表示当前函数自己没有this 使用外部的this
        this.deleteTodo(index)
      })
    },

    methods: {
      addTodo (todo) {
        // 向todos中添加数据
        // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 删除素有选中的
      deleteCompleteTodos () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },

      // 全选和反选
      selectAllTodos (check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    },

    watch:{ //深度监视,从文件中读取数据
      todos:{
        deep:true, // 深度监视
        handler: function (newValue,oldValue) {
          // 将todos最新的JSON数据,保存到localStorage
          window.localStorage.setItem('todos_key',JSON.stringify(newValue))
        }
      }

    },
    components: {
      ToDoHeader,
      ToDoList,
      ToDoFooter
    }
  }
</script>

<style>

  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

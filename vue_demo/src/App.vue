<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <ToDoHeader :addTodo="addTodo"/>
      <ToDoList :todos="todos"/>
      <ToDoFooter/>
    </div>
  </div>
</template>

<script>
  import ToDoHeader from './components/ToDoHeader'
  import ToDoList from './components/ToDoList'
  import ToDoFooter from './components/ToDoFooter'

  export default {

    data () {
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: false},
          {title: '打游戏', complete: true}
        ]
      }
    },
    methods:{
      addTodo(todo){
        // 向todos中添加数据
        // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        this.todos.unshift(todo)
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

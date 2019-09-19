/**
 *
 * 使用LocalStorage存储数据的工具
 * 1.函数
 * 2.对象
 *
 *  向外暴露一个功能使用函数
 *          多个功能使用对象
 *
 */


const TODO_KEY =  'todos_key'
// 向外暴露一个对象
export default {
  saveTodos (todos){
    window.localStorage.setItem(TODO_KEY,JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}

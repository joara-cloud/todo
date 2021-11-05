<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo">
    </header>
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <li v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed}">
          <div class="view">
            <input type="checkbox" class="toggle" @click="todo.completed=!todo.completed" :checked="todo.completed">
            <label for="">{{ todo.title }}</label>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="todos.length" v-cloak>
      <span class="todo-count">
        <strong>{{ remaining }}</strong> {{ pluralize }} left
      </span>
      <ul class="filters">
        <li><a href="#/all" :class="{selected: visibility === 'all'}">All</a></li>
        <li><a href="#/active" :class="{selected: visibility === 'active'}">Active</a></li>
        <li><a href="#/completed" :class="{selected: visibility === 'completed'}">Completed</a></li>
      </ul>
      <!-- <button class="clear-completed">
        Clear completed
      </button> -->
    </footer>
  </div>
</template>

<script>

/*
@ todos [
  {
    id: 0,
    title: '',
    completed: false
  }
]
*/
var visibility = 'all';
var STORAGE_KEY = 'todos-vuejs';
var todoStorage = {
  fetch: function() {
    var todos = localStorage.getItem(STORAGE_KEY) || []

    return JSON.parse(todos);
  },
  save: function(value) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }
}

var filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter((todo) => {
      return !todo.completed
    })
  },
  completed: function(todos) {
    return todos.filter((todo) => {
      return todo.completed
    })
  }
}

export default {
  data() {
    return {
      todos: todoStorage.fetch(),
      newTodo: '', // 추가 할일
    }
  },
  components: {
    
  },
  computed: {
    remaining: function() { // 완료되지 않은 리스트
      return filters.active(this.todos).length
    },
    allDone: { // 전체 선택
      get: function() { // get에서 출력 (ar. 예외처리)
        return this.remaining === 0
      },
      set: function(bool) { // set을 통해 주입받고 (ar. 기본 computed 역할)
        this.todos.forEach((el) => {
          el.completed = bool
        })
      }
    },
    pluralize: function(n) {
      return this.remaining === 1 ? 'item' : 'items';
    },
    filteredTodos: function() {

    }
  },
  methods: {
    addTodo: function() {
      var nt = this.newTodo.trim()
      if(nt === '') return;

      this.todos.push({
        id: 1,
        title: nt,
        completed: false
      })

      todoStorage.save(this.todos);
    }
  },
  mounted: function() {
    console.log(this.todos);
  },
  // filters: { // vue 3.x 부터 지원안하는듯
  //   pluralize: function(n) {
  //     return n === 1 ? 'item' : 'items';
  //   }
  // }

}

window.addEventListener('hashchange', onHashChange)

function onHashChange () {
  var visibility = window.location.hash.replace(/#\/?/, '')
  if (filters[visibility]) {
    visibility = visibility
  } else {
    window.location.hash = ''
    visibility = 'all'
  }

}

</script>

<style scoped>
@import url('../assets/css/todo.css');
</style>
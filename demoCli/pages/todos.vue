<template>
  <div>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :value="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
    </ul>
    <input type="text" @keyup.enter="addTodo">
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    name: 'todos',
    computed: {
      ...mapGetters({
        todos: 'todos/todos'
      })
    },
    methods: {
      addTodo (e) {
        console.log()
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'todos/toggle'
      })
    }
  }
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
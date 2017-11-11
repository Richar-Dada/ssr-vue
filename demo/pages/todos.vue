<template>
    <ul>
        <li v-for="todo in todos">
            <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
    </ul>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        computed: {
            todos () { return this.$store.state.list }
        },
        methods: {
            addTodo (e) {
                console.log(e.target.value)
                this.$store.commit('add', e.target.value)
                e.target.value = ''
            },
            ...mapMutations({
                toggle: 'toggle'
            })
        }
    } 
</script>

<style>
    .done {
        text-decoration: line-through;
    }
</style>
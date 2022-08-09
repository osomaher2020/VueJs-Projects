<template>
  <h1>Todos</h1>
  <h3 v-for="todo in todos" :key="todo.id" v-if="todos">
      <router-link :to="{ name: 'TodoDetails', params: { id: todo.id } }">
          {{ todo.todo }}
      </router-link>
  </h3>
  <p v-else>Loading todos ...</p>
</template>

<script>
export default {
    data() {
        return {
            todos: []
        }
    },
    mounted() {
        fetch("https://dummyjson.com/todos")
        .then(res => res.json())
        .then(data => this.todos = data.todos)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>
<template>
    <div v-if="todo">
        <h2>{{ todo.todo }}</h2>
        <h3>Auther: {{ todo.userId }}</h3>
        <h3 v-if="todo.completed">Completed</h3>
        <h3 v-else>Not Complete !</h3>
    </div>
    <div v-else>Loading todo Details ...</div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            todo: null
        }
    },
    mounted() {
        fetch("https://dummyjson.com/todos/"+ this.id)
        .then(res => res.json())
        .then(data => this.todo = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>
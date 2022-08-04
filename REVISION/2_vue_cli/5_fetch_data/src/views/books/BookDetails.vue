<template>
    <div v-if="book">
        <h2>{{ book.title }}</h2>
        <h3>Auther: {{ book.auther }}</h3>
        <p>Details: {{ id }}</p>
    </div>
    <div v-else>Loading Book Details ...</div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            book: null
        }
    },
    mounted() {
        fetch("http://localhost:3000/books/"+ this.id)
            .then(res => res.json())
            .then(data => this.book = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>
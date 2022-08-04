<template>
  <h1>Books</h1>
  <h3 v-for="book in books" :key="book.id">
      <router-link :to="{ name: 'BookDetails', params: { id: book.id } }">
          {{ book.title }}
      </router-link>
  </h3>
</template>

<script>
export default {
    data() {
        return {
            books: []
        }
    },
    mounted() {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(data => this.books = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>
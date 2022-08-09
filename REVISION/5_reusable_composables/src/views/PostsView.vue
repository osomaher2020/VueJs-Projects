<template>
    <h1>My Posts</h1>

    <PostsList :posts="posts" />
    <h3 v-if="error">{{error}}</h3>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import getPosts from '@/composables/getPosts' // <<<<<<<<<<<<<<<<<<<<<<<<<< JS logic is separated in  composables/file.js

export default {
    components: { PostsList },
    setup() {

        const {posts, error, loadData} = getPosts()

        loadData()

        return {
            posts,
            error
        };
    }
}
</script>

<style>

</style>
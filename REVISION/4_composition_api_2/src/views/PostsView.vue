<template>
    <h1>My Posts</h1>

    <PostsList v-if="showPosts" :posts="posts" />
    <h3 v-if="error">{{error}}</h3>

    <button @click="togglePosts">toggle posts</button>
    <button @click="posts.pop()">Delete last post</button>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import { ref } from 'vue';

export default {
    components: { PostsList },
    setup() {
        const posts = ref([])
        const error = ref(null)


        const loadData = async () => {
            try{
                const result = await fetch("http://localhost:3000/posts") // $ json-server --watch data/db.json
                if(!result.ok){
                    throw Error("cant fetch data !")
                }

                posts.value = await result.json()
            }
            catch(err){
                error.value = err.message
                console.error(error.value)
            }
        }

        loadData()


        const showPosts = ref(true)
        const togglePosts = () => {
            showPosts.value = ! showPosts.value
        }

        return {
            posts,
            showPosts,
            togglePosts,
            error
        };
    }
}
</script>

<style>

</style>
<template>
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import { onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    props: ['posts'],
    components: {
        SinglePost
    },
    setup(props) {
        console.log(props.posts)

        // lifecycle hooks
        onMounted(() => console.log("monted"))
        onUnmounted(() => console.log("un-monted"))
        onUpdated(() => console.log("updated"))
    }
}
</script>

<style>

</style>
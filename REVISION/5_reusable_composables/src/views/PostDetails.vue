<template>
    <div v-if="error">{{error}}</div>

    <div v-if="post">
        <h1>{{post.title}}</h1>
        <p>{{post.content}}</p>
        <hr>
        <i v-for="tag in post.tags" :key="tag">#{{tag}} | </i>
    </div>
</template>

<script>
import getPost from "@/composables/getPost"
export default {
    props: ["id"],
    setup(props) {

        const {post, error, loadData} = getPost(props.id)

        loadData()

        return {
            post,
            error
        }
    }
}
</script>

<style>

</style>
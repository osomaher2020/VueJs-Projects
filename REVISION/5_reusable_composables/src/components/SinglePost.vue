<template>
    <div style="padding-bottom: 15px;">
        <h3>
            <router-link :to="{name: 'postDetails', params: {id: post.id}}">
                {{post.id}} -- {{post.title}}
            </router-link>
        </h3>
        <p>{{snippet}}</p>
        <i v-for="tag in post.tags" :key="tag">#{{tag}} | </i>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],
    setup(props) {
        // computed prop
        const snippet = computed(() => `${props.post.content.substring(0, 100)} ......`)

        return {
            snippet
        }
    }
}
</script>

<style>

</style>
<template>
    <li>
        <div>
            {{post.id}} -- {{post.title}}
        </div>
        <p>{{snippet}}</p>
    </li>
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
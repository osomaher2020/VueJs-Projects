<template>
    <h1>{{score}}</h1>
    <h3>{{rank}}</h3>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if(this.score < 250){
            this.rank = 'wow .. so fast !'
        }
        else if(this.score < 500){
            this.rank = 'fast enough ...'
        }
        else{
            this.rank = 'snail pace ...'
        }
    }
}
</script>

<style>
    
</style>
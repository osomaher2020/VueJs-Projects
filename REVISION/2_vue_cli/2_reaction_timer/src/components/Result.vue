<template>
  <p>reactionTime is: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted(){
        if(this.score < 300){
            this.rank = 'very fast'
        }
        else if(this.score < 400){
            this.rank = 'fair enough'
        }
        else{
            this.rank = 'snail pace'
        }
    }
}
</script>

<style>
.rank{
    color: teal;
    font: bold 18px Ariel;
}
</style>
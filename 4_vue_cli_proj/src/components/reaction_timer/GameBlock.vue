<template>
    <div class="block" v-if="showBlock" @click.right="hideblock" @click.left="stopTimer">
        <p>click me</p>
        <h3>Time: {{ reactionTime }}</h3>
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },
    methods: {
        hideblock(){
            this.showBlock = false
            this.$emit('closeBlock')
        },
        startTimer() {
            this.timer = setInterval(
                () => { this.reactionTime += 100 },
                100
            )
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('endGame', this.reactionTime)
        },
    },
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted '+this.delay)
        setTimeout(
            () => {
                this.showBlock = true
                this.startTimer()
            },
            this.delay
        )
    },
    updated() {
        console.log('updated')
    },
    unmounted() {
        console.log('unmounted')
    },
}
</script>

<style scoped>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #67db67;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: auto;
    }
</style>
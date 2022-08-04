<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block :delay="delay" v-if="isPlaying" @endGame='showScore' />
  <Result v-if="showResult" :score="score" />
</template>

<script>

import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Block,
    Result
},
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false
    }
  },
  methods: {
    start() {
      this.delay = 1000 + Math.random() * 4000
      this.isPlaying = true
      console.log(parseFloat(this.delay / 1000).toFixed(2))
      this.showResult = false
    },
    showScore(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button[disabled]{
  cursor: not-allowed;
  opacity: 0.2;
}
</style>

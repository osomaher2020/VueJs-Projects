<template>
  <h1>{{title}}</h1>
  <input type="text" ref="student_name" v-model.lazy="name">
  <button @click="handleClick">Click Me!</button>
  <hr>
  <div v-if="showMyComponent">
    <MyComponent header="my props Header" :student_name="name" @closeMyComponent="toggleMyComponent" />
  </div>
  
  <button @click="toggleMyComponent" v-else>show MyComponent</button>

  <hr>
  <teleport to='#teleport_content'>
    <ComponentWithSlots>
      <p>i'm a Slot</p>

      <!-- named slot -->
      <template v-slot:links>
        <a href="#">sign In</a>
        <a href="#">sign Up</a>
      </template>
    </ComponentWithSlots>
  </teleport>

  <hr>
  <h1>Reaction timer</h1>
  <button @click="startReactionTimer" :disabled="isPlaying">Play</button>
  <GameBlock v-if="isPlaying" :delay="currentDelay" @closeBlock="closeIt" @endGame="showGameResult"/>
  <!-- <p>Your Score: {{score}} ms</p> -->
  <GameResult v-if="showScore" :score="score" />
</template>

<script>
import MyComponent from './components/MyComponent'
import ComponentWithSlots from './components/ComponentWithSlots'

import GameBlock from './components/reaction_timer/GameBlock.vue'
import GameResult from './components/reaction_timer/GameResult.vue'

export default {
  name: 'App',
  components: {
    MyComponent,
    ComponentWithSlots,
    GameBlock,
    GameResult
  },
  data() {
    return {
      title: 'My Vue App :)',
      name: 'osama',
      showMyComponent: false,
      isPlaying: false,
      currentDelay: null,
      score: null,
      showScore: false
    }
  },
  methods: {
    handleClick(){
      this.$refs.student_name.value = "clicked"
      this.$refs.student_name.classList.add('active')
      this.$refs.student_name.focus()
    },
    toggleMyComponent(){
      this.showMyComponent = !this.showMyComponent
    },
    startReactionTimer(){
      this.currentDelay = 2000 + Math.floor(Math.random() * 3000) // Math.random() generates-> 0 : <1
      this.isPlaying = true
      console.log(this.currentDelay/1000)

      this.showScore = false
    },
    closeIt(){
      this.isPlaying = false
    },
    showGameResult(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showScore = true
    }
  }
}
</script>

<style>
#app, #teleport_content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

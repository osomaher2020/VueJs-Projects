<template>
  <div class="home">
    My name is: {{name}} and i have {{age}} years
    <p ref="myParagraph">contentttttttttt</p>
  </div>
  <button @click="handleClick">click me</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup () {
    console.log("setup")

    // *** Not Reactive values == if changes, it wont reflect on the DOM
    let name = "osama"
    let age = 30

    // ref
    const myParagraph = ref(null)
    console.log(myParagraph, myParagraph.value) // null => not yet returned

    const handleClick = () => {
      console.log("clicked")

      console.log(myParagraph.value)
      myParagraph.value.classList.add("teeest")

      myParagraph.value.textContent = "Hello, Ninjas"
    }

    // return {
    //   name: name,
    //   age: age
    // }
    return {
      name,
      age,
      handleClick,
      myParagraph
    }
  },
  mounted() {
    console.log("mounted")
  },
  created() {
    console.log("created")
  }
}
</script>

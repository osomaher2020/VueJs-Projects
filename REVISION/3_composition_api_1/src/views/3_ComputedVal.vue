<template>
  <div>
    <p>{{computed_name}}</p>
  </div>
  <div>
    <input type="text" v-model="search">
    <p v-if="search">search text: {{search}}</p>
    <h3>Filtered Contacts</h3>
    <ul>
      <li v-for="contact in filteredContatcts" :key="contact">{{contact}}</li>
    </ul>
    <h3>All Contacts</h3>
    <ul>
      <li v-for="contact in contacts" :key="contact">{{contact}}</li>
    </ul>
  </div>
  <div>
    <button @click="handleStopWatch">stop watch</button>
    <button @click="handleStopWatchEffect">stop watchEffect</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    name: 'ComputedVal',
    setup () {

        const name = "osama"
        const age = 30

        const computed_name = computed(() => {
            return `your name is: ${name} you have ${age} years`
        })


        // ------------------ with ref ----------------------
        const contacts = ref(["osama", "aya", "Aysel", "mesho", "sola"])
        const search = ref('')

        const filteredContatcts = computed(() => {
          return contacts.value.filter((cntct) => cntct.includes(search.value))
        })


        // ------------------ watch / watchEffect ----------------------
        // runs every time watch changes
        const stopWatch = watch(search, () => console.log("watching search ..."))

        // run -- Once -- initially when the component first loads
        watchEffect(() => console.log("watchEffect onMounted ..."))

        // // runs every time search changes === watch
        const stopWatchEffect = watchEffect(
          () => console.log("watchEffect on search change ...", search.value), // watching any dependencies inside the function
        )


        const handleStopWatch = () => {
          stopWatch()
        }
        const handleStopWatchEffect = () => {
          stopWatchEffect()
        }



        return {
          computed_name,
          contacts,
          search,
          filteredContatcts,
          handleStopWatch,
          handleStopWatchEffect
        }
    }
}
</script>

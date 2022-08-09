<template>
    <!-- Ref -->
  <div>
    <p>my Contact : {{contact}}</p>
    <p>my name : {{name}}</p>
    <button @click="handleClick">click me</button>
  </div>
  <!-- Reactive -->
  <div>
    <p>my Contact : {{contact2}}</p>
    <p>my name : {{name2}}</p>
    <button @click="handleClick2">click me 2</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
    name: 'ReactiveVsRefs',
    setup () {

        // --------------- Refs -------------------
        const contact = ref({ // object
            id: 1,
            name: "smsm",
            age: 30
        })

        const name = ref("osama") // primitive value (string)

        const handleClick = () => {
            contact.value.age = 40
            name.value = "basha basha :)"
        }


        // --------------- Reactive ------------------- no need to use .value ----------
        const contact2 = reactive({ // object
            id: 1,
            name: "sola",
            age: 6
        })

        let name2 = reactive("mesho") // primitive value (string)

        const handleClick2 = () => {
            contact2.age = 40
            name2 = "changed name 2" // <<<<<<<< will never change --> only use ref() with "primitive" values
        }


        return {
            contact,
            name,
            handleClick,
            contact2,
            name2,
            handleClick2
        }
    }
}
</script>

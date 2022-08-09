<template>
  <div>
    <input type="text" ref="name">
    <input type="number" ref="age">
    <button @click="handleAddNew">click me</button>
  </div>
  <ul>
    <!-- we don't need refName.value @ <template> -->
    <li v-for="item in items" :key="item.id">
        {{item.name}} age: {{item.age}}
        <button @click="handleDeleteItem(item)">X</button>
    </li>
  </ul>
  <div>
    <p>my money = {{money}}</p>
    <button @click="money++">increase money</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'RefsReactivity',
  setup () {
    console.log("setup")

    // *** ref is a Reactive value == if changes, it will reflect on the DOM *******
    const items = ref([
        { // init value
            id: 1,
            name: "smsm",
            age: 30
        }
    ])
    const name = ref("name")
    const age = ref("age")

    const handleAddNew = () => {
        items.value.push({
            id: (new Date()).getTime().toString(36),
            name: name.value.value,
            age: age.value.value
        })

        name.value.value = ''
        age.value.value = ''
    }

    const handleDeleteItem = (item) => {
        items.value = items.value.filter((itm) => itm.id !== item.id)
    }


    const money = ref(0)

    return {
        items,
        name,
        age,
        handleAddNew,
        handleDeleteItem,
        money
    }
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ header }}</h3>
    <p>{{student_name}}</p>
    <hr>
    <button @click="hide_MyComponent">hide MyComponent</button>
  </div>
</template>

<script>
export default {
  props: ['header', 'student_name'],
  data(){
    return {
      msg: 'Hello from myComponent'
    }
  },
  methods: {
    hide_MyComponent(){
      this.$emit('closeMyComponent')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>

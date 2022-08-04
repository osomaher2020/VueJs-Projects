<template>
  <h1>My Slot component</h1>
  <div>
      <slot>default placeholder</slot>
      <br>
      <slot name="my_links"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
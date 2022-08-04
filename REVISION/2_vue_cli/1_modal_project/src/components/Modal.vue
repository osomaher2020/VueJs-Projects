<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal" :class="theme">
          <h1>{{ modal_header }}</h1>
          <p>{{ modal_text }}</p>

          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    props: [
        'modal_header',
        'modal_text',
        'theme'
    ],
    methods: {
        closeModal(){
            this.$emit('closeModal')
        }
    }
}
</script>

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        background-color: rgb(0, 0, 0, 0.5);
    }
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .modal h1{
        color: teal;
    }

    .modal.sale{
        border: 2px solid crimson;
    }
</style>
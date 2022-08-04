<template>
  <h1>{{ title }}</h1>
  <div>
    <input type="text" ref="myTextBox">
    <button @click="handleClick">click me</button>
  </div>

  <br/>
  <div v-if="showModal">
    <Modal :modal_header="header" :modal_text="content" theme="sale" @closeModal="toggleModal" />
  </div>
  <button @click.alt="toggleModal">show modal (alt)</button>

  <br/>
  <teleport to="#modals" v-if="showModalTwo">
    <Modal modal_header="my Header 2" modal_text="my content 2" @closeModal="toggleModalTwo">
      <h1>my model 2 slot</h1>
      <p>my modal 2 text slot</p>
    </Modal>
  </teleport>
  <button @click="toggleModalTwo">show modal 2</button>

  <div>
    <UsingSlot>
      <h1>passing a slot</h1>
      <template v-slot:my_links>
        <a href="#">link1</a>
        <a href="#">link2</a>
      </template>
    </UsingSlot>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import UsingSlot from './components/UsingSlot.vue'

export default {
  name: 'App',
  components: {
    Modal,
    UsingSlot
  },
  data () {
    return {
      title: 'My First Vue App',
      isFav: false,
      header: 'My Header !',
      content: 'my content',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick(){
      this.$refs.myTextBox.focus();
      this.isFav = !this.isFav
      this.$refs.myTextBox.value = this.isFav;
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 2px solid #aaa;
  display: inline-block;
  padding-bottom: 20px;
}
</style>

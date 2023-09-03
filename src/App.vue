<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swags for half price!</p>
    </Modal>
  </div>

  <div v-show="showModalTwo">
    <Modal @close="toggleModalTwo">
      <p>second modal</p>
    </Modal>
  </div>

  <p>Welcome...</p>
  <button @click.alt="toggleModal">open modal (alt)</button>
  <button @click.shift="toggleModalTwo">open modal two (shift)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },

  data(){
    return {
      title: 'My First Vue App :)',
      theme: 'sale',
      showModal: false,
      showModalTwo: false
    }
  },

  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo;
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

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
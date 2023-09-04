<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swags for half price!</p>
    </Modal>
  </teleport>
  <!-- 
    teleport: enables rendering the containing elements inside a element 
      which is outside of the vue app (#app)

    v-show is not made to work with multiple elements (such as when using <template> to nest them)
      also, using teleport with v-show will not work
  -->

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <p>second modal</p>
    </Modal>
  </teleport>

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
#app, .modals {
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
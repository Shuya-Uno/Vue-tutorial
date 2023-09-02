<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :header="header" :text="text" :theme="theme" @close="toggleModal"/>
    <!-- 
      The attribute area in child componet tags is
       a inlet and outlet of data that links the parent and child component

      outlet: props (receives in props object in child component)
      inlet: custom events (sent from $emit in child)

      (Seems to be very cetral structure, which data/actions handled in parent... (which is good))
    -->
  </div>
  <p>Welcome...</p>
  <button @click.alt="toggleModal">open modal (alt)</button>
  <!-- 
    @event.something → event modifier (can configure more detailed cases of events)
   -->
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },

  data(){
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swags for half price!',
      theme: 'sale',
      showModal: false
    }
  },

  methods: {
    toggleModal(){
      this.showModal = !this.showModal;
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
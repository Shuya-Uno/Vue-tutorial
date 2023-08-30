import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

/*
    Importing createApp() from vue component (inside node_modules),
     App from App.vue.
    App component is created in a separate App.vue file
     (As opposed to creating anonymous component in widget-size project).
    Injecting App component (as root component), inside #app <div>.
*/
const app = Vue.createApp({
    data(){
        return {
            url: 'https://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg'},
                {title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg'},
                {title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg'}
            ]
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }

})

app.mount('#app')
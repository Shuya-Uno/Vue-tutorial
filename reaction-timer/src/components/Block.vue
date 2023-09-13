<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
    export default {
        props: ['delay'],

        data(){
            return {
                showBlock: false,
                timer: null,
                reactionTime: 0
            }
        },
        methods: {
            startTimer(){
                this.timer = setInterval(() => {
                    this.reactionTime += 10
                }, 10)
            },
            stopTimer(){
                clearInterval(this.timer)
                this.$emit('end', this.reactionTime)
                /*
                    Data can be sent from child component to parent 
                     by setting it on the second parameter of custom events
                */
            }
        },

        mounted(){
            setTimeout(() => {
                this.showBlock = true
                this.startTimer()
            }, this.delay);
            console.log('component mounted')
        }
        /* 
            lifecycle hooks → function triggers which each corresponds to
             the "components'" different lifecycle stage
             Kind of like eventListeners

            unmounted: fires when component once was rendered to the DOM is unmounted
        */
    }
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background-color: #0faf87;
        color: #fff;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>
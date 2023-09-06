<template>
    <div class="block" v-if="showBlock">
        click me
    </div>
</template>

<script>
    export default {
        props: ['delay'],

        data(){
            return {
                showBlock: false
            }
        },

        mounted(){
            setTimeout(() => {
                this.showBlock = true
                console.log(this.delay)
            }, this.delay);
            console.log('component mounted')
        },
        updated(){
            console.log('component updated')
        },
        unmounted(){
            console.log('unmounted')
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
<template>
    <div>
        <h1>Job Details</h1>
        <p>The job id is {{ id }}</p>
    </div>
</template>

<script>
    export default {
        props: ['id']
        // data(){
        //     return {
        //         id: this.$route.params.id
        //     }
        // }
    }

    /*
        route parameters can be accessed as a property of a router object, as shown above.
        the property after "params" will be the word after the ":", of the route path
         (in this case, "id").    
    */
</script>

<style>

</style>
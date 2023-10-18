<template>
    <h1>Jobs</h1>
    <div class="job">
        <template v-for="job in jobs">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
            <h2>{{ job.title }}</h2>
        </router-link>

        <!-- 
            params: { key: value }
                key → name of the route paramter (in path)
                value → the value to be inserted into route parameter
         -->
    </template>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                jobs: [
                    { title: 'Ninja UX Designer', id: 1, details: 'lorem' },
                    { title: 'Ninja Web Developer', id: 2, details: 'lorem' },
                    { title: 'Ninja Vue Developer', id: 3, details: 'lorem' }
                ]
            }
        }
    }
</script>

<!-- 
    In bigger projects, when you have related Views, you can organize them, placing them in the same subfolder.
    The same goes for Components (none page-specific, reusable portions of pages).
 -->

<style>
    .job h2 {
        background-color: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }

    .job h2:hover {
        background-color: #ddd;
    }

    .job a {
        text-decoration: none;
    }
</style>
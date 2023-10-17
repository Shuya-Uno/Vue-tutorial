<template>
    <h1>Jobs</h1>
    <template v-for="job in jobs">
        <h2>{{ job.title }}</h2>
    </template>
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
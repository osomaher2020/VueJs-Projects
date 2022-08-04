<template>
    <div v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{ name: 'JobDetails', params: {id: job.id} }">
                <h3>{{ job.title }}</h3>
            </router-link>
        </div>
    </div>
    <div v-else>
        loading ...
    </div>
</template>

<script>
export default {
    data() {
        return {
            // jobs: [
            //     {id: 1, title: 'job1'},
            //     {id: 2, title: 'job2'},
            //     {id: 3, title: 'job3'},
            // ]
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then(
                (res) => res.json()
            )
            .then(
                (data) => this.jobs = data
            )
            .catch(
                (err) => console.log(err.message)
            )
    }
}
</script>

<style>
    
</style>
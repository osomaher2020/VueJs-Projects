<template>
  <p>Details of job_id: {{ id }}</p>
  <h1 v-if="job">
      Details of job_title: {{ job.title }}
  </h1>
  <p v-else>{{ (error)? error : "Loading ..." }}</p>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    data() {
        return {
            job: null,
            error: ''
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/'+this.id)
            .then(
                (res) => res.json()
            )
            .then(
                (data) => this.job = data
            )
            .catch(
                (err) => {
                    this.error = err.message
                    console.log(err.message)
                }
            )
    }
}
</script>

<style>

</style>
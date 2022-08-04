<template>
  <h1 v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          {{job.title}}
      </router-link>
  </h1>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {id: 1, title: "ninja developer"},
                {id: 2, title: "web designer"},
                {id: 3, title: "animation artist"}
            ]
        }
    },
}
</script>

<style>

</style>
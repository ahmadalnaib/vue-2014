<script setup>
import jobData from '@/j.json';
import { ref } from 'vue';

const jobs = ref(jobData);
// console.log(jobs.value);
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-5 text-center">
        Job Listings
      </h2>
      Browser Jobs
      <div class="grid grid-cols-1 gap-6 md:grid-coles-3">
        <div v-for="job in jobs" :key="job.id">
          {{ job.title }}
        </div>
      </div>
    </div>
  </section>
</template>

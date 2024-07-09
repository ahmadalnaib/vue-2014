<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListingsVue from '@/components/JobListings.vue';
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListingsVue :limit="3" :showButton="true" />
</template>

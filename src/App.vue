<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import HomeCards from './components/HomeCards.vue';
import JobListingsVue from './components/JobListings.vue';
import { RouterView } from 'vue-router';
</script>
<template>
  <Navbar />
  <RouterView />
</template>

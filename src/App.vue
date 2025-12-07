<template>
  <div class="bg-white dark:bg-slate-800 min-h-screen font-sans transition-colors duration-300 w-full relative">
    <Navbar />
    <router-view />
    <FooterSection />
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import FooterSection from './components/FooterSection.vue';
</script>

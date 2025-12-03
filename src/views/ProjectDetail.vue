<template>
  <div class="bg-white dark:bg-slate-900 min-h-screen">
    <div v-if="project">
      <WebDevLayout v-if="project.category.includes('Web') || project.category.includes('Edutech')" :project="project" />
      <BrandLayout v-else :project="project" />
    </div>

    <div v-else class="h-screen flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold text-gray-400">Memuat Project...</h1>
      <router-link :to="{ name: 'Home' }" class="text-purple-500 underline mt-4">Kembali</router-link>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref, onMounted, watch } from 'vue';
  import { projectWebDev, projectBrandDesign } from '../data/projects';

  import WebDevLayout from '../components/layouts/WebDevLayout.vue';
  import BrandLayout from '../components/layouts/BrandLayout.vue';

  const props = defineProps({ slug: String });
  const project = ref(null);
  const allProjects = [...projectWebDev, ...projectBrandDesign];

  const fetchProjectDetail = (slug) => {
    project.value = allProjects.find((p) => p.slug === slug) || null;
  };

  onMounted(() => fetchProjectDetail(props.slug));
  watch(
    () => props.slug,
    (newSlug) => fetchProjectDetail(newSlug)
  );
</script>

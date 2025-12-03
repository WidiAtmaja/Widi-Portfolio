<template>
  <section id="projects" class="py-24 bg-white dark:bg-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-4xl font-extrabold pb-1 border-b-4 border-black inline-block dark:text-white dark:border-white">MY PROJECTS</h2>
      </div>

      <div class="flex justify-center mb-10">
        <div class="inline-flex rounded-full border-2 border-black dark:border-white overflow-hidden p-0.5 bg-gray-100 dark:bg-slate-700">
          <button
            @click="activeTab = 'webdev'"
            :class="{
              'bg-purple-300 dark:bg-purple-600': activeTab === 'webdev',
              'text-black dark:text-white': activeTab === 'webdev',
              'text-gray-600 dark:text-gray-400': activeTab !== 'webdev',
            }"
            class="px-8 py-3 text-lg font-bold transition-colors duration-300 rounded-full">
            Web Dev
          </button>

          <button
            @click="activeTab = 'design'"
            :class="{
              'bg-yellow-300 dark:bg-yellow-600': activeTab === 'design',
              'text-black dark:text-white': activeTab === 'design',
              'text-gray-600 dark:text-gray-400': activeTab !== 'design',
            }"
            class="px-8 py-3 text-lg font-bold transition-colors duration-300 rounded-full">
            Brand Design
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <router-link
          v-for="(project, index) in filteredProjects"
          :key="index"
          :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
          class="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-black dark:border-white transition-all hover:shadow-md hover:shadow-purple-200 block cursor-pointer">
          <img :src="project.image" :alt="project.title" class="w-full h-80 object-cover border border-black rounded-3xl" />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-black dark:text-white">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag" class="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 text-sm rounded-full">
                {{ tag }}
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center mt-10 text-gray-500 dark:text-gray-400">Tidak ada proyek yang ditemukan dalam kategori ini.</div>
    </div>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';

  // 1. Impor data proyek Anda
  // Asumsikan path file data Anda adalah yang benar
  import { projectWebDev, projectBrandDesign } from '../data/projects';

  // 2. Definisikan state tab aktif
  const activeTab = ref('webdev'); // Default aktif pada Web Dev

  // 3. Gabungkan semua data ke dalam satu objek untuk akses mudah
  const allProjects = {
    webdev: projectWebDev,
    design: projectBrandDesign,
  };

  // 4. Buat computed property untuk memfilter proyek
  const filteredProjects = computed(() => {
    // Kembalikan array proyek yang sesuai dengan tab aktif saat ini
    return allProjects[activeTab.value] || [];
  });
</script>

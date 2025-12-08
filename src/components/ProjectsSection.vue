<template>
  <section id="projects" class="py-10 bg-white dark:bg-slate-900">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold pb-1 border-b-4 border-black inline-block dark:text-white dark:border-white">MY PROJECTS</h2>
      </div>

      <!-- <div class="flex justify-center mb-10">
        <div class="inline-flex rounded-full border-2 border-black dark:border-white overflow-hidden p-0.5 bg-gray-100 dark:bg-slate-900">
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
      </div> -->

      <div class="grid md:grid-cols-2 gap-8">
        <router-link
          v-for="project in filteredProjects"
          :key="project.id"
          :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
          class="block bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-black dark:border-white p-4 transition-all hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1">
          <img :src="project.image" :alt="project.title" class="w-full h-80 object-cover rounded-[2rem]" />

          <div class="pt-6 px-2 pb-2">
            <h3 class="text-xl font-semibold mb-2 text-black dark:text-white">{{ project.title }}</h3>

            <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4 text-gray-700 dark:text-gray-300">
              <div v-if="project.timeline">
                <span class="font-extrabold text-red-500">Timeline:</span>
                {{ project.timeline }}
              </div>
              <div v-if="project.team">
                <span class="font-extrabold text-blue-500">Team:</span>
                {{ project.team }}
              </div>
              <div v-if="project.category">
                <span class="font-extrabold text-green-500">Category:</span>
                {{ project.category }}
              </div>
              <div v-if="project.role">
                <span class="font-extrabold text-yellow-500">Role:</span>
                {{ project.role }}
              </div>
            </div>

            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ truncateText(project.description) }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tag, index) in project.tags"
                :key="index"
                :class="project.tagBgColors && project.tagBgColors[index] ? project.tagBgColors[index] : 'bg-gray-200 dark:bg-slate-600 dark:text-white'"
                class="px-5 py-1 rounded-full text-sm font-bold text-black border border-black dark:border-slate-400">
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
  // Pastikan projectBrandDesign benar-benar ada di file project.js, jika belum ada, buat array kosong sementara
  import { projectWebDev } from '../data/projects';

  const activeTab = ref('webdev');

  const allProjects = {
    webdev: projectWebDev, // Fallback jika undefined agar tidak error
  };

  const filteredProjects = computed(() => {
    return allProjects[activeTab.value] || [];
  });

  // --- TAMBAHKAN FUNGSI INI ---
  const truncateText = (text, length = 150) => {
    if (!text) return '';
    // Menghapus tag HTML jika content berupa HTML string
    const strippedText = text.replace(/(<([^>]+)>)/gi, '');
    if (strippedText.length <= length) return strippedText;
    return strippedText.substring(0, length) + '...';
  };
</script>

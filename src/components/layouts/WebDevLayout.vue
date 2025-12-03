<template>
  <div class="max-w-4xl mx-auto px-6 space-y-7">
    <router-link :to="{ name: 'Home' }" class="mt-20 inline-flex items-center text-lg font-bold hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z" /></svg>
      Back to Project
    </router-link>
    <div class="border border-black items-center rounded-[40px] py-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
      <header class="text-center">
        <span class="px-3 py-1 border border-black bg-purple-100 text-purple-700 rounded-full text-sm font-bold tracking-wide dark:bg-purple-900 dark:text-purple-300">WEB DEVELOPMENT CASE STUDY</span>
        <h1 class="text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-slate-900 dark:text-white leading-tight">
          {{ project.title }}
        </h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ project.description }}
        </p>
      </header>
      <div class="border-t-2 border-dashed mt-4 mx-10">
        <div class="flex justify-center flex-wrap gap-3 border-black mt-5">
          <span
            v-for="(tag, index) in project.tags"
            :key="index"
            :class="project.tagBgColors[index] || 'bg-gray-200'"
            class="px-5 py-2 rounded-full border-2 border-black text-sm font-bold text-black">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="relative bg-slate-100 dark:bg-slate-800 p-4 md:p-8 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700">
      <img :src="project.image" class="w-full h-auto rounded-xl shadow-2xl" alt="Dashboard Preview" />
    </div>

    <div class="grid md:grid-cols-3 gap-12 pt-8">
      <div class="md:col-span-1 space-y-6">
        <div>
          <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Role</h3>
          <p class="font-semibold dark:text-white">Fullstack Developer</p>
        </div>
        <div>
          <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Timeline</h3>
          <p class="font-semibold dark:text-white">2 Bulan</p>
        </div>
        <div v-if="project.link">
          <a
            :href="project.link"
            target="_blank"
            class="w-full block text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-purple-500/30">
            Live Demo 🚀
          </a>
        </div>
      </div>

      <div class="md:col-span-2 prose dark:prose-invert max-w-none">
        <template v-if="project.details">
          <h3>The Challenge</h3>
          <p>{{ project.details.challenge }}</p>

          <h3>The Solution</h3>
          <p>{{ project.details.solution }}</p>

          <h3>The Result</h3>
          <p>{{ project.details.result }}</p>
        </template>
        <p v-else class="text-gray-500 italic">Belum ada detail teknis yang ditambahkan.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({ project: Object });
</script>

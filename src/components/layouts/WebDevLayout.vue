<template>
  <div class="max-w-4xl mx-auto px-6 pb-20 space-y-8">
    <router-link :to="{ name: 'Home', hash: '#projects' }" class="mt-20 inline-flex items-center text-lg font-bold hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z" /></svg>
      Back to Project
    </router-link>

    <div
      class="bg-white dark:bg-slate-900 border-2 border-black dark:border-white rounded-[40px] py-10 px-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative z-10">
      <header class="text-center">
        <span
          class="px-4 py-1.5 border-2 border-black bg-purple-100 text-purple-700 rounded-full text-sm font-bold tracking-wide dark:bg-purple-900 dark:text-purple-200 dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
          {{ project.category }}
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold mt-6 mb-4 text-slate-900 dark:text-white leading-tight">
          {{ project.title }}
        </h1>
      </header>

      <div class="border-t-2 border-dashed border-gray-300 dark:border-gray-700 mt-8 mx-4 md:mx-10 pt-6">
        <div class="flex justify-center flex-wrap gap-3">
          <span
            v-for="(tag, index) in project.tags"
            :key="index"
            :class="project.tagBgColors[index] || 'bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-100'"
            class="px-4 py-1.5 rounded-full border-2 border-black dark:border-white text-sm font-bold text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex items-center px-6 py-4 bg-pink-100 dark:bg-pink-900/50 border-2 border-black dark:border-white rounded-full">
        <span class="font-extrabold text-black dark:text-white mr-2 text-lg">Role:</span>
        <span class="text-gray-800 dark:text-gray-200 font-medium">{{ project.role }}</span>
      </div>

      <div class="flex items-center px-6 py-4 bg-indigo-100 dark:bg-indigo-900/50 border-2 border-black dark:border-white rounded-full">
        <span class="font-extrabold text-black dark:text-white mr-2 text-lg">Timeline:</span>
        <span class="text-gray-800 dark:text-gray-200 font-medium">{{ project.timeline }}</span>
      </div>

      <div class="flex items-center px-6 py-4 bg-yellow-100 dark:bg-yellow-900/50 border-2 border-black dark:border-white rounded-full">
        <span class="font-extrabold text-black dark:text-white mr-2 text-lg">Team:</span>
        <span class="text-gray-800 dark:text-gray-200 font-medium">{{ project.team }}</span>
      </div>

      <div class="flex items-center px-6 py-4 bg-cyan-100 dark:bg-cyan-900/50 border-2 border-black dark:border-white rounded-full">
        <span class="font-extrabold text-black dark:text-white mr-2 text-lg">Type:</span>
        <span class="text-gray-800 dark:text-gray-200 font-medium">{{ project.type }}</span>
      </div>
    </div>

    <a v-if="project.link" :href="project.link" target="_blank" class="block group">
      <div
        class="w-full flex justify-between items-center px-8 py-5 bg-rose-100 dark:bg-rose-900 border-2 border-black dark:border-white rounded-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
        <div class="flex items-center gap-2">
          <span class="font-extrabold text-xl text-black dark:text-white">Link Project:</span>
          <span class="text-lg text-rose-800 dark:text-rose-200 underline decoration-2 underline-offset-4 truncate max-w-[200px] md:max-w-none">
            {{ project.link }}
          </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="dark:text-white transform group-hover:rotate-45 transition-transform shrink-0">
          <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </div>
    </a>

    <div v-else class="w-full flex justify-between items-center px-8 py-5 bg-gray-200 dark:bg-slate-800 border-2 border-black dark:border-white rounded-full cursor-not-allowed opacity-90">
      <div class="flex items-center gap-2">
        <span class="font-extrabold text-xl text-gray-500 dark:text-gray-400">Link Project:</span>
        <span class="text-lg text-gray-700 dark:text-gray-300 font-bold italic">Private Hosted 🔒</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-gray-500 dark:text-gray-400">
        <path
          fill="currentColor"
          d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 10 0v2h1zM7 10v10h10V10H7zm2-2h6V6a3 3 0 0 0-6 0v2z" />
      </svg>
    </div>

    <div class="w-full h-auto md:h-auto border-2 border-black dark:border-white rounded-[40px] overflow-hidden mb-10">
      <img :src="project.image" class="w-full h-full object-cover" :alt="project.title" />
    </div>

    <div class="prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
      <div v-html="project.content[0]"></div>
    </div>

    <div class="mt-7 grid md:grid-cols-1 gap-5" v-if="project.gallery.length > 1">
      <img v-if="project.gallery[0]" :src="project.gallery[0]" class="border border-black w-full h-auto md:h-auto object-cover rounded-3xl" alt="Project visual 2" />
    </div>

    <div class="mt-7 prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
      <div v-html="project.content[1]"></div>
    </div>

    <div class="mt-7 grid md:grid-cols-1 gap-5" v-if="project.gallery.length > 1">
      <img v-if="project.gallery[1]" :src="project.gallery[1]" class="border border-black w-full h-auto md:h-auto object-cover rounded-3xl" alt="Project visual 2" />
    </div>

    <div class="mt-7 prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
      <div v-html="project.content[2]"></div>
    </div>

    <div class="mt-7 grid md:grid-cols-1 gap-5" v-if="project.gallery.length > 1">
      <img v-if="project.gallery[2]" :src="project.gallery[2]" class="border border-black w-full h-auto md:h-auto object-cover rounded-3xl" alt="Project visual 3" />
    </div>

    <div class="mt-7 prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
      <div v-html="project.content[3]"></div>
    </div>

    <div class="mt-7 grid md:grid-cols-1 gap-5" v-if="project.gallery.length > 1">
      <img v-if="project.gallery[3]" :src="project.gallery[3]" class="border border-black w-full h-auto md:h-auto object-cover rounded-3xl" alt="Project visual 4" />
    </div>

    <div class="mt-7 prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
      <div v-html="project.content[4]"></div>
    </div>

    <div class="mt-7 grid md:grid-cols-1 gap-5" v-if="project.gallery.length > 1">
      <img v-if="project.gallery[4]" :src="project.gallery[4]" class="border border-black w-full h-auto md:h-auto object-cover rounded-3xl" alt="Project visual 5" />
    </div>
    <div class="mt-7 prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
      <div v-html="project.content[5]"></div>
    </div>

    <div class="mt-7 grid md:grid-cols-1 gap-5" v-if="project.gallery.length > 1">
      <img v-if="project.gallery[5]" :src="project.gallery[5]" class="border border-black w-full h-auto md:h-auto object-cover rounded-3xl" alt="Project visual 5" />
    </div>

    <a :href="project.journal" target="_blank" class="block group" v-if="project.journal">
      <div
        class="w-full flex justify-between items-center px-6 md:px-8 py-5 bg-emerald-100 dark:bg-emerald-800 border-2 border-black dark:border-white rounded-full hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer">
        <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 min-w-0">
          <span class="font-extrabold text-xl text-black dark:text-white shrink-0">Journal Article</span>

          <span class="text-sm md:text-lg text-emerald-800 dark:text-emerald-200 underline decoration-2 underline-offset-4 truncate max-w-full md:max-w-none">
            {{ project.journal }}
          </span>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="dark:text-white transform group-hover:rotate-45 transition-transform shrink-0 ml-3">
          <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </div>
    </a>
  </div>
</template>

<script setup>
  // Props menerima object project yang lengkap
  defineProps({ project: Object });
</script>

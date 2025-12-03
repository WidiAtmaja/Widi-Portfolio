<template>
  <div class="w-full">
    <div class="w-full h-[60vh] relative">
      <img :src="project.image" class="w-full h-full object-cover" alt="Brand Hero" />
      <div class="absolute inset-0 bg-black/40 flex items-end p-10 md:p-20">
        <div class="text-white">
          <h1 class="text-5xl md:text-7xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-xl opacity-90">{{ project.description }}</p>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-20">
      <div class="max-w-2xl mx-auto text-center mb-20">
        <span class="text-yellow-600 dark:text-yellow-400 font-bold tracking-widest uppercase text-sm">Brand Identity</span>
        <p class="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed" v-if="project.details">
          {{ project.details.challenge }}
        </p>
      </div>

      <div v-if="project.gallery && project.gallery.length > 0" class="space-y-12">
        <div v-if="project.gallery[0]" class="rounded-none md:rounded-3xl overflow-hidden shadow-2xl">
          <img :src="project.gallery[0]" class="w-full h-auto" alt="Brand visual 1" />
        </div>

        <div class="grid md:grid-cols-2 gap-8" v-if="project.gallery.length > 1">
          <img v-if="project.gallery[1]" :src="project.gallery[1]" class="w-full h-[500px] object-cover rounded-3xl" alt="Brand visual 2" />
          <img v-if="project.gallery[2]" :src="project.gallery[2]" class="w-full h-[500px] object-cover rounded-3xl" alt="Brand visual 3" />
        </div>

        <div v-for="(img, idx) in project.gallery.slice(3)" :key="idx" class="rounded-3xl overflow-hidden">
          <img :src="img" class="w-full h-auto" alt="Brand visual extra" />
        </div>
      </div>

      <div v-else class="text-center py-20 text-gray-400">
        <p>Belum ada galeri gambar.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({ project: Object });
</script>

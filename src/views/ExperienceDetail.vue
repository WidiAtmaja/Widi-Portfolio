<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 py-20">
    <div v-if="!experience" class="flex flex-col items-center justify-center h-[50vh]">
      <h2 class="text-2xl font-bold text-gray-400">Memuat Data...</h2>
      <router-link :to="{ name: 'Home' }" class="text-blue-500 hover:underline mt-4">Kembali ke Beranda</router-link>
    </div>

    <div v-else class="max-w-4xl mx-auto px-6">
      <router-link
        :to="{ name: 'Home', hash: '#experience' }"
        class="inline-flex items-center gap-2 mb-8 text-lg font-bold hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z" /></svg>
        Back to Experience
      </router-link>

      <div
        class="border-2 border-black dark:border-white rounded-[40px] p-6 md:p-10 mb-10 bg-white dark:bg-slate-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
        <div class="flex justify-between items-start mb-4">
          <span class="px-4 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-bold uppercase tracking-wider">
            {{ experience.predicate }}
          </span>
        </div>

        <h1 class="text-3xl md:text-5xl font-extrabold text-black dark:text-white mb-6 leading-tight">
          {{ experience.title }}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300 border-t-2 border-dashed border-gray-300 dark:border-gray-700 pt-6">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
            </svg>
            <span class="font-semibold">{{ experience.date }}</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z" />
            </svg>
            <span class="font-semibold">{{ experience.location }}</span>
          </div>
        </div>
      </div>

      <div class="w-full h-full md:h-full border-2 border-black dark:border-white rounded-[40px] overflow-hidden mb-10">
        <img :src="experience.image" class="w-full h-full object-cover" :alt="experience.title" />
      </div>

      <div class="prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
        <div v-html="experience.content[0]"></div>
      </div>

      <div class="mt-7 grid md:grid-cols-2 gap-5" v-if="experience.gallery.length > 1">
        <img v-if="experience.gallery[0]" :src="experience.gallery[0]" class="border border-black w-full h-full md:h-full object-cover rounded-3xl" alt="Exp visual 1" />
        <img v-if="experience.gallery[1]" :src="experience.gallery[1]" class="border border-black w-full h-full md:h-full object-cover rounded-3xl" alt="Exp visual 2" />
      </div>

      <div class="mt-7 prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
        <div v-html="experience.content[1]"></div>
      </div>

      <div class="mt-7 grid md:grid-cols-1 gap-5" v-if="experience.gallery.length > 1">
        <img v-if="experience.gallery[2]" :src="experience.gallery[2]" class="border border-black w-full h-full md:h-full object-cover rounded-3xl" alt="Exp visual 3" />
        <img v-if="experience.gallery[3]" :src="experience.gallery[3]" class="border border-black w-full h-full md:h-full object-cover rounded-3xl" alt="Exp visual 4" />
        <img v-if="experience.gallery[4]" :src="experience.gallery[4]" class="border border-black w-full h-full md:h-full object-cover rounded-3xl" alt="Exp visual 5" />
      </div>

      <div class="mt-7 prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
        <div v-html="experience.content[2]"></div>
      </div>

      <div v-if="experience.tags && experience.tags.length > 0 && experience.tags[0] !== ''" class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 class="text-xl font-bold mb-4 dark:text-white">Skills & Technologies:</h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="(tag, index) in experience.tags"
            :key="index"
            :class="experience.tagBgColors[index] || 'bg-gray-200'"
            class="px-5 py-2 rounded-full border-2 border-black text-sm font-bold text-black">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref, onMounted, watch } from 'vue';
  import { experienceData } from '../data/experience';

  const props = defineProps({
    slug: { type: String, required: true },
  });

  const experience = ref(null);

  const fetchExperience = (slug) => {
    experience.value = experienceData.find((e) => e.slug === slug) || null;
  };

  onMounted(() => fetchExperience(props.slug));
  watch(
    () => props.slug,
    (newSlug) => fetchExperience(newSlug)
  );
</script>

<template>
  <section id="experience" class="py-24 bg-white dark:bg-slate-900">
    <div class="max-w-6xl xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold pb-1 border-b-4 border-black inline-block dark:text-white dark:border-white">EXPERIENCE</h2>
      </div>

      <div class="flex flex-col space-y-8">
        <div
          v-for="exp in experienceData"
          :key="exp.id"
          class="flex flex-col md:flex-row border-2 border-black dark:border-white rounded-[40px] overflow-hidden bg-white dark:bg-slate-800 transition-all hover:shadow-lg">
          <div
            class="w-full md:w-1/3 lg:w-1/4 min-h-[200px] md:min-h-full bg-gray-50 dark:bg-slate-700 flex items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-black dark:border-white p-4">
            <img :src="exp.image" :alt="exp.title" class="w-full h-full object-cover rounded-2xl border border-gray-200 dark:border-gray-600" />
          </div>

          <div class="flex-1 p-6 md:p-8 text-left">
            <h3 class="text-2xl md:text-3xl font-extrabold text-black dark:text-white mb-4">
              {{ exp.title }}
            </h3>

            <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4 text-gray-700 dark:text-gray-300">
              <div v-if="exp.date">
                <span class="font-bold">Tanggal:</span>
                {{ exp.date }}
              </div>
              <div v-if="exp.location">
                <span class="font-bold">Tempat:</span>
                {{ exp.location }}
              </div>
              <div v-if="exp.predicate">
                <span class="font-bold">Predikat:</span>
                {{ exp.predicate }}
              </div>
            </div>

            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {{ truncateText(exp.content[0]) }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="(tag, index) in exp.tags"
                :key="index"
                :class="exp.tagBgColors && exp.tagBgColors[index] ? exp.tagBgColors[index] : 'bg-gray-200 dark:bg-slate-600 dark:text-white'"
                class="px-5 py-1 rounded-full text-sm font-bold text-black border border-black dark:border-slate-400">
                {{ tag }}
              </span>
            </div>

            <router-link :to="{ name: 'ExperienceDetail', params: { slug: exp.slug } }" class="text-blue-600 dark:text-blue-400 font-bold hover:underline text-lg inline-flex items-center gap-1">
              Selengkapnya
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { experienceData } from '../data/experience.js';

  const truncateText = (htmlString, limit = 20) => {
    if (!htmlString) return '';

    const plainText = htmlString.replace(/<\/?[^>]+(>|$)/g, '');
    const words = plainText.split(/\s+/);

    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }

    return plainText;
  };
</script>

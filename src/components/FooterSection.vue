<template>
  <footer class="bg-gray-200 dark:bg-slate-900 text-black dark:text-white py-10">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col items-center justify-center">
        <h1 class="mb-4 font-extrabold text-2xl">Widi Atmaja</h1>

        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-700 dark:text-gray-400 mb-6">
          <a href="#skill" class="hover:text-black dark:hover:text-white transition-colors">Skill</a>
          <a href="#projects" class="hover:text-black dark:hover:text-white transition-colors">Project</a>
          <a href="#experience" class="hover:text-black dark:hover:text-white transition-colors">Experience</a>
          <a href="#contact" class="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>
      </div>

      <p class="text-center text-gray-500 dark:text-gray-400 text-sm">© {{ new Date().getFullYear() }} Widi Atmaja. All rights reserved.</p>
    </div>
  </footer>
</template>

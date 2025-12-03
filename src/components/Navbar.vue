<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow">
    <div class="flex justify-between items-center p-5 lg:px-12 relative z-20">
      <div class="text-2xl font-bold dark:text-white hover:text-sky-500 hover:dark:text-sky-200"><a href="/">Widi Atmaja</a></div>

      <!-- Mobile-->
      <div class="md:hidden z-30">
        <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
          <span v-if="isMenuOpen" class="text-3xl md:text-black text-black dark:text-white">
            <Icon icon="material-symbols:close" />
          </span>
          <span v-else class="text-3xl md:text-black text-black dark:text-white">
            <Icon icon="material-symbols:menu" />
          </span>
        </button>
      </div>

      <!-- Nav Bar Link-->
      <nav :class="[`fixed inset-0 z-20 flex flex-col items-center justify-center bg-white dark:bg-slate-800 md:relative md:flex md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`]">
        <ul class="flex flex-col items-center space-y-2 md:flex-row md:space-x-5 md:space-y-0">
          <li v-for="item in menu" :key="item.name">
            <a
              :href="item.href"
              class="block transition ease-linear text-4xl md:text-lg lg:text-lg font-bold text-black md:text-black hover:text-sky-500 dark:text-white dark:hover:text-sky-200"
              @click="scrollToSection(item.href)">
              {{ item.name }}
            </a>
          </li>
          <button @click="toggleDarkMode" class="z-10 md:block">
            <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-4xl md:text-2xl lg:text-2xl text-black hover:text-sky-500" />
            <Icon v-else icon="line-md:moon-filled" class="text-4xl md:text-2xl lg:text-2xl text-white hover:text-sky-200" />
          </button>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  const isMenuOpen = ref(false);
  const menu = ref([
    { name: 'About Me', href: '#about-me' },
    { name: 'Project', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]);

  const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDarkMode = ref(localStorage.getItem('theme') == 'dark');

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode.value) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    isDarkMode.value = !isDarkMode.value;
  };
</script>

<template>
  <section id="home" class="min-h-screen relative pt-20" ref="vantaRef">
    <div class="max-w-7xl mx-auto px-6 w-full relative z-10 pb-6">
      <div class="flex justify-center mb-6">
        <div class="inline-block px-5 py-2 border-2 border-black dark:border-white bg-blue-200/50 dark:bg-blue-400/20 text-black dark:text-white rounded-full text-lg font-semibold shadow-inner">
          Hii, my name is Widi Atmaja I'M
        </div>
      </div>

      <div class="text-center">
        <h1 class="text-black dark:text-white text-5xl sm:text-9xl lg:text-[10rem] font-extrabold leading-none">FULL STACK</h1>
        <h1 class="text-6xl sm:text-8xl lg:text-9xl font-extrabold leading-none text-stroke">DEVELOPER</h1>
      </div>

      <div class="flex justify-center mt-6 mb-10 w-full">
        <div class="w-full max-w-4xl flex justify-between items-center px-4">
          <p class="text-sm md:text-xl sm:text-lg text-gray-700 dark:text-gray-200 italic">Based in Bali, Singaraja</p>
          <div class="flex gap-4 items-center relative z-50">
            <a href="mailto:bagaabagusatma98@gmail.com" class="transition-transform duration-300 hover:scale-110" target="_blank" aria-label="Email Widi Atmaja">
              <div class="bg-green-300 dark:bg-green-600/50 justify-center border-2 border-black dark:border-white rounded-full p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" class="dark:fill-white">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v.25l10 7.5 10-7.5V6c0-1.1-.9-2-2-2"></path>
                  <path d="M12 16c-.21 0-.42-.07-.6-.2L2 8.75V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8.75l-9.4 7.05c-.18.13-.39.2-.6.2"></path>
                </svg>
              </div>
            </a>

            <a href="https:wa.me/6281529079658" target="_blank" class="transition-transform duration-300 hover:scale-110" aria-label="Nomor HP Widi Atmaja">
              <div class="bg-amber-300 dark:bg-amber-600/50 justify-center border-2 border-black dark:border-white rounded-full p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" class="dark:fill-white">
                  <path
                    d="M18.41 22h.37c.31-.01.6-.17.78-.43l2.27-3.27c.15-.22.21-.49.16-.76a1 1 0 0 0-.43-.65l-4.91-3.27c-.41-.27-.96-.21-1.29.15l-1.88 2.03c-.76-.45-2.03-1.26-3.03-2.26s-1.81-2.27-2.26-3.02l2.03-1.88c.36-.33.43-.88.15-1.29L7.1 2.44c-.15-.22-.38-.38-.64-.43-.27-.05-.54 0-.76.16L2.43 4.43c-.26.18-.42.47-.43.78-.03.71-.16 7.04 4.79 11.98 4.46 4.46 10.04 4.8 11.62 4.8Z"></path>
                </svg>
              </div>
            </a>

            <a href="https://github.com/widiatmaja" class="transition-transform duration-300 hover:scale-110" target="_blank" aria-label="Profil Github Widi Atmaja">
              <div class="bg-red-300 dark:bg-red-600/50 justify-center border-2 border-black dark:border-white rounded-full p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="dark:fill-white">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="flex justify-center relative z-40 mt-[-80px] md:mt-[-150px]">
        <img src="/src/assets/images/hero-pic.webp" alt="hero-picture" class="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto object-cover" />
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center relative z-50 mt-[-50px] md:mt-[-80px]">
        <button
          @click="scrollToSection('projects')"
          class="px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-all hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg">
          View My Work
          <span class="text-xl">→</span>
        </button>

        <button
          @click="scrollToSection('contact')"
          class="px-8 py-4 bg-teal-200 text-black border-2 border-black dark:border-white rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all shadow-lg dark:bg-teal-800 dark:text-white dark:hover:bg-teal-700">
          Get in Touch
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import * as THREE from 'three';
  import NET from 'vanta/dist/vanta.net.min';

  const vantaRef = ref(null);
  let vantaEffect = null;
  let themeObserver = null;

  // Warna khusus yang stabil untuk Vanta
  const getThemeColors = (isDark) => {
    return {
      color: isDark ? 0x374151 : 0xffffff,
      backgroundColor: isDark ? 0x0f172a : 0xededed,
    };
  };

  const updateVantaTheme = () => {
    if (!vantaEffect) return;

    const isDark = document.documentElement.classList.contains('dark');
    const colors = getThemeColors(isDark);

    vantaEffect.setOptions({
      color: colors.color,
      backgroundColor: colors.backgroundColor,
    });
  };

  onMounted(() => {
    const isDarkInit = document.documentElement.classList.contains('dark');
    const initialColors = getThemeColors(isDarkInit);

    vantaEffect = NET({
      el: vantaRef.value,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      showDots: false,
      color: initialColors.color,
      backgroundColor: initialColors.backgroundColor,
    });

    themeObserver = new MutationObserver(() => {
      updateVantaTheme();
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  });

  onBeforeUnmount(() => {
    if (vantaEffect) vantaEffect.destroy();
    if (themeObserver) themeObserver.disconnect();
  });

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<template>
  <section id="contact" class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <div class="grid md:grid-cols-2 gap-20 items-start">
        <div class="text-left">
          <h2 class="mb-10 text-4xl font-extrabold pb-1 border-b-4 border-black inline-block dark:text-white dark:border-white">GET IN TOUCH</h2>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or contact me directly.</p>

          <div class="flex flex-col space-y-10 mt-12">
            <div class="flex items-center gap-4">
              <div class="bg-green-300 dark:bg-green-600/50 justify-center border-2 border-black dark:border-white rounded-full p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" class="dark:fill-white">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v.25l10 7.5 10-7.5V6c0-1.1-.9-2-2-2"></path>
                  <path d="M12 16c-.21 0-.42-.07-.6-.2L2 8.75V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8.75l-9.4 7.05c-.18.13-.39.2-.6.2"></path>
                </svg>
              </div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white">Email</p>
                <a href="mailto:bagaabagusatma98@gmail.com" class="text-gray-600 dark:text-gray-400">bagaabagusatma98@gmail.com</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-amber-300 dark:bg-amber-600/50 justify-center border-2 border-black dark:border-white rounded-full p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 24 24" class="dark:fill-white">
                  <path
                    d="M18.41 22h.37c.31-.01.6-.17.78-.43l2.27-3.27c.15-.22.21-.49.16-.76a1 1 0 0 0-.43-.65l-4.91-3.27c-.41-.27-.96-.21-1.29.15l-1.88 2.03c-.76-.45-2.03-1.26-3.03-2.26s-1.81-2.27-2.26-3.02l2.03-1.88c.36-.33.43-.88.15-1.29L7.1 2.44c-.15-.22-.38-.38-.64-.43-.27-.05-.54 0-.76.16L2.43 4.43c-.26.18-.42.47-.43.78-.03.71-.16 7.04 4.79 11.98 4.46 4.46 10.04 4.8 11.62 4.8Z"></path>
                </svg>
              </div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white">Phone</p>
                <a href="tel:+6281529079658" class="text-gray-600 dark:text-gray-400">+6281-52907-9658</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-red-300 dark:bg-red-600/50 justify-center border-2 border-black dark:border-white rounded-full p-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="dark:fill-white">
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white">Github</p>
                <a href="https://github.com/widiatmaja" target="_blank" class="text-gray-600 dark:text-gray-400">widiatmaja</a>
              </div>
            </div>
          </div>
        </div>

        <form action="https://formspree.io/f/yourFormID" method="POST" class="space-y-6 w-full max-w-md mx-auto">
          <label class="block text-left">
            <span class="font-semibold text-gray-900 dark:text-white">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              class="w-full border-2 border-black dark:border-white rounded-3xl p-3 mt-1 bg-white dark:bg-slate-700 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </label>

          <label class="block text-left">
            <span class="font-semibold text-gray-900 dark:text-white">Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              class="w-full border-2 border-black dark:border-white rounded-3xl p-3 mt-1 bg-white dark:bg-slate-700 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          </label>

          <label class="block text-left">
            <span class="font-semibold text-gray-900 dark:text-white">Message</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              class="w-full border-2 border-black dark:border-white rounded-3xl p-3 mt-1 bg-white dark:bg-slate-700 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400"></textarea>
          </label>

          <button
            type="submit"
            class="w-full bg-blue-200 text-black border-2 border-black dark:border-white rounded-full py-3 font-semibold hover:bg-sky-400 transition-all flex justify-center items-center gap-2">
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<template>
  <section id="about-me" class="py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold pb-1 border-b-4 border-black inline-block dark:text-white dark:border-white">ABOUT ME</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-20 items-center">
        <div class="w-full mx-auto p-8 border-2 border-black dark:border-white rounded-[40px] bg-white dark:bg-slate-800">
          <h2 class="text-3xl font-extrabold italic text-center text-black dark:text-white mb-8">My Skills</h2>

          <div v-for="category in skills" :key="category.name" class="mb-8 last:mb-0">
            <h3 class="text-xl font-bold text-black dark:text-white mb-4">
              {{ category.name }}
            </h3>

            <div class="grid grid-cols-4 sm:grid-cols-4 gap-y-6 gap-x-2">
              <div v-for="skill in category.items" :key="skill.name" class="flex flex-col items-center">
                <div
                  :class="category.colorClass"
                  class="w-16 h-16 flex justify-center sm:w-20 sm:h-20 items-center rounded-full border border-black dark:border-white mb-1 transition-transform transform hover:scale-110">
                  <!-- Render icon jika ada -->
                  <div v-if="skill.icon" v-html="skill.icon" class="w-12 h-12 text-black dark:text-white flex justify-center items-center [&>svg]:w-full [&>svg]:h-full"></div>
                </div>

                <p class="text-sm font-medium text-black dark:text-white text-center">
                  {{ skill.name }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">A Little About Me</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            I'm Widi Atmaja, a creative technologist who bridges the gap between code and design. With a passion for both front-end development and brand identity, I craft digital experiences that are
            not only functional but visually stunning.
          </p>
          <p class="text-gray-600 mb-6 leading-relaxed">
            My journey started with a love for problem-solving through code, which naturally evolved into a fascination with design systems and brand storytelling. Today, I help brands and businesses
            build their digital presence with precision and creativity.
          </p>

          <div class="justify-center flex gap-5">
            <!-- Web Developemtn-->
            <div class="transition-transform transform hover:scale-105 p-8 rounded-3xl border-2 border-black dark:border-white bg-purple-300 dark:bg-purple-700 max-w-sm">
              <div class="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-black dark:text-white">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>

              <h3 class="text-2xl font-bold text-black dark:text-white mb-2">Web Development</h3>
              <p class="text-gray-700 dark:text-gray-200 text-base">Building responsive, performant web applications with modern technologies</p>
            </div>

            <!-- Brand Design-->
            <div class="transition-transform transform hover:scale-105 p-8 rounded-3xl border-2 border-black dark:border-white bg-amber-300 dark:bg-amber-700 max-w-sm">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5" />
                </svg>
              </div>

              <h3 class="text-2xl font-bold text-black dark:text-white mb-2">Brand Design</h3>
              <p class="text-gray-700 dark:text-gray-200 text-base">Creating memorable visual identities and cohesive brand experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  const iconLaravel = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#390606" stroke-linejoin="round" d="m17 13l3.464-2V7L17 5l-3.464 2v4M17 13l-3.464-2M17 13v4l-7 4m7-8V9m0 4l-7 4m3.536-6L10.5 12.735M10 21l-3.464-2.132M10 21v-4m-3.464 2v-.132m0 0V15l3.964-2.265m-3.964 6.133L3.5 17V5m0 0L7 3l3.5 2m-7 0l3 2m4-2v7.735M10.5 5l-4 2M17 9l3.5-2M17 9l-3.5-2M10 17l-3.5-2m0 .5V7" stroke-width="1"/></svg>`;
  const iconMySQL = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#390606" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273c.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333c-.04-.047-.046-.094-.08-.14c-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a51 51 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a73 73 0 0 0-.195 4.41H0q.083-2.95.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095q.363 3.024.428 5.53zm4.017-4.08q-.567 3.069-1.492 4.46q-.723 1.074-1.583 1.073q-.228 0-.566-.138v-.494q.166.026.386.026q.402 0 .647-.222q.295-.27.295-.605q0-.233-.23-.944L6.23 14.615h.91l.727 2.36q.247.804.205 1.123q.6-1.598.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5q.136-.113.255-.25q.649-.76.648-2.253q0-2.745-2.155-2.746q-1.056 0-1.65.697q-.646.762-.646 2.245q-.001 1.459.574 2.14q.524.615 1.583.615q.396 0 .725-.098l1.325.772l.36-.622zM15.5 17.588q-.337-.541-.337-1.736q0-2.09 1.27-2.09q.666 0 .977.5q.336.543.336 1.723q0 2.107-1.27 2.108q-.667 0-.978-.5zm-1.658-.425q0 .706-.516 1.156q-.514.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476q.656.329 1.19.328q.498 0 .783-.22a.75.75 0 0 0 .3-.615c0-.33-.23-.61-.648-.845c-.388-.213-1.163-.657-1.163-.657c-.422-.307-.632-.636-.632-1.177q0-.674.47-1.085q.471-.416 1.22-.415q.769 0 1.4.41l-.213.476a2.7 2.7 0 0 0-1.064-.23q-.425 0-.654.206a.69.69 0 0 0-.248.524c0 .328.234.61.666.85c.393.215 1.187.67 1.187.67c.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188c-.1.04-.26.04-.274.167c.055.053.063.14.11.214c.08.134.218.313.346.407q.208.167.427.31c.26.16.555.255.81.416c.145.094.293.213.44.313c.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214c-.067-.067-.134-.127-.2-.193a3.2 3.2 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106c.227-.06.435-.047.67-.106q.16-.042.32-.094v-.06c-.12-.12-.21-.283-.334-.395a9 9 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334c-.08-.04-.214-.06-.26-.127c-.12-.146-.19-.34-.275-.514a18 18 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763c-.69-1.137-1.437-1.826-2.586-2.5c-.247-.14-.543-.2-.856-.274c-.167-.008-.334-.02-.5-.027c-.11-.047-.216-.174-.31-.235c-.38-.24-1.364-.76-1.644-.072c-.18.434.267.862.422 1.082c.115.153.26.328.34.5c.047.116.06.235.107.356c.106.294.207.622.347.897c.073.14.153.287.247.413c.054.073.146.107.167.227c-.094.136-.1.334-.154.5c-.24.757-.146 1.693.194 2.25c.107.166.362.534.703.393c.3-.12.234-.5.32-.835c.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555c.206.328.566.668.867.895c.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.5 3.5 0 0 1-.35-.4a9 9 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643c-.04-.08-.04-.2-.107-.24c-.1.146-.247.273-.32.453c-.127.288-.14.642-.188 1.01c-.027.007-.014 0-.027.014c-.214-.052-.287-.274-.367-.46c-.2-.475-.233-1.238-.06-1.785c.047-.14.247-.582.167-.716c-.042-.127-.174-.2-.247-.303a2.5 2.5 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162c-.08-.173-.22-.354-.334-.513c-.127-.18-.267-.307-.368-.52c-.033-.073-.08-.194-.027-.274c.014-.054.042-.075.094-.09c.088-.072.335.022.422.062c.247.1.455.194.662.334c.094.066.195.193.315.226h.14c.214.047.455.014.655.073c.355.114.675.28.962.46a5.95 5.95 0 0 1 2.085 2.286c.08.154.115.295.188.455c.14.33.313.663.455.982c.14.315.275.636.476.897c.1.14.502.213.682.286c.133.06.34.115.46.188c.23.14.454.3.67.454c.11.076.443.243.463.378"/></svg>`;
  const iconPhotoshop = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#390606" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"/><path d="M7 16v-4m0 0V8h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2zm10-1c-.306-.613-.933-1-1.618-1H15a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 15 13h.5a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5h-.382a1.81 1.81 0 0 1-1.618-1v0"/></g></svg>`;
  const iconHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#390606" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16.695 5a2 2 0 0 1 1.98 2.282l-1.249 8.784a2 2 0 0 1-1.365 1.621l-3.446 1.114a2 2 0 0 1-1.23 0l-3.446-1.114a2 2 0 0 1-1.365-1.621l-1.25-8.784A2 2 0 0 1 7.305 5z"/><path d="M15 8.4H9l.429 3.394h5.142l-.214 1.485l-.214 1.485L12 15.4l-2.143-.636l-.086-.425"/></g></svg>`;
  const iconJavascript = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#390606" d="m13.334 16.055l-.858 1.188q1.221 1.089 3.036 1.089q1.386-.033 2.112-.715q.737-.693.737-1.65q0-.935-.517-1.54t-1.738-.968q-1.01-.307-1.43-.561q-.418-.264-.418-.638q0-.34.341-.55q.342-.21.913-.209q.419 0 .946.165q.528.143.935.462l.77-1.199q-1.011-.814-2.684-.814q-1.198 0-1.969.616q-.792.615-.792 1.529q.011.968.638 1.507q.638.54 1.815.88q.98.307 1.331.616a.97.97 0 0 1 .341.748a.75.75 0 0 1-.34.66q-.353.242-1.013.242q-1.077.01-2.156-.858m-5.53.638a2.2 2.2 0 0 1-.616-.583l-1.034.847q.463.78 1.144 1.089q.638.285 1.463.286q.45 0 .935-.143t.891-.484q.715-.572.748-1.87v-5.588H9.85v5.302q0 .76-.34 1.067q-.342.297-.859.297q-.495 0-.847-.22M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></svg>`;
  const iconCSS = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#390606" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m20.754 4.792l-2.84 14.31a1.5 1.5 0 0 1-1.099 1.161l-4.069 1.045a3 3 0 0 1-1.492 0l-4.07-1.045a1.5 1.5 0 0 1-1.097-1.16L3.246 4.792A1.5 1.5 0 0 1 4.717 3h14.566a1.5 1.5 0 0 1 1.471 1.792"/><path d="m15.998 11.891l-.891 4.458a1 1 0 0 1-.64.744l-2.126.77a1 1 0 0 1-.681 0l-2.146-.777a.99.99 0 0 1-.622-.74l-.222-1.114m7.328-3.341l.859-4.292a.6.6 0 0 0-.589-.718H7m8.998 5.01H8.002"/></g></svg>`;
  const iconWordpress = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#390606" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10s10-4.49 10-10S17.51 2 12 2M3.01 12c0-1.3.28-2.54.78-3.66l4.29 11.75c-3-1.46-5.07-4.53-5.07-8.09M12 20.99c-.88 0-1.73-.13-2.54-.37l2.7-7.84l2.76 7.57c.02.04.04.09.06.12c-.93.34-1.93.52-2.98.52m1.24-13.21c.54-.03 1.03-.09 1.03-.09c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.88 0-2.37-.11-2.37-.11c-.48-.02-.54.72-.05.75c0 0 .46.06.94.09l1.4 3.84l-1.97 5.9l-3.27-9.75c.54-.02 1.03-.08 1.03-.08c.48-.06.43-.77-.06-.74c0 0-1.46.11-2.4.11c-.17 0-.37 0-.58-.01C6.1 4.62 8.86 3.01 12 3.01c2.34 0 4.47.89 6.07 2.36c-.04 0-.08-.01-.12-.01c-.88 0-1.51.77-1.51 1.6c0 .74.43 1.37.88 2.11c.34.6.74 1.37.74 2.48c0 .77-.3 1.66-.68 2.91l-.9 3zm6.65-.09a8.99 8.99 0 0 1-3.37 12.08l2.75-7.94c.51-1.28.68-2.31.68-3.22c0-.33-.02-.64-.06-.92"/></svg>`;
  const iconVuejs = `<svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512"><path fill="#390606" d="M356.9 64.3H280l-56 88.6l-48-88.6H0L224 448L448 64.3zm-301.2 32h53.8L224 294.5L338.4 96.3h53.8L224 384.5z"/></svg>`;
  const iconGithub = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"><path fill="#390606" d="M12 .568a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.52.52 0 0 1-.382-.14a.52.52 0 0 1-.14-.372v-1.406q.01-.702.01-1.416a3.7 3.7 0 0 0-.151-1.029a1.83 1.83 0 0 0-.542-.874a8 8 0 0 0 2.038-.471a4.05 4.05 0 0 0 1.466-.964a3.84 3.84 0 0 0 .885-1.507a6.8 6.8 0 0 0 .3-2.129a4.1 4.1 0 0 0-.26-1.476a3.9 3.9 0 0 0-.795-1.284q.113-.283.162-.583a3.6 3.6 0 0 0-.04-1.376a5 5 0 0 0-.221-.763a.3.3 0 0 0-.111-.02h-.11a2.3 2.3 0 0 0-.674.11q-.36.106-.703.261a7 7 0 0 0-.661.343q-.322.192-.573.362a9.6 9.6 0 0 0-5.143 0a14 14 0 0 0-.572-.362a6 6 0 0 0-.672-.343a4.5 4.5 0 0 0-.705-.26a2.2 2.2 0 0 0-.662-.112h-.11a.3.3 0 0 0-.11.02a6 6 0 0 0-.23.764a3.8 3.8 0 0 0-.081.773q0 .304.051.603q.05.3.16.583a3.9 3.9 0 0 0-.792 1.284a4.1 4.1 0 0 0-.263 1.476a6.9 6.9 0 0 0 .292 2.119c.181.564.483 1.082.884 1.517c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633a3 3 0 0 0-.2.744a2.75 2.75 0 0 1-1.175.27a1.8 1.8 0 0 1-1.065-.301a2.9 2.9 0 0 1-.752-.823a3 3 0 0 0-.292-.382a2.7 2.7 0 0 0-.372-.343q-.2-.15-.432-.24a1.2 1.2 0 0 0-.481-.101q-.06 0-.12.01a.7.7 0 0 0-.162.02a.4.4 0 0 0-.13.06a.12.12 0 0 0-.06.1a.33.33 0 0 0 .14.242q.14.111.232.171l.03.02q.2.156.382.333q.169.148.3.331q.136.178.231.38q.11.202.231.464c.188.473.522.874.954 1.145c.453.243.961.364 1.476.351q.262 0 .522-.03q.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.285 10.285 0 1 1 6.324 0z"/></svg>`;
  const iconCanva = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#390606" d="M21.869 13.173c-.03 0-.06.02-.08.07c-.201.581-.482.932-.712.932c-.13 0-.18-.15-.18-.37c0-.572.34-1.785.51-2.346q.03-.105.03-.18c0-.161-.09-.242-.31-.242c-.23 0-.491.09-.732.522c-.08-.381-.34-.542-.702-.542c-.41 0-.812.271-1.142.702c-.331.431-.722.572-1.013.501c.21-.51.29-.902.29-1.183c0-.45-.22-.721-.58-.721c-.542 0-.853.521-.853 1.062c0 .421.19.852.612 1.063c-.351.792-.862 1.514-1.063 1.514c-.25 0-.33-1.233-.31-2.116c.01-.5.05-.53.05-.681c0-.09-.06-.15-.291-.15c-.532 0-.702.45-.722.972c-.01.2-.04.39-.09.581c-.22.792-.682 1.404-.983 1.404c-.14 0-.18-.14-.18-.321c0-.572.32-1.293.32-1.905c0-.45-.2-.732-.57-.732c-.442 0-1.013.522-1.564 1.494c.18-.742.25-1.463-.281-1.463q-.18 0-.331.09a.19.19 0 0 0-.11.18c.05.792-.642 2.827-1.293 2.827c-.12 0-.18-.13-.18-.34c0-.572.34-1.785.51-2.347a.7.7 0 0 0 .03-.19c0-.15-.09-.23-.31-.23c-.23 0-.491.09-.732.52c-.09-.38-.34-.54-.702-.54c-.591 0-1.243.62-1.534 1.433c-.39 1.083-1.162 2.135-2.215 2.135c-.952 0-1.454-.792-1.454-2.045c0-1.814 1.334-3.288 2.316-3.288c.471 0 .692.3.692.762c0 .561-.31.812-.31 1.032c0 .06.05.13.16.13c.43 0 .932-.5.932-1.192S6.25 8.792 5.268 8.792C3.634 8.792 2 10.426 2 12.532c0 1.673.822 2.676 2.246 2.676c.972 0 1.824-.752 2.275-1.634c.05.732.381 1.112.892 1.112c.451 0 .812-.27 1.093-.741c.11.49.39.731.762.731c.42 0 .782-.27 1.112-.761c0 .39.08.761.422.761c.16 0 .35-.04.38-.18c.361-1.474 1.244-2.687 1.514-2.687c.08 0 .1.08.1.17c0 .402-.28 1.224-.28 1.745c0 .572.24.942.742.942c.551 0 1.112-.671 1.483-1.664c.12.923.371 1.664.762 1.664c.481 0 1.353-1.022 1.875-2.105c.2.03.511.02.812-.19c-.13.32-.2.671-.2 1.012c0 1.003.48 1.283.891 1.283c.451 0 .812-.27 1.093-.741c.09.42.33.731.762.731c.672 0 1.263-.691 1.263-1.263c.01-.12-.06-.22-.13-.22m-14.035.952c-.27 0-.38-.27-.38-.682c0-.711.49-1.904 1.002-1.904c.22 0 .31.26.31.591c0 .722-.46 1.995-.932 1.995M17.187 12c-.16-.19-.22-.461-.22-.692c0-.29.11-.531.23-.531s.17.12.17.3c-.01.281-.11.712-.18.923m2.115 2.125c-.27 0-.38-.32-.38-.682c0-.691.49-1.904 1.002-1.904c.22 0 .3.26.3.591c.01.722-.44 1.995-.922 1.995"/></svg>`;
  const iconIllustrator = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#390606" fill-rule="evenodd" d="M.75 4.65a3.9 3.9 0 0 1 3.9-3.9h14.7a3.9 3.9 0 0 1 3.9 3.9v14.7a3.9 3.9 0 0 1-3.9 3.9H4.65a3.9 3.9 0 0 1-3.9-3.9zm3.9-2.4a2.4 2.4 0 0 0-2.4 2.4v14.7a2.4 2.4 0 0 0 2.4 2.4h14.7a2.4 2.4 0 0 0 2.4-2.4V4.65a2.4 2.4 0 0 0-2.4-2.4zm11.798 6.422a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 8.3V9.749h-2v7.223zM8.07 7.844l-3.194 9.128h2.022l.775-2.287h3.458l.832 2.287h2.192L10.62 7.183H8.07zm2.494 4.895H8.221l1.172-3.817z" clip-rule="evenodd"/></svg>`;
  const iconIndesign = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#390606" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4M8.5 8v8"/><path d="M15.5 12v3.4a.6.6 0 0 1-.6.6h-1.4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2zm0 0V9"/></g></svg>`;
  const iconPremiere = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#390606" fill-rule="evenodd" d="M4.65.75a3.9 3.9 0 0 0-3.9 3.9v14.7a3.9 3.9 0 0 0 3.9 3.9h14.7a3.9 3.9 0 0 0 3.9-3.9V4.65a3.9 3.9 0 0 0-3.9-3.9zm-2.4 3.9a2.4 2.4 0 0 1 2.4-2.4h14.7a2.4 2.4 0 0 1 2.4 2.4v14.7a2.4 2.4 0 0 1-2.4 2.4H4.65a2.4 2.4 0 0 1-2.4-2.4zM6 6.5h3.5a3.5 3.5 0 1 1 0 7H8v3H6zm2 5h1.5a1.5 1.5 0 0 0 0-3H8zM14.5 9v7.5h2v-4.25a2.35 2.35 0 0 1 .768-.824c.377-.242.921-.426 1.732-.426V9c-.976 0-1.807.196-2.5.56V9z" clip-rule="evenodd"/></svg>`;
  const iconAftereffect = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#390606" fill-rule="evenodd" d="M4.65.75a3.9 3.9 0 0 0-3.9 3.9v14.7a3.9 3.9 0 0 0 3.9 3.9h14.7a3.9 3.9 0 0 0 3.9-3.9V4.65a3.9 3.9 0 0 0-3.9-3.9zm-2.4 3.9a2.4 2.4 0 0 1 2.4-2.4h14.7a2.4 2.4 0 0 1 2.4 2.4v14.7a2.4 2.4 0 0 1-2.4 2.4H4.65a2.4 2.4 0 0 1-2.4-2.4zm1.262 11.822l3.194-9.128v-.66h2.55l3.534 9.788H10.6l-.832-2.287H6.309l-.775 2.287zm3.345-4.233H9.2L8.03 8.422zM19.329 14.6v1.7c-.347.14-1.308.417-2.381.417c-1.342 0-3.78-.643-3.78-3.988c0-2.948 2.174-3.798 3.78-3.798c1.436 0 3.042 1.058 3.042 3.08v1.323h-4.648c.132.535.691 1.606 1.87 1.606s1.903-.227 2.117-.34m-3.969-2.683h2.703c-.032-.466-.34-1.399-1.323-1.399s-1.33.932-1.38 1.399" clip-rule="evenodd"/></svg>`;
  const iconLightroom = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#390606" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"/><path d="M7 8v8h4m3-5.5V13m0 3v-3m0 0s0-2.5 3-2.5"/></g></svg>`;

  const skills = ref([
    {
      name: 'Web Development',
      colorClass: 'bg-purple-300 dark:bg-purple-500',
      items: [
        { name: 'Laravel', icon: iconLaravel },
        { name: 'MySQL', icon: iconMySQL },
        { name: 'HTML', icon: iconHTML },
        { name: 'JavaScript', icon: iconJavascript },
        { name: 'CSS', icon: iconCSS },
        { name: 'Wordpress', icon: iconWordpress },
        { name: 'Vue JS', icon: iconVuejs },
        { name: 'GitHub', icon: iconGithub },
      ],
    },

    {
      name: 'Brand Design',
      colorClass: 'bg-yellow-300 dark:bg-yellow-500', // Warna Kuning
      items: [
        { name: 'Photoshop', icon: iconPhotoshop },
        { name: 'Canva', icon: iconCanva },
        { name: 'Illustrator', icon: iconIllustrator },
        { name: 'InDesign', icon: iconIndesign },
        { name: 'Premiere', icon: iconPremiere },
        { name: 'After Effect', icon: iconAftereffect },
        { name: 'LightRoom', icon: iconLightroom },
      ],
    },
  ]);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

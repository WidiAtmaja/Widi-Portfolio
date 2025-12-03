export const experienceData = [
  {
    id: 1,
    slug: 'magang-bps-buleleng',
    title: 'Magang di Badan Pusat Statistik',
    date: '22 September 2025',
    location: 'BPS Kabupaten Buleleng',
    predicate: 'Selesai',
    image: new URL('../assets/images/experience/magangtumbnail.png', import.meta.url).href,
    tags: ['Monaku', 'Monalisa', 'Back-End', 'Laravel', 'Blade'],
    tagBgColors: ['bg-cyan-200', 'bg-green-300', 'bg-sky-300', 'bg-red-300', 'bg-orange-300'],
    gallery: [
      new URL('../assets/images/experience/magangexp1.webp', import.meta.url).href,
      new URL('../assets/images/experience/magangexp2.webp', import.meta.url).href,
      new URL('../assets/images/experience/magangexp4.webp', import.meta.url).href,
      new URL('../assets/images/experience/magangexp5.webp', import.meta.url).href,
      new URL('../assets/images/experience/magangexp3.webp', import.meta.url).href,
    ],
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">About The Office</h1>
        <p>
        The Central Statistics Agency (BPS) is a non-ministerial government agency that reports directly to the President and is tasked with conducting statistical activities in accordance with laws and regulations. The types of statistics managed include basic statistics that are fully implemented by BPS, sectoral statistics that are managed by government agencies themselves or in collaboration with BPS, and special statistics that are conducted independently by various parties or in collaboration with BPS.
        </p>
        <h1 class="font-bold text-2xl my-4">Problems</h1>
        <p>
        During my internship at the Buleleng Regency Central Statistics Agency, the agency faced problems in monitoring statistical activities and financial administration. To overcome this, my team and I developed two information systems: Monaku and Monalisa. In Monalisa, technical features are used by organic employees to manage all statistical activities grouped by period and consisting of two stages, namely updating and enumeration, and classified into Company and Household activities. Meanwhile, the administrative features in Monaku serve as a repository for complete financial administration files with progress percentages and file counts to facilitate monitoring. All activities are managed on an annual basis to facilitate storage and archiving.
        </p>
        
      `,
      `
        <h1 class="font-bold text-2xl my-4">Monaku & Monalisa</h1>
        <p>
        I served as a backend developer and was responsible for developing features for three main functions (IPDS, Production, and Balance Sheet). I designed the MySQL database, built CRUD technical activities and administrative documents, and implemented a user role system (Admin, Organic, Inorganic) with secure access control. I also ensured system security through middleware and Laravel Breeze authentication. In development, I used Laravel 10, jQuery AJAX, Tailwind CSS, Vite, and Git.
        </p>
        
      `,
    ],
  },
  {
    id: 2,
    slug: 'intern-teknologi-maju',
    title: 'Full Stack Developer Intern',
    date: 'Januari - Juni 2024',
    location: 'PT Teknologi Maju',
    predicate: 'Memuaskan',
    image: 'https://placehold.co/800x400/f3f4f6/a3a3a3?text=Coding+Activity',
    tags: ['Vue.js', 'Laravel', 'Tailwind'],
    tagBgColors: ['bg-green-300', 'bg-red-300', 'bg-blue-300'],
    gallery: [],
    content: [
      `
        <p>
          Bergabung sebagai intern di startup teknologi yang bergerak cepat menuntut kemampuan adaptasi yang tinggi. Saya terlibat langsung dalam pengembangan fitur inti aplikasi SaaS perusahaan.
        </p>
        <p class="mt-4">
          Fokus utama saya adalah migrasi komponen legacy jQuery ke Vue 3, yang meningkatkan performa rendering halaman sebesar 40%.
        </p>
      `,
    ],
  },
];

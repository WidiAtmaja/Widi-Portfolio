// src/data/projects.js

export const projectWebDev = [
  {
    title: 'Monaku System Dashboard',
    slug: 'monaku-system-dashboard',
    category: 'Web Development',
    description: 'Sistem informasi monitoring kegiatan berbasis web untuk BPS.',
    image: 'https://images.unsplash.com/photo-1581092334420-efb74c8b1d1a?w=800&h=600&fit=crop',
    tags: ['Vue 3', 'Laravel API', 'TailwindCSS'],
    tagBgColors: ['bg-cyan-200', 'bg-green-300', 'bg-sky-300'],
    link: '#',
    // --- REDAKSI KHUSUS (TEXT HEAVY) ---
    details: {
      challenge: 'Tantangan utama adalah mengelola ribuan data kegiatan BPS yang sebelumnya dilakukan manual menggunakan Excel, yang menyebabkan duplikasi data dan keterlambatan pelaporan.',
      solution: 'Saya mengembangkan sistem terpusat menggunakan Laravel untuk API yang cepat dan Vue 3 untuk antarmuka yang reaktif. Fitur utamanya mencakup real-time validation dan role-management.',
      result: 'Sistem ini berhasil memangkas waktu pelaporan sebesar 40% dan digunakan oleh 50+ pegawai aktif setiap harinya.',
    },
    gallery: [
      // Web dev mungkin cuma butuh 1-2 screenshot tambahan
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    ],
  },
  {
    title: 'Dievaluasi Platform',
    slug: 'dievaluasi-platform',
    category: 'Edutech Product',
    description: 'Platform persiapan ujian siswa berbasis web.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    tags: ['Vue', 'Firebase', 'Vite'],
    tagBgColors: ['bg-cyan-200', 'bg-green-300', 'bg-sky-300'],
    link: '#',
    details: {
      challenge: 'Siswa kesulitan mendapatkan feedback instan setelah mengerjakan tryout konvensional.',
      solution: 'Membangun platform dengan Firebase Realtime Database untuk memberikan skor dan pembahasan detik itu juga setelah ujian selesai.',
      result: 'Digunakan oleh 200+ siswa dalam masa beta testing.',
    },
    gallery: [],
  },
  // ... project web dev lainnya
];

export const projectBrandDesign = [
  {
    title: 'Marina Resort Branding',
    slug: 'marina-resort-branding',
    category: 'Brand Design',
    description: 'Rebranding visual Marina Resort dengan konsep minimalis.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
    tags: ['Logo Design', 'Brand Identity', 'Figma'],
    tagBgColors: ['bg-cyan-200', 'bg-green-300', 'bg-sky-300'],
    link: '#',
    // --- REDAKSI KHUSUS (IMAGE HEAVY) ---
    details: {
      challenge: "Marina Resort ingin mengubah citra dari 'hotel tua' menjadi 'destinasi modern tropical' untuk menarik pasar milenial.",
      // Solution dan Result bisa dikosongkan jika tidak perlu, atau diisi singkat
      solution: '',
      result: '',
    },
    // BRAND DESIGN BUTUH BANYAK GAMBAR
    gallery: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', // Foto Mockup Kartu Nama
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=600&fit=crop', // Foto Papan Nama
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&h=600&fit=crop', // Foto Merchandise
    ],
  },
  {
    title: 'AR Learning App',
    slug: 'ar-learning-app',
    category: 'Research Project',
    description: 'Aplikasi pembelajaran AR.',
    image: 'https://images.unsplash.com/photo-1581091870622-2f24b6b31f09?w=800&h=600&fit=crop',
    tags: ['Unity', 'ARCore', 'Flutter'],
    tagBgColors: ['bg-cyan-200', 'bg-green-300', 'bg-sky-300'],
    link: '#',
    details: {
      challenge: 'Siswa sulit memvisualisasikan struktur tumbuhan 3D hanya dari buku teks 2D.',
      solution: 'Membuat aplikasi AR yang memproyeksikan model 3D di atas meja belajar siswa.',
      result: 'Meningkatkan pemahaman siswa sebesar 85% berdasarkan pre-test dan post-test.',
    },
    gallery: ['https://images.unsplash.com/photo-1633113088947-01366b72d251?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1617802690992-1ce567c974d5?w=800&h=600&fit=crop'],
  },
  // ...
];

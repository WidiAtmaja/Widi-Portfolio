// src/data/projects.js

export const projectWebDev = [
  {
    id: 1,
    category: 'Website',
    title: 'diEvaluasi Platform',
    slug: 'dievaluasi-platform',
    role: 'Front End',
    timeline: 'Feb 2025- Jun 2025',
    team: '5 Members',
    type: 'Team Project',
    link: 'https://dievaluasi.id',
    description:
      ' diEvaluasi is a tryout platform designed to help students prepare for competitive exams such as SKD (Basic Competency Selection), UTBK (Computer-Based Written Exam), and TOEFL tests. As a Front-End team member in this project, I designed the user interface, created interactive layouts, and optimized the overall user experience. I also contributed to several system interfaces, including the homepage, tryout page, FAQ page, and login page. Our team has successfully published the project results as a scientific journal article.',
    image: new URL('../assets/images/project/dievaluasi-thumbnail.webp', import.meta.url).href,
    tags: ['Laravel', 'Blade', 'JQuery', 'MySQL', 'Rest API'],
    tagBgColors: ['bg-red-300', 'bg-orange-300', 'bg-sky-300', 'bg-cyan-300', 'bg-violet-300'],
    gallery: [
      new URL('../assets/images/project/dievaluasi1.webp', import.meta.url).href,
      new URL('../assets/images/project/dievaluasi2.webp', import.meta.url).href,
      new URL('../assets/images/project/dievaluasi3.webp', import.meta.url).href,
      new URL('../assets/images/project/dievaluasi4.webp', import.meta.url).href,
    ],
    journal: 'https://ejournal.undiksha.ac.id/index.php/KP/article/view/99344',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        diEvaluasi is a tryout platform designed to help students prepare for competitive exams such as SKD (Basic Competency Selection), UTBK (Computer-Based Written Exam), and TOEFL tests. As a Front-End team member in this project, I designed the user interface, created interactive layouts, and optimized the overall user experience. I also contributed to several system interfaces, including the homepage, tryout page, FAQ page, and login page. Our team has successfully published the project results as a scientific journal article.
        </p> 
      `,
      `
        <h1 class="font-bold text-2xl my-4">Homepage</h1>
        <p>
        I assisted my front-end teammate in creating the hero section on the homepage. This section contains an overview of diEvaluasi and serves as a highlight area for promotional tryouts that can be immediately seen by prospective users.
        </p>
        
      `,
      `
        <h1 class="font-bold text-2xl my-4">Tryout Page</h1>
        <p>
        On this page, I contributed to building the tryout cards using the backend tryout API. The tryout page includes CPNS, TOEFL, and UTBK tryouts. I developed the tryout card layout to be interactive and optimized for both desktop and mobile versions.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">FAQ Page</h1>
        <p>
        I created this page to help users easily find answers to frequently asked questions. I designed the FAQ page along with its illustration assets.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Login Page</h1>
        <p>
        I developed a responsive login page for both mobile and web, and integrated it with the backend login API.
        </p>
      `,
    ],
  },
  {
    id: 2,
    category: 'Website',
    title: 'Monaku',
    slug: 'monaku',
    role: 'Front End',
    timeline: 'May 2024 - Jul 2024',
    team: '5 Members',
    type: 'Team Project',
    link: '',
    description:
      'Monaku, or the Financial Administration Monitoring System, is an information system internship project designed to help staff monitor financial administration processes that were previously done manually at the Badan Pusat Statistik (BPS) Kabupaten Buleleng. I was part of a five-person team and served as the front-end developer responsible for designing the system’s user interface to solve challenges in financial monitoring.',
    image: new URL('../assets/images/project/monaku-thumbnail.webp', import.meta.url).href,
    tags: ['Laravel', 'Blade', 'JQuery', 'MySQL', 'Rest API'],
    tagBgColors: ['bg-red-300', 'bg-orange-300', 'bg-sky-300', 'bg-cyan-300', 'bg-violet-300'],
    gallery: [
      new URL('../assets/images/project/monaku-thumbnail.webp', import.meta.url).href,
      new URL('../assets/images/project/monaku1.webp', import.meta.url).href,
      new URL('../assets/images/project/monaku2.webp', import.meta.url).href,
      new URL('../assets/images/project/monaku3.webp', import.meta.url).href,
      new URL('../assets/images/project/monaku4.webp', import.meta.url).href,
    ],
    journal: 'https://journal.unpas.ac.id/index.php/infomatek/article/view/19231',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        Monaku, or the Financial Administration Monitoring System, is an information system internship project designed to help staff monitor financial administration processes that were previously done manually at the Badan Pusat Statistik (BPS) Kabupaten Buleleng. I was part of a five-person team and served as the front-end developer responsible for designing the system’s user interface to solve challenges in financial monitoring. I also collaborated with the backend team by displaying data delivered through the API.
        I designed five main pages of the system: Homepage, Administrative Activities, Accounts, Transactions, and Administrative Files. The Monaku system is currently being used by BPS Kabupaten Buleleng for financial administration monitoring. Additionally, our team has published the results of this project as a scientific journal article.
        </p> 
      `,
      `
        <h1 class="font-bold text-2xl my-4">Homepage</h1>
        <p>
        This page contains a summary of the functions of BPS Kabupaten Buleleng. I created card components displaying a summary of financial administration progress in percentages, the number of uploaded files, and the total transaction value.   
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Administrative Activities Page</h1>
        <p>
        On this page, I designed a responsive layout for the list of financial administrative activities that will be input by users.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Accounts Page</h1>
        <p>
        This page contains a list of accounts associated with the financial administrative activities.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Transactions Page</h1>
        <p>
        The transactions page displays financial transactions categorized under each account and administrative activity.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Administrative Files Page</h1>
        <p>
        This page contains collections of financial administrative files based on their related transactions, accounts, and administrative activities. I designed the interface to make it easy for users to identify which files have not yet been uploaded, and to display the progress of each administrative file monitoring task. These summaries are then reflected on the homepage.
        </p>
      `,
    ],
  },
  {
    id: 3,
    category: 'Website',
    title: 'Monalisa',
    slug: 'monalisa',
    role: 'Front End',
    timeline: 'Feb 2024 - Apr 2024',
    team: '5 Members',
    type: 'Team Project',
    link: '',
    description:
      'Monalisa, or the Monitoring of Activities and Quality for BPS Buleleng, is a field activity monitoring system developed during my internship. I served as the front-end developer in a five-member team. We built this system to solve the problem of conventional, manual monitoring of statistical activities in the field. The system helps monitor tasks, assignments based on function, and archiving processes',
    image: new URL('../assets/images/project/monalisa-thumbnail.webp', import.meta.url).href,
    tags: ['Laravel', 'Blade', 'JQuery', 'MySQL', 'Rest API'],
    tagBgColors: ['bg-red-300', 'bg-orange-300', 'bg-sky-300', 'bg-cyan-300', 'bg-violet-300'],
    gallery: [
      new URL('../assets/images/project/monalisa1.webp', import.meta.url).href,
      new URL('../assets/images/project/monalisa2.webp', import.meta.url).href,
      new URL('../assets/images/project/monalisa3.webp', import.meta.url).href,
    ],
    journal: '',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        Monalisa, or the Monitoring of Activities and Quality for BPS Buleleng, is a field activity monitoring system developed during my internship. I served as the front-end developer in a five-member team. We built this system to solve the problem of conventional, manual monitoring of statistical activities in the field. The system helps monitor tasks, assignments based on function, and archiving processes. It includes full CRUD features accessible by partners, staff, and administrators.
        </p> 
      `,
      `
        <h1 class="font-bold text-2xl my-4">Statistical Activity Progress Page</h1>
        <p>
        My task was to design and develop the statistical activity progress page, which displays the activity name, implementation period, and real-time progress percentage of each activity. I implemented data sent through APIs provided by the backend team.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">CRUD Page for Updating Activity Tasks</h1>
        <p>
        On this page, I developed a responsive and user-friendly interface for managing task updates in statistical activities. This interface helps field officers easily understand the displayed data and perform CRUD operations.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">CRUD Page for Enumeration Activity Tasks</h1>
        <p>
        This page functions similarly to the updating tasks page. I built the interface based on enumeration-related API data from the backend team, with a responsive and visually clear layout. I also implemented an Excel export button to simplify task creation based on predefined formats.
        </p>
      `,
    ],
  },
  {
    id: 4,
    category: 'Website',
    title: 'Genre Bali Website',
    slug: 'genrebali',
    role: 'Full Stack',
    timeline: 'August 2025',
    team: '-',
    type: 'Independent Project',
    link: 'https://genrebali.id',
    description:
      'The Genre Bali website is a company profile and organizational blog that I developed to showcase work programs and publish organizational information to the public. I built the website using the WordPress CMS, featuring event management, articles, learning modules, and merchandise as its main components.',
    image: new URL('../assets/images/project/genrebali-thumbnail.webp', import.meta.url).href,
    tags: ['Wordpress', 'Elementor', 'Yoast SEO', 'Custom CSS'],
    tagBgColors: ['bg-sky-300', 'bg-red-300', 'bg-pink-300', 'bg-blue-300'],
    gallery: [
      new URL('../assets/images/project/genrebali1.webp', import.meta.url).href,
      new URL('../assets/images/project/genrebali2.webp', import.meta.url).href,
      new URL('../assets/images/project/genrebali3.webp', import.meta.url).href,
      new URL('../assets/images/project/genrebali4.webp', import.meta.url).href,
    ],
    journal: '',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        The Genre Bali website is a company profile and organizational blog that I developed to showcase work programs and publish organizational information to the public. I built the website using the WordPress CMS, featuring event management, articles, learning modules, and merchandise as its main components.
        </p> 
      `,
      `
        <h1 class="font-bold text-2xl my-4">Articles Page</h1>
        <p>
        I created this page to display articles related to Genre, which typically cover topics about youth life, tips and tricks, and other relevant information.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Events Page</h1>
        <p>
        This page contains information about upcoming events. It provides complete details such as the date, venue, address, and registration link.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Modules Page</h1>
        <p>
        I developed this page to provide learning modules related to Genre topics, typically centered around youth-related information.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Merchandise Page</h1>
        <p>
        This page features the merchandise offered and sold by Genre Bali.
        </p>
      `,
    ],
  },
  {
    id: 5,
    category: 'Website',
    title: 'BEM REMA Undiksha Website',
    slug: 'bemrema-undiksha',
    role: 'Full Stack',
    timeline: 'October 2024',
    team: '-',
    type: 'Independent Project',
    link: 'https://bemrema.undiksha.ac.id',
    description:
      'The BEM REMA Undiksha website is a company profile and activity blog owned by the Student Executive Board (BEM) at Ganesha University of Education (Undiksha). I created this website during my role as the Minister of Communication and Information. It serves as an innovation to bridge communication between BEM and students by providing information about campus life, announcements, and upcoming events at Undiksha. The website consists of several pages: Articles, Announcements, Studies, and Events.',
    image: new URL('../assets/images/project/bemrema-thumbnail.webp', import.meta.url).href,
    tags: ['Wordpress', 'Be Builder', 'Yoast SEO', 'Custom CSS'],
    tagBgColors: ['bg-sky-300', 'bg-sky-300', 'bg-pink-300', 'bg-blue-300'],
    gallery: [
      new URL('../assets/images/project/bemrema1.webp', import.meta.url).href,
      new URL('../assets/images/project/bemrema2.webp', import.meta.url).href,
      new URL('../assets/images/project/bemrema3.webp', import.meta.url).href,
      new URL('../assets/images/project/bemrema4.webp', import.meta.url).href,
    ],
    journal: '',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        The BEM REMA Undiksha website is a company profile and activity blog owned by the Student Executive Board (BEM) at Ganesha University of Education (Undiksha). I created this website during my role as the Minister of Communication and Information. It serves as an innovation to bridge communication between BEM and students by providing information about campus life, announcements, and upcoming events at Undiksha. The website consists of several pages: Articles, Announcements, Studies, and Events.
        </p> 
      `,
      `
        <h1 class="font-bold text-2xl my-4">Articles Page</h1>
        <p>
        This page contains articles about campus life as an Undiksha student.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Events Page</h1>
        <p>
        I developed this page to provide information on upcoming events at Undiksha.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Studies Page</h1>
        <p>
        This page contains studies and discussions related to current political issues. The content is published in both document and article formats.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Announcements Page</h1>
        <p>
        This page provides official announcements for Undiksha students.
        </p>
      `,
    ],
  },
  {
    id: 6,
    category: 'Mobile Apps',
    title: 'V-Growz IoT App',
    slug: 'vgrowz-iot',
    role: 'Front End Mobile',
    timeline: 'Dec 2023 - Feb 2024',
    team: '3 Members',
    type: 'Team Project',
    link: '',
    description:
      'This project is one of the innovations I participated in through the Innovillage program by Telkom University, running from 2023 to 2024. I joined this competition to solve real-world community problems using technological innovation. My team and I developed an IoT device for vanilla plants called V-Growz. This innovation aims to address farmers’ frequent crop failures caused by the growth of the fungus Fusarium oxysporum.',
    image: new URL('../assets/images/project/vgrowz-thumbnail.webp', import.meta.url).href,
    tags: ['Flutter', 'Dart', 'IoT', 'MQTT', 'Arduino'],
    tagBgColors: ['bg-blue-300', 'bg-indigo-300', 'bg-violet-300', 'bg-orange-300', 'bg-cyan-500'],
    gallery: [
      new URL('../assets/images/project/vgrowz1.webp', import.meta.url).href,
      new URL('../assets/images/project/vgrowz2.webp', import.meta.url).href,
      new URL('../assets/images/project/vgrowz3.webp', import.meta.url).href,
    ],
    journal: '',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        This project is one of the innovations I participated in through the Innovillage program by Telkom University, running from 2023 to 2024. I joined this competition to solve real-world community problems using technological innovation. My team and I developed an IoT device for vanilla plants called V-Growz. This innovation aims to address farmers’ frequent crop failures caused by the growth of the fungus Fusarium oxysporum.
        The project was implemented in Ambengan Village, Buleleng Regency, Bali. The IoT system includes three main features: V-Lume, V-Flow, and V-Hydro.
        </p> 
      `,
      `
        <h1 class="font-bold text-2xl my-4">V-Lume Feature</h1>
        <p>
        This feature allows farmers to remotely control the vanilla plant’s shade net (paranet) to regulate sunlight intensity when the plants receive excessive exposure.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">V-Flow Feature</h1>
        <p>
        I developed this feature to provide farmers with full and automated control of the irrigation system, ensuring that the vanilla plants receive the proper amount of water.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">V-Hydro Feature</h1>
        <p>
        This feature monitors and regulates humidity levels around the vanilla plants, as high humidity often triggers the growth of Fusarium oxysporum. Farmers can access real-time humidity information through their smartphones, allowing them to make the right decisions when any humidity-related issues arise.
        </p>
      `,
    ],
  },
  {
    id: 7,
    category: 'Website',
    title: 'SI-Rapat',
    slug: 'sirapat',
    role: 'Full Stack',
    timeline: 'Oct 2025 - Nov 2025',
    team: '-',
    type: 'Independent Project',
    link: '',
    description:
      'SI Rapat is a meeting management website developed for the employees of the Denpasar Communications and Information Office (Dinas Kominfo Denpasar), Bali. I created this website upon request from a colleague working at Kominfo. The',
    image: new URL('../assets/images/project/sirapat-thumbnail.webp', import.meta.url).href,
    tags: ['Laravel', 'Blade', 'JQuery', 'MySQL', 'Tailwind CSS'],
    tagBgColors: ['bg-red-300', 'bg-orange-300', 'bg-sky-300', 'bg-cyan-300', 'bg-blue-200'],
    gallery: [
      new URL('../assets/images/project/sirapat1.webp', import.meta.url).href,
      new URL('../assets/images/project/sirapat2.webp', import.meta.url).href,
      new URL('../assets/images/project/sirapat3.webp', import.meta.url).href,
    ],
    journal: '',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        SI Rapat is a meeting management website developed for the employees of the Denpasar Communications and Information Office (Dinas Kominfo Denpasar), Bali. I created this website upon request from a colleague working at Kominfo. The platform is designed to streamline meeting management, allowing staff to view a list of upcoming meetings along with their minutes, as well as use the built-in facial attendance feature.
        SI Rapat consists of three main pages: Meeting Calendar, Attendance, and Minutes.
        </p> 
       <div class="mt-4"> <p class="text-base dark:text-gray-300">
            <span class="font-bold">Note:</span>
            <span class="italic">The data displayed is sample/dummy data for demonstration purposes to maintain confidentiality.</span>
          </p>
        </div>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Meeting Calendar Page</h1>
        <p>
        This page allows users to view upcoming meetings. Administrators can create meetings in the admin panel, and employees can see all scheduled meetings through this calendar.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Attendance Page</h1>
        <p>
        I developed this page to make it easier for staff to record their attendance during meetings. It includes features such as facial capture or selfie verification and a digital signature as proof of attendance.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Minutes Page</h1>
        <p>
        I created this page to help staff access the minutes of meetings that have taken place.
        </p>
      `,
    ],
  },
  {
    id: 8,
    category: 'Website',
    title: 'BPS Intership Blog',
    slug: 'bps-intership-blog',
    role: 'Full Stack',
    timeline: 'Jul 2024',
    team: '-',
    type: 'Independent Project',
    link: 'https://widiatmaja.github.io/magang/index.html',
    description:
      'I created this website to fulfill an internship requirement, which was to maintain a blog documenting all internship activities. I designed the blog to be visually appealing and comfortable for readers. The website consists of three main pages: Internship Projects, Internship Activities, and Institution Profile.',
    image: new URL('../assets/images/project/blog-thumbnail.webp', import.meta.url).href,
    tags: ['HTML', 'CSS', 'Javascript'],
    tagBgColors: ['bg-orange-300', 'bg-blue-300', 'bg-yellow-300'],
    gallery: [
      new URL('../assets/images/project/blog1.webp', import.meta.url).href,
      new URL('../assets/images/project/blog2.webp', import.meta.url).href,
      new URL('../assets/images/project/blog3.webp', import.meta.url).href,
    ],
    journal: '',
    content: [
      `
        <h1 class="font-bold text-2xl mb-4">Project Description</h1>
        <p>
        I created this website to fulfill an internship requirement, which was to maintain a blog documenting all internship activities. I designed the blog to be visually appealing and comfortable for readers. The website consists of three main pages: Internship Projects, Internship Activities, and Institution Profile.
        </p> 
      `,
      `
        <h1 class="font-bold text-2xl my-4">Internship Projects Page</h1>
        <p>
        This page provides information to the public about the projects my team and I worked on during the internship.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Internship Activities Page</h1>
        <p>
        I created this page to publish my internship activities over a six-month period, with updates posted monthly.
        </p>
      `,
      `
        <h1 class="font-bold text-2xl my-4">Institution Profile Page</h1>
        <p>
        This page offers information about the institution where I completed my internship.
        </p>
      `,
    ],
  },
];

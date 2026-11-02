export const creditSource = 'https://github.com/NezzyGremory/Data-Overview-Research-Assistant/blob/main/app/ui/data/credits.json';

export const studioCredits = {
  intro: 'A Metriks Studio Production',
  app: 'DORA',
  tagline: 'Data Overview & Research Assistant',
  team: 'Metriks Studio',
  closing: 'Thank you for using DORA',
};

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  discipline: string;
  photo: string;
  jobdesk: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Rohmad Abidin, M.Kom',
    role: 'Academic Supervisor',
    initials: 'RA',
    discipline: 'Academic',
    photo: '/team/rohmad-abidin.png',
    jobdesk: 'Bertanggung jawab dalam supervisi akademik, memberikan bimbingan metodologis serta arahan saintifik dalam perancangan arsitektur dan instrumen riset data DORA.',
  },
  {
    name: 'Abdul Muhis',
    role: 'Software Development',
    initials: 'AM',
    discipline: 'Development',
    photo: '/team/abdul-muhis.jpg',
    jobdesk: 'Bertanggung jawab dalam pengembangan perangkat lunak (software development) aplikasi desktop DORA, arsitektur sistem, integrasi modul analisis, dan eksekusi background worker.',
  },
  {
    name: 'Lyra Anindita Ferani',
    role: 'UI/UX Design',
    initials: 'LA',
    discipline: 'Design',
    photo: '/team/lyra-anindita.jpg',
    jobdesk: 'Bertanggung jawab dalam perancangan antarmuka dan pengalaman pengguna (UI/UX design), alur interaksi ruang kerja riset, arsitektur informasi, serta kemudahan navigasi aplikasi.',
  },
  {
    name: 'Muchammad Soufwan Fauzi',
    role: 'UI/UX Design',
    initials: 'MS',
    discipline: 'Design',
    photo: '/team/muhammad-fauzi.jpg',
    jobdesk: 'Bertanggung jawab dalam perancangan desain antarmuka dan pengalaman pengguna (UI/UX design), sistem komponen grafis visual node editor, dan konsistensi tampilan DORA.',
  },
  {
    name: 'Ahmad Turmudi',
    role: 'Graphic Design & Web Developer',
    initials: 'AT',
    discipline: 'Web & Visual',
    photo: '/team/ahmad-turmudi.jpg',
    jobdesk: 'Bertanggung jawab dalam desain grafis aset visual dan pengembangan website profiling resmi (graphic design & web developer) untuk DORA.',
  },
  {
    name: 'Muhammad Zaki Musyaffa',
    role: 'Scientific Paper Writing',
    initials: 'MZ',
    discipline: 'Research',
    photo: '/team/zaki-musyaffa.jpg',
    jobdesk: 'Bertanggung jawab dalam penulisan karya ilmiah dan publikasi akademik (scientific paper writing) terkait riset, metodologi, serta dokumentasi saintifik pendukung DORA.',
  },
];

export const specialThanks = 'UIN K.H. Abdurrahman Wahid Pekalongan';

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
  photoPosition?: string;
  jobdesk: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Rohmad Abidin, M.Kom',
    role: 'Academic Supervisor',
    initials: 'RA',
    discipline: 'Academic',
    photo: '/team/rohmad-abidin.png',
    photoPosition: 'center 18%',
    jobdesk: 'Bertanggung jawab dalam supervisi akademik, memberikan bimbingan metodologis serta arahan saintifik dalam perancangan arsitektur dan instrumen riset data DORA.',
  },
  {
    name: 'Abdul Muhis',
    role: 'Software Development',
    initials: 'AM',
    discipline: 'Development',
    photo: '/team/abdul-muhis.jpg',
    photoPosition: 'center 22%',
    jobdesk: 'Bertanggung jawab dalam pengembangan perangkat lunak (software development) aplikasi desktop DORA, arsitektur sistem, integrasi modul analisis, dan eksekusi background worker.',
  },
  {
    name: 'Lyra Anindita Ferani',
    role: 'UI/UX Design',
    initials: 'LA',
    discipline: 'Design',
    photo: '/team/lyra-anindita.jpg',
    photoPosition: 'center 10%',
    jobdesk: 'Bertanggung jawab dalam perancangan antarmuka dan pengalaman pengguna (UI/UX Design), alur interaksi ruang kerja riset, arsitektur informasi, serta kemudahan navigasi aplikasi DORA.',
  },
  {
    name: 'Muchammad Soufwan Fauzi',
    role: 'UI/UX Design',
    initials: 'MS',
    discipline: 'Design',
    photo: '/team/muhammad-fauzi.jpg',
    photoPosition: 'center 18%',
    jobdesk: 'Bertanggung jawab dalam perancangan antarmuka dan pengalaman pengguna (UI/UX Design), sistem komponen grafis visual node editor, dan konsistensi tampilan DORA.',
  },
  {
    name: 'Ahmad Turmudi',
    role: 'Design & Web Development',
    initials: 'AT',
    discipline: 'Design & Web',
    photo: '/team/ahmad-turmudi.jpg',
    photoPosition: 'center 20%',
    jobdesk: 'Bertanggung jawab dalam perancangan desain aset visual antarmuka dan pengembangan website profiling resmi (Design & Web Development) untuk DORA.',
  },
  {
    name: 'Muhammad Zaki Musyaffa',
    role: 'Design Analysis',
    initials: 'MZ',
    discipline: 'Analysis',
    photo: '/team/zaki-musyaffa.jpg',
    photoPosition: 'center 14%',
    jobdesk: 'Bertanggung jawab dalam analisis desain sistem antarmuka dan evaluasi fungsional alur pengguna (Design Analysis) untuk mendukung efektivitas riset pada DORA.',
  },
];

export const specialThanks = 'UIN K.H. Abdurrahman Wahid Pekalongan';

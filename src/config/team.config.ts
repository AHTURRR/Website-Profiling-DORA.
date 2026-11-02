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
    jobdesk: 'Memberikan supervisi akademik, bimbingan metodologis, serta arahan saintifik dalam perancangan arsitektur dan instrumen riset data DORA.',
  },
  {
    name: 'Abdul Muhis',
    role: 'Software Engineering',
    initials: 'AM',
    discipline: 'Engineering',
    photo: '/team/abdul-muhis.jpg',
    jobdesk: 'Mengembangkan arsitektur perangkat lunak utama desktop DORA, integrasi PySide6/Qt, reactive analysis pipeline, serta sistem eksekusi background worker.',
  },
  {
    name: 'Lyra Anindita Ferani',
    role: 'UI/UX Design',
    initials: 'LA',
    discipline: 'Design',
    photo: '/team/lyra-anindita.jpg',
    jobdesk: 'Merancang tata kelola pengalaman pengguna (UX), hierarki visual ruang kerja riset, arsitektur informasi antarmuka, serta kemudahan navigasi aplikasi.',
  },
  {
    name: 'Muchammad Soufwan Fauzi',
    role: 'UI/UX Design',
    initials: 'MS',
    discipline: 'Design',
    photo: '/team/muhammad-fauzi.jpg',
    jobdesk: 'Menyusun sistem komponen antarmuka (UI System), interaksi visual node editor, state kontrol data interaktif, dan konsistensi antarmuka pengguna.',
  },
  {
    name: 'Ahmad Turmudi',
    role: 'Graphic Design & Web Developer',
    initials: 'AT',
    discipline: 'Web & Visual',
    photo: '/team/ahmad-turmudi.jpg',
    jobdesk: 'Membangun identitas visual grafis, aset visual aplikasi, media komunikasi produk, serta arsitektur dan pengembangan website profiling resmi DORA.',
  },
  {
    name: 'Muhammad Zaki Musyaffa',
    role: 'Scientific Paper Writing',
    initials: 'MZ',
    discipline: 'Research',
    photo: '/team/zaki-musyaffa.jpg',
    jobdesk: 'Menyusun struktur naskah ilmiah, tinjauan literatur saintifik, perumusan metodologi penelitian, serta dokumentasi akademik pendukung DORA.',
  },
];

export const specialThanks = 'UIN K.H. Abdurrahman Wahid Pekalongan';

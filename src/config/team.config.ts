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
  draftBio: string;
}

export const teamMembers: TeamMember[] = [
  { name: 'Abdul Muhis', role: 'Software Engineering', initials: 'AM', discipline: 'Engineering', draftBio: 'Contoh bio: mengembangkan fondasi aplikasi dan menghubungkan alur pengolahan data dengan pengalaman desktop yang terstruktur.' },
  { name: 'Lyra Anindita Ferani', role: 'UI/UX Design', initials: 'LA', discipline: 'Design', draftBio: 'Contoh bio: mengeksplorasi alur penggunaan, hierarki informasi, dan interaksi agar proses riset lebih mudah dipahami.' },
  { name: 'Muchammad Soufwan Fauzi', role: 'UI/UX Design', initials: 'MS', discipline: 'Design', draftBio: 'Contoh bio: merancang komponen antarmuka dan menyelaraskan pengalaman di setiap bagian ruang kerja aplikasi.' },
  { name: 'Ahmad Turmudi', role: 'Graphic Design & Web Developer', initials: 'AT', discipline: 'Web & Visual', draftBio: 'Contoh bio: mempertemukan identitas visual dan pengembangan web untuk memperkenalkan produk dengan lebih jelas.' },
  { name: 'Muhammad Zaki Musyaffa', role: 'Scientific Paper Writing', initials: 'MZ', discipline: 'Research', draftBio: 'Contoh bio: membantu penyusunan tulisan ilmiah dan mengomunikasikan konteks penelitian secara runtut.' },
  { name: 'Rohmad Abidin, M.Kom', role: 'Academic Supervisor', initials: 'RA', discipline: 'Academic', draftBio: 'Contoh bio: memberikan perspektif akademik dalam pengembangan perangkat pendukung eksplorasi data dan penelitian.' },
];

export const specialThanks = 'UIN K.H. Abdurrahman Wahid Pekalongan';

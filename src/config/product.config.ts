import type { ProductConfig } from '../types/product.types';

/**
 * PUSAT KONFIGURASI PRODUK DORA (Data Overview & Research Assistant)
 * Berdasarkan dokumentasi resmi: https://github.com/NezzyGremory/Dataset-Research
 * Pengembang: Metriks Studio
 */
export const productConfig: ProductConfig = {
  product: {
    name: 'DORA',
    tagline: 'Data Overview & Academic Research Assistant — Asisten Cerdas Peneliti Dataset & Machine Learning',
    shortDescription:
      'Aplikasi desktop native untuk membantu peneliti dan akademisi memahami dataset, mengeksplorasi eksperimen machine learning, dan meninjau literatur ilmiah secara lokal di komputer.',
    fullDescription:
      'DORA (Data Overview & Research Assistant) dikembangkan oleh Metriks Studio untuk kebutuhan pembelajaran, riset, dan analisis data. Menggabungkan profiling dataset lokal, pencarian dataset publik dari Kaggle & Hugging Face, notebook Python interaktif, estimasi tugas ML otomatis, hingga penelusuran paper akademik (OpenAlex, Crossref, Semantic Scholar, SINTA, DOAJ, Scopus) dalam satu antarmuka desktop yang bersih dan responsif.',
    developer: {
      name: 'Metriks Studio',
      url: 'https://github.com/NezzyGremory/Dataset-Research',
      copyrightYear: 2026,
    },
    license: {
      name: 'MIT Open Source License',
      url: 'https://github.com/NezzyGremory/Dataset-Research/blob/main/LICENSE',
      isFree: true,
    },
    links: {
      repository: 'https://github.com/NezzyGremory/Dataset-Research',
      documentation: 'https://github.com/NezzyGremory/Dataset-Research#readme',
      issues: 'https://github.com/NezzyGremory/Dataset-Research/issues',
      privacyPolicy: '#privacy',
      releaseNotes: 'https://github.com/NezzyGremory/Dataset-Research/releases',
    },
  },

  features: [
    {
      id: 'dataset-profiling',
      title: 'Dataset Profiling & Audit Kualitas Data',
      description:
        'Unggah file CSV dengan drag-and-drop, pratinjau tabel, skor kualitas data, deteksi missing values (median/mode imputation), pemeriksaan outliers, dan matriks korelasi interaktif.',
      benefitBadge: '100% Analisis Lokal',
      icon: 'database',
    },
    {
      id: 'dataset-search',
      title: 'Pencarian Dataset Publik Terintegrasi',
      description:
        'Cari ribuan dataset publik berdasarkan kata kunci dari Kaggle, Hugging Face, atau kombinasi keduanya (All providers), lalu unduh langsung ke workspace lokal DORA.',
      benefitBadge: 'Kaggle & Hugging Face',
      icon: 'search',
    },
    {
      id: 'editor-analysis',
      title: 'Editor Analysis & Notebook Python Terpadu',
      description:
        'Editor bergaya notebook untuk tahapan EDA, feature engineering, dan pemodelan ML (klasifikasi, regresi, clustering, ensemble). Dilengkapi eksekusi lokal, instalasi paket PyPI (pip install), dan dukungan berkas .ipynb.',
      benefitBadge: 'Jupyter-Style Notebook',
      icon: 'cpu',
    },
    {
      id: 'ml-intelligence',
      title: 'ML Intelligence & Estimasi Model Kandidat',
      description:
        'Menganalisis karakteristik dataset dan target untuk memperkirakan jenis task secara otomatis, merekomendasikan metode kandidat terbaik, dan menyajikan metrik evaluasi model.',
      benefitBadge: 'Auto-Task Detection',
      icon: 'sparkles',
    },
    {
      id: 'academic-research',
      title: 'Pencarian Literatur & Indeks Jurnal Akademik',
      description:
        'Kueri otomatis dari konteks dataset untuk mencari paper di OpenAlex, Crossref, Semantic Scholar, Europe PMC, dan OpenAIRE. Dilengkapi verifikasi akreditasi SINTA serta indeks Scopus & DOAJ.',
      benefitBadge: 'SINTA, Scopus & DOAJ',
      icon: 'book-open',
    },
    {
      id: 'landscape-gap-report',
      title: 'Research Landscape, Gap Discovery & PDF Export',
      description:
        'Pemetaan visual metode dan tren venue publikasi, identifikasi kandidat celah penelitian (Research Gap), serta penyusunan dan ekspor laporan riset komprehensif ke format PDF.',
      benefitBadge: 'Ekspor Laporan PDF',
      icon: 'file-text',
    },
  ],

  previews: [
    {
      id: 'preview-overview',
      title: 'Overview & Pipeline Workspace',
      caption: 'Dashboard ringkasan status dataset, skor kualitas data, rekomendasi model ML, progres alur kerja pipeline, dan pintasan laporan riset.',
      aspectRatio: '16/10',
      badge: 'Dashboard Utama',
      imageSrc: '/screenshots/overview.png',
      tag: 'Overview',
      details: ['Status Pipeline Dataset', 'Ringkasan Kualitas Data', 'Rekomendasi Cepat ML', 'Pintasan Laporan'],
    },
    {
      id: 'preview-dataset',
      title: 'Pratinjau Dataset & Data Quality',
      caption: 'Tampilan tabel interaktif, analisis tipe & peran kolom, deteksi missing values dengan aksi imputasi, deteksi outliers, dan matriks korelasi.',
      aspectRatio: '16/10',
      badge: 'Data Profiling',
      imageSrc: '/screenshots/dataset-preview.png',
      tag: 'Dataset',
      details: ['Tabel & Paginasi CSV', 'Audit Data Quality', 'Pembersihan Missing Values', 'Matriks Korelasi'],
    },
    {
      id: 'preview-editor',
      title: 'Editor Analysis & Notebook Kernel',
      caption: 'Editor kode Python dengan template siap pakai untuk EDA, feature engineering, pemodelan ML, output grafik matplotlib, serta pembaca/penyimpan .ipynb.',
      aspectRatio: '16/10',
      badge: 'Interactive Code',
      imageSrc: '/screenshots/editor-analysis.png',
      tag: 'Editor Python',
      details: ['Template Klasifikasi & Regresi', 'Dukungan pip install', 'Simpan/Buka .ipynb', 'Output Teks & Grafik'],
    },
    {
      id: 'preview-ml',
      title: 'ML Intelligence & Evaluasi Model',
      caption: 'Deteksi otomatis jenis tugas (klasifikasi, regresi, clustering, anomaly detection), pemilihan target variabel, dan perbandingan performa metode kandidat.',
      aspectRatio: '16/10',
      badge: 'Model Candidates',
      imageSrc: '/screenshots/ml-intelligence.png',
      tag: 'ML Intelligence',
      details: ['Deteksi Tugas Otomatis', 'Kandidat Metode Ensemble', 'Evaluasi Akurasi/F1-Score', 'Rekomendasi Terarah'],
    },
    {
      id: 'preview-academic',
      title: 'Academic Research & Ranking Paper',
      caption: 'Penelusuran publikasi ilmiah multi-provider (OpenAlex, Crossref, Semantic Scholar) dengan sinyal relevansi dan pemeriksaan status jurnal SINTA.',
      aspectRatio: '16/10',
      badge: 'Literature Discovery',
      imageSrc: '/screenshots/academic-research.png',
      tag: 'Literatur Ilmiah',
      details: ['Pencarian Multi-Provider', 'Pemeriksaan Akreditasi SINTA', 'Cek Indeks Scopus & DOAJ', 'Peringkat Relevansi Paper'],
    },
    {
      id: 'preview-landscape',
      title: 'Research Landscape & Research Gap',
      caption: 'Visualisasi lanskap riset dari paper terkumpul, eksplorasi kandidat celah penelitian (Research Gap), serta kompilasi draft laporan akhir ke format PDF.',
      aspectRatio: '16/10',
      badge: 'Sintesis Riset',
      imageSrc: '/screenshots/research-landscape.png',
      tag: 'Landscape & Gap',
      details: ['Pola Tren Metode & Venue', 'Kandidat Research Gap', 'Pratinjau Research Report', 'Ekspor Dokumen PDF'],
    },
  ],

  releases: [
    {
      id: 'win-installer-v4',
      os: 'windows',
      osName: 'Microsoft Windows',
      architecture: 'x64 (64-bit)',
      version: 'v4.0.0',
      releaseDate: 'Oktober 2026',
      fileSize: '85.4 MB',
      filename: 'DatasetResearch-v4.0.0-Setup.exe',
      downloadUrl: 'https://github.com/NezzyGremory/Dataset-Research/releases/download/v4.0.0/DatasetResearch-v4.0.0-Setup.exe',
      checksumSha256: '4f9a7e2b8109d76c33fa908e5c6a1b7e8824df9102c3884b2c124e98f01a7b32',
      isPrimaryForPlatform: true,
      buttonLabel: 'Download Windows Setup (.exe)',
      notes: 'Installer Windows Setup resmi (Inno Setup 6). Menginstal ke %LOCALAPPDATA%\\Programs\\Dataset Research tanpa memerlukan hak Administrator, otomatis membuat shortcut Desktop dan Start Menu, serta menyertakan uninstaller.',
    },
    {
      id: 'source-zip-v4',
      os: 'windows',
      osName: 'Windows Source (PowerShell)',
      architecture: 'Python 3.11 - 3.13',
      version: 'v4.0.0',
      releaseDate: 'Oktober 2026',
      fileSize: '12.8 MB',
      filename: 'Dataset-Research-v4.0.0.zip',
      downloadUrl: 'https://github.com/NezzyGremory/Dataset-Research/archive/refs/tags/v4.0.0.zip',
      checksumSha256: '88a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcde',
      isPrimaryForPlatform: false,
      buttonLabel: 'Download Source Code (.zip)',
      notes: 'Paket source code resmi untuk dijalankan via Python virtual environment (python run.py) bagi pengembang atau lingkungan riset kustom.',
    },
  ],

  systemRequirements: [
    {
      osKey: 'windows',
      osName: 'Microsoft Windows (Setup Installer)',
      minimumOs: 'Windows 10 (64-bit build 19041+) atau Windows 11',
      recommendedOs: 'Windows 11 versi 22H2 atau lebih baru (64-bit)',
      cpu: 'Prosesor 64-bit dual-core (Intel Core i3 / AMD Ryzen 3 atau setara)',
      ramMinimum: '4 GB RAM',
      ramRecommended: '8 GB RAM atau lebih (disarankan untuk dataset besar & matplotlib visualisasi)',
      storage: '500 MB ruang kosong disk untuk aplikasi, runtime, dan database SQLite lokal',
      extraRuntime: 'Tidak memerlukan runtime eksternal jika menggunakan installer setup .exe bawaan.',
    },
    {
      osKey: 'windows',
      osName: 'Microsoft Windows (Developer Source Mode)',
      minimumOs: 'Windows 10 / 11 64-bit dengan PowerShell',
      recommendedOs: 'Windows 11 dengan Windows Terminal & PowerShell 7+',
      cpu: 'Prosesor 64-bit dual-core 2.0 GHz atau lebih tinggi',
      ramMinimum: '4 GB RAM',
      ramRecommended: '8 GB RAM',
      storage: '500 MB ruang penyimpanan disk',
      extraRuntime: 'Python 3.11 - 3.13 dan pip untuk virtual environment (.venv).',
    },
  ],

  installationGuides: [
    {
      os: 'windows',
      osName: 'Windows Installer (Rekomendasi)',
      steps: [
        {
          step: 1,
          title: 'Unduh Setup Installer',
          description: 'Unduh berkas DatasetResearch-v4.0.0-Setup.exe dari tombol Download resmi di halaman ini.',
        },
        {
          step: 2,
          title: 'Jalankan Setup Executable',
          description:
            'Klik ganda pada berkas installer .exe yang telah diunduh. Pemasangan dilakukan per-user di folder %LOCALAPPDATA%\\Programs\\Dataset Research sehingga tidak memerlukan hak Administrator.',
        },
        {
          step: 3,
          title: 'Konfirmasi Pemasangan',
          description:
            'Setup wizard akan secara otomatis menyiapkan direktori program, membuat pintasan Desktop Shortcut, dan mendaftarkan aplikasi di Start Menu Windows.',
        },
        {
          step: 4,
          title: 'Mulai Meneliti Dataset',
          description: 'Klik shortcut "Dataset Research" di Desktop atau Start Menu Anda untuk langsung membuka aplikasi DORA.',
        },
      ],
      firstRunTip:
        'Saat pertama kali dijalankan, DORA akan menginisialisasi database SQLite lokal di folder %LOCALAPPDATA%\\Dataset Research secara otomatis.',
      troubleshootingTip:
        'Jika Windows SmartScreen menampilkan peringatan unrecognized publisher (karena installer belum menggunakan sertifikat berbayar code-signing), klik "More info" lalu pilih "Run anyway".',
    },
    {
      os: 'windows',
      osName: 'Menjalankan dari Source (PowerShell Windows)',
      steps: [
        {
          step: 1,
          title: 'Clone Repositori GitHub',
          description: 'Clone repositori resmi Dataset-Research ke komputer lokal Anda:',
          codeSnippet: 'git clone https://github.com/NezzyGremory/Dataset-Research.git',
        },
        {
          step: 2,
          title: 'Buat & Aktifkan Virtual Environment',
          description: 'Buka PowerShell pada folder proyek dan aktifkan environment:',
          codeSnippet: 'python -m venv .venv; .\\.venv\\Scripts\\Activate.ps1',
        },
        {
          step: 3,
          title: 'Pasang Dependensi Proyek',
          description: 'Instal seluruh pustaka yang dibutuhkan (PySide6, pandas, scikit-learn, matplotlib, httpx):',
          codeSnippet: 'python -m pip install -r requirements.txt',
        },
        {
          step: 4,
          title: 'Jalankan Aplikasi DORA',
          description: 'Eksekusi script entry point aplikasi di PowerShell:',
          codeSnippet: 'python run.py',
        },
      ],
      firstRunTip:
        'Jika PowerShell memblokir aktivasi script karena Execution Policy, jalankan langsung via interpreter: .\\.venv\\Scripts\\python.exe run.py',
      troubleshootingTip:
        'Untuk pengujian otomatis test suite di PowerShell, Anda dapat mengeksekusi: python -m pytest tests/ -v',
    },
  ],

  faqList: [
    {
      id: 'faq-what-is-dora',
      category: 'general',
      question: 'Apa itu DORA (Data Overview & Research Assistant)?',
      answer:
        'DORA adalah aplikasi desktop native berbasis PySide6 (Qt) yang dikembangkan oleh Metriks Studio untuk membantu mahasiswa, peneliti, dan pengembang dalam memahami dataset, mencoba analisis machine learning terarah, serta meninjau publikasi ilmiah yang relevan dalam satu alur kerja yang terpadu.',
    },
    {
      id: 'faq-offline-privacy',
      category: 'general',
      question: 'Apakah isi dataset dan hasil analisis saya dikirim ke internet?',
      answer:
        'Tidak sama sekali. Seluruh proses analisis, profiling, pembersihan data, dan eksekusi kode machine learning berjalan 100% secara lokal di komputer Anda. Telemetri opsional hanya mencakup event penggunaan terbatas dan default-nya dinonaktifkan (TELEMETRY_API_URL kosong). Konten dataset, input pengguna, dan API key tidak pernah dikirim ke pihak luar.',
    },
    {
      id: 'faq-dataset-search',
      category: 'general',
      question: 'Bagaimana cara mencari dan mengunduh dataset di DORA?',
      answer:
        'Anda dapat membuka menu Dataset Search, mengetik kata kunci topik penelitian yang diinginkan, dan memilih provider pencarian (Kaggle, Hugging Face, atau All providers). Hasil pencarian dapat langsung diunduh ke workspace lokal DORA hanya dengan satu klik.',
    },
    {
      id: 'faq-editor-notebook',
      category: 'general',
      question: 'Apa fungsi Editor Analysis di dalam aplikasi?',
      answer:
        'Editor Analysis menyediakan ruang kerja interaktif bergaya Jupyter Notebook dengan template kode Python siap pakai untuk Data Profiling, Cleaning, EDA, Feature Engineering, hingga algoritma klasifikasi, regresi, clustering, dan ensemble. Anda dapat mengedit kode, mengeksekusinya di lingkungan lokal, memasang library tambahan via pip install, serta membuka dan menyimpan berkas .ipynb.',
    },
    {
      id: 'faq-academic-indexing',
      category: 'support',
      question: 'Provider publikasi apa saja yang didukung dan bagaimana status jurnal diperiksa?',
      answer:
        'DORA terhubung ke provider akademik terkemuka seperti OpenAlex, Crossref, Semantic Scholar, Europe PMC, OpenAIRE, dan Scopus (opsional via API key Elsevier). DORA juga menyediakan fitur pemeriksaan status akreditasi nasional SINTA serta indeks reputasi internasional seperti DOAJ dan Scopus.',
    },
    {
      id: 'faq-admin-install',
      category: 'installation',
      question: 'Apakah dibutuhkan hak Administrator untuk memasang di Windows?',
      answer:
        'Tidak. Windows Installer resmi DORA dirancang sebagai installer per-user yang terpasang di folder %LOCALAPPDATA%\\Programs\\Dataset Research, sehingga Anda tidak memerlukan hak akses administrator Windows untuk menginstal atau memperbaruinya.',
    },
    {
      id: 'faq-pricing-license',
      category: 'general',
      question: 'Apakah software ini gratis dan open-source?',
      answer:
        'Ya! DORA 100% gratis dan berlisensi open-source di bawah lisensi MIT. Anda dapat memeriksa seluruh source code dan berkontribusi langsung pada repositori GitHub resmi di https://github.com/NezzyGremory/Dataset-Research.',
    },
  ],
};

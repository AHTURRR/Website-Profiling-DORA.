import type { ProductConfig } from '../types/product.types';

/**
 * PUSAT KONFIGURASI PRODUK DORA (Data Overview & Research Assistant)
 * Berdasarkan dokumentasi resmi: https://github.com/NezzyGremory/Dataset-Research
 * Pengembang: Metriks Studio
 */
export const productConfig: ProductConfig = {
  product: {
    name: 'DORA',
    tagline: 'Data Overview & Academic Research Assistant — Asisten Cerdas Peneliti Dataset & Machine Learning Terkoneksi Internet',
    shortDescription:
      'Aplikasi desktop native yang terhubung ke jaringan internet untuk riset dataset cerdas, ML Intelligence & estimasi model prediktif, serta penelusuran literatur akademik.',
    fullDescription:
      'DORA (Data Overview & Research Assistant) dikembangkan oleh Metriks Studio sebagai aplikasi desktop yang memanfaatkan koneksi jaringan internet untuk alur kerja riset menyeluruh: integrasi ML Intelligence berbasis jaringan untuk estimasi task dan rekomendasi model, pencarian dataset publik (Kaggle & Hugging Face), penelusuran paper ilmiah terindeks (OpenAlex, Crossref, Semantic Scholar, SINTA, Scopus, DOAJ), dan instalasi pustaka PyPI via pip. Seluruh analisis file CSV privat tetap tersimpan aman di ruang kerja komputer pengguna.',
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
        'Unggah file CSV dengan drag-and-drop, pratinjau tabel, skor kualitas data, deteksi missing values (median/mode imputation), pemeriksaan outliers, dan matriks korelasi interaktif. Berjalan cepat di ruang kerja lokal Anda dan terintegrasi langsung dengan ekosistem riset online DORA.',
      benefitBadge: 'Audit & Imputasi',
      executionScope: 'Lokal (Privat)',
      icon: 'database',
    },
    {
      id: 'dataset-search',
      title: 'Pencarian Dataset Publik Terintegrasi',
      description:
        'Cari ribuan dataset publik secara real-time via koneksi internet dari Kaggle, Hugging Face, atau kombinasi keduanya (All providers), lalu unduh langsung ke workspace lokal DORA hanya dalam satu klik.',
      benefitBadge: 'Kaggle & Hugging Face',
      executionScope: 'Online (Internet)',
      icon: 'search',
    },
    {
      id: 'editor-analysis',
      title: 'Editor Analysis & Notebook Python Terpadu',
      description:
        'Editor bergaya notebook untuk tahapan EDA, feature engineering, dan pemodelan ML (klasifikasi, regresi, clustering, ensemble). Dilengkapi koneksi jaringan internet untuk instalasi pustaka baru langsung dari PyPI via pip install dan integrasi modul AI.',
      benefitBadge: 'Jupyter-Style Notebook & PyPI',
      executionScope: 'Online (Internet)',
      icon: 'cpu',
    },
    {
      id: 'ml-intelligence',
      title: 'ML Intelligence & Estimasi Model Kandidat',
      description:
        'Memanfaatkan koneksi jaringan internet untuk menganalisis karakteristik dataset, memperkirakan jenis task prediktif secara otomatis, merekomendasikan metode kandidat terbaik, dan menyajikan estimasi metrik evaluasi model secara cerdas.',
      benefitBadge: 'Auto-Task & Network Intelligence',
      executionScope: 'Online (Internet)',
      icon: 'sparkles',
    },
    {
      id: 'academic-research',
      title: 'Pencarian Literatur & Indeks Jurnal Akademik',
      description:
        'Membentuk kueri otomatis dari konteks dataset untuk mencari paper ilmiah via koneksi internet ke OpenAlex, Crossref, Semantic Scholar, Europe PMC, dan OpenAIRE, lengkap dengan verifikasi akreditasi SINTA serta indeks Scopus & DOAJ.',
      benefitBadge: 'SINTA, Scopus & DOAJ',
      executionScope: 'Online (Internet)',
      icon: 'book-open',
    },
    {
      id: 'landscape-gap-report',
      title: 'Research Landscape, Gap Discovery & PDF Export',
      description:
        'Pemetaan visual tren publikasi dan venue secara daring, eksplorasi kandidat celah penelitian (Research Gap) dengan dukungan insight AI Google Gemini online, serta penyusunan dan ekspor laporan riset komprehensif ke format PDF.',
      benefitBadge: 'Sintesis Online & Ekspor PDF',
      executionScope: 'Online (Internet)',
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
      id: 'win-installer-v5',
      os: 'windows',
      osName: 'Microsoft Windows',
      architecture: 'x64 (64-bit)',
      version: 'v5.0.0',
      releaseDate: 'Oktober 2026',
      fileSize: '85.4 MB',
      filename: 'DatasetResearch-v5.0.0-Setup.exe',
      downloadUrl: 'https://github.com/NezzyGremory/Dataset-Research/releases/download/v5.0.0/DatasetResearch-v5.0.0-Setup.exe',
      checksumSha256: '4f9a7e2b8109d76c33fa908e5c6a1b7e8824df9102c3884b2c124e98f01a7b32',
      isPrimaryForPlatform: true,
      buttonLabel: 'Download Windows Setup (.exe)',
      notes: 'Installer Windows Setup resmi (Inno Setup 6) rilis v5.0.0 final. Menginstal ke %LOCALAPPDATA%\\Programs\\Dataset Research tanpa memerlukan hak Administrator, otomatis membuat shortcut Desktop dan Start Menu, serta menyertakan uninstaller.',
    },
    {
      id: 'source-zip-v5',
      os: 'windows',
      osName: 'Windows Source (PowerShell)',
      architecture: 'Python 3.11 - 3.13',
      version: 'v5.0.0',
      releaseDate: 'Oktober 2026',
      fileSize: '12.8 MB',
      filename: 'Dataset-Research-v5.0.0.zip',
      downloadUrl: 'https://github.com/NezzyGremory/Dataset-Research/archive/refs/tags/v5.0.0.zip',
      checksumSha256: '88a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcde',
      isPrimaryForPlatform: false,
      buttonLabel: 'Download Source Code (.zip)',
      notes: 'Paket source code resmi rilis v5.0.0 final untuk dijalankan via Python virtual environment (python run.py) bagi pengembang atau lingkungan riset kustom.',
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
      network: 'Koneksi internet aktif diperlukan untuk: ML Intelligence & estimasi model prediktif, pencarian dataset publik (Kaggle/HF), kueri paper akademik (OpenAlex/Crossref/Semantic Scholar/Scopus), verifikasi SINTA & DOAJ, serta instalasi paket PyPI via pip.',
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
      network: 'Koneksi internet aktif diperlukan untuk: clone repository GitHub, pip install dependensi PyPI, ML Intelligence, pencarian dataset publik, dan API literatur akademik.',
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
          description: 'Unduh berkas DatasetResearch-v5.0.0-Setup.exe dari tombol Download resmi di halaman ini.',
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
      id: 'faq-internet-connection',
      category: 'general',
      question: 'Apakah aplikasi DORA memerlukan koneksi internet?',
      answer:
        'Ya, DORA adalah aplikasi desktop yang dirancang menggunakan koneksi jaringan internet untuk menjalankan seluruh kapabilitas riset cerdasnya. Koneksi internet aktif digunakan untuk: (1) ML Intelligence & estimasi model prediktif, (2) Pencarian dataset publik dari Kaggle dan Hugging Face, (3) Penelusuran publikasi ilmiah (OpenAlex, Crossref, Semantic Scholar, Europe PMC, OpenAIRE, Scopus), (4) Verifikasi status akreditasi nasional SINTA dan indeks DOAJ, (5) Instalasi pustaka Python tambahan langsung dari PyPI via pip install, dan (6) Eksplorasi Research Gap berbasis AI Google Gemini. Sementara itu, integritas file CSV Anda tetap terjaga aman karena analisis data numerik dilakukan di lingkungan lokal komputer Anda tanpa risiko kebocoran data ke server cloud.',
    },
    {
      id: 'faq-dataset-privacy',
      category: 'general',
      question: 'Bagaimana keamanan dataset dan privasi data penelitian saya?',
      answer:
        'Privasi data penelitian Anda sepenuhnya terjaga. Seluruh konten file dataset CSV, baris data, dan hasil perhitungan analisis numerik diproses secara lokal di komputer Anda dan disimpan di database SQLite lokal (%LOCALAPPDATA%). Telemetri default-nya dinonaktifkan (TELEMETRY_API_URL kosong) dan jikapun diaktifkan, telemetri hanya mengirimkan event pemakaian anonim yang dibatasi; konten dataset, input pengguna, dan API key tidak pernah dikirim ke pihak luar.',
    },
    {
      id: 'faq-dataset-search',
      category: 'general',
      question: 'Bagaimana cara mencari dan mengunduh dataset di DORA?',
      answer:
        'Anda dapat membuka menu Dataset Search, mengetik kata kunci topik penelitian yang diinginkan, dan memilih provider pencarian (Kaggle, Hugging Face, atau All providers). Fitur ini mengakses API penyedia publik secara online dan hasil pencarian dapat langsung diunduh ke workspace lokal DORA hanya dengan satu klik.',
    },
    {
      id: 'faq-editor-notebook',
      category: 'general',
      question: 'Apa fungsi Editor Analysis di dalam aplikasi?',
      answer:
        'Editor Analysis menyediakan ruang kerja interaktif bergaya Jupyter Notebook dengan template kode Python siap pakai untuk Data Profiling, Cleaning, EDA, Feature Engineering, hingga algoritma klasifikasi, regresi, clustering, dan ensemble. Kode dieksekusi di runtime Python lokal komputer Anda dengan akses instalasi paket PyPI online (pip install) dan dukungan membuka/menyimpan berkas .ipynb.',
    },
    {
      id: 'faq-academic-indexing',
      category: 'support',
      question: 'Provider publikasi apa saja yang didukung dan bagaimana status jurnal diperiksa?',
      answer:
        'DORA terhubung secara online ke provider akademik terkemuka seperti OpenAlex, Crossref, Semantic Scholar, Europe PMC, OpenAIRE, dan Scopus (opsional via API key Elsevier). DORA juga menyediakan fitur pemeriksaan status akreditasi nasional SINTA secara daring serta indeks reputasi internasional seperti DOAJ dan Scopus.',
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

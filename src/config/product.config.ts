import type { ProductConfig } from '../types/product.types';

/**
 * PUSAT KONFIGURASI PRODUK DORA (Data Overview & Research Assistant)
 * Pengembang: Metriks Studio
 */
export const productConfig: ProductConfig = {
  product: {
    name: 'DORA',
    tagline: 'Data Overview & Academic Research Assistant: Asisten Desktop Terpadu Eksplorasi Dataset, Machine Learning & Riset Literatur Ilmiah',
    shortDescription:
      'Aplikasi desktop native PySide6 untuk alur kerja riset menyeluruh: pemuatan dataset multi-format (CSV/Excel/JSON/Parquet), audit kualitas data dan pembersihan cerdas, ML Pipeline Checklist, Editor Analysis bergaya notebook dengan instalasi PyPI, ML Intelligence, penelusuran paper terindeks SINTA/Scopus/DOAJ, analisis Research Gap, hingga ekspor laporan PDF siap pakai.',
    fullDescription:
      'DORA (Data Overview & Research Assistant) dikembangkan oleh Metriks Studio sebagai aplikasi desktop native yang menggabungkan kecepatan pemrosesan lokal dengan koneksi jaringan internet untuk alur riset terpadu. Seluruh berkas dataset privat dan operasi pembersihan numerik diproses 100% secara lokal di komputer pengguna (SQLite lokal, zero dataset leakage). Sementara itu, koneksi internet dimanfaatkan untuk pencarian dataset publik (Kaggle & Hugging Face), instalasi pustaka PyPI via pip di Editor Analysis, penelusuran paper ilmiah akademik (OpenAlex, Crossref, Semantic Scholar, Scopus), verifikasi akreditasi nasional SINTA & DOAJ, serta eksplorasi celah penelitian (Research Gap) berbasis AI.',
    developer: {
      name: 'Metriks Studio',
      copyrightYear: 2026,
    },
    license: {
      name: 'Gratis untuk Penggunaan Riset',
      isFree: true,
    },
    links: {
      privacyPolicy: '#privacy',
    },
  },

  features: [
    {
      id: 'overview-pipeline',
      title: 'Overview & ML Pipeline Checklist',
      shortSummary: 'Pantau status dataset, kebersihan data, dan kelengkapan pipeline riset machine learning.',
      description:
        'Dashboard sentral yang mengumpulkan status dataset aktif, ringkasan skor kualitas data, rekomendasi cepat ML, progres pipeline riset, dan pintasan laporan. Dilengkapi ML Pipeline Checklist untuk memantau tahapan alur kerja yang sudah selesai, direkomendasikan, atau belum tersedia.',
      benefitBadge: 'Pipeline & Checklist',
      executionScope: 'Hybrid (Lokal + Online)',
      icon: 'layers',
      capabilities: [
        'Memantau status dataset aktif, skor kebersihan, dan progress alur kerja riset secara terpadu',
        'ML Pipeline Checklist cerdas untuk memeriksa kelengkapan tahapan sebelum pemodelan',
        'Ringkasan cepat estimasi tugas ML dan status paper terverifikasi',
        'Pintasan cepat (one-click shortcut) ke modul analisis, editor, dan ekspor laporan riset',
      ],
    },
    {
      id: 'dataset-profiling',
      title: 'Multi-Format Loader & Data Profiling',
      shortSummary: 'Muat dataset multi-format dengan deteksi otomatis delimiter serta audit peran kolom.',
      description:
        'Memuat berkas dataset CSV, Excel (.xlsx/.xls), JSON, dan Parquet melalui pemilih berkas atau drag-and-drop. Dilengkapi pendeteksian otomatis karakter pemisah (delimiter) dan encoding, tabel paginasi responsif, serta audit tipe dan peran kolom.',
      benefitBadge: 'CSV, Excel, JSON & Parquet',
      executionScope: 'Lokal (Privat)',
      icon: 'database',
      capabilities: [
        'Mendukung multi-format: CSV, Excel (.xlsx/.xls), JSON, dan Parquet',
        'Deteksi otomatis encoding dan delimiter (koma, titik-koma, tab)',
        'Pratinjau tabel interaktif dengan paginasi cepat untuk dataset berukuran besar',
        'Identifikasi peran kolom (fitur numerik, kategorikal, teks, ID unik, atau target)',
      ],
    },
    {
      id: 'data-quality-cleaning',
      title: 'Audit Kualitas Data & Drop Missing Values',
      shortSummary: 'Audit integritas data menyeluruh dan pembersihan 4 strategi tanpa merusak file asli.',
      description:
        'Pemeriksaan integritas data menyeluruh. Menghitung jumlah nilai kosong dan nilai 0 secara terpisah, deteksi outliers (IQR/Z-Score), korelasi variabel, serta dialog Drop Missing Values dengan 4 strategi canggih tanpa mengubah file CSV asli.',
      benefitBadge: '4 Strategi Cleaning',
      executionScope: 'Lokal (Privat)',
      icon: 'sliders',
      capabilities: [
        '4 Strategi pembersihan: Drop Baris (any/all), Drop Kolom berbasis ambang, Imputasi statistik, dan Laporan dampak',
        'Pembedaan cerdas antara missing value sesungguhnya dengan angka 0 yang bermakna valid',
        'Membuat salinan Cleaned Dataset baru di workspace; file CSV asli tetap aman terjaga',
        'Normalisasi placeholder otomatis (-, NA, null, tidak tersedia, #VALUE!) & format angka Indonesia/global',
        'Ekspor dataset bersih sekaligus ekspor berkas catatan baris terbuang (_dropped_rows.csv)',
      ],
    },
    {
      id: 'pre-modeling-diagnostics',
      title: 'Pre-Modeling Diagnostics & Leakage Check',
      shortSummary: 'Diagnostik sebaran distribusi fitur, keseimbangan kelas, dan pencegahan risiko data leakage.',
      description:
        'Diagnostik mendalam karakteristik dataset sebelum pemodelan Machine Learning. Menganalisis sebaran distribusi fitur, keseimbangan kelas (class balance), deteksi risiko kebocoran data (data leakage), serta petunjuk seleksi fitur dan pembagian train-test.',
      benefitBadge: 'Leakage & Split Guidance',
      executionScope: 'Lokal (Privat)',
      icon: 'zap',
      capabilities: [
        'Analisis distribusi statistik fitur numerik dan visualisasi keseimbangan kelas target',
        'Pemeriksaan dini risiko kebocoran data (Data Leakage Warning) antar variabel',
        'Rekomendasi metode preprocessing, penskalaan (scaling), dan skema train-test split',
        'Petunjuk seleksi fitur (Feature Selection Hints) untuk optimasi performa model',
      ],
    },
    {
      id: 'dataset-search',
      title: 'Pencarian Dataset Publik (Kaggle & Hugging Face)',
      shortSummary: 'Cari dan unduh ribuan dataset Kaggle dan Hugging Face langsung ke workspace.',
      description:
        'Menelusuri ribuan dataset publik secara real-time via koneksi internet dari Kaggle, Hugging Face, atau kombinasi keduanya (All providers), lalu mengunduhnya langsung ke ruang kerja lokal DORA hanya dalam satu klik.',
      benefitBadge: 'Kaggle & Hugging Face',
      executionScope: 'Online (Internet)',
      icon: 'search',
      capabilities: [
        'Pencarian dataset publik lintas platform (Kaggle & Hugging Face) secara terintegrasi',
        'Filter pencarian fleksibel berdasarkan penyedia (Kaggle, Hugging Face, atau All providers)',
        'Unduh langsung berkas dataset ke workspace lokal DORA tanpa perlu membuka browser',
        'Membantu mempercepat komparasi dataset benchmark dan studi literatur empiris',
      ],
    },
    {
      id: 'editor-analysis',
      title: 'Editor Analysis & Notebook Kernel PyPI',
      shortSummary: 'Editor interaktif ala Jupyter dengan template riset dan instalasi pustaka PyPI.',
      description:
        'Editor interaktif bergaya Jupyter Notebook dengan template alur riset lengkap (Data Profiling, Cleaning, EDA, Feature Engineering, hingga Pemodelan ML). Mendukung instalasi pustaka PyPI via pip install dan membuka/menyimpan berkas .ipynb.',
      benefitBadge: 'Jupyter-Style Notebook & PyPI',
      executionScope: 'Hybrid (Lokal + Online)',
      icon: 'cpu',
      capabilities: [
        'Template kode Python siap pakai untuk klasifikasi, regresi, clustering, dan ensemble',
        'Eksekusi kode lokal dengan output ganda: teks konsol terminal dan visualisasi grafik Matplotlib',
        'Instalasi paket Python PyPI secara daring langsung dari workspace (misal: pip install seaborn)',
        'Kompatibilitas penuh membuka dan menyimpan berkas notebook standar (.ipynb)',
      ],
    },
    {
      id: 'ml-intelligence',
      title: 'ML Intelligence & Estimasi Model Kandidat',
      shortSummary: 'Deteksi otomatis tugas ML prediktif serta estimasi performa algoritma kandidat terbaik.',
      description:
        'Memanfaatkan koneksi jaringan internet untuk menganalisis sifat dataset, memperkirakan jenis tugas prediktif secara otomatis, merekomendasikan metode algoritma terbaik, dan menyajikan estimasi metrik performa model empiris.',
      benefitBadge: 'Auto-Task & Network Intelligence',
      executionScope: 'Online (Internet)',
      icon: 'sparkles',
      capabilities: [
        'Pendeteksian otomatis jenis tugas ML (Klasifikasi, Regresi, Clustering, Anomaly Detection)',
        'Rekomendasi metode algoritma kandidat terbaik termasuk metode ensemble modern',
        'Estimasi metrik evaluasi model empiris (Akurasi, F1-Score, Precision, Recall, MSE/R2)',
        'Memberikan panduan berbasis bukti bagi peneliti sebelum melatih model final',
      ],
    },
    {
      id: 'academic-research',
      title: 'Pencarian Literatur & Verifikasi Jurnal Akademik',
      shortSummary: 'Pencarian literatur ilmiah otomatis lengkap dengan verifikasi akreditasi SINTA dan Scopus.',
      description:
        'Membentuk kueri otomatis dari fingerprint dataset untuk mencari publikasi ilmiah via koneksi internet ke OpenAlex, Crossref, Semantic Scholar, Europe PMC, dan Scopus, lengkap dengan perankingan relevansi serta verifikasi akreditasi SINTA dan indeks DOAJ.',
      benefitBadge: 'SINTA, Scopus & DOAJ',
      executionScope: 'Online (Internet)',
      icon: 'book-open',
      capabilities: [
        'Pembuatan kueri pencarian otomatis berbasis kata kunci konteks dan fingerprint dataset',
        'Pencarian multi-provider dengan deduplikasi paper dan perangkingan relevansi cerdas',
        'Pemeriksaan akreditasi nasional SINTA (SINTA 1 hingga SINTA 6) secara terintegrasi',
        'Verifikasi indeks internasional DOAJ dan Scopus secara transparan dan terpisah',
      ],
    },
    {
      id: 'landscape-gap-report',
      title: 'Research Landscape, Gap Discovery & PDF Export',
      shortSummary: 'Pemetaan tren riset, sintesis AI Google Gemini, dan ekspor laporan ke PDF.',
      description:
        'Pemetaan visual lanskap riset tren publikasi dan venue, eksplorasi kandidat celah penelitian (Research Gap) dengan dukungan insight AI Google Gemini online, serta penyusunan dan ekspor laporan riset komprehensif ke format PDF.',
      benefitBadge: 'Sintesis AI & Ekspor PDF',
      executionScope: 'Online (Internet)',
      icon: 'file-text',
      capabilities: [
        'Pemetaan visual tren publikasi ilmiah, sebaran metodologi, dan venue konferensi/jurnal',
        'Eksplorasi kandidat celah penelitian (Research Gap) didukung sintesis AI Google Gemini',
        'Kompilasi otomatis audit data, eksperimen ML, dan literatur ke pratinjau draf laporan',
        'Ekspor dokumen laporan riset menyeluruh siap publikasi ke format dokumen PDF',
      ],
    },
    {
      id: 'ui-scale-responsive',
      title: 'Penskalaan UI (UI Scale) & Privasi Zero-Leakage',
      shortSummary: 'Skala antarmuka fleksibel dan penyimpanan lokal privat tanpa risiko kebocoran data.',
      description:
        'Pengaturan skala antarmuka responsif dari Auto hingga 70%–150%, navigasi sidebar adaptif dengan mode ikon otomatis pada layar kecil, serta arsitektur keamanan offline lokal SQLite yang memastikan privasi dataset terlindungi 100%.',
      benefitBadge: 'Zoom 70%–150% & Privasi Total',
      executionScope: 'Lokal (Privat)',
      icon: 'shield',
      capabilities: [
        'Fitur UI Scale fleksibel (Auto atau 70%–150%) melalui menu View untuk berbagai ukuran monitor',
        'Pintasan zoom keyboard praktis: Ctrl+= (zoom in), Ctrl+- (zoom out), Ctrl+0 (auto reset), dan Ctrl+scroll',
        'Sidebar navigasi yang dapat dibuka/diciutkan dan otomatis berubah ke mode ikon di layar sempit',
        'Jaminan Zero Dataset Leakage: Data numerik dan CSV privat tidak pernah dikirim ke server luar',
      ],
    },
  ],

  previews: [
    {
      id: 'preview-overview',
      title: 'Overview & Pipeline Workspace',
      caption:
        'Dashboard ringkasan status dataset, skor kualitas data, rekomendasi model ML, kemajuan alur kerja riset, serta ML Pipeline Checklist untuk memastikan kesiapan pra-pemodelan.',
      aspectRatio: '16/10',
      badge: 'Dashboard Utama',
      imageSrc: '/screenshots/overview.png',
      tag: 'Overview',
      details: [
        'Status Pipeline Dataset Terpadu',
        'ML Pipeline Checklist 7 Tahapan',
        'Ringkasan Skor Kualitas Data',
        'Pintasan Cepat Menuju Laporan Riset',
      ],
    },
    {
      id: 'preview-dataset-upload',
      title: 'Memuat Dataset Multi-Format',
      caption:
        'Area unggah fleksibel dengan drag-and-drop atau pemilih berkas. Mendukung berkas CSV, Excel (.xlsx/.xls), JSON, dan Parquet dengan deteksi otomatis delimiter dan encoding.',
      aspectRatio: '16/10',
      badge: 'Multi-Format Loader',
      imageSrc: '/screenshots/dataset-upload.png',
      tag: 'Loader',
      details: [
        'Drag-and-Drop CSV, Excel, JSON & Parquet',
        'Deteksi Otomatis Encoding & Delimiter',
        'Penyimpanan Aman di SQLite Lokal',
        'Konfirmasi Unggah & Validasi Struktur',
      ],
    },
    {
      id: 'preview-dataset',
      title: 'Pratinjau Dataset & Peran Kolom',
      caption:
        'Tampilan tabel interaktif dengan paginasi responsif, analisis tipe data kolom, pemetaan peran (fitur vs target), dan deteksi baris duplikat.',
      aspectRatio: '16/10',
      badge: 'Data Profiling',
      imageSrc: '/screenshots/dataset-preview.png',
      tag: 'Dataset',
      details: [
        'Tabel Interaktif & Paginasi Cepat',
        'Analisis Tipe & Peran Setiap Kolom',
        'Pemeriksaan Baris Duplikat',
        'Statistik Ringkasan Dataset',
      ],
    },
    {
      id: 'preview-data-quality',
      title: 'Audit Kualitas Data & Missing Values',
      caption:
        'Audit kebersihan data secara menyeluruh dengan skor kualitas data, pemisahan perhitungan missing values vs nilai 0 valid, dan analisis korelasi variabel.',
      aspectRatio: '16/10',
      badge: 'Data Quality',
      imageSrc: '/screenshots/dataset-data-quality.png',
      tag: 'Data Quality',
      details: [
        'Skor Kualitas & Persentase Kebersihan',
        'Pemisahan Nilai Missing vs Nilai 0 Valid',
        'Audit Outlier & Matriks Korelasi',
        'Panduan Tindakan Pembersihan Data',
      ],
    },
    {
      id: 'preview-analysis',
      title: 'Pre-Modeling Diagnostics & Leakage Check',
      caption:
        'Diagnostik karakteristik dataset sebelum pemodelan: sebaran distribusi fitur, keseimbangan kelas target (class balance), deteksi potensi data leakage, dan rekomendasi split data.',
      aspectRatio: '16/10',
      badge: 'Pre-Modeling',
      imageSrc: '/screenshots/analysis.png',
      tag: 'Analysis',
      details: [
        'Distribusi Statistik Fitur Numerik',
        'Evaluasi Class Balance Variabel Target',
        'Peringatan Dini Data Leakage',
        'Petunjuk Preprocessing & Train-Test Split',
      ],
    },
    {
      id: 'preview-dataset-search',
      title: 'Dataset Search (Kaggle & Hugging Face)',
      caption:
        'Pencarian ribuan dataset publik secara real-time via koneksi internet dari Kaggle dan Hugging Face dengan opsi All providers, lalu mengunduh langsung ke workspace DORA dalam 1 klik.',
      aspectRatio: '16/10',
      badge: 'Dataset Search',
      imageSrc: '/screenshots/dataset-search.png',
      tag: 'Search',
      details: [
        'Katalog Ribuan Dataset Publik',
        'Provider Kaggle & Hugging Face Terpadu',
        'Unduh 1-Klik Langsung ke Workspace',
        'Ideal untuk Studi Komparatif & Benchmark',
      ],
    },
    {
      id: 'preview-editor',
      title: 'Editor Analysis & Notebook Kernel PyPI',
      caption:
        'Editor kode Python bergaya Jupyter Notebook dengan template alur riset lengkap, eksekusi teks dan visual grafik Matplotlib, dukungan pip install online, serta pembaca/penyimpan .ipynb.',
      aspectRatio: '16/10',
      badge: 'Interactive Code',
      imageSrc: '/screenshots/editor-analysis.png',
      tag: 'Editor Python',
      details: [
        'Template Klasifikasi, Regresi & Ensemble',
        'Instalasi Paket PyPI via pip install',
        'Output Teks Konsol & Grafik Matplotlib',
        'Kompatibel Penuh Berkas Notebook .ipynb',
      ],
    },
    {
      id: 'preview-ml',
      title: 'ML Intelligence & Evaluasi Model Empiris',
      caption:
        'Deteksi otomatis jenis tugas Machine Learning, pemilihan variabel target, rekomendasi metode kandidat terbaik, dan perbandingan performa evaluasi empiris model.',
      aspectRatio: '16/10',
      badge: 'Model Candidates',
      imageSrc: '/screenshots/ml-intelligence.png',
      tag: 'ML Intelligence',
      details: [
        'Deteksi Tugas Prediktif Otomatis',
        'Rekomendasi Algoritma Kandidat & Ensemble',
        'Evaluasi Metrik Akurasi, F1 & MSE/R2',
        'Rekomendasi Terarah Berbasis Bukti',
      ],
    },
    {
      id: 'preview-academic',
      title: 'Academic Research & Ranking Paper',
      caption:
        'Penelusuran publikasi ilmiah multi-provider (OpenAlex, Crossref, Semantic Scholar, Scopus) dengan sinyal relevansi dan verifikasi akreditasi nasional SINTA 1–6.',
      aspectRatio: '16/10',
      badge: 'Literature Discovery',
      imageSrc: '/screenshots/academic-research.png',
      tag: 'Literatur Ilmiah',
      details: [
        'Pembentukan Kueri Otomatis Berbasis Dataset',
        'Pencarian Multi-Provider dengan Deduplikasi',
        'Verifikasi Akreditasi Nasional SINTA 1–6',
        'Pemeriksaan Indeks Scopus & DOAJ Terpisah',
      ],
    },
    {
      id: 'preview-landscape',
      title: 'Research Landscape & Research Gap',
      caption:
        'Visualisasi lanskap riset dari kumpulan paper ilmiah, eksplorasi kandidat celah penelitian (Research Gap) dengan insight AI Google Gemini online, serta penyusunan draf laporan akhir.',
      aspectRatio: '16/10',
      badge: 'Sintesis Riset',
      imageSrc: '/screenshots/research-landscape.png',
      tag: 'Landscape & Gap',
      details: [
        'Pemetaan Visual Tren Metode & Venue Publikasi',
        'Eksplorasi Kandidat Celah Riset (Research Gap)',
        'Dukungan Insight Kebaruan AI Google Gemini',
        'Identifikasi Peluang Kontribusi Ilmiah',
      ],
    },
    {
      id: 'preview-report',
      title: 'Research Report & Ekspor Dokumen PDF',
      caption:
        'Kompilasi otomatis seluruh tahapan alur kerja riset (profil dataset, kualitas data, evaluasi ML, sintesis literatur, tren landscape, dan research gap) menjadi draf laporan siap ekspor ke PDF.',
      aspectRatio: '16/10',
      badge: 'Ekspor PDF',
      imageSrc: '/screenshots/research-report.png',
      tag: 'Laporan Riset',
      details: [
        'Kompilasi Otomatis Seluruh Tahap Pipeline',
        'Sintesis Temuan Dataset, ML & Literatur',
        'Pratinjau Draf Laporan Komprehensif',
        'Ekspor Dokumen Siap Cetak ke Format PDF',
      ],
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
      fileSize: '92.3 MB',
      filename: 'DORA-v5.0.0-Setup.exe',
      downloadUrl: 'https://github.com/NezzyGremory/Dataset-Research/releases/download/v5.0.0/DORA-v5.0.0-Setup.exe',
      checksumSha256: '05c5dcc67a0b213d6e9f3ac31bd0db38025b04dd6f4e1ede691a6540f47f88b3',
      isPrimaryForPlatform: true,
      buttonLabel: 'Download Windows Setup (.exe)',
      notes: 'Installer Windows Setup resmi (Inno Setup 6) rilis v5.0.0 final. Menginstal ke %LOCALAPPDATA%\\Programs\\Dataset Research tanpa memerlukan hak Administrator, otomatis membuat shortcut Desktop dan Start Menu, serta menyertakan uninstaller.',
    },
    {
      id: 'win-installer-v4',
      os: 'windows',
      osName: 'Microsoft Windows (Legacy v4.0)',
      architecture: 'x64 (64-bit)',
      version: 'v4.0.0',
      releaseDate: 'Oktober 2026',
      fileSize: '89.1 MB',
      filename: 'DatasetResearch-v4.0.0-Setup.exe',
      downloadUrl: 'https://github.com/NezzyGremory/Dataset-Research/releases/download/v4.0.0/DatasetResearch-v4.0.0-Setup.exe',
      checksumSha256: '2656b4269366396844845d9ad097dc63d97080fa8b5816067e38e444969c1fc4',
      isPrimaryForPlatform: false,
      buttonLabel: 'Download Setup v4.0.0 (.exe)',
      notes: 'Installer Windows Setup resmi rilis stabil v4.0.0 sebelumnya (Dataset Research). Dapat diunduh sebagai opsi alternatif jika membutuhkan versi v4.',
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
  ],

  installationGuides: [
    {
      os: 'windows',
      osName: 'Windows Installer (Rekomendasi)',
      steps: [
        {
          step: 1,
          title: 'Unduh Setup Installer',
          description: 'Unduh berkas DORA-v5.0.0-Setup.exe dari tombol Download resmi di halaman ini.',
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
      question: 'Apakah software ini gratis?',
      answer:
        'Ya! DORA dapat diunduh dan digunakan secara gratis untuk keperluan riset dan pembelajaran melalui installer Windows resmi yang tersedia di halaman ini.',
    },
    {
      id: 'faq-download-troubleshooting',
      category: 'installation',
      question: 'Bagaimana jika berkas installer tidak berhasil diunduh (download gagal atau terblokir browser)?',
      answer:
        'Jika berkas tidak berhasil diunduh: (1) Lakukan hard refresh browser (Ctrl + F5) lalu coba unduh kembali, (2) Jika browser (Edge/Chrome) menampilkan peringatan "isn\'t commonly downloaded", klik ikon Titik Tiga (⋯) > "Keep" > "Keep anyway" karena installer belum menggunakan sertifikat code-signing berbayar, atau (3) Buka panduan 5 langkah Windows Defender yang tersedia di bawah tombol Download.',
    },
    {
      id: 'faq-loader-formats',
      category: 'general',
      question: 'Format berkas apa saja yang didukung oleh loader DORA?',
      answer:
        'DORA mendukung beragam format data penelitian populer: CSV, Microsoft Excel (.xlsx dan .xls), JSON, serta Apache Parquet. Loader DORA secara cerdas mendeteksi otomatis encoding berkas serta karakter delimiter pemisah (koma, titik-koma, tab), sehingga pengguna tidak perlu melakukan konversi format manual sebelum memulai analisis.',
    },
    {
      id: 'faq-drop-missing-strategy',
      category: 'general',
      question: 'Bagaimana cara kerja fitur Drop Missing Values dan apakah berkas asli akan tertimpa?',
      answer:
        'Berkas asli Anda aman dan tidak pernah ditimpa. DORA membuat salinan versi bersih ("Cleaned Dataset") baru di ruang kerja aplikasi sehingga Anda dapat berpindah antara versi Original dan Cleaned kapan saja. DORA menyediakan 4 strategi pembersihan: (1) Drop baris (aturan any/all), (2) Drop kolom berbasis ambang batas kelangkaan, (3) Imputasi statistik (mean, median, mode, interpolasi, per-grup), dan (4) Laporan pratinjau dampak. Nilai angka nol (0) yang valid secara cerdas dipisahkan dari missing value sesungguhnya, dan saat diekspor ke CSV, baris yang dibuang juga dicatat rapi dalam berkas saudara bernama <nama>_dropped_rows.csv.',
    },
    {
      id: 'faq-ui-scale-shortcuts',
      category: 'support',
      question: 'Bagaimana cara mengatur skala tampilan atau zoom pada antarmuka DORA?',
      answer:
        'DORA menyediakan fitur UI Scale fleksibel di menu View dengan pilihan Auto (otomatis menyesuaikan layar) atau skala manual 70% hingga 150%. Anda juga dapat menggunakan pintasan keyboard praktis: tekan Ctrl + = untuk memperbesar tampilan, Ctrl + - untuk memperkecil, Ctrl + 0 untuk kembali ke skala Auto, atau Ctrl + scroll mouse pada area konten aplikasi. Selain itu, sidebar navigasi dapat dibuka/diciutkan dan otomatis beralih menjadi mode ikon pada jendela layar sempit.',
    },
  ],
};

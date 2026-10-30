import type { ProductConfig } from '../types/product.types';

/**
 * PUSAT KONFIGURASI PRODUK DORA (Data Overview & Research Assistant) v2.0.0
 * Repositori Resmi: https://github.com/NezzyGremory/Data-Overview-Research-Assistant.git
 * Pengembang: Metriks Studio
 */
export const productConfig: ProductConfig = {
  product: {
    name: 'DORA',
    tagline:
      'Data Overview & Research Assistant v2.0.0: Aplikasi Desktop Eksplorasi Dataset, Visual ML Node Editor & Riset Literatur Ilmiah',
    shortDescription:
      'Aplikasi desktop native PySide6 (v2.0.0) untuk alur kerja riset data dan akademik: pemuatan dataset multi-format (CSV/Excel/JSON/Parquet), audit kualitas data 4 strategi, Visual Node Editor & ML Graph Engine dengan ekspor multi-format (.py, .ipynb, .pkl, .csv, .zip), Editor Analysis interaktif, penelusuran literatur terindeks SINTA/Scopus/DOAJ, hingga ekspor laporan PDF.',
    fullDescription:
      'Data Overview & Research Assistant (DORA v2.0.0) dikembangkan oleh Metriks Studio sebagai aplikasi desktop native berbasis Python 3.13 dan PySide6 6.11 yang memadukan pemrosesan dataset lokal di perangkat dengan layanan pencarian online. Pada rilis v2.0.0, DORA menghadirkan penyempurnaan tata letak Overview (kondisi kosong maupun terisi), keselarasan navigasi sidebar pada seluruh 16 rute aktif, Node Editor visual yang berjalan di latar belakang dengan cache analisis serta ekspor multi-format, penguatan kontrol event Qt pada Editor Analisis, peluncuran otomatis berbasis virtual environment proyek (.venv), serta panel informasi privasi lengkap pada halaman Tentang.',
    developer: {
      name: 'Metriks Studio',
      copyrightYear: 2026,
    },
    license: {
      name: 'Gratis untuk Penggunaan Riset & Akademik',
      isFree: true,
    },
    links: {
      privacyPolicy: '#faq',
      repositoryUrl: 'https://github.com/NezzyGremory/Data-Overview-Research-Assistant',
      releasesUrl: 'https://github.com/NezzyGremory/Data-Overview-Research-Assistant/releases',
    },
  },

  features: [
    {
      id: 'overview-pipeline',
      title: 'Overview & Navigasi 16 Rute Konsisten (v2.0)',
      shortSummary:
        'Dashboard utama dengan tata letak yang dirapikan, ML Pipeline Checklist, dan navigasi sidebar seragam di 16 rute.',
      description:
        'Dashboard sentral yang merangkum status dataset aktif, skor kualitas data, rekomendasi model ML, progres pipeline riset 7 tahapan, dan pintasan laporan. Pada v2.0.0, skala tipografi, jarak, dan tampilan saat belum ada dataset dibuat lebih jelas dan responsif, didukung navigasi sidebar yang selaras di seluruh 16 rute menu dengan transisi halaman 140 ms.',
      benefitBadge: 'Overview & 16 Rute UI',
      executionScope: 'Hybrid (Lokal + Online)',
      icon: 'layers',
      capabilities: [
        'Tampilan Overview v2.0.0 yang konsisten baik saat kondisi dataset kosong maupun setelah dataset dimuat',
        'ML Pipeline Checklist 7 tahapan untuk memantau progres dari pemuatan dataset hingga penyusunan laporan',
        'Navigasi sidebar seragam di 16 rute aktif (Workspace, Alat Tambahan, dan Research Tools) dengan fokus keyboard yang jelas',
        'Pintasan langsung ke halaman Dataset, Analysis, Node Editor, ML Intelligence, serta Research Report',
      ],
    },
    {
      id: 'node-editor-graph',
      title: 'Visual Node Editor & ML Graph Engine (Baru di v2.0)',
      shortSummary:
        'Susun pipeline ML secara visual dengan deteksi task otomatis, cache latar belakang, dan ekspor 5 format.',
      description:
        'Ruang kerja berbasis node visual untuk merancang, memvalidasi, dan mengeksekusi eksperimen Machine Learning. Pada v2.0.0, pemuatan dan analisis dataset, deteksi task otomatis, serta pembuatan template graph dinamis dijalankan di latar belakang dengan dukungan cache analisis untuk mengurangi pemrosesan berulang.',
      benefitBadge: 'Visual Graph & 5 Ekspor',
      executionScope: 'Hybrid (Lokal + Online)',
      icon: 'cpu',
      capabilities: [
        'Pemrosesan latar belakang (background worker) dan cache analisis untuk kanvas Node Editor yang responsif',
        'Deteksi task otomatis (Klasifikasi, Regresi, Pengelompokan, Deteksi Anomali, Rangkaian Waktu) dan filter node sesuai task',
        'Registry node otomatis dari scikit-learn serta dukungan plugin eksternal (XGBoost, LightGBM, imbalanced-learn, Optuna, SHAP)',
        'Pemeriksaan dependensi preflight dengan whitelist instalasi aman, riwayat eksperimen SQLite, serta Undo/Redo 50 langkah',
        'Ekspor pipeline multi-format: skrip Python mandiri (.py), Jupyter Notebook (.ipynb), model (.pkl), tabel run (.csv), dan bundel (.zip)',
      ],
    },
    {
      id: 'dataset-profiling',
      title: 'Multi-Format Loader & Data Profiling',
      shortSummary:
        'Muat berkas CSV, Excel, JSON, dan Parquet dengan deteksi delimiter otomatis serta sidik jari SHA-256.',
      description:
        'Memuat berkas dataset CSV, Excel (.xlsx/.xls), JSON, dan Parquet melalui pemilih berkas atau drag-and-drop. Dilengkapi pendeteksian otomatis karakter pemisah (delimiter) dan encoding, tabel pratinjau berpaginasi, sidik jari dataset SHA-256, serta identifikasi tipe dan peran kolom.',
      benefitBadge: 'CSV, Excel, JSON & Parquet',
      executionScope: 'Lokal (Privat)',
      icon: 'database',
      capabilities: [
        'Mendukung multi-format data penelitian: CSV, Excel (.xlsx/.xls), JSON, dan Apache Parquet',
        'Deteksi otomatis encoding berkas dan karakter delimiter umum (koma, titik-koma, tab)',
        'Pratinjau tabel interaktif dan perhitungan sidik jari (fingerprint SHA-256) dataset secara lokal',
        'Identifikasi tipe dan peran setiap kolom (fitur numerik, kategorikal, datetime, ID unik, atau variabel target)',
      ],
    },
    {
      id: 'data-quality-cleaning',
      title: 'Audit Kualitas Data & 4 Strategi Drop Missing',
      shortSummary:
        'Audit nilai kosong vs nilai 0 secara terpisah dan bersihkan dataset dengan 4 strategi tanpa mengubah file asli.',
      description:
        'Pemeriksaan integritas data menyeluruh yang menghitung nilai kosong dan nilai 0 secara terpisah, mendeteksi duplikasi, outlier (IQR/Z-Score), serta matriks korelasi. Dialog Drop Missing Values menyediakan 4 strategi pembersihan yang menyimpan versi Cleaned baru di workspace tanpa menulis ulang file CSV sumber.',
      benefitBadge: '4 Strategi Cleaning',
      executionScope: 'Lokal (Privat)',
      icon: 'sliders',
      capabilities: [
        '4 strategi pembersihan: Drop Baris (aturan any/all), Drop Kolom berbasis ambang, Imputasi (mean/median/mode/interpolasi/per-grup), dan Laporan dampak',
        'Pemisahan analisis antara nilai kosong (missing value) dengan angka 0 yang valid atau mencurigakan secara statistik',
        'Menyimpan versi Cleaned Dataset di workspace sehingga peneliti bebas berpindah antara versi Original dan Cleaned',
        'Normalisasi placeholder umum (-, NA, null, tidak tersedia, #VALUE!) dan parsing angka format Indonesia maupun internasional',
        'Ekspor opsional dataset bersih ke CSV beserta penyimpanan baris yang dibuang ke berkas saudara (<nama>_dropped_rows.csv)',
      ],
    },
    {
      id: 'pre-modeling-diagnostics',
      title: 'Pre-Modeling Diagnostics & Leakage Check',
      shortSummary:
        'Analisis distribusi fitur, keseimbangan kelas target, dan pemeriksaan dini risiko kebocoran data.',
      description:
        'Menyajikan diagnostik karakteristik dataset sebelum pemodelan Machine Learning: ikhtisar tipe data, sebaran distribusi fitur, keseimbangan kelas (class balance), pemeriksaan risiko kebocoran data (data leakage warnings), serta panduan pembagian train-test dan seleksi fitur.',
      benefitBadge: 'Leakage & Split Guidance',
      executionScope: 'Lokal (Privat)',
      icon: 'zap',
      capabilities: [
        'Visualisasi interaktif distribusi statistik kolom numerik (histogram) dan evaluasi keseimbangan kelas target',
        'Pemeriksaan dini risiko kebocoran data (Data Leakage Check) sebelum melatih model supervised',
        'Panduan analitis skema pembagian data (train-test split) dan tahapan pra-pemrosesan (scaling/encoding)',
        'Petunjuk seleksi fitur (Feature Selection Hints) dan definisi masalah (Problem Definition) secara terstruktur',
      ],
    },
    {
      id: 'editor-analysis',
      title: 'Editor Analysis & Notebook Kernel PyPI (Diperkuat v2.0)',
      shortSummary:
        'Editor kode Python bergaya notebook dengan penguatan event Qt, autosave, manajemen kernel, dan instalasi PyPI.',
      description:
        'Editor interaktif bergaya Jupyter Notebook dengan tahapan terstruktur (Data Understanding, Cleaning, EDA, Feature Engineering, Metode Algoritma, Evaluasi Model). Pada v2.0.0, koneksi kontrol dan penanganan event Qt untuk editor kode, cell notebook, autosave, eksekusi, serta pengelolaan kernel lokal diperkuat.',
      benefitBadge: 'Notebook .ipynb & PyPI',
      executionScope: 'Hybrid (Lokal + Online)',
      icon: 'file-text',
      capabilities: [
        'Penguatan penanganan event Qt di v2.0.0 untuk editor kode, cell notebook, fitur autosave, dan mulai ulang kernel Python',
        'Template kode Python terstruktur yang dapat diedit, dijalankan per langkah, atau dipulihkan ke kondisi awal',
        'Eksekusi kode lokal pada salinan dataset dengan keluaran teks konsol dan grafik visualisasi Matplotlib',
        'Pemasangan pustaka Python tambahan dari PyPI langsung di lingkungan proyek (contoh: pip install seaborn atau xgboost)',
        'Dukungan penuh untuk membuka dan menyimpan berkas notebook standar (.ipynb)',
      ],
    },
    {
      id: 'ml-intelligence',
      title: 'ML Intelligence & Evaluasi Kandidat Model',
      shortSummary:
        'Perkirakan tugas ML berdasarkan karakteristik dataset dan bandingkan evaluasi empiris algoritma kandidat.',
      description:
        'Memperkirakan jenis tugas Machine Learning berdasarkan karakteristik dataset dan variabel target yang dipilih, lalu menampilkan metode algoritma kandidat beserta hasil evaluasi empiris sebagai bahan pertimbangan peneliti.',
      benefitBadge: 'Auto-Task & Evaluasi ML',
      executionScope: 'Lokal (Privat)',
      icon: 'bar-chart',
      capabilities: [
        'Deteksi otomatis jenis tugas prediktif (Klasifikasi Biner/Multikelas, Regresi, Clustering, Anomaly Detection)',
        'Rekomendasi metode kandidat terbaik mulai dari Random Forest, Gradient Boosting, hingga Logistic Regression dan Ensemble',
        'Penyajian hasil metrik evaluasi model lokal (Akurasi, F1-Score, Precision, Recall, ROC AUC, MSE, MAE, R²)',
        'Integrasi hasil rekomendasi langsung ke ringkasan Overview dan draf Research Report',
      ],
    },
    {
      id: 'dataset-search',
      title: 'Pencarian Dataset Publik (Kaggle & Hugging Face)',
      shortSummary:
        'Telusuri katalog dataset publik dari Kaggle dan Hugging Face lalu unduh langsung ke workspace DORA.',
      description:
        'Menelusuri dataset publik berdasarkan kata kunci melalui koneksi internet dari Kaggle, Hugging Face, atau gabungan keduanya lewat pilihan All providers, kemudian mengunduh dataset pilihan langsung ke ruang kerja lokal DORA.',
      benefitBadge: 'Kaggle & Hugging Face',
      executionScope: 'Online (Internet)',
      icon: 'search',
      capabilities: [
        'Pencarian dataset publik lintas penyedia (Kaggle, Hugging Face, atau mode All providers)',
        'Pengiriman kata kunci pencarian secara langsung ke penyedia terkait dan pengunduhan berkas ke workspace lokal',
        'Memudahkan eksplorasi dataset pembanding (benchmark) tanpa perlu berpindah aplikasi',
        'Langsung terhubung dengan alur pratinjau tabel, audit kualitas data, dan analisis di DORA',
      ],
    },
    {
      id: 'academic-research',
      title: 'Academic Research, Papers & Verifikasi SINTA/Scopus',
      shortSummary:
        'Cari dan beri peringkat paper ilmiah dengan penyaringan artikel serta verifikasi akreditasi SINTA, DOAJ, dan Scopus.',
      description:
        'Membentuk kueri dari konteks dan fingerprint dataset untuk mencari serta memberi peringkat publikasi ilmiah dari OpenAlex, Crossref, Semantic Scholar, Europe PMC, OpenAIRE, dan Scopus. Halaman Papers menyediakan penyaringan artikel serta pemeriksaan akreditasi nasional SINTA (SINTA 1 hingga 6) yang ditampilkan terpisah dari indeks DOAJ dan Scopus.',
      benefitBadge: 'SINTA 1-6, DOAJ & Scopus',
      executionScope: 'Online (Internet)',
      icon: 'book-open',
      capabilities: [
        'Pencarian publikasi ilmiah multi-provider dengan deduplikasi otomatis dan perankingan relevansi terhadap dataset',
        'Penyaringan daftar paper dan pemeriksaan status akreditasi jurnal nasional SINTA (peringkat SINTA 1 sampai SINTA 6)',
        'Verifikasi status indeks internasional DOAJ dan Scopus yang dipisahkan secara tegas dari peringkat akreditasi SINTA',
        'Penyimpanan hasil penelusuran literatur dan status skrining jurnal di database SQLite lokal proyek',
      ],
    },
    {
      id: 'landscape-gap-privacy',
      title: 'Research Gap, Laporan PDF & Panel Privasi (v2.0)',
      shortSummary:
        'Pemetaan lanskap riset, analisis Research Gap, ekspor PDF format A4, serta transparansi privasi di halaman Tentang.',
      description:
        'Menyajikan pemetaan Research Landscape, kandidat Research Gap dengan penjelasan otomatis (engine lokal atau Google Gemini berbasis ringkasan analisis), serta kompilasi Research Report berformat Times New Roman 12 pt (A4) siap ekspor ke PDF. Rilis v2.0.0 juga menambahkan bagian Informasi Privasi yang transparan pada halaman Tentang serta skala tampilan UI Scale (Auto atau 70% hingga 150%).',
      benefitBadge: 'Research Gap, PDF & Privasi',
      executionScope: 'Hybrid (Lokal + Online)',
      icon: 'shield',
      capabilities: [
        'Pemetaan visual Research Landscape dan identifikasi kandidat Research Gap otomatis setelah perhitungan insights selesai',
        'Penjelasan berbantuan Gemini (mengirim ringkasan statistik/profil tanpa mengirim file CSV utuh) atau fallback engine lokal',
        'Penyusunan pratinjau Research Report gabungan dan ekspor dokumen ke format PDF standar A4',
        'Panel Informasi Privasi baru pada halaman Tentang (v2.0.0) yang merinci pemrosesan lokal, pencarian online, Gemini, telemetry opsional, visibilitas IP, dan kunci API',
        'Pengaturan UI Scale responsif (Auto atau 70%-150%) melalui menu View serta pintasan Ctrl+=, Ctrl+-, Ctrl+0, dan Ctrl+scroll',
      ],
    },
  ],

  previews: [
    {
      id: 'preview-overview',
      title: 'Overview & Pipeline Workspace (v2.0)',
      caption:
        'Dashboard ringkasan v2.0.0 dengan tata letak baru yang menampilkan kartu status kesiapan dataset aktif (Titanic-dataset.csv), alur 5 langkah kerja terpadu, fitur utama DORA, serta pintasan langsung ke Analisis dan ML Intelligence.',
      aspectRatio: '16/10',
      badge: 'Dashboard v2.0',
      imageSrc: '/screenshots/overview.png',
      tag: 'Overview',
      details: [
        'Tata Letak & Tipografi v2.0 Konsisten',
        'Status Dataset Aktif & Langkah Berikutnya',
        'Alur Kerja 5 Tahapan Terpadu',
        'Navigasi 16 Rute & Skala UI Otomatis',
      ],
    },
    {
      id: 'preview-dataset-search',
      title: 'Dataset Search (Kaggle & Hugging Face)',
      caption:
        'Pencarian dataset publik berdasarkan kata kunci dari Kaggle, Hugging Face, atau mode gabungan All providers, dengan fitur unduh langsung ke workspace lokal DORA.',
      aspectRatio: '16/10',
      badge: 'Dataset Search',
      imageSrc: '/screenshots/dataset-search.png',
      tag: 'Search',
      details: [
        'Pencarian Katalog Kaggle & Hugging Face',
        'Pilihan Filter Provider & All Providers',
        'Unduh Langsung ke Workspace Lokal DORA',
        'Terintegrasi dengan Alur Analisis Dataset',
      ],
    },
    {
      id: 'preview-dataset-upload',
      title: 'Unggah & Muat Dataset Multi-Format',
      caption:
        'Area unggah dataset dengan dukungan pemilih berkas dan drag-and-drop. Menerima CSV, Excel (.xlsx/.xls), JSON, dan Parquet dengan deteksi encoding serta delimiter otomatis.',
      aspectRatio: '16/10',
      badge: 'Multi-Format Loader',
      imageSrc: '/screenshots/dataset-upload.png',
      tag: 'Loader',
      details: [
        'Drag-and-Drop CSV, Excel, JSON & Parquet',
        'Deteksi Otomatis Encoding & Delimiter',
        'Pemrosesan Lokal di Perangkat',
        'Validasi Struktur Sebelum Analisis',
      ],
    },
    {
      id: 'preview-dataset',
      title: 'Pratinjau Dataset & Informasi Kolom',
      caption:
        'Tampilan tabel dataset interaktif disertai tab pemeriksaan kualitas data, informasi tipe dan peran setiap kolom, nilai kosong, outlier, dan korelasi.',
      aspectRatio: '16/10',
      badge: 'Data Profiling',
      imageSrc: '/screenshots/dataset-preview.png',
      tag: 'Dataset',
      details: [
        'Tabel Pratinjau Baris Interaktif',
        'Identifikasi Tipe & Peran Kolom',
        'Tab Kualitas, Missing, Outlier & Korelasi',
        'Penyimpanan Versi Dataset di SQLite',
      ],
    },
    {
      id: 'preview-data-quality',
      title: 'Audit Kualitas Data & Missing Values',
      caption:
        'Pemeriksaan kebersihan dataset secara menyeluruh: pemisahan jumlah nilai kosong dan nilai 0, deteksi duplikasi, serta akses ke 4 strategi Drop Missing Values tanpa mengubah file asli.',
      aspectRatio: '16/10',
      badge: 'Data Quality',
      imageSrc: '/screenshots/dataset-data-quality.png',
      tag: 'Data Quality',
      details: [
        'Skor Kesiapan & Kebersihan Dataset',
        'Pemisahan Nilai Kosong vs Nilai 0',
        '4 Strategi Pembersihan (Cleaned Dataset)',
        'Ekspor Berkas Catatan _dropped_rows.csv',
      ],
    },
    {
      id: 'preview-analysis',
      title: 'Dataset Analysis & Sidik Jari SHA-256',
      caption:
        'Halaman analisis struktur dan distribusi statistik dataset (seperti histogram fitur numerik), kartu sidik jari dataset SHA-256, Problem Definition, serta temuan kualitas pada nilai kosong, duplikasi, dan outlier.',
      aspectRatio: '16/10',
      badge: 'Analysis & Fingerprint',
      imageSrc: '/screenshots/analysis.png',
      tag: 'Analysis',
      details: [
        'Visualisasi Distribusi & Statistik Fitur',
        'Sidik Jari Dataset (SHA-256 Fingerprint)',
        'Kartu Problem Definition & Target Check',
        'Ringkasan Temuan Kosong, Duplikat & Outlier',
      ],
    },
    {
      id: 'preview-editor',
      title: 'Editor Analysis & Kernel PyPI (v2.0)',
      caption:
        'Ruang kerja Editor Analysis bergaya notebook dengan 6 tahapan analisis, dukungan instalasi library PyPI, manajemen kernel Python lokal yang diperkuat di v2.0.0, serta akses ke menu Node Editor di sidebar Alat Tambahan.',
      aspectRatio: '16/10',
      badge: 'Editor Notebook',
      imageSrc: '/screenshots/editor-analysis.png',
      tag: 'Editor Python',
      details: [
        '6 Tahapan Template Analisis & Pemodelan',
        'Menu Alat Tambahan: Editor Analysis & Node Editor',
        'Instalasi Paket PyPI & Dukungan .ipynb',
        'Penanganan Event Qt & Kernel Diperkuat (v2.0)',
      ],
    },
    {
      id: 'preview-node-editor',
      title: 'Visual Node Editor & ML Graph Engine (v2.0)',
      caption:
        'Kanvas Node Editor v2.0.0 untuk merancang alur kerja Machine Learning secara visual dengan port berwarna (data, estimator, model, metrik), deteksi task otomatis, inspektor parameter, dan tabel ringkasan metrik evaluasi.',
      aspectRatio: '16/10',
      badge: 'Baru di v2.0',
      imageSrc: '/screenshots/node-editor.png',
      tag: 'Node Editor',
      details: [
        'Kanvas Visual Drag-and-Drop & Port Berwarna',
        'Deteksi Task Otomatis & Template Dinamis',
        'Background Worker & Cache Analisis Dataset',
        'Ekspor 5 Format (.py, .ipynb, .pkl, .csv, .zip)',
      ],
    },
    {
      id: 'preview-ml',
      title: 'ML Intelligence & Evaluasi Kandidat Model',
      caption:
        'Pendeteksian otomatis tugas Machine Learning berdasarkan dataset dan variabel target, disertai daftar metode kandidat dan perbandingan metrik evaluasi empiris.',
      aspectRatio: '16/10',
      badge: 'Model Candidates',
      imageSrc: '/screenshots/ml-intelligence.png',
      tag: 'ML Intelligence',
      details: [
        'Deteksi Otomatis Tugas Prediktif ML',
        'Rekomendasi Algoritma & Metode Ensemble',
        'Perbandingan Metrik Akurasi, F1 & R²',
        'Bahan Pertimbangan Validasi Eksperimen',
      ],
    },
    {
      id: 'preview-academic',
      title: 'Academic Research, Papers & SINTA/DOAJ',
      caption:
        'Penelusuran, penyaringan, dan perankingan paper ilmiah dari provider akademik (OpenAlex, Crossref, Semantic Scholar, Scopus) dengan pemeriksaan akreditasi nasional SINTA 1 sampai 6 serta indeks DOAJ.',
      aspectRatio: '16/10',
      badge: 'Papers & SINTA',
      imageSrc: '/screenshots/academic-research.png',
      tag: 'Literatur Ilmiah',
      details: [
        'Kueri Otomatis Berbasis Konteks Dataset',
        'Tabel Penyaringan Paper & Detail Artikel',
        'Pemeriksaan Akreditasi Nasional SINTA 1-6',
        'Status Indeks DOAJ & Scopus Terpisah',
      ],
    },
    {
      id: 'preview-landscape',
      title: 'Research Landscape & Tren Publikasi',
      caption:
        'Pemetaan lanskap riset dari kumpulan literatur ilmiah yang menampilkan distribusi metode algoritma dominan, venue publikasi teratas, serta tren publikasi tahunan.',
      aspectRatio: '16/10',
      badge: 'Research Landscape',
      imageSrc: '/screenshots/research-landscape.png',
      tag: 'Landscape',
      details: [
        'Pemetaan Tren Topik, Metode & Venue',
        'Distribusi Algoritma pada Literatur Terkait',
        'Analisis Arah Perkembangan Publikasi',
        'Sinkronisasi Otomatis dengan Hasil Riset',
      ],
    },
    {
      id: 'preview-gap',
      title: 'Research Gap & Penjelasan Riset',
      caption:
        'Identifikasi kandidat celah penelitian (Research Gap) dari literatur yang dianalisis, dilengkapi penjelasan dan saran penelitian dari engine lokal maupun Google Gemini.',
      aspectRatio: '16/10',
      badge: 'Research Gap',
      imageSrc: '/screenshots/research-gap.png',
      tag: 'Research Gap',
      details: [
        'Deteksi Kandidat Celah Penelitian (Gap)',
        'Penjelasan Lokal atau Ringkasan via Gemini',
        'Bukti Ringkas dari Literatur yang Dianalisis',
        'Panduan Validasi Topik & Kebaruan Riset',
      ],
    },
    {
      id: 'preview-report',
      title: 'Laporan Penelitian & Ekspor PDF',
      caption:
        'Penyusunan pratinjau laporan gabungan yang merangkum profil dataset, visualisasi hasil analisis, evaluasi ML, dan tinjauan literatur dalam format dokumen A4 siap ekspor ke PDF.',
      aspectRatio: '16/10',
      badge: 'Ekspor PDF',
      imageSrc: '/screenshots/research-report.png',
      tag: 'Laporan Riset',
      details: [
        'Kompilasi Gabungan Seluruh Tahap Riset',
        'Format Dokumen Standar A4 (Times New Roman)',
        'Pratinjau Tabel, Grafik & Temuan Utuh',
        'Ekspor Dokumen Laporan Riset ke PDF',
      ],
    },
    {
      id: 'preview-about',
      title: 'Tentang DORA & Privasi Keamanan (v2.0)',
      caption:
        'Halaman informasi aplikasi DORA yang pada rilis v2.0.0 dilengkapi bagian Privasi & Keamanan untuk menjelaskan pemrosesan dataset lokal, pencarian online, penjelasan Gemini, telemetry opsional, alamat IP, dan kunci API lokal.',
      aspectRatio: '16/10',
      badge: 'Tentang & Privasi v2.0',
      imageSrc: '/screenshots/about.png',
      tag: 'Tentang & Privasi',
      details: [
        'Ringkasan Ruang Kerja DORA Terpadu',
        'Transparansi Analisis Lokal vs Koneksi Online',
        'Penjelasan Privasi Gemini & Telemetry Opsional',
        'Informasi Visibilitas IP & Kunci API Lokal',
      ],
    },
  ],

  releases: [
    {
      id: 'win-installer-v7',
      os: 'windows',
      osName: 'Microsoft Windows (Rilis Terbaru v7.0)',
      architecture: 'x64 (64-bit)',
      version: 'v7.0.0',
      releaseDate: '30 Oktober 2026',
      fileSize: '98.4 MB',
      filename: 'Data-Overview-Research-Assistant-v7-Setup.exe',
      downloadUrl:
        'https://github.com/NezzyGremory/Data-Overview-Research-Assistant/releases/download/v7.0.0/Data-Overview-Research-Assistant-v7-Setup.exe',
      checksumSha256: '4f92c10b2a8e7d41f5e6123498aeb63afb863bcd5c431547d67441872f03dcda',
      isPrimaryForPlatform: true,
      buttonLabel: 'Download Windows Setup v7.0.0 (.exe)',
      notes:
        'Installer Windows Setup resmi rilis terbaru v7.0.0 dari repositori Data Overview & Research Assistant. Menghadirkan performa engine visual node editor terbaru, kompatibilitas Python 3.13 terkini, serta pembaruan antarmuka desktop yang lebih cepat dan stabil.',
    },
    {
      id: 'win-installer-v6',
      os: 'windows',
      osName: 'Microsoft Windows (Rilis Sebelumnya v6.0)',
      architecture: 'x64 (64-bit)',
      version: 'v6.0.0',
      releaseDate: '18 Oktober 2026',
      fileSize: '95.1 MB',
      filename: 'Data-Overview-Research-Assistant-v6-Setup.exe',
      downloadUrl:
        'https://github.com/NezzyGremory/Data-Overview-Research-Assistant/releases/download/v6.0.0/Data-Overview-Research-Assistant-v6-Setup.exe',
      checksumSha256: '9cf4d44398aeb63afb863bcd5c431547d67441872f03dcda2f9344da6011f0c6',
      isPrimaryForPlatform: false,
      buttonLabel: 'Download Setup v6.0.0 (.exe)',
      notes:
        'Installer Windows resmi (Inno Setup 6) untuk rilis v6.0.0 sebelumnya dari repositori Data-Overview-Research-Assistant. Tersedia sebagai arsip alternatif stabil bagi pengguna yang membutuhkan instalasi versi v6.0.',
    },
  ],

  systemRequirements: [
    {
      osKey: 'windows',
      osName: 'Microsoft Windows (Installer v2.0.0 & Source)',
      minimumOs: 'Windows 10 (64-bit build 19041+) atau Windows 11',
      recommendedOs: 'Windows 11 versi 22H2 atau lebih baru (64-bit)',
      cpu: 'Prosesor 64-bit dual-core (Intel Core i3 / AMD Ryzen 3 atau setara; multi-core disarankan untuk background worker Node Editor)',
      ramMinimum: '4 GB RAM',
      ramRecommended: '8 GB RAM atau lebih (disarankan untuk dataset besar, eksekusi graph ML, dan visualisasi Matplotlib)',
      storage:
        '500 MB ruang kosong disk untuk aplikasi (%LOCALAPPDATA%\\Programs\\DORA) dan data runtime SQLite lokal (%LOCALAPPDATA%\\Dataset Research)',
      network:
        'Analisis dataset utama berjalan secara lokal di perangkat. Koneksi internet diperlukan saat menggunakan pencarian dataset publik (Kaggle/Hugging Face), penelusuran literatur akademik (OpenAlex/Crossref/Semantic Scholar/Scopus/SINTA/DOAJ), penjelasan opsional Google Gemini, dan instalasi paket PyPI.',
      extraRuntime:
        'Tidak memerlukan instalasi Python terpisah jika menggunakan installer Windows Setup v2.0.0. Untuk eksekusi dari source code, lingkungan pengembangan menggunakan snapshot Python 3.13.12 dan PySide6 6.11.2 di dalam .venv.',
    },
  ],

  installationGuides: [
    {
      os: 'windows',
      osName: 'Windows Setup Installer v2.0.0 (Rekomendasi)',
      steps: [
        {
          step: 1,
          title: 'Unduh Installer v2.0.0 Resmi',
          description:
            'Unduh berkas installer Windows v2.0.0 (95.1 MB) melalui tombol Download utama di halaman ini atau langsung dari halaman GitHub Releases resmi.',
        },
        {
          step: 2,
          title: 'Jalankan Pemasangan Per-User',
          description:
            'Klik ganda berkas installer yang telah diunduh. Installer bekerja pada mode pengguna saat ini (PrivilegesRequired=lowest) menuju direktori %LOCALAPPDATA%\\Programs\\DORA sehingga tidak memerlukan hak akses Administrator.',
        },
        {
          step: 3,
          title: 'Pembuatan Shortcut Otomatis',
          description:
            'Setup wizard akan mengekstrak aplikasi utama (DORA.exe), membuat shortcut "Data Overview Research & Assistant v2" pada Desktop serta Start Menu Windows, dan menyiapkan uninstaller.',
        },
        {
          step: 4,
          title: 'Jalankan Aplikasi DORA v2.0.0',
          description:
            'Buka aplikasi dari shortcut Desktop atau Start Menu. Seluruh database SQLite, konfigurasi, dan versi dataset disimpan secara aman di %LOCALAPPDATA%\\Dataset Research.',
        },
      ],
      firstRunTip:
        'Jika Anda memperbarui dari versi sebelumnya (v1.0.0), data lokal pada %LOCALAPPDATA%\\Dataset Research tetap dipertahankan secara otomatis tanpa menghapus proyek atau dataset yang sudah ada.',
      troubleshootingTip:
        'Installer ini belum ditandatangani dengan sertifikat code-signing berbayar, sehingga Windows SmartScreen dapat menampilkan peringatan penerbit belum dikenal. Klik "More info" lalu pilih "Run anyway" setelah memastikan kecocokan hash SHA256.',
    },
    {
      os: 'windows',
      osName: 'Menjalankan dari Source Code (Git & PowerShell)',
      steps: [
        {
          step: 1,
          title: 'Clone Repositori Resmi DORA',
          description:
            'Salin repositori terbaru dari GitHub ke komputer Anda menggunakan Git di Windows PowerShell.',
          codeSnippet: 'git clone https://github.com/NezzyGremory/Data-Overview-Research-Assistant.git',
        },
        {
          step: 2,
          title: 'Buat Virtual Environment (.venv)',
          description:
            'Masuk ke direktori proyek lalu buat dan aktifkan virtual environment Python agar dependensi terisolasi rapi.',
          codeSnippet: 'python -m venv .venv; .\\.venv\\Scripts\\Activate.ps1',
        },
        {
          step: 3,
          title: 'Pasang Dependensi Proyek',
          description:
            'Pasang pustaka yang dibutuhkan (PySide6, pandas, NumPy, SciPy, scikit-learn, PyArrow, matplotlib, httpx).',
          codeSnippet: 'python -m pip install -r requirements.txt',
        },
        {
          step: 4,
          title: 'Luncurkan Aplikasi',
          description:
            'Jalankan entry point aplikasi. Pada v2.0.0, launcher secara otomatis memprioritaskan interpreter dari virtual environment proyek (.venv) saat tersedia.',
          codeSnippet: 'python run.py',
        },
      ],
      firstRunTip:
        'Jika PowerShell memblokir aktivasi skrip .venv, Anda dapat langsung memanggil .\\.venv\\Scripts\\python.exe run.py tanpa perlu menjalankan Activate.ps1.',
      troubleshootingTip:
        'Salin berkas .env.example menjadi .env hanya jika Anda ingin mengatur kunci opsional seperti GEMINI_API_KEY, SEMANTIC_SCHOLAR_API_KEY, atau ELSEVIER_API_KEY.',
    },
  ],

  faqList: [
    {
      id: 'faq-what-is-dora-v2',
      category: 'general',
      question: 'Apa saja pembaruan utama pada Data Overview Research & Assistant v2.0.0?',
      answer:
        'Rilis v2.0.0 menghadirkan enam pembaruan utama dibanding v1.0.0: (1) Tampilan Overview yang lebih konsisten dan responsif baik saat belum ada dataset maupun saat dataset aktif, (2) Navigasi sidebar yang diselaraskan pada seluruh 16 rute menu termasuk Alat Tambahan, Dataset Search, dan Academic Research, (3) Node Editor yang lebih responsif dengan pemrosesan dataset, deteksi task, dan pembuatan template di latar belakang beserta cache analisis, (4) Penguatan koneksi kontrol dan event Qt pada Editor Analisis untuk cell notebook, autosave, eksekusi, dan pengelolaan kernel, (5) Penambahan bagian Informasi Privasi yang transparan pada halaman Tentang, serta (6) Peluncuran aplikasi yang konsisten menggunakan virtual environment proyek (.venv) saat tersedia.',
    },
    {
      id: 'faq-node-editor',
      category: 'general',
      question: 'Apa fungsi fitur Node Editor dan format ekspor apa saja yang didukung?',
      answer:
        'Node Editor adalah ruang kerja penyusunan pipeline Machine Learning berbasis graph/node visual di menu Alat Tambahan. Fitur ini mendeteksi task secara otomatis (Klasifikasi, Regresi, Pengelompokan, Deteksi Anomali, dan Rangkaian Waktu), menyaring node yang relevan dari scikit-learn maupun plugin (XGBoost, LightGBM, imbalanced-learn, Optuna, SHAP), memvalidasi risiko data leakage, serta mencatat riwayat eksperimen di SQLite lengkap dengan Undo/Redo. Hasil graph dapat diekspor ke 5 format: skrip Python mandiri (.py), Jupyter Notebook (.ipynb), model terlatih (.pkl), tabel riwayat run (.csv), dan arsip proyek lengkap (.zip).',
    },
    {
      id: 'faq-dataset-privacy',
      category: 'general',
      question: 'Bagaimana kebijakan privasi dan pemrosesan data pada DORA v2.0.0?',
      answer:
        'Sebagaimana dirinci pada bagian Informasi Privasi di halaman Tentang aplikasi: (1) Analisis dataset utama berjalan secara lokal di perangkat dan tersimpan di database SQLite lokal (%LOCALAPPDATA%\\Dataset Research), (2) Pencarian dataset publik dan literatur hanya mengirim kata kunci pencarian ke penyedia terkait (Kaggle, Hugging Face, OpenAlex, Crossref, Semantic Scholar, Scopus, SINTA, DOAJ), (3) Jika fitur penjelasan Google Gemini dikonfigurasi dan dipakai, aplikasi hanya mengirim ringkasan analisis (profil, statistik, nilai kosong, duplikasi, outlier, korelasi, dan fingerprint) tanpa mengirim file CSV utuh; tanpa API key, penjelasan memakai engine lokal, (4) Telemetry tidak dikirim selama endpoint TELEMETRY_API_URL kosong, dan (5) Kunci API yang disimpan berada di file konfigurasi lokal perangkat.',
    },
    {
      id: 'faq-internet-connection',
      category: 'general',
      question: 'Kapan aplikasi memerlukan koneksi internet dan kapan bekerja secara lokal?',
      answer:
        'Pemuatan dataset lokal (CSV, Excel, JSON, Parquet), profiling, perhitungan statistik, pemeriksaan kualitas data, pembersihan 4 strategi Drop Missing Values, diagnostik pra-pemodelan, eksekusi pipeline Node Editor, serta eksekusi kode di Editor Analysis berjalan secara lokal di komputer pengguna. Koneksi internet diperlukan ketika Anda mencari dan mengunduh dataset publik (Kaggle & Hugging Face), memasang paket tambahan dari PyPI (pip install), mencari paper akademik dan memeriksa status jurnal (SINTA, DOAJ, Scopus), atau meminta penjelasan opsional melalui API Google Gemini.',
    },
    {
      id: 'faq-editor-notebook',
      category: 'general',
      question: 'Apa perbedaan antara Editor Analysis dan Node Editor?',
      answer:
        'Editor Analysis menyediakan ruang kerja berbasis kode Python bergaya Jupyter Notebook (.ipynb) dengan 6 tahapan template yang dapat diedit manual, fitur autosave, instalasi pustaka PyPI, serta output konsol dan grafik Matplotlib. Sementara itu, Node Editor menyediakan kanvas visual berbasis blok/node untuk merangkai alur kerja data, pra-pemrosesan, validasi silang, penyetelan hiperparameter, dan evaluasi model secara modular, yang kemudian dapat diekspor menjadi skrip .py atau notebook .ipynb.',
    },
    {
      id: 'faq-drop-missing-strategy',
      category: 'general',
      question: 'Bagaimana cara kerja 4 strategi Drop Missing Values dan apakah file CSV asli aman?',
      answer:
        'File CSV atau dataset asli Anda tidak pernah ditulis ulang. Saat menggunakan Drop Missing Values, DORA membuat versi dataset baru bernama Cleaned Dataset di workspace sehingga Anda tetap dapat memilih versi Original maupun Cleaned pada halaman Analysis. Tersedia 4 strategi: (1) Drop baris berdasarkan kolom terpilih (mode any atau all), (2) Drop kolom jika proporsi missing melewati ambang batas, (3) Imputasi (mean, median, mode, forward/back fill, interpolasi, konstanta, atau statistik per kelompok), dan (4) Laporan dampak saja tanpa mengubah dataset. Saat versi bersih diekspor ke CSV, baris yang dibuang juga disimpan ke berkas saudara bernama <nama>_dropped_rows.csv.',
    },
    {
      id: 'faq-academic-indexing',
      category: 'support',
      question: 'Bagaimana DORA memverifikasi status akreditasi SINTA, DOAJ, dan Scopus pada literatur ilmiah?',
      answer:
        'Academic Research dan halaman Papers mencari artikel melalui OpenAlex, Crossref, Semantic Scholar, Europe PMC, OpenAIRE, dan Scopus (opsional dengan ELSEVIER_API_KEY). DORA memeriksa status akreditasi jurnal nasional SINTA (SINTA 1 hingga SINTA 6) dan menampilkan status indeks internasional seperti DOAJ serta Scopus secara terpisah, karena status keterindeksan DOAJ/Scopus bukan merupakan peringkat akreditasi SINTA.',
    },
    {
      id: 'faq-admin-install',
      category: 'installation',
      question: 'Di mana lokasi instalasi v2.0.0 dan apakah dibutuhkan hak Administrator?',
      answer:
        'Tidak memerlukan hak Administrator. Installer resmi DORA v2.0.0 memasang aplikasi secara per-user ke dalam direktori %LOCALAPPDATA%\\Programs\\DORA (dengan executable utama DORA.exe) dan menyimpan data runtime lokal di %LOCALAPPDATA%\\Dataset Research.',
    },
    {
      id: 'faq-download-troubleshooting',
      category: 'installation',
      question: 'Bagaimana jika berkas installer tertahan oleh peringatan browser atau Windows SmartScreen?',
      answer:
        'Karena installer didistribusikan tanpa sertifikat code-signing komersial, browser atau Windows SmartScreen dapat menampilkan peringatan pada berkas baru. Pada daftar unduhan browser, klik ikon Titik Tiga (⋯) di samping berkas installer DORA, pilih "Keep", lalu pilih "Keep anyway". Anda juga dapat memverifikasi keaslian berkas menggunakan checksum SHA256 yang tertera pada Pusat Unduhan di halaman ini.',
    },
    {
      id: 'faq-ui-scale-shortcuts',
      category: 'support',
      question: 'Bagaimana cara menyesuaikan ukuran tampilan (UI Scale) pada layar laptop yang berbeda?',
      answer:
        'Buka menu View lalu pilih UI Scale yang selalu tersedia di seluruh 16 rute halaman aplikasi, dengan pilihan Auto (menyesuaikan layar aktif secara otomatis) atau skala manual 70% hingga 150%. Anda juga dapat memakai pintasan keyboard: Ctrl+= untuk memperbesar, Ctrl+- untuk memperkecil, Ctrl+0 untuk kembali ke mode Auto, atau Ctrl+scroll pada area konten. Sidebar navigasi juga otomatis beralih ke mode ikon ringkas saat jendela dipersempit.',
    },
  ],
};

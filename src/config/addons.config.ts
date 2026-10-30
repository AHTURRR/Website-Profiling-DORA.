import { repositoryUrl } from './site.config';

export type AddonCategoryId = 'plugin' | 'integration' | 'template' | 'companion';

export interface AddonCategory {
  id: AddonCategoryId;
  label: string;
  description: string;
  exampleFormat: string;
}

export interface AddonItem {
  id: string;
  name: string;
  summary: string;
  category: AddonCategoryId;
  doraVersionCompatibility: string;
  usageGuide: string;
  guideUrl?: string;
  repositoryUrl: string;
  downloadUrl?: string;
  verifiedAt: string;
  verificationNotes: string;
}

export const addonCategories: AddonCategory[] = [
  {
    id: 'plugin',
    label: 'Plugin',
    description: 'Fungsi atau algoritma tambahan untuk evaluasi maupun eksperimen di luar modul standar DORA.',
    exampleFormat: 'Paket Python / ekstensi registry node',
  },
  {
    id: 'integration',
    label: 'Integrasi',
    description: 'Penghubung ke layanan eksternal, penyimpanan riset, atau penyedia sumber data tambahan.',
    exampleFormat: 'Adapter konektor / modul layanan',
  },
  {
    id: 'template',
    label: 'Template',
    description: 'Pipeline Node Editor atau berkas Jupyter Notebook (.ipynb) siap pakai untuk skenario riset spesifik.',
    exampleFormat: 'Berkas .ipynb / skema pipeline',
  },
  {
    id: 'companion',
    label: 'Perangkat pendamping',
    description: 'Alat terpisah atau utilitas mandiri yang mendukung persiapan data dan pelaporan alur kerja DORA.',
    exampleFormat: 'Utilitas CLI / skrip pendamping',
  },
];

/**
 * Daftar item Add-ons DORA yang telah lulus empat syarat verifikasi:
 * 1. Repositori benar-benar tersedia secara publik.
 * 2. Hubungannya dengan DORA dijelaskan secara eksplisit dalam dokumentasi.
 * 3. Tujuan unduhan atau panduan sesuai dengan fungsi yang diklaim.
 * 4. Klaim kompatibilitas versi DORA memiliki dasar dokumentasi/rilis.
 *
 * Pemeriksaan repositori publik pengembang (NezzyGremory & AHTURRR) per 30 Oktober 2026
 * menunjukkan belum ada repositori terpisah yang memenuhi keempat kriteria di atas sebagai
 * add-on DORA. Kemampuan seperti Kaggle/Hugging Face, OpenAlex/Scopus/SINTA, dan pustaka
 * opsional (XGBoost/LightGBM/Optuna/SHAP) sudah terintegrasi langsung di aplikasi utama.
 */
export const verifiedAddons: AddonItem[] = [];

export const addonsCatalogMeta = {
  lastChecked: '30 Oktober 2026',
  checkedSources: [
    'https://github.com/NezzyGremory?tab=repositories',
    'https://github.com/NezzyGremory/Data-Overview-Research-Assistant',
  ],
  submissionIssuesUrl: `${repositoryUrl}/issues`,
  mainRepositoryUrl: repositoryUrl,
  verificationCriteria: [
    'Repositori publik tersedia dan dapat diakses.',
    'Dokumentasi menjelaskan keterkaitan langsung dengan alur kerja DORA.',
    'Tautan panduan instalasi atau paket unduhan valid.',
    'Rentang kompatibilitas versi DORA (mis. v6.0.0) tercantum jelas.',
  ],
};


# DORA — Official Desktop Software Profiling & Download Center

Website resmi profil produk dan pusat unduhan untuk **DORA** (*Data Overview & Research Assistant*), aplikasi desktop riset data dan eksplorasi literatur ilmiah yang dikembangkan oleh **Metriks Studio**.

Situs ini dibangun sesuai spesifikasi teknis dan etika transparansi dalam dokumen [PRD_Website_Profiling_Software_Desktop.md](./PRD_Website_Profiling_Software_Desktop.md).

---

## 🚀 Fitur Utama Website

1. **Config-Driven Architecture:** Seluruh metadata software, paket rilis, galeri tangkapan layar, spesifikasi sistem, panduan instalasi, dan FAQ dikelola secara terpusat melalui `src/config/product.config.ts`.
2. **Pusat Unduhan Resmi (Windows Focused):**
   - Paket biner resmi Windows Setup Installer (`DatasetResearch-v4.0.0-Setup.exe`).
   - Paket Source Code (`Dataset-Research-v4.0.0.zip`) untuk eksekusi via Windows PowerShell.
   - Dilengkapi validasi integritas biner SHA256 dengan tombol salin interaktif.
3. **Galeri Tangkapan Layar Asli (Lightbox Zoom):** Menampilkan antarmuka nyata DORA (Overview, Dataset Profiling, Editor Notebook, ML Intelligence, Academic Research, Research Landscape & Gap) yang disinkronkan dari repositori resmi.
4. **Persyaratan Sistem Terverifikasi:** Kartu spesifikasi perangkat keras 2 kolom simetris untuk lingkungan Setup Installer dan Developer Source Mode.
5. **Panduan Instalasi Langkah-demi-Langkah:** Tab interaktif untuk Windows Installer dan instalasi mandiri via PowerShell dengan cuplikan perintah CLI terformat.
6. **FAQ & Kebijakan Privasi Lokal:** Penjelasan menyeluruh mengenai arsitektur 100% analisis lokal (SQLite, zero telemetry leakage).
7. **Aksesibilitas & Performa:** Memenuhi standar WCAG AA (kontras warna tajam, navigasi keyboard penuh, semantic HTML5, skip link).

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Vanilla CSS dengan Design Tokens (`src/index.css`)
- **Typography:** *Plus Jakarta Sans* & *JetBrains Mono* (Google Fonts)
- **Icons:** `lucide-react`
- **Linting:** Oxlint & TypeScript strict mode

---

## 💻 Panduan Menjalankan Proyek

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Mode Pengembangan (Development Server)
```bash
npm run dev
```
Buka browser pada tautan `http://localhost:5173`.

### 3. Kompilasi Produksi (Production Build)
```bash
npm run build
```
Hasil build biner web statis siap di-deploy akan berada di folder `dist/`.

### 4. Pratinjau Build Lokal
```bash
npm run preview
```

---

## 🔗 Tautan Terkait

- **Repositori Resmi Software DORA:** [NezzyGremory/Dataset-Research](https://github.com/NezzyGremory/Dataset-Research)
- **Lisensi Software:** MIT License
- **Pengembang:** Metriks Studio (2026)


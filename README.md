# DORA: Official Desktop Software Profiling & Download Center

Website resmi profil produk dan pusat unduhan untuk **DORA v2.0.0** (*Data Overview & Research Assistant*), aplikasi desktop riset data, Visual ML Node Editor, dan eksplorasi literatur ilmiah yang dikembangkan oleh **Metriks Studio**.

Situs ini dibangun sesuai spesifikasi teknis dan etika transparansi dalam dokumen [PRD_Website_Profiling_Software_Desktop.md](./PRD_Website_Profiling_Software_Desktop.md).

---

## Fitur Utama Website

1. **Config-Driven Architecture:** Seluruh metadata software, paket rilis, galeri tangkapan layar, spesifikasi sistem, panduan instalasi, dan FAQ dikelola secara terpusat melalui `src/config/product.config.ts`.
2. **Pusat Unduhan Resmi (Windows Focused):**
   - Paket biner resmi Windows Setup Installer rilis terbaru **v2.0.0** (`Data-Overview-Research-Assistant-v2-Setup.exe`, 95.1 MB) dan arsip rilis sebelumnya **v1.0.0** (`DORA-v1.0.0-Setup.exe`, 92.3 MB).
   - Panduan eksekusi langsung dari Source Code (`git clone https://github.com/NezzyGremory/Data-Overview-Research-Assistant.git`) melalui Windows PowerShell dan `.venv`.
   - Dilengkapi validasi integritas biner SHA256 dengan tombol salin interaktif.
3. **Galeri Tangkapan Layar Asli (14 Layar + Lightbox Zoom):** Menampilkan antarmuka nyata DORA v2.0.0 (Overview 16 Rute, Dataset Search, Dataset Loader, Dataset Profiling, Data Quality, Dataset Analysis SHA-256, Editor Analysis & Node Editor, ML Intelligence, Academic Research SINTA/Scopus, Research Landscape & Gap, Research Report PDF, serta halaman Tentang & Privasi) yang disinkronkan dari repositori resmi.
4. **Persyaratan Sistem Terverifikasi:** Kartu spesifikasi perangkat keras dan perangkat lunak untuk lingkungan Setup Installer (`%LOCALAPPDATA%\Programs\DORA`) serta Developer Source Mode (`Python 3.13.12` & `PySide6 6.11.2`).
5. **Panduan Instalasi 2 Metode:** Tab interaktif untuk Windows Setup Installer v2.0.0 dan instalasi mandiri dari Source Code via Git & PowerShell.
6. **FAQ & Transparansi Privasi v2.0.0:** Penjelasan transparan mengenai pemrosesan dataset lokal (`%LOCALAPPDATA%\Dataset Research`), pencarian online (Kaggle/HF/OpenAlex/SINTA/Scopus), penggunaan ringkasan analisis pada Google Gemini (tanpa mengirim file CSV utuh), telemetry opsional, serta fitur baru Visual Node Editor & ekspor 5 format (`.py`, `.ipynb`, `.pkl`, `.csv`, `.zip`).
7. **Aksesibilitas & Performa:** Memenuhi standar WCAG AA (kontras warna teruji, navigasi keyboard penuh, penutupan modal dengan tombol `Escape`, semantic HTML5, skip link).

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Vanilla CSS dengan Design Tokens (`src/styles/tokens.css`)
- **Typography:** *Plus Jakarta Sans* & *JetBrains Mono* (Google Fonts)
- **Icons:** `lucide-react`
- **Linting:** Oxlint & TypeScript strict mode

---

## Panduan Menjalankan Proyek

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

## Tautan Terkait

- **Repositori Resmi Software DORA:** [NezzyGremory/Data-Overview-Research-Assistant](https://github.com/NezzyGremory/Data-Overview-Research-Assistant)
- **Rilis Resmi Terbaru (v2.0.0):** [GitHub Releases](https://github.com/NezzyGremory/Data-Overview-Research-Assistant/releases)
- **Lisensi Software:** MIT License
- **Pengembang:** Metriks Studio (2026)


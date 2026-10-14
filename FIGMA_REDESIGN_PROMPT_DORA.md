# 🎨 Panduan & Prompt Redesign Figma: DORA Desktop Profiling & Research Suite
> **Dokumen Spesifikasi UI/UX, Panduan Auto Layout & Master Prompt untuk Figma**  
> **Proyek:** DORA (*Data Overview & Academic Research Assistant v5.0.0*)  
> **Target Platform:** Web Desktop (1440px) & Responsif Mobile (390px)  
> **Konsep Desain:** *Modern Dark Slate Luxury, High Readability, Progressive Disclosure & Glassmorphism Blur*

---

## 📑 Daftar Isi
1. [Ringkasan Brief Desain & Filosofi UI/UX](#1-ringkasan-brief-desain--filosofi-uiux)
2. [Design Tokens & Style Guide Figma](#2-design-tokens--style-guide-figma)
3. [Struktur Frame & Layout Grid](#3-struktur-frame--layout-grid)
4. [Prompt & Spesifikasi Komponen per Bagian](#4-prompt--spesifikasi-komponen-per-bagian)
   - [A. Sticky Navigation Bar](#a-sticky-navigation-bar)
   - [B. Hero Section & Pipeline Window Mockup](#b-hero-section--pipeline-window-mockup)
   - [C. Katalog Fitur & Scope Pills](#c-katalog-fitur--scope-pills)
   - [D. Before & After Split Screen Showcase](#d-before--after-split-screen-showcase)
   - [E. Glassmorphism Progressive Disclosure Modal](#e-glassmorphism-progressive-disclosure-modal)
   - [F. Download Center & Banner Windows Defender](#f-download-center--banner-windows-defender)
   - [G. Modal Pop-up Panduan 5 Langkah Windows Defender](#g-modal-pop-up-panduan-5-langkah-windows-defender)
   - [H. Persyaratan Sistem & FAQ Accordion](#h-persyaratan-sistem--faq-accordion)
5. [Master Prompt Siap Tempel (Figma AI / Relume / ChatGPT / Claude)](#5-master-prompt-siap-tempel-figma-ai--relume--chatgpt--claude)

---

## 1. Ringkasan Brief Desain & Filosofi UI/UX

### Masalah Utama Desain Lama:
1. **Cognitive Fatigue & Wall of Text:** Teks penjelasan panjang menumpuk tanpa hierarki yang jelas, memaksa pengguna membaca seluruh materi secara bersamaan.
2. **Ketiadaan Ruang Bernapas (*No Whitespace*):** Jarak antar paragraf sangat rapat, lebar baris melebihi 100 karakter sehingga mata cepat lelah saat berpindah baris.
3. **Ornamen Visual Berlebihan:** Gradasi neon ungu dan biru yang terlalu mencolok dan menyilaukan (*visual noise*), merusak kontras keterbacaan teks.

### Solusi Desain Baru:
1. **Dark Slate Aesthetic (`#0F172A`):** Latar belakang gelap berkelas yang tenang, hemat daya, dan memberikan kontras tajam pada teks putih dan aksen cyan.
2. **Prinsip *Progressive Disclosure*:** Informasi kompleks diringkas menjadi kartu-kartu mini. Detail mendalam hanya ditampilkan saat pengguna mengklik tombol *"Lihat Detail →"*.
3. **Glassmorphism Blur (`backdrop-filter: blur(16px)`):** Saat modal dibuka, latar belakang meredup dan buram (*blurred*), mengunci fokus mata pengguna secara eksklusif ke modal informasi.
4. **Border Gradasi Halus:** Border transparan 1px dengan gradasi linier Cyan (`#38BDF8`) ke Soft Violet (`#C084FC`) yang memancarkan kesan produk perangkat lunak modern.

---

## 2. Design Tokens & Style Guide Figma

Siapkan *Local Variables* atau *Color Styles* di Figma dengan kode warna berikut:

### A. Palet Warna (Color Palette)
| Token Name | Hex Code | Opacity | Deskripsi / Penggunaan |
| :--- | :--- | :--- | :--- |
| `bg/canvas` | `#090D16` | 100% | Latar belakang canvas halaman terluar |
| `bg/surface-dark` | `#0F172A` | 100% | Latar belakang frame utama & kartu (Dark Slate) |
| `bg/surface-card` | `#1E293B` | 65% | Kartu komponen, dropdown, item list |
| `bg/glass-modal` | `#0F172A` | 88% | Latar modal kaca (gunakan Background Blur 16-20px) |
| `accent/cyan` | `#38BDF8` | 100% | Warna brand primer, highlight, icon, glowing |
| `accent/blue-cta` | `#2563EB` | 100% | Tombol utama unduhan dan konfirmasi |
| `accent/violet` | `#C084FC` | 100% | Aksen gradasi sekunder border kaca |
| `status/success` | `#10B981` | 100% | Checklist hijau, indikator lokal/privat |
| `status/warning` | `#F59E0B` | 100% | Banner Windows Defender, badge alert |
| `status/danger` | `#EF4444` | 100% | Titik tombol window merah, tanda silang |
| `text/primary` | `#FFFFFF` | 100% | Judul, heading, teks penting |
| `text/secondary` | `#94A3B8` | 100% | Deskripsi tubuh, subtitle, label meta |
| `text/muted` | `#64748B` | 100% | Caption kecil, copyright, kode checksum |
| `border/subtle` | `#334155` | 40% | Border kartu standar |
| `border/glow-cyan`| `#38BDF8` | 35% | Border kartu terpilih atau modal aktif |

### B. Tipografi (Typography Styles)
- **Font Family Utama:** `Plus Jakarta Sans` (atau `Inter`)
- **Font Family Kode / Monospace:** `JetBrains Mono` (atau `Fira Code`)

| Style Name | Font | Size | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Display/Hero` | Plus Jakarta Sans | 48px | 56px (115%) | 800 (Extra Bold) | -0.025em |
| `Heading/H1` | Plus Jakarta Sans | 32px | 40px (125%) | 800 (Bold) | -0.02em |
| `Heading/H2` | Plus Jakarta Sans | 24px | 32px (133%) | 700 (Bold) | -0.01em |
| `Heading/H3` | Plus Jakarta Sans | 18px | 26px (144%) | 700 (SemiBold) | 0 |
| `Body/Regular` | Plus Jakarta Sans | 15px | 24px (160%) | 400 (Regular) | 0 |
| `Body/Medium` | Plus Jakarta Sans | 14px | 22px (155%) | 500 (Medium) | 0 |
| `Body/SemiBold`| Plus Jakarta Sans | 14px | 20px (142%) | 600 (SemiBold) | 0 |
| `Badge/Caps` | Plus Jakarta Sans | 11px | 16px (145%) | 700 (Bold) | +0.08em (Uppercase) |
| `Code/Mono` | JetBrains Mono | 13px | 18px (138%) | 500 (Medium) | 0 |

### C. Efek & Bayangan (Effects & Shadows)
1. **`Glow/Cyan-Modal`**:
   - Effect 1 (Drop Shadow): `X: 0, Y: 24, Blur: 64, Spread: -12, Color: #000000 (65%)`
   - Effect 2 (Drop Shadow): `X: 0, Y: 0, Blur: 32, Spread: 0, Color: #38BDF8 (20%)`
   - Effect 3 (Background Blur): `Blur: 20px`
2. **`Border/Gradient-Glass`**:
   - Stroke: 1px Inside
   - Fill: Linear Gradient (135°): `#38BDF8` (85%) ➔ `#C084FC` (85%)
3. **`Glow/Defender-Amber`**:
   - Effect: `X: 0, Y: 0, Blur: 24, Spread: 0, Color: #F59E0B (25%)`

---

## 3. Struktur Frame & Layout Grid

### Frame Desktop (1440px):
- **Width:** 1440px
- **Layout Grid:** 12 Kolom
  - Margin: 120px
  - Gutter: 24px
  - Container Max-Width: 1200px
- **Vertical Spacing:** Kelipatan 8px (Section Padding: 80px - 100px)

### Frame Mobile (390px):
- **Width:** 390px
- **Layout Grid:** 4 Kolom
  - Margin: 20px
  - Gutter: 16px

---

## 4. Prompt & Spesifikasi Komponen per Bagian

Gunakan rincian instruksi di bawah ini saat mendesain manual di Figma atau tempelkan ke tools AI:

---

### A. Sticky Navigation Bar
- **Figma Auto Layout:** Horizontal, Height 72px, Space-between, Padding: 0 120px, Fixed to top.
- **Background:** `#0F172A` (90% opacity) dengan Background Blur 12px, Border-bottom: 1px solid `rgba(255,255,255,0.08)`.
- **Elemen:**
  - **Kiri (Logo Brand):** Icon box persegi rounded-10px gradient cyan, teks `"DORA"` (Bold 18px), pill badge mono `"v5.0.0"`.
  - **Tengah (Menu Navigasi):** Auto layout horizontal gap 24px.
    - *Fitur*
    - *Redesign UI/UX* ➔ Desain khusus: Pill chip dengan background `rgba(56,189,248,0.15)`, text `#38BDF8`, border `rgba(56,189,248,0.3)`.
    - *Pratinjau*
    - *Download*
    - *Spesifikasi*
    - *FAQ*
  - **Kanan (Action CTA):** Tombol kecil outline *"GitHub Repo"* dengan ikon external link.

---

### B. Hero Section & Pipeline Window Mockup
- **Figma Layout:** 2 Kolom (55% Teks Kiri, 45% Mockup Kanan), Gap 48px, Align Center.
- **Konten Kiri:**
  1. **Release Pill:** Badge rounded-full dengan green pulse dot: `"Versi Resmi v5.0.0 Tersedia • Metriks Studio"`.
  2. **Headline Utama:**  
     `"Eksplorasi Dataset, Eksperimen Machine Learning & Riset Literatur"`  
     *Highlight kata "Machine Learning" dengan gradasi teks Cyan ke Royal Blue.*
  3. **Deskripsi Singkat:** 16px/26px, warna `#94A3B8`, max-width 560px:  
     `"Aplikasi desktop native yang terhubung ke jaringan internet untuk riset dataset cerdas, ML Intelligence & estimasi model prediktif, serta penelusuran literatur akademik."`
  4. **CTA Button Group:**
     - **Tombol Primer:** Height 52px, Radius 12px, Background Gradient `#2563EB` ➔ `#1D4ED8`, ikon Download (22px), teks 2 baris: *"Download untuk Windows"* (Bold 15px) & *"v5.0.0 • x64 • 78.4 MB"* (12px Muted).
     - **Tombol Sekunder:** Height 52px, Radius 12px, Surface dark, Border subtle, teks *"Eksplorasi Fitur →"*.
  5. **Windows Defender Quick Hint:**  
     Box rounded-full dengan background `rgba(245,158,11,0.12)`, border `rgba(245,158,11,0.35)`, teks amber 13px:  
     `"⚠️ Gagal download atau tertahan Windows Defender / SmartScreen? Buka Panduan 5 Langkah →"`
  6. **4 Trust Badges (Horizontal Row):**
     - 🌐 Terkoneksi Jaringan Internet
     - ✨ ML Intelligence & Estimator Online
     - 📖 Riset Literatur & Jurnal Akademik
     - 🛡️ Dataset Privat Aman di Komputer
- **Konten Kanan (Window Mockup Card):**
  - Frame Card dengan Radius 16px, background `#0F172A`, border `rgba(56,189,248,0.25)`.
  - **Header Bar:** 3 titik (Merah `#EF4444`, Kuning `#F59E0B`, Hijau `#10B981`), judul window `"DORA v5.0.0 — Data Overview & Research Assistant (PySide6)"`, dan badge cyan `"CONNECTED PIPELINE"`.
  - **Body Stat Bar:** 4 kotak stat (Active Dataset, Data Quality 96.4%, ML Task Classification, Academic Papers 28 Verified).
  - **Pipeline Track Progress:**
    - Stage 1: Dataset Profiling & Imputation [Local Workspace]
    - Stage 2: Dataset Search & Discovery (Kaggle & HF) [Online Network]
    - Stage 3: ML Intelligence & Model Estimator [Online Network]
    - Stage 4: Literature & Journal Ranking (Scopus & SINTA) [Online Network]

---

### C. Katalog Fitur & Scope Pills
- **Layout:** Grid 3 Kolom x 2 Baris, Gap 24px.
- **Komponen Kartu Fitur:**
  - Auto Layout Vertical, Padding 24px, Radius 16px, Surface `#1E293B` (60%), Border 1px `rgba(255,255,255,0.08)`.
  - **Top Row:** Icon wrapper bulat (48px) dengan glow warna + Benefit Tag (contoh: *"Kaggle & Hugging Face"*).
  - **Judul:** Bold 18px putih.
  - **Deskripsi:** 14px abu-abu (`#94A3B8`), max 3 baris.
  - **Footer Scope Pill (PENTING):**
    - 🟢 `Lokal (Privat)` ➔ Background hijau transparan, ikon perisai.
    - 🔵 `Online (Internet)` ➔ Background biru transparan, ikon globe.
    - 🟣 `Hybrid (Lokal + Online)` ➔ Background ungu transparan, ikon petir.

---

### D. Before & After Split Screen Showcase (Inti Desain)
- **Judul Section:**  
  `"Transformasi Keterbacaan: Progressive Disclosure & Glassmorphism Blur"`
- **Layout:** Grid 2 Kolom Sejajar (50% : 50%), Gap 24px, Height 580px.

#### 1. Frame Kiri: "SISI KIRI: DESAIN LAMA (Penuh & Sulit Dibaca)"
- **Badge Status:** Background merah gelap `#2B0B14`, text merah `#F87171`, titik merah.
- **Viewport Canvas:** Latar gelap keunguan dengan 2 mesh orbs neon pink & biru yang menyilaukan (*cluttered glow*).
- **Konten:**
  - Paragraf teks sangat panjang dan lebar, font size seragam tanpa jarak yang memadai.
  - 3 kotak padat bertuliskan teks tanpa jeda: *"Profiling & Monitoring"*, *"Security DORA Regulation"*, *"Feature Navigation"*.
  - Footer kritik visual: *"❌ Evaluasi UX: Teks melebar, tanpa whitespace, kontras silau, mata cepat lelah."*

#### 2. Frame Kanan: "SISI KANAN: REKOMENDASI UI BARU (Dengan Pop-up Interaktif)"
- **Badge Status:** Background biru gelap `#0C2340`, text cyan `#38BDF8`, titik cyan.
- **Viewport Canvas:** Dark Slate `#0F172A` bersih, tipografi lega, hero mini dengan teks rapi.
- **3 Kartu Ringkas di Bawah:**
  - Kartu 1: `🔍 Profiling & Monitoring` + Ikon `+` + Tombol *"Lihat Detail →"*.
  - Kartu 2: `🛡️ Security DORA Regulation` + Ikon `+` + Tombol *"Lihat Detail →"*.
  - Kartu 3: `🧭 Feature Navigation` + Ikon `+` + Tombol *"Lihat Detail →"*.
- **Backdrop Overlay Blur:** Lapisan di atasnya dengan fill `rgba(15, 23, 42, 0.75)` dan **Layer Blur 10px**.
- **Pop-up Modal Compact (Melayang di Tengah):**  
  Lihat spesifikasi detail pada Bagian E di bawah.

---

### E. Glassmorphism Progressive Disclosure Modal
Ini adalah komponen kunci untuk mengatasi kelelahan membaca:
- **Ukuran Frame:** Width 380px, Auto Height, Radius 20px.
- **Background:** `rgba(15, 23, 42, 0.88)` dengan Background Blur 20px.
- **Border:** 1px Inside Gradient Linear (135°): `#38BDF8` (90%) ke `#C084FC` (90%).
- **Shadow:** Drop shadow ganda (hitam pekat 60% + cyan ambient glow 25%).
- **Isi Komponen (Auto Layout Vertical, Padding 24px, Gap 16px):**
  1. **Header Row:**
     - Judul: `"🔍 Profiling & Monitoring"` (Bold 18px putih).
     - Tombol Tutup: Lingkaran 28px dengan ikon `"✕"` (`#94A3B8`).
  2. **Tagline:**  
     `"Inspeksi performa real-time dan evaluasi metrik dataset komprehensif."` (13px `#94A3B8`).
  3. **3 Poin Checklist Hijau (Auto Layout Vertical, Gap 10px):**
     - Row 1: Bulatan hijau kecil dengan checkmark putih + Teks `"1. Real-time debugging & frame inspection"`.
     - Row 2: Bulatan hijau kecil dengan checkmark putih + Teks `"2. Live performance metrics"`.
     - Row 3: Bulatan hijau kecil dengan checkmark putih + Teks `"3. Resource management"`.
  4. **Primary CTA Button:**  
     Width 100%, Height 44px, Radius 10px, Background Gradient Cyan-ke-Biru, Teks `"Coba Sekarang →"` (Bold 14px putih).

---

### F. Download Center & Banner Windows Defender
- **Banner Bantuan (Trigger Banner):**
  - Letak: Tepat di atas tabel kartu rilis.
  - Background: Gradient `#0F1E36` ke `#172D50`, Border `rgba(245,158,11,0.5)`, Radius 14px, Padding 20px.
  - Kiri: Badge `"⚠️ PANDUAN RESMI"`, Judul `"Gagal Download / Terblokir Windows Defender & SmartScreen?"`, Subtitle `"Klik di sini untuk panduan 5 langkah mudah mengatasi peringatan browser."`.
  - Kanan: Tombol oranye-amber `"Buka Panduan Solusi →"`.
- **Kartu Rilis Unduhan:**
  - Kartu Installer: Label *"Windows Setup (.exe)"*, Pill *"Rekomendasi Utama"*, Box Checksum SHA256 dengan tombol copy, Tombol Download biru besar.
  - Kartu Source Code: Label *"Source Code (.zip)"*, tombol unduh sekunder.

---

### G. Modal Pop-up Panduan 5 Langkah Windows Defender
- **Ukuran Frame:** Width 720px, Radius 20px, Background Dark Slate `#0F172A`, Border `#38BDF8` (30%).
- **Header:** Icon Shield Alert warna amber, Judul `"Gagal Unduh / Terblokir Windows Defender & SmartScreen?"`, tombol silang `✕`.
- **5 Stepper Navigation Pills (Horizontal):**
  - Tab 1: Defender Check
  - Tab 2: Browser Warning
  - Tab 3: Klik Titik Tiga (⋯)
  - Tab 4: Pilih Keep
  - Tab 5: Keep Anyway
- **Content Box per Langkah (Lengkap dengan Mockup Visual):**
  - Menampilkan visual bilah unduhan browser Edge / Chrome.
  - **Highlight Box Khusus:** Badge aksen pada kata kunci:  
    `DORA-v5.0.0-Setup.exe` (Cyan), `Titik Tiga (⋯)` (Amber), `Keep` (Blue), `Panah Bawah (∨)` (Purple), `Keep anyway` (Green).
- **PowerShell Box:** Cuplikan hitam dengan kode:  
  `curl.exe -L -o "DORA-v5.0.0-Setup.exe" "https://..."` dan tombol *"Salin Perintah"*.
- **Footer Actions:** Tombol *"Coba Unduh Ulang"*, *"Buka Mirror GitHub"*, dan *"Tutup"*.

---

## 5. Master Prompt Siap Tempel (Figma AI / Relume / ChatGPT / Claude)

Salin (*copy*) teks prompt di bawah ini untuk dimasukkan langsung ke prompt engine AI (Figma AI, Relume, Galileo, ChatGPT, atau Claude):

```text
Act as a Principal UI/UX Designer and Design Systems Architect.
Design a high-fidelity desktop website UI (1440px) for "DORA" (Data Overview & Academic Research Assistant v5.0.0 by Metriks Studio).

THEME & AESTHETICS:
- Ultra-modern Dark Slate Luxury palette (#090D16 background, #0F172A card surfaces, #1E293B borders).
- Glowing electric cyan (#38BDF8) and soft violet (#C084FC) gradient accents.
- Apple-grade Glassmorphism Blur (backdrop-filter: blur(16px), translucent surface rgba(15,23,42,0.85), subtle 1px glowing gradient borders).
- Typography: Plus Jakarta Sans for UI/Headlines, JetBrains Mono for technical codes and checksums.

CORE SECTIONS TO DESIGN:

1. STICKY NAVBAR (Height 72px):
   - Brand logo with cyan glowing mark, "DORA" bold text, and "v5.0.0" mono pill badge.
   - Desktop menu: Fitur, "Redesign UI/UX" (styled as an active glowing cyan pill badge), Pratinjau, Download, Spesifikasi, FAQ.
   - Action: "GitHub Repo" outlined button with external link icon.

2. HERO SECTION:
   - Green-pulse badge: "Versi Resmi v5.0.0 Tersedia • Metriks Studio".
   - Headline: "Eksplorasi Dataset, Eksperimen Machine Learning & Riset Literatur" (gradient text on 'Machine Learning').
   - High-contrast primary CTA button "Download untuk Windows" with nested version/size pill + secondary "Eksplorasi Fitur".
   - Amber warning banner link: "⚠️ Gagal download atau tertahan Windows Defender / SmartScreen? Buka Panduan 5 Langkah →".
   - 4 Trust Badges: Connected Internet, ML Intelligence Online, Academic Literature, Private Local Dataset.
   - Right Side: Sleek macOS/Windows hybrid window mockup showing 4-stage pipeline execution bars (Profiling, Discovery, ML Intelligence, Literature Ranking).

3. BEFORE & AFTER SPLIT-SCREEN REDESIGN SHOWCASE (KEY SECTION):
   - Left Half ("DESAIN LAMA - Penuh & Sulit Dibaca"):
     * Cramped wall of text, wide paragraphs (>100 chars/line) causing cognitive fatigue.
     * Overwhelming, harsh neon magenta/purple glowing gradient meshes.
     * Cluttered blocks for "Profiling & Monitoring", "Security DORA Regulation", and "Feature Navigation".
   - Right Half ("REKOMENDASI UI BARU - Progressive Disclosure"):
     * Clean Dark Slate (#0F172A), spacious whitespace, crisp typography hierarchy.
     * 3 compact bottom feature cards with plus (+) icons and "Lihat Detail →" buttons.
     * Full background dimmed and blurred (backdrop-filter: blur(10px)).
     * Floating in center: Compact Glassmorphism Pop-up Modal with cyan & soft violet gradient border:
       - Header: "🔍 Profiling & Monitoring" + close icon (✕).
       - Tagline: "Inspeksi performa real-time dan evaluasi metrik dataset komprehensif."
       - 3 Green Checklist Points:
         1. Real-time debugging & frame inspection
         2. Live performance metrics
         3. Resource management
       - Vibrant glowing cyan CTA button: "Coba Sekarang →".

4. DOWNLOAD CENTER & DEFENDER MODAL:
   - Amber-themed Help Banner: "⚠️ Gagal Download / Terblokir Windows Defender & SmartScreen? Klik di sini untuk Panduan 5 Langkah".
   - Release cards for "Windows Setup (.exe)" with SHA256 copyable hash and "Source Code (.zip)".
   - Pop-up Stepper Modal (720px wide) guiding users through 5 steps:
     Step 1 (Defender Check) -> Step 2 (Browser Warning) -> Step 3 (Click Three Dots ⋯) -> Step 4 (Select Keep) -> Step 5 (Click Show More ∨ -> Keep Anyway).
     Highlight badges on keywords: DORA-v5.0.0-Setup.exe, Titik Tiga (⋯), Keep, Panah Bawah (∨), Keep anyway. Include PowerShell curl command box.

Provide the design in fully responsive Auto Layout frames with comprehensive component variants, interactive hover states, and WCAG AA contrast compliance.
```

---

## 6. Tips Eksekusi di Figma

1. **Membuat Efek Glassmorphism Border Otomatis di Figma:**
   - Pilih Frame modal ➔ Atur **Fill** ke `#0F172A` dengan opacity **85%**.
   - Tambahkan Effect **Background Blur: 20px**.
   - Tambahkan **Stroke 1px**, pilih tipe **Linear Gradient** menyilang dari sudut kiri-atas ke kanan-bawah:
     - Titik 1: `#38BDF8` (Cyan, 90%)
     - Titik 2: `#C084FC` (Violet, 80%)
2. **Membuat Efek Backdrop Blur Latar:**
   - Buat satu rectangle seukuran frame viewport (1440 x 900px).
   - Atur Fill ke `#0F172A` dengan opacity **70%**.
   - Tambahkan Effect **Background Blur: 12px**.
   - Letakkan modal pop-up tepat di atas rectangle blur ini.
3. **Mengatur Interaktivitas di Figma Prototype:**
   - Tarik connection panah dari tombol *"Lihat Detail →"* pada kartu fitur ke Frame Modal.
   - Atur Action: **Open Overlay**.
   - Overlay Position: **Centered**.
   - Centang opsi: **Close when clicking outside** & **Add background: #0F172A (70%) with Background blur: 10px**.
   - Animation: **Dissolve** atau **Smart Animate** (Ease Out 250ms).
   - Tarik connection dari tombol *"✕"* ke **Close Overlay**.

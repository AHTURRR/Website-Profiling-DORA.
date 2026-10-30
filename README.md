# DORA · Metriks Studio

Website profil dan pusat unduhan Data Overview & Research Assistant, dilengkapi katalog Add-ons, halaman tim pengembang (`/tim`), serta informasi repositori utama DORA.

## Menjalankan

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

Stack: React 19, TypeScript 6, Vite 8, CSS, dan ikon Lucide. Tidak ada dependensi produksi tambahan.

## Halaman & Bagian Utama

- `/`:
  - **Hero & Panggung Produk**: mockup aplikasi desktop DORA dengan 4 tampilan asli (`Overview`, `Dataset`, `Node Editor`, `Research`), tombol perbesar layar penuh, dan strip ilustrasi alur kerja 5 tahap.
  - **Fitur & Workflow Node Editor**: ringkasan tiga disiplin riset utama, direktori 10 modul bawaan, serta sorotan Visual Node Editor.
  - **Pratinjau (Galeri)**: penjelajah 14 tangkapan layar asli DORA.
  - **Katalog Add-ons (`#addons`)**: struktur 4 jenis ekstensi opsional (`Plugin`, `Integrasi`, `Template`, `Perangkat pendamping`) beserta empty state jujur dan kriteria verifikasi katalog.
  - **Pusat Unduhan, Spesifikasi, Panduan & FAQ**: installer Windows `v6.0.0`, verifikasi checksum SHA256, panduan instalasi installer vs source code, dan 10 FAQ produk.
  - **Repositori Utama (`#github`)**: akses ke kode sumber aplikasi desktop, catatan rilis, GitHub Issues, halaman tim, serta pembedaan tegas antara repositori aplikasi desktop (`NezzyGremory/Data-Overview-Research-Assistant`) dan repositori website profil (`AHTURRR/Website-Profiling-DORA.`).
- `/tim`: pengantar Metriks Studio berdasarkan `credits.json`, enam anggota tim pengembang dengan label `Bio dummy` terlihat jelas, monogram pengganti foto, sumber kredit resmi, Special Thanks (`UIN K.H. Abdurrahman Wahid Pekalongan`), serta navigasi kembali ke beranda dan repositori.
- URL yang tidak dikenal menampilkan halaman pemulihan 404 dengan tautan kembali ke beranda.

## Mengubah Konten

- `src/config/addons.config.ts`: kategori dan daftar item Add-ons terverifikasi (`verifiedAddons`). Saat ini berisi array kosong (`[]`) karena belum ada repositori add-on terpisah yang terverifikasi; tambahkan objek `AddonItem` di file ini setelah lulus 4 kriteria verifikasi.
- `src/config/team.config.ts`: nama, peran, monogram, pengantar Metriks Studio, dan bio anggota. **Bio masih dummy** (`draftBio`) dan ditandai label `Bio dummy` pada setiap kartu profil.
- `src/config/product.config.ts`: fitur, 14 screenshot pratinjau, persyaratan sistem, panduan instalasi, FAQ, dan paket rilis.
- `src/config/site.config.ts`: URL repositori aplikasi desktop, URL repositori website, dan metadata rilis utama (`v6.0.0`).
- `src/styles/site.css` & `src/styles/themes-motion.css`: tata letak responsif, tema gelap/terang (`dora-theme`), pencahayaan hero, koreografi motion, dan dukungan `prefers-reduced-motion`.
- `DESIGN.md`: arah visual, alasan keputusan desain dan motion, serta catatan verifikasi sumber.

## Sumber Resmi

- [Repositori Aplikasi Desktop DORA](https://github.com/NezzyGremory/Data-Overview-Research-Assistant)
- [Kredit Pengembang (`credits.json`)](https://github.com/NezzyGremory/Data-Overview-Research-Assistant/blob/main/app/ui/data/credits.json)
- [Rilis v6.0.0](https://github.com/NezzyGremory/Data-Overview-Research-Assistant/releases/tag/v6.0.0)
- [Repositori Website Profil](https://github.com/AHTURRR/Website-Profiling-DORA.)
- [Referensi Visual Outcrowd](https://dribbble.com/shots/26742281-Website-for-an-Incident-Management-Platform)

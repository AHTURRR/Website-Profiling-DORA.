# DORA · Metriks Studio

Website profil dan pusat unduhan Data Overview & Research Assistant, dengan halaman tim pengembang dan akses ke repositori GitHub resmi.

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

Stack: React 19, TypeScript 6, Vite 8, CSS, dan ikon Lucide. Tidak ada dependensi produksi baru untuk redesign ini.

## Halaman

- `/`: profil produk, modul fitur, galeri, installer, spesifikasi, panduan, repositori, dan FAQ.
- `/tim`: enam anggota tim dari kredit resmi, Special Thanks, dan tautan kontribusi.
- URL yang tidak dikenal menampilkan pesan pemulihan dan tautan beranda.

Navigasi menggunakan anchor biasa sehingga mendukung riwayat browser. Rewrite di `vercel.json` melayani akses langsung dan refresh `/tim`. Hosting lain perlu mengarahkan rute aplikasi ke `index.html`. Pesan pemulihan aplikasi tidak mengubah respons HTTP menjadi status 404.

## Mengubah konten

- `src/config/team.config.ts`: nama, peran, monogram, dan bio anggota. **Bio masih dummy** dan ditandai di halaman. Ganti `draftBio` dengan informasi yang disetujui pemilik profil dan sesuaikan label dummy saat konten siap dipublikasikan.
- `src/config/product.config.ts`: fitur, screenshot, persyaratan, panduan, FAQ, dan paket rilis.
- `src/config/site.config.ts`: presentasi rilis utama dari konfigurasi produk serta tanggal pembaruan aset. Komponen baru menyesuaikan label versi lama dalam konten dengan versi rilis utama.
- `src/styles/site.css`: tampilan dua halaman dan motion CSS.
- `src/styles/themes-motion.css`: tema terang/gelap, navbar mengambang, cahaya hero, dan penyesuaian reduced motion. Tombol matahari/bulan menyimpan pilihan di `localStorage` dengan key `dora-theme`; bootstrap di `index.html` menerapkannya sebelum CSS dimuat.
- `src/components/site/useSiteMotion.ts`: intro satu kali per sesi, reveal tiga bagian, serta jeda animasi hero saat keluar layar atau tab disembunyikan.
- `DESIGN.md`: arah visual, alasan keputusan, sumber kredit, dan spesifikasi gerak.

Komponen halaman baru berada di `src/components/site/`. Komponen sebelumnya tetap tersedia tetapi tidak digunakan oleh `App.tsx`.

## Sumber

- [Repositori DORA](https://github.com/NezzyGremory/Data-Overview-Research-Assistant)
- [Kredit nama dan peran](https://github.com/NezzyGremory/Data-Overview-Research-Assistant/blob/main/app/ui/data/credits.json)
- [Rilis v6.0.0](https://github.com/NezzyGremory/Data-Overview-Research-Assistant/releases/tag/v6.0.0)
- [Referensi visual Outcrowd](https://dribbble.com/shots/26742281-Website-for-an-Incident-Management-Platform)

Metadata rilis diperiksa melalui GitHub pada 29 Oktober 2026. SHA256 sesuai digest aset pada API GitHub; installer tidak diunduh atau dijalankan saat pengujian website. Repositori ditautkan secara statis, tanpa token GitHub atau API runtime.

## Verifikasi

Lihat `docs/verification-2026-10-29.md` untuk cakupan uji browser, aksesibilitas, dan batas pemeriksaan. Publikasi produksi belum dilakukan.

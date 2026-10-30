# Verifikasi: hero mockup, Add-ons, repositori, dan tim (30 Oktober 2026)

Mode antislop: during (session override). Design Read: halaman profil produk desktop untuk peneliti data dan mahasiswa, bahasa visual ruang kerja riset gelap beraksen violet mengikuti komposisi Outcrowd, dial ENERGY 3 / RHYTHM 3 / MOTION 3.

Alat: Chrome headless 155, Playwright, axe-core (WCAG 2 A/AA, 2.1 AA, 2.2 AA). Skrip: `scratch/qa-2026-10-30.cjs` di folder artefak sesi. Tidak ada commit, push, deploy, atau eksekusi installer.

## Sumber data

- Kredit tim: `app/ui/data/credits.json` dibaca langsung (raw.githubusercontent.com) pada 30 Oktober 2026. Enam nama/peran, intro "A Metriks Studio Production", dan Special Thanks cocok dengan konfigurasi.
- Add-ons: seluruh repositori publik `NezzyGremory` (25) dan `AHTURRR` (44) diperiksa melalui GitHub API. Tidak ada repositori yang dokumentasinya menyatakan diri sebagai plugin, integrasi, template, atau perangkat pendamping DORA dengan klaim kompatibilitas versi. `Dataset-Research-Web` berisi kode aplikasi versi lama (bukan add-on); `AHTURRR/Dataset-Research` adalah salinan/fork aplikasi. README DORA menyebut Kaggle/Hugging Face, provider literatur, dan pustaka opsional sebagai bagian aplikasi utama. Hasil: `verifiedAddons = []`, empty state ditampilkan.
- Repositori website: remote git lokal `AHTURRR/Website-Profiling-DORA.`.

## Hasil pengujian (kedua tema kecuali disebut lain)

- PASS hero: 4 tab tampilan asli (Overview, Dataset, Node Editor, Research) berganti dengan `aria-pressed`; gambar termuat; 5 tahap alur menyinkronkan tab; tombol Perbesar membuka dan menutup dialog.
- PASS 10 dialog fitur: Tab tetap di dalam dialog, Escape menutup, fokus kembali.
- PASS galeri: 14 screenshot termuat, lightbox buka/tutup.
- PASS Add-ons: 4 kategori dan empty state jujur tampil; tidak ada tautan item palsu; tanpa pencarian/filter karena item kosong.
- PASS repositori: teks memuat repositori aplikasi desktop dan repositori website secara terpisah; tautan kode sumber, rilis, Issues, dan /tim tersedia.
- PASS unduhan/checksum/panduan/FAQ: SHA256 disalin, dialog bantuan bebas pelanggaran axe, tab installer/source, 10 FAQ.
- PASS responsif: `/` dan `/tim` pada 1440×1000, 1024×768, 768×1024, 390×844, 360×740, 740×360 tanpa overflow; menu mobile buka/tutup dengan Escape.
- PASS axe: 0 pelanggaran pada `/` dan `/tim`, 1440 dan 390, dark dan light.
- PASS navigasi: tautan Tim Pengembang membuka /tim, refresh tetap /tim, browser Back kembali ke /.
- PASS tema tersimpan setelah reload.
- PASS motion: animasi cahaya hero berjalan saat terlihat, paused di luar layar; reveal below-fold sekali.
- PASS reduced motion: ambient `none`, dialog opacity saja.
- PASS status gambar: indikator memuat dan fallback gagal dengan tautan repositori.
- PASS runtime: 0 JavaScript pageerror.
- PASS `npm run lint` (0 peringatan) dan `npm run build`.

Batas: bukan sertifikasi WCAG; belum diuji dengan screen reader atau perangkat fisik; jeda animasi saat tab tersembunyi diverifikasi lewat kode (`visibilitychange`), bukan simulasi browser.

## Antislop Delivery Gate

Block 1 (Hard Gate): R-02 PASS, pemindaian em dash pada komponen, konfigurasi, CSS, DESIGN.md, README tanpa temuan. R-03 PASS, 6 viewport × 2 halaman × 2 tema tanpa overflow, target sentuh 44px. R-17 PASS, angka yang tampil (14 tampilan, 10 modul, 95.1 MB, v6.0.0) berasal dari konfigurasi dan rilis. R-18 PASS, tanpa testimonial. R-23 PASS, monogram teks, tanpa foto/logo baru. R-24 PASS, Add-ons dan Repositori di navbar menuju `#addons` dan `#github` yang ada. R-25 PASS, axe 0 pelanggaran kontras. R-26 PASS, titik jendela mockup dekoratif `aria-hidden` dan tanpa interaksi; semua tombol diuji. R-27 PASS, empty state Add-ons, memuat/gagal gambar. R-28 PASS, FAQ produk dipertahankan. R-32 PASS, dialog fokus/Escape/pengembalian fokus. R-33 PASS, diedit langsung di sumber. R-34 PASS, kedua tema diuji. R-35 PASS, click-through tercatat di atas. R-36 PASS, tanpa klaim baru. R-37 PASS, DESIGN.md diperbarui sebelum klaim selesai. R-38 PASS, bio dummy berlabel di keenam kartu; add-on tanpa item rekaan.

Block 2 (Purpose-Gate): R-01 cahaya violet hanya di hero untuk membingkai produk. R-04 ikon puzzle/layer/file/wrench mewakili empat jenis add-on. R-06 Plus Jakarta Sans dipertahankan; mono untuk indeks tahap, format, hash. R-07 titik cahaya hanya adegan hero. R-08 panah hanya untuk tautan keluar atau perpindahan halaman. R-09 label status katalog memuat tanggal pemeriksaan nyata. R-10 blur hanya navbar. R-12 shadow hanya bingkai produk dan overlay. R-13 glow terbatas pada hero. R-14 Add-ons memakai strip kategori + panel status asimetris, berbeda dari kartu modul. R-19 motion terdokumentasi di DESIGN.md. R-22 tanpa ilustrasi generik; alur 5 tahap diberi label ilustrasi konseptual. Semua PASS.

Block 3 (Liveliness): dial dinyatakan; fokus per layar (headline, mockup, judul Add-ons, nama tim); whitespace membentuk ritme; satu aksen violet; motif identitas berupa screenshot DORA dan alur data→eksperimen→literatur. PASS.

Block 4 (Craftsmanship): C-1 sampai C-5 PASS; R-05 komposisi antarbagian berbeda; R-11 radius bervariasi; R-15 CTA spesifik; R-16 tanpa buzzword; R-20/R-30 identitas DORA, bukan klon referensi; R-21 dua tema bekerja; R-29 palet violet + netral; R-31 alasan di DESIGN.md. PASS.


# Dark/light dan motion: verifikasi 29 Oktober 2026

Permintaan: mendekatkan bahasa visual dan animasi ke referensi Outcrowd, menyediakan dark/light mode, dan menerapkan antislop during sesuai pilihan sesi pengguna. Referensi yang tersedia berupa gambar; durasi animasi merupakan rancangan implementasi, bukan hasil pengukuran rekaman referensi.

## Hasil pengujian

- PASS build: `npm run build` menghasilkan build produksi.
- PASS lint: `npm run lint` tanpa peringatan.
- PASS kedua tema: 10 dialog fitur dibuka dan ditutup, fokus Tab tetap dalam dialog, Escape mengembalikan fokus.
- PASS kedua tema: 14 screenshot galeri termuat; lightbox dapat dibuka dan ditutup.
- PASS kedua tema: checksum disalin ke clipboard; bantuan unduhan dibuka/ditutup; pilihan installer/source mengganti isi; 10 FAQ dibuka/ditutup.
- PASS kedua halaman dan tema: tidak ada overflow pada 1440×1000, 360×740, 390×844, 768×1024, 1024×768, 740×360; menu mobile buka/tutup melalui Escape.
- PASS tema tersimpan: toggle mengubah tema, pilihan bertahan ketika berpindah ke /tim dan setelah refresh. Bootstrap menerapkan pilihan sebelum stylesheet dan aplikasi dimuat.
- PASS storage ditolak: localStorage disimulasikan melempar error; toggle tetap mengubah tema pada halaman aktif.
- PASS siklus motion: animasi cahaya berjalan ketika hero terlihat dan paused setelah keluar layar; repository mendapatkan penanda reveal sekali.
- PASS reduced motion: ambient animation none; dialog membuka/menutup dengan opacity saja.
- PASS status gambar: permintaan ditahan untuk mengamati pesan memuat, kemudian dilanjutkan sampai gambar terlihat. Permintaan digagalkan untuk mengamati pesan gagal dan tautan repositori.
- PASS aksesibilitas otomatis: axe-core WCAG 2 A/AA, 2.1 AA, 2.2 AA mendeteksi 0 pelanggaran untuk beranda dan tim pada kedua tema di 1440px dan 390px. Dialog bantuan juga diperiksa pada kedua tema.
- PASS runtime: tidak ada JavaScript pageerror dalam uji tema/interaksi.

Alat: Chrome headless 155, Playwright, axe-core. Aksesibilitas otomatis bukan sertifikasi WCAG. Belum diuji dengan screen reader atau perangkat fisik. Installer dan tujuan GitHub menggunakan URL resmi; file biner tidak diunduh dan tidak dieksekusi. Tidak ada deploy produksi.

## Antislop Delivery Gate

### Block 1: Hard Gate

- R-02 PASS: pemindaian teks komponen baru, CSS motion, dan DESIGN.md tidak menemukan em dash.
- R-03 PASS: dua halaman × dua tema × enam viewport tanpa overflow; kontrol toggle 44px dan menu dapat digunakan pada landscape.
- R-17 PASS: tidak menambahkan statistik pengguna, performa, atau angka tanpa sumber.
- R-18 PASS: tidak ada testimonial baru atau identitas rekaan.
- R-23 PASS: menggunakan logo dan screenshot DORA yang sudah ada; cahaya CSS mengikuti permintaan visual pengguna; bio dummy tetap berlabel.
- R-24 PASS: navigasi tetap menuju bagian beranda dan /tim yang tersedia.
- R-25 PASS: axe-core tidak mendeteksi pelanggaran kontras pada dua tema, dua halaman, dua viewport, dan dialog bantuan.
- R-26 PASS: toggle, menu, fitur, galeri, clipboard, panduan, dan FAQ diuji; tautan repositori mempertahankan tujuan resmi.
- R-27 PASS: status memuat gambar dan gagal gambar diuji melalui intersepsi permintaan; konten metadata statis tidak menunggu API runtime.
- R-28 PASS: FAQ produk yang sudah ada dipertahankan; sepuluh pertanyaan diuji.
- R-32 PASS: fokus dialog, Tab, Escape, pemulihan fokus, serta kontrol menu diuji melalui keyboard.
- R-33 PASS: fitur dibuat langsung melalui edit sumber TypeScript/CSS; skrip QA tidak menulis ulang sumber aplikasi.
- R-34 PASS: light dan dark diperiksa pada beranda, tim, dialog, menu, dan enam ukuran viewport.
- R-35 PASS: build dan aplikasi dijalankan; click-through kontrol serta hasilnya dicatat di atas.
- R-36 PASS: tidak ada klaim keamanan, sertifikasi, performa, atau pelanggan baru.
- R-37 PASS: arah visual dan tujuan setiap efek dicatat sebelum implementasi di DESIGN.md, berdasarkan referensi pengguna.
- R-38 PASS: cahaya atmosfer bukan data; nama/peran berasal dari kredit dan bio tetap ditandai dummy.

### Block 2: Purpose-Gate

- R-01 PASS: satu sorot violet di hero menghubungkan headline dengan screenshot, sesuai referensi; light menggunakan violet dengan kontras teks tersendiri.
- R-04 PASS: ikon matahari/bulan menandai pilihan tema; ikon tindakan dan subjek produk dijelaskan di DESIGN.md.
- R-06 PASS: Plus Jakarta Sans mempertahankan karakter wordmark DORA; monospace terbatas pada informasi teknis.
- R-07 PASS: sembilan titik cahaya hanya berada dalam adegan hero, sesuai referensi; tidak ada grid dekoratif global.
- R-08 PASS: panah eksternal menandai tujuan keluar situs; plus menandai disclosure, bukan dekorasi setiap tombol.
- R-09 PASS: label rilis tetap bertaut ke rilis nyata, tanpa badge status rekaan.
- R-10 PASS: backdrop blur hanya dipakai pada satu navbar mengambang agar isi terbaca di atas halaman yang bergerak.
- R-12 PASS: shadow membedakan pratinjau produk dan overlay dari permukaan biasa; kartu konten tidak dibuat mengambang.
- R-13 PASS: glow dibatasi pada satu adegan hero/pratinjau; tidak diterapkan serentak pada semua kontrol dan ikon.
- R-14 PASS: tiga modul mengelompokkan tiga alur riset aktual, sedangkan Node Editor mendapat penekanan screenshot tersendiri; alasannya dicatat.
- R-19 PASS: intro sekali per sesi, tiga momen below-fold, hover respons, dan lifecycle jeda didokumentasikan; reduced motion diuji.
- R-22 PASS: tetap memakai screenshot produk asli, tanpa ilustrasi generik tambahan.

### Block 3: Liveliness

- Dials PASS: ENERGY 3 / RHYTHM 3 / MOTION 3 dinyatakan pada Design Read dan DESIGN.md.
- Konsistensi PASS: hero memiliki koreografi dan sorot cahaya; bagian informasi tetap tenang; tiga bagian penting memiliki reveal sekali.
- Focal point PASS: headline mendominasi hero, screenshot mendominasi pratinjau, dan nama/monogram mendominasi profil tim; screenshot ditinjau.
- Whitespace PASS: ruang hero memisahkan headline, aksi, dan aplikasi; bagian detail memiliki kepadatan berbeda.
- Accent PASS: violet menjadi satu aksen tindakan, disesuaikan kontrasnya untuk masing-masing tema.
- Identity PASS: screenshot DORA, alur dataset–ML–literatur, dan kredit Metriks Studio menjadi isi visual yang spesifik.
- Design Read PASS: interpretasi produk, audiens, bahasa visual, dan dials dinyatakan sebelum edit.

### Block 4: Craftsmanship & Quality Locks

- C-1 PASS: tujuan warna, navbar, cahaya, timing, disclosure, dan hierarki ditulis di DESIGN.md.
- C-2 PASS: kontrol yang berubah dan kontrol produk yang dipertahankan diuji pada kedua tema.
- C-3 PASS: konten tetap mengikuti evaluasi produk, unduhan, bantuan, dan kredit tim, tanpa section pengisi baru.
- C-4 PASS: kedua tema, keyboard, gambar lambat/gagal, storage ditolak, reduced motion, dan viewport landscape diuji.
- C-5 PASS: tidak ada testimonial atau angka keberhasilan baru; identitas tim dan rilis tetap bersumber.
- R-05 PASS: screenshot Node Editor, galeri, unduhan, repository editorial, FAQ split, dan profil tim mempertahankan ritme komposisi yang berbeda.
- R-11 PASS: radius besar dipakai pada navbar/kontrol; permukaan konten dan dialog memakai radius lebih kecil.
- R-15 PASS: CTA tetap menyebut unduhan Windows, screenshot, repositori, atau modul yang dituju.
- R-16 PASS: tidak menambah buzzword pemasaran.
- R-20 PASS: screenshot dan narasi riset DORA tetap menjadi pusat, bukan dashboard produk referensi.
- R-21 PASS: pilihan light/dark dibuat dan tersimpan, bukan ditunda.
- R-29 PASS: satu keluarga violet bersama permukaan netral; shade monogram mengikuti kategori yang sudah tersedia.
- R-30 PASS: kemiripan komposisi dengan referensi diminta secara eksplisit oleh pengguna; identitas dan konten tetap DORA.
- R-31 PASS: alasan setiap keputusan visual utama dapat ditemukan di DESIGN.md.

## Artefak

Folder lokal: `C:/Users/Advan Workplus/.codex/visualizations/2026/10/29/01a18812-ee06-7c53-9aec-747432ebc609/`.

- `themes-qa.cjs`: pengujian tema, viewport, aksesibilitas, dan motion.
- `themes-qa-report.json`: hasil lanjutan tema terang, persistensi, lifecycle, reduced motion, dan storage ditolak. Hasil tema gelap dicatat pada keluaran pengujian sesi sebelumnya.
- `final-motion-check.cjs`: gambar termuat/lambat/gagal, screenshot akhir, dan axe beranda dua tema.
- `final-dark.png`, `final-light.png`: screenshot akhir desktop.
- `dark-team-390.png`, `light-team-390.png`: screenshot halaman tim mobile.

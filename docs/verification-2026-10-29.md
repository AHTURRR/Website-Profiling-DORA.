# Verifikasi redesign DORA

Tanggal: 29 Oktober 2026. Browser: Chrome headless 155 melalui Playwright. Pengujian dilakukan terhadap aplikasi lokal. Tidak ada publikasi, perubahan repositori remote, atau eksekusi installer.

## Sumber konten

- Nama dan peran enam anggota: `app/ui/data/credits.json` pada repositori `NezzyGremory/Data-Overview-Research-Assistant`, dibaca melalui konektor GitHub.
- Bio dummy diizinkan pengguna dan ditandai di setiap profil. Avatar berupa monogram teks, tanpa foto atau tautan personal rekaan.
- Rilis resmi: GitHub API `releases/latest` menyebut v6.0.0. Nama file, digest SHA256, ukuran, dan URL diperiksa terhadap aset rilis. Metadata repo mengonfirmasi lisensi MIT dan GitHub Issues tersedia.
- Referensi Dribbble dilihat sebagai gambar. Implementasi menggunakan screenshot DORA sendiri.

## Pemeriksaan interaksi

| Area | Hasil teramati |
| --- | --- |
| Beranda | Halaman terbuka, satu h1, judul dokumen sesuai |
| Modul utama | Pemicu membuka dialog fitur |
| Dialog keyboard | Fokus masuk, Tab tetap dalam dialog, Escape menutup, fokus kembali ke pemicu |
| Direktori fitur | Seluruh 10 dialog dibuka dan ditutup melalui kontrolnya |
| Galeri | Seluruh 14 pilihan memuat gambar dengan naturalWidth lebih dari nol |
| Lightbox | Screenshot Hero dan pilihan galeri dibuka, ditutup dengan Escape |
| SHA256 | Tombol Salin menulis hash 64 karakter yang benar ke clipboard |
| Clipboard ditolak | Penolakan disimulasikan; pesan salin manual ditampilkan |
| Bantuan unduh | Dialog empat langkah pemeriksaan file dibuka dan ditutup |
| Installer | href sesuai URL aset v6.0.0; file biner tidak diunduh |
| Instalasi | Tombol source/installer mengganti konten dan status pilihan; source mencakup cd ke direktori repo |
| FAQ | Seluruh 10 pertanyaan dibuka dan ditutup |
| Anchor beranda | Tidak ada target lokal hilang; tidak ada label v2.0 dalam konten utama yang dirender |
| Halaman tim | Navigasi membuka /tim; enam nama/peran dan enam label bio dummy tampil |
| Akses langsung | Refresh /tim tetap memuat halaman tim |
| Riwayat | Kembali ke beranda dan browser Back mengembalikan halaman tim |
| Menu mobile | Buka/tutup dan Escape bekerja; tautan Tim Pengembang membuka /tim |
| Landscape | Menu dibatasi tinggi viewport dan kontennya dapat digulir |
| Reduced motion | Dialog memakai opacity 100ms, tanpa perjalanan spasial |
| Rute tidak dikenal | Pesan pemulihan dengan tautan beranda tampil |
| JavaScript | Tidak ada pageerror selama pengujian |

## Responsivitas

Beranda dan halaman tim diperiksa pada 360×740, 390×844, 768×1024, 1024×768, serta 740×360. Tidak ditemukan overflow horizontal pada documentElement. Screenshot desktop 1440×1000 dan mobile 390×844 juga ditinjau.

## Aksesibilitas otomatis

axe-core dijalankan dengan aturan WCAG 2 A/AA, 2.1 AA, dan 2.2 AA:

| Halaman | Desktop 1440px | Mobile 390px |
| --- | --- | --- |
| / | 0 pelanggaran terdeteksi | 0 pelanggaran terdeteksi |
| /tim | 0 pelanggaran terdeteksi | 0 pelanggaran terdeteksi |

Hasil ini bukan sertifikasi WCAG. VoiceOver, NVDA, perangkat iOS/Android fisik, dan seluruh perilaku eksternal GitHub belum diuji. Pemeriksaan otomatis berlaku pada keadaan awal halaman; dialog diperiksa melalui uji keyboard terpisah.

## Build dan pemeliharaan

- `npm run build`: lulus.
- `npm run lint`: lulus tanpa peringatan.
- Dependensi produksi tidak berubah. Playwright dan axe-core hanya dipasang sementara di direktori visualisasi, di luar proyek.
- Arah visual dan motion dicatat dalam `DESIGN.md`.
- Build statis dapat dikembalikan dengan memulihkan versi deploy sebelumnya; tidak ada migrasi data.

## Artefak lokal

Folder artefak: `C:/Users/Advan Workplus/.codex/visualizations/2026/10/29/01a18812-ee06-7c53-9aec-747432ebc609/`.

Berisi `qa.cjs`, `qa-report.json`, `accessibility.cjs`, `accessibility-report.json`, `hero-desktop.png`, `home-desktop.png`, `team-desktop.png`, `hero-mobile.png`, dan `team-top-mobile.png`.

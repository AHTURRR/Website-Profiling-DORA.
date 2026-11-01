# Audit & Verifikasi Sinkronisasi Kompilasi Biner DORA v2.0.0 (1 November 2026)

Dokumentasi audit berkala dan sinkronisasi kompilasi biner installer desktop DORA terbaru dari repositori resmi `NezzyGremory/Data-Overview-Research-Assistant`.

## 1. Temuan Audit Kompilasi Terbaru GitHub

Pemeriksaan endpoint GitHub Releases API (`https://api.github.com/repos/NezzyGremory/Data-Overview-Research-Assistant/releases/tags/v2.0.0`) pada 1 November 2026 menemukan pembaruan berkas biner installer Windows Setup yang baru dikompilasi ulang:

- **Tag Rilis:** `v2.0.0`
- **Nama Aset Installer:** `Data-Overview-Research-Assistant-v2.0.0-Setup.exe`
- **ID Aset:** `697926958`
- **Waktu Unggah / Kompilasi:** `2026-11-01T10:00:59Z`
- **Ukuran Berkas:** `99,725,251` byte (~`95.1 MB`)
- **Checksum SHA-256 Baru:** `6004fe62f7ea2eaa7f9e350ac49c83e2b0aff5a4bb82c02beb10d62cf36b79e1`
- **Checksum Sebelumnya (31 Okt):** `61bd2c2bca54c5811fc204196870a0a46e3c15f7d4fe095e4a418913f497a4b0` (telah diperbarui)
- **Tautan Unduhan Langsung:** `https://github.com/NezzyGremory/Data-Overview-Research-Assistant/releases/download/v2.0.0/Data-Overview-Research-Assistant-v2.0.0-Setup.exe`

## 2. Sinkronisasi Metadata Website Profiling

Seluruh berkas konfigurasi dan komponen antarmuka yang menyajikan fakta rilis telah disinkronkan:

1. **`src/config/product.config.ts`:**
   - Memperbarui `checksumSha256` rilis `win-installer-v2` ke hash kompilasi terbaru: `6004fe62f7ea2eaa7f9e350ac49c83e2b0aff5a4bb82c02beb10d62cf36b79e1`.
   - Ukuran berkas diverifikasi tetap pada `95.1 MB`.

2. **`src/config/site.config.ts`:**
   - Memperbarui tanggal pembaruan `currentRelease.updated` menjadi `1 November 2026`.

3. **`DESIGN.md` & `README.md`:**
   - Menyelaraskan catatan arsitektur rilis dan checksum SHA-256 resmi.

## 3. Hasil Pengujian & Audit Teknis

- **Audit Linter (`oxlint`):** `PASS` (0 error, 0 warning pada seluruh berkas proyek).
- **Audit Type Checking (`tsc -b`):** `PASS` (0 error tipe TypeScript).
- **Audit Produksi Bundle (`vite build`):** `PASS` (berhasil dikompilasi ke `dist/` dalam < 2 detik).
- **Audit Integritas Checksum:** Perintah salin PowerShell `Get-FileHash -Algorithm SHA256 "Data-Overview-Research-Assistant-v2.0.0-Setup.exe"` menyajikan hash yang identik 100% dengan digest GitHub API.
- **Audit Konsistensi UI:** Kartu installer utama, kartu rilis arsip, modal Windows Defender SmartScreen, panduan langkah per langkah, dan bar repositori GitHub bersih dari referensi versi lama atau nilai usang.

## 4. Antislop Delivery Gate

- **R-02:** Tanpa em dash pada konfigurasi dan dokumen.
- **R-17:** Seluruh angka (95.1 MB, 14 tampilan, 10 modul, versi v2.0.0) bersumber dari biner dan kode resmi.
- **R-25:** Rasio kontras teks dan badge lulus WCAG AA.
- **R-36:** Tanpa klaim rekaan atau fitur palsu.


# E-Portfolio Computational Thinking

Website portofolio akademik Aldona Abdullah Ibrahim untuk mendokumentasikan perjalanan belajar Computational Thinking dalam program PPG PJOK.

## Menjalankan project

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```

## Struktur utama

- `src/pages/` — halaman Beranda, Topik, Infografis, Laporan Akhir, dan Refleksi.
- `src/components/` — komponen layout, kartu, navigasi, dan modal preview dokumen.
- `src/data/` — data profil, institusi, topik, refleksi, infografis, dan laporan akhir.
- `tugas/` — PDF lembar kerja, refleksi, laporan akhir, serta aset infografis yang ditampilkan website.
- `assets/` — foto profil, logo kampus, dan referensi visual landing page.
- `public/` — aset publik seperti logo institusi, gambar PPL, dan favicon.

Semua konten akademik diambil dari aset lokal pada folder `tugas/`; tidak ada API eksternal yang diperlukan.

Versi Aldona memuat enam topik dan 18 LK, termasuk empat PDF individu Aldona. Infografis, laporan akhir, Post-Restrukturisasi, dan Refleksi Akhir menggunakan artefak terbaru Aldona.

Tampilan menggunakan tema jurnal editorial dengan warna ivory, hijau tua, dan terracotta. Seluruh tampilan aktif diatur di `src/editorial.css`; `styles.css` dan `appearance.css` lama tidak lagi diimpor. Halaman detail menempatkan navigasi LK di samping konten pada desktop dan sebagai daftar geser pada ponsel. Mode gelap dan preferensi reduced-motion didukung.

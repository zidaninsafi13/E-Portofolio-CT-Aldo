import type { Topic } from "../types/portfolio";

const topic1Worksheet1 = new URL("../../tugas/Topik-1-Pendalaman-Pemahaman-Computional-Thinking/1.B.1-Penerapan-Fondasi-CT-dalam-Kehidupan-Sehari-hari-(Aldona).pdf", import.meta.url).href;
const topic1Worksheet2 = new URL("../../tugas/Topik-1-Pendalaman-Pemahaman-Computional-Thinking/1.C-Penerapan-CT-dalam-Penyusunan-Dokumen.pdf", import.meta.url).href;
const topic1Worksheet3 = new URL("../../tugas/Topik-1-Pendalaman-Pemahaman-Computional-Thinking/1.D. Sintesis.pdf", import.meta.url).href;
const topic1Worksheet4 = new URL("../../tugas/Topik-1-Pendalaman-Pemahaman-Computional-Thinking/1.E-Refleksi-dan-Tindak-Lanjut-(Aldona).pdf", import.meta.url).href;
const topic2Worksheet = new URL("../../tugas/Topik-2-CT-Dalam-Problem-Solving-Persoalan-Sehari-hari/LK.2 (C-D).pdf", import.meta.url).href;
const topic3Worksheet1 = new URL("../../tugas/Topik-3-CT-Dalam-Problem-Solving-Literasi-dan-Numerasi/3.D.1-Unggah-Lembar-Kerja-6-(Kelompok).pdf", import.meta.url).href;
const topic3Worksheet2 = new URL("../../tugas/Topik-3-CT-Dalam-Problem-Solving-Literasi-dan-Numerasi/3.D.2-Unggah-Lembar-Kerja-7-(Kelompok).pdf", import.meta.url).href;
const topic4Worksheet1 = new URL("../../tugas/Topik-4-CT-Dalam-Kurikulum/4.B.1-Pemaknaan-Istilah-CP-CT-Fase-D-(Aldona).pdf", import.meta.url).href;
const topic4Worksheet2 = new URL("../../tugas/Topik-4-CT-Dalam-Kurikulum/4.C.Pendalaman-Pemahaman-Capaian-Pembelajaran-Computational-Thinking.pdf", import.meta.url).href;
const topic4Worksheet3 = new URL("../../tugas/Topik-4-CT-Dalam-Kurikulum/4.D-Pemaknaan-CP-CT-dalam-Kurikulum-Nasional-(Aldona).pdf", import.meta.url).href;
const topic5Worksheet1 = new URL("../../tugas/Topik-5-CT-dan-Projek/5.C.1.Unggah-Lembar-Kerja-11-(Kelompok).pdf", import.meta.url).href;
const topic5Worksheet2 = new URL("../../tugas/Topik-5-CT-dan-Projek/5.C.2.Unggah-Lembar-Kerja-12-(Kelompok).pdf", import.meta.url).href;
const topic5Worksheet3 = new URL("../../tugas/Topik-5-CT-dan-Projek/5.C.3.Unggah-Lembar-Kerja-13-(Kelompok).pdf", import.meta.url).href;
const topic5Worksheet4 = new URL("../../tugas/Topik-5-CT-dan-Projek/5.D. Presentasi_Rancangan_Integrasi_CT_dalam_Projek_yang_Dipilih.pdf", import.meta.url).href;
const topic6Worksheet1 = new URL("../../tugas/Topik-6-Integrasi-CT-dalam-Mata-Pelajaran/6.B.1.Unggah-Lembar-Kerja-15-(Individu).pdf", import.meta.url).href;
const topic6Worksheet2 = new URL("../../tugas/Topik-6-Integrasi-CT-dalam-Mata-Pelajaran/6.C.1.Unggah-Lembar-Kerja-16-(Kelompok).pdf", import.meta.url).href;
const topic6Worksheet3 = new URL("../../tugas/Topik-6-Integrasi-CT-dalam-Mata-Pelajaran/6.D.1.Unggah-Lembar-Kerja-17-(Kelompok).pdf", import.meta.url).href;
const topic6Worksheet4 = new URL("../../tugas/Topik-6-Integrasi-CT-dalam-Mata-Pelajaran/6.D.2.Unggah-Lembar-Kerja-18-(Kelompok).pdf", import.meta.url).href;

export const topics: Topic[] = [
  {
    id: "1", number: 1, slug: "pendalaman-pemahaman-ct", title: "Pendalaman Pemahaman CT",
    shortDescription: "Mengenali konsep inti Computational Thinking dan cara membacanya dalam pembelajaran.",
    worksheets: [
      {
        id: "1-b-1", code: "1.B.1", slug: "penerapan-fondasi-ct", title: "Penerapan Fondasi CT dalam Kehidupan Sehari-hari",
        explanation: "Eksplorasi penerapan dekomposisi, pengenalan pola, abstraksi, dan algoritma melalui situasi pembelajaran PJOK serta kegiatan sekolah.",
        context: "LK individu membahas pengelolaan pertandingan olahraga, senam bersama, pemilihan peserta lomba, dan permainan estafet sebagai persoalan yang dapat disusun tanpa komputer.",
        outcome: "CT dipahami sebagai cara berpikir logis dan sistematis untuk menyelesaikan masalah, bukan sekadar kemampuan menggunakan komputer.",
        keyPoints: ["Dekomposisi kegiatan", "Pengenalan pola", "Abstraksi informasi relevan", "Algoritma langkah pembelajaran"],
        documentUrl: topic1Worksheet1, documentLabel: "Lembar Kerja 1 - Individu",
        assignmentType: "individual", documentStatus: "current",
      },
      {
        id: "1-c", code: "1.C", slug: "penerapan-ct-dalam-penyusunan-dokumen", title: "Penerapan CT dalam Penyusunan Dokumen",
        explanation: "Diskusi kelompok untuk menelaah penerapan empat fondasi CT pada rancangan kegiatan pembelajaran.",
        context: "Rancangan kegiatan dibaca sebagai alur pendahuluan, inti, dan penutup dengan tugas serta tujuan yang terhubung.",
        outcome: "Dokumen yang runtut, memilih informasi penting, dan memakai pola kegiatan yang konsisten dapat memudahkan pelaksanaan pembelajaran.",
        keyPoints: ["Struktur kegiatan", "Pola pembelajaran", "Abstraksi informasi", "Urutan pelaksanaan"],
        documentUrl: topic1Worksheet2, documentLabel: "Lembar Kerja Kelompok - Penerapan CT",
        assignmentType: "group",
      },
      {
        id: "1-d", code: "1.D", slug: "sintesis-penerapan-ct", title: "Sintesis Penerapan CT",
        explanation: "Sintesis kelompok tentang penerapan CT pada perencanaan dan pelaksanaan turnamen olahraga.",
        context: "Dokumen turnamen ditinjau dari pembagian kepanitiaan, rundown, informasi inti, serta langkah antisipasi kondisi seperti cedera atau hujan.",
        outcome: "Perencanaan kegiatan dapat dibuat lebih terorganisir ketika tugas, pola kegiatan, informasi penting, dan prosedur penanganan masalah dijelaskan secara jelas.",
        keyPoints: ["Pembagian kepanitiaan", "Rundown turnamen", "Informasi inti", "Antisipasi kondisi khusus"],
        documentUrl: topic1Worksheet3, documentLabel: "Dokumen Sintesis Kelompok",
        assignmentType: "group",
      },
      {
        id: "1-e", code: "1.E", slug: "refleksi-dan-tindak-lanjut", title: "Refleksi dan Tindak Lanjut",
        explanation: "Refleksi individu mengenai hubungan CT dengan kehidupan, pembelajaran, target profesional, serta tindak lanjut belajar.",
        context: "Refleksi mencakup contoh CT sehari-hari, integrasi CT ke mata pelajaran, target pemahaman, kendala, dan langkah antisipatif.",
        outcome: "Pembiasaan CT dipandang sebagai jalan untuk membuat pembelajaran lebih terstruktur, kritis, adaptif, dan relevan bagi peserta didik.",
        keyPoints: ["CT dalam kehidupan", "Integrasi pembelajaran", "Target profesional", "Kendala dan antisipasi"],
        documentUrl: topic1Worksheet4, documentLabel: "Refleksi dan Tindak Lanjut",
        assignmentType: "individual", documentStatus: "current",
      },
    ],
  },
  {
    id: "2", number: 2, slug: "ct-dalam-problem-solving-sehari-hari", title: "CT dalam Problem Solving Persoalan Sehari-hari",
    shortDescription: "Membaca persoalan sehari-hari dengan langkah yang lebih terstruktur.",
    worksheets: [
      {
        id: "2-c-d", code: "2.C-D", slug: "soal-bebras-dan-diskusi", title: "Menyelesaikan Soal Bebras dan Diskusi",
        explanation: "Penyelesaian soal Bebras tentang pergerakan dadu dan pemilihan boneka, dilanjutkan diskusi serta penilaian antarkelompok.",
        context: "Kelompok menyimulasikan pola perputaran dadu dan melakukan penyaringan bertahap berdasarkan kriteria pada soal pemilihan boneka.",
        outcome: "Solusi diperoleh melalui pengenalan pola, pemecahan syarat menjadi bagian kecil, abstraksi data penting, dan langkah penyelesaian yang runtut.",
        keyPoints: ["Pola periode perputaran", "Penyaringan berdasarkan kriteria", "Empat fondasi CT", "Umpan balik antarkelompok"],
        documentUrl: topic2Worksheet, documentLabel: "LK 2.C-D - Soal Bebras dan Diskusi",
        assignmentType: "group",
      },
    ],
  },
  {
    id: "3", number: 3, slug: "ct-dalam-literasi-dan-numerasi", title: "CT dalam Problem Solving pada Literasi dan Numerasi",
    shortDescription: "Menghubungkan pola CT dengan proses literasi dan numerasi.",
    worksheets: [
      {
        id: "3-d-1", code: "3.D.1", slug: "menyelesaikan-soal-pisa", title: "Menyelesaikan Soal PISA",
        explanation: "Penerapan CT pada soal numerasi tentang estimasi konsumsi energi seorang gelandang selama pertandingan sepak bola.",
        context: "Data durasi jogging, lari sedang, dan sprint diolah bersama laju pembakaran kalori untuk memperoleh total estimasi energi.",
        outcome: "Masalah dapat diselesaikan dengan memecah aktivitas, mengenali hubungan durasi dan laju kalori, memilih data relevan, lalu menghitung secara runtut.",
        keyPoints: ["Data aktivitas fisik", "Operasi perkalian dan penjumlahan", "Empat fondasi CT", "Konteks PJOK"],
        documentUrl: topic3Worksheet1, documentLabel: "LK 6 - Menyelesaikan Soal PISA",
        assignmentType: "group",
      },
      {
        id: "3-d-2", code: "3.D.2", slug: "diskusi-bebras-dan-pisa-akm", title: "Diskusi Soal Bebras dan PISA/AKM",
        explanation: "Diskusi perbandingan karakteristik serta langkah penyelesaian soal Bebras dan PISA/AKM.",
        context: "Kelompok membandingkan stimulus, kompleksitas, fokus hasil, dan penerapan CT dalam dua tipe persoalan tersebut.",
        outcome: "Kedua bentuk soal sama-sama melatih pemecahan masalah, tetapi PISA/AKM menggunakan konteks data dan literasi yang lebih mendalam.",
        keyPoints: ["Kesamaan tujuan", "Perbedaan stimulus", "Literasi dan numerasi", "Langkah CT"],
        documentUrl: topic3Worksheet2, documentLabel: "LK 7 - Diskusi Bebras dan PISA/AKM",
        assignmentType: "group",
      },
    ],
  },
  {
    id: "4", number: 4, slug: "ct-dalam-kurikulum", title: "CT dalam Kurikulum",
    shortDescription: "Melihat ruang integrasi CT dalam kurikulum dan perencanaan belajar.",
    worksheets: [
      {
        id: "4-b-1", code: "4.B.1", slug: "pemaknaan-istilah-cp-ct", title: "Pemaknaan Istilah CP CT Fase D",
        explanation: "Pendalaman istilah teknis dalam Capaian Pembelajaran Computational Thinking pada Fase D.",
        context: "LK individu menelaah istilah seperti berpikir komputasional, himpunan data terstruktur, lembar kerja pengolah data, instruksi, dan simbol.",
        outcome: "CP Fase D dipahami sebagai kemampuan memecahkan masalah secara logis, mengolah data sederhana, dan menulis instruksi runtut yang dapat dikaitkan dengan PJOK.",
        keyPoints: ["Istilah CP CT", "Data terstruktur", "Pseudocode sederhana", "Konteks PJOK"],
        documentUrl: topic4Worksheet1, documentLabel: "LK 8 - Individu",
        assignmentType: "individual", documentStatus: "current",
      },
      {
        id: "4-c", code: "4.C", slug: "pendalaman-pemahaman-cp-ct", title: "Pendalaman Pemahaman CP CT",
        explanation: "Diskusi kelompok untuk memperdalam makna CP CT Fase D dan menghubungkannya dengan pembelajaran PJOK.",
        context: "Istilah berpikir komputasional, data terstruktur, pseudocode, dan lembar kerja pengolah data dibahas bersama untuk menyamakan pemahaman.",
        outcome: "CT dalam PJOK diposisikan sebagai cara berpikir logis dan terstruktur saat mengolah data aktivitas olahraga serta memilih strategi yang tepat.",
        keyPoints: ["Diskusi istilah", "Makna CP Fase D", "Pengolahan data", "Integrasi PJOK"],
        documentUrl: topic4Worksheet2, documentLabel: "Pendalaman Pemahaman CP CT",
        assignmentType: "group",
      },
      {
        id: "4-d", code: "4.D", slug: "pemaknaan-cp-ct-dalam-kurikulum", title: "Pemaknaan CP CT dalam Kurikulum Nasional",
        explanation: "Catatan pemaknaan CP CT pada fase E dan F serta kesinambungannya terhadap pembelajaran.",
        context: "Hasil presentasi kelompok lain digunakan untuk memahami istilah struktur data, algoritma standar, IPO, model Von Neumann, strategi algoritmik, dan troubleshooting.",
        outcome: "Perkembangan CT bergerak dari data sederhana dan instruksi logis menuju analisis alternatif, efisiensi, struktur data lebih kompleks, dan solusi optimal.",
        keyPoints: ["CP Fase E", "CP Fase F", "Strategi algoritmik", "Kesinambungan kemampuan CT"],
        documentUrl: topic4Worksheet3, documentLabel: "Pemaknaan CP CT dalam Kurikulum Nasional",
        assignmentType: "individual", documentStatus: "current",
      },
    ],
  },
  {
    id: "5", number: 5, slug: "ct-dan-projek", title: "CT dan Projek",
    shortDescription: "Mengintegrasikan Computational Thinking ke dalam projek STEM berbasis sarana olahraga dari bahan bekas.",
    worksheets: [
      {
        id: "5-c-1", code: "5.C.1", slug: "projek-stem-sebelum-ct", title: "Projek STEM sebelum Diintegrasikan dengan CT",
        explanation: "Deskripsi awal projek miniatur sarana dan prasarana olahraga dari bahan bekas sebelum komponen CT diterapkan secara eksplisit.",
        context: "Kelompok merancang, membuat, dan menguji miniatur lapangan, gawang, net, atau lintasan dengan memanfaatkan bahan bekas serta unsur Science, Technology, Engineering, dan Mathematics.",
        outcome: "Memahami kondisi awal projek STEM dan mengenali ruang untuk menambahkan dekomposisi, pola, abstraksi, algoritma, data, serta pemodelan.",
        keyPoints: ["Miniatur sarana olahraga", "Pemanfaatan bahan bekas", "Unsur STEM", "Kondisi sebelum integrasi CT"],
        documentUrl: topic5Worksheet1, documentLabel: "LK 11 - Projek STEM sebelum CT",
        assignmentType: "group",
      },
      {
        id: "5-c-2", code: "5.C.2", slug: "projek-stem-setelah-ct", title: "Projek STEM setelah Diintegrasikan dengan CT",
        explanation: "Rancangan projek miniatur olahraga yang menggabungkan dekomposisi, pengenalan pola, abstraksi, algoritma, data, logika kondisional, serta pemodelan dan simulasi.",
        context: "Peserta didik merancang miniatur dari bahan bekas, menyusun langkah kerja, mengukur, menguji kestabilan, mencatat data, memperbaiki rancangan, dan mempresentasikan hasil.",
        outcome: "Projek menjadi sistematis, iteratif, dan berbasis data; peserta didik mampu menjelaskan alasan rancangan serta melakukan perbaikan berdasarkan hasil pengujian.",
        keyPoints: ["Dekomposisi dan algoritma", "Pengukuran dan analisis data", "Logika IF-ELSE", "Uji dan perbaikan model"],
        documentUrl: topic5Worksheet2, documentLabel: "LK 12 - Projek STEM setelah CT",
        assignmentType: "group",
      },
      {
        id: "5-c-3", code: "5.C.3", slug: "perbedaan-projek-sebelum-sesudah-ct", title: "Perbedaan Projek STEM Sebelum dan Sesudah CT",
        explanation: "Perbandingan perubahan cara kerja projek miniatur sarana olahraga sebelum dan sesudah Computational Thinking diintegrasikan.",
        context: "Perbandingan membahas perubahan pada proses pemecahan masalah, pengumpulan data, pengujian, perbaikan, komunikasi, dan hasil belajar.",
        outcome: "Integrasi CT mengubah projek dari sekadar menghasilkan miniatur menjadi proses yang terstruktur, logis, berbasis data, dan reflektif.",
        keyPoints: ["Sebelum dan sesudah CT", "Data dan pengujian", "Perbaikan iteratif", "Komunikasi hasil projek"],
        documentUrl: topic5Worksheet3, documentLabel: "LK 13 - Perbedaan Projek STEM",
        assignmentType: "group",
      },
      {
        id: "5-d", code: "5.D", slug: "catatan-perbaikan-presentasi", title: "Catatan Perbaikan Presentasi",
        explanation: "Catatan perbaikan rancangan integrasi CT ke projek STEM berdasarkan masukan dari dosen dan kelompok lain.",
        context: "Kelompok memperbaiki rancangan miniatur lapangan bola basket dari bahan bekas dengan memperjelas desain, skala, pembagian bagian, pemilihan bahan, langkah kerja, serta pengujian produk.",
        outcome: "Rancangan projek menjadi lebih jelas, sistematis, terukur, dan dapat dievaluasi melalui pencatatan data serta perbaikan berdasarkan hasil pengujian.",
        keyPoints: ["Perbaikan desain dan skala", "Dekomposisi pembuatan miniatur", "Pemilihan bahan sesuai fungsi", "Pengujian dan pencatatan data"],
        assignmentType: "group",
        documentUrl: topic5Worksheet4, documentLabel: "LK 14 - Catatan Perbaikan Presentasi",
      },
    ],
  },
  {
    id: "6", number: 6, slug: "integrasi-ct-dalam-mata-pelajaran", title: "Integrasi CT dalam Mata Pelajaran",
    shortDescription: "Menerapkan CT secara nyata dalam materi PJOK melalui praktik melempar dan menangkap bola.",
    worksheets: [
      {
        id: "6-b-1", code: "6.B.1", slug: "analisis-implementasi-ct-materi-ajar", title: "Analisis Implementasi CT pada Materi Ajar",
        explanation: "Analisis fondasi CT yang sebenarnya sudah muncul pada materi gerak manipulatif melempar dan menangkap bola.",
        context: "Peserta didik menguraikan urutan gerak, membandingkan percobaan, mengenali pola keberhasilan, dan memilih faktor penting seperti koordinasi mata-tangan.",
        outcome: "Memahami bahwa algoritma, dekomposisi, pengenalan pola, dan abstraksi dapat ditemukan dalam pembelajaran PJOK yang sudah berjalan.",
        keyPoints: ["Gerak melempar dan menangkap", "Algoritma gerak", "Dekomposisi keterampilan", "Pola keberhasilan"],
        documentUrl: topic6Worksheet1, documentLabel: "LK 15 - Analisis Implementasi CT",
        assignmentType: "group",
      },
      {
        id: "6-c-1", code: "6.C.1", slug: "integrasi-ct-materi-ajar", title: "Integrasi CT dalam Materi Ajar",
        explanation: "Modifikasi materi gerak manipulatif agar peserta didik secara sadar menganalisis, menguji, dan memperbaiki gerakan menggunakan CT.",
        context: "Peserta didik melakukan lima percobaan melempar dan menangkap, memecah gerak menjadi bagian kecil, menemukan pola, menyusun urutan efektif, lalu merefleksikan hasilnya.",
        outcome: "Pembelajaran PJOK menjadi lebih aktif dan reflektif tanpa kehilangan tujuan keterampilan gerak, karena proses CT hadir dalam praktik konkret.",
        keyPoints: ["Tantangan lima percobaan", "Analisis gerak", "Urutan gerakan efektif", "Refleksi dan perbaikan"],
        documentUrl: topic6Worksheet2, documentLabel: "LK 16 - Integrasi CT dalam Materi Ajar",
        assignmentType: "group",
      },
      {
        id: "6-d-1", code: "6.D.1", slug: "evaluasi-integrasi-ct-materi-ajar", title: "Evaluasi Integrasi CT dalam Materi Ajar",
        explanation: "Evaluasi dan saran tentang penerapan CT pada materi melempar dan menangkap bola berdasarkan diskusi kelompok.",
        context: "Evaluasi menekankan CT sebagai cara berpikir yang dapat diintegrasikan ke aktivitas konkret, bukan materi terpisah yang selalu berkaitan dengan komputer.",
        outcome: "Guru perlu menilai proses berpikir, memberi pertanyaan pemantik, dan memberi ruang untuk mencoba, membandingkan, menemukan pola, serta memperbaiki gerakan.",
        keyPoints: ["CT dalam aktivitas konkret", "Pertanyaan pemantik", "Asesmen proses", "Saran integrasi pembelajaran"],
        documentUrl: topic6Worksheet3, documentLabel: "LK 17 - Evaluasi Integrasi CT",
        assignmentType: "group",
      },
      {
        id: "6-d-2", code: "6.D.2", slug: "kesimpulan-integrasi-ct", title: "Kesimpulan Integrasi CT dalam Materi Ajar",
        explanation: "Sintesis akhir tentang cara mengintegrasikan CT ke dalam pembelajaran PJOK secara sengaja, relevan, dan bermakna.",
        context: "Kesimpulan merangkum pengalaman mengamati, menganalisis, mencoba, menemukan masalah, menentukan strategi, menguji, dan memperbaiki keterampilan gerak.",
        outcome: "CT mendukung tujuan PJOK dengan membantu peserta didik berpikir sistematis dan memecahkan masalah tanpa menggantikan tujuan utama pembelajaran gerak.",
        keyPoints: ["CT lintas mata pelajaran", "Strategi berbasis percobaan", "Perbaikan keterampilan", "Peran guru sebagai fasilitator"],
        documentUrl: topic6Worksheet4, documentLabel: "LK 18 - Kesimpulan Integrasi CT",
        assignmentType: "group",
      },
    ],
  },
];

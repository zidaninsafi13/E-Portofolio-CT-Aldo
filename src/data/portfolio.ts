import type { FinalReport, Infographic } from "../types/portfolio";

export const infographic: Infographic = {
  id: "main-infographic",
  title: "Infografis Perjalanan Belajar Computational Thinking",
  description:
    "Ringkasan visual perjalanan belajar dari fondasi Computational Thinking, problem solving, kurikulum, projek, hingga penerapannya dalam pembelajaran PJOK.",
  format: "PNG",
  url: new URL("../../tugas/Infografis/infografis.png", import.meta.url).href,
  thumbnail: new URL("../../tugas/Infografis/infografis.png", import.meta.url).href,
  author: "Aldona Abdullah Ibrahim",
  year: 2026,
  status: "reference",
  notice: "Infografis Aldona akan diperbarui setelah materi individu dan visual final tersedia.",
};

export const finalReport: FinalReport = {
  id: "final-report",
  title: "Laporan Akhir Portofolio Computational Thinking",
  description:
    "Laporan ini merangkum perjalanan belajar Computational Thinking dari Topik 1 sampai Topik 6, dengan fokus pada penerapan empat fondasi CT dalam materi gerak manipulatif melempar dan menangkap bola pada pembelajaran PJOK serta proses restrukturisasi portofolio.",
  format: "PDF",
  url: new URL("../../tugas/Laporan-Akhir/Laporan_Akhir_Nw.pdf", import.meta.url).href,
  downloadable: true,
  author: "Aldona Abdullah Ibrahim",
  year: 2026,
  status: "reference",
  notice: "Laporan akhir Aldona akan ditambahkan setelah tugas individu selesai.",
};

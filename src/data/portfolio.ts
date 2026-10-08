import type { FinalReport, Infographic } from "../types/portfolio";

export const infographic: Infographic = {
  id: "main-infographic",
  title: "Infografis Perjalanan Belajar Computational Thinking",
  description:
    "Ringkasan visual perjalanan belajar Aldona dalam memahami Computational Thinking, dari empat fondasi CT hingga penerapannya dalam problem solving, projek, kurikulum, dan pembelajaran PJOK.",
  format: "PNG",
  url: new URL("../../tugas/Infografis/Infografis_Aldona.png", import.meta.url).href,
  thumbnail: new URL("../../tugas/Infografis/Infografis_Aldona.png", import.meta.url).href,
  author: "Aldona Abdullah Ibrahim",
  year: 2026,
  status: "current",
};

export const finalReport: FinalReport = {
  id: "final-report",
  title: "Laporan Akhir Portofolio Computational Thinking",
  description:
    "Laporan akhir ini mendokumentasikan perubahan pemahaman Aldona tentang Computational Thinking, hubungan antartopik dan artefak, serta penerapannya dalam problem solving, projek, kurikulum, dan pembelajaran PJOK. Laporan juga menjelaskan proses restrukturisasi portofolio dan rencana tindak lanjut sebagai calon guru.",
  format: "PDF",
  url: new URL("../../tugas/Laporan-Akhir/1_Laporan_Akhir_Aldona.pdf", import.meta.url).href,
  downloadable: true,
  author: "Aldona Abdullah Ibrahim",
  year: 2026,
  status: "current",
};

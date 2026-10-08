import { useState } from "react";

import { FinalPageHeader } from "../components/portfolio/FinalPageHeader";
import { ShowcasePreviewModal } from "../components/portfolio/ShowcasePreviewModal";
import { Icon } from "../components/ui/Icon";
import { finalReport } from "../data/portfolio";
import { profile } from "../data/profile";

export function FinalReportPage() {
  const hasReport = Boolean(finalReport.url);
  const canDownload = hasReport && finalReport.downloadable;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="final-page report-page" aria-labelledby="report-title">
      <div className="final-page-decoration final-page-decoration-green" aria-hidden="true" />
      <div className="site-container final-page-inner">
        <FinalPageHeader
          eyebrow="Laporan Akhir"
          title="Dokumentasi Akhir"
          description="Laporan akhir Aldona merangkum perkembangan pemahaman, hubungan antartopik, restrukturisasi artefak, dan rencana penerapan Computational Thinking dalam pembelajaran PJOK."
          quote="Proses yang tertata akan lebih mudah dibaca dan dipelajari kembali."
          icon="document"
          iconLabel="Catatan utuh"
          titleId="report-title"
          tone="green"
        />

        <article className="showcase-card report-showcase">
          <div className="showcase-preview report-preview">
            {hasReport ? (
              <iframe
                className="report-document-frame"
                src={`${finalReport.url}#page=1&view=FitH`}
                title={`Pratinjau ${finalReport.title}`}
              />
            ) : (
              <div className="showcase-empty">
                <span className="pdf-mark"><Icon name="document" size={38} /><b>PDF</b></span>
                <strong>Dokumen laporan belum tersedia</strong>
                <small>Pratinjau halaman laporan akan tampil di area ini.</small>
              </div>
            )}
          </div>

          <div className="showcase-copy">
            <p className="showcase-kicker">Dokumen Portofolio</p>
            <h2>{finalReport.title}</h2>
            <p>{finalReport.description}</p>
            <dl className="showcase-meta">
              <div>
                <dt><Icon name="person" size={17} /> Penyusun</dt>
                <dd>{finalReport.author ?? profile.name}</dd>
              </div>
              <div>
                <dt><Icon name="calendar" size={17} /> Tahun</dt>
                <dd>{finalReport.year ?? profile.year}</dd>
              </div>
              <div>
                <dt><Icon name="document" size={17} /> Format</dt>
                <dd>{finalReport.format ?? "Belum tersedia"}</dd>
              </div>
            </dl>

            <div className="showcase-actions">
              {hasReport ? (
                <button className="showcase-action primary" type="button" onClick={() => setIsPreviewOpen(true)}>
                  <Icon name="document" size={18} /> Lihat Laporan
                </button>
              ) : (
                <button className="showcase-action primary disabled" type="button" disabled>
                  <Icon name="document" size={18} /> Lihat Laporan
                </button>
              )}
              {canDownload ? (
                <a className="showcase-action secondary" href={finalReport.url} download>
                  <Icon name="arrow-down" size={18} /> Unduh PDF
                </a>
              ) : (
                <button className="showcase-action secondary disabled" type="button" disabled>
                  <Icon name="arrow-down" size={18} /> Unduh PDF
                </button>
              )}
            </div>
          </div>
        </article>
        {isPreviewOpen && finalReport.url ? (
          <ShowcasePreviewModal
            eyebrow="Laporan Akhir"
            title={finalReport.title}
            description={finalReport.description}
            url={finalReport.url}
            kind="pdf"
            downloadName="laporan-akhir-e-portfolio.pdf"
            onClose={() => setIsPreviewOpen(false)}
          />
        ) : null}
      </div>
    </section>
  );
}

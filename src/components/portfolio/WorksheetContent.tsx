import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { LearningWorksheet } from "../../types/portfolio";
import { Icon } from "../ui/Icon";

type WorksheetContentProps = {
  worksheet?: LearningWorksheet;
};

export function WorksheetContent({ worksheet }: WorksheetContentProps) {
  const [isDocumentPreviewOpen, setIsDocumentPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isDocumentPreviewOpen) {
      return undefined;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDocumentPreviewOpen(false);
      }
    };

    document.body.classList.add("document-preview-open");
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("document-preview-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isDocumentPreviewOpen]);

  if (!worksheet) {
    return (
      <section className="topic-reading topic-reading-empty" aria-labelledby="empty-worksheet-title">
        <div className="topic-reading-heading">
          <span className="worksheet-code" aria-hidden="true">—</span>
          <div>
            <p>Lembar Kerja</p>
            <h2 id="empty-worksheet-title">LK belum tersedia</h2>
          </div>
        </div>
        <article className="topic-content-card worksheet-explanation">
          <span className="content-card-icon blue" aria-hidden="true">
            <Icon name="document" size={28} />
          </span>
          <div>
            <h3>Penjelasan LK</h3>
            <p>[LK dan penjelasannya akan ditambahkan]</p>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="topic-reading" aria-labelledby="worksheet-content-title">
      <div className="topic-reading-heading">
        <span className="worksheet-code">{worksheet.code}</span>
        <div>
          <p>Lembar Kerja {worksheet.code}</p>
          <h2 id="worksheet-content-title">{worksheet.title}</h2>
        </div>
      </div>

      <div className="worksheet-badges" aria-label="Status tugas">
        <span className={`assignment-badge assignment-badge-${worksheet.assignmentType ?? "group"}`}>
          {worksheet.assignmentType === "individual" ? "Individu" : "Kelompok"}
        </span>
        {worksheet.documentStatus === "reference" ? <span className="reference-badge">Referensi sementara</span> : null}
      </div>

      <article className="topic-content-card worksheet-explanation">
        <span className="content-card-icon green" aria-hidden="true">
          <Icon name="book" size={28} />
        </span>
        <div>
          <h3>Penjelasan LK</h3>
          <p>{worksheet.explanation ?? "[Penjelasan LK akan ditambahkan]"}</p>
        </div>
      </article>

      <div className="worksheet-summary-grid">
        <article className="worksheet-summary-card worksheet-summary-context">
          <span className="content-card-icon blue" aria-hidden="true">
            <Icon name="puzzle" size={25} />
          </span>
          <div>
            <p className="worksheet-summary-label">Konteks Kegiatan</p>
            <h3>Apa yang dikerjakan</h3>
            <p>{worksheet.context ?? "[Konteks kegiatan akan ditambahkan]"}</p>
          </div>
        </article>

        <article className="worksheet-summary-card worksheet-summary-outcome">
          <span className="content-card-icon green" aria-hidden="true">
            <Icon name="chart" size={25} />
          </span>
          <div>
            <p className="worksheet-summary-label">Hasil Pembelajaran</p>
            <h3>Inti yang diperoleh</h3>
            <p>{worksheet.outcome ?? "[Hasil pembelajaran akan ditambahkan]"}</p>
          </div>
        </article>
      </div>

      {worksheet.keyPoints?.length ? (
        <article className="worksheet-key-points">
          <div>
            <p className="worksheet-summary-label">Pokok Pembahasan</p>
            <h3>Poin penting dari LK</h3>
          </div>
          <ul>
            {worksheet.keyPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      ) : null}

      {worksheet.documentUrl ? (
        <article className="worksheet-document-card">
          <span className="worksheet-document-icon" aria-hidden="true"><Icon name="document" size={29} /></span>
          <div>
            <p className="worksheet-summary-label">Dokumen Pendukung</p>
            <h3>{worksheet.documentLabel ?? "Dokumen LK"}</h3>
            <p>Dokumen PDF asli tersedia untuk dibaca atau diunduh sebagai bahan revisi.</p>
            {worksheet.documentNotice ? <p className="document-notice">{worksheet.documentNotice}</p> : null}
          </div>
          <button className="worksheet-document-action" type="button" onClick={() => setIsDocumentPreviewOpen(true)}>
            <Icon name="expand" size={18} /> Buka PDF
          </button>
        </article>
      ) : null}

      {isDocumentPreviewOpen && worksheet.documentUrl ? createPortal(
        <div
          className="document-preview-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsDocumentPreviewOpen(false);
            }
          }}
        >
          <section className="document-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="document-preview-title">
            <header className="document-preview-header">
              <div>
                <p className="worksheet-summary-label">Preview Dokumen</p>
                <h2 id="document-preview-title">{worksheet.documentLabel ?? worksheet.title}</h2>
              </div>
              <button className="document-preview-close" type="button" onClick={() => setIsDocumentPreviewOpen(false)} aria-label="Tutup preview PDF">
                <Icon name="close" size={22} />
              </button>
            </header>

            <div className="document-preview-layout">
              <div className="document-preview-frame">
                <iframe src={`${worksheet.documentUrl}#view=FitH`} title={`Preview ${worksheet.documentLabel ?? worksheet.title}`} />
              </div>

              <aside className="document-preview-summary" aria-label="Kesimpulan LK">
                <span className="document-preview-summary-icon" aria-hidden="true"><Icon name="lightbulb" size={25} /></span>
                <p className="worksheet-summary-label">Kesimpulan LK</p>
                <h3>{worksheet.title}</h3>
                <p>{worksheet.outcome ?? worksheet.explanation ?? "Kesimpulan LK akan ditambahkan."}</p>

                {worksheet.keyPoints?.length ? (
                  <ul>
                    {worksheet.keyPoints.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                ) : null}

                <div className="document-preview-actions">
                  <a href={worksheet.documentUrl} target="_blank" rel="noreferrer">
                    <Icon name="expand" size={17} /> Tab baru
                  </a>
                  <a href={worksheet.documentUrl} download>
                    <Icon name="arrow-down" size={17} /> Unduh
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </div>,
        document.body,
      ) : null}
    </section>
  );
}

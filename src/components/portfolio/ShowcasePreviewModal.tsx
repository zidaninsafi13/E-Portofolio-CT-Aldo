import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Icon } from "../ui/Icon";

type ShowcasePreviewModalProps = {
  title: string;
  eyebrow: string;
  description: string;
  url: string;
  kind: "pdf" | "image";
  imageAlt?: string;
  downloadName?: string;
  onClose: () => void;
};

export function ShowcasePreviewModal({
  title,
  eyebrow,
  description,
  url,
  kind,
  imageAlt,
  downloadName,
  onClose,
}: ShowcasePreviewModalProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("document-preview-open");
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("document-preview-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="document-preview-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="document-preview-dialog" role="dialog" aria-modal="true" aria-labelledby="showcase-preview-title">
        <header className="document-preview-header">
          <div>
            <p className="worksheet-summary-label">{eyebrow}</p>
            <h2 id="showcase-preview-title">{title}</h2>
          </div>
          <button className="document-preview-close" type="button" onClick={onClose} aria-label="Tutup preview">
            <Icon name="close" size={22} />
          </button>
        </header>

        <div className="document-preview-layout">
          <div className={`document-preview-frame${kind === "image" ? " document-preview-image-frame" : ""}`}>
            {kind === "image" ? (
              <img className="document-preview-image" src={url} alt={imageAlt ?? title} />
            ) : (
              <iframe src={`${url}#view=FitH`} title={`Preview ${title}`} />
            )}
          </div>

          <aside className="document-preview-summary" aria-label={`Penjelasan ${title}`}>
            <span className="document-preview-summary-icon" aria-hidden="true"><Icon name="lightbulb" size={25} /></span>
            <p className="worksheet-summary-label">Penjelasan</p>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="document-preview-actions">
              <a href={url} target="_blank" rel="noreferrer">
                <Icon name="expand" size={17} /> Tab baru
              </a>
              <a href={url} download={downloadName}>
                <Icon name="arrow-down" size={17} /> Unduh
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>,
    document.body,
  );
}

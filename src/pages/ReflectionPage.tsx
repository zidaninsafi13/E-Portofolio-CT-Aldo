import { useState } from "react";

import { FinalPageHeader } from "../components/portfolio/FinalPageHeader";
import { ShowcasePreviewModal } from "../components/portfolio/ShowcasePreviewModal";
import { Icon } from "../components/ui/Icon";
import { reflections } from "../data/reflection";

export function ReflectionPage() {
  const [activeReflection, setActiveReflection] = useState<(typeof reflections)[number] | null>(null);

  return (
    <section className="final-page reflection-page" aria-labelledby="reflection-title">
      <div className="final-page-decoration final-page-decoration-blue" aria-hidden="true" />
      <div className="site-container final-page-inner">
        <FinalPageHeader
          eyebrow="Refleksi"
          title="Catatan Perjalanan"
          description="Ruang untuk menempatkan refleksi pada dua titik penting dalam perjalanan pembelajaran."
          quote="Berhenti sejenak membantu kita melihat arah tumbuh berikutnya."
          icon="sprout"
          iconLabel="Terus bertumbuh"
          titleId="reflection-title"
          tone="green"
        />

        <div className="reflection-grid">
          {reflections.map((reflection, index) => {
            const hasContent = !reflection.content.trim().startsWith("[");
            const icon = index === 0 ? "puzzle" : "sprout";

            return (
              <article className={`reflection-card reflection-card-${index === 0 ? "blue" : "green"}`} key={reflection.id}>
                <div className="reflection-card-icon"><Icon name={icon} size={30} /></div>
                <p className="reflection-number">0{index + 1}</p>
                <h2>{reflection.title}</h2>
                <p>{reflection.content}</p>
                {reflection.status === "reference" ? (
                  <p className="reference-notice"><strong>Referensi sementara.</strong> {reflection.notice}</p>
                ) : null}
                {reflection.documentUrl ? (
                  <button className="reflection-action" type="button" onClick={() => setActiveReflection(reflection)}>
                    Baca Refleksi <Icon name="arrow-right" size={18} />
                  </button>
                ) : (
                  <button className={`reflection-action${hasContent ? "" : " disabled"}`} type="button" disabled={!hasContent}>
                    Baca Refleksi <Icon name="arrow-right" size={18} />
                  </button>
                )}
              </article>
            );
          })}
        </div>
        {activeReflection?.documentUrl ? (
          <ShowcasePreviewModal
            eyebrow="Refleksi"
            title={activeReflection.title}
            description={activeReflection.content}
            url={activeReflection.documentUrl}
            kind="pdf"
            downloadName={`${activeReflection.id}.pdf`}
            onClose={() => setActiveReflection(null)}
          />
        ) : null}
      </div>
    </section>
  );
}

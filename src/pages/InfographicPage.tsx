import { useState } from "react";

import { FinalPageHeader } from "../components/portfolio/FinalPageHeader";
import { ShowcasePreviewModal } from "../components/portfolio/ShowcasePreviewModal";
import { Icon } from "../components/ui/Icon";
import { infographic } from "../data/portfolio";
import { profile } from "../data/profile";

export function InfographicPage() {
  const hasInfographic = Boolean(infographic.url);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="final-page infographic-page" aria-labelledby="infographic-title">
      <div className="final-page-decoration final-page-decoration-blue" aria-hidden="true" />
      <div className="site-container final-page-inner">
        <FinalPageHeader
          eyebrow="Infografis"
          title="Visualisasi Pembelajaran"
          description="Rangkuman visual Aldona tentang empat fondasi Computational Thinking, perubahan pemahaman, perjalanan belajar, dan penerapannya dalam pembelajaran PJOK."
          quote="Ide yang kompleks dapat terasa lebih dekat ketika divisualkan."
          icon="lightbulb"
          iconLabel="Ide menjadi visual"
          titleId="infographic-title"
        />

        <article className="showcase-card">
          <div className="showcase-preview infographic-preview">
            {infographic.thumbnail ? (
              <img src={infographic.thumbnail} alt={`Pratinjau ${infographic.title}`} />
            ) : (
              <div className="showcase-empty">
                <span><Icon name="image" size={42} /></span>
                <strong>[Infografis akan ditambahkan]</strong>
                <small>Pratinjau karya akan tampil di area ini.</small>
              </div>
            )}
          </div>

          <div className="showcase-copy">
            <p className="showcase-kicker">Infografis Utama</p>
            <h2>{infographic.title}</h2>
            <p>{infographic.description}</p>
            <dl className="showcase-meta">
              <div>
                <dt><Icon name="person" size={17} /> Penyusun</dt>
                <dd>{infographic.author ?? profile.name}</dd>
              </div>
              <div>
                <dt><Icon name="calendar" size={17} /> Tahun</dt>
                <dd>{infographic.year ?? profile.year}</dd>
              </div>
              <div>
                <dt><Icon name="tag" size={17} /> Mata Kuliah</dt>
                <dd>{profile.course}</dd>
              </div>
            </dl>

            {hasInfographic ? (
              <button className="showcase-action primary" type="button" onClick={() => setIsPreviewOpen(true)}>
                <Icon name="expand" size={18} /> Lihat Ukuran Penuh
              </button>
            ) : (
              <button className="showcase-action primary disabled" type="button" disabled>
                <Icon name="expand" size={18} /> Lihat Ukuran Penuh
              </button>
            )}
          </div>
        </article>
        {isPreviewOpen && infographic.url ? (
          <ShowcasePreviewModal
            eyebrow="Infografis"
            title={infographic.title}
            description={infographic.description}
            url={infographic.url}
            kind="image"
            imageAlt={`Preview ${infographic.title}`}
            downloadName="infografis-perjalanan-belajar.png"
            onClose={() => setIsPreviewOpen(false)}
          />
        ) : null}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { topics } from "../../data/topics";
import { Icon } from "../ui/Icon";

export function HomeHero() {
  const worksheets = topics.flatMap((topic) => topic.worksheets);
  return (
    <section className="home-hero site-container" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Portofolio pembelajaran / {profile.year}</p>
        <h1 id="home-title"><span className="hero-line"><span>Berpikir terarah.</span></span><span className="hero-line"><em>Bergerak</em></span><span className="hero-line"><span>lebih bermakna.</span></span></h1>
        <p className="hero-subtitle">Computational Thinking dalam pendidikan jasmani.</p>
        <p className="hero-description">Catatan perjalanan Aldona menghubungkan cara berpikir sistematis, pemecahan masalah, dan praktik pembelajaran PJOK.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/topik">Jelajahi perjalanan <Icon name="arrow-right" size={18} /></Link>
          <a className="text-link" href="#profil">Kenali Aldona <Icon name="arrow-down" size={16} /></a>
        </div>
        <dl className="hero-stats">
          <div><dt>Topik pembelajaran</dt><dd>{String(topics.length).padStart(2, "0")}</dd></div>
          <div><dt>Lembar kerja</dt><dd>{String(worksheets.length).padStart(2, "0")}</dd></div>
          <div><dt>Fondasi berpikir</dt><dd>04</dd></div>
        </dl>
      </div>
      <figure className="hero-portrait">
        <div className="portrait-frame">
          <img src={profile.photo} alt={`Foto profil ${profile.name}`} fetchPriority="high" />
          <span className="portrait-label">Calon pendidik · PJOK</span>
        </div>
        <figcaption>
          <div><strong>{profile.name}</strong><span>NIM {profile.nim}</span></div>
          <span className="portrait-monogram" aria-hidden="true">AA.</span>
        </figcaption>
      </figure>
    </section>
  );
}

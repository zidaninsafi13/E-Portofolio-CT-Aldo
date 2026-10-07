import { Link } from "react-router-dom";
import { InstitutionCard } from "../components/portfolio/InstitutionCard";
import { HomeHero } from "../components/portfolio/HomeHero";
import { ProfileSection } from "../components/portfolio/ProfileSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Icon } from "../components/ui/Icon";
import { institutions } from "../data/institutions";
import { topics } from "../data/topics";

const foundations = [
  ["01", "Dekomposisi", "Mengurai tantangan menjadi bagian-bagian yang dapat dikerjakan."],
  ["02", "Pengenalan pola", "Menemukan kesamaan untuk memahami masalah dan strategi."],
  ["03", "Abstraksi", "Memilih informasi penting dan menjaga fokus pada tujuan."],
  ["04", "Algoritma", "Menyusun langkah yang runtut, lalu menguji dan memperbaikinya."],
];

export function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="foundations-section" aria-labelledby="foundations-title">
        <div className="site-container">
          <div className="section-heading">
            <div><p className="eyebrow">Cara berpikir, bukan sekadar teknologi</p><h2 id="foundations-title">Empat fondasi. Banyak kemungkinan.</h2></div>
            <p className="section-aside">Dari memahami persoalan hingga merancang pembelajaran yang lebih terstruktur.</p>
          </div>
          <div className="foundations-grid">
            {foundations.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="home-section journey-section" aria-labelledby="journey-title">
        <SectionHeading eyebrow="01 / Perjalanan belajar" title="Dari konsep menuju praktik." titleId="journey-title" aside="Enam topik yang saling terhubung. Setiap tahap menyertakan konteks, hasil belajar, dan dokumen tugas." />
        <div className="journey-list">
          {topics.map((topic) => <Link className="journey-row" to={`/topik/${topic.id}`} key={topic.id}>
            <span className="journey-number">{String(topic.number).padStart(2, "0")}</span>
            <div><h3>{topic.title}</h3><p>{topic.shortDescription}</p></div>
            <span className="journey-count">{topic.worksheets.length} LK</span><Icon name="arrow-right" size={22} />
          </Link>)}
        </div>
      </section>
      <ProfileSection />
      <section className="home-section environment-section" aria-labelledby="environment-title">
        <SectionHeading eyebrow="03 / Lingkungan belajar" title="Bertumbuh bersama lingkungan." titleId="environment-title" aside="Perkuliahan memberi landasan. Sekolah menjadi ruang untuk menghubungkannya dengan praktik." />
        <div className="institutions-grid">{institutions.map((institution) => <InstitutionCard key={institution.id} institution={institution} />)}</div>
      </section>
      <section className="home-topic-invite site-container" aria-labelledby="topic-invite-title">
        <div><p className="eyebrow">Belajar · Mencoba · Merefleksikan</p><h2 id="topic-invite-title">Setiap proses menyimpan<br /><em>pelajaran berharga.</em></h2><p>Telusuri refleksi dan dokumentasi perjalanan pembelajaran ini.</p></div>
        <Link className="button button-primary" to="/refleksi">Baca refleksi <Icon name="arrow-right" size={18} /></Link>
      </section>
    </>
  );
}

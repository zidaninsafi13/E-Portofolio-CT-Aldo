import { TopicCard } from "../components/portfolio/TopicCard";
import { topics } from "../data/topics";

export function TopicsPage() {
  const worksheets = topics.flatMap((topic) => topic.worksheets);
  const individualCount = worksheets.filter((worksheet) => worksheet.assignmentType === "individual").length;
  return (
    <section className="topics-page site-container" aria-labelledby="topics-title">
      <header className="topics-intro">
        <div><p className="page-eyebrow">Arsip pembelajaran</p><h1 id="topics-title">Satu perjalanan.<br /><em>Enam sudut pandang.</em></h1><p>Jelajahi Computational Thinking dari fondasi berpikir hingga penerapannya dalam pembelajaran PJOK.</p></div>
        <div className="topics-summary"><span className="eyebrow">Isi portofolio</span><strong>{String(worksheets.length).padStart(2, "0")} <small>lembar kerja</small></strong><p>{individualCount} tugas individu · {worksheets.length - individualCount} tugas kelompok</p><span className="summary-note">Pilih topik untuk membaca proses dan hasil belajarnya.</span></div>
      </header>
      <ul className="topic-grid" aria-label="Daftar topik pembelajaran">{topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}</ul>
    </section>
  );
}

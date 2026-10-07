import { Link, useParams, useSearchParams } from "react-router-dom";

import { PreviousNextNavigation } from "../components/portfolio/PreviousNextNavigation";
import { WorksheetContent } from "../components/portfolio/WorksheetContent";
import { WorksheetTabs } from "../components/portfolio/WorksheetTabs";
import { Icon } from "../components/ui/Icon";
import { topics } from "../data/topics";
import { NotFoundPage } from "./NotFoundPage";

export function TopicDetailPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const [searchParams] = useSearchParams();
  const topic = topics.find((item) => item.id === topicId || item.slug === topicId);

  if (!topic) {
    return <NotFoundPage />;
  }

  const requestedWorksheet = searchParams.get("lk")?.toLowerCase();
  const activeWorksheet = topic.worksheets.find((worksheet) =>
    [worksheet.id, worksheet.slug, worksheet.code].some((value) => value.toLowerCase() === requestedWorksheet),
  ) ?? topic.worksheets[0];
  const [titleLead, ...titleAccentWords] = topic.title.split(" ");

  return (
    <section className="topic-detail-page" aria-labelledby="topic-title">
      <div className="topic-detail-hero">
        <div className="topic-detail-hero-inner">
          <div className="topic-detail-copy">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">
                <Icon name="home" size={17} />
                <span className="sr-only">Beranda</span>
              </Link>
              <span aria-hidden="true">/</span>
              <Link to="/topik">Topik</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Topik {topic.number}</span>
            </nav>

            <p className="topic-detail-label">Topik {String(topic.number).padStart(2, "0")}</p>
            <h1 id="topic-title">
              <span>{titleLead}</span>{" "}
              {titleAccentWords.length ? <strong>{titleAccentWords.join(" ")}</strong> : null}
            </h1>
            {topic.shortDescription ? <p className="topic-detail-description">{topic.shortDescription}</p> : null}

            <div className="topic-detail-meta" aria-label="Ringkasan topik">
              <span><strong>{String(topic.number).padStart(2, "0")}</strong> Urutan topik</span>
              <span><strong>{String(topic.worksheets.length).padStart(2, "0")}</strong> Lembar kerja</span>
            </div>
          </div>

          <div className="topic-detail-index" aria-hidden="true">{String(topic.number).padStart(2, "0")}<span>CATATAN BELAJAR</span></div>
        </div>
      </div>

      <div className="topic-detail-content">
        <WorksheetTabs activeWorksheet={activeWorksheet} worksheets={topic.worksheets} />
        <WorksheetContent key={activeWorksheet?.id} worksheet={activeWorksheet} />
        <PreviousNextNavigation activeWorksheet={activeWorksheet} topic={topic} topics={topics} />
      </div>
    </section>
  );
}

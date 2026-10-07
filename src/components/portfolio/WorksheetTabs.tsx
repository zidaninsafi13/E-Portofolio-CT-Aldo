import { Link } from "react-router-dom";

import type { LearningWorksheet } from "../../types/portfolio";

type WorksheetTabsProps = {
  activeWorksheet?: LearningWorksheet;
  worksheets: LearningWorksheet[];
};

export function WorksheetTabs({ activeWorksheet, worksheets }: WorksheetTabsProps) {
  if (!worksheets.length) {
    return (
      <div className="topic-tabs-shell topic-tabs-empty" aria-label="Daftar LK">
        <span>LK belum tersedia</span>
      </div>
    );
  }

  return (
    <nav className="topic-tabs-shell" aria-label="Daftar LK">
      <div className="topic-tabs">
        {worksheets.map((worksheet) => {
          const isActive = worksheet.id === activeWorksheet?.id;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`topic-tab${isActive ? " active" : ""}`}
              key={worksheet.id}
              to={`?lk=${encodeURIComponent(worksheet.slug)}`}
            >
              <strong>{worksheet.code}</strong>
              <span>{worksheet.title}</span>
              <small className={`topic-tab-type topic-tab-type-${worksheet.assignmentType ?? "group"}`}>
                {worksheet.assignmentType === "individual" ? "Individu" : "Kelompok"}
              </small>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import type { NavLinkRenderProps } from "react-router-dom";

import { profile } from "../../data/profile";
import { topics } from "../../data/topics";
import { Icon } from "../ui/Icon";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useEditorialMotion } from "../ui/useEditorialMotion";

const navigationItems = [
  { to: "/", label: "Beranda", end: true },
  { to: "/infografis", label: "Infografis" },
  { to: "/laporan-akhir", label: "Laporan Akhir" },
  { to: "/refleksi", label: "Refleksi" },
];

const primaryNavClassName = ({ isActive }: NavLinkRenderProps) =>
  `nav-link${isActive ? " active" : ""}`;

const topicNavClassName = ({ isActive }: NavLinkRenderProps) =>
  `topic-menu-link${isActive ? " active" : ""}`;

const topicOverviewClassName = ({ isActive }: NavLinkRenderProps) =>
  `topic-menu-link topic-menu-overview${isActive ? " active" : ""}`;

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const topicMenuRef = useRef<HTMLDetailsElement>(null);
  const location = useLocation();
  const motionScope = useEditorialMotion(location.pathname);
  const pageName = location.pathname === "/"
    ? "Beranda"
    : location.pathname.startsWith("/topik/")
      ? "Detail Topik"
      : location.pathname === "/topik"
        ? "Topik Pembelajaran"
        : navigationItems.find((item) => item.to === location.pathname)?.label ?? "Halaman Tidak Ditemukan";

  const closeNavigation = () => {
    setIsMenuOpen(false);
    topicMenuRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    closeNavigation();
    document.title = `${pageName} | Aldona — Portofolio CT`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, pageName]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <p className="sr-only" aria-live="polite" aria-atomic="true">{pageName}</p>

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <span className="reading-progress" aria-hidden="true" />
        <div className="site-container nav-shell">
          <Link className="brand-mark" to="/" onClick={closeNavigation}>
            <span className="brand-mark-icon">
              <img src={new URL("../../../assets/logo-kampus/LogoKampus.webp", import.meta.url).href} alt="Logo Universitas Nusantara PGRI Kediri" />
            </span>
            <span>
              <strong>PPG Prajabatan</strong>
              <small>Universitas Nusantara PGRI Kediri</small>
            </span>
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size={22} />
          </button>

          <nav
            id="primary-navigation"
            className={`nav-links${isMenuOpen ? " is-open" : ""}`}
            aria-label="Navigasi utama"
          >
            {navigationItems.slice(0, 1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={primaryNavClassName}
                onClick={closeNavigation}
              >
                {item.label}
              </NavLink>
            ))}

            <details className="topic-menu" ref={topicMenuRef}>
              <summary className={`nav-link${location.pathname.startsWith("/topik") ? " active" : ""}`}>
                Topik <Icon name="chevron-down" size={14} className="topic-chevron" />
              </summary>
              <div className="topic-menu-panel">
                <NavLink
                  className={topicOverviewClassName}
                  end
                  to="/topik"
                  onClick={closeNavigation}
                >
                  Semua Topik
                </NavLink>
                {topics.map((topic) => (
                  <NavLink
                    className={topicNavClassName}
                    key={topic.id}
                    to={`/topik/${topic.id}`}
                    onClick={closeNavigation}
                  >
                    <span>Topik {topic.number}</span>
                    <small>{topic.title}</small>
                  </NavLink>
                ))}
              </div>
            </details>

            {navigationItems.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={primaryNavClassName}
                onClick={closeNavigation}
              >
                {item.label}
              </NavLink>
            ))}

          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="site-main" id="main-content" tabIndex={-1}>
        <div className="page-stage" key={location.pathname} ref={motionScope}>
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-shell">
          <div>
            <strong>{profile.name}</strong>
            <span>E-Portfolio Computational Thinking</span>
          </div>
          <div className="footer-meta" aria-label="Informasi portofolio">
            <span>{profile.program}</span>
            <span className="footer-divider" aria-hidden="true" />
            <span>{profile.year}</span>
          </div>
        </div>
      </footer>
    </>
  );
}

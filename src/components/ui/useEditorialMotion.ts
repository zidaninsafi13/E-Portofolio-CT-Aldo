import { useLayoutEffect, useRef } from "react";

// Content stays visible by default. Unsupported browsers simply render it statically.
export function useEditorialMotion(route: string) {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = scope.current;
    if (!root || !("IntersectionObserver" in window) || !Element.prototype.animate) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Map<Element, Animation>();
    const leaveTimers = new Map<Element, number>();
    const observed = new Set<Element>();

    const clearRevealStyles = () => {
      observed.forEach((target) => {
        if (target instanceof HTMLElement) {
          target.style.opacity = "";
          target.style.translate = "";
        }
      });
    };
    let observer: IntersectionObserver | undefined;

    const stop = () => {
      observer?.disconnect();
      leaveTimers.forEach((timer) => window.clearTimeout(timer));
      leaveTimers.clear();
      running.forEach((animation) => animation.cancel());
      running.clear();
      if (preference.matches) clearRevealStyles();
    };
    const start = () => {
      stop();
      if (preference.matches) {
        root.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
        clearRevealStyles();
        return;
      }
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          const oldTimer = leaveTimers.get(target);
          if (oldTimer) window.clearTimeout(oldTimer);
          leaveTimers.delete(target);

          if (isIntersecting) {
            if (target.contains(document.activeElement)) {
              running.get(target)?.finish();
              return;
            }
            running.get(target)?.cancel();
            const index = Array.from(target.parentElement?.children ?? []).indexOf(target);
            const stagger = target.matches(".foundations-grid > article, .topic-card, .institution-card, .reflection-card");
            const isText = target.matches("h1, h2, h3, p, dt, dd, .eyebrow, .page-eyebrow");
            const animation = target.animate(
              [{ opacity: 0, translate: isText ? "0 12px" : "0 24px" }, { opacity: 1, translate: "0 0" }],
              { duration: isText ? 520 : 680, delay: stagger ? (index % 4) * 85 : 0, easing: "cubic-bezier(.22, 1, .36, 1)", fill: "both" },
            );
            running.set(target, animation);
            animation.onfinish = () => {
              if (running.get(target) === animation) {
                if (target instanceof HTMLElement) {
                  target.style.opacity = "1";
                  target.style.translate = "0 0";
                }
                animation.cancel();
                running.delete(target);
              }
            };
            return;
          }

          if (target.contains(document.activeElement)) return;
          const timer = window.setTimeout(() => {
            const current = running.get(target);
            current?.cancel();
            const animation = target.animate(
              [{ opacity: 1, translate: "0 0" }, { opacity: 0, translate: "0 12px" }],
              { duration: 180, easing: "ease-in", fill: "forwards" },
            );
            running.set(target, animation);
            animation.onfinish = () => {
              if (running.get(target) === animation) {
                if (target instanceof HTMLElement) {
                  target.style.opacity = "0";
                  target.style.translate = "0 12px";
                }
                animation.cancel();
                running.delete(target);
              }
            };
          }, 140);
          leaveTimers.set(target, timer);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

      root.querySelectorAll(
        ".section-heading, .foundations-grid > article, .journey-row, .profile-photo-placeholder, " +
        ".profile-details, .institution-card, .home-topic-invite, .topic-card, .showcase-card, .reflection-card, " +
        "main h1:not(.home-hero h1), main h2, main h3, main p, main dt, main dd, main .eyebrow, main .page-eyebrow",
      ).forEach((element) => {
        observed.add(element);
        observer?.observe(element);
      });
    };
    // Keyboard navigation should reveal its destination immediately.
    const revealFocusedContent = () => {
      running.forEach((animation) => {
        const target = (animation.effect as KeyframeEffect | null)?.target;
        if (target instanceof Element && target.contains(document.activeElement)) animation.finish();
      });
    };
    start();
    preference.addEventListener("change", start);
    root.addEventListener("focusin", revealFocusedContent);
    return () => {
      stop();
      preference.removeEventListener("change", start);
      root.removeEventListener("focusin", revealFocusedContent);
    };
  }, [route]);

  return scope;
}

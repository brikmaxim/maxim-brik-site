"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Overlay = "projects" | "info" | "contact" | null;
type View = "work" | "project";
type MenuSection = "work" | "info" | "contact";
type IndicatorPhase = "idle" | "exit" | "enter";
type OverlayPhase = "enter" | "idle" | "control-exit" | "panel-exit" | "blur-exit";
type ProjectClosePhase = "idle" | "exit";

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  image: string;
  visual: string;
  isNew?: boolean;
};

const projects: Project[] = [
  { id: "01", name: "KYNG", category: "CGI,Dev", year: "2026", image: "/kyng-work.png", visual: "kyng", isNew: true },
  { id: "02", name: "Solution", category: "CGI", year: "2022", image: "/sicko-work.png", visual: "solution" },
  { id: "03", name: "NDSP", category: "CGI,AI,Dev", year: "2025", image: "/kyng-detail-drawing.png", visual: "drawing" },
  { id: "04", name: "Yandex", category: "CGI", year: "2023", image: "/kyng-detail-cover.png", visual: "cover-warm" },
  { id: "05", name: "SBER", category: "CGI,Dev", year: "2022", image: "/kyng-detail-side.png", visual: "side-green" },
  { id: "06", name: "Sicko", category: "CGI,AI,Dev", year: "2026", image: "/sicko-work.png", visual: "sicko" },
  { id: "07", name: "9Mice", category: "GD", year: "2024", image: "/kyng-work.png", visual: "kyng-grey" },
  { id: "08", name: "Bogema Leningrad", category: "CGI,Dev", year: "2021", image: "/kyng-detail-cover.png", visual: "cover-blue" },
  { id: "09", name: "KM20", category: "CGI,Dev", year: "2021", image: "/kyng-detail-side.png", visual: "side-dark" },
  { id: "10", name: "Reckless Schoolars", category: "CGI,Dev", year: "2022", image: "/sicko-work.png", visual: "sicko-mono" },
  { id: "11", name: "Omanko", category: "CGI", year: "2022", image: "/kyng-detail-drawing.png", visual: "drawing-dark" },
];

export default function Home() {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [view, setView] = useState<View>("work");
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [budget, setBudget] = useState("5000");
  const [sent, setSent] = useState(false);
  const [menuSection, setMenuSection] = useState<MenuSection>("work");
  const [indicatorPhase, setIndicatorPhase] = useState<IndicatorPhase>("idle");
  const [overlayPhase, setOverlayPhase] = useState<OverlayPhase>("idle");
  const [projectClosePhase, setProjectClosePhase] = useState<ProjectClosePhase>("idle");
  const [dockHidden, setDockHidden] = useState(false);
  const transitionTimers = useRef<number[]>([]);
  const restoreFrames = useRef<number[]>([]);
  const lastScrollY = useRef(0);
  const scrollFrame = useRef<number | null>(null);
  const dockHiddenRef = useRef(false);
  const scrollDistance = useRef(0);
  const scrollDirection = useRef<-1 | 0 | 1>(0);
  const workScrollY = useRef(0);
  const restoreWorkScroll = useRef(false);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
      transitionTimers.current.forEach(window.clearTimeout);
      restoreFrames.current.forEach(window.cancelAnimationFrame);
    };
  }, []);

  useLayoutEffect(() => {
    if (view !== "work" || !restoreWorkScroll.current) return;
    const targetScrollY = workScrollY.current;
    window.scrollTo({ top: targetScrollY, behavior: "auto" });
    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: targetScrollY, behavior: "auto" });
        restoreWorkScroll.current = false;
      });
      restoreFrames.current.push(secondFrame);
    });
    restoreFrames.current.push(firstFrame);
  }, [view]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    scrollDistance.current = 0;
    scrollDirection.current = 0;

    const setDockVisibility = (hidden: boolean) => {
      if (dockHiddenRef.current === hidden) return;
      dockHiddenRef.current = hidden;
      setDockHidden(hidden);
    };

    if (overlay) setDockVisibility(false);

    const onScroll = () => {
      if (scrollFrame.current !== null) return;
      scrollFrame.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const distance = currentScrollY - lastScrollY.current;
        lastScrollY.current = currentScrollY;

        if (overlay || currentScrollY <= 24) {
          scrollDistance.current = 0;
          scrollDirection.current = 0;
          setDockVisibility(false);
          scrollFrame.current = null;
          return;
        }

        if (Math.abs(distance) >= 1) {
          const direction: -1 | 1 = distance > 0 ? 1 : -1;
          if (direction !== scrollDirection.current) {
            scrollDirection.current = direction;
            scrollDistance.current = 0;
          }

          scrollDistance.current += distance;

          if (direction === 1 && scrollDistance.current >= 24) {
            setDockVisibility(true);
            scrollDistance.current = 0;
          } else if (direction === -1 && scrollDistance.current <= -12) {
            setDockVisibility(false);
            scrollDistance.current = 0;
          }
        }

        scrollFrame.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame.current !== null) {
        window.cancelAnimationFrame(scrollFrame.current);
        scrollFrame.current = null;
      }
    };
  }, [overlay]);

  const switchSection = (nextSection: MenuSection, commit: () => void) => {
    transitionTimers.current.forEach(window.clearTimeout);
    transitionTimers.current = [];

    if (menuSection === nextSection) {
      commit();
      return;
    }

    setIndicatorPhase("exit");
    transitionTimers.current.push(window.setTimeout(() => {
      commit();
      setMenuSection(nextSection);
      setIndicatorPhase("enter");
      transitionTimers.current.push(window.setTimeout(() => setIndicatorPhase("idle"), 240));
    }, 180));
  };

  const openOverlay = (nextOverlay: Exclude<Overlay, null>) => {
    transitionTimers.current.forEach(window.clearTimeout);
    transitionTimers.current = [];
    setOverlayPhase("enter");
    setOverlay(nextOverlay);
    transitionTimers.current.push(window.setTimeout(() => setOverlayPhase("idle"), 500));
  };

  const closeOverlay = () => {
    if (!overlay || overlayPhase === "control-exit" || overlayPhase === "panel-exit" || overlayPhase === "blur-exit") return;
    transitionTimers.current.forEach(window.clearTimeout);
    transitionTimers.current = [];
    const changesMenu = menuSection !== "work";
    setOverlayPhase("control-exit");

    transitionTimers.current.push(window.setTimeout(() => {
      if (changesMenu) setIndicatorPhase("exit");
      setOverlayPhase("panel-exit");
      transitionTimers.current.push(window.setTimeout(() => {
        setOverlayPhase("blur-exit");
        transitionTimers.current.push(window.setTimeout(() => {
          setOverlay(null);
          setOverlayPhase("idle");
          setMenuSection("work");
          setIndicatorPhase("idle");
        }, 320));
      }, 240));
    }, 220));
  };

  const openProject = (project: Project = projects[0]) => {
    if (view === "work") workScrollY.current = window.scrollY;
    const commitProject = () => {
      setSelectedProject(project);
      setOverlay(null);
      setOverlayPhase("idle");
      setMenuSection("work");
      setIndicatorPhase("idle");
      setProjectClosePhase("idle");
      setView("project");
      window.history.pushState({ portfolioView: "project" }, "", `${window.location.pathname}${window.location.search}`);
    };

    if (!overlay) {
      commitProject();
      return;
    }

    transitionTimers.current.forEach(window.clearTimeout);
    transitionTimers.current = [];
    setIndicatorPhase("exit");
    setOverlayPhase("panel-exit");
    transitionTimers.current.push(window.setTimeout(() => {
      setOverlayPhase("blur-exit");
      transitionTimers.current.push(window.setTimeout(commitProject, 320));
    }, 240));
  };

  const showWork = () => {
    setOverlay(null);
    setOverlayPhase("idle");
    if (view === "project") {
      restoreWorkScroll.current = true;
      if (window.history.state?.portfolioView === "project") window.history.back();
      else setView("work");
    }
  };

  const closeProjectFromButton = () => {
    if (view !== "project" || projectClosePhase === "exit") return;
    setProjectClosePhase("exit");
    transitionTimers.current.push(window.setTimeout(() => {
      showWork();
      setProjectClosePhase("idle");
    }, 220));
  };

  const selectWork = () => overlay ? closeOverlay() : switchSection("work", showWork);
  const selectInfo = () => switchSection("info", () => openOverlay("info"));
  const selectContact = () => switchSection("contact", () => openOverlay("contact"));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && closeOverlay();
    const onPopState = () => {
      if (view !== "project") return;
      restoreWorkScroll.current = true;
      setOverlay(null);
      setProjectClosePhase("idle");
      setView("work");
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
    };
  }, [overlay, overlayPhase, menuSection, view]);

  return (
    <main className="portfolio-viewport">
      <div className={`portfolio-shell ${view === "project" ? "is-project" : "is-work"}`}>
        <div className="site-content">
          {view === "work" ? <WorkView onOpenProject={openProject} /> : <ProjectView project={selectedProject} />}
        </div>
      </div>

      {overlay && (
        <div
          className={`overlay-layer overlay-layer--active overlay-layer--${overlay} overlay-phase--${overlayPhase}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${overlay} panel`}
        >
          <button className="blur-screen" type="button" onClick={selectWork} aria-label="Close panel" />
          {overlay === "projects" && <ProjectIndex onOpenProject={openProject} />}
          {overlay === "info" && <InfoPanel />}
          {overlay === "contact" && <ContactPanel budget={budget} setBudget={setBudget} sent={sent} setSent={setSent} />}
        </div>
      )}

      <Dock
        overlay={overlay}
        view={view}
        menuSection={menuSection}
        indicatorPhase={indicatorPhase}
        overlayPhase={overlayPhase}
        projectClosePhase={projectClosePhase}
        hidden={dockHidden}
        onProjects={() => openOverlay("projects")}
        onWork={selectWork}
        onInfo={selectInfo}
        onContact={selectContact}
        onClose={selectWork}
        onProjectClose={closeProjectFromButton}
      />
    </main>
  );
}

function WorkView({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  return (
    <section className="work-grid" aria-label="Selected work">
      {projects.map((project) => (
        <button
          className={`project-card project-card--${project.visual}`}
          type="button"
          key={project.id}
          onClick={() => onOpenProject(project)}
        >
          <img className="project-card__image" src={project.image} alt="" />
          <span className="card-chip card-chip--name">{project.name}</span>
          {project.isNew && <span className="card-chip card-chip--new">NEW</span>}
          <span className="sr-only">Open {project.name} project</span>
        </button>
      ))}
    </section>
  );
}

function ProjectView({ project }: { project: Project }) {
  return (
    <article className="project-detail">
      <section className="project-info-card">
        <h1>Info</h1>
        <dl className="project-facts">
          <div><dt>Client:</dt><dd>{project.name}</dd></div>
          <div><dt>Categories:</dt><dd>{project.category}</dd></div>
          <div><dt>Year:</dt><dd>{project.year}</dd></div>
        </dl>
        <div className="project-description">
          <h2>Description</h2>
          <p>Lead Raura’s visual language, tone, and storytelling to ensure a cohesive and distinctive brand identity. Raura explores our relationship with the sun through a device that delivers personalized wellness insights. From conceptual development to producing and directing final visuals.</p>
        </div>
        <div className="project-credits">
          <h2>Credits</h2>
          <div><p>Art Direction<br />CGI</p><p>Gawa, Maxim Brik<br />Maxim Brik</p></div>
        </div>
      </section>

      <figure className="detail-cover">
        <img src="/kyng-detail-cover.png" alt="KYNG silver jewellery object" />
        <span className="card-chip card-chip--name">{project.name}</span>
      </figure>

      <div className="detail-pair">
        <figure><img src="/kyng-detail-side.png" alt="KYNG side view" /></figure>
        <figure className="detail-drawing"><img src="/kyng-detail-drawing.png" alt="KYNG technical drawing" /></figure>
      </div>

      <p className="story-card">Instead of simply placing it on a piece of jewellery, we began looking for a form that could carry the same language. The first reference was a chastity belt — a rigid object built around the body, somewhere between protection, control and ornament.</p>

      <figure className="detail-closeup"><img src="/kyng-detail-cover.png" alt="KYNG silver form close view" /></figure>
    </article>
  );
}

function ProjectIndex({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  return (
    <section className="glass-panel project-index">
      <div className="project-table project-table--head"><span>#</span><span>name</span><span>Categories</span><span>Year</span></div>
      <div className="project-list">
        {projects.map((project) => (
          <button className="project-table" type="button" key={project.id} onClick={() => onOpenProject(project)}>
            {[project.id, project.name, project.category, project.year].map((value) => <span key={value}>{value}</span>)}
          </button>
        ))}
      </div>
    </section>
  );
}

function InfoPanel() {
  return (
    <div className="info-stack">
      <section className="glass-panel about-panel">
        <h2>About</h2>
        <p>Maxim Brik is a visual creative specializing in CGI, AI, Concepts and creative editing. Driven by a desire to reimagine reality, he creates distinctive visual experiences for brands across fashion, digital and technology.</p>
        <h2>Services</h2>
        <p>Art Direction<br />Industrial design<br />Visual identity<br />Graphic systems<br />Web identity<br />Motion Graphic<br />AI</p>
        <h2>Social Media</h2>
        <p><a href="mailto:hello@maximbrik.com">Email</a><br /><a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a><br /><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a></p>
      </section>
      <section className="glass-panel team-panel">
        <h2>Team</h2>
        <p>Maxim Brik<br />Alexey Molchanov<br />Rustam Gaifutdinov</p>
      </section>
    </div>
  );
}

function ContactPanel({ budget, setBudget, sent, setSent }: {
  budget: string;
  setBudget: (value: string) => void;
  sent: boolean;
  setSent: (value: boolean) => void;
}) {
  return (
    <section className="glass-panel contact-panel">
      <label htmlFor="message">Messege</label>
      <textarea id="message" placeholder="Tell us about your project" />
      <div className="budget-block">
        <label htmlFor="budget">Budget</label>
        <input id="budget" type="range" min="1000" max="10000" step="500" value={budget} onChange={(event) => setBudget(event.target.value)} />
        <div className="budget-labels"><span>$1000</span><span>$5000</span><span>$10 000</span></div>
      </div>
      <button className="continue-button" type="button" onClick={() => setSent(true)}>{sent ? "Thank you" : "Continue"}</button>
      {sent && <button className="copy-email" type="button" onClick={() => navigator.clipboard?.writeText("hello@maximbrik.com")}>Copy Email</button>}
    </section>
  );
}

function Dock({ overlay, view, menuSection, indicatorPhase, overlayPhase, projectClosePhase, hidden, onProjects, onWork, onInfo, onContact, onClose, onProjectClose }: {
  overlay: Overlay;
  view: View;
  menuSection: MenuSection;
  indicatorPhase: IndicatorPhase;
  overlayPhase: OverlayPhase;
  projectClosePhase: ProjectClosePhase;
  hidden: boolean;
  onProjects: () => void;
  onWork: () => void;
  onInfo: () => void;
  onContact: () => void;
  onClose: () => void;
  onProjectClose: () => void;
}) {
  const active = menuSection === "info" ? "Info" : menuSection === "contact" ? "Contact" : "Work";
  const items = ["Work", "Info", "Contact"] as const;
  const itemClass = { Work: "dock-work", Info: "dock-info", Contact: "dock-contact" };
  const itemAction = { Work: onWork, Info: onInfo, Contact: onContact };

  return (
    <>
      <nav className={`dock dock--base ${overlay ? "dock--background" : ""} ${hidden ? "dock--hidden" : ""} indicator-${overlay ? "idle" : indicatorPhase} project-close-${projectClosePhase}`} aria-label="Primary navigation">
        <div className="dock-item dock-circle dock-plus"><button type="button" onClick={overlay ? undefined : onProjects} aria-label="Open project index" aria-disabled={Boolean(overlay)} tabIndex={overlay ? -1 : 0}><span /></button></div>
        {view === "project" && <div className="dock-item dock-circle dock-project-close"><button type="button" onClick={overlay ? undefined : onProjectClose} aria-label="Close project" aria-disabled={Boolean(overlay)} tabIndex={overlay ? -1 : 0}><span /></button></div>}
        <div className="dock-links">
          {items.map((item) => (
            <div key={item} className={`dock-item dock-pill ${itemClass[item]} ${item === "Work" ? "is-active" : ""}`}><button type="button" onClick={overlay ? undefined : itemAction[item]} aria-disabled={Boolean(overlay)} tabIndex={overlay ? -1 : 0}><span>{item}</span></button></div>
          ))}
        </div>
      </nav>
      {overlay && (
        <nav className={`dock dock--foreground is-open ${hidden ? "dock--hidden" : ""} indicator-${indicatorPhase} overlay-phase-${overlayPhase}`} aria-label="Panel navigation">
          <div className="dock-links">
            {items.map((item) => (
              <div key={item} className={`dock-item dock-pill dock-overlay-pill ${itemClass[item]} is-active ${active === item ? "is-overlay-active" : ""}`} aria-hidden={active !== item}><button type="button" tabIndex={-1}><span>{item}</span></button></div>
            ))}
          </div>
          <div className="dock-item dock-circle dock-close"><button type="button" onClick={onClose} aria-label="Close panel"><span /></button></div>
        </nav>
      )}
    </>
  );
}

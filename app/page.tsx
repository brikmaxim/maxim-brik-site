"use client";

import { type FormEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type Overlay = "projects" | "info" | "contact" | null;
type OverlayName = Exclude<Overlay, null>;
type DepartingOverlay = { name: OverlayName; id: number };
type View = "work" | "project";
type MenuSection = "work" | "info" | "contact";
type PromptPhase = "typing" | "deleting";

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  image: string;
  visual: string;
  video?: string;
  isNew?: boolean;
};

const projects: Project[] = [
  { id: "01", name: "KYNG", category: "CGI,Dev", year: "2026", image: "/kyng-work-front.jpg", visual: "kyng", isNew: true },
  { id: "02", name: "Solution", category: "CGI", year: "2022", image: "/solution-cover.jpg", visual: "solution" },
  { id: "03", name: "NDSP", category: "CGI,AI,Dev", year: "2025", image: "/kyng-detail-drawing.png", visual: "drawing", video: "/ndsp-card.mp4" },
  { id: "04", name: "ANGEL 333", category: "ID,CGI", year: "2024", image: "/angel-333-cover.jpg", visual: "angel" },
  { id: "05", name: "Yandex", category: "CGI", year: "2023", image: "/kyng-detail-cover.png", visual: "cover-warm" },
  { id: "06", name: "SBER", category: "CGI,Dev", year: "2022", image: "/sber-cover.jpg", visual: "sber" },
  { id: "07", name: "Sicko", category: "CGI,AI,Dev", year: "2026", image: "/sicko-work.png", visual: "sicko" },
  { id: "08", name: "9Mice", category: "GD", year: "2024", image: "/kyng-work.png", visual: "kyng-grey" },
  { id: "09", name: "Bogema Leningrad", category: "CGI,Dev", year: "2021", image: "/kyng-detail-cover.png", visual: "cover-blue" },
  { id: "10", name: "KM20", category: "CGI,Dev", year: "2021", image: "/kyng-detail-side.png", visual: "side-dark" },
  { id: "11", name: "Reckless Schoolars", category: "CGI,Dev", year: "2022", image: "/sicko-work.png", visual: "sicko-mono" },
  { id: "12", name: "Omanko", category: "CGI", year: "2022", image: "/kyng-detail-drawing.png", visual: "drawing-dark" },
  { id: "13", name: "MIXIT", category: "CGI", year: "2026", image: "/mixit-cover.jpg", visual: "mixit" },
  { id: "14", name: "Poemi Koso", category: "GD", year: "2026", image: "/poemikoso-cover.jpg", visual: "poemikoso" },
  { id: "15", name: "Armor Hord +", category: "CGI", year: "2026", image: "/armor-hord-cover.jpg", visual: "armor-hord" },
];

const messagePrompts = [
  "Tell us about your project",
  "Describe what you want to create",
  "Share your idea with us",
] as const;

const PASSWORD_HASH = "576786d48ecd81b7eeb68563dfa21147520a9175df55384ab1be1ef9ea268670";

async function hashPassword(value: string) {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(buffer), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const submitPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password || checking || leaving) return;

    setChecking(true);
    const matches = await hashPassword(password) === PASSWORD_HASH;
    setChecking(false);

    if (!matches) {
      setError(true);
      setPassword("");
      return;
    }

    try {
      window.sessionStorage.setItem("maximbrik-access", "granted");
    } catch {
      // The page still unlocks when session storage is unavailable.
    }
    setLeaving(true);
    window.setTimeout(onUnlock, 460);
  };

  return (
    <div className={`password-gate ${leaving ? "password-gate--leaving" : ""}`} role="dialog" aria-modal="true" aria-labelledby="password-title">
      <form className={`password-panel ${error ? "password-panel--error" : ""}`} onSubmit={submitPassword}>
        <span className="password-panel__logo" aria-hidden="true" />
        <label className="sr-only" id="password-title" htmlFor="portfolio-password">Password</label>
        <div className="password-field">
          <input
            id="portfolio-password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              if (error) setError(false);
            }}
            placeholder="Enter password"
            autoComplete="current-password"
            spellCheck={false}
            aria-invalid={error}
            aria-describedby="password-error"
          />
        </div>
        <button type="submit" disabled={!password || checking}>{checking ? "Checking…" : "Continue"}</button>
        <p id="password-error" className="password-panel__error" aria-live="polite">{error ? "Incorrect password" : ""}</p>
      </form>
    </div>
  );
}

function GifVideo({
  src,
  className,
  poster,
  ariaLabel,
  ariaHidden,
}: {
  src: string;
  className?: string;
  poster?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const play = () => {
      if (video.paused) void video.play().catch(() => undefined);
    };
    const handleVisibility = () => {
      if (!document.hidden) play();
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) play();
    }, { threshold: 0.01 });

    observer.observe(video);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", play);
    play();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pageshow", play);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={`gif-video${className ? ` ${className}` : ""}`}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      preload="auto"
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      onCanPlay={(event) => {
        event.currentTarget.muted = true;
        void event.currentTarget.play().catch(() => undefined);
      }}
    />
  );
}

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [departingOverlay, setDepartingOverlay] = useState<DepartingOverlay | null>(null);
  const [view, setView] = useState<View>("work");
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [urgency, setUrgency] = useState<"1week" | "2weeks" | "4weeks">("2weeks");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [messagePromptDismissed, setMessagePromptDismissed] = useState(false);
  const [menuSection, setMenuSection] = useState<MenuSection>("work");
  const [dockHidden, setDockHidden] = useState(false);
  const [contentHidden, setContentHidden] = useState(false);
  const restoreFrames = useRef<number[]>([]);
  const viewTransitionFrames = useRef<number[]>([]);
  const viewTransitionTimer = useRef<number | null>(null);
  const skipNextPop = useRef(false);
  const overlayRef = useRef<Overlay>(null);
  const departureId = useRef(0);
  const departureTimer = useRef<number | null>(null);
  const lastScrollY = useRef(0);
  const scrollFrame = useRef<number | null>(null);
  const dockHiddenRef = useRef(false);
  const scrollDistance = useRef(0);
  const scrollDirection = useRef<-1 | 0 | 1>(0);
  const workScrollY = useRef(0);
  const restoreWorkScroll = useRef(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("maximbrik-access") === "granted") setIsUnlocked(true);
    } catch {
      // Keep the gate visible when session storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("password-locked", !isUnlocked);
    return () => document.documentElement.classList.remove("password-locked");
  }, [isUnlocked]);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
      restoreFrames.current.forEach(window.cancelAnimationFrame);
      viewTransitionFrames.current.forEach(window.cancelAnimationFrame);
      if (viewTransitionTimer.current !== null) window.clearTimeout(viewTransitionTimer.current);
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

  useEffect(() => () => {
    if (departureTimer.current !== null) window.clearTimeout(departureTimer.current);
  }, []);

  useEffect(() => {
    const readPageTop = () => Math.max(0, window.scrollY);

    lastScrollY.current = readPageTop();
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
        const currentScrollY = readPageTop();
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
          } else if (direction === -1 && scrollDistance.current <= -24) {
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

  const animateOverlayOut = useCallback((currentOverlay: OverlayName) => {
    if (departureTimer.current !== null) window.clearTimeout(departureTimer.current);
    const id = ++departureId.current;
    setDepartingOverlay({ name: currentOverlay, id });
    departureTimer.current = window.setTimeout(() => {
      setDepartingOverlay((current) => current?.id === id ? null : current);
      departureTimer.current = null;
    }, 720);
  }, []);

  const openOverlay = useCallback((nextOverlay: OverlayName) => {
    const currentOverlay = overlayRef.current;
    if (currentOverlay === nextOverlay) return;
    if (currentOverlay) animateOverlayOut(currentOverlay);
    overlayRef.current = nextOverlay;
    setOverlay(nextOverlay);
    setMenuSection(nextOverlay === "info" || nextOverlay === "contact" ? nextOverlay : "work");
  }, [animateOverlayOut]);

  const closeOverlay = useCallback(() => {
    const currentOverlay = overlayRef.current;
    if (currentOverlay) animateOverlayOut(currentOverlay);
    overlayRef.current = null;
    setOverlay(null);
    setMenuSection("work");
  }, [animateOverlayOut]);

  const transitionContent = useCallback((commit: () => void) => {
    if (viewTransitionTimer.current !== null) window.clearTimeout(viewTransitionTimer.current);
    viewTransitionFrames.current.forEach(window.cancelAnimationFrame);
    viewTransitionFrames.current = [];
    setContentHidden(true);
    viewTransitionTimer.current = window.setTimeout(() => {
      commit();
      viewTransitionTimer.current = null;
      const firstFrame = window.requestAnimationFrame(() => {
        const secondFrame = window.requestAnimationFrame(() => setContentHidden(false));
        viewTransitionFrames.current.push(secondFrame);
      });
      viewTransitionFrames.current.push(firstFrame);
    }, 500);
  }, []);

  const openProject = (project: Project = projects[0]) => {
    if (view === "work") workScrollY.current = window.scrollY;
    closeOverlay();
    transitionContent(() => {
      setSelectedProject(project);
      setView("project");
      window.scrollTo({ top: 0, behavior: "auto" });
      window.history.pushState({ portfolioView: "project" }, "", `${window.location.pathname}${window.location.search}`);
    });
  };

  const showWork = () => {
    closeOverlay();
    if (view === "project") {
      const returnThroughHistory = window.history.state?.portfolioView === "project";
      transitionContent(() => {
        restoreWorkScroll.current = true;
        setView("work");
        if (returnThroughHistory) {
          skipNextPop.current = true;
          window.history.back();
        }
      });
    }
  };

  const closeProjectFromButton = () => {
    if (view === "project") showWork();
  };

  const selectWork = () => overlayRef.current ? closeOverlay() : showWork();
  const selectInfo = () => openOverlay("info");
  const selectContact = () => openOverlay("contact");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && closeOverlay();
    const onPopState = () => {
      if (skipNextPop.current) {
        skipNextPop.current = false;
        return;
      }
      if (view !== "project") return;
      overlayRef.current = null;
      setOverlay(null);
      setMenuSection("work");
      transitionContent(() => {
        restoreWorkScroll.current = true;
        setView("work");
      });
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
    };
  }, [closeOverlay, transitionContent, view]);

  const renderOverlayContent = (currentOverlay: OverlayName, active: boolean) => (
    <>
      {currentOverlay === "projects" && <ProjectIndex onOpenProject={openProject} />}
      {currentOverlay === "info" && <InfoPanel />}
      {currentOverlay === "contact" && (
        <ContactPanel
          urgency={urgency}
          setUrgency={setUrgency}
          agreed={agreed}
          setAgreed={setAgreed}
          sent={sent}
          setSent={setSent}
          promptDismissed={messagePromptDismissed}
          setPromptDismissed={setMessagePromptDismissed}
          active={active}
        />
      )}
    </>
  );

  return (
    <main className="portfolio-viewport">
      <Dock
        overlay={overlay}
        view={view}
        menuSection={menuSection}
        hidden={dockHidden}
        onProjects={() => openOverlay("projects")}
        onWork={selectWork}
        onInfo={selectInfo}
        onContact={selectContact}
        onClose={selectWork}
        onProjectClose={closeProjectFromButton}
      />

      <div className={`portfolio-shell ${view === "project" ? "is-project" : "is-work"}`}>
        <div className={`site-content ${contentHidden ? "site-content--hidden" : ""}`}>
          {view === "work" ? <WorkView onOpenProject={openProject} hidden={dockHidden} /> : <ProjectView project={selectedProject} />}
        </div>
      </div>

      {(overlay || departingOverlay) && (
        <div
          className={`overlay-layer ${overlay ? `overlay-layer--active overlay-layer--${overlay}` : "overlay-layer--leaving"}`}
          role={overlay ? "dialog" : undefined}
          aria-modal={overlay ? "true" : undefined}
          aria-label={overlay ? `${overlay} panel` : undefined}
        >
          {overlay && <button className="blur-screen" type="button" onClick={selectWork} aria-label="Close panel" />}
          {departingOverlay && (
            <div className="overlay-motion overlay-motion--leaving" key={`leaving-${departingOverlay.id}`} aria-hidden="true">
              {renderOverlayContent(departingOverlay.name, false)}
            </div>
          )}
          {overlay && (
            <div className="overlay-motion overlay-motion--entering" key={`entering-${overlay}`}>
              {renderOverlayContent(overlay, true)}
            </div>
          )}
        </div>
      )}

      {!isUnlocked && <PasswordGate onUnlock={() => setIsUnlocked(true)} />}

    </main>
  );
}

function WorkView({ onOpenProject, hidden }: { onOpenProject: (project: Project) => void; hidden: boolean }) {
  return (
    <>
      <div className={`brand-mark ${hidden ? "brand-mark--hidden" : ""}`} aria-hidden="true" />
      <section className="work-grid" aria-label="Selected work">
        {projects.map((project) => (
          <button
            className={`project-card project-card--${project.visual}`}
            type="button"
            key={project.id}
            onClick={() => onOpenProject(project)}
          >
            {project.video ? (
              <GifVideo
                className="project-card__video"
                src={project.video}
                poster={project.image}
                aria-hidden="true"
              />
            ) : (
              <img className="project-card__image" src={project.image} alt="" />
            )}
            <span className="card-chip card-chip--name"><span>{project.name}</span></span>
            {project.isNew && <span className="card-chip card-chip--new"><span>NEW</span></span>}
            <span className="sr-only">Open {project.name} project</span>
          </button>
        ))}
      </section>
    </>
  );
}

function ProjectView({ project }: { project: Project }) {
  const isAngel = project.visual === "angel";
  const isKyng = project.visual === "kyng";

  return (
    <article className="project-detail">
      <section className="project-info-card">
        <h1>Info</h1>
        <dl className="project-facts">
          <div><dt>Client:</dt><dd>{project.name}</dd></div>
          <div><dt>Categories:</dt><dd>{project.category}</dd></div>
          <div><dt>Year:</dt><dd>{project.id === "01" ? "2021-2026" : project.year}</dd></div>
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
        <img src={["angel", "poemikoso", "mixit", "armor-hord"].includes(project.visual) ? project.image : "/kyng-detail-cover.png"} alt={`${project.name} project cover`} />
        <span className="card-chip card-chip--name"><span>{project.year}</span></span>
      </figure>

      {isAngel ? (
        <>
          <div className="detail-pair detail-pair--square">
            <figure><img src="/angel-333-ring.jpg" alt="ANGEL 333 silver ring" /></figure>
            <figure><img src="/angel-333-views.jpg" alt="ANGEL 333 ring studies" /></figure>
          </div>

          <figure className="project-content-card project-content-card--portrait">
            <img src="/angel-333-development.jpg" alt="ANGEL 333 design development" />
          </figure>

          <figure className="project-content-card">
            <img src="/angel-333-boots.jpg" alt="ANGEL 333 boots" />
          </figure>
        </>
      ) : (
        <>
          <div className="detail-pair">
            <figure><img src="/kyng-detail-side.png" alt="KYNG side view" /></figure>
            <figure className="detail-drawing"><img src="/kyng-detail-drawing.png" alt="KYNG technical drawing" /></figure>
          </div>

          <p className="story-card">Instead of simply placing it on a piece of jewellery, we began looking for a form that could carry the same language. The first reference was a <em>chastity belt</em> — a rigid object built around the body, somewhere between protection, control and ornament.</p>

          <figure className="detail-closeup"><img src="/kyng-detail-cover.png" alt="KYNG silver form close view" /></figure>

          {isKyng && (
            <>
              <figure className="project-content-card">
                <img src="/kyng-work-front.jpg" alt="KYNG front view" />
              </figure>

              <figure className="project-content-card">
                <img src="/kyng-work-back.jpg" alt="KYNG back view" />
              </figure>

              <figure className="project-content-card project-content-card--video">
                <GifVideo src="/kyng-motion.mp4" ariaLabel="KYNG object in motion" />
              </figure>
            </>
          )}
        </>
      )}
    </article>
  );
}

function ProjectIndex({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  const [filter, setFilter] = useState<"recent" | "oldest" | "alphabetical">("recent");
  const visibleProjects = filter === "oldest"
    ? [...projects].sort((a, b) => Number(a.year) - Number(b.year))
    : filter === "alphabetical"
      ? [...projects].sort((a, b) => a.name.localeCompare(b.name))
      : projects;

  return (
    <div className="project-index">
      <section className="glass-panel project-index__table">
        <div className="project-table project-table--head"><span>#</span><span>name</span><span>Categories</span><span>Year</span></div>
        <div className="project-list">
          {visibleProjects.map((project, index) => (
            <button className="project-table" type="button" key={project.id} onClick={() => onOpenProject(project)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{project.name}</span>
              <span>{project.category}</span>
              <span>{project.year}</span>
            </button>
          ))}
        </div>
      </section>
      <section className="glass-panel project-filter" aria-label="Project sorting">
        <h2>Filter</h2>
        <button className={filter === "recent" ? "is-selected" : ""} type="button" onClick={() => setFilter("recent")}>Most Recent</button>
        <button className={filter === "oldest" ? "is-selected" : ""} type="button" onClick={() => setFilter("oldest")}>Oldest first</button>
        <button className={filter === "alphabetical" ? "is-selected" : ""} type="button" onClick={() => setFilter("alphabetical")}>Alphapetical</button>
      </section>
    </div>
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
      </section>
      <section className="glass-panel team-panel">
        <h2>Social Media</h2>
        <p><a href="mailto:hello@maximbrik.com">Email</a><br /><a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a><br /><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a></p>
        <h2>Team</h2>
        <p>Maxim Brik<br />Alexey Molchanov<br />Rustam Gaifutdinov</p>
      </section>
    </div>
  );
}

function ContactPanel({ urgency, setUrgency, agreed, setAgreed, sent, setSent, promptDismissed, setPromptDismissed, active }: {
  urgency: "1week" | "2weeks" | "4weeks";
  setUrgency: (value: "1week" | "2weeks" | "4weeks") => void;
  agreed: boolean;
  setAgreed: (value: boolean) => void;
  sent: boolean;
  setSent: (value: boolean) => void;
  promptDismissed: boolean;
  setPromptDismissed: (value: boolean) => void;
  active: boolean;
}) {
  const [message, setMessage] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [typedPrompt, setTypedPrompt] = useState("");
  const [promptPhase, setPromptPhase] = useState<PromptPhase>("typing");

  useEffect(() => {
    if (!active || message || promptDismissed) return;
    const target = messagePrompts[promptIndex];
    let delay = 38;
    let update = () => setTypedPrompt(target.slice(0, typedPrompt.length + 1));

    if (promptPhase === "typing" && typedPrompt === target) {
      delay = 1050;
      update = () => setPromptPhase("deleting");
    } else if (promptPhase === "deleting" && typedPrompt.length > 0) {
      delay = 20;
      update = () => setTypedPrompt((current) => current.slice(0, -1));
    } else if (promptPhase === "deleting") {
      delay = 180;
      update = () => {
        setPromptIndex((current) => (current + 1) % messagePrompts.length);
        setPromptPhase("typing");
      };
    }

    const promptTimer = window.setTimeout(update, delay);
    return () => window.clearTimeout(promptTimer);
  }, [active, message, promptDismissed, promptIndex, promptPhase, typedPrompt]);

  const activateMessage = () => setPromptDismissed(true);

  return (
    <section className="glass-panel contact-panel">
      <label htmlFor="message">Messege</label>
      <div className={`message-field ${message ? "has-value" : ""} ${promptDismissed ? "is-active" : ""}`}>
        <textarea
          id="message"
          value={message}
          onFocus={activateMessage}
          onChange={(event) => {
            activateMessage();
            setMessage(event.target.value);
          }}
          aria-describedby={!promptDismissed ? "message-prompt" : undefined}
        />
        {!message && !promptDismissed && (
          <span className="message-prompt" id="message-prompt" aria-hidden="true">
            <span className="message-prompt__text">{typedPrompt}</span>
            <span className="message-prompt__caret" />
          </span>
        )}
      </div>
      <div className="urgency-block">
        <span className="contact-label">Urgency</span>
        <div className="urgency-options">
          {(["1week", "2weeks", "4weeks"] as const).map((option) => (
            <button
              className={urgency === option ? "is-selected" : ""}
              type="button"
              key={option}
              onClick={() => setUrgency(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <label className="privacy-check">
          <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} />
          <span className="privacy-check__control" aria-hidden="true" />
          <span>I agree with the&nbsp;<a href="/privacy">privacy policy</a></span>
        </label>
      </div>
      <button className="continue-button" type="button" onClick={() => setSent(true)}>{sent ? "Thank you" : "Continue"}</button>
      <button className="copy-email" type="button" onClick={() => navigator.clipboard?.writeText("hello@maximbrik.com")}>Copy Email</button>
    </section>
  );
}

function Dock({ overlay, view, menuSection, hidden, onProjects, onWork, onInfo, onContact, onClose, onProjectClose }: {
  overlay: Overlay;
  view: View;
  menuSection: MenuSection;
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
    <div className="dock-anchor dock-anchor--base">
      <nav className={`dock dock--base ${overlay ? "is-open" : ""} ${hidden ? "dock--hidden" : ""}`} aria-label="Primary navigation">
        <div className="dock-item dock-circle dock-plus"><button type="button" onClick={onProjects} aria-label="Open project index"><span /></button></div>
        <div className={`dock-item dock-circle dock-close ${overlay ? "is-visible" : ""}`}><button type="button" onClick={onClose} aria-label="Close panel" tabIndex={overlay ? 0 : -1}><span /></button></div>
        <div className={`dock-item dock-circle dock-project-close ${!overlay && view === "project" ? "is-visible" : ""}`}><button type="button" onClick={onProjectClose} aria-label="Close project" tabIndex={!overlay && view === "project" ? 0 : -1}><span /></button></div>
        <div className="dock-links">
          {items.map((item) => (
            <div key={item} className={`dock-item dock-pill ${itemClass[item]} ${active === item ? "is-selected" : ""}`}>
              <button type="button" onClick={itemAction[item]} aria-current={active === item ? "page" : undefined}><span>{item}</span></button>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

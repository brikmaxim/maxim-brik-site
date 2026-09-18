"use client";

import { type CSSProperties, type FormEvent, memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type Overlay = "projects" | "info" | "contact" | null;
type OverlayName = Exclude<Overlay, null>;
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
  videoPreview?: string;
  isNew?: boolean;
};

type ContentSnapshot = {
  view: View;
  project: Project;
  screenTop: number;
  zoomOrigin: string;
  viewportHeight: number;
  overscan: number;
  fadeOut: boolean;
};

const projects: Project[] = [
  { id: "01", name: "KYNG", category: "CGI,Dev", year: "2026", image: "/kyng-work-front.jpg", visual: "kyng", isNew: true },
  { id: "02", name: "Solution", category: "CGI", year: "2022", image: "/solution-cover.jpg", visual: "solution" },
  { id: "03", name: "NDSP", category: "CGI,AI,Dev", year: "2025", image: "/kyng-detail-drawing.png", visual: "drawing", video: "/ndsp-card.mp4", videoPreview: "/ndsp-card-preview.jpg" },
  { id: "04", name: "ANGEL 333", category: "ID,CGI", year: "2024", image: "/angel-333-cover.jpg", visual: "angel", video: "/angel-card.mp4", videoPreview: "/angel-card-preview.jpg" },
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

async function copyText(text: string) {
  const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const selection = window.getSelection();
  const selectedRange = selection?.rangeCount ? selection.getRangeAt(0).cloneRange() : null;
  const helper = document.createElement("textarea");

  helper.value = text;
  helper.readOnly = true;
  helper.setAttribute("aria-hidden", "true");
  Object.assign(helper.style, {
    position: "fixed",
    top: "0",
    left: "-9999px",
    width: "1px",
    height: "1px",
    opacity: "0",
    fontSize: "16px",
    pointerEvents: "none",
  });
  document.body.appendChild(helper);
  helper.select();
  helper.setSelectionRange(0, helper.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  helper.remove();

  if (activeElement) activeElement.focus({ preventScroll: true });
  if (selection && selectedRange) {
    selection.removeAllRanges();
    selection.addRange(selectedRange);
  }
  if (copied) return true;

  try {
    await navigator.clipboard?.writeText(text);
    return Boolean(navigator.clipboard);
  } catch {
    return false;
  }
}

function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const gateRef = useRef<HTMLDivElement>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useLayoutEffect(() => {
    const gate = gateRef.current;
    if (!gate) return;

    const viewport = window.visualViewport;
    // Capture the resting height once. Keyboard resize must not recenter the panel.
    const restingHeight = viewport?.height ?? window.innerHeight;
    gate.style.setProperty("--password-viewport-height", `${restingHeight}px`);
    gate.style.setProperty("--password-centered-top", `${Math.max(0, (restingHeight - gate.offsetHeight) / 2)}px`);
    const syncViewportOffset = () => {
      // Compensate Safari viewport panning without changing the screen-space position.
      gate.style.setProperty("--password-viewport-top", `${viewport?.offsetTop ?? 0}px`);
    };

    syncViewportOffset();
    viewport?.addEventListener("resize", syncViewportOffset);
    viewport?.addEventListener("scroll", syncViewportOffset);
    window.addEventListener("resize", syncViewportOffset);
    gate.addEventListener("focusin", syncViewportOffset);
    gate.addEventListener("focusout", syncViewportOffset);
    return () => {
      viewport?.removeEventListener("resize", syncViewportOffset);
      viewport?.removeEventListener("scroll", syncViewportOffset);
      window.removeEventListener("resize", syncViewportOffset);
      gate.removeEventListener("focusin", syncViewportOffset);
      gate.removeEventListener("focusout", syncViewportOffset);
    };
  }, []);

  useEffect(() => {
    const lockedScrollY = window.scrollY;
    const preventScroll = (event: Event) => {
      if (event.cancelable) event.preventDefault();
    };
    const preventScrollKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && event.target.closest("input, textarea, button, [contenteditable]")) return;
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) event.preventDefault();
    };
    const restoreLockedPosition = () => {
      if (window.scrollY !== lockedScrollY) window.scrollTo({ top: lockedScrollY, behavior: "auto" });
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("keydown", preventScrollKey);
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("scroll", restoreLockedPosition, { passive: true });
    return () => {
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("keydown", preventScrollKey);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("scroll", restoreLockedPosition);
    };
  }, []);

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
    <div ref={gateRef} className={`password-gate ${leaving ? "password-gate--leaving" : ""}`} role="dialog" aria-modal="true" aria-labelledby="password-title">
      <form className={`password-panel ${error ? "password-panel--error" : ""}`} onSubmit={submitPassword}>
        <span className="password-panel__logo" aria-hidden="true" />
        <label className="sr-only" id="password-title" htmlFor="portfolio-password">Password</label>
        <div className="password-field">
          <input
            id="portfolio-password"
            type="password"
            value={password}
            onPointerDown={(event) => {
              if (event.button !== 0 || document.activeElement === event.currentTarget) return;
              event.preventDefault();
              event.currentTarget.focus({ preventScroll: true });
            }}
            onChange={(event) => {
              setPassword(event.target.value);
              if (error) setError(false);
            }}
            placeholder="enter password"
            autoComplete="current-password"
            spellCheck={false}
            aria-invalid={error}
            aria-describedby="password-error"
          />
        </div>
        <button className="password-panel__submit" type="submit" disabled={!password || checking}>{checking ? "Checking…" : "Continue"}</button>
        <p id="password-error" className="password-panel__error" aria-live="polite">{error ? "Incorrect password" : ""}</p>
      </form>
    </div>
  );
}

function GifVideo({
  src,
  className,
  preview,
  ariaLabel,
  ariaHidden,
  width,
  height,
}: {
  src: string;
  className?: string;
  preview?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  width?: number;
  height?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const visibleRef = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const play = () => {
      if (visibleRef.current && !document.hidden && video.getAttribute("src") && video.paused) {
        void video.play().catch(() => undefined);
      }
    };
    const handleVisibility = () => {
      if (document.hidden) video.pause();
      else play();
    };
    const observer = new IntersectionObserver((entries) => {
      visibleRef.current = entries.some((entry) => entry.isIntersecting);
      if (visibleRef.current) play();
      else video.pause();
    }, { threshold: 0.01 });
    // Fetch just ahead of scrolling; do not decode every gallery/project video at once.
    const preloadObserver = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setShouldLoad(true);
      preloadObserver.disconnect();
    }, { rootMargin: "200px 0px" });

    observer.observe(video);
    preloadObserver.observe(video);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pageshow", play);

    return () => {
      observer.disconnect();
      preloadObserver.disconnect();
      video.pause();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pageshow", play);
    };
  }, [src]);

  return (
    <>
      {preview && (
        <img
          className={`gif-video__preview ${isPlaying ? "gif-video__preview--hidden" : ""}${className ? ` ${className}` : ""}`}
          src={preview}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      )}
      <video
        ref={videoRef}
        className={`gif-video ${isPlaying ? "gif-video--playing" : ""}${className ? ` ${className}` : ""}`}
        src={shouldLoad ? src : undefined}
        width={width}
        height={height}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload nofullscreen noremoteplayback"
        preload={shouldLoad ? "auto" : "none"}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        onCanPlay={(event) => {
          event.currentTarget.muted = true;
          if (visibleRef.current && !document.hidden) void event.currentTarget.play().catch(() => undefined);
          else event.currentTarget.pause();
        }}
        onPlaying={(event) => {
          if (visibleRef.current && !document.hidden) setIsPlaying(true);
          else event.currentTarget.pause();
        }}
      />
    </>
  );
}

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [displayedOverlay, setDisplayedOverlay] = useState<Overlay>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [view, setView] = useState<View>("work");
  const [contentVisible, setContentVisible] = useState(true);
  const [contentTransitionTarget, setContentTransitionTarget] = useState<View | null>(null);
  const [outgoingContent, setOutgoingContent] = useState<ContentSnapshot | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [urgency, setUrgency] = useState<"1week" | "2weeks" | "4weeks">("2weeks");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [messagePromptDismissed, setMessagePromptDismissed] = useState(false);
  const [menuSection, setMenuSection] = useState<MenuSection>("work");
  const [dockHidden, setDockHidden] = useState(false);
  const siteContentRef = useRef<HTMLDivElement>(null);
  const outgoingLayerRef = useRef<HTMLDivElement>(null);
  const outgoingContentRef = useRef<ContentSnapshot | null>(null);
  const restoreFrames = useRef<number[]>([]);
  const overlayRef = useRef<Overlay>(null);
  const displayedOverlayRef = useRef<Overlay>(null);
  const overlayVisibleRef = useRef(false);
  const overlaySwapTimer = useRef<number | null>(null);
  const overlayRevealFrames = useRef<number[]>([]);
  const contentVisibleRef = useRef(true);
  const contentTransitionTimer = useRef<number | null>(null);
  const contentRevealFrames = useRef<number[]>([]);
  const lastScrollY = useRef(0);
  const scrollFrame = useRef<number | null>(null);
  const dockHiddenRef = useRef(false);
  const scrollDistance = useRef(0);
  const scrollDirection = useRef<-1 | 0 | 1>(0);
  const workScrollY = useRef(0);
  const restoreWorkScroll = useRef(false);
  const preserveDockDuringViewTransition = useRef(false);
  const preservedDockHidden = useRef(false);

  const syncContentZoomOrigin = useCallback(() => {
    const content = siteContentRef.current;
    const shell = content?.parentElement;
    if (!content || !shell) return;
    // Zoom around the visible screen, not the top of the entire scrolled gallery.
    const viewport = window.visualViewport;
    const screenCenter = (viewport?.offsetTop ?? 0) + (viewport?.height ?? window.innerHeight) / 2;
    const contentOffsetTop = shell.hasAttribute("data-transition-window")
      ? parseFloat(shell.style.getPropertyValue("--incoming-window-top"))
      : content.offsetTop;
    const contentTop = shell.getBoundingClientRect().top + contentOffsetTop;
    content.style.setProperty("--content-zoom-origin", `${Math.max(0, screenCenter - contentTop)}px`);
  }, []);

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
    };
  }, []);

  useLayoutEffect(() => {
    if (view !== "work" || !restoreWorkScroll.current) return;
    const targetScrollY = workScrollY.current;
    const keepDockHidden = preservedDockHidden.current;
    window.scrollTo({ top: targetScrollY, behavior: "auto" });
    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: targetScrollY, behavior: "auto" });
        lastScrollY.current = targetScrollY;
        scrollDistance.current = 0;
        scrollDirection.current = 0;
        dockHiddenRef.current = keepDockHidden;
        setDockHidden(keepDockHidden);
        restoreWorkScroll.current = false;
        preserveDockDuringViewTransition.current = false;
      });
      restoreFrames.current.push(secondFrame);
    });
    restoreFrames.current.push(firstFrame);
  }, [view]);

  useLayoutEffect(() => {
    const layer = outgoingLayerRef.current;
    if (layer && outgoingContent) {
      const shellTop = layer.parentElement?.getBoundingClientRect().top ?? 0;
      const viewportTop = window.visualViewport?.offsetTop ?? 0;
      layer.style.setProperty("--outgoing-layer-top", `${viewportTop - shellTop - outgoingContent.overscan}px`);
    }
    const content = siteContentRef.current;
    const incomingLayer = content?.parentElement;
    const scene = content?.firstElementChild as HTMLElement | null;
    let resizeObserver: ResizeObserver | undefined;
    if (outgoingContent && incomingLayer && scene) {
      // Reserve the natural document height, but composite/blur only the visible window.
      const syncSceneHeight = () => incomingLayer.style.setProperty("--incoming-scene-height", `${scene.offsetHeight}px`);
      syncSceneHeight();
      const viewportTop = window.visualViewport?.offsetTop ?? 0;
      incomingLayer.style.setProperty("--incoming-window-top", `${viewportTop - incomingLayer.getBoundingClientRect().top - outgoingContent.overscan}px`);
      incomingLayer.style.setProperty("--incoming-window-height", `${outgoingContent.viewportHeight + outgoingContent.overscan * 2}px`);
      incomingLayer.setAttribute("data-transition-window", "");
      resizeObserver = new ResizeObserver(syncSceneHeight);
      resizeObserver.observe(scene);
    }
    syncContentZoomOrigin();
    const viewport = window.visualViewport;
    const startScrollY = window.scrollY;
    const sceneZoomOrigin = parseFloat(content?.style.getPropertyValue("--content-zoom-origin") || "0")
      + parseFloat(incomingLayer?.style.getPropertyValue("--incoming-window-top") || "0");
    let windowFrame: number | null = null;
    const syncWindows = () => {
      if (windowFrame !== null || !outgoingContent || !incomingLayer || !content || !layer) return;
      windowFrame = window.requestAnimationFrame(() => {
        windowFrame = null;
        const viewportTop = viewport?.offsetTop ?? 0;
        const shellTop = layer.parentElement?.getBoundingClientRect().top ?? 0;
        const incomingTop = incomingLayer.getBoundingClientRect().top;
        const windowTop = viewportTop - incomingTop - outgoingContent.overscan;
        const sceneTop = outgoingContent.screenTop + outgoingContent.overscan - (window.scrollY - startScrollY);
        layer.style.setProperty("--outgoing-layer-top", `${viewportTop - shellTop - outgoingContent.overscan}px`);
        const outgoingSurface = layer.firstElementChild as HTMLElement;
        const outgoingScene = outgoingSurface.firstElementChild as HTMLElement;
        outgoingScene.style.top = `${sceneTop}px`;
        outgoingSurface.style.setProperty("--content-zoom-origin", `${parseFloat(outgoingContent.zoomOrigin) + sceneTop}px`);
        incomingLayer.style.setProperty("--incoming-window-top", `${windowTop}px`);
        content.style.setProperty("--content-zoom-origin", `${sceneZoomOrigin - windowTop}px`);
      });
    };
    if (outgoingContent) {
      // Keep clipping windows over newly visible pixels if the user scrolls during the blend.
      window.addEventListener("scroll", syncWindows, { passive: true });
      window.addEventListener("resize", syncWindows);
      viewport?.addEventListener("scroll", syncWindows);
      viewport?.addEventListener("resize", syncWindows);
    }
    return () => {
      window.removeEventListener("scroll", syncWindows);
      window.removeEventListener("resize", syncWindows);
      viewport?.removeEventListener("scroll", syncWindows);
      viewport?.removeEventListener("resize", syncWindows);
      if (windowFrame !== null) window.cancelAnimationFrame(windowFrame);
      resizeObserver?.disconnect();
      incomingLayer?.removeAttribute("data-transition-window");
      incomingLayer?.style.removeProperty("--incoming-scene-height");
      incomingLayer?.style.removeProperty("--incoming-window-top");
      incomingLayer?.style.removeProperty("--incoming-window-height");
    };
  }, [view, selectedProject.id, outgoingContent, syncContentZoomOrigin]);

  useEffect(() => () => {
    if (overlaySwapTimer.current !== null) window.clearTimeout(overlaySwapTimer.current);
    overlayRevealFrames.current.forEach(window.cancelAnimationFrame);
    if (contentTransitionTimer.current !== null) window.clearTimeout(contentTransitionTimer.current);
    contentRevealFrames.current.forEach(window.cancelAnimationFrame);
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

        if (preserveDockDuringViewTransition.current) {
          scrollDistance.current = 0;
          scrollDirection.current = 0;
          scrollFrame.current = null;
          return;
        }

        if (restoreWorkScroll.current) {
          scrollDistance.current = 0;
          scrollDirection.current = 0;
          setDockVisibility(false);
          scrollFrame.current = null;
          return;
        }

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

  const setPanelVisibility = useCallback((visible: boolean) => {
    overlayVisibleRef.current = visible;
    setOverlayVisible(visible);
  }, []);

  const revealOverlay = useCallback(() => {
    overlayRevealFrames.current.forEach(window.cancelAnimationFrame);
    overlayRevealFrames.current = [];
    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => {
        if (displayedOverlayRef.current && overlayRef.current === displayedOverlayRef.current) {
          setPanelVisibility(true);
        }
      });
      overlayRevealFrames.current.push(secondFrame);
    });
    overlayRevealFrames.current.push(firstFrame);
  }, [setPanelVisibility]);

  const scheduleOverlaySwap = useCallback(() => {
    if (overlaySwapTimer.current !== null) return;
    overlaySwapTimer.current = window.setTimeout(() => {
      overlaySwapTimer.current = null;
      const targetOverlay = overlayRef.current;

      if (!targetOverlay) {
        displayedOverlayRef.current = null;
        setDisplayedOverlay(null);
        return;
      }

      if (targetOverlay === displayedOverlayRef.current) {
        revealOverlay();
        return;
      }

      displayedOverlayRef.current = targetOverlay;
      setDisplayedOverlay(targetOverlay);
      setPanelVisibility(false);
      revealOverlay();
    }, 340);
  }, [revealOverlay, setPanelVisibility]);

  const openOverlay = useCallback((nextOverlay: OverlayName) => {
    if (overlayRef.current === nextOverlay && overlayVisibleRef.current) return;

    overlayRef.current = nextOverlay;
    setOverlay(nextOverlay);
    setMenuSection(nextOverlay === "info" || nextOverlay === "contact" ? nextOverlay : "work");

    if (!displayedOverlayRef.current) {
      displayedOverlayRef.current = nextOverlay;
      setDisplayedOverlay(nextOverlay);
      setPanelVisibility(false);
      revealOverlay();
      return;
    }

    if (displayedOverlayRef.current === nextOverlay) {
      if (overlaySwapTimer.current !== null) {
        window.clearTimeout(overlaySwapTimer.current);
        overlaySwapTimer.current = null;
      }
      revealOverlay();
      return;
    }

    setPanelVisibility(false);
    scheduleOverlaySwap();
  }, [revealOverlay, scheduleOverlaySwap, setPanelVisibility]);

  const closeOverlay = useCallback(() => {
    overlayRef.current = null;
    setOverlay(null);
    setMenuSection("work");
    overlayRevealFrames.current.forEach(window.cancelAnimationFrame);
    overlayRevealFrames.current = [];
    if (!displayedOverlayRef.current) return;
    setPanelVisibility(false);
    scheduleOverlaySwap();
  }, [scheduleOverlaySwap, setPanelVisibility]);

  const setContentVisibility = useCallback((visible: boolean) => {
    contentVisibleRef.current = visible;
    setContentVisible(visible);
  }, []);

  const finishContentTransition = useCallback(() => {
    if (contentTransitionTimer.current !== null) window.clearTimeout(contentTransitionTimer.current);
    contentTransitionTimer.current = null;
    outgoingContentRef.current = null;
    setOutgoingContent(null);
    setContentTransitionTarget(null);
    setContentVisibility(true);
  }, [setContentVisibility]);

  const scheduleContentCleanup = useCallback(() => {
    if (contentTransitionTimer.current !== null) window.clearTimeout(contentTransitionTimer.current);
    // Transition events finish normally; this also handles background tabs and interrupted motion.
    contentTransitionTimer.current = window.setTimeout(finishContentTransition, 750);
  }, [finishContentTransition]);

  const revealContent = useCallback(() => {
    contentRevealFrames.current.forEach(window.cancelAnimationFrame);
    contentRevealFrames.current = [];
    const firstFrame = window.requestAnimationFrame(() => {
      const secondFrame = window.requestAnimationFrame(() => {
        setContentVisibility(true);
        scheduleContentCleanup();
      });
      contentRevealFrames.current.push(secondFrame);
    });
    contentRevealFrames.current.push(firstFrame);
  }, [setContentVisibility, scheduleContentCleanup]);

  const transitionContent = useCallback((targetView: View, commitTransition: () => void, targetProject?: Project) => {
    const previousOutgoing = outgoingContentRef.current;
    const returningToUnderlay = previousOutgoing?.view === targetView && (targetView === "work" || previousOutgoing.project.id === targetProject?.id);
    contentRevealFrames.current.forEach(window.cancelAnimationFrame);
    contentRevealFrames.current = [];

    if (returningToUnderlay && !contentVisibleRef.current) {
      commitTransition();
      finishContentTransition();
      return;
    }

    syncContentZoomOrigin();
    const content = siteContentRef.current;
    const scene = content?.firstElementChild as HTMLElement | null;
    const contentLayer = content?.parentElement;
    const windowTop = contentLayer?.hasAttribute("data-transition-window")
      ? parseFloat(contentLayer.style.getPropertyValue("--incoming-window-top"))
      : null;
    const contentOffsetTop = windowTop ?? content?.offsetTop ?? 0;
    const sceneOffsetTop = windowTop !== null ? -windowTop : scene?.offsetTop ?? 0;
    const viewport = window.visualViewport;
    const viewportHeight = Math.max(window.innerHeight, viewport?.height ?? 0);
    const snapshot: ContentSnapshot = {
      view,
      project: selectedProject,
      screenTop: (contentLayer?.getBoundingClientRect().top ?? 0) + contentOffsetTop + sceneOffsetTop - (viewport?.offsetTop ?? 0),
      zoomOrigin: `${parseFloat(content?.style.getPropertyValue("--content-zoom-origin") || "0") - sceneOffsetTop}px`,
      viewportHeight,
      overscan: Math.ceil(viewportHeight * .2 + 40),
      fadeOut: returningToUnderlay && targetView === "project",
    };
    const underlay = previousOutgoing && targetView === view && !returningToUnderlay ? previousOutgoing : snapshot;
    outgoingContentRef.current = underlay;
    setOutgoingContent(underlay);
    setContentTransitionTarget(targetView);
    if (!previousOutgoing) setContentVisibility(false);

    // Keep the outgoing DOM painted while the new page joins the same animation timeline.
    commitTransition();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finishContentTransition();
    else if (previousOutgoing && contentVisibleRef.current) scheduleContentCleanup();
    else revealContent();
  }, [view, selectedProject, revealContent, setContentVisibility, syncContentZoomOrigin, finishContentTransition, scheduleContentCleanup]);

  const openProject = useCallback((project: Project = projects[0]) => {
    if (view === "project" && project.id === selectedProject.id) {
      closeOverlay();
      return;
    }
    if (view === "work") workScrollY.current = window.scrollY;
    const keepDockHidden = dockHiddenRef.current;
    closeOverlay();
    transitionContent("project", () => {
      preserveDockDuringViewTransition.current = true;
      preservedDockHidden.current = keepDockHidden;
      setSelectedProject(project);
      setView("project");
      window.scrollTo({ top: 0, behavior: "auto" });
      lastScrollY.current = 0;
      scrollDistance.current = 0;
      scrollDirection.current = 0;
      dockHiddenRef.current = keepDockHidden;
      setDockHidden(keepDockHidden);
      const firstFrame = window.requestAnimationFrame(() => {
        const secondFrame = window.requestAnimationFrame(() => {
          lastScrollY.current = Math.max(0, window.scrollY);
          preserveDockDuringViewTransition.current = false;
        });
        restoreFrames.current.push(secondFrame);
      });
      restoreFrames.current.push(firstFrame);
      window.history.pushState({ portfolioView: "project" }, "", `${window.location.pathname}${window.location.search}`);
    }, project);
  }, [closeOverlay, selectedProject.id, transitionContent, view]);

  const showWork = () => {
    closeOverlay();
    if (view === "project") {
      preservedDockHidden.current = dockHiddenRef.current;
      preserveDockDuringViewTransition.current = true;
      restoreWorkScroll.current = true;
      if (window.history.state?.portfolioView === "project") window.history.back();
      else transitionContent("work", () => setView("work"));
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
      if (view !== "project") return;
      preservedDockHidden.current = dockHiddenRef.current;
      preserveDockDuringViewTransition.current = true;
      restoreWorkScroll.current = true;
      overlayRef.current = null;
      setOverlay(null);
      displayedOverlayRef.current = null;
      setDisplayedOverlay(null);
      setPanelVisibility(false);
      setMenuSection("work");
      transitionContent("work", () => setView("work"));
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
    };
  }, [closeOverlay, setPanelVisibility, transitionContent, view]);

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

  const activeContent = { view, project: selectedProject };
  const contentLayers = outgoingContent ? [outgoingContent, activeContent] : [activeContent];
  // Project stays above Work in both directions, so reversing never swaps the compositing order.
  contentLayers.sort((a, b) => {
    if (a.view !== b.view) return a.view === "work" ? -1 : 1;
    if (outgoingContent?.fadeOut) return a === outgoingContent ? 1 : b === outgoingContent ? -1 : 0;
    return 0;
  });

  return (
    <>
      <main className="portfolio-viewport" inert={!isUnlocked}>
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

        <div className={`brand-mark ${dockHidden ? "brand-mark--hidden" : ""}`} aria-hidden="true" />

        <div className={`portfolio-shell ${view === "project" ? "is-project" : "is-work"}`}>
          {contentLayers.map((content) => {
            const outgoing = content === outgoingContent;
            const snapshot = outgoing ? outgoingContent : null;
            return (
              <div
                key={content.view === "work" ? "work" : `project-${content.project.id}`}
                ref={outgoing ? outgoingLayerRef : undefined}
                className={`view-layer view-layer--${content.view} ${outgoing ? "view-layer--outgoing" : "view-layer--incoming"} ${contentVisible ? "is-visible" : ""} ${snapshot?.fadeOut ? "view-layer--fading-out" : ""} ${contentTransitionTarget ? `view-layer--to-${contentTransitionTarget}` : ""}`}
                aria-hidden={outgoing || undefined}
                inert={outgoing}
                style={snapshot ? {
                  "--outgoing-layer-height": `${snapshot.viewportHeight + snapshot.overscan * 2}px`,
                } as CSSProperties : undefined}
              >
                <div
                  ref={outgoing ? undefined : siteContentRef}
                  className={`site-content site-content--${content.view} ${outgoing ? "site-content--outgoing" : "site-content--incoming"} ${contentVisible ? "is-visible" : ""}`}
                  style={snapshot ? { "--content-zoom-origin": `${parseFloat(snapshot.zoomOrigin) + snapshot.screenTop + snapshot.overscan}px` } as CSSProperties : undefined}
                  onTransitionEnd={outgoing ? undefined : (event) => {
                    if (event.target === event.currentTarget && event.propertyName === "transform" && outgoingContentRef.current) finishContentTransition();
                  }}
                >
                  <div className="content-scene" style={snapshot ? { top: `${snapshot.screenTop + snapshot.overscan}px` } : undefined}>
                    {content.view === "work" ? <WorkView onOpenProject={openProject} /> : <ProjectView project={content.project} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {(overlay || displayedOverlay) && (
          <div
            className={`overlay-layer ${overlay ? `overlay-layer--active overlay-layer--${overlay}` : "overlay-layer--leaving"}`}
            role={overlay ? "dialog" : undefined}
            aria-modal={overlay ? "true" : undefined}
            aria-label={overlay ? `${overlay} panel` : undefined}
          >
            {overlay && <button className="blur-screen" type="button" onClick={selectWork} aria-label="Close panel" />}
            {displayedOverlay && (
              <div
                className={`overlay-motion ${overlayVisible ? "is-visible" : ""}`}
                aria-hidden={!overlayVisible || displayedOverlay !== overlay}
              >
                {renderOverlayContent(displayedOverlay, overlayVisible && displayedOverlay === overlay)}
              </div>
            )}
          </div>
        )}
      </main>

      {!isUnlocked && <PasswordGate onUnlock={() => setIsUnlocked(true)} />}
    </>
  );
}

const WorkView = memo(function WorkView({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  return (
    <>
      <section className="work-grid" aria-label="Selected work">
        {projects.map((project, index) => (
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
                preview={project.videoPreview ?? project.image}
                aria-hidden="true"
              />
            ) : (
              <img className="project-card__image" src={project.image} alt="" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            )}
            <span className="card-chip card-chip--name"><span>{project.name}</span></span>
            {project.isNew && <span className="card-chip card-chip--new"><span>NEW</span></span>}
            <span className="sr-only">Open {project.name} project</span>
          </button>
        ))}
      </section>
    </>
  );
});

const ProjectView = memo(function ProjectView({ project }: { project: Project }) {
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
                <GifVideo src="/kyng-motion.mp4" preview="/kyng-motion-preview.jpg" ariaLabel="KYNG object in motion" width={464} height={824} />
              </figure>
            </>
          )}
        </>
      )}
    </article>
  );
});

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
  const [emailCopied, setEmailCopied] = useState(false);
  const copiedResetTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (copiedResetTimer.current !== null) window.clearTimeout(copiedResetTimer.current);
  }, []);

  const copyEmail = async () => {
    if (!await copyText("hello@maximbrik.com")) return;
    setEmailCopied(true);
    if (copiedResetTimer.current !== null) window.clearTimeout(copiedResetTimer.current);
    copiedResetTimer.current = window.setTimeout(() => setEmailCopied(false), 1400);
  };

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
      <button className="copy-email" type="button" onClick={copyEmail}>{emailCopied ? "Copied" : "Copy Email"}</button>
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
  const closeVisible = Boolean(overlay) || view === "project";

  return (
    <div className="dock-anchor dock-anchor--base">
      <nav className={`dock dock--base ${overlay ? "is-open" : ""} ${hidden ? "dock--hidden" : ""}`} aria-label="Primary navigation" aria-hidden={hidden || undefined} inert={hidden}>
        <div className="dock-item dock-circle dock-plus"><button type="button" onClick={onProjects} aria-label="Open project index"><span /></button></div>
        <div className={`dock-item dock-circle dock-close ${closeVisible ? "is-visible" : ""}`} aria-hidden={!closeVisible} inert={!closeVisible}><button type="button" onClick={overlay ? onClose : onProjectClose} aria-label={overlay ? "Close panel" : "Close project"} tabIndex={closeVisible ? 0 : -1}><span /></button></div>
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

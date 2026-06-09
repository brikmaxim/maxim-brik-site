const projects = [
  ["R&D", "2026", "Maxim Brik", "https://www.instagram.com/iammaximbrik/", "rnd"],
  ["NDSP", "2026", "Maxim Brik", "https://newdaysamepain.com/", "ndsp"],
  ["ANGEL333", "2025", "Maxim Brik", "https://angel333.online/", "angel333"],
  ["KYNG", "2026", "Maxim Brik", "https://www.instagram.com/khemgendwrld/", "kyng"],
  ["Reckless Scholars", "2022", "Maxim Brik", "https://www.recklessscholars.com/", "reckless-scholars"],
  ["OMANKO", "2026", "Maxim Brik", "https://www.instagram.com/iammaximbrik/", "omanko"],
  ["Solutions", "2022", "Maxim Brik", "https://www.nobody.solutions/", "solutions"],
  ["KM 20", "2021", "Maxim Brik", "https://www.km20.ru/", "km20"],
  ["Bogema Leningrad", "2020", "Maxim Brik", "https://bogema.market/collection/all", ""],
];

const contentManifest = {
  "angel333": ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "008.jpg"],
  "kyng": ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.mp4", "008.mp4", "009.jpg"],
  "km20": ["001.png", "002.png", "003.png"],
  "ndsp": ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.mp4", "007.jpg", "008.jpg"],
  "omanko": ["001.mp4", "002.png", "003.png", "004.png", "005.jpg"],
  "reckless-scholars": ["001.png", "002.jpg", "003.jpg", "004.jpg", "005.jpg"],
  "rnd": [
    "001.jpg", "002.png", "003.jpg", "004.png", "005.jpg", "006.jpg", "007.jpg", "008.jpg", "009.jpg", "010.jpg",
    "011.mp4", "012.png", "013.png", "014.png", "015.mp4", "016.mp4", "017.mp4", "018.mp4", "019.mp4", "020.mp4",
    "021.mp4", "022.mp4", "023.mp4", "024.mp4", "025.mp4", "026.mp4", "027.mp4", "028.jpg", "029.jpg", "030.jpg",
    "031.jpg", "032.jpg", "033.jpg", "034.jpg", "035.png", "036.png", "037.png", "038.jpg", "039.png", "040.png",
    "041.mp4", "042.jpg", "043.png", "044.png", "045.jpg", "046.png", "047.jpg", "048.jpg", "049.jpg", "050.jpg",
    "051.mp4", "052.jpg", "053.jpg", "054.jpg", "055.jpg", "056.mp4", "057.png", "058.png",
  ],
  "sicko": ["001.png", "002.png", "003.png"],
  "solutions": ["001.jpg", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png", "008.jpg", "009.jpg"],
};

const contentTags = {
  rnd: {
    "041.mp4": ["AI", "RnD", "Motion"],
    "042.jpg": ["AI", "RnD"],
    "043.png": ["AI", "RnD"],
    "044.png": ["AI", "RnD"],
    "045.jpg": ["AI", "RnD"],
    "046.png": ["AI", "RnD"],
    "047.jpg": ["AI", "RnD"],
    "048.jpg": ["AI", "RnD"],
    "049.jpg": ["AI", "RnD"],
    "050.jpg": ["AI", "RnD"],
    "051.mp4": ["AI", "RnD", "Motion"],
    "052.jpg": ["AI", "RnD"],
    "053.jpg": ["AI", "RnD"],
    "054.jpg": ["AI", "RnD"],
    "055.jpg": ["AI", "RnD"],
    "056.mp4": ["RnD", "Motion"],
    "057.png": ["RnD", "Product"],
    "058.png": ["RnD", "Product"],
  },
};

const projectList = document.querySelector("#project-list");
const mobileClientSlider = document.querySelector("#mobile-client-slider");
const gallery = document.querySelector("#gallery");
const introColumn = document.querySelector(".intro-column");
const projectsColumn = document.querySelector(".projects-column");
const metaYear = document.querySelector("#meta-year");
const metaDesignLabel = document.querySelector("#meta-design-label");
const metaDesign = document.querySelector("#meta-design");
const metaUrl = document.querySelector("#meta-url");
const detailsColumn = document.querySelector(".details-column");
const helpToggle = document.querySelector(".help-toggle");
const disclaimerToggle = document.querySelector(".disclaimer-toggle");
const disclaimerModal = document.querySelector(".disclaimer-modal");
const disclaimerClose = document.querySelector(".disclaimer-close");
const footerUp = document.querySelector(".footer-up");
const galleryColumn = document.querySelector(".gallery-column");
const teamAboutColumn = document.querySelector(".team-about-column");
const teamRole = document.querySelector("#team-role");
const teamDescription = document.querySelector("#team-description");
const teamPfpColumn = document.querySelector(".team-pfp-column");
const teamPfp = document.querySelector("#team-pfp");
const teamPfpInitials = document.querySelector("#team-pfp-initials");
const themeToggle = document.querySelector(".brand-icon-frame");
const workTab = document.querySelector('[data-tab="work"]');
const mobileQuery = window.matchMedia("(max-width: 700px)");
const visibleVideos = new Set();
let videoPlaybackFrame = 0;
let nearbyMediaFrame = 0;
let parallaxCompositions = [];
let projectGroups = [];
let clientSliderSelectionTimer = 0;
let clientSliderUserScrolling = false;
let clientSliderProgrammatic = false;
let clientSliderProxyTouch = null;
let mobileWorkColumnsPassed = false;
let clientPickerIndex = 0;
let expandedVisual = null;
let expandedOverlay = null;
let expandedBackdrop = null;
let expandedVisualAnimating = false;
let expandedVisualPendingClose = false;

function getCookieValue(name) {
  return document.cookie.split("; ").reduce((value, item) => {
    const [key, ...rest] = item.split("=");
    return decodeURIComponent(key) === name ? decodeURIComponent(rest.join("=")) : value;
  }, "");
}

function setCookieValue(name, value, maxAge = 60 * 60 * 24 * 365) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${secure}`;
}

function centerActiveClient(animate = true) {
  if (!mobileQuery.matches) return;
  clientPickerIndex = Math.max(0, activeProject);
  mobileClientSlider.style.setProperty("--client-picker-index", clientPickerIndex);
  mobileClientSlider.classList.toggle("is-instant", !animate);
  if (!animate) requestAnimationFrame(() => mobileClientSlider.classList.remove("is-instant"));
}

function getCenteredClientButton() {
  return mobileClientSlider.querySelector(`.client-slider-button[data-project="${clientPickerIndex}"]`);
}

function selectCenteredClient() {
  clientSliderSelectionTimer = 0;
  if (!detailsColumn.classList.contains("client-slider-visible")) return;
  clientSliderUserScrolling = false;
  const centeredButton = getCenteredClientButton();
  if (!centeredButton) return;
  const index = Number(centeredButton.dataset.project);
  if (index === activeProject) centerActiveClient(true);
  else scrollToProject(index);
}

function beginClientSliderScroll() {
  clearTimeout(clientSliderSelectionTimer);
  clientSliderUserScrolling = true;
  clientSliderProgrammatic = false;
}

function handleClientSliderScroll() {
  if (!clientSliderUserScrolling || clientSliderProgrammatic) return;
  clearTimeout(clientSliderSelectionTimer);
  clientSliderSelectionTimer = setTimeout(selectCenteredClient, 260);
}

function detailsClientSliderVisible() {
  return mobileQuery.matches && detailsColumn.classList.contains("client-slider-visible");
}

function updateFooterUpVisibility() {
  document.body.classList.toggle("footer-up-visible", mobileQuery.matches && workTab.classList.contains("active") && mobileWorkColumnsPassed);
}

function beginClientSliderProxy(event) {
  if (!detailsClientSliderVisible()) return;
  const touch = event.touches?.[0];
  if (!touch) return;
  event.preventDefault();
  clientSliderProxyTouch = {
    y: touch.clientY,
    index: clientPickerIndex,
  };
  beginClientSliderScroll();
}

function moveClientSliderProxy(event) {
  if (!clientSliderProxyTouch || !detailsClientSliderVisible()) return;
  const touch = event.touches?.[0];
  if (!touch) return;
  event.preventDefault();
  const itemStep = 34;
  const nextIndex = clamp(Math.round(clientSliderProxyTouch.index + (clientSliderProxyTouch.y - touch.clientY) / itemStep), 0, projects.length - 1);
  if (nextIndex === clientPickerIndex) return;
  clientPickerIndex = nextIndex;
  mobileClientSlider.style.setProperty("--client-picker-index", clientPickerIndex);
  document.querySelectorAll(".client-slider-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.project) === clientPickerIndex);
  });
  handleClientSliderScroll();
}

function endClientSliderProxy() {
  if (!clientSliderProxyTouch) return;
  clientSliderProxyTouch = null;
  clearTimeout(clientSliderSelectionTimer);
  selectCenteredClient();
}

function updateVisibleVideos() {
  visibleVideos.forEach((video) => video.play().catch(() => {}));
}

function scheduleVisibleVideos() {
  if (videoPlaybackFrame || !visibleVideos.size) return;
  videoPlaybackFrame = requestAnimationFrame(() => {
    videoPlaybackFrame = 0;
    updateVisibleVideos();
  });
}

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) visibleVideos.add(target);
    else {
      visibleVideos.delete(target);
      target.pause();
    }
  });
  scheduleVisibleVideos();
}, { rootMargin: mobileQuery.matches ? "0px" : "240px" });
let activeProject = -1;
let scrollFrame = 0;
let parallaxFrame = 0;
let parallaxRunning = false;
let parallaxImpulse = 0;
let mobileColumnsFrame = 0;
let wheelScrollFrame = 0;
let wheelScrollTarget = window.scrollY;
let suppressScrollSync = false;
let detailsTransitionToken = 0;
let gallerySeed = createGallerySeed();
const colorLayers = ["lime", "blue", "white", "lime", "blue", "white"];
const formatRatios = {
  portrait: 9 / 16,
  landscape: 4 / 3,
  vertical: 3 / 4,
  widescreen: 16 / 9,
  square: 1,
};
const teamMembers = [
  ["Alexey Molchanov", "2D/AI Motion Design", "Creates expressive motion systems and AI-assisted visual experiments for digital projects.", "alexey"],
  ["Rustam Gaifutdinov", "Web development frontend", "Builds responsive frontend experiences with close attention to interaction, performance and detail.", "human"],
  ["Maxim Brik", "Art Direction, 3D Artist", "Develops visual concepts and art direction, combining digital design with 3D imagery.", "maxim"],
];
let pfpViewerPromise = null;

function scheduleIdleTask(callback) {
  if ("requestIdleCallback" in window) window.requestIdleCallback(callback, { timeout: 1800 });
  else window.setTimeout(callback, 900);
}

function createGallerySeed() {
  return crypto.getRandomValues(new Uint32Array(1))[0];
}

function seededRandom(seed) {
  return () => {
    seed += 0x6d2b79f5;
    let value = seed;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomBetween(random, min, max) {
  return min + random() * (max - min);
}

function shuffle(items, random) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [items[index], items[target]] = [items[target], items[index]];
  }
  return items;
}

function updatePfpViewer(model) {
  if (!pfpViewerPromise) {
    pfpViewerPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "./pfp-points.js?v=25";
      script.addEventListener("load", resolve, { once: true });
      document.body.append(script);
    });
  }
  pfpViewerPromise.then(() => {
    window.dispatchEvent(new CustomEvent("team-pfp-model-change", { detail: { model } }));
  });
}

function warmPfpViewer() {
  scheduleIdleTask(() => updatePfpViewer(teamPfp.dataset.model || teamMembers[0][3]));
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function attachToEdge(base, width, random) {
  const onRight = random() > 0.5;
  const x = onRight
    ? base.x + base.w - width * randomBetween(random, 0.26, 0.48)
    : base.x - width * randomBetween(random, 0.52, 0.74);
  return clamp(x, 0, 100 - width);
}

function createFormatBlock(format, width, x, y) {
  return { format, x, y, w: width, ratio: formatRatios[format] };
}

function createProceduralLayout(random) {
  const heroWidth = randomBetween(random, 80, 96);
  const hero = createFormatBlock("widescreen", heroWidth, randomBetween(random, 0, 100 - heroWidth), 0);
  const squareWidth = randomBetween(random, 32, 43);
  const square = createFormatBlock("square", squareWidth, attachToEdge(hero, squareWidth, random), 18);
  const landscapeWidth = randomBetween(random, 62, 82);
  const landscape = createFormatBlock("landscape", landscapeWidth, randomBetween(random, 0, 100 - landscapeWidth), 38);
  const verticalWidth = randomBetween(random, 27, 36);
  const vertical = createFormatBlock("vertical", verticalWidth, attachToEdge(landscape, verticalWidth, random), 57);
  const miniWidth = randomBetween(random, 11, 15);
  const mini = createFormatBlock("portrait", miniWidth, randomBetween(random, 0, 100 - miniWidth), 69);
  const finalWidth = randomBetween(random, 67, 86);
  const finalBlock = createFormatBlock("widescreen", finalWidth, randomBetween(random, 0, 100 - finalWidth), 78);

  return [hero, square, landscape, vertical, mini, finalBlock];
}

function updateParallax() {
  const viewportCenter = window.innerHeight / 2;
  const wheelMomentum = parallaxImpulse;
  let moving = false;
  parallaxCompositions.forEach(({ composition, visuals }) => {
    const rect = composition.getBoundingClientRect();
    if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2) return;
    const distance = rect.top + rect.height / 2 - viewportCenter;
    visuals.forEach((visual) => {
      const speed = Number(visual.dataset.parallax || 0);
      const target = Math.max(-260, Math.min(260, distance * speed + wheelMomentum * speed * 2.4));
      const current = Number(visual.dataset.parallaxCurrent || 0);
      const offset = current + (target - current) * 0.18;
      if (Math.abs(target - offset) > 0.08) moving = true;
      visual.dataset.parallaxCurrent = offset.toFixed(3);
      visual.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
  });
  parallaxImpulse *= 0.88;
  if (Math.abs(parallaxImpulse) < 0.1) parallaxImpulse = 0;
  if (parallaxImpulse) moving = true;
  return moving;
}

function scheduleParallax() {
  if (parallaxRunning) return;
  parallaxRunning = true;
  const animate = () => {
    parallaxFrame = 0;
    if (updateParallax()) parallaxFrame = requestAnimationFrame(animate);
    else parallaxRunning = false;
  };
  parallaxFrame = requestAnimationFrame(() => {
    animate();
  });
}

function resetMobileWorkColumns() {
  [introColumn, projectsColumn, detailsColumn].forEach((column) => {
    column.style.opacity = "";
    column.style.transform = "";
  });
}

function updateMobileWorkColumns() {
  mobileColumnsFrame = 0;
  resetMobileWorkColumns();
}

function scheduleMobileWorkColumns() {
  if (mobileColumnsFrame) return;
  mobileColumnsFrame = requestAnimationFrame(updateMobileWorkColumns);
}

function normalizeWheelDelta(event) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 40;
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

function cancelWheelScroll() {
  if (wheelScrollFrame) cancelAnimationFrame(wheelScrollFrame);
  wheelScrollFrame = 0;
  wheelScrollTarget = window.scrollY;
}

function scheduleWheelScroll() {
  if (wheelScrollFrame) return;
  const animate = () => {
    wheelScrollFrame = 0;
    const distance = wheelScrollTarget - window.scrollY;
    if (Math.abs(distance) < 0.5) {
      window.scrollTo(0, wheelScrollTarget);
      return;
    }
    window.scrollTo(0, window.scrollY + distance * 0.16);
    wheelScrollFrame = requestAnimationFrame(animate);
  };
  wheelScrollFrame = requestAnimationFrame(animate);
}

function updateProjectMeta(index) {
  const [title, year, design, url, images] = projects[index];
  metaYear.textContent = year;
  metaDesignLabel.textContent = "Designed";
  metaDesign.textContent = design;
  metaUrl.textContent = title;
  metaUrl.href = url || "#";
}

mobileQuery.addEventListener("change", () => {
  closeExpandedVisual(false);
  if (activeProject >= 0) updateProjectMeta(activeProject);
  updateFooterUpVisibility();
});

async function animateProjectDetails(index, token) {
  const closed = await animateDetailsHeight(false, token);
  if (!closed || token !== detailsTransitionToken) return;
  updateProjectMeta(index);
  detailsColumn.style.visibility = "visible";
  detailsColumn.style.height = "0px";
  const opened = await animateDetailsHeight(true, token);
  if (!opened || token !== detailsTransitionToken) return;
  detailsColumn.style.height = "";
  detailsColumn.style.visibility = "visible";
}

function setActiveProject(index, { animate = true } = {}) {
  if (activeProject === index) return;
  activeProject = index;
  document.querySelectorAll(".project-button").forEach((button) => button.classList.toggle("active", Number(button.dataset.project) === index));
  document.querySelectorAll(".client-slider-button").forEach((button) => button.classList.toggle("active", Number(button.dataset.project) === index));
  centerActiveClient(animate);
  const workIsVisible = !detailsColumn.hidden && workTab.classList.contains("active");
  if (mobileQuery.matches || !animate || !workIsVisible || !metaYear.textContent) {
    detailsTransitionToken += 1;
    detailsColumn.style.height = "";
    detailsColumn.style.visibility = detailsColumn.hidden ? "" : "visible";
    updateProjectMeta(index);
    return;
  }
  animateProjectDetails(index, ++detailsTransitionToken);
}

function scrollToProject(index) {
  cancelWheelScroll();
  suppressScrollSync = true;
  setActiveProject(index);
  const group = document.querySelector(`.project-group[data-project="${index}"]`);
  const targetTop = group.getBoundingClientRect().top + window.scrollY - 8;
  window.scrollTo({ top: targetTop, behavior: "instant" });
  requestAnimationFrame(() => {
    suppressScrollSync = false;
  });
}

function getContent(slug) {
  return (contentManifest[slug] || []).map((filename) => {
    const folder = mobileQuery.matches ? "mobile-content" : "content";
    return `assets/${folder}/${slug}/${filename}`;
  });
}

function isVideoSource(src) {
  return /\.(mp4|mov)$/i.test(src);
}

function getContentFormat(src, fallback) {
  return fallback;
}

function getContentWidth(width, format, isVideo) {
  if (mobileQuery.matches) {
    const limits = isVideo
      ? { portrait: [34, 68], square: [46, 82], widescreen: [76, 96], landscape: [64, 92], vertical: [38, 66] }
      : { portrait: [28, 48], square: [38, 62], widescreen: [48, 88], landscape: [44, 82], vertical: [32, 58] };
    const [min, max] = limits[format] || [width, width];
    return clamp(width, min, max);
  }

  const limits = isVideo
    ? { portrait: [52, 68], square: [62, 82], widescreen: [76, 96] }
    : { portrait: [16, 44], square: [24, 62], widescreen: [42, 88] };
  const [min, max] = limits[format] || [width, width];
  return clamp(width, min, max);
}

function loadMediaElement(media) {
  if (!media.dataset.src || media.dataset.loadedSource) return;
  media.dataset.loadedSource = "true";
  if (media.tagName === "IMG") {
    const rect = media.getBoundingClientRect();
    media.fetchPriority = rect.bottom >= 0 && rect.top <= window.innerHeight ? "high" : "low";
    media.loading = "eager";
  }
  media.src = media.dataset.src;
  if (media.tagName === "VIDEO") {
    media.load();
    videoObserver.observe(media);
  }
}

function loadNearbyMedia() {
  nearbyMediaFrame = 0;
  const margin = mobileQuery.matches ? 40 : 1000;
  document.querySelectorAll(".visual-media:not([data-loaded-source])").forEach((media) => {
    const rect = media.getBoundingClientRect();
    if (rect.bottom >= -margin && rect.top <= window.innerHeight + margin) loadMediaElement(media);
  });
}

function scheduleNearbyMedia() {
  if (nearbyMediaFrame) return;
  nearbyMediaFrame = requestAnimationFrame(loadNearbyMedia);
}

const lazyMediaObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    lazyMediaObserver.unobserve(target);
    loadMediaElement(target);
  });
}, { rootMargin: mobileQuery.matches ? "40px 0px" : "900px 0px" });

function rectsOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function placeVisualTags() {
  document.querySelectorAll(".visual-tags-shift-left, .visual-tags-shift-right").forEach((visual) => {
    visual.classList.remove("visual-tags-shift-left", "visual-tags-shift-right");
  });
  document.querySelectorAll(".visual-tags").forEach((tag) => {
    const tags = tag.dataset.tags?.split("|").filter(Boolean) || [];
    if (!tags.length) return;
    const width = tag.getBoundingClientRect().width;
    const count = width < 74 ? 1 : width < 132 ? 2 : 3;
    tag.querySelector(".visual-tags-text").textContent = tags.slice(0, count).join("/ ");
  });
  document.querySelectorAll(".project-composition").forEach((composition) => {
    const visuals = [...composition.querySelectorAll(".visual")].map((visual) => ({
      visual,
      rect: visual.getBoundingClientRect(),
      z: Number(getComputedStyle(visual).zIndex) || 0,
    }));

    visuals.forEach(({ visual, z }) => {
      const tag = visual.querySelector(".visual-tags");
      if (!tag) return;
      const tagRect = tag.getBoundingClientRect();
      const covers = visuals.filter((other) => (
        other.visual !== visual && other.z > z && rectsOverlap(tagRect, other.rect)
      ));
      if (!covers.length) return;
      const overlapCenter = covers.reduce((sum, other) => {
        const left = Math.max(tagRect.left, other.rect.left);
        const right = Math.min(tagRect.right, other.rect.right);
        return sum + (left + right) / 2;
      }, 0) / covers.length;
      const tagCenter = (tagRect.left + tagRect.right) / 2;
      visual.classList.add(overlapCenter > tagCenter ? "visual-tags-shift-left" : "visual-tags-shift-right");
    });
  });
}

function scheduleVisualTags() {
  requestAnimationFrame(placeVisualTags);
}

function setOverlayRect(overlay, rect) {
  overlay.style.setProperty("--overlay-x", `${rect.left}px`);
  overlay.style.setProperty("--overlay-y", `${rect.top}px`);
  overlay.style.setProperty("--overlay-w", `${rect.width}px`);
  overlay.style.setProperty("--overlay-h", `${rect.height}px`);
}

function removeExpandedOverlay() {
  expandedVisual?.classList.remove("visual-source-expanded");
  expandedBackdrop?.remove();
  expandedBackdrop = null;
  expandedOverlay?.remove();
  expandedOverlay = null;
  expandedVisual = null;
  expandedVisualAnimating = false;
  expandedVisualPendingClose = false;
}

function closeExpandedVisual(animate = true) {
  if (!expandedOverlay || !expandedVisual) return;
  if (!animate) {
    removeExpandedOverlay();
    return;
  }
  if (expandedVisualAnimating) {
    expandedVisualPendingClose = true;
    return;
  }
  const sourceRect = expandedVisual.getBoundingClientRect();
  const targetRect = {
    left: sourceRect.left,
    top: sourceRect.top,
    width: sourceRect.width,
    height: sourceRect.height,
  };
  expandedVisualAnimating = true;
  setOverlayRect(expandedOverlay, expandedOverlay.getBoundingClientRect());
  expandedVisual.classList.remove("visual-source-expanded");
  expandedOverlay.classList.add("visual-lightbox-closing");
  expandedBackdrop?.classList.remove("is-open");
  requestAnimationFrame(() => setOverlayRect(expandedOverlay, targetRect));
  window.setTimeout(removeExpandedOverlay, 540);
}

function cloneVisualForOverlay(visual) {
  const box = visual.querySelector(".visual-box").cloneNode(true);
  box.querySelectorAll(".video-cover").forEach((cover) => cover.remove());
  box.querySelectorAll("img, video").forEach((media) => {
    const source = media.currentSrc || media.src || media.dataset.src;
    if (source) media.src = source;
    media.classList.add("is-loaded");
    if (media.tagName === "VIDEO") {
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
      media.removeAttribute("controls");
      media.play?.().catch(() => {});
    }
  });
  return box;
}

function storeMediaRatio(media) {
  const width = media.tagName === "VIDEO" ? media.videoWidth : media.naturalWidth;
  const height = media.tagName === "VIDEO" ? media.videoHeight : media.naturalHeight;
  if (width > 0 && height > 0) media.dataset.mediaRatio = (width / height).toFixed(6);
}

function getVisualMediaRatio(visual) {
  const media = visual.querySelector(".visual-media");
  if (!media) return null;
  storeMediaRatio(media);
  const ratio = Number(media.dataset.mediaRatio);
  return Number.isFinite(ratio) && ratio > 0 ? ratio : null;
}

function getFullscreenRect(visual, inset) {
  const tagHeight = 18;
  const ratio = getVisualMediaRatio(visual) || formatRatios[visual.dataset.format] || Number(visual.style.getPropertyValue("--ratio")) || 1;
  const maxWidth = window.innerWidth - inset * 2;
  const maxMediaHeight = window.innerHeight - inset * 2 - tagHeight;
  let width = maxWidth;
  let mediaHeight = width / ratio;
  if (mediaHeight > maxMediaHeight) {
    mediaHeight = maxMediaHeight;
    width = mediaHeight * ratio;
  }
  const height = mediaHeight + tagHeight;
  return {
    left: (window.innerWidth - width) / 2,
    top: (window.innerHeight - height) / 2,
    width,
    height,
  };
}

function openExpandedVisual(visual) {
  if (expandedVisualAnimating) return;
  closeExpandedVisual(false);
  expandedVisualAnimating = true;
  const sourceRect = visual.getBoundingClientRect();
  const inset = 8;
  const targetRect = getFullscreenRect(visual, inset);
  const overlay = document.createElement("button");
  const backdrop = document.createElement("button");
  backdrop.type = "button";
  backdrop.className = "visual-lightbox-backdrop";
  backdrop.setAttribute("aria-label", "Close fullscreen media");
  overlay.type = "button";
  overlay.className = "visual-lightbox";
  overlay.setAttribute("aria-label", "Close fullscreen media");
  overlay.append(cloneVisualForOverlay(visual));
  overlay.append(visual.querySelector(".visual-tags").cloneNode(true));
  const requestClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeExpandedVisual(true);
  };
  overlay.addEventListener("pointerdown", requestClose);
  overlay.addEventListener("touchend", requestClose);
  overlay.addEventListener("click", requestClose);
  backdrop.addEventListener("pointerdown", requestClose);
  backdrop.addEventListener("touchend", requestClose);
  backdrop.addEventListener("click", requestClose);
  document.body.append(backdrop);
  document.body.append(overlay);
  requestAnimationFrame(() => backdrop.classList.add("is-open"));
  overlay.querySelectorAll("video").forEach((video) => video.play?.().catch(() => {}));
  expandedVisual = visual;
  expandedOverlay = overlay;
  expandedBackdrop = backdrop;
  visual.classList.add("visual-source-expanded");
  setOverlayRect(overlay, sourceRect);
  overlay.getBoundingClientRect();
  requestAnimationFrame(() => setOverlayRect(overlay, targetRect));
  window.setTimeout(() => {
    expandedVisualAnimating = false;
    if (expandedVisualPendingClose) {
      expandedVisualPendingClose = false;
      requestAnimationFrame(() => closeExpandedVisual(true));
    }
  }, 540);
}

function handleVisualClick(event) {
  if (!mobileQuery.matches) return;
  const visual = event.currentTarget.classList?.contains("visual")
    ? event.currentTarget
    : event.target.closest(".visual");
  if (!visual) return;
  event.preventDefault();
  event.stopPropagation();
  if (expandedVisualAnimating) {
    if (expandedOverlay) expandedVisualPendingClose = true;
    return;
  }
  if (visual === expandedVisual) closeExpandedVisual(true);
  else openExpandedVisual(visual);
}

function createMedia(src, title) {
  if (!src) return null;
  const isVideo = isVideoSource(src);
  const media = document.createElement(isVideo ? "video" : "img");
  const reveal = () => {
    storeMediaRatio(media);
    media.classList.add("is-loaded");
  };
  const fallbackToOriginal = () => {
    if (!media.dataset.src.includes("assets/mobile-content/") || media.dataset.usedFallback) return;
    media.dataset.usedFallback = "true";
    media.src = media.dataset.src.replace("assets/mobile-content/", "assets/content/");
    if (isVideo) media.load();
  };
  media.className = "visual-media is-loading";
  if (isVideo) {
    media.autoplay = true;
    media.controls = false;
    media.disablePictureInPicture = true;
    media.disableRemotePlayback = true;
    media.muted = true;
    media.loop = true;
    media.playsInline = true;
    media.setAttribute("playsinline", "");
    media.setAttribute("webkit-playsinline", "");
    media.setAttribute("x-webkit-airplay", "deny");
    media.removeAttribute("controls");
    media.preload = mobileQuery.matches ? "none" : "metadata";
    media.addEventListener("loadedmetadata", () => storeMediaRatio(media), { once: true });
    media.addEventListener("loadeddata", reveal, { once: true });
    media.addEventListener("canplay", reveal, { once: true });
    media.addEventListener("playing", () => media.closest(".visual")?.classList.add("video-frame-ready"));
    media.addEventListener("pause", () => media.closest(".visual")?.classList.remove("video-frame-ready"));
    media.addEventListener("error", fallbackToOriginal);
  } else {
    media.alt = `${title} preview`;
    media.decoding = "async";
    media.addEventListener("load", reveal, { once: true });
    media.addEventListener("error", fallbackToOriginal);
  }
  media.dataset.src = src;
  lazyMediaObserver.observe(media);
  if (isVideo ? media.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA : media.complete) reveal();
  return media;
}

async function renderGallery() {
  closeExpandedVisual(false);
  gallery.dataset.seed = gallerySeed;
  projects.forEach(([title, , , url, slug], index) => {
    const random = seededRandom(gallerySeed ^ Math.imul(index + 1, 0x9e3779b1));
    const group = document.createElement("section");
    group.className = "project-group";
    group.dataset.project = index;
    const media = shuffle(getContent(slug), random);
    const compositionCount = Math.max(1, Math.ceil(media.length / colorLayers.length));
    for (let compositionIndex = 0; compositionIndex < compositionCount; compositionIndex += 1) {
      const compositionElement = document.createElement("div");
      compositionElement.className = "project-composition";
      const compositionHeight = mobileQuery.matches ? randomBetween(random, 980, 1180) : randomBetween(random, 1760, 1980);
      compositionElement.style.setProperty("--composition-height", `${Math.round(compositionHeight)}px`);
      const composition = createProceduralLayout(random);
      const colors = shuffle([...colorLayers], random);
      const slotsByArea = composition
        .map(({ w: width, ratio }, layerIndex) => ({ layerIndex, area: width * width / ratio }))
        .sort((left, right) => right.area - left.area);
      const depths = slotsByArea
        .reduce((result, { layerIndex }, depth) => {
          result[layerIndex] = depth + 1;
          return result;
        }, []);
      const mediaByLayer = [];
      media
        .slice(compositionIndex * colorLayers.length, (compositionIndex + 1) * colorLayers.length)
        .sort((left, right) => Number(isVideoSource(right)) - Number(isVideoSource(left)))
        .forEach((src, mediaIndex) => {
          mediaByLayer[slotsByArea[mediaIndex].layerIndex] = src;
        });
      colors.forEach((color, layerIndex) => {
        const visualButton = document.createElement("button");
        const { format, x, y, w: width, ratio } = composition[layerIndex];
        const src = mediaByLayer[layerIndex];
        const contentFormat = src ? getContentFormat(src, format) : format;
        const contentWidth = src ? getContentWidth(width, contentFormat, isVideoSource(src)) : width;
        const contentX = clamp(x + (width - contentWidth) / 2, 0, 100 - contentWidth);
        const visualHeight = contentWidth / (src ? formatRatios[contentFormat] : ratio);
        const contentY = clamp(y, 0, Math.max(0, 100 - visualHeight - 2));
        const mediaElement = createMedia(src, title);
        visualButton.type = "button";
        visualButton.className = `visual visual-${color}${mediaElement ? ` visual-${mediaElement.tagName.toLowerCase()}` : ""}`;
        visualButton.setAttribute("aria-label", `${title} project media`);
        visualButton.addEventListener("click", handleVisualClick);
        visualButton.dataset.format = contentFormat;
        const parallaxDirection = layerIndex % 2 === 0 ? 1 : -1;
        visualButton.dataset.parallax = (parallaxDirection * randomBetween(random, 0.055, 0.115)).toFixed(4);
        visualButton.style.setProperty("--x", `${contentX.toFixed(2)}%`);
        visualButton.style.setProperty("--y", `${contentY.toFixed(2)}%`);
        visualButton.style.setProperty("--w", `${contentWidth.toFixed(2)}%`);
        visualButton.style.setProperty("--ratio", src ? formatRatios[contentFormat] : ratio);
        visualButton.style.setProperty("--z", depths[layerIndex]);
        visualButton.style.setProperty("--delay", `${Math.round(randomBetween(random, 0, 420))}ms`);
        const visualBox = document.createElement("span");
        visualBox.className = "visual-box";
        if (mediaElement) {
          visualBox.append(mediaElement);
          if (mediaElement.tagName === "VIDEO") {
            const videoCover = document.createElement("span");
            videoCover.className = "video-cover";
            visualBox.append(videoCover);
          }
        }
        visualButton.append(visualBox);
        const tagLabel = document.createElement("span");
        tagLabel.className = "visual-tags";
        const filename = src?.split("/").pop();
        const tags = contentTags[slug]?.[filename] || [title.toLowerCase(), contentFormat, isVideoSource(src) ? "motion" : "image"];
        tagLabel.dataset.tags = tags.join("|");
        const tagText = document.createElement("span");
        tagText.className = "visual-tags-text";
        tagText.textContent = tagLabel.dataset.tags.split("|").join("/ ");
        tagLabel.append(tagText);
        visualButton.append(tagLabel);
        compositionElement.append(visualButton);
      });
      group.append(compositionElement);
    }
    gallery.append(group);
  });
  projectGroups = [...gallery.querySelectorAll(".project-group")];
  parallaxCompositions = [...gallery.querySelectorAll(".project-composition")].map((composition) => ({
    composition,
    visuals: [...composition.querySelectorAll(".visual")],
  }));
  scheduleParallax();
  scheduleVisualTags();
  scheduleNearbyMedia();
}

projects.forEach(([title], index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "project-button";
  button.dataset.project = index;
  button.textContent = title;
  button.addEventListener("click", () => scrollToProject(index));
  projectList.append(button);

  const clientButton = document.createElement("button");
  clientButton.type = "button";
  clientButton.className = "client-slider-button";
  clientButton.dataset.project = index;
  clientButton.style.setProperty("--project-index", index);
  clientButton.textContent = title;
  clientButton.addEventListener("click", () => {
    clientPickerIndex = index;
    mobileClientSlider.style.setProperty("--client-picker-index", clientPickerIndex);
    scrollToProject(index);
  });
  mobileClientSlider.append(clientButton);
});

mobileClientSlider.addEventListener("touchstart", beginClientSliderScroll, { passive: true });
mobileClientSlider.addEventListener("pointerdown", beginClientSliderScroll);
mobileClientSlider.addEventListener("scroll", handleClientSliderScroll, { passive: true });
detailsColumn.addEventListener("touchstart", beginClientSliderProxy, { passive: true });
detailsColumn.addEventListener("touchmove", moveClientSliderProxy, { passive: false });
detailsColumn.addEventListener("touchend", endClientSliderProxy, { passive: true });
detailsColumn.addEventListener("touchcancel", endClientSliderProxy, { passive: true });
gallery.addEventListener("click", handleVisualClick);

const projectsVisibilityObserver = new IntersectionObserver(([entry]) => {
  const sliderVisible = mobileQuery.matches && !entry.isIntersecting;
  mobileWorkColumnsPassed = sliderVisible;
  detailsColumn.classList.toggle("client-slider-visible", sliderVisible);
  updateFooterUpVisibility();
  if (sliderVisible) requestAnimationFrame(() => centerActiveClient(false));
}, { threshold: 0 });
projectsVisibilityObserver.observe(projectsColumn);

function updateTeamMember(index) {
  const [name, role, description, model] = teamMembers[index];
  teamRole.textContent = role;
  teamDescription.textContent = description;
  teamPfpInitials.textContent = name.split(" ").map((part) => part[0]).join("");
  teamPfp.setAttribute("aria-label", `${name} PFP`);
  teamPfp.dataset.model = model;
  updatePfpViewer(model);
}

document.querySelectorAll(".team-button").forEach((button) => {
  button.addEventListener("click", async () => {
    if (button.classList.contains("active")) return;
    document.querySelectorAll(".team-button").forEach((item) => item.classList.toggle("active", item === button));
    const token = ++transitionToken;
    const profileColumns = [teamAboutColumn, teamPfpColumn];
    const closed = await animateColumns(profileColumns, false, token);
    if (!closed || token !== transitionToken) return;
    updateTeamMember(Number(button.dataset.team));
    profileColumns.forEach((column) => {
      column.style.visibility = "visible";
      column.style.height = "0px";
    });
    const opened = await animateColumns(profileColumns, true, token);
    if (!opened || token !== transitionToken) return;
    resetColumns(profileColumns, true);
  });
});

function getRevealHeights(column) {
  const top = column.getBoundingClientRect().top;
  const totalHeight = column.scrollHeight;
  const heights = [];
  const walker = document.createTreeWalker(column, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) {
    if (!walker.currentNode.textContent.trim()) continue;
    const range = document.createRange();
    range.selectNodeContents(walker.currentNode);
    for (const rect of range.getClientRects()) {
      if (rect.height) heights.push(Math.min(totalHeight, Math.ceil(rect.bottom - top + 5)));
    }
  }

  heights.push(totalHeight);
  return [...new Set(heights)].sort((a, b) => a - b);
}

let transitionToken = 0;

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function animateDetailsHeight(opening, token) {
  const currentHeight = detailsColumn.getBoundingClientRect().height;
  const totalHeight = detailsColumn.scrollHeight;
  const revealed = getRevealHeights(detailsColumn);
  const heights = opening
    ? revealed.filter((height) => height > currentHeight + 1)
    : [...revealed].reverse().filter((height) => height < currentHeight - 1).concat(0);
  detailsColumn.style.visibility = "visible";
  detailsColumn.style.height = `${currentHeight}px`;
  for (const height of heights) {
    await wait(43);
    if (token !== detailsTransitionToken) return false;
    detailsColumn.style.height = `${height}px`;
  }
  if (opening) detailsColumn.style.height = `${totalHeight}px`;
  else detailsColumn.style.visibility = "hidden";
  return true;
}

async function animateColumns(columns, opening, token) {
  const ordered = opening ? columns : [...columns].reverse();
  for (const column of ordered) {
    if (token !== transitionToken) return false;
    column.getAnimations().forEach((animation) => animation.cancel());
    column.style.visibility = "visible";
    column.style.clipPath = "";
    column.style.height = "";
    column.style.willChange = "opacity, filter, transform";
    if (opening) column.hidden = false;
    await new Promise((resolve) => requestAnimationFrame(resolve));
    if (token !== transitionToken) return false;
    const from = opening
      ? { opacity: 0, filter: "blur(18px)", transform: "translate3d(0, 8px, 0)" }
      : { opacity: getComputedStyle(column).opacity || 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" };
    const to = opening
      ? { opacity: 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" }
      : { opacity: 0, filter: "blur(18px)", transform: "translate3d(0, -6px, 0)" };
    const animation = column.animate([from, to], {
      duration: opening ? 520 : 360,
      easing: "cubic-bezier(.16, 1, .3, 1)",
      fill: "both",
    });
    await animation.finished.catch(() => {});
    if (token !== transitionToken) return false;
    animation.cancel();
    if (opening) {
      column.style.opacity = "";
      column.style.filter = "";
      column.style.transform = "";
    }
    else {
      column.style.opacity = "0";
      column.style.filter = "blur(18px)";
      column.style.transform = "translate3d(0, -6px, 0)";
      column.style.visibility = "hidden";
    }
    column.style.willChange = "";
  }
  return true;
}

function resetColumns(columns, visible) {
  columns.forEach((column) => {
    column.getAnimations().forEach((animation) => animation.cancel());
    column.hidden = !visible;
    column.style.clipPath = "";
    column.style.filter = "";
    column.style.height = "";
    column.style.opacity = "";
    column.style.transform = "";
    column.style.visibility = visible ? "visible" : "";
    column.style.willChange = "";
  });
}

function setGalleryPlayback(active) {
  gallery.querySelectorAll("video").forEach((video) => {
    if (active) videoObserver.observe(video);
    else {
      videoObserver.unobserve(video);
      visibleVideos.delete(video);
      video.pause();
    }
  });
  if (active) scheduleVisibleVideos();
}

async function switchSection(targetSection, token) {
  const newColumns = [...document.querySelectorAll(`.${targetSection}-only`)];
  const oldColumns = [...document.querySelectorAll(".work-only:not([hidden]), .about-only:not([hidden]), .team-only:not([hidden])")]
    .filter((column) => !newColumns.includes(column));
  const closed = await animateColumns(oldColumns, false, token);
  if (!closed || token !== transitionToken) return false;
  oldColumns.forEach((column) => {
    column.hidden = true;
    column.style.clipPath = "";
    column.style.filter = "";
    column.style.height = "";
    column.style.opacity = "";
    column.style.transform = "";
    column.style.visibility = "";
    column.style.willChange = "";
  });
  newColumns.forEach((column) => {
    const wasHidden = column.hidden;
    column.hidden = false;
    if (!wasHidden) return;
    column.style.clipPath = "";
    column.style.height = "";
    column.style.visibility = "hidden";
    column.style.opacity = "0";
    column.style.filter = "blur(18px)";
    column.style.transform = "translate3d(0, 8px, 0)";
  });
  const opened = await animateColumns(newColumns, true, token);
  if (!opened || token !== transitionToken) return false;
  resetColumns(newColumns, true);
  return true;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", async () => {
    const targetSection = tab.dataset.tab;
    if (tab.classList.contains("active")) return;
    if (targetSection !== "work") setGalleryPlayback(false);
    suppressScrollSync = true;
    detailsTransitionToken += 1;
    detailsColumn.style.height = "";
    detailsColumn.style.visibility = detailsColumn.hidden ? "" : "visible";
    const token = ++transitionToken;
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    updateFooterUpVisibility();
    location.hash = targetSection;
    if (!await switchSection(targetSection, token)) return;
    if (targetSection === "work") requestAnimationFrame(() => {
      setGalleryPlayback(true);
      scheduleParallax();
      scheduleMobileWorkColumns();
      suppressScrollSync = false;
    });
    else if (targetSection === "team") requestAnimationFrame(() => {
      resetMobileWorkColumns();
      updateTeamMember(Number(document.querySelector(".team-button.active")?.dataset.team || 0));
      suppressScrollSync = false;
    });
    else requestAnimationFrame(() => {
      resetMobileWorkColumns();
      suppressScrollSync = false;
    });
  });
});

async function recomposeGallery() {
  const currentProject = Math.max(activeProject, 0);
  gallerySeed = createGallerySeed();
  videoObserver.disconnect();
  lazyMediaObserver.disconnect();
  suppressScrollSync = true;
  gallery.replaceChildren();
  await renderGallery();
  requestAnimationFrame(() => {
    scheduleVisualTags();
    scrollToProject(currentProject);
  });
}

helpToggle.innerHTML = '<img src="./assets/web_recomp.svg?v=1" alt="RECOMP" />';
helpToggle.addEventListener("click", recomposeGallery);
function setDisclaimerOpen(open) {
  disclaimerModal.classList.toggle("is-open", open);
  disclaimerModal.setAttribute("aria-hidden", String(!open));
}
disclaimerToggle.addEventListener("click", () => setDisclaimerOpen(true));
disclaimerClose.addEventListener("click", () => setDisclaimerOpen(false));
disclaimerModal.addEventListener("click", (event) => {
  if (event.target === disclaimerModal) setDisclaimerOpen(false);
});
footerUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const themeOrder = ["glass", "dark"];
const themeCookie = "maxim-brik-theme";
let themeIndex = Math.max(0, themeOrder.indexOf(getCookieValue(themeCookie)));

function applyTheme(theme) {
  document.body.classList.remove("light-theme");
  document.body.classList.toggle("glass-theme", theme === "glass");
  themeToggle.setAttribute("aria-pressed", String(theme !== "dark"));
  themeToggle.setAttribute("aria-label", `Switch color theme, current: ${theme}`);
}

applyTheme(themeOrder[themeIndex]);
themeToggle.addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themeOrder.length;
  const theme = themeOrder[themeIndex];
  applyTheme(theme);
  setCookieValue(themeCookie, theme);
});
window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (expandedOverlay) closeExpandedVisual(true);
  else if (disclaimerModal.classList.contains("is-open")) setDisclaimerOpen(false);
  else recomposeGallery();
});

let siteInitialized = false;
function showSectionFromHash() {
  const initialSection = location.hash.slice(1) || "about";
  const initialTab = document.querySelector(`[data-tab="${initialSection}"]`);
  if (initialTab && !initialTab.classList.contains("active")) initialTab.click();
  else if (!location.hash) history.replaceState(null, "", "#about");
}

function initializeSite() {
  if (siteInitialized) return;
  siteInitialized = true;
  renderGallery();
  setActiveProject(0, { animate: false });
  showSectionFromHash();
  scheduleMobileWorkColumns();
  warmPfpViewer();
}

if (document.documentElement.classList.contains("is-authorized")) initializeSite();
else window.addEventListener("site-authorized", initializeSite, { once: true });
window.addEventListener("hashchange", () => {
  if (siteInitialized) showSectionFromHash();
});

window.addEventListener("scroll", () => {
  if (mobileQuery.matches && expandedOverlay) closeExpandedVisual(true);
  scheduleParallax();
  scheduleVisibleVideos();
  scheduleNearbyMedia();
  if (suppressScrollSync) return;
  if (!workTab.classList.contains("active")) return;
  if (!projectGroups.length) return;
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    const marker = window.scrollY + window.innerHeight * 0.35;
    const active = projectGroups.reduce((current, group) => group.offsetTop <= marker ? group : current, projectGroups[0]);
    setActiveProject(Number(active.dataset.project));
  });
});

window.addEventListener("resize", scheduleVisualTags);
window.addEventListener("resize", scheduleNearbyMedia);
window.addEventListener("touchmove", () => {
  if (mobileQuery.matches && expandedOverlay) closeExpandedVisual(true);
}, { passive: true });

window.addEventListener("wheel", (event) => {
  if (mobileQuery.matches && expandedOverlay) closeExpandedVisual(true);
  event.preventDefault();
  const delta = Math.max(-480, Math.min(480, normalizeWheelDelta(event)));
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (!wheelScrollFrame) wheelScrollTarget = window.scrollY;
  wheelScrollTarget = Math.max(0, Math.min(maxScroll, wheelScrollTarget + delta));
  parallaxImpulse = Math.max(-720, Math.min(720, parallaxImpulse + delta));
  scheduleWheelScroll();
  scheduleParallax();
}, { passive: false });

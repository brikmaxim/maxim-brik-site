const projects = [
  ["R&D", "2026", "Maxim Brik, Alexey Molchanov", "https://www.instagram.com/iammaximbrik/", "rnd"],
  ["NDSP", "2026", "Maxim Brik", "https://newdaysamepain.com/", "ndsp"],
  ["ANGEL333", "2025", "Maxim Brik", "https://angel333.online/", "angel333"],
  ["KYNG", "2026", "Maxim Brik", "https://www.instagram.com/khemgendwrld/", "kyng"],
  ["Reckless Scholars", "2022", "Maxim Brik", "https://www.recklessscholars.com/", "reckless-scholars"],
  ["OMANKO", "2026", "Maxim Brik", "https://www.instagram.com/iammaximbrik/", "omanko"],
  ["Solutions", "2022", "Maxim Brik", "https://www.nobody.solutions/", "solutions"],
  ["KM 20", "2021", "Maxim Brik", "https://www.km20.ru/", "km20"],
  ["Bogema Leningrad", "2020", "Maxim Brik", "https://bogema.market/collection/all", ""],
  ["YAM'S", "2026", "Maxim Brik", "", ""],
  ["9Mice", "2026", "Maxim Brik", "", ""],
  ["Erik Musin", "2026", "Maxim Brik", "", ""],
  ["Sicko", "2026", "Maxim Brik", "", ""],
  ["Nasty Noah", "2026", "Maxim Brik", "", ""],
];

const contentManifest = {
  "angel333": [
    "001_visualisation:design:development..jpg",
    "002_visualisation:design:development.jpg",
    "003_visualisation:design:development.jpg",
    "004__direction:visualisation:design.jpg",
    "005_direction:visualisation:design.jpg",
    "006__direction:visualisation.jpg",
    "007_visualisation:design:development..jpg",
    "008_visualisation:design:development..jpg",
  ],
  "km20": [
    "001_visualisation:design:developmen.png",
    "002_visualisation:design:developmen.png",
    "003_visualisation:design:developmen.jpg",
    "004_visualisation:design:development.jpg",
  ],
  "kyng": [
    "001_visualisation:design:development..jpg",
    "002_visualisation:design:development..jpg",
    "005_visualisation:design:development..jpg",
    "006_visualisation:design:development.jpg",
    "007_visualisation:design.mp4",
    "008_visualisation:design:development..mp4",
    "009_research:design.jpg",
    "010_visualisation:design:development.jpeg",
    "011__visualisation:design:development.jpeg",
    "012_research:visualisation:design:development.MP4",
    "013_research:visualisation:design:development.jpg",
  ],
  "ndsp": [
    "001_visualisation:design:development.jpg",
    "002_visualisation:design:development..jpg",
    "004_visualisation:design:development..jpg",
    "005_visualisation:design:development.jpg",
    "006_research:visualisation:design:development.mp4",
    "007_visualization:development:design:.jpg.jpg",
    "008_visualization:development:design:.jpg.jpg",
  ],
  "omanko": [
    "001__visualization:development:production.mp4",
    "002__visualization:development:production.png",
    "003_visualization:development:production.jpg",
    "004__visualization:development:production.jpg",
    "005__visualization:development:production.jpg",
  ],
  "reckless-scholars": [
    "001_visualization:development:design:.png.png",
    "002_visualization:development:design:.jpg.jpg",
    "003_visualization:development:design:.jpg.jpg",
    "004_visualization:development:design:.jpg.jpg",
    "005__visualization:development:design.jpg",
  ],
  "rnd": [
    "002_004_research:direction:visualization.png",
    "003_research:visualization.jpg",
    "004_research:visualization.jpg",
    "004_research:visualization.png",
    "006_research:direction:visualization.jpg",
    "007_020_research:direction:visualization.jpg",
    "009_research:visualisation.jpg",
    "010__research:visualization:development:design:production.jpg",
    "011_direction:visualization..mp4",
    "013_direction:visualization..png",
    "014_visualization.png",
    "015__direction:visualization.mp4",
    "016__research:visualization:development:design:production.mp4",
    "017__visualization.mp4",
    "018__direction:visualization.mp4",
    "019__visualization.mp4",
    "020_research:direction:visualization.mp4",
    "022_direction:visualization.mp4",
    "023_research:direction:visualization.mp4",
    "025_research:direction:visualization.mp4",
    "025_visualization.mp4",
    "026_direction:visualization.mp4",
    "027_research:design:direction:visualization.mp4",
    "028_research:direction:visualization.jpg",
    "035_research:design.png",
    "037_design.png",
    "039_design.png",
    "040_design:visualisation.png",
    "041_research:visualisation.mp4",
    "042_research:visualisation.jpg",
    "043_research:visualisation.png",
    "045_research:visualisation.jpg",
    "047_research:visualisation:design:development:production.jpg",
    "048_research:visualisation:design:development:production.jpg",
    "049_research:visualisation.jpg",
    "050_research:visualisation.jpg",
    "051_research:visualisation.mp4",
    "052_research:visualisation.jpg",
    "053_research:visualisation.jpg",
    "054_research:visualisation.jpg",
    "055_research:visualisation.jpg",
    "056_research:visualisation.mp4",
    "057_design.png",
    "058_research:design.png",
  ],
  "sicko": [
    "001_visualisation:design:development.png",
    "002_visualisation:design:development.png",
    "003_visualisation:design:development.png",
  ],
  "solutions": [
    "001_research:direction:visualization.jpg",
    "002_research:direction:visualization.png",
    "003_research:direction:visualization.png",
    "004_research:direction:visualization.png",
    "005_research:direction:visualization.png",
    "006_research:direction:visualization.png",
    "007_research:direction:visualization.png",
    "008_research:direction:visualization:development.jpg",
    "009_visualization:development.jpg",
  ],
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
const tabsNav = document.querySelector(".tabs");
const teamList = document.querySelector(".team-list");
const messageTextarea = document.querySelector("#message-text");
const messageContinue = document.querySelector(".message-continue");
const messageCopy = document.querySelector(".message-copy");
const budgetSwitch = document.querySelector(".budget-switch");
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
const siteFooter = document.querySelector(".site-footer");
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
let mobileWorkSnapTimer = 0;
let clientPickerIndex = 0;
let mobileDetailsSnapTop = 0;
let mobileProgrammaticScrollTimer = 0;
let expandedVisual = null;
let expandedOverlay = null;
let expandedBackdrop = null;
let expandedVisualAnimating = false;
let expandedVisualPendingClose = false;
let activeGalleryTag = "";
let navIndicatorFrame = 0;
let selectedBudget = "$1k-$5k";
let lastValidMessageValue = "";
let lastValidMessageSelectionStart = 0;
let lastValidMessageSelectionEnd = 0;
let messageTextareaInteracted = false;
let showcaseInfoOverlay = null;
const mediaGridFormatCache = new Map();

const filterableContentTags = ["research", "direction", "visualisation", "design", "development", "production"];
const contentTagAliases = {
  visualization: "visualisation",
  visualisation: "visualisation",
  developmen: "development",
};
const filterableContentTagSet = new Set(filterableContentTags);
const projectHeroFiles = {
  rnd: "022_direction:visualization.mp4",
  ndsp: "006_research:visualisation:design:development.mp4",
  angel333: "005_direction:visualisation:design.jpg",
  kyng: "010_visualisation:design:development.jpeg",
  "reckless-scholars": "004_visualization:development:design:.jpg.jpg",
  omanko: "001__visualization:development:production.mp4",
  solutions: "001_research:direction:visualization.jpg",
  km20: "001_visualisation:design:developmen.png",
};
let showcaseStates = new Map();
let openShowcaseTouchY = 0;
let showcaseReturnState = null;

function normalizeContentTag(tag) {
  const cleaned = String(tag || "").toLowerCase().replace(/[^a-z]/g, "");
  const normalized = contentTagAliases[cleaned] || cleaned;
  return filterableContentTagSet.has(normalized) ? normalized : "";
}

function getFilenameTags(filename) {
  const tags = String(filename || "")
    .replace(/\.[^.]+$/, "")
    .split(/[_:]/)
    .map(normalizeContentTag)
    .filter(Boolean);
  return [...new Set(tags)];
}

function renderVisualTagLinks(target, tags) {
  target.replaceChildren();
  tags.forEach((tag, index) => {
    if (index) target.append(document.createTextNode(" / "));
    const tagElement = document.createElement("span");
    tagElement.className = "visual-tag";
    tagElement.dataset.galleryTag = tag;
    tagElement.setAttribute("role", "button");
    tagElement.tabIndex = 0;
    tagElement.textContent = tag;
    tagElement.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openTagGallery(tag);
    });
    tagElement.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      openTagGallery(tag);
    });
    target.append(tagElement);
  });
}

function getProjectDisplayTitle(title, index) {
  return index === 0 && activeGalleryTag ? `${title} (${activeGalleryTag})` : title;
}

function updateProjectLabels() {
  document.querySelectorAll(".project-button").forEach((button) => {
    const index = Number(button.dataset.project);
    button.textContent = getProjectDisplayTitle(projects[index]?.[0] || "", index);
  });
  document.querySelectorAll(".client-slider-button").forEach((button) => {
    const index = Number(button.dataset.project);
    button.textContent = getProjectDisplayTitle(projects[index]?.[0] || "", index);
  });
}

function installMovingIndicator(container) {
  if (!container || container.querySelector(":scope > .nav-indicator")) return;
  const indicator = document.createElement("span");
  indicator.className = "nav-indicator";
  indicator.setAttribute("aria-hidden", "true");
  container.append(indicator);
  container.classList.add("has-moving-indicator");
}

function updateMovingIndicator(container, activeSelector) {
  if (!container) return;
  const indicator = container.querySelector(":scope > .nav-indicator");
  const activeItem = container.querySelector(activeSelector);
  if (!indicator || !activeItem) {
    container?.style.setProperty("--indicator-opacity", "0");
    return;
  }
  const containerRect = container.getBoundingClientRect();
  const itemRect = activeItem.getBoundingClientRect();
  if (!containerRect.width || !containerRect.height || !itemRect.width || !itemRect.height) return;
  container.style.setProperty("--indicator-y", `${(itemRect.top - containerRect.top + itemRect.height / 2).toFixed(2)}px`);
  container.style.setProperty("--indicator-opacity", "1");
}

function updateNavIndicators() {
  navIndicatorFrame = 0;
  updateMovingIndicator(tabsNav, ".tab.active");
  updateMovingIndicator(projectList, ".project-button.active");
  updateMovingIndicator(teamList, ".team-button.active");
}

function scheduleNavIndicators() {
  if (navIndicatorFrame) return;
  navIndicatorFrame = requestAnimationFrame(updateNavIndicators);
}

function scheduleNavIndicatorsAfterLayout() {
  scheduleNavIndicators();
  window.setTimeout(scheduleNavIndicators, 680);
}

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
  const showcaseOpen = Boolean(document.querySelector(".showcase-open"));
  const shouldShow = showcaseOpen || (mobileQuery.matches && workTab.classList.contains("active") && mobileWorkColumnsPassed && window.scrollY > 80);
  footerUp.textContent = showcaseOpen ? "Back" : "Up";
  document.body.classList.toggle("footer-up-visible", shouldShow);
}

function updateMobileWorkMenuPhase() {
  const menuPhase = mobileQuery.matches && workTab.classList.contains("active") && !document.querySelector(".showcase-open") && !detailsColumn.classList.contains("client-slider-visible");
  const projectPhase = mobileQuery.matches && workTab.classList.contains("active") && !document.querySelector(".showcase-open") && detailsColumn.classList.contains("client-slider-visible");
  document.body.classList.toggle("mobile-work-menu-phase", menuPhase);
  document.body.classList.toggle("mobile-work-project-phase", projectPhase);
}

function primeMobileWorkMenuPhase() {
  if (!mobileQuery.matches) return;
  document.documentElement.classList.remove("work-mobile-snap-active", "work-snap-active");
  clearTimeout(mobileWorkSnapTimer);
  clearTimeout(mobileWorkMenuSnapTimer);
  clearTimeout(mobileProgrammaticScrollTimer);
  document.documentElement.classList.remove("work-programmatic-scroll");
  detailsColumn.classList.remove("client-slider-visible");
  mobileWorkColumnsPassed = false;
  mobileDetailsSnapTop = 0;
  document.body.classList.add("mobile-work-menu-phase");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function snapMobileWorkToRnd() {
  // Kept as a compatibility stub: the old implementation used delayed
  // instant scrolls and caused the mobile Work state to jump.
}

function getMobileProjectTargetTop(index) {
  const group = projectGroups.find((item) => Number(item.dataset.project) === index);
  if (!group) return null;
  const groupTop = group.getBoundingClientRect().top + window.scrollY;
  if (index !== 0) return Math.max(0, Math.round(groupTop));
  const detailsTop = detailsColumn.getBoundingClientRect().top + window.scrollY - 8;
  return Math.max(0, Math.min(Math.round(groupTop), Math.round(detailsTop)));
}

function getMostVisibleMobileProjectIndex() {
  if (!projectGroups.length) return 0;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const best = projectGroups.reduce((current, group) => {
    const rect = group.getBoundingClientRect();
    const visible = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    return visible > current.visible ? { group, visible } : current;
  }, { group: projectGroups[0], visible: -1 });
  return Number(best.group.dataset.project || 0);
}

function snapMobileWorkToVisibleProject() {
  // Kept as a compatibility stub: project snapping is handled by native
  // scroll-snap plus the scroll-state synchronizer below.
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
  const visualIndex = clamp(clientSliderProxyTouch.index + (clientSliderProxyTouch.y - touch.clientY) / itemStep, 0, projects.length - 1);
  const nextIndex = clamp(Math.round(visualIndex), 0, projects.length - 1);
  mobileClientSlider.style.setProperty("--client-picker-index", visualIndex);
  if (nextIndex === clientPickerIndex) return;
  clientPickerIndex = nextIndex;
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
let showcaseSnapRelease = 0;
let showcaseSnapToken = 0;
let mobileWorkMenuSnapTimer = 0;
let mobileColumnsFrame = 0;
let wheelScrollFrame = 0;
let wheelScrollTarget = window.scrollY;
let suppressScrollSync = false;
let mobileWorkStepRelease = 0;
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

function updateViewportVars() {
  const viewport = window.visualViewport;
  const height = Math.ceil(viewport?.height || window.innerHeight || document.documentElement.clientHeight);
  const width = Math.ceil(viewport?.width || window.innerWidth || document.documentElement.clientWidth);
  document.documentElement.style.setProperty("--app-height", `${height}px`);
  document.documentElement.style.setProperty("--app-width", `${width}px`);
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
      script.src = "./pfp-points.js?v=26";
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

function createMobileProceduralLayout(random) {
  const heroWidth = randomBetween(random, 72, 88);
  const hero = createFormatBlock("widescreen", heroWidth, randomBetween(random, 0, 100 - heroWidth), 0);
  const squareWidth = randomBetween(random, 34, 48);
  const square = createFormatBlock("square", squareWidth, attachToEdge(hero, squareWidth, random), 20);
  const landscapeWidth = randomBetween(random, 54, 74);
  const landscape = createFormatBlock("landscape", landscapeWidth, randomBetween(random, 0, 100 - landscapeWidth), 37);
  const verticalWidth = randomBetween(random, 28, 40);
  const vertical = createFormatBlock("vertical", verticalWidth, attachToEdge(landscape, verticalWidth, random), 55);
  const miniWidth = randomBetween(random, 21, 30);
  const mini = createFormatBlock("portrait", miniWidth, randomBetween(random, 0, 100 - miniWidth), 69);
  const finalWidth = randomBetween(random, 56, 76);
  const finalBlock = createFormatBlock("widescreen", finalWidth, randomBetween(random, 0, 100 - finalWidth), 80);

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
  if (!parallaxCompositions.length) return;
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
    if (Math.abs(distance) < 0.25) {
      window.scrollTo(0, wheelScrollTarget);
      return;
    }
    window.scrollTo(0, window.scrollY + distance * 0.2);
    wheelScrollFrame = requestAnimationFrame(animate);
  };
  wheelScrollFrame = requestAnimationFrame(animate);
}

function animateWindowScrollTo(targetTop, duration = 640) {
  cancelWheelScroll();
  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  if (Math.abs(distance) < 1) {
    window.scrollTo({ top: targetTop, behavior: "instant" });
    return;
  }
  const startedAt = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const animate = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    window.scrollTo({ top: startTop + distance * ease(progress), behavior: "instant" });
    if (progress < 1) {
      wheelScrollFrame = requestAnimationFrame(animate);
      return;
    }
    wheelScrollFrame = 0;
    window.scrollTo({ top: targetTop, behavior: "instant" });
  };
  wheelScrollFrame = requestAnimationFrame(animate);
}

function updateWorkSnapState() {
  const active = workTab.classList.contains("active")
    && projectGroups.length
    && !document.querySelector(".showcase-open")
    && !expandedOverlay;
  const wantedClass = active ? (mobileQuery.matches ? "work-mobile-snap-active" : "work-snap-active") : "";
  const hasDesktop = document.documentElement.classList.contains("work-snap-active");
  const hasMobile = document.documentElement.classList.contains("work-mobile-snap-active");
  if ((wantedClass === "work-snap-active" && hasDesktop && !hasMobile)
    || (wantedClass === "work-mobile-snap-active" && hasMobile && !hasDesktop)
    || (!wantedClass && !hasDesktop && !hasMobile)) return;
  document.documentElement.classList.toggle("work-snap-active", wantedClass === "work-snap-active");
  document.documentElement.classList.toggle("work-mobile-snap-active", wantedClass === "work-mobile-snap-active");
}

function getNearestProjectIndex() {
  if (!projectGroups.length) return 0;
  const marker = window.scrollY + window.innerHeight * 0.5;
  const nearest = projectGroups.reduce((current, group) => {
    const currentDistance = Math.abs(current.offsetTop - marker);
    const groupDistance = Math.abs(group.offsetTop - marker);
    return groupDistance < currentDistance ? group : current;
  }, projectGroups[0]);
  return Number(nearest.dataset.project || 0);
}

function snapToShowcaseProject(direction) {
  const now = performance.now();
  if (now < showcaseSnapRelease) return true;
  const currentIndex = activeProject >= 0 ? activeProject : getNearestProjectIndex();
  const nextIndex = clamp(currentIndex + direction, 0, projectGroups.length - 1);
  const targetGroup = projectGroups.find((group) => Number(group.dataset.project) === nextIndex);
  if (!targetGroup) return false;
  if (nextIndex === currentIndex) return true;
  showcaseSnapRelease = now + 780;
  const snapToken = ++showcaseSnapToken;
  cancelWheelScroll();
  clearTimeout(mobileWorkMenuSnapTimer);
  suppressScrollSync = true;
  wheelScrollTarget = Math.round(targetGroup.getBoundingClientRect().top + window.scrollY);
  setActiveProject(nextIndex);
  scheduleWheelScroll();
  window.setTimeout(() => {
    if (snapToken !== showcaseSnapToken) return;
    window.scrollTo(0, wheelScrollTarget);
    suppressScrollSync = false;
    setActiveProject(nextIndex);
  }, 860);
  return true;
}

function updateProjectMeta(index) {
  const [title, year, design, url, images] = projects[index];
  const disableMobileLink = mobileQuery.matches && title === "R&D";
  metaYear.textContent = year;
  metaDesignLabel.textContent = "Categories";
  metaDesign.textContent = "CGI, AI";
  metaUrl.textContent = getProjectDisplayTitle(title, index);
  if (disableMobileLink) {
    metaUrl.removeAttribute("href");
  } else {
    metaUrl.href = url || "#";
  }
  metaUrl.classList.toggle("has-link", Boolean(url) && !disableMobileLink);
  metaUrl.classList.toggle("is-disabled-link", disableMobileLink);
}

mobileQuery.addEventListener("change", () => {
  closeExpandedVisual(false);
  updateMobileWorkMenuPhase();
  updateWorkSnapState();
  if (activeProject >= 0) updateProjectMeta(activeProject);
  updateFooterUpVisibility();
});

async function animateProjectDetails(index, token) {
  const animatedNodes = getChangedDetailsValueNodes(index);
  if (!animatedNodes.length) {
    updateProjectMeta(index);
    return;
  }
  const closed = await animateDetailsText(false, token, animatedNodes);
  if (!closed || token !== detailsTransitionToken) return;
  updateProjectMeta(index);
  detailsColumn.style.visibility = "visible";
  detailsColumn.style.height = "";
  const opened = await animateDetailsText(true, token, animatedNodes);
  if (!opened || token !== detailsTransitionToken) return;
  detailsColumn.style.height = "";
  detailsColumn.style.visibility = "visible";
}

function setActiveProject(index, { animate = true } = {}) {
  if (activeProject === index) {
    updateProjectLabels();
    updateProjectMeta(index);
    updateMobileWorkMenuPhase();
    scheduleNavIndicators();
    return;
  }
  activeProject = index;
  document.querySelectorAll(".project-button").forEach((button) => button.classList.toggle("active", Number(button.dataset.project) === index));
  document.querySelectorAll(".client-slider-button").forEach((button) => button.classList.toggle("active", Number(button.dataset.project) === index));
  document.querySelectorAll(".showcase-group").forEach((group) => {
    const projectIndex = Number(group.dataset.project);
    group.classList.toggle("showcase-active", projectIndex === index);
    group.style.setProperty("--mobile-slide-offset", projectIndex - index);
    group.style.setProperty("--work-slide-offset", projectIndex - index);
  });
  updateMobileWorkMenuPhase();
  scheduleNavIndicators();
  centerActiveClient(animate);
  detailsTransitionToken += 1;
  detailsColumn.style.height = "";
  detailsColumn.style.visibility = detailsColumn.hidden ? "" : "visible";
  getDetailsValueNodes().forEach((node) => {
    node.getAnimations().forEach((animation) => animation.cancel());
    node.style.opacity = "";
    node.style.filter = "";
    node.style.transform = "";
    node.style.willChange = "";
  });
  updateProjectMeta(index);
}

function scrollToProject(index) {
  showcaseSnapToken += 1;
  cancelWheelScroll();
  suppressScrollSync = true;
  setActiveProject(index);
  const mobileClosedShowcase = mobileQuery.matches && !document.querySelector(".showcase-open");
  if (mobileClosedShowcase) {
    detailsColumn.classList.add("client-slider-visible");
    mobileWorkColumnsPassed = true;
    updateMobileWorkMenuPhase();
    updateWorkSnapState();
  }
  const group = document.querySelector(`.project-group[data-project="${index}"]`);
  if (!group) {
    suppressScrollSync = false;
    return;
  }
  const targetTop = mobileClosedShowcase
    ? getMobileProjectTargetTop(index)
    : Math.round(group.getBoundingClientRect().top + window.scrollY);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
  requestAnimationFrame(() => {
    suppressScrollSync = false;
    if (mobileClosedShowcase) {
      updateMobileWorkMenuPhase();
      updateWorkSnapState();
      updateFooterUpVisibility();
    }
  });
}

function resetMobileWorkScroll() {
  if (!mobileQuery.matches || !workTab.classList.contains("active") || document.querySelector(".showcase-open")) return;
  const reset = () => {
    document.documentElement.classList.remove("work-programmatic-scroll");
    detailsColumn.classList.remove("client-slider-visible");
    mobileWorkColumnsPassed = false;
    mobileDetailsSnapTop = 0;
    updateMobileWorkMenuPhase();
    window.scrollTo({ top: 0, behavior: "instant" });
    updateWorkSnapState();
    updateFooterUpVisibility();
  };
  reset();
  requestAnimationFrame(reset);
  window.setTimeout(reset, 80);
  window.setTimeout(reset, 260);
}

function resetMobileWorkScrollAfterBrowserRestore() {
  if (!mobileQuery.matches || location.hash !== "#work") return;
  window.setTimeout(resetMobileWorkScroll, 0);
  window.setTimeout(resetMobileWorkScroll, 160);
  window.setTimeout(resetMobileWorkScroll, 520);
  window.setTimeout(resetMobileWorkScroll, 920);
}

function scrollToWorkMenuTop() {
  if (!mobileQuery.matches || !workTab.classList.contains("active")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  cancelWheelScroll();
  clearTimeout(mobileWorkMenuSnapTimer);
  clearTimeout(mobileProgrammaticScrollTimer);
  suppressScrollSync = true;
  document.documentElement.classList.add("work-programmatic-scroll");
  animateWindowScrollTo(0, 260);
  mobileProgrammaticScrollTimer = window.setTimeout(() => {
    detailsColumn.classList.remove("client-slider-visible");
    mobileWorkColumnsPassed = false;
    mobileDetailsSnapTop = 0;
    document.documentElement.classList.remove("work-programmatic-scroll");
    suppressScrollSync = false;
    updateFooterUpVisibility();
    updateWorkSnapState();
    updateMobileWorkMenuPhase();
    setActiveProject(0, { animate: false });
  }, 300);
}

function getMobileDetailsSnapTop() {
  if (!mobileQuery.matches) return Math.max(0, Math.round(detailsColumn.getBoundingClientRect().top + window.scrollY - 8));
  if (mobileDetailsSnapTop > 0) return mobileDetailsSnapTop;
  const wasVisible = detailsColumn.classList.contains("client-slider-visible");
  if (wasVisible) detailsColumn.classList.remove("client-slider-visible");
  mobileDetailsSnapTop = Math.max(0, Math.round(detailsColumn.getBoundingClientRect().top + window.scrollY - 8));
  if (wasVisible) detailsColumn.classList.add("client-slider-visible");
  return mobileDetailsSnapTop;
}

function syncMobileWorkProjectPhaseFromScroll() {
  if (!mobileQuery.matches || !workTab.classList.contains("active")) return;
  if (document.querySelector(".showcase-open")) return;
  const targetTop = getMobileDetailsSnapTop();
  const sliderVisible = window.scrollY >= targetTop - 4;
  if (detailsColumn.classList.contains("client-slider-visible") !== sliderVisible) {
    detailsColumn.classList.toggle("client-slider-visible", sliderVisible);
    mobileWorkColumnsPassed = sliderVisible;
    updateMobileWorkMenuPhase();
    updateFooterUpVisibility();
    if (sliderVisible) centerActiveClient(false);
  }
  if (!sliderVisible && activeProject !== 0) setActiveProject(0, { animate: false });
}

function scheduleMobileWorkMenuSnap() {
  if (!mobileQuery.matches || !workTab.classList.contains("active")) return;
  if (document.querySelector(".showcase-open")) return;
  if (suppressScrollSync) return;
  clearTimeout(mobileWorkMenuSnapTimer);
  mobileWorkMenuSnapTimer = window.setTimeout(() => {
    if (!mobileQuery.matches || !workTab.classList.contains("active")) return;
    if (document.querySelector(".showcase-open")) return;
    const targetTop = getMobileDetailsSnapTop();
    const threshold = Math.max(44, targetTop * 0.34);
    if (detailsColumn.classList.contains("client-slider-visible")) {
      if (window.scrollY >= targetTop - 24) return;
      scrollToWorkMenuTop();
      return;
    }
    if (window.scrollY <= threshold || window.scrollY >= targetTop - 1) return;
    suppressScrollSync = true;
    clearTimeout(mobileProgrammaticScrollTimer);
    document.documentElement.classList.add("work-programmatic-scroll");
    setActiveProject(0, { animate: false });
    updateMobileWorkMenuPhase();
    updateFooterUpVisibility();
    animateWindowScrollTo(targetTop, 300);
    mobileProgrammaticScrollTimer = window.setTimeout(() => {
      detailsColumn.classList.add("client-slider-visible");
      mobileWorkColumnsPassed = true;
      document.documentElement.classList.remove("work-programmatic-scroll");
      suppressScrollSync = false;
      centerActiveClient(false);
      updateMobileWorkMenuPhase();
      updateWorkSnapState();
      updateFooterUpVisibility();
    }, 340);
  }, 140);
}

function getContentItems(slug) {
  return (contentManifest[slug] || []).map((filename) => {
    const folder = mobileQuery.matches ? "mobile-content" : "content";
    return {
      filename,
      tags: getFilenameTags(filename),
      src: `assets/${folder}/${slug}/${filename}`,
    };
  });
}

function getAllContentItemsForTag(tag) {
  return projects.flatMap(([title, , , , slug], projectIndex) => (
    getContentItems(slug)
      .filter((item) => item.tags.includes(tag))
      .map((item) => ({ ...item, projectTitle: title, projectIndex }))
  ));
}

function isVideoSource(src) {
  return /\.(mp4|mov)$/i.test(src);
}

function getContentFormat(src, fallback) {
  return fallback;
}

function getMediaGridFormatFromRatio(width, height) {
  if (!(width > 0) || !(height > 0)) return "";
  return width / height > 1.08 ? "horizontal" : "vertical";
}

function normalizeMediaFormatKey(src) {
  return String(src || "").replace("assets/mobile-content/", "assets/content/");
}

function cacheMediaGridFormat(src, width, height) {
  const format = getMediaGridFormatFromRatio(width, height);
  if (!format) return "";
  mediaGridFormatCache.set(normalizeMediaFormatKey(src), format);
  return format;
}

function getShowcaseTileFormat(item) {
  return mediaGridFormatCache.get(normalizeMediaFormatKey(item?.src)) || "";
}

function detectShowcaseItemFormat(item, onReady) {
  if (!item?.src || getShowcaseTileFormat(item) || item.formatDetectionPending) return;
  item.formatDetectionPending = true;
  const finish = (width, height) => {
    item.formatDetectionPending = false;
    const detected = cacheMediaGridFormat(item.src, width, height);
    if (detected) onReady?.();
  };
  const fail = () => {
    item.formatDetectionPending = false;
    if (item.src.includes("assets/mobile-content/")) {
      detectShowcaseItemFormat({ ...item, src: item.src.replace("assets/mobile-content/", "assets/content/") }, onReady);
    }
  };
  if (isVideoSource(item.src)) {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    video.addEventListener("loadedmetadata", () => finish(video.videoWidth, video.videoHeight), { once: true });
    video.addEventListener("error", fail, { once: true });
    video.src = item.src;
    video.load();
    return;
  }
  const image = new Image();
  image.decoding = "async";
  image.addEventListener("load", () => finish(image.naturalWidth, image.naturalHeight), { once: true });
  image.addEventListener("error", fail, { once: true });
  image.src = item.src;
}

function getContentWidth(width, format, isVideo) {
  if (mobileQuery.matches) {
    const limits = isVideo
      ? { portrait: [34, 52], square: [50, 68], widescreen: [68, 92], landscape: [60, 84], vertical: [40, 58] }
      : { portrait: [28, 42], square: [42, 58], widescreen: [58, 84], landscape: [52, 76], vertical: [34, 52] };
    const [min, max] = limits[format] || [width, width];
    return clamp(width, min, max);
  }

  const limits = isVideo
    ? { portrait: [68, 78], square: [76, 78], widescreen: [68, 78], landscape: [60, 78] }
    : { portrait: [24, 52], square: [36, 68], widescreen: [58, 78], landscape: [52, 78] };
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
  if (galleryColumn.hidden || !workTab.classList.contains("active")) return;
  const margin = mobileQuery.matches ? 40 : 560;
  document.querySelectorAll(".visual-media:not([data-loaded-source])").forEach((media) => {
    const rect = media.getBoundingClientRect();
    if (rect.bottom >= -margin && rect.top <= window.innerHeight + margin) loadMediaElement(media);
  });
}

function scheduleNearbyMedia() {
  if (nearbyMediaFrame) return;
  nearbyMediaFrame = requestAnimationFrame(loadNearbyMedia);
}

function scheduleWorkMediaWarmup() {
  scheduleIdleTask(() => {
    if (!workTab.classList.contains("active") || galleryColumn.hidden) return;
    setGalleryPlayback(true);
    scheduleParallax();
    scheduleNearbyMedia();
  });
}

const lazyMediaObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    lazyMediaObserver.unobserve(target);
    loadMediaElement(target);
  });
}, { rootMargin: mobileQuery.matches ? "40px 0px" : "520px 0px" });

function rectsOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function getRectOverlap(a, b) {
  const width = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
  const height = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  return { width, height, area: width * height };
}

function rectsOverlapTooMuch(a, b) {
  const overlap = getRectOverlap(a, b);
  if (!overlap.area) return false;
  const minArea = Math.min(a.width * a.height, b.width * b.height);
  const minHeight = Math.min(a.height, b.height);
  const minWidth = Math.min(a.width, b.width);
  const tagBandA = { ...a, top: a.bottom - 24 };
  const tagBandB = { ...b, top: b.bottom - 24 };
  const tagBandOverlapA = getRectOverlap(tagBandA, b);
  const tagBandOverlapB = getRectOverlap(tagBandB, a);
  const tagBandCovered = tagBandOverlapA.width > Math.min(160, a.width * 0.42) || tagBandOverlapB.width > Math.min(160, b.width * 0.42);
  return (
    tagBandCovered ||
    overlap.area / minArea > 0.16 ||
    (overlap.height / minHeight > 0.34 && overlap.width / minWidth > 0.22)
  );
}

function resolveVisualTop(rect, placedRects) {
  const allowedVerticalOverlap = Math.min(92, rect.height * 0.2);
  const relatedRects = placedRects.filter((placed) => {
    const horizontalOverlap = Math.max(0, Math.min(rect.right, placed.right) - Math.max(rect.left, placed.left));
    const horizontalRatio = horizontalOverlap / Math.min(rect.width, placed.width);
    return horizontalRatio > 0.18;
  });
  const nearest = relatedRects.reduce((current, placed) => (
    !current || placed.bottom > current.bottom ? placed : current
  ), null);
  let top = nearest ? Math.min(rect.top, nearest.bottom - allowedVerticalOverlap) : rect.top;
  relatedRects.forEach((placed) => {
    top = Math.max(top, placed.bottom - allowedVerticalOverlap);
  });
  return top;
}

function placeVisualTags() {
  document.querySelectorAll(".visual-tags-shift-left, .visual-tags-shift-right").forEach((visual) => {
    visual.classList.remove("visual-tags-shift-left", "visual-tags-shift-right");
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
  if (width > 0 && height > 0) {
    media.dataset.mediaRatio = (width / height).toFixed(6);
    cacheMediaGridFormat(media.dataset.src || media.currentSrc || media.src, width, height);
  }
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
  const overlayTags = visual.querySelector(".visual-tags")?.cloneNode(true);
  if (overlayTags) overlay.append(overlayTags);
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

function getVisualTagFromPoint(visual, x, y) {
  if (!visual || !Number.isFinite(x) || !Number.isFinite(y)) return "";
  const tagNodes = [...visual.querySelectorAll(".visual-tag[data-gallery-tag]")];
  const directHit = tagNodes.find((tag) => {
    const rect = tag.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  });
  if (directHit) return directHit.dataset.galleryTag || "";
  const tagLabel = visual.querySelector(".visual-tags");
  const labelRect = tagLabel?.getBoundingClientRect();
  if (!labelRect || x < labelRect.left || x > labelRect.right || y < labelRect.top || y > labelRect.bottom) return "";
  return tagNodes[0]?.dataset.galleryTag || "";
}

function handleVisualClick(event) {
  const directTag = event.target.closest(".visual-tag[data-gallery-tag]");
  if (directTag) {
    event.preventDefault();
    event.stopPropagation();
    openTagGallery(directTag.dataset.galleryTag);
    return;
  }
  const visual = event.currentTarget.classList?.contains("visual")
    ? event.currentTarget
    : event.target.closest(".visual");
  const pointedTag = getVisualTagFromPoint(visual, event.clientX, event.clientY);
  if (pointedTag) {
    event.preventDefault();
    event.stopPropagation();
    openTagGallery(pointedTag);
    return;
  }
  if (!mobileQuery.matches) return;
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

async function openTagGallery(tag) {
  const normalizedTag = normalizeContentTag(tag);
  if (!normalizedTag) return;
  activeGalleryTag = "";
  updateProjectLabels();
  videoObserver.disconnect();
  lazyMediaObserver.disconnect();
  visibleVideos.clear();
  suppressScrollSync = true;
  gallery.replaceChildren();
  await renderGallery();
  requestAnimationFrame(() => {
    scrollToProject(0);
  });
}

function handleGalleryClick(event) {
  const tag = event.target.closest(".visual-tag[data-gallery-tag]");
  if (!tag) {
    handleVisualClick(event);
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  openTagGallery(tag.dataset.galleryTag);
}

function handleGalleryKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const tag = event.target.closest(".visual-tag[data-gallery-tag]");
  if (!tag) return;
  event.preventDefault();
  openTagGallery(tag.dataset.galleryTag);
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

function orderProjectMedia(slug, items) {
  const heroFile = projectHeroFiles[slug];
  if (!heroFile) return items;
  const heroIndex = items.findIndex((item) => item.filename === heroFile);
  if (heroIndex < 0) return items;
  const ordered = [...items];
  const [hero] = ordered.splice(heroIndex, 1);
  return [hero, ...ordered];
}

function getShowcaseTagText(item) {
  return (item?.tags || []).join(" / ");
}

function createShowcaseMedia(item, title) {
  const media = createMedia(item?.src, title);
  if (!media) return null;
  media.classList.add("showcase-media");
  return media;
}

function loadShowcaseMedia(root) {
  root.querySelectorAll(".showcase-media:not([data-loaded-source])").forEach(loadMediaElement);
}

function getShowcaseInfoOverlay() {
  if (showcaseInfoOverlay) return showcaseInfoOverlay;
  showcaseInfoOverlay = document.createElement("div");
  showcaseInfoOverlay.className = "showcase-info-stack showcase-info-overlay";
  showcaseInfoOverlay.setAttribute("aria-hidden", "true");
  showcaseInfoOverlay.innerHTML = `
    <section class="showcase-info-panel">
      <p class="label">Info</p>
      <p class="showcase-info-description">Lead Raura’s visual language, tone, and storytelling to ensure a cohesive and distinctive brand identity. Raura explores our relationship with the sun through a device that delivers personalized wellness insights. From conceptual development to producing and directing final visuals.</p>
    </section>
    <section class="showcase-info-panel showcase-credits-panel">
      <dl class="showcase-credits-list">
        <dt>Creative Direction:</dt>
        <dd>Maxim Brik, Alexey Molchanov</dd>
        <dt>Visual Production:</dt>
        <dd>Maxim Brik, Alexey Molchanov</dd>
      </dl>
    </section>
  `;
  document.body.append(showcaseInfoOverlay);
  return showcaseInfoOverlay;
}

function updateShowcaseInfoOverlay(state) {
  getShowcaseInfoOverlay();
}

function setShowcaseInfoOverlayOpen(open, state) {
  const overlay = getShowcaseInfoOverlay();
  const canOpen = Boolean(open && state && workTab.classList.contains("active") && document.querySelector(".showcase-open"));
  if (canOpen) updateShowcaseInfoOverlay(state);
  overlay.classList.toggle("is-open", canOpen);
  overlay.setAttribute("aria-hidden", String(!canOpen));
}

function stopShowcaseGridRotation(state) {
  if (!state?.gridTimer) return;
  window.clearInterval(state.gridTimer);
  state.gridTimer = 0;
}

function closeOpenShowcaseDrawer(restoreReturn = true) {
  const openGroup = document.querySelector(".showcase-open");
  if (!openGroup) return false;
  const openState = showcaseStates.get(Number(openGroup.dataset.project));
  const returnState = restoreReturn ? showcaseReturnState : null;
  stopShowcaseGridRotation(openState);
  openGroup.classList.remove("showcase-open");
  openGroup.querySelector(".showcase-drawer")?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("showcase-focus");
  setShowcaseInfoOverlayOpen(false, null);
  showcaseReturnState = null;
  if (returnState) {
    cancelWheelScroll();
    suppressScrollSync = true;
    detailsColumn.classList.toggle("client-slider-visible", returnState.sliderVisible);
    mobileWorkColumnsPassed = returnState.mobileColumnsPassed;
    window.scrollTo({ top: returnState.scrollY, behavior: "instant" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: returnState.scrollY, behavior: "instant" });
      suppressScrollSync = false;
      setActiveProject(returnState.projectIndex);
      updateMobileWorkMenuPhase();
      updateWorkSnapState();
      updateFooterUpVisibility();
    });
  }
  updateWorkSnapState();
  updateMobileWorkMenuPhase();
  updateFooterUpVisibility();
  return true;
}

function getShowcaseScrollBounds(group) {
  const min = Math.max(0, Math.round(group.getBoundingClientRect().top + window.scrollY));
  const max = Math.max(min, Math.round(min + group.scrollHeight - window.innerHeight));
  return { min, max };
}

function clampShowcaseScroll() {
  const openGroup = document.querySelector(".showcase-open");
  if (!openGroup) return false;
  const bounds = getShowcaseScrollBounds(openGroup);
  const clamped = Math.max(bounds.min, Math.min(bounds.max, window.scrollY));
  if (Math.abs(clamped - window.scrollY) < 0.5) return false;
  window.scrollTo({ top: clamped, behavior: "instant" });
  wheelScrollTarget = clamped;
  return true;
}

function beginOpenShowcaseTouch(event) {
  if (!mobileQuery.matches || !document.querySelector(".showcase-open")) return;
  openShowcaseTouchY = event.touches?.[0]?.clientY || 0;
}

function containOpenShowcaseTouch(event) {
  if (!mobileQuery.matches) return;
  const openGroup = document.querySelector(".showcase-open");
  if (!openGroup) return;
  const touchY = event.touches?.[0]?.clientY || openShowcaseTouchY;
  const deltaY = touchY - openShowcaseTouchY;
  openShowcaseTouchY = touchY;
  const bounds = getShowcaseScrollBounds(openGroup);
  const atTop = window.scrollY <= bounds.min + 1;
  const atBottom = window.scrollY >= bounds.max - 1;
  if ((atTop && deltaY > 0) || (atBottom && deltaY < 0)) {
    event.preventDefault();
    const target = atTop ? bounds.min : bounds.max;
    window.scrollTo({ top: target, behavior: "instant" });
    wheelScrollTarget = target;
  }
}

function setShowcaseItem(group, state, nextIndex, direction = 1) {
  if (!state.items.length || state.animating) return;
  const wrappedIndex = (nextIndex + state.items.length) % state.items.length;
  if (wrappedIndex === state.index && group.querySelector(".showcase-media")) return;
  const instant = !group.querySelector(".showcase-media");
  state.animating = true;
  state.index = wrappedIndex;
  group.style.setProperty("--showcase-direction", direction >= 0 ? "1" : "-1");
  if (!instant) group.classList.add("showcase-switching");
  window.setTimeout(() => {
    const item = state.items[state.index];
    const mediaSlot = group.querySelector(".showcase-media-slot");
    const media = createShowcaseMedia(item, state.title);
    mediaSlot.replaceChildren();
    if (media) mediaSlot.append(media);
    if (group.classList.contains("showcase-open")) updateShowcaseInfoOverlay(state);
    loadShowcaseMedia(group);
    requestAnimationFrame(() => {
      group.classList.remove("showcase-switching");
      window.setTimeout(() => {
        state.animating = false;
      }, instant ? 0 : 360);
    });
  }, instant ? 0 : 170);
}

function toggleShowcaseDrawer(group, state, forceOpen) {
  const open = typeof forceOpen === "boolean" ? forceOpen : !group.classList.contains("showcase-open");
  const projectIndex = Number(group.dataset.project || 0);
  if (open && !group.classList.contains("showcase-open")) {
    showcaseReturnState = {
      scrollY: window.scrollY,
      projectIndex,
      mobileColumnsPassed: mobileWorkColumnsPassed,
      sliderVisible: detailsColumn.classList.contains("client-slider-visible"),
    };
  }
  document.querySelectorAll(".showcase-open").forEach((openGroup) => {
    if (openGroup !== group) {
      const openState = showcaseStates.get(Number(openGroup.dataset.project));
      stopShowcaseGridRotation(openState);
      openGroup.classList.remove("showcase-open");
      openGroup.querySelector(".showcase-drawer")?.setAttribute("aria-hidden", "true");
    }
  });
  group.classList.toggle("showcase-open", open);
  document.body.classList.toggle("showcase-focus", open);
  updateWorkSnapState();
  setShowcaseInfoOverlayOpen(open, open ? state : null);
  updateMobileWorkMenuPhase();
  updateFooterUpVisibility();
  group.querySelector(".showcase-drawer")?.setAttribute("aria-hidden", String(!open));
  if (!open) {
    stopShowcaseGridRotation(state);
    document.body.classList.remove("showcase-focus");
    return;
  }
  setActiveProject(projectIndex);
  scrollToProject(projectIndex);
  requestAnimationFrame(clampShowcaseScroll);
  buildShowcaseGrid(group, state);
  stopShowcaseGridRotation(state);
  state.gridTimer = window.setInterval(() => buildShowcaseGrid(group, state), 5000);
  loadShowcaseMedia(group);
}

function buildShowcaseGrid(group, state) {
  const grid = group.querySelector(".showcase-grid");
  if (!grid) return;
  const layoutRandom = seededRandom(createGallerySeed());
  const ordered = shuffle([...state.items], layoutRandom).slice(0, Math.min(12, state.items.length));
  grid.replaceChildren();
  const createGridCell = (item, format) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = `showcase-grid-item showcase-grid-item-${format}`;
    const media = createShowcaseMedia(item, state.title);
    if (media) cell.append(media);
    cell.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleShowcaseDrawer(group, state, false);
      setShowcaseItem(group, state, state.items.indexOf(item), state.items.indexOf(item) > state.index ? 1 : -1);
    });
    return cell;
  };

  let refreshFrame = 0;
  const requestGridRefresh = () => {
    if (!group.classList.contains("showcase-open") || refreshFrame) return;
    refreshFrame = requestAnimationFrame(() => {
      refreshFrame = 0;
      if (group.classList.contains("showcase-open")) buildShowcaseGrid(group, state);
    });
  };
  ordered.forEach((item) => detectShowcaseItemFormat(item, requestGridRefresh));

  const takeByFormat = (format) => {
    const itemIndex = ordered.findIndex((item) => getShowcaseTileFormat(item) === format);
    if (itemIndex < 0) return null;
    const [item] = ordered.splice(itemIndex, 1);
    return item;
  };

  while (ordered.length) {
    const row = document.createElement("div");
    const horizontalCount = ordered.filter((item) => getShowcaseTileFormat(item) === "horizontal").length;
    const verticalCount = ordered.filter((item) => getShowcaseTileFormat(item) !== "horizontal").length;
    const makeHorizontal = horizontalCount > 0 && (verticalCount < 2 || layoutRandom() > 0.5);
    if (makeHorizontal) {
      row.className = "showcase-grid-row showcase-grid-row-horizontal";
      row.append(createGridCell(takeByFormat("horizontal"), "horizontal"));
    } else {
      row.className = "showcase-grid-row showcase-grid-row-vertical";
      for (let columnIndex = 0; columnIndex < 2 && ordered.length; columnIndex += 1) {
        const verticalItem = takeByFormat("vertical") || ordered.shift();
        row.append(createGridCell(verticalItem, "vertical"));
      }
    }
    grid.append(row);
  }
  loadShowcaseMedia(group);
}

function createShowcaseGroup(title, index, slug, items) {
  const orderedItems = orderProjectMedia(slug, items);
  if (!orderedItems.length) return null;
  const group = document.createElement("section");
  group.className = "project-group showcase-group";
  group.dataset.project = index;
  const state = {
    title,
    slug,
    items: orderedItems,
    index: 0,
    animating: false,
  };
  showcaseStates.set(index, state);

  group.innerHTML = `
    <div class="showcase-main" role="button" tabindex="0" aria-label="${title} content window">
      <span class="showcase-media-slot"></span>
    </div>
    <div class="showcase-drawer" aria-hidden="true">
      <div class="showcase-grid"></div>
    </div>
  `;

  const main = group.querySelector(".showcase-main");
  main.addEventListener("click", () => toggleShowcaseDrawer(group, state));
  main.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleShowcaseDrawer(group, state);
  });
  setShowcaseItem(group, state, 0, 1);
  return group;
}

async function renderGallery() {
  closeExpandedVisual(false);
  gallery.dataset.seed = gallerySeed;
  gallery.dataset.activeTag = activeGalleryTag;
  updateProjectLabels();
  showcaseStates = new Map();
  const galleryProjects = activeGalleryTag
    ? [[getProjectDisplayTitle(projects[0][0], 0), 0, getAllContentItemsForTag(activeGalleryTag)]]
    : projects.map(([title, , , , slug], index) => [title, index, getContentItems(slug)]);

  galleryProjects.forEach(([title, index, projectMedia]) => {
    if (!activeGalleryTag) {
      const showcaseGroup = createShowcaseGroup(title, index, projects[index]?.[4] || "", projectMedia);
      if (showcaseGroup) gallery.append(showcaseGroup);
      return;
    }
    const random = seededRandom(gallerySeed ^ Math.imul(index + 1, 0x9e3779b1));
    const media = shuffle(projectMedia, random);
    if (!media.length) return;
    const group = document.createElement("section");
    group.className = "project-group";
    group.dataset.project = index;
    const compositionCount = Math.max(1, Math.ceil(media.length / colorLayers.length));
    for (let compositionIndex = 0; compositionIndex < compositionCount; compositionIndex += 1) {
      const compositionElement = document.createElement("div");
      compositionElement.className = "project-composition";
      const compositionHeight = mobileQuery.matches ? randomBetween(random, 980, 1140) : randomBetween(random, 1760, 1980);
      compositionElement.style.setProperty("--composition-height", `${Math.round(compositionHeight)}px`);
      const compositionWidth = Math.max(1, galleryColumn.getBoundingClientRect().width || gallery.getBoundingClientRect().width || window.innerWidth);
      const placedVisualRects = [];
      let compositionMaxBottom = compositionHeight;
      const composition = mobileQuery.matches ? createMobileProceduralLayout(random) : createProceduralLayout(random);
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
        .sort((left, right) => Number(isVideoSource(right.src)) - Number(isVideoSource(left.src)))
        .forEach((src, mediaIndex) => {
          mediaByLayer[slotsByArea[mediaIndex].layerIndex] = src;
        });
      colors.forEach((color, layerIndex) => {
        const { format, x, y, w: width, ratio } = composition[layerIndex];
        const item = mediaByLayer[layerIndex];
        const src = item?.src;
        if (!src) return;
        const visualButton = document.createElement("button");
        const contentFormat = src ? getContentFormat(src, format) : format;
        const contentWidth = src ? getContentWidth(width, contentFormat, isVideoSource(src)) : width;
        const minContentX = mobileQuery.matches ? 0 : 22;
        const contentX = clamp(x + (width - contentWidth) / 2, minContentX, 100 - contentWidth);
        const visualRatio = src ? formatRatios[contentFormat] : ratio;
        const contentWidthPx = compositionWidth * contentWidth / 100;
        const tagReservePx = mobileQuery.matches ? 46 : 24;
        const visualHeightPx = contentWidthPx / visualRatio + tagReservePx;
        const layoutYPx = resolveVisualTop({
          left: compositionWidth * contentX / 100,
          top: compositionHeight * y / 100,
          right: compositionWidth * (contentX + contentWidth) / 100,
          bottom: compositionHeight * y / 100 + visualHeightPx,
          width: contentWidthPx,
          height: visualHeightPx,
        }, placedVisualRects);
        const verticalDensity = mobileQuery.matches ? 1.03 : 0.84;
        const contentYPx = layoutYPx * verticalDensity;
        placedVisualRects.push({
          left: compositionWidth * contentX / 100,
          top: contentYPx,
          right: compositionWidth * (contentX + contentWidth) / 100,
          bottom: contentYPx + visualHeightPx,
          width: contentWidthPx,
          height: visualHeightPx,
        });
        compositionMaxBottom = Math.max(compositionMaxBottom, contentYPx + visualHeightPx + 28);
        const mediaElement = createMedia(src, item.projectTitle || title);
        visualButton.type = "button";
        visualButton.className = `visual visual-${color}${mediaElement ? ` visual-${mediaElement.tagName.toLowerCase()}` : ""}`;
        visualButton.setAttribute("aria-label", `${item.projectTitle || title} project media`);
        visualButton.addEventListener("click", handleVisualClick);
        visualButton.dataset.format = contentFormat;
        const parallaxDirection = layerIndex % 2 === 0 ? 1 : -1;
        visualButton.dataset.parallax = (parallaxDirection * randomBetween(random, 0.055, 0.115)).toFixed(4);
        visualButton.style.setProperty("--x", `${contentX.toFixed(2)}%`);
        visualButton.style.setProperty("--y", `${contentYPx.toFixed(0)}px`);
        visualButton.style.setProperty("--w", `${contentWidth.toFixed(2)}%`);
        visualButton.style.setProperty("--ratio", visualRatio);
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
        const tags = item?.tags || [];
        if (tags.length) {
          const tagLabel = document.createElement("span");
          tagLabel.className = "visual-tags";
          tagLabel.dataset.tags = tags.join("|");
          const tagText = document.createElement("span");
          tagText.className = "visual-tags-text";
          renderVisualTagLinks(tagText, tags);
          tagLabel.append(tagText);
          visualButton.append(tagLabel);
        }
        compositionElement.append(visualButton);
      });
      compositionElement.style.setProperty("--composition-height", `${Math.ceil(compositionMaxBottom)}px`);
      group.append(compositionElement);
    }
    gallery.append(group);
  });
  projectGroups = [...gallery.querySelectorAll(".project-group")];
  updateWorkSnapState();
  parallaxCompositions = [...gallery.querySelectorAll(".project-composition")].map((composition) => ({
    composition,
    visuals: [...composition.querySelectorAll(".visual")],
  }));
  scheduleParallax();
  scheduleVisualTags();
  scheduleNearbyMedia();
  resetMobileWorkScroll();
}

projects.forEach(([title], index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "project-button";
  button.dataset.project = index;
  button.textContent = getProjectDisplayTitle(title, index);
  button.addEventListener("click", () => {
    closeOpenShowcaseDrawer(false);
    if (activeGalleryTag) recomposeGallery(index, { clearTag: true });
    else scrollToProject(index);
  });
  projectList.append(button);

  const clientButton = document.createElement("button");
  clientButton.type = "button";
  clientButton.className = "client-slider-button";
  clientButton.dataset.project = index;
  clientButton.style.setProperty("--project-index", index);
  clientButton.textContent = getProjectDisplayTitle(title, index);
  clientButton.addEventListener("click", () => {
    clientPickerIndex = index;
    mobileClientSlider.style.setProperty("--client-picker-index", clientPickerIndex);
    if (activeGalleryTag) recomposeGallery(index, { clearTag: true });
    else scrollToProject(index);
  });
  mobileClientSlider.append(clientButton);
});

mobileClientSlider.addEventListener("touchstart", beginClientSliderScroll, { passive: true });
mobileClientSlider.addEventListener("pointerdown", beginClientSliderScroll);
mobileClientSlider.addEventListener("scroll", handleClientSliderScroll, { passive: true });
detailsColumn.addEventListener("touchstart", beginClientSliderProxy, { passive: true });
detailsColumn.addEventListener("touchend", endClientSliderProxy, { passive: true });
detailsColumn.addEventListener("touchcancel", endClientSliderProxy, { passive: true });
window.addEventListener("touchstart", beginOpenShowcaseTouch, { passive: true });
window.addEventListener("touchmove", containOpenShowcaseTouch, { passive: false });
gallery.addEventListener("click", handleGalleryClick);
gallery.addEventListener("keydown", handleGalleryKeydown);
metaUrl.addEventListener("click", (event) => {
  if (metaUrl.classList.contains("is-disabled-link")) event.preventDefault();
});

const projectsVisibilityObserver = new IntersectionObserver(([entry]) => {
  if (mobileQuery.matches) return;
  if (suppressScrollSync) return;
  if (document.querySelector(".showcase-open")) return;
  const sliderVisible = mobileQuery.matches && entry.boundingClientRect.bottom <= 0;
  const enteredProjects = sliderVisible && !mobileWorkColumnsPassed;
  mobileWorkColumnsPassed = sliderVisible;
  detailsColumn.classList.toggle("client-slider-visible", sliderVisible);
  updateMobileWorkMenuPhase();
  updateWorkSnapState();
  updateFooterUpVisibility();
  if (enteredProjects) {
    setActiveProject(0, { animate: false });
  } else if (sliderVisible) {
    requestAnimationFrame(() => centerActiveClient(false));
  }
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
    scheduleNavIndicators();
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
    scheduleNavIndicators();
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

async function animateDetailsText(opening, token, detailsContent = getDetailsValueNodes()) {
  detailsColumn.style.visibility = "visible";
  detailsColumn.style.height = "";
  detailsContent.forEach((node) => {
    node.getAnimations().forEach((animation) => animation.cancel());
    node.style.willChange = "opacity, filter, transform";
  });
  const animations = detailsContent.map((node) => node.animate(
    opening
      ? [
        { opacity: 0, filter: "blur(12px)", transform: "translate3d(0, 4px, 0)" },
        { opacity: 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" },
      ]
      : [
        { opacity: 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" },
        { opacity: 0, filter: "blur(12px)", transform: "translate3d(0, -4px, 0)" },
      ],
    {
      duration: opening ? 220 : 150,
      easing: "cubic-bezier(.2, .8, .2, 1)",
      fill: "both",
    },
  ));
  await Promise.all(animations.map((animation) => animation.finished.catch(() => {})));
  if (token !== detailsTransitionToken) return false;
  animations.forEach((animation) => animation.cancel());
  detailsContent.forEach((node) => {
    node.style.opacity = opening ? "" : "0";
    node.style.filter = opening ? "" : "blur(12px)";
    node.style.transform = opening ? "" : "translate3d(0, -4px, 0)";
    node.style.willChange = "";
  });
  return true;
}

function getDetailsValueNodes() {
  return [metaUrl, metaDesign, metaYear];
}

function getChangedDetailsValueNodes(index) {
  const [title, year, design] = projects[index];
  return [
    [metaUrl, title],
    [metaDesign, "CGI, AI"],
    [metaYear, year],
  ].filter(([node, nextText]) => node.textContent !== String(nextText)).map(([node]) => node);
}

async function animateColumns(columns, opening, token) {
  const ordered = opening ? columns : [...columns].reverse();
  const animations = ordered.map(async (column, index) => {
    const keepFixedChildrenStable = opening && mobileQuery.matches && document.body.classList.contains("work-opening") && column === galleryColumn;
    await wait(index * 70);
    if (token !== transitionToken) return false;
    column.getAnimations().forEach((animation) => animation.cancel());
    column.style.visibility = "visible";
    column.style.clipPath = "";
    column.style.height = "";
    column.style.willChange = keepFixedChildrenStable ? "opacity" : "opacity, filter, transform";
    if (opening) column.hidden = false;
    await new Promise((resolve) => requestAnimationFrame(resolve));
    if (token !== transitionToken) return false;
    const from = keepFixedChildrenStable
      ? { opacity: 0 }
      : opening
      ? { opacity: 0, filter: "blur(18px)", transform: "translate3d(0, 8px, 0)" }
      : { opacity: getComputedStyle(column).opacity || 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" };
    const to = keepFixedChildrenStable
      ? { opacity: 1 }
      : opening
      ? { opacity: 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" }
      : { opacity: 0, filter: "blur(18px)", transform: "translate3d(0, -6px, 0)" };
    const animation = column.animate([from, to], {
      duration: opening ? 340 : 240,
      easing: "cubic-bezier(.16, 1, .3, 1)",
      fill: "both",
    });
    await animation.finished.catch(() => {});
    if (token !== transitionToken) return false;
    animation.cancel();
    if (opening) {
      column.style.opacity = "";
      if (!keepFixedChildrenStable) {
        column.style.filter = "";
        column.style.transform = "";
      }
    }
    else {
      column.style.opacity = "0";
      column.style.filter = "blur(18px)";
      column.style.transform = "translate3d(0, -6px, 0)";
      column.style.visibility = "hidden";
    }
    column.style.willChange = "";
    return true;
  });
  const results = await Promise.all(animations);
  if (results.some((result) => result === false)) return false;
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
  const openingWork = targetSection === "work" && mobileQuery.matches;
  const newColumns = [...document.querySelectorAll(`.${targetSection}-only`)];
  const animatedNewColumns = targetSection === "work" ? newColumns.filter((column) => column !== galleryColumn) : newColumns;
  const oldColumns = [...document.querySelectorAll(".work-only:not([hidden]), .about-only:not([hidden]), .team-only:not([hidden]), .message-only:not([hidden])")]
    .filter((column) => !newColumns.includes(column));

  oldColumns.forEach((column) => {
    column.getAnimations().forEach((animation) => animation.cancel());
    column.hidden = true;
    column.style.clipPath = "";
    column.style.filter = "";
    column.style.height = "";
    column.style.opacity = "";
    column.style.transform = "";
    column.style.visibility = "";
    column.style.willChange = "";
  });

  if (oldColumns.includes(galleryColumn) || targetSection !== "work") {
    setGalleryPlayback(false);
    galleryColumn.hidden = true;
    galleryColumn.style.clipPath = "";
    galleryColumn.style.filter = "";
    galleryColumn.style.height = "";
    galleryColumn.style.opacity = "";
    galleryColumn.style.transform = "";
    galleryColumn.style.visibility = "";
    galleryColumn.style.willChange = "";
  }

  document.body.classList.toggle("section-work", targetSection === "work");
  document.body.classList.toggle("work-opening", openingWork);
  if (targetSection !== "work") {
    document.body.classList.remove("mobile-work-menu-phase");
    document.body.classList.add("work-bg-disabled");
    closeOpenShowcaseDrawer(false);
    setGalleryPlayback(false);
    closeExpandedVisual(false);
  } else {
    document.body.classList.remove("work-bg-disabled");
    primeMobileWorkMenuPhase();
    galleryColumn.hidden = false;
    galleryColumn.style.clipPath = "";
    galleryColumn.style.filter = "";
    galleryColumn.style.height = "";
    galleryColumn.style.opacity = "";
    galleryColumn.style.transform = "";
    galleryColumn.style.visibility = "visible";
    galleryColumn.style.willChange = "";
  }
  if (targetSection === "message") syncMessageTextareaBeforeShow();

  animatedNewColumns.forEach((column) => {
    column.getAnimations().forEach((animation) => animation.cancel());
    column.hidden = false;
    column.style.clipPath = "";
    column.style.height = "";
    column.style.visibility = "visible";
    column.style.opacity = "0";
    column.style.filter = "blur(10px)";
    column.style.transform = "translate3d(0, 4px, 0)";
    column.style.willChange = "opacity, filter, transform";
    requestAnimationFrame(() => {
      if (token !== transitionToken || column.hidden) return;
      const animation = column.animate([
        { opacity: 0, filter: "blur(10px)", transform: "translate3d(0, 4px, 0)" },
        { opacity: 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" },
      ], {
        duration: 260,
        easing: "cubic-bezier(.16, 1, .3, 1)",
        fill: "both",
      });
      animation.finished.then(() => {
        if (token !== transitionToken || column.hidden) return;
        column.style.opacity = "";
        column.style.filter = "";
        column.style.transform = "";
        column.style.willChange = "";
        animation.cancel();
      }).catch(() => {});
    });
  });

  if (openingWork) window.setTimeout(() => {
    if (token === transitionToken) document.body.classList.remove("work-opening");
  }, 280);
  else document.body.classList.remove("work-opening");
  return true;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", async () => {
    const targetSection = tab.dataset.tab;
    if (tab.classList.contains("active")) return;
    suppressScrollSync = true;
    detailsTransitionToken += 1;
    detailsColumn.style.height = "";
    detailsColumn.style.visibility = detailsColumn.hidden ? "" : "visible";
    const token = ++transitionToken;
    updateFooterUpVisibility();
    if (!await switchSection(targetSection, token)) return;
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    if (location.hash !== `#${targetSection}`) history.pushState(null, "", `#${targetSection}`);
    updateWorkSnapState();
    scheduleNavIndicatorsAfterLayout();
    if (targetSection === "work") requestAnimationFrame(() => {
      resetMobileWorkScroll();
      scheduleMobileWorkColumns();
      scheduleNavIndicatorsAfterLayout();
      suppressScrollSync = false;
      updateWorkSnapState();
      updateMobileWorkMenuPhase();
      scheduleWorkMediaWarmup();
    });
    else if (targetSection === "team") requestAnimationFrame(() => {
      resetMobileWorkColumns();
      updateTeamMember(Number(document.querySelector(".team-button.active")?.dataset.team || 0));
      suppressScrollSync = false;
      updateWorkSnapState();
      updateMobileWorkMenuPhase();
      scheduleNavIndicators();
    });
    else requestAnimationFrame(() => {
      resetMobileWorkColumns();
      if (targetSection === "message") {
        messageTextarea.focus({ preventScroll: true });
        updateMessageCaret();
        updateBudgetIndicator();
      }
      suppressScrollSync = false;
      updateWorkSnapState();
      updateMobileWorkMenuPhase();
    });
  });
});

function getMessageTextareaBaseHeight() {
  if (!messageTextarea || !introColumn || !messageTextarea.offsetParent) return 190;
  const textRect = messageTextarea.getBoundingClientRect();
  const textColumn = messageTextarea.closest(".message-text-column");
  const columnStyles = textColumn ? getComputedStyle(textColumn) : null;
  const columnBottomPadding = columnStyles ? parseFloat(columnStyles.paddingBottom) || 0 : 0;
  const targetBottom = introColumn.getBoundingClientRect().bottom;
  return Math.max(72, targetBottom - textRect.top - columnBottomPadding);
}

function getMessageTextareaMaxHeight() {
  if (!messageTextarea || !messageTextarea.offsetParent) return Infinity;
  const textRect = messageTextarea.getBoundingClientRect();
  const textColumn = messageTextarea.closest(".message-text-column");
  const columnStyles = textColumn ? getComputedStyle(textColumn) : null;
  const columnBottomPadding = columnStyles ? parseFloat(columnStyles.paddingBottom) || 0 : 0;
  const rootStyles = getComputedStyle(document.documentElement);
  const footerGap = parseFloat(rootStyles.getPropertyValue("--gap")) || 5;
  const footerRect = siteFooter?.getBoundingClientRect();
  const targetBottom = footerRect ? footerRect.top - footerGap : window.innerHeight;
  return Math.max(72, targetBottom - textRect.top - columnBottomPadding);
}

function updateMessageCaret() {
  if (!messageTextarea) return;
  const textColumn = messageTextarea.closest(".message-text-column");
  if (!textColumn || textColumn.hidden) return;
  const columnRect = textColumn.getBoundingClientRect();
  const textareaRect = messageTextarea.getBoundingClientRect();
  textColumn.style.setProperty("--message-caret-top", `${Math.round(textareaRect.top - columnRect.top + 4)}px`);
  textColumn.style.setProperty("--message-caret-left", `${Math.round(textareaRect.left - columnRect.left)}px`);
  textColumn.classList.toggle("message-caret-visible", !messageTextareaInteracted && messageTextarea.value.length === 0);
}

function hideMessageIntroCaret() {
  messageTextareaInteracted = true;
  updateMessageCaret();
}

function rememberMessageTextareaValue() {
  if (!messageTextarea) return;
  lastValidMessageValue = messageTextarea.value;
  lastValidMessageSelectionStart = messageTextarea.selectionStart || 0;
  lastValidMessageSelectionEnd = messageTextarea.selectionEnd || lastValidMessageSelectionStart;
}

function restoreMessageTextareaValue() {
  if (!messageTextarea) return;
  messageTextarea.value = lastValidMessageValue;
  messageTextarea.setSelectionRange(lastValidMessageSelectionStart, lastValidMessageSelectionEnd);
}

function resizeMessageTextarea(focus = false) {
  if (!messageTextarea) return;
  const textColumn = messageTextarea.closest(".message-text-column");
  const baseHeight = getMessageTextareaBaseHeight();
  const maxHeight = Math.max(baseHeight, getMessageTextareaMaxHeight());
  messageTextarea.style.setProperty("--message-textarea-min-height", `${baseHeight}px`);
  messageTextarea.style.height = `${baseHeight}px`;
  const contentHeight = messageTextarea.scrollHeight;
  let nextHeight = Math.min(maxHeight, Math.max(baseHeight, contentHeight));
  messageTextarea.style.setProperty("--message-textarea-height", `${nextHeight}px`);
  messageTextarea.style.height = `${nextHeight}px`;
  messageTextarea.style.overflowY = "hidden";
  if (nextHeight <= baseHeight + 1 && textColumn && introColumn && messageTextarea.offsetParent) {
    for (let i = 0; i < 2; i += 1) {
      const targetBottom = introColumn.getBoundingClientRect().bottom;
      const columnBottom = textColumn.getBoundingClientRect().bottom;
      const bottomDelta = targetBottom - columnBottom;
      if (Math.abs(bottomDelta) <= 0.75) break;
      nextHeight = Math.min(maxHeight, Math.max(72, nextHeight + bottomDelta));
      messageTextarea.style.setProperty("--message-textarea-height", `${nextHeight}px`);
      messageTextarea.style.setProperty("--message-textarea-min-height", `${Math.min(baseHeight, nextHeight)}px`);
      messageTextarea.style.height = `${nextHeight}px`;
    }
  }
  updateMessageCaret();
  if (focus) {
    messageTextarea.focus({ preventScroll: true });
    const end = messageTextarea.value.length;
    messageTextarea.setSelectionRange(end, end);
  }
}

function handleMessageTextareaInput() {
  if (!messageTextarea) return;
  resizeMessageTextarea(false);
  const maxHeight = Math.max(getMessageTextareaBaseHeight(), getMessageTextareaMaxHeight());
  if (messageTextarea.scrollHeight > maxHeight + 0.75) {
    restoreMessageTextareaValue();
    resizeMessageTextarea(false);
    return;
  }
  rememberMessageTextareaValue();
  updateMessageCaret();
}

function syncMessageTextareaBeforeShow() {
  if (!messageTextarea) return;
  const textColumn = messageTextarea.closest(".message-text-column");
  if (!textColumn) return;
  const wasHidden = textColumn.hidden;
  if (wasHidden) {
    textColumn.hidden = false;
    textColumn.style.visibility = "hidden";
    textColumn.style.opacity = "0";
  }
  resizeMessageTextarea(false);
  if (wasHidden) {
    textColumn.hidden = true;
    textColumn.style.visibility = "";
    textColumn.style.opacity = "";
  }
}

function prepareMessageTextarea(focus = false) {
  requestAnimationFrame(() => {
    resizeMessageTextarea(focus);
    updateBudgetIndicator();
  });
}
messageTextarea.addEventListener("beforeinput", rememberMessageTextareaValue);
messageTextarea.addEventListener("input", handleMessageTextareaInput);
messageTextarea.addEventListener("pointerdown", hideMessageIntroCaret);
messageTextarea.addEventListener("focus", hideMessageIntroCaret);
window.addEventListener("resize", () => {
  if (!messageTextarea.closest(".message-only")?.hidden) prepareMessageTextarea(false);
});

function updateBudgetIndicator() {
  if (!budgetSwitch || budgetSwitch.closest(".message-only")?.hidden) return;
  const active = budgetSwitch.querySelector(".budget-option.active");
  if (!active) return;
  const switchRect = budgetSwitch.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();
  budgetSwitch.style.setProperty("--budget-indicator-y", `${activeRect.top - switchRect.top + activeRect.height / 2}px`);
}

async function recomposeGallery(currentProject = Math.max(activeProject, 0), { clearTag = false } = {}) {
  if (clearTag) activeGalleryTag = "";
  updateProjectLabels();
  gallerySeed = createGallerySeed();
  videoObserver.disconnect();
  lazyMediaObserver.disconnect();
  visibleVideos.clear();
  suppressScrollSync = true;
  gallery.replaceChildren();
  await renderGallery();
  requestAnimationFrame(() => {
    scheduleVisualTags();
    const hasProject = projectGroups.some((group) => Number(group.dataset.project) === currentProject);
    scrollToProject(hasProject ? currentProject : Number(projectGroups[0]?.dataset.project || 0));
  });
}

helpToggle.innerHTML = '<img src="./assets/web_recomp.svg?v=1" alt="RECOMP" />';
helpToggle.addEventListener("click", () => recomposeGallery());
document.querySelectorAll(".budget-option").forEach((button) => {
  button.addEventListener("click", () => {
    selectedBudget = button.dataset.budget || button.textContent.trim();
    document.querySelectorAll(".budget-option").forEach((option) => {
      const active = option === button;
      option.classList.toggle("active", active);
      option.setAttribute("aria-checked", String(active));
    });
    updateBudgetIndicator();
    resizeMessageTextarea(true);
  });
});
messageContinue.addEventListener("click", () => {
  const text = messageTextarea.value.trim();
  const body = [`Budget: ${selectedBudget}`, "", text || "Tell us about the project"].join("\n");
  const href = `mailto:brikmaximalexandrovich@gmail.com?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
});
async function copyMessageEmail(email) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(email);
      return true;
    } catch {}
  }
  const field = document.createElement("textarea");
  field.value = email;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  field.style.top = "0";
  document.body.appendChild(field);
  field.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {}
  field.remove();
  return copied;
}
messageCopy.addEventListener("click", async () => {
  const email = "brikmaximalexandrovich@gmail.com";
  const copied = await copyMessageEmail(email);
  messageCopy.textContent = copied ? "Copied" : email;
  window.setTimeout(() => {
    messageCopy.textContent = "Copy email";
  }, 1400);
});
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
  if (document.querySelector(".showcase-open") && closeOpenShowcaseDrawer()) return;
  scrollToWorkMenuTop();
});
const themeOrder = ["glass", "dark"];
const themeCookie = "maxim-brik-theme";
let themeIndex = Math.max(0, themeOrder.indexOf(getCookieValue(themeCookie)));
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

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
  else if (closeOpenShowcaseDrawer()) {}
  else recomposeGallery();
});

let siteInitialized = false;
function showSectionColumns(section) {
  document.querySelectorAll(".work-only, .about-only, .team-only, .message-only").forEach((column) => {
    const visible = column.classList.contains(`${section}-only`);
    column.hidden = !visible;
    column.style.clipPath = "";
    column.style.filter = "";
    column.style.height = "";
    column.style.opacity = "";
    column.style.transform = "";
    column.style.visibility = "";
    column.style.willChange = "";
  });
}

function showSectionFromHash(instant = false) {
  const initialSection = location.hash.slice(1) || "work";
  document.body.classList.toggle("section-work", initialSection === "work");
  const initialTab = document.querySelector(`[data-tab="${initialSection}"]`);
  if (instant) {
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === initialTab));
    showSectionColumns(initialSection);
    document.body.classList.remove("work-opening");
    document.body.classList.toggle("work-bg-disabled", initialSection !== "work");
    if (initialSection === "work" && mobileQuery.matches && !document.querySelector(".showcase-open")) requestAnimationFrame(resetMobileWorkScroll);
    if (!location.hash) history.replaceState(null, "", "#work");
    updateWorkSnapState();
    updateMobileWorkMenuPhase();
  } else if (initialTab && !initialTab.classList.contains("active")) initialTab.click();
  else {
    showSectionColumns(initialSection);
    document.body.classList.remove("work-opening");
    document.body.classList.toggle("work-bg-disabled", initialSection !== "work");
    if (initialSection === "work" && mobileQuery.matches && !document.querySelector(".showcase-open")) requestAnimationFrame(resetMobileWorkScroll);
    if (!location.hash) history.replaceState(null, "", "#work");
  }
}

function initializeSite() {
  if (siteInitialized) return;
  siteInitialized = true;
  updateViewportVars();
  [tabsNav, projectList, teamList].forEach(installMovingIndicator);
  renderGallery();
  setActiveProject(0, { animate: false });
  showSectionFromHash(true);
  scheduleNavIndicators();
  scheduleMobileWorkColumns();
  resetMobileWorkScroll();
  warmPfpViewer();
}

if (document.documentElement.classList.contains("is-authorized")) initializeSite();
else window.addEventListener("site-authorized", initializeSite, { once: true });
updateViewportVars();
window.addEventListener("hashchange", () => {
  if (siteInitialized) showSectionFromHash();
});
window.addEventListener("load", resetMobileWorkScrollAfterBrowserRestore);
window.addEventListener("pageshow", resetMobileWorkScrollAfterBrowserRestore);

window.addEventListener("scroll", () => {
  if (mobileQuery.matches && expandedOverlay) closeExpandedVisual(true);
  if (clampShowcaseScroll()) return;
  syncMobileWorkProjectPhaseFromScroll();
  updateMobileWorkMenuPhase();
  updateWorkSnapState();
  scheduleParallax();
  scheduleVisibleVideos();
  scheduleNearbyMedia();
  if (suppressScrollSync) return;
  if (!workTab.classList.contains("active")) return;
  if (!projectGroups.length) return;
  if (document.querySelector(".showcase-open")) return;
  if (mobileQuery.matches && !detailsColumn.classList.contains("client-slider-visible")) {
    if (activeProject !== 0) setActiveProject(0, { animate: false });
    scheduleMobileWorkMenuSnap();
    return;
  }
  if (mobileQuery.matches) {
    scheduleMobileWorkMenuSnap();
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      setActiveProject(getMostVisibleMobileProjectIndex(), { animate: false });
    });
    return;
  }
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    const active = projectGroups.reduce((current, group) => (
      Math.abs(group.getBoundingClientRect().top) < Math.abs(current.getBoundingClientRect().top) ? group : current
    ), projectGroups[0]);
    setActiveProject(Number(active.dataset.project));
  });
});

window.addEventListener("resize", scheduleVisualTags);
window.addEventListener("resize", updateViewportVars);
window.visualViewport?.addEventListener("resize", updateViewportVars);
window.addEventListener("resize", scheduleNearbyMedia);
window.addEventListener("resize", scheduleNavIndicators);
window.addEventListener("touchmove", () => {
  if (mobileQuery.matches && expandedOverlay) closeExpandedVisual(true);
}, { passive: true });

window.addEventListener("wheel", (event) => {
  if (mobileQuery.matches && expandedOverlay) closeExpandedVisual(true);
  const mobileOpenShowcaseGroup = mobileQuery.matches ? document.querySelector(".showcase-open") : null;
  if (mobileOpenShowcaseGroup) {
    const delta = normalizeWheelDelta(event);
    const bounds = getShowcaseScrollBounds(mobileOpenShowcaseGroup);
    const atTop = window.scrollY <= bounds.min + 1;
    const atBottom = window.scrollY >= bounds.max - 1;
    if ((atTop && delta < 0) || (atBottom && delta > 0)) {
      event.preventDefault();
      const target = atTop ? bounds.min : bounds.max;
      window.scrollTo({ top: target, behavior: "instant" });
      wheelScrollTarget = target;
    }
    return;
  }
  if (
    workTab.classList.contains("active") &&
    projectGroups.length &&
    gallery.querySelector(".showcase-group") &&
    !document.querySelector(".showcase-open")
  ) {
    return;
  }
  if (mobileQuery.matches) return;
  const delta = Math.max(-480, Math.min(480, normalizeWheelDelta(event)));
  event.preventDefault();
  const openShowcaseGroup = document.querySelector(".showcase-open");
  const bounds = openShowcaseGroup
    ? getShowcaseScrollBounds(openShowcaseGroup)
    : { min: 0, max: document.documentElement.scrollHeight - window.innerHeight };
  if (!wheelScrollFrame) wheelScrollTarget = window.scrollY;
  wheelScrollTarget = Math.max(bounds.min, Math.min(bounds.max, wheelScrollTarget + delta));
  parallaxImpulse = Math.max(-720, Math.min(720, parallaxImpulse + delta));
  scheduleWheelScroll();
  scheduleParallax();
}, { passive: false });

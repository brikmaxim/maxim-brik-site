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
  ["Sicko", "2026", "Maxim Brik", "https://sicko.jp/", "sicko"],
  ["Nasty Noah", "2026", "Maxim Brik", "", ""],
];

const projectDescriptions = {
  rnd: "Open research stream for experiments in CGI, AI motion, visual systems and speculative product language.",
  ndsp: "Digital identity and visual direction for New Day Same Pain, built around sharp product storytelling and web presentation.",
  angel333: "Visual development and art direction for ANGEL333 across digital assets, atmosphere and product-focused imagery.",
  kyng: "Art direction, CGI and product visualisation for KYNG with an emphasis on object character and campaign material.",
  "reckless-scholars": "Visual production and design research for Reckless Scholars, balancing raw cultural references with polished digital output.",
  omanko: "Jewelry and object studies for OMANKO, focused on metallic surfaces, lock systems and modular product storytelling.",
  sicko: "Visual direction and product-focused image system for Sicko, built around clean objects, bold material studies and digital presentation.",
  solutions: "Industrial and product design research for Nobody Solutions, from form studies to presentation-ready visual systems.",
  km20: "CGI product visualisation for KM20, translating retail identity into charms, objects and rendered campaign assets.",
  default: "Selected visual research, art direction and production work from Maxim Brik studio.",
};

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
const mobileProjectList = document.querySelector("#mobile-project-list");
const mobileClientSlider = document.querySelector("#mobile-client-slider");
const tabsNav = document.querySelector(".tabs");
const teamList = document.querySelector(".team-list");
const workSelectedPanel = document.querySelector(".work-selected-panel");
const workSelectedToggle = document.querySelector(".work-selected-toggle");
const workSelectedContent = document.querySelector("#work-selected-content");
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
const workProjectDescription = document.querySelector("#work-project-description");
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
let mobileRestoreResetTimers = [];
let navIndicatorFrame = 0;
let selectedBudget = "$1k-$5k";
let lastValidMessageValue = "";
let lastValidMessageSelectionStart = 0;
let lastValidMessageSelectionEnd = 0;
let messageTextareaInteracted = false;
const mediaGridFormatCache = new Map();

const filterableContentTags = ["research", "direction", "visualisation", "design", "development", "production"];
const contentTagAliases = {
  visualization: "visualisation",
  visualisation: "visualisation",
  developmen: "development",
};
const filterableContentTagSet = new Set(filterableContentTags);
const contentTagDisplayNames = {
  research: "Research",
  direction: "Direction",
  visualisation: "Visualisation",
  design: "Design",
  development: "Development",
  production: "Production",
};
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
let previewStaggerToken = 0;
let workSelectedAnimating = false;

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

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  })[character]);
}

function getProjectCategories(items) {
  const tags = [...new Set(items.flatMap((item) => item.tags || []))]
    .filter(Boolean)
    .slice(0, 4);
  return tags.map((tag) => contentTagDisplayNames[tag] || tag).join(", ") || "Art Direction";
}

function getProjectDisplayTitle(title, index) {
  return title;
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

async function animateWorkSelected(open) {
  if (!workSelectedPanel || !workSelectedToggle || !workSelectedContent || workSelectedAnimating) return;
  workSelectedAnimating = true;
  workSelectedPanel.dataset.open = String(open);
  workSelectedToggle.setAttribute("aria-expanded", String(open));
  workSelectedContent.getAnimations().forEach((animation) => animation.cancel());
  if (open) workSelectedContent.hidden = false;
  const startHeight = open ? 0 : workSelectedContent.scrollHeight;
  const endHeight = open ? workSelectedContent.scrollHeight : 0;
  workSelectedContent.style.maxHeight = `${startHeight}px`;
  workSelectedContent.style.opacity = open ? "0" : "1";
  workSelectedContent.style.filter = open ? "blur(12px)" : "blur(0)";
  workSelectedContent.style.transform = open ? "translate3d(0, -4px, 0)" : "translate3d(0, 0, 0)";
  await new Promise((resolve) => requestAnimationFrame(resolve));
  const animation = workSelectedContent.animate([
    {
      maxHeight: `${startHeight}px`,
      opacity: open ? 0 : 1,
      filter: open ? "blur(12px)" : "blur(0)",
      transform: open ? "translate3d(0, -4px, 0)" : "translate3d(0, 0, 0)",
    },
    {
      maxHeight: `${endHeight}px`,
      opacity: open ? 1 : 0,
      filter: open ? "blur(0)" : "blur(12px)",
      transform: open ? "translate3d(0, 0, 0)" : "translate3d(0, -4px, 0)",
    },
  ], {
    duration: 520,
    easing: "cubic-bezier(.16, 1, .3, 1)",
    fill: "both",
  });
  await animation.finished.catch(() => {});
  animation.cancel();
  if (!open) workSelectedContent.hidden = true;
  workSelectedContent.style.maxHeight = open ? "" : "0";
  workSelectedContent.style.opacity = open ? "" : "0";
  workSelectedContent.style.filter = open ? "" : "blur(12px)";
  workSelectedContent.style.transform = open ? "" : "translate3d(0, -4px, 0)";
  workSelectedAnimating = false;
}

function animateWorkPreviews() {
  if (!gallery || document.querySelector(".showcase-open")) return;
  const token = ++previewStaggerToken;
  const cards = [...gallery.querySelectorAll(".showcase-group .showcase-main")];
  cards.forEach((card) => {
    const group = card.closest(".showcase-group");
    group?.classList.add("preview-entering");
    card.getAnimations().forEach((animation) => animation.cancel());
  });
  requestAnimationFrame(() => {
    if (token !== previewStaggerToken) return;
    cards.forEach((card, index) => {
      const group = card.closest(".showcase-group");
      const animation = card.animate([
        { opacity: 0, filter: "blur(18px)", transform: "translate3d(0, 12px, 0)" },
        { opacity: 1, filter: "blur(0)", transform: "translate3d(0, 0, 0)" },
      ], {
        delay: Math.min(index, 12) * 42,
        duration: 620,
        easing: "cubic-bezier(.16, 1, .3, 1)",
        fill: "both",
      });
      animation.finished.then(() => {
        if (token !== previewStaggerToken) return;
        animation.cancel();
        group?.classList.remove("preview-entering");
        card.style.opacity = "";
        card.style.filter = "";
        card.style.transform = "";
      }).catch(() => {});
    });
  });
}

function primeWorkPreviews() {
  if (!gallery || document.querySelector(".showcase-open")) return;
  gallery.querySelectorAll(".showcase-group").forEach((group) => group.classList.add("preview-entering"));
}

function clearWorkPreviewPrime() {
  gallery?.querySelectorAll(".preview-entering").forEach((group) => group.classList.remove("preview-entering"));
}

workSelectedToggle?.addEventListener("click", () => {
  const open = workSelectedPanel?.dataset.open !== "true";
  animateWorkSelected(open);
});

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
  return false;
}

function updateFooterUpVisibility() {
  footerUp.textContent = "Up";
  document.body.classList.remove("footer-up-visible");
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

function getMostVisibleDesktopProjectIndex() {
  if (!projectGroups.length) return 0;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const best = projectGroups.reduce((current, group) => {
    const target = group.querySelector(".showcase-main") || group;
    const rect = target.getBoundingClientRect();
    const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    const visibleArea = visibleWidth * visibleHeight;
    const distanceFromFocus = Math.abs((rect.top + rect.bottom) / 2 - viewportHeight * 0.46);
    if (visibleArea > current.visibleArea) return { group, visibleArea, distanceFromFocus };
    if (visibleArea === current.visibleArea && distanceFromFocus < current.distanceFromFocus) return { group, visibleArea, distanceFromFocus };
    return current;
  }, { group: projectGroups[0], visibleArea: -1, distanceFromFocus: Infinity });
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
let mobileWorkMenuSnapTimer = 0;
let mobileColumnsFrame = 0;
let wheelScrollFrame = 0;
let wheelScrollTarget = window.scrollY;
let suppressScrollSync = false;
let mobileWorkStepRelease = 0;
let detailsTransitionToken = 0;
let gallerySeed = createGallerySeed();
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

function resetMobileWorkColumns() {
  [introColumn, projectsColumn, detailsColumn].forEach((column) => {
    column.style.opacity = "";
    column.style.filter = "";
    column.style.transform = "";
    column.style.pointerEvents = "";
  });
}

function updateMobileWorkColumns() {
  mobileColumnsFrame = 0;
  if (!mobileQuery.matches || !workTab.classList.contains("active") || document.querySelector(".showcase-open")) {
    resetMobileWorkColumns();
    return;
  }
  const fadeEnd = Math.max(180, window.innerHeight * 0.38);
  const progress = clamp(window.scrollY / fadeEnd, 0, 1);
  const columns = [introColumn, projectsColumn, detailsColumn];
  columns.forEach((column, index) => {
    const localProgress = clamp((progress - index * 0.08) / 0.82, 0, 1);
    const eased = 1 - Math.pow(1 - localProgress, 3);
    const opacity = 1 - eased;
    column.style.opacity = opacity.toFixed(3);
    column.style.filter = `blur(${(eased * 14).toFixed(2)}px)`;
    column.style.transform = `translate3d(0, ${(-eased * 10).toFixed(2)}px, 0)`;
    column.style.pointerEvents = opacity < 0.08 ? "none" : "";
  });
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
  document.documentElement.classList.remove("work-snap-active", "work-mobile-snap-active");
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
  if (workProjectDescription) {
    workProjectDescription.textContent = projectDescriptions[images] || projectDescriptions.default;
  }
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
  mobileRestoreResetTimers.forEach(clearTimeout);
  mobileRestoreResetTimers = [0, 160].map((delay) => window.setTimeout(resetMobileWorkScroll, delay));
}

function cancelMobileWorkRestoreReset() {
  mobileRestoreResetTimers.forEach(clearTimeout);
  mobileRestoreResetTimers = [];
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
  const detailsTop = detailsColumn.getBoundingClientRect().top;
  const sliderVisible = window.scrollY >= targetTop - 4 || detailsTop <= 10;
  if (detailsColumn.classList.contains("client-slider-visible") !== sliderVisible) {
    detailsColumn.classList.toggle("client-slider-visible", sliderVisible);
    mobileWorkColumnsPassed = sliderVisible;
    if (sliderVisible && window.scrollY < targetTop - 1) {
      window.scrollTo({ top: targetTop, behavior: "instant" });
    }
    updateMobileWorkMenuPhase();
    updateFooterUpVisibility();
    if (sliderVisible) centerActiveClient(false);
  }
  if (!sliderVisible && activeProject !== 0) setActiveProject(0, { animate: false });
}

function scheduleMobileWorkMenuSnap() {
  if (!mobileQuery.matches || !workTab.classList.contains("active")) return;
  if (document.querySelector(".showcase-open")) return;
  clearTimeout(mobileWorkMenuSnapTimer);
  mobileWorkMenuSnapTimer = window.setTimeout(() => {
    if (!mobileQuery.matches || !workTab.classList.contains("active")) return;
    if (document.querySelector(".showcase-open")) return;
    syncMobileWorkProjectPhaseFromScroll();
    if (detailsColumn.classList.contains("client-slider-visible")) {
      const visibleProject = getMostVisibleMobileProjectIndex();
      if (visibleProject !== activeProject) setActiveProject(visibleProject, { animate: false });
    }
  }, 220);
}

function syncMobileWorkSettledState() {
  if (!mobileQuery.matches || !workTab.classList.contains("active")) return;
  if (document.querySelector(".showcase-open")) return;
  syncMobileWorkProjectPhaseFromScroll();
  if (!detailsColumn.classList.contains("client-slider-visible")) return;
  const visibleProject = getMostVisibleMobileProjectIndex();
  if (visibleProject !== activeProject) setActiveProject(visibleProject, { animate: false });
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

function isVideoSource(src) {
  return /\.(mp4|mov)$/i.test(src);
}

function configureGifLikeVideo(video) {
  video.autoplay = true;
  video.defaultMuted = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.controls = false;
  video.disablePictureInPicture = true;
  video.disableRemotePlayback = true;
  video.tabIndex = -1;
  video.setAttribute("autoplay", "");
  video.setAttribute("muted", "");
  video.setAttribute("loop", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.setAttribute("controlslist", "nodownload nofullscreen noremoteplayback");
  video.setAttribute("disablepictureinpicture", "");
  video.setAttribute("disableremoteplayback", "");
  video.setAttribute("x-webkit-airplay", "deny");
  video.removeAttribute("controls");
  video.addEventListener("contextmenu", (event) => event.preventDefault());
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
    configureGifLikeVideo(video);
    video.preload = "metadata";
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
    configureGifLikeVideo(media);
    media.load();
    media.play().catch(() => {});
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

function closeExpandedVisual() {}

function storeMediaRatio(media) {
  const width = media.tagName === "VIDEO" ? media.videoWidth : media.naturalWidth;
  const height = media.tagName === "VIDEO" ? media.videoHeight : media.naturalHeight;
  if (width > 0 && height > 0) {
    media.dataset.mediaRatio = (width / height).toFixed(6);
    cacheMediaGridFormat(media.dataset.src || media.currentSrc || media.src, width, height);
  }
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
    configureGifLikeVideo(media);
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

function setShowcaseInfoOverlayOpen() {}

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
  setShowcaseInfoOverlayOpen(false, null);
  updateMobileWorkMenuPhase();
  updateFooterUpVisibility();
  group.querySelector(".showcase-drawer")?.setAttribute("aria-hidden", String(!open));
  if (!open) {
    stopShowcaseGridRotation(state);
    document.body.classList.remove("showcase-focus");
    return;
  }
  setActiveProject(projectIndex);
  requestAnimationFrame(() => {
    const targetTop = Math.max(0, group.getBoundingClientRect().top + window.scrollY - 8);
    animateWindowScrollTo(targetTop, 520);
  });
  buildShowcaseGrid(group, state);
  stopShowcaseGridRotation(state);
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
      event.preventDefault();
      event.stopPropagation();
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
  const project = projects[index] || [];
  const year = project[1] || "";
  const designed = project[2] || "";
  const url = project[3] || "";
  const categories = getProjectCategories(orderedItems);
  const state = {
    title,
    slug,
    items: orderedItems,
    year,
    designed,
    url,
    categories,
    index: 0,
    animating: false,
  };
  showcaseStates.set(index, state);

  group.innerHTML = `
    <button class="showcase-main" type="button" aria-label="Open ${escapeHtml(title)} project">
      <span class="showcase-media-slot"></span>
      <span class="showcase-card-title">${escapeHtml(title)}</span>
    </button>
    <div class="showcase-drawer" aria-hidden="true">
      <header class="showcase-project-header">
        <h2 class="showcase-project-title">${escapeHtml(title)}</h2>
        <button class="showcase-back" type="button">Back to Overview</button>
      </header>
      <aside class="showcase-project-info" aria-label="${escapeHtml(title)} information">
        <section class="showcase-info-panel">
          <p class="label">Information</p>
          <dl class="showcase-credits-list">
            <dt>Client:</dt>
            <dd>${url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(title)}</a>` : escapeHtml(title)}</dd>
            <dt>Categories:</dt>
            <dd>${escapeHtml(categories)}</dd>
            <dt>Year:</dt>
            <dd>${escapeHtml(year)}</dd>
          </dl>
        </section>
        <section class="showcase-info-panel">
          <p class="label">Description</p>
          <p class="showcase-info-description">Selected visual research, art direction and production work for ${escapeHtml(title)}.</p>
        </section>
        <section class="showcase-info-panel showcase-credits-panel">
          <p class="label">Credits</p>
          <dl class="showcase-credits-list">
            <dt>Designed:</dt>
            <dd>${escapeHtml(designed)}</dd>
          </dl>
        </section>
      </aside>
      <div class="showcase-grid"></div>
    </div>
  `;

  const main = group.querySelector(".showcase-main");
  main.addEventListener("pointerenter", () => {
    if (mobileQuery.matches || document.querySelector(".showcase-open")) return;
    setActiveProject(index, { animate: false });
  });
  main.addEventListener("focus", () => {
    if (mobileQuery.matches || document.querySelector(".showcase-open")) return;
    setActiveProject(index, { animate: false });
  });
  main.addEventListener("click", () => toggleShowcaseDrawer(group, state));
  main.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleShowcaseDrawer(group, state);
  });
  group.querySelector(".showcase-back")?.addEventListener("click", () => toggleShowcaseDrawer(group, state, false));
  setShowcaseItem(group, state, 0, 1);
  return group;
}

async function renderGallery() {
  closeExpandedVisual(false);
  gallery.replaceChildren();
  gallery.dataset.seed = String(gallerySeed);
  gallery.dataset.activeTag = "";
  updateProjectLabels();
  showcaseStates = new Map();

  projects.forEach(([title, , , , slug], index) => {
    const showcaseGroup = createShowcaseGroup(title, index, slug || "", getContentItems(slug));
    if (showcaseGroup) gallery.append(showcaseGroup);
  });

  projectGroups = [...gallery.querySelectorAll(".project-group")];
  updateWorkSnapState();
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
    scrollToProject(index);
  });
  projectList.append(button);

  const mobileProjectButton = document.createElement("button");
  mobileProjectButton.type = "button";
  mobileProjectButton.className = "project-button mobile-project-button";
  mobileProjectButton.dataset.project = index;
  mobileProjectButton.textContent = getProjectDisplayTitle(title, index);
  mobileProjectButton.addEventListener("click", () => {
    closeOpenShowcaseDrawer(false);
    animateWorkSelected(false);
    scrollToProject(index);
  });
  mobileProjectList?.append(mobileProjectButton);

  const clientButton = document.createElement("button");
  clientButton.type = "button";
  clientButton.className = "client-slider-button";
  clientButton.dataset.project = index;
  clientButton.style.setProperty("--project-index", index);
  clientButton.textContent = getProjectDisplayTitle(title, index);
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
detailsColumn.addEventListener("touchend", endClientSliderProxy, { passive: true });
detailsColumn.addEventListener("touchcancel", endClientSliderProxy, { passive: true });
window.addEventListener("touchstart", beginOpenShowcaseTouch, { passive: true });
window.addEventListener("touchmove", containOpenShowcaseTouch, { passive: false });
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
  const animatedOldColumns = oldColumns.filter((column) => column !== galleryColumn);

  if (animatedOldColumns.length) {
    const closed = await animateColumns(animatedOldColumns, false, token);
    if (!closed || token !== transitionToken) return false;
  }
  resetColumns(oldColumns, false);

  if (oldColumns.includes(galleryColumn) || targetSection !== "work") {
    setGalleryPlayback(false);
    resetColumns([galleryColumn], false);
  }

  document.body.classList.toggle("section-work", targetSection === "work");
  document.body.classList.toggle("work-opening", openingWork);
  if (targetSection !== "work") {
    document.body.classList.remove("mobile-work-menu-phase");
    document.body.classList.add("work-bg-disabled");
    clearWorkPreviewPrime();
    closeOpenShowcaseDrawer(false);
    setGalleryPlayback(false);
    closeExpandedVisual(false);
  } else {
    document.body.classList.remove("work-bg-disabled");
    primeMobileWorkMenuPhase();
    primeWorkPreviews();
    resetColumns([galleryColumn], true);
  }
  if (targetSection === "message") syncMessageTextareaBeforeShow();

  if (animatedNewColumns.length) {
    const opened = await animateColumns(animatedNewColumns, true, token);
    if (!opened || token !== transitionToken) return false;
  }

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
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    scheduleNavIndicators();
    updateFooterUpVisibility();
    await wait(180);
    if (token !== transitionToken) return;
    if (!await switchSection(targetSection, token)) return;
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
      animateWorkPreviews();
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

async function recomposeGallery(currentProject = Math.max(activeProject, 0)) {
  updateProjectLabels();
  gallerySeed = createGallerySeed();
  videoObserver.disconnect();
  lazyMediaObserver.disconnect();
  visibleVideos.clear();
  suppressScrollSync = true;
  gallery.replaceChildren();
  await renderGallery();
  requestAnimationFrame(() => {
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
  if (disclaimerModal.classList.contains("is-open")) setDisclaimerOpen(false);
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
    if (initialSection === "work") primeWorkPreviews();
    if (initialSection === "work") requestAnimationFrame(() => {
      if (mobileQuery.matches && !document.querySelector(".showcase-open")) resetMobileWorkScroll();
      animateWorkPreviews();
    });
    if (!location.hash) history.replaceState(null, "", "#work");
    updateWorkSnapState();
    updateMobileWorkMenuPhase();
  } else if (initialTab && !initialTab.classList.contains("active")) initialTab.click();
  else {
    showSectionColumns(initialSection);
    document.body.classList.remove("work-opening");
    document.body.classList.toggle("work-bg-disabled", initialSection !== "work");
    if (initialSection === "work") primeWorkPreviews();
    if (initialSection === "work") requestAnimationFrame(() => {
      if (mobileQuery.matches && !document.querySelector(".showcase-open")) resetMobileWorkScroll();
      animateWorkPreviews();
    });
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
window.addEventListener("touchstart", cancelMobileWorkRestoreReset, { passive: true });
window.addEventListener("wheel", cancelMobileWorkRestoreReset, { passive: true });
window.addEventListener("touchend", scheduleMobileWorkMenuSnap, { passive: true });
window.addEventListener("wheel", scheduleMobileWorkMenuSnap, { passive: true });
window.setInterval(syncMobileWorkSettledState, 160);

window.addEventListener("scroll", () => {
  if (mobileRestoreResetTimers.length && window.scrollY > 4) cancelMobileWorkRestoreReset();
  if (clampShowcaseScroll()) return;
  syncMobileWorkProjectPhaseFromScroll();
  updateMobileWorkMenuPhase();
  updateWorkSnapState();
  if (!mobileQuery.matches) {
    scheduleNearbyMedia();
  }
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
      const visibleProject = getMostVisibleMobileProjectIndex();
      if (visibleProject !== activeProject) setActiveProject(visibleProject, { animate: false });
    });
    return;
  }
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    const visibleProject = getMostVisibleDesktopProjectIndex();
    if (visibleProject !== activeProject) setActiveProject(visibleProject, { animate: false });
  });
});

window.addEventListener("resize", updateViewportVars);
window.visualViewport?.addEventListener("resize", updateViewportVars);
window.addEventListener("resize", scheduleNearbyMedia);
window.addEventListener("resize", scheduleNavIndicators);

window.addEventListener("wheel", (event) => {
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
  scheduleWheelScroll();
}, { passive: false });

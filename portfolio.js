const projects = [
  ["R&D", "2026", "Maxim Brik", "https://www.instagram.com/iammaximbrik/", "rnd"],
  ["Sicko", "2026", "Maxim Brik", "https://sicko.jp/", "sicko"],
  ["NDSP", "2026", "Maxim Brik", "https://newdaysamepain.com/", "ndsp"],
  ["ANGEL333", "2025", "Maxim Brik", "https://angel333.online/", "angel333"],
  ["KYNG", "2026", "Maxim Brik", "https://www.instagram.com/khemgendwrld/", "kyng"],
  ["Reckless Scholars", "2022", "Maxim Brik", "https://www.recklessscholars.com/", "reckless-scholars"],
  ["Solutions", "2022", "Maxim Brik", "https://www.nobody.solutions/", "solutions"],
  ["KM 20", "2021", "Maxim Brik", "https://www.km20.ru/", ""],
  ["Bogema Leningrad", "2020", "Maxim Brik", "https://bogema.market/collection/all", ""],
];

const contentManifest = {
  "angel333": ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg", "008.jpg"],
  "kyng": ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.mp4", "008.mp4", "009.jpg"],
  "ndsp": ["001.jpg", "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.mp4", "007.jpg", "008.jpg"],
  "reckless-scholars": ["001.png"],
  "rnd": [
    "001.jpg", "002.png", "003.jpg", "004.png", "005.jpg", "006.jpg", "007.jpg", "008.jpg", "009.jpg", "010.jpg",
    "011.mp4", "012.png", "013.png", "014.png", "015.mp4", "016.mp4", "017.mp4", "018.mp4", "019.mp4", "020.mp4",
    "021.mp4", "022.mp4", "023.mp4", "024.mp4", "025.mp4", "026.mp4", "027.mp4", "028.jpg", "029.jpg", "030.jpg",
    "031.jpg", "032.jpg", "033.jpg", "034.jpg", "035.png", "036.png", "037.png", "038.jpg", "039.png", "040.png",
  ],
  "sicko": ["001.png", "002.png", "003.png"],
  "solutions": ["001.jpg", "002.png", "003.png", "004.png", "005.png", "006.png", "007.png"],
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
      script.src = "./pfp-points.js?v=21";
      script.addEventListener("load", resolve, { once: true });
      document.body.append(script);
    });
  }
  pfpViewerPromise.then(() => {
    window.dispatchEvent(new CustomEvent("team-pfp-model-change", { detail: { model } }));
  });
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
  const isMobile = mobileQuery.matches;
  metaYear.textContent = year;
  metaDesignLabel.textContent = isMobile ? "Client" : "Design";
  metaDesign.textContent = isMobile ? title : design;
  metaUrl.textContent = title === "R&D" ? "@iammaximbrik" : (url ? new URL(url).hostname.replace(/^www\./, "") : "—");
  metaUrl.href = url || "#";
}

mobileQuery.addEventListener("change", () => {
  if (activeProject >= 0) updateProjectMeta(activeProject);
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
  if (mobileQuery.matches) {
    const activeClient = mobileClientSlider.querySelector(`[data-project="${index}"]`);
    if (activeClient) {
      const targetLeft = activeClient.offsetLeft - (mobileClientSlider.clientWidth - activeClient.offsetWidth) / 2;
      mobileClientSlider.scrollTo({ left: Math.max(0, targetLeft), behavior: animate ? "smooth" : "auto" });
    }
  }
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
  const margin = mobileQuery.matches ? 600 : 1000;
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
}, { rootMargin: mobileQuery.matches ? "180px 0px" : "900px 0px" });

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

function createMedia(src, title) {
  if (!src) return null;
  const isVideo = isVideoSource(src);
  const media = document.createElement(isVideo ? "video" : "img");
  const reveal = () => media.classList.add("is-loaded");
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
    media.preload = "metadata";
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
      compositionElement.style.setProperty("--composition-height", `${Math.round(randomBetween(random, 1760, 1980))}px`);
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
        const link = document.createElement("a");
        const { format, x, y, w: width, ratio } = composition[layerIndex];
        const src = mediaByLayer[layerIndex];
        const contentFormat = src ? getContentFormat(src, format) : format;
        const contentWidth = src ? getContentWidth(width, contentFormat, isVideoSource(src)) : width;
        const contentX = clamp(x + (width - contentWidth) / 2, 0, 100 - contentWidth);
        const visualHeight = contentWidth / (src ? formatRatios[contentFormat] : ratio);
        const contentY = clamp(y, 0, Math.max(0, 100 - visualHeight - 2));
        const mediaElement = createMedia(src, title);
        link.href = url || "#";
        link.className = `visual visual-${color}${mediaElement ? ` visual-${mediaElement.tagName.toLowerCase()}` : ""}`;
        link.setAttribute("aria-label", `${title} project`);
        link.dataset.format = contentFormat;
        const parallaxDirection = layerIndex % 2 === 0 ? 1 : -1;
        link.dataset.parallax = (parallaxDirection * randomBetween(random, 0.055, 0.115)).toFixed(4);
        link.style.setProperty("--x", `${contentX.toFixed(2)}%`);
        link.style.setProperty("--y", `${contentY.toFixed(2)}%`);
        link.style.setProperty("--w", `${contentWidth.toFixed(2)}%`);
        link.style.setProperty("--ratio", src ? formatRatios[contentFormat] : ratio);
        link.style.setProperty("--z", depths[layerIndex]);
        link.style.setProperty("--delay", `${Math.round(randomBetween(random, 0, 420))}ms`);
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
        link.append(visualBox);
        const tagLabel = document.createElement("span");
        tagLabel.className = "visual-tags";
        tagLabel.dataset.tags = [title.toLowerCase(), contentFormat, isVideoSource(src) ? "motion" : "image"].join("|");
        const tagText = document.createElement("span");
        tagText.className = "visual-tags-text";
        tagText.textContent = tagLabel.dataset.tags.split("|").join("/ ");
        tagLabel.append(tagText);
        link.append(tagLabel);
        compositionElement.append(link);
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
  clientButton.textContent = title;
  clientButton.addEventListener("click", () => scrollToProject(index));
  mobileClientSlider.append(clientButton);
});

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
    const isGallery = column.classList.contains("gallery-column");
    const currentHeight = column.getBoundingClientRect().height;
    const currentClip = isGallery && getComputedStyle(column).clipPath !== "none"
      ? getComputedStyle(column).clipPath
      : "inset(0 round 3px)";
    column.getAnimations().forEach((animation) => animation.cancel());
    if (isGallery) {
      column.style.clipPath = currentClip;
      column.style.visibility = "visible";
      const animation = column.animate(
        opening
          ? [{ clipPath: currentClip }, { clipPath: "inset(0 round 3px)" }]
          : [{ clipPath: currentClip }, { clipPath: "inset(0 0 100% round 3px)" }],
        { duration: 210, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "both" },
      );
      await animation.finished.catch(() => {});
      if (token !== transitionToken) return false;
      animation.cancel();
      column.style.clipPath = opening ? "inset(0 round 3px)" : "inset(0 0 100% round 3px)";
      if (!opening) column.style.visibility = "hidden";
      continue;
    }
    const totalHeight = column.scrollHeight;
    const revealed = getRevealHeights(column);
    const heights = opening
      ? revealed.filter((height) => height > currentHeight + 1)
      : [...revealed].reverse().filter((height) => height < currentHeight - 1).concat(0);
    column.style.visibility = "visible";
    column.style.height = `${currentHeight}px`;
    for (const height of heights) {
      await wait(43);
      if (token !== transitionToken) return false;
      column.style.height = `${height}px`;
    }
    if (opening) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      if (token !== transitionToken) return false;
      column.style.height = `${totalHeight}px`;
      await new Promise((resolve) => requestAnimationFrame(resolve));
      if (token !== transitionToken) return false;
      column.style.height = "";
    }
    else {
      column.style.height = "0px";
      column.style.visibility = "hidden";
    }
  }
  return true;
}

function resetColumns(columns, visible) {
  columns.forEach((column) => {
    column.getAnimations().forEach((animation) => animation.cancel());
    column.hidden = !visible;
    column.style.clipPath = "";
    column.style.height = "";
    column.style.visibility = visible ? "visible" : "";
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
    column.style.height = "";
    column.style.visibility = "";
  });
  newColumns.forEach((column) => {
    const wasHidden = column.hidden;
    column.hidden = false;
    if (!wasHidden) return;
    column.style.visibility = "hidden";
    if (column.classList.contains("gallery-column")) column.style.clipPath = "inset(0 0 100% round 3px)";
    else column.style.height = "0px";
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

helpToggle.innerHTML = "Press esc for recomp <b>↻</b>";
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
const themeOrder = ["dark", "light", "glass"];
let themeIndex = 0;
themeToggle.addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themeOrder.length;
  const theme = themeOrder[themeIndex];
  document.body.classList.toggle("light-theme", theme === "light");
  document.body.classList.toggle("glass-theme", theme === "glass");
  themeToggle.setAttribute("aria-pressed", String(theme !== "dark"));
  themeToggle.setAttribute("aria-label", `Switch color theme, current: ${theme}`);
});
window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (disclaimerModal.classList.contains("is-open")) setDisclaimerOpen(false);
  else recomposeGallery();
});

let siteInitialized = false;
function initializeSite() {
  if (siteInitialized) return;
  siteInitialized = true;
  const initialSection = location.hash.slice(1);
  if (initialSection && initialSection !== "work") document.querySelector(`[data-tab="${initialSection}"]`)?.click();
  renderGallery();
  setActiveProject(0, { animate: false });
  scheduleMobileWorkColumns();
}

if (document.documentElement.classList.contains("is-authorized")) initializeSite();
else window.addEventListener("site-authorized", initializeSite, { once: true });

window.addEventListener("scroll", () => {
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

window.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = Math.max(-480, Math.min(480, normalizeWheelDelta(event)));
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (!wheelScrollFrame) wheelScrollTarget = window.scrollY;
  wheelScrollTarget = Math.max(0, Math.min(maxScroll, wheelScrollTarget + delta));
  parallaxImpulse = Math.max(-720, Math.min(720, parallaxImpulse + delta));
  scheduleWheelScroll();
  scheduleParallax();
}, { passive: false });

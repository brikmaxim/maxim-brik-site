# Architecture

## Overview

This repository contains a static portfolio website built with plain HTML, CSS,
and JavaScript. It has no build step or framework and can be served directly by
any static host, including Vercel and GitHub Pages.

The site has three primary sections:

- `Work`: project navigation, metadata, and a procedural media gallery.
- `About`: studio information, services, and contact links.
- `Team`: team navigation, descriptions, and interactive point-cloud portraits.

The default page is `About`. Navigation state is stored in the URL hash.

## Entry Points

### `index.html`

Defines the complete semantic page structure:

- password gate;
- first-column identity and section navigation;
- Work columns and gallery root;
- About columns;
- Team columns and PFP canvas;
- fixed footer;
- Privacy Policy modal.

It also contains a small inline authorization check so the password overlay does
not flash after access has already been granted.

CSS and JavaScript URLs include manual version query parameters. Increment them
after changes when mobile browsers may otherwise reuse cached files.

### `style.css`

Owns:

- dark and translucent theme tokens;
- desktop six-column grid;
- mobile stacked layout at `max-width: 700px`;
- sticky Work metadata;
- mobile client picker;
- gallery visuals, tags, hover states, and fullscreen media;
- footer and Privacy Policy presentation;
- Team PFP sizing.

The page uses CSS custom properties for colors, gallery geometry, scaling,
parallax, and animation state.

### `portfolio.js`

Owns most application behavior:

- project and team data;
- section switching and URL hashes;
- theme switching and cookie persistence;
- project metadata updates;
- procedural gallery generation;
- media loading and mobile fallbacks;
- scroll synchronization between the gallery and project navigation;
- mobile client picker;
- parallax and wheel momentum;
- mobile fullscreen media;
- footer, Privacy Policy, and keyboard controls;
- lazy loading of the Team point-cloud viewer.

### `auth.js`

Controls password access and persistence. Authorization is remembered with a
functional cookie and local storage.

### `pfp-points.js`

Renders the Team point-cloud portraits into `#team-pfp-canvas`. Model data is
loaded from binary files in `assets/team/`.

## Data Model

Project metadata is declared near the beginning of `portfolio.js`:

```js
["Project title", "Year", "Designed credit", "External URL", "content-folder"]
```

The folder slug maps to:

```text
assets/content/<content-folder>/
assets/mobile-content/<content-folder>/
```

Desktop media is loaded from `assets/content`. Mobile media is loaded from
`assets/mobile-content` when available and falls back to the desktop source.

Team members are also declared in `portfolio.js`:

```js
["Name", "Role", "Description", "model-id"]
```

The `model-id` selects the corresponding point-cloud asset.

## Gallery System

`renderGallery()` builds one `.project-group` per client. Each group contains one
or more `.project-composition` elements depending on the number of media files.

`createProceduralLayout()` generates six slots with different formats and sizes:

- widescreen;
- square;
- landscape;
- vertical;
- small portrait;
- final widescreen.

The gallery seed is generated at runtime, so reloading or using the Recomp control
produces a new arrangement. The same seed is used throughout one render to keep
the result deterministic during that session.

Important gallery responsibilities:

- `getContentFormat()` and `getContentWidth()` constrain media proportions;
- smaller visuals receive higher stacking priority where appropriate;
- tags are shortened and repositioned when another visual overlaps them;
- media is loaded lazily according to viewport distance;
- parallax uses per-visual randomized speed and direction;
- the project list is updated when scrolling reaches a new project group.

On mobile, compositions overlap to keep a continuous visual rhythm. A larger
margin is reserved between different `.project-group` client sections.

## Responsive Behavior

The primary breakpoint is:

```css
@media (max-width: 700px)
```

Desktop behavior:

- the interface uses a six-column grid;
- navigation and metadata stay sticky;
- the gallery occupies columns two through six;
- hover enlarges gallery containers;
- project metadata updates without animation during gallery scrolling.

Mobile behavior:

- columns stack vertically;
- the third Work column becomes sticky;
- after the project list leaves the viewport, the client picker appears;
- tapping media opens it in a fullscreen overlay;
- scrolling closes fullscreen media;
- the `Up` footer control appears only after the first Work columns leave view;
- R&D is intentionally not linked in the mobile metadata row.

## Themes

The site currently uses two theme states:

- dark;
- translucent/glass, which is the default.

Theme values are implemented with CSS custom properties on the body classes.
The logo button switches themes, and the choice is remembered with a functional
cookie.

When adding theme-dependent visuals, prefer a variable in the theme token block
instead of adding separate hard-coded selectors.

## Team Viewer

The Team viewer is loaded lazily to protect initial page performance:

1. `portfolio.js` schedules `pfp-points.js`.
2. The viewer receives a `team-pfp-model-change` event.
3. The selected binary point cloud is drawn into the canvas.
4. Pointer movement controls limited horizontal and vertical rotation.

The canvas background is transparent. Point color is controlled by
`--pfp-color` in `style.css`.

## State and Persistence

The site uses:

- URL hashes for `work`, `about`, and `team`;
- cookies/local storage for password access;
- cookies for the selected theme;
- an in-memory random seed for gallery recomposition.

No analytics, advertising cookies, backend database, or server-side application
logic is present.

## Updating Content

To add or change a project:

1. Add or edit its record in the `projects` array in `portfolio.js`.
2. Place original media in `assets/content/<slug>/`.
3. Place optimized mobile copies in `assets/mobile-content/<slug>/`.
4. Add custom tag mappings in `contentTags` when default tags are insufficient.
5. Increment the `portfolio.js?v=` value in `index.html`.

To change styling:

1. Edit `style.css`.
2. Check both desktop and mobile breakpoints.
3. Increment `style.css?v=` in `index.html`.

To update a Team portrait:

1. Replace or add the binary point data in `assets/team/`.
2. Update the team member model ID in `portfolio.js`.
3. Adjust model orientation or scale in `pfp-points.js` if required.

## Local Development

Run the static server from the repository root:

```bash
python3 -m http.server 4174 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4174/
```

No dependency installation or compilation is required.

## Deployment

The repository can be deployed as a static site. The deployment root must be the
repository root so `index.html`, scripts, styles, and `assets/` retain their
relative paths.

Before deployment:

1. Confirm the working tree is clean.
2. Test Work, About, and Team on desktop and mobile.
3. Verify password access in a private browser window.
4. Confirm mobile media fallbacks load.
5. Commit and push the latest changes.

# Maxim Brik Portfolio

Static portfolio website prepared for GitHub and Vercel.

## Local Preview

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Publish to GitHub

Create an empty repository on GitHub, then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git branch -M main
git push -u origin main
```

Use GitHub Desktop or the terminal. The repository contains a media file larger than the browser upload limit.

## Deploy to Vercel

1. Open `https://vercel.com/new`.
2. Import the GitHub repository.
3. Set `Framework Preset` to `Other`.
4. Leave `Build Command` empty.
5. Keep the output directory as `.`.
6. Deploy.

The project is plain HTML, CSS and client-side JavaScript. No build step is required.

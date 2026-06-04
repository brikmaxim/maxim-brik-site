# Maxim Brik Portfolio

Static portfolio website prepared for GitHub and Vercel.

## Local Preview

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Publish to GitHub

The repository is ready for GitHub and contains no files above the GitHub web-upload limit.

To publish the latest changes:

```bash
git add .
git commit -m "Update portfolio site"
git push origin main
```

You can also upload the files through the GitHub website.

## Deploy to Vercel

1. Open `https://vercel.com/new`.
2. Import the GitHub repository.
3. Set `Framework Preset` to `Other`.
4. Leave `Build Command` empty.
5. Keep the output directory as `.`.
6. Deploy.

The project is plain HTML, CSS and client-side JavaScript. No build step is required.

The site serves optimized mobile media from `assets/mobile-content` and original desktop media from `assets/content`.

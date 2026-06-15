# Astro Academic Homepage Template

This is a compact Astro template for a personal academic homepage inspired by the Academic Pages layout: sticky top navigation, a profile sidebar, and Markdown-driven main content.

## Edit Your Site

Most users only need to change these two files:

- `src/site.config.ts`: name, affiliation, avatar, email, social links, navigation, and SEO text.
- `src/content/home.md`: About, News, Publications, Students, or any other page sections.

Replace `public/images/photo.svg` with a real profile photo and update `author.avatar` if you use another filename.

## Commands

```bash
npm install
npm run dev
npm run build
```

The publication venue style is automatic for Markdown inline code, for example:

```md
- `CVPR 2026` Paper title, Author A, **Your Name**.
```

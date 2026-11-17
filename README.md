# hdbn.github.io

Hideo Bannai's personal page, built with Astro and published at <https://hdbn.github.io/> by GitHub Pages.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # into dist/
```

Pushing to `main` builds and publishes the site (`.github/workflows/deploy.yml`).
The repository's Settings → Pages → Source has to be "GitHub Actions".

## Content

English is at the root and Japanese under `/ja/`; the words on buttons and headings are in `src/lib/i18n.ts`.


- `src/data/hideo-bannai.bib` — the publication list, a verbatim DBLP export. Replace it with a fresh export to update.
- `src/data/not-in-dblp.bib` — papers DBLP does not list, written by hand in DBLP's style and read alongside the export.
- `src/data/arxiv-titles.json` — the title each arXiv preprint has on arXiv now, which DBLP does not follow. Refresh it with `node scripts/arxiv-titles.mjs` after updating the bib files, or now and then. A preprint is matched to its published versions by either title; one listed on its own takes the new title, with the old one under it; a version whose preprint now has another title shows that title by the link.
- `src/data/awards.ts` — award notes shown on papers, by BibTeX key.
- `src/data/about/en.md`, `ja.md` — the About text on the home page, in Markdown, one file per language.
- `src/data/profile.ts` — name, affiliation and links.
- `src/data/talks.ts` — selected talks (not a complete record), listed at `/talks/` and the latest three on the home page. A talk on a paper names the paper's BibTeX key, and its slides also show on the paper.
- `public/slides/` — the slides, served at `/slides/<file>`. Keep a deck under one name in each format (`talk.pdf`, `talk.pptx`) and every one is linked.

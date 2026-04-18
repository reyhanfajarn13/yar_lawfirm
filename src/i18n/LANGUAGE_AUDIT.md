# Language Audit (Initial Baseline)

This audit groups content before full data-level bilingual migration.

## Mostly Indonesian Content
- `src/data/articles.js`
- `src/data/articleContents.js`
- WhatsApp default consultation message content (now moved to i18n keys)

## Mostly English Content
- `src/components/home/*` (UI headings and labels)
- `src/components/aboutus/*`
- `src/components/practicearea/*`
- `src/components/attorneys/*`
- `src/components/attorneys-detail/*`
- `src/components/blog/*`
- `src/components/blog-detail/*`
- `src/pages/*`

## Mixed Content (ID + EN in same journey)
- Blog and article journeys:
  - Page/UI labels were English
  - Article body and several article metadata entries were Indonesian
- Practice area journey:
  - UI labels were English
  - WhatsApp messages were Indonesian

## Current Direction
- UI labels and reusable interface text are now sourced from `react-i18next`.
- Language toggle is wired to navbar dropdown with default language `id`.
- Article metadata and long-form article body now support bilingual maps (`id`/`en`) through locale-aware helpers in `src/data/articles.js` and `src/data/articleContentsByLocale.js`.
- Home article cards, blog carousel, and blog detail pages now consume locale-aware article data based on active language.

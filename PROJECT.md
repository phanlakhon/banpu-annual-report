# BANPU Annual Report 2568 — PDF to HTML Web Project

## สิ่งที่เราทำ / What We're Building

แปลง **รายงานประจำปี 2568 ของบ้านปู (แบบ 56-1 One Report)** จาก PDF 360 หน้า ให้เป็นเว็บไซต์ HTML ที่ใช้งานได้ รองรับ 2 ภาษา (ไทย/อังกฤษ)

Converting BANPU's **360-page 56-1 One Report (2025)** from PDF into an interactive HTML web experience with Thai/English bilingual support.

---

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 16.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| i18n | next-intl | 4.9.1 |
| Icons | lucide-react | 1.8.0 |
| Font | Noto Sans Thai (Google) | — |

---

## File Structure

```
src/
├── app/
│   └── [locale]/                  # Locale routing (th / en)
│       ├── layout.tsx             # Root layout: MINIMAL — only i18n provider + html/body
│       ├── page.tsx               # Homepage: FULL-SCREEN, no sidebar/header
│       ├── globals.css
│       └── pages/
│           ├── layout.tsx         # Pages layout: wraps children in PagesShell
│           └── [pageId]/
│               └── page.tsx       # Dynamic page renderer (reads from src/data/pages.ts)
│
├── components/
│   ├── PagesShell.tsx             # Client: hamburger + sidebar overlay + auto-close on nav
│   ├── Sidebar.tsx                # Left navigation: accordion + active state detection
│   └── LanguageSwitcher.tsx       # TH / EN toggle buttons (top-right bar)
│
├── data/
│   └── pages.ts                   # ALL page content + metadata (source of truth)
│
└── i18n/
    ├── routing.ts                 # Supported locales: th, en (default: th)
    └── request.ts                 # Server-side i18n config

messages/
├── th.json                        # Thai translations (Sidebar menu labels)
└── en.json                        # English translations

public/
├── logo.webp                      # BANPU logo
├── page_1.webp                    # Annual report cover (used on homepage)
├── homepage-bg.webp               # Homepage background
├── convert_webp.py                # Script: convert PNG → WebP (run locally as needed)
├── fonts/                         # Local font files
├── page-intro/                    # Images for page 00 (intro PDF pages 02–03)
├── page-04/                       # Images for page 04 (highlights, PDF pages 04–07)
├── page-08/                       # Images for page 08 (performance, PDF pages 08–09)
└── page-10/                       # Images for page 10 (board report, PDF pages 10–11)
```

> **All image assets must be `.webp`** — the project uses WebP throughout for smaller file sizes. Use `public/convert_webp.py` to batch-convert PNG/JPG exports from PDF.

> **Key architecture note:** The homepage (`/th`, `/en`) has NO sidebar or header — it's a standalone full-screen page. Only routes under `/pages/*` show the sidebar and language switcher. This is achieved through Next.js **nested layouts**.

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#2a2e82` | Headings, primary text, table borders |
| Royal Purple | `#311b92` | Active nav, page number color |
| Brand Blue | `#1e90e6` | CTA buttons, links |
| Sky Blue | `#3ab4e8` | Table section headers, quote marks |
| Active Purple | `#5b3e96` | Language switcher active state, sidebar page numbers |
| Light Blue BG | `#e3f6fc` | Section backgrounds in PDF pages |
| Sidebar BG | `#f0f8ff` | Sidebar background |

---

## URL Structure

```
/                    → redirect to /th
/th                  → Thai homepage (full-screen, no sidebar)
/en                  → English homepage
/th/pages/00         → บทนำ / Introduction
/th/pages/04         → จุดเด่นในรอบปี (Highlights)            ← PDF pages 04–07
/th/pages/08         → ผลการดำเนินงาน (Performance)            ← PDF pages 08–09
/th/pages/10         → รายงานคณะกรรมการ (Board Report)         ← PDF pages 10–11
/th/pages/12         → สารจากประธาน (CEO Message)
/th/pages/18         → นโยบายและภาพรวมธุรกิจ (Policy & Overview)
/th/pages/22         → แผนที่ธุรกิจ (Business Map)
/th/pages/24         → วิสัยทัศน์และพันธกิจ (Vision & Mission)
/th/pages/254        → นโยบายการกำกับดูแล (Corporate Governance Policy)
/th/pages/282        → โครงสร้างการกำกับดูแล (Governance Structure)
/th/pages/342        → เอกสารแนบ 1 รายละเอียดคณะกรรมการ (Attachment 1)
```
Replace `/th/` with `/en/` for English versions.

---

## Sidebar Menu Structure

The sidebar (`src/components/Sidebar.tsx`) is wired to translation keys in `messages/th.json` and `messages/en.json` under the `"Menu"` namespace.

```
สารบัญ
  00  intro          ← NavLink (flat)
  04  highlight      ← NavLink (flat)
  08  performance    ← NavLink (flat)
  10  board_report   ← NavLink (flat)
  12  ceo_message    ← NavLink (flat)
  ─────────────────
  [1] part1          ← AccordionItem
      18  part1_1
      22  part1_2
      24  part1_3
  [2] part2          ← AccordionItem
      254 part2_1
      282 part2_2
  [3] part3          ← AccordionItem
      342 part3_1
      354 part3_2    ← ⚠ href currently points to /342 (placeholder, page 354 not yet added)
```

---

## Current Status (as of 2026-04-25)

### ✅ Done
- [x] Project setup (Next.js + next-intl + Tailwind v4)
- [x] Full-screen homepage (no sidebar/header)
- [x] Nested layout: sidebar appears only under `/pages/*`
- [x] Sidebar with accordion + active state detection
- [x] Mobile responsive: hamburger menu, sidebar overlay, auto-close on nav
- [x] Thai/English language switcher
- [x] Prev/Next navigation bar (shows actual page title, not just page number)
- [x] All image assets converted to WebP
- [x] Page `00` — บทนำ/Introduction (image-based, desktop + mobile variants)
- [x] Page `04` — จุดเด่นในรอบปี (PDF pages 04–07: images + financial table)
- [x] Page `08` — ผลการดำเนินงาน (PDF pages 08–09: data table + chart images)
- [x] Page `10` — รายงานคณะกรรมการ (PDF pages 10–11: quote photo + two-column text)

### 🚧 Pending — awaiting content from client
- [ ] Page `12` — สารจากประธาน (CEO Message)
- [ ] Page `18` — นโยบายและภาพรวมธุรกิจ
- [ ] Page `22` — แผนที่ธุรกิจ
- [ ] Page `24` — วิสัยทัศน์และพันธกิจ
- [ ] Page `254` — นโยบายการกำกับดูแล
- [ ] Page `282` — โครงสร้างการกำกับดูแล
- [ ] Page `342` — เอกสารแนบ 1
- [ ] Page `354` — เอกสารแนบ 2 (sidebar link exists, page entry not yet added)

---

## Section Types (`src/data/pages.ts`)

Each page entry has a `layout` field and a `sections` array.

### `layout` options

| Value | Description |
|-------|-------------|
| `'pdf_composition'` | Multiple PDF pages composed in a 2-column grid (1 col on mobile, 2 cols on `xl`+). Each direct child must be a `pdf_page` block. |
| `'article'` | White card, max-w-4xl, simple article layout. |
| `'pdf_single_full'` | Single full-width image (max-w-660px). Not yet used. |

### Section types

| Type | Description |
|------|-------------|
| `pdf_page` | Container for one PDF page. `backgroundColor`, `pageNumber`, `pageNumberAlign` (`'left'`/`'right'`), `pageNumberColor`. When `desktopFullImage` is set, shows that image on `sm+` screens and renders child `items` only on mobile. |
| `pdf_banner` | Full-width image. Optional `mobileSrcs[]` — if provided, the main `src` is hidden on mobile and replaced with the mobile array. |
| `pdf_row` | Row of images in equal columns. On mobile stacks vertically. `withGap` adds spacing between columns. |
| `pdf_header` | Breadcrumb-style header text (bilingual). **Currently renders `null` — hidden.** |
| `pdf_title` | Large gradient heading (bilingual). |
| `pdf_sub_title` | Centered subtitle (bilingual). |
| `pdf_quote_block` | Quote in a light-blue box with opening/closing quote marks and a signature (image + name + position). |
| `pdf_text_columns` | Two-column flowing text. `fontFamily: 'sarabun'` applies serif Thai via `font-sarabun` class. |
| `pdf_table` | Financial data table. `columns[]` are year headers. `sections[]` each have a `title`, optional `unit`, and `rows[]`. `highlightColumnIndex` highlights one column. `rows` support `isBold` and per-row `unit` override. |
| `pdf_note` | Footnote text. `hidePrefix: true` hides the "หมายเหตุ:" / "Note:" label. Supports `\n` for line breaks. |
| `text` | Simple paragraph with optional title (article layout only). |
| `highlights` | KPI cards grid, 2 cols on mobile / 3 cols on desktop (article layout only). |
| `quote` | Blockquote with attribution (article layout only). |
| `list` | Bullet list (article layout only). |
| `image` | Standalone image with optional caption (article layout only). |

### `desktopFullImage` pattern

Set on a `pdf_page` to show a full-res image on `sm+` screens while rendering child items on mobile. This avoids slicing images for desktop.

```ts
{
  type: 'pdf_page',
  backgroundColor: '#d0f5fe',
  pageNumber: '04',
  pageNumberAlign: 'left',
  desktopFullImage: '/page-04/04_p04_full.webp',  // shown on sm+ screens
  items: [
    // rendered on mobile only
    { type: 'pdf_banner', src: '/page-04/04_p04_banner.webp' },
    { type: 'pdf_row', items: [
      { src: '/page-04/04_p04_col1.webp' },
      { src: '/page-04/04_p04_col2.webp' },
    ]},
  ]
}
```

---

## How to Add a New Page

### Step 1 — Export and convert images

Export each PDF page as PNG from Acrobat/Preview, then convert to WebP:

```bash
cd public
python3 convert_webp.py   # converts all PNG/JPG in current folder tree to .webp
```

Naming convention:
```
public/page-{pageId}/
  {pageId}_p{pdfPageNum}_full.webp      ← full desktop image (used in desktopFullImage)
  {pageId}_p{pdfPageNum}_banner.webp    ← top banner strip (for mobile pdf_banner)
  {pageId}_p{pdfPageNum}_col1.webp      ← column slices (for mobile pdf_row)
  {pageId}_p{pdfPageNum}_col2.webp
  ...
```

### Step 2 — Add entry to `src/data/pages.ts`

```ts
'12': {
  pageId: '12',
  title: { th: 'สารจากประธาน', en: 'Message from the CEO' },
  accentColor: '#1565c0',
  backgroundColor: '#ffffff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      backgroundColor: '#e3f6fc',
      pageNumber: '12',
      pageNumberAlign: 'left',
      desktopFullImage: '/page-12/12_p12_full.webp',
      items: [
        { type: 'pdf_banner', src: '/page-12/12_p12_banner.webp' },
        // add more section types as needed
      ]
    }
  ],
  prevPage: '10',
  nextPage: '18',
},
```

### Step 3 — Update Sidebar if needed

In `src/components/Sidebar.tsx`, add a `<NavLink>` or add an item to an existing `<AccordionItem>`.

### Step 4 — Update messages if needed

Add the translation key to both `messages/th.json` and `messages/en.json` under `"Menu"`.

---

## Adapting for a New Report (same logo/colors, different content)

> Use this checklist after copying the project folder to a new directory.

### 1. `src/app/[locale]/page.tsx` — Homepage text + cover image

Change heading, subheading, and description (both TH and EN inline in the file). Change the cover image:
```
public/page_1.webp   ← replace with the new report's cover
```

### 2. `messages/th.json` + `messages/en.json` — Menu labels

Edit all keys under `"Menu"` to match the new report's section names.

### 3. `src/components/Sidebar.tsx` — Page numbers + menu structure

Change the `pageId` values in `<NavLink>` and `<AccordionItem>` to match the new report's page numbers. Add or remove `<AccordionItem>` blocks to match the number of parts.

### 4. `src/data/pages.ts` — All page content

- Change `pageId`, `title`, `prevPage`, `nextPage` for every entry
- Set `sections: []` initially (shows "กำลังเตรียมเนื้อหา" placeholder)
- Update `pageOrder` array at the bottom of the file

### 5. `public/` — Images

Delete old `page-XX/` folders, create new ones following the naming convention above.  
Files shared between reports (`logo.webp`, `fonts/`) don't need to change.

### 6. `PROJECT.md` — Update this file

Update the company name, URL structure, Current Status, and any other changed details.

---

## Running the Project

```bash
npm install
npm run dev
# Open http://localhost:3000  (redirects to /th)
```

---

## Developer Notes

- **`params` are async in Next.js 16**: always `await params` before destructuring `locale` or `pageId`
- **`'use client'`** components: `PagesShell`, `Sidebar`, `LanguageSwitcher`
- **Server components**: all `layout.tsx` and `page.tsx` files
- **Tailwind v4 canonical classes**: `shrink-0` (not `flex-shrink-0`), `-mt-1.25` (not `mt-[-5px]`), `min-w-7.5` (not `min-w-[30px]`), `mt-px` (not `mt-[1px]`)
- **Never define components inside render functions** — causes "Cannot create components during render". Always define at module scope.
- **Images must be `.webp`** — use `convert_webp.py` to convert exports before adding to `public/`
- **i18n routing**: `src/middleware.ts` handles locale detection; root `/` redirects to `/th`
- **Locale list**: `['en', 'th']`, default `'th'` — defined in `src/i18n/routing.ts`
- **`pdf_header` is hidden**: `renderSection` returns `null` for `pdf_header` type (intentional, can be un-hidden by removing the `return null`)
- **`pdf_page` desktop breakpoint is `sm`**, not `lg` — the full image shows from 640px up

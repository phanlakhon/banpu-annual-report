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
├── page-intro/                    # Images for page 000 (intro)
├── page-001/                      # Images for page 001 (financial highlights)
├── page-002/                      # Images for page 002 (operational results)
└── page-003/                      # Images for page 003 (board report)
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

Page IDs are **sequential numbers (000–040)**, independent of actual PDF page numbers. This avoids TH/EN page number mismatches (e.g., the same section is p.282 in the Thai PDF but p.284 in the English PDF).

```
/                     → redirect to /th
/th                   → Thai homepage (full-screen, no sidebar)
/en                   → English homepage
/th/pages/000         → บทนำ / Introduction
/th/pages/001         → จุดเด่นในรอบปี / Financial Highlights
/th/pages/002         → ผลการดำเนินงาน / Operational Results
/th/pages/003         → รายงานคณะกรรมการ / Board of Directors' Review
/th/pages/004         → สารจากประธานฯ / CEO Review
/th/pages/005         → นโยบายและภาพรวมฯ / Policy & Business Overview
/th/pages/006         → แผนที่ธุรกิจ / Group Map of Operations
/th/pages/007         → วิสัยทัศน์และพันธกิจ / Vision & Mission
...
/th/pages/030         → คดีความที่สำคัญ / Significant Litigation
/th/pages/031         → นโยบายการกำกับดูแล / Corporate Governance Policy
...
/th/pages/038         → การควบคุมภายใน / Internal Control
/th/pages/039         → เอกสารแนบ 1 / Attachment 1
/th/pages/040         → เอกสารแนบ 2 / Attachment 2
```
Replace `/th/` with `/en/` for English versions. The page ID in the URL is always the same for both languages.

---

## Sidebar Menu Structure

The sidebar (`src/components/Sidebar.tsx`) is wired to translation keys in `messages/th.json` and `messages/en.json` under the `"Menu"` namespace. Keys are `m000`–`m040` plus `part1`, `part2`, `part3` for section titles.

```
สารบัญ
  000  m000  บทนำ                              ← NavLink (flat)
  001  m001  จุดเด่นในรอบปี                     ← NavLink (flat)
  002  m002  ผลการดำเนินงานในรอบปีที่ผ่านมา    ← NavLink (flat)
  003  m003  รายงานคณะกรรมการ                  ← NavLink (flat)
  004  m004  สารจากประธานเจ้าหน้าที่บริหาร     ← NavLink (flat)
  ──────────────────────────────────────────
  [1] part1  การประกอบธุรกิจและผลการดำเนินงาน  ← AccordionItem (26 items)
      005  m005  นโยบายและภาพรวมการประกอบธุรกิจ
      006  m006  แผนที่แสดงธุรกิจของกลุ่มบ้านปู
      007  m007  วิสัยทัศน์และพันธกิจ
      008  m008  สรุปการเปลี่ยนแปลงและพัฒนาการที่สำคัญ
      009  m009  ข้อมูลทั่วไปของบริษัท
      010  m010  โครงสร้างรายได้
      011  m011  ข้อมูลกลุ่มธุรกิจ
      012  m012  ภาวะตลาดและการแข่งขัน
      013  m013  ทรัพย์สินที่ใช้ในการประกอบธุรกิจ
      014  m014  ปริมาณสำรองถ่านหินและก๊าซธรรมชาติ
      015  m015  โครงสร้างกลุ่มบริษัทฯ
      016  m016  รายชื่อบริษัทย่อยและบริษัทร่วม
      017  m017  ผู้ถือหุ้น
      018  m018  ข้อมูลหลักทรัพย์
      019  m019  หุ้นกู้
      020  m020  นโยบายการจ่ายเงินปันผล
      021  m021  การบริหารจัดการความเสี่ยง
      022  m022  การขับเคลื่อนธุรกิจเพื่อความยั่งยืน
      023  m023  การจัดการผลกระทบต่อผู้มีส่วนได้เสียฯ
      024  m024  การจัดการด้านความยั่งยืน (สิ่งแวดล้อม)
      025  m025  การจัดการด้านความยั่งยืน (สังคม)
      026  m026  ความรับผิดชอบต่อสังคม
      027  m027  คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ
      028  m028  อัตราส่วนทางการเงิน
      029  m029  บุคคลอ้างอิงอื่น ๆ
      030  m030  คดีความที่สำคัญในระหว่างปี
  [2] part2  การกำกับดูแลกิจการ                ← AccordionItem (8 items)
      031  m031  นโยบายการกำกับดูแลกิจการ
      032  m032  โครงสร้างการกำกับดูแลกิจการ
      033  m033  ผลการดำเนินงานด้านการกำกับดูแลกิจการ
      034  m034  รายงานคณะกรรมการบรรษัทภิบาลและสรรหา
      035  m035  รายงานคณะกรรมการกำหนดค่าตอบแทน
      036  m036  รายงานคณะกรรมการตรวจสอบต่อผู้ถือหุ้น
      037  m037  รายงานคณะกรรมการ ESG
      038  m038  การควบคุมภายในและรายการระหว่างกัน
  [3] part3  การรับรองความถูกต้องของข้อมูล     ← AccordionItem (2 items)
      039  m039  เอกสารแนบ 1 : รายละเอียดเกี่ยวกับคณะกรรมการ
      040  m040  เอกสารแนบ 2 : รายละเอียดการดำรงตำแหน่งของผู้บริหาร
```

---

## Current Status (as of 2026-04-25)

### ✅ Done
- [x] Project setup (Next.js + next-intl + Tailwind v4)
- [x] Full-screen homepage (no sidebar/header)
- [x] Nested layout: sidebar appears only under `/pages/*`
- [x] Sidebar with accordion + active state detection (41 items, 000–040)
- [x] Mobile responsive: hamburger menu, sidebar overlay, auto-close on nav
- [x] Thai/English language switcher
- [x] Prev/Next navigation bar (shows actual page title, not just page number)
- [x] All image assets converted to WebP
- [x] Sequential page ID system (000–040) — language-agnostic, not tied to PDF page numbers
- [x] Complete sidebar menu (all 41 items, exact text from PDF)
- [x] Page `000` — บทนำ/Introduction (image-based, desktop + mobile variants)
- [x] Page `001` — จุดเด่นในรอบปี (images + financial table)
- [x] Page `002` — ผลการดำเนินงาน (data table + chart images)
- [x] Page `003` — รายงานคณะกรรมการ (quote photo + two-column text)

### 🚧 Pending — awaiting content from client
- [ ] Page `004` — สารจากประธานเจ้าหน้าที่บริหาร
- [ ] Pages `005`–`030` — Section 1 (26 items)
- [ ] Pages `031`–`038` — Section 2 (8 items)
- [ ] Pages `039`–`040` — Section 3 / Attachments

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

The `pageId` is the sequential ID (e.g. `'004'`). The `pageNumber` inside each `pdf_page` section is the actual PDF page number (display only — can differ between TH and EN PDFs).

```ts
'004': {
  pageId: '004',
  title: { th: 'สารจากประธานเจ้าหน้าที่บริหาร', en: "Chief Executive Officer's Review" },
  accentColor: '#1565c0',
  backgroundColor: '#ffffff',
  layout: 'pdf_composition',
  sections: [
    {
      type: 'pdf_page',
      backgroundColor: '#e3f6fc',
      pageNumber: '12',          // ← actual PDF page number (TH), display only
      pageNumberAlign: 'left',
      desktopFullImage: '/page-004/004_p12_full.webp',
      items: [
        { type: 'pdf_banner', src: '/page-004/004_p12_banner.webp' },
        // add more section types as needed
      ]
    }
  ],
  prevPage: '003',
  nextPage: '005',
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

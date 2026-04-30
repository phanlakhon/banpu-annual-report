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
| Font (Latin/heading) | Banpu (local OTF) | — |
| Font (Thai body) | Sarabun (Google) | — |

---

## File Structure

```
src/
├── app/
│   └── [locale]/                  # Locale routing (th / en)
│       ├── layout.tsx             # Root layout: fonts + i18n provider + html/body + metadata
│       ├── page.tsx               # Homepage: FULL-SCREEN, no sidebar/header
│       ├── globals.css
│       └── pages/
│           ├── layout.tsx         # Pages layout: wraps children in PagesShell
│           └── [pageId]/
│               └── page.tsx       # Dynamic page renderer (reads from src/data/pages/)
│
├── components/
│   ├── PagesShell.tsx             # Client: hamburger + sidebar overlay + auto-close on nav
│   ├── Sidebar.tsx                # Left navigation: accordion + active state detection
│   └── LanguageSwitcher.tsx       # TH / EN toggle buttons (top-right bar)
│
├── data/
│   └── pages/
│       ├── index.ts               # Aggregator: imports all per-page files, exports pagesData + pageOrder
│       ├── types.ts               # All TypeScript types: PageData, PageSection, BilingualText, etc.
│       ├── 000.ts                 # Page data for /pages/000
│       ├── 001.ts                 # Page data for /pages/001
│       └── ...040.ts              # One file per page ID
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
├── fonts/                         # Local font files (BANPU OTF family)
├── page_intro/                    # Images for page 000 (intro)
├── page_001/                      # Images for page 001
├── page_002/                      # Images for page 002
└── page_NNN/                      # Images for page NNN (underscore, not hyphen)
```

> **All image assets must be `.webp`** — the project uses WebP throughout. Use `public/convert_webp.py` to batch-convert PNG/JPG exports from PDF.

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
/th/pages/004         → สารจากประธานเจ้าหน้าที่บริหาร / CEO Review
/th/pages/005         → นโยบายและภาพรวมฯ / Policy & Business Overview
/th/pages/006         → แผนที่ธุรกิจ / Group Map of Operations
/th/pages/007         → วิสัยทัศน์และพันธกิจ / Vision & Mission
/th/pages/008         → สรุปการเปลี่ยนแปลงที่สำคัญ / Key Developments
/th/pages/009         → ข้อมูลทั่วไปของบริษัท / Banpu Information
/th/pages/010         → โครงสร้างรายได้ / Revenue Structure
/th/pages/011         → ข้อมูลกลุ่มธุรกิจ / Business Group Information
/th/pages/012         → ภาวะตลาดและการแข่งขัน / Market and Competition
/th/pages/013–040     → (pending)
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

## Current Status (as of 2026-04-30)

### ✅ Done
- [x] Project setup (Next.js + next-intl + Tailwind v4)
- [x] Full-screen homepage (no sidebar/header)
- [x] Nested layout: sidebar appears only under `/pages/*`
- [x] Sidebar with accordion + active state detection (41 items, 000–040)
- [x] Mobile responsive: hamburger menu, sidebar overlay, auto-close on nav
- [x] Thai/English language switcher
- [x] Prev/Next navigation bar (shows actual page title, not just page number)
- [x] All image assets converted to WebP
- [x] Sequential page ID system (000–040) — language-agnostic
- [x] Complete sidebar menu (all 41 items, exact text from PDF)
- [x] Browser tab title: "Banpu Annual Report 2025"
- [x] Page `000` — บทนำ / Introduction
- [x] Page `001` — จุดเด่นในรอบปี / Financial Highlights
- [x] Page `002` — ผลการดำเนินงาน / Operational Results
- [x] Page `003` — รายงานคณะกรรมการ / Board of Directors' Review
- [x] Page `004` — สารจากประธานเจ้าหน้าที่บริหาร / CEO Review
- [x] Page `005` — นโยบายและภาพรวมการประกอบธุรกิจ / Policy & Business Overview
- [x] Page `006` — แผนที่แสดงธุรกิจของกลุ่มบ้านปู / Group Map of Operations
- [x] Page `007` — วิสัยทัศน์และพันธกิจ / Vision & Mission
- [x] Page `008` — สรุปการเปลี่ยนแปลงและพัฒนาการที่สำคัญ / Key Developments
- [x] Page `009` — ข้อมูลทั่วไปของบริษัท / Banpu Information
- [x] Page `010` — โครงสร้างรายได้ / Revenue Structure
- [x] Page `011` — ข้อมูลกลุ่มธุรกิจ / Business Group Information (21 sub-pages)
- [x] Page `012` — ภาวะตลาดและการแข่งขัน / Market and Competition (54 sub-pages)

### 🚧 Pending — awaiting content from client
- [ ] Page `013` — ทรัพย์สินที่ใช้ในการประกอบธุรกิจ
- [ ] Pages `014`–`030` — Section 1 remaining items
- [ ] Pages `031`–`038` — Section 2 (Corporate Governance)
- [ ] Pages `039`–`040` — Section 3 / Attachments

---

## Section Types

Each page file exports a `PageData` object with a `layout` field and a `sections` array. Types are defined in `src/data/pages/types.ts`.

### `layout` options

| Value | Description |
|-------|-------------|
| `'pdf_composition'` | Multiple PDF sub-pages in a 2-column grid (1 col mobile, 2 cols `xl`+). Each direct child must be a `pdf_page` block. Used for long menus with many sub-pages (e.g. 011, 012). |
| `'article'` | White card, max-w-4xl, simple article layout. |
| `'pdf_single_full'` | Single full-width image layout. Used for single-page menus (e.g. 007, 009). |

### Section types

| Type | Description |
|------|-------------|
| `pdf_page` | Container for one PDF sub-page. Props: `backgroundColor`, `noPadding`, `noMinHeight`, `pageNumber`, `pageNumberAlign` (`'left'`/`'right'`), `pageNumberColor`, `desktopFullImage`. When `desktopFullImage` is set, shows that image on `sm+` screens and renders child `items` only on mobile. |
| `pdf_banner` | Full-width image. `minWidth` (number, px) triggers horizontal scroll wrapper — use for table images (e.g. `minWidth: 560`). Optional `mobileSrcs[]` replaces the main image on mobile. |
| `pdf_row` | Row of images in equal columns. `withGap` adds gap between columns. On mobile, stacks vertically. |
| `pdf_title` | Large gradient heading (bilingual). |
| `pdf_sub_title` | Section subtitle (bilingual). `color` prop overrides default color (default: `var(--color-banpu-cyan-vivid)`). Spacing is tight (`pt-3 pb-1`). |
| `pdf_gradient_text` | Body-size text with gradient color (bilingual). Used as a highlighted intro paragraph. |
| `pdf_body_text` | Regular body paragraph (bilingual, Sarabun Light). `paddingLeft` prop (string, default `'2.2rem'`). **Renders `null` if the translated text is empty** — safe to use `th: ""` or `en: ""` for locale-specific text. |
| `pdf_text_columns` | Two-column flowing text. `fontFamily: 'sarabun'` applies Thai font via `font-sarabun` class. |
| `pdf_quote_block` | Quote in a light-blue box with opening/closing marks and a signature (image + name + position). |
| `pdf_table` | Financial data table. `columns[]` are year headers. `sections[]` each have optional `title`, `unit`, and `rows[]`. `highlightColumnIndex` highlights one column. Rows support `isBold` and per-row `unit` override. |
| `pdf_note` | Footnote text. `hidePrefix: true` hides the "หมายเหตุ :" / "Remarks :" label. Supports `\n` for line breaks. |
| `pdf_header` | Breadcrumb-style header text. **Currently renders `null` — hidden by design.** |
| `text` | Simple paragraph with optional title (article layout only). |
| `highlights` | KPI cards grid, 2 cols mobile / 3 cols desktop (article layout only). |
| `quote` | Blockquote with attribution (article layout only). |
| `list` | Bullet list (article layout only). |
| `image` | Standalone image with optional caption (article layout only). |

### `desktopFullImage` pattern

Set on a `pdf_page` to show a full-res image on `sm+` screens while rendering child items on mobile. Both `string` and `{ th, en }` are accepted (use plain string when the same image works for both locales).

```ts
{
  type: 'pdf_page',
  desktopFullImage: {
    th: '/page_012/012_p01_full_th.webp',
    en: '/page_012/012_p01_full_en.webp',
  },
  items: [
    // rendered on mobile only
    { type: 'pdf_banner', src: { th: '/page_012/012_p01_mobile_th.webp', en: '/page_012/012_p01_mobile_en.webp' } },
    { type: 'pdf_body_text', paddingLeft: '0.9rem', text: { th: '...', en: '...' } },
  ]
}
```

### Locale-specific text

If a section should only appear in one language, pass an empty string for the other locale. The renderer will skip the element entirely (no empty space left behind):

```ts
{ type: 'pdf_body_text', text: { th: '', en: 'English-only content here.' } }
```

---

## How to Add a New Page

### Step 1 — Export and convert images

Export each PDF sub-page as PNG, then convert to WebP:

```bash
cd public
python3 convert_webp.py   # converts all PNG/JPG in current folder tree to .webp
```

Naming convention (use **underscore**, not hyphen):
```
public/page_{pageId}/
  {pageId}_p{N}_full_th.webp      ← full desktop image (TH)
  {pageId}_p{N}_full_en.webp      ← full desktop image (EN)
  {pageId}_p{N}_mobile_th.webp    ← mobile banner (TH)
  {pageId}_p{N}_mobile_en.webp    ← mobile banner (EN)
  {pageId}_p{N}_mobile_1_th.webp  ← first of multiple mobile images (TH)
  {pageId}_p{N}_mobile_1_table_th.webp  ← table image → add minWidth: 560
```

Use a plain string (no `{th, en}`) when the same image works for both locales.

### Step 2 — Create/edit `src/data/pages/{pageId}.ts`

Each page is its own file. The stub (3-line placeholder) is already in place for all IDs 000–040. Replace the stub with the real content:

```ts
import type { PageData } from './types';

const page: PageData = {
    pageId: "013",
    title: { th: 'ทรัพย์สินที่ใช้ในการประกอบธุรกิจ', en: 'Properties Used in Business Operations' },
    accentColor: '#1e90e6',
    layout: 'pdf_composition',
    sections: [
        {
            type: 'pdf_page',
            desktopFullImage: { th: '/page_013/013_p01_full_th.webp', en: '/page_013/013_p01_full_en.webp' },
            items: [
                { type: 'pdf_banner', src: { th: '/page_013/013_p01_mobile_th.webp', en: '/page_013/013_p01_mobile_en.webp' } },
            ],
        },
    ],
    prevPage: '012',
    nextPage: '014',
};

export default page;
```

No changes needed to `index.ts` — all 000–040 are already imported and registered there.

### Step 3 — That's it

`index.ts` and the Sidebar already reference all 41 pages. No other files need updating for content changes.

---

## Adapting for a New Report (same logo/colors, different content)

> Use this checklist after copying the project folder to a new directory.

1. **`src/app/[locale]/page.tsx`** — change homepage heading, subheading, cover image (`public/page_1.webp`)
2. **`src/app/[locale]/layout.tsx`** — update `metadata.title`
3. **`messages/th.json` + `messages/en.json`** — edit all keys under `"Menu"`
4. **`src/components/Sidebar.tsx`** — update `pageId` values and accordion structure
5. **`src/data/pages/*.ts`** — replace all page content; start from the 3-line stubs
6. **`public/page_NNN/`** — delete old folders, create new ones with new images
7. **`PROJECT.md`** — update company name, URL structure, Current Status

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
- **Tailwind v4 canonical classes**: `shrink-0` not `flex-shrink-0`, `-mt-1.25` not `mt-[-5px]`
- **Never define components inside render functions** — causes "Cannot create components during render". Always define at module scope.
- **Images must be `.webp`** — use `convert_webp.py` to convert exports
- **Image folders use underscore**: `public/page_012/` not `public/page-012/`
- **i18n routing**: `src/middleware.ts` handles locale detection; root `/` redirects to `/th`
- **Locale list**: `['en', 'th']`, default `'th'` — defined in `src/i18n/routing.ts`
- **`pdf_header` is hidden**: returns `null` in renderer (intentional, can be un-hidden by removing the `return null`)
- **`pdf_page` desktop breakpoint is `sm`** (640px), not `lg` — the full image shows from 640px up
- **Double quotes inside strings**: must be escaped `\"` when the string value itself is double-quoted. Example: Thai text containing `"คำพูด"` → `"...\"คำพูด\"..."`. Alternatively wrap the string value in backtick template literals.
- **`pdf_body_text` with empty locale text**: renderer checks `if (!bodyText) return null` — safe to leave `th: ""` or `en: ""` for locale-specific paragraphs
- **`minWidth` on `pdf_banner`**: wraps the image in `overflow-x-auto`, enabling horizontal scroll on mobile. Always use for `_table` images (recommended: `minWidth: 560`)
- **`pdf_sub_title` color**: defaults to `var(--color-banpu-cyan-vivid)`. Override per-section with `color: '#939598'` etc.
- **`pdf_body_text` paddingLeft**: defaults to `'2.2rem'`. Override per-section with `paddingLeft: '0.9rem'` for bullet-aligned text

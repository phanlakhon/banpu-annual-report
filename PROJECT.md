# BANPU Annual Report 2568 — PDF to HTML Web Project

## สิ่งที่เราทำ / What We're Building

แปลง **รายงานประจำปี 2568 ของบ้านปู (แบบ 56-1 One Report)** จาก PDF 360 หน้า ให้เป็นเว็บไซต์ HTML ที่ใช้งานได้ รองรับ 2 ภาษา (ไทย/อังกฤษ) โดยมีหน้า Homepage ก่อนเข้าถึงเนื้อหา

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
│           ├── layout.tsx         # Pages layout: WITH sidebar + sticky header ← nested layout
│           └── [pageId]/
│               └── page.tsx       # Dynamic detail page (e.g., /th/pages/04)
│
├── components/
│   ├── HeroSlider.tsx             # Hero carousel component (kept, currently unused)
│   ├── Sidebar.tsx                # Left navigation sidebar (used in pages/layout.tsx)
│   └── LanguageSwitcher.tsx       # TH / EN switcher (used in pages/layout.tsx)
│
├── data/
│   └── pages.ts                   # Content data for all 10 demo pages
│
└── i18n/
    ├── routing.ts                 # Supported locales: th, en (default: th)
    └── request.ts                 # Server-side i18n config

messages/
├── th.json                        # Thai translations
└── en.json                        # English translations

public/
└── logo.png                 # BANPU logo image
```

> **Key architecture note:** The homepage (`/th`, `/en`) has NO sidebar or header — it's a standalone full-screen page. Only routes under `/pages/*` show the sidebar and language switcher. This is achieved through Next.js nested layouts.

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#2a2e82` | Headings, primary text |
| Royal Purple | `#311b92` | Active nav, language switcher |
| Brand Blue | `#1e90e6` | CTA buttons, links |
| Medium Purple | `#4b3fa7` | Secondary headings |
| Light Blue BG | `#eaf6fb` | Page backgrounds |
| Sidebar BG | `#f0f8ff` | Sidebar background |

---

## URL Structure

```
/                    → redirect to /th
/th                  → Thai homepage (hero + annual report intro)
/en                  → English homepage
/th/pages/04         → จุดเด่นในรอบปี (Highlights)
/th/pages/08         → ผลการดำเนินงาน (Performance)
/th/pages/10         → รายงานคณะกรรมการ (Board Report)
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

## Current Status (as of 2026-04-22)

### ✅ Done
- [x] Project setup (Next.js + next-intl + Tailwind v4)
- [x] Sidebar navigation with accordion sections
- [x] Thai/English language switcher
- [x] Homepage hero slider (3 slides, auto-advance, arrows, dots)
- [x] Homepage annual report highlight section
- [x] 10 demo pages: `/pages/04` through `/pages/342`
- [x] Prev/Next navigation between pages
- [x] Bilingual content for all 10 pages

### 🚧 In Progress / Next Steps (for full 360 pages)
- [ ] Get actual PDF content for each page from client
- [ ] Replace placeholder content in `src/data/pages.ts` with real content
- [ ] Add real images/charts/tables per page
- [ ] Add actual BANPU annual report cover image to `public/`
- [ ] Add more pages beyond the 10 demo pages
- [ ] Consider adding a PDF viewer fallback for complex pages

---

## How to Add a New Page

### Step 1 — Add content to `src/data/pages.ts`

```ts
'150': {
  pageId: '150',
  title: { th: 'ชื่อหน้า', en: 'Page Title' },
  subtitle: { th: 'คำบรรยาย', en: 'Subtitle' },
  accentColor: '#1e90e6',
  sections: [
    {
      type: 'text',
      content: {
        th: 'เนื้อหาภาษาไทย...',
        en: 'English content...',
      },
    },
  ],
  prevPage: '149',
  nextPage: '151',
},
```

### Step 2 — Update Sidebar links (if needed)

In `src/components/Sidebar.tsx`, add a link with the page number:

```tsx
<Link href={`/${locale}/pages/150`} className="...">
  <span className="text-[#5b3e96] font-bold text-xs">150</span>
  <span className="text-gray-700 text-xs">ชื่อหน้า</span>
</Link>
```

### Step 3 — Update messages (optional)

Add translation keys in `messages/th.json` and `messages/en.json` if the sidebar menu item needs i18n.

---

## Running the Project

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Notes for Developers

- **Params are async in Next.js 16**: always `await params` before using `locale` or `pageId`
- **Client components** (`'use client'`): HeroSlider, Sidebar, LanguageSwitcher
- **Server components**: layout.tsx, page.tsx, pages/[pageId]/page.tsx
- **i18n routing**: middleware in `src/middleware.ts` handles locale detection; root `/` redirects to `/th`
- The `logo.png` in `public/` is the only available image asset — all cover images are currently mocked with styled divs

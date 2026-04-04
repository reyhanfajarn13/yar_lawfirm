# YAR Law Firm - Home Page Development Instructions

## Tech Stack

- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React / React Icons
- **Carousel:** Swiper.js
- **Routing:** React Router DOM v6
- **Font:** Inter (Google Fonts)
- **Language:** JavaScript (JSX)

---

## Project Setup

```bash
npm create vite@latest yar-lawfirm -- --template react
cd yar-lawfirm
npm install
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom lucide-react swiper
```

---

## Color Palette

| Token              | Hex       | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| `primary`          | `#1A1A1A` | Teks heading utama, navbar                 |
| `secondary`        | `#4A4A4A` | Teks paragraf, subtitle                    |
| `accent`           | `#C8A862` | Dot indicator aktif, highlight accent (gold)|
| `white`            | `#FFFFFF` | Background utama                           |
| `light-gray`       | `#F5F5F5` | Background section alternatif              |
| `dark`             | `#111111` | Footer background, CTA section             |
| `border`           | `#E0E0E0` | Border card, divider line                  |
| `muted`            | `#6B7280` | Teks tanggal, label kecil                  |

---

## Typography

| Element         | Font Weight | Size (Desktop)  | Size (Mobile)  |
| --------------- | ----------- | --------------- | -------------- |
| H1 (Hero)       | 700 (Bold)  | 56px / 3.5rem   | 32px / 2rem    |
| H2 (Section)    | 700 (Bold)  | 36px / 2.25rem  | 24px / 1.5rem  |
| H3 (Card Title) | 600 (Semi)  | 20px / 1.25rem  | 16px / 1rem    |
| Body            | 400 (Reg)   | 16px / 1rem     | 14px / 0.875rem|
| Caption / Date  | 400 (Reg)   | 14px / 0.875rem | 12px / 0.75rem |
| Button          | 500 (Med)   | 16px / 1rem     | 14px / 0.875rem|

---

## Folder Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── hero-bg.jpg              # Gambar skyline kota (hero)
│   │   ├── yar-logo.png             # Logo Y.A.R
│   │   ├── achievement-1.jpg        # Foto achievement card 1
│   │   ├── achievement-2.jpg        # Foto achievement card 2
│   │   ├── article-1.jpg            # Thumbnail artikel
│   │   ├── article-2.jpg
│   │   ├── article-3.jpg
│   │   ├── article-4.jpg
│   │   ├── article-5.jpg
│   │   ├── attorney-ivan.jpg        # Foto attorney
│   │   ├── attorney-andi.jpg
│   │   ├── attorney-gulam.jpg
│   │   ├── attorney-zamza.jpg
│   │   └── clients/                 # Logo klien
│   │       ├── pacific-cross.png
│   │       ├── gcl.png
│   │       ├── pln.png
│   │       ├── bank-hariarta.png
│   │       ├── netzsch.png
│   │       ├── jac.png
│   │       ├── bank-bjb.png
│   │       ├── malacca-trust.png
│   │       ├── jamkrindo.png
│   │       ├── syariah.png
│   │       └── bass-oil.png
│   └── fonts/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── AchievementSection.jsx
│   │   ├── ArticleSection.jsx
│   │   ├── PracticeAreaSection.jsx
│   │   ├── AttorneySection.jsx
│   │   ├── ClientSection.jsx
│   │   └── CTASection.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── SectionLabel.jsx
│       └── ArrowButton.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutUsPage.jsx           # Placeholder — akan dibangun nanti
│   ├── PracticeAreasPage.jsx     # Placeholder — akan dibangun nanti
│   ├── PracticeAreaDetailPage.jsx # Placeholder — detail per practice area
│   ├── AttorneysPage.jsx         # Placeholder — akan dibangun nanti
│   ├── AttorneyDetailPage.jsx    # Placeholder — detail per attorney
│   └── BlogPage.jsx              # Placeholder — akan dibangun nanti
├── data/
│   ├── articles.js
│   ├── attorneys.js
│   ├── practiceAreas.js
│   └── clients.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Scrollable Floating Layout (Sticky Hero Pattern)

Referensi visual: [simmons-simmons.com](https://www.simmons-simmons.com/)

### Konsep
Hero section tetap **"menempel" di belakang** (sticky), sementara semua section konten di bawahnya **scroll naik menutupi hero** seolah mengapung. Efeknya seperti membuka tirai — hero terlihat penuh saat di atas, lalu perlahan tertutup oleh konten yang naik.

### Struktur HTML
```
┌─────────────────────────────────────────┐
│  Navbar (fixed, z-50)                   │  ← Selalu di atas
├─────────────────────────────────────────┤
│                                         │
│  Hero Section (sticky top-0, z-0)       │  ← Diam di tempat
│  Background image + overlay + content   │
│  height: 100vh                          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  Content Wrapper (relative, z-10)       │  ← Scroll naik menutupi hero
│  ┌─────────────────────────────────┐    │
│  │  Achievement Section            │    │  ← rounded-t-3xl (sudut atas melengkung)
│  │  (bg-white)                     │    │
│  ├─────────────────────────────────┤    │
│  │  Article Section (bg-white)     │    │
│  ├─────────────────────────────────┤    │
│  │  Practice Areas (bg-gray-50)    │    │
│  ├─────────────────────────────────┤    │
│  │  Attorney Section (bg-white)    │    │
│  ├─────────────────────────────────┤    │
│  │  Client Section (bg-white)      │    │
│  ├─────────────────────────────────┤    │
│  │  CTA Section (bg-dark)          │    │
│  ├─────────────────────────────────┤    │
│  │  Footer (bg-dark)               │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

### Teknik CSS

**Hero — Sticky Background:**
```css
.hero-section {
  position: sticky;
  top: 0;
  z-index: 0;
  height: 100vh;
  width: 100%;
}
```

**Content Wrapper — Float di atas Hero:**
```css
.content-wrapper {
  position: relative;
  z-index: 10;
  margin-top: -80px;           /* Overlap sedikit ke hero untuk transisi smooth */
  background: transparent;      /* Wrapper sendiri transparan */
}

/* Section pertama punya sudut melengkung atas */
.content-wrapper > section:first-child {
  border-radius: 2rem 2rem 0 0; /* rounded-t-3xl */
}
```

**Tailwind Implementation:**
```jsx
{/* Hero - sticky di belakang */}
<div className="sticky top-0 z-0 h-screen">
  <HeroSection />
</div>

{/* Content - mengapung di atas hero */}
<div className="relative z-10 -mt-20">
  <div className="bg-white rounded-t-3xl overflow-hidden">
    <AchievementSection />
    <ArticleSection />
    {/* ...dst */}
  </div>
</div>
```

### Visual Flow saat User Scroll

```
Scroll 0%    → Hero terlihat penuh (100vh), konten belum terlihat
Scroll 10%   → Ujung atas content wrapper mulai naik, sudut melengkung terlihat
Scroll 30%   → Hero sudah sebagian tertutup, Achievement section terlihat
Scroll 50%+  → Hero sepenuhnya tertutup, user melihat konten biasa
```

### Aturan Penting

1. **Hero HARUS `height: 100vh`** agar efek sticky terasa penuh 1 layar
2. **Content wrapper** harus punya `position: relative` dan `z-index` lebih tinggi dari hero
3. **Section pertama** (`Achievement`) harus punya `rounded-t-3xl` untuk efek "kartu mengapung"
4. **Negative margin** (`-mt-20`) pada content wrapper membuat sedikit overlap dengan hero agar transisi smooth
5. **Navbar** tetap `fixed z-50` — berada di atas semua elemen
6. **Shadow halus** (optional): tambahkan `shadow-2xl` pada content wrapper untuk kedalaman visual
7. **Mobile**: efek tetap sama, hero full-screen lalu konten naik menutupi

---

## Sections Breakdown (Urut dari atas ke bawah)

---

### 1. Navbar

**File:** `src/components/layout/Navbar.jsx`

**Layout:**
- Posisi: **Fixed top**, background putih, `z-50`, shadow halus saat scroll
- Tinggi: `h-16` sampai `h-20`
- Kiri: Logo **Y.A.R** (gambar logo)
- Tengah: Navigation links horizontal
- Kanan: Icon search + icon hamburger menu (mobile)

**Navigation Links:**
```
Home | About Us | Practice Areas | Attorneys | Blog
```

**Behavior:**
- Link aktif (Home) diberi underline tebal hitam di bawah teks
- Hover: underline muncul dengan transisi
- Mobile (< 768px): links disembunyikan, diganti hamburger menu yang membuka sidebar/dropdown
- Scroll: navbar mendapat `shadow-md` saat user scroll ke bawah

**Kode Referensi:**
```jsx
<nav className="fixed top-0 w-full bg-white z-50 transition-shadow">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
    {/* Logo */}
    <img src={logo} alt="YAR Law Firm" className="h-10" />

    {/* Desktop Nav Links */}
    <ul className="hidden md:flex gap-8 text-sm font-medium text-primary">
      <li><a href="/" className="border-b-2 border-black pb-1">Home</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/practice-areas">Practice Areas</a></li>
      <li><a href="/attorneys">Attorneys</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>

    {/* Icons */}
    <div className="flex items-center gap-4">
      <Search className="w-5 h-5" />
      <Menu className="w-5 h-5 md:hidden" />
    </div>
  </div>
</nav>
```

---

### 2. Hero Section (Sticky Background)

**File:** `src/components/home/HeroSection.jsx`

**Layout:**
- **`height: 100vh`** — full viewport, menjadi background sticky
- Background image (skyline kota Jakarta) dengan overlay gradient gelap dari kiri
- Content di sebelah **kiri bawah**, diberi padding bawah ekstra (`pb-32`) agar tidak tertutup content wrapper
- Hero ini **TIDAK** scroll sendiri — ia tetap diam, konten di atasnya yang bergerak

**Konten:**
```
Heading:    "Excellence in Every Legal Step"
Subtitle:   "A modern and sophisticated website representing a professional law firm with strong credibility"
Button:     "Learn more" (dengan arrow icon →)
```

**Styling:**
- Heading: putih, bold, max-width ~600px, line-height tight
- Subtitle: putih/abu terang, font-weight regular, max-width ~500px
- Button: border putih, teks putih, transparent background, hover: bg putih + teks hitam
- Background: `object-cover`, `object-center`

**Kode Referensi:**
```jsx
{/* Sticky wrapper — hero tetap diam di belakang */}
<div className="sticky top-0 z-0 h-screen">
  <section className="relative h-full flex items-end">
    {/* Background Image */}
    <img src={heroBg} className="absolute inset-0 w-full h-full object-cover" />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32 w-full">
      <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-xl">
        Excellence in Every Legal Step
      </h1>
      <p className="text-white/80 mt-4 max-w-lg text-base md:text-lg">
        A modern and sophisticated website representing a professional law firm with strong credibility
      </p>
      <button className="mt-6 border border-white text-white px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition">
        Learn more <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </section>
</div>
```

---

### 3. Achievement Section

**File:** `src/components/home/AchievementSection.jsx`

**Layout:**
- Background: putih
- Padding: `py-16` sampai `py-20`
- Header: judul "Achievement" di kiri + tombol navigasi carousel `<` `>` di kanan judul
- Content: **Carousel horizontal** berisi card achievement

**Dot Indicator:**
- 5 dot kecil berwarna emas/gold (`#C8A862`) di atas judul section sebagai dekorasi
- Pola: `* * * * *` (dot decorative label)

**Achievement Card:**
```
┌──────────────────────────────────┐
│  [Background Image - gelap]      │
│                                  │
│  Judul Bold (putih)              │
│  "Mitra Klinik Terbaik          │
│   Spesialisasi Arbitrase dan    │
│   Alternatif Penyelesaian       │
│   Sengketa"                     │
│                                  │
│  Deskripsi (putih/muted)         │
│  "Lorem ipsum dolor sit..."     │
│                                  │
│               [→] Arrow Button   │
└──────────────────────────────────┘
```

**Data Achievement:**
```js
export const achievements = [
  {
    id: 1,
    title: "Mitra Klinik Terbaik Spesialisasi Arbitrase dan Alternatif Penyelesaian Sengketa",
    description: "Lorem ipsum dolor sit amet consectetur. Erat elit elementum nibh feugiat duis euismod.",
    image: "/images/achievement-1.jpg"
  },
  {
    id: 2,
    title: "Penghargaan Mitra Klinik Terbaik Spesialisasi Kepailitan dan PKPU",
    description: "Lorem ipsum dolor sit amet consectetur. Erat elit elementum nibh feugiat duis euismod.",
    image: "/images/achievement-2.jpg"
  }
]
```

**Card Styling:**
- Border-radius: `rounded-lg`
- Overlay gelap di atas gambar agar teks terbaca
- Arrow button: kotak putih di pojok kanan bawah dengan icon `→`
- Ukuran card: ~50% width di desktop (2 card terlihat), 100% di mobile

**Arrow Navigation Buttons:**
- Kotak kecil `w-10 h-10` dengan border hitam
- Icon `<` dan `>` di dalamnya
- Hover: background hitam, icon putih

---

### 4. Article/Publication Section (Blog)

**File:** `src/components/home/ArticleSection.jsx`

**Layout:**
- Background: putih
- Grid layout **asimetris** (bento-style):

```
Desktop Layout (3 kolom):
┌───────────────┬────────────────────┐
│  Article 1    │                    │
│  (teks only)  │    Article 2       │
│               │    (gambar besar)  │
├───────┬───────┤                    │
│ Art 3 │ Art 4 │                    │
│(small)│(small)├────────────────────┤
│       │       │    Article 5       │
│       │       │    (gambar + teks) │
└───────┴───────┴────────────────────┘
```

**Setiap Article Card berisi:**
```
[Tanggal] · [Kategori "Publication"]
Judul (bold, italic)
Deskripsi singkat
[Optional: Gambar thumbnail]
```

**Data Artikel:**
```js
export const articles = [
  {
    id: 1,
    date: "11 March 2026",
    category: "Publication",
    title: "Lorem ipsum dolor sit amet consectetur",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Commodo hendrerit blandit proin egestas. Etiam pellentesque adipiscing aenean ut.",
    image: null,           // Article 1: teks saja
    size: "medium"
  },
  {
    id: 2,
    date: "11 March 2026",
    category: "Publication",
    title: "Lorem ipsum dolor sit amet consectetur",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Commodo hendrerit blandit proin egestas. Etiam pellentesque adipiscing aenean ut.",
    image: "/images/article-2.jpg",
    size: "large"          // Article 2: gambar besar
  },
  // ... article 3, 4, 5
]
```

**"Browse all article" Button:**
- Posisi: kiri bawah section
- Style: border hitam, teks hitam, icon `→`, background transparan
- Hover: background hitam, teks putih

**Detail Bento Grid (Tailwind):**
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Article 1 - kiri atas */}
  <div className="md:col-span-1 md:row-span-1">...</div>
  {/* Article 2 - kanan atas (besar, span 2 row) */}
  <div className="md:col-span-2 md:row-span-2">...</div>
  {/* Article 3 - kiri bawah kiri */}
  <div className="md:col-span-1 md:row-span-1">...</div>
  {/* Article 4 - kiri bawah kanan */}
  <div className="md:col-span-1 md:row-span-1">...</div>
  {/* Article 5 - kanan bawah */}
  <div className="md:col-span-2 md:row-span-1">...</div>
</div>
```

---

### 5. Our Practice Areas

**File:** `src/components/home/PracticeAreaSection.jsx`

**Layout:**
- Background: `#F5F5F5` (light gray)
- Padding: `py-16` sampai `py-20`

**Dot Indicator:**
- 5 dot gold di atas judul

**Header:**
```
Judul:    "Our Practice Areas"
Subtitle: "Lorem ipsum dolor sit amet consectetur. Dignissim placerat lorem vestibulum volutpat lacus aenean..."
```

**Grid Practice Areas:**
```
Desktop (3 kolom):
┌──────────────────┬──────────────────┬──────────────────┐
│ Commercial       │ Corporate Crime, │ Employment       │
│ Litigation       │ Corruption,      │ Dispute          │
│   →              │ Money Laundering │   →              │
│                  │   →              │                  │
├──────────────────┼──────────────────┼──────────────────┤
│ Business Activity│ Construction     │ State Admin      │
│ Assistance       │                  │ Dispute          │
│   →              │   →              │   →              │
└──────────────────┴──────────────────┴──────────────────┘
```

**Setiap item:**
- Teks nama practice area (font-medium, hitam)
- Arrow `→` di bawah teks
- Tidak ada border/card, hanya teks + arrow
- Hover: teks bergeser atau underline

**Data:**
```js
export const practiceAreas = [
  "Commercial Litigation",
  "Corporate Crime, Corruption, Money Laundering, and General Crimes.",
  "Employment Dispute",
  "Business Activity Assistance",
  "Construction",
  "State Administrative Dispute"
]
```

**"Learn more" Button:**
- Style: background hitam, teks putih, icon `→`
- Border-radius kecil
- Posisi: di bawah grid, rata kiri

---

### 6. Our Expert Attorney

**File:** `src/components/home/AttorneySection.jsx`

**Layout:**
- Background: putih
- Padding: `py-16` sampai `py-20`
- Header: "Our Expert Attorney" + arrow navigation `<` `>` di kanan
- Content: **Carousel horizontal** berisi attorney cards

**Attorney Card:**
```
┌─────────────────────────┐
│                         │
│    [Foto Attorney]      │
│    (portrait, crop)     │
│                         │
│  → (arrow icon overlay) │
├─────────────────────────┤
│  Nama Lengkap + Gelar   │
│  "Partner" (muted)      │
└─────────────────────────┘
```

**Data Attorney:**
```js
export const attorneys = [
  {
    id: 1,
    name: "Mohamad Ivan Falisha, S.H., M.H., C.P.C.L.E.",
    role: "Partner",
    image: "/images/attorney-ivan.jpg"
  },
  {
    id: 2,
    name: "Andi Ramadhani Susanto, S.H.",
    role: "Partner",
    image: "/images/attorney-andi.jpg"
  },
  {
    id: 3,
    name: "Gulam Dalula May Volta, S.H, M.H., CLA.",
    role: "Partner",
    image: "/images/attorney-gulam.jpg"
  },
  {
    id: 4,
    name: "Zamza ..., M.H.",
    role: "Associate",
    image: "/images/attorney-zamza.jpg"
  }
]
```

**Card Styling:**
- Foto: aspect-ratio `3:4`, `object-cover`, grayscale atau normal
- Arrow overlay: icon `→` putih di pojok kiri bawah foto
- Nama: bold, ukuran kecil-medium
- Role: teks muted/gray
- Desktop: tampilkan 3-4 card sekaligus
- Mobile: 1-2 card, swipe horizontal

---

### 7. Trusted by Leading Clients

**File:** `src/components/home/ClientSection.jsx`

**Layout:**
- Background: putih
- Padding: `py-16`

**Dot Indicator:**
- 5 dot gold di atas judul

**Header:**
```
Judul:    "Trusted by Leading Clients"
Subtitle: "We are proud to serve these distinguished clients"
```

**Logo Grid:**
```
Desktop (6 kolom, 2 baris):
┌──────┬──────┬──────┬──────────┬──────────┬──────┐
│Pacific│ GCL │ PLN  │Bank      │ NETZSCH  │ PLN  │
│Cross  │     │      │Hariarta  │          │      │
├──────┼──────┼──────┼──────────┼──────────┼──────┤
│ JAC  │Bank  │Malacca│Jamkrindo│ Syariah  │Bass  │
│      │BJB   │Trust  │         │          │Oil   │
└──────┴──────┴──────┴──────────┴──────────┴──────┘
```

**Styling:**
- Setiap logo: `max-h-12`, grayscale (optional), centered dalam cell
- Grid: `grid-cols-3 md:grid-cols-6`
- Gap: `gap-8` sampai `gap-12`
- Logo alignment: `items-center justify-center`

---

### 8. CTA Section (Call to Action)

**File:** `src/components/home/CTASection.jsx`

**Layout:**
- Background: **hitam gelap** (`#111111`)
- Full-width
- Padding: `py-16` sampai `py-20`
- Content: centered atau rata kiri

**Dot Indicator:**
- 5 dot gold di atas judul

**Konten:**
```
Heading:  "Need Legal Assistance? Contact Us Today!"
Subtitle: "Schedule a free consultation with our experienced attorneys to discuss your legal needs."
Button:   "Contact us now" (background hitam/gelap dengan border, teks putih)
```

**Button Style:**
- Border putih/gray
- Background gelap (lebih gelap dari section)
- Teks putih uppercase/capitalize
- Hover: background putih, teks hitam

---

### 9. Footer

**File:** `src/components/layout/Footer.jsx`

**Layout:**
- Background: **hitam gelap** (`#111111`) - menyatu dengan CTA section
- Padding: `py-12` sampai `py-16`
- Grid 3-4 kolom di desktop, stack di mobile

**Kolom 1 - Company Info:**
```
[Logo Y.A.R]
"YAR Law Firm, established in 2010, provides professional legal services
for corporate and individual clients—from consultation and contracts to
dispute resolution. With a foundation of professionalism and integrity,
we are trusted by many institutions and recognized as one of Hukumonline's
Top 100 Indonesian Law Firms."

📍 Menara Kuningan Floor 8D, Jl. H. R. Rasuna Said No.Kav 5, RT.6/RW.7,
   Kuningan, Kuningan Tim., Kecamatan Setiabudi,
   Kota Jakarta Selatan, DKI Jakarta 12940

📞 Volta: +62 878-7754-0196
   Thareq: +62 858-0887-2026

✉️ lawfirmyar@gmail.com
   yudha_advokat@yahoo.com

🕐 Monday - Friday: 9:00 AM - 5:00 PM
```

**Kolom 2 - Quick Links:**
```
Quick Links
- Home
- About Us
- Practice Areas
- Attorneys
- Blog
- Contact
```

**Kolom 3 - Practice Area:**
```
Practice Area
- Bankruptcy and Suspension of Debt Payment Obligations
- Business Activity Assistance
- Commercial Litigation
- Construction
- Corporate Crime, Corruption, Money Laundering, and General Crimes
- Employment Dispute
```

**Footer Bottom:**
```
"© 2025 Law Firm Yar. All rights reserved."          [Instagram] [YouTube] [Facebook]
```

**Styling:**
- Teks: putih/gray terang (`text-gray-300` sampai `text-gray-400`)
- Links: hover warna putih
- Social icons: circle/outlined, `w-8 h-8`
- Divider line: `border-t border-gray-700` sebelum copyright

---

## Page Assembly (Sticky Hero Layout)

**File:** `src/pages/HomePage.jsx`

```jsx
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/home/HeroSection'
import AchievementSection from '../components/home/AchievementSection'
import ArticleSection from '../components/home/ArticleSection'
import PracticeAreaSection from '../components/home/PracticeAreaSection'
import AttorneySection from '../components/home/AttorneySection'
import ClientSection from '../components/home/ClientSection'
import CTASection from '../components/home/CTASection'
import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <>
      {/* Navbar — fixed di atas segalanya */}
      <Navbar />

      {/* Hero — sticky, tetap diam di belakang saat scroll */}
      <div className="sticky top-0 z-0 h-screen">
        <HeroSection />
      </div>

      {/* Content Wrapper — mengapung naik menutupi hero */}
      <div className="relative z-10 -mt-20 shadow-2xl">
        {/* Section pertama: sudut atas melengkung */}
        <div className="bg-white rounded-t-3xl overflow-hidden">
          <AchievementSection />
          <ArticleSection />
        </div>

        {/* Section dengan bg berbeda tetap seamless */}
        <PracticeAreaSection />   {/* bg: light-gray */}

        <div className="bg-white">
          <AttorneySection />
          <ClientSection />
        </div>

        {/* CTA + Footer menyatu (bg dark) */}
        <div className="bg-[#111111]">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  )
}
```

---

## Responsive Breakpoints

| Breakpoint | Tailwind | Behavior                          |
| ---------- | -------- | --------------------------------- |
| Mobile     | default  | Single column, stacked layout     |
| Tablet     | `md:`    | 2 kolom grid, carousel 2 items    |
| Desktop    | `lg:`    | 3 kolom grid, full layout         |
| Wide       | `xl:`    | Max-width container `max-w-7xl`   |

---

## UI Patterns

### Section Label (Dot Decorator)
Pola berulang: **5 dot emas kecil** di atas setiap judul section.

```jsx
function SectionLabel() {
  return (
    <div className="flex gap-1.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-[#C8A862]" />
      ))}
    </div>
  )
}
```

### Arrow Navigation Buttons
Digunakan di Achievement dan Attorney carousel.

```jsx
function ArrowButton({ direction = 'right', onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 border border-black flex items-center justify-center
                 hover:bg-black hover:text-white transition"
    >
      {direction === 'left' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  )
}
```

### Swiper Carousel Config
```jsx
<Swiper
  spaceBetween={24}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn' }}
>
  {items.map(item => (
    <SwiperSlide key={item.id}>...</SwiperSlide>
  ))}
</Swiper>
```

---

## Routing & Placeholder Pages

**File:** `src/App.jsx`

Saat inisiasi project, semua route sudah didaftarkan meskipun halaman masih kosong.

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import PracticeAreaDetailPage from './pages/PracticeAreaDetailPage'
import AttorneysPage from './pages/AttorneysPage'
import AttorneyDetailPage from './pages/AttorneyDetailPage'
import BlogPage from './pages/BlogPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetailPage />} />
        <Route path="/attorneys" element={<AttorneysPage />} />
        <Route path="/attorneys/:slug" element={<AttorneyDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

**Placeholder page template** (semua page selain Home pakai pola ini dulu):

```jsx
// Contoh: src/pages/AboutUsPage.jsx
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-400">About Us — Coming Soon</h1>
      </main>
      <Footer />
    </>
  )
}
```

**Daftar placeholder pages yang harus dibuat saat inisiasi:**

| File                          | Route                      | Judul Placeholder              |
| ----------------------------- | -------------------------- | ------------------------------ |
| `AboutUsPage.jsx`             | `/about`                   | About Us — Coming Soon         |
| `PracticeAreasPage.jsx`       | `/practice-areas`          | Practice Areas — Coming Soon   |
| `PracticeAreaDetailPage.jsx`  | `/practice-areas/:slug`    | Practice Area Detail — Coming Soon |
| `AttorneysPage.jsx`           | `/attorneys`               | Attorneys — Coming Soon        |
| `AttorneyDetailPage.jsx`      | `/attorneys/:slug`         | Attorney Detail — Coming Soon  |
| `BlogPage.jsx`                | `/blog`                    | Blog — Coming Soon             |

---

## Key Implementation Notes

1. **Sticky Hero (PALING PENTING):**
   - Hero menggunakan `sticky top-0 z-0 h-screen` — tetap diam di belakang
   - Content wrapper menggunakan `relative z-10 -mt-20` — scroll naik menutupi hero
   - Section pertama (Achievement) harus `rounded-t-3xl` untuk efek kartu mengapung
   - Tambahkan `shadow-2xl` pada content wrapper untuk kedalaman visual
   - Referensi visual: simmons-simmons.com
2. **Navbar:** `fixed top-0 z-50` — selalu di atas hero DAN content. Gunakan `useEffect` + scroll listener untuk toggle shadow + background opacity
3. **Navbar transparency (optional enhancement):** Saat masih di area hero, navbar bisa transparan. Saat content wrapper sudah menutupi hero, navbar berubah jadi bg-white + shadow
4. **Hero overlay:** Gunakan CSS gradient overlay (`bg-gradient-to-r from-black/70`) di atas gambar agar teks tetap terbaca
5. **Bento grid articles:** Gunakan CSS Grid dengan `grid-row` dan `grid-column` span, BUKAN flexbox
6. **Carousel:** Gunakan Swiper.js dengan custom navigation buttons (bukan default swiper nav)
7. **Client logos:** Bisa diberi filter `grayscale` dan hover `grayscale(0)` untuk efek interaktif
8. **CTA + Footer:** Background hitam menyatu, tidak ada gap/border di antaranya
9. **All images:** Gunakan `loading="lazy"` untuk performa
10. **Container:** Gunakan `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` secara konsisten di semua section

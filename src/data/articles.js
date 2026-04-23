import { getArticleContentBySlug } from './articleContentsByLocale'

const baseArticles = [
  {
    id: 1,
    slug: 'mendiagnosa-masalah-hukum-dengan-menyusun-legal-opinion-yang-benar',
    'source-link': 'https://www.hukumonline.com/berita/a/mendiagnosa-masalah-hukum-dengan-menyusun-legal-opinion-yang-benar-lt63e0bc88bc8ef/',
    date: '6 Februari 2023',
    author: 'Syamsul Huda Yudha, S.H., M.H.',
    category: 'Publication',
    title: 'Mendiagnosa Masalah Hukum dengan Menyusun Legal Opinion yang Benar',
    excerpt:
      'Pendapat hukum adalah pandangan yang dikaji baik secara parsial, imparsial, gradual, maupun krusial khusus menyangkut permasalahan yang dialami oleh klien.',
    image: 'https://ik.imagekit.io/mindwalker/yarlawfirm/Articles-Asset/mendiagnosa-masalah-hukum-dengan-menyusun-legal-opinion-yang-benar.png?updatedAt=1775901793377',
    size: 'medium',
  },
  {
    id: 2,
    slug: 'era-globalisasi-dapatkah-lawyer-survive-tanpa-kuasai-bahasa-asing',
    'source-link': 'https://www.hukumonline.com/berita/a/era-globalisasi--dapatkah-lawyer-survive-tanpa-kuasai-bahasa-asing-lt645b774a8529d/',
    date: '10 Mei 2023',
    author: 'Ferinda K Fachri',
    category: 'Publication',
    title: 'Era Globalisasi, Dapatkah Lawyer Survive Tanpa Kuasai Bahasa Asing?',
    excerpt:
      'Meski masih memungkinkan bagi lawyer hanya menguasai satu bahasa (Indonesia), namun kefasihan berbahasa asing menjadi hal yang diperlukan bila hendak mengembangkan kariernya di masa mendatang.',
    image: 'https://images.hukumonline.com/frontend/lt645b774a8529d/lt645b80e65111b.jpg',
    size: 'medium',
  },
  {
    id: 3,
    slug: 'cerita-sukses-berkarier-di-kantor-hukum-ternama-from-a-to-z',
    'source-link': '',
    date: '16 Mei 2023',
    author: 'Admin',
    category: 'Publication',
    title: 'Cerita Sukses Berkarier di Kantor Hukum Ternama, From A to Z',
    excerpt:
      'Salah satu impian yang diidamkan bagi lulusan fakultas hukum adalah profesi advokat (lawyer). Untuk membangun karier sebagai lawyer pada sebuah kantor hukum, biasanya bermula dari magang atau trainee associate.',
    image: 'https://lawfirmyar.id/storage/blog/WHXqRcnQffDuDlWjbt1YjbjcC03fyELfrzxax3iZ.webp',
    size: 'medium',
  },
  {
    id: 4,
    slug: 'apakah-pemberian-parsel-termasuk-gratifikasi',
    'source-link': 'https://www.hukumonline.com/klinik/a/apakah-pemberian-parsel-termasuk-gratifikasi-lt576a81f7bfa15/',
    date: '23 Mei 2023',
    author: 'Syamsul Huda Yudha, S.H., M.H.',
    category: 'Publication',
    title: 'Apakah Pemberian Parsel Termasuk Gratifikasi?',
    excerpt:
      'Menurut Penjelasan Pasal 12B ayat (1) UU 20/2001, yang dimaksud dengan gratifikasi adalah pemberian dalam arti luas yakni sebuah pemberian uang, barang, rabat atau diskon, komisi, pinjaman tanpa bunga, tiket perjalanan, fasilitas penginapan, perjalanan wisata, pengobatan cuma-cuma, dan fasilitas lainnya.',
    image: 'https://lawfirmyar.id/storage/galleries/cAjPrx9C2bN8jvnVmXcZ1ItpJwlRKnLSRDt72pmE.webp',
    size: 'small',
  },
  {
    id: 5,
    slug: 'prosedur-pemeriksaan-keberatan-atas-putusan-kppu-di-pengadilan-niaga',
    'source-link': 'https://www.hukumonline.com/klinik/a/prosedur-pemeriksaan-keberatan-atas-putusan-kppu-di-pengadilan-niaga-cl2789/',
    date: '26 Juni 2023',
    author: 'Syamsul Huda Yudha, S.H., M.H.',
    category: 'Publication',
    title: 'Prosedur Pemeriksaan Keberatan atas Putusan KPPU di Pengadilan Niaga',
    excerpt:
      'Menjawab pertanyaan Anda terkait dengan hukum acara atau prosedur keberatan atas putusan KPPU, hal ini telah diatur di dalam Perma 3/2021.',
    image: 'https://lawfirmyar.id/storage/galleries/3vye1OCoPaPo2Xg6baDYUroSeJysA4DGaQ1LSc8n.webp',
    size: 'medium',
  },
  {
    id: 6,
    slug: 'ganti-direksi-kepada-siapa-utang-pt-bisa-ditagih',
    'source-link': 'https://www.hukumonline.com/klinik/a/ganti-direksi--kepada-siapa-utang-pt-bisa-ditagih-lt5d11ab050c62c/',
    date: '01 Oktober 2024',
    author: 'Syamsul Huda Yudha, S.H., M.H.',
    category: 'Publication',
    title: 'Ganti Direksi, Kepada Siapa Utang PT Bisa Ditagih?',
    excerpt:
      'Perjanjian yang dibuat dan diatasnamakan H selaku direktur perseroan terbatas (PT) A sebelum diberhentikan pada prinsipnya telah sesuai dengan ketentuan dalam UU PT.',
    image: 'https://lawfirmyar.id/storage/galleries/5WDur4ZJT56JzlPSAFv7pKk5dYEvmFZmajqaDMwu.webp',
    size: 'medium',
  },
  {
    id: 7,
    slug: 'cara-mengajukan-permohonan-eksekusi-putusan-arbitrase',
    'source-link': 'https://www.hukumonline.com/klinik/a/eksekusi-putusan-arbitrase-lt6724ece040be3/',
    date: '1 November 2024',
    author: 'Syamsul Huda Yudha, S.H., M.H.',
    category: 'Insights',
    title: 'Cara Mengajukan Permohonan Eksekusi Putusan Arbitrase',
    excerpt:
      'Definisi arbitrase menurut Pasal 1 angka 1 UU AAPS adalah cara penyelesaian suatu sengketa perdata di luar peradilan umum yang didasarkan pada perjanjian arbitrase yang dibuat secara tertulis oleh para pihak yang bersengketa.',
    image: 'https://lawfirmyar.id/storage/galleries/KsHOcwbi96FTVdIxox0RTGX5jpm3Rs8UwNNW8X7B.webp',
    size: 'small',
  },
  {
    id: 8,
    slug: 'prosedur-akuisisi-perusahaan-yang-pailit',
    'source-link': 'https://www.hukumonline.com/klinik/a/prosedur-akuisisi-perusahaan-yang-pailit-lt67d38243266b1/',
    date: '13 Maret 2025',
    author: 'Syamsul Huda Yudha, S.H., M.H.',
    category: 'Publication',
    title: 'Prosedur Akuisisi Perusahaan yang Pailit',
    excerpt:
      'Akuisisi ini dilakukan dengan cara pengambilalihan saham yang telah dikeluarkan dan/atau akan dikeluarkan oleh perseroan melalui direksi atau langsung dari pemegang saham.',
    image: 'https://lawfirmyar.id/storage/galleries/ervdu2qyGHydprhYedGoxFJ2qokRT4cvtBialas1.webp',
    size: 'large',
  },
  {
    id: 9,
    slug: 'apa-saja-hak-hak-kreditur-dalam-kepailitan',
    'source-link': 'https://www.hukumonline.com/klinik/a/apa-saja-hak-hak-kreditur-dalam-kepailitan-lt67d8b98e3fa31/',
    date: '17 Maret 2025',
    author: 'Syamsul Huda Yudha, S.H., M.H.',
    category: 'Publication',
    title: 'Apa Saja Hak-Hak Kreditur dalam Kepailitan?',
    excerpt:
      'Secara singkat, kreditur preferen adalah kreditur yang menurut undang-undang harus didahulukan pembayaran piutangnya, seperti pemegang privilege, pemegang hak retensi, dan sebagainya.',
    image: 'https://lawfirmyar.id/storage/galleries/HPOA6k3KBsW5QksTJJCUUVENsNKXeKjxmParBSkr.webp',
    size: 'medium',
  },
  {
    id: 10,
    slug: 'lemahnya-perlindungan-hukum-debitur-atas-penetapan-nilai-limit-lelang-pada-pmk-122-2023',
    'source-link': 'https://www.hukumonline.com/berita/a/lemahnya-perlindungan-hukum-debitur-atas-penetapan-nilai-limit-lelang-pada-pmk-122-2023-lt6976f664efb24',
    date: '26 Januari 2026',
    author: 'Hanifah Dwi Jayanti',
    category: 'Publication',
    title: 'Lemahnya Perlindungan Hukum Debitur atas Penetapan Nilai Limit Lelang Pada PMK 122/2023',
    excerpt:
      'Pembenahan regulasi mengenai penentuan nilai limit lelang menjadi kebutuhan mendesak agar kepastian hukum dan keadilan substantif benar-benar terwujud.',
    image: 'https://images.hukumonline.com/frontend/lt6976f664efb24/lt6976f704b5ea3.jpg',
    size: 'medium',
  },
  {
    id: 11,
    slug: 'tantangan-perlindungan-debitor-dalam-penerapan-nilai-limit-lelang',
    'source-link': 'https://www.hukumonline.com/berita/a/tantangan-perlindungan-debitor-dalam-penerapan-nilai-limit-lelang-lt69782c688da4e/',
    date: '27 Januari 2026',
    author: 'Admin',
    category: 'Publication',
    title: 'Tantangan Perlindungan Debitor dalam Penerapan Nilai Limit Lelang',
    excerpt:
      'Focus Group Discussion ini mengupas secara mendalam praktik sistem lelang KPKNL, khususnya terkait dengan penetapan nilai limit lelang objek dan pengaturan batas kewajaran nilai limit sebagaimana diatur dalam PMK No. 122 Tahun 2023.',
    image: 'https://images.hukumonline.com/frontend/lt69782c688da4e/lt6978301456730.jpg',
    size: 'medium',
  },
]

const enArticleOverridesBySlug = {
  'mendiagnosa-masalah-hukum-dengan-menyusun-legal-opinion-yang-benar': {
    date: '6 February 2023',
    category: 'Publication',
    title: 'Diagnosing Legal Issues Through a Proper Legal Opinion',
    excerpt: 'A legal opinion is a structured legal assessment that helps clients understand legal issues and choose the right legal action.'
  },
  'era-globalisasi-dapatkah-lawyer-survive-tanpa-kuasai-bahasa-asing': {
    date: '10 May 2023',
    category: 'Publication',
    title: 'In a Global Era, Can Lawyers Survive Without Foreign Languages?',
    excerpt: 'Lawyers may still work with only Indonesian, but foreign language fluency is increasingly important for long-term career growth.'
  },
  'cerita-sukses-berkarier-di-kantor-hukum-ternama-from-a-to-z': {
    date: '16 May 2023',
    category: 'Publication',
    title: 'Career Success at a Top Law Firm, From A to Z',
    excerpt: 'Many law graduates aim to become advocates, and legal careers in leading firms often begin through internships or trainee programs.'
  },
  'apakah-pemberian-parsel-termasuk-gratifikasi': {
    date: '23 May 2023',
    category: 'Publication',
    title: 'Is Sending Gift Packages Considered Gratification?',
    excerpt: 'Under Indonesian anti-corruption law, gratification is broadly defined and may include money, goods, discounts, travel facilities, and more.'
  },
  'prosedur-pemeriksaan-keberatan-atas-putusan-kppu-di-pengadilan-niaga': {
    date: '26 June 2023',
    category: 'Publication',
    title: 'Procedure for Examining Objections to KPPU Decisions in the Commercial Court',
    excerpt: 'Objection procedures against KPPU decisions are regulated under Supreme Court Regulation No. 3/2021 with specific filing requirements and timelines.'
  },
  'ganti-direksi-kepada-siapa-utang-pt-bisa-ditagih': {
    date: '1 October 2024',
    category: 'Publication',
    title: 'Change of Directors: Who Is Liable for Company Debt?',
    excerpt: 'A change of company directors generally does not eliminate obligations validly undertaken by the company as a legal entity.'
  },
  'cara-mengajukan-permohonan-eksekusi-putusan-arbitrase': {
    date: '1 November 2024',
    category: 'Insights',
    title: 'How to File an Arbitration Award Enforcement Request',
    excerpt: 'Arbitration is a civil dispute resolution mechanism outside general courts, based on written arbitration agreements between parties.'
  },
  'prosedur-akuisisi-perusahaan-yang-pailit': {
    date: '13 March 2025',
    category: 'Publication',
    title: 'Procedure for Acquiring a Bankrupt Company',
    excerpt: 'Acquisitions can be carried out through share takeovers that result in transfer of control, including in bankruptcy restructuring contexts.'
  },
  'apa-saja-hak-hak-kreditur-dalam-kepailitan': {
    date: '17 March 2025',
    category: 'Publication',
    title: 'What Are Creditors’ Rights in Bankruptcy?',
    excerpt: 'Preferred, secured, and concurrent creditors each hold different rights and priority positions in bankruptcy proceedings.'
  },
  'lemahnya-perlindungan-hukum-debitur-atas-penetapan-nilai-limit-lelang-pada-pmk-122-2023': {
    date: '26 January 2026',
    category: 'Publication',
    title: 'Weak Debtor Protection in Auction Reserve Value Determination Under PMK 122/2023',
    excerpt: 'Regulatory refinement on auction reserve value determination is urgently needed to ensure legal certainty and substantive fairness.'
  },
  'tantangan-perlindungan-debitor-dalam-penerapan-nilai-limit-lelang': {
    date: '27 January 2026',
    category: 'Publication',
    title: 'Challenges in Debtor Protection in the Implementation of Auction Reserve Values',
    excerpt: 'This focus group discussion examined KPKNL auction practices, especially reserve value standards and legal protection issues under PMK 122/2023.'
  },
}

function normalizeLanguage(language = 'id') {
  return String(language).toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function getArticles(language = 'id') {
  const normalizedLanguage = normalizeLanguage(language)
  const contentBySlug = getArticleContentBySlug(normalizedLanguage)

  return [...baseArticles]
    .sort((a, b) => b.id - a.id)
    .map((article) => {
      const localizedOverride = normalizedLanguage === 'en'
        ? enArticleOverridesBySlug[article.slug] || null
        : null

      return {
        ...article,
        ...(localizedOverride || {}),
        content: contentBySlug[article.slug] ?? [],
      }
    })
}

export function getArticleBySlug(slug, language = 'id') {
  if (!slug) return null
  return getArticles(language).find((article) => article.slug === slug) || null
}

export const articles = getArticles('id')


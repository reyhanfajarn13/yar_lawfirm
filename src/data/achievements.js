const baseAchievements = [
  {
    id: 1,
    title: 'Jelang Hukumonline Legal Clinic Awards 2025, Intip Bocoran Nominasinya!',
    description:
      'Kami berhasil meraih penghargaan bergengsi sebagai mitra klinik terbaik dalam bidang arbitrase internasional dan alternatif penyelesaian sengketa selama tiga tahun berturut-turut.',
    image: 'https://lawfirmyar.id/storage/galleries/SbK3dGVOvXid3XvO5UWPbgywFg52xoDuHUvZiqTq.webp',
    'source-link': 'https://www.hukumonline.com/berita/a/jelang-hukumonline-legal-clinic-awards-2025--intip-bocoran-nominasinya-lt69268c4ca4ef9/?page=2',
  },
  {
    id: 2,
    title: 'Penghargaan Mitra Klinik Terbaik Spesialisasi Kepailitan dan PKPU',
    description:
      'Diakui sebagai firma hukum terdepan dalam penanganan kasus kepailitan dan penundaan kewajiban pembayaran utang di tingkat nasional.',
    image: 'https://lawfirmyar.id/storage/galleries/JArpozDnIxDudfoEsAjBV3RrR75VsW1vDiYNH43f.webp',
    'source-link': 'https://awards.hukumonline.com/legal-clinic-awards-2025',
  },
  {
    id: 3,
    title: 'Penghargaan Golden Alumni 2025',
    description:
      'Penghargaan bergengsi yang diberikan kepada alumni terbaik dari Fakultas Hukum Universitas Brawijaya atas kontribusi luar biasa dalam bidang hukum dan pelayanan masyarakat.',
    image: 'https://lawfirmyar.id/storage/galleries/CCWtFxWA3XwTrnMBVTpqGKVPM7zhK9eGQtTR5wHI.webp',
    'source-link': 'https://awards.hukumonline.com/golden-alumni-2025?u=fakultas-hukum-universitas-brawijaya',
  },
  {
    id: 4,
    title: 'Peringkat 64 Midsize Full Service 2024 dan Peringkat 145 Indonesia Law Firms 2025',
    description:
      'Diakui sebagai salah satu firma hukum terbaik di Indonesia dengan peringkat 64 dalam kategori Midsize Full Service pada tahun 2024 dan peringkat 145 dalam kategori Indonesia Law Firms pada tahun 2025.',
    image: 'https://lawfirmyar.id/storage/galleries/hO4grPgDfkX6N9GrQAyNOrG08yMFa8qhKHa5xpun.webp',
    'source-link': 'https://awards.hukumonline.com/top-100-law-firms-2025/top-100-indonesian-law-firms-2025/yar-law-firm',
  },
  {
    id: 5,
    title: 'Peringkat 164 Top Indonesian Law Firms 2024 dan Peringkat 79 Midsize Service Law Firms 2024',
    description:
      'Diakui sebagai salah satu firma hukum terbaik di Indonesia dengan peringkat 164 dalam kategori Top Indonesian Law Firms pada tahun 2024 dan peringkat 79 dalam kategori Midsize Service Law Firms pada tahun 2024.',
    image: 'https://lawfirmyar.id/storage/galleries/dPR5xat7bwsVTBgk5TK7dISLZXoXyYvr5NhU9SMr.webp',
    'source-link': 'https://awards.hukumonline.com/top-100-law-firms-2024/yar-law-firm',
  },
  {
    id: 6,
    title: 'Peringkat 157 Top Indonesian Law Firms 2023',
    description:
      'Diakui sebagai salah satu firma hukum terbaik di Indonesia dengan peringkat 157 dalam kategori Top Indonesian Law Firms pada tahun 2023.',
    image: 'https://lawfirmyar.id/storage/galleries/dPR5xat7bwsVTBgk5TK7dISLZXoXyYvr5NhU9SMr.webp',
    'source-link': 'https://awards.hukumonline.com/top-100-law-firms-2023',
  },
]

const enAchievementOverridesById = {
  1: {
    title: 'Ahead of the Hukumonline Legal Clinic Awards 2025, Here Is a Sneak Peek at the Nominees!',
    description:
      'We earned a prestigious recognition as the best clinic partner in international arbitration and alternative dispute resolution for three consecutive years.',
  },
  2: {
    title: 'Best Clinic Partner Award in Bankruptcy and PKPU Specialization',
    description:
      'Recognized as a leading law firm in handling bankruptcy and suspension of debt payment obligation matters at the national level.',
  },
  3: {
    title: 'Golden Alumni Award 2025',
    description:
      'A prestigious award granted to top alumni of the Faculty of Law, Universitas Brawijaya, for outstanding contributions in legal practice and public service.',
  },
  4: {
    title: 'Rank 64 Midsize Full Service 2024 and Rank 145 Indonesia Law Firms 2025',
    description:
      'Recognized as one of Indonesia\'s leading law firms, ranked 64 in the Midsize Full Service category in 2024 and ranked 145 in the Indonesia Law Firms category in 2025.',
  },
  5: {
    title: 'Rank 164 Top Indonesian Law Firms 2024 and Rank 79 Midsize Service Law Firms 2024',
    description:
      'Recognized as one of Indonesia\'s leading law firms, ranked 164 in the Top Indonesian Law Firms category in 2024 and ranked 79 in the Midsize Service Law Firms category in 2024.',
  },
  6: {
    title: 'Rank 157 Top Indonesian Law Firms 2023',
    description:
      'Recognized as one of Indonesia\'s leading law firms, ranked 157 in the Top Indonesian Law Firms category in 2023.',
  },
}

function normalizeLanguage(language = 'id') {
  return String(language).toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function getAchievements(language = 'id') {
  const normalizedLanguage = normalizeLanguage(language)

  return baseAchievements.map((achievement) => {
    if (normalizedLanguage !== 'en') return achievement

    return {
      ...achievement,
      ...(enAchievementOverridesById[achievement.id] || {}),
    }
  })
}

export const achievements = getAchievements('id')

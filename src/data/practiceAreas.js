const basePracticeAreas = [
  {
    id: 1,
    name: 'Commercial Litigation',
    slug: 'commercial-litigation',
    excerpt:
      'YAR Law Firm has extensive experience in commercial litigation, from conducting negotiations, executing contracts, and terminating contracts (if necessary), ensuring legal interests are protected and legal risks mitigated, and representing clients in courts including district, corruption, administrative, commercial, and industrial courts, as well as appeals (high court) and cassation/review (Supreme Court), and in arbitration at the National Arbitration Board (BANI).',
    howWeCanHelpYou: [
      'Personalized legal strategy',
      'Clear Communication',
      'Skilled Representation',
      'Proven Results',
    ],
  },
  {
    id: 2,
    name: 'Corporate Crime, Corruption, Money Laundering, and General Crimes',
    slug: 'corporate-crime',
    excerpt:
      "YAR Law Firm has extensive experience assisting clients who are suspects or defendants in corruption cases, including at the corruption court, appeals in the high court, and cassation/review at the Supreme Court. We provide legal consultation and support throughout the investigation and prosecution processes conducted by the police, prosecutor's office, and the Corruption Eradication Commission (KPK), including representation in court for corruption and money laundering offenses.",
    howWeCanHelpYou: [
      'Personalized legal strategy',
      'Clear Communication',
      'Skilled Representation',
      'Proven Results',
    ],
  },
  {
    id: 3,
    name: 'Employment Dispute',
    slug: 'employment-dispute',
    excerpt:
      'YAR Law Firm has extensive experience assisting clients with employment documentation compliance, including work contracts, employment agreements, and collective labor agreements. We also provide legal consultation and support for disputes with employees, whether at the bipartite, tripartite levels, or in industrial court.',
    howWeCanHelpYou: [
      'Personalized legal strategy',
      'Clear Communication',
      'Skilled Representation',
      'Proven Results',
    ],
  },
  {
    id: 4,
    name: 'Business Activity Assistance',
    slug: 'business-activity-assistance',
    excerpt:
      'YAR Law Firm provides comprehensive legal assistance to private and public companies, including SOEs and their subsidiaries. Our services include legal consultations, contract preparation, and ensuring compliance and protection of client interests. With five years of experience supporting a gas sector SOE in various divisions, banking & financial sector, and insurance. We offer risk mapping, issue resolution, and legal audits. We also provide support during summons from police, prosecutors, and relevant agencies.',
    howWeCanHelpYou: [
      'Personalized legal strategy',
      'Clear Communication',
      'Skilled Representation',
      'Proven Results',
    ],
  },
  {
    id: 5,
    name: 'Construction',
    slug: 'construction',
    excerpt:
      'YAR Law Firm assists clients throughout all stages of project activities, from procurement and contract negotiation to execution and termination. We ensure compliance with Indonesian construction law and HSE standards and are experienced with FIDIC contracts and BOT/BOOT agreements used in infrastructure projects.',
    howWeCanHelpYou: [
      'Personalized legal strategy',
      'Clear Communication',
      'Skilled Representation',
      'Proven Results',
    ],
  },
  {
    id: 6,
    name: 'State Administrative Dispute',
    slug: 'state-administrative-dispute',
    excerpt:
      'YAR Law Firm has extensive experience representing clients in state administrative court disputes related to the issuance of state administrative decisions, such as HGB certificates, HGU certificates, property rights, business activity permits, and other decisions, whether as plaintiffs or defendants.',
    howWeCanHelpYou: [
      'Personalized legal strategy',
      'Clear Communication',
      'Skilled Representation',
      'Proven Results',
    ],
  },
  {
    id: 7,
    name: 'Bankruptcy and Suspension of Debt Payment Obligations',
    slug: 'bankruptcy-suspension-debt-payment',
    excerpt:
      'YAR Law Firm has extensive experience representing clients as creditors or debtors in bankruptcy and debt restructuring applications before local commercial courts.',
    howWeCanHelpYou: [
      'Personalized legal strategy',
      'Clear Communication',
      'Skilled Representation',
      'Proven Results',
    ],
  },
]

const idPracticeAreaOverridesBySlug = {
  'commercial-litigation': {
    name: 'Litigasi Komersial',
    excerpt:
      'YAR Law Firm memiliki pengalaman luas dalam litigasi komersial, mulai dari negosiasi, pelaksanaan kontrak, hingga pengakhiran kontrak (jika diperlukan), guna memastikan kepentingan hukum klien terlindungi dan risiko hukum termitigasi. Kami mewakili klien di berbagai pengadilan, termasuk pengadilan negeri, tipikor, tata usaha negara, niaga, dan hubungan industrial, serta upaya banding (pengadilan tinggi), kasasi/peninjauan kembali (Mahkamah Agung), dan arbitrase di Badan Arbitrase Nasional Indonesia (BANI).',
  },
  'corporate-crime': {
    name: 'Kejahatan Korporasi, Korupsi, Pencucian Uang, dan Tindak Pidana Umum',
    excerpt:
      'YAR Law Firm berpengalaman mendampingi klien sebagai saksi, tersangka, maupun terdakwa dalam perkara korupsi, termasuk di pengadilan tipikor, banding di pengadilan tinggi, serta kasasi/peninjauan kembali di Mahkamah Agung. Kami memberikan konsultasi dan pendampingan hukum sejak tahap penyelidikan hingga penuntutan oleh kepolisian, kejaksaan, dan Komisi Pemberantasan Korupsi (KPK), termasuk representasi di persidangan untuk perkara korupsi dan tindak pidana pencucian uang.',
  },
  'employment-dispute': {
    name: 'Sengketa Ketenagakerjaan',
    excerpt:
      'YAR Law Firm berpengalaman membantu klien dalam kepatuhan dokumen ketenagakerjaan, termasuk perjanjian kerja, peraturan perusahaan, dan perjanjian kerja bersama. Kami juga memberikan konsultasi dan pendampingan hukum dalam sengketa dengan pekerja, baik pada tahap bipartit, tripartit, maupun pada proses persidangan di pengadilan hubungan industrial.',
  },
  'business-activity-assistance': {
    name: 'Pendampingan Aktivitas Bisnis',
    excerpt:
      'YAR Law Firm menyediakan pendampingan hukum menyeluruh bagi perusahaan swasta maupun publik, termasuk BUMN dan anak perusahaannya. Layanan kami meliputi konsultasi hukum, penyusunan kontrak, serta memastikan kepatuhan dan perlindungan kepentingan klien. Dengan pengalaman mendampingi BUMN sektor gas, sektor perbankan, keuangan, dan asuransi, kami membantu pemetaan risiko, penyelesaian isu hukum, audit hukum, serta pendampingan saat terdapat panggilan dari kepolisian, kejaksaan, dan instansi terkait.',
  },
  construction: {
    name: 'Konstruksi',
    excerpt:
      'YAR Law Firm mendampingi klien pada seluruh tahapan kegiatan proyek, mulai dari pengadaan, negosiasi kontrak, pelaksanaan, hingga pengakhiran kontrak. Kami memastikan kepatuhan terhadap hukum konstruksi Indonesia serta standar HSE, dan berpengalaman menangani kontrak FIDIC serta skema BOT/BOOT pada proyek infrastruktur.',
  },
  'state-administrative-dispute': {
    name: 'Sengketa Tata Usaha Negara',
    excerpt:
      'YAR Law Firm memiliki pengalaman luas mewakili klien dalam sengketa tata usaha negara terkait penerbitan keputusan tata usaha negara, seperti sertifikat HGB, sertifikat HGU, hak milik, izin kegiatan usaha, dan keputusan administratif lainnya, baik sebagai penggugat maupun tergugat.',
  },
  'bankruptcy-suspension-debt-payment': {
    name: 'Kepailitan dan Penundaan Kewajiban Pembayaran Utang',
    excerpt:
      'YAR Law Firm berpengalaman mewakili klien sebagai kreditur maupun debitur dalam permohonan kepailitan dan restrukturisasi utang di pengadilan niaga setempat.',
  },
}

const idHowWeCanHelpYou = [
  'Strategi hukum yang personal',
  'Komunikasi yang jelas',
  'Representasi yang andal',
  'Hasil yang terbukti',
]

function normalizeLanguage(language = 'id') {
  return String(language).toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function getPracticeAreas(language = 'id') {
  const normalizedLanguage = normalizeLanguage(language)

  if (normalizedLanguage === 'en') return [...basePracticeAreas]

  return basePracticeAreas.map((area) => ({
    ...area,
    ...(idPracticeAreaOverridesBySlug[area.slug] || {}),
    howWeCanHelpYou: idHowWeCanHelpYou,
  }))
}

export function getPracticeAreaBySlug(slug, language = 'id') {
  if (!slug) return null
  return getPracticeAreas(language).find((area) => area.slug === slug) || null
}

export const practiceAreas = getPracticeAreas('id')

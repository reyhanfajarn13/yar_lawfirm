const founderByLocale = {
  id: {
    name: 'Syamsul Huda Yudha, S.H., M.H.',
    title: 'Dari Meja Syamsul Huda Yudha, S.H., M.H.',
    image:
      'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/aboutus-founder-asset.webp',
    paragraphs: [
      'Yudha adalah Managing Alliances sekaligus pendiri YAR Law Firm - Attorneys at Law. Ia meraih gelar sarjana hukum dari Universitas Brawijaya, menyelesaikan program magister di Universitas Gadjah Mada pada 2019, dan kini sedang menempuh program doktoral di Brawijaya. Ia merupakan anggota DPN PERADI SAI dan menjabat sebagai Vice Committee of Strategic Partnerships.',
      'Yudha memulai kariernya di kantor hukum Jakarta, menangani sengketa komersial di Pengadilan Negeri, Pengadilan Tinggi, dan Mahkamah Agung, serta arbitrase di BANI. Ia berpengalaman menangani perkara korupsi sebagai litigasi lawyer dan memberikan pendampingan kepada korporasi domestik maupun internasional, termasuk PLN Group, Bank BJB, Jamkrindo Syariah, serta perusahaan di sektor minyak, gas, dan nikel.',
    ],
    highlights: [
      'Nasihat hukum yang tepat',
      'Pengacara berpengalaman',
      'Pendekatan berfokus pada klien',
      'Rekam jejak terbukti',
    ],
  },
  en: {
    name: 'Syamsul Huda Yudha, S.H., M.H.',
    title: 'From the Desk of Syamsul Huda Yudha, S.H., M.H.',
    image:
      'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/aboutus-founder-asset.webp',
    paragraphs: [
      'Yudha is Managing Alliances and founder of YAR Law Firm - Attorneys at Law. He earned his law degree from Brawijaya University, completed his master\'s at Gadjah Mada University in 2019, and is now pursuing a doctorate at Brawijaya. He is a member of DPN PERADI SAI and serves as Vice Committee of Strategic Partnerships.',
      'Yudha began his career at a Jakarta law firm, handling commercial disputes across District, High, and Supreme Courts, as well as arbitration at BANI. He has represented corruption cases as a litigation lawyer and advised domestic and international corporations, including PLN Group, Bank BJB, Jamkrindo Syariah, and companies in the oil, gas, and nickel industries.',
    ],
    highlights: [
      'Expert Legal Advice',
      'Experienced Attorneys',
      'Client-Focused Approach',
      'Proven Track Record',
    ],
  },
}

function normalizeLanguage(language = 'id') {
  return String(language).toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function getFounder(language = 'id') {
  return founderByLocale[normalizeLanguage(language)] || founderByLocale.id
}

export const founder = getFounder('id')

const aboutStoryByLocale = {
  id: {
    title: 'Cerita Kami',
    leftParagraphs: [
      'YAR Law Firm didirikan pada tahun 2010 oleh Syamsul Huda Yudha, S.H., M.H., Azhar Rahim Rivai, S.H., M.H., dan Teuku Raja Rajuandar, S.H., serta berbasis di Jakarta, Indonesia. YAR Law Firm dibangun di atas nilai kepercayaan, profesionalisme, dan keandalan.',
      'Kami menjunjung standar profesional tertinggi dengan menghadirkan solusi hukum yang efektif, efisien, dan komprehensif sesuai kebutuhan klien. Kami mengutamakan integritas dan ketelitian dalam menangani persoalan hukum yang kompleks, sehingga setiap strategi hukum yang kami berikan bersifat tepat guna dan praktis.',
      'YAR Law Firm telah memperoleh kepercayaan dari berbagai klien, termasuk instansi pemerintah, badan usaha milik negara, serta perusahaan swasta domestik dan asing. Area praktik kami meliputi berbagai sektor seperti litigasi komersial, penanganan perkara tindak pidana korupsi, kepailitan, dan penundaan kewajiban pembayaran utang.',
      'Kami memiliki spesialisasi dalam mewakili klien di sektor perbankan, pertambangan, asuransi, minyak dan gas, serta penjaminan, termasuk industri kesehatan dan farmasi, sekaligus memberikan nasihat pada urusan korporasi secara umum.',
    ],
    rightParagraphs: [
      'Kami percaya bahwa kesuksesan klien adalah cerminan kesuksesan kami. Karena itu, YAR Law Firm berkomitmen menjadi mitra jangka panjang yang mampu memberikan solusi hukum yang inovatif, strategis, dan andal di tengah dinamika lanskap hukum dan bisnis yang terus berubah.',
      'Selama lebih dari satu dekade praktik dan pelayanan, YAR Law Firm telah menerima berbagai penghargaan sebagai berikut:',
    ],
    awards: [
      'Hukumonline Top 100 Indonesian Law Firms 2023',
      'Hukumonline Practice Leaders 2023',
      'Hukum Online Hall of Fame - Top Indonesian Law Schools 2023',
      'Hukumonline Top 100 Indonesia Law Firms 2024',
      'Hukumonline Practice Leaders 2024',
      'Hukumonline In-House Counsel Choice 2024',
      'Hukumonline Practice Leaders 2025',
      'Hukumonline Top 100 Indonesian Law Firms 2025',
      'Hukumonline Golden Alumni - Top Indonesian Law Schools 2025',
      'Hukumonline Legal Clinic Awards 2025 - Suspension of Debt Payment Obligations and Bankruptcy',
    ],
  },
  en: {
    title: 'Our Story',
    leftParagraphs: [
      'YAR Law Firm was founded in 2010 by Syamsul Huda Yudha, S.H., M.H., Azhar Rahim Rivai, S.H., M.H., and Teuku Raja Rajuandar, S.H., and is based in Jakarta, Indonesia. YAR Law Firm was established on the values of trust, professionalism, and reliability.',
      "We uphold the highest professional standards by providing effective, efficient, and comprehensive legal solutions tailored to our clients' needs. We prioritize integrity and meticulousness in handling complex legal matters, ensuring that every legal strategy we provide is appropriate and practical.",
      'YAR Law Firm has earned the trust of a diverse range of clients, including government agencies, state-owned enterprises, and both domestic and foreign private companies. Our practice areas cover various sectors such as commercial litigation, handling corruption criminal cases, bankruptcy cases, and debt repayment deferrals.',
      'We specialize in representing clients in the banking, mining, insurance, oil and gas, and guarantee sectors, including the healthcare and pharmaceutical industries, as well as advising on general corporate matters.',
    ],
    rightParagraphs: [
      "We believe that our clients' success is a reflection of our own success. Therefore, YAR Law Firm is committed to being a long-term partner capable of providing innovative, strategic, and reliable legal solutions amidst the ever-changing dynamics of the legal landscape and the business world.",
      'Over more than a decade of practice and service, YAR Law Firm has received various awards such as:',
    ],
    awards: [
      'Hukumonline Top 100 Indonesian Law Firms 2023',
      'Hukumonline Practice Leaders 2023',
      'Hukum Online Hall of Fame - Top Indonesian Law Schools 2023',
      'Hukumonline Top 100 Indonesia Law Firms 2024',
      'Hukumonline Practice Leaders 2024',
      'Hukumonline In-House Counsel Choice 2024',
      'Hukumonline Practice Leaders 2025',
      'Hukumonline Top 100 Indonesian Law Firms 2025',
      'Hukumonline Golden Alumni - Top Indonesian Law Schools 2025',
      'Hukumonline Legal Clinic Awards 2025 - Suspension of Debt Payment Obligations and Bankruptcy',
    ],
  },
}

function normalizeLanguage(language = 'id') {
  return String(language).toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function getAboutStory(language = 'id') {
  return aboutStoryByLocale[normalizeLanguage(language)] || aboutStoryByLocale.id
}

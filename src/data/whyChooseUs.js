const baseImages = {
  1: 'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/wcu-1.webp',
  2: 'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/wcu-2.webp',
  3: 'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/wcu-3.webp',
  4: 'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/wcu-4.webp',
  5: 'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/wcu-5.webp',
  6: 'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/wcu-6.webp',
}

const whyChooseUsByLocale = {
  id: {
    title: 'Mengapa Memilih Kami?',
    description: 'Alasan mempercayakan kebutuhan hukum Anda kepada kami',
    items: [
      {
        id: 1,
        title: 'Pengacara Berpengalaman',
        description:
          'Tim kami terdiri dari pengacara berpengalaman dengan kompetensi pada bidang praktik masing-masing untuk memastikan penanganan perkara Anda secara optimal.',
      },
      {
        id: 2,
        title: 'Rekam Jejak Terbukti',
        description:
          'Kami telah mewakili banyak klien dan meraih hasil yang baik pada berbagai perkara hukum kompleks lintas area praktik.',
      },
      {
        id: 3,
        title: 'Pendekatan Personal',
        description:
          'Kami memahami bahwa setiap klien memiliki situasi yang unik, sehingga strategi hukum kami disusun khusus sesuai kebutuhan dan tujuan Anda.',
      },
      {
        id: 4,
        title: 'Layanan Responsif',
        description:
          'Kami mengutamakan komunikasi dan kecepatan respons agar Anda selalu memperoleh perkembangan perkara serta jawaban atas pertanyaan Anda.',
      },
      {
        id: 5,
        title: 'Solusi Komprehensif',
        description:
          'Sebagai full-service law firm, kami menyediakan cakupan layanan hukum yang luas untuk memberikan solusi menyeluruh bagi kebutuhan Anda.',
      },
      {
        id: 6,
        title: 'Fokus pada Klien',
        description:
          'Kami menempatkan klien sebagai pusat dari setiap strategi, dengan membangun hubungan berbasis kepercayaan, respek, dan tujuan hukum yang selaras.',
      },
    ],
  },
  en: {
    title: 'Why Choose Us?',
    description: 'Reasons to trust us with your legal matters',
    items: [
      {
        id: 1,
        title: 'Experienced Attorneys',
        description:
          'Our team consists of highly skilled attorneys with extensive experience in their respective practice areas, ensuring expert handling of your legal matters.',
      },
      {
        id: 2,
        title: 'Proven Track Record',
        description:
          'We have successfully represented numerous clients, achieving favorable outcomes in complex legal cases across various practice areas.',
      },
      {
        id: 3,
        title: 'Personalized Approach',
        description:
          "We recognize that each client's situation is unique, and we tailor our legal strategies to address your specific needs and objectives.",
      },
      {
        id: 4,
        title: 'Responsive Service',
        description:
          'We prioritize communication and responsiveness, ensuring that you stay informed about your case and that your questions are promptly addressed.',
      },
      {
        id: 5,
        title: 'Comprehensive Solution',
        description:
          'Our full-service law firm offers a wide range of legal services, allowing us to provide comprehensive solutions for all your legal needs under one roof.',
      },
      {
        id: 6,
        title: 'Client-Centered Focus',
        description:
          'We place our clients at the center of everything we do, striving to build strong relationships based on trust, respect, and a shared commitment to achieving your legal goals.',
      },
    ],
  },
}

function normalizeLanguage(language = 'id') {
  return String(language).toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function getWhyChooseUsContent(language = 'id') {
  const locale = whyChooseUsByLocale[normalizeLanguage(language)] || whyChooseUsByLocale.id

  return {
    ...locale,
    items: locale.items.map((item) => ({
      ...item,
      image: baseImages[item.id],
    })),
  }
}

export const whyChooseUsItems = getWhyChooseUsContent('id').items

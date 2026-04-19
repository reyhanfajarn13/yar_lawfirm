import { awards } from '../../data/awards'
import { useTranslation } from 'react-i18next'

export default function AboutAwardsSection() {
  const { i18n } = useTranslation()
  const isEnglish = i18n.language.startsWith('en')

  const leftRowAwards = awards.filter((award) => award.id >= 1 && award.id <= 5)
  const rightRowAwards = awards.filter((award) => award.id >= 6 && award.id <= 10)
  const awardScaleById = {
    1: 1.37,
    2: 1.15,
    3: 1.22,
    4: 2.7,
    5: 2.4,
    6: 1.18,
    7: 1.05,
    8: 2.2,
    9: 1.15,
    10: 1.9,
  }

  const renderLogoRow = (rowClients, rowClassName = '') => (
    <div className="w-full overflow-hidden">
      <div className={`client-marquee-track ${rowClassName}`}>
        {[...rowClients, ...rowClients].map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex h-36 w-[17rem] flex-none items-center justify-center px-4 md:h-44 md:w-[20rem]"
          >
            <div className="flex h-[8.5rem] w-[8.5rem] items-center justify-center md:h-[10.5rem] md:w-[10.5rem]">
              <img
                src={client['image-link']}
                alt={client.name}
                className="h-full w-full object-contain object-center"
                style={{ transform: `scale(${awardScaleById[client.id] || 1.2})` }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="bg-[#e6eaee] py-16 md:py-10 md:pb-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-primary mb-3">
          {isEnglish ? 'Our Awards' : 'Penghargaan Kami'}
        </h2>
        <p className="text-secondary mb-12">
          {isEnglish
            ? 'We are proud to have received numerous awards and recognitions for our commitment to excellence in legal services. These accolades reflect our dedication to providing outstanding representation and achieving successful outcomes for our clients.'
            : 'Kami bangga menerima berbagai penghargaan dan pengakuan atas komitmen kami terhadap keunggulan layanan hukum. Penghargaan ini mencerminkan dedikasi kami dalam memberikan pendampingan hukum terbaik serta hasil yang optimal bagi klien.'}
        </p>
      </div>
      <div className="relative left-1/2 right-1/2 mt-2 w-screen -translate-x-1/2 space-y-6">
        {renderLogoRow(leftRowAwards)}
        {renderLogoRow(rightRowAwards, 'client-marquee-track-reverse')}
      </div>

      <style>{`
        .client-marquee-track {
          display: flex;
          width: max-content;
          animation: client-marquee-left 22s linear infinite;
        }

        .client-marquee-track-reverse {
          animation-direction: reverse;
        }

        @keyframes client-marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

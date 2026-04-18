import { clients } from '../../data/clients'
import { useTranslation } from 'react-i18next'

export default function ClientSection() {
  const { t } = useTranslation()
  const leftRowClients = clients.filter((client) => client.id >= 1 && client.id <= 6)
  const rightRowClients = clients.filter((client) => client.id >= 7 && client.id <= 12)

  const renderLogoRow = (rowClients, rowClassName = '') => (
    <div className="w-full overflow-hidden">
      <div className={`client-marquee-track ${rowClassName}`}>
        {[...rowClients, ...rowClients].map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex h-24 w-[12rem] flex-none items-center justify-center px-5 md:h-28 md:w-[14rem]"
          >
            <div className="h-full w-full py-2">
              <img
                src={client['image-link']}
                alt={client.name}
                className="max-h-full max-w-full object-contain object-center"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-primary mb-3">
          {t('home.client.title')}
        </h2>
        <p className="text-secondary mb-12">
          {t('home.client.description')}
        </p>
      </div>
      <div className="relative left-1/2 right-1/2 mt-2 w-screen -translate-x-1/2 space-y-6">
        {renderLogoRow(leftRowClients)}
        {renderLogoRow(rightRowClients, 'client-marquee-track-reverse')}
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

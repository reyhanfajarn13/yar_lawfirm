import { clients } from '../../data/clients'

export default function ClientSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Trusted by Leading Clients
        </h2>
        <p className="text-secondary mb-12">
          We are proud to serve these distinguished clients
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center h-16 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
            >
              {/* Placeholder logo - replace with actual images */}
              <div className="text-center">
                <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center mb-1">
                  <span className="text-[10px] text-gray-500 font-medium leading-tight text-center px-1">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

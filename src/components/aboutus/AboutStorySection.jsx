const STORY_IMAGE =
  'https://ik.imagekit.io/mindwalker/yarlawfirm/about-us-asset/aboutus-ourstory-asset.webp'

export default function AboutStorySection() {
  return (
    <section className="relative z-20 -mt-[170px] pb-16 md:-mt-[260px] md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[170px] bg-[#e6eaee] md:top-[260px]" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-[#ffffff] px-6 py-8 md:px-12 md:py-10 shadow-[0_10px_24px_rgba(15,23,42,0.14)]">
          <div className="flex items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#d10010]" />
            ))}
          </div>

          <h2 className="mt-5 text-4xl md:text-[3rem] font-medium leading-tight text-[#2c3138]">
            Our Story
          </h2>

          <div className="mt-7 h-[320px] md:h-[420px] overflow-hidden">
            <img
              src={STORY_IMAGE}
              alt="Law firm office interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 items-start">
            <div className="space-y-5 text-primary text-[1.05rem] leading-relaxed">
              <p>
                YAR Law Firm was founded in 2010 by Syamsul Huda Yudha, S.H., M.H., Azhar
                Rahim Rivai, S.H., M.H., and Teuku Raja Rajuandar, S.H., and is based in
                Jakarta, Indonesia. YAR Law Firm was established on the values of trust,
                professionalism, and reliability.
              </p>
              <p>
                We uphold the highest professional standards by providing effective,
                efficient, and comprehensive legal solutions tailored to our clients'
                needs. We prioritize integrity and meticulousness in handling complex
                legal matters, ensuring that every legal strategy we provide is
                appropriate and practical.
              </p>
              <p>
                YAR Law Firm has earned the trust of a diverse range of clients, including
                government agencies, state-owned enterprises, and both domestic and foreign
                private companies. Our practice areas cover various sectors such as
                commercial litigation, handling corruption criminal cases, bankruptcy
                cases, and debt repayment deferrals.
              </p>
              <p>
                We specialize in representing clients in the banking, mining, insurance,
                oil and gas, and guarantee sectors, including the healthcare and
                pharmaceutical industries, as well as advising on general corporate
                matters.
              </p>
            </div>

            <div className="space-y-5 text-primary text-[1.05rem] leading-relaxed">
              <p>
                We believe that our clients' success is a reflection of our own success.
                Therefore, YAR Law Firm is committed to being a long-term partner capable
                of providing innovative, strategic, and reliable legal solutions amidst
                the ever-changing dynamics of the legal landscape and the business world.
              </p>
              <p>
                Over more than a decade of practice and service, YAR Law Firm has received
                various awards such as:
              </p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Hukumonline Top 100 Indonesian Law Firms 2023</li>
                <li>Hukumonline Practice Leaders 2023</li>
                <li>Hukum Online Hall of Fame - Top Indonesian Law Schools 2023</li>
                <li>Hukumonline Top 100 Indonesia Law Firms 2024</li>
                <li>Hukumonline Practice Leaders 2024</li>
                <li>Hukumonline In-House Counsel Choice 2024</li>
                <li>Hukumonline Practice Leaders 2025</li>
                <li>Hukumonline Top 100 Indonesian Law Firms 2025</li>
                <li>Hukumonline Golden Alumni - Top Indonesian Law Schools 2025</li>
                <li>
                  Hukumonline Legal Clinic Awards 2025 - Suspension of Debt Payment
                  Obligations and Bankruptcy
                </li>
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

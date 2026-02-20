import {
  HeartPulse,
  Syringe,
  Sparkles,
  Smile,
  Baby,
  BadgeCheck,
} from 'lucide-react'

const services = [
  {
    title: 'Root Canal Treatment',
    icon: HeartPulse,
    description:
      'Comfortable, precise root canal therapy with advanced rotary instruments and digital imaging.',
  },
  {
    title: 'Dental Implants',
    icon: Syringe,
    description:
      'Long-lasting implant solutions to replace missing teeth and restore confident smiles.',
  },
  {
    title: 'Teeth Whitening',
    icon: Sparkles,
    description:
      'Safe, professional-grade whitening treatments for brighter, naturally radiant teeth.',
  },
  {
    title: 'Braces & Aligners',
    icon: Smile,
    description:
      'Modern orthodontic options including metal braces and clear aligners for all ages.',
  },
  {
    title: 'Pediatric Dentistry',
    icon: Baby,
    description:
      'Gentle, child-friendly care focused on prevention, education, and positive experiences.',
  },
  {
    title: 'Smile Designing',
    icon: BadgeCheck,
    description:
      'Tailored cosmetic treatments to harmonize tooth shape, shade, and alignment.',
  },
]

const Services = () => {
  return (
    <section id="services" className="bg-sky-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto fade-up">
          <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
            Services
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Comprehensive dental care under one roof.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            From routine check-ups to full smile makeovers, SmileCare offers
            evidence-based treatments designed around your comfort and results.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="fade-up rounded-xl bg-white shadow-md hover:shadow-lg border border-sky-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services


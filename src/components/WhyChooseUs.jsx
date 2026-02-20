import { Stethoscope, Microscope, IndianRupee, Ambulance } from 'lucide-react'

const features = [
  {
    title: 'Experienced Doctors',
    icon: Stethoscope,
    description:
      'Senior clinicians with years of focused dental practice and continual training.',
  },
  {
    title: 'Modern Equipment',
    icon: Microscope,
    description:
      'Digital X-rays, intraoral scanners, and sterilization that meets global standards.',
  },
  {
    title: 'Affordable Pricing',
    icon: IndianRupee,
    description:
      'Transparent, value-based treatment plans with flexible payment options.',
  },
  {
    title: 'Emergency Care',
    icon: Ambulance,
    description:
      'Prompt appointments for pain, trauma, and urgent dental concerns.',
  },
]

const WhyChooseUs = () => {
  return (
    <section id="why-us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto fade-up">
          <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Designed around your comfort and safety.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            We bring together a calm environment, advanced technology, and a
            caring team to make every visit reassuring and effective.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="fade-up rounded-xl bg-white shadow-md hover:shadow-lg border border-sky-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-5">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 mb-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-700">
                    {feature.description}
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

export default WhyChooseUs


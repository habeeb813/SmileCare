const AboutDoctor = () => {
  return (
    <section id="about-doctor">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="fade-up">
            <div className="mx-auto max-w-xs sm:max-w-sm">
              <div className="relative rounded-3xl bg-gradient-to-tr from-sky-100 via-white to-sky-50 p-1 shadow-soft">
                <div className="rounded-3xl bg-white px-8 py-10 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-sky-50 flex items-center justify-center text-3xl font-semibold text-sky-600">
                    AR
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Dr. Aisha Rahman
                  </h2>
                  <p className="mt-1 text-sm text-sky-600 font-medium">
                    BDS, MDS &mdash; Consultant Dental Surgeon
                  </p>
                  <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p>10+ years of clinical experience</p>
                    <p>Founder, SmileCare Dental Clinic (Demo)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 fade-up">
            <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
              About Doctor
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Gentle, precise dentistry with a personal touch.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Dr. Aisha Rahman is a passionate dental surgeon with a special
              interest in cosmetic and restorative dentistry. She combines
              evidence-based treatment planning with a warm, reassuring
              approach, ensuring every patient feels heard, informed, and
              comfortable throughout their visit.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-semibold">
                  ✓
                </span>
                <span>
                  <span className="font-semibold">5000+ happy patients</span>{' '}
                  treated with long-term follow-up.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-semibold">
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Advanced digital equipment</span>{' '}
                  for precise, minimally invasive care.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-semibold">
                  ✓
                </span>
                <span>
                  <span className="font-semibold">Personalized treatment plans</span>{' '}
                  tailored to each smile and lifestyle.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-semibold">
                  ✓
                </span>
                <span>
                  Gentle, anxiety-sensitive approach ideal for nervous patients.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDoctor


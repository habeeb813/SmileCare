import clinicHero from '../assets/clinic-hero.svg'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_#bae6fd_0,_transparent_55%)] opacity-60" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="fade-up">
            <p className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100 mb-4">
              Premium Dental Care in Kochi
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Advanced &amp; Affordable{' '}
              <span className="text-sky-600">Dental Care</span> in Kochi
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
              Trusted dental treatments with modern technology and compassionate
              care. Experience gentle, precise dentistry in a calm and
              comfortable environment.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="#appointment"
                className="inline-flex justify-center rounded-lg bg-sky-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-soft hover:bg-sky-600 hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919000000000"
                className="inline-flex justify-center rounded-lg border border-sky-200 px-6 py-3 text-sm sm:text-base font-semibold text-sky-700 bg-white hover:bg-sky-50 hover:border-sky-300 hover:scale-105 active:scale-100 transition-all duration-300"
              >
                Call Now
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-xs sm:text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-900">10+ Years</p>
                <p>Clinical experience</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">5000+ Patients</p>
                <p>Smiles transformed</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Modern</p>
                <p>Digital dentistry setup</p>
              </div>
            </div>
          </div>

          <div className="fade-up lg:justify-self-end">
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-100 via-sky-50 to-white blur-2xl" />
              <div className="relative rounded-3xl bg-white shadow-soft border border-sky-50 overflow-hidden">
                <img
                  src={clinicHero}
                  alt="SmileCare Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


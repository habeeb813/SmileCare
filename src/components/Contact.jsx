const Contact = () => {
  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="fade-up lg:order-2">
            <div className="h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md border border-sky-100">
              <iframe
                title="SmileCare Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.853410000000!2d76.285000!3d9.964000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTcnNTEuMCJOIDc2wrAxNicyNi4wIkU!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="space-y-4 fade-up lg:order-1">
            <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
              Visit Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Located in the heart of Kochi.
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              SmileCare Dental Clinic (Demo) is easily accessible with ample
              parking and an elevator-enabled building for added comfort.
            </p>

            <div className="mt-4 grid gap-4 text-sm text-gray-800">
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="mt-1 text-gray-700">
                  SmileCare Dental Clinic (Demo)
                  <br />
                  MG Road, Kochi, Kerala
                  <br />
                  India - 682016
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Contact</h3>
                  <p className="mt-1 text-gray-700">
                    Phone:{' '}
                    <a
                      href="tel:+919000000000"
                      className="text-sky-600 hover:text-sky-700"
                    >
                      +91 90000 00000
                    </a>
                    <br />
                    Email:{' '}
                    <a
                      href="mailto:hello@smilecareclinic.demo"
                      className="text-sky-600 hover:text-sky-700"
                    >
                      hello@smilecareclinic.demo
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Timings</h3>
                  <p className="mt-1 text-gray-700">
                    Mon &ndash; Sat: 9:30 AM &ndash; 7:30 PM
                    <br />
                    Sunday: By prior appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


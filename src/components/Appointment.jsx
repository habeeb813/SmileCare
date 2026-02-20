const Appointment = () => {
  return (
    <section id="appointment">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="rounded-2xl bg-white shadow-md hover:shadow-lg border border-sky-100 transition-shadow duration-300 px-4 py-6 sm:px-8 sm:py-8">
            <div className="text-center mb-6">
              <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
                Appointment
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
                Request your visit.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-700">
                Share a few details and we&apos;ll call you back to confirm a
                convenient slot.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-lg border border-sky-100 bg-sky-50/40 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-sky-100 bg-sky-50/40 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="+91-"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-800"
                >
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-lg border border-sky-100 bg-sky-50/40 px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full rounded-lg border border-sky-100 bg-sky-50/40 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200 resize-none"
                  placeholder="Briefly describe your concern."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-1">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-sky-600 hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Submit Request
                </button>
                <a
                  href="https://wa.me/9000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-lg border border-emerald-500 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 hover:border-emerald-600 hover:scale-105 active:scale-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Book via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment


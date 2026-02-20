import { Facebook, Instagram, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-sky-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-semibold shadow-soft">
                SC
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-gray-900">
                  SmileCare
                </span>
                <span className="text-xs text-sky-600">Dental Clinic</span>
              </div>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-xs">
              A modern, patient-first dental clinic in Kochi offering gentle,
              high-precision care for every smile.
            </p>
          </div>

          <div className="grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-1">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Quick Links
              </h3>
              <div className="mt-2 flex flex-col gap-1 text-xs sm:text-sm text-gray-700">
                <a href="#home" className="hover:text-sky-600">
                  Home
                </a>
                <a href="#about-doctor" className="hover:text-sky-600">
                  About Doctor
                </a>
                <a href="#services" className="hover:text-sky-600">
                  Services
                </a>
                <a href="#appointment" className="hover:text-sky-600">
                  Appointment
                </a>
                <a href="#contact" className="hover:text-sky-600">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Contact
              </h3>
              <div className="mt-2 space-y-1 text-xs sm:text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-sky-500" />
                  <a
                    href="tel:+919000000000"
                    className="hover:text-sky-600 break-all"
                  >
                    +91 90000 00000
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-sky-500" />
                  <a
                    href="mailto:hello@smilecareclinic.demo"
                    className="hover:text-sky-600 break-all"
                  >
                    hello@smilecareclinic.demo
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 text-xs sm:text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Follow
              </h3>
              <div className="mt-2 flex gap-3">
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 transition-colors"
                  aria-label="Visit Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 transition-colors"
                  aria-label="Visit Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-gray-500">
              © {new Date().getFullYear()} SmileCare Dental Clinic (Demo). All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


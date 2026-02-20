import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-doctor', label: 'About Doctor' },
  { href: '#services', label: 'Services' },
  { href: '#appointment', label: 'Appointment' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-sky-500 text-white flex items-center justify-center font-semibold shadow-soft">
              SC
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-gray-900">
                SmileCare
              </span>
              <span className="text-xs text-sky-600">Dental Clinic</span>
            </div>
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:hidden"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.75 7.5h16.5M3.75 12h16.5M12 16.5h8.25"
                />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sky-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              className="rounded-lg bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-soft hover:bg-sky-600 hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-sky-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-sky-600 hover:shadow-lg hover:scale-105 active:scale-100 transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar


const testimonials = [
  {
    name: 'Neha, 29',
    text: 'The team is incredibly gentle and professional. My root canal was painless and I felt supported throughout.',
  },
  {
    name: 'Rahul, 36',
    text: 'Clean, modern clinic with very clear explanations. I am extremely happy with my new smile.',
  },
  {
    name: 'Amina, 41',
    text: 'They handled my child’s first dental visit with so much patience. We both left smiling.',
  },
]

const Stars = () => (
  <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section className="bg-sky-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto fade-up">
          <p className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
            Testimonials
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Patients who trust SmileCare.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            Real stories from people who chose us for their dental health.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="fade-up rounded-xl bg-white shadow-md hover:shadow-lg border border-sky-100 hover:border-sky-200 transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <Stars />
                <p className="mt-3 text-sm text-gray-700 leading-relaxed flex-1">
                  “{testimonial.text}”
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutDoctor from '../components/AboutDoctor'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Appointment from '../components/Appointment'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <AboutDoctor />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home


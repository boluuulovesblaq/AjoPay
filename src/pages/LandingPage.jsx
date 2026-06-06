import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Footer from '../components/Footer'

// LandingPage is just a container that assembles all the landing page components
// We moved this out of App.jsx so App.jsx only handles routing, nothing else
function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  )
}

export default LandingPage
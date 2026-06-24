import HeroSection from './components/sections/HeroSection'
import Manifesto from './components/sections/Manifesto'
import AboutStarcamEnhanced from './components/sections/AboutStarcamEnhanced'
import Showreel from './components/sections/Showreel'
import EventTypes from './components/sections/EventTypes'
import Testimonials from './components/sections/Testimonials'
import CTASection from './components/sections/CTASection'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Manifesto />
      <AboutStarcamEnhanced />
      <Showreel />
      <EventTypes />
      <Testimonials />
      <CTASection />
    </main>
  )
}

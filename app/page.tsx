import HeroSection from './components/sections/HeroSection'
import AboutStarcamEnhanced from './components/sections/AboutStarcamEnhanced'
import InstagramFeed from './components/sections/InstagramFeed'
import EventTypes from './components/sections/EventTypes'
import Testimonials from './components/sections/Testimonials'
import CTASection from './components/sections/CTASection'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutStarcamEnhanced />
      <InstagramFeed />
      <EventTypes />
      <Testimonials />
      <CTASection />
    </main>
  )
}

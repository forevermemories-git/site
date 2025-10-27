import HeroSection from './components/sections/HeroSection'
import AboutStarcam from './components/sections/AboutStarcam'
import VideoGallery from './components/sections/VideoGallery'
import WhyChooseUs from './components/sections/WhyChooseUs'
import EventTypes from './components/sections/EventTypes'
import Testimonials from './components/sections/Testimonials'
import CTASection from './components/sections/CTASection'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutStarcam />
      <VideoGallery />
      <WhyChooseUs />
      <EventTypes />
      <Testimonials />
      <CTASection />
    </main>
  )
}

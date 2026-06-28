import MediaController from './components/home/MediaController'
import HomeHero from './components/home/HomeHero'
import TwoProducts from './components/home/TwoProducts'
import StarcamShowcase from './components/home/StarcamShowcase'
import Showreel from './components/home/Showreel'
import EventMarquee from './components/home/EventMarquee'
import EventTypes from './components/home/EventTypes'
import HomeTestimonial from './components/home/HomeTestimonial'
import HomeCTA from './components/home/HomeCTA'

export default function Home() {
  return (
    <div className="fm-home overflow-hidden">
      <MediaController />
      <HomeHero />
      <TwoProducts />
      <StarcamShowcase />
      <Showreel />
      <EventMarquee />
      <EventTypes />
      <HomeTestimonial />
      <HomeCTA />
    </div>
  )
}

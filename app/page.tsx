import Hero from "@/components/hero"
import About from "@/components/about"
import Facilities from "@/components/facilities"
import RoomPricing from "@/components/room-pricing"
import Gallery from "@/components/gallery"
import Location from "@/components/location"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <RoomPricing />
      <Gallery />
      <Location />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}

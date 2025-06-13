import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, MessageSquare } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Thirumagal Ladies Hostel building"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Safe & Comfortable Home Away From Home
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Thirumagal Ladies Hostel & PG offers secure, hygienic, and affordable accommodation for women students and
            working professionals in Chennai.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-primary-foreground hover:bg-white/90">
              <Link href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/#contact">
                <Calendar className="mr-2 h-5 w-5" /> Book a Visit
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

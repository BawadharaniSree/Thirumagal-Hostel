import Image from "next/image"
import { Shield, Heart, Home } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Thirumagal Ladies Hostel entrance"
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              Established in 2010, Thirumagal Ladies Hostel & PG has been providing a safe, hygienic, and homely
              environment for women students and working professionals in Chennai for over a decade.
            </p>

            <p>
              Our mission is to create a comfortable living space where women can focus on their studies and careers
              without worrying about accommodation issues. We take pride in our well-maintained facilities, nutritious
              home-cooked meals, and round-the-clock security.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-accent rounded-lg">
                <Shield className="h-10 w-10 mx-auto text-primary-foreground mb-2" />
                <h3 className="font-semibold mb-1">Safety First</h3>
                <p className="text-sm">24/7 security with CCTV surveillance</p>
              </div>

              <div className="text-center p-4 bg-accent rounded-lg">
                <Heart className="h-10 w-10 mx-auto text-primary-foreground mb-2" />
                <h3 className="font-semibold mb-1">Caring Staff</h3>
                <p className="text-sm">Supportive wardens and housekeeping</p>
              </div>

              <div className="text-center p-4 bg-accent rounded-lg">
                <Home className="h-10 w-10 mx-auto text-primary-foreground mb-2" />
                <h3 className="font-semibold mb-1">Homely Feel</h3>
                <p className="text-sm">Comfortable rooms and home-cooked meals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

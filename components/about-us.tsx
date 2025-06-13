import { Shield, Home, Heart } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Providing a safe, hygienic, and homely environment for women students and working professionals since 2010.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-muted-foreground">
              Our top priority is ensuring the safety and security of all our residents with 24/7 surveillance and
              strict access control.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Homely Comfort</h3>
            <p className="text-muted-foreground">
              We strive to create a warm, comfortable environment where residents can feel at home while pursuing their
              goals.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted by Many</h3>
            <p className="text-muted-foreground">
              With over a decade of experience, we've earned the trust of hundreds of residents and their families.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-background rounded-lg p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-muted-foreground mb-4">
            At Thirumagal Ladies Hostel, we are committed to providing affordable, safe, and comfortable accommodation
            for women in Chennai. We understand the challenges faced by students and working professionals who move to a
            new city, and we aim to create a supportive community where they can thrive.
          </p>
          <p className="text-muted-foreground">
            Our experienced staff ensures that all residents receive personal attention, nutritious home-cooked meals,
            and a clean living environment. We take pride in maintaining high standards of hygiene, security, and
            comfort to give parents peace of mind about their daughters' accommodation.
          </p>
        </div>
      </div>
    </section>
  )
}

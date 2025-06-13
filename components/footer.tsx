import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-accent">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Thirumagal Ladies Hostel & PG</h3>
            <p className="text-sm mb-4">
              Providing safe, comfortable, and affordable accommodation for women students and working professionals in
              Chennai.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#facilities" className="hover:text-primary-foreground transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/#rooms" className="hover:text-primary-foreground transition-colors">
                  Room Types & Pricing
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-primary-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-sm space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p>440 Velacherry Main Road, Camp Road, near Punjab Handlooms, Selaiyur, Chennai, Tamil Nadu 600073</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <Link href="tel:+919876543210" className="hover:text-primary-foreground transition-colors">
                  +91 98765 43210
                </Link>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <Link
                  href="mailto:info@thirumagalhostel.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  info@thirumagalhostel.com
                </Link>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Thirumagal Ladies Hostel & PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

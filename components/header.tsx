"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Home, Info, Grid, ImageIcon, MapPin, MessageSquare, HelpCircle } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary-foreground">Thirumagal</span>
          <span className="hidden sm:inline-block text-sm font-medium">Ladies Hostel & PG</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#about" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            About
          </Link>
          <Link href="/#facilities" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Facilities
          </Link>
          <Link href="/#rooms" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Rooms
          </Link>
          <Link href="/#gallery" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Gallery
          </Link>
          <Link href="/#location" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Location
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Testimonials
          </Link>
          <Link href="/#faq" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            FAQ
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <Button asChild className="hidden md:inline-flex">
          <Link href="tel:+919876543210">
            <Phone className="mr-2 h-4 w-4" /> Call Now
          </Link>
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container grid gap-6 p-6">
            <Link href="/#about" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link href="/#facilities" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <Grid className="h-5 w-5" />
              <span>Facilities</span>
            </Link>
            <Link href="/#rooms" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <Home className="h-5 w-5" />
              <span>Rooms</span>
            </Link>
            <Link href="/#gallery" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <ImageIcon className="h-5 w-5" />
              <span>Gallery</span>
            </Link>
            <Link href="/#location" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <MapPin className="h-5 w-5" />
              <span>Location</span>
            </Link>
            <Link href="/#testimonials" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <MessageSquare className="h-5 w-5" />
              <span>Testimonials</span>
            </Link>
            <Link href="/#faq" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <HelpCircle className="h-5 w-5" />
              <span>FAQ</span>
            </Link>
            <Link href="/#contact" className="flex items-center space-x-2 text-lg font-medium" onClick={closeMenu}>
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <Button asChild className="mt-4">
              <Link href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

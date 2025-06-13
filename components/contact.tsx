"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to book a visit? Reach out to us!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                  <div>
                    <span className="font-medium">Phone</span>
                    <p className="text-sm">
                      <a href="tel:+919876543210" className="hover:text-primary-foreground transition-colors">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                  <div>
                    <span className="font-medium">WhatsApp</span>
                    <p className="text-sm">
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-foreground transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                  <div>
                    <span className="font-medium">Email</span>
                    <p className="text-sm">
                      <a
                        href="mailto:info@thirumagalhostel.com"
                        className="hover:text-primary-foreground transition-colors"
                      >
                        info@thirumagalhostel.com
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                  <div>
                    <span className="font-medium">Address</span>
                    <p className="text-sm">
                      440 Velacherry Main Road, Camp Road, <br />
                      near Punjab Handlooms, Selaiyur, <br />
                      Chennai, Tamil Nadu 600073
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Visiting Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                It's recommended to call before visiting to ensure availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

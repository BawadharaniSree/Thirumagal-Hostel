"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya S.",
      role: "Student",
      rating: 5,
      text: "Safe and clean place for girls. Warden is very helpful. Homely food! I've been staying here for 2 years and never had any issues. Highly recommended for students.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Divya R.",
      role: "Working Professional",
      rating: 4,
      text: "Affordable and peaceful atmosphere. Good for students and working women. The location is convenient with bus stops nearby. Food quality is good and consistent.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Meena K.",
      role: "Student",
      rating: 5,
      text: "Close to my college and very secure. Thank you Thirumagal Hostel for providing such a safe environment. The staff is friendly and always ready to help.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Lakshmi P.",
      role: "Working Professional",
      rating: 5,
      text: "I've been staying here for over a year now. The rooms are clean, food is good, and the security is excellent. Perfect for working women like me.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Anjali T.",
      role: "Student",
      rating: 4,
      text: "Good hostel with all necessary facilities. The location is convenient for students studying in nearby colleges. Warden is strict but caring.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = 3

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Create a circular array of testimonials for infinite scrolling
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < visibleTestimonials; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section id="testimonials" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Residents Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read reviews from students and working professionals who have stayed with us.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Mobile view - show one testimonial at a time */}
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="text-sm">{testimonial.text}</p>
      </CardContent>
    </Card>
  )
}

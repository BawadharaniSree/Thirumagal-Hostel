"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Gallery() {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const openImage = (src: string) => {
    setSelectedImage(src)
    setOpen(true)
  }

  const galleryImages = {
    rooms: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Single occupancy room" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Double sharing room" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Triple sharing room" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Room interior with study table" },
    ],
    common: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Dining area" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Common hall" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Reception area" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Study room" },
    ],
    exterior: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Building exterior" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Entrance" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Garden area" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Building view from street" },
    ],
  }

  return (
    <section id="gallery" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our hostel facilities and accommodations.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <Tabs defaultValue="rooms" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="common">Common Areas</TabsTrigger>
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="rooms" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.rooms.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImage(image.src)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="common" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.common.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImage(image.src)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exterior" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.exterior.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImage(image.src)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-none">
          <div className="relative w-full aspect-video">
            <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

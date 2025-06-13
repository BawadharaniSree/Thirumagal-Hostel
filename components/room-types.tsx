import Image from "next/image"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RoomTypes() {
  const rooms = [
    {
      type: "Single Occupancy",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹10,000",
      deposit: "₹5,000",
      availability: true,
      features: ["Private space", "Attached bathroom", "Study table & chair", "Wardrobe", "AC option available"],
    },
    {
      type: "Double Sharing",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹7,500",
      deposit: "₹5,000",
      availability: true,
      features: [
        "Shared with one roommate",
        "Attached bathroom",
        "Study table & chair",
        "Wardrobe",
        "AC option available",
      ],
    },
    {
      type: "Triple Sharing",
      image: "/placeholder.svg?height=400&width=600",
      price: "₹6,000",
      deposit: "₹5,000",
      availability: false,
      features: ["Shared with two roommates", "Attached bathroom", "Study table & chair", "Wardrobe", "Non-AC only"],
    },
  ]

  return (
    <section id="rooms" className="section-padding bg-muted/30">
      <div className="container">
        <h2 className="section-title">Room Types & Pricing</h2>
        <p className="section-subtitle">
          We offer various accommodation options to suit different preferences and budgets.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {rooms.map((room, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm border border-muted">
              <div className="relative h-48">
                <Image src={room.image || "/placeholder.svg"} alt={room.type} fill className="object-cover" />
                <Badge className="absolute top-3 right-3">{room.availability ? "Available" : "Full"}</Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.type}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{room.price}</span>
                  <span className="text-sm text-muted-foreground">/ month</span>
                </div>

                <div className="text-sm text-muted-foreground mb-4">Refundable deposit: {room.deposit}</div>

                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" disabled={!room.availability} asChild>
                  <Link href="#contact">{room.availability ? "Book Now" : "Currently Full"}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 rounded-lg p-6 text-center">
          <p className="font-medium">
            All room rates include meals (breakfast, lunch, and dinner), Wi-Fi, electricity, and water.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            AC rooms available at additional cost. Special rates for long-term stays.
          </p>
        </div>
      </div>
    </section>
  )
}

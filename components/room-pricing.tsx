import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function RoomPricing() {
  const rooms = [
    {
      type: "Single Occupancy",
      price: "₹12,000",
      deposit: "₹10,000",
      availability: "Limited",
      features: [
        "Private room",
        "Attached bathroom",
        "Study table & chair",
        "Wardrobe",
        "AC option available",
        "3 meals daily",
      ],
    },
    {
      type: "Double Sharing",
      price: "₹9,000",
      deposit: "₹8,000",
      availability: "Available",
      features: [
        "Shared room (2 persons)",
        "Attached bathroom",
        "Study table & chair",
        "Wardrobe",
        "AC option available",
        "3 meals daily",
      ],
      popular: true,
    },
    {
      type: "Triple Sharing",
      price: "₹7,500",
      deposit: "₹6,000",
      availability: "Available",
      features: [
        "Shared room (3 persons)",
        "Attached bathroom",
        "Study table & chair",
        "Wardrobe",
        "Non-AC only",
        "3 meals daily",
      ],
    },
  ]

  return (
    <section id="rooms" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Room Types & Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the accommodation option that best suits your needs and budget.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className={`relative ${room.popular ? "border-primary shadow-lg" : ""}`}>
              {room.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{room.type}</CardTitle>
                <CardDescription>Monthly rent per person</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{room.price}</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
                <p className="text-sm mb-6">
                  Refundable deposit: <strong>{room.deposit}</strong>
                </p>
                <ul className="space-y-2">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Badge variant={room.availability === "Available" ? "outline" : "secondary"}>{room.availability}</Badge>
                <span className="text-sm text-muted-foreground">*AC rooms at additional cost</span>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>* Prices are subject to change. Please contact us for the most current rates.</p>
          <p>* Electricity charges extra for AC rooms based on consumption.</p>
        </div>
      </div>
    </section>
  )
}

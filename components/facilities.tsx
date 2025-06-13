import { Shield, Wifi, Snowflake, Utensils, Shirt, Droplets, Battery, Bath } from "lucide-react"

export default function Facilities() {
  const facilities = [
    {
      icon: <Shield className="h-10 w-10 text-primary-foreground" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance for your safety",
    },
    {
      icon: <Wifi className="h-10 w-10 text-primary-foreground" />,
      title: "Wi-Fi",
      description: "High-speed internet access throughout the hostel",
    },
    {
      icon: <Snowflake className="h-10 w-10 text-primary-foreground" />,
      title: "AC/Non-AC Rooms",
      description: "Options for both air-conditioned and non-AC rooms",
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary-foreground" />,
      title: "Home-cooked Food",
      description: "Nutritious vegetarian and non-vegetarian meals",
    },
    {
      icon: <Shirt className="h-10 w-10 text-primary-foreground" />,
      title: "Laundry & Housekeeping",
      description: "Regular cleaning and laundry services available",
    },
    {
      icon: <Droplets className="h-10 w-10 text-primary-foreground" />,
      title: "RO Water",
      description: "Purified drinking water available 24/7",
    },
    {
      icon: <Battery className="h-10 w-10 text-primary-foreground" />,
      title: "Power Backup",
      description: "Uninterrupted power supply with generator backup",
    },
    {
      icon: <Bath className="h-10 w-10 text-primary-foreground" />,
      title: "Attached Bathrooms",
      description: "Clean and hygienic attached bathrooms with hot water",
    },
  ]

  return (
    <section id="facilities" className="section-padding bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide all the essential amenities to make your stay comfortable and convenient.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary">
                {facility.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
              <p className="text-sm text-muted-foreground">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

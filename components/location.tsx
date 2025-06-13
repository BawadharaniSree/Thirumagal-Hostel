import { MapPin, Bus, Train, Building } from "lucide-react"

export default function Location() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located near public transport, colleges, and shopping areas.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0051508809!2d80.13976!3d12.9641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1e5b3b0c7f%3A0x9f1e0d7c6d91a1ba!2s440%2C%20Velachery%20Main%20Rd%2C%20Camp%20Road%2C%20Selaiyur%2C%20Chennai%2C%20Tamil%20Nadu%20600073!5e0!3m2!1sen!2sin!4v1718300000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thirumagal Ladies Hostel & PG location map"
            ></iframe>
          </div>

          <div>
            <div className="bg-accent p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" /> Address
              </h3>
              <p className="mb-2">
                440 Velacherry Main Road, Camp Road, <br />
                near Punjab Handlooms, Selaiyur, <br />
                Chennai, Tamil Nadu 600073
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Nearby Landmarks</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Bus className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                    <div>
                      <span className="font-medium">Camp Road Bus Stop</span>
                      <p className="text-sm text-muted-foreground">2-minute walk (100m)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                    <div>
                      <span className="font-medium">Punjab Handlooms</span>
                      <p className="text-sm text-muted-foreground">1-minute walk (50m)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Train className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                    <div>
                      <span className="font-medium">Tambaram Railway Station</span>
                      <p className="text-sm text-muted-foreground">15-minute drive (4.5km)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 mr-3 mt-0.5 text-primary-foreground" />
                    <div>
                      <span className="font-medium">Nearby Colleges & IT Parks</span>
                      <p className="text-sm text-muted-foreground">
                        SRM University (3km), Sathyabama University (5km), <br />
                        Siruseri IT Park (12km)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

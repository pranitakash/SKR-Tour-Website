import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Users, MapPin, Utensils, Hotel, ShieldCheck } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Kailash Mansarovar Complete Yatra",
    image: "https://images.unsplash.com/photo-1764753757089-ba31eb338384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGthaWxhc2glMjB0aWJldCUyMHNub3clMjBtb3VudGFpbnxlbnwxfHx8fDE3ODExOTU3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "14 Days / 13 Nights",
    groupSize: "Max 15 People",
    inclusions: [
      { icon: Hotel, text: "Comfortable Accommodation" },
      { icon: Utensils, text: "All Meals Included" },
      { icon: MapPin, text: "Guided Tours" },
      { icon: ShieldCheck, text: "Travel Insurance" },
    ],
  },
  {
    id: 2,
    title: "Char Dham Yatra Package",
    image: "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBwaWxncmltYWdlJTIwdGVtcGxlJTIwc3Bpcml0dWFsfGVufDF8fHx8MTc4MTE5NTc3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "10 Days / 9 Nights",
    groupSize: "Max 20 People",
    inclusions: [
      { icon: Hotel, text: "Deluxe Hotels" },
      { icon: Utensils, text: "Vegetarian Meals" },
      { icon: MapPin, text: "Expert Guide" },
      { icon: ShieldCheck, text: "Medical Support" },
    ],
  },
  {
    id: 3,
    title: "Adi Kailash & Om Parvat Trek",
    image: "https://images.unsplash.com/photo-1767714727834-a7ec5373355a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbSUyMHBhcnZhdCUyMGhpbWFsYXlhJTIwc2FjcmVkJTIwbW91bnRhaW58ZW58MXx8fHwxNzgxMTk1Nzc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "12 Days / 11 Nights",
    groupSize: "Max 12 People",
    inclusions: [
      { icon: Hotel, text: "Camp & Hotel Stay" },
      { icon: Utensils, text: "Healthy Meals" },
      { icon: MapPin, text: "Trekking Equipment" },
      { icon: ShieldCheck, text: "Permits & Insurance" },
    ],
  },
  {
    id: 4,
    title: "Kedarnath Helicopter Yatra",
    image: "https://images.unsplash.com/photo-1712733900711-d0b929d0d7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWRhcm5hdGglMjB0ZW1wbGUlMjB1dHRhcmFraGFuZCUyMHBpbGdyaW1hZ2V8ZW58MXx8fHwxNzgxMTk1Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "2 Days / 1 Night",
    groupSize: "Individual/Family",
    inclusions: [
      { icon: Hotel, text: "Premium Hotel" },
      { icon: Utensils, text: "Gourmet Meals" },
      { icon: MapPin, text: "Helicopter Service" },
      { icon: ShieldCheck, text: "VIP Darshan" },
    ],
  },
  {
    id: 5,
    title: "Panch Kedar Circuit",
    image: "https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjB0cmVrJTIwbW91bnRhaW4lMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzgxMTk1Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "15 Days / 14 Nights",
    groupSize: "Max 10 People",
    inclusions: [
      { icon: Hotel, text: "Guesthouse Stay" },
      { icon: Utensils, text: "Local Cuisine" },
      { icon: MapPin, text: "Experienced Guides" },
      { icon: ShieldCheck, text: "Emergency Support" },
    ],
  },
  {
    id: 6,
    title: "Badrinath Darshan Package",
    image: "https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRyaW5hdGglMjB0ZW1wbGUlMjBpbmRpYSUyMHBpbGdyaW1hZ2V8ZW58MXx8fHwxNzgxMTk1NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "5 Days / 4 Nights",
    groupSize: "Max 25 People",
    inclusions: [
      { icon: Hotel, text: "Comfortable Lodging" },
      { icon: Utensils, text: "Pure Sattvic Food" },
      { icon: MapPin, text: "Temple Tours" },
      { icon: ShieldCheck, text: "Safety & Security" },
    ],
  },
];

export function TourPackages() {
  return (
    <section id="packages" className="py-20 bg-[var(--off-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[var(--navy)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Tour Packages
          </h2>
          <div className="w-20 h-1 bg-[var(--sky-blue)] mx-auto mb-4"></div>
          <p 
            className="text-lg text-[var(--charcoal)] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Carefully curated pilgrimage packages designed for comfort, safety, and spiritual fulfillment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[var(--sky-blue)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 
                  className="text-xl mb-3 text-[var(--navy)]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {pkg.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[var(--sky-blue)]" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-[var(--sky-blue)]" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.inclusions.map((inclusion, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[var(--charcoal)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <inclusion.icon className="w-4 h-4 text-[var(--sky-blue)] flex-shrink-0" />
                      <span>{inclusion.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-[var(--sky-blue)] text-[var(--sky-blue)] hover:bg-[var(--sky-blue)] hover:text-white rounded-lg transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Explore
                  </Button>
                  <Button
                    className="flex-1 bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white rounded-lg transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

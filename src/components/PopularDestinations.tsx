import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from "lucide-react";

const PopularDestinations = () => {
  const destinations = [
    {
      city: "Paris",
      country: "France",
      price: "$299",
      image: "🇫🇷",
      originalPrice: "$450",
      savings: "34% off"
    },
    {
      city: "Tokyo",
      country: "Japan", 
      price: "$599",
      image: "🇯🇵",
      originalPrice: "$850",
      savings: "30% off"
    },
    {
      city: "London",
      country: "United Kingdom",
      price: "$349",
      image: "🇬🇧",
      originalPrice: "$520",
      savings: "33% off"
    },
    {
      city: "Bali",
      country: "Indonesia",
      price: "$449",
      image: "🇮🇩",
      originalPrice: "$680",
      savings: "34% off"
    },
    {
      city: "Dubai",
      country: "UAE",
      price: "$399",
      image: "🇦🇪",
      originalPrice: "$580",
      savings: "31% off"
    },
    {
      city: "Sydney",
      country: "Australia",
      price: "$699",
      image: "🇦🇺",
      originalPrice: "$980",
      savings: "29% off"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Popular Destinations
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover amazing deals to the world's most sought-after destinations. Book now and save big!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <Card key={index} className="group overflow-hidden bg-card hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-border/50">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{destination.image}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {destination.city}
                    </h3>
                    <p className="text-sm text-muted-foreground">{destination.country}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-trust-green/10 text-trust-green border-trust-green/20">
                  {destination.savings}
                </Badge>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{destination.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{destination.originalPrice}</span>
                </div>
                <p className="text-xs text-muted-foreground">per person, round trip</p>
              </div>

              <Button className="w-full group-hover:bg-primary-glow transition-colors">
                <Plane className="mr-2 h-4 w-4" />
                Book Now
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="px-8">
          View All Destinations
        </Button>
      </div>
    </div>
  );
};

export default PopularDestinations;
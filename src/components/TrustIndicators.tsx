import { Shield, Award, Clock, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: TrendingDown,
      title: "Best Price Guarantee",
      description: "Find a lower price? We'll match it and give you $50 credit.",
      highlight: "Save up to 40%"
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Your payment and personal data are protected with industry-leading security.",
      highlight: "100% Secure"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Expert travel support available around the clock for any assistance.",
      highlight: "Always Available"
    },
    {
      icon: Award,
      title: "Trusted by Millions",
      description: "Join over 2 million travelers who choose us for their flight bookings.",
      highlight: "2M+ Customers"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Why Choose Blue Wings Booking?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're committed to providing you with the best flight deals and exceptional service every step of the way.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {indicators.map((indicator, index) => (
          <Card key={index} className="p-6 text-center bg-card hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-border/50">
            <div className="mb-4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <indicator.icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-trust-green bg-green-50 rounded-full border border-green-200">
                {indicator.highlight}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {indicator.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {indicator.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
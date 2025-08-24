import Navigation from "@/components/Navigation";
import FlightSearch from "@/components/FlightSearch";
import TrustIndicators from "@/components/TrustIndicators";
import PopularDestinations from "@/components/PopularDestinations";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-flight.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(66, 153, 225, 0.8), rgba(56, 178, 172, 0.6)), url(${heroImage})`
        }}
      >
        <Navigation />
        
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
          <div className="w-full max-w-7xl mx-auto text-center">
            {/* Hero Content */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Find Your Perfect Flight
                <br />
                <span className="text-accent">at Unbeatable Prices</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Compare millions of flights from hundreds of airlines to get you the best deal. 
                Your dream destination is just a search away.
              </p>
            </div>

            {/* Search Form */}
            <FlightSearch />

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2M+</div>
                <div className="text-white/80">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Airlines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white/80">Average Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators Section */}
      <section className="py-20 bg-background">
        <TrustIndicators />
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 bg-muted/30">
        <PopularDestinations />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

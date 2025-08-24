import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Plane, Users, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("round-trip");

  return (
    <Card className="w-full max-w-6xl mx-auto p-8 bg-card/80 backdrop-blur-md border-white/20 shadow-[var(--shadow-strong)]">
      <div className="space-y-6">
        {/* Trip Type Selection */}
        <div className="flex gap-4">
          <Button
            variant={tripType === "round-trip" ? "default" : "outline"}
            onClick={() => setTripType("round-trip")}
            className="px-6"
          >
            Round Trip
          </Button>
          <Button
            variant={tripType === "one-way" ? "default" : "outline"}
            onClick={() => setTripType("one-way")}
            className="px-6"
          >
            One Way
          </Button>
          <Button
            variant={tripType === "multi-city" ? "default" : "outline"}
            onClick={() => setTripType("multi-city")}
            className="px-6"
          >
            Multi-city
          </Button>
        </div>

        {/* Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* From */}
          <div className="space-y-2">
            <Label htmlFor="from" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              From
            </Label>
            <div className="relative">
              <Input
                id="from"
                placeholder="City or Airport"
                className="pl-4 h-12 bg-input border-border"
              />
            </div>
          </div>

          {/* To */}
          <div className="space-y-2">
            <Label htmlFor="to" className="text-sm font-medium flex items-center gap-2">
              <Plane className="h-4 w-4 text-primary" />
              To
            </Label>
            <div className="relative">
              <Input
                id="to"
                placeholder="City or Airport"
                className="pl-4 h-12 bg-input border-border"
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="space-y-2">
            <Label htmlFor="departure" className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Departure
            </Label>
            <Input
              id="departure"
              type="date"
              className="h-12 bg-input border-border"
            />
          </div>

          {/* Return Date */}
          {tripType === "round-trip" && (
            <div className="space-y-2">
              <Label htmlFor="return" className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Return
              </Label>
              <Input
                id="return"
                type="date"
                className="h-12 bg-input border-border"
              />
            </div>
          )}

          {/* Passengers */}
          <div className="space-y-2">
            <Label htmlFor="passengers" className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Passengers
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="h-12 bg-input border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Passenger</SelectItem>
                <SelectItem value="2">2 Passengers</SelectItem>
                <SelectItem value="3">3 Passengers</SelectItem>
                <SelectItem value="4">4 Passengers</SelectItem>
                <SelectItem value="5">5+ Passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center pt-4">
          <Button size="lg" className="px-12 h-14 text-lg font-semibold">
            <Plane className="mr-2 h-5 w-5" />
            Search Flights
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FlightSearch;
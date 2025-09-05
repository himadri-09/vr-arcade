import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar1 as CalendarIcon, Clock, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [selectedPlayers, setSelectedPlayers] = useState<number>(1);

  const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];


  const experiences = [
  "Cyberpunk City", "Space Explorer", "Zombie Apocalypse",
  "Fantasy Realm", "Racing Circuit"];


  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-display text-secondary neon-text mb-4">
            Book Your VR Adventure
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Reserve your spot in virtual reality. Choose your experience, date, and time slot for an unforgettable journey into the digital realm.
          </p>
        </motion.div>
        
        <Card className="border-secondary/30 bg-black/60 backdrop-blur-md max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading text-secondary mb-6">Select Details</h3>
                
                {/* Experience Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Choose Experience
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {experiences.map((experience) =>
                    <button
                      key={experience}
                      onClick={() => setSelectedExperience(experience)}
                      className={cn(
                        "text-left px-4 py-3 rounded-md border transition-all",
                        selectedExperience === experience ?
                        "border-secondary bg-secondary/10 text-secondary" :
                        "border-primary/30 hover:border-primary/50 text-foreground/70"
                      )}>

                        {experience}
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Players Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Number of Players
                  </label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSelectedPlayers(Math.max(1, selectedPlayers - 1))}
                      disabled={selectedPlayers <= 1}
                      className="border-primary/50 text-primary">

                      -
                    </Button>
                    <div className="w-16 text-center">
                      <div className="flex items-center justify-center">
                        <Users className="h-4 w-4 mr-1 text-primary" />
                        <span>{selectedPlayers}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSelectedPlayers(Math.min(4, selectedPlayers + 1))}
                      disabled={selectedPlayers >= 4}
                      className="border-primary/50 text-primary">

                      +
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-heading text-secondary mb-6">Select Date & Time</h3>
                
                {/* Date Picker */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-primary/50",
                          !date && "text-foreground/50"
                        )}>

                        <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                        {date ? format(date, "PPP") : <span>Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-black border border-primary/50">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="bg-black" />

                    </PopoverContent>
                  </Popover>
                </div>
                
                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) =>
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "time-slot flex items-center justify-center text-sm",
                        selectedTime === time && "selected"
                      )}>

                        <Clock className="h-3 w-3 mr-1" />
                        {time}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button
                asChild
                className="cyber-button-accent"
                disabled={!date || !selectedTime || !selectedExperience}>

                <Link to="/booking">
                  Complete Booking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>);

};

export default BookingSection;
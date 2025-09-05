import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar1 as CalendarIcon, Clock, Users, CreditCard, Check as CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

// Sample data for VR experiences
const experiences = [
{ id: "cyberpunk", name: "Cyberpunk City" },
{ id: "space", name: "Space Explorer" },
{ id: "zombie", name: "Zombie Apocalypse" },
{ id: "fantasy", name: "Fantasy Realm" },
{ id: "racing", name: "Racing Circuit" },
{ id: "ocean", name: "Ocean Explorer" },
{ id: "ninja", name: "Ninja Dojo" },
{ id: "puzzle", name: "Puzzle Dimension" },
{ id: "haunted", name: "Haunted Mansion" },
{ id: "music", name: "Music Visualizer" },
{ id: "medieval", name: "Medieval Battle" },
{ id: "rhythm", name: "Neon Rhythm" }];


const timeSlots = [
"10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
"2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
"6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];


const BookingPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [players, setPlayers] = useState<string>("1");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.title = "Book Your VR Experience - VR Arcade";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);

      toast({
        title: "Booking Confirmed!",
        description: "Your VR experience has been booked successfully.",
        variant: "default"
      });
    }, 1500);
  };

  const nextStep = () => {
    if (step === 1 && (!date || !selectedTime || !selectedExperience)) {
      toast({
        title: "Incomplete Selection",
        description: "Please select a date, time, and experience to continue.",
        variant: "destructive"
      });
      return;
    }

    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1)_0%,transparent_70%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-5xl font-display text-secondary neon-text mb-6">
              Book Your VR Adventure
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Reserve your spot in virtual reality. Choose your experience, date, and time slot for an unforgettable journey into the digital realm.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Booking Process */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          {!isComplete ?
          <>
              {/* Progress Steps */}
              <div className="mb-10">
                <div className="flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-secondary text-black" : "bg-secondary/20 text-secondary"}`
                }>
                    1
                  </div>
                  <div className={`h-1 w-16 ${
                step >= 2 ? "bg-secondary" : "bg-secondary/20"}`
                }></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-secondary text-black" : "bg-secondary/20 text-secondary"}`
                }>
                    2
                  </div>
                  <div className={`h-1 w-16 ${
                step >= 3 ? "bg-secondary" : "bg-secondary/20"}`
                }></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-secondary text-black" : "bg-secondary/20 text-secondary"}`
                }>
                    3
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  <div className="text-xs text-secondary w-10 text-center">Select</div>
                  <div className="w-16"></div>
                  <div className="text-xs text-secondary w-10 text-center">Details</div>
                  <div className="w-16"></div>
                  <div className="text-xs text-secondary w-10 text-center">Payment</div>
                </div>
              </div>
              
              <Card className="border-secondary/30 bg-black/60 backdrop-blur-md">
                <CardContent className="p-6 md:p-8">
                  {step === 1 &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}>

                      <h2 className="text-2xl font-heading text-secondary mb-6">Select Your Experience</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-mono text-secondary mb-4">Choose Experience</h3>
                          <Select onValueChange={(value) => setSelectedExperience(value)}>
                            <SelectTrigger className="cyber-input">
                              <SelectValue placeholder="Select an experience" />
                            </SelectTrigger>
                            <SelectContent className="bg-black border border-secondary/50">
                              {experiences.map((exp) =>
                          <SelectItem key={exp.id} value={exp.id}>
                                  {exp.name}
                                </SelectItem>
                          )}
                            </SelectContent>
                          </Select>
                          
                          <h3 className="text-lg font-mono text-secondary mt-6 mb-4">Number of Players</h3>
                          <Select value={players} onValueChange={setPlayers}>
                            <SelectTrigger className="cyber-input">
                              <SelectValue placeholder="Select number of players" />
                            </SelectTrigger>
                            <SelectContent className="bg-black border border-secondary/50">
                              <SelectItem value="1">1 Player</SelectItem>
                              <SelectItem value="2">2 Players</SelectItem>
                              <SelectItem value="3">3 Players</SelectItem>
                              <SelectItem value="4">4 Players</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-mono text-secondary mb-4">Select Date</h3>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal border-secondary/50",
                              !date && "text-foreground/50"
                            )}>

                                <CalendarIcon className="mr-2 h-4 w-4 text-secondary" />
                                {date ? format(date, "PPP") : <span>Select a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-black border border-secondary/50">
                              <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="bg-black" />

                            </PopoverContent>
                          </Popover>
                          
                          <h3 className="text-lg font-mono text-secondary mt-6 mb-4">Select Time</h3>
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
                      
                      <div className="mt-8 flex justify-end">
                        <Button onClick={nextStep} className="cyber-button-secondary">
                          Continue to Details
                        </Button>
                      </div>
                    </motion.div>
                }
                  
                  {step === 2 &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}>

                      <h2 className="text-2xl font-heading text-secondary mb-6">Your Details</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground/80 mb-2">
                            First Name
                          </label>
                          <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="cyber-input" />

                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground/80 mb-2">
                            Last Name
                          </label>
                          <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="cyber-input" />

                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground/80 mb-2">
                            Email Address
                          </label>
                          <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="cyber-input" />

                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground/80 mb-2">
                            Phone Number
                          </label>
                          <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="cyber-input" />

                        </div>
                        
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-foreground/80 mb-2">
                            Special Requests (Optional)
                          </label>
                          <Textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="cyber-input min-h-[100px]" />

                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-between">
                        <Button onClick={prevStep} variant="outline" className="border-secondary/50 text-secondary">
                          Back
                        </Button>
                        <Button onClick={nextStep} className="cyber-button-secondary">
                          Continue to Payment
                        </Button>
                      </div>
                    </motion.div>
                }
                  
                  {step === 3 &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}>

                      <h2 className="text-2xl font-heading text-secondary mb-6">Payment & Confirmation</h2>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-mono text-secondary mb-4">Booking Summary</h3>
                        <div className="bg-black/40 border border-secondary/20 rounded-md p-4 space-y-3">
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Experience:</span>
                            <span className="text-secondary">
                              {experiences.find((exp) => exp.id === selectedExperience)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Date:</span>
                            <span className="text-secondary">{date ? format(date, "PPP") : ""}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Time:</span>
                            <span className="text-secondary">{selectedTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Players:</span>
                            <span className="text-secondary">{players}</span>
                          </div>
                          <div className="border-t border-secondary/20 pt-3 flex justify-between font-bold">
                            <span>Total:</span>
                            <span className="text-secondary">${parseInt(players) * 29.99}</span>
                          </div>
                        </div>
                      </div>
                      
                      <form onSubmit={handleSubmit}>
                        <h3 className="text-lg font-mono text-secondary mb-4">Payment Details</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground/80 mb-2">
                              Card Number
                            </label>
                            <Input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="cyber-input" />

                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground/80 mb-2">
                                Expiry Date
                              </label>
                              <Input
                            type="text"
                            placeholder="MM/YY"
                            required
                            className="cyber-input" />

                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground/80 mb-2">
                                CVC
                              </label>
                              <Input
                            type="text"
                            placeholder="123"
                            required
                            className="cyber-input" />

                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-foreground/80 mb-2">
                              Name on Card
                            </label>
                            <Input
                          type="text"
                          placeholder="John Doe"
                          required
                          className="cyber-input" />

                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-between">
                          <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="border-secondary/50 text-secondary">

                            Back
                          </Button>
                          <Button
                        type="submit"
                        className="cyber-button-secondary"
                        disabled={isSubmitting}>

                            {isSubmitting ?
                        <span className="flex items-center">
                                Processing...
                              </span> :

                        <span className="flex items-center">
                                <CreditCard className="mr-2 h-4 w-4" />
                                Complete Booking
                              </span>
                        }
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                }
                </CardContent>
              </Card>
            </> :

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center">

              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
              </div>
              
              <h2 className="text-3xl font-display text-accent neon-text mb-4">Booking Confirmed!</h2>
              <p className="text-xl text-foreground/80 mb-8 max-w-lg mx-auto">
                Your VR adventure has been booked successfully. We've sent a confirmation email with all the details.
              </p>
              
              <Card className="max-w-md mx-auto border-accent/30 bg-black/60 backdrop-blur-md mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-mono text-accent mb-4">Booking Details</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Experience:</span>
                      <span className="text-accent">
                        {experiences.find((exp) => exp.id === selectedExperience)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Date:</span>
                      <span className="text-accent">{date ? format(date, "PPP") : ""}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Time:</span>
                      <span className="text-accent">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Players:</span>
                      <span className="text-accent">{players}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Booking Reference:</span>
                      <span className="text-accent font-mono">VR-{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="cyber-button">
                  <a href="/">
                    Return to Home
                  </a>
                </Button>
                <Button asChild className="cyber-button-accent">
                  <a href="/experiences">
                    Explore More Experiences
                  </a>
                </Button>
              </div>
            </motion.div>
          }
        </div>
      </section>
    </div>);

};

export default BookingPage;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Send, Clock, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    document.title = "Contact Us - VR Arcade";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display text-primary neon-text mb-6">
              Contact Portal
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Have questions about our VR experiences or want to book a private event? Reach out through our digital portal and we'll respond faster than light speed.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-heading text-primary mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="cyber-input"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="cyber-input min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="cyber-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-heading text-primary mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/30">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-primary mb-1">Our Location</h3>
                    <p className="text-foreground/70">
                      123 Cyber Street<br />
                      Digital City, DC 10101
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/30">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-primary mb-1">Phone Number</h3>
                    <p className="text-foreground/70">
                      (555) 123-4567<br />
                      (555) 765-4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/30">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-primary mb-1">Email Address</h3>
                    <p className="text-foreground/70">
                      info@vrarcade.com<br />
                      bookings@vrarcade.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/30">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-primary mb-1">Opening Hours</h3>
                    <div className="space-y-1 text-foreground/70">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>10:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>9:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black to-black/90"></div>
        <div className="absolute inset-0 bg-digital-noise opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display text-secondary neon-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Find quick answers to common questions about our VR experiences and services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <MessageSquare className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <h3 className="text-lg font-display text-secondary">Do I need to book in advance?</h3>
                </div>
                <p className="text-foreground/70 pl-8">
                  Yes, we recommend booking at least 24 hours in advance to secure your preferred time slot, especially for weekends and holidays. Walk-ins are welcome but subject to availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <MessageSquare className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <h3 className="text-lg font-display text-secondary">Is there an age restriction?</h3>
                </div>
                <p className="text-foreground/70 pl-8">
                  Our VR experiences are generally suitable for ages 8 and up. Some experiences have specific age recommendations based on content. Children under 13 must be accompanied by an adult.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <MessageSquare className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <h3 className="text-lg font-display text-secondary">How long are the VR sessions?</h3>
                </div>
                <p className="text-foreground/70 pl-8">
                  Our standard VR sessions range from 30 to 60 minutes, depending on the experience. We also offer extended sessions and special packages for groups and events.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <MessageSquare className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <h3 className="text-lg font-display text-secondary">Can I host a private event?</h3>
                </div>
                <p className="text-foreground/70 pl-8">
                  Absolutely! We offer private event packages for birthdays, corporate events, and special occasions. Contact us for custom packages and availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <MessageSquare className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <h3 className="text-lg font-display text-secondary">Do you offer gift cards?</h3>
                </div>
                <p className="text-foreground/70 pl-8">
                  Yes, we offer digital and physical gift cards in various denominations. They make perfect gifts for gamers and tech enthusiasts of all ages.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start mb-3">
                  <MessageSquare className="h-5 w-5 text-secondary mr-3 mt-1" />
                  <h3 className="text-lg font-display text-secondary">Is VR safe for everyone?</h3>
                </div>
                <p className="text-foreground/70 pl-8">
                  Most people can enjoy VR safely, but it may not be suitable for individuals with certain medical conditions. We recommend consulting with a doctor if you have concerns about epilepsy, balance disorders, or heart conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading text-primary mb-6">Find Us</h2>
            
            <div className="relative rounded-lg overflow-hidden border border-primary/30 h-[400px]">
              {/* This would normally be a Google Maps embed */}
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-display text-primary mb-2">Interactive Map</h3>
                  <p className="text-foreground/70 max-w-md mx-auto">
                    We're located in the heart of Digital City, easily accessible by public transportation and with ample parking nearby.
                  </p>
                </div>
              </div>
              
              {/* Cyberpunk grid overlay */}
              <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-20 pointer-events-none"></div>
              
              {/* Location marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
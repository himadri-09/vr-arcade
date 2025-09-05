import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display text-primary neon-text mb-4">
            Contact Portal
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Have questions about our VR experiences or want to book a private event? Reach out through our digital portal and we'll respond faster than light speed.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-heading text-primary mb-6">Send Us a Message</h3>
            
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
                className="cyber-button-secondary w-full"
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
            <h3 className="text-xl font-heading text-primary mb-6">Connect With Us</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full border border-primary/30">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-display text-primary mb-1">Our Location</h4>
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
                  <h4 className="text-lg font-display text-primary mb-1">Phone Number</h4>
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
                  <h4 className="text-lg font-display text-primary mb-1">Email Address</h4>
                  <p className="text-foreground/70">
                    info@vrarcade.com<br />
                    bookings@vrarcade.com
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-display text-primary mb-4">Opening Hours</h4>
                <div className="space-y-2 text-foreground/70">
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
    </section>
  );
};

export default ContactSection;
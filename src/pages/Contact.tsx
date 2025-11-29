import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// ============================================
// Contact Page Component
// Uses EmailJS for form submissions
// ============================================

const Contact = () => {
  // Form reference for EmailJS
  const formRef = useRef<HTMLFormElement>(null);
  
  // Loading state for submit button
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Success state to show confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ============================================
  // Handle form submission using EmailJS
  // ============================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data using EmailJS
      // Service ID, Template ID, and Public Key are configured for your account
      await emailjs.sendForm(
        "service_xgqr1nh",    // Your EmailJS Service ID
        "template_5bbzb0h",   // Your EmailJS Template ID
        formRef.current!,
        "LS9IHnXeHB-U21BwQ"   // Your EmailJS Public Key
      );

      // Show success state
      setIsSubmitted(true);
      
      // Clear the form
      formRef.current?.reset();
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      // Log error for debugging
      console.error("EmailJS Error:", error);
      
      // Show error toast
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============================================
  // Success Confirmation Screen
  // ============================================
  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="text-center border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20">
            <CardContent className="pt-12 pb-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your message has been sent successfully. We'll review your enquiry and get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // ============================================
  // Main Contact Page Layout
  // ============================================
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with AI automation? Let's discuss your project and explore how we can help you unlock your potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Let's Connect
            </h2>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a 
                    href="mailto:hello@kidaflow.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@kidaflow.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a 
                    href="tel:+254105430486"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +254105430486
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                  <p className="text-muted-foreground">
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <Card className="border-primary/20 bg-gradient-surface mt-8">
              <CardContent className="pt-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Initial consultation call within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Detailed project proposal within 48 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Clear timeline and milestone breakdown</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* 
                  EmailJS Form
                  - Field names must match your EmailJS template variables
                  - from_name: Sender's name
                  - from_email: Sender's email
                  - message: The message content
                */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="from_name">Name *</Label>
                    <Input 
                      id="from_name" 
                      name="from_name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-md bg-surface border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="from_email">Email *</Label>
                    <Input 
                      id="from_email" 
                      name="from_email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full rounded-md bg-surface border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required
                      placeholder="Tell us about your project, current challenges, and what you'd like to automate..."
                      rows={6}
                      className="w-full rounded-md bg-surface border-border focus:border-primary resize-none transition-colors duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

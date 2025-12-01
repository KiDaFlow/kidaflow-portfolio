import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// ============================================
// Contact Page Component
// Uses EmailJS for form submissions
// Combines all fields into a formatted message
// ============================================

const Contact = () => {
  // Form reference for EmailJS
  const formRef = useRef<HTMLFormElement>(null);
  
  // Loading state for submit button
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Success state to show confirmation
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form field states (for combining into message)
  const [projectType, setProjectType] = useState("");
  const [budgetRange, setBudgetRange] = useState("");

  // ============================================
  // Handle form submission using EmailJS
  // Combines all fields into a formatted message
  // ============================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current!);
    
    // Get individual field values
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const projectDescription = formData.get("projectDescription") as string;

    // Format all fields into a single message
    const formattedMessage = `
--- CONTACT FORM SUBMISSION ---

NAME: ${firstName} ${lastName}
EMAIL: ${email}
COMPANY: ${company || "Not provided"}
PHONE: ${phone || "Not provided"}

PROJECT TYPE: ${projectType || "Not selected"}
BUDGET RANGE: ${budgetRange || "Not selected"}

PROJECT DESCRIPTION:
${projectDescription}

--- END OF SUBMISSION ---
    `.trim();

    // Create a hidden input with the formatted message
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "message";
    hiddenInput.value = formattedMessage;
    formRef.current!.appendChild(hiddenInput);

    // Also set from_name and from_email for EmailJS template
    const nameInput = document.createElement("input");
    nameInput.type = "hidden";
    nameInput.name = "from_name";
    nameInput.value = `${firstName} ${lastName}`;
    formRef.current!.appendChild(nameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "from_email";
    emailInput.value = email;
    formRef.current!.appendChild(emailInput);

    try {
      // Send form data using EmailJS
      await emailjs.sendForm(
        "service_xgqr1nh",    // Your EmailJS Service ID
        "template_5bbzb0h",   // Your EmailJS Template ID
        formRef.current!,
        "LS9IHnXeHB-U21BwQ"   // Your EmailJS Public Key
      );

      // Show success state
      setIsSubmitted(true);
      
      // Clear the form and states
      formRef.current?.reset();
      setProjectType("");
      setBudgetRange("");
      
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
      // Clean up hidden inputs
      formRef.current?.querySelectorAll('input[type="hidden"]').forEach(el => el.remove());
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
                  All fields are combined into a formatted message for EmailJS
                */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields - Two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        required
                        placeholder="John"
                        className="w-full rounded-md bg-surface border-border focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        required
                        placeholder="Doe"
                        className="w-full rounded-md bg-surface border-border focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full rounded-md bg-surface border-border focus:border-primary transition-colors duration-200"
                    />
                  </div>

                  {/* Company & Phone - Two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        name="company"
                        placeholder="Your company name"
                        className="w-full rounded-md bg-surface border-border focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full rounded-md bg-surface border-border focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger className="w-full rounded-md bg-surface border-border focus:border-primary">
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-automation">AI Automation</SelectItem>
                        <SelectItem value="workflow-optimization">Workflow Optimization</SelectItem>
                        <SelectItem value="chatbot-development">Chatbot Development</SelectItem>
                        <SelectItem value="data-integration">Data Integration</SelectItem>
                        <SelectItem value="custom-solution">Custom Solution</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Budget Range Select */}
                  <div className="space-y-2">
                    <Label htmlFor="budgetRange">Budget Range</Label>
                    <Select value={budgetRange} onValueChange={setBudgetRange}>
                      <SelectTrigger className="w-full rounded-md bg-surface border-border focus:border-primary">
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25000-plus">$25,000+</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Project Description Field */}
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Project Description *</Label>
                    <Textarea 
                      id="projectDescription" 
                      name="projectDescription"
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

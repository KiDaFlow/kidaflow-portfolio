import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            About KiDaFlow
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're a specialised AI automation agency dedicated to unlocking business potential through intelligent workflow solutions
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 border-primary/20 bg-gradient-surface">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              To empower businesses by building custom AI agents and workflow automations that eliminate manual work, reduce errors, and unlock unlimited growth potential.
            </p>
          </CardContent>
        </Card>

        {/* What We Do */}
        <div className="space-y-8 mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Custom AI Agents",
                description: "Intelligent agents that handle complex tasks, from customer interactions to data processing, with human-like understanding."
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Workflow Automation",
                description: "End-to-end process automation that connects your tools and systems for seamless, error-free operations."
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Integration Solutions",
                description: "Connect disparate systems and tools into unified workflows that work together intelligently."
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Ongoing Support",
                description: "Continuous optimisation and support to ensure your automations evolve with your business needs."
              }
            ].map((service, index) => (
              <Card key={service.title} className="hover:border-primary/20 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="space-y-8 mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center">
            Our Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                step: "01",
                title: "Understand",
                description: "We dive deep into your business processes to identify automation opportunities"
              },
              {
                step: "02", 
                title: "Design",
                description: "Custom solutions tailored to your specific needs and existing technology stack"
              },
              {
                step: "03",
                title: "Deploy",
                description: "Seamless implementation with thorough testing and comprehensive training"
              }
            ].map((step, index) => (
              <div key={step.step} className="space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto">
                  {step.step}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="space-y-8 mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground text-center">
            Tools & Technologies
          </h2>
          
          <Card>
            <CardContent className="pt-8 pb-8">
              <p className="text-muted-foreground text-center mb-6">
                We work with industry-leading tools and platforms to deliver robust, scalable solutions:
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Make.com", "Zapier", "n8n", "OpenAI", "GoHighLevel", 
                  "Retell", "Cal.com", "Airtable", "Twilio", "Buffer"
                ].map((tool) => (
                  <div 
                    key={tool}
                    className="px-4 py-2 bg-muted rounded-lg text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="border-primary/20 bg-gradient-primary">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              Ready to Unlock Your Business Potential?
            </h2>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Let's discuss how our AI automation solutions can transform your operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold group">
                  Get In Touch
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-white/20 text-primary-foreground hover:bg-white/10 font-semibold">
                  View Our Work
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
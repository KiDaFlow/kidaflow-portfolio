import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project/project-card";
import { StatsSection } from "@/components/stats-section";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TypingText } from "@/components/ui/typing-text";
import { useParallax } from "@/hooks/use-parallax";

const Index = () => {
  const { ref: heroRef, offset: heroOffset } = useParallax(0.3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-hero">
        <div
          ref={heroRef}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 animate-fade-in hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span className="text-sm font-medium">AI Automation Specialists</span>
            </div>

            {/* Main Headline with Typing Effect */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-up">
              Unlock Your Business with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                <TypingText
                  texts={["AI Automation", "Smart Workflows", "Intelligent Solutions", "AI Automation"]}
                  typingSpeed={120}
                  deletingSpeed={80}
                  delayBetween={2500}
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "200ms" }}>
              Custom AI agents and workflow automations that elevate operations and unlock unlimited growth potential
            </p>

            {/* CTAs with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <MagneticButton strength={0.2}>
                <Link to="/projects">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg shadow-medium hover:shadow-glow transition-all duration-medium group">
                    Explore Our Work
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="bg-transparent border-white/80 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold px-8 py-4 text-lg transition-all duration-200">
                    Start Your Project
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Floating elements with enhanced animation */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose KiDaFlow?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialise in building intelligent automation solutions that transform how you work
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Lightning Fast Setup",
                description: "Get your automations up and running in days, not months. Our proven frameworks accelerate deployment."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Precision Built",
                description: "Every automation is crafted specifically for your business needs with meticulous attention to detail."
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "AI-Powered Intelligence",
                description: "Harness the latest AI technologies to create truly intelligent workflows that adapt and learn."
              }
            ].map((feature, index) => (
              <Reveal key={feature.title} direction="up" delay={index * 150}>
                <div className="text-center group h-full p-6 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 transition-all duration-300 hover:shadow-medium">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-medium shadow-soft group-hover:shadow-glow">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how we've transformed businesses with intelligent automation
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <Reveal key={project.id} direction="up" delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <Reveal direction="scale">
            <div className="text-center">
              <MagneticButton>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="font-semibold px-8 py-4 border-primary/20 text-foreground hover:bg-primary/5 group">
                    View All Projects
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Join the growing number of businesses that have unlocked their potential with our AI automation solutions
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <MagneticButton strength={0.25}>
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-medium hover:shadow-strong group">
                      Start Your Project
                      <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <Link to="/projects">
                    <Button size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20 font-semibold px-8 py-4 text-lg">
                      View Our Portfolio
                    </Button>
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Background decoration with animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "0.5s" }}></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        </div>
      </section>
    </div>
  );
};

export default Index;

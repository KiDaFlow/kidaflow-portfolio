import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Never-Miss Revenue Protection System",
      price: "$8,500 - $15,000",
      badge: "Eliminate: Lost deals from missed calls",
      badgeVariant: "destructive" as const,
      featured: true,
      painPoints: [
        "The sick feeling when you see '6 missed calls' Monday morning",
        "Losing deals to competitors who answer first",
        "Wondering how much revenue walked away this weekend"
      ],
      eliminates: [
        "Missed after-hours calls",
        "Lost revenue from slow response times",
        "Customer frustration from voicemail"
      ],
      tech: "AI Voice Agent (Retell/Vapi) + Calendar + CRM integration",
      roi: "Pays for itself after recovering 3 missed deals",
      cta: "Eliminate Missed Revenue"
    },
    {
      name: "Zero-Leakage Sales System",
      price: "$6,500 - $12,000",
      badge: "Eliminate: Deals dying in CRM limbo",
      badgeVariant: "destructive" as const,
      featured: false,
      painPoints: [
        "Deals falling through because someone forgot to follow up",
        "Asking your team 'did you call them back?' 47 times/week",
        "Watching qualified leads go cold in your CRM"
      ],
      eliminates: [
        "Revenue blind spots from poor follow-up",
        "Manual CRM updates and task tracking",
        "Deals slipping through cracks"
      ],
      tech: "CRM automation, task triggers, auto-follow-ups, alerts",
      roi: "If 30% of your pipeline leaks, this saves $150k+/year",
      cta: "Plug Revenue Leaks"
    },
    {
      name: "24/7 Lead Qualification Engine",
      price: "$5,500 - $9,000",
      badge: "Eliminate: Pipeline panic",
      badgeVariant: "destructive" as const,
      featured: false,
      painPoints: [
        "It's the 20th, quota due in 10 days, only 3 qualified leads",
        "Sales reps wasting 60% of time on manual prospecting",
        "Leads going cold while you research them"
      ],
      eliminates: [
        "Empty pipeline anxiety",
        "Manual lead research and qualification",
        "Slow outreach cycles"
      ],
      tech: "Lead scraping, enrichment, AI personalization, automated outreach",
      roi: "Books ONE extra client/month = immediate ROI",
      cta: "Fill Your Pipeline"
    }
  ];

  const comparisonData = [
    {
      system: "Never-Miss Revenue",
      bestFor: "Service businesses losing after-hours deals",
      painSolved: "Missed calls = lost revenue",
      dealValue: "$2,000+",
      roiTimeline: "First recovered deal",
      setupTime: "2-3 weeks"
    },
    {
      system: "Zero-Leakage Sales",
      bestFor: "Teams with leaky follow-up processes",
      painSolved: "Deals dying from poor tracking",
      dealValue: "$5,000+",
      roiTimeline: "30-60 days",
      setupTime: "3-4 weeks"
    },
    {
      system: "Lead Qualification",
      bestFor: "Sales teams drowning in prospecting",
      painSolved: "Empty pipeline + manual research",
      dealValue: "$3,000+",
      roiTimeline: "45-60 days",
      setupTime: "2-3 weeks"
    }
  ];

  const faqs = [
    {
      question: "Do I pay this every month?",
      answer: "No! This is a one-time build cost. You own the system. The only ongoing costs are the third-party tools it connects to (CRM, AI services, etc.), which typically run $50-300/month depending on your usage."
    },
    {
      question: "What if I need changes after launch?",
      answer: "Minor tweaks and adjustments in the first 30 days are included. After that, we offer maintenance packages starting at $500/month for ongoing optimization, new features, and priority support."
    },
    {
      question: "How long does implementation take?",
      answer: "Most systems are deployed in 2-4 weeks. This includes discovery, build, testing, and team training. Rush implementations (1 week) are available for an additional 30% fee."
    },
    {
      question: "Can I start with one system and add more?",
      answer: "Absolutely! Many clients start with one high-impact system and expand once they see ROI. We offer 15% off when you add a second system within 90 days."
    },
    {
      question: "What's included in ongoing support?",
      answer: "All systems include 30 days of post-launch support for bug fixes and adjustments. Extended support packages cover monitoring, optimization, tool updates, and new feature additions."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative">
          <div className="text-center space-y-6 mb-20">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
              Investment in Your Business Growth
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the system that eliminates your biggest revenue leak
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative hover:shadow-glow hover:-translate-y-1 transition-all duration-medium border-primary/20 ${
                  plan.featured ? 'ring-2 ring-primary shadow-medium' : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground border-0 shadow-medium">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="space-y-4 pb-6">
                  <Badge variant={plan.badgeVariant} className="w-fit">
                    {plan.badge}
                  </Badge>
                  
                  <h3 className="font-heading text-xl font-bold text-foreground leading-tight">
                    {plan.name}
                  </h3>
                  
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* What keeps you up */}
                  <div className="space-y-3">
                    <p className="text-sm uppercase text-muted-foreground font-semibold tracking-wider">
                      What keeps you up:
                    </p>
                    <ul className="space-y-2">
                      {plan.painPoints.map((point, i) => (
                        <li key={i} className="text-sm italic text-muted-foreground leading-relaxed">
                          "{point}"
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What we eliminate */}
                  <div className="space-y-3">
                    <p className="text-sm uppercase text-muted-foreground font-semibold tracking-wider">
                      What we eliminate:
                    </p>
                    <ul className="space-y-2">
                      {plan.eliminates.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-border space-y-2">
                    <p className="text-xs uppercase text-muted-foreground font-semibold">
                      Tech Included:
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {plan.tech}
                    </p>
                  </div>

                  {/* ROI */}
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="text-sm font-bold text-primary">
                      {plan.roi}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button 
                    asChild
                    className="w-full"
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link to="/contact">
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
              Not Sure Which System Fits?
            </h2>
            
            <div className="overflow-x-auto">
              <Card>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">System</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Best For</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Pain Point Solved</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Avg Deal Value Needed</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">ROI Timeline</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Setup Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {comparisonData.map((row, index) => (
                        <tr key={row.system} className="hover:bg-muted/20 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-foreground">{row.system}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{row.bestFor}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{row.painSolved}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{row.dealValue}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{row.roiTimeline}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{row.setupTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Custom Solutions */}
          <Card className="mb-20 border-primary/20 bg-gradient-surface">
            <CardContent className="pt-8 pb-8">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                  Need a Custom Intelligence Layer?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Complex multi-system integrations, proprietary workflows, or unique business logic
                </p>
                <p className="text-2xl font-bold text-primary">
                  Starting at $3,500
                </p>
                <Button asChild size="lg" variant="default">
                  <Link to="/contact">
                    Discuss Your Needs
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
              Frequently Asked Questions
            </h2>
            
            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <Card className="border-primary/20 bg-gradient-primary">
            <CardContent className="pt-10 pb-10 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Stop Losing Revenue to Manual Processes
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Book a 15-minute ROI calculator call. We'll show you exactly how much your current process is costing you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold group">
                    Calculate My ROI
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20 font-semibold">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

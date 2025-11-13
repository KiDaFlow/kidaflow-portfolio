import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { Star, Zap, Clock } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: <Star className="h-6 w-6" />,
    value: 100,
    suffix: "%",
    label: "Job Success & Top Rated",
    color: "text-amber-500"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    value: 200,
    suffix: "+",
    label: "Automations Built",
    color: "text-primary"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: 90,
    suffix: "%",
    label: "Time Savings Reported",
    color: "text-accent"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself - delivering consistent value for businesses worldwide
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} direction="scale" delay={index * 100}>
              <Card className="text-center border border-border hover:border-primary/20 transition-all duration-medium hover:shadow-medium hover:-translate-y-2 group h-full">
                <CardContent className="pt-8 pb-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-medium ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="font-heading text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
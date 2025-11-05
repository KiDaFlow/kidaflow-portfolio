import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Zap, Clock } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const stats: StatItem[] = [
  {
    icon: <Star className="h-6 w-6" />,
    value: "100%",
    label: "Job Success & Top Rated",
    color: "text-amber-500"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    value: "200+",
    label: "Automations Built",
    color: "text-primary"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "90%",
    label: "Time Savings Reported",
    color: "text-accent"
  }
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself - delivering consistent value for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="text-center border border-border hover:border-primary/20 transition-all duration-medium hover:shadow-medium group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform duration-medium ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <div className="font-heading text-3xl font-bold text-foreground">
                    {stat.value.includes('%') ? (
                      <>
                        <AnimatedCounter target={parseInt(stat.value)} />%
                      </>
                    ) : stat.value.includes('+') ? (
                      <>
                        <AnimatedCounter target={parseInt(stat.value)} />+
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
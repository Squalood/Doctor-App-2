import { useEffect, useRef, useState } from "react";
import { Shield, Award, Languages, Building } from "lucide-react";
import { PageType } from "@/types/pages";

interface TrustStripProps {
  content: PageType["landingPageJson"]["trustStrip"];
}

// Mapeo de iconos
const iconMap = {
  Building,
  Award,
  Shield,
  Languages,
};

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

export const TrustStrip = ({ content }: TrustStripProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-8 bg-card border-y border-border/50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {content.stats.map((stat, index) => (
            <StatItem 
              key={index} 
              {...stat} 
              isVisible={isVisible} 
              delay={index * 150} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  icon: string;
  value: number | string;
  suffix?: string;
  label: string;
  isNumber?: boolean;
  isVisible: boolean;
  delay: number;
}

const StatItem = ({ icon, value, suffix = "", label, isNumber, isVisible, delay }: StatItemProps) => {
  const Icon = iconMap[icon as keyof typeof iconMap];
  const count = useCountUp(typeof value === "number" ? value : 0, 2000, isVisible && isNumber === true);

  return (
    <div
      className="flex flex-col items-center text-center animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">
        {isNumber ? count : value}
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};
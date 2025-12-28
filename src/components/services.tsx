import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Syringe,
  Activity,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { LandingPageJson } from "@/types/landingPageJson";

interface ServicesProps {
  content: LandingPageJson["services"];
}

// Mapeo de iconos
const iconMap = {
  Stethoscope,
  Syringe,
  Activity,
};

export const Services = ({ content }: ServicesProps) => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {content.header.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.header.description}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {content.items.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              cta={content.cta}
              delay={index * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  price: string;
  duration: string;
  benefit: string;
  color: string;
  cta: {
    text: string;
    url: string;
  };
  delay: number;
}

const ServiceCard = ({
  icon,
  title,
  price,
  duration,
  benefit,
  color,
  cta,
  delay,
}: ServiceCardProps) => {
  const Icon = iconMap[icon as keyof typeof iconMap];
  
  const colorClasses =
    {
      primary: "bg-primary/10 text-primary",
      cta: "bg-cta/10 text-cta",
      accent: "bg-accent/10 text-accent",
      outline: "bg-muted/50 text-foreground",
    }[color] || "bg-primary/10 text-primary";

  return (
    <div
      className="card-elevated p-6 flex flex-col h-full animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl ${colorClasses} flex items-center justify-center mb-5`}
      >
        <Icon className="w-7 h-7" />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
        {title}
      </h3>

      {/* Price & Duration */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg font-semibold text-foreground">{price}</span>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          {duration}
        </span>
      </div>

      {/* Benefit */}
      <p className="text-muted-foreground text-sm grow mb-6">{benefit}</p>

      {/* CTA */}
      <Button variant="outline" size="sm" asChild>
        <Link
          href={`https://lymbika.com/clinics/${process.env.NEXT_PUBLIC_CLINIC_SLUG || 'clinica-de-neurologia'}`}
          className="flex items-center gap-2"
        >
          <span>{cta.text}</span>
        </Link>
      </Button>
    </div>
  );
};
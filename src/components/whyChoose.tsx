import { Building, Award, Users, MessageCircle, Play } from "lucide-react";
import { LandingPageJson } from "@/types/LandingPageJson";

interface WhyChooseProps {
  content: LandingPageJson["whyChoose"];
}

// Mapeo de iconos
const iconMap = {
  Building,
  Award,
  Users,
  MessageCircle,
};

export const WhyChoose = ({ content }: WhyChooseProps) => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              {content.header.title}{" "}
              <span className={`text-${content.header.highlightColor}`}>
                {content.header.titleHighlight}
              </span>
            </h2>

            <div className="space-y-6">
              {content.features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                
                return (
                  <div
                    key={index}
                    className="flex gap-4 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Testimonial Card + Video CTA */}
          <div className="space-y-6">
            {/* Quote Card */}
            <div 
              className="card-elevated p-8 animate-slide-up opacity-0" 
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(content.testimonialCard.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="text-lg text-foreground mb-4">
                "{content.testimonialCard.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-semibold text-secondary-foreground">
                    {content.testimonialCard.author.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {content.testimonialCard.author.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {content.testimonialCard.author.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Video CTA */}
            <div
              className="relative overflow-hidden rounded-xl bg-linear-to-br from-primary/10 to-cta/10 p-8 animate-slide-up opacity-0 group cursor-pointer"
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-cta flex items-center justify-center shadow-cta group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-cta-foreground ml-1" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {content.videoCta.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {content.videoCta.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
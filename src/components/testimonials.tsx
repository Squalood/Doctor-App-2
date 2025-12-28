import { Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingPageJson } from "@/types/landingPageJson";

interface TestimonialsProps {
  content: LandingPageJson["testimonials"];
}

export const Testimonials = ({ content }: TestimonialsProps) => {
  return (
    <section id="testimonios" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {content.header.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.header.description}
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {content.items.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 150} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            {content.cta.text}
          </Button>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  quote: string;
  isVideo: boolean;
  delay: number;
}

const TestimonialCard = ({
  name,
  location,
  rating,
  quote,
  isVideo,
  delay,
}: TestimonialCardProps) => {
  return (
    <div
      className="card-elevated p-6 flex flex-col h-full animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-primary/30 mb-4" />

      {/* Rating */}
      <div className="flex gap-1 text-accent mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground grow mb-6">"{quote}"</blockquote>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <span className="font-semibold text-secondary-foreground text-sm">
              {name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{location}</p>
          </div>
        </div>

        {isVideo && (
          <button className="w-10 h-10 rounded-full bg-cta flex items-center justify-center shadow-cta hover:scale-110 transition-transform">
            <Play className="w-4 h-4 text-cta-foreground ml-0.5" />
          </button>
        )}
      </div>
    </div>
  );
};
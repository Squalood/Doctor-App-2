import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Video, Building } from "lucide-react";
import Link from "next/link";
import { PageType } from "@/types/pages";

interface HeroProps {
  content: PageType["landingPageJson"]["hero"];
}

export const Hero = ({ content }: HeroProps) => {
  return (
    <section
      className="relative h-full pt-20 pb-16 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230057D1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Doctor Info */}
          <div className="order-2 lg:order-1 pt-8 lg:pt-16">
            {/* Trust Badge */}
            <div
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: "100ms" }}
            >
              <Badge className="bg-secondary text-secondary-foreground border-0 px-4 py-1.5 text-sm font-medium mb-6">
                {content.badge.text}
              </Badge>
            </div>

            {/* Heading */}
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "200ms" }}
            >
              {content.doctor.name}
              <span className="block text-primary mt-2">
                {content.doctor.specialty}
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "300ms" }}
            >
              {content.description.services}
              <span className="block mt-1">
                {content.description.location}{" "}
                <span className="text-primary font-medium">
                  {content.description.language}
                </span>
              </span>
            </p>

            {/* Location Tags */}
            <div
              className="flex flex-wrap gap-3 mb-8 animate-fade-in-up opacity-0"
              style={{ animationDelay: "400ms" }}
            >
              {content.locations.map((location: { name: string; color: string }, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground shadow-sm border border-border/50"
                >
                  <MapPin className={`w-4 h-4 text-${location.color}`} />
                  {location.name}
                </span>
              ))}
            </div>

            {/* Doctor Image - Mobile */}
            <div
              className="lg:hidden mb-8 animate-fade-in-up opacity-0"
              style={{ animationDelay: "350ms" }}
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-primary/10" />
                <img
                  src={content.doctor.image}
                  alt={content.doctor.imageAlt}
                  className="relative w-full h-full object-cover object-top rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* CTA Buttons - Desktop */}
            <div
              className="hidden lg:flex items-center gap-4 animate-fade-in-up opacity-0"
              style={{ animationDelay: "500ms" }}
            >
              <Button variant="outline" size="lg" asChild>
                <Link
                  href={content.cta.primary.url}
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>{content.cta.primary.text}</span>
                </Link>
              </Button>

              <Button variant="secondary" size="lg">
                <Video className="w-5 h-5" />
                {content.cta.secondary.text}
              </Button>
            </div>
          </div>

          {/* Right Column - Booking Card + Doctor Image */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            {/* Doctor Image - Desktop */}
            <div
              className="hidden lg:block relative mb-6 animate-fade-in-up opacity-0"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/20 to-cta/20 blur-2xl" />
                <img
                  src={content.doctor.image}
                  alt={content.doctor.imageAlt}
                  className="relative w-full h-full object-cover object-top rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Booking Card */}
            <div
              className="card-elevated p-6 animate-slide-up opacity-0"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {content.pricing.label}
                  </p>
                  <p className="text-3xl font-heading font-bold text-foreground">
                    {content.pricing.amount}{" "}
                    <span className="text-base font-normal text-muted-foreground">
                      {content.pricing.currency}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <span className="text-sm font-semibold">
                    ★ {content.pricing.rating}
                  </span>
                </div>
              </div>

              {/* Modality Selector */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {content.modalities.map((modality: { id: string; icon: string; label: string; isDefault: boolean }) => {
                  const Icon = modality.icon === "Building" ? Building : Video;
                  return (
                    <button
                      key={modality.id}
                      className={
                        modality.isDefault
                          ? "flex items-center justify-center gap-2 p-3 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm border-2 border-primary transition-all hover:bg-primary hover:text-primary-foreground"
                          : "flex items-center justify-center gap-2 p-3 rounded-lg bg-muted text-muted-foreground font-medium text-sm border-2 border-transparent transition-all hover:border-border"
                      }
                    >
                      <Icon className="w-4 h-4" />
                      {modality.label}
                    </button>
                  );
                })}
              </div>

              {/* Main CTA */}
              <Button variant="outline" size="lg" asChild>
                <Link
                  href={content.cta.primary.url}
                  className="flex items-center gap-2 w-full my-4"
                >
                  <Calendar className="h-5 w-5" />
                  <span>{content.cta.primary.text}</span>
                </Link>
              </Button>

              {/* Microcopy */}
              <p className="text-xs text-center text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse-subtle" />
                  {content.microcopy.text}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-card/95 backdrop-blur-md border-t border-border z-40">
        <Button variant="outline" size="lg" asChild>
          <Link
            href={content.cta.primary.url}
            className="flex items-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            <span>{content.cta.primary.text}</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};
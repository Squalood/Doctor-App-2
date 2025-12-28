import { Calendar, ClipboardCheck, HeartPulse } from "lucide-react";
import { LandingPageJson } from "@/types/LandingPageJson";

interface ProcessProps {
  content: LandingPageJson["process"];
}

// Mapeo de iconos
const iconMap = {
  Calendar,
  ClipboardCheck,
  HeartPulse,
};

export const Process = ({ content }: ProcessProps) => {
  return (
    <section className="section-padding bg-background">
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

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-linear-to-r from-primary via-cta to-accent rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {content.steps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Card */}
                  <div className="card-elevated p-6 text-center relative z-10">
                    {/* Icon Circle */}
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-linear-to-br from-primary to-cta flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>

                    {/* Step Number */}
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-bold rounded-full mb-4">
                      Paso {step.number}
                    </span>

                    {/* Content */}
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connection Line */}
                  {index < content.steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-linear-to-b from-primary to-cta rounded-full" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
import { Building, Award, Users, MessageCircle, Play } from "lucide-react";

const features = [
  {
    icon: Building,
    title: "Star Médica — Quirófanos prioritarios",
    description: "Acceso a instalaciones de primer nivel con tecnología de punta",
  },
  {
    icon: Award,
    title: "+15 años de experiencia",
    description: "Formación en instituciones líderes a nivel nacional e internacional",
  },
  {
    icon: Users,
    title: "+2,500 procedimientos exitosos",
    description: "Track record comprobado con altos índices de satisfacción",
  },
  {
    icon: MessageCircle,
    title: "English friendly",
    description: "Atención bilingüe para pacientes de El Paso y New Mexico",
  },
];

export const WhyChoose = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              ¿Por qué elegir al{" "}
              <span className="text-primary">Dr. Guinto?</span>
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Testimonial Card + Video CTA */}
          <div className="space-y-6">
            {/* Quote Card */}
            <div className="card-elevated p-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="text-lg text-foreground mb-4">
                "El Dr. Guinto me explicó todo el proceso con mucha claridad. La infiltración fue rápida y profesional. A las 3 semanas ya estaba sin dolor."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-semibold text-secondary-foreground">MR</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">María R.</p>
                  <p className="text-sm text-muted-foreground">Paciente de El Paso, TX</p>
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
                  <p className="font-semibold text-foreground">Ver procedimiento</p>
                  <p className="text-sm text-muted-foreground">Infiltración de columna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

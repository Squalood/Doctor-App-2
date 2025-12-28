import { Button } from "@/components/ui/button";
import { Plane, Hotel, Car, Languages, Calendar } from "lucide-react";
import Link from "next/link";

const supportItems = [
  {
    icon: Car,
    title: "Traslado",
    description: "Coordinación de transporte desde El Paso",
  },
  {
    icon: Hotel,
    title: "Hospedaje",
    description: "Opciones cerca de Star Médica",
  },
  {
    icon: Languages,
    title: "Intérprete",
    description: "Acompañamiento bilingüe",
  },
  {
    icon: Plane,
    title: "Facturación",
    description: "Documentación para seguros US",
  },
];

export const TravelSupport = () => {
  return (
    <section className="section-padding bg-linear-to-br from-primary/5 to-cta/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              Pacientes de El Paso / New Mexico
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Atención médica de calidad,{" "}
              <span className="text-primary">a minutos de la frontera</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Nuestro equipo de Medical Agents te acompaña desde la reserva hasta el seguimiento post-procedimiento. Sin barreras de idioma, sin complicaciones.
            </p>

            {/* Support Items Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {supportItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="outline" size="lg" asChild>
                <Link
                  href={`https://lymbika.com/clinics/${process.env.NEXT_PUBLIC_CLINIC_SLUG || 'clinica-de-neurologia'}`}
                  className="flex items-center gap-2 w-full my-4"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Ir a Lymbika</span>
                </Link>
              </Button>
          </div>

          {/* Right - Map/Visual */}
          <div className="relative">
            <div className="card-elevated p-8 text-center">
              <div className="w-full h-64 bg-muted rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-muted-foreground text-sm">
                    Star Médica Ciudad Juárez
                  </p>
                  <p className="text-foreground font-medium">
                    A 10 min de Puente Internacional
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-primary">10 min</p>
                  <p className="text-muted-foreground">desde El Paso</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-cta">40-70%</p>
                  <p className="text-muted-foreground">ahorro vs. US</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

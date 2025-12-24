import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué cubre el depósito de $200 MXN?",
    answer: "El depósito reserva tu slot de cita y se aplica íntegramente al costo total de tu valoración o procedimiento. Si cancelas con más de 48 horas de anticipación, recibes reembolso completo.",
  },
  {
    question: "¿Aceptan pacientes de Estados Unidos?",
    answer: "Sí, atendemos regularmente pacientes de El Paso, TX y New Mexico. Ofrecemos soporte completo con Medical Agent bilingüe, coordinación de traslados y opciones de hospedaje cerca de Star Médica.",
  },
  {
    question: "¿En qué idiomas se puede recibir atención?",
    answer: "El Dr. Guinto habla español e inglés con fluidez. Todo el equipo de Medical Agents es bilingüe para garantizar comunicación clara durante todo el proceso.",
  },
  {
    question: "¿Cuál es el tiempo de recuperación típico?",
    answer: "Depende del procedimiento: infiltraciones permiten alta el mismo día con reposo de 24-48h. Cirugías menores requieren 1-2 semanas. Cirugías mayores pueden requerir 4-6 semanas. El Dr. Guinto detallará tu caso específico.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo (MXN/USD), tarjetas de crédito/débito (Visa, Mastercard, Amex), y transferencia bancaria. El depósito se procesa vía Stripe con total seguridad.",
  },
  {
    question: "¿Ofrecen telemedicina para la primera consulta?",
    answer: "Sí, ofrecemos consultas de valoración inicial por telemedicina para pacientes que no pueden viajar inmediatamente. Ideal para segunda opinión o evaluación preliminar antes de programar procedimientos.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber antes de tu cita
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }} />
    </section>
  );
};

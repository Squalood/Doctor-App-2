import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">L</span>
              </div>
              <span className="font-heading font-bold text-xl">Lymbika</span>
            </div>
            <p className="text-background/70 text-sm mb-6">
              Conectando pacientes con especialistas de confianza. Atención médica premium en la frontera.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+526561234567" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" />
                  +52 656 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:citas@lymbika.com" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                  <Mail className="w-4 h-4" />
                  citas@lymbika.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Star Médica Ciudad Juárez<br />
                  Paseo de la Victoria 631, Partido Iglesias
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Horarios</h3>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>Lun - Vie: 9:00 - 19:00</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>Sáb: 9:00 - 14:00</span>
              </li>
              <li className="text-sm">
                *Urgencias: Disponibilidad 24/7 en Star Médica
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Lymbika. Todos los derechos reservados.
          </p>
          <p className="text-background/50 text-sm">
            Powered by Lymbika Health Network
          </p>
        </div>
      </div>

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. José Orlando Guinto - Neurocirugía",
          "image": "",
          "url": "https://drjoseorlandoguinto.com",
          "telephone": "+526561234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Paseo de la Victoria 631",
            "addressLocality": "Ciudad Juárez",
            "addressRegion": "Chihuahua",
            "postalCode": "32618",
            "addressCountry": "MX"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.7325,
            "longitude": -106.4847
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "14:00"
            }
          ],
          "priceRange": "$$"
        })
      }} />

      {/* Schema.org Physician */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": "Dr. José Orlando Guinto Nava",
          "medicalSpecialty": "Neurosurgery",
          "hospitalAffiliation": {
            "@type": "Hospital",
            "name": "Star Médica Ciudad Juárez"
          },
          "availableLanguage": ["Spanish", "English"]
        })
      }} />
    </footer>
  );
};

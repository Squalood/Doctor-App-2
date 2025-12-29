import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { LandingPageJson } from "@/types/landingPageJson";

interface FooterProps {
  content: LandingPageJson["footer"];
}

// Mapeo de iconos
const iconMap = {
  Facebook,
  Instagram,
  Linkedin,
};

export const Footer = ({ content }: FooterProps) => {
  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  {content.brand.logo}
                </span>
              </div>
              <span className="font-heading font-bold text-xl">
                {content.brand.name}
              </span>
            </div>
            <p className="text-background/70 text-sm mb-6">
              {content.brand.description}
            </p>
            <div className="flex gap-4">
              {content.social.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {content.contact.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={content.contact.phone.url}
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {content.contact.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={content.contact.email.url}
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {content.contact.email.label}
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {content.contact.address.name}
                  <br />
                  {content.contact.address.street}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {content.hours.title}
            </h3>
            <ul className="space-y-3 text-background/70">
              {content.hours.schedule.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Clock className="w-4 h-4" />
                  <span>
                    {item.days}: {item.hours}
                  </span>
                </li>
              ))}
              <li className="text-sm">{content.hours.emergency}</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {content.legal.title}
            </h3>
            <ul className="space-y-3">
              {content.legal.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            {content.copyright.text}
          </p>
          <p className="text-background/50 text-sm">
            {content.copyright.powered}
          </p>
        </div>
      </div>
    </footer>
  );
};
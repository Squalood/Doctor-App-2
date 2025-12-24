import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Globe, Calendar } from "lucide-react";
import Link from "next/link";
import { LandingPageJson } from "@/types/pages";

interface HeaderProps {
  content: LandingPageJson["telephone"];
}

export const Header = ({ content }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: language === "ES" ? "Servicios" : "Services", href: "#servicios" },
    { label: language === "ES" ? "Testimonios" : "Testimonials", href: "#testimonios" },
    { label: language === "ES" ? "Preguntas" : "FAQ", href: "#faq" },
    { label: language === "ES" ? "Contacto" : "Contact", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl text-primary hidden sm:block">
              Lymbika Healthcare
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language}
            </button>

            {/* Phone */}
            <a
              href="tel:+526561234567"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{content.text}</span>
            </a>

            {/* CTA Button */}
            <Button
              variant="outline"
              size="lg"
              //onClick={onBookingClick}
              asChild
            >
              <Link
                  href="https://lymbika.com/clinics/clinica-renal"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Ir a Lymbika</span>
                </Link>
            </Button>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg animate-slide-up">
            <nav className="container-custom py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href="https://lymbika.com/clinics/clinica-renal"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Ir a Lymbika</span>
                  </Link>
                </Button>
                
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

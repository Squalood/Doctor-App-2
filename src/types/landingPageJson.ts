export type LandingPageJson = {
  metadata?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
  telephone: {
    text: string;
  };
  hero: {
    badge: {
      text: string;
    };
    doctor: {
      name: string;
      specialty: string;
      image: string;
      imageAlt: string;
    };
    description: {
      services: string;
      location: string;
      language: string;
    };
    locations: Array<{
      name: string;
      color: string;
    }>;
    pricing: {
      label: string;
      amount: string;
      currency: string;
      rating: string;
    };
    modalities: Array<{
      id: string;
      label: string;
      icon: string;
      isDefault: boolean;
    }>;
    cta: {
      primary: {
        text: string;
        url: string;
        icon: string;
      };
      secondary: {
        text: string;
        icon: string;
      };
    };
    microcopy: {
      text: string;
    };
  };
  trustStrip: {
    stats: Array<{
      icon: string;
      value: string | number;
      label: string;
      isNumber: boolean;
      suffix?: string;
    }>;
  };
  services: {
    header: {
      title: string;
      description: string;
    };
    items: Array<{
      icon: string;
      title: string;
      price: string;
      duration: string;
      benefit: string;
      color: string;
    }>;
    cta: {
      text: string;
      url: string;
    };
  };
  process: {
    header: {
      title: string;
      description: string;
    };
    steps: Array<{
      icon: string;
      number: string;
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    header: {
      title: string;
      description: string;
    };
    items: Array<{
      name: string;
      location: string;
      rating: number;
      quote: string;
      isVideo: boolean;
    }>;
    cta: {
      text: string;
    };
  };
  whyChoose: {
    header: {
      title: string;
      titleHighlight: string;
      highlightColor: string;
    };
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    testimonialCard: {
      rating: number;
      quote: string;
      author: {
        name: string;
        location: string;
        initials: string;
      };
    };
    videoCta: {
      title: string;
      subtitle: string;
    };
  };
  footer: {
    brand: {
      name: string;
      logo: string; 
      description: string; 
    };
    social: Array<{
      name: string; 
      icon: string; 
      url: string;
    }>;
    contact: {
      title: string;
      phone: {
        label: string; 
        url: string; 
      };
      email: {
        label: string; 
        url: string;
      };
      address: {
        name: string; // "Star Médica Ciudad Juárez"
        street: string; // "Paseo de la Victoria 631, Partido Iglesias"
      };
    };
    hours: {
      title: string; // "Horarios"
      schedule: Array<{
        days: string; // "Lun - Vie", "Sáb"
        hours: string; // "9:00 - 19:00", "9:00 - 14:00"
      }>;
      emergency: string; // "*Urgencias: Disponibilidad 24/7..."
    };
    legal: {
      title: string; // "Legal"
      links: Array<{
        text: string; // "Términos y Condiciones"
        url: string; // "#" o URL real
      }>;
    };
    copyright: {
      text: string; // "© 2024 Lymbika..."
      powered: string; // "Powered by Lymbika Health Network"
    };
  };
};

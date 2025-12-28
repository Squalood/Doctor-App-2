export type LandingPageJson = {
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
};
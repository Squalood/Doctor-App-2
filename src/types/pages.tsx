// Tipos para el JSON de la landing page
export type LandingPageJson = {

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
  telephone:{
    text: string;
  }
};

// Tipo para la respuesta de Strapi v5 (sin attributes anidado)
export type StrapiPageResponse = {
  id: number;
  documentId: string;
  namePage: string;
  slug: string;
  landingPageJson: LandingPageJson;
  promo: any[];
  plan: any[];
  hero: any;
  values: any[];
  features: any[];
  steps: any[];
  stats: any[];
  Contact: any;
  imagenRe1: any;
};

// Tipo para la respuesta completa de la API
export type StrapiApiResponse = {
  data: StrapiPageResponse[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

// Tipo para uso en la aplicación
export type PageType = {
  id: number;
  documentId: string;
  namePage: string;
  slug: string;
  landingPageJson: LandingPageJson;
};

// Función helper para transformar la respuesta de Strapi
export function transformStrapiPage(strapiPage: StrapiPageResponse): PageType {
  return {
    id: strapiPage.id,
    documentId: strapiPage.documentId,
    namePage: strapiPage.namePage,
    slug: strapiPage.slug,
    landingPageJson: strapiPage.landingPageJson,
  };
}
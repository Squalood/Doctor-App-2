import { LandingPageJson } from "./landingPageJson";

// Tipo para la respuesta de Strapi v5 (sin attributes anidado)
export type StrapiPageResponse = {
  id: number;
  documentId: string;
  namePage: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  landingPageJson: LandingPageJson;
  promo: PromoItem[];
  plan: PlanItem[];
  hero: HeroSection | null;
  values: ValueItem[];
  features: FeatureItem[];
  steps: StepItem[];
  stats: StatItem[];
  Contact: ContactSection | null;
  imagenRe1: ImageData | null;
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

// Tipos auxiliares para las secciones antiguas
export type ImageData = {
  url: string;
};

export type HeroSection = {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: {
    url: string;
  };
};

export type PromoItem = {
  id: number;
  title: string;
  image: {
    url: string;
  };
  link: string;
};

export type PlanItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  plus: {
    id: number;
    text: string;
  }[];
  less: {
    id: number;
    text: string;
  }[];
  prominent: boolean;
  link: string;
};

export type ValueItem = {
  id: number;
  title: string;
  description: string;
};

export type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type StepItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type StatItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  icon: string;
};

export type ContactSection = {
  title: string;
  direccionText: string;
  timeText: string;
  contactLocation: string;
  contactScheduleLink: string;
  contactPhone: string;
  contactWhatsappLink: string;
  image: {
    url: string;
  };
  description: string;
};

// Tipo para uso en la aplicación (incluye ambos formatos)
export type PageType = {
  id: number;
  documentId: string;
  namePage: string;
  slug: string;
  landingPageJson: LandingPageJson;
  
  // Campos del formato antiguo (opcionales por compatibilidad)
  hero?: HeroSection;
  promo?: PromoItem[];
  plan?: PlanItem[];
  values?: ValueItem[];
  features?: FeatureItem[];
  steps?: StepItem[];
  stats?: StatItem[];
  Contact?: ContactSection;
  imagenRe1?: ImageData;
};

// Función helper para transformar la respuesta de Strapi
export function transformStrapiPage(strapiPage: StrapiPageResponse): PageType {
  return {
    id: strapiPage.id,
    documentId: strapiPage.documentId,
    namePage: strapiPage.namePage,
    slug: strapiPage.slug,
    landingPageJson: strapiPage.landingPageJson,
    // Incluir campos antiguos si existen
    hero: strapiPage.hero || undefined,
    promo: strapiPage.promo?.length > 0 ? strapiPage.promo : undefined,
    plan: strapiPage.plan?.length > 0 ? strapiPage.plan : undefined,
    values: strapiPage.values?.length > 0 ? strapiPage.values : undefined,
    features: strapiPage.features?.length > 0 ? strapiPage.features : undefined,
    steps: strapiPage.steps?.length > 0 ? strapiPage.steps : undefined,
    stats: strapiPage.stats?.length > 0 ? strapiPage.stats : undefined,
    Contact: strapiPage.Contact || undefined,
    imagenRe1: strapiPage.imagenRe1 || undefined,
  };
}
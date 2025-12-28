import { LandingPageJson } from "./LandingPageJson";

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


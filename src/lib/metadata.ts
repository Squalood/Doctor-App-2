import type { Metadata } from "next";
import { StrapiApiResponse } from "@/types/pages";

/**
 * Obtiene los datos de la página desde Strapi
 */
async function fetchPageData(slug: string): Promise<StrapiApiResponse | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`,
      { 
        next: { revalidate: 3600 }, // Cache por 1 hora
        cache: "force-cache" 
      }
    );
    
    if (!res.ok) {
      console.error(`Error fetching page data: ${res.status}`);
      return null;
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

/**
 * Genera metadata desde el JSON de la página
 */
function generateMetadataFromPage(pageData: StrapiApiResponse): Metadata {
  const page = pageData.data?.[0];
  
  if (!page?.landingPageJson) {
    return getDefaultMetadata();
  }

  const { hero, metadata } = page.landingPageJson;
  const doctor = hero?.doctor;
  
  // Usar metadata explícita si existe, sino construir desde hero
  const title = metadata?.title 
    || (doctor?.name && doctor?.specialty 
      ? `${doctor.name} - ${doctor.specialty}` 
      : undefined);
  
  const description = metadata?.description 
    || hero?.description?.services 
    || undefined;

  return {
    title: title || getDefaultMetadata().title,
    description: description || getDefaultMetadata().description,
    keywords: metadata?.keywords?.split(",").map(k => k.trim()),
    openGraph: {
      title: title,
      description: description,
      images: metadata?.ogImage ? [metadata.ogImage] : undefined,
      type: "website",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: metadata?.ogImage ? [metadata.ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

/**
 * Metadata por defecto como fallback
 */
function getDefaultMetadata(): Metadata {
  return {
    title: process.env.NEXT_PUBLIC_CLINIC_NAME || "Clínica Médica",
    description: process.env.NEXT_PUBLIC_CLINIC_DESCRIPTION || "Atención médica especializada",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

/**
 * Función principal para generar metadata de la página
 */
export async function generatePageMetadata(): Promise<Metadata> {
  const PAGE_SLUG = process.env.NEXT_PUBLIC_PAGE_SLUG;
  
  if (!PAGE_SLUG) {
    console.warn("NEXT_PUBLIC_PAGE_SLUG no está configurada, usando metadata por defecto");
    return getDefaultMetadata();
  }
  
  const pageData = await fetchPageData(PAGE_SLUG);
  
  if (!pageData) {
    return getDefaultMetadata();
  }
  
  return generateMetadataFromPage(pageData);
}
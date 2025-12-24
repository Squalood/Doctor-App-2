import { useEffect, useState } from "react";
import { 
  PageType, 
  StrapiApiResponse, 
  transformStrapiPage 
} from "@/types/pages";

export function useGetPage(slug: string | string[]) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pages?filters[slug][$eq]=${slug}&populate=*`;
  const [page, setPage] = useState<PageType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const json: StrapiApiResponse = await res.json();
        
        // Strapi v5 devuelve directamente los objetos en el array data
        if (json.data && json.data.length > 0) {
          const strapiPage = json.data[0];
          const transformedPage = transformStrapiPage(strapiPage);
          setPage(transformedPage);
        } else {
          setError("Página no encontrada");
        }
        
        setLoading(false);
      } catch (error: any) {
        setError(error.message || "Error al cargar la página");
        setLoading(false);
      }
    })();
  }, [url]);

  return { page, loading, error };
}
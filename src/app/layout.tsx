import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { generatePageMetadata } from "@/lib/metadata";

// Inter para el body
const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-inter"
});

// Montserrat para headings
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-montserrat",
  weight: ["600", "700", "800"]
});

// Generar metadata dinámicamente desde Strapi
export async function generateMetadata(): Promise<Metadata> {
  return await generatePageMetadata();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${inter.variable} ${montserrat.variable}`}>
        <TooltipProvider>
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
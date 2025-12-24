import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

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

export const metadata: Metadata = {
  title: "Clínica de Neurología",
  description: "Clínica de Neurología de Dr. José Orlando Guinto Nava",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

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
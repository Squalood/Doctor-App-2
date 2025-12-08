import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Clinica de Nefrología",
  description: "Clinica de Nefrología de la Dra. Ana Karen Ramírez Iracheta",
  icons: {
    icon: [
      { url: "@/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },  
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }, 
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

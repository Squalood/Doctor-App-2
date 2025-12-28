"use client";

import { useGetPage } from "@/api/usePageBySlug";
import { BookingModal } from "@/components/bookingModal";
import { FAQ } from "@/components/fAQ";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TravelSupport } from "@/components/travelSupport";
import { TrustStrip } from "@/components/trustStrip";
import { WhyChoose } from "@/components/whyChoose";
import { useState } from "react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const closeBooking = () => setIsBookingOpen(false);

  const { page, loading, error } = useGetPage("dra-iracheta");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Cargando...</p>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header content={page.landingPageJson.telephone}/>
      
      <main>
        <Hero content={page.landingPageJson.hero}/>
        <TrustStrip content={page.landingPageJson.trustStrip}/>
        <Services content={page.landingPageJson.services}/>
        <WhyChoose content={page.landingPageJson.whyChoose} />
        <Process content={page.landingPageJson.process}/>
        <Testimonials content={page.landingPageJson.testimonials}/>
        <FAQ />
        <TravelSupport />
      </main>

      <Footer />

      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
"use client";

import ClinicSkeleton from "@/components/clinicSkeleton";
import Hero from "@/components/hero";
import { useGetClinicServices } from "../api/useGetClinicsServiceBySlug";
import { useGetClinic } from "@/api/useGetClinicsBySlug";
import Services from "@/components/services";
import WhyUs from "@/components/whyUs";
import Doctor from "@/components/doctor";
import { useGetClinicDoctor } from "@/api/useGetClinicsDoctorBySlug";
import ClinicGallery from "@/components/clinicGallety";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  const slug = "clinica-de-nefrologia"; 
  const { clinic, loading } = useGetClinic(slug);
  const { DoctorClinic } = useGetClinicDoctor(slug)
  const { ServicesClinic } = useGetClinicServices(slug);

  if (loading) {
    return <ClinicSkeleton />;
  }

  if (!clinic) {
    return (
      <div className="py-40 text-center">
        <p className="text-destructive">Clínica no encontrada.</p>
      </div>
    );
  }

  if (!DoctorClinic || !DoctorClinic.doctor) {
    return <p>No se encontró información del doctor.</p>;
  }
  const { doctor } = DoctorClinic;

  if (!ServicesClinic || !ServicesClinic.services) {
    return <p>No se encontró información de los servicios.</p>;
  }
  const { services } = ServicesClinic;

  return (
    <main>
      <Hero data={clinic} /> 
      <Services services={services} />
      <WhyUs features={clinic.features} />
      <Doctor data={doctor} />   
      <Testimonials list={clinic.testimonials} />
      
      {clinic.gallery && clinic.gallery.length > 0 && (
        <ClinicGallery clinic={clinic} />
      )}
      <Contact data={clinic} />
    </main>
  );
}
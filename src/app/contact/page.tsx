import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Nabil Makarim melalui email atau media sosial: Instagram, GitHub, LinkedIn, dan Discord.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Hubungi Saya"
        description="Satu pesan kecil bisa menjadi awal kolaborasi besar. Jangan ragu untuk menyapa."
      />
      <ContactSection />
    </>
  );
}
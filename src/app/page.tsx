import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HighlightCards from "@/components/home/HighlightCards";
import PageHeader from "@/components/layout/PageHeader";
import IdentitySection from "@/components/about/IdentitySection";
import SkillsSection from "@/components/about/SkillsSection";
import JourneySection from "@/components/about/JourneySection";
import GallerySection from "@/components/gallery/GallerySection";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Beranda",
  description:
    "Portofolio Nabil Makarim: siswa SMK Negeri 4 Malang yang fokus pada web development dan UI yang bersih.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightCards />
      <PageHeader
        id="about"
        label="About"
        title="Tentang Saya"
        description="Mengenal lebih dekat siapa saya, latar belakang pendidikan, serta kemampuan yang terus berkembang."
      />
      <IdentitySection />
      <SkillsSection />
      <JourneySection />
      <PageHeader
        id="gallery"
        label="Gallery"
        title="Karya & Jejak"
        description="Proyek yang pernah dibangun, prestasi yang diraih, serta kegiatan yang diikuti sepanjang perjalanan belajar."
      />
      <GallerySection />
      <PageHeader
        id="contact"
        label="Contact"
        title="Hubungi Saya"
        description="Satu pesan kecil bisa menjadi awal kolaborasi besar. Jangan ragu untuk menyapa."
      />
      <ContactSection />
    </>
  );
}
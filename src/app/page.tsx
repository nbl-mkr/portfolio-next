import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HighlightCards from "@/components/home/HighlightCards";

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
    </>
  );
}
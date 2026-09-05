import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import IdentitySection from "@/components/about/IdentitySection";
import SkillsSection from "@/components/about/SkillsSection";
import JourneySection from "@/components/about/JourneySection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Identitas, bio, skill, dan perjalanan belajar Muhammad Nabil Makarim Rofi'i.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Tentang Saya"
        description="Mengenal lebih dekat siapa saya, latar belakang pendidikan, serta kemampuan yang terus berkembang."
      />
      <IdentitySection />
      <SkillsSection />
      <JourneySection />
    </>
  );
}
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import GallerySection from "@/components/gallery/GallerySection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Kumpulan proyek, prestasi, dan keikutsertaan Nabil Makarim yang relevan dengan dunia kerja.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Gallery"
        title="Karya & Jejak"
        description="Proyek yang pernah dibangun, prestasi yang diraih, serta kegiatan yang diikuti sepanjang perjalanan belajar."
      />
      <GallerySection />
    </>
  );
}
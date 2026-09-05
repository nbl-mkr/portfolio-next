export type GalleryCategory = "Proyek" | "Prestasi" | "Keikutsertaan";

export interface GalleryItem {
  id: number;
  category: GalleryCategory;
  title: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Proyek",
    title: "SwaraNusa Website",
    year: "2025-2026",
    description: "Website pertama yang dibangun dengan native HTML, CSS, dan JavaScript sebagai sarana belajar.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/thumbnail_1.png",
  },
  {
    id: 2,
    category: "Proyek",
    title: "Grafikantin Website",
    year: "2026",
    description: "Website pemesanan menu kantin untuk siswa SMK Negeri 4 Malang dengan fokus pada UI/UX modern dan interaktif.",
    tags: ["Tailwind", "Next.js", "Supabase"],
    image: "/thumbnail_2.png",
  },
  {
    id: 3,
    category: "Proyek",
    title: "MyPorto Website",
    year: "2026",
    description: "Website portofolio untuk pengenalan profil pribadi dibuat untuk memberikan teks informatif.",
    tags: ["Tailwind", "Next.js"],
    image: "/thumbnail_3.png",
  },
  {
    id: 4,
    category: "Keikutsertaan",
    title: "Kunjungan Industri - PT TekaTeki",
    year: "2025",
    description: "Kegiatan akhir semester untuk ketuntasan belajar semester ganjil tahun ajaran 2025/2026.",
    tags: ["Outing Class"],
    image: "/thumbnail_4.jpeg",
  },
  {
    id: 5,
    category: "Prestasi",
    title: "Mobile Legends Mythic Immortal",
    year: "2025",
    description: "Berhasil menembus 110 Stars di Land of Dawn. Bukti micro/macro play dan kerjasama tim.",
    tags: ["Mobile Legends", "Immortal", "Jokes"],
    image: "/thumbnail_5.jpeg",
  },
];

export interface JourneyItem {
  period: string;
  title: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    period: "2023",
    title: "Mulai Belajar Programming",
    description:
      "Pertama kali mengenal dunia programming dan mulai belajar dasar-dasar HTML dan CSS.",
  },
  {
    period: "2025",
    title: "Masuk SMK Negeri 4 Malang",
    description:
      "Melanjutkan pendidikan di jurusan Rekayasa Perangkat Lunak (RPL) dan mulai belajar lebih serius tentang web development.",
  },
  {
    period: "2026",
    title: "Belajar Library Frontend & Backend",
    description:
      "Mulai mempelajari Bootstrap, JavaScript, PHP, dan SQL untuk membangun website yang dinamis.",
  },
  {
    period: "2026 — Sekarang",
    title: "Membangun Portfolio",
    description:
      "Mengembangkan berbagai project dan membangun portfolio sebagai bukti kemampuan yang terus berkembang.",
  },
];
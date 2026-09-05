export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  skills: SkillItem[];
}

export interface JourneyItem {
  period: string;
  title: string;
  description: string;
}

export const profile = {
  brand: "MyPorto",
  name: "Muhammad Nabil Makarim Rofi'i",
  shortName: "Nabil Makarim",
  monogram: "NM",
  role: "SMK Student · Aspiring Web Developer",
  tagline: "Membangun pengalaman web yang modern, bersih, dan responsif.",
  age: "16 Tahun",
  city: "Malang, Indonesia",
  school: "SMK Negeri 4 Malang",
  major: "Rekayasa Perangkat Lunak (RPL)",
  email: "n481lmaka@gmail.com",
  status: "Siswa aktif",
  bio: [
    "Halo, aku Nabil, siswa SMK Negeri 4 Malang jurusan Rekayasa Perangkat Lunak (RPL) yang tertarik dengan web development, mulai dari merancang tampilan hingga membangun sistem di baliknya.",
    "Aku percaya tampilan yang rapi dan menarik adalah kunci pertama dari produk yang baik, karena itu aku selalu memperhatikan komposisi, detail visual, dan struktur yang bersih.",
    "Saat ini aku terus belajar dan berkembang, memperdalam library frontend maupun backend untuk membangun website yang dinamis dan profesional.",
  ],
};

export const journey: JourneyItem[] = [
  {
    period: "2024",
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
    title: "Belajar Library & Framework untuk Frontend / Backend",
    description:
      "Mulai mempelajari Bootstrap, Tailwind, React.js, dan Next.js untuk membangun website yang dinamis.",
  },
  {
    period: "2025 — Sekarang",
    title: "Membangun Portofolio",
    description:
      "Mengembangkan berbagai project dan membangun portfolio sebagai bukti kemampuan yang terus berkembang.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      {
        name: "HTML & CSS",
        description: "Membuat struktur dan tampilan halaman web yang rapi dan responsif.",
      },
      {
        name: "JavaScript",
        description: "Menambahkan interaktivitas dan logika pada halaman web.",
      },
      {
        name: "Bootstrap",
        description: "Membangun tampilan website yang responsif menggunakan Bootstrap 5.",
      },
      {
        name: "Tailwind",
        description: "Membangun tampilan website yang responsif menggunakan Tailwind v4.",
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      {
        name: "PHP",
        description: "Membangun logika server-side dan fitur dinamis pada website.",
      },
      {
        name: "SQL",
        description: "Mengelola dan mengolah data menggunakan query database.",
      },
      {
        name: "XAMPP",
        description: "Menjalankan server lokal untuk pengembangan website berbasis PHP.",
      },
      {
        name: "Laragon",
        description: "Menjalankan server lokal untuk pengembangan website berbasis PHP.",
      },
    ],
  },
    {
      label: "Tools & Framework",
      skills: [
        {
          name: "Figma",
          description: "Merancang tampilan dan prototype UI sebelum diimplementasikan.",
        },
        {
          name: "Next.js",
          description: "Mengembangkan website didukung library React.js.",
        },
        {
          name: "Supabase",
          description: "Mengelola backend dan database realtime untuk sistem.",
        },
        {
          name: "Flutter",
          description: "Mengembangkan aplikasi mobile cross-platform menggunakan Flutter.",
        },
      ],
    },
];

export const toolsMarquee = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Tailwind",
  "PHP",
  "SQL",
  "XAMPP",
  "Laragon",
  "Figma",
  "Next.js",
  "Supabase",
  "Flutter",
];

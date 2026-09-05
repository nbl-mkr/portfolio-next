import { profile } from "@/data/profile";

export default function IdentitySection() {
  const identity = [
    { label: "Nama", value: profile.name, wide: true },
    { label: "Umur", value: profile.age, wide: false },
    { label: "Asal", value: profile.city, wide: false },
    { label: "Sekolah", value: profile.school, wide: false },
    { label: "Jurusan", value: profile.major, wide: false },
    { label: "Status", value: profile.status, wide: true },
  ];

  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Profile</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Junior | Software Developer
          </h2>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Code Enthusiast
          </h3>
          <div className="mt-6 space-y-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="grid content-start gap-4 sm:grid-cols-2">
          {identity.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border border-line bg-snow p-5 ${item.wide ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-2 text-muted">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">{item.label}</p>
              </div>
              <p className="mt-2.5 text-sm font-semibold text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
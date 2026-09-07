import { profile } from "@/data/profile";

type IdentityItem = {
  label: string;
  value: string;
  accent: boolean;
};

export default function IdentitySection() {
  const identity: IdentityItem[] = [
    { label: "Nama", value: profile.name, accent: true },
    { label: "Umur", value: profile.age, accent: false },
    { label: "Asal", value: profile.city, accent: false },
    { label: "Sekolah", value: profile.school, accent: true },
    { label: "Jurusan", value: profile.major, accent: true },
    { label: "Status", value: profile.status, accent: false },
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
        <dl className="grid content-start gap-4 sm:auto-rows-fr sm:grid-cols-2">
          {identity.map((item) => (
            <div
              key={item.label}
              className={`rounded-3xl border p-6 ${
                item.accent ? "border-linedark bg-ink" : "border-line bg-snow"
              }`}
            >
              <dt
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  item.accent ? "text-muteddark" : "text-muted"
                }`}
              >
                {item.label}
              </dt>
              <dd
                className={`mt-2.5 text-base font-semibold leading-snug ${
                  item.accent ? "text-paper" : "text-ink"
                }`}
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

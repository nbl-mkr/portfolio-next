import { skillGroups } from "@/data/profile";

export default function SkillsSection() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muteddark">Kemampuan</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Skills & Tools
          </h2>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muteddark">
                {group.label}
              </p>
              <div className="mt-5 space-y-4">
                {group.skills.map((skill) => (
                  <article
                    key={skill.name}
                    className="rounded-3xl border border-linedark bg-coal p-6 transition-transform duration-200 hover:-translate-y-1"
                  >
                    <h3 className="font-display text-lg font-semibold tracking-tight">{skill.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muteddark">{skill.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
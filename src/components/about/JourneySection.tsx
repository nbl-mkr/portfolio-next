import { journey } from "@/data/profile";

export default function JourneySection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Perjalanan</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            My Journey
          </h2>
        </div>
        <ol className="mt-12 space-y-12 border-l border-line pl-8">
          {journey.map((item) => (
            <li key={item.title} className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{item.period}</p>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
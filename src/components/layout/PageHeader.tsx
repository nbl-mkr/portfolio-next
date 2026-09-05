interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muteddark">{label}</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muteddark">{description}</p>
      </div>
    </section>
  );
}
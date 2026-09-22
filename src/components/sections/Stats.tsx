import { stats } from "@/data";
import { Reveal } from "@/components/Reveal";

export function Stats() {
  return (
    <section id="results" className="relative overflow-hidden bg-forest-800 py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #faf7f1 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-brass-200">A proven track record</p>
          <h2 className="section-title mt-4 !text-cream">
            Experience that shows up in the results.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="rounded-2xl border border-cream/10 bg-forest-700/40 p-7 text-center backdrop-blur-sm"
            >
              <p className="font-serif text-4xl text-brass-200 md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-cream">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                {stat.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

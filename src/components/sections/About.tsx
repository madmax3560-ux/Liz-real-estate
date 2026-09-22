import Image from "next/image";
import { agent } from "@/data";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-cream py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Portrait */}
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-brass-300/50" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src={agent.headshot}
              alt={`Portrait of ${agent.displayName}`}
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/70 to-transparent p-6">
              <p className="font-serif text-xl text-cream">{agent.displayName}</p>
              <p className="text-sm text-cream/80">
                {agent.title} · {agent.brokerage}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow">Meet Liz</p>
            <h2 className="section-title mt-4">
              A trusted local guide who makes it personal.
            </h2>
          </Reveal>

          <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            {agent.bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90} as="p">
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Westchester & Putnam expert",
                "Yorktown Heights resident",
                "Buyers · Sellers · Investors",
                "Easy to reach, always",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-forest-200 bg-forest-50 px-4 py-2 text-sm font-medium text-forest-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

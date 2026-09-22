import { awards, credentials } from "@/data";
import { Reveal } from "@/components/Reveal";

export function Awards() {
  return (
    <section className="relative overflow-hidden bg-forest-900 py-24 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <p className="eyebrow !text-brass-200">Recognition</p>
            <h2 className="section-title mt-4 !text-cream">
              Awarded for service that stands out.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              Liz&rsquo;s commitment to her clients has been recognized by both
              her brokerage and the wider Westchester community.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {awards.map((award, i) => (
              <Reveal
                key={award.title}
                delay={i * 90}
                className="flex gap-5 rounded-2xl border border-cream/10 bg-forest-800/50 p-6"
              >
                <span className="font-serif text-2xl text-brass-200">
                  {award.year}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-cream">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/70">
                    {award.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="lg:pt-16">
          <div className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-8">
            <p className="text-xs font-semibold uppercase tracking-widest2 text-brass-200">
              Credentials
            </p>
            <ul className="mt-6 divide-y divide-cream/10">
              {credentials.map((cred) => (
                <li key={cred.label} className="flex gap-4 py-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brass-300" />
                  <div>
                    <p className="font-semibold text-cream">{cred.label}</p>
                    <p className="text-sm text-cream/65">{cred.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

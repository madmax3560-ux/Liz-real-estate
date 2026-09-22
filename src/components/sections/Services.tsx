import { services } from "@/data";
import { Reveal } from "@/components/Reveal";
import { IconByName } from "@/components/Icons";

export function Services() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How Liz helps</p>
          <h2 className="section-title mt-4">
            Guidance tailored to where you are.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Whether you&rsquo;re buying your first home, selling a family
            house, or investing in the area, Liz brings the same warmth and
            expertise to every step.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              className="group rounded-2xl border border-forest-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brass-200"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-600 transition-colors group-hover:bg-brass-100 group-hover:text-brass-600">
                <IconByName name={service.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

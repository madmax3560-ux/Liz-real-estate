import { testimonials, reviewsSummary } from "@/data";
import { Reveal } from "@/components/Reveal";
import { Stars } from "@/components/Stars";
import { QuoteIcon } from "@/components/Icons";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In their words</p>
          <h2 className="section-title mt-4">
            Clients who felt genuinely taken care of.
          </h2>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Stars rating={5} />
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">
                {reviewsSummary.count} five-star reviews
              </span>{" "}
              across {reviewsSummary.sources}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              delay={(i % 2) * 100}
              className="relative rounded-2xl border border-forest-100 bg-white p-8 shadow-card"
            >
              <QuoteIcon className="absolute right-6 top-6 h-10 w-10 text-brass-100" />
              <Stars rating={t.rating} />
              <blockquote className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-forest-100 pt-4">
                <p className="font-serif text-lg text-ink">{t.author}</p>
                <p className="text-sm text-brass-600">{t.context}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

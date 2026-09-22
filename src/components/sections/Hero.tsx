import { agent, reviewsSummary } from "@/data";
import { PhoneIcon, ArrowIcon } from "@/components/Icons";
import { Stars } from "@/components/Stars";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image + gradient wash */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/80 to-forest-800/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-forest-900/40" />
      </div>

      <div className="container-x grid gap-10 py-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow !text-brass-200">
            {agent.brokerage} · {agent.brokerageOffice}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
            Finding home in
            <span className="block text-brass-200">
              Westchester &amp; Putnam County.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            I&rsquo;m Liz Finnegan — a full-time, local real estate agent who
            makes buying and selling feel personal, clear, and genuinely
            welcoming. Let&rsquo;s find the place you&rsquo;ll love coming home
            to.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-brass">
              Let&rsquo;s Talk
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={agent.contact.cellHref}
              className="btn border border-cream/30 text-cream hover:border-cream/60 hover:bg-cream/10"
            >
              <PhoneIcon className="h-4 w-4" />
              {agent.contact.cell}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <Stars rating={5} />
            <p className="text-sm text-cream/80">
              <span className="font-semibold text-cream">
                {reviewsSummary.count} five-star reviews
              </span>{" "}
              on {reviewsSummary.sources}
            </p>
          </div>
        </div>

        {/* Floating credential card */}
        <div className="hidden animate-fade-up lg:block" style={{ animationDelay: "160ms" }}>
          <div className="ml-auto max-w-sm rounded-3xl border border-cream/15 bg-cream/10 p-8 backdrop-blur-md shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-widest2 text-brass-200">
              Recognized in 2025
            </p>
            <p className="mt-3 font-serif text-2xl text-cream">
              Houlihan Lawrence Platinum Award
            </p>
            <p className="mt-2 text-sm text-cream/75">
              Top 10% of more than 1,450 Houlihan Lawrence agents — and a
              Westchester Magazine Top Agent.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-cream/15 pt-6">
              <div>
                <p className="font-serif text-2xl text-cream">$45M+</p>
                <p className="text-xs uppercase tracking-wide text-cream/60">
                  Closed sales
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-cream">16+ yrs</p>
                <p className="text-xs uppercase tracking-wide text-cream/60">
                  Local experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-cream md:flex"
        aria-label="Scroll to learn more"
      >
        <span className="text-[0.65rem] uppercase tracking-widest2">Discover</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </span>
      </a>
    </section>
  );
}

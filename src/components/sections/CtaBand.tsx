import { agent } from "@/data";
import { Reveal } from "@/components/Reveal";
import { PhoneIcon, ArrowIcon } from "@/components/Icons";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-forest-900/85" />
      </div>

      <Reveal className="container-x text-center">
        <p className="eyebrow !text-brass-200">Ready when you are</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl leading-tight text-cream md:text-4xl">
          Let&rsquo;s find the home that fits your life.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/80">
          A friendly conversation is the perfect first step. Reach out and
          Liz will take it from there.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="btn-brass">
            Start the Conversation
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
      </Reveal>
    </section>
  );
}

import { agent } from "@/data";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/Icons";

export function Contact() {
  return (
    <section id="contact" className="bg-cream-deep py-24 md:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left — direct contact */}
            <div className="relative overflow-hidden bg-forest-800 p-10 md:p-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #faf7f1 1px, transparent 0)",
                  backgroundSize: "26px 26px",
                }}
              />
              <div className="relative">
                <p className="eyebrow !text-brass-200">Let&rsquo;s connect</p>
                <h2 className="section-title mt-4 !text-cream">
                  The easiest way to start is to say hello.
                </h2>
                <p className="mt-5 leading-relaxed text-cream/75">
                  Call, text, or email anytime — Liz is quick to respond and
                  happy to answer questions with zero pressure. Whether
                  you&rsquo;re ready to move or just exploring, she&rsquo;d
                  love to hear from you.
                </p>

                <div className="mt-9 space-y-4">
                  <a
                    href={agent.contact.cellHref}
                    className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-forest-700/40 p-4 transition-colors hover:border-brass-300/50"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brass-400 text-ink">
                      <PhoneIcon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-cream/60">
                        Call or Text
                      </span>
                      <span className="block text-lg font-semibold text-cream">
                        {agent.contact.cell}
                      </span>
                    </span>
                  </a>

                  <a
                    href={agent.contact.emailHref}
                    className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-forest-700/40 p-4 transition-colors hover:border-brass-300/50"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream/10 text-brass-200">
                      <MailIcon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-cream/60">
                        Email
                      </span>
                      <span className="block text-lg font-semibold text-cream">
                        {agent.contact.email}
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-forest-700/40 p-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream/10 text-brass-200">
                      <PinIcon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-cream/60">
                        {agent.contact.officeName}
                      </span>
                      <span className="block text-sm text-cream/90">
                        {agent.contact.officeAddress.join(" · ")}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="p-10 md:p-12">
              <Reveal>
                <h3 className="font-serif text-2xl text-ink">
                  Send Liz a message
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Tell her a little about what you&rsquo;re looking for and
                  she&rsquo;ll be in touch soon.
                </p>
              </Reveal>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { agent } from "@/data";
import { PhoneIcon, MailIcon, PinIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Elizabeth &ldquo;Liz&rdquo; Finnegan</p>
          <p className="mt-2 text-sm text-cream/70">
            {agent.title}
            <br />
            {agent.brokerage} · {agent.brokerageOffice}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Residential real estate across Westchester &amp; Putnam County, New
            York.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-brass-200">
            Get in Touch
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={agent.contact.cellHref}
                className="flex items-center gap-3 text-cream/85 transition-colors hover:text-brass-200"
              >
                <PhoneIcon className="h-4 w-4 text-brass-200" />
                Cell / Text · {agent.contact.cell}
              </a>
            </li>
            <li>
              <a
                href={agent.contact.officeHref}
                className="flex items-center gap-3 text-cream/85 transition-colors hover:text-brass-200"
              >
                <PhoneIcon className="h-4 w-4 text-brass-200" />
                Office · {agent.contact.office}
              </a>
            </li>
            <li>
              <a
                href={agent.contact.emailHref}
                className="flex items-center gap-3 text-cream/85 transition-colors hover:text-brass-200"
              >
                <MailIcon className="h-4 w-4 text-brass-200" />
                {agent.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest2 text-brass-200">
            Office
          </p>
          <p className="mt-4 flex items-start gap-3 text-sm text-cream/85">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass-200" />
            <span>
              {agent.contact.officeName}
              <br />
              {agent.contact.officeAddress.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 md:flex-row">
          <p>
            © {year} Elizabeth Finnegan. Licensed Real Estate Salesperson,
            State of New York.
          </p>
          <p>
            Equal Housing Opportunity · {agent.brokerage} {agent.brokerageOffice}
          </p>
        </div>
      </div>
    </footer>
  );
}

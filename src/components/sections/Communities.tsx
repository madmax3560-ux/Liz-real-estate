import Image from "next/image";
import { communities } from "@/data";
import { Reveal } from "@/components/Reveal";
import { PinIcon } from "@/components/Icons";

export function Communities() {
  return (
    <section id="communities" className="bg-cream-deep py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Local knowledge</p>
          <h2 className="section-title mt-4">
            The towns Liz knows by heart.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            From her own Yorktown Heights to the lakeside neighborhoods of
            Putnam County, Liz brings first-hand insight into the communities
            you&rsquo;re considering.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community, i) => (
            <Reveal
              key={community.name}
              delay={(i % 3) * 100}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={community.image}
                  alt={`${community.name}, ${community.county} County`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/30 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brass-400/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-ink">
                  <PinIcon className="h-3.5 w-3.5" />
                  {community.county} County
                </span>
                <h3 className="mt-3 font-serif text-2xl text-cream">
                  {community.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/85 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {community.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {community.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-cream/15 px-2.5 py-1 text-[0.68rem] font-medium text-cream/90 backdrop-blur-sm"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

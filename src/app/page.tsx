import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Communities } from "@/components/sections/Communities";
import { CtaBand } from "@/components/sections/CtaBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { agent } from "@/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: agent.fullName,
    alternateName: agent.displayName,
    jobTitle: agent.title,
    telephone: agent.contact.cell,
    email: agent.contact.email,
    worksFor: {
      "@type": "Organization",
      name: `${agent.brokerage} · ${agent.brokerageOffice}`,
    },
    areaServed: ["Westchester County, NY", "Putnam County, NY"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jefferson Valley",
      addressRegion: "NY",
      postalCode: "10535",
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Communities />
        <CtaBand />
        <Testimonials />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

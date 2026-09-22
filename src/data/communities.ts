/**
 * Community / local-area content — static profile content.
 *
 * Imagery uses royalty-free Unsplash photography as tasteful placeholders that
 * evoke the Hudson Valley / lower New York suburbs. Swap the `image` URLs for
 * authorized local photography when available.
 */

export interface Community {
  name: string;
  county: "Westchester" | "Putnam";
  blurb: string;
  image: string;
  highlights: string[];
}

export const communities: Community[] = [
  {
    name: "Yorktown Heights",
    county: "Westchester",
    blurb:
      "Liz's own hometown — a warm, family-first community with top-rated schools, parks, and an easy commute north of the city.",
    image:
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Top-rated schools", "Family neighborhoods", "Parks & trails"],
  },
  {
    name: "Somers",
    county: "Westchester",
    blurb:
      "Rolling countryside, historic charm, and spacious properties make Somers a favorite for buyers seeking room to breathe.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Country living", "Historic character", "Larger lots"],
  },
  {
    name: "Katonah",
    county: "Westchester",
    blurb:
      "A picturesque village with a vibrant Main Street, arts scene, and a strong sense of community just a train ride from Manhattan.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Walkable village", "Metro-North access", "Arts & dining"],
  },
  {
    name: "Mahopac",
    county: "Putnam",
    blurb:
      "Lakeside living in Putnam County, with welcoming neighborhoods and four-season recreation around beautiful Lake Mahopac.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Lakefront homes", "Outdoor recreation", "Great value"],
  },
  {
    name: "Cortlandt Manor",
    county: "Westchester",
    blurb:
      "Quiet, wooded, and convenient — a scenic slice of northern Westchester with a mix of classic and modern homes.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Wooded settings", "Commuter friendly", "Varied home styles"],
  },
  {
    name: "Carmel",
    county: "Putnam",
    blurb:
      "The heart of Putnam County — a friendly, established town with reservoirs, trails, and welcoming residential streets.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Reservoir views", "Established towns", "Nature nearby"],
  },
];

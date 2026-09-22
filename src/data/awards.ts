/**
 * Awards & credentials — static profile content.
 * Source: Liz's authorized public profiles (verified Sept 2026).
 */

export interface Award {
  year: string;
  title: string;
  detail: string;
}

export const awards: Award[] = [
  {
    year: "2025",
    title: "Houlihan Lawrence Platinum Award",
    detail:
      "Recognizing the top 10% of more than 1,450 Houlihan Lawrence agents.",
  },
  {
    year: "2025",
    title: "Westchester Magazine Top Real Estate Agent",
    detail: "Named among the top real estate agents in Westchester County.",
  },
  {
    year: "Ongoing",
    title: "Zillow Premier Agent",
    detail: "A trusted, verified agent with a track record of five-star service.",
  },
];

export interface Credential {
  label: string;
  detail: string;
}

export const credentials: Credential[] = [
  {
    label: "Licensed Real Estate Salesperson",
    detail: "State of New York",
  },
  {
    label: "Houlihan Lawrence",
    detail: "Yorktown Brokerage — the #1 brokerage north of New York City",
  },
  {
    label: "Residential Specialist",
    detail: "Buyers, sellers, and investors across Westchester & Putnam County",
  },
  {
    label: "Community Advocate",
    detail: "Yorktown resident, PTA volunteer, and past PTA Vice President",
  },
];

/**
 * ============================================================================
 *  STATIC PROFILE CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *
 *  This file holds the authorized, static profile content for Elizabeth
 *  "Liz" Finnegan. The production website reads from THIS data layer and does
 *  NOT scrape the Houlihan Lawrence website at runtime.
 *
 *  Source of authorized content: Liz's public Houlihan Lawrence profile and
 *  aggregator profiles (Zillow / Realtor.com / Homes.com), verified Sept 2026.
 *
 *  To update the site's content (bio, stats, awards, reviews, contact info),
 *  edit the values in this file. No other code changes are required.
 * ----------------------------------------------------------------------------
 */

export interface ContactInfo {
  cell: string;
  cellHref: string;
  office: string;
  officeHref: string;
  email: string;
  emailHref: string;
  officeName: string;
  officeAddress: string[];
  profileUrl: string;
}

export interface Agent {
  firstName: string;
  nickname: string;
  lastName: string;
  fullName: string;
  displayName: string;
  title: string;
  brokerage: string;
  brokerageOffice: string;
  license: string;
  tagline: string;
  headshot: string;
  serviceAreaSummary: string;
  bio: string[];
  contact: ContactInfo;
}

export const agent: Agent = {
  firstName: "Elizabeth",
  nickname: "Liz",
  lastName: "Finnegan",
  fullName: "Elizabeth Finnegan",
  displayName: 'Elizabeth "Liz" Finnegan',
  title: "Real Estate Salesperson",
  brokerage: "Houlihan Lawrence",
  brokerageOffice: "Yorktown Brokerage",
  license: "Licensed Real Estate Salesperson, State of New York",
  tagline: "Helping you find home in Westchester & Putnam County.",
  // Local headshot placeholder lives in /public. Replace with Liz's authorized
  // headshot file at the same path to update it site-wide.
  headshot: "/images/liz-finnegan.jpg",
  serviceAreaSummary:
    "Residential sales for buyers, sellers, and investors across Westchester and Putnam County, New York.",
  bio: [
    'Elizabeth "Liz" Finnegan is a full-time real estate agent dedicated to providing her clients with extraordinary service and expertise. She specializes in residential sales, guiding buyers, sellers, and investors through the Westchester and Putnam County markets.',
    "Liz returned to Yorktown Heights — a town she knows and loves — to raise her family. With three children in the local schools, she has been an active volunteer and PTA member, including serving as Vice President. That deep-rooted connection to the community shapes the way she helps clients picture their own lives here.",
    "Liz is passionate about real estate. Her experience, energy, and upbeat personality enhance the buying and selling experience for every client, helping them discover all that the local community has to offer. Above all, she is easy to reach and genuinely enjoys the people she works with — a friendly guide from the first showing to the closing table.",
  ],
  contact: {
    cell: "(917) 545-4530",
    cellHref: "tel:+19175454530",
    office: "(914) 962-4900",
    officeHref: "tel:+19149624900",
    email: "efinnegan@houlihanlawrence.com",
    emailHref: "mailto:efinnegan@houlihanlawrence.com",
    officeName: "Houlihan Lawrence · Yorktown Brokerage",
    officeAddress: ["PO Box 650", "Jefferson Valley, NY 10535"],
    profileUrl: "https://elizabethfinnegan.houlihanlawrence.com",
  },
};

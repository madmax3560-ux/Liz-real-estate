/**
 * Career statistics — static profile content.
 * Source: Liz's authorized public profiles (verified Sept 2026).
 */

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export const stats: Stat[] = [
  {
    value: "16+",
    label: "Years of Experience",
    detail: "A full-time career built in the Westchester & Putnam markets.",
  },
  {
    value: "$45M+",
    label: "In Closed Sales",
    detail: "Across residential purchases, sales, and investments.",
  },
  {
    value: "95+",
    label: "Career Transactions",
    detail: "Families guided home, with an average of 18–25 closings a year.",
  },
  {
    value: "48",
    label: "Five-Star Reviews",
    detail: "Verified five-star reviews on Zillow and Google.",
  },
];

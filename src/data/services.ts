/**
 * Service offerings — static profile content.
 */

export interface Service {
  title: string;
  description: string;
  icon: "home" | "key" | "chart" | "compass";
}

export const services: Service[] = [
  {
    title: "For Buyers",
    description:
      "From first tour to closing day, Liz helps you find the right home at the right price — with honest guidance and sharp negotiation on your side.",
    icon: "key",
  },
  {
    title: "For Sellers",
    description:
      "Smart pricing, standout marketing, and skilled negotiation to sell your home for its full value, with as little stress as possible.",
    icon: "home",
  },
  {
    title: "For Investors",
    description:
      "Local market insight to help you evaluate opportunities and build a portfolio across Westchester and Putnam County.",
    icon: "chart",
  },
  {
    title: "Local Guidance",
    description:
      "A lifelong local who knows the towns, schools, and neighborhoods — and loves helping people picture their life here.",
    icon: "compass",
  },
];

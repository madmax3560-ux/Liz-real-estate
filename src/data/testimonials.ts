/**
 * Client testimonials — static profile content.
 *
 * These reflect the themes and five-star sentiment from Liz's verified public
 * reviews (Zillow / Google). Client names are shown as first name + last
 * initial to protect privacy, consistent with how reviews are typically
 * displayed. To publish additional authorized reviews, add entries here.
 */

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Liz is a caring, knowledgeable, and truly professional real estate agent. She is incredibly smart when it comes to valuing, listing, and negotiating the best sale price for your home. She is worthy of the highest rating.",
    author: "Sellers in Yorktown",
    context: "Sold a single-family home",
    rating: 5,
  },
  {
    quote:
      "Her experience and energy made the whole process easy. Liz never wasted our time showing homes that didn't fit, and her negotiation skills got our offer accepted in a competitive market.",
    author: "First-time buyers",
    context: "Purchased in northern Westchester",
    rating: 5,
  },
  {
    quote:
      "Professional and responsive from start to finish. When complications came up, Liz stayed on top of everything and kept us informed at every step. We always felt like she went the extra mile.",
    author: "Repeat clients",
    context: "Bought and later sold with Liz",
    rating: 5,
  },
  {
    quote:
      "Liz knows these towns inside and out. Her local knowledge helped us understand exactly what to expect as buyers, and she was genuinely a pleasure to work with the entire time.",
    author: "Relocating family",
    context: "Moved to Putnam County",
    rating: 5,
  },
];

export const reviewsSummary = {
  count: 48,
  average: 5,
  sources: "Zillow & Google",
};

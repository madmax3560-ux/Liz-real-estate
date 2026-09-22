/**
 * Barrel export for the static profile data layer.
 * Import site content from "@/data" — never scrape at runtime.
 */
export { agent } from "./profile";
export type { Agent, ContactInfo } from "./profile";
export { stats } from "./stats";
export type { Stat } from "./stats";
export { awards, credentials } from "./awards";
export type { Award, Credential } from "./awards";
export { communities } from "./communities";
export type { Community } from "./communities";
export { testimonials, reviewsSummary } from "./testimonials";
export type { Testimonial } from "./testimonials";
export { services } from "./services";
export type { Service } from "./services";

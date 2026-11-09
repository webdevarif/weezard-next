import { StaticImageData } from "next/image";
import ratingBubbleStars from "./assets/rating_bubble_stars.png";
import clientGiana from "./assets/client_giana.png";
import clientKatie from "./assets/client_katie.png";

export interface TestimonialItem {
  id: string;
  rating: number; // e.g. 4 or 5
  maxRating?: number; // default 5
  quote: string;
  author: string;
  role: string;
  avatar: StaticImageData | string;
}

export interface RatingStatItem {
  score: string;
  label: string;
  image: StaticImageData | string;
}

export const RATING_STAT: RatingStatItem = {
  score: "4.9",
  label: "Trusted by 500+ Businesses",
  image: ratingBubbleStars,
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    rating: 4,
    maxRating: 5,
    quote: "Weezard transformed our website. It’s fast, clean, and finally brings us leads!",
    author: "Giana Schleifer",
    role: "Owner, bakersdelight.com",
    avatar: clientGiana,
  },
  {
    id: "testimonial-2",
    rating: 4,
    maxRating: 5,
    quote: "Efficiently grow high-payoff portals and B2C leadership skills. Intrinsically build multidisciplinary web-readiness.",
    author: "Katie Sims",
    role: "Owner, bakersdelight.com",
    avatar: clientKatie,
  },
  {
    id: "testimonial-3",
    rating: 5,
    maxRating: 5,
    quote: "Their team delivered beyond our expectations. Our traffic doubled and bounce rate dropped significantly within weeks.",
    author: "Marcus Vance",
    role: "Founder, Zenith Media",
    avatar: clientGiana,
  },
  {
    id: "testimonial-4",
    rating: 5,
    maxRating: 5,
    quote: "A seamless development and design experience from start to finish. Transparent pricing and exceptional communication.",
    author: "Elena Rostova",
    role: "Head of Marketing, CloudScale",
    avatar: clientKatie,
  },
];


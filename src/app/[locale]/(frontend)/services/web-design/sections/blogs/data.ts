import { StaticImageData } from "next/image";
import blog1 from "./assets/blog_1.jpg";
import blog2 from "./assets/blog_2.jpg";
import blog3 from "./assets/blog_3.jpg";

/**
 * Blog Item Interface
 */
export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  commentsCount: number;
  image: StaticImageData;
  isHighlighted?: boolean;
}

/**
 * Section Header Copy Data
 */
export const BLOG_HEADER = {
  title: "Dive into Our Resources for Greater Insights",
  description:
    "At Weezard, we believe in empowering our partners with the tools and insights they need to succeed. We offer a range of tools, including expert blog posts and downloadable guides, to help you navigate the world of design, development, and digital marketing. Unlock your next big idea with the magic of Weezard.",
};

/**
 * Service Blog Posts List
 * Matching exact titles and metadata from Figma blog-section.txt
 */
export const BLOG_POSTS: BlogItem[] = [
  {
    id: "blog-1",
    slug: "top-10-emerging-technologies-2025",
    title: "Top 10 Emerging Technologies in 2025.",
    date: "Jul 27 2025",
    commentsCount: 3,
    image: blog1,
    isHighlighted: false,
  },
  {
    id: "blog-2",
    slug: "how-to-secure-your-it-infrastructure",
    title: "How to Secure Your IT Infrastructure.",
    date: "Jul 27 2025",
    commentsCount: 3,
    image: blog2,
    isHighlighted: false,
  },
  {
    id: "blog-3",
    slug: "the-future-of-cloud-computing",
    title: "The Future of Cloud Computing",
    date: "Jul 27 2025",
    commentsCount: 3,
    image: blog3,
    isHighlighted: false,
  },
];


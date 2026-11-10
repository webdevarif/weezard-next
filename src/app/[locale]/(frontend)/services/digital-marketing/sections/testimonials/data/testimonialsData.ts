export interface TestimonialAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialItem {
  id: string;
  rating: number;
  content: string;
  author: TestimonialAuthor;
  isFeatured?: boolean;
}

export interface TestimonialsSectionData {
  header: {
    title: string;
    subtitle: string;
  };
  items: TestimonialItem[];
}

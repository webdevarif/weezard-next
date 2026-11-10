export interface CaseStudyTabItem {
  id: string;
  label: string;
  bgColor: string;
  borderColor: string;
}

export interface CaseStudiesSectionData {
  header: {
    title: string;
    subtitle: string;
    cta?: {
      label: string;
      href: string;
    };
  };
  tabs: CaseStudyTabItem[];
  image: string;
}

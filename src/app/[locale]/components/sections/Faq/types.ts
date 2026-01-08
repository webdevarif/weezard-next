export type FaqItemProps = {
    title: string
    content: string
}

export type FaqCategoryProps = {
    name: string
    slug: string
    items: FaqItemProps[]
}

export type FaqDataProps = {
    variant?: string; 
    title?: string; 
    info?: string; 
    description?: string; 
    question?: {
        title: string;
        button_label: string;
        button_url: string;
    }; 
    categories: FaqCategoryProps[]
}

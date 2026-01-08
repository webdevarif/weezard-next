
export interface PricingSectionDataProps{
    header?: {
        caption?: string,
        title: string,
        content: string,
    },
    list?: PricingCardDataProps[],
    footer?: {
        title: string,
        button_label: string,
        button_url: string,
    },


}
export interface PricingCardDataProps {
    isFeatured?: boolean
    title: string;
    info: string;
    price: string;
    features: {
        checkColor: string;
        secondaryColor: string;
        items: {
            text: string;
        }[];
    }
}
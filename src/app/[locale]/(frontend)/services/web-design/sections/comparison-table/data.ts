/**
 * Comparison Table Data
 * 
 * Defines feature comparison between:
 * - Freelancers
 * - Other Agencies
 * - Weezard (Featured Provider)
 */

export type StatusType = "check" | "cross" | "warning";

export interface CellValue {
  type: StatusType;
  text?: string;
}

export interface ComparisonRowData {
  feature: string;
  freelancers: CellValue;
  otherAgencies: CellValue;
  weezard: CellValue;
}

export const COMPARISON_ROWS: ComparisonRowData[] = [
  {
    feature: "Custom Design",
    freelancers: { type: "cross", text: "Limited templates" },
    otherAgencies: { type: "check", text: "But often expensive" },
    weezard: { type: "check", text: "Included in all plans" },
  },
  {
    feature: "Mobile-Friendly Layout",
    freelancers: { type: "check", text: "Basic" },
    otherAgencies: { type: "check" },
    weezard: { type: "check", text: "Optimized across devices" },
  },
  {
    feature: "SEO Basics",
    freelancers: { type: "cross", text: "Often skipped" },
    otherAgencies: { type: "check", text: "Optional add-on" },
    weezard: { type: "check", text: "Included from Starter" },
  },
  {
    feature: "Revisions",
    freelancers: { type: "warning", text: "1-2 only" },
    otherAgencies: { type: "check", text: "Usually 2-3" },
    weezard: { type: "check", text: "Up to Unlimited in Growth+" },
  },
  {
    feature: "Content Guidance",
    freelancers: { type: "cross", text: "Not included" },
    otherAgencies: { type: "check", text: "Sometimes included" },
    weezard: { type: "check", text: "Always included" },
  },
  {
    feature: "Brand Consistency",
    freelancers: { type: "warning", text: "Varies" },
    otherAgencies: { type: "check" },
    weezard: { type: "check", text: "Designed with your brand in mind" },
  },
  {
    feature: "Speed & Performance",
    freelancers: { type: "cross", text: "Inconsistent" },
    otherAgencies: { type: "check" },
    weezard: { type: "check", text: "Prioritized for conversions" },
  },
  {
    feature: "Support After Launch",
    freelancers: { type: "cross", text: "None or limited" },
    otherAgencies: { type: "check", text: "Paid support plans" },
    weezard: { type: "check", text: "1 to 4 months free support" },
  },
  {
    feature: "Pricing Transparency",
    freelancers: { type: "cross", text: "Hidden charges" },
    otherAgencies: { type: "warning", text: "Varies" },
    weezard: { type: "check", text: "Clear, upfront, and affordable" },
  },
  {
    feature: "Ownership Rights",
    freelancers: { type: "cross", text: "Sometimes unclear" },
    otherAgencies: { type: "check" },
    weezard: { type: "check", text: "You own everything" },
  },
];

import React from "react";
import ComparisonTableSection from "../../../web-design/sections/comparison-table";
import { ComparisonRowData } from "../../../web-design/sections/comparison-table/data";

interface Props {
  data: {
    header: {
      title: string;
      subtitle: string;
    };
    rows: ComparisonRowData[];
  };
}

/**
 * DigitalMarketingComparisonTable Component
 * 
 * Leverages the reusable dynamic ComparisonTableSection built for Weezard:
 * - Desktop 4-column matrix
 * - Mobile 4-card sequence
 * - Custom Digital Marketing comparisons
 */
export const DigitalMarketingComparisonTable: React.FC<Props> = ({ data }) => {
  return (
    <ComparisonTableSection
      header={data.header}
      rows={data.rows}
    />
  );
};

export default DigitalMarketingComparisonTable;

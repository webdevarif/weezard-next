import React from "react";
import Image from "next/image";

/**
 * CaseStudiesWires Component
 * 
 * Renders the 3 exact connecting circuit wires from Figma Frame 1686558382:
 * - Wire 1 (Vector 103 -> wire-problem-red.svg): left 43px, top 24.5px, width 591.5px, height 321px
 * - Wire 2 (Vector 104 -> wire-what-we-did-blue.svg): left 70px, top 62.5px, width 546.5px, height 308.5px
 * - Wire 3 (Vector 105 -> wire-result-purple.svg): left 99px, top 105px, width 502.5px, height 288.5px
 */
export const CaseStudiesWires: React.FC = () => {
  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0">
      {/* Red Wire (Problem -> Top Image Card) */}
      <div className="absolute left-[43px] top-[24.5px] w-[591.5px] h-[321px]">
        <Image
          src="/services/digital-marketing/case-studies/wire-problem-red.svg"
          alt="Problem connection wire"
          width={593}
          height={323}
          className="w-full h-full"
        />
      </div>

      {/* Blue Gradient Wire (What We Did -> Middle Card) */}
      <div className="absolute left-[70px] top-[62.5px] w-[546.5px] h-[308.5px]">
        <Image
          src="/services/digital-marketing/case-studies/wire-what-we-did-blue.svg"
          alt="What We Did connection wire"
          width={548}
          height={311}
          className="w-full h-full"
        />
      </div>

      {/* Purple Gradient Wire (Result -> Bottom Card) */}
      <div className="absolute left-[99px] top-[105px] w-[502.5px] h-[288.5px]">
        <Image
          src="/services/digital-marketing/case-studies/wire-result-purple.svg"
          alt="Result connection wire"
          width={504}
          height={291}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default CaseStudiesWires;

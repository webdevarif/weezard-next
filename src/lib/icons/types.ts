import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon size - can be number (pixels) or string (e.g., "24px", "1.5rem") */
  size?: number | string;
  /** Icon color - defaults to "currentColor" */
  color?: string;
  secondaryColor ?: string;
  /** Additional className for styling */
  className?: string;
  /** Accessibility label */
  "aria-label"?: string;

}

export type IconComponent = React.FC<IconProps>;


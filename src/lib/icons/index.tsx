/**
 * Icon Library
 * 
 * Centralized icon components for the application.
 * All icons accept standard SVG props plus:
 * - size: number | string (e.g., 24 or "24px" or "1.5rem")
 * - color: string (defaults to "currentColor")
 * - className: string (for additional styling)
 * 
 * @example
 * // Basic usage
 * import { FacebookIcon, EmailIcon } from "@/lib/icons";
 * 
 * <FacebookIcon size={24} className="text-blue" />
 * <EmailIcon size="1.5rem" color="#333" />
 * 
 * // With Tailwind classes
 * <LinkedInIcon className="w-6 h-6 text-navy hover:text-blue transition-colors" />
 */

import * as React from "react";

// Types
export type { IconProps, IconComponent } from "./types";

// Social Media Icons
export {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
  GitHubIcon,
  DribbbleIcon,
} from "./social";

// Contact Icons
export {
  LocationIcon,
  EmailIcon,
  PhoneIcon,
  GlobeIcon,
  ClockIcon,
  WhatsappIcon,
  LinkArrowIcon,
} from "./contact";

export {
  CheckIcon,
} from "./list";

/**
 * Icon name to component mapping for dynamic rendering
 */
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
  GitHubIcon,
  DribbbleIcon,
} from "./social";

import {
  LocationIcon,
  EmailIcon,
  PhoneIcon,
  GlobeIcon,
  ClockIcon,
  WhatsappIcon,
  LinkArrowIcon,
} from "./contact";

import {
  CheckIcon,
  ListStarShapeIcon,
} from "./list";

import { IconComponent } from "./types";

export const Icons: Record<string, IconComponent> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
  twitter: XIcon, // Alias for X
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
  github: GitHubIcon,
  dribbble: DribbbleIcon,
  location: LocationIcon,
  email: EmailIcon,
  phone: PhoneIcon,
  globe: GlobeIcon,
  clock: ClockIcon,
  whatsapp: WhatsappIcon,
  LinkArrowIcon,
  CheckIcon,
  ListStarShapeIcon,
};

/**
 * Dynamic Icon component that renders icon by name
 * 
 * @example
 * <Icon name="facebook" size={24} className="text-blue" />
 */
export const Icon = ({
  name,
  ...props
}: { name: keyof typeof Icons } & React.ComponentProps<IconComponent>) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <IconComponent {...props} />;
};

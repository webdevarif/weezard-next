/**
 * Portfolio Section Type Definitions
 * 
 * Defines interfaces for individual portfolio project items,
 * category configurations, and filter interaction props.
 */

import { StaticImageData } from "next/image";

export interface PortfolioItem {
  id: number;
  category: string;
  image: StaticImageData;
}

export interface DesktopPosition {
  left: string;
  top: string;
  zIndex?: number;
}

export interface CategoryFilterItem {
  name: string;
  /** Explicit permanent rotation in degrees (e.g. +18, -14, -16, 0) */
  rotationDeg: number;
  /** Precise desktop coordinates for 1:1 Figma cluster positioning */
  desktopPosition?: DesktopPosition;
  /** Optional layout offset classes for mobile cluster scattering */
  offsetClass?: string;
}

export interface PortfolioHeaderProps {
  badgeText?: string;
  title?: string;
  description?: string;
}

export interface PortfolioCategoryFilterProps {
  categories: CategoryFilterItem[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export interface PortfolioVerticalSliderProps {
  items: PortfolioItem[];
}

export interface PortfolioMobileCarouselProps {
  items: PortfolioItem[];
}

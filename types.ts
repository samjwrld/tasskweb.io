import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Vertical {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

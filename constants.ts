import { Film, Calendar, Database, Building2, TrendingUp, Layers, PenTool, Globe } from 'lucide-react';
import { NavItem, Vertical, PortfolioItem, ProcessStep, Service } from './types';

export const BRAND_NAME = "TASSK";
export const TAGLINE = "The Art of Sai Surakshith Keshava";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Verticals', path: '/verticals' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];

export const VERTICALS: Vertical[] = [
  {
    id: 'studios',
    title: 'TASSK Studios',
    description: 'Premier film production and visual storytelling that bridges narrative depth with cinematic excellence.',
    features: ['Feature Films', 'Documentaries', 'Commercial Production'],
    cta: 'Explore Studios',
    image: 'https://picsum.photos/800/600?grayscale&blur=2' 
  },
  {
    id: 'events',
    title: 'TASSK Events',
    description: 'Curating experiential events where logistics serve imagination. From corporate summits to luxury weddings.',
    features: ['Corporate Galas', 'Luxury Weddings', 'Large-scale Concerts'],
    cta: 'Discover Events',
    image: 'https://picsum.photos/800/601?grayscale&blur=2'
  },
  {
    id: 'labs',
    title: 'TASSK Labs',
    description: 'Data-driven IT consulting and digital transformation strategies for the modern enterprise.',
    features: ['Data Analytics', 'IT Infrastructure', 'Software Solutions'],
    cta: 'Visit Labs',
    image: 'https://picsum.photos/800/602?grayscale&blur=2'
  },
  {
    id: 'realty',
    title: 'TASSK Realty & Marketing',
    description: 'Strategic real estate portfolio management and high-impact market positioning.',
    features: ['Property Management', 'Brand Strategy', 'Market Analysis'],
    cta: 'See Realty',
    image: 'https://picsum.photos/800/603?grayscale&blur=2'
  }
];

export const SERVICES: Service[] = [
  { title: 'Film Production', description: 'End-to-end cinematic execution.', icon: Film },
  { title: 'Event Architecture', description: 'Designing memorable live experiences.', icon: Calendar },
  { title: 'Data Consulting', description: 'Transforming numbers into actionable strategy.', icon: Database },
  { title: 'Real Estate Strategy', description: 'Maximizing asset value through insight.', icon: Building2 },
  { title: 'Brand Development', description: 'Forging identities that resonate globally.', icon: PenTool },
  { title: 'Digital Transformation', description: 'Modernizing business workflows.', icon: Globe },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'The Silent Horizon', category: 'Film', year: '2023', image: 'https://picsum.photos/600/400?random=1' },
  { id: '2', title: 'Global Tech Summit', category: 'Events', year: '2023', image: 'https://picsum.photos/600/400?random=2' },
  { id: '3', title: 'Apex Towers Launch', category: 'Realty', year: '2024', image: 'https://picsum.photos/600/400?random=3' },
  { id: '4', title: 'FinStream Analytics', category: 'IT Labs', year: '2024', image: 'https://picsum.photos/600/400?random=4' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Discovery', description: 'We begin by deeply understanding your vision, constraints, and objectives.' },
  { number: '02', title: 'Strategy', description: 'Artistic thinking meets disciplined planning. We blueprint the execution.' },
  { number: '03', title: 'Execution', description: 'Precision implementation with rigorous quality control at every stage.' },
  { number: '04', title: 'Delivery', description: 'On-time, on-budget, and exceeding expectations. The TASSK promise.' },
];
import {
  BadgeDollarSign,
  BarChart3,
  Bookmark,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Gamepad2,
  GitBranch,
  Globe2,
  Laptop,
  Mail,
  Map,
  Megaphone,
  Network,
  Palette,
  Phone,
  Play,
  Rocket,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Moon,
  Timer,
  UserRound,
  Video,
  FlaskConical,
  Wrench,
  BookOpen,
} from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

const careerIcons = {
  ai: BrainCircuit,
  brain: BrainCircuit,
  chart: BarChart3,
  salary: BadgeDollarSign,
  workplace: BriefcaseBusiness,
  cloud: Cloud,
  code: Code2,
  game: Gamepad2,
  gear: Settings2,
  mobile: Smartphone,
  network: Network,
  palette: Palette,
  server: Server,
  shield: ShieldCheck,
  stack: Database,
};

const categoryIcons = {
  ai: BrainCircuit,
  cloud: Cloud,
  coding: Code2,
  data: Database,
  design: Palette,
  engineering: Code2,
  framework: GitBranch,
  infrastructure: Network,
  language: Code2,
  platform: Laptop,
  security: ShieldCheck,
  support: Wrench,
  tooling: Settings2,
};

const socialIcons = {
  email: Mail,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  phone: Phone,
  tiktok: FaTiktok,
};

const resourceIcons = {
  book: BookOpen,
  video: Video,
};

const icons = {
  back: ChevronLeft,
  bookmark: Bookmark,
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  chart: BarChart3,
  check: Check,
  code: Code2,
  close: null,
  external: ExternalLink,
  globe: Globe2,
  next: ChevronRight,
  map: Map,
  megaphone: Megaphone,
  moon: Moon,
  play: Play,
  rocket: Rocket,
  salary: BadgeDollarSign,
  search: Search,
  sparkles: Sparkles,
  sun: Sun,
  timer: Timer,
  flask: FlaskConical,
  user: UserRound,
};

export function Icon({ name, size = 20, strokeWidth = 2, ...props }) {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent aria-hidden="true" size={size} strokeWidth={strokeWidth} {...props} /> : null;
}

export function CareerIcon({ type, size = 22 }) {
  const IconComponent = careerIcons[type] ?? Sparkles;
  return <IconComponent aria-hidden="true" size={size} strokeWidth={2} />;
}

export function CategoryIcon({ category, size = 16 }) {
  const IconComponent = categoryIcons[category] ?? Sparkles;
  return <IconComponent aria-hidden="true" size={size} strokeWidth={2} />;
}

export function ResourceIcon({ type, size = 16 }) {
  const IconComponent = resourceIcons[type] ?? BookOpen;
  return <IconComponent aria-hidden="true" size={size} strokeWidth={2} />;
}

export function SocialIcon({ label, size = 18 }) {
  const normalizedLabel = label.toLowerCase();
  const key = Object.keys(socialIcons).find((name) => normalizedLabel.includes(name));
  const IconComponent = socialIcons[key] ?? ExternalLink;
  return <IconComponent aria-hidden="true" size={size} strokeWidth={2} />;
}

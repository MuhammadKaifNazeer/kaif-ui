import { ExternalLink, BookText, Circle, LayoutList, FileTextIcon } from "lucide-react";

type LinkItem = {
  title: string;
  href: string;
  external?: boolean; 
};

type NavigationGroup = {
  title: string;
  icon: React.ElementType; 
  links: LinkItem[];
};

const Navigation = [
  {
    title: "Follow For Updates",
    icon: ExternalLink,
    links: [
      {
        title: "Muhammad Kaif Nazeer",  
        href: "https://bento.me/muhammadkaifnazeer",
        external: true,
      },
    ],
  },
  {
    title: "Guide",
    icon: BookText,
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Contribution Guide", href: "/docs/contribute" },
    ],
  },
  {
    title: "Components",
    icon: Circle,
    links: [
      { title: "Emogi Nav", href: "/components/emogi-nav" },
      { title: "Pendulum", href: "/components/pendulum" },
      { title: "Infinite Slider", href: "/components/infinite-slider" },
      { title: "Circular Navigation", href: "/components/circular-navigation" },
      { title: "Carousel", href: "/components/carousel" },
      { title: "Scroll Velocity", href: "/components/scroll-velocity" },
      { title: "Custom Cursor", href: "/components/custom-cursor" },
      { title: "Zoom Parallax", href: "/components/zoom-parallax" },
      { title: "Loader Button", href: "/components/loader-button" },
      { title: "Floating Dock", href: "/components/floating-dock" },
      {
        title: "Tailwind Backgrounds",
        href: "/components/tailwind-backgrounds",
      },
    ],
  },
  {
    title: "Blocks",
    icon: LayoutList,
    links: [
      { title: "Hero Sections", href: "/blocks/hero-sections" },
      { title: "Pricing", href: "/blocks/pricing" },
      { title: "Authentication", href: "/blocks/authentication" },
      { title: "Footer", href: "/blocks/footer" },
    ],
  },
  {
    title: "Explore",
    icon: FileTextIcon,
    links: [
      { title: "Components", href: "/components" },
      { title: "Blocks", href: "/blocks" },
      { title: "Templates", href: "/templates" },
    ],
  },
];

export default Navigation;

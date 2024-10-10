export interface Component {
  name: string;
  supportLine: string;
  mdxPath: string;
  imageUrl: string;
}

const ComponentsData: Component[] = [
  {
    name: "Emogi Nav",
    supportLine: "Emogi Nav: Think Different, Navigate with Fun.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/emoginav.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Pendulum",
    supportLine:
      "Bring your UI to life with the smooth, captivating motion of the Pendulum component.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/pendulum.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Infinite Scroll",
    supportLine:
      "Keep users engaged with endless content loading using the Infinite Scroll component.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/infinitescroll.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Circular Navigation",
    supportLine:
      "An interactive circular menu for seamless navigation throughout your application.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/circularnavigation.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Carousel",
    supportLine:
      "Display content seamlessly with the smooth Carousel component.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/carousel.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Scroll Velocity",
    supportLine: "Dynamic scroll-based motion for engaging user experiences.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/scrollvelocity.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Custom Cursor",
    supportLine: "Enhance user engagement with a stylish, customizable cursor.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/customcursor.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Zoom Parallax",
    supportLine:
      "Add captivating depth and movement to your UI with the Zoom Parallax component, creating a truly immersive experience.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/zoomparallax.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Loader Button",
    supportLine: "Seamless loading with a customizable Loader Button.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/loaderbutton.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Floating Dock",
    supportLine:
      "Effortless access and interaction with a sleek, intuitive Floating Dock.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/floatingdock.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Tailwind Backgrounds",
    supportLine:
      "Elevate your design with customizable Tailwind backgrounds for a stylish, modern look.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/tailwindbackgrounds.mdx", // no need to add "@/content/docs/"
  },
];

export default ComponentsData;

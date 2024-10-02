export interface Component {
  name: string;
  supportLine: string;
  mdxPath: string;
  imageUrl: string;
}

const ComponentsData: Component[] = [
  {
    name: "Emogi Nav",
    supportLine:
      "Emogi nav, think different.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/emoginav.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Circular Navigation",
    supportLine:
      "An interactive circular menu for seamless navigation throughout your application.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/circularnavigation.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Loader Button",
    supportLine:
      "Seamless loading with a customizable Loader Button.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "components/loaderbutton.mdx", // no need to add "@/content/docs/"
  },
];

export default ComponentsData;

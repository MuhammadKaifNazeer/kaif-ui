export interface Component {
  name: string;
  supportLine: string;
  link: string;
  imageUrl: string;
}

const ComponentsData: Component[] = [
  {
    name: "Circular Navigation",
    supportLine:
      "An interactive circular menu for seamless navigation throughout your application.",
    link: "/docs/components/circularnavigation",
    imageUrl: "/components/circularNavigation.png",
  },
];

export default ComponentsData;

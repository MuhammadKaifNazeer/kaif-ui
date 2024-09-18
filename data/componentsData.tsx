// types.ts
export interface Component {
  name: string;
  supportLine: string;
  link: string;
  imageUrl: string;
}

const ComponentsData: Component[] = [
  {
    name: "Button",
    supportLine: "Displays a button or a component that looks like a button.",
    link: "/docs/components/button",
    imageUrl:
      "https://images.unsplash.com/photo-1689267166710-3875ccf73d64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default ComponentsData;

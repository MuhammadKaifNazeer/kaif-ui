// types.ts
export interface Block {
  name: string;
  supportLine: string;
  mdxPath: string;
  imageUrl: string;
}

const BlocksData: Block[] = [       
  {
    name: "Hero Sections",
    supportLine: "Create stunning first impressions with hero sections that captivate your audience from the moment they land on your site.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "blocks/herosections.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Pricing",
    supportLine: "Present your pricing with clarity and impact using sleek, customizable designs.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "blocks/pricing.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Authentication",
    supportLine: "Streamline user access with intuitive and customizable authentication UI.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "blocks/authentication.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Footer",
    supportLine: "Design seamless, informative footers that complete your website's experience.",
    imageUrl: "/components/circularNavigation.png",
    mdxPath: "blocks/footer.mdx", // no need to add "@/content/docs/"
  },
];

export default BlocksData;

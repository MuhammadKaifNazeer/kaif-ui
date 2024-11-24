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
    supportLine: "Make a stunning first impression with captivating hero sections.",
    imageUrl: "/blocks/hero-section.png",
    mdxPath: "blocks/herosections.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Pricing",
    supportLine: "Present your pricing with clarity and impact using sleek, customizable designs.",
    imageUrl: "/blocks/pricing.png",
    mdxPath: "blocks/pricing.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Authentication",
    supportLine: "Streamline user access with intuitive and customizable authentication UI.",
    imageUrl: "/blocks/authentication.png",
    mdxPath: "blocks/authentication.mdx", // no need to add "@/content/docs/"
  },
  {
    name: "Footer",
    supportLine: "Design seamless, informative footers that complete your website's experience.",
    imageUrl: "/blocks/footer.png",
    mdxPath: "blocks/footer.mdx", // no need to add "@/content/docs/"
  },
];

export default BlocksData;

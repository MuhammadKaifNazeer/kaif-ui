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
];

export default BlocksData;

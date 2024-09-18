import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";
import {
  BookIcon,
  Heart,
  LayoutTemplateIcon,
  PanelsTopLeft,
} from "lucide-react";
import Image from "next/image";

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          className="size-7 [header_&]:size-5"
          src={"/logo.png"}
          alt="logo"
          height={100}
          width={100}
        />
        <span className="font-medium text-lg [.uwu_&]:hidden max-md:[header_&]:hidden">
          Kaif UI
        </span>
      </>
    ),
  },
  links: [
    // {
    //   icon: <BookIcon />,
    //   text: "Documentation",
    //   url: "/docs",
    //   active: "nested-url",
    // },
    {
      icon: <BookIcon />,
      text: "Components",
      url: "/docs/allcomponents",
    },
    {
      icon: <LayoutTemplateIcon />,
      text: "Blocks",
      url: "/docs/allblocks",
    },
    {
      icon: <PanelsTopLeft />,
      text: "Templates",
      url: "/docs/alltemplates",
    },
    // {
    //   text: "Text Animations",
    //   url: "/templates",
    //   icon: <LayoutTemplateIcon />,
    // },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};

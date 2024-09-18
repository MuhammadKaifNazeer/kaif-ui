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
          className="size-6 [header_&]:size-5 hidden dark:block rounded"
          src="/logo/logo-dark-theme.svg"
          alt="logo"
          height={100}
          width={100}
        />
        <Image
          className="size-6 [header_&]:size-5 dark:hidden rounded"
          src="/logo/logo-light-theme.svg"
          alt="logo"
          height={100}
          width={100}
        />
        <span className="font-bold text-lg [.uwu_&]:hidden max-md:[header_&]:hidden">
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

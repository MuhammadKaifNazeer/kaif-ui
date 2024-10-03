import React from "react";
import { FloatingDock } from "@/components/kaif-ui/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconBrandLinkedin,
  IconUserFilled,
  IconPencil,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const navigationItems = [
    {
      label: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      link: "#",
    },
    {
      label: "Blog",
      icon: (
        <IconPencil className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      link: "#",
    },
    {
      label: "Portfolio",
      icon: (
        <IconUserFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      link: "#",
    },
    {
      label: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      link: "#",
    },
    {
      label: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      link: "#",
    },
    {
      label: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      link: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[24rem] w-full relative">
      <FloatingDock
        mobileClassName="absolute bottom-5 right-5" // in your case the position will be fixed
        navigationItems={navigationItems}
      />
    </div>
  );
}

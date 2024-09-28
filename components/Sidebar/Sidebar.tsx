import React from "react";
import Navigation from "@/data/Navigation";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

interface LinkData {
  title: string;
  href: string;
  external?: boolean;
}

interface SectionData {
  title: string;
  links: LinkData[];
}

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block lg:self-start">
        <div
          dir="ltr"
          className="relative overflow-hidden h-full py-6 pr-6 lg:py-8"
          style={{ position: "relative" }}
        >
          <style>
            {`[data-radix-scroll-area-viewport] {
              scrollbar-width: none;
              -ms-overflow-style: none;
              -webkit-overflow-scrolling: touch;
            }
            [data-radix-scroll-area-viewport]::-webkit-scrollbar {
              display: none;
            }`}
          </style>
          <ScrollArea
            data-radix-scroll-area-viewport=""
            className="h-full w-full rounded-[inherit]"
            style={{ overflow: "hidden scroll" }}
          >
            <div style={{ minWidth: "100%", display: "table" }}>
              <div className="w-full">
                {Navigation.map((section: SectionData, index: number) => (
                  <div className="pb-4" key={index}>
                    <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-black dark:text-white">
                      {section.title}
                    </h4>
                    <div className="grid grid-flow-row auto-rows-max text-sm">
                      {section.links.map((link: LinkData, idx: number) => (
                        <Link
                          key={idx}
                          className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:text-blue-500 hover:translate-x-1 transition duration-200 text-muted-foreground"
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          href={link.href}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </aside>
    </>    
  );
};

export default Sidebar;
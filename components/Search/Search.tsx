"use client";

import React from "react";
import {
  Circle,
  CommandIcon,
  SearchIcon,
  ExternalLink,
  LayoutList,
  BookText,
  FileTextIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navigation from "@/data/Navigation";
import Link from "next/link";

export function Search() {
  const [open, setOpen] = React.useState(false);

  // To open/close command dialog using Ctrl + K (or Cmd + K on Mac)
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // This function opens the CommandDialog on click
  const handleClick = () => {
    setOpen(true);
  };

  const sortedNavigation = [
    ...Navigation.filter((section) => section.title !== "Explore"),
    ...Navigation.filter((section) => section.title === "Explore"),
  ];

  return (
    <>
      {/* Search bar for larger screens */}
      <div
        className="relative flex-1 max-w-md cursor-pointer hidden md:block"
        onClick={handleClick}
      >
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        <Input
          className="w-full rounded-lg bg-muted border h-9 pl-10 pr-4 text-sm shadow-sm bg-background"
          placeholder="Search Components..."
          type="search"
          onClick={handleClick} // Open CommandDialog when clicking inside the input
        />
        <div className="sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-1 dark:bg-neutral-800 bg-zinc-200 p-1 rounded-sm">
          <CommandIcon className="w-3 h-3" />
          <span>K</span>
        </div>
      </div>

      {/* Search icon for mobile screens */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={handleClick}
      >
        <SearchIcon className="w-4 h-4" />
      </Button>

      {/* Command dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <ScrollArea className="h-[18.5rem]">
            <CommandEmpty>No results found.</CommandEmpty>
            {sortedNavigation.map((group, index) => (
              <React.Fragment key={group.title}>
                <CommandGroup heading={group.title}>
                  {group.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CommandItem>
                        <group.icon className="mr-2" />
                        <span>{link.title}</span>
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
                {/* Render CommandSeparator only if this is not the last group */}
                {index !== sortedNavigation.length - 1 && <CommandSeparator />}
              </React.Fragment>
            ))}
          </ScrollArea>
        </CommandList>
      </CommandDialog>
    </>
  );
}

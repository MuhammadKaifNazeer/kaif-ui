// components/SearchTriggerButton.tsx

import { CommandIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchTriggerButton: React.FC = () => {
  const handleClick = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      <div
        className="relative flex-1 max-w-md cursor-pointer hidden md:block"
        onClick={handleClick}
      >
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
        <Input
          className="w-full rounded-lg bg-muted border h-9 pl-10 pr-4 text-sm shadow-sm  bg-background"
          placeholder="Search Components..."
          type="search"
        />
        <div className="sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-1 dark:bg-neutral-800 bg-zinc-200 p-1 rounded-sm">
          <CommandIcon className="w-3 h-3" />
          <span>K</span>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={handleClick}
      >
        <SearchIcon className="w-4 h-4" />
      </Button>
    </>
  );
};

export default SearchTriggerButton;

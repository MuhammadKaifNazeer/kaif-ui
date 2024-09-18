"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const ThemeToggler = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        ref={ref}
        variant="outline"
        type="button"
        size="icon"
        className={cn("px-2 hidden lg:flex", className)}
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        {...props}
      >
        <SunIcon className="size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
      <Button
        ref={ref}
        variant="ghost"
        type="button"
        size="icon"
        className={cn("px-2 lg:hidden", className)}
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        {...props}
      >
        <SunIcon className="size-4 text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden size-4 text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
    </>
  );
});

ThemeToggler.displayName = "ThemeToggler";

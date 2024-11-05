import React from "react";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function End() {
  return (
    <>
      <div
        className="relative p-6 text-center text-3xl font-bold py-14"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))",
        }}
      >
        <h2 className="bg-gradient-to-b from-primary/90 to-primary/55 bg-clip-text text-center text-2xl text-transparent sm:text-3xl">
          <GitHubLogoIcon scale={100} /> Fully open-source,
          <br /> available on <span className="underline"> Github</span>.
        </h2>
      </div>

      <ShapratorHorizontal />

      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <h1 className="text-2xl col-span-2 font-bold text-muted-foreground flex items-center justify-center lg:justify-start p-4">
          Build Your Projects 10x Faster
        </h1>
        <div className="text-2xl lg: border-l col-span-1 font-bold text-muted-foreground h-full flex items-center justify-center p-4 space-x-4">
          <Link
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              "bg-primary text-primary-foreground shadow hover:bg-primary/85 hover:shadow-md",
              "h-9 px-4 py-2"
            )}
            href={"/components"}
          >
            Browse Components
          </Link>
          <Link
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
              "border-input border-[1.5px] bg-primary-foreground hover:bg-[#f3f3f3] dark:hover:bg-[#202020]",
              "h-9 px-4 py-2"
            )}
            href={"https://github.com/MuhammadKaifNazeer/kaif-ui"}
            target="_blank"
          >
            <GitHubLogoIcon className="mr-2" /> Give a star
          </Link>
        </div>
      </div>
    </>
  );
}

const ShapratorHorizontal = () => {
  return <div className="border-t w-full" />;
};

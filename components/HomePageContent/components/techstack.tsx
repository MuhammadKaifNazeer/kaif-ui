import React from "react";
import {
  LibraryBig,
  Palette,
  Plus,
  Server,
  Settings2,
  Sparkles,
  TerminalIcon,
} from "lucide-react";

export default function TechStack() {
  return (
    <>
      <div
        className="relative p-6 text-center text-3xl font-bold py-14"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))",
        }}
      >
        <div
          className="absolute -bottom-[10.5px] -left-[10.5px] w-5 h-5"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Plus size={40} strokeWidth={1.25} />
        </div>
        <div
          className="absolute -top-[10.5px] -right-[10.5px] w-5 h-5"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Plus size={40} strokeWidth={1.25} />
        </div>
        <h2 className="bg-gradient-to-b from-primary/90 to-primary/45 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
          Build with Modern
          <br />
          Technologies
        </h2>
      </div>

      <ShapratorHorizontal />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-b lg:border-b-0 md:border-r px-6 py-12 hover:bg-primary-foreground/70">
          <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
            <Settings2 size={16} strokeWidth={1.5} className="mr-2 size-4" />
            <h2 className="text-sm font-medium">React</h2>
          </div>
          <span className="font-medium">
          A JavaScript library for building dynamic UIs.
          </span>
        </div>

        <div className="border-b lg:border-b-0 lg:border-r px-6 py-12 hover:bg-primary-foreground/70">
          <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
            <Sparkles size={16} strokeWidth={1.5} className="mr-2 size-4" />
            <h2 className="text-sm font-medium">Next.js</h2>
          </div>
          <span className="font-medium">
          A React framework for fast, SEO-friendly sites.
          </span>
        </div>

        <div className="border-b md:border-b-0 md:border-r px-6 py-12 hover:bg-primary-foreground/70">
          <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
            <TerminalIcon size={16} strokeWidth={1.5} className="mr-2 size-4" />
            <h2 className="text-sm font-medium">Tailwind CSS</h2>
          </div>
          <span className="font-medium">Utility-based CSS for rapid custom styling.</span>
        </div>

        <div className="px-6 py-12 hover:bg-primary-foreground/70">
          <div className="mb-4 flex flex-row items-center gap-2 text-muted-foreground">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3"></path>
              <path d="M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M16 5v-2"></path>
            </svg>
            <h2 className="text-sm font-medium">Framer Motion</h2>
          </div>
          <span className="font-medium">Animation library for smooth React UIs.</span>
        </div>
      </div>
    </>
  );
}

const ShapratorHorizontal = () => {
  return <div className="border-t w-full" />;
};

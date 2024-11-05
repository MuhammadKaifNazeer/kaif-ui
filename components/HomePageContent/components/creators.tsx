import React from "react";
import { BatteryChargingIcon, TimerIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";
import Image from "next/image";

export default function Creators() {
  return (
    <>
      <div className="container relative z-[2] flex flex-col overflow-hidden border-x border-t bg-fd-background px-6 py-12 max-md:text-center md:px-12 md:py-16 [.uwu_&]:hidden ">
        <h1 className="mb-8 max-w-[600px] text-4xl font-medium">
          Get Premium Templates for Free!
        </h1>
        <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
          Join the Kaif UI Creator Partnership Program and gain exclusive access
          to premium templates at no cost! Elevate your content and inspire your
          audience while collaborating with us.
        </p>
        <div className="inline-flex items-center gap-3 max-md:mx-auto">
          <Link
            href="https://forms.gle/2nxuP7rPW6ooHvXY8"
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg", className: "rounded-full" })
            )}
          >
            Join Now
          </Link>
          {/* <Link
            href="/creators"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
                className: "rounded-full",
              })
            )}
          >
            Learn More
          </Link> */}
        </div>
        <div
          className="absolute inset-0 z-[-1] opacity-[50%]"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse at top, transparent 60%, hsla(250,90%,90%,0.2))",
              "linear-gradient(to bottom, transparent 30%, hsl(var(--primary) / 0.2))",
              "linear-gradient(to bottom, hsl(var(--background)) 40%, transparent)",
              "repeating-linear-gradient(45deg, transparent,transparent 60px, hsl(var(--primary)) 61px, transparent 62px)",
            ].join(", "),
          }}
        />
      </div>
    </>
  );
}

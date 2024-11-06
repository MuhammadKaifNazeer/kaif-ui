import React from "react";
import { Heart } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SponsorsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 min-h-screen">
      <div className="grid place-items-center w-[70%] my-20 space-y-5">
        <h1 className="scroll-m-20 pb-2 text-4xl font-semibold tracking-tight first:mt-0">
          Support{" "}
          <span className="relative after:content-['']  after:absolute  after:top-[95%] after:w-[150%] after:[aspect-ratio:5_/_1] after:left-2/4 after:-translate-x-1/2 after:translate-y-[0]  after:rounded-[50%] after:border-[2px] after:border-[solid] after:border-blue-500 after:[clip-path:polygon(0_0,_50%_50%,_100%_0)]">
            Kaif UI
          </span>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Your{" "}
          <i>
            <span className="text-blue-500 underline">sponsorship</span>
          </i>{" "}
          powers <b>open-source</b> projects like <i>Kaif UI.</i>
        </p>
        <div className="mt-2">
          <div>
            <Link
              href={`https://buymeacoffee.com/muhammadkaifnazeer`}
              target="_blank"
              rel="noreferrer noopener"
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "w-full mt-3 border hover:border-blue-500 hover:bg-blue-600/15 hover:dark:bg-blue-600/15"
              )}
            >
              <Heart className="text-blue-500 mr-2 items-center" size={16} />
              Become a sponsor
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-5 grid place-items-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-xs text-muted-foreground">
          Sponsors
        </p>
        <div className="my-1 text-xs flex items-center">
          no sponsors yet :({" "}
          <Link
            href={"https://buymeacoffee.com/muhammadkaifnazeer"}
            target="_blank"
            className="underline text-xs ml-3"
          >
            become the first sponsor.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ContributorsData from "@/data/contributors";

type Contributor = {
  name: string;
  image: string;
  github: string;
};

export default function ContributorsComponent() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10">
        <Heart size={36} className="mb-3" />
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Made Possible by You.
        </h3>
        <p className="text-sm text-muted-foreground my-3">
          Kaif UI is 100% powered by passion and open source community.
        </p>

        <p className="text-sm text-muted-foreground my-3">
          Some of our best contributors.
        </p>
        <div className="mt-10 -ml-4">
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            {ContributorsData.map((contributor: Contributor) => (
              <div key={contributor.name}>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={contributor.github}
                        className="-mr-4 relative group"
                        target="_blank"
                      >
                        <Image
                          height={100}
                          width={100}
                          src={contributor.image}
                          alt={contributor.name}
                          className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{contributor.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

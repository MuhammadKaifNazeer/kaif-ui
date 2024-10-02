// get animated emogies from: https://googlefonts.github.io/noto-emoji-animation/
// Visit https://kaif-ui.vercel.app/ for components like this

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  emogi: string;
  alt: string;
};

type EmogiNavProps = {
  navItems: NavItem[];
};

const EmogiNav: React.FC<EmogiNavProps> = ({ navItems }) => {
  return (
    <div className="fixed top-5 left-[50%] -translate-x-[50%] z-[10000] w-full sm:w-max">
      <div className="border px-5 py-2 rounded-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav>
          <div className="flex items-center justify-center space-x-6">
            {navItems.map((item) => (
              <div key={item.href}>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Image
                          src={item.emogi}
                          alt={item.alt}
                          width={48}
                          height={48}
                        />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default EmogiNav;

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CodeXml, Github } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex flex items-center justify-start gap-2">
              <Image
                alt="Logo"
                loading="lazy"
                width={50}
                height={50}
                decoding="async"
                src="/logo/logo-dark-theme.svg"
                className="w-6 h-6 hidden dark:block rounded"
              />
              <Image
                alt="Logo"
                loading="lazy"
                width={50}
                height={50}
                decoding="async"
                src="/logo/logo-light-theme.svg"
                className="w-6 h-6 dark:hidden rounded"
              />
            </div>
          </Link>
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              target="_blank"
              href="https://github.com/MuhammadKaifNazeer"
            >
              Muhammad Kaif Nazeer
            </Link>
            .
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/MuhammadKaifNazeer/kaif-ui/"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <Github className="h-4 w-4 mr-2 text-primary fill-current" />
        Github
      </Link>
    </>
  );
}

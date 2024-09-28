import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-background">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="mr-4 md:flex mb-4">
              <Link
                href="/"
                className="flex items-center justify-center space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 mr-10 py-0"
              >
                <div className="relative size-8 md:size-[25px] flex items-center justify-center rounded-md text-sm antialiased">
                  <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
                  <div className="text-sm relative z-20">
                    <Image
                      alt="Logo"
                      width={50}
                      height={50}
                      loading="lazy"
                      decoding="async"
                      className="block dark:hidden rounded"
                      src="/logo/logo-light-theme.svg"
                    />
                    <Image
                      alt="Logo"
                      width={50}
                      height={50}
                      loading="lazy"
                      decoding="async"
                      className="hidden dark:block rounded"
                      src="/logo/logo-dark-theme.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-black dark:text-white font-sans">
                    Kaif UI
                  </h1>
                </div>
              </Link>
            </div>
            <div>   
            Brought to you by{" "}
              <Link
                target="__blank"
                className="dark:text-sky-500 text-neutral-600 font-medium"
                href="https://x.com/MuhammadKaif999"
              >
               @MuhammadKaif999  
              </Link>
            </div>
          </div>  
          <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link
                href="/components"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Components
              </Link>
              <Link
                href="/blocks"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Blocks
              </Link>
              <Link
                href="/templates"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Templates
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://x.com/MuhammadKaif999"
              >
                Twitter
              </Link>
              <Link
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://discord.gg/yZpeqXgqNc"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

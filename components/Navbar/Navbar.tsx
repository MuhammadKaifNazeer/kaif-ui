"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { X, Rocket, Github } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { NavMenu } from "@/components/NavigationMenu/NavigationMenu";
import { ThemeToggler } from "@/components/ThemeToggler/ThemeToggler";
import SearchTriggerButton from "@/components/SearchTriggerButton/SearchTriggerButton";

type NavbarProps = {
  className?: string;
};

const NavLinks = [
  {
    link: "/components",
    name: "Components",
  },
  {
    link: "/blocks",
    name: "Blocks",
  },
  {
    link: "/docs/alltemplates",
    name: "Templates",
  },
  // {
  //   link: "/textanimations",
  //   name: "Text Animation",
  // },
];

export function Navbar({ className }: NavbarProps) {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
        if (isOpen) {
          setIsOpen(false);
        }
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 z-[100] w-full border-b border-transparent bg-transparent w-full">
        <div
          className={`hidden lg:block w-full ${scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-background/60" : ""}`}
        >
          <div className="px-4 py-4 flex h-16 items-center container w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-start gap-4">
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
                    <h3 className="text-xl font-bold">Kaif UI</h3>
                  </div>
                </Link>
                <NavMenu />
              </div>
              <div className="flex items-center justify-end gap-2">
                <SearchTriggerButton />
                <ThemeToggler />
                <Link
                  href="https://github.com/MuhammadKaifNazeer/kaif-ui"
                  target="_blank"
                >
                  <Button className="gap-2">
                    <Github className="w-4 h-4" />
                    Give a star
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div
            className={`fixed w-full top-0 flex items-center justify-between gap-4 px-4 py-2 md:px-6 z-[100] ${scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-background/60" : ""}`}
          >
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
                <h3 className="text-xl font-bold">Kaif UI</h3>
              </div>
            </Link>
            <div className="flex items-center justify-end gap-2">
              <div className="flex items-center justify-end gap-2">
                <SearchTriggerButton />
                <ThemeToggler />
                <Link
                  href="https://github.com/MuhammadKaifNazeer/kaif-ui"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 rounded"
                onClick={toggleSidebar}
              >
                <HamburgerMenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>
            </div>
          </div>

          <div
            className={`fixed w-screen h-screen bg-black/70 z-[105]  duration-500  ${isOpen ? "-translate-x-0 opacity-1" : "-translate-x-full opacity-0"}`}
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className={cn(
              `z-[110] w-[17rem] border-r lg:pt-3 translate-x-full bg-background max-w-[80%] h-screen duration-500 lg:left-0 fixed ${isOpen ? "-translate-x-0" : "-translate-x-full"} top-0`,
              className,
            )}
          >
            <div className="space-y-4 ">
              <div className="flex justify-between border-b pt-[0.22rem]">
                <Link
                  href={"/"}
                  className="flex justify-start items-center pl-7 px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
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
                    <h3 className="text-xl font-bold">Kaif UI</h3>
                  </div>
                </Link>
                <div className="px-3 py-2 hidden lg:block"></div>
                <div className="px-3 py-1 lg:hidden flex items-center justify-end">
                  <Button
                    className="p-2 h-max w-max"
                    variant={"outline"}
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="flex flex-col space-y-px">
                  {NavLinks.map((link) => (
                    <Link
                      href={link.link}
                      key={link.name}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant={
                          link.link === currentPath ? "secondary" : "ghost"
                        }
                        className="w-full justify-start"
                      >
                        {link.name}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FooterTwo: React.FC = () => {
    return (
        <>
            <footer id="footer" className="mt-20 w-full hidden sm:block px-8 pt-8">
                <div className="">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                        <nav>
                            <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                                <li>
                                    <div className="font-display text-sm font-semibold tracking-wider">
                                        Pages
                                    </div>
                                    <ul className="mt-4 text-sm text-muted-foreground">
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                All Products
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Categories
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="/profile"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="/contact"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="font-display text-sm font-semibold tracking-wider">
                                        Socials
                                    </div>
                                    <ul className="mt-4 text-sm text-muted-foreground">
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Facebook
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Instagram
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Twitter
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                LinkedIn
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="font-display text-sm font-semibold tracking-wider">
                                        Legal
                                    </div>
                                    <ul className="mt-4 text-sm text-muted-foreground">
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Terms of Service
                                            </Link>
                                        </li>
                                        <li className="mt-4">
                                            <Link
                                                href="#"
                                                className="transition hover:text-neutral-950 dark:hover:text-white"
                                            >
                                                Cookie Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex lg:justify-end">
                            <form className="max-w-sm">
                                <h2 className="font-display text-sm font-semibold tracking-wider">
                                    Sign up for our newsletter
                                </h2>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Subscribe to get the latest design news, articles, resources
                                    and inspiration.
                                </p>
                                <div className="relative mt-6">
                                    <input
                                        placeholder="Email address"
                                        autoComplete="email"
                                        aria-label="Email address"
                                        className="block w-full rounded-2xl border bg-transparent py-4 pl-6 pr-20 text-base/6 transition"
                                        type="email"
                                    />
                                    <div className="absolute inset-y-1 right-1 flex justify-end">
                                        <Button
                                            type="submit"
                                            aria-label="Submit"
                                            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 dark:bg-white dark:hover:bg-white/90 dark:text-neutral-950"
                                        >
                                            <ArrowRight size={16} />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t pt-12">
                        <Link
                            href={"/"}
                            className="flex justify-start items-center"
                        >
                            <div className="logo flex items-center justify-start gap-1">
                                <Image
                                    alt="logo"
                                    loading="lazy"
                                    width={30}
                                    height={30}
                                    decoding="async"
                                    data-nimg="1"
                                    src={'https://kaif-ui.vercel.app/logo/logo-light-theme.svg'}
                                    className="rounded size-[2rem]"
                                />
                                <h1 className="text-xl font-semibold">Kaif UI</h1>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground">© Kaif UI. 2024</p>
                    </div>
                </div>
            </footer>
            <div className="sm:hidden w-fullh h-[5rem]"></div>
        </>
    );
};

export default FooterTwo;
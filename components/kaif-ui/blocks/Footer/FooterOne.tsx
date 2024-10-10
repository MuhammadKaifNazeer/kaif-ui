
// Visit https://kaif-ui.vercel.app/ for more blocks like this

import Image from "next/image";
import Link from "next/link";

export default function FooterOne() {
    return (
        <>
            <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-background w-full relative overflow-hidden">
                <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
                    <div>
                        <div className="mr-0 md:mr-4 md:flex mb-4">
                            <Link
                                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                                href="/"
                            >
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
                                <span className="font-bold text-xl text-black dark:text-white">Kaif UI</span>
                            </Link>
                        </div>
                        <div className="mt-2 ml-2">© copyright Kaif UI 2024. All rights reserved.</div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
                        <div className="flex justify-center space-y-4 flex-col w-full">
                            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">Pages</p>
                            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Home</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Pricing</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Contact</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col">
                            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">Socials</p>
                            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Facebook</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Instagram</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Twitter</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col">
                            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">Legal</p>
                            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Privacy Policy</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Terms of Service</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Cookie Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col">
                            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">Register</p>
                            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Sign Up</Link>
                                </li>
                                <li className="list-none">
                                    <Link className="transition-colors hover:text-text-neutral-800" href="#">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-center uppercase mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">Footer</p>
            </div>

        </>
    );
}
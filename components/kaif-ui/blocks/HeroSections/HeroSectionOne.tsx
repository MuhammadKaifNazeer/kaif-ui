
// Visit https://kaif-ui.vercel.app/ for more blocks like this

import { Button } from "@/components/ui/button";
import Image from "next/image"

export default function HeroSectionOne() {
    return (
        <>
            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden pt-20 md:pt-40">

                <h1 className="relative z-10 mx-auto mt-6 max-w-6xl text-center text-2xl font-semibold text-black md:text-4xl lg:text-8xl dark:text-white">
                The Ultimate Solution for All Your Web Needs
                </h1>

                <p className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-base text-neutral-700 md:text-xl dark:text-neutral-400">
                Kaif UI blends expert design with cutting-edge technology to create intuitive user interfaces, enhancing every aspect of your digital experience.
                </p>

                <div className="relative z-10 mt-10 flex items-center justify-center gap-4">
                    <Button className="rounded-full flex items-center gap-2 py-6" size={'lg'}>
                        Get started
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 stroke-[1px]" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                        </svg>
                    </Button>
                </div>

                <div className="relative mt-20 rounded-[32px] border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] bg-gradient-to-b from-transparent via-white to-white dark:via-black/90 dark:to-black"></div>
                    <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
                        <Image
                            alt="header"
                            loading="lazy"
                            width={1920}      
                            height={1080}
                            decoding="async"
                            className="rounded-[20px]"
                            src="/blocks/mail-dark.webp"
                            style={{ color: "transparent" }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

// Visit https://kaif-ui.vercel.app/ for more blocks like this

import Image from "next/image"

export default function HeroSectionOne() {
    return (
        <>
            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden pt-20 md:pt-40">
                <div className="flex justify-center" style={{ opacity: 1, willChange: "auto", transform: "none" }}>
                    <button className="group relative mx-auto inline-block w-fit cursor-pointer rounded-full bg-neutral-50 p-px text-[10px] font-semibold leading-6 text-neutral-700 no-underline shadow-zinc-900 sm:text-xs md:shadow-2xl dark:bg-neutral-700 dark:text-neutral-300">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <div className="relative z-10 flex items-center space-x-2 rounded-full bg-neutral-100 px-4 py-1.5 ring-1 ring-white/10 dark:bg-neutral-800">
                            <span>Transform Your Digital Experience</span>
                            <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                ></path>
                            </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </button>
                </div>

                <h1 className="relative z-10 mx-auto mt-6 max-w-6xl text-center text-2xl font-semibold text-black md:text-4xl lg:text-8xl dark:text-white" style={{ opacity: 1, willChange: "auto", transform: "none" }}>
                The Ultimate Solution for All Your Web Needs
                </h1>

                <p className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-base text-neutral-700 md:text-xl dark:text-neutral-400" style={{ opacity: 1, willChange: "auto", transform: "none" }}>
                Kaif UI blends expert design with cutting-edge technology to create intuitive user interfaces, enhancing every aspect of your digital experience.
                </p>

                <div className="relative z-10 mt-6 flex items-center justify-center gap-4" style={{ opacity: 1, willChange: "auto", transform: "none" }}>
                    <button className="relative z-10 flex items-center justify-center rounded-full border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-black/90 md:text-sm">
                        Get started
                    </button>
                    <button className="group relative z-10 flex items-center justify-center space-x-2 rounded-full border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-black transition duration-200 hover:bg-gray-100 md:text-sm dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl">
                        <span>Pricing</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 stroke-[1px] text-neutral-700 transition-transform duration-200 group-hover:translate-x-1 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div className="relative mt-20 rounded-[32px] border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black"></div>
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
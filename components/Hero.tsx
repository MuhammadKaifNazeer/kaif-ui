"use client";

import React from "react";
import { Github } from "lucide-react";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { Users } from "@/components/Users/Users";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none">
          <div
            className="absolute top-0 left-0"
            style={{
              transform: "translateY(-350px) rotate(-45deg)",
              width: "560px",
              height: "1380px",
              background:
                "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(179, 217, 255, 0.08) 0px, rgba(26, 140, 255, 0.02) 50%, rgba(0, 115, 230, 0) 80%)",
            }}
          ></div>

          <div
            className="absolute top-0 left-0"
            style={{
              transform: "rotate(-45deg) translate(5%, -50%)",
              transformOrigin: "left top",
              width: "240px",
              height: "1380px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(179, 217, 255, 0.06) 0px, rgba(26, 140, 255, 0.02) 80%, transparent 100%)",
            }}
          ></div>

          <div
            className="absolute top-0 left-0"
            style={{
              borderRadius: "20px",
              transform: "rotate(-45deg) translate(-180%, -70%)",
              transformOrigin: "left top",
              top: "0px",
              left: "0px",
              width: "240px",
              height: "1380px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(179, 217, 255, 0.04) 0px, rgba(0, 115, 230, 0.02) 80%, transparent 100%)",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto md:mt-[4rem] relative flex flex-col items-center justify-center overflow-hidden px-4 pb-0 pt-20">
          <h1 className="tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white relative z-20 mx-auto max-w-7xl py-6 text-center text-4xl font-semibold [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)] md:text-4xl lg:text-7xl">
            <span
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
              className=""
            >
              Build Beautiful Interfaces at <Cover>Lightning Speed</Cover>
            </span>
          </h1>
          <h2 className="my-4 font-normal text-neutral-600 dark:text-neutral-200 relative z-20 mx-auto mt-2 max-w-5xl text-center text-base md:mt-4 md:text-xl">
            <span
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
            >
              Explore a vast library of beautifully crafted, animated
              components. Save development time, enhance user experience, and
              build visually stunning interfaces at lightning speed.
            </span>
          </h2>
          <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row">
            <Link href={"/docs/allcomponents"} className="w-full sm:w-max">
              <Button className="no-underline flex space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 bg-black dark:bg-white dark:text-black text-white relative z-20 h-10 w-full items-center justify-center rounded-lg text-center text-sm sm:w-52 w-full">
                Browse Components
              </Button>
            </Link>
            <Link href={"/blocks"} className="w-full sm:w-max">
              <Button className="no-underline space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 relative z-20 text-sm bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 shadow-input text-black dark:text-white w-full h-10 flex items-center justify-center rounded-lg text-center sm:w-52 w-full">
                Browse Blocks
              </Button>
            </Link>
          </div>

          <div className="mb-8 mt-12 flex flex-col md:flex-row md:gap-10 md:px-8">
            <div>
              <h2 className="text-neutral-500 text-center mb-4 relative z-10 text-xs">
                Chosen by Innovators and Visionaries Worldwide
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-10">
                <Users />
              </div>
            </div>

            <div className="relative mt-10">
              <div className="absolute right-0 z-40 block h-full w-20 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-black sm:hidden"></div>
              <div
                className="no-visible-scrollbar relative z-20 mb-4 flex flex-wrap items-center justify-center gap-4"
                style={{ scrollbarWidth: "none" }}
              >
                <div className="mr-4 flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                    >
                      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                      <path d="M15 12v-3"></path>
                    </svg>
                  </span>
                  <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                    Next.js
                  </span>
                </div>
                <div className="mr-4 flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                    >
                      <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                      <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                      <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                      <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                      <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                      <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                      <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                    </svg>
                  </span>
                  <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                    React
                  </span>
                </div>
                <div className="mr-4 flex items-center space-x-2">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 flex-shrink-0 stroke-[0.5px] text-neutral-500 md:h-10 md:w-10"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                    </svg>
                  </span>
                  <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                    Tailwind CSS
                  </span>
                </div>
                <div className="mr-4 flex items-center space-x-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-500 md:h-10 md:w-10"
                    >
                      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
                      <path d="M20 12l-8 8l-4 -4"></path>
                    </svg>
                  </span>
                  <span className="flex-shrink-0 text-sm font-semibold text-neutral-500">
                    Framer Motion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

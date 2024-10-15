import { redirect } from "next/navigation";
import BlocksData from "@/data/blocksData";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify";

const AllBlocks: React.FC = () => {
   
  return (  
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-10 pb-40 items-start relative z-40">
            {BlocksData.map((block) => (
              <Link
              key={block.name}
              href={`/blocks/${slugify(block.name)}`}
              className="antialiased group"
              >
                <div className="relative dark:border rounded-lg dark:border-white/[0.1] overflow-hidden group-hover:shadow-xl transition duration-200 aspect-video flex items-center justify-center">
                  <Image
                    alt={block.name}
                    loading="lazy"
                    width={720}
                    height={1024}
                    decoding="async"
                    className="transition duration-300 blur-0 rounded-md group-hover:scale-105 object-cover h-full w-full"
                    src={block.imageUrl}
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-xl font-bold mt-4 mb-2 dark:text-neutral-100 text-neutral-700">
                  {block.name}
                </p>
                <p className="mt-2 text-sm font-normal dark:text-neutral-300 text-neutral-500">
                  {block.supportLine}
                </p>
              </Link>
            ))}
            <div className="antialiased h-full">
              <div className="aspect-video py-10 flex-col h-72 md:h-full w-full relative overflow-hidden rounded-lg dark:bg-black dark:border-white/[0.1] border border-transparent bg-gray-50 bg-dot-slate-200 dark:bg-dot-white/[0.1] flex items-center justify-center">
                <div className="text-4xl font-bold dark:text-neutral-200 text-neutral-700">
                  <span>Coming Soon</span>
                  <div className="opacity-20 absolute left-1/2 top-20 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_45%)] sm:-translate-x-1/2 lg:ml-12 xl:ml-0">
                    <svg
                      viewBox="0 0 1026 1026"
                      fill="none"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full animate-spin-slow"
                    >
                      <path
                        d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                        stroke="#D4D4D4"
                        strokeOpacity="0.7"
                      ></path>
                      <path
                        d="M513 1025C230.23 1025 1 795.77 1 513"
                        stroke="url(#HjHDBiwesSxOeoLsWwT1b-gradient-1)"
                        strokeLinecap="round"
                      ></path>
                      <defs>
                        <linearGradient
                          id="HjHDBiwesSxOeoLsWwT1b-gradient-1"
                          x1="1"
                          y1="513"
                          x2="1"
                          y2="1025"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#06b6d4"></stop>
                          <stop
                            offset="1"
                            stopColor="#06b6d4"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      viewBox="0 0 1026 1026"
                      fill="none"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
                    >
                      <path
                        d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                        stroke="#D4D4D4"
                        strokeOpacity="0.7"
                      ></path>
                      <path
                        d="M913 513c0 220.914-179.086 400-400 400"
                        stroke="url(#HjHDBiwesSxOeoLsWwT1b-gradient-2)"
                        strokeLinecap="round"
                      ></path>
                      <defs>
                        <linearGradient
                          id="HjHDBiwesSxOeoLsWwT1b-gradient-2"
                          x1="913"
                          y1="513"
                          x2="913"
                          y2="913"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#06b6d4"></stop>
                          <stop
                            offset="1"
                            stopColor="#06b6d4"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-base font-normal dark:text-neutral-300 text-neutral-600 px-8 text-center">
                  We are working hard to bring you more blocks. Bookmark
                  this page to stay tuned!
                </p>
              </div>
            </div>
          </div>
      </>
  );
};

export default AllBlocks;

import Image from "next/image";
import Link from "next/link";
import BlocksData from "@/data/blocksData";

const AllBlocks: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-20 lg:gap-10 pb-40 items-start relative">
        {BlocksData.map((block) => (
          <Link
            key={block.name}
            href={block.link}
            className="antialiased group no-underline"
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
      </div>
    </div>
  );
};

export default AllBlocks;

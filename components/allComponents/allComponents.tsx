import Image from "next/image";
import Link from "next/link";
import ComponentsData from "@/data/componentsData";

const AllComponents: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-20 lg:gap-10 pb-40 items-start relative z-40">
        {ComponentsData.map((component) => (
          <Link
            key={component.name}
            href={component.link}
            className="antialiased group no-underline"
          >
            <div className="relative dark:border rounded-lg dark:border-white/[0.1] overflow-hidden group-hover:shadow-xl transition duration-200 aspect-video flex items-center justify-center">
              <Image
                alt={component.name}
                loading="lazy"
                width={720}
                height={1024}
                decoding="async"
                className="transition duration-300 blur-0 rounded-md group-hover:scale-105 object-cover h-full w-full"
                src={component.imageUrl}
                style={{ color: "transparent" }}
              />
            </div>
            <p className="text-xl font-bold mt-4 mb-2 dark:text-neutral-100 text-neutral-700">
              {component.name}
            </p>
            <p className="mt-2 text-sm font-normal dark:text-neutral-300 text-neutral-500">
              {component.supportLine}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllComponents;

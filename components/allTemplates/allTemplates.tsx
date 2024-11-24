import React from "react";
import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import Image from "next/image";
import Link from "next/link";
import TemplatesData from "@/data/templatesData";
import { slugify } from "@/utils/slugify";

const AllTemplates = () => {
  return (
    <div>
      <div className="pt-8">
        <div className="flex flex-col gap-8 md:gap-20">
          {TemplatesData &&
            TemplatesData.map((template) => (
              <Link
                key={template.title}
                className="mb-10 grid w-full cursor-pointer grid-cols-1 items-start justify-start gap-4 md:grid-cols-4"
                href={`/templates/${slugify(template.title)}`}
              >
                <div className="order-last md:order-first">
                  <h2 className="text-base font-semibold text-black dark:text-white">
                    {template.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {template.description}
                  </p>
                  <Link
                    href={`/templates/${slugify(template.title)}`}
                    target="_blank"
                    className="mt-4 inline-flex shadow-sm rounded-md w-full sm:w-max"
                  >
                    <span className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-l-md flex items-center justify-center hover:opacity/90 w-full sm:w-max">
                      View Template
                    </span>
                    <span className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-r-md flex items-center justify-center border-l hover:opacity/90 w-max">
                      {template.price}
                    </span>
                  </Link>
                </div>
                {template.images.slice(0, 3).map((image, index) => (
                  <div className={`h-full w-full`}>
                    <Image
                      key={index}
                      alt={`${template.title} Image ${index + 1}`}
                      loading="lazy"
                      width={1000}
                      height={500}
                      decoding="async"
                      className={`w-full h-max transition duration-300 blur-0 rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset
                           ${index > 0 ? "hidden md:block" : ""}`}
                      src={image}
                    />
                  </div>
                ))}
              </Link>
            ))}
          <ComingSoon />
        </div>
      </div>
    </div>
  );
};

export default AllTemplates;

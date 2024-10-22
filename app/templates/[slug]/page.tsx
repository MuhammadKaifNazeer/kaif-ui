"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TemplatesData from "@/data/templatesData";
import { slugify } from "@/utils/slugify";
import { CTA } from "@/components/CTA/CTA";

const TemplatePage: React.FC = () => {
  const { slug } = useParams();

  const template = TemplatesData.find(
    (template) => slugify(template.title) === slug
  );

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="pt-[4rem]">
      <div className="relative py-6 lg:gap-10 lg:py-8 container md:px-9">
        <div className="mx-auto w-full min-w-0 px-4 md:px-0">
          <div className="py-4 md:py-10 overflow-hidden relative">
            <div className="mb-4 relative z-20 flex-col lg:flex-row flex items-center lg:items-end justify-between text-sm text-muted-foreground">
              <div className="gap-2">
                <h1 className="scroll-m-20 text-4xl font-bold text-center lg:text-left tracking-tight text-black dark:text-white mb-6">
                  {template.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl !mb-6 text-center lg:text-left">
                  <span
                    style={{
                      display: "inline-block",
                      verticalAlign: "top",
                      textDecoration: "inherit",
                      textWrap: "balance",
                    }}
                  >
                    {template.description}
                  </span>
                </p>
                <div className="flex justify-center lg:justify-start gap-1 flex-wrap">
                  {template.techStack.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 rounded-lg z-20 flex items-center justify-center border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700"
                    >
                      <h3 className="text-sm">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <div className="flex flex-col justify-center lg:justify-start mt-6">
                  <div className="flex gap-2 flex-col sm:flex-row justify-center lg:justify-start">
                    <Link
                      href={template.previewLink}
                      className="no-underline space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 relative z-20 text-sm bg-neutral-100 dark:bg-neutral-800 shadow-input text-black dark:text-white sm:w-44 h-10 flex items-center justify-center rounded-lg hover:-translate-y-0.5 w-auto"
                      target="_blank"
                    >
                      Live Preview
                    </Link>
                    <Link
                      href={template.buyLink}
                      className="no-underline flex space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 bg-black dark:bg-white dark:text-black text-white sm:w-46 h-10 rounded-lg text-sm text-center items-center justify-center relative z-20 w-[200px]"
                      target="_blank"
                    >
                      <span>Buy Now</span> <span>{template.price}</span>
                    </Link>
                  </div>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-4">
                  free for content creators{" "}
                  <span
                    className="font-bold text-neutral-900 dark:text-neutral-50"
                  >
                    Comming Soon
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-12 pt-8">
              <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 xl:px-0">
                {template.images.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      alt={`${template.title} Image ${index + 1}`}
                      src={image}
                      loading="lazy"
                      width={500}
                      height={500}
                      decoding="async"
                      className="transition duration-300 blur-0 aspect-video w-full rounded-md border border-neutral-200 object-cover object-center shadow-sm dark:border-neutral-800"
                      style={{ color: "transparent" }}
                    />
                  </div>
                ))}
              </div>
              <div className="my-4 flex flex-col gap-10 px-4 py-6 sm:px-8 md:my-20 lg:flex-row lg:px-8 lg:py-10 xl:px-0">
                <div className="mr-4 w-80 lg:mr-12">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-300 sm:text-2xl">
                    Features
                  </h3>
                </div>
                <div className="flex flex-1 flex-row flex-wrap justify-between">
                  <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
                    {template.features.map((feature, index) => (
                      <div className="relative flex-col" key={index}>
                        <p className="mb-2 font-medium text-black dark:text-neutral-100">
                          {feature.title}
                        </p>
                        <p className="font-normal text-neutral-600 dark:text-neutral-400">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;

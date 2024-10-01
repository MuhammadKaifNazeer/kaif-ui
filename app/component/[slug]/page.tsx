"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ComponentsData from "@/data/componentsData";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";

export default function Component() {
  const { slug } = useParams();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  ); // State for MDX content

  const component = ComponentsData.find((comp) => slugify(comp.name) === slug);

  if (!component) {
    notFound();
    return null;
  }

  // Load the MDX component dynamically using useEffect
  useEffect(() => {
    const loadMDX = async () => {
      try {
        const LoadedMDXContent = dynamic(
          () => import(`@/content/docs/${component.mdxPath}`)
        );
        setMDXContent(() => LoadedMDXContent);
      } catch (error) {
        console.error("Error loading MDX file:", error);
        notFound();
      }
    };

    loadMDX();
  }, [component.mdxPath]);

  return (
    <>
      {MDXContent ? (
        <MDXContent />
      ) : (
        <div className="h-[70vh] w-full flex items-center justify-center">
          <div className="w-14 h-14 border-[0.40rem] border-t-black dark:border-t-white rounded-full animate-spin cursor-none pointer-events-none" />
        </div>
      )}
    </>
  );
}

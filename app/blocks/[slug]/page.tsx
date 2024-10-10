"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlockssData from "@/data/blocksData";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";

export default function Component() {
  const { slug } = useParams();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  ); // State for MDX content

  const block = BlockssData.find((block) => slugify(block.name) === slug);

  if (!block) {
    notFound();
    return null;
  }

  // Load the MDX component dynamically using useEffect
  useEffect(() => {
    const loadMDX = async () => {
      try {
        const LoadedMDXContent = dynamic(
          () => import(`@/content/docs/${block.mdxPath}`)
        );
        setMDXContent(() => LoadedMDXContent);
      } catch (error) {
        console.error("Error loading MDX file:", error);
        notFound();
      }
    };

    loadMDX();
  }, [block.mdxPath]);

  return (
    <>
      {MDXContent ? (
        <div className="container pt-[4rem]">
          <div className="py-9">
            <MDXContent />
          </div>
        </div>
      ) : (
        <div className="h-[70vh] w-full flex items-center justify-center">
          <div className="w-14 h-14 border-[0.40rem] border-t-black dark:border-t-white rounded-full animate-spin cursor-none pointer-events-none" />
        </div>
      )}
    </>
  );
}
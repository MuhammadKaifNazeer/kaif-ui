"use client";
import React from "react";
import ScrollVelocity from "@/components/kaif-ui/ui/scroll-velocity";
import Image from "next/image";

const images = [
  {
    title: "Image 1",
    image:
      "https://cdn.pixabay.com/photo/2024/09/20/05/39/panda-9060543_640.jpg",
  },
  {
    title: "Image 2",
    image:
      "https://cdn.pixabay.com/photo/2024/04/12/18/18/ai-generated-8692405_1280.jpg",
  },
  {
    title: "Image 3",
    image:
      "https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg",
  },
  {
    title: "Image 4",
    image:
      "https://cdn.pixabay.com/photo/2024/05/30/17/23/bicycle-8798997_640.jpg",
  },
  {
    title: "Image 5",
    image:
      "https://cdn.pixabay.com/photo/2024/05/26/10/26/ai-generated-8788505_960_720.jpg",
  },
  {
    title: "Image 1 second row",
    image:
      "https://cdn.pixabay.com/photo/2024/09/20/05/39/panda-9060543_640.jpg",
  },
  {
    title: "Image 2 second row",
    image:
      "https://cdn.pixabay.com/photo/2024/04/12/18/18/ai-generated-8692405_1280.jpg",
  },
  {
    title: "Image 3 second row",
    image:
      "https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg",
  },
  {
    title: "Image 4 second row",
    image:
      "https://cdn.pixabay.com/photo/2024/05/30/17/23/bicycle-8798997_640.jpg",
  },
  {
    title: "Image 5 second row",
    image:
      "https://cdn.pixabay.com/photo/2024/05/26/10/26/ai-generated-8788505_960_720.jpg",
  },
];
const velocity = [3, -3];

export function ScrollVelocityImages() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-5 py-10">
        {velocity.map((v, index) => (
          <ScrollVelocity key={index} velocity={v}>
            {images.map(({ title, image }) => (
              <div
                key={title}
                className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
              >
                <Image
                  src={image}
                  alt={title}
                  fill={true}
                  className="h-full w-full object-cover object-center rounded"
                />
              </div>
            ))}
          </ScrollVelocity>
        ))}
      </div>
    </div>
  );
}

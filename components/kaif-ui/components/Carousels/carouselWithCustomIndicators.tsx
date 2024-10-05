"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/kaif-ui/ui/carousel";
import { useState } from "react";

// Array of image URLs
const images = [
  "https://cdn.pixabay.com/photo/2024/04/12/18/18/ai-generated-8692405_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/09/20/05/39/panda-9060543_640.jpg",
  "https://cdn.pixabay.com/photo/2024/05/30/17/23/bicycle-8798997_640.jpg",
];

export function CarouselWithCustomIndicators() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full max-w-xs py-8 mx-auto">
      <Carousel index={index} onIndexChange={setIndex}>
        <CarouselContent className="relative">
          {images.map((src, idx) => {
            return (
              <CarouselItem key={idx} className="p-4">
                <div className="flex aspect-square items-center justify-center relative pointer-events-none">
                  <Image
                    src={src}
                    alt={`Carousel image ${idx + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="flex w-full justify-center space-x-3 px-4">
        {images.map((_, idx) => {
          return (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setIndex(idx)}
              className={`h-12 w-12 border border-zinc-200 dark:border-zinc-800 ${
                index === idx ? "bg-zinc-200 dark:bg-zinc-800" : ""
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

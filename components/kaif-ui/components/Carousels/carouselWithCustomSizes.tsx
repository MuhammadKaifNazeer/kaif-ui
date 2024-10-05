import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/kaif-ui/ui/carousel";

// Array of image URLs
const images = [
  "https://cdn.pixabay.com/photo/2024/09/20/05/39/panda-9060543_640.jpg",
  "https://cdn.pixabay.com/photo/2024/04/12/18/18/ai-generated-8692405_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/05/30/17/23/bicycle-8798997_640.jpg",
  "https://cdn.pixabay.com/photo/2024/05/26/10/26/ai-generated-8788505_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/06/08/16/16/ai-generated-8817146_640.jpg",
  "https://cdn.pixabay.com/photo/2024/06/12/11/43/cottage-8825141_640.jpg",
];

export function CarouselWithCustomSizes() {
  return (
    <div className="py-[3rem]">
      <div className="relative w-full max-w-sm mx-auto">
        <Carousel>
          <CarouselContent className="gap-2">
            {images.map((src, index) => {
              return (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="flex aspect-square items-center justify-center relative pointer-events-none">
                    <Image
                      src={src}
                      alt={`Carousel image ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </div>
    </div>
  );
}

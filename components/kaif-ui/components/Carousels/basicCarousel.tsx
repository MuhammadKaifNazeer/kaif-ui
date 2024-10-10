import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/kaif-ui/ui/carousel";

const images = [
  "https://cdn.pixabay.com/photo/2024/05/26/10/26/ai-generated-8788505_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/06/08/16/16/ai-generated-8817146_640.jpg",
  "https://cdn.pixabay.com/photo/2024/06/12/11/43/cottage-8825141_640.jpg",
  "https://cdn.pixabay.com/photo/2024/05/30/17/23/bicycle-8798997_640.jpg",
];

export function BasicCarousel() {
  return (
    <div className="py-[3rem]">
      <div className="relative w-full max-w-xs mx-auto">
        <Carousel>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="p-4">
                <div className="flex aspect-square items-center justify-center relative pointer-events-none">
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation alwaysShow />
          <CarouselIndicator />
        </Carousel>
      </div>
    </div>
  );
}

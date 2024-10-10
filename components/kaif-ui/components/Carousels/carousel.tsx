import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/kaif-ui/ui/carousel";

const carouselItems = [
  {
    id: 1,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/09/20/05/39/panda-9060543_640.jpg",
    quote: "Success is not in what you have, but who you are.",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/04/12/18/18/ai-generated-8692405_1280.jpg",
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg",
    quote: "Don’t watch the clock; do what it does. Keep going.",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/05/30/17/23/bicycle-8798997_640.jpg",
    quote: "Believe you can and you're halfway there.",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/05/26/10/26/ai-generated-8788505_960_720.jpg",
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/06/08/16/16/ai-generated-8817146_640.jpg",
    quote: "Opportunities don't happen, you create them.",
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/06/12/11/43/cottage-8825141_640.jpg",
    quote: "Don’t be afraid to give up the good to go for the great.",
  },
];

export function CarouselDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center]">
      <div className="relative w-full px-4 pb-[5rem]">
        <Carousel>
          <CarouselContent className="-ml-4">
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="sm:basis-1/3 pl-4">
                <div
                  className="relative flex shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl aspect-[3/4] w-full dark:border "
                  style={{ opacity: 1 }}
                >
                  <Image
                    alt="Carousel image"
                    src={item.imageUrl}
                    fill
                    className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
                  />

                  <figure className="relative p-4 sm:p-6 lg:p-10">
                    <blockquote>
                      <p className="relative text-sm sm:text-md md:text-lg lg:text-xl text-white">
                        <span
                          aria-hidden="true"
                          className="absolute -translate-x-full"
                        >
                          “
                        </span>
                        {item.quote}
                        <span aria-hidden="true" className="absolute">
                          ”
                        </span>
                      </p>
                    </blockquote>
                  </figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation
            className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
            classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
            alwaysShow
          />
        </Carousel>
      </div>
    </div>
  );
}

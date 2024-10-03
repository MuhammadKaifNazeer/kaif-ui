import { InfiniteScroll } from "@/components/kaif-ui/ui/infiniteScroll";
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

export function InfiniteScrollHorizontal() {
  return (
    <div className="h-[400px] flex flex-col justify-center gap-4">
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteScroll direction="horizontal">
          {images.map((image) => (
            <div className="aspect-square w-[120px] rounded-[4px]">
              <Image
                key={image.title}
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[4px]"
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteScroll direction="horizontal" reverse>
          {images.map((image) => (
            <div className="aspect-square w-[120px] rounded-[4px]">
              <Image
                key={image.title}
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[4px]"
              />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

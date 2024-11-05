import React from "react";
import { LayoutTemplate, PanelsTopLeft, Plus, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InfiniteSlider } from "@/components/kaif-ui/ui/infiniteSlider";
import ComponentsData from "@/data/componentsData";
import BlocksData from "@/data/blocksData";
import TemplatesData from "@/data/templatesData";

export default function Features() {
  return (
    <>
      <div
        className="relative p-6 text-center text-3xl font-bold py-14"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))",
        }}
      >
        <div
          className="absolute -top-[10.5px] -left-[10.5px] w-5 h-5"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Plus size={40} strokeWidth={1.25} />
        </div>
        <div
          className="absolute -bottom-[10.5px] -right-[10.5px] w-5 h-5"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Plus size={40} strokeWidth={1.25} />
        </div>
        <h2 className="bg-gradient-to-b from-primary/90 to-primary/55 bg-clip-text text-center text-2xl text-transparent sm:text-3xl">
          Empowering Developers with <br className="hidden sm:block my-4" />{" "}
          Elegant UI Solutions
        </h2>
      </div>

      <ShapratorHorizontal />

      <div className="flex flex-col md:flex-row">
        <Link
          href={"/components"}
          className="w-full md:w-1/2 border-b md:border-b-0 md:border-r"
        >
          <div className="z-10 p-4">
            <div className="flex items-center ml-5 mt-5">
              <Sparkles size={20} strokeWidth={1.5} className="mr-2" />
              <h2 className="text-base font-medium">Animated Components</h2>
            </div>
            <p className="text-muted-foreground text-xs ml-5 mt-2">
              Add life to your interfaces with engaging animations.
            </p>
          </div>
          <div className="py-4">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
                <InfiniteSlider direction="horizontal">
                  {ComponentsData.map((component) => (
                    <div
                      key={component.name}
                      className="aspect-video w-[15rem] rounded-[4px] border"
                    >
                      <Image
                        src={component.imageUrl}
                        alt={component.name}
                        width={1200}
                        height={1200}
                        className="object-cover h-full w-full rounded-[4px]"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
              <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
                <InfiniteSlider direction="horizontal" reverse>
                  {ComponentsData.map((component) => (
                    <div
                      key={component.name}
                      className="aspect-video w-[15rem] rounded-[4px] border"
                    >
                      <Image
                        src={component.imageUrl}
                        alt={component.name}
                        width={1200}
                        height={1200}
                        className="object-cover h-full w-full rounded-[4px]"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/blocks"} className="w-full md:w-1/2">
          <div className="z-10 p-4">
            <div className="flex items-center ml-5 mt-5">
              <LayoutTemplate size={20} strokeWidth={1.5} className="mr-2" />
              <h2 className="text-base font-medium">Blocks</h2>
            </div>
            <p className="text-muted-foreground text-xs ml-5 mt-2">
              Build flexible layouts with reusable design blocks.
            </p>
          </div>
          <div className="py-4">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
                <InfiniteSlider direction="horizontal">
                  {BlocksData.map((block) => (
                    <div
                      key={block.name}
                      className="aspect-video w-[15rem] rounded-[4px] border"
                    >
                      <Image
                        key={block.name}
                        src={block.imageUrl}
                        alt={block.name}
                        width={1200}
                        height={1200}
                        className="object-cover h-full w-full rounded-[4px]"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
              <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
                <InfiniteSlider direction="horizontal" reverse>
                  {BlocksData.map((block) => (
                    <div
                      key={block.name}
                      className="aspect-video w-[15rem] rounded-[4px] border"
                    >
                      <Image
                        key={block.name}
                        src={block.imageUrl}
                        alt={block.name}
                        width={1200}
                        height={1200}
                        className="object-cover h-full w-full rounded-[4px]"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <ShapratorHorizontal />

      <div>
        <Link href={"/templates"} className="w-full">
          <div className="z-10 p-4">
            <div className="flex items-center justify-center mt-5">
              <PanelsTopLeft size={20} strokeWidth={1.5} className="mr-2" />
              <h2 className="text-base font-medium">Templates</h2>
            </div>
            <p className="text-muted-foreground text-xs ml-5 mt-2 text-center">
              Kickstart projects with expertly crafted templates.
            </p>
          </div>
          <div className="py-4">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
                <InfiniteSlider direction="horizontal">
                  {TemplatesData.map((template) => (
                    <>
                      {template.images.map((imageUrl, index) => (
                        <div
                          key={`${template.title}-${index}`}
                          className="aspect-video w-[20rem] rounded-[4px] border"
                        >
                          <Image
                            src={imageUrl}
                            alt={`${template.title} image ${index + 1}`}
                            width={1200}
                            height={1200}
                            className="object-cover h-full w-full rounded-[4px]"
                          />
                        </div>
                      ))}
                    </>
                  ))}
                </InfiniteSlider>
              </div>
              <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
                <InfiniteSlider direction="horizontal" reverse>
                  {TemplatesData.map((template) => (
                    <>
                      {template.images.map((imageUrl, index) => (
                        <div
                          key={`${template.title}-${index}`}
                          className="aspect-video w-[20rem] rounded-[4px] border"
                        >
                          <Image
                            src={imageUrl}
                            alt={`${template.title} image ${index + 1}`}
                            width={1200}
                            height={1200}
                            className="object-cover h-full w-full rounded-[4px]"
                          />
                        </div>
                      ))}
                    </>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

const ShapratorHorizontal = () => {
  return <div className="border-t w-full" />;
};

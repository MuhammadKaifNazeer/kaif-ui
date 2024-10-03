"use client"

// Visit https://kaif-ui.vercel.app/ for more components like this

import { FC, useRef } from "react";
import Image from "next/image";

import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  classes?: string;
}

const ZoomParallax: FC<Props> = ({ classes }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_1280.jpg",
      scale: scale1,
      classes: "relative w-[25%] h-[25%]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/03/04/14/17/ai-generated-8612487_960_720.jpg",
      scale: scale2,
      classes: "relative top-[-30%] left-[5%] w-[35%] h-[30%]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/01/10/03/29/ai-generated-8498790_1280.jpg",
      scale: scale3,
      classes: "relative top-[-29%] left-[-25%] w-[20%] h-[28%]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/02/13/07/05/ai-generated-8570323_640.jpg",
      scale: scale2,
      classes: "relative left-[27.5%] w-[25%] h-[25%]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/05/26/10/26/ai-generated-8788505_960_720.jpg",
      scale: scale3,
      classes: "relative left-[-27.5%] w-[25%] h-[25%]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/06/08/16/16/ai-generated-8817146_640.jpg",
      scale: scale4,
      classes: "relative top-[27.5%] left-[5%] w-[20%] h-[25%]",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/06/12/11/43/cottage-8825141_640.jpg",
      scale: scale5,
      classes: "relative top-[22.5%] left-[25%] w-[15%] h-[15%]",
    },
  ];

  return (
    <section
      ref={container}
      className={cn("relative h-[140vh] w-full", classes)}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale, classes }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="absolute top-0 flex h-full w-full items-center justify-center"
            >
              <div className={classes}>
                <Image
                  src={src}
                  fill
                  objectFit="cover"
                  alt="image"
                />
              </div>
            </motion.div>
          );     
        })}
      </div>
    </section>
  );
};

export default ZoomParallax;
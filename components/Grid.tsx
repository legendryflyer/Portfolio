import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/index";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Grid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {gridItems.map(
        ({
          id,
          title,
          description,
          className,
          img,
          imgClassName,
          titleClassName,
          spareImg,
        }) => (
          <BentoGridItem
            key={id}
            title={title}
            description={description}
            className={className}
            id={id}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        )
      )}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
// const items = [
//   {
//     title: "The Dawn of Innovation",
//     description: "Explore the birth of groundbreaking ideas and inventions.",
//     header: <Skeleton />,
//     className: "md:col-span-2",
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Digital Revolution",
//     description: "Dive into the transformative power of technology.",
//     header: <Skeleton />,
//     className: "md:col-span-1",
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Art of Design",
//     description: "Discover the beauty of thoughtful and functional design.",
//     header: <Skeleton />,
//     className: "md:col-span-1",
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description:
//       "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     className: "md:col-span-2",
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
// ];
export default Grid;

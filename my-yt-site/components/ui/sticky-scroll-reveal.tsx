"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    backgroundColor?: string;
    backgroundGradient?: string;
    tags?: string[];
    videoUrl?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    let newActiveCard = 0;
    for (let i = cardsBreakpoints.length - 1; i >= 0; i--) {
      if (latest >= cardsBreakpoints[i]) {
        newActiveCard = i;
        break;
      }
    }
    setActiveCard(newActiveCard);
  });

  const backgroundColors = content.map(item => item.backgroundColor || "#0f172a");

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative h-auto py-20"
      ref={ref}
    >
      <div className="lg:hidden w-full px-4">
        {content.map((item, index) => (
          <div key={item.title + index} className="mb-12 text-center">
            <div className="relative w-full h-60 rounded-md overflow-hidden">
              {item.content}
            </div>
            <h2 className="text-3xl font-bold text-slate-100 mt-4">
              {item.title}
            </h2>
            <p className="text-md mt-4 max-w-md text-slate-300 mx-auto">
              {item.description}
            </p>
            {item.videoUrl && (
              <div className="mt-6">
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500/80 hover:bg-yellow-400/80 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-colors"
                >
                  Watch Now
                </a>
              </div>
            )}
            {item.tags && (
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-neutral-800/80 px-3 py-1.5 text-sm font-medium text-neutral-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
        <div className="lg:col-span-1 w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-40">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-10 max-w-md text-slate-300"
              >
                {item.description}
              </motion.p>
              {item.videoUrl && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mt-8"
                >
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500/80 hover:bg-yellow-400/80 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-colors"
                  >
                    Watch Now
                  </a>
                </motion.div>
              )}
              {item.tags && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-neutral-800/80 px-3 py-1.5 text-sm font-medium text-neutral-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-80 lg:hidden" />
        </div>
        <div
          className={cn(
            "hidden lg:block sticky top-1/4 h-96 w-full rounded-md",
            contentClassName
          )}
        >
          <div className="relative h-full w-full">
            {content.map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full"
              >
                {item.content}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 
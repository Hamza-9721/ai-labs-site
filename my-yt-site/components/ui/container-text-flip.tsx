"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (words && words.length > 0) {
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.style.whiteSpace = "nowrap";
      tempSpan.className = cn(textClassName);
      document.body.appendChild(tempSpan);
      const maxWidth = Math.max(
        ...words.map((word) => {
          tempSpan.textContent = word;
          return tempSpan.scrollWidth;
        }),
      );
      document.body.removeChild(tempSpan);
      setWidth(maxWidth);
    }
  }, [words, textClassName]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      animate={{ width: width > 0 ? width : "auto" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        "relative inline-block align-bottom mx-auto",
        className
      )}
      ref={containerRef}
    >
      <motion.div
        key={words[currentWordIndex]}
        className={cn("inline-block whitespace-nowrap", textClassName)}
      >
        {words[currentWordIndex].split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className={cn(
              "inline-block",
              letter === "," ? "text-white" : ""
            )}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
} 
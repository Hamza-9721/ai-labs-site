import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  descriptionClassName = "text-sm",
  hovered = null,
  index = null,
  setHovered = undefined,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  descriptionClassName?: string;
  hovered?: number | null;
  index?: number | null;
  setHovered?: ((idx: number | null) => void) | undefined;
}) => {
  return (
    <div
      onMouseEnter={setHovered ? () => setHovered(index!) : undefined}
      onMouseLeave={setHovered ? () => setHovered(null) : undefined}
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none relative overflow-hidden",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        hovered === index && "shadow-[0_0_24px_4px_rgba(253,224,71,0.7)]",
        className,
      )}
    >
      <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 z-10 relative">
        {title}
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2 z-10 relative">
        <div
          className={cn(
            "font-sans font-normal text-neutral-600 dark:text-neutral-300",
            descriptionClassName,
          )}
        >
          {description}
        </div>
      </div>
    </div>
  );
}; 
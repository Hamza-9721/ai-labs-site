"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const GlowingStarsBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const starStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center bg-background",
        className
      )}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-background to-background" style={starStyle}>
        <div 
          className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_farthest-side_at_var(--mouse-x)_var(--mouse-y),#ffffff05_0%,transparent_100%)]"
        />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 h-full w-full"
        style={{
            backgroundImage: `linear-gradient(to right, #4f4f4f22 1px, transparent 1px),
                            linear-gradient(to bottom, #4f4f4f22 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
        }}
      />
      
      {children}
    </div>
  );
};

export const Illustration = () => {
  return (
        <GlowingStarsBackground>
            <div
                className="flex h-[20rem] items-center justify-center text-center"
            >
                <div className="flex w-full flex-col items-center justify-center gap-4">
                    <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        The easiest way to build your best website
                    </h2>
                    <p className="max-w-xl text-lg leading-8 text-white/60">
                        Create a professional website that grows with your business.
                    </p>
      </div>
    </div>
        </GlowingStarsBackground>
    )
} 
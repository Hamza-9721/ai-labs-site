"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      {isMounted && animate ? (
        <>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
            className={cn(
              "absolute inset-0 rounded-3xl z-[1] opacity-40 group-hover:opacity-50 blur-xl transition duration-500",
              "bg-[radial-gradient(circle_farthest-side_at_50%_50%,#FBBF2480,#FB923C70,transparent_100%)]"
            )}
          />
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
            className={cn(
              "absolute inset-0 rounded-3xl z-[1] opacity-40",
              "bg-[radial-gradient(circle_farthest-side_at_50%_50%,#FBBF2450,#FB923C40,transparent_100%)]"
            )}
          />
        </>
      ) : (
        <>
          <div
            className={cn(
              "absolute inset-0 rounded-3xl z-[1] opacity-40 group-hover:opacity-50 blur-xl transition duration-500",
              "bg-[radial-gradient(circle_farthest-side_at_50%_50%,#FBBF2480,#FB923C70,transparent_100%)]"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 rounded-3xl z-[1] opacity-40",
              "bg-[radial-gradient(circle_farthest-side_at_50%_50%,#FBBF2450,#FB923C40,transparent_100%)]"
            )}
          />
        </>
      )}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}; 
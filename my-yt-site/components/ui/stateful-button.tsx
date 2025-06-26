"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  duration?: number;
  idleContent?: React.ReactNode;
  loadingContent?: React.ReactNode;
  successContent?: React.ReactNode;
  errorContent?: React.ReactNode;
}

export const Button = ({
  className,
  duration,
  idleContent,
  loadingContent,
  successContent,
  errorContent,
  ...props
}: ButtonProps) => {
  const [state, setState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (state !== "idle") {
      return;
    }
    setState("loading");

    setTimeout(() => {
      setState("success");
      setTimeout(() => {
        setState("idle");
      }, duration || 2000);
    }, duration || 2000);

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      className={cn(
        "flex min-w-[120px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 font-medium ring-offset-2 transition duration-200 dark:ring-offset-black",
        className
      )}
      {...props}
      onClick={handleClick}
    >
      {state === "idle" && idleContent}
      {state === "loading" && loadingContent}
      {state === "success" && successContent}
      {state === "error" && errorContent}
    </button>
  );
}; 
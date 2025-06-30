"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Build Apps with Cursor Like the 1% Using This NEW Method",
    description:
      "This video introduces Taskmaster AI, a tool designed to prevent context overload when building applications with Cursor. The presenter demonstrates how to use Taskmaster AI by building a wallpaper app using the Unsplash API. The tool helps in structuring the development process, breaking down tasks, and managing the workflow.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/thumbnails/thumbnail-20.png"
          width={600}
          height={600}
          quality={100}
          priority
          className="h-full w-full object-cover"
          alt="Build Apps with Cursor Like the 1% Using This NEW Method"
        />
      </div>
    ),
    backgroundColor: "#000000",
    backgroundGradient: "linear-gradient(to bottom right, #06b6d4, #10b981)",
    tags: [
      "Taskmaster AI",
      "Cursor",
      "Anthropic API",
      "Perplexity API",
      "Unsplash API",
      "App Development",
      "Product Requirements Document (PRD)",
      "API",
    ],
    videoUrl: "https://www.youtube.com/watch?v=OZaxtm3RyCw&t=16s",
  },
  {
    title: "3 Ways to Build Beautiful Websites Using Cursor AI",
    description:
      "This video addresses the common problem of generic-looking websites created by AI. It presents three methods for designing professional and visually appealing websites using AI tools like Cursor, Claude, and ChatGPT. The video also shares additional techniques to enhance the aesthetics of your web projects.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/thumbnails/thumbnail-30.png"
          width={600}
          height={600}
          quality={100}
          priority
          className="h-full w-full object-cover"
          alt="3 Ways to Build Beautiful Websites Using Cursor AI"
        />
      </div>
    ),
    backgroundColor: "#0f172a",
    backgroundGradient: "linear-gradient(to bottom right, #ec4899, #6366f1)",
    tags: [
      "Cursor AI",
      "Claude",
      "ChatGPT",
      "Tweak CN",
      "Shad CN UI",
      "React",
      "React Bits",
      "Aceternity UI",
      "framer motion",
      "Google Fonts",
      "Web Design",
      "AI",
    ],
    videoUrl: "https://www.youtube.com/watch?v=djDZHAi75dk&t=442s",
  },
  {
    title: "This Cursor AI Setup Is a Smoking Gun (And it's FREE)",
    description:
      "This video showcases Shotgun Code, a GitHub tool for modifying codebases using large language models (LLMs). It demonstrates installing Shotgun, generating prompts from code, and using Google AI Studio's Gemini 2.5 Pro to create \"diff\" files. The video also illustrates applying these changes with tools like Cursor, emphasizing performance and UI improvements in a Next.js application.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/thumbnails/thumnail-40.png"
          width={600}
          height={600}
          quality={100}
          priority
          className="h-full w-full object-cover"
          alt="This Cursor AI Setup Is a Smoking Gun (And it's FREE)"
        />
      </div>
    ),
    backgroundColor: "#171717",
    backgroundGradient: "linear-gradient(to bottom right, #f97316, #eab308)",
    tags: [
      "Shotgun Code",
      "GitHub",
      "Large Language Models (LLMs)",
      "Google AI Studio",
      "Gemini 2.5 Pro",
      "Cursor",
      "Next.js",
      "Codebase Modification",
      "AI",
    ],
    videoUrl: "https://www.youtube.com/watch?v=4A66bMRiPQ0",
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="relative w-full py-20">
      <StickyScroll content={content} />
    </div>
  );
}
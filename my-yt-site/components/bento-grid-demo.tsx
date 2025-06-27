import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundBeams } from "@/components/ui/background-beams";

const getFontSizeForComment = (comment: string) => {
  const length = comment.length;
  if (length > 100) {
    return "text-sm";
  }
  if (length > 75) {
    return "text-base";
  }
  return "text-lg";
};

export default function BentoGridDemo() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="bg-background text-foreground py-20 relative">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 z-10 relative">
          Hear From Our Community
        </h2>
        <BentoGrid className="max-w-4xl mx-auto z-10 relative">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              className={item.className}
              descriptionClassName={getFontSizeForComment(item.description)}
              hovered={hovered}
              index={i}
              setHovered={setHovered}
            />
          ))}
        </BentoGrid>
      </div>
      <BackgroundBeams className="z-0" />
    </section>
  );
}

const items = [
  {
    title: "@MrWhiteTEKKEN",
    description: "This is a Gem. Thanks a lot.",
    className: "md:col-span-2",
  },
  {
    title: "@karlnikolasalcala8208",
    description: "You deserve a sub!",
    className: "",
  },
  {
    title: "@AndrewHo-g1x",
    description: "This are grade A info, subscribed!!",
    className: "",
  },
  {
    title: "@WHYHOWTECH",
    description: "most useful video i watched today !",
    className: "md:col-span-2",
  },
  {
      title: "@madhoundes",
      description: "JSON code to design this techniqe blow my mind",
      className: "md:col-span-1",
  },
  {
    title: "@yashwanthbharadwaj",
    description: "Your video made me lakhs thank you buddy. now i charge 10x more for making websites .",
    className: "md:col-span-2",
  },
]; 
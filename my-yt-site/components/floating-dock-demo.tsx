import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandX,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full" />,
      href: "https://www.instagram.com/ailabs_393/",
      color: "#E1306C",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-full w-full" />,
      href: "https://www.facebook.com/profile.php?id=61567670378819",
      color: "#1877F2",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "https://www.linkedin.com/company/ai-labs-393",
      color: "#0A66C2",
    },
    {
      title: "X",
      icon: <IconBrandX className="h-full w-full" />,
      href: "https://x.com/ai_labs393",
      color: "#000000",
    },
    {
      title: "Youtube",
      icon: <IconBrandYoutube className="h-full w-full" />,
      href: "https://www.youtube.com/@AILABS-393/videos",
      color: "#FF0000",
    },
  ];
  return (
      <FloatingDock items={links} />
  );
} 
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";

export const metadata: Metadata = {
  title: "AI Labs - Master AI Development",
  description: "Explore the latest in AI-powered coding, UI/UX, and more with AI Labs. In-depth tutorials, tool reviews, and a thriving community.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body className="antialiased">
        <SmoothScrollProvider>
          <div className="overflow-clip">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

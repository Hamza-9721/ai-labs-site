"use client";
import React from "react";

export default function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <div className="h-full w-full">
        <div className="flex flex-col items-center justify-center h-full w-full text-center">
          <div className="bg-neutral-800/50 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            AI Labs+
          </div>
          <div className="text-white text-7xl font-bold">AI Labs+</div>
          <div className="w-1/4 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-4"></div>

          <div className="text-white text-lg mt-4 max-w-2xl">
            Join AI Labs+ to unlock exclusive benefits and take your learning
            further. As a member, you&apos;ll get access to exclusive tutorials,
            project files, and a direct line to our team for your most
            pressing questions.
          </div>
          <div className="flex justify-center space-x-8 mt-16">
            <PricingCard plan="Basic" price="$29" />
            <PricingCard plan="Pro" price="$59" mostPopular />
            <PricingCard plan="Premium" price="$99" />
          </div>
        </div>
      </div>
    </div>
  );
}

const PricingCard = ({
  plan,
  price,
  mostPopular,
}: {
  plan: string;
  price: string;
  mostPopular?: boolean;
}) => {
  return (
    <div className="relative">
      {mostPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neutral-700 text-white text-xs font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="bg-black/20 border border-neutral-700 p-8 rounded-2xl w-80 h-60 flex flex-col items-center justify-center">
        <h3 className="text-white text-2xl font-bold">{plan}</h3>
        <p className="text-white text-6xl font-bold mt-4">
          {price}
          <span className="text-lg font-normal text-neutral-400">/month</span>
        </p>
      </div>
    </div>
  );
}; 
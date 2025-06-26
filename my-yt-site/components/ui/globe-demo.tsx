// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
//   ssr: false,
// });

// export default function GlobeDemo() {
//   const globeConfig = {
//     pointSize: 4,
//     globeColor: "#062056",
//     showAtmosphere: true,
//     atmosphereColor: "#FFFFFF",
//     atmosphereAltitude: 0.1,
//     emissive: "#062056",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     polygonColor: "rgba(255,255,255,0.7)",
//     ambientLight: "#38bdf8",
//     directionalLeftLight: "#ffffff",
//     directionalTopLight: "#ffffff",
//     pointLight: "#ffffff",
//     arcTime: 1000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     initialPosition: { lat: 22.3193, lng: 114.1694 },
//     autoRotate: true,
//     autoRotateSpeed: 0.9,
//   };
//   const data = [
//     {
//       order: 1,
//       startLat: 37.7749,
//       startLng: -122.4194,
//       endLat: 51.5074,
//       endLng: -0.1278,
//       arcAlt: 0.5,
//       color: "#ffffff",
//     },
//     {
//       order: 2,
//       startLat: 51.5074,
//       startLng: -0.1278,
//       endLat: 34.0522,
//       endLng: -118.2437,
//       arcAlt: 0.3,
//       color: "#ffffff",
//     },
//   ];

//   return (
//     <div className="flex h-screen w-full flex-row items-center justify-center bg-gray-950">
//       <World globeConfig={globeConfig} data={data} />
//     </div>
//   );
// } 
// "use client";
// import { useEffect, useRef, useState, useMemo } from "react";
// import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import ThreeGlobe from "three-globe";
// import { cn } from "@/lib/utils";

// let globe: any;

// export const Globe = ({
//   data,
//   className,
//   atmosphere = true,
//   shading = "classic",
//   shadingColor = 0x44ccaa,
// }: GlobeProps = {}) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     let numbersOfRings = 10;
//     if (canvasRef.current) {
//       const { current: canvas } = canvasRef;
//       if (!globe) {
//         globe = new ThreeGlobe({
//           waitForGlobeReady: true,
//           animateIn: true,
//         })
//           .hexPolygonsData(data)
//           .hexPolygonResolution(3)
//           .hexPolygonMargin(0.7)
//           .showAtmosphere(atmosphere)
//           .atmosphereColor("#3a228a")
//           .atmosphereAltitude(0.25)
//           .hexPolygonColor((e: any) => {
//             return shadingColor;
//           });
//         let points = [];
//         for (let i = 0; i < numbersOfRings; i++) {
//           const D = 100 * (1 + i * 0.1);
//           const N = 20 * (1 + i);
//           for (let j = 0; j < N; j++) {
//             const lat = (1 - (2 * j) / (N - 1)) * 90;
//             const lng = (360 * i) / numbersOfRings;
//             let rgb = [255, 255, 255];
//             points.push({
//               lat,
//               lng,
//             });
//           }
//         }

//         const scene = new Scene();
//         scene.fog = new Fog(0xffffff, 400, 2000);
//         scene.add(globe);
//         scene.add(new THREE.AmbientLight(0xbbbbbb));
//         scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

//         const camera = new PerspectiveCamera();
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();

//         const getInterscetedObject = (pointer: any, object: any) => {
//           const raycaster = new THREE.Raycaster();
//           raycaster.setFromCamera(pointer, camera);
//           const intersects = raycaster.intersectObjects([object], true);
//           return intersects[0] ? intersects[0].object : null;
//         };

//         let hoveredHex: any = null;

//         const handlePointerMove = (event: any) => {
//           const pointer = new THREE.Vector2();
//           pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//           pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
//           const intersectedObject = getInterscetedObject(pointer, globe);
//           if (
//             intersectedObject &&
//             intersectedObject.type === "Mesh" &&
//             intersectedObject.geometry.type === "BufferGeometry"
//           ) {
//             if (hoveredHex) {
//               hoveredHex.material.color.set(shadingColor);
//             }
//             hoveredHex = intersectedObject;
//             hoveredHex.material.color.set(0xffffff);
//           } else {
//             if (hoveredHex) {
//               hoveredHex.material.color.set(shadingColor);
//               hoveredHex = null;
//             }
//           }
//         };

//         var renderer = new THREE.WebGLRenderer({
//           canvas,
//           antialias: true,
//           alpha: true,
//         });
//         renderer.setPixelRatio(window.devicePixelRatio);
//         renderer.setSize(window.innerWidth, window.innerHeight);

//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dynamicDampingFactor = 0.01;
//         controls.enablePan = false;
//         controls.minDistance = 200;
//         controls.maxDistance = 600;
//         controls.rotateSpeed = 0.8;
//         controls.zoomSpeed = 1;
//         controls.autoRotate = true;
//         controls.minPolarAngle = Math.PI / 3.5;
//         controls.maxPolarAngle = Math.PI - Math.PI / 3;
//         camera.position.set(0, 0, 500);

//         const onWindowResize = () => {
//           camera.aspect = window.innerWidth / window.innerHeight;
//           camera.updateProjectionMatrix();
//           renderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener("resize", onWindowResize);

//         (function animate() {
//           if (hoveredHex) {
//             globe.hexPolygonColor((e: any) =>
//               e === hoveredHex.userData.hex ? 0xffffff : shadingColor
//             );
//           }
//           controls.update();
//           renderer.render(scene, camera);
//           requestAnimationFrame(animate);
//         })();
//       }
//     }
//   }, [canvasRef]);

//   return (
//     <div
//       className={cn(
//         "w-full h-full flex items-center justify-center",
//         className
//       )}
//     >
//       <div
//         className={cn("absolute inset-0 h-full w-full", className)}
//       >
//         <canvas
//           ref={canvasRef}
//           style={{
//             width: "100%",
//             height: "100%",
//             contain: "paint",
//             cursor: "auto",
//             userSelect: "none",
//           }}
//         ></canvas>
//         <svg
//           style={{
//             fill: "none",
//             height: "100%",
//             pointerEvents: "none",
//             width: "100%",
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//           preserveAspectRatio="xMidYMid slice"
//           viewBox="0 0 1920 1080"
//         >
//           <path
//             d="M0,0 C240,150 480,240 720,270 C960,300 1200,270 1440,180 C1680,90 1920,0 1920,0 L1920,1080 L0,1080 L0,0 Z"
//             fill="url(#gradient-mask)"
//           ></path>
//         </svg>
//         <svg
//           style={{
//             width: 0,
//             height: 0,
//             position: "absolute",
//           }}
//         >
//           <defs>
//             <radialGradient
//               id="gradient-mask"
//               cx="50%"
//               cy="50%"
//               r="50%"
//               fx="50%"
//               fy="50%"
//             >
//               <stop offset="60%" stopColor="#fff"></stop>
//               <stop offset="100%" stopColor="#000"></stop>
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }; 
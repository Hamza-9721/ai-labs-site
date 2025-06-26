// "use client";

// import { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";

// type Circle = {
//   x: number;
//   y: number;
//   size: number;
// };

// export const GlowingEffect = ({
//   className,
//   gradient = "linear-gradient(180deg, #b6b4d6 0%, #d8d7f7 100%)",
// }: {
//   className?: string;
//   gradient?: string;
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;
//     const rect = canvas.getBoundingClientRect();
//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;
//     ctx.scale(dpr, dpr);

//     let circles: Circle[] = [];
//     const mouse = {
//       x: window.innerWidth / 2,
//       y: window.innerHeight / 2,
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (canvas.contains(target)) {
//         const rect = canvas.getBoundingClientRect();
//         mouse.x = e.clientX - rect.left;
//         mouse.y = e.clientY - rect.top;
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       circles.forEach((circle, i) => {
//         const nextCircle = circles[i + 1] || circle;
//         circle.x += (nextCircle.x - circle.x) * 0.4;
//         circle.y += (nextCircle.y - circle.y) * 0.4;

//         ctx.beginPath();
//         ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
//         const gradient = ctx.createRadialGradient(
//           circle.x,
//           circle.y,
//           0,
//           circle.x,
//           circle.y,
//           circle.size
//         );
//         gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
//         gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
//         ctx.fillStyle = gradient;
//         ctx.fill();
//       });

//       requestAnimationFrame(animate);
//     };

//     const createCircle = (x: number, y: number) => {
//       let currentAngle = 0;
//       for (let i = 0; i < circles.length; i++) {
//         if (i !== 0) {
//           const lastCircle = circles[i - 1];
//           if (lastCircle) {
//             const distance = Math.sqrt(
//               Math.pow(x - lastCircle.x, 2) + Math.pow(y - lastCircle.y, 2)
//             );
//             const angle = Math.atan2(y - lastCircle.y, x - lastCircle.x);
//             if (distance > lastCircle.size) {
//               const targetX = lastCircle.x + Math.cos(angle) * lastCircle.size;
//               const targetY = lastCircle.y + Math.sin(angle) * lastCircle.size;
//               currentAngle = angle;
//             }
//           }
//         }
//         const circle = circles[i];
//         if (circle) {
//           circle.x = x;
//           circle.y = y;
//         }
//       }
//     };

//     for (let i = 0; i < 15; i++) {
//       circles.push({ x: mouse.x, y: mouse.y, size: 10 + i * 5 });
//     }

//     window.addEventListener("mousemove", handleMouseMove);
//     animate();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       className={cn(
//         "absolute -z-10 h-full w-full overflow-hidden rounded-3xl",
//         className
//       )}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           background: gradient,
//         }}
//         className="h-full w-full"
//       />
//     </div>
//   );
// }; 
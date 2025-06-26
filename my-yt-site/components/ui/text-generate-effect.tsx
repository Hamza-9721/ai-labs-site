// "use client";
// import { useEffect, useRef } from "react";
// import { motion, stagger, useAnimate, useInView } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5,
//   staggerDelay = 0.02,
// }: {
//   words: string;
//   className?: string;
//   filter?: boolean;
//   duration?: number;
//   staggerDelay?: number;
// }) => {
//   const [scope, animate] = useAnimate();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });
//   let wordsArray = words.split(" ");

//   useEffect(() => {
//     if (isInView) {
//       animate(
//         "span",
//         {
//           opacity: 1,
//           filter: filter ? "blur(0px)" : "none",
//         },
//         {
//           duration: duration,
//           delay: stagger(staggerDelay),
//         }
//       );
//     }
//   }, [isInView, duration, staggerDelay, wordsArray, filter]);

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope}>
//         {wordsArray.map((word, idx) => {
//           return (
//             <motion.span
//               ref={ref}
//               key={word + idx}
//               className="dark:text-white text-black opacity-0"
//               style={{
//                 filter: filter ? "blur(10px)" : "none",
//               }}
//             >
//               {word}{" "}
//             </motion.span>
//           );
//         })}
//       </motion.div>
//     );
//   };

//   return (
//     <div className={cn("font-bold", className)}>
//       <div className="mt-4">
//         <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
//           {renderWords()}
//         </div>
//       </div>
//     </div>
//   );
// }; 
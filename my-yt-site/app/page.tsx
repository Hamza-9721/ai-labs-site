"use client";
import { Check, Copy } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight-new";
import FloatingDockDemo from "@/components/floating-dock-demo";
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo";
import { GridBackground } from "@/components/ui/grid-background";
import { useState, useEffect } from "react";
import BentoGridDemo from "@/components/bento-grid-demo";

const allThumbnails = [
  "/thumbnails/thumbnail-1.png",
  "/thumbnails/thumbnail-2.png",
  "/thumbnails/thumbnail-3.png",
  "/thumbnails/thumbnail-4.png",
  "/thumbnails/thumbnail-5.png",
  "/thumbnails/thumbnail-6.png",
  "/thumbnails/thumbnail-7.png",
  "/thumbnails/thumbnail-8.png",
  "/thumbnails/thumbnail-20.png",
  "/thumbnails/thumbnail-30.png",
  "/thumbnails/thumnail-40.png",
];

// Function to shuffle an array
const shuffleArray = (array: string[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const initialMarqueeImages = [
  ...allThumbnails,
  ...allThumbnails,
  ...allThumbnails,
].slice(0, 24);

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-sm">
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-3 font-bold text-xl">AI Labs</span>
            </motion.a>
          </div>
          <div className="flex items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-primary-foreground text-primary font-semibold py-2 px-4 rounded-full flex items-center"
            >
              <span>Contact us</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};


const Hero = () => {
  const [marqueeImages, setMarqueeImages] = useState(initialMarqueeImages);

  useEffect(() => {
    setMarqueeImages(
      [
        ...shuffleArray(allThumbnails),
        ...shuffleArray(allThumbnails),
        ...shuffleArray(allThumbnails),
      ].slice(0, 24)
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-foreground bg-background relative overflow-hidden max-w-full">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-background/80 to-background" />
          <ThreeDMarquee images={marqueeImages} />
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full bg-background/50 backdrop-blur-[1px]"></div>
       <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full">
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 text-center">
            Master AI powered{" "}
            <ContainerTextFlip
              words={["Coding,", "UI/UX,", "Testing,", "Agents,"]}
              className="text-yellow-400 block md:inline-block"
              textClassName="text-4xl sm:text-5xl md:text-7xl font-bold text-center"
            />{" "}
            <span className="md:block">Taught by the Best</span>
          </motion.h1>
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <motion.a 
               whileHover={{ scale: 1.05 }} 
               whileTap={{ scale: 0.95 }}
              href="#contact" className="bg-primary-foreground text-primary font-semibold py-3 px-6 rounded-full">
              Contact us
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@AILABS-393/videos"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500/80 hover:bg-yellow-400/80 text-black font-semibold py-3 px-6 rounded-full shadow-xl backdrop-blur-sm border border-yellow-400/20 transition-colors"
            >
              Visit Channel
            </motion.a>
          </motion.div>
       </motion.div>
    </section>
  )
}

const AnimatedSection = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className={cn("min-h-screen w-full flex items-center justify-center", className)}
    >
      {children}
    </motion.section>
  );
};

const AboutSection = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="relative min-h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 mb-32 relative z-10">
        <BackgroundGradient
          className="rounded-3xl bg-black/90 p-8 md:p-12 shadow-2xl"
          containerClassName="rounded-3xl"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              About The Channel
            </h2>
            <div className="space-y-6 text-lg text-white/80">
              <p>
                At AI Labs, we&apos;re dedicated to helping developers harness the
                full potential of artificial intelligence in their workflows.
                Our mission is to explore and review the latest AI tools and
                coding models that are shaping the future of software
                development.
              </p>
              <p>
                Whether you&apos;re building full-stack applications, automating
                tasks, or just staying ahead of the curve, AI Labs brings you
                practical insights, time-saving solutions, and honest
                evaluations of what&apos;s worth your attention.
              </p>
              <p>
                From beginners to seasoned engineers, we break down how AI can
                make your development faster, smarter, and more efficient — so
                you can spend less time debugging and more time creating.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter to={30000} />
                </p>
                <p className="text-muted-foreground">Subscribers</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter to={1000000} />+
                </p>
                <p className="text-muted-foreground">Views</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  <AnimatedCounter to={100} />
                </p>
                <p className="text-muted-foreground">Videos</p>
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

interface PricingTier {
  tier: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  isComingSoon?: boolean;
}

interface PricingCardProps extends PricingTier {
  delay?: number;
  isComingSoon?: boolean;
}

const PricingCard = ({
  tier,
  price,
  features,
  isPopular = false,
  isComingSoon = false,
  delay = 0,
}: PricingCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        scale: isPopular && !isComingSoon ? 1.05 : 1.02,
        y: isComingSoon ? 0 : -5,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      }}
      className={cn(
        // Glass effect
        "bg-white/[0.05] backdrop-blur-[8px]",
        "border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
        "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/[0.08] before:to-transparent before:pointer-events-none",
        // Base styles
        "p-8 rounded-3xl relative",
        "min-h-[600px] flex flex-col justify-between",
        "transition-all duration-300",
        // Hover effects
        "hover:shadow-2xl hover:border-white/[0.12] hover:bg-white/[0.07]",
        // Z-index handling
        isPopular ? "z-10" : "z-0"
      )}
    >
      {isPopular && !isComingSoon && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/[0.08] backdrop-blur-sm text-white text-sm font-bold px-4 py-1 rounded-full border border-white/[0.08] shadow-lg">
          Most Popular
        </div>
      )}
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-4">{tier}</h3>
        <div className="text-4xl font-bold text-white mb-8">
          ${price}
          <span className="text-lg font-normal text-white/60">/month</span>
        </div>
        <ul className="space-y-4 mb-12">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-white/80">
              <Check className="h-5 w-5 mr-2 text-green-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
        disabled={isComingSoon}
        className={cn(
          "w-full py-3 px-6 rounded-full font-semibold transition-colors relative",
          "bg-yellow-500/80 hover:bg-yellow-400/80",
          "backdrop-blur-sm border border-yellow-400/20",
          "text-black shadow-lg",
          isPopular &&
            !isComingSoon &&
            "bg-yellow-400/80 hover:bg-yellow-300/80",
          isComingSoon && "bg-gray-500/50 cursor-not-allowed"
        )}
      >
        {isComingSoon ? "Coming Soon" : "Join"}
      </motion.button>
    </motion.div>
  );
};

const MembershipSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tiers: PricingTier[] = [
    {
      tier: "Basic",
      price: 3.99,
      features: ["Priority Replys", "Get your Questions Answered"],
      isPopular: true,
    },
    {
      tier: "Pro",
      price: 59,
      features: [
        "All Basic features",
        "1-on-1 monthly consultation",
        "Priority support",
      ],
      isComingSoon: true,
    },
    {
      tier: "Premium",
      price: 99,
      features: [
        "All Pro features",
        "Custom project review",
        "Team collaboration tools",
      ],
      isComingSoon: true,
    },
  ];

  return (
    <AnimatedSection id="membership" className="bg-background">
      <GridBackground>
        <div className="relative z-10 py-32">
          <div className="container mx-auto px-8 sm:px-12 lg:px-20">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
              ref={ref}
            >
              <div className="mt-4">
                <motion.h2
                  className="text-5xl md:text-6xl font-bold mb-2"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, filter: "blur(10px)" },
                      visible: { opacity: 1, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    AI
                  </motion.span>{" "}
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, filter: "blur(10px)" },
                      visible: { opacity: 1, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    Labs
                  </motion.span>
                  <motion.span
                    className="text-yellow-400"
                    variants={{
                      hidden: { opacity: 0, filter: "blur(10px)" },
                      visible: { opacity: 1, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    +
                  </motion.span>
                </motion.h2>
              </div>
              <p className="text-lg text-white/80 mt-6">
                Join AI Labs+ to unlock exclusive benefits and take your learning
                further. As a member, you&apos;ll get access to exclusive
                tutorials, project files, and a direct line to our team for
                your most pressing questions.
              </p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => {
                const isComingSoon = (tier as { isComingSoon?: boolean })
                  .isComingSoon;
                return (
                  <div key={tier.tier} className="relative">
                    <PricingCard
                      {...tier}
                      delay={index * 0.2}
                      isPopular={tier.isPopular}
                    />
                    {isComingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 rounded-3xl bg-black/70 backdrop-blur-sm">
                        <span className="text-white font-bold text-2xl">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </GridBackground>
    </AnimatedSection>
  );
};

const BestVideosSection = () => {
  return (
    <section className="bg-background text-foreground">
      <StickyScrollRevealDemo />
    </section>
  );
};

const CtaSection = () => {
  return (
    <AnimatedSection className="relative overflow-hidden max-w-full">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/youtube-thumbnail.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "200%",
          filter: "blur(12px)",
        }}
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full space-y-12 pt-24 md:space-y-48 md:pt-0 w-full max-w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          Learn With AI Labs On Different Platforms
        </h2>
        <div className="w-full flex justify-center">
          <div className="transform scale-100 md:scale-125">
            <FloatingDockDemo />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact@autometa.dev";

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset after 2 seconds
    }
  };

  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        <BackgroundGradient
          className="rounded-3xl bg-black/90 p-8 md:p-12 shadow-2xl max-w-3xl"
          containerClassName="rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For business inquiries, collaborations or questions, email us at{" "}
            <span className="inline-flex items-center gap-2 bg-black/20 rounded-lg p-2">
              <a
                href={`mailto:${email}`}
                className="text-yellow-400 hover:text-yellow-500"
              >
                {email}
              </a>
              <button
                onClick={handleCopy}
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </span>
          </p>
        </BackgroundGradient>
      </div>
    </AnimatedSection>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-8 w-full border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="AI Labs Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 font-bold text-lg text-foreground">AI Labs</span>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} AI Labs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-foreground relative max-w-full w-full md:overflow-x-visible overflow-x-hidden">
        <Spotlight />
        <Hero />
        <AboutSection />
        <BestVideosSection />
        <div className="w-full relative flex flex-col items-center justify-center antialiased">
          <BackgroundBeams />
          <BentoGridDemo />
        </div>
        <GridBackground>
          <MembershipSection />
        </GridBackground>
        <CtaSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

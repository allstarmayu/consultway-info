import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "down";
  distance?: number;
  duration?: number;
  scale?: boolean;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.7,
  scale = false,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: -distance },
    right: { y: 0, x: distance },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directionMap[direction],
        filter: "blur(6px)",
        scale: scale ? 0.95 : 1,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)", scale: 1 }
          : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

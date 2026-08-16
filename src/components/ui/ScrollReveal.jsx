"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMotionProfile } from "@/components/LenisProvider";

/**
 * ScrollReveal — wraps children with a scroll-triggered slide-up + fade-in.
 *
 * @param {React.ReactNode} children
 * @param {number}  [delay=0]       – Stagger delay in seconds.
 * @param {number}  [duration=0.6]  – Animation duration.
 * @param {number}  [yOffset=60]    – Starting Y offset in px.
 * @param {string}  [className]     – Extra className.
 * @param {object}  [style]         – Extra inline styles.
 * @param {string}  [viewportMargin="-80px"] – Margin for viewport trigger.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 60,
  className,
  style,
  viewportMargin = "-80px",
}) {
  const motionProfile = useMotionProfile();
  const disabled = motionProfile === "none";
  const light = motionProfile === "light";

  return (
    <motion.div
      initial={disabled ? false : { opacity: 0, y: light ? Math.min(yOffset, 24) : yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: motionProfile !== "full", margin: viewportMargin }}
      transition={{
        delay: light ? Math.min(delay, 0.15) : delay,
        duration: light ? Math.min(duration, 0.42) : duration,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

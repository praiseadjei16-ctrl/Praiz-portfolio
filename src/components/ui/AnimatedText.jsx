"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMotionProfile } from "@/components/LenisProvider";

/**
 * AnimatedText — word-by-word stagger reveal for body text (paragraphs, descriptions).
 *
 * @param {string}  text           – The text to animate.
 * @param {string}  [tag="p"]      – The wrapper HTML tag.
 * @param {object}  [style]        – Extra inline styles on the wrapper.
 * @param {string}  [className]    – Extra className on the wrapper.
 * @param {number}  [stagger=0.02] – Delay between each word (seconds).
 * @param {number}  [delay=0]      – Overall delay before animation starts.
 * @param {string}  [viewportMargin="-50px"] – Margin for viewport trigger.
 */
export default function AnimatedText({
  text,
  tag: Tag = "p",
  style,
  className,
  stagger = 0.02,
  delay = 0,
  viewportMargin = "-50px",
}) {
  const motionProfile = useMotionProfile();
  const words = text.trim().split(" ");
  const disabled = motionProfile === "none";
  const light = motionProfile === "light";

  const MotionTag = motion[Tag] || motion.p;

  return (
    <MotionTag
      initial={disabled ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: motionProfile !== "full", margin: viewportMargin }}
      variants={{
        visible: { transition: { staggerChildren: light ? Math.min(stagger, 0.012) : stagger, delayChildren: light ? Math.min(delay, 0.15) : delay } },
        hidden: {},
      }}
      style={style}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.25em" }}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: light ? 0.28 : 0.4, ease: "easeOut" },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMotionProfile } from "@/components/LenisProvider";

/**
 * AnimatedHeading — word-by-word stagger reveal with optional highlight wipe.
 *
 * @param {string}  text        – The main heading text (before the accent).
 * @param {string}  [accentText] – Text to render inside the orange highlight wipe.
 * @param {string}  [tag="h2"]  – The wrapper HTML tag (h2, h3, etc.).
 * @param {object}  [style]     – Extra inline styles on the wrapper.
 * @param {string}  [className] – Extra className on the wrapper.
 * @param {number}  [mobileBreakBefore] – Zero-based word index for an optional mobile-only line break.
 * @param {number}  [stagger=0.04] – Delay between each word (seconds).
 * @param {number}  [accentDelay=0.8] – Delay before the highlight wipe starts.
 * @param {string}  [viewportMargin="-80px"] – Margin for viewport trigger.
 */
export default function AnimatedHeading({
  text,
  accentText,
  tag: Tag = "h2",
  style,
  className,
  mobileBreakBefore,
  stagger = 0.1,
  accentDelay = 1.0,
  viewportMargin = "-80px",
}) {
  const motionProfile = useMotionProfile();
  const words = text.trim().split(" ");
  const disabled = motionProfile === "none";
  const light = motionProfile === "light";

  return (
    <motion.div
      initial={disabled ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: motionProfile !== "full", margin: viewportMargin }}
      variants={{
        visible: { transition: { staggerChildren: light ? Math.min(stagger, 0.025) : stagger } },
        hidden: {},
      }}
      style={{ display: "inline" }}
    >
      <Tag style={{ margin: 0, ...style }} className={className}>
        {words.map((word, i) => (
          <React.Fragment key={i}>
            {i === mobileBreakBefore && <br className="animated-heading-mobile-break" aria-hidden="true" />}
            <motion.span
              className="heading-word"
              style={{ display: "inline-block", marginRight: "0.25em" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: light ? 0.35 : 0.8, ease: "easeOut" },
                },
              }}
            >
              {word}
            </motion.span>
          </React.Fragment>
        ))}
        {accentText && (
          <motion.span
            className="highlight-accent"
            style={{
              position: "relative",
              display: "inline-block",
              background: "transparent",
              padding: "0.05em 0.2em",
              zIndex: 1,
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: light ? 0.35 : 0.8, ease: "easeOut" },
              },
            }}
          >
            <motion.span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "var(--color-accent, #FF5E14)",
                zIndex: 0,
                originX: 0,
              }}
              variants={{
                hidden: { scaleX: 0 },
                visible: {
                  scaleX: 1,
                  transition: {
                    delay: light ? Math.min(accentDelay, 0.25) : accentDelay,
                    duration: light ? 0.45 : 1.5,
                    ease: "easeInOut",
                  },
                },
              }}
            />
            <span style={{ position: "relative", zIndex: 2 }}>{accentText}</span>
          </motion.span>
        )}
      </Tag>
    </motion.div>
  );
}

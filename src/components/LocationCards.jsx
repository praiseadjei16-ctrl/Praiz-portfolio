"use client";
import React, { useRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotionProfile } from "@/components/LenisProvider";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LocationCards() {
  const container = useRef();
  const motionProfile = useMotionProfile();
  const tags = ["Motion Design", "Brand Systems", "Detail-Obsessed", "Micro-interactions"];
  const headingText = "A brand that looks fine standing still and falls apart the moment it ".split(" ");

  useGSAP(() => {
    const imgWrap = container.current.querySelector('.split-statement__img-wrap');
    const img = container.current.querySelector('.split-statement__img-wrap img');
    const textBlock = container.current.querySelector('.split-statement__left');

    if (!imgWrap || !textBlock || !img) return undefined;

    if (motionProfile !== "full") {
      gsap.set([imgWrap, img, textBlock], { clearProps: "transform,clipPath" });
      return undefined;
    }

    // Sticky Wipe & Reveal (Pinned)
    gsap.set(imgWrap, { clipPath: "inset(100% 0% 0% 0%)" });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "+=350px", // Shorter distance to reduce the extra scroll height
        pin: true,
        scrub: true
      }
    });
    tl.to(imgWrap, { clipPath: "inset(0% 0% 0% 0%)", ease: "none" });
      
    gsap.to(textBlock, {
      yPercent: -15, // Subtle parallax for the text
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: container, dependencies: [motionProfile], revertOnUpdate: true });

  return (
    <section className="split-statement" id="about-intro" ref={container}>
      {/* Left panel — text content */}
      <div className="split-statement__left">
        <motion.h2 
          className="split-statement__heading"
          initial={motionProfile === "none" ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: motionProfile !== "full", margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {headingText.map((word, i) => (
            <motion.span 
              key={i} 
              style={{ display: 'inline-block', marginRight: '0.25em' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span 
            className="highlight-accent"
            style={{ 
              position: 'relative', 
              display: 'inline-block', 
              background: 'transparent',
              padding: '0.05em 0.2em',
              zIndex: 1 // Create a stacking context here
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <motion.span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'var(--color-accent, #FF5E14)',
                zIndex: 0, // Keep it at 0, relative to the parent stacking context
                originX: 0
              }}
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { delay: 1.2, duration: 1.5, ease: "easeInOut" } }
              }}
            />
            <span style={{ position: 'relative', zIndex: 2 }}>needs to move</span>
          </motion.span>
        </motion.h2>
        
        <div className="tags-desktop">
          <motion.div 
            className="split-statement__tags"
            initial={motionProfile === "none" ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: motionProfile !== "full", margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.7 } },
              hidden: {}
            }}
          >
            {tags.map((t, i) => (
              <motion.span 
                key={i} 
                className="split-statement__tag"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                whileHover={motionProfile === "full" ? { 
                  y: -5, 
                  scale: 1.05, 
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                  transition: { duration: 0.2 }
                } : undefined}
                style={{ display: 'inline-block' }}
              >
                ✧ {t}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="tags-mobile">
          <motion.div 
            className="split-statement__tags"
            initial={motionProfile === "none" ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: motionProfile !== "full", margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } },
              hidden: {}
            }}
          >
            {tags.map((t, i) => (
              <motion.span 
                key={i} 
                className="split-statement__tag"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                style={{ display: 'inline-block' }}
              >
                ✧ {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
        

      </div>

      {/* Right panel — image */}
      <div className="split-statement__right">
        <div className="split-statement__img-wrap" style={{ overflow: "hidden" }}>
          <Image
            src="/A brand.png"
            alt="Creative direction — design tools and process"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

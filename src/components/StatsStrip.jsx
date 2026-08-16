"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useMotionProfile } from "@/components/LenisProvider";

function Counter({ value }) {
  const motionProfile = useMotionProfile();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isPlus = value.includes('+');
  const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isFloat = value.includes('.');
  
  const motionValue = useMotionValue(0);
  
  useEffect(() => {
    if (inView && motionProfile !== "none") {
      animate(motionValue, numValue, {
        duration: motionProfile === "light" ? 1.1 : 2,
        ease: "easeOut",
      });
    }
  }, [inView, motionProfile, motionValue, numValue]);
  
  const displayValue = useTransform(motionValue, (current) => {
    let formatted = isFloat ? current.toFixed(1) : Math.floor(current).toString();
    return formatted + (isPlus ? '+' : '');
  });

  if (motionProfile === "none") return <span>{value}</span>;
  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function StatsStrip() {
  const motionProfile = useMotionProfile();
  const stats = [
    { value: '4.9', label: 'Average Rating', slug: 'rating' },
    { value: '35+', label: 'Projects Completed', slug: 'projects' },
    { value: '3+', label: 'Years Experience', slug: 'experience' }
  ];

  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className={`stat-item stat-item--${stat.slug}`}
              style={{ position: 'relative', borderRight: 'none' }}
              initial={motionProfile === "none" ? false : { opacity: 0, y: 22, scale: 0.96, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: motionProfile !== "full", margin: "-40px" }}
              transition={{ delay: idx * 0.1, duration: motionProfile === "light" ? 0.45 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="stat-value"><Counter value={stat.value} /></h2>
              <p className="stat-label">{stat.label}</p>
              
              {/* Vertical divider animation */}
              {idx < stats.length - 1 && (
                <motion.div
                  className="stat-divider"
                  style={{ 
                    position: 'absolute', 
                    right: 0, 
                    top: 0, 
                    bottom: 0, 
                    width: '1px', 
                    backgroundColor: 'var(--local-grid)', 
                    originY: 0 
                  }}
                  initial={motionProfile === "none" ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: motionProfile !== "full", margin: "-50px" }}
                  transition={{ delay: motionProfile === "light" ? 0.2 : 2, duration: motionProfile === "light" ? 0.4 : 0.8, ease: "circOut" }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

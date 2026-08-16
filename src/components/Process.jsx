"use client";
import React from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding your goals, users, and challenges through research and strategy.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Transforming insights into intuitive, beautiful, and functional product experiences.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Testing, refining, and launching the final product with clarity and precision.",
  },
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header process-header" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
          <span style={{ color: "var(--color-accent)", fontSize: "2.5rem", lineHeight: 1 }}>✧</span>
          <AnimatedHeading text="HOW IT " accentText="WORKS" tag="h2" style={{ margin: 0 }} />
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={step.number} className={`process-sticky-wrapper process-sticky-wrapper--${index + 1}`}>
              <ScrollReveal delay={index * 0.15}>
                <div className={`process-card process-card--${index + 1}`}>
                  <span className="process-card__number">{step.number}</span>
                  <h3 className="process-card__title">{step.title}</h3>
                  <AnimatedText text={step.description} tag="p" className="process-card__desc" />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

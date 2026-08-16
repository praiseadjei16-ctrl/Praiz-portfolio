"use client";

import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const ABOUT_COLORS = {
  surface: "#15161A",
  surfaceRaised: "#191A1F",
  heading: "#F5F2EC",
  body: "#AAA8A4",
  accent: "#FF5A0A",
};

/* ── Arrow icon for link buttons ── */
function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function About() {
  const cardStyle = {
    position: "relative",
    borderRadius: 16,
    padding: "32px 28px",
    overflow: "hidden",
    zIndex: 1,
    height: "100%",
    transition: "border-color 0.4s ease, transform 0.4s ease",
    background: `linear-gradient(145deg, ${ABOUT_COLORS.surfaceRaised} 0%, ${ABOUT_COLORS.surface} 100%)`,
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "none",
  };

  return (
    <section
      id="about"
      aria-label="About Praiz"
      style={{
        position: "relative",
        padding: "80px 5% 64px",
        background: "linear-gradient(180deg, #0A0A0B 0%, #0E0F12 50%, #0A0A0B 100%)",
        minHeight: "100vh",
      }}
    >
      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
        
        {/* Heading */}
        <div className="section-header" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 15, marginBottom: 40, textAlign: "center" }}>
          <span style={{ color: "var(--color-accent)", fontSize: "2.5rem", lineHeight: 1 }}>✧</span>
          <AnimatedHeading text="OK FINE, HERE'S MY " accentText="STORY" mobileBreakBefore={3} style={{ margin: 0, whiteSpace: "nowrap" }} />
        </div>

        {/* ROW 1 — Portrait + Bio */}
        <div className="about-row-1" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24 }}>
          {/* Portrait card */}
          <ScrollReveal delay={0}>
            <div className="bento-card" style={{ ...cardStyle, padding: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className="noise-overlay"></div>
              <div style={{ width: "100%", height: "100%", overflow: "hidden", zIndex: 2, position: "relative", borderRadius: 12 }}>
                <Image
                  src="/scale-about.png"
                  alt="Praiz working in his studio"
                  fill
                  sizes="(max-width: 900px) calc(100vw - 40px), 280px"
                  style={{ objectFit: "cover", objectPosition: "center 36%" }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Bio card */}
          <ScrollReveal delay={0.15}>
            <div className="bento-card" style={{ ...cardStyle, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <div className="noise-overlay"></div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <AnimatedText text="Praiz" tag="h3" style={{ margin: 0, fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", fontWeight: 700, color: ABOUT_COLORS.heading, fontFamily: "var(--font-primary)" }} />
                <AnimatedText text="I'm Praise, a Ghana-based multidisciplinary designer specializing in graphic design, motion design, cinematography, and video editing. I create visually compelling work that blends creativity, strategy, and technical precision. My focus is on crafting impactful visual experiences that help brands tell meaningful stories and connect with their audiences." style={{ margin: 0, fontSize: "1.1rem", lineHeight: 1.7, color: ABOUT_COLORS.body, fontWeight: 300, width: "100%", fontFamily: "var(--font-secondary)", marginTop: 16 }} />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ROW 2 — Personal traits + creative tools */}
        <div className="about-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Personal traits card */}
          <ScrollReveal delay={0}>
            <div className="bento-card" style={cardStyle}>
              <div className="noise-overlay"></div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <p style={{ margin: "0 0 28px", fontSize: "1rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: ABOUT_COLORS.heading, fontFamily: "var(--font-secondary)" }}>
                  A Few Things to Know
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { skill: "Story Before Style", description: "Before I choose a colour, frame, or transition, I ask what the work should make someone feel." },
                    { skill: "Obsessed With the Little Things", description: "I notice the awkward spacing, the frame that lasts too long, and the detail most people would scroll past." },
                    { skill: "Always Asking ‘What If?’", description: "Most of my favourite ideas begin with unnecessary curiosity and one more experiment." },
                    { skill: "Made to Make Things", description: "Even away from the screen, part of my brain is still composing, cutting, and connecting ideas." }
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{ margin: "0 0 4px", fontSize: "1.05rem", fontWeight: 500, color: ABOUT_COLORS.accent, fontFamily: "var(--font-primary)" }}>
                        {item.skill}
                      </p>
                      <p style={{ margin: 0, fontSize: "0.95rem", color: ABOUT_COLORS.body, fontWeight: 300, fontFamily: "var(--font-secondary)", lineHeight: 1.55 }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Creative tools card */}
          <ScrollReveal delay={0.15}>
            <div className="bento-card" style={cardStyle}>
              <div className="noise-overlay"></div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <p style={{ margin: "0 0 28px", fontSize: "1rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: ABOUT_COLORS.heading, fontFamily: "var(--font-secondary)" }}>
                  Tools I Live In
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { tool: "Figma, Photoshop & Illustrator", use: "Where rough ideas are structured, sharpened, and transformed into visuals worth stopping for." },
                    { tool: "After Effects", use: "Where static designs learn how to move." },
                    { tool: "Cinema 4D", use: "Where I give motion ideas depth, dimension, and a world of their own." },
                    { tool: "Premiere Pro", use: "Where footage finds its rhythm and becomes a story." }
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{ margin: "0 0 4px", fontSize: "1.05rem", fontWeight: 500, color: ABOUT_COLORS.accent, fontFamily: "var(--font-primary)" }}>
                        {item.tool}
                      </p>
                      <p style={{ margin: 0, fontSize: "0.95rem", color: ABOUT_COLORS.body, fontWeight: 300, fontFamily: "var(--font-secondary)", lineHeight: 1.55 }}>
                        {item.use}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Styles for V3 */}
      <style>{`
        @media (max-width: 900px) {
          .about-row-1, .about-row-2 {
            grid-template-columns: 1fr !important;
          }
          #about {
            background: #fff !important;
          }
          #about h2, #about h3, #about p, #about span {
            color: #111 !important;
          }
          #about .highlight-accent,
          #about .section-header > span:first-child,
          #about p:first-child,
          #about p:nth-child(even),
          #about p:nth-child(odd) {
             /* specific styling below */
          }
          #about .section-header > span:first-child {
            color: var(--color-accent) !important;
          }
          #about .bento-card p:first-child {
             color: #111 !important;
          }
          #about .bento-card > div > div > div > p:nth-child(1) {
             color: var(--color-accent) !important;
          }
          #about .bento-card > div > div > div > p:nth-child(2) {
             color: #444 !important;
          }
        }
        @media (max-width: 600px) {
          #about { padding: 48px 16px 40px !important; }
        }

        /* Texture Overlay */
        .noise-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
          z-index: 0;
          pointer-events: none;
        }

        .bento-card:hover {
          border-color: rgba(255, 255, 255, 0.12) !important;
          box-shadow: none !important;
          transform: translateY(-2px);
        }

      `}</style>
    </section>
  );
}

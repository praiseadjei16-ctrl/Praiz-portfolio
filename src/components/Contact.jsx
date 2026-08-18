"use client";
import React, { useState } from "react";
import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useMotionProfile } from "@/components/LenisProvider";

export default function Contact() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const motionProfile = useMotionProfile();

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div 
          className="cta-banner" 
          style={{ position: 'relative', overflow: 'hidden' }}
          onMouseMove={(e) => {
            if (motionProfile !== "full") return;
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onMouseLeave={() => setPos({ x: -1000, y: -1000 })}
        >
          {/* Static Base Grid (Fades out going up) */}
          <div className="cta-spotlight" style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 100%)'
          }}></div>

          {/* Interactive Spotlight Grid */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            WebkitMaskImage: `radial-gradient(circle 300px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 300px at ${pos.x}px ${pos.y}px, black 0%, transparent 100%)`,
            transition: 'mask-image 0.1s ease-out, -webkit-mask-image 0.1s ease-out'
          }}></div>

          {/* Center Content */}
          <div className="cta-content" style={{ position: 'relative', zIndex: 10 }}>
            <AnimatedHeading text="Let's work together!" tag="h2" className="cta-title" />
            <AnimatedText text="Ready to take your digital presence to the next level? Let's build something amazing." className="cta-subtitle" />
            
            <ScrollReveal delay={0.3}>
              <div className="cta-buttons">
                <a href="mailto:praiseadjei16@gmail.com?subject=New%20Project%20Inquiry" className="cta-btn">START A PROJECT</a>
                <a href="https://wa.me/qr/TUGSIQOWP5N4J1" target="_blank" rel="noopener noreferrer" className="cta-btn">SAY HELLO</a>
              </div>
            </ScrollReveal>
          </div>

          {/* Social Icons at Bottom */}
          <ScrollReveal delay={0.5} style={{ position: 'relative', zIndex: 10 }}>
            <div className="cta-socials" style={{ position: 'relative', zIndex: 10 }}>
              <a href="https://wa.me/qr/TUGSIQOWP5N4J1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="cta-social-link">
                <Image src="/icons8-whatsapp-50.svg" alt="WhatsApp" width={50} height={50} />
              </a>
              <a href="https://www.instagram.com/mrpraizee/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cta-social-link">
                <Image src="/icons8-instagram-50.svg" alt="Instagram" width={50} height={50} />
              </a>
              <a href="https://www.linkedin.com/in/praise-adjei-9117193a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cta-social-link">
                <Image src="/icons8-linkedin-50.svg" alt="LinkedIn" width={50} height={50} />
              </a>
              <a href="https://www.tiktok.com/@mr_pp14?_r=1&_t=ZS-95vNL4BBVbA" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="cta-social-link">
                <Image src="/icons8-tiktok-50.svg" alt="TikTok" width={50} height={50} />
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem', fontFamily: 'var(--font-secondary)' }}>
          © 2026 Praise Adjei. All rights reserved.
        </div>
      </div>
    </section>
  );
}

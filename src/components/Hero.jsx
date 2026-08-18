"use client";
import React, { useRef } from "react";
import { getImageProps } from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ExperienceCard, PortfolioStatsCard } from "@/components/HeroStatCards";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const heroImageCommon = {
  alt: "Praiz, Ghana-based multidisciplinary designer",
  sizes: "100vw",
  loading: "eager",
  fetchPriority: "high",
};

const {
  props: { srcSet: desktopHeroSrcSet },
} = getImageProps({
  ...heroImageCommon,
  src: "/praiz-pc2.png",
  width: 1536,
  height: 1024,
});

const {
  props: { srcSet: mobileHeroSrcSet, ...heroImageProps },
} = getImageProps({
  ...heroImageCommon,
  src: "/Praiz-mobile.png",
  width: 1080,
  height: 1350,
});

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: reduce)", () => {
      container.current?.classList.add("hero-ready");
      gsap.set(
        [
          ".hero-bg-text-wrapper",
          ".hero-bg-text",
          ".hero-portrait",
          ".hero-headline",
          ".hero-buttons a",
          ".mobile-only-card",
          ".corner-text",
        ],
        { clearProps: "all" }
      );
      gsap.set(".nav-link-inner", { y: 0, yPercent: 0 });
      gsap.set(".nav-separator", { scaleY: 1 });

      return () => container.current?.classList.remove("hero-ready");
    });

    media.add(
      "(max-width: 900px) and (prefers-reduced-motion: no-preference)",
      () => {
        container.current?.classList.add("hero-ready");
        
        // Setup initial states like desktop
        const siteHeader = document.getElementById("site-header");
        if (siteHeader) gsap.set(siteHeader, { opacity: 0 }); // Hide header initially
        
        gsap.set(".hero-bg-text-wrapper", { y: "30vh" }); // Start low
        
        const praizSplit = new SplitType(".hero-bg-text", { types: "chars" });
        gsap.set(praizSplit.chars, { opacity: 0, x: -30, filter: "blur(8px)" });
        
        gsap.set(".hero-portrait", { opacity: 0, scale: 0.92, filter: "blur(6px)", transformOrigin: "center bottom" });
        
        const headlineSplit = new SplitType(".hero-headline", { types: "lines" });
        gsap.set(headlineSplit.lines, { opacity: 0, scale: 0.94, filter: "blur(8px)" });
        
        gsap.set(".mobile-only-card", { opacity: 0, filter: "blur(8px)" });
        
        const buttons = gsap.utils.toArray(".hero-buttons a");
        gsap.set(buttons, { opacity: 0, scale: 0.94, filter: "blur(8px)" });

        // Hero ball starts off-screen
        gsap.set(".hero-ball", { y: "-100vh", scale: 1, opacity: 0, display: "block" });

        const mobileIntro = gsap.timeline({ delay: 0.2 });

        // Wavy fade-in for PRAIZ text
        if (praizSplit.chars?.length) {
          mobileIntro.to(praizSplit.chars, {
            x: 0, opacity: 1, filter: "blur(0px)",
            duration: 1.0, stagger: 0.12, ease: "power2.out"
          });
        }
        
        // Slide PRAIZ text to top
        mobileIntro.to(".hero-bg-text-wrapper", { y: "0", duration: 1.2, ease: "power3.inOut" }, "-=0.2");

        mobileIntro.addLabel("heroReveal", "-=0.1");

        // The Anchor
        mobileIntro.to(".hero-portrait", {
          opacity: 1, scale: 1, filter: "blur(0px)",
          duration: 1.2, ease: "power2.out"
        }, "heroReveal");

        // Glass Card
        mobileIntro.to(".mobile-only-card", {
          opacity: 1, filter: "blur(0px)",
          duration: 1.0, ease: "power2.out"
        }, "heroReveal+=0.4");
        
        // The Call to Action
        if (buttons.length) {
          mobileIntro.to(buttons, {
            opacity: 1, scale: 1, filter: "blur(0px)",
            duration: 0.9, stagger: 0.1, ease: "power2.out"
          }, "heroReveal+=0.6");
        }
        
        // Fade in header
        if (siteHeader) {
          mobileIntro.to(siteHeader, { opacity: 1, duration: 1.0, ease: "power2.out" }, "heroReveal+=0.6");
        }

        // The Ball Drops and bounces
        const ballStart = mobileIntro.labels.heroReveal + 1.5;
        mobileIntro.set(".hero-ball", { opacity: 1 }, ballStart)
          .to(".hero-ball", { y: "0", duration: 0.8, ease: "power2.in" }, ballStart)
          .to(".hero-ball", { y: "-15vh", duration: 0.4, ease: "power2.out" })
          .to(".hero-ball", { y: "0", duration: 0.4, ease: "power2.in" })
          .to(".hero-ball", { y: "-5vh", duration: 0.3, ease: "power2.out" })
          .to(".hero-ball", { y: "0", duration: 0.3, ease: "power2.in" })
          .to(".hero-ball", { scale: 100, opacity: 0, duration: 1.5, ease: "power3.out" })
          .set(".hero-ball", { display: "none" });

        // The Main Hook
        if (headlineSplit.lines?.length) {
          mobileIntro.to(headlineSplit.lines, {
            opacity: 1, scale: 1, filter: "blur(0px)",
            duration: 1.0, stagger: 0.15, ease: "power2.out"
          }, ballStart + 2.2);
        }

        return () => {
          mobileIntro.revert();
          praizSplit.revert();
          headlineSplit.revert();
          container.current?.classList.remove("hero-ready");
        };
      }
    );

    media.add(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
      () => {
    let disposed = false;
    let refreshFrame;

    // 1. Initial Setup & Styling
    gsap.set(".hero-bg-text-wrapper", { y: "35vh" }); // Start vertically centered
    gsap.set(".hero-ball", { y: "-100vh", scale: 1, opacity: 0, display: "block" });
    
    // Split PRAIZ background text
    const praizSplit = new SplitType(".hero-bg-text", { types: "chars" });
    gsap.set(praizSplit.chars, { opacity: 0, x: -50, filter: "blur(10px)" });
    
    // Set up The Anchor
    gsap.set(".hero-portrait", { opacity: 0, scale: 0.9, filter: "blur(8px)", transformOrigin: "center bottom" });
    
    // Set up The Main Hook
    const headlineSplit = new SplitType(".hero-headline", { types: "lines" });
    gsap.set(headlineSplit.lines, { opacity: 0, scale: 0.9, filter: "blur(10px)" });
    
    // Set up The Framing (Header elements)
    const navLinks = document.querySelectorAll(".nav-link-inner");
    const navSeps = document.querySelectorAll(".nav-separator");
    gsap.set(navLinks, { y: 0, yPercent: 100 });
    gsap.set(navSeps, { scaleY: 0, transformOrigin: "center" });

    // Set up Glass Card
    gsap.set(".mobile-only-card", { opacity: 0, filter: "blur(10px)" });

    // Set up the desktop calls to action
    const buttons = gsap.utils.toArray(".hero-buttons a");
    gsap.set(buttons, { opacity: 0, scale: 0.94, filter: "blur(10px)" });

    // Set up The Supporting Details
    const cornerLeft = document.querySelector(".corner-text-left");
    const cornerRight = document.querySelector(".corner-text-right");
    if(cornerLeft) cornerLeft.style.overflow = "hidden";
    if(cornerRight) cornerRight.style.overflow = "hidden";
    
    const copyLeft = new SplitType(".corner-text-left", { types: "lines" });
    const copyRight = new SplitType(".corner-text-right", { types: "lines" });
    
    if (copyLeft.lines) gsap.set(copyLeft.lines, { yPercent: 100, filter: "blur(6px)", opacity: 0 });
    if (copyRight.lines) gsap.set(copyRight.lines, { yPercent: 100, filter: "blur(6px)", opacity: 0 });

    // The server paints the hero background immediately while CSS hides only
    // animated children. Reveal those children once every GSAP start state is
    // ready, avoiding a black pre-hydration frame without changing the sequence.
    container.current?.classList.add("hero-ready");

    // Master Timeline
    const tl = gsap.timeline({ delay: 0.2 });

    // --- SCENE 1: PRELOADER (0.0s - 2.5s) ---
    // Wavy fade-in from left
    if (praizSplit.chars?.length) {
      tl.to(praizSplit.chars, {
        x: 0, opacity: 1, filter: "blur(0px)",
        duration: 1.0, stagger: 0.1, ease: "power2.out"
      }, 0);
    }
    
    // Slide up to top
    tl.to(".hero-bg-text-wrapper", { y: "0", duration: 1.0, ease: "power3.inOut" }, 1.5);

    // --- SCENE 2: HERO REVEAL (starts at 2.5s) ---
    tl.addLabel("heroReveal", 2.5);

    // 1) The Anchor (0.0s)
    tl.to(".hero-portrait", {
      opacity: 1, scale: 1, filter: "blur(0px)",
      duration: 1.1, ease: "power2.out"
    }, "heroReveal");

    // 2) The Framing (0.6s)
    if (navLinks.length) {
      tl.to(navLinks, { y: 0, yPercent: 0, duration: 0.6, ease: "power2.out" }, "heroReveal+=0.6");
    }
    if (navSeps.length) {
      tl.to(navSeps, { scaleY: 1, duration: 0.6, ease: "power2.out" }, "heroReveal+=0.6");
    }
    
    // Glass Card (0.6s - 1.2s build)
    tl.to(".mobile-only-card", { opacity: 1, filter: "blur(0px)", duration: 0.9, ease: "power2.out" }, "heroReveal+=0.6");

    // 3) The Call to Action (1.25s)
    if (buttons.length) {
      tl.to(buttons, {
        opacity: 1, scale: 1, filter: "blur(0px)",
        duration: 0.8, stagger: 0.08, ease: "power2.out"
      }, "heroReveal+=1.25");
    }

    // 4) The Supporting Details (1.65s)
    if (copyLeft.lines?.length) {
      tl.to(copyLeft.lines, {
        opacity: 1, yPercent: 0, filter: "blur(0px)",
        duration: 0.7, stagger: 0.075, ease: "power2.out"
      }, "heroReveal+=1.65");
    }
    if (copyRight.lines?.length) {
      tl.to(copyRight.lines, {
        opacity: 1, yPercent: 0, filter: "blur(0px)",
        duration: 0.7, stagger: 0.075, ease: "power2.out"
      }, "heroReveal+=1.65");
    }

    // 5) The Ball Drops (After UI is settled, 2.5s)
    const ballStart = 2.5;
    tl.set(".hero-ball", { opacity: 1 }, `heroReveal+=${ballStart}`)
      .to(".hero-ball", { y: "0", duration: 0.6, ease: "power2.in" }, `heroReveal+=${ballStart}`)
      .to(".hero-ball", { y: "-15vh", duration: 0.3, ease: "power2.out" })
      .to(".hero-ball", { y: "0", duration: 0.3, ease: "power2.in" })
      .to(".hero-ball", { y: "-5vh", duration: 0.2, ease: "power2.out" })
      .to(".hero-ball", { y: "0", duration: 0.2, ease: "power2.in" })
      .to(".hero-ball", { scale: 100, opacity: 0, duration: 1.5, ease: "power3.out" })
      .set(".hero-ball", { display: "none" });

    // 6) The Main Hook Reveal (When ball explodes, 2.5s + 1.6s = 4.1s)
    if (headlineSplit.lines?.length) {
      tl.to(headlineSplit.lines, {
        opacity: 1, scale: 1, filter: "blur(0px)",
        duration: 1.0, stagger: 0.1, ease: "power2.out"
      }, `heroReveal+=${ballStart + 1.6}`);
    }

    // --- SCROLL SEQUENCE (PINNING & MORPH) ---
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=180%", // Increased pin duration slightly to give this choreography more room to breathe
        pin: true,
        scrub: true,
      }
    });

    const elementsToBlur = [
      ".hero-content-wrapper",
      ".corner-text-left",
      ".corner-text-right"
    ];
    
    // 1. The responsive picture blurs and shrinks first. Targeting the picture
    // wrapper ensures the active desktop or mobile source animates identically.
    scrollTl.to(".hero-portrait picture", 
      { scale: 0.8, filter: "blur(6px)", opacity: 0, duration: 1, ease: "power2.in" }, 
      0
    );

    // 2. Other supporting elements blur and shrink next
    scrollTl.to(elementsToBlur, 
      { scale: 0.85, filter: "blur(4px)", opacity: 0, duration: 1, ease: "power2.inOut" }, 
      0.4
    );

    // 3. Shrink and move the giant PRAIZ text later
    scrollTl.fromTo(".hero-bg-text-wrapper", 
      { scale: 1, opacity: 1, filter: "blur(0px)" }, 
      { scale: 0.2, yPercent: -45, opacity: 0, filter: "blur(4px)", duration: 0.8, ease: "power2.inOut" }, 
      1.0
    );

    // 4. Move Header up (just the text/links, NO background yet)
    const siteHeader = document.getElementById("site-header");
    if (siteHeader) {
      scrollTl.fromTo(siteHeader, 
        { top: "62vh", yPercent: -50, paddingTop: "1.5rem", paddingBottom: "1.5rem" },
        { top: "0vh", yPercent: 0, paddingTop: "0.5rem", paddingBottom: "0.5rem", duration: 1, ease: "power2.out" }, 
        1.2
      );

      // 5. Reveal the Logo at the center exactly as the background text disappears
      const headerLogo = siteHeader.querySelector(".header-logo");
      if (headerLogo) {
        scrollTl.fromTo(headerLogo, 
          { scale: 0.6, opacity: 0, left: "50%", xPercent: -50 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }, 
          1.3
        );
        scrollTl.to(headerLogo, {
          left: "2rem",
          xPercent: 0,
          duration: 0.6,
          ease: "power2.inOut"
        }, 1.9);
      }

      // 6. Vacuum effect for Nav Links
      const navLeft = siteHeader.querySelector(".nav-left");
      const navRight = siteHeader.querySelector(".nav-right");
      if (navLeft && navRight) {
        gsap.set([navLeft, navRight], { x: 0, scale: 1, opacity: 1, transformOrigin: "right center" });
        scrollTl.to([navLeft, navRight], {
          x: "20vw",
          scale: 0.2,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in"
        }, 1.9);
      }

      // 7. Reveal Hamburger Menu Button
      const hamburgerBtn = siteHeader.querySelector(".hamburger-btn");
      if (hamburgerBtn) {
        scrollTl.fromTo(hamburgerBtn,
          { opacity: 0, scale: 0, transformOrigin: "right center" },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
          2.2 // Pops in just as the vacuum effect finishes
        );
      }
    }

    // Refresh pin measurements after the eager hero image and web fonts are
    // decoded. This avoids forcing a layout refresh 100ms into the intro.
    const readinessChecks = [];
    const portraitImage = container.current?.querySelector(".hero-portrait img");
    if (document.fonts?.ready) readinessChecks.push(document.fonts.ready);
    if (portraitImage?.decode) readinessChecks.push(portraitImage.decode());

    Promise.allSettled(readinessChecks).then(() => {
      if (disposed) return;
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      disposed = true;
      if (refreshFrame) cancelAnimationFrame(refreshFrame);
      container.current?.classList.remove("hero-ready");
      praizSplit.revert();
      headlineSplit.revert();
      copyLeft.revert();
      copyRight.revert();
    };

      }
    );

    return () => media.revert();
  }, { scope: container });

  return (
    <section className="hero-section" id="hero" ref={container} style={{ position: "relative", overflow: "hidden" }}>
      
      {/* The Ball */}
      <div className="hero-ball" style={{
        position: "absolute",
        top: "89%",
        left: "50%",
        width: "30px",
        height: "30px",
        backgroundColor: "#ff5e00",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 50,
        pointerEvents: "none",
        opacity: 0
      }}></div>

      {/* Massive Background Text - Wrapped to prevent GSAP transform parsing bugs on centered elements */}
      <div className="hero-bg-text-wrapper" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
        <div className="hero-bg-text">PRAIZ</div>
      </div>

      {/* Main Portrait */}
      <div className="hero-portrait">
        <picture>
          <source media="(min-width: 901px)" srcSet={desktopHeroSrcSet} />
          <source media="(max-width: 900px)" srcSet={mobileHeroSrcSet} />
          <img
            {...heroImageProps}
            alt="Praiz, Ghana-based multidisciplinary designer"
          />
        </picture>
      </div>

      <div className="mobile-only-card hero-experience-card-slot">
        <ExperienceCard />
      </div>

      <div className="mobile-only-card hero-stats-card-slot">
        <PortfolioStatsCard />
      </div>

      {/* Content Wrapper for Scroll Shrink/Blur */}
      <div className="hero-content-wrapper" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 3, pointerEvents: "none" }}>
        
        {/* Central Overlay Text */}
        <div className="hero-overlay-text" style={{ position: "absolute", top: "78%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10, textAlign: "center", width: "100%", pointerEvents: "none" }}>
          <h1 className="hero-headline" style={{ color: "white", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 600, lineHeight: 1.1, textShadow: "0px 4px 20px rgba(0,0,0,0.3)", textAlign: "center", display: "inline-block" }}>
            Design, Applied<br />Differently.
          </h1>
        </div>

        <div className="hero-buttons" style={{ position: "absolute", top: "92%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 10, display: "flex", gap: "1rem", justifyContent: "center", pointerEvents: "auto", width: "100%" }}>
          <Link href="#works" className="hero-cta hero-cta-primary" style={{ backgroundColor: "#ff5e00", color: "#1a1a1a", padding: "0.75rem 1.5rem", borderRadius: "99px", fontWeight: 500, fontSize: "1rem", textDecoration: "none" }}>
            <span>View My Work</span>
          </Link>
          <Link href="#about" className="hero-cta hero-cta-secondary" style={{ backgroundColor: "#ff5e00", color: "#1a1a1a", padding: "0.75rem 1.5rem", borderRadius: "99px", fontWeight: 500, fontSize: "1rem", textDecoration: "none" }}>
            About Me
          </Link>
        </div>

      </div>

      {/* Corner Texts */}
      <div className="corner-text corner-text-left" style={{ position: "absolute", bottom: "5vh", left: "5vw", zIndex: 3, color: "white", mixBlendMode: "difference", fontWeight: 500, fontSize: "1.1rem", maxWidth: "250px", transformOrigin: "bottom left" }}>
        The Design Expert.<br />That&apos;s Praiz.
      </div>
      
      <div className="corner-text corner-text-right" style={{ position: "absolute", bottom: "5vh", right: "5vw", zIndex: 3, color: "white", mixBlendMode: "difference", fontWeight: 500, fontSize: "1rem", maxWidth: "350px", textAlign: "right", transformOrigin: "bottom right" }}>
        Working closely with your team to deliver digital experiences that merge creativity, technical excellence, and long-term value.
      </div>

    </section>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const focusable = drawerRef.current?.querySelectorAll("a[href], button");
    const firstFocusable = focusable?.[0];
    const lastFocusable = focusable?.[focusable.length - 1];
    const menuButton = menuButtonRef.current;

    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => firstFocusable?.focus());

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !firstFocusable || !lastFocusable) return;
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header" id="site-header">
        
        <style dangerouslySetInnerHTML={{__html: `
          .site-header { transition: padding 0.3s ease; }
          .nav-container { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); width: 100%; position: relative; padding: 1rem 2rem; height: 80px; }
          .nav-link { transition: color 0.3s ease; }
          .nav-link-inner { transform: translateY(100%); }
          .nav-separator { transform: scaleY(0); }

          /* Absolute positioning for GSAP control */
          .header-logo { 
            position: absolute; 
            left: 50%; 
            top: 50%; 
            transform: translate(-50%, -50%); 
            margin: 0; 
          }
          
          .hamburger-btn { 
             position: absolute; 
             right: 2rem; 
             top: 50%; 
             transform: translateY(-50%);
             pointer-events: auto;
             background: #1a1a1a; color: white; border-radius: 50px; padding: 0.5rem 1.5rem; font-weight: 800; border: none; cursor: pointer;
             letter-spacing: 1px; font-size: 0.8rem;
             box-shadow: 0 10px 20px rgba(0,0,0,0.15);
             transition: background 0.3s ease;
             opacity: 0;
             transform: translateY(-50%) scale(0);
          }
          .hamburger-btn:hover { background: #ff5e00; }
        `}} />

        <div className="nav-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}>
          
          {/* Left Links */}
          <nav aria-label="Primary Left" className="nav-left" style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1, justifyContent: "flex-start", pointerEvents: "auto" }}>
            <div style={{ overflow: "hidden" }}>
              <Link href="#hero" className="nav-link nav-link-inner" style={{ display: "inline-block" }}>HOME</Link>
            </div>
            <span className="nav-separator" style={{ color: "#1a1a1a", opacity: 0.3, transformOrigin: "center" }}>|</span>
            <div style={{ overflow: "hidden" }}>
              <Link href="#about" className="nav-link nav-link-inner" style={{ display: "inline-block" }}>ABOUT ME</Link>
            </div>
          </nav>

          {/* Central Logo - ALWAYS present for GSAP to grab */}
          <div className="header-logo" style={{ 
              opacity: 0, 
              backgroundColor: "#ff5e00", 
              color: "#1a1a1a", 
              border: "none",
              padding: "0.2rem 1.5rem", 
              borderRadius: "99px", 
              fontWeight: 900, 
              fontSize: "1.5rem",
              letterSpacing: "-0.05em",
              fontFamily: "var(--font-primary)",
              pointerEvents: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10
          }}>
              PRAIZ<sup style={{ fontSize: "0.6em", marginLeft: "0.1em" }}>®</sup>
          </div>

          <Link href="#contact" className="mobile-header-cta">
            Start a Project
          </Link>

          {/* Right Links */}
          <nav aria-label="Primary Right" className="nav-right" style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1, justifyContent: "flex-end", pointerEvents: "auto" }}>
            <div style={{ overflow: "hidden" }}>
              <Link href="#services" className="nav-link nav-link-inner" style={{ display: "inline-block" }}>SERVICES</Link>
            </div>
            <span className="nav-separator" style={{ color: "#1a1a1a", opacity: 0.3, transformOrigin: "center" }}>|</span>
            <div style={{ overflow: "hidden" }}>
              <Link href="#works" className="nav-link nav-link-inner" style={{ display: "inline-block" }}>CLIENTS</Link>
            </div>
            <span className="nav-separator" style={{ color: "#1a1a1a", opacity: 0.3, transformOrigin: "center" }}>|</span>
            <div style={{ overflow: "hidden" }}>
              <Link href="#contact" className="nav-link nav-link-inner" style={{ display: "inline-block" }}>FAQ</Link>
            </div>
          </nav>

          {/* Hamburger button exclusively for Minimalist Drawer */}
          <button
            ref={menuButtonRef}
            type="button"
            className="hamburger-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-menu-drawer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="hamburger-label">{menuOpen ? "CLOSE" : "MENU"}</span>
            <span className="hamburger-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
          </button>

        </div>
      </header>

      {/* Slide-in Side Drawer */}
      <>
        {/* Optional backdrop to dim the rest of the screen */}
        <div
          className={`menu-backdrop ${menuOpen ? "is-open" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Actual Side Panel */}
        <div
          ref={drawerRef}
          id="site-menu-drawer"
          className={`menu-drawer ${menuOpen ? "is-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          aria-hidden={!menuOpen}
        >
          <button type="button" className="drawer-close" onClick={closeMenu}>
            CLOSE
          </button>
          <Link href="#hero" className="drawer-link" onClick={closeMenu}>HOME</Link>
          <Link href="#about" className="drawer-link" onClick={closeMenu}>ABOUT ME</Link>
          <Link href="#works" className="drawer-link" onClick={closeMenu}>PROJECTS</Link>
          <Link href="#services" className="drawer-link" onClick={closeMenu}>SERVICES</Link>
          <Link href="#contact" className="drawer-link" onClick={closeMenu}>CONTACT</Link>
          
          <style dangerouslySetInnerHTML={{__html: `
            .drawer-link {
              font-size: 2.5rem;
              font-weight: 800;
              color: rgba(255,255,255,0.7);
              text-decoration: none;
              text-transform: uppercase;
              font-family: var(--font-primary);
              transition: transform 0.3s ease, color 0.3s ease;
              letter-spacing: -0.02em;
            }
            .drawer-link:hover {
              color: #ff5e00;
              transform: translateX(10px);
            }
            @media (max-width: 900px) {
              .drawer-link {
                color: rgba(17,17,17,0.7);
              }
            }
          `}} />
        </div>
      </>
    </>
  );
}

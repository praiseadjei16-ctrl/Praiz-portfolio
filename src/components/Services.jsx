"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Observer for desktop
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", 
        threshold: 0,
      }
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const services = [
    {
      id: "01",
      title: "Graphic Design",
      description: "Creating visually compelling brand identities, layouts, and marketing materials that capture attention and communicate your message clearly.",
      image: "/g-designer.png",
      color: "#FF5E14"
    },
    {
      id: "02",
      title: "Motion Design",
      description: "Bringing static concepts to life with dynamic animations and motion graphics that enhance storytelling and engage your audience.",
      image: "/motion-graphics.png",
      color: "#3B82F6"
    },
    {
      id: "03",
      title: "Cinematography",
      description: "Directing and capturing high-quality cinematic visuals that tell a powerful story, matching technical precision with creative vision.",
      image: "/Cinematography.png",
      color: "#10B981"
    },
    {
      id: "04",
      title: "Video Editing",
      description: "Crafting seamless, impactful video narratives by expertly cutting, coloring, and pacing raw footage into polished final products.",
      image: "/video editing.png",
      color: "#8B5CF6"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .services-wrapper {
          background: #0a0a0a;
          color: #fff;
        }
        
        /* Desktop Split Screen */
        .services-desktop {
          display: block;
          padding: 120px 0;
        }
        
        .services-split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .services-split-left {
          position: sticky;
          top: 100px;
          height: calc(100vh - 200px);
          display: flex;
          flex-direction: column;
        }

        .services-title-main {
          font-size: clamp(3rem, 5vw, 5rem);
          margin: 0;
          line-height: 1;
          font-family: var(--font-primary);
        }

        .services-image-container {
          flex: 1;
          position: relative;
          border-radius: 0;
          overflow: hidden;
          margin-top: 40px;
        }

        .services-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .services-list {
          padding-top: 20vh;
          padding-bottom: 20vh;
        }

        .services-list-item {
          padding: 60px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .services-list-item:last-child {
          border-bottom: none;
        }

        .services-list-title {
          font-size: clamp(2rem, 3vw, 3rem);
          margin: 0 0 20px 0;
          font-family: var(--font-primary);
          display: flex;
          align-items: center;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .services-list-num {
          font-size: 1.2rem;
          margin-right: 20px;
          transition: color 0.4s ease;
        }

        .services-list-desc {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.7);
          max-width: 80%;
          margin: 0;
          font-family: var(--font-secondary);
        }

        /* Mobile Container - Hides desktop on mobile */
        .services-mobile-container {
          display: none;
        }

        @media (max-width: 900px) {
          .services-desktop {
            display: none !important;
          }
          .services-mobile-container {
            display: block;
          }
        }

        /* ========================================= */
        /* MOBILE VIEW */
        /* ========================================= */
        .services-mobile-wrapper {
          padding: 60px 0 0;
          background: #fff;
          color: #111;
          overflow: hidden;
          position: relative;
        }
        
        .services-mobile-header {
          font-family: var(--font-primary);
          margin-left: 20px;
          margin-bottom: 40px;
          color: #111;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 15px;
          position: relative;
          z-index: 10;
        }
        
        .services-mobile-filmstrip {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 0 20px 72px;
          scrollbar-width: none;
          position: relative;
          z-index: 10;
        }
        
        .services-mobile-filmstrip::-webkit-scrollbar { display: none; }
        
        .services-mobile-card {
          flex: 0 0 85%;
          scroll-snap-align: center;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.4);
          -webkit-backdrop-filter: blur(20px);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .services-mobile-img-container {
          width: 100%;
          height: 180px;
          position: relative;
          background: #111;
        }
        
        .services-mobile-card-content {
          padding: 24px;
          position: relative;
          z-index: 2;
        }
        
        .services-mobile-card-title {
          font-family: var(--font-primary);
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 12px;
          color: #111;
        }
        
        .services-mobile-card-desc {
          font-family: var(--font-secondary);
          font-size: 1rem;
          line-height: 1.5;
          color: rgba(0,0,0,0.6);
        }
      `}} />

      <section id="services" className="services-wrapper">
        {/* DESKTOP VIEW */}
        <div className="services-desktop">
          <div className="container services-split-grid">
            <div className="services-split-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '2.5rem', lineHeight: 1 }}>✧</span>
                <AnimatedHeading text="HOW I " accentText="HELP" tag="h2" className="services-title-main" style={{ margin: 0 }} />
              </div>
              <div className="services-image-container">
                {services.map((service, idx) => (
                  <Image
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="services-image"
                    style={{
                      opacity: activeIndex === idx ? 1 : 0,
                      transform: activeIndex === idx ? 'scale(1)' : 'scale(1.05)'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="services-list">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  ref={(el) => (itemRefs.current[index] = el)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="services-list-item"
                  style={{ opacity: activeIndex === index ? 1 : 0.4 }}
                >
                  <h3 className="services-list-title">
                    <span className="services-list-num" style={{ color: activeIndex === index ? 'var(--color-accent)' : 'inherit' }}>
                      {service.id}
                    </span>
                    {service.title}
                  </h3>
                  <AnimatedText text={service.description} tag="p" className="services-list-desc" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="services-mobile-container">
          <div className="services-mobile-wrapper">
            
            {/* No background orbs, pure white background for frosted glass */}

            <div className="services-mobile-header section-header">
              <span style={{ color: 'var(--color-accent)', fontSize: '2.5rem', lineHeight: 1 }}>✧</span>
              <AnimatedHeading text="HOW I " accentText="HELP" style={{ margin: 0, textAlign: 'left' }} />
            </div>
            <div className="services-mobile-filmstrip">
              {services.map(service => (
                <div key={service.id} className="services-mobile-card">
                  <div className="services-mobile-img-container">
                    <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 85vw, 100vw" style={{objectFit: 'cover'}} />
                  </div>
                  <div className="services-mobile-card-content">
                    <h3 className="services-mobile-card-title">{service.title}</h3>
                    <p className="services-mobile-card-desc">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

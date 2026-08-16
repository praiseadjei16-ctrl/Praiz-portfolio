"use client";
import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { useMotionProfile } from "@/components/LenisProvider";
import ProjectCard from "./ProjectCard";
import ProjectViewer from "./ProjectViewer";

gsap.registerPlugin(ScrollTrigger, Flip);

const CATEGORIES = ["All", "Graphic Design", "Video Editing", "Cinematography", "Motion Graphics"];

const initialProjects = [
  {
    id: 1,
    title: "GLOBALDIASPORA",
    mobileTitle: "Global Diaspora",
    features: "Visual Storytelling / Brand Strategy",
    format: "Widescreen MP4 Video",
    category: "Video Editing",
    type: "video",
    videoUrl: "/Videos/Video edits/GLOBAL DIASPORA.mp4",
    kicker: "Identity and connection told on a global scale",
    description: "A grand-scale, documentary-style digital narrative exploring identity, global connection and regional influence. The video builds an evocative visual flow through immersive pacing and structured documentary scaffolding, engineered for keynote presentations, international retail and community networks.",
  },
  {
    id: 2,
    title: "Street Vlog",
    features: "Lifestyle Videography / Content Strategy",
    format: "Run-and-Gun MP4",
    category: "Cinematography",
    type: "video",
    videoUrl: "/Videos/Cinematography/Street vlog.mp4",
    kicker: "An authentic street-level view of modern urban life",
    description: "A raw, conversion-focused lifestyle vlog offering an authentic perspective on modern urban spaces. The project uses natural camera movement, candid environmental lighting and a grounded narrative style built for retail integration and organic digital storefront placement.",
  },
  {
    id: 3,
    title: "Onyx Automation Agency",
    features: "Motion Design & Brand Systems",
    format: "Promotional Video & Brand Showcase",
    category: "Motion Graphics",
    type: "video",
    videoUrl: "/Videos/Motion graphics/Onyx Automation.mp4",
    kicker: "Technical precision shaped into a fluid brand system",
    description: "A brand infrastructure and digital showcase for an advanced automation ecosystem. The project synthesizes technical precision with fluid dynamic design, resulting in an authoritative visual identity created to communicate efficiency, high performance and scalable integration across modern digital enterprises.",
  },
  {
    id: 4,
    title: "Zeal Energy Drink",
    features: "Commercial Motion Graphics",
    format: "Social Media Campaign Video",
    category: "Motion Graphics",
    type: "video",
    videoUrl: "/Videos/Motion graphics/Zeal Energy Drink.mp4",
    kicker: "A high-octane campaign built to move at full charge",
    description: "An electric, high-octane visual campaign designed to capture the visceral energy of a next-generation beverage brand. The project merges hyper-stylized motion graphics with rapid-fire pacing and bold typographic rhythms, establishing an impactful lifestyle narrative built to dominate social media and modern digital advertising.",
  },
  {
    id: 5,
    title: "FRAME IT",
    mobileTitle: "Frame It",
    features: "Brand Creative & Art Direction",
    format: "Commercial Brand Video",
    category: "Motion Graphics",
    type: "video",
    videoUrl: "/Videos/Motion graphics/FRAME IT.mp4",
    kicker: "A precise visual system that puts curation in focus",
    description: "A compelling, visual-first promotional system celebrating curation and aesthetic precision. The project combines meticulous framing, rhythmic pacing and a minimalist design philosophy to highlight product versatility, making it a powerful asset for digital storefronts and immersive design campaigns.",
  },
  {
    id: 6,
    title: "Caasys Ad",
    features: "SaaS Product Marketing",
    format: "Performance Marketing Ad",
    category: "Motion Graphics",
    type: "video",
    videoUrl: "/Videos/Motion graphics/Caasys ad.mp4",
    kicker: "SaaS utility translated into persuasive motion",
    description: "A conversion-optimized digital advertisement highlighting software-as-a-service utility through engaging motion storytelling. The asset integrates clear problem-solving narratives with sleek dashboard visualizations to create a persuasive, performance-driven marketing tool for modern web audiences.",
  },
  {
    id: 7,
    title: "BTS FGTG Summit",
    features: "Event Highlights & Post-Production",
    format: "Vertical MP4 Video",
    category: "Video Editing",
    type: "video",
    videoUrl: "/Videos/Video edits/BTS FGTG SUMMIT.mp4",
    kicker: "Inside the energy and craft of a live summit production",
    description: "An expressive, high-energy behind-the-scenes highlight reel capturing the environment and technical infrastructure of the From Go To Goal Summit live production space. The edit uses dynamic pacing, modern post-production transitions and rhythmic synchronization to build brand affinity and showcase authentic crew engagement.",
  },
  {
    id: 8,
    title: "FGTG Sponsorship Ad",
    features: "Brand Creative & Motion Direction",
    format: "B2B Promotional Video",
    category: "Motion Graphics",
    type: "video",
    videoUrl: "/Videos/Motion graphics/FGTG Sponsorship ad.mp4",
    kicker: "Partnership value presented with clarity and prestige",
    description: "A premium, B2B-focused promotional asset engineered to demonstrate partnership value and institutional prestige. The piece uses sophisticated transitions, elegant timing and clear data visualization to position sponsorship opportunities as essential strategic investments for premier brand amplification.",
  },
  {
    id: 9,
    title: "RAN Summit",
    features: "Event Branding & Promotion",
    format: "Video Announcement",
    category: "Video Editing",
    type: "video",
    videoUrl: "/Videos/Video edits/RAN SUMMIT.mp4",
    kicker: "A leadership event identity built around purposeful progress",
    description: "A complete promotional campaign and event identity for a premier leadership conference. The project combines personal storytelling with an intentional, design-focused framework for success, built across the intersections of leadership, law, technology and diplomacy.",
  },
  {
    id: 13,
    title: "Safety Precaution",
    features: "Public Safety / Cinematography",
    format: "Video Announcement",
    category: "Cinematography",
    type: "video",
    videoUrl: "/Videos/Cinematography/Safety Precaution.MP4",
    kicker: "Rainy-season awareness designed to keep communities safe",
    description: "A complete public safety announcement and community awareness campaign for citizens during the rainy season in Ghana. The project combines clear, actionable safety instructions, supportive community outreach, and a flexible messaging framework built for broadcast and digital media.",
  },
  {
    id: 10,
    title: "PardiMan Flyer Design",
    features: "Graphic Design / Advertising",
    format: "Landscape Promotional Flyer",
    category: "Graphic Design",
    type: "image",
    image: "/Graphic design/PARDIMAN ENTERPRISE.png",
    kicker: "Clear IT services communication in a bold campaign layout",
    description: "A bold promotional campaign and service flyer for an IT solutions brand. The project combines clear service communication, recognizable software visuals and a structured landscape layout designed for both digital promotion and large-format display.",
  },
  {
    id: 11,
    title: "Home of Hope",
    features: "Brand Identity",
    format: "Logo Design, Visual System & Brand Applications",
    category: "Graphic Design",
    type: "image",
    image: "/Graphic design/HOME OF HOPE.png",
    kicker: "A faith-led identity grounded in sanctuary and purpose",
    description: "A complete visual identity for Home of Hope, a faith-led lifestyle brand built around community, sanctuary and purpose. The project combines a symbolic logo system, thoughtful construction principles and versatile brand applications across apparel, packaging, digital platforms and environmental graphics.",
  },
  {
    id: 12,
    title: "Selcot Tropical",
    features: "Brand Identity",
    format: "Logo Design, Visual System & Brand Applications",
    category: "Graphic Design",
    type: "image",
    image: "/Graphic design/SELCOT TROPICAL.png",
    kicker: "Nature and industry united in a vibrant tropical identity",
    description: "A vibrant brand identity for Selcot Tropical, blending agriculture, sustainability and industrial innovation into one cohesive visual system. The project combines nature-inspired symbolism, a bold tropical colour palette and flexible brand applications across uniforms, packaging, signage, merchandise and lifestyle campaigns.",
  },
];

export default function Works() {
  const containerRef = useRef();
  const sectionRef = useRef();
  const trackRef = useRef();
  const trackWrapperRef = useRef();
  const motionProfile = useMotionProfile();
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);
  const [activeProject, setActiveProject] = useState(null);

  // Handle Filtering and Flip Animation
  const handleFilter = (category) => {
    setActiveCategory(category);

    if (motionProfile !== "full") {
      const nextProjects = category === "All"
        ? initialProjects
        : initialProjects.filter((project) => project.category === category);
      setFilteredProjects(nextProjects);
      requestAnimationFrame(() => {
        trackWrapperRef.current?.scrollTo({
          left: 0,
          behavior: motionProfile === "none" ? "auto" : "smooth",
        });
      });
      return;
    }
    
    // Get current state of cards
    const state = Flip.getState(".project-card-v2");

    // Filter projects
    const nextProjects = category === "All" 
      ? initialProjects 
      : initialProjects.filter(p => p.category === category);
      
    setFilteredProjects(nextProjects);

    // After state updates and DOM renders the new items, animate Flip
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.6,
        ease: "power3.inOut",
        absolute: true,
        stagger: 0.05,
        onComplete: () => {
          // VERY IMPORTANT: Refresh ScrollTrigger so the horizontal scroll distance updates!
          ScrollTrigger.refresh();
        }
      });
    });
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!container || !section || !track) return undefined;

    if (motionProfile !== "full") {
      gsap.set(track, { clearProps: "transform" });
      return undefined;
    }

    // Small delay to let Lenis initialize and layout settle
    let animationContext;
    const timer = setTimeout(() => {
      const calculateScroll = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth);
      };

      animationContext = gsap.context(() => {
        gsap.to(track, {
          x: () => -calculateScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(calculateScroll(), 1)}`,
            pin: true,
            scrub: 1,
            snap: {
              snapTo: (progress) => {
                const cardCount = track.querySelectorAll(".project-card-v2").length;
                if (cardCount <= 1) return progress;

                return gsap.utils.snap(1 / (cardCount - 1), progress);
              },
              duration: { min: 0.15, max: 0.4 },
              delay: 0.08,
              ease: "power1.inOut",
            },
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }, container);

      ScrollTrigger.refresh();

    }, 300);

    return () => {
      clearTimeout(timer);
      animationContext?.revert();
      gsap.set(track, { clearProps: "transform" });
    };
  }, [motionProfile]);

  return (
    <div ref={containerRef}>
      <section className="projects-section" id="works" ref={sectionRef}>
        <div className="container">
          <div className="section-header works-header" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ color: 'var(--color-accent)', fontSize: '2.5rem', lineHeight: 1 }}>✧</span>
            <AnimatedHeading text="BROWSE MY " accentText="PROJECTS" style={{ margin: 0, textAlign: 'left' }} />
          </div>
          
          {/* Category Filters */}
          <div className="projects-filters">
            {CATEGORIES.map(cat => (
              <button 
                key={cat} 
                onClick={() => handleFilter(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-track-wrapper" ref={trackWrapperRef}>
          <div className="projects-track" ref={trackRef}>
            {/* Explicit left spacer to center the first card */}
            <div className="track-spacer" aria-hidden="true"></div>
            
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={() => setActiveProject(project)}
              />
            ))}
            
            {/* Explicit right spacer to allow the last card to reach the center */}
            <div className="track-spacer" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <ProjectViewer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

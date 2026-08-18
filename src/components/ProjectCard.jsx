"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const isVideo = project.type === "video" && project.videoUrl;
  const posterImage = project.type === "image" ? project.image : null;

  useEffect(() => {
    if (!isVideo) return undefined;

    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return undefined;

    const mobileQuery = window.matchMedia("(max-width: 900px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;

    const configurePreview = () => {
      observer?.disconnect();
      video.pause();

      if (!mobileQuery.matches) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!reducedMotionQuery.matches) {
              video.play().catch(() => undefined);
            }
          } else {
            video.pause();
          }
        },
        { rootMargin: "160px 80px", threshold: 0.15 }
      );

      observer.observe(card);
    };

    configurePreview();
    mobileQuery.addEventListener("change", configurePreview);

    return () => {
      mobileQuery.removeEventListener("change", configurePreview);
      observer?.disconnect();
      video.pause();
    };
  }, [isVideo]);

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play error:", e));
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      ref={cardRef}
      id={`project-card-${project.id}`}
      data-flip-id={`project-${project.id}`}
      className={`project-card-v2 ${project.isModal ? 'modal-active' : ''} ${posterImage ? 'project-card-image' : ''}`}
      data-category={project.category}
      onMouseEnter={isVideo ? handleMouseEnter : undefined}
      onMouseLeave={isVideo ? handleMouseLeave : undefined}
    >
      {/* Background Image / Video */}
      <div className="project-image-v2">
        {isVideo ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="project-hover-video"
          />
        ) : null}

        {posterImage ? (
          <Image
            src={posterImage}
            alt={`${project.title} project artwork`}
            fill
            sizes="(max-width: 900px) 86vw, 450px"
            className="project-poster-image"
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <div className="project-overlay-v2"></div>
      </div>

      {/* Content Overlay */}
      <div className="project-content-v2">
        <div className="project-top-v2">
          <span className="project-number-v2">{(index + 1).toString().padStart(2, '0')}</span>
          <div className="project-tags-v2">
            <span className="project-tag-v2 project-tag-desktop">{project.features}</span>
            <span className="project-tag-v2 project-tag-mobile">{project.mobileFeatures ?? project.features}</span>
            <span className="project-tag-v2">GSAP</span>
            <span className="project-tag-v2">{project.category}</span>
          </div>
        </div>
        
        <div className="project-bottom-v2">
          <div className="project-info-text-v2">
            <h3 className="project-title-v2">
              <span className="project-title-desktop">{project.title}</span>
              <span className="project-title-mobile">{project.mobileTitle ?? project.title}</span>
            </h3>
            <p className="project-desc-v2">{project.format}</p>
          </div>
          <button
            type="button"
            onClick={onOpen}
            className="project-link-btn-v2"
            aria-label={`View ${project.title} project details`}
          >
            <ArrowUpRight size={24} color="#000" />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import styles from "./ProjectViewer.module.css";

export default function ProjectViewer({ project, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.viewer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-viewer-title"
        data-lenis-prevent
        data-lenis-prevent-wheel=""
        data-lenis-prevent-touch=""
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close project viewer"
        >
          <X size={21} />
        </button>

        <div className={styles.mediaStage}>
          {project.type === "video" && project.videoUrl ? (
            <video
              key={project.id}
              src={project.videoUrl}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className={styles.video}
            >
              Your browser does not support HTML video.
            </video>
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} project artwork`}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 70vw"
              className={styles.image}
            />
          )}
        </div>

        <aside className={styles.details}>
          <div
            className={styles.detailsScroll}
            data-lenis-prevent-wheel=""
            data-lenis-prevent-touch=""
          >
            <div className={styles.projectMeta}>
              <span>Selected project</span>
            </div>

            <h2 id="project-viewer-title">{project.title}</h2>
            <p className={styles.kicker}>{project.kicker}</p>
            <div className={styles.disciplineLine}>
              <span>{project.category}</span>
            </div>
            <p className={styles.description}>{project.description}</p>

            <dl className={styles.facts}>
              <div>
                <dt>Discipline</dt>
                <dd>{project.features}</dd>
              </div>
              <div>
                <dt>Format</dt>
                <dd>{project.format}</dd>
              </div>
            </dl>
          </div>

          <a className={styles.projectCta} href="mailto:hello@praiz.studio">
            <span>
              <small>Have a project in mind?</small>
              Start a conversation
            </span>
            <ArrowUpRight size={20} />
          </a>
        </aside>
      </section>
    </div>
  );
}

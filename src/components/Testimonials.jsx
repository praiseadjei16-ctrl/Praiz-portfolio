"use client";
import React from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    quote:
      "Praiz has a knack for turning fuzzy ideas into creative masterpieces. He has a rare touch for delivering high-end work under a pressing deadline without compromising on quality. What makes working with Praiz fun is his collaborative nature and openness to constructive feedback. If you're looking for a creative who exceeds expectations and captures your audience's attention, he's the right one.",
    author: "I.B Gyansah",
    role: "Founder, Reinvent Africa Network",
    image: "/Isaac B. Gyansah.jpeg",
  },
  {
    id: 2,
    rating: 5.0,
    quote:
      "Before working with Praiz, I struggled with how to advertise Onyx in a way that actually captured what we do. I came to him with rough, half-formed ideas, and he took that and turned it into a motion graphics ad that was honestly unbelievable. The final piece was sharp, creative, and completely elevated what I originally had in mind. After we put the ad out, I got so much praise for how good it looked. Praiz doesn't just execute, he refines and improves on your vision.",
    author: "Darius Asante",
    role: "Founder, Onyx Automation Agency",
    image: "/Founder-Darius Asante.jpg",
  },
  {
    id: 3,
    rating: 5.0,
    quote:
      "Absolutely amazing work! The motion graphics were clean, creative, and professionally done. He took my ideas and turned them into something even better than I imagined. The final result made my work look far more polished and professional.",
    author: "Jeremy Eshun",
    role: "Digital Media Manager, Aura Family Dental Care",
    image: "/Jeremy Eshun.jpg",
  },

];

export default function Testimonials() {
  const headerContent = (
    <div className="t-header-group">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
        <span style={{ color: 'var(--color-accent)', fontSize: '2.5rem', lineHeight: 1 }}>✧</span>
        <AnimatedHeading text="DONT JUST TAKE MY " accentText="WORD FOR IT" className="testimonials-heading" style={{ margin: 0 }} />
      </div>
      <AnimatedText text="Delivering exceptional digital experiences that users love and businesses trust." className="testimonials-subtitle" />
    </div>
  );

  const footerContent = (
    <div className="t-footer-group">
      <div className="testimonials-stats">
        <ScrollReveal delay={0}>
          <div className="t-stat-box">
            <h3>35+</h3>
            <p>Projects Delivered</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="t-stat-box">
            <h3>4.9</h3>
            <p>Average Rating</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="t-stat-box">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="testimonials-actions">
        <a href="#works" className="btn-t-solid">See All Projects</a>
      </div>
    </div>
  );

  const cardsContent = (
    <div className="testimonials-right">
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`t-card-wrapper t-card-wrapper--${index + 1}`}>
            <ScrollReveal delay={index * 0.12}>
              <div className="t-card">
                <div className="t-card-header">
                  <div className="t-avatar">
                    <img src={testimonial.image} alt={testimonial.author} />
                  </div>
                  <div className="t-author-meta">
                    <h4>{testimonial.author}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <div className="t-rating">
                  <span className="t-rating-number">{testimonial.rating.toFixed(1)}</span>
                  <div className="t-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < Math.floor(testimonial.rating) ? "var(--color-accent)" : "none"} stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="t-quote">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        
        {/* --- DESKTOP LAYOUT --- */}
        <div className="testimonials-left desktop-only">
          {headerContent}
          {footerContent}
        </div>
        <div className="testimonials-right-wrapper desktop-only">
          {cardsContent}
        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="t-mobile-sticky-zone mobile-only">
          {headerContent}
          {cardsContent}
        </div>
        <div className="t-mobile-footer-zone mobile-only">
          {footerContent}
        </div>

      </div>
    </section>
  );
}

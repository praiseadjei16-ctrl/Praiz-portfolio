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
      "Collaborating on this project was seamless. The vision was clearly understood, and the designs genuinely reflect my brand identity.",
    author: "Will Smith",
    role: "Harper Education",
    image: "https://i.pravatar.cc/150?u=will", // placeholder avatar
  },
  {
    id: 2,
    rating: 4.7,
    quote:
      "Working with this process was effortless. The vision was understood perfectly, and the designs truly represent my brand.",
    author: "Ikta Sollork",
    role: "PARAL CEO",
    image: "https://i.pravatar.cc/150?u=ikta",
  },
  {
    id: 3,
    rating: 4.9,
    quote:
      "A truly transformative partnership. The end result exceeded all of our expectations and has set a new standard in our industry.",
    author: "Alex Johnson",
    role: "Innovate Tech",
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    id: 4,
    rating: 5.0,
    quote:
      "Absolutely brilliant. From the initial concepts to the final delivery, the attention to detail and design thinking was world-class.",
    author: "Samantha Lee",
    role: "VP Marketing, Stellar",
    image: "https://i.pravatar.cc/150?u=samantha",
  },
  {
    id: 5,
    rating: 4.8,
    quote:
      "A fantastic collaborator who knows how to translate complex business requirements into sleek, user-friendly digital experiences.",
    author: "Marcus Vance",
    role: "Director of Product, Nexus",
    image: "https://i.pravatar.cc/150?u=marcus",
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

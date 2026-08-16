import React from "react";

export default function TrustMarquee() {
  return (
    <section className="trust-section">
      <div className="container">
        <p className="trust-title">Trusted By</p>
        <div className="logo-marquee">
          <div className="marquee-track">
            {/* Mocked Logos */}
            <div className="mock-logo">logoipsum</div>
            <div className="mock-logo">LOGOIPSUM</div>
            <div className="mock-logo">logoipsum</div>
            <div className="mock-logo">LOGOIPSUM</div>
            <div className="mock-logo">logoipsum</div>
            {/* Duplicated for seamless loop */}
            <div className="mock-logo">logoipsum</div>
            <div className="mock-logo">LOGOIPSUM</div>
            <div className="mock-logo">logoipsum</div>
            <div className="mock-logo">LOGOIPSUM</div>
            <div className="mock-logo">logoipsum</div>
          </div>
        </div>
      </div>
    </section>
  );
}

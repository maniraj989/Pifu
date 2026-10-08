import React from 'react';
import HeroProducts from './HeroProducts';
import HeroBenefits from './HeroBenefits';

/**
 * HeroSection Component
 * Recreates the exact visual composition, typography, and atmosphere
 * of the PIFU DERMOGUIDE campaign reference image, keeping the hero
 * campaign scene completely on the background.
 */
export default function HeroSection() {
  return (
    <section className="pifu-hero" id="home" aria-label="PIFU Skincare Campaign">
      {/* 
        Full Hero Background Layer:
        Spans completely edge-to-edge across the entire hero section
      */}
      <div className="pifu-hero__bg-wrap" aria-hidden="true">
        <picture>
          <source srcSet="/assets/hero-campaign-master.webp" type="image/webp" />
          <img
            src="/assets/hero-campaign-master.png"
            alt="PIFU Dermoguide skincare background with stone podium, water splash, real products, and radiant model"
            className="pifu-hero__bg-img"
            loading="eager"
          />
        </picture>
        {/* Soft luminous gradient overlay on text area */}
        <div className="pifu-hero__bg-overlay" />
      </div>

      <div className="pifu-hero__container">
        {/* Main Hero Stage */}
        <div className="pifu-hero__stage">
          {/* 1. Left Editorial Messaging & CTA */}
          <div className="pifu-hero__content">
            {/* Eyebrow text */}
            <p className="pifu-hero__eyebrow">
              SKINCARE FOR A BRIGHTER TOMORROW
            </p>

            {/* Main Headline */}
            <h1 className="pifu-hero__headline">
              <span className="pifu-hero__headline-dark">
                Healthy Skin,
                {/* Botanical leaf icon next to Skin */}
                <svg
                  className="pifu-hero__leaf-accent"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M19.5 3.5C12.5 3.5 6 8.5 6 15C6 18.5 8.8 21 12 21C18.5 21 21.5 13.5 21.5 3.5H19.5Z"
                    fill="#0062D2"
                  />
                  <path
                    d="M6 21C10.5 16.5 15 11.5 20.5 4"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="pifu-hero__headline-blue">Happier You!</span>
            </h1>

            {/* Subtitle Description */}
            <p className="pifu-hero__description">
              Skincare solutions crafted with care to cleanse, hydrate and protect your skin — for a naturally healthy and glowing you.
            </p>

            {/* CTA Button */}
            <div className="pifu-hero__cta-group">
              <a href="#products" className="pifu-btn pifu-btn--primary">
                <span>Explore Products</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="10" x2="16" y2="10" />
                  <polyline points="11 5 16 10 11 15" />
                </svg>
              </a>
            </div>

            {/* Dermatological Trust Badges right under CTA */}
            <div className="pifu-hero__trust-badges" aria-label="Dermatological Guarantees">
              {/* Badge 1: Dermatologically Recommended */}
              <div className="pifu-trust-badge">
                <div className="pifu-trust-badge__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0062D2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="12" y1="8" x2="12" y2="14" />
                    <line x1="9" y1="11" x2="15" y2="11" />
                  </svg>
                </div>
                <div className="pifu-trust-badge__text">
                  <span>Dermatologically</span>
                  <strong>Recommended</strong>
                </div>
              </div>

              {/* Badge 2: Gentle & Effective Formulations */}
              <div className="pifu-trust-badge">
                <div className="pifu-trust-badge__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0062D2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12c3-4 7-6 11-6 2 0 4 .5 6 1.5M2 12c3 4 7 6 11 6 2 0 4-.5 6-1.5" />
                    <path d="M12 2v20" />
                  </svg>
                </div>
                <div className="pifu-trust-badge__text">
                  <span>Gentle & Effective</span>
                  <strong>Formulations</strong>
                </div>
              </div>

              {/* Badge 3: Suitable for Daily Use */}
              <div className="pifu-trust-badge">
                <div className="pifu-trust-badge__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0062D2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 11 11 13 15 9" />
                  </svg>
                </div>
                <div className="pifu-trust-badge__text">
                  <span>Suitable for</span>
                  <strong>Daily Use</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Products Hotspot Layer & Routine Badge over the background scene */}
          <div className="pifu-hero__visual">
            <HeroProducts />
          </div>
        </div>

        {/* Bottom Horizontal Skin Ritual Strip */}
        <HeroBenefits />
      </div>
    </section>
  );
}

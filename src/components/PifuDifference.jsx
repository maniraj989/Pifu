import React from 'react';

/**
 * PifuDifference Component
 * The PIFU Difference section featuring:
 * 1. Brand editorial statement with custom droplets accent & CTA
 * 2. 4 Dermatological attribute highlight cards with vector iconography
 * 3. Radiant lifestyle model card with "Confident, Healthy, Naturally You" callout
 */
export default function PifuDifference() {
  const features = [
    {
      id: 'gentle',
      title: 'Gentle',
      subtitle: 'Formulations',
      icon: (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="14" stroke="#529b2b" strokeWidth="2.2" fill="none" />
          <path
            d="M13 23.5C14 18 18.5 13 24 12C24 18 19.5 22.5 13.5 24"
            stroke="#529b2b"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13 23.5L20.5 16" stroke="#529b2b" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 19.5L19 22" stroke="#529b2b" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'ingredients',
      title: 'Quality',
      subtitle: 'Ingredients',
      icon: (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <path d="M14 8H22" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" />
          <path
            d="M16 8V13.5L9.5 25.5C8.8 26.8 9.8 28.5 11.3 28.5H24.7C26.2 28.5 27.2 26.8 26.5 25.5L20 13.5V8"
            stroke="#1e293b"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="15.5" cy="24" r="1.3" fill="#1e293b" />
          <circle cx="21" cy="22" r="1.3" fill="#1e293b" />
          <circle cx="18.5" cy="25.5" r="1" fill="#1e293b" />
        </svg>
      ),
    },
    {
      id: 'daily',
      title: 'Daily',
      subtitle: 'Skincare Care',
      icon: (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <path
            d="M18 7C18 7 10 17.5 10 23.5C10 27.9 13.6 31.5 18 31.5C22.4 31.5 26 27.9 26 23.5C26 17.5 18 7 18 7Z"
            stroke="#1e293b"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 23.5C14.5 25.5 15.8 27.2 17.5 28"
            stroke="#1e293b"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'skin-types',
      title: 'For All',
      subtitle: 'Skin Types',
      icon: (
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <path
            d="M12 18.5C10.5 20.2 10.2 22 10.6 23.8C11.1 25.5 12.8 26.5 13.8 26.5C13.8 29.2 15.8 31 18 31C20.2 31 22.2 29.2 22.2 26.5C23.2 26.5 24.9 25.5 25.4 23.8C25.8 22 25.5 20.2 24 18.5"
            stroke="#1e293b"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 17C12 13.5 14.7 10.5 18 10.5C21.3 10.5 24 13.5 24 17"
            stroke="#1e293b"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="15.5" cy="20" r="1" fill="#1e293b" />
          <circle cx="20.5" cy="20" r="1" fill="#1e293b" />
          <path d="M17.2 24C17.7 24.5 18.3 24.5 18.8 24" stroke="#1e293b" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M9 18C9 13 13 8.5 18 8.5C23 8.5 27 13 27 18"
            stroke="#1e293b"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="1.5 3.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="pifu-difference-section" id="our-story" aria-label="The PIFU Difference">
      <div className="pifu-difference-section__container">
        <div className="pifu-difference-layout">
          {/* Left Column: Brand Statement & CTA */}
          <div className="pifu-difference__left">
            <h2 className="pifu-difference__title">
              <span className="pifu-diff-top-line">
                The{' '}
                <span className="pifu-diff-brand">
                  PIFU
                  {/* Brand signature 3 drops accent */}
                  <span className="pifu-diff-drops" aria-hidden="true">
                    <svg width="24" height="9" viewBox="0 0 24 9" fill="none">
                      <path d="M4 8C4 8 2 5 2 3.2C2 1.8 2.8 0.6 4 0.6C5.2 0.6 6 1.8 6 3.2C6 5 4 8 4 8Z" fill="#0062D2" />
                      <path d="M11 8C11 8 9 5 9 3.2C9 1.8 9.8 0.6 11 0.6C12.2 0.6 13 1.8 13 3.2C13 5 11 8 11 8Z" fill="#0062D2" />
                      <path d="M18 8C18 8 16 5 16 3.2C16 1.8 16.8 0.6 18 0.6C19.2 0.6 20 1.8 20 3.2C20 5 18 8 18 8Z" fill="#0062D2" />
                    </svg>
                  </span>
                </span>
              </span>
              <span className="pifu-diff-bottom-line">Difference</span>
            </h2>

            <p className="pifu-difference__desc">
              We bring you carefully formulated skincare solutions with quality ingredients to help you achieve healthier, happier skin every day.
            </p>

            <a href="#story" className="pifu-difference__cta-btn">
              <span>Our Story</span>
              <svg
                width="15"
                height="15"
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

          {/* Middle Column: 4 Clean Attribute Cards */}
          <div className="pifu-difference__features">
            {features.map((item) => (
              <div key={item.id} className="pifu-diff-feature-card">
                <div className="pifu-diff-feature-card__icon">{item.icon}</div>
                <div className="pifu-diff-feature-card__text">
                  <span className="pifu-diff-feature-card__line">{item.title}</span>
                  <span className="pifu-diff-feature-card__line">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Model Photographic Card */}
          <div className="pifu-difference__model-wrap">
            <div className="pifu-difference__model-card">
              <img
                src="/assets/difference-model-clean.png"
                alt="Confident, Healthy, Naturally You — PIFU Skincare"
                className="pifu-difference__model-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

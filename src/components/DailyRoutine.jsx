import React from 'react';

/**
 * DailyRoutine Component
 * Your Daily Skincare Routine section featuring:
 * 1. Editorial messaging & "Explore Routine" CTA button
 * 2. 3 Skincare Steps with full authentic product packaging & textures:
 *    - Step 01: CLEANSE (Instant Glow Face Wash)
 *    - Step 02: HYDRATE (Intensive Moisturizing Cream)
 *    - Step 03: BALANCE (Oil-Free Moisturizing Lotion)
 * 3. Directional connector arrows between routine steps
 * 4. Framing botanical foliage accents on left & right
 */
export default function DailyRoutine() {
  const steps = [
    {
      number: '01',
      title: 'CLEANSE',
      image: '/assets/step1-clean.png',
      alt: 'Step 01 CLEANSE with PIFU Instant Glow Face Wash',
      desc: 'Remove impurities and refresh your skin.',
    },
    {
      number: '02',
      title: 'HYDRATE',
      image: '/assets/step2-clean.png',
      alt: 'Step 02 HYDRATE with PIFU Intensive Moisturizing Cream',
      desc: 'Deeply nourish and keep your skin soft.',
    },
    {
      number: '03',
      title: 'BALANCE',
      image: '/assets/step3-clean.png',
      alt: 'Step 03 BALANCE with PIFU Oil-Free Moisturizing Lotion',
      desc: 'Lightweight hydration for a healthy, shine-free glow.',
    },
  ];

  return (
    <section className="pifu-routine-section" id="skin-guide" aria-label="Your Daily Skincare Routine">
      {/* Decorative leaf overlays framing both flanks */}
      <img
        src="/assets/routine-leaves-left.png"
        alt=""
        className="pifu-routine-leaf pifu-routine-leaf--left"
        aria-hidden="true"
      />
      <img
        src="/assets/routine-leaves-right.png"
        alt=""
        className="pifu-routine-leaf pifu-routine-leaf--right"
        aria-hidden="true"
      />

      <div className="pifu-routine-section__container">
        <div className="pifu-routine-layout">
          {/* Left Column: Heading & CTA */}
          <div className="pifu-routine__left">
            <h2 className="pifu-routine__title">
              <span className="pifu-routine__title-line">Your</span>
              <span className="pifu-routine__title-line">Daily Skincare</span>
              <span className="pifu-routine__title-accent">Routine</span>
            </h2>

            <p className="pifu-routine__desc">
              3 simple steps for healthy, clean and glowing skin.
            </p>

            <a href="#explore-routine" className="pifu-routine__cta-btn">
              <span>Explore Routine</span>
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

          {/* Right Column: 3 Connected Steps */}
          <div className="pifu-routine__steps-wrap">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="pifu-routine-step-item">
                  <div className="pifu-routine-step-card">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="pifu-routine-step-card__img"
                      loading="lazy"
                    />
                  </div>
                  <p className="pifu-routine-step-item__desc">{step.desc}</p>
                </div>

                {/* Circular connector arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="pifu-routine-arrow-connector" aria-hidden="true">
                    <span className="pifu-routine-arrow-circle">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

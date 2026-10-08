import React from 'react';

/**
 * HeroBenefits Component
 * Editorial bottom horizontal skin ritual & benefits strip matching reference image.
 */
export default function HeroBenefits() {
  const benefits = [
    {
      id: 'cleanse',
      step: '01',
      title: 'Cleanse',
      desc: 'Remove impurities for a fresh start',
      icon: '/assets/cleanse-icon-hd.png',
      alt: 'Cleanse texture swatch',
    },
    {
      id: 'hydrate',
      step: '02',
      title: 'Hydrate',
      desc: 'Deep nourishment for soft, smooth skin',
      icon: '/assets/hydrate-icon-hd.png',
      alt: 'Hydrate cream texture swatch',
    },
    {
      id: 'balance',
      step: '03',
      title: 'Balance',
      desc: 'Lightweight care for a healthy glow',
      icon: '/assets/balance-icon-hd.png',
      alt: 'Balance aloe gel texture swatch',
    },
  ];

  return (
    <section className="pifu-benefits-strip" aria-label="Daily Skin Ritual Benefits">
      <div className="pifu-benefits-strip__container">
        <div className="pifu-benefits-strip__grid">
          {benefits.map((item, index) => (
            <div key={item.id} className="pifu-benefit-card">
              <div className="pifu-benefit-card__icon-wrapper">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="pifu-benefit-card__icon"
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </div>
              <div className="pifu-benefit-card__text">
                <h3 className="pifu-benefit-card__title">{item.title}</h3>
                <p className="pifu-benefit-card__desc">{item.desc}</p>
              </div>
              {index < benefits.length && <div className="pifu-benefit-card__divider" />}
            </div>
          ))}

          {/* Right Action Callout */}
          <div className="pifu-benefit-callout">
            <div className="pifu-benefit-callout__text">
              <span className="pifu-benefit-callout__sub">Your Daily</span>
              <span className="pifu-benefit-callout__title">
                Skin Ritual <span className="pifu-benefit-callout__brand">with PIFU</span>
              </span>
            </div>
            <a
              href="#skin-guide"
              className="pifu-benefit-callout__btn"
              aria-label="Explore Your Daily Skin Ritual with PIFU"
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11 5 16 10 11 15" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

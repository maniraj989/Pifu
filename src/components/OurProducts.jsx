import React, { useState } from 'react';

/**
 * OurProducts Component
 * Displays the 3 signature PIFU dermatological product cards:
 * 1. Intensive Moisturizing Cream (Blue)
 * 2. Instant Glow Face Wash (Purple)
 * 3. Oil-Free Moisturizing Lotion (Green)
 * 
 * Recreates the exact typography, layout, buttons, colors, and packshots
 * from the design reference image.
 */
export default function OurProducts() {
  const [carouselOffset, setCarouselOffset] = useState(0);

  const products = [
    {
      id: 'intensive-cream',
      title: 'Intensive Moisturizing Cream',
      subtitle: 'Deep hydration for soft, smooth and healthy skin.',
      visual: '/assets/prod1-stage-clean.png',
      alt: 'PIFU Intensive Moisturizing Cream with fresh water splash and rich cream swirl',
      color: '#0062D2',
      bgGradient: 'linear-gradient(135deg, #dcf0fb 0%, #ebf5fe 45%, #f6faff 100%)',
      borderColor: 'rgba(0, 98, 210, 0.16)',
      btnBg: '#0062D2',
      btnHover: '#004fb0',
      bullets: [
        'Long-lasting moisture',
        'Strengthens skin barrier',
        'Soothes dryness & irritation',
      ],
    },
    {
      id: 'instant-glow',
      title: 'Instant Glow Face Wash',
      subtitle: 'Gentle cleansing with Glutathione & Vitamin-C.',
      visual: '/assets/prod2-stage-clean.png',
      alt: 'PIFU Instant Glow Face Wash with soft cleansing foam cloud',
      color: '#6b21a8',
      bgGradient: 'linear-gradient(135deg, #f3e6fb 0%, #f7effd 45%, #fdfaff 100%)',
      borderColor: 'rgba(107, 33, 168, 0.16)',
      btnBg: '#6b21a8',
      btnHover: '#581c87',
      bullets: [
        'Brightens skin',
        'Helps reduce dark spots',
        'Leaves skin fresh & clean',
      ],
    },
    {
      id: 'oil-free-lotion',
      title: 'Oil-Free Moisturizing Lotion',
      subtitle: 'Lightweight hydration without the greasy feel.',
      visual: '/assets/prod3-stage-clean.png',
      alt: 'PIFU Oil-Free Moisturizing Lotion with natural green botanical leaves',
      color: '#65a30d',
      bgGradient: 'linear-gradient(135deg, #eaf5de 0%, #f2faec 45%, #f9fdf7 100%)',
      borderColor: 'rgba(101, 163, 13, 0.16)',
      btnBg: '#65a30d',
      btnHover: '#4d7c0f',
      bullets: [
        'Controls excess oil',
        'Keeps skin soft & smooth',
        'Enriched with natural extracts',
      ],
    },
  ];

  const handlePrev = () => {
    setCarouselOffset((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  const handleNext = () => {
    setCarouselOffset((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="pifu-our-products" id="products" aria-label="PIFU Products Showcase">
      <div className="pifu-our-products__container">
        {/* Section Header */}
        <div className="pifu-our-products__header">
          <div className="pifu-our-products__header-left">
            <h2 className="pifu-our-products__title">
              Our <span className="pifu-our-products__title-accent">Products</span>
            </h2>
            <p className="pifu-our-products__subtitle">
              Discover our skincare solutions designed to care for your unique skin needs.
            </p>
          </div>

          {/* Top Right Navigation Controls */}
          <div className="pifu-our-products__actions">
            <button
              type="button"
              className="pifu-nav-arrow"
              onClick={handlePrev}
              aria-label="Previous product"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <button
              type="button"
              className="pifu-nav-arrow"
              onClick={handleNext}
              aria-label="Next product"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <a href="#all-products" className="pifu-view-all-btn">
              <span>View All Products</span>
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
        </div>

        {/* 3 Product Cards Grid */}
        <div className="pifu-our-products__grid">
          {products.map((item, index) => {
            return (
              <article
                key={item.id}
                className={`pifu-product-card ${carouselOffset === index ? 'pifu-product-card--active' : ''}`}
                style={{
                  background: item.bgGradient,
                  borderColor: item.borderColor,
                }}
              >
                {/* Left Side: Product packshot visual stage */}
                <div className="pifu-product-card__visual-wrap">
                  <img
                    src={item.visual}
                    alt={item.alt}
                    className="pifu-product-card__visual-img"
                    loading="lazy"
                  />
                </div>

                {/* Right Side: Product specifications & CTA */}
                <div className="pifu-product-card__content">
                  <div className="pifu-product-card__info">
                    <h3 className="pifu-product-card__title">{item.title}</h3>
                    <p className="pifu-product-card__desc">{item.subtitle}</p>

                    {/* Benefit Checkpoints */}
                    <ul className="pifu-product-card__bullets">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pifu-product-card__bullet-item">
                          <span
                            className="pifu-product-card__bullet-icon"
                            style={{
                              color: item.color,
                              backgroundColor: `${item.color}18`,
                              borderColor: item.color,
                            }}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="3 8.5 6.5 12 13 4.5" />
                            </svg>
                          </span>
                          <span className="pifu-product-card__bullet-text">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Product Action Button */}
                  <div className="pifu-product-card__action">
                    <a
                      href={`#${item.id}`}
                      className="pifu-product-card__btn"
                      style={{
                        backgroundColor: item.btnBg,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = item.btnHover)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = item.btnBg)}
                    >
                      <span>View Product</span>
                      <svg
                        width="14"
                        height="14"
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

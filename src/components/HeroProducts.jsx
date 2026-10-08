import React, { useState } from 'react';

/**
 * HeroProducts Component
 * Features interactive product hotspots over the stone podium in the background scene,
 * accurate real product packshots, rich dermatological formulation tooltips,
 * the signature circular routine badge, and a responsive mobile product showcase.
 */
export default function HeroProducts() {
  const [activeProduct, setActiveProduct] = useState(null);

  const products = [
    {
      id: 'intensive',
      step: 'HYDRATE',
      name: 'PIFU Intensive Moisturizing Cream',
      shortName: 'Intensive Cream',
      size: '75g',
      benefit: 'Supports Epidermal Barrier Repair',
      ingredients: 'Shea, Mango, Cocoa & Aloe Butter, Zinc Oxide',
      color: '#0062D2',
      image: '/assets/real-product-intensive.png',
      // Coordinates matching stone podium in desktop background
      left: '18%',
      top: '56%',
      width: '18%',
    },
    {
      id: 'facewash',
      step: 'CLEANSE',
      name: 'PIFU Instant Glow Face Wash',
      shortName: 'Instant Glow Face Wash',
      size: '100ml',
      benefit: 'Antioxidant Radiance & Deep Cleanse',
      ingredients: 'Enriched with Glutathione & Vitamin-C',
      color: '#6b21a8',
      image: '/assets/real-product-facewash.png',
      left: '46%',
      top: '52%',
      width: '18%',
    },
    {
      id: 'lotion',
      step: 'BALANCE',
      name: 'PIFU Oil-Free Moisturizing Lotion',
      shortName: 'Oil-Free Lotion',
      size: '100ml',
      benefit: 'Non-Greasy Balance for Sensitive Skin',
      ingredients: 'Enriched with Squalene, Aloevera & Vitamin-E',
      color: '#65a30d',
      image: '/assets/real-product-lotion.png',
      left: '73%',
      top: '57%',
      width: '18%',
    },
  ];

  return (
    <div className="pifu-hero-products" aria-label="PIFU Real Products Interactive Showcase">
      {/* 
        Desktop Interactive Layer:
        Hotspots aligned over the three real products on the podium
      */}
      <div className="pifu-hero-desktop-stage" aria-hidden="true">
        <div className="pifu-products-interactive-layer">
          {products.map((p) => {
            const isHovered = activeProduct === p.id;
            return (
              <div
                key={p.id}
                className={`pifu-product-hotspot ${isHovered ? 'pifu-product-hotspot--hovered' : ''}`}
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.width,
                }}
                onMouseEnter={() => setActiveProduct(p.id)}
                onMouseLeave={() => setActiveProduct(null)}
                tabIndex="0"
                role="button"
                aria-label={p.name}
                onFocus={() => setActiveProduct(p.id)}
                onBlur={() => setActiveProduct(null)}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className={`pifu-product-cutout ${isHovered ? 'pifu-product-cutout--active' : ''}`}
                />

                {/* Rich Real Formulation Tooltip */}
                <div className={`pifu-product-tooltip ${isHovered ? 'pifu-product-tooltip--visible' : ''}`}>
                  <span className="pifu-product-tooltip__dot" style={{ backgroundColor: p.color }} />
                  <div className="pifu-product-tooltip__content">
                    <div className="pifu-product-tooltip__step-tag" style={{ color: p.color }}>
                      STEP: {p.step}
                    </div>
                    <strong className="pifu-product-tooltip__title">{p.shortName}</strong>
                    <div className="pifu-product-tooltip__meta">{p.size} • {p.benefit}</div>
                    <div className="pifu-product-tooltip__ingredients">{p.ingredients}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lower Right Circular Routine Indicator Badge */}
        <div className="pifu-routine-badge" aria-label="Daily Routine: Cleanse, Hydrate, Balance">
          <div className="pifu-routine-badge__circle">
            <span className="pifu-routine-badge__step">CLEANSE</span>
            <span className="pifu-routine-badge__step">HYDRATE</span>
            <span className="pifu-routine-badge__step">BALANCE</span>
          </div>
          {/* Botanical leaf attached to right rim */}
          <div className="pifu-routine-badge__leaf" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 3C10 3 4 8 4 15C4 18.5 7 21 10.5 21C17.5 21 21 13 21 3H17Z"
                fill="#48BB78"
                stroke="#2F855A"
                strokeWidth="1.2"
              />
              <path
                d="M4 21C9 16 14 11 20 5"
                stroke="#2F855A"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 
        Mobile Real Products Showcase:
        Renders the 3 authentic bottles clearly on small viewports
      */}
      <div className="pifu-hero-mobile-products">
        <div className="pifu-mobile-products-grid">
          {products.map((p) => (
            <div key={p.id} className="pifu-mobile-product-card">
              <div className="pifu-mobile-product-card__tag" style={{ color: p.color, borderColor: `${p.color}30` }}>
                {p.step}
              </div>
              <div className="pifu-mobile-product-card__img-wrap">
                <img src={p.image} alt={p.name} className="pifu-mobile-product-card__img" />
              </div>
              <div className="pifu-mobile-product-card__info">
                <span className="pifu-mobile-product-card__name">{p.shortName}</span>
                <span className="pifu-mobile-product-card__size">{p.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

/**
 * KeyIngredients Component
 * Displays the 5 signature active dermatological ingredients in PIFU formulations:
 * 1. Glutathione
 * 2. Vitamin C
 * 3. Aloe Vera
 * 4. Shea Butter
 * 5. Zinc Oxide
 */
export default function KeyIngredients() {
  const ingredients = [
    {
      id: 'glutathione',
      name: 'Glutathione',
      desc: 'Helps brighten skin tone',
      image: '/assets/ingredient-glutathione.png',
      alt: 'Glutathione dewy water spheres',
    },
    {
      id: 'vitaminc',
      name: 'Vitamin C',
      desc: 'Supports a more radiant complexion',
      image: '/assets/ingredient-vitaminc.png',
      alt: 'Fresh Vitamin C citrus slice',
    },
    {
      id: 'aloevera',
      name: 'Aloe Vera',
      desc: 'Soothes and hydrates the skin',
      image: '/assets/ingredient-aloevera.png',
      alt: 'Succulent fresh Aloe Vera leaf slices',
    },
    {
      id: 'sheabutter',
      name: 'Shea Butter',
      desc: 'Deep nourishment and moisture',
      image: '/assets/ingredient-sheabutter.png',
      alt: 'Rich pure Shea Butter with nuts',
    },
    {
      id: 'zincoxide',
      name: 'Zinc Oxide',
      desc: 'Helps protect and soothe the skin',
      image: '/assets/ingredient-zincoxide.png',
      alt: 'Gentle mineral Zinc Oxide powder',
    },
  ];

  return (
    <section className="pifu-ingredients-section" id="ingredients" aria-label="Key Ingredients">
      <div className="pifu-ingredients-section__container">
        {/* Section Header */}
        <div className="pifu-ingredients-header">
          <div className="pifu-ingredients-header__left">
            <h2 className="pifu-ingredients-title">
              Key <span className="pifu-ingredients-title__accent">Ingredients</span>
            </h2>
            <p className="pifu-ingredients-subtitle">
              Thoughtfully selected ingredients to care, protect and nourish your skin.
            </p>
          </div>

          {/* Learn More Action Button */}
          <div className="pifu-ingredients-header__right">
            <a href="#learn-more" className="pifu-ingredients-learn-btn">
              <span>Learn More</span>
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

        {/* 5 Ingredient Cards Grid */}
        <div className="pifu-ingredients-grid">
          {ingredients.map((item) => (
            <div key={item.id} className="pifu-ingredient-card">
              <div className="pifu-ingredient-card__img-wrap">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="pifu-ingredient-card__img"
                  loading="lazy"
                />
              </div>
              <div className="pifu-ingredient-card__content">
                <h3 className="pifu-ingredient-card__title">{item.name}</h3>
                <p className="pifu-ingredient-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

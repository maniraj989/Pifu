import React, { useState } from 'react';

/**
 * Newsletter Component
 * "Stay Updated with PIFU" subscription banner featuring:
 * 1. Decorative botanical foliage framing the left & right borders
 * 2. Editorial headline with royal blue PIFU branding
 * 3. Pill-shaped email subscription form with inline button
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="pifu-newsletter-banner" aria-label="Stay Updated with PIFU">
      {/* Decorative leaf branch accents on both flanks */}
      <img
        src="/assets/newsletter-leaves-left.png"
        alt=""
        className="pifu-newsletter__leaf pifu-newsletter__leaf--left"
        aria-hidden="true"
      />
      <img
        src="/assets/newsletter-leaves-right.png"
        alt=""
        className="pifu-newsletter__leaf pifu-newsletter__leaf--right"
        aria-hidden="true"
      />

      <div className="pifu-newsletter__container">
        {/* Left Side: Headline & Copy */}
        <div className="pifu-newsletter__text">
          <h2 className="pifu-newsletter__title">
            Stay Updated with{' '}
            <span className="pifu-newsletter__title-blue">PIFU</span>
          </h2>
          <p className="pifu-newsletter__subtitle">
            Get skincare tips, new product updates and exclusive offers.
          </p>
        </div>

        {/* Right Side: Pill Subscription Form */}
        <form className="pifu-newsletter__form" onSubmit={handleSubmit}>
          <div className="pifu-newsletter__input-wrap">
            <input
              type="email"
              className="pifu-newsletter__input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for skincare updates"
            />
            <button
              type="submit"
              className="pifu-newsletter__submit-btn"
              aria-label="Subscribe to newsletter"
            >
              <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11 5 16 10 11 15" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

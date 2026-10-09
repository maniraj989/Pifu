import React from 'react';
import Logo from './Logo';

/**
 * Footer Component
 * Complete official PIFU DERMOGUIDE footer matching the design reference:
 * - Brand mission statement & 4 circular social links
 * - Quick Links navigation
 * - Our Products list
 * - Help & Support
 * - Contact Us details with icons (Phone, Email, Nepal Address)
 * - Bottom legal copyright bar & smooth scroll-to-top button
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Skin Guide', href: '#routine' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const productLinks = [
    { name: 'Intensive Moisturizing Cream', href: '#intensive-cream' },
    { name: 'Instant Glow Face Wash', href: '#instant-glow' },
    { name: 'Oil-Free Moisturizing Lotion', href: '#oil-free-lotion' },
    { name: 'All Products', href: '#products' },
  ];

  const supportLinks = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Shipping & Delivery', href: '#shipping' },
    { name: 'Returns & Refunds', href: '#returns' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
  ];

  return (
    <footer className="pifu-footer" id="contact" aria-label="PIFU Footer">
      <div className="pifu-footer__container">
        {/* Main 5-Column Grid */}
        <div className="pifu-footer__grid">
          {/* Column 1: Brand & Socials */}
          <div className="pifu-footer__col pifu-footer__col--brand">
            <a href="#home" className="pifu-footer__logo-link" aria-label="PIFU DERMOGUIDE Home">
              <Logo height={52} />
            </a>

            <p className="pifu-footer__brand-desc">
              Skincare solutions crafted with care to clean, protect and nourish your skin. Healthy skin for a brighter tomorrow.
            </p>

            <div className="pifu-footer__socials" aria-label="Social media channels">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="pifu-footer__social-btn" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="pifu-footer__social-btn" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="pifu-footer__social-btn" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="pifu-footer__social-btn" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.48 6.28 6.28 0 0 0 1.86-4.47V8.78a8.28 8.28 0 0 0 5.09 1.75V7.07a4.83 4.83 0 0 1-1.18-.38z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="pifu-footer__col">
            <h3 className="pifu-footer__col-title">Quick Links</h3>
            <ul className="pifu-footer__list">
              {quickLinks.map((item) => (
                <li key={item.name} className="pifu-footer__item">
                  <a href={item.href} className="pifu-footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="pifu-footer__col">
            <h3 className="pifu-footer__col-title">Our Products</h3>
            <ul className="pifu-footer__list">
              {productLinks.map((item) => (
                <li key={item.name} className="pifu-footer__item">
                  <a href={item.href} className="pifu-footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Help & Support */}
          <div className="pifu-footer__col">
            <h3 className="pifu-footer__col-title">Help & Support</h3>
            <ul className="pifu-footer__list">
              {supportLinks.map((item) => (
                <li key={item.name} className="pifu-footer__item">
                  <a href={item.href} className="pifu-footer__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="pifu-footer__col pifu-footer__col--contact">
            <h3 className="pifu-footer__col-title">Contact Us</h3>
            <div className="pifu-footer__contacts">
              {/* Phone */}
              <div className="pifu-footer__contact-item">
                <span className="pifu-footer__contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15.05 13.05a4 4 0 0 1-5.1-5.1L11 7a.5.5 0 0 0-.2-.6L9.4 5.2a.5.5 0 0 0-.6 0l-.8.8a2.5 2.5 0 0 0-.5 2.6 9.8 9.8 0 0 0 4.9 4.9 2.5 2.5 0 0 0 2.6-.5l.8-.8a.5.5 0 0 0 0-.6l-1.2-1.4a.5.5 0 0 0-.6-.2l-1.05 1.05z" />
                  </svg>
                </span>
                <a href="tel:+9779817527616" className="pifu-footer__contact-link">
                  +977 981-7527616
                </a>
              </div>

              {/* Email */}
              <div className="pifu-footer__contact-item">
                <span className="pifu-footer__contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </span>
                <a href="mailto:surajinfoworldnepal@gmail.com" className="pifu-footer__contact-link">
                  surajinfoworldnepal@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="pifu-footer__contact-item">
                <span className="pifu-footer__contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <address className="pifu-footer__contact-address">
                  Janakpur-02, Janakpur,<br />
                  Nepal, 45600
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pifu-footer__bottom">
          <p className="pifu-footer__copyright">
            © 2024 PIFU Dermoguide Nepal. All Rights Reserved.
          </p>

          <div className="pifu-footer__legal-links">
            <a href="#privacy" className="pifu-footer__legal-link">Privacy Policy</a>
            <span className="pifu-footer__legal-divider">|</span>
            <a href="#terms" className="pifu-footer__legal-link">Terms & Conditions</a>
          </div>

          {/* Floating Back to Top Button */}
          <button
            type="button"
            className="pifu-footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

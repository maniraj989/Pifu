import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Our Story', href: '#our-story', id: 'our-story' },
    { name: 'Skin Guide', href: '#skin-guide', id: 'skin-guide' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Handle sticky scrolled class and dynamic scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled state for sticky header backdrop styling
      if (window.scrollY > 8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active section spy
      const headerEl = document.querySelector('.pifu-header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 72;
      const scrollPos = window.scrollY + headerHeight + 50;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            setActiveNav(item.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for all header links
  const handleNavClick = (e, href, name) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setActiveNav(name);
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (targetId === 'home') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else {
          const headerEl = document.querySelector('.pifu-header');
          const headerHeight = headerEl ? headerEl.offsetHeight : 72;
          const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth',
          });
        }

        // Update URL hash without causing an instant page jump
        if (window.history.pushState) {
          window.history.pushState(null, '', href);
        }
      }
    }
  };

  return (
    <header className={`pifu-header ${isScrolled ? 'pifu-header--scrolled' : ''}`}>
      <div className="pifu-header__container">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          className="pifu-header__logo-link"
          aria-label="PIFU DERMOGUIDE Home"
          onClick={(e) => handleNavClick(e, '#home', 'Home')}
        >
          <Logo height={42} />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="pifu-header__nav" aria-label="Main Navigation">
          <ul className="pifu-header__nav-list">
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <li key={item.name} className="pifu-header__nav-item">
                  <a
                    href={item.href}
                    className={`pifu-header__nav-link ${isActive ? 'pifu-header__nav-link--active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href, item.name)}
                  >
                    {item.name}
                    {isActive && <span className="pifu-header__active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Desktop: Actions (Search + Shop Now) */}
        <div className="pifu-header__actions">
          <button
            type="button"
            className="pifu-header__search-btn"
            aria-label="Search skincare products"
            onClick={() => alert('Search functionality will be available soon.')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <a
            href="#products"
            className="pifu-header__cta-btn"
            onClick={(e) => handleNavClick(e, '#products', 'Products')}
          >
            <span>Shop Now</span>
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="10" x2="16" y2="10" />
              <polyline points="11 5 16 10 11 15" />
            </svg>
          </a>
        </div>

        {/* Right Mobile: Direct Hamburger Button */}
        <button
          type="button"
          className="pifu-header__mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`pifu-mobile-drawer ${mobileMenuOpen ? 'pifu-mobile-drawer--open' : ''}`}>
        <div className="pifu-mobile-drawer__backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="pifu-mobile-drawer__content">
          <div className="pifu-mobile-drawer__header">
            <Logo height={34} />
            <button
              type="button"
              className="pifu-mobile-drawer__close"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="pifu-mobile-drawer__nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={activeNav === item.name ? 'active' : ''}
                    onClick={(e) => handleNavClick(e, item.href, item.name)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="pifu-mobile-drawer__footer">
            <a
              href="#products"
              className="pifu-header__cta-btn pifu-header__cta-btn--full"
              onClick={(e) => handleNavClick(e, '#products', 'Products')}
            >
              <span>Shop Now</span>
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11 5 16 10 11 15" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

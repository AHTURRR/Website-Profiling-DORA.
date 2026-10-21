import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import type { ProductInfo } from '../../../types/product.types';
import './Navbar.css';

interface NavbarProps {
  product: ProductInfo;
  latestVersion: string;
}

export const Navbar = ({ product, latestVersion }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  // While the mobile drawer is open: lock page scroll, close on Escape,
  // and close automatically when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia('(min-width: 901px)');
    const handleViewportChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleViewportChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleViewportChange);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand" onClick={closeMenu} aria-label={`${product.name} beranda`}>
          <div className="navbar-logo-icon">
            <img src="/brand/about-brand-mark.png" alt="DORA Logo" className="navbar-logo-img" onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }} />
          </div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">{product.name}</span>
            <span className="navbar-brand-version badge badge-mono">{latestVersion}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-desktop" aria-label="Navigasi Utama">
          <ul className="navbar-nav-list">
            <li>
              <a href="#features" className="navbar-link">
                Fitur
              </a>
            </li>
            <li>
              <a href="#preview" className="navbar-link">
                Pratinjau
              </a>
            </li>
            <li>
              <a href="#downloads" className="navbar-link">
                Download
              </a>
            </li>
            <li>
              <a href="#requirements" className="navbar-link">
                Spesifikasi
              </a>
            </li>
            <li>
              <a href="#installation" className="navbar-link">
                Instalasi
              </a>
            </li>
            <li>
              <a href="#faq" className="navbar-link">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA & Actions */}
        <div className="navbar-actions">
          <a href="#downloads" className="navbar-cta-btn" id="navbar-download-cta">
            <Download size={16} />
            <span>Download</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            ref={toggleRef}
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            id="mobile-nav-toggle-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer" id="mobile-nav-menu">
          <nav aria-label="Navigasi Seluler">
            <ul className="mobile-nav-list">
              <li>
                <a href="#features" className="mobile-nav-link" onClick={closeMenu}>
                  Fitur Unggulan
                </a>
              </li>
              <li>
                <a href="#preview" className="mobile-nav-link" onClick={closeMenu}>
                  Pratinjau Aplikasi
                </a>
              </li>
              <li>
                <a href="#downloads" className="mobile-nav-link" onClick={closeMenu}>
                  Pusat Unduhan
                </a>
              </li>
              <li>
                <a href="#requirements" className="mobile-nav-link" onClick={closeMenu}>
                  Persyaratan Sistem
                </a>
              </li>
              <li>
                <a href="#installation" className="mobile-nav-link" onClick={closeMenu}>
                  Panduan Instalasi
                </a>
              </li>
              <li>
                <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
            <div className="mobile-drawer-footer">
              <a href="#downloads" className="navbar-cta-btn mobile-cta-btn" onClick={closeMenu}>
                <Download size={18} />
                <span>Download Installer Resmi</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

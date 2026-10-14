import { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import type { ProductInfo } from '../../../types/product.types';
import './Navbar.css';

interface NavbarProps {
  product: ProductInfo;
  latestVersion: string;
}

export const Navbar = ({ product, latestVersion }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

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
              <a href="#ui-redesign-showcase" className="navbar-link navbar-link-highlight">
                Redesign UI/UX
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
          {product.links.repository && (
            <a
              href={product.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-icon-link"
              title="GitHub Repository"
              aria-label="Kunjungi repositori GitHub resmi"
            >
              <ExternalLink size={18} />
            </a>
          )}
          <a href="#downloads" className="navbar-cta-btn" id="navbar-download-cta">
            <Download size={16} />
            <span>Download</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
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
                <a href="#ui-redesign-showcase" className="mobile-nav-link text-cyan-accent" onClick={closeMenu}>
                  🎨 Redesign UI/UX (Before & After)
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

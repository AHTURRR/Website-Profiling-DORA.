import { Shield } from 'lucide-react';
import type { ProductInfo } from '../../../types/product.types';
import './Footer.css';

interface FooterProps {
  product: ProductInfo;
  latestVersion: string;
}

export const Footer = ({ product, latestVersion }: FooterProps) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-icon">
                <img src="/brand/about-brand-mark.png" alt="DORA Logo" className="footer-logo-img" onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }} />
              </div>
              <span className="footer-brand-name">{product.name}</span>
              <span className="badge badge-mono">{latestVersion}</span>
            </div>
            <p className="footer-brand-desc">{product.tagline}</p>
            <div className="footer-license-badge">
              <Shield size={14} />
              <span>{product.license.name}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigasi Produk</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#hero">Beranda</a>
              </li>
              <li>
                <a href="#features">Fitur Utama</a>
              </li>
              <li>
                <a href="#preview">Pratinjau Antarmuka</a>
              </li>
              <li>
                <a href="#downloads">Pusat Unduhan</a>
              </li>
            </ul>
          </div>

          {/* System & Guides */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Dokumentasi & Bantuan</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#requirements">Persyaratan Sistem</a>
              </li>
              <li>
                <a href="#installation">Panduan Instalasi</a>
              </li>
              <li>
                <a href="#faq">Pertanyaan Umum (FAQ)</a>
              </li>
              {product.links.documentation && (
                <li>
                  <a href={product.links.documentation} target="_blank" rel="noopener noreferrer">
                    Dokumentasi Teknis
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Repositories & Legal */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Komunitas & Legal</h4>
            <ul className="footer-nav-list">
              {product.links.repository && (
                <li>
                  <a href={product.links.repository} target="_blank" rel="noopener noreferrer">
                    Repositori GitHub
                  </a>
                </li>
              )}
              {product.links.issues && (
                <li>
                  <a href={product.links.issues} target="_blank" rel="noopener noreferrer">
                    Pelacak Masalah (Issue Tracker)
                  </a>
                </li>
              )}
              <li>
                <a href="#faq">Kebijakan Privasi & Pemrosesan Data</a>
              </li>
              {product.license.url && (
                <li>
                  <a href={product.license.url} target="_blank" rel="noopener noreferrer">
                    Ketentuan Lisensi MIT
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {product.developer.copyrightYear} {product.developer.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="footer-meta-right">
            <span>DORA (Data Overview & Research Assistant) — Official Desktop Software & Research Center</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

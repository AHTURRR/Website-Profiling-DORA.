import React, { useState } from 'react';
import { Download, ShieldCheck, Cpu, BookOpen, CheckCircle2, Globe, ShieldAlert } from 'lucide-react';
import type { ProductInfo, ReleasePackage, SupportedOS } from '../../../types/product.types';
import { WindowsDefenderGuideModal } from '../../modals/WindowsDefenderGuideModal';
import './Hero.css';

interface HeroProps {
  product: ProductInfo;
  detectedOS?: { os: SupportedOS; displayName: string; defaultArch: string };
  recommendedRelease?: ReleasePackage;
}

export const Hero: React.FC<HeroProps> = ({ product, recommendedRelease }) => {
  const [isDefenderModalOpen, setIsDefenderModalOpen] = useState(false);
  const currentVersion = recommendedRelease ? recommendedRelease.version : 'v6.0.0';

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-release-badge">
            <span className="hero-release-tag">Rilis Resmi {currentVersion}</span>
            <span className="hero-release-sep">•</span>
            <span className="hero-release-publisher">{product.name} ({product.developer.name})</span>
          </div>

          <h1 className="hero-title">
            Eksplorasi Dataset, Visual <span className="hero-title-gradient">ML Node Editor</span> & Riset Literatur
          </h1>

          <p className="hero-description">
            Aplikasi desktop native PySide6 ({currentVersion}) untuk analisis dataset lokal, penyusunan pipeline Machine Learning berbasis Node Editor & Notebook PyPI, serta riset literatur terindeks SINTA dan Scopus.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            {recommendedRelease ? (
              <a
                href={recommendedRelease.downloadUrl}
                className="hero-btn-primary"
                id="hero-primary-download-btn"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <div className="hero-btn-icon">
                  <Download size={20} />
                </div>
                <div className="hero-btn-text">
                  <span className="hero-btn-action">Download Installer Windows</span>
                  <span className="hero-btn-meta">
                    {recommendedRelease.version} • {recommendedRelease.architecture} • {recommendedRelease.fileSize}
                  </span>
                </div>
              </a>
            ) : (
              <a href="#downloads" className="hero-btn-primary">
                <Download size={18} />
                <span>Lihat Pilihan Download</span>
              </a>
            )}

            <a href="#features" className="hero-btn-secondary" id="hero-explore-features-btn">
              <span>Lihat Modul v6.0</span>
            </a>
          </div>

          {/* Subtle Defender Help Inline Link */}
          <div className="hero-defender-hint">
            <button
              type="button"
              className="hero-defender-inline-btn"
              onClick={() => setIsDefenderModalOpen(true)}
              id="hero-defender-help-btn"
              title="Panduan jika browser atau Windows SmartScreen menampilkan peringatan"
            >
              <ShieldAlert size={14} className="text-amber-accent" />
              <span>Mengalami kendala Windows Defender / SmartScreen? Lihat Solusi</span>
            </button>
          </div>

          {/* Windows Defender Guide Modal */}
          <WindowsDefenderGuideModal
            isOpen={isDefenderModalOpen}
            onClose={() => setIsDefenderModalOpen(false)}
            downloadUrl={recommendedRelease?.downloadUrl}
            filename={recommendedRelease?.filename || 'Data-Overview-Research-Assistant-v6-Setup.exe'}
          />

          {/* Sleek Horizontal Trust Strip */}
          <div className="hero-trust-strip">
            <div className="trust-strip-item">
              <ShieldCheck size={14} className="trust-strip-icon" />
              <span>SQLite Lokal & Panel Privasi</span>
            </div>
            <span className="trust-strip-sep">•</span>
            <div className="trust-strip-item">
              <Cpu size={14} className="trust-strip-icon" />
              <span>Visual Node Editor & ML</span>
            </div>
            <span className="trust-strip-sep">•</span>
            <div className="trust-strip-item">
              <BookOpen size={14} className="trust-strip-icon" />
              <span>SINTA 1-6 & Scopus</span>
            </div>
            <span className="trust-strip-sep">•</span>
            <div className="trust-strip-item">
              <Globe size={14} className="trust-strip-icon" />
              <span>Kaggle, HF & PyPI</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="hero-visual">
          <div className="hero-window-card">
            {/* Window title bar */}
            <div className="window-header">
              <div className="window-title-group">
                <img src="/brand/about-brand-mark.png" alt="DORA" className="window-app-icon" onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }} />
                <span className="window-title-text">DORA {currentVersion}: Data Overview & Research Assistant (PySide6)</span>
              </div>
              <div className="window-controls">
                <span className="win-btn win-min" aria-hidden="true">─</span>
                <span className="win-btn win-max" aria-hidden="true">□</span>
                <span className="win-btn win-close" aria-hidden="true">✕</span>
              </div>
            </div>

            {/* Window Interior Content */}
            <div className="window-body">
              <div className="mock-stat-bar">
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Active Dataset</span>
                  <span className="mock-stat-val">Titanic-Dataset.csv (891x12)</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Readiness Score</span>
                  <span className="mock-stat-val text-accent">82/100 Ready</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Node & ML Engine</span>
                  <span className="mock-stat-val">RandomForest (82.8% Acc)</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Academic Papers</span>
                  <span className="mock-stat-val">SINTA, DOAJ & Scopus</span>
                </div>
              </div>

              {/* Graphical Timeline Mock */}
              <div className="mock-graph-container">
                <div className="mock-graph-header">
                  <span>Overview & Alur Kerja Riset Terpadu (16 Rute Aktif)</span>
                  <span className="mock-time">7/7 WORKFLOW STAGES READY</span>
                </div>
                <div className="mock-timeline-bars">
                  <div className="timeline-track">
                    <div className="track-bar bar-1" style={{ width: '100%' }}>
                      <span>Stage 1: Multi-Format Loader, Profiling & SHA-256 Fingerprint [Done]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-2" style={{ width: '100%' }}>
                      <span>Stage 2: Data Quality, 4 Strategi Drop Missing & Leakage Check [Done]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-5" style={{ width: '96%' }}>
                      <span>Stage 3: Visual Node Editor, Editor Analysis & ML Intelligence [Done]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-3" style={{ width: '92%' }}>
                      <span>Stage 4: Academic Research, Landscape, Gap & Ekspor PDF/Kode [Ready]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status footer inside window */}
              <div className="window-footer-bar">
                <div className="status-indicator">
                  <CheckCircle2 size={14} className="text-accent" />
                  <span>Ekspor Siap: Laporan PDF (A4) & Pipeline (.py / .ipynb / .pkl / .zip)</span>
                </div>
                <span className="engine-meta">SQLite Local • UI Scale Auto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

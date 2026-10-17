import React, { useState } from 'react';
import { Download, ShieldCheck, Sparkles, BookOpen, CheckCircle2, Globe, ShieldAlert } from 'lucide-react';
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

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-release-badge">
            <span className="hero-release-tag">Rilis Resmi {recommendedRelease ? recommendedRelease.version : 'v5.0.0'}</span>
            <span className="hero-release-sep">•</span>
            <span className="hero-release-publisher">{product.name} ({product.developer.name})</span>
          </div>

          <h1 className="hero-title">
            Eksplorasi Dataset, Eksperimen <span className="hero-title-gradient">Machine Learning</span> & Riset Literatur
          </h1>

          <p className="hero-description">
            Aplikasi desktop native PySide6 untuk analisis dataset, pra-pemodelan ML, dan riset literatur ilmiah dalam satu alur kerja terpadu yang cepat dan privat.
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
                  <span className="hero-btn-action">Download untuk Windows</span>
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
              <span>Eksplorasi Fitur</span>
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
            filename={recommendedRelease?.filename || 'DORA-v5.0.0-Setup.exe'}
          />

          {/* Sleek Horizontal Trust Strip */}
          <div className="hero-trust-strip">
            <div className="trust-strip-item">
              <ShieldCheck size={14} className="trust-strip-icon" />
              <span>SQLite Lokal (Zero Leakage)</span>
            </div>
            <span className="trust-strip-sep">•</span>
            <div className="trust-strip-item">
              <Sparkles size={14} className="trust-strip-icon" />
              <span>ML Intelligence</span>
            </div>
            <span className="trust-strip-sep">•</span>
            <div className="trust-strip-item">
              <BookOpen size={14} className="trust-strip-icon" />
              <span>SINTA & Scopus</span>
            </div>
            <span className="trust-strip-sep">•</span>
            <div className="trust-strip-item">
              <Globe size={14} className="trust-strip-icon" />
              <span>Online Fitur & PyPI</span>
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
                <span className="window-title-text">DORA v5.0.0: Data Overview & Research Assistant (PySide6)</span>
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
                  <span className="mock-stat-val">student_research.csv (Parquet/Excel)</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Data Quality</span>
                  <span className="mock-stat-val text-accent">98.2% Cleaned</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">ML Intelligence</span>
                  <span className="mock-stat-val">RandomForest (92.4% F1)</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Academic Papers</span>
                  <span className="mock-stat-val">32 SINTA & Scopus</span>
                </div>
              </div>

              {/* Graphical Timeline Mock */}
              <div className="mock-graph-container">
                <div className="mock-graph-header">
                  <span>ML Pipeline Checklist & Alur Kerja Riset</span>
                  <span className="mock-time">7/7 WORKFLOW STAGES READY</span>
                </div>
                <div className="mock-timeline-bars">
                  <div className="timeline-track">
                    <div className="track-bar bar-1" style={{ width: '100%' }}>
                      <span>Stage 1: Multi-Format Loader & Profiling (CSV/Excel/Parquet) [Completed]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-2" style={{ width: '100%' }}>
                      <span>Stage 2: Data Quality, Missing Values (4 Strategi) & Outlier [Cleaned]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-5" style={{ width: '96%' }}>
                      <span>Stage 3: Pre-Modeling Diagnostics & Leakage Check [Applied]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-3" style={{ width: '92%' }}>
                      <span>Stage 4: ML Intelligence & Academic Literature Verification [Ready]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status footer inside window */}
              <div className="window-footer-bar">
                <div className="status-indicator">
                  <CheckCircle2 size={14} className="text-accent" />
                  <span>Draf Research Report Siap Diekspor ke Dokumen PDF</span>
                </div>
                <span className="engine-meta">SQLite Local Storage • Zero Dataset Leakage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

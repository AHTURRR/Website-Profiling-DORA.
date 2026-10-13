import React from 'react';
import { Download, ArrowRight, ShieldCheck, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import type { ProductInfo, ReleasePackage, SupportedOS } from '../../../types/product.types';
import './Hero.css';

interface HeroProps {
  product: ProductInfo;
  detectedOS?: { os: SupportedOS; displayName: string; defaultArch: string };
  recommendedRelease?: ReleasePackage;
}

export const Hero: React.FC<HeroProps> = ({ product, recommendedRelease }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Versi Resmi {recommendedRelease ? recommendedRelease.version : 'v5.0.0'} Tersedia • Metriks Studio</span>
          </div>

          <h1 className="hero-title">
            Eksplorasi Dataset, Eksperimen <span className="hero-title-gradient">Machine Learning</span> & Riset Literatur
          </h1>

          <p className="hero-description">{product.shortDescription}</p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            {recommendedRelease ? (
              <a
                href={recommendedRelease.downloadUrl}
                className="hero-btn-primary"
                id="hero-primary-download-btn"
                download
              >
                <div className="hero-btn-icon">
                  <Download size={22} />
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
                <Download size={20} />
                <span>Lihat Pilihan Download</span>
              </a>
            )}

            <a href="#features" className="hero-btn-secondary" id="hero-explore-features-btn">
              <span>Eksplorasi Fitur</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Trust & Transparency Badges */}
          <div className="hero-trust-row">
            <div className="hero-trust-item">
              <ShieldCheck size={18} className="trust-icon" />
              <span>100% Analisis Dataset Lokal & Offline</span>
            </div>
            <div className="hero-trust-item">
              <Terminal size={18} className="trust-icon" />
              <span>Embedded Python Notebook & pip</span>
            </div>
            <div className="hero-trust-item">
              <Sparkles size={18} className="trust-icon" />
              <span>Open Source (MIT) • Metriks Studio</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="hero-visual">
          <div className="hero-window-card">
            {/* Window title bar */}
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <span>DORA v5.0.0 — Data Overview & Research Assistant (PySide6)</span>
              </div>
              <div className="window-badge">PIPELINE READY</div>
            </div>

            {/* Window Interior Content */}
            <div className="window-body">
              <div className="mock-stat-bar">
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Active Dataset</span>
                  <span className="mock-stat-val">student_research.csv</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Data Quality</span>
                  <span className="mock-stat-val text-accent">96.4% Clean</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">ML Task</span>
                  <span className="mock-stat-val">Classification</span>
                </div>
                <div className="mock-stat-item">
                  <span className="mock-stat-label">Academic Papers</span>
                  <span className="mock-stat-val">28 Verified</span>
                </div>
              </div>

              {/* Graphical Timeline Mock */}
              <div className="mock-graph-container">
                <div className="mock-graph-header">
                  <span>Pipeline Execution Flow</span>
                  <span className="mock-time">LOCAL RUNTIME</span>
                </div>
                <div className="mock-timeline-bars">
                  <div className="timeline-track">
                    <div className="track-bar bar-1" style={{ width: '100%' }}>
                      <span>Stage 1: Dataset Profiling & Imputation (Median/Mode) [Done]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-2" style={{ width: '85%' }}>
                      <span>Stage 2: Feature Engineering & PyPI Packages (Seaborn/Scikit)</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-5" style={{ width: '92%' }}>
                      <span>Stage 3: ML Intelligence (RandomForest 91.8% F1-Score)</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-4" style={{ width: '78%' }}>
                      <span>Stage 4: Literature Ranking (OpenAlex, SINTA & Scopus)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status footer inside window */}
              <div className="window-footer-bar">
                <div className="status-indicator">
                  <CheckCircle2 size={14} className="text-accent" />
                  <span>Research Report Ready for PDF Export</span>
                </div>
                <span className="engine-meta">SQLite Local DB • Zero Cloud Leaks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

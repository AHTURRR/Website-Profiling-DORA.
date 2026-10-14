import React, { useState } from 'react';
import { Download, ArrowRight, ShieldCheck, Sparkles, BookOpen, CheckCircle2, Globe, ExternalLink, ShieldAlert } from 'lucide-react';
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
                target="_blank"
                rel="noopener noreferrer"
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

            <a
              href={product.links.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
              id="hero-github-repo-btn"
              title="Kunjungi Repositori GitHub"
            >
              <span>Repositori GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Defender & Browser Help Quick Trigger Button */}
          <div className="hero-defender-hint">
            <button
              type="button"
              className="hero-defender-btn"
              onClick={() => setIsDefenderModalOpen(true)}
              id="hero-defender-help-btn"
            >
              <ShieldAlert size={15} className="text-amber-accent" />
              <span>⚠️ Bingung tidak bisa download / terindikasi Windows Defender? Lihat Cara Mengatasinya</span>
            </button>
          </div>

          {/* Windows Defender Guide Modal */}
          <WindowsDefenderGuideModal
            isOpen={isDefenderModalOpen}
            onClose={() => setIsDefenderModalOpen(false)}
            downloadUrl={recommendedRelease?.downloadUrl}
            filename={recommendedRelease?.filename || 'DORA-v5.0.0-Setup.exe'}
          />

          {/* Trust & Transparency Badges */}
          <div className="hero-trust-row">
            <div className="hero-trust-item">
              <Globe size={18} className="trust-icon" />
              <span>Terkoneksi Jaringan Internet</span>
            </div>
            <div className="hero-trust-item">
              <Sparkles size={18} className="trust-icon" />
              <span>ML Intelligence & Estimator Online</span>
            </div>
            <div className="hero-trust-item">
              <BookOpen size={18} className="trust-icon" />
              <span>Riset Literatur & Jurnal Akademik</span>
            </div>
            <div className="hero-trust-item">
              <ShieldCheck size={18} className="trust-icon" />
              <span>Dataset Privat Aman di Komputer</span>
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
              <div className="window-badge">CONNECTED PIPELINE</div>
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
                      <span>Stage 2: Drop Missing Values (4 Strategi) & Outlier Check [Cleaned Version Active]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-5" style={{ width: '95%' }}>
                      <span>Stage 3: Pre-Modeling Diagnostics & Leakage Check [Guidance Applied]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-3" style={{ width: '90%' }}>
                      <span>Stage 4: Dataset Search Kaggle & Hugging Face [Integrated]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-1" style={{ width: '92%' }}>
                      <span>Stage 5: ML Intelligence & Model Evaluation [Empirical Candidates Ready]</span>
                    </div>
                  </div>
                  <div className="timeline-track">
                    <div className="track-bar bar-4" style={{ width: '85%' }}>
                      <span>Stage 6: Academic Research, SINTA Verification & Research Gap [Synthesized]</span>
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

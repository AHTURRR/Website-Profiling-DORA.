import React, { useState, useEffect } from 'react';
import {
  Database,
  Search,
  Cpu,
  Sparkles,
  BookOpen,
  FileText,
  Shield,
  Layers,
  Zap,
  Sliders,
  CheckCircle2,
  Globe,
  Check,
  X,
} from 'lucide-react';
import type { FeatureItem } from '../../../types/product.types';
import './Features.css';

interface FeaturesProps {
  features: FeatureItem[];
}

const PRIMARY_PIPELINE_IDS = [
  'overview-pipeline',
  'multi-format-loader',
  'data-quality-drop',
  'ml-intelligence',
  'literature-search',
];

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  // Lock body scroll and register ESC key listener when modal is active
  useEffect(() => {
    if (selectedFeature) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedFeature(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedFeature]);

  const renderIcon = (iconName: FeatureItem['icon'], size: number = 22) => {
    switch (iconName) {
      case 'database':
        return <Database size={size} className="feature-icon" />;
      case 'search':
        return <Search size={size} className="feature-icon" />;
      case 'cpu':
        return <Cpu size={size} className="feature-icon" />;
      case 'sparkles':
        return <Sparkles size={size} className="feature-icon" />;
      case 'book-open':
        return <BookOpen size={size} className="feature-icon" />;
      case 'file-text':
        return <FileText size={size} className="feature-icon" />;
      case 'globe':
        return <Globe size={size} className="feature-icon" />;
      case 'shield':
        return <Shield size={size} className="feature-icon" />;
      case 'layers':
        return <Layers size={size} className="feature-icon" />;
      case 'zap':
        return <Zap size={size} className="feature-icon" />;
      case 'sliders':
        return <Sliders size={size} className="feature-icon" />;
      default:
        return <Sparkles size={size} className="feature-icon" />;
    }
  };

  return (
    <section id="features" className="section features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <CheckCircle2 size={14} />
            <span>Katalog Fitur Riset Terpadu</span>
          </div>
          <h2 className="section-title">Solusi Terintegrasi Siklus Riset Data & Machine Learning</h2>
          <p className="section-subtitle">
            Klik kartu fitur di bawah ini untuk melihat kemampuan mendalam, alur otomasi, serta integrasi pustaka pada
            aplikasi desktop DORA.
          </p>
        </div>

        {/* Feature 1: Spotlight Master Pipeline Card */}
        {(() => {
          const spotlightFeature = features.find((f) => f.id === 'overview-pipeline') || features[0];
          const remainingFeatures = features.filter((f) => f.id !== spotlightFeature?.id);

          return (
            <>
              {spotlightFeature && (
                <div
                  className="feature-spotlight-card"
                  id={`feature-card-${spotlightFeature.id}`}
                  onClick={() => setSelectedFeature(spotlightFeature)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedFeature(spotlightFeature);
                    }
                  }}
                  aria-haspopup="dialog"
                  aria-label={`Buka detail fitur ${spotlightFeature.title}`}
                >
                  <div className="spotlight-badge-row">
                    <div className="spotlight-icon-wrapper">{renderIcon(spotlightFeature.icon, 24)}</div>
                    <div className="compact-badge-group">
                      <span className="compact-pillar-tag">Modul Utama Terpadu</span>
                      {spotlightFeature.benefitBadge && (
                        <span className="compact-benefit-badge">{spotlightFeature.benefitBadge}</span>
                      )}
                    </div>
                  </div>

                  <div className="spotlight-content-grid">
                    <div className="spotlight-left">
                      <h3 className="spotlight-title">{spotlightFeature.title}</h3>
                      <p className="spotlight-description">
                        {spotlightFeature.description}
                      </p>
                      <div className="spotlight-pipeline-stages">
                        <span className="stage-pill stage-active">01 Multi-Format</span>
                        <span className="stage-arrow">→</span>
                        <span className="stage-pill stage-active">02 Quality Audit</span>
                        <span className="stage-arrow">→</span>
                        <span className="stage-pill stage-active">03 Pre-Modeling</span>
                        <span className="stage-arrow">→</span>
                        <span className="stage-pill stage-active">04 Dataset Search</span>
                        <span className="stage-arrow">→</span>
                        <span className="stage-pill stage-active">05 Editor PyPI</span>
                        <span className="stage-arrow">→</span>
                        <span className="stage-pill stage-active">06 ML Intelligence</span>
                        <span className="stage-arrow">→</span>
                        <span className="stage-pill stage-active">07 SINTA/Scopus</span>
                      </div>
                    </div>

                    <div className="spotlight-right">
                      <div className="spotlight-highlights-list">
                        <div className="spotlight-highlight-item">
                          <Check size={16} className="spotlight-check" />
                          <span>Status Siklus Pipeline 7 Tahapan Terpadu</span>
                        </div>
                        <div className="spotlight-highlight-item">
                          <Check size={16} className="spotlight-check" />
                          <span>Checklist Kesiapan Pra-Pemodelan ML Empiris</span>
                        </div>
                        <div className="spotlight-highlight-item">
                          <Check size={16} className="spotlight-check" />
                          <span>Penyimpanan SQLite Privat Bebas Kebocoran</span>
                        </div>
                      </div>
                      <div className="spotlight-cta-wrapper">
                        <span className="spotlight-cta-btn">
                          <span>Buka Detail Modul Lengkap</span>
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Remaining 9 Compact Feature Cards Grid (3x3 Balanced) */}
              <div className="features-grid">
                {remainingFeatures.map((feature) => {
                  const isPillar = PRIMARY_PIPELINE_IDS.includes(feature.id);
                  return (
                    <div
                      key={feature.id}
                      className={`feature-compact-card ${isPillar ? 'feature-card-pillar' : ''}`}
                      id={`feature-card-${feature.id}`}
                      onClick={() => setSelectedFeature(feature)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedFeature(feature);
                        }
                      }}
                      aria-haspopup="dialog"
                      aria-label={`Buka detail fitur ${feature.title}`}
                    >
                      {/* Top Row: Icon on left, Category Badge on right */}
                      <div className="compact-card-top">
                        <div className="compact-icon-wrapper">{renderIcon(feature.icon, 20)}</div>
                        <div className="compact-badge-group">
                          {isPillar && <span className="compact-pillar-tag">Modul Utama</span>}
                          {feature.benefitBadge && (
                            <span className="compact-benefit-badge">{feature.benefitBadge}</span>
                          )}
                        </div>
                      </div>

                      {/* Title & 1 Brief Sentence */}
                      <div className="compact-card-content">
                        <h3 className="compact-card-title">{feature.title}</h3>
                        <p className="compact-card-summary">
                          {feature.shortSummary || feature.description}
                        </p>
                      </div>

                      {/* Bottom: Trigger indicator "Lihat Detail" */}
                      <div className="compact-card-footer">
                        <span className="compact-detail-trigger">
                          <span>Lihat Detail Modul</span>
                          <span aria-hidden="true" style={{ marginLeft: '4px' }}>→</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })()}
      </div>

      {/* Pop-up Modal with Backdrop Blur & Scale-In Animation */}
      {selectedFeature && (
        <div
          className="feature-modal-overlay"
          onClick={() => setSelectedFeature(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="feature-modal-title"
        >
          <div
            className="feature-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="feature-modal-header">
              <div className="modal-header-main">
                <div className="modal-badge-group">
                  <div className="modal-icon-badge">
                    {renderIcon(selectedFeature.icon, 22)}
                  </div>
                  {selectedFeature.benefitBadge && (
                    <span className="modal-category-badge">
                      {selectedFeature.benefitBadge}
                    </span>
                  )}
                  {selectedFeature.executionScope && (
                    <span
                      className={`modal-scope-pill ${
                        selectedFeature.executionScope.includes('Hybrid')
                          ? 'scope-hybrid'
                          : selectedFeature.executionScope.includes('Online')
                          ? 'scope-online'
                          : 'scope-local'
                      }`}
                    >
                      {selectedFeature.executionScope.includes('Hybrid') ? (
                        <Zap size={13} />
                      ) : selectedFeature.executionScope.includes('Online') ? (
                        <Globe size={13} />
                      ) : (
                        <Shield size={13} />
                      )}
                      <span>{selectedFeature.executionScope}</span>
                    </span>
                  )}
                </div>
                <h3 id="feature-modal-title" className="feature-modal-title">
                  {selectedFeature.title}
                </h3>
              </div>

              <button
                type="button"
                className="feature-modal-close-btn"
                onClick={() => setSelectedFeature(null)}
                aria-label="Tutup detail fitur"
                id="btn-close-feature-modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="feature-modal-body">
              {/* Full Detailed Description Paragraph */}
              <div className="modal-desc-block">
                <span className="modal-block-label">PENJELASAN LENGKAP FITUR</span>
                <p className="modal-full-text">{selectedFeature.description}</p>
              </div>

              {/* Full Capabilities Checklist */}
              {selectedFeature.capabilities && selectedFeature.capabilities.length > 0 && (
                <div className="modal-capabilities-block">
                  <div className="modal-cap-title-row">
                    <CheckCircle2 size={16} className="modal-cap-heading-icon" />
                    <span className="modal-block-label">KEGUNAAN & KEMAMPUAN UTAMA</span>
                  </div>
                  <ul className="modal-capabilities-list">
                    {selectedFeature.capabilities.map((capability, idx) => (
                      <li key={idx} className="modal-capability-item">
                        <div className="modal-check-circle">
                          <Check size={14} className="modal-check-icon-blue" />
                        </div>
                        <span className="modal-capability-text">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="feature-modal-footer">
              <div className="modal-footer-hint">
                <span>Tekan <kbd>ESC</kbd> atau klik di luar kotak untuk menutup</span>
              </div>
              <button
                type="button"
                className="modal-dismiss-btn"
                onClick={() => setSelectedFeature(null)}
              >
                <span>Tutup</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


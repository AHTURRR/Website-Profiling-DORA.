import React, { useState } from 'react';
import { Eye, Maximize2, X, Check, BarChart3, Database, Terminal, Sparkles, BookOpen, Layers, Search, FileText, Sliders } from 'lucide-react';
import type { ProductPreviewImage } from '../../../types/product.types';
import './Preview.css';

interface PreviewProps {
  previews: ProductPreviewImage[];
}

export const Preview: React.FC<PreviewProps> = ({ previews }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const currentPreview = previews[activeTab] || previews[0];

  const getTabIcon = (preview: ProductPreviewImage, index: number) => {
    const tag = preview.tag?.toLowerCase() || '';
    if (tag.includes('overview')) return <BarChart3 size={16} />;
    if (tag.includes('loader') || tag.includes('dataset')) return <Database size={16} />;
    if (tag.includes('quality') || tag.includes('missing')) return <Sliders size={16} />;
    if (tag.includes('search')) return <Search size={16} />;
    if (tag.includes('editor')) return <Terminal size={16} />;
    if (tag.includes('ml')) return <Sparkles size={16} />;
    if (tag.includes('literatur') || tag.includes('paper')) return <BookOpen size={16} />;
    if (tag.includes('laporan') || tag.includes('report')) return <FileText size={16} />;
    if (tag.includes('landscape') || tag.includes('gap')) return <Layers size={16} />;

    switch (index % 6) {
      case 0:
        return <BarChart3 size={16} />;
      case 1:
        return <Database size={16} />;
      case 2:
        return <Terminal size={16} />;
      case 3:
        return <Sparkles size={16} />;
      case 4:
        return <BookOpen size={16} />;
      case 5:
        return <Layers size={16} />;
      default:
        return <BarChart3 size={16} />;
    }
  };

  return (
    <section id="preview" className="section preview-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Eye size={14} />
            <span>Galeri & Tangkapan Layar Asli</span>
          </div>
          <h2 className="section-title">Antarmuka Desktop DORA yang Intuitif & Modern</h2>
          <p className="section-subtitle">
            Jelajahi antarmuka asli DORA (Data Overview & Research Assistant) berbasis PySide6. Seluruh fitur dirancang
            untuk memudahkan eksplorasi data, pengujian model ML, hingga penelusuran publikasi ilmiah.
          </p>
        </div>

        {/* Preview Tabs */}
        <div className="preview-tabs-container">
          <div className="preview-tabs-list" role="tablist" aria-label="Tab Pratinjau Antarmuka">
            {previews.map((preview, idx) => (
              <button
                key={preview.id}
                role="tab"
                aria-selected={activeTab === idx}
                aria-controls={`preview-panel-${preview.id}`}
                id={`preview-tab-${preview.id}`}
                className={`preview-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {getTabIcon(preview, idx)}
                <span>{preview.title}</span>
                {preview.badge && <span className="tab-badge">{preview.badge}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Active Preview Showcase Frame */}
        <div className="preview-showcase-card" id={`preview-panel-${currentPreview.id}`} role="tabpanel">
          <div className="preview-mock-window">
            {/* Window Bar */}
            <div className="mock-window-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="mock-window-title">DORA v5.0.0 — [{currentPreview.title}]</div>
              <button
                type="button"
                className="mock-fullscreen-btn"
                onClick={() => setModalOpen(true)}
                title="Buka perbesaran modal"
                aria-label="Perbesar tampilan tangkapan layar"
              >
                <Maximize2 size={15} />
                <span>Perbesar Gambar</span>
              </button>
            </div>

            {/* Screen Content: Authentic Screenshot or Fallback */}
            <div className="mock-screen-viewport preview-image-viewport">
              {currentPreview.imageSrc ? (
                <div className="preview-image-wrapper" onClick={() => setModalOpen(true)}>
                  <img
                    src={currentPreview.imageSrc}
                    alt={currentPreview.title}
                    className="preview-real-screenshot"
                    loading="lazy"
                  />
                  <div className="image-zoom-overlay">
                    <Maximize2 size={24} />
                    <span>Klik untuk melihat resolusi penuh</span>
                  </div>
                </div>
              ) : (
                <div className="preview-screen-content monitor-screen">
                  <div className="screen-header-row">
                    <div>
                      <h4 className="screen-heading">{currentPreview.title}</h4>
                      <p className="screen-subheading">{currentPreview.caption}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer with caption */}
            <div className="preview-card-footer">
              <div className="preview-caption-text">
                <strong>{currentPreview.title}:</strong> {currentPreview.caption}
              </div>
              <div className="preview-detail-tags">
                {currentPreview.details.map((detail, idx) => (
                  <span key={idx} className="preview-detail-tag">
                    <Check size={12} />
                    <span>{detail}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {modalOpen && (
        <div className="preview-modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="preview-modal-box preview-modal-large" onClick={(e) => e.stopPropagation()}>
            <div className="preview-modal-header">
              <h3>Tangkapan Layar: {currentPreview.title}</h3>
              <button
                type="button"
                className="preview-modal-close"
                onClick={() => setModalOpen(false)}
                aria-label="Tutup modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="preview-modal-body modal-image-body">
              {currentPreview.imageSrc && (
                <img
                  src={currentPreview.imageSrc}
                  alt={currentPreview.title}
                  className="modal-full-screenshot"
                />
              )}
              <p className="modal-caption-text">{currentPreview.caption}</p>
              <div className="modal-tags-row">
                {currentPreview.details.map((item, i) => (
                  <span key={i} className="badge badge-primary">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

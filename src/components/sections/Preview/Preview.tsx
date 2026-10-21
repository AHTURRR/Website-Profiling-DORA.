import React, { useState, useEffect, useRef } from 'react';
import { Eye, Maximize2, X, Check, BarChart3, Database, Terminal, Cpu, BookOpen, Layers, Search, FileText, Sliders, Shield } from 'lucide-react';
import type { ProductPreviewImage } from '../../../types/product.types';
import './Preview.css';

interface PreviewProps {
  previews: ProductPreviewImage[];
}

export const Preview: React.FC<PreviewProps> = ({ previews }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'data' | 'modeling' | 'academic'>('all');
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const tabsListRef = useRef<HTMLDivElement>(null);

  // On narrow screens the tab row scrolls horizontally; keep the active tab centered in view.
  // Only the row's own scrollLeft changes, so the page never jumps vertically.
  useEffect(() => {
    const list = tabsListRef.current;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const activeBtn = list.querySelector<HTMLElement>('.preview-tab-btn.active');
    if (!activeBtn) return;
    const target = activeBtn.offsetLeft - (list.clientWidth - activeBtn.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [activeTab, selectedCategory]);

  useEffect(() => {
    if (modalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setModalOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [modalOpen]);

  const getCategoryForPreview = (idx: number) => {
    if (idx <= 4) return 'data';
    if (idx <= 8) return 'modeling';
    return 'academic';
  };

  const dataCount = previews.filter((_, idx) => getCategoryForPreview(idx) === 'data').length;
  const modelingCount = previews.filter((_, idx) => getCategoryForPreview(idx) === 'modeling').length;
  const academicCount = previews.filter((_, idx) => getCategoryForPreview(idx) === 'academic').length;

  const filteredPreviews = previews
    .map((p, originalIdx) => ({ ...p, originalIdx }))
    .filter((p) => {
      if (selectedCategory === 'all') return true;
      return getCategoryForPreview(p.originalIdx) === selectedCategory;
    });

  const currentPreview = previews[activeTab] || previews[0];

  const handleCategorySelect = (cat: 'all' | 'data' | 'modeling' | 'academic') => {
    setSelectedCategory(cat);
    if (cat === 'all') return;
    const firstOfCat = previews.findIndex((_, idx) => getCategoryForPreview(idx) === cat);
    if (firstOfCat !== -1) {
      setActiveTab(firstOfCat);
    }
  };

  const getTabIcon = (preview: ProductPreviewImage, index: number) => {
    const tag = preview.tag?.toLowerCase() || '';
    if (tag.includes('overview')) return <BarChart3 size={16} />;
    if (tag.includes('loader') || tag.includes('dataset')) return <Database size={16} />;
    if (tag.includes('quality') || tag.includes('missing')) return <Sliders size={16} />;
    if (tag.includes('search')) return <Search size={16} />;
    if (tag.includes('node')) return <Cpu size={16} />;
    if (tag.includes('editor')) return <Terminal size={16} />;
    if (tag.includes('ml')) return <Cpu size={16} />;
    if (tag.includes('literatur') || tag.includes('paper')) return <BookOpen size={16} />;
    if (tag.includes('laporan') || tag.includes('report')) return <FileText size={16} />;
    if (tag.includes('landscape') || tag.includes('gap')) return <Layers size={16} />;
    if (tag.includes('tentang') || tag.includes('privasi')) return <Shield size={16} />;

    switch (index % 6) {
      case 0:
        return <BarChart3 size={16} />;
      case 1:
        return <Database size={16} />;
      case 2:
        return <Terminal size={16} />;
      case 3:
        return <Cpu size={16} />;
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
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Eye size={14} />
            <span>Galeri & Tangkapan Layar Asli v2.0</span>
          </div>
          <h2 className="section-title">Antarmuka Desktop DORA v2.0.0 yang Konsisten & Responsif</h2>
          <p className="section-subtitle">
            Jelajahi tangkapan layar asli yang diambil langsung dari aplikasi DORA (Data Overview & Research Assistant v2.0.0)
            dengan navigasi sidebar 16 rute yang seragam, Visual Node Editor, analisis SHA-256, hingga halaman Tentang & Privasi.
          </p>
        </div>

        {/* Workflow Phase Filter Segments */}
        <div className="preview-category-switcher">
          <button
            type="button"
            className={`category-pill ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategorySelect('all')}
          >
            <span>Semua Layar ({previews.length})</span>
          </button>
          <button
            type="button"
            className={`category-pill ${selectedCategory === 'data' ? 'active' : ''}`}
            onClick={() => handleCategorySelect('data')}
          >
            <Database size={14} />
            <span>Data & Kualitas ({dataCount})</span>
          </button>
          <button
            type="button"
            className={`category-pill ${selectedCategory === 'modeling' ? 'active' : ''}`}
            onClick={() => handleCategorySelect('modeling')}
          >
            <Cpu size={14} />
            <span>Analisis, Node & ML ({modelingCount})</span>
          </button>
          <button
            type="button"
            className={`category-pill ${selectedCategory === 'academic' ? 'active' : ''}`}
            onClick={() => handleCategorySelect('academic')}
          >
            <BookOpen size={14} />
            <span>Literatur, Laporan & Info ({academicCount})</span>
          </button>
        </div>

        {/* Preview Tabs */}
        <div className="preview-tabs-container">
          <div className="preview-tabs-list" role="tablist" aria-label="Tab Pratinjau Antarmuka" ref={tabsListRef}>
            {filteredPreviews.map((preview) => (
              <button
                key={preview.id}
                role="tab"
                aria-selected={activeTab === preview.originalIdx}
                aria-controls={`preview-panel-${preview.id}`}
                id={`preview-tab-${preview.id}`}
                className={`preview-tab-btn ${activeTab === preview.originalIdx ? 'active' : ''}`}
                onClick={() => setActiveTab(preview.originalIdx)}
              >
                {getTabIcon(preview, preview.originalIdx)}
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
              <div className="window-title-group">
                <img src="/brand/about-brand-mark.png" alt="DORA" className="window-app-icon" onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }} />
                <div className="mock-window-title">DORA v2.0.0: [{currentPreview.title}]</div>
              </div>
              <div className="mock-window-actions">
                <button
                  type="button"
                  className="mock-fullscreen-btn"
                  onClick={() => setModalOpen(true)}
                  title="Buka perbesaran modal"
                  aria-label="Perbesar tampilan tangkapan layar"
                >
                  <Maximize2 size={13} />
                  <span>Perbesar Gambar</span>
                </button>
                <div className="window-controls">
                  <span className="win-btn win-min" aria-hidden="true">─</span>
                  <span className="win-btn win-max" aria-hidden="true">□</span>
                  <span className="win-btn win-close" aria-hidden="true">✕</span>
                </div>
              </div>
            </div>

            {/* Screen Content: Authentic Screenshot or Fallback */}
            <div className="mock-screen-viewport preview-image-viewport">
              {currentPreview.imageSrc ? (
                <div className="preview-image-wrapper" onClick={() => setModalOpen(true)}>
                  <img
                    key={currentPreview.id}
                    src={currentPreview.imageSrc}
                    alt={currentPreview.title}
                    className="preview-real-screenshot"
                    loading="eager"
                    decoding="async"
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

import React from 'react';
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
} from 'lucide-react';
import type { FeatureItem } from '../../../types/product.types';
import './Features.css';

interface FeaturesProps {
  features: FeatureItem[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  const renderIcon = (iconName: FeatureItem['icon']) => {
    switch (iconName) {
      case 'database':
        return <Database size={24} className="feature-icon" />;
      case 'search':
        return <Search size={24} className="feature-icon" />;
      case 'cpu':
        return <Cpu size={24} className="feature-icon" />;
      case 'sparkles':
        return <Sparkles size={24} className="feature-icon" />;
      case 'book-open':
        return <BookOpen size={24} className="feature-icon" />;
      case 'file-text':
        return <FileText size={24} className="feature-icon" />;
      case 'globe':
        return <Globe size={24} className="feature-icon" />;
      case 'shield':
        return <Shield size={24} className="feature-icon" />;
      case 'layers':
        return <Layers size={24} className="feature-icon" />;
      case 'zap':
        return <Zap size={24} className="feature-icon" />;
      case 'sliders':
        return <Sliders size={24} className="feature-icon" />;
      default:
        return <Sparkles size={24} className="feature-icon" />;
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
            Dari pembersihan data awal, eksperimen notebook Python lokal, estimasi model prediktif, hingga verifikasi
            reputasi paper dan jurnal akademik dalam satu aplikasi desktop native.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card" id={`feature-card-${feature.id}`}>
              <div className="feature-card-top">
                <div className="feature-icon-wrapper">{renderIcon(feature.icon)}</div>
                {feature.benefitBadge && <span className="feature-benefit-badge">{feature.benefitBadge}</span>}
              </div>

              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>

              {feature.executionScope && (
                <div className="feature-card-footer">
                  <div
                    className={`scope-pill ${
                      feature.executionScope.includes('Hybrid')
                        ? 'scope-hybrid'
                        : feature.executionScope.includes('Online')
                        ? 'scope-online'
                        : 'scope-local'
                    }`}
                  >
                    {feature.executionScope.includes('Hybrid') ? (
                      <Zap size={13} />
                    ) : feature.executionScope.includes('Online') ? (
                      <Globe size={13} />
                    ) : (
                      <Shield size={13} />
                    )}
                    <span>{feature.executionScope}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

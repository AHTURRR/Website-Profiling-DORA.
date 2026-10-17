import React, { useState } from 'react';
import { BookOpen, CheckCircle, Terminal, HelpCircle, AlertCircle } from 'lucide-react';
import type { InstallationGuideByOS } from '../../../types/product.types';
import './InstallationGuide.css';

interface InstallationGuideProps {
  guides: InstallationGuideByOS[];
  initialOS?: string;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ guides }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeGuide = guides[activeTab] || guides[0];

  return (
    <section id="installation" className="section installation-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Panduan Instalasi & Eksekusi</span>
          </div>
          <h2 className="section-title">Langkah Pemasangan Cepat di Windows</h2>
          <p className="section-subtitle">
            Pilih metode pemasangan yang Anda inginkan: Installer Windows Setup otomatis atau menjalankan langsung dari
            source code melalui PowerShell.
          </p>
        </div>

        {/* Method Selector Tabs or Single Badge */}
        {guides.length > 1 ? (
          <div className="guide-os-tabs">
            {guides.map((guide, idx) => (
              <button
                key={idx}
                type="button"
                className={`guide-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <span>{guide.osName}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="guide-single-method-row">
            <span className="guide-method-badge">Metode Resmi: {activeGuide.osName}</span>
          </div>
        )}

        {/* Steps Card */}
        <div className="guide-card">
          <div className="steps-timeline">
            {activeGuide.steps.map((step) => (
              <div key={step.step} className="step-timeline-item">
                <div className="step-number-col">
                  <div className="step-number-circle">{step.step}</div>
                  <div className="step-connector-line"></div>
                </div>

                <div className="step-content-col">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>

                  {step.codeSnippet && (
                    <div className="step-code-box">
                      <Terminal size={14} className="terminal-icon" />
                      <code>{step.codeSnippet}</code>
                    </div>
                  )}

                  {step.warningNote && (
                    <div className="step-warning-box">
                      <AlertCircle size={14} />
                      <span>{step.warningNote}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tips Bar */}
          <div className="guide-tips-grid">
            <div className="tip-box">
              <div className="tip-header">
                <CheckCircle size={16} className="tip-icon-success" />
                <h4>Tip Memulai Pertama Kali</h4>
              </div>
              <p>{activeGuide.firstRunTip}</p>
            </div>

            <div className="tip-box">
              <div className="tip-header">
                <HelpCircle size={16} className="tip-icon-info" />
                <h4>Bantuan Kendala Umum (Troubleshooting)</h4>
              </div>
              <p>{activeGuide.troubleshootingTip}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Cpu, CheckCircle2, HardDrive, Layers, ShieldAlert, Monitor, Globe } from 'lucide-react';
import type { SystemRequirementsItem } from '../../../types/product.types';
import './SystemRequirements.css';

interface SystemRequirementsProps {
  requirements: SystemRequirementsItem[];
}

export const SystemRequirements: React.FC<SystemRequirementsProps> = ({ requirements }) => {
  return (
    <section id="requirements" className="section requirements-section">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Monitor size={14} />
            <span>Kompatibilitas Perangkat</span>
          </div>
          <h2 className="section-title">Persyaratan Sistem Terverifikasi</h2>
          <p className="section-subtitle">
            Pastikan spesifikasi perangkat keras dan sistem operasi Anda memenuhi parameter minimum berikut agar software
            berjalan optimal.
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="requirements-grid reveal-on-scroll reveal-delay-1">
          {requirements.map((req, idx) => (
            <div key={`${req.osKey}-${idx}`} className="requirement-card" id={`req-card-${req.osKey}-${idx}`}>
              <div className="req-header">
                <h3 className="req-os-name">{req.osName}</h3>
                <span className="badge badge-success">Terverifikasi</span>
              </div>

              <div className="req-table">
                <div className="req-row">
                  <div className="req-row-icon">
                    <Monitor size={16} />
                  </div>
                  <div className="req-row-content">
                    <span className="req-label">Sistem Operasi Minimum</span>
                    <span className="req-value">{req.minimumOs}</span>
                    <span className="req-subvalue">Rekomendasi: {req.recommendedOs}</span>
                  </div>
                </div>

                <div className="req-row">
                  <div className="req-row-icon">
                    <Cpu size={16} />
                  </div>
                  <div className="req-row-content">
                    <span className="req-label">Arsitektur & Prosesor</span>
                    <span className="req-value">{req.cpu}</span>
                  </div>
                </div>

                <div className="req-row">
                  <div className="req-row-icon">
                    <Layers size={16} />
                  </div>
                  <div className="req-row-content">
                    <span className="req-label">Memori RAM</span>
                    <span className="req-value">Min: {req.ramMinimum}</span>
                    <span className="req-subvalue">Rekomendasi: {req.ramRecommended}</span>
                  </div>
                </div>

                <div className="req-row">
                  <div className="req-row-icon">
                    <HardDrive size={16} />
                  </div>
                  <div className="req-row-content">
                    <span className="req-label">Ruang Penyimpanan (Disk)</span>
                    <span className="req-value">{req.storage}</span>
                  </div>
                </div>

                {req.network && (
                  <div className="req-row">
                    <div className="req-row-icon">
                      <Globe size={16} />
                    </div>
                    <div className="req-row-content">
                      <span className="req-label">Koneksi Internet (Fitur Online)</span>
                      <span className="req-value req-note">{req.network}</span>
                    </div>
                  </div>
                )}

                {req.extraRuntime && (
                  <div className="req-row">
                    <div className="req-row-icon">
                      <ShieldAlert size={16} />
                    </div>
                    <div className="req-row-content">
                      <span className="req-label">Dependensi Tambahan</span>
                      <span className="req-value req-note">{req.extraRuntime}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <div className="requirements-footer-note">
          <CheckCircle2 size={18} className="note-ok-icon" />
          <span>
            Seluruh paket biner telah melalui pengujian kompatibilitas pada lingkungan virtual dan perangkat keras fisik.
          </span>
        </div>
      </div>
    </section>
  );
};

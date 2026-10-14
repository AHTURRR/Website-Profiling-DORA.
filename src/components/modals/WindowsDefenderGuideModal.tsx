import React, { useEffect } from 'react';
import {
  ShieldAlert,
  X,
  MoreHorizontal,
  Check,
  ChevronDown,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import './WindowsDefenderGuideModal.css';

interface WindowsDefenderGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl?: string;
  filename?: string;
}

export const WindowsDefenderGuideModal: React.FC<WindowsDefenderGuideModalProps> = ({
  isOpen,
  onClose,
  filename = 'DORA-v5.0.0-Setup.exe',
}) => {
  // Lock body scroll and register ESC key handler
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="defender-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="defender-modal-title"
    >
      <div className="defender-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="defender-modal-header">
          <div className="defender-header-content">
            <div className="defender-header-badge">
              <ShieldAlert size={15} />
              <span>PANDUAN SOLUSI RESMI WINDOWS</span>
            </div>
            <h3 id="defender-modal-title" className="defender-modal-title">
              Gagal Unduh / Terblokir Windows Defender & SmartScreen?
            </h3>
            <p className="defender-modal-subtitle">
              Ikuti 5 langkah mudah berikut jika file <code className="filename-chip">{filename}</code> tertahan saat diunduh:
            </p>
          </div>

          <button
            type="button"
            className="defender-close-btn"
            onClick={onClose}
            aria-label="Tutup panduan"
            id="btn-close-defender-modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* 5-Step Simple Vertical Numbered List */}
        <div className="defender-steps-list">
          {/* Step 1 */}
          <div className="defender-step-item">
            <div className="step-number-circle">1</div>
            <div className="step-text-wrap">
              <strong className="step-title">Cek Windows Defender</strong>
              <p className="step-description">
                Pastikan proteksi <strong>Windows Defender</strong> sudah dicek/diizinkan jika menahan unduhan.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="defender-step-item">
            <div className="step-number-circle">2</div>
            <div className="step-text-wrap">
              <strong className="step-title">Peringatan di Browser</strong>
              <p className="step-description">
                Saat di menu <strong>Downloads</strong> muncul pesan:
              </p>
              <div className="step-quote-box">
                <AlertTriangle size={15} className="quote-icon" />
                <span>
                  &ldquo;<strong>{filename}</strong> isn&apos;t commonly downloaded. Make sure you trust {filename} before you open it.&rdquo;
                </span>
              </div>
              <p className="step-sub-note">Arahkan kursor ke file tersebut.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="defender-step-item">
            <div className="step-number-circle">3</div>
            <div className="step-text-wrap">
              <strong className="step-title">Klik Titik Tiga (⋯)</strong>
              <p className="step-description">
                Klik ikon <span className="step-action-pill"><MoreHorizontal size={14} /> Titik Tiga (⋯)</span> (More actions) di samping peringatan file.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="defender-step-item">
            <div className="step-number-circle">4</div>
            <div className="step-text-wrap">
              <strong className="step-title">Pilih Keep</strong>
              <p className="step-description">
                Klik opsi <span className="step-action-pill pill-blue"><Check size={14} /> &quot;Keep&quot;</span> (Tetap simpan).
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="defender-step-item">
            <div className="step-number-circle">5</div>
            <div className="step-text-wrap">
              <strong className="step-title">Pilih Keep Anyway</strong>
              <p className="step-description">
                Klik ikon <span className="step-action-pill"><ChevronDown size={14} /> Panah Bawah (∨ / Show more)</span> lalu pilih <span className="step-action-pill pill-green"><ShieldCheck size={14} /> &quot;Keep anyway&quot;</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer: Simple single primary button */}
        <div className="defender-modal-footer">
          <button
            type="button"
            className="defender-primary-btn"
            onClick={onClose}
            id="btn-dismiss-defender-guide"
          >
            Mengerti / Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

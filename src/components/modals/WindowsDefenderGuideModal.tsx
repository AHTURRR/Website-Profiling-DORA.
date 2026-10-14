import React, { useEffect, useState } from 'react';
import {
  ShieldAlert,
  X,
  CheckCircle2,
  AlertTriangle,
  Download,
  Terminal,
  Copy,
  Check,
  ChevronDown,
  MoreHorizontal,
  ExternalLink,
  ShieldCheck,
  Info,
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
  downloadUrl = 'https://github.com/NezzyGremory/Dataset-Research/releases/download/v5.0.0/DatasetResearch-v5.0.0-Setup.exe',
  filename = 'DORA-v5.0.0-Setup.exe',
}) => {
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  // Lock body scroll when modal is open
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

  const handleCopyCli = () => {
    const cliCommand = `curl.exe -L -o "${filename}" "${downloadUrl}"`;
    navigator.clipboard.writeText(cliCommand).then(() => {
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2500);
    });
  };

  const steps = [
    {
      number: 1,
      title: 'Cek Pengaturan Windows Defender',
      summary: 'Pastikan Windows Defender / SmartScreen memberi izin unduhan berkas.',
      badgeLabel: 'Langkah 1: Defender Check',
      content: (
        <div className="guide-step-body">
          <p>
            Pastikan pengaturan proteksi <strong>Windows Defender</strong> (khususnya <em>Reputation-based protection</em>)
            sudah dicek atau diizinkan sementara jika sistem menahan proses unduhan file dari internet.
          </p>
          <div className="guide-callout-info">
            <Info size={16} className="callout-icon" />
            <span>
              <strong>Mengapa terdeteksi?</strong> DORA adalah aplikasi riset open-source non-profit berlisensi MIT.
              Aplikasi ini belum membeli sertifikat digital EV (Extended Validation) komersial tahunan berharga ribuan dolar,
              sehingga Windows mengkategorikannya sebagai <em>&quot;Unrecognized Publisher&quot;</em> meskipun 100% aman dan source code-nya terbuka di GitHub.
            </span>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      title: 'Kenali Peringatan di Browser',
      summary: 'Pesan standar keamanan browser saat mengunduh berkas rilis baru.',
      badgeLabel: 'Langkah 2: Browser Warning',
      content: (
        <div className="guide-step-body">
          <p>
            Jika pada panel <strong>Downloads</strong> di browser (Edge, Chrome, atau Brave) muncul pesan peringatan:
          </p>
          <div className="browser-warning-quote">
            <AlertTriangle size={18} className="quote-icon" />
            <span>
              &ldquo;<strong className="highlight-file">{filename}</strong> isn&apos;t commonly downloaded. Make sure you trust <strong className="highlight-file">{filename}</strong> before you open it.&rdquo;
            </span>
          </div>
          <p className="step-note">
            <strong>Jangan panik atau batalkan unduhan!</strong> File tidak corrupt atau berbahaya; ini adalah filter reputasi otomatis browser untuk file yang baru dirilis.
          </p>
        </div>
      ),
    },
    {
      number: 3,
      title: 'Arahkan Kursor & Klik Ikon Titik Tiga (⋯)',
      summary: 'Buka menu tindakan lanjutan pada item unduhan.',
      badgeLabel: 'Langkah 3: More Actions',
      content: (
        <div className="guide-step-body">
          <p>
            Arahkan kursor Anda tepat ke atas pesan peringatan file <span className="highlight-file">{filename}</span> di bilah unduhan browser,
            lalu klik ikon <span className="highlight-badge highlight-amber"><MoreHorizontal size={14} /> Titik Tiga (⋯)</span> (opsi <em>More actions</em> / tindakan lainnya).
          </p>
          <div className="guide-visual-hint">
            <div className="mock-browser-row">
              <div className="mock-file-icon">EXE</div>
              <div className="mock-file-info">
                <span className="mock-filename">{filename}</span>
                <span className="mock-file-warn">File isn&apos;t commonly downloaded</span>
              </div>
              <div className="mock-actions">
                <span className="mock-dots-btn active-pulse">
                  <MoreHorizontal size={16} />
                  <span className="mock-pointer-tag">Klik di sini 👆</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 4,
      title: 'Pilih Opsi "Keep" (Tetap Simpan)',
      summary: 'Konfirmasikan ke browser bahwa Anda ingin mempertahankan file.',
      badgeLabel: 'Langkah 4: Pilih Keep',
      content: (
        <div className="guide-step-body">
          <p>
            Pada menu pop-up kecil yang muncul dari ikon titik tiga, klik opsi bertuliskan{' '}
            <span className="highlight-badge highlight-blue"><Check size={14} /> Keep</span> (atau <em>Tetap simpan</em> dalam bahasa Indonesia).
          </p>
          <div className="guide-menu-preview">
            <div className="mock-dropdown-menu">
              <div className="mock-menu-item active-keep">
                <CheckCircle2 size={15} />
                <span><strong>Keep</strong> (Tetap simpan)</span>
                <span className="mock-arrow-tag">← Klik Ini</span>
              </div>
              <div className="mock-menu-item muted">
                <span>Delete from history</span>
              </div>
              <div className="mock-menu-item muted">
                <span>Report this file as safe</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 5,
      title: 'Klik Panah Bawah (∨) lalu Pilih "Keep anyway"',
      summary: 'Langkah final konfirmasi agar berkas selesai disimpan di komputer Anda.',
      badgeLabel: 'Langkah 5: Final Keep Anyway',
      content: (
        <div className="guide-step-body">
          <p>
            Setelah mengklik <em>Keep</em>, browser akan memunculkan dialog konfirmasi lanjutan keamanan.
            Klik tautan atau ikon <span className="highlight-badge highlight-purple"><ChevronDown size={14} /> Panah Bawah (∨ / Show more)</span>,
            kemudian pilih opsi <span className="highlight-badge highlight-green"><ShieldCheck size={14} /> Keep anyway</span> (atau <em>Tetap simpan</em>).
          </p>
          <div className="guide-final-success-box">
            <CheckCircle2 size={24} className="success-icon" />
            <div>
              <strong>Unduhan Selesai & Berhasil Disimpan!</strong>
              <span>
                File <span className="highlight-file">{filename}</span> kini telah tersimpan utuh di folder <em>Downloads</em> Anda dan siap dijalankan dengan klik ganda.
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="defender-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="defender-modal-title">
      <div className="defender-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Glow Ambient Decoration */}
        <div className="defender-glow-accent"></div>

        {/* Modal Header */}
        <div className="defender-modal-header">
          <div className="defender-header-left">
            <div className="defender-icon-badge">
              <ShieldAlert size={24} />
            </div>
            <div>
              <div className="defender-header-tag">
                <AlertTriangle size={13} />
                <span>PANDUAN SOLUSI RESMI WINDOWS</span>
              </div>
              <h3 id="defender-modal-title" className="defender-title">
                Gagal Unduh / Terblokir Windows Defender & SmartScreen?
              </h3>
              <p className="defender-subtitle">
                Ikuti 5 langkah terstruktur berikut jika file <code className="code-filename">{filename}</code> tertahan saat diunduh.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="defender-close-btn"
            onClick={onClose}
            aria-label="Tutup panduan"
            id="close-defender-guide-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Navigation Tabs */}
        <div className="defender-tabs-nav">
          {steps.map((st) => (
            <button
              key={st.number}
              type="button"
              className={`defender-tab-btn ${activeStepTab === st.number ? 'tab-active' : ''}`}
              onClick={() => setActiveStepTab(st.number)}
              id={`defender-tab-${st.number}`}
            >
              <span className="tab-number">{st.number}</span>
              <span className="tab-text">{st.badgeLabel}</span>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Content */}
        <div className="defender-content-card">
          <div className="step-card-header">
            <div className="step-badge-counter">Langkah {activeStepTab} dari 5</div>
            <h4 className="step-card-title">{steps[activeStepTab - 1].title}</h4>
          </div>

          <div className="step-card-body">{steps[activeStepTab - 1].content}</div>

          {/* Stepper Footer Controls */}
          <div className="step-card-footer">
            <button
              type="button"
              className="step-nav-btn prev-btn"
              disabled={activeStepTab === 1}
              onClick={() => setActiveStepTab((prev) => Math.max(1, prev - 1))}
            >
              ← Langkah Sebelumnya
            </button>

            <div className="step-dots-indicator">
              {steps.map((s) => (
                <span
                  key={s.number}
                  className={`dot-indicator ${activeStepTab === s.number ? 'dot-active' : ''}`}
                  onClick={() => setActiveStepTab(s.number)}
                />
              ))}
            </div>

            {activeStepTab < 5 ? (
              <button
                type="button"
                className="step-nav-btn next-btn"
                onClick={() => setActiveStepTab((prev) => Math.min(5, prev + 1))}
              >
                Langkah Selanjutnya →
              </button>
            ) : (
              <button type="button" className="step-nav-btn finish-btn" onClick={onClose}>
                <Check size={16} />
                <span>Paham, Tutup Panduan</span>
              </button>
            )}
          </div>
        </div>

        {/* Alternative CLI Option (cURL PowerShell) */}
        <div className="defender-cli-box">
          <div className="cli-box-header">
            <Terminal size={16} className="cli-icon" />
            <span>Alternatif Praktis: Unduh via PowerShell (Bypass Browser Block)</span>
          </div>
          <p className="cli-box-desc">
            Buka <strong>Windows PowerShell</strong>, salin perintah di bawah ini dan tekan <kbd>Enter</kbd> untuk mengunduh langsung tanpa intervensi browser:
          </p>
          <div className="cli-snippet-wrapper">
            <code>curl.exe -L -o &quot;{filename}&quot; &quot;{downloadUrl}&quot;</code>
            <button
              type="button"
              className="cli-copy-btn"
              onClick={handleCopyCli}
              title="Salin perintah PowerShell"
            >
              {copiedSnippet ? (
                <>
                  <Check size={14} className="text-green-accent" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Salin Perintah</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="defender-modal-footer">
          <a
            href={downloadUrl}
            className="defender-retry-btn"
            id="modal-retry-download-btn"
            download
          >
            <Download size={16} />
            <span>Coba Unduh Ulang ({filename})</span>
          </a>

          <a
            href="https://github.com/NezzyGremory/Dataset-Research/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="defender-mirror-btn"
          >
            <span>Buka Mirror GitHub Releases</span>
            <ExternalLink size={14} />
          </a>

          <button type="button" className="defender-close-text-btn" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

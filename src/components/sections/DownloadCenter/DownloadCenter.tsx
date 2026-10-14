import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  Shield,
  FileCode,
  Calendar,
  HardDrive,
  ExternalLink,
  AlertCircle,
  Terminal,
  ShieldAlert,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';
import type { ReleasePackage, ProductInfo } from '../../../types/product.types';
import { WindowsDefenderGuideModal } from '../../modals/WindowsDefenderGuideModal';
import './DownloadCenter.css';

interface DownloadCenterProps {
  product: ProductInfo;
  releases: ReleasePackage[];
  userOS: string;
}

export const DownloadCenter: React.FC<DownloadCenterProps> = ({ product, releases }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'installer' | 'source'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeDownloadNotice, setActiveDownloadNotice] = useState<string | null>(null);
  const [isDefenderModalOpen, setIsDefenderModalOpen] = useState(false);

  const filteredReleases =
    selectedFilter === 'all'
      ? releases
      : selectedFilter === 'installer'
      ? releases.filter((rel) => rel.filename.endsWith('.exe'))
      : releases.filter((rel) => rel.filename.endsWith('.zip') || rel.filename.endsWith('.tar.gz'));

  const copyChecksum = (checksum: string, id: string) => {
    navigator.clipboard.writeText(checksum);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleDownloadClick = (filename: string) => {
    setActiveDownloadNotice(filename);
    setTimeout(() => {
      setActiveDownloadNotice(null);
    }, 8000);
  };

  return (
    <section id="downloads" className="section download-center-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Download size={14} />
            <span>Pusat Unduhan Resmi</span>
          </div>
          <h2 className="section-title">Unduh Installer Resmi Terverifikasi</h2>
          <p className="section-subtitle">
            Dapatkan paket rilis resmi {product.name} langsung dari server distribusi resmi. Seluruh file dilengkapi
            checksum SHA256 untuk verifikasi integritas biner.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="download-filter-bar">
          <div className="filter-buttons" role="group" aria-label="Filter Berdasarkan Paket Rilis">
            <button
              type="button"
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              Semua Paket Rilis ({releases.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedFilter === 'installer' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('installer')}
            >
              Windows Setup (.exe)
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedFilter === 'source' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('source')}
            >
              Source Code (.zip)
            </button>
          </div>

          {product.links.releaseNotes && (
            <a
              href={product.links.releaseNotes}
              target="_blank"
              rel="noopener noreferrer"
              className="changelog-link"
            >
              <ExternalLink size={14} />
              <span>Changelog & Catatan Rilis</span>
            </a>
          )}
        </div>

        {/* Quick Defender & Browser Help Banner */}
        <div
          className="defender-guide-trigger-banner"
          onClick={() => setIsDefenderModalOpen(true)}
          id="btn-open-defender-guide-banner"
          role="button"
          tabIndex={0}
        >
          <div className="trigger-banner-left">
            <div className="trigger-badge-wrap">
              <span className="trigger-warning-badge">
                <AlertTriangle size={13} />
                <span>PANDUAN SOLUSI RESMI</span>
              </span>
              <strong className="trigger-heading">⚠️ Bingung tidak bisa download / terindikasi Windows Defender? Lihat Cara Mengatasinya</strong>
            </div>
            <p className="trigger-subtext">
              Klik di sini untuk <strong>Panduan 5 Langkah Mudah</strong> mengatasi peringatan browser (&quot;isn&apos;t commonly downloaded&quot;) dan cara klik tombol <span className="highlight-pill">Titik Tiga (⋯)</span> &gt; <span className="highlight-pill">Keep</span> &gt; <span className="highlight-pill">Keep anyway</span>.
            </p>
          </div>
          <button type="button" className="trigger-guide-btn" onClick={(e) => { e.stopPropagation(); setIsDefenderModalOpen(true); }}>
            <ShieldAlert size={16} />
            <span>Buka Panduan Solusi</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Releases Cards Grid */}
        <div className="releases-grid">
          {filteredReleases.map((release) => (
            <div
              key={release.id}
              className={`release-card ${release.isPrimaryForPlatform ? 'release-recommended' : ''}`}
              id={`release-${release.id}`}
            >
              {release.isPrimaryForPlatform && (
                <div className="release-badge-tag">Rekomendasi Utama Windows</div>
              )}

              <div className="release-card-header">
                <div>
                  <h3 className="release-title">{release.osName}</h3>
                  <div className="release-arch-pill">{release.architecture}</div>
                </div>
                <div className="release-version-pill">{release.version}</div>
              </div>

              {/* Release Metadata */}
              <div className="release-meta-list">
                <div className="meta-item">
                  <FileCode size={14} className="meta-icon" />
                  <span className="meta-label">Nama File:</span>
                  <code className="meta-code">{release.filename}</code>
                </div>
                <div className="meta-item">
                  <HardDrive size={14} className="meta-icon" />
                  <span className="meta-label">Ukuran:</span>
                  <span className="meta-value">{release.fileSize}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={14} className="meta-icon" />
                  <span className="meta-label">Tanggal Rilis:</span>
                  <span className="meta-value">{release.releaseDate}</span>
                </div>
              </div>

              {release.notes && <p className="release-notes-text">{release.notes}</p>}

              {/* SHA256 Checksum */}
              {release.checksumSha256 && (
                <div className="checksum-container">
                  <div className="checksum-header">
                    <span className="checksum-title">
                      <Shield size={12} />
                      <span>SHA256 Checksum:</span>
                    </span>
                    <button
                      type="button"
                      className="copy-checksum-btn"
                      onClick={() => copyChecksum(release.checksumSha256!, release.id)}
                      title="Salin checksum ke clipboard"
                      aria-label="Salin checksum SHA256"
                    >
                      {copiedId === release.id ? (
                        <>
                          <Check size={12} />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Salin Hash</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="checksum-hash" title={release.checksumSha256}>
                    {release.checksumSha256}
                  </div>
                </div>
              )}

              {/* Download Action */}
              <div className="release-action">
                <a
                  href={release.downloadUrl}
                  className="download-pkg-btn"
                  id={`btn-download-${release.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  title={`Download ${release.filename}`}
                  onClick={() => handleDownloadClick(release.filename)}
                >
                  <Download size={18} />
                  <span>{release.buttonLabel || `Download ${release.filename}`}</span>
                </a>

                <button
                  type="button"
                  className="card-defender-help-btn"
                  onClick={() => setIsDefenderModalOpen(true)}
                  title="Klik untuk panduan jika unduhan tertahan Windows Defender"
                >
                  <ShieldAlert size={13} className="text-amber-accent" />
                  <span>⚠️ Bingung tidak bisa download / terindikasi Windows Defender? Lihat Cara Mengatasinya</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Download Started Feedback Alert */}
        {activeDownloadNotice && (
          <div className="download-started-alert" role="status">
            <Check size={18} className="started-icon" />
            <div className="started-content">
              <div className="started-top-line">
                <strong>Permintaan unduh {activeDownloadNotice} telah dikirim ke browser!</strong>
                <button
                  type="button"
                  className="alert-guide-action-btn"
                  onClick={() => setIsDefenderModalOpen(true)}
                  id="btn-alert-open-defender"
                >
                  <ShieldAlert size={14} />
                  <span>File Tertahan / Windows Defender? Klik Panduan</span>
                </button>
              </div>
              <span className="started-subtext">
                Jika browser menampilkan peringatan &quot;isn&apos;t commonly downloaded&quot;, silakan klik tombol panduan di atas atau gunakan{' '}
                <a href={product.links.releaseNotes} target="_blank" rel="noopener noreferrer">
                  Mirror Resmi GitHub Releases
                </a>.
              </span>
            </div>
          </div>
        )}

        {/* Troubleshooting / Solusi Jika Tidak Berhasil Di-Download */}
        <div className="download-troubleshoot-card">
          <div className="troubleshoot-header">
            <AlertCircle size={20} className="troubleshoot-icon" />
            <div>
              <h4 className="troubleshoot-title">Tidak Berhasil Mengunduh Berkas? (Solusi & Mirror Alternatif)</h4>
              <p className="troubleshoot-desc">
                Jika berkas gagal diunduh, terputus, atau browser menampilkan peringatan keamanan:
              </p>
            </div>
          </div>
          <div className="troubleshoot-options-grid">
            <div className="troubleshoot-item">
              <span className="troubleshoot-badge">Opsi 1</span>
              <div className="troubleshoot-item-body">
                <strong>Unduh via Halaman GitHub Releases Resmi</strong>
                <p>Buka mirror rilis GitHub secara langsung untuk memilih file biner atau aset rilis lainnya.</p>
                <a
                  href={product.links.releaseNotes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="troubleshoot-btn-link"
                >
                  <span>Buka Halaman Rilis GitHub</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="troubleshoot-item">
              <span className="troubleshoot-badge">Opsi 2</span>
              <div className="troubleshoot-item-body">
                <strong>Unduh Cepat via PowerShell / Terminal</strong>
                <p>Salin dan jalankan perintah cURL di Windows PowerShell jika browser memblokir:</p>
                <div className="troubleshoot-cli-snippet">
                  <Terminal size={13} className="cli-icon" />
                  <code>curl.exe -L -o DORA-v5.0.0-Setup.exe {releases[0]?.downloadUrl}</code>
                </div>
              </div>
            </div>

            <div className="troubleshoot-item">
              <span className="troubleshoot-badge">Opsi 3</span>
              <div className="troubleshoot-item-body">
                <strong>Peringatan SmartScreen / Browser Block</strong>
                <p>
                  Jika muncul &quot;isn&apos;t commonly downloaded&quot;, klik ikon <strong>Titik Tiga (⋯)</strong> &gt; <em>Keep</em> &gt; <em>Keep anyway</em>.
                </p>
                <button
                  type="button"
                  className="troubleshoot-btn-link troubleshoot-modal-trigger"
                  onClick={() => setIsDefenderModalOpen(true)}
                  id="btn-troubleshoot-open-defender"
                >
                  <ShieldAlert size={14} />
                  <span>Buka Panduan Bergambar 5 Langkah</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Verification Notice */}
        <div className="download-security-notice">
          <Shield size={20} className="notice-icon" />
          <div className="notice-content">
            <h4>Jaminan Integritas & Keamanan Unduhan</h4>
            <p>
              Seluruh berkas installer resmi didistribusikan langsung melalui rilis GitHub resmi Metriks Studio.
              Verifikasi kesesuaian nilai SHA256 hash di Windows PowerShell menggunakan perintah:{' '}
              <code>Get-FileHash [nama_file] -Algorithm SHA256</code> atau di Command Prompt{' '}
              <code>certutil -hashfile [nama_file] SHA256</code>.
            </p>
          </div>
        </div>

        {/* Windows Defender / Browser Download Guide Pop-Up Modal */}
        <WindowsDefenderGuideModal
          isOpen={isDefenderModalOpen}
          onClose={() => setIsDefenderModalOpen(false)}
          downloadUrl={releases[0]?.downloadUrl}
          filename={releases[0]?.filename}
        />
      </div>
    </section>
  );
};

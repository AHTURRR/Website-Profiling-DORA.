import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  Shield,
  FileCode,
  Calendar,
  HardDrive,
  AlertCircle,
  Terminal,
  ShieldAlert,
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
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [activeDownloadNotice, setActiveDownloadNotice] = useState<string | null>(null);
  const [isDefenderModalOpen, setIsDefenderModalOpen] = useState(false);

  const copyChecksum = (checksum: string, id: string) => {
    navigator.clipboard.writeText(checksum);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const copyCurlCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCurl(true);
    setTimeout(() => {
      setCopiedCurl(false);
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
            Dapatkan installer resmi {product.name} untuk Windows. Seluruh file dilengkapi checksum SHA256 untuk
            verifikasi integritas biner.
          </p>
        </div>

        {/* Releases Cards Grid */}
        <div className="releases-grid">
          {releases.map((release) => (
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

                {/* Clean, single helper text button below download button */}
                <button
                  type="button"
                  className="release-helper-link"
                  onClick={() => setIsDefenderModalOpen(true)}
                  title="Buka panduan jika unduhan tertahan Windows Defender atau browser"
                >
                  <ShieldAlert size={14} className="helper-link-icon" />
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
              <strong>Permintaan unduh {activeDownloadNotice} telah dikirim ke browser.</strong>
              <span className="started-subtext">
                Jika berkas tertahan di menu Downloads browser, silakan gunakan Opsi 2 (PowerShell) atau Opsi 3 di bawah ini.
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
            {/* Opsi 1 */}
            <div className="troubleshoot-item">
              <span className="troubleshoot-badge">Opsi 1</span>
              <div className="troubleshoot-item-body">
                <div className="troubleshoot-item-content">
                  <strong>Unduh Berkas Langsung (Direct Download)</strong>
                  <p>Unduh berkas instalasi biner .exe secara langsung melalui tautan unduh utama tanpa jeda.</p>
                </div>
                <div className="troubleshoot-item-action">
                  <a
                    href={releases[0]?.downloadUrl}
                    className="troubleshoot-btn-link"
                    download
                    onClick={() => handleDownloadClick(releases[0]?.filename || 'DORA-v5.0.0-Setup.exe')}
                  >
                    <span>Unduh Berkas Langsung (.exe)</span>
                    <Download size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Opsi 2 */}
            <div className="troubleshoot-item">
              <span className="troubleshoot-badge">Opsi 2</span>
              <div className="troubleshoot-item-body">
                <div className="troubleshoot-item-content">
                  <strong>Unduh Cepat via PowerShell / Terminal</strong>
                  <p>Salin dan jalankan perintah cURL di Windows PowerShell jika browser memblokir:</p>
                </div>
                <div className="troubleshoot-cli-snippet">
                  <div className="cli-code-text">
                    <Terminal size={13} className="cli-icon" />
                    <code>curl.exe -L -o DORA-v5.0.0-Setup.exe {releases[0]?.downloadUrl}</code>
                  </div>
                  <button
                    type="button"
                    className="cli-inline-copy-btn"
                    onClick={() => copyCurlCommand(`curl.exe -L -o DORA-v5.0.0-Setup.exe "${releases[0]?.downloadUrl}"`)}
                    title="Salin perintah cURL"
                  >
                    {copiedCurl ? (
                      <>
                        <Check size={12} />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Salin Perintah</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Opsi 3 */}
            <div className="troubleshoot-item">
              <span className="troubleshoot-badge">Opsi 3</span>
              <div className="troubleshoot-item-body">
                <div className="troubleshoot-item-content">
                  <strong>Peringatan SmartScreen / Browser Block</strong>
                  <p>
                    Jika muncul pesan peringatan, klik ikon <strong>Titik Tiga (⋯)</strong> &gt; <em>Keep</em> &gt; <em>Keep anyway</em>.
                  </p>
                </div>
                <div className="troubleshoot-item-action">
                  <button
                    type="button"
                    className="troubleshoot-btn-link troubleshoot-modal-trigger"
                    onClick={() => setIsDefenderModalOpen(true)}
                    id="btn-troubleshoot-open-defender"
                  >
                    <ShieldAlert size={14} />
                    <span>Buka Panduan 5 Langkah</span>
                  </button>
                </div>
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
              Seluruh berkas installer resmi didistribusikan secara aman dan terverifikasi oleh Metriks Studio.
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
